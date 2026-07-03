export const day10Problems = [
  {
    id: 560,
    name: "Subarray Sum Equals K",
    difficulty: "Medium",
    topic: "HashMap / Prefix Sum",
    leetcodeUrl: "https://leetcode.com/problems/subarray-sum-equals-k/",
    tip: "Use a prefix sum and hash map. Maintain a running `sum`. The number of subarrays ending at current index with sum `k` is the count of `sum - k` in the map. Store prefix sum counts.",
    description: "Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.",
    chatbotData: {
      intuition: "A subarray sum from index `i` to `j` is `PrefixSum[j] - PrefixSum[i-1]`. If we want this sum to equal `k`, then `PrefixSum[j] - PrefixSum[i-1] = k`, which means `PrefixSum[i-1] = PrefixSum[j] - k`. As we iterate through the array, we calculate the running prefix `sum`. If `sum - k` has been seen before as a prefix sum, it means there exist subarrays ending at the current index that sum to `k`. We use a Hash Map to store the frequencies of prefix sums we have seen.",
      complexity: "Time Complexity: O(N) since we make a single pass through the array of size N and map operations are O(1) average.\nSpace Complexity: O(N) to store the prefix sums in the map.",
      edgeCases: "1. k is 0: works, count of prefix sum matches is accumulated.\n2. Negatives in array: prefix sums can decrease and increase, map handles frequencies correctly.",
      debugging: "Do not forget to initialize the map with `{0: 1}`. This is because if the running sum itself equals `k` at some index, the complement `sum - k` is 0. If 0 is not in the map with a frequency of 1, we will miss this valid subarray starting from index 0."
    },
    solutions: {
      cpp: {
        code: `int subarraySum(vector<int>& nums, int k) {\n    unordered_map<int, int> prefixSumCount;\n    prefixSumCount[0] = 1; // base case\n    int sum = 0;\n    int count = 0;\n    for (int num : nums) {\n        sum += num;\n        if (prefixSumCount.count(sum - k)) {\n            count += prefixSumCount[sum - k];\n        }\n        prefixSumCount[sum]++;\n    }\n    return count;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes integer vector reference and target k, returns subarray count." },
          { line: 2, text: "Declare an unordered_map `prefixSumCount` where keys are prefix sums and values are their frequencies." },
          { line: 3, text: "Initialize map with prefix sum 0 having count 1. This handles subarrays starting from index 0." },
          { line: 4, text: "Initialize running prefix `sum` and answer `count` to 0." },
          { line: 6, text: "Loop through each number `num` in the array." },
          { line: 7, text: "Add the current number to the running prefix `sum`." },
          { line: 8, text: "Check if the complement `sum - k` has occurred as a prefix sum previously." },
          { line: 9, text: "If it has, add its frequency to our answer `count`." },
          { line: 11, text: "Increment the frequency of the current prefix `sum` in the map." }
        ]
      },
      python: {
        code: `def subarraySum(nums: list[int], k: int) -> int:\n    prefix_map = {0: 1}\n    current_sum = 0\n    count = 0\n    for num in nums:\n        current_sum += num\n        if (current_sum - k) in prefix_map:\n            count += prefix_map[current_sum - k]\n        prefix_map[current_sum] = prefix_map.get(current_sum, 0) + 1\n    return count`,
        explanation: [
          { line: 1, text: "Define subarraySum function." },
          { line: 2, text: "Initialize dictionary with base case `{0: 1}`." },
          { line: 5, text: "Loop through list, accumulating prefix sum." },
          { line: 7, text: "If `current_sum - k` is in map, add its frequency count to result." },
          { line: 9, text: "Save the current prefix sum frequency." }
        ]
      },
      java: {
        code: `public int subarraySum(int[] nums, int k) {\n    Map<Integer, Integer> prefixSumCount = new HashMap<>();\n    prefixSumCount.put(0, 1);\n    int sum = 0;\n    int count = 0;\n    for (int num : nums) {\n        sum += num;\n        if (prefixSumCount.containsKey(sum - k)) {\n            count += prefixSumCount.get(sum - k);\n        }\n        prefixSumCount.put(sum, prefixSumCount.getOrDefault(sum, 0) + 1);\n    }\n    return count;\n}`,
        explanation: [
          { line: 1, text: "Declare method subarraySum." },
          { line: 2, text: "Create HashMap." },
          { line: 3, text: "Put base case `(0, 1)` into map." },
          { line: 6, text: "Loop numbers, updating prefix sum." },
          { line: 8, text: "If complement exists, fetch its count and add to result." },
          { line: 11, text: "Increment current sum count using `getOrDefault`." }
        ]
      }
    }
  },
  {
    id: 647,
    name: "Palindromic Substrings",
    difficulty: "Medium",
    topic: "DP / Expand Around Center",
    leetcodeUrl: "https://leetcode.com/problems/palindromic-substrings/",
    tip: "Expand around centers. Each index `i` can be the center of an odd-length palindrome (expand from `i, i`) or an even-length palindrome (expand from `i, i+1`).",
    description: "Given a string `s`, return the number of palindromic substrings in it.",
    chatbotData: {
      intuition: "A substring is a palindrome if it reads the same backwards and forwards. Instead of generating all substrings and checking them (which is O(N³)), we can choose each index as a potential center and expand outwards. A palindrome can have an odd length (center is a single character `s[i]`) or an even length (center is between `s[i]` and `s[i+1]`). We expand while characters match, incrementing our count at each valid expansion.",
      complexity: "Time Complexity: O(N²) because we try expanding from 2N-1 centers, and each expansion takes O(N) time in the worst case.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. Single character: returns 1.\n2. All same characters (e.g. 'aaa'): returns 6.",
      debugging: "Make sure you include boundaries checking `left >= 0 && right < s.length()` in your expansion loop to prevent index out of bounds crashes."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    int expand(string& s, int l, int r) {\n        int count = 0;\n        while (l >= 0 && r < s.length() && s[l] == s[r]) {\n            count++;\n            l--;\n            r++;\n        }\n        return count;\n    }\n\npublic:\n    int countSubstrings(string s) {\n        int count = 0;\n        for (int i = 0; i < s.length(); i++) {\n            count += expand(s, i, i);     // odd length\n            count += expand(s, i, i + 1); // even length\n        }\n        return count;\n    }\n};`,
        explanation: [
          { line: 3, text: "Helper function: expands outward from boundaries `l` and `r` while matching characters, returning count of palindromes found." },
          { line: 5, text: "Loop while indices are inside boundaries AND characters at `s[l]` and `s[r]` match." },
          { line: 6, text: "Increment palindrome count." },
          { line: 7, text: "Expand boundaries outwards: decrement `l`, increment `r`." },
          { line: 14, text: "Main function: loops through each index as a center." },
          { line: 17, text: "Count odd-length palindromes centering at single character `i`." },
          { line: 18, text: "Count even-length palindromes centering between `i` and `i + 1`." }
        ]
      },
      python: {
        code: `class Solution:\n    def countSubstrings(self, s: str) -> int:\n        count = 0\n        n = len(s)\n        \n        def expand(l, r):\n            ans = 0\n            while l >= 0 and r < n and s[l] == s[r]:\n                ans += 1\n                l -= 1\n                r += 1\n            return ans\n            \n        for i in range(n):\n            count += expand(i, i)     # odd length\n            count += expand(i, i + 1) # even length\n        return count`,
        explanation: [
          { line: 1, text: "Define Solution class." },
          { line: 6, text: "Define helper: expands while characters match, returning count." },
          { line: 8, text: "Loop expansion boundaries." },
          { line: 14, text: "Try every position as an odd center `(i, i)` and even center `(i, i+1)`." }
        ]
      },
      java: {
        code: `class Solution {\n    public int countSubstrings(String s) {\n        int count = 0;\n        for (int i = 0; i < s.length(); i++) {\n            count += expand(s, i, i);\n            count += expand(s, i, i + 1);\n        }\n        return count;\n    }\n    \n    private int expand(String s, int l, int r) {\n        int count = 0;\n        while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {\n            count++;\n            l--;\n            r++;\n        }\n        return count;\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare Solution class." },
          { line: 4, text: "Loop through index centers, summing odd and even expansions." },
          { line: 11, text: "Helper method expand." },
          { line: 13, text: "Verify limits and character equivalence, shift bounds, and increment count." }
        ]
      }
    }
  },
  {
    id: 583,
    name: "Delete Operation for Two Strings",
    difficulty: "Medium",
    topic: "DP / LCS",
    leetcodeUrl: "https://leetcode.com/problems/delete-operation-for-two-strings/",
    tip: "This is a variant of Longest Common Subsequence (LCS). The minimum deletions needed is `len(word1) + len(word2) - 2 * LCS(word1, word2)`.",
    description: "Given two strings `word1` and `word2`, return the minimum number of steps required to make `word1` and `word2` the same, where in each step you can delete one character in either string.",
    chatbotData: {
      intuition: "To make two strings identical with the minimum number of deletions, we should preserve the longest common sequence of characters they share. This sequence is their Longest Common Subsequence (LCS). If the length of LCS is `L`, then the characters we delete from `word1` is `len(word1) - L`, and from `word2` is `len(word2) - L`. The total deletions are `len(word1) + len(word2) - 2 * L`.",
      complexity: "Time Complexity: O(M * N) to compute the LCS grid. M and N are the lengths of the two words.\nSpace Complexity: O(M * N) to store the 2D DP table.",
      edgeCases: "1. Strings are already identical: LCS length equals string length, deletions = 0.\n2. Completely different strings: LCS is 0, deletions = `len(word1) + len(word2)`.",
      debugging: "Refer to the Longest Common Subsequence implementation to correctly compute the LCS length before performing the deletion subtraction."
    },
    solutions: {
      cpp: {
        code: `int minDistance(string word1, string word2) {\n    int m = word1.length(), n = word2.length();\n    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (word1[i - 1] == word2[j - 1]) {\n                dp[i][j] = dp[i - 1][j - 1] + 1;\n            } else {\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n    }\n    int lcs = dp[m][n];\n    return m + n - 2 * lcs;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes two strings, returns minimum deletions." },
          { line: 2, text: "Calculate lengths of both words." },
          { line: 3, text: "Declare 2D vector for LCS calculation." },
          { line: 4, text: "Loop through character positions to fill LCS DP table." },
          { line: 13, text: "Retrieve the LCS length from the bottom-right cell." },
          { line: 14, text: "Calculate and return the result: `len(word1) + len(word2) - 2 * lcs`." }
        ]
      },
      python: {
        code: `def minDistance(word1: str, word2: str) -> int:\n    m, n = len(word1), len(word2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if word1[i - 1] == word2[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1] + 1\n            else:\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\n    lcs = dp[m][n]\n    return m + n - 2 * lcs`,
        explanation: [
          { line: 1, text: "Define minDistance function." },
          { line: 3, text: "Initialize 2D DP grid." },
          { line: 4, text: "Fill table based on LCS conditions." },
          { line: 10, text: "Get LCS length." },
          { line: 11, text: "Return deletion steps calculation." }
        ]
      },
      java: {
        code: `public int minDistance(String word1, String word2) {\n    int m = word1.length(), n = word2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {\n                dp[i][j] = dp[i - 1][j - 1] + 1;\n            } else {\n                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n    }\n    int lcs = dp[m][n];\n    return m + n - 2 * lcs;\n}`,
        explanation: [
          { line: 1, text: "Declare method minDistance." },
          { line: 3, text: "Create 2D DP array." },
          { line: 4, text: "LCS nested loop traversal." },
          { line: 13, text: "Get LCS." },
          { line: 14, text: "Subtract double LCS from length sums." }
        ]
      }
    }
  },
  {
    id: 76,
    name: "Minimum Window Substring",
    difficulty: "Hard",
    topic: "Sliding Window",
    leetcodeUrl: "https://leetcode.com/problems/minimum-window-substring/",
    tip: "Use a sliding window. Count frequency of characters in `t`. Move `right` to expand the window. Maintain a count of matching unique characters. When all matched, shrink from `left` to find the minimum valid window.",
    description: "Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window.",
    chatbotData: {
      intuition: "We count target frequencies in `t` using a map. We expand our sliding window in `s` using pointer `right`. We maintain a `have` count tracking how many unique characters meet their target frequency in the current window, compared to `need` (the total number of unique characters in `t`). When `have == need`, the window is valid. We record its size, then try to shrink it from the `left` by advancing `left` until the window becomes invalid again.",
      complexity: "Time Complexity: O(N + M) where N is length of s and M is length of t. Pointers travel at most N steps.\nSpace Complexity: O(1) or O(52) to store the character counts.",
      edgeCases: "1. `t` is longer than `s`: returns empty string.\n2. No window exists: returns empty string.",
      debugging: "When updating counts, check if `windowCount[char] == targetCount[char]` to increment your matches, and decrement matches when a character's frequency falls below its target during contraction."
    },
    solutions: {
      cpp: {
        code: `string minWindow(string s, string t) {\n    if (s.length() < t.length()) return "";\n    int targetMap[128] = {0};\n    int windowMap[128] = {0};\n    for (char c : t) targetMap[c]++;\n    \n    int need = 0;\n    for (int i = 0; i < 128; i++) {\n        if (targetMap[i] > 0) need++;\n    }\n    \n    int have = 0, left = 0;\n    int minLen = INT_MAX, minStart = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s[right];\n        windowMap[c]++;\n        if (targetMap[c] > 0 && windowMap[c] == targetMap[c]) {\n            have++;\n        }\n        while (have == need) {\n            if (right - left + 1 < minLen) {\n                minLen = right - left + 1;\n                minStart = left;\n            }\n            char leftChar = s[left];\n            windowMap[leftChar]--;\n            if (targetMap[leftChar] > 0 && windowMap[leftChar] < targetMap[leftChar]) {\n                have--;\n            }\n            left++;\n        }\n    }\n    return (minLen == INT_MAX) ? "" : s.substr(minStart, minLen);\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes strings s and t, returns minimum substring." },
          { line: 2, text: "If `s` is shorter than `t`, it can't contain the window: return empty string." },
          { line: 3, text: "Initialize count arrays for ASCII characters (size 128) for target and active window." },
          { line: 5, text: "Fill target character counts from string `t`." },
          { line: 7, text: "Count `need`, which is the number of unique characters in `t`." },
          { line: 12, text: "Initialize `have` (unique matches in window), `left` pointer, and trackers for minimum window." },
          { line: 14, text: "Loop `right` pointer to expand window." },
          { line: 17, text: "If character matches frequency requirement, increment `have`." },
          { line: 20, text: "While window contains all target characters (`have == need`)." },
          { line: 21, text: "Update minimum window length and start position." },
          { line: 25, text: "Pop character at `left` from window." },
          { line: 27, text: "If popped character causes its count to fall below target requirements, decrement `have`." },
          { line: 30, text: "Increment `left` pointer to shrink the window." }
        ]
      },
      python: {
        code: `def minWindow(s: str, t: str) -> str:\n    if len(s) < len(t):\n        return ""\n    target_count = {}\n    for c in t:\n        target_count[c] = target_count.get(c, 0) + 1\n    need = len(target_count)\n    \n    window_count = {}\n    have = 0\n    left = 0\n    min_len = float('inf')\n    min_start = 0\n    for right, char in enumerate(s):\n        window_count[char] = window_count.get(char, 0) + 1\n        if char in target_count and window_count[char] == target_count[char]:\n            have += 1\n        while have == need:\n            if (right - left + 1) < min_len:\n                min_len = right - left + 1\n                min_start = left\n            left_char = s[left]\n            window_count[left_char] -= 1\n            if left_char in target_count and window_count[left_char] < target_count[left_char]:\n                have -= 1\n            left += 1\n    return "" if min_len == float('inf') else s[min_start : min_start + min_len]`,
        explanation: [
          { line: 1, text: "Define minWindow function." },
          { line: 4, text: "Populate target character counts." },
          { line: 7, text: "Get count of unique characters needed." },
          { line: 10, text: "Initialize variables." },
          { line: 14, text: "Expand window." },
          { line: 16, text: "If current count matches target count exactly, increment unique match count `have`." },
          { line: 18, text: "Shrink window while valid, recording best window values." }
        ]
      },
      java: {
        code: `public String minWindow(String s, String t) {\n    if (s.length() < t.length()) return "";\n    int[] targetCount = new int[128];\n    int[] windowCount = new int[128];\n    for (char c : t.toCharArray()) targetCount[c]++;\n    int need = 0;\n    for (int count : targetCount) if (count > 0) need++;\n    int have = 0, left = 0;\n    int minLen = Integer.MAX_VALUE, minStart = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        windowCount[c]++;\n        if (targetCount[c] > 0 && windowCount[c] == targetCount[c]) {\n            have++;\n        }\n        while (have == need) {\n            if (right - left + 1 < minLen) {\n                minLen = right - left + 1;\n                minStart = left;\n            }\n            char leftChar = s.charAt(left);\n            windowCount[leftChar]--;\n            if (targetCount[leftChar] > 0 && windowCount[leftChar] < targetCount[leftChar]) {\n                have--;\n            }\n            left++;\n        }\n    }\n    return (minLen == Integer.MAX_VALUE) ? "" : s.substring(minStart, minStart + minLen);\n}`,
        explanation: [
          { line: 1, text: "Declare method minWindow." },
          { line: 3, text: "Setup character counters." },
          { line: 5, text: "Populate target frequencies." },
          { line: 10, text: "Loop right pointer." },
          { line: 13, text: "Increment unique match `have` when frequency matches." },
          { line: 16, text: "Loop while matches met: record minimums, update left elements, and advance left pointer." },
          { line: 29, text: "Return substring." }
        ]
      }
    }
  },
  {
    id: 42,
    name: "Trapping Rain Water",
    difficulty: "Hard",
    topic: "Two Pointer / Stack",
    leetcodeUrl: "https://leetcode.com/problems/trapping-rain-water/",
    tip: "Use two pointers, `left` and `right` at the ends of the array. Track `leftMax` and `rightMax`. Move the pointer with the smaller max boundary inwards, accumulating `max_boundary - height`.",
    description: "Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.",
    chatbotData: {
      intuition: "The volume of water trapped above bar `i` is determined by: `min(leftMax, rightMax) - height[i]`. We can calculate this in O(N) time and O(1) space using two pointers starting at the ends. We maintain `leftMax` (max height seen on the left) and `rightMax` (max height seen on the right). Since water is limited by the shorter boundary, if `leftMax < rightMax`, we process the left pointer: water trapped is `leftMax - height[left]`. We then increment `left`. Otherwise, we process the right pointer and decrement `right`.",
      complexity: "Time Complexity: O(N) since we visit each element with our two pointers exactly once.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. Empty or size < 3 array: cannot trap any water, returns 0.",
      debugging: "Make sure you update the boundaries `leftMax = max(leftMax, height[left])` *before* calculating the trapped water for the current cell."
    },
    solutions: {
      cpp: {
        code: `int trap(vector<int>& height) {\n    if (height.empty()) return 0;\n    int left = 0, right = height.size() - 1;\n    int leftMax = height[left];\n    int rightMax = height[right];\n    int water = 0;\n    while (left < right) {\n        if (leftMax < rightMax) {\n            left++;\n            leftMax = max(leftMax, height[left]);\n            water += leftMax - height[left];\n        } else {\n            right--;\n            rightMax = max(rightMax, height[right]);\n            water += rightMax - height[right];\n        }\n    }\n    return water;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes height vector, returns trapped water units." },
          { line: 2, text: "If empty, return 0." },
          { line: 3, text: "Initialize `left` at 0 and `right` at last index." },
          { line: 4, text: "Initialize `leftMax` and `rightMax` boundary values." },
          { line: 7, text: "Loop while pointers don't meet." },
          { line: 8, text: "If left boundary is shorter, we know the bottleneck is on the left: process left side." },
          { line: 9, text: "Increment `left` pointer." },
          { line: 10, text: "Update `leftMax` with the new height." },
          { line: 11, text: "Add water trapped above current index: `leftMax - height[left]` (could be 0)." },
          { line: 12, text: "Otherwise, right boundary is shorter: process right side." },
          { line: 13, text: "Decrement `right` pointer." },
          { line: 14, text: "Update `rightMax`." },
          { line: 15, text: "Add water trapped above right index." }
        ]
      },
      python: {
        code: `def trap(height: list[int]) -> int:\n    if not height:\n        return 0\n    left, right = 0, len(height) - 1\n    left_max, right_max = height[left], height[right]\n    water = 0\n    while left < right:\n        if left_max < right_max:\n            left += 1\n            left_max = max(left_max, height[left])\n            water += left_max - height[left]\n        else:\n            right -= 1\n            right_max = max(right_max, height[right])\n            water += right_max - height[right]\n    return water`,
        explanation: [
          { line: 1, text: "Define trap function." },
          { line: 4, text: "Initialize pointers." },
          { line: 5, text: "Initialize boundary maxes." },
          { line: 7, text: "Loop pointers." },
          { line: 8, text: "If left boundary is shorter, move left pointer, update left max, accumulate water." },
          { line: 12, text: "Otherwise, move right pointer, update right max, accumulate water." }
        ]
      },
      java: {
        code: `public int trap(int[] height) {\n    if (height.length == 0) return 0;\n    int left = 0, right = height.length - 1;\n    int leftMax = height[left], rightMax = height[right];\n    int water = 0;\n    while (left < right) {\n        if (leftMax < rightMax) {\n            left++;\n            leftMax = Math.max(leftMax, height[left]);\n            water += leftMax - height[left];\n        } else {\n            right--;\n            rightMax = Math.max(rightMax, height[right]);\n            water += rightMax - height[right];\n        }\n    }\n    return water;\n}`,
        explanation: [
          { line: 1, text: "Declare method trap." },
          { line: 3, text: "Initialize pointers and trackers." },
          { line: 6, text: "Loop until convergence." },
          { line: 7, text: "Process side with smaller height barrier." },
          { line: 8, text: "Advance left pointer, calculate max, accumulate difference." },
          { line: 11, text: "Advance right pointer, calculate max, accumulate difference." }
        ]
      }
    }
  },
  {
    id: 23,
    name: "Merge K Sorted Lists",
    difficulty: "Hard",
    topic: "Heap / Linked List",
    leetcodeUrl: "https://leetcode.com/problems/merge-k-sorted-lists/",
    tip: "Use a Min-Heap. Push the head nodes of all `k` lists onto the heap. While the heap is not empty, pop the smallest node, link it to the merged list, and push its next node onto the heap.",
    description: "You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    chatbotData: {
      intuition: "To merge K sorted lists, we must repeatedly find the node with the smallest value among the heads of all remaining lists. A Min-Heap is perfect for this. We push the head node of each of the K lists into a Min-Heap. The heap will sort them. While the heap is not empty, we pop the smallest node, attach it to our merged list `tail.next`, and if this popped node has a next node (`node.next`), we push `node.next` onto the heap.",
      complexity: "Time Complexity: O(N log K) where N is the total number of nodes across all lists and K is the number of lists. Heap size is at most K.\nSpace Complexity: O(K) to store the heads of the lists in the heap.",
      edgeCases: "1. Empty input list list: returns null.\n2. All lists are empty: returns null.",
      debugging: "In C++ and Java, you must write a custom comparator for list nodes, because the default priority queue does not know how to compare `ListNode` pointers/objects."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    struct CompareNodes {\n        bool operator()(ListNode* const& p1, ListNode* const& p2) {\n            return p1->val > p2->val; // greater makes it a min-heap\n        }\n    };\n\npublic:\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        priority_queue<ListNode*, vector<ListNode*>, CompareNodes> minHeap;\n        for (ListNode* head : lists) {\n            if (head != nullptr) {\n                minHeap.push(head);\n            }\n        }\n        ListNode dummy(0);\n        ListNode* tail = &dummy;\n        while (!minHeap.empty()) {\n            ListNode* node = minHeap.top();\n            minHeap.pop();\n            tail->next = node;\n            tail = tail->next;\n            if (node->next != nullptr) {\n                minHeap.push(node->next);\n            }\n        }\n        return dummy.next;\n    }\n};`,
        explanation: [
          { line: 3, text: "Declare a comparator struct `CompareNodes` for `ListNode*`. Using `>` sets up a Min-Heap." },
          { line: 10, text: "Main function: takes vector of list heads, returns merged head." },
          { line: 11, text: "Declare Min-Heap priority queue using our comparator." },
          { line: 12, text: "Loop through each list's head." },
          { line: 13, text: "If the list head is not null, push it onto the heap." },
          { line: 17, text: "Create dummy node." },
          { line: 18, text: "Set tail pointer to dummy." },
          { line: 19, text: "Loop while the heap contains nodes." },
          { line: 20, text: "Pop the node with the smallest value from the top of the heap." },
          { line: 22, text: "Link it to `tail->next`." },
          { line: 23, text: "Advance the tail pointer." },
          { line: 24, text: "If the popped node has a next node, push it onto the heap to continue sorting." }
        ]
      },
      python: {
        code: `def mergeKLists(lists: list[Optional[ListNode]]) -> Optional[ListNode]:\n    # In Python, we can push tuples into heapq: (node.val, id, node)\n    # 'id' prevents direct node comparison when values are identical\n    min_heap = []\n    for i, head in enumerate(lists):\n        if head:\n            heapq.heappush(min_heap, (head.val, i, head))\n            \n    dummy = ListNode(0)\n    tail = dummy\n    while min_heap:\n        val, idx, node = heapq.heappop(min_heap)\n        tail.next = node\n        tail = tail.next\n        if node.next:\n            heapq.heappush(min_heap, (node.next.val, idx, node.next))\n    return dummy.next`,
        explanation: [
          { line: 1, text: "Define mergeKLists function." },
          { line: 4, text: "Initialize heap list." },
          { line: 5, text: "Push tuples containing node values, list indices, and node references onto the heap." },
          { line: 9, text: "Create dummy head." },
          { line: 11, text: "Loop while heap is not empty." },
          { line: 12, text: "Pop tuple. Link node to tail." },
          { line: 15, text: "If next node exists, push it onto heap using its list index `idx`." }
        ]
      },
      java: {
        code: `public ListNode mergeKLists(ListNode[] lists) {\n    PriorityQueue<ListNode> minHeap = new PriorityQueue<>((a, b) -> a.val - b.val);\n    for (ListNode head : lists) {\n        if (head != null) {\n            minHeap.add(head);\n        }\n    }\n    ListNode dummy = new ListNode(0);\n    ListNode tail = dummy;\n    while (!minHeap.isEmpty()) {\n        ListNode node = minHeap.poll();\n        tail.next = node;\n        tail = tail.next;\n        if (node.next != null) {\n            minHeap.add(node.next);\n        }\n    }\n    return dummy.next;\n}`,
        explanation: [
          { line: 1, text: "Declare method mergeKLists." },
          { line: 2, text: "Create PriorityQueue using lambda comparator comparing node values." },
          { line: 3, text: "Add all non-null head nodes." },
          { line: 8, text: "Create dummy head and tail pointers." },
          { line: 10, text: "Loop: poll smallest, link to tail, add next node to heap." }
        ]
      }
    }
  },
  {
    id: 295,
    name: "Find Median from Data Stream",
    difficulty: "Hard",
    topic: "Heap / Design",
    leetcodeUrl: "https://leetcode.com/problems/find-median-from-data-stream/",
    tip: "Use two Heaps: a Max-Heap `small` for the left half, and a Min-Heap `large` for the right half. Ensure their sizes differ by at most 1, and all elements in `small` are <= `large`. Median is either the top of the larger heap, or the average of their tops.",
    description: "Design a data structure that supports adding numbers from a data stream and finding the median of the numbers in constant time.",
    chatbotData: {
      intuition: "To find the median in O(1) time, we must divide the stream of numbers into two halves: the left half (smaller numbers) and the right half (larger numbers). We store the left half in a Max-Heap (so the largest number is at the top) and the right half in a Min-Heap (so the smallest number is at the top). When we add a number, we push it to the Max-Heap, then transfer the top element to the Min-Heap to keep them sorted. If the Min-Heap gets larger than the Max-Heap, we transfer the top element back. This keeps the heaps balanced.",
      complexity: "Time Complexity: O(log N) for `addNum` (heap insertions/deletions), and O(1) for `findMedian`.\nSpace Complexity: O(N) to store N elements in the two heaps.",
      edgeCases: "1. Empty data stream: findMedian returns 0 (handled by design).",
      debugging: "When balancing, make sure the difference in sizes between the Max-Heap and Min-Heap is at most 1. If sizes are equal, median is average of both tops. If unequal, it's the top of the heap with more elements."
    },
    solutions: {
      cpp: {
        code: `class MedianFinder {\nprivate:\n    priority_queue<int> maxHeap; // stores left half (smaller numbers)\n    priority_queue<int, vector<int>, greater<int>> minHeap; // stores right half (larger numbers)\n\npublic:\n    MedianFinder() {}\n    \n    void addNum(int num) {\n        maxHeap.push(num);\n        minHeap.push(maxHeap.top());\n        maxHeap.pop();\n        \n        if (maxHeap.size() < minHeap.size()) {\n            maxHeap.push(minHeap.top());\n            minHeap.pop();\n        }\n    }\n    \n    double findMedian() {\n        if (maxHeap.size() > minHeap.size()) {\n            return maxHeap.top();\n        }\n        return (maxHeap.top() + minHeap.top()) / 2.0;\n    }\n};`,
        explanation: [
          { line: 3, text: "Declare `maxHeap` to store the smaller half of elements." },
          { line: 4, text: "Declare `minHeap` to store the larger half of elements." },
          { line: 9, text: "addNum() function: pushes value to maxHeap." },
          { line: 11, text: "Transfer the largest element of maxHeap to minHeap to keep them sorted." },
          { line: 14, text: "If minHeap becomes larger, transfer its smallest element back to maxHeap. This ensures maxHeap is always equal to or 1 element larger than minHeap." },
          { line: 20, text: "findMedian() function: returns the median." },
          { line: 21, text: "If maxHeap is larger, the median is its top element." },
          { line: 24, text: "Otherwise, the size is even: return the average of the tops of both heaps." }
        ]
      },
      python: {
        code: `import heapq\n\nclass MedianFinder:\n    def __init__(self):\n        self.small = []  # max-heap (values inverted)\n        self.large = []  # min-heap\n\n    def addNum(self, num: int) -> None:\n        # Push to small (inverted to act as max-heap)\n        heapq.heappush(self.small, -num)\n        # Transfer to large\n        heapq.heappush(self.large, -heapq.heappop(self.small))\n        # Rebalance sizes\n        if len(self.small) < len(self.large):\n            heapq.heappush(self.small, -heapq.heappop(self.large))\n\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large):\n            return float(-self.small[0])\n        return (-self.small[0] + self.large[0]) / 2.0`,
        explanation: [
          { line: 1, text: "Import heapq." },
          { line: 4, text: "Constructor: initialize heaps. `self.small` is a Max-Heap, values are stored negative." },
          { line: 10, text: "Push negative value to simulate max-heap." },
          { line: 12, text: "Move element to min-heap to keep order." },
          { line: 14, text: "Enforce that Max-Heap `small` is larger or equal in size." },
          { line: 17, text: "findMedian(): retrieve values, reversing negations, and return median." }
        ]
      },
      java: {
        code: `class MedianFinder {\n    private PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);\n    private PriorityQueue<Integer> minHeap = new PriorityQueue<>();\n\n    public MedianFinder() {}\n    \n    public void addNum(int num) {\n        maxHeap.add(num);\n        minHeap.add(maxHeap.poll());\n        if (maxHeap.size() < minHeap.size()) {\n            maxHeap.add(minHeap.poll());\n        }\n    }\n    \n    public double findMedian() {\n        if (maxHeap.size() > minHeap.size()) {\n            return maxHeap.peek();\n        }\n        return (maxHeap.peek() + minHeap.peek()) / 2.0;\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare class MedianFinder." },
          { line: 2, text: "Create maxHeap using lambda descending order comparator." },
          { line: 3, text: "Create minHeap." },
          { line: 7, text: "addNum(): insert in maxHeap, transfer to minHeap, and rebalance sizes." },
          { line: 15, text: "findMedian(): check size parity and return median." }
        ]
      }
    }
  },
  {
    id: 239,
    name: "Sliding Window Maximum",
    difficulty: "Hard",
    topic: "Sliding Window",
    leetcodeUrl: "https://leetcode.com/problems/sliding-window-maximum/",
    tip: "Use a Doubly-Ended Queue (Deque) to store indices. Maintain the deque in a monotonically decreasing order of values. Remove indices that fall out of the window bounds from the front, and remove indices of smaller elements from the back.",
    description: "You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. Return the max sliding window.",
    chatbotData: {
      intuition: "To solve this in O(N), we use a Monotonic Deque. The deque will store indices of elements in the current window. We maintain the deque such that the values corresponding to these indices are in decreasing order (so the maximum value's index is always at the front). When we process `nums[i]`:\n1. If the index at the front of the deque is out of bounds (`front <= i - k`), we remove it.\n2. While the deque is not empty and the value of the last index in the deque is smaller than `nums[i]`, we pop it (since these elements can never be the maximum again).\n3. We push `i` to the back. The maximum is `nums[deque.front()]` once our window size reaches `k`.",
      complexity: "Time Complexity: O(N) because we iterate through the array of length N once, and each index is added and removed from the deque at most once.\nSpace Complexity: O(K) to store indices in the deque.",
      edgeCases: "1. K = 1: returns the array itself.",
      debugging: "Make sure you store the *indices* of the elements in the deque, not the values. Indices let you verify if an element has fallen out of the sliding window boundaries."
    },
    solutions: {
      cpp: {
        code: `vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n    deque<int> dq; // stores indices\n    vector<int> result;\n    for (int i = 0; i < nums.size(); i++) {\n        // 1. Remove indices that are out of bounds\n        if (!dq.empty() && dq.front() <= i - k) {\n            dq.pop_front();\n        }\n        // 2. Remove indices of elements smaller than current element\n        while (!dq.empty() && nums[dq.back()] < nums[i]) {\n            dq.pop_back();\n        }\n        // 3. Add current index\n        dq.push_back(i);\n        \n        // 4. Record maximum when window reaches size k\n        if (i >= k - 1) {\n            result.push_back(nums[dq.front()]);\n        }\n    }\n    return result;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes array reference and k, returns vector of maximums." },
          { line: 2, text: "Declare deque `dq` to store array indices." },
          { line: 3, text: "Declare result vector." },
          { line: 4, text: "Loop through array elements." },
          { line: 6, text: "Remove the index at the front of the deque if it has fallen out of the sliding window range (`i - k`)." },
          { line: 10, text: "Remove indices from the back of the deque if their corresponding values are smaller than `nums[i]`, as they cannot be the window maximum." },
          { line: 14, text: "Push the current index `i` onto the back of the deque." },
          { line: 17, text: "If we have processed at least `k` elements, the front of the deque is the maximum of the current window: add it to result." }
        ]
      },
      python: {
        code: `from collections import deque\n\ndef maxSlidingWindow(nums: list[int], k: int) -> list[int]:\n    dq = deque()  # stores indices\n    result = []\n    for i in range(len(nums)):\n        if dq and dq[0] <= i - k:\n            dq.popleft()\n        while dq and nums[dq[-1]] < nums[i]:\n            dq.pop()\n        dq.append(i)\n        if i >= k - 1:\n            result.append(nums[dq[0]])\n    return result`,
        explanation: [
          { line: 1, text: "Import deque." },
          { line: 3, text: "Define maxSlidingWindow function." },
          { line: 4, text: "Create empty deque and result list." },
          { line: 6, text: "Iterate indices." },
          { line: 7, text: "Remove index from front if it is out of bounds." },
          { line: 9, text: "Pop smaller elements from back to maintain monotonic property." },
          { line: 11, text: "Append current index." },
          { line: 12, text: "Append maximum (value at front index) when window reaches size `k`." }
        ]
      },
      java: {
        code: `public int[] maxSlidingWindow(int[] nums, int k) {\n    if (nums.length == 0) return new int[0];\n    int n = nums.length;\n    int[] result = new int[n - k + 1];\n    Deque<Integer> dq = new LinkedList<>(); // stores indices\n    int rIdx = 0;\n    for (int i = 0; i < n; i++) {\n        if (!dq.isEmpty() && dq.peekFirst() <= i - k) {\n            dq.pollFirst();\n        }\n        while (!dq.isEmpty() && nums[dq.peekLast()] < nums[i]) {\n            dq.pollLast();\n        }\n        dq.offerLast(i);\n        if (i >= k - 1) {\n            result[rIdx++] = nums[dq.peekFirst()];\n        }\n    }\n    return result;\n}`,
        explanation: [
          { line: 1, text: "Declare method maxSlidingWindow." },
          { line: 5, text: "Initialize Deque." },
          { line: 7, text: "Loop elements." },
          { line: 8, text: "Verify and poll out-of-bounds front index." },
          { line: 11, text: "Poll smaller elements from back of deque." },
          { line: 14, text: "Add current index to back." },
          { line: 15, text: "If window is full, write maximum (value at front index) to results." }
        ]
      }
    }
  }
];
