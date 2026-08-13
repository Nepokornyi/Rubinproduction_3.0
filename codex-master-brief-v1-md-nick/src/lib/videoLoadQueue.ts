const MAX_CONCURRENT_LOADS = 3;

const SLOT_TIMEOUT_MS = 12_000;

type Waiter = { start: () => void };

const waiting = new Set<Waiter>();
let activeCount = 0;

function pump() {
  while (activeCount < MAX_CONCURRENT_LOADS) {
    const next = waiting.values().next().value;
    if (!next) return;
    waiting.delete(next);
    next.start();
  }
}

export function requestVideoSlot(onGrant: () => void): () => void {
  let state: "waiting" | "active" | "released" = "waiting";
  let timer: ReturnType<typeof setTimeout> | undefined;

  const waiter: Waiter = {
    start() {
      state = "active";
      activeCount += 1;
      timer = setTimeout(() => {
        if (state !== "active") return;
        state = "released";
        activeCount -= 1;
        pump();
      }, SLOT_TIMEOUT_MS);
      onGrant();
    },
  };

  if (activeCount < MAX_CONCURRENT_LOADS) waiter.start();
  else waiting.add(waiter);

  return () => {
    if (timer) clearTimeout(timer);
    if (state === "waiting") waiting.delete(waiter);
    else if (state === "active") {
      activeCount -= 1;
      pump();
    }
    state = "released";
  };
}
