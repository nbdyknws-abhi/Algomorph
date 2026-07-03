import { day1Problems } from './day1';
import { day2Problems } from './day2';
import { day3Problems } from './day3';
import { day4Problems } from './day4';
import { day5Problems } from './day5';
import { day6Problems } from './day6';
import { day7Problems } from './day7';
import { day8Problems } from './day8';
import { day9Problems } from './day9';
import { day10Problems } from './day10';

export const allProblems = {
  1: {
    title: "Arrays & Hashing",
    problems: day1Problems,
    tip: "For #1 use a dict for O(n). #238 solve with prefix + suffix pass — no division needed."
  },
  2: {
    title: "Two Pointers & Sliding Window",
    problems: day2Problems,
    tip: "Sliding window = expand right, shrink left when invalid. Master this pattern for Day 2."
  },
  3: {
    title: "Binary Search",
    problems: day3Problems,
    tip: "Always define lo/hi/mid clearly. For rotated arrays, check which half is sorted first."
  },
  4: {
    title: "Linked List",
    problems: day4Problems,
    tip: "Dummy head node saves edge-case code. Fast/slow pointer detects cycles and finds midpoints."
  },
  5: {
    title: "Stack & Queue",
    problems: day5Problems,
    tip: "Monotonic stack: push index, pop when current element is greater. Covers #503 & #739 pattern."
  },
  6: {
    title: "Trees & BST",
    problems: day6Problems,
    tip: "For BST validation pass min/max bounds recursively. Level order = BFS with queue."
  },
  7: {
    title: "Graphs",
    problems: day7Problems,
    tip: "Cycle detection in directed graph = DFS with visited + in-stack sets. BFS for shortest path."
  },
  8: {
    title: "Dynamic Programming",
    problems: day8Problems,
    tip: "DP = define state -> recurrence -> base case. LCS dp[i][j] is the most-asked DP in MNCs."
  },
  9: {
    title: "Backtracking + Heap + Trie",
    problems: day9Problems,
    tip: "Backtracking = choose -> explore -> unchoose. Use start index for combos, swap for permutations."
  },
  10: {
    title: "Revision + Hard + Weak Topics",
    problems: day10Problems,
    tip: "Revision day! Pay special attention to Hard problems like Trapping Rain Water, Sliding Window Maximum and Median Finder."
  }
};

export { sqlTiers, sqlProblems } from './sqlData';
export { getTestCases } from './defaultTestCases';

