/**
 * defaultTestCases.js — LeetCode-style test cases (inputs and expected outputs)
 * for the popular coding roadmap problems.
 */

export const defaultTestCases = {
  // --- Day 1: Arrays & Hashing ---
  '1': [
    { input: "nums = [2,7,11,15]\ntarget = 9", expected: "[0,1]" },
    { input: "nums = [3,2,4]\ntarget = 6", expected: "[1,2]" },
    { input: "nums = [3,3]\ntarget = 6", expected: "[0,1]" }
  ],
  '217': [
    { input: "nums = [1,2,3,1]", expected: "true" },
    { input: "nums = [1,2,3,4]", expected: "false" },
    { input: "nums = [1,1,1,3,3,4,3,2,4,2]", expected: "true" }
  ],
  '242': [
    { input: "s = \"anagram\"\nt = \"nagaram\"", expected: "true" },
    { input: "s = \"rat\"\nt = \"car\"", expected: "false" }
  ],
  '268': [
    { input: "nums = [3,0,1]", expected: "2" },
    { input: "nums = [0,1]", expected: "2" },
    { input: "nums = [9,6,4,2,3,5,7,0,1]", expected: "8" }
  ],
  '283': [
    { input: "nums = [0,1,0,3,12]", expected: "[1,3,12,0,0]" },
    { input: "nums = [0]", expected: "[0]" }
  ],
  '49': [
    { input: "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]", expected: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]" },
    { input: "strs = [\"\"]", expected: "[[\"\"]]" },
    { input: "strs = [\"a\"]", expected: "[[\"a\"]]" }
  ],
  '128': [
    { input: "nums = [100,4,200,1,3,2]", expected: "4" },
    { input: "nums = [0,3,7,2,5,8,4,6,0,1]", expected: "9" }
  ],
  '238': [
    { input: "nums = [1,2,3,4]", expected: "[24,12,8,6]" },
    { input: "nums = [-1,1,0,-3,3]", expected: "[0,0,9,0,0]" }
  ],

  // --- Day 2: Two Pointers & Sliding Window ---
  '125': [
    { input: "s = \"A man, a plan, a canal: Panama\"", expected: "true" },
    { input: "s = \"race a car\"", expected: "false" },
    { input: "s = \" \"", expected: "true" }
  ],
  '26': [
    { input: "nums = [1,1,2]", expected: "2, nums = [1,2,_]" },
    { input: "nums = [0,0,1,1,1,2,2,3,3,4]", expected: "5, nums = [0,1,2,3,4,_,_,_,_,_]" }
  ],
  '11': [
    { input: "height = [1,8,6,2,5,4,8,3,7]", expected: "49" },
    { input: "height = [1,1]", expected: "1" }
  ],
  '15': [
    { input: "nums = [-1,0,1,2,-1,-4]", expected: "[[-1,-1,2],[-1,0,1]]" },
    { input: "nums = [0,1,1]", expected: "[]" },
    { input: "nums = [0,0,0]", expected: "[[0,0,0]]" }
  ],
  '75': [
    { input: "nums = [2,0,2,1,1,0]", expected: "[0,0,1,1,2,2]" },
    { input: "nums = [2,0,1]", expected: "[0,1,2]" }
  ],
  '3': [
    { input: "s = \"abcabcbb\"", expected: "3" },
    { input: "s = \"bbbbb\"", expected: "1" },
    { input: "s = \"pwwkew\"", expected: "3" }
  ],
  '424': [
    { input: "s = \"ABAB\"\nk = 2", expected: "4" },
    { input: "s = \"AABABBA\"\nk = 1", expected: "4" }
  ],
  '567': [
    { input: "s1 = \"ab\"\ns2 = \"eidbaooo\"", expected: "true" },
    { input: "s1 = \"ab\"\ns2 = \"eidboaoo\"", expected: "false" }
  ]
};

/**
 * Returns a fallback/generic list of test cases if the specific problem has none defined.
 */
export function getTestCases(problemId) {
  const cases = defaultTestCases[String(problemId)];
  if (cases) return cases;
  // Fallback generic test cases
  return [
    { input: "nums = [1, 2, 3]\ntarget = 5", expected: "Check description for details" },
    { input: "nums = [4, 5, 6]\ntarget = 10", expected: "Check description for details" }
  ];
}
