import blockers from "../src/content/launch-blockers.json" with { type: "json" };

if (blockers.length > 0) {
  console.error(`Production launch blocked: ${blockers.length} unresolved requirements.`);
  for (const blocker of blockers) console.error(`- ${blocker}`);
  process.exit(1);
}

console.log("Production launch content check passed.");
