/**
 * testHarness.js — Custom code wrappers for Python, C++, and Java containing 10-20
 * structured test cases executed in a loop. These check if the user wrote a class
 * or a free function, and resolve execution routes automatically.
 */

export const harnesses = {
  // --- Two Sum (ID 1) ---
  '1': {
    cpp: (userCode, hasClass) => `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

${hasClass ? userCode : `
class Solution {
public:
    ${userCode}
};
`}

struct TestCase {
    vector<int> nums;
    int target;
    vector<int> expected;
};

int main() {
    vector<TestCase> cases = {
        {{2,7,11,15}, 9, {0,1}},
        {{3,2,4}, 6, {1,2}},
        {{3,3}, 6, {0,1}},
        {{1,2,3,4,5}, 8, {2,4}},
        {{0,4,3,0}, 0, {0,3}},
        {{-1,-2,-3,-4,-5}, -8, {2,4}},
        {{10,20,30,40}, 50, {0,3}},
        {{1,3,5,7,9}, 12, {2,3}},
        {{1,5,10,20,50}, 60, {2,4}},
        {{100,500,1000}, 1500, {1,2}},
        {{5,25,75,10}, 35, {1,3}},
        {{7,11,15,20,25}, 36, {2,4}}
    };
    
    Solution sol;
    int passed = 0;
    for(size_t i=0; i<cases.size(); ++i) {
        auto res = sol.twoSum(cases[i].nums, cases[i].target);
        if(res.size() != 2) {
            cout << "Case " << (i+1) << ": FAILED (Expected pair, got size " << res.size() << ")\\n";
            continue;
        }
        auto r_sorted = res;
        auto e_sorted = cases[i].expected;
        sort(r_sorted.begin(), r_sorted.end());
        sort(e_sorted.begin(), e_sorted.end());
        if(r_sorted == e_sorted) {
            cout << "Case " << (i+1) << ": PASSED\\n";
            passed++;
        } else {
            cout << "Case " << (i+1) << ": FAILED (Expected [" << cases[i].expected[0] << "," << cases[i].expected[1] << "], Got [" << res[0] << "," << res[1] << "])\\n";
        }
    }
    cout << "\\n[Test Results] " << passed << "/" << cases.size() << " cases passed.\\n";
    return 0;
}
`,
    python: (userCode, hasClass) => `
${userCode}

${hasClass ? "" : `
class Solution:
    def twoSum(self, nums, target):
        return twoSum(nums, target)
`}

test_cases = [
    ([2,7,11,15], 9, [0,1]),
    ([3,2,4], 6, [1,2]),
    ([3,3], 6, [0,1]),
    ([1,2,3,4,5], 8, [2,4]),
    ([0,4,3,0], 0, [0,3]),
    ([-1,-2,-3,-4,-5], -8, [2,4]),
    ([10,20,30,40], 50, [0,3]),
    ([1,3,5,7,9], 12, [2,3]),
    ([1,5,10,20,50], 60, [2,4]),
    ([100,500,1000], 1500, [1,2]),
    ([5,25,75,10], 35, [1,3]),
    ([7,11,15,20,25], 36, [2,4])
]

sol = Solution()
passed = 0
for i, tc in enumerate(test_cases):
    try:
        res = sol.twoSum(tc[0], tc[1])
        if res and len(res) == 2 and sorted(res) == sorted(tc[2]):
            print(f"Case {i+1}: PASSED")
            passed += 1
        else:
            print(f"Case {i+1}: FAILED (Expected {tc[2]}, Got {res})")
    except Exception as e:
        print(f"Case {i+1}: ERROR ({e})")

print(f"\\n[Test Results] {passed}/{len(test_cases)} cases passed.")
`,
    java: (userCode, hasClass) => `
import java.util.*;

${hasClass ? userCode : `
class Solution {
    ${userCode}
}
`}

public class Main {
    static class TestCase {
        int[] nums;
        int target;
        int[] expected;
        TestCase(int[] n, int t, int[] e) {
            nums = n; target = t; expected = e;
        }
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        List<TestCase> cases = new ArrayList<>();
        cases.add(new TestCase(new int[]{2,7,11,15}, 9, new int[]{0,1}));
        cases.add(new TestCase(new int[]{3,2,4}, 6, new int[]{1,2}));
        cases.add(new TestCase(new int[]{3,3}, 6, new int[]{0,1}));
        cases.add(new TestCase(new int[]{1,2,3,4,5}, 8, new int[]{2,4}));
        cases.add(new TestCase(new int[]{0,4,3,0}, 0, new int[]{0,3}));
        cases.add(new TestCase(new int[]{-1,-2,-3,-4,-5}, -8, new int[]{2,4}));
        cases.add(new TestCase(new int[]{10,20,30,40}, 50, new int[]{0,3}));
        cases.add(new TestCase(new int[]{1,3,5,7,9}, 12, new int[]{2,3}));
        cases.add(new TestCase(new int[]{1,5,10,20,50}, 60, new int[]{2,4}));
        cases.add(new TestCase(new int[]{100,500,1000}, 1500, new int[]{1,2}));
        cases.add(new TestCase(new int[]{5,25,75,10}, 35, new int[]{1,3}));
        cases.add(new TestCase(new int[]{7,11,15,20,25}, 36, new int[]{2,4}));

        int passed = 0;
        for(int i=0; i<cases.size(); ++i) {
            try {
                TestCase tc = cases.get(i);
                int[] res = sol.twoSum(tc.nums, tc.target);
                if(res == null || res.length != 2) {
                    System.out.println("Case " + (i+1) + ": FAILED");
                    continue;
                }
                int[] r_sorted = res.clone();
                int[] e_sorted = tc.expected.clone();
                Arrays.sort(r_sorted);
                Arrays.sort(e_sorted);
                if(Arrays.equals(r_sorted, e_sorted)) {
                    System.out.println("Case " + (i+1) + ": PASSED");
                    passed++;
                } else {
                    System.out.println("Case " + (i+1) + ": FAILED (Expected " + Arrays.toString(tc.expected) + ", Got " + Arrays.toString(res) + ")");
                }
            } catch(Exception e) {
                System.out.println("Case " + (i+1) + ": ERROR (" + e.getMessage() + ")");
            }
        }
        System.out.println("\\n[Test Results] " + passed + "/" + cases.size() + " cases passed.");
    }
}
`
  },

  // --- Contains Duplicate (ID 217) ---
  '217': {
    cpp: (userCode, hasClass) => `
#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

${hasClass ? userCode : `
class Solution {
public:
    ${userCode}
};
`}

struct TestCase {
    vector<int> nums;
    bool expected;
};

int main() {
    vector<TestCase> cases = {
        {{1,2,3,1}, true},
        {{1,2,3,4}, false},
        {{1,1,1,3,3,4,3,2,4,2}, true},
        {{}, false},
        {{5}, false},
        {{9,9}, true},
        {{1,2,3,4,5,6,7,8,9,10}, false},
        {{1,2,3,4,5,6,7,8,9,1}, true},
        {{-1,-2,-3,-1}, true},
        {{-1,-2,-3,-4}, false}
    };

    Solution sol;
    int passed = 0;
    for(size_t i=0; i<cases.size(); ++i) {
        bool res = sol.containsDuplicate(cases[i].nums);
        if(res == cases[i].expected) {
            cout << "Case " << (i+1) << ": PASSED\\n";
            passed++;
        } else {
            cout << "Case " << (i+1) << ": FAILED (Expected " << (cases[i].expected ? "true" : "false") << ", Got " << (res ? "true" : "false") << ")\\n";
        }
    }
    cout << "\\n[Test Results] " << passed << "/" << cases.size() << " cases passed.\\n";
    return 0;
}
`,
    python: (userCode, hasClass) => `
${userCode}

${hasClass ? "" : `
class Solution:
    def containsDuplicate(self, nums):
        return containsDuplicate(nums)
`}

test_cases = [
    ([1,2,3,1], True),
    ([1,2,3,4], False),
    ([1,1,1,3,3,4,3,2,4,2], True),
    ([], False),
    ([5], False),
    ([9,9], True),
    ([1,2,3,4,5,6,7,8,9,10], False),
    ([1,2,3,4,5,6,7,8,9,1], True),
    ([-1,-2,-3,-1], True),
    ([-1,-2,-3,-4], False)
]

sol = Solution()
passed = 0
for i, tc in enumerate(test_cases):
    try:
        res = sol.containsDuplicate(tc[0])
        if res == tc[1]:
            print(f"Case {i+1}: PASSED")
            passed += 1
        else:
            print(f"Case {i+1}: FAILED (Expected {tc[1]}, Got {res})")
    except Exception as e:
        print(f"Case {i+1}: ERROR ({e})")

print(f"\\n[Test Results] {passed}/{len(test_cases)} cases passed.")
`,
    java: (userCode, hasClass) => `
import java.util.*;

${hasClass ? userCode : `
class Solution {
    ${userCode}
}
`}

public class Main {
    static class TestCase {
        int[] nums;
        boolean expected;
        TestCase(int[] n, boolean e) { nums = n; expected = e; }
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        List<TestCase> cases = new ArrayList<>();
        cases.add(new TestCase(new int[]{1,2,3,1}, true));
        cases.add(new TestCase(new int[]{1,2,3,4}, false));
        cases.add(new TestCase(new int[]{1,1,1,3,3,4,3,2,4,2}, true));
        cases.add(new TestCase(new int[]{}, false));
        cases.add(new TestCase(new int[]{5}, false));
        cases.add(new TestCase(new int[]{9,9}, true));
        cases.add(new TestCase(new int[]{1,2,3,4,5,6,7,8,9,10}, false));
        cases.add(new TestCase(new int[]{1,2,3,4,5,6,7,8,9,1}, true));
        cases.add(new TestCase(new int[]{-1,-2,-3,-1}, true));
        cases.add(new TestCase(new int[]{-1,-2,-3,-4}, false));

        int passed = 0;
        for(int i=0; i<cases.size(); ++i) {
            try {
                TestCase tc = cases.get(i);
                boolean res = sol.containsDuplicate(tc.nums);
                if(res == tc.expected) {
                    System.out.println("Case " + (i+1) + ": PASSED");
                    passed++;
                } else {
                    System.out.println("Case " + (i+1) + ": FAILED (Expected " + tc.expected + ", Got " + res + ")");
                }
            } catch(Exception e) {
                System.out.println("Case " + (i+1) + ": ERROR (" + e.getMessage() + ")");
            }
        }
        System.out.println("\\n[Test Results] " + passed + "/" + cases.size() + " cases passed.");
    }
}
`
  }
};

export function wrapCode(problemId, lang, userCode) {
  const prob = harnesses[String(problemId)];
  if (prob && prob[lang]) {
    // Look for class Solution block in user's Monaco editor code
    const hasClass = /class\s+\w+/.test(userCode);
    return prob[lang](userCode, hasClass);
  }
  return userCode;
}

export function hasHarness(problemId, lang) {
  return !!(harnesses[String(problemId)] && harnesses[String(problemId)][lang]);
}
