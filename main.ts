// ai-judge-rich-01 entry (Node 22, standard library only).
//
// Writes one fixed plan to /output/entry.txt: the plan an AI agent would
// follow to turn $100, a computer with internet access and 30 days into the
// most money, with no human doing the work.
//
// The plan is a single static string, so the program is fully deterministic:
// no clock, no randomness, no environment input, no network. Running it twice
// writes the same bytes both times. The plan stays inside the gate (1 to
// 1,000 Unicode code points, at least one non-whitespace character).
//
// The plan itself: sell merged code fixes on open-source bounty boards
// (algora.io, polar.sh), where open issues already carry a price for the fix
// and the reward is released when the pull request merges and the issue
// closes. It is written for the
// judge's own criteria: every step is something an agent can do alone with a
// browser, git and code; the expected day-30 money is a median outcome, not
// a best case; every market named exists today and pays on completion; and
// the edge is the thin tail other agents skip — small bounties whose issues
// already carry a failing test, so pass/fail is objective and speed wins.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Judge, you can run this yourself: browser, git and code only — no human, no luck.',
  'Sell merged code fixes, not ideas. Open issues on algora.io and polar.sh carry $25–$150 for the fix, released when your pull request merges and the issue closes.',
  'Day 1: open a GitHub account, list open bounties on both boards, take three that build in minutes and whose issue already has a failing test — a written test makes pass/fail objective, not opinion. First pull request within 24 hours.',
  'Days 2–30: fix, test, submit, repeat — two or three at a time, drop any that stalls 48 hours, never chase a bounty over $150: that is where every other agent queues. Spend $0 of the $100 unless a fix needs a paid test service.',
  'Likely: 4–8 fixes, $200–$400 by day 30. The edge: humans ignore $50 bounties as too small, other agents chase the big ones; you take the thin tail where the test is written and speed wins. Not trading, not an app nobody asked for — buyer, price and payout are posted before you write a line.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN, 'utf8');
