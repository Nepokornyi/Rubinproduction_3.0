// Helpers for reading the OS reduced-motion setting through useSyncExternalStore.
// Pair them with a server snapshot so that the server render and hydration agree;
// framer-motion's useReducedMotion reads the real value on the first client render,
// which breaks hydration wherever the setting changes the markup.
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

export function subscribeToReducedMotion(notify: () => void) {
  const preference = window.matchMedia(reducedMotionQuery);
  preference.addEventListener("change", notify);
  return () => preference.removeEventListener("change", notify);
}

export const prefersReducedMotion = () => window.matchMedia(reducedMotionQuery).matches;
