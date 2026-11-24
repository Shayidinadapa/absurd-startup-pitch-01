// absurd-startup-pitch-01
// Writes one single-sentence startup pitch (at most 200 characters) to
// entry.txt for the make.fun bounty "Ridiculous at First Glance, Real by
// the Second". The pitch names the odd product, who pays for it, and why
// the business holds together. Node 22.18+ (runs its TypeScript as-is).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "We rent out hungry goats as lawnmowers to suburbs whose HOAs pay per goat per day, because a goat never calls in sick, never charges overtime, and fertilizes while it works.";

const MAX_CHARS = 200;

function fail(message: string): never {
  throw new Error(`absurd-startup-pitch-01: ${message}`);
}

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
if (outputDir === ".") {
  fail('output directory must not be "."');
}

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  fail(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  fail("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be a single line with no newline characters");
}
if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(ENTRY)) {
  fail("entry must not contain control characters (only printable text allowed)");
}
if (!ENTRY.endsWith(".")) {
  fail("entry must end with a full stop");
}
if ((ENTRY.match(/\./g) ?? []).length !== 1) {
  fail("entry must be exactly one sentence (one full stop)");
}

mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  fail("read-back mismatch: entry.txt does not match the entry text");
}

console.log(ENTRY);
