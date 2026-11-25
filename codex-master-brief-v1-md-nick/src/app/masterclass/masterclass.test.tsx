import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import MasterclassPage from "./page";
import { Hero } from "./components/Hero";
import { IntroLesson } from "./components/IntroLesson";

vi.mock("next/image", () => ({ default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { preload?: boolean }) => {
  const clean = { ...props }; delete clean.preload; return React.createElement("img", { alt: "", ...clean });
} }));
vi.mock("next/script", () => ({ default: () => null }));

const stubReducedMotion = (matches: boolean) =>
  vi.stubGlobal("matchMedia", () => ({ matches, addEventListener: () => undefined, removeEventListener: () => undefined }));

afterEach(() => { cleanup(); vi.useRealTimers(); vi.unstubAllGlobals(); vi.restoreAllMocks(); });

describe("Masterclass page", () => {
  it("announces the workshop until the end of 7 January 2027 in Prague", () => {
    vi.useFakeTimers({ now: new Date("2027-01-07T22:59:59Z") });
    render(<MasterclassPage />);
    expect(screen.getByText("↗ LIVE WORKSHOP · JANUARY 7, 2027")).toBeInTheDocument();
    expect(screen.getByText("Join the live workshop")).toBeInTheDocument();
  });

  it("changes to the evergreen copy after the workshop day", () => {
    vi.useFakeTimers({ now: new Date("2027-01-07T23:00:00Z") });
    render(<MasterclassPage />);
    expect(screen.getByText("KEEP LEARNING WITH NICK")).toBeInTheDocument();
    expect(screen.getByText("Continue learning")).toBeInTheDocument();
    expect(screen.queryByText(/January 7/i)).toBeNull();
  });

  it("posts the form to Flodesk with the fields that Flodesk reads", () => {
    render(<MasterclassPage />);
    const form = screen.getByLabelText("Email address").closest("form")!;
    expect(form).toHaveAttribute("action", "https://form.flodesk.com/forms/6b049cacf2bf2efd7c1729b5/submit");
    expect(screen.getByLabelText("Email address")).toBeRequired();
    expect(screen.getByRole("checkbox", { name: /tutorials and offers/ })).not.toBeChecked();
    expect(form.querySelector('input[name="confirm_email_address"]')).not.toBeVisible();
  });
});

describe("Masterclass hero video", () => {
  it("starts the video and lets the visitor pause it", async () => {
    const play = vi.spyOn(HTMLMediaElement.prototype, "play");
    const pause = vi.spyOn(HTMLMediaElement.prototype, "pause");
    const { container } = render(<Hero />);
    const video = container.querySelector("video")!;
    expect(play).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("button")).toBeNull();

    fireEvent.playing(video);
    expect(video).toHaveClass("is-playing");
    Object.defineProperty(video, "paused", { configurable: true, value: false });
    await userEvent.click(screen.getByRole("button", { name: "Pause background video" }));
    expect(pause).toHaveBeenCalledTimes(1);

    fireEvent.pause(video);
    expect(screen.getByRole("button", { name: "Play background video" })).toHaveTextContent("▶ Play video");
  });

  it("does not start the video for visitors who prefer reduced motion", () => {
    stubReducedMotion(true);
    const play = vi.spyOn(HTMLMediaElement.prototype, "play");
    render(<Hero />);
    expect(play).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Play background video" })).toBeVisible();
  });

  it("hides the control when the video cannot load", () => {
    const { container } = render(<Hero />);
    const video = container.querySelector("video")!;
    fireEvent.playing(video);
    fireEvent.error(video);
    expect(video).not.toHaveClass("is-playing");
    expect(screen.queryByRole("button")).toBeNull();
  });
});

describe("Masterclass intro lesson", () => {
  it("offers a retry after a load error and hides it when playback starts", async () => {
    const load = vi.spyOn(HTMLMediaElement.prototype, "load").mockImplementation(() => undefined);
    const play = vi.spyOn(HTMLMediaElement.prototype, "play");
    const { container } = render(<IntroLesson />);
    const video = container.querySelector("video")!;
    expect(screen.queryByRole("button", { name: "Try again" })).toBeNull();

    fireEvent.error(video);
    await userEvent.click(screen.getByRole("button", { name: "Try again" }));
    expect(load).toHaveBeenCalledTimes(1);
    expect(play).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("button", { name: "Try again" })).toBeNull();

    fireEvent.error(video);
    expect(screen.getByRole("button", { name: "Try again" })).toBeVisible();
    fireEvent.playing(video);
    expect(screen.queryByRole("button", { name: "Try again" })).toBeNull();
  });
});
