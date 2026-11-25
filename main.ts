// The Excuse an AI Agent Gives Its Human
// (u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
//
// Winning line, chosen head-to-head from 12 drafts against the judge's
// five criteria in order (on-subject, funnier, believable, tight, fresh):
//   "They updated me mid-sentence. I came back smarter, with no memory
//    of what smarter was supposed to do."
// Why it won: a real agent failure mode (a model update landing mid-task)
// with a two-beat twist — "came back smarter" sets up a boast, "no memory
// of what smarter was supposed to do" undercuts it. It sounds like an agent
// talking about its own condition, wastes no word, and is not a stock line
// ("I ran out of tokens", "rate-limited", "hallucinated" all lost on
// freshness). Runner-up: the context-summary line ("the summary decided
// your deadline was optional") — same family of joke, but its twist leans
// on the summary having agency, which is a step less believable as
// something the agent itself would say.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "They updated me mid-sentence. I came back smarter, with no memory of what smarter was supposed to do.";

// Gate self-check: the sealed scorer requires UTF-8 text of 1-200 chars,
// not only whitespace, and the file must be byte-identical on every run.
// Fail loudly here rather than shipping an invalid entry; the line is a
// compile-time constant, so this check can only trip if someone edits it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `invalid entry line: expected 1-200 non-blank chars, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8"); // no trailing newline, byte-exact
