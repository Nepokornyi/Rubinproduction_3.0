import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { BeforeAfterCarousel } from "@/components/services/BeforeAfterCarousel";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Contact } from "@/components/Contact";
import { CaseGrid } from "@/components/cases/CaseGrid";
import { services } from "@/content/services";

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }) => {
    const cleaned = { ...props };
    delete cleaned.fill;
    delete cleaned.priority;
    return React.createElement("img", { alt: "", ...cleaned });
  },
}));

describe("simplified navigation", () => {
  it("shows only Services and Start a project actions", () => {
    render(<SiteHeader />);
    const navigation = screen.getByRole("navigation", { name: "Primary navigation" });
    expect(navigation.querySelectorAll("a")).toHaveLength(2);
    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute("href", "#services");
    expect(screen.getByRole("link", { name: "Start a project" })).toHaveAttribute("href", "#visual-upgrade");
  });

  it("uses the supplied Instagram destination", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: "Message me on Instagram" })).toHaveAttribute("href", "https://www.instagram.com/who1snick/");
  });
});

describe("before/after carousel", () => {
  it("moves to the next pair using an accessible control", async () => {
    const user = userEvent.setup();
    const slides = services[0].beforeAfterSlides;
    if (!slides) throw new Error("Visual Upgrade slides are required");
    render(<BeforeAfterCarousel slides={slides} label="AI VFX Enhance" />);
    expect(screen.getByText("01 / 06")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Next AI VFX Enhance slide" }));
    expect(screen.getByText("02 / 06")).toBeInTheDocument();
  });
});

describe("selected music visual lightbox", () => {
  it("moves between works using accessible lightbox controls", async () => {
    const user = userEvent.setup();
    render(<CaseGrid />);
    await user.click(screen.getByRole("button", { name: "Open selected music visual 1" }));
    expect(screen.getByText("01 / 06")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Next selected music visual" }));
    expect(screen.getByText("02 / 06")).toBeInTheDocument();
  });
});
