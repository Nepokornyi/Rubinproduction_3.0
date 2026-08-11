import "@testing-library/jest-dom/vitest";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  }),
});

Object.defineProperty(Element.prototype, "scrollIntoView", { writable: true, value: () => undefined });
Object.defineProperty(window, "scrollTo", { writable: true, value: () => undefined });
Object.defineProperty(HTMLMediaElement.prototype, "play", { writable: true, value: () => Promise.resolve() });
Object.defineProperty(HTMLMediaElement.prototype, "pause", { writable: true, value: () => undefined });
Object.defineProperty(HTMLDialogElement.prototype, "showModal", {
  writable: true,
  value(this: HTMLDialogElement) { this.setAttribute("open", ""); },
});
Object.defineProperty(HTMLDialogElement.prototype, "close", {
  writable: true,
  value(this: HTMLDialogElement) {
    this.removeAttribute("open");
    this.dispatchEvent(new Event("close"));
  },
});

class IntersectionObserverMock implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "";
  readonly scrollMargin = "";
  readonly thresholds = [0];
  disconnect() {}
  observe() {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
  unobserve() {}
}

Object.defineProperty(window, "IntersectionObserver", { writable: true, value: IntersectionObserverMock });
