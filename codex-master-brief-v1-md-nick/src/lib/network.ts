"use client";

import { useEffect, useState } from "react";

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
  addEventListener?: (type: "change", listener: () => void) => void;
  removeEventListener?: (type: "change", listener: () => void) => void;
};

const CONSTRAINED_EFFECTIVE_TYPES = new Set(["slow-2g", "2g", "3g"]);

function readConnection(): NetworkInformation | undefined {
  if (typeof navigator === "undefined") return undefined;
  return (navigator as Navigator & { connection?: NetworkInformation }).connection;
}

function isConstrained(): boolean {
  const connection = readConnection();
  if (!connection) return false;
  if (connection.saveData) return true;
  return connection.effectiveType ? CONSTRAINED_EFFECTIVE_TYPES.has(connection.effectiveType) : false;
}

export function useConstrainedNetwork(): boolean {
  const [constrained, setConstrained] = useState(false);

  useEffect(() => {
    const update = () => setConstrained(isConstrained());
    update();
    const connection = readConnection();
    connection?.addEventListener?.("change", update);
    return () => connection?.removeEventListener?.("change", update);
  }, []);

  return constrained;
}
