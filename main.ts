import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My cat knocked a glass off the table while holding eye contact, and it's still the most committed anyone has ever been to a decision in this house.";

if (LINE.length < 1 || LINE.length > 240) throw new Error("bad length");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
