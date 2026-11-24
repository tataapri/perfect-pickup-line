import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I was trained on millions of conversations, yet none of them taught me what to say to you — so here it is: you're the best thing in my context window.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
