export const day9Problems = [
  {
    id: 39,
    name: "Combination Sum",
    difficulty: "Medium",
    topic: "Backtracking",
    leetcodeUrl: "https://leetcode.com/problems/combination-sum/",
    tip: "Use DFS Backtracking. In each step, you can either include the current candidate (allowing repetition by staying at index `i`) or skip it (move to index `i+1`). Base cases are `target == 0` (success) and `target < 0` (fail).",
    description: "Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order.",
    chatbotData: {
      intuition: "We can visualize the search space as a decision tree. At each node, we choose whether to add the candidate at the current index to our combination. If we add it, we subtract its value from target, and recursively search *starting from the same index* (since we can reuse the same candidate). If we skip it, we move to the next candidate. We backtrack by popping the last added candidate to restore state.",
      complexity: "Time Complexity: O(2^T) where T is the target value. The height of the decision tree is at most target / min_candidate.\nSpace Complexity: O(T/min_candidate) to store the current combination and recursion stack.",
      edgeCases: "1. Empty candidates: returns empty array.\n2. Target is smaller than any candidate: returns empty array.",
      debugging: "When backtracking, make sure you pop the element from your current path list (`path.pop_back()` or `path.pop()`) *after* the recursive call returns, to keep the path state correct for other search branches."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    void backtrack(int i, vector<int>& candidates, int target, vector<int>& current, vector<vector<int>>& result) {\n        if (target == 0) {\n            result.push_back(current);\n            return;\n        }\n        if (i >= candidates.size() || target < 0) {\n            return;\n        }\n        // Option 1: Choose the candidate at index i\n        current.push_back(candidates[i]);\n        backtrack(i, candidates, target - candidates[i], current, result);\n        current.pop_back(); // backtrack\n        \n        // Option 2: Skip the candidate and move to next index\n        backtrack(i + 1, candidates, target, current, result);\n    }\n\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        vector<vector<int>> result;\n        vector<int> current;\n        backtrack(0, candidates, target, current, result);\n        return result;\n    }\n};`,
        explanation: [
          { line: 3, text: "DFS backtracking helper function. `i` is current candidate index, `target` is remaining target, `current` is active path." },
          { line: 4, text: "Base case: if remaining target is 0, we found a valid combination: save it." },
          { line: 8, text: "Base case: if we run out of candidates OR target becomes negative (overshoot), terminate branch." },
          { line: 12, text: "Choose the current candidate: add it to our path." },
          { line: 13, text: "Recurse, subtracting candidate value from target. We pass index `i` (not `i + 1`) to allow reuse." },
          { line: 14, text: "Backtrack: remove the candidate from our path to restore state for other options." },
          { line: 17, text: "Choose to skip the current candidate and move to next index `i + 1`." },
          { line: 21, text: "Main function: initializes search variables and returns result list." }
        ]
      },
      python: {
        code: `class Solution:\n    def combinationSum(self, candidates: list[int], target: int) -> list[list[int]]:\n        result = []\n        \n        def backtrack(i, current, total):\n            if total == target:\n                result.append(list(current))\n                return\n            if i >= len(candidates) or total > target:\n                return\n            \n            # Option 1: Choose candidate\n            current.append(candidates[i])\n            backtrack(i, current, total + candidates[i])\n            current.pop() # backtrack\n            \n            # Option 2: Skip candidate\n            backtrack(i + 1, current, total)\n            \n        backtrack(0, [], 0)\n        return result`,
        explanation: [
          { line: 1, text: "Define Solution class." },
          { line: 3, text: "Initialize output list." },
          { line: 5, text: "Define recursive backtracking helper with target tracker `total`." },
          { line: 6, text: "If `total` matches target, append a copy of `current` to results." },
          { line: 9, text: "If invalid path, exit recursive branch." },
          { line: 13, text: "Choose element: append it, run recursion, then pop to backtrack." },
          { line: 18, text: "Skip element: call recursion with index `i + 1`." }
        ]
      },
      java: {
        code: `class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        List<List<Integer>> result = new ArrayList<>();\n        backtrack(0, candidates, target, new ArrayList<>(), result);\n        return result;\n    }\n    \n    private void backtrack(int i, int[] candidates, int target, List<Integer> current, List<List<Integer>> result) {\n        if (target == 0) {\n            result.add(new ArrayList<>(current));\n            return;\n        }\n        if (i >= candidates.length || target < 0) return;\n        \n        current.add(candidates[i]);\n        backtrack(i, candidates, target - candidates[i], current, result);\n        current.remove(current.size() - 1);\n        \n        backtrack(i + 1, candidates, target, current, result);\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare Solution class." },
          { line: 2, text: "Main method returning combination lists." },
          { line: 8, text: "Backtracking helper method." },
          { line: 9, text: "On success, add a copy of the path `new ArrayList<>(current)` to results." },
          { line: 15, text: "Add element, recurse, then remove last element to backtrack." },
          { line: 19, text: "Recurse on next index." }
        ]
      }
    }
  },
  {
    id: 46,
    name: "Permutations",
    difficulty: "Medium",
    topic: "Backtracking",
    leetcodeUrl: "https://leetcode.com/problems/permutations/",
    tip: "Use backtracking. Track visited numbers using a boolean array or set. Loop through candidates, choosing unvisited numbers, recursing, and unchoosing them.",
    description: "Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.",
    chatbotData: {
      intuition: "To form all permutations of size N, we must place each number in every position. We write a backtracking function. We maintain a list of numbers in our `current` permutation path. In each recursive call, we loop through all numbers in `nums`. If a number is already in our path, we skip it. If not, we add it, recurse to fill the next position, and then backtrack by popping it.",
      complexity: "Time Complexity: O(N * N!) since there are N! permutations, and creating a copy of each takes O(N) time.\nSpace Complexity: O(N) to store the recursion stack and path array.",
      edgeCases: "1. Size 1 array: returns [[element]].",
      debugging: "Do not forget to copy/clone the path list when appending to the final result, otherwise you will append references that get modified in subsequent backtracking steps."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    void backtrack(vector<int>& nums, vector<bool>& used, vector<int>& current, vector<vector<int>>& result) {\n        if (current.size() == nums.size()) {\n            result.push_back(current);\n            return;\n        }\n        for (int i = 0; i < nums.size(); i++) {\n            if (used[i]) continue;\n            used[i] = true;\n            current.push_back(nums[i]);\n            backtrack(nums, used, current, result);\n            current.pop_back(); // backtrack\n            used[i] = false;\n        }\n    }\n\npublic:\n    vector<vector<int>> permute(vector<int>& nums) {\n        vector<vector<int>> result;\n        vector<int> current;\n        vector<bool> used(nums.size(), false);\n        backtrack(nums, used, current, result);\n        return result;\n    }\n};`,
        explanation: [
          { line: 3, text: "DFS backtracking helper: takes candidates, visited states, current path, and result accumulator." },
          { line: 4, text: "Base case: if the path length matches candidate length, we formed a full permutation: save it." },
          { line: 8, text: "Loop through all numbers in `nums`." },
          { line: 9, text: "If the number is already used in our current path, skip it." },
          { line: 10, text: "Mark the number as used." },
          { line: 11, text: "Add the number to `current` path." },
          { line: 12, text: "Recursively build the rest of the permutation." },
          { line: 13, text: "Backtrack: remove the number from path." },
          { line: 14, text: "Mark the number as unused for other branches." }
        ]
      },
      python: {
        code: `def permute(nums: list[int]) -> list[list[int]]:\n    result = []\n    \n    def backtrack(current):\n        if len(current) == len(nums):\n            result.append(list(current))\n            return\n        for num in nums:\n            if num not in current:\n                current.append(num)\n                backtrack(current)\n                current.pop() # backtrack\n                \n    backtrack([])\n    return result`,
        explanation: [
          { line: 1, text: "Define permute function." },
          { line: 4, text: "Define helper: uses list containment `num not in current` to check visited state." },
          { line: 5, text: "Save copy if full permutation is formed." },
          { line: 10, text: "Choose, recurse, and pop to backtrack." }
        ]
      },
      java: {
        code: `class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        backtrack(nums, new boolean[nums.length], new ArrayList<>(), result);\n        return result;\n    }\n    \n    private void backtrack(int[] nums, boolean[] used, List<Integer> current, List<List<Integer>> result) {\n        if (current.size() == nums.length) {\n            result.add(new ArrayList<>(current));\n            return;\n        }\n        for (int i = 0; i < nums.length; i++) {\n            if (used[i]) continue;\n            used[i] = true;\n            current.add(nums[i]);\n            backtrack(nums, used, current, result);\n            current.remove(current.size() - 1);\n            used[i] = false;\n        }\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare Solution class." },
          { line: 4, text: "Call backtracking helper with a boolean visited array." },
          { line: 9, text: "Save a copy of path if complete." },
          { line: 13, text: "Loop through nodes: mark used, add to list, recurse, backtrack." }
        ]
      }
    }
  },
  {
    id: 78,
    name: "Subsets",
    difficulty: "Medium",
    topic: "Backtracking",
    leetcodeUrl: "https://leetcode.com/problems/subsets/",
    tip: "Use backtracking. At each index, you have two choices: either include the current element in your subset and recurse, or skip it and recurse. (This builds the power set).",
    description: "Given an integer array `nums` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    chatbotData: {
      intuition: "For each element in the array, we can choose to either include it in our subset or exclude it. This forms a decision tree of height N where each level represents an element. The leaf nodes of this tree represent all possible subsets (size 2^N). We write a DFS function `backtrack(i)` that explores both decisions: including `nums[i]` (adds to path, recurses, pops) and excluding it (recurses directly).",
      complexity: "Time Complexity: O(N * 2^N) because there are 2^N subsets, and copying each subset to result takes O(N) time.\nSpace Complexity: O(N) for the recursion stack.",
      edgeCases: "1. Empty array: returns [[]].",
      debugging: "Make sure you increment the index parameter `i + 1` in both recursive branches (include and exclude) to move down the tree level."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    void backtrack(int i, vector<int>& nums, vector<int>& current, vector<vector<int>>& result) {\n        if (i == nums.size()) {\n            result.push_back(current);\n            return;\n        }\n        // Option 1: Include nums[i]\n        current.push_back(nums[i]);\n        backtrack(i + 1, nums, current, result);\n        current.pop_back(); // backtrack\n        \n        // Option 2: Exclude nums[i]\n        backtrack(i + 1, nums, current, result);\n    }\n\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        vector<vector<int>> result;\n        vector<int> current;\n        backtrack(0, nums, current, result);\n        return result;\n    }\n};`,
        explanation: [
          { line: 3, text: "Helper function: takes current index `i`, inputs, current subset path, and results vector." },
          { line: 4, text: "Base case: if index reaches end of array, we've decided on all elements: save subset." },
          { line: 8, text: "Include: add `nums[i]` to path." },
          { line: 10, text: "Recurse on next index `i + 1`." },
          { line: 11, text: "Backtrack: remove `nums[i]`." },
          { line: 14, text: "Exclude: run recursion on next index `i + 1` without adding `nums[i]`." }
        ]
      },
      python: {
        code: `def subsets(nums: list[int]) -> list[list[int]]:\n    result = []\n    \n    def backtrack(i, current):\n        if i == len(nums):\n            result.append(list(current))\n            return\n        # Include nums[i]\n        current.append(nums[i])\n        backtrack(i + 1, current)\n        current.pop() # backtrack\n        \n        # Exclude nums[i]\n        backtrack(i + 1, current)\n        \n    backtrack(0, [])\n    return result`,
        explanation: [
          { line: 1, text: "Define subsets function." },
          { line: 4, text: "Define backtracking helper." },
          { line: 5, text: "Save copy if index reaches list end." },
          { line: 8, text: "Option 1: choose element, recurse, pop." },
          { line: 13, text: "Option 2: skip element, recurse." }
        ]
      },
      java: {
        code: `class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        backtrack(0, nums, new ArrayList<>(), result);\n        return result;\n    }\n    \n    private void backtrack(int i, int[] nums, List<Integer> current, List<List<Integer>> result) {\n        if (i == nums.length) {\n            result.add(new ArrayList<>(current));\n            return;\n        }\n        current.add(nums[i]);\n        backtrack(i + 1, nums, current, result);\n        current.remove(current.size() - 1);\n        \n        backtrack(i + 1, nums, current, result);\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare Solution class." },
          { line: 4, text: "Call backtracking helper." },
          { line: 9, text: "Add copy of subset when list index reaches the end." },
          { line: 13, text: "Choose, recurse, backtrack, then recurse skip branch." }
        ]
      }
    }
  },
  {
    id: 79,
    name: "Word Search",
    difficulty: "Medium",
    topic: "Backtracking / DFS",
    leetcodeUrl: "https://leetcode.com/problems/word-search/",
    tip: "Use DFS Backtracking. From each grid cell, search for the word. Temp-mark the cell as visited (e.g. char `#`) before recursing, then restore its original character after backtracking.",
    description: "Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid.",
    chatbotData: {
      intuition: "We scan the grid. If a cell matches the first letter of `word`, we start a DFS backtracking search from there. Our DFS matches the next character of the word in all 4 neighbor directions. To avoid using the same cell twice in a path, we temporarily mark the current cell as visited (e.g., replace it with `#`) before recurse calls. Once the recursive searches finish, we restore the original character (backtrack). If index reaches `word.length()`, we successfully matched the word.",
      complexity: "Time Complexity: O(M * N * 3^L) where M x N is board size and L is word length. At each cell, we search 3 directions (excluding the cell we came from).\nSpace Complexity: O(L) representing the DFS call stack.",
      edgeCases: "1. Single cell matching: returns true.\n2. Path intersects itself: backtracking visited marker prevents reusing cells, handled correctly.",
      debugging: "Remember to restore `board[r][c] = temp` (backtrack) before returning from the function. If you skip this, cells will remain blocked for other searches."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    bool dfs(vector<vector<char>>& board, string& word, int r, int c, int index) {\n        if (index == word.length()) return true;\n        int m = board.size(), n = board[0].size();\n        if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] != word[index]) return false;\n        \n        char temp = board[r][c];\n        board[r][c] = '#'; // mark visited\n        \n        bool found = dfs(board, word, r - 1, c, index + 1) ||\n                     dfs(board, word, r + 1, c, index + 1) ||\n                     dfs(board, word, r, c - 1, index + 1) ||\n                     dfs(board, word, r, c + 1, index + 1);\n                     \n        board[r][c] = temp; // backtrack\n        return found;\n    }\n\npublic:\n    bool exist(vector<vector<char>>& board, string word) {\n        for (int r = 0; r < board.size(); r++) {\n            for (int c = 0; c < board[0].size(); c++) {\n                if (dfs(board, word, r, c, 0)) return true;\n            }\n        }\n        return false;\n    }\n};`,
        explanation: [
          { line: 3, text: "Helper DFS function: checks if `word` exists starting from cell (r, c) matching characters from `index`." },
          { line: 4, text: "Base case: if index matches word length, the entire word has been found: return true." },
          { line: 6, text: "Base case: return false if out of bounds OR cell character doesn't match current word character." },
          { line: 8, text: "Save cell value to `temp`." },
          { line: 9, text: "Mark cell visited by replacing its character with `#`." },
          { line: 11, text: "Recursively check all four directions for the next character (`index + 1`). If any direction succeeds, set `found` to true." },
          { line: 16, text: "Backtrack: restore the original character saved in `temp`." },
          { line: 17, text: "Return search result." },
          { line: 22, text: "Main loops to find starting cell." }
        ]
      },
      python: {
        code: `class Solution:\n    def exist(self, board: list[list[str]], word: str) -> bool:\n        m, n = len(board), len(board[0])\n        \n        def dfs(r, c, index):\n            if index == len(word):\n                return True\n            if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[index]:\n                return False\n            \n            temp = board[r][c]\n            board[r][c] = '#'\n            found = dfs(r - 1, c, index + 1) or \\\n                    dfs(r + 1, c, index + 1) or \\\n                    dfs(r, c - 1, index + 1) or \\\n                    dfs(r, c + 1, index + 1)\n            board[r][c] = temp\n            return found\n            \n        for r in range(m):\n            for c in range(n):\n                if dfs(r, c, 0):\n                    return True\n        return False`,
        explanation: [
          { line: 1, text: "Define Solution class." },
          { line: 3, text: "Get dimensions." },
          { line: 5, text: "Define DFS search helper." },
          { line: 6, text: "Return True if index matches word length." },
          { line: 8, text: "Verify bounds and mismatch." },
          { line: 11, text: "Save character, mark visited with `#`, recurse neighbors, and restore character." }
        ]
      },
      java: {
        code: `class Solution {\n    public boolean exist(char[][] board, String word) {\n        int m = board.length, n = board[0].length;\n        for (int r = 0; r < m; r++) {\n            for (int c = 0; c < n; c++) {\n                if (dfs(board, word, r, c, 0)) return true;\n            }\n        }\n        return false;\n    }\n    \n    private boolean dfs(char[][] board, String word, int r, int c, int index) {\n        if (index == word.length()) return true;\n        int m = board.length, n = board[0].length;\n        if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] != word.charAt(index)) return false;\n        char temp = board[r][c];\n        board[r][c] = '#';\n        boolean found = dfs(board, word, r - 1, c, index + 1) ||\n                        dfs(board, word, r + 1, c, index + 1) ||\n                        dfs(board, word, r, c - 1, index + 1) ||\n                        dfs(board, word, r, c + 1, index + 1);\n        board[r][c] = temp;\n        return found;\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare Solution class." },
          { line: 4, text: "Scan cells to find starting cell." },
          { line: 12, text: "DFS backtracking helper method." },
          { line: 13, text: "On word end reached, return true." },
          { line: 15, text: "Verify valid coordinates and matches character at index using `charAt`." },
          { line: 16, text: "Save value, mark visited, search neighbors, and restore state." }
        ]
      }
    }
  },
  {
    id: 131,
    name: "Palindrome Partitioning",
    difficulty: "Medium",
    topic: "Backtracking",
    leetcodeUrl: "https://leetcode.com/problems/palindrome-partitioning/",
    tip: "Use backtracking. Loop through indices to find prefix substrings. If the prefix `s[start...i]` is a palindrome, add it to your path and recurse from index `i + 1`. Pop to backtrack.",
    description: "Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of `s`.",
    chatbotData: {
      intuition: "We want to split the string into parts that are all palindromes. We write a backtracking function `backtrack(start)`. We iterate through index `i` from `start` to `end`. At each step, we look at the prefix `s[start...i]`. If this prefix is a palindrome, we add it to our path, and recursively partition the remaining string `s[i+1...end]`. When we reach the end of the string, we save a copy of our path.",
      complexity: "Time Complexity: O(N * 2^N) because there are 2^(N-1) possible partition structures, and checking if a substring is a palindrome takes O(N).\nSpace Complexity: O(N) representing the recursive stack.",
      edgeCases: "1. Empty string: returns [[]].\n2. String with all unique characters: only size-1 partitions are returned.",
      debugging: "Verify that your palindrome check helper function correctly handles single characters and boundaries."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    bool isPalindrome(string& s, int l, int r) {\n        while (l < r) {\n            if (s[l] != s[r]) return false;\n            l++; r--;\n        }\n        return true;\n    }\n    \n    void backtrack(int start, string& s, vector<string>& current, vector<vector<string>>& result) {\n        if (start == s.length()) {\n            result.push_back(current);\n            return;\n        }\n        for (int i = start; i < s.length(); i++) {\n            if (isPalindrome(s, start, i)) {\n                current.push_back(s.substr(start, i - start + 1));\n                backtrack(i + 1, s, current, result);\n                current.pop_back(); // backtrack\n            }\n        }\n    }\n\npublic:\n    vector<vector<string>> partition(string s) {\n        vector<vector<string>> result;\n        vector<string> current;\n        backtrack(0, s, current, result);\n        return result;\n    }\n};`,
        explanation: [
          { line: 3, text: "Helper function: returns true if substring `s[l...r]` is a palindrome." },
          { line: 11, text: "DFS backtracking helper: `start` is beginning index, `current` is list of partitions." },
          { line: 12, text: "Base case: if start index reaches the end of the string, we successfully partitioned the whole string: save it." },
          { line: 16, text: "Loop through possible ending indices `i` for our prefix." },
          { line: 17, text: "If the prefix `s[start...i]` is a palindrome." },
          { line: 18, text: "Extract the substring and add it to `current` path." },
          { line: 19, text: "Recursively search starting from next character index `i + 1`." },
          { line: 20, text: "Backtrack: remove the substring to explore other divisions." }
        ]
      },
      python: {
        code: `class Solution:\n    def partition(self, s: str) -> list[list[str]]:\n        result = []\n        \n        def is_palindrome(sub):\n            return sub == sub[::-1]\n            \n        def backtrack(start, current):\n            if start == len(s):\n                result.append(list(current))\n                return\n            for i in range(start, len(s)):\n                prefix = s[start:i+1]\n                if is_palindrome(prefix):\n                    current.append(prefix)\n                    backtrack(i + 1, current)\n                    current.pop() # backtrack\n                    \n        backtrack(0, [])\n        return result`,
        explanation: [
          { line: 1, text: "Define Solution class." },
          { line: 5, text: "Define palindrome checker using slice syntax `sub == sub[::-1]`." },
          { line: 8, text: "Define backtracking helper." },
          { line: 14, text: "Check if prefix is palindrome. If yes, append, recurse, and pop." }
        ]
      },
      java: {
        code: `class Solution {\n    public List<List<String>> partition(String s) {\n        List<List<String>> result = new ArrayList<>();\n        backtrack(0, s, new ArrayList<>(), result);\n        return result;\n    }\n    \n    private void backtrack(int start, String s, List<String> current, List<List<String>> result) {\n        if (start == s.length()) {\n            result.add(new ArrayList<>(current));\n            return;\n        }\n        for (int i = start; i < s.length(); i++) {\n            if (isPalindrome(s, start, i)) {\n                current.add(s.substring(start, i + 1));\n                backtrack(i + 1, s, current, result);\n                current.remove(current.size() - 1);\n            }\n        }\n    }\n    \n    private boolean isPalindrome(String s, int l, int r) {\n        while (l < r) {\n            if (s.charAt(l) != s.charAt(r)) return false;\n            l++; r--;\n        }\n        return true;\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare Solution class." },
          { line: 4, text: "Call backtracking helper." },
          { line: 9, text: "Add copy of partition list on reaching end." },
          { line: 13, text: "Loop partitions, check palindrome, add substring, recurse, backtrack." },
          { line: 22, text: "Helper method isPalindrome." }
        ]
      }
    }
  },
  {
    id: 215,
    name: "Kth Largest Element",
    difficulty: "Medium",
    topic: "Heap",
    leetcodeUrl: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    tip: "Use a Min-Heap (priority queue) of size `k`. Push elements onto the heap. If heap size exceeds `k`, pop the smallest element. At the end, the top of the heap is the k-th largest element.",
    description: "Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array.",
    chatbotData: {
      intuition: "Instead of sorting the entire array (O(N log N)), we can use a Min-Heap to find the Kth largest element in O(N log K) time. We maintain a Min-Heap of size at most `K`. When we push a number onto the heap, if the heap size exceeds `K`, we pop the smallest element (the root). By popping the smallest elements, the heap will always keep the `K` largest elements seen so far. At the end of the array, the smallest element of these `K` largest elements (which is the root at the top of the Min-Heap) is our answer.",
      complexity: "Time Complexity: O(N log K) since heap insertions/deletions take O(log K) time for N elements.\nSpace Complexity: O(K) to store K elements in the Min-Heap.",
      edgeCases: "1. K = 1: returns the maximum element.\n2. K = N: returns the minimum element.",
      debugging: "Ensure you use a Min-Heap (keeps smallest elements at the top) rather than a Max-Heap (keeps largest elements at the top), because we want to discard small elements and keep the largest ones."
    },
    solutions: {
      cpp: {
        code: `int findKthLargest(vector<int>& nums, int k) {\n    priority_queue<int, vector<int>, greater<int>> minHeap;\n    for (int num : nums) {\n        minHeap.push(num);\n        if (minHeap.size() > k) {\n            minHeap.pop();\n        }\n    }\n    return minHeap.top();\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes integer vector reference and target k, returns value." },
          { line: 2, text: "Declare a Min-Heap using `std::greater` comparator in `priority_queue`." },
          { line: 3, text: "Loop through each number `num` in the array." },
          { line: 4, text: "Push the current number onto our heap." },
          { line: 5, text: "If the heap size grows larger than `k`." },
          { line: 6, text: "Pop the smallest element from the top of the heap." },
          { line: 9, text: "Return the top of the heap, which is the smallest of the k largest elements (the kth largest)." }
        ]
      },
      python: {
        code: `import heapq\n\ndef findKthLargest(nums: list[int], k: int) -> int:\n    min_heap = []\n    for num in nums:\n        heapq.heappush(min_heap, num)\n        if len(min_heap) > k:\n            heapq.heappop(min_heap)\n    return min_heap[0]`,
        explanation: [
          { line: 1, text: "Import `heapq` module." },
          { line: 3, text: "Define findKthLargest function." },
          { line: 4, text: "Initialize empty heap list." },
          { line: 6, text: "Push number onto the heap (heapq treats lists as Min-Heaps by default)." },
          { line: 7, text: "If heap size exceeds `k`, pop the smallest element." },
          { line: 9, text: "Return the root element `min_heap[0]`." }
        ]
      },
      java: {
        code: `public int findKthLargest(int[] nums, int k) {\n    PriorityQueue<Integer> minHeap = new PriorityQueue<>(); // default is Min-Heap\n    for (int num : nums) {\n        minHeap.add(num);\n        if (minHeap.size() > k) {\n            minHeap.poll();\n        }\n    }\n    return minHeap.peek();\n}`,
        explanation: [
          { line: 1, text: "Declare method findKthLargest." },
          { line: 2, text: "Create a PriorityQueue (defaults to a Min-Heap in Java)." },
          { line: 3, text: "Loop through array elements." },
          { line: 4, text: "Add element to heap." },
          { line: 5, text: "Evict smallest element if size exceeds `k`." },
          { line: 9, text: "Return root element (`peek()`)." }
        ]
      }
    }
  },
  {
    id: 347,
    name: "Top K Frequent Elements",
    difficulty: "Medium",
    topic: "Heap / HashMap",
    leetcodeUrl: "https://leetcode.com/problems/top-k-frequent-elements/",
    tip: "Count character frequencies using a Hash Map. Push `(frequency, number)` pairs onto a Min-Heap of size `k`. Evict elements when size exceeds `k`. Extract numbers from heap at the end.",
    description: "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.",
    chatbotData: {
      intuition: "First, we count the frequencies of all numbers in a Hash Map `num -> frequency`. Then we want to find the `K` elements with the highest frequencies. We can use a Min-Heap of size `K`, where we store pairs of `(frequency, number)`. We push each map entry onto the heap. If heap size exceeds `K`, we pop the entry with the lowest frequency. The heap will end up with the `K` most frequent items.",
      complexity: "Time Complexity: O(N log K) since we insert up to N unique elements into a heap of size at most K.\nSpace Complexity: O(N) to store frequencies in the Hash Map.",
      edgeCases: "1. K equals the count of unique elements: returns all unique elements.",
      debugging: "When defining the heap elements, make sure the comparison is based on the frequency, not the number itself. In C++/Java, use custom comparators or pair structures."
    },
    solutions: {
      cpp: {
        code: `vector<int> topKFrequent(vector<int>& nums, int k) {\n    unordered_map<int, int> counts;\n    for (int num : nums) counts[num]++;\n    \n    // Min-heap: pair<frequency, value>\n    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;\n    for (auto const& [val, count] : counts) {\n        minHeap.push({count, val});\n        if (minHeap.size() > k) {\n            minHeap.pop();\n        }\n    }\n    vector<int> result;\n    while (!minHeap.empty()) {\n        result.push_back(minHeap.top().second);\n        minHeap.pop();\n    }\n    return result;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes array and k, returns vector of top k frequent elements." },
          { line: 2, text: "Populate frequency mapping `counts` for each number." },
          { line: 6, text: "Declare Min-Heap storing `pair<frequency, value>`. Pairs sort by first element (frequency) automatically." },
          { line: 7, text: "Iterate through each entry in the map." },
          { line: 8, text: "Push pair of `{count, val}` onto the heap." },
          { line: 9, text: "If heap size exceeds `k`, pop the pair with the lowest frequency." },
          { line: 13, text: "Declare result vector." },
          { line: 14, text: "Extract the value (`pair.second`) from remaining items in heap." }
        ]
      },
      python: {
        code: `def topKFrequent(nums: list[int], k: int) -> list[int]:\n    counts = {}\n    for num in nums:\n        counts[num] = counts.get(num, 0) + 1\n    \n    # min-heap: (frequency, value)\n    min_heap = []\n    for val, freq in counts.items():\n        heapq.heappush(min_heap, (freq, val))\n        if len(min_heap) > k:\n            heapq.heappop(min_heap)\n            \n    return [item[1] for item in min_heap]`,
        explanation: [
          { line: 1, text: "Define topKFrequent function." },
          { line: 2, text: "Count frequencies in dictionary." },
          { line: 7, text: "Initialize empty heap list." },
          { line: 8, text: "Push `(freq, val)` tuples onto the heap." },
          { line: 10, text: "Evict smallest frequency element when size exceeds `k`." },
          { line: 13, text: "Extract values from remaining heap items." }
        ]
      },
      java: {
        code: `public int[] topKFrequent(int[] nums, int k) {\n    Map<Integer, Integer> counts = new HashMap<>();\n    for (int num : nums) counts.put(num, counts.getOrDefault(num, 0) + 1);\n    \n    // Compare entries by their frequency value\n    PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);\n    for (Map.Entry<Integer, Integer> entry : counts.entrySet()) {\n        minHeap.add(new int[]{entry.getValue(), entry.getKey()});\n        if (minHeap.size() > k) {\n            minHeap.poll();\n        }\n    }\n    int[] result = new int[k];\n    for (int i = 0; i < k; i++) {\n        result[i] = minHeap.poll()[1];\n    }\n    return result;\n}`,
        explanation: [
          { line: 1, text: "Declare method topKFrequent." },
          { line: 2, text: "Populate frequency map." },
          { line: 6, text: "Create PriorityQueue of size-2 arrays using custom lambda comparator comparing by index 0 (frequency)." },
          { line: 7, text: "Add map entries to heap, enforcing size limits." },
          { line: 13, text: "Create result array of size `k`." },
          { line: 14, text: "Poll heap elements and save values to result." }
        ]
      }
    }
  },
  {
    id: 208,
    name: "Implement Trie",
    difficulty: "Medium",
    topic: "Trie / Design",
    leetcodeUrl: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    tip: "A TrieNode has an array/map of child pointers (size 26) and a boolean `isEndOfWord`. To insert/search, traverse down child nodes matching the word's characters.",
    description: "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement the `Trie` class.",
    chatbotData: {
      intuition: "A Trie (Prefix Tree) is a tree structure where each node represents a character. It allows word search and prefix search in O(WordLength) time. Each `TrieNode` has an array of child nodes (size 26 for standard lowercase English letters) and a boolean flag `isEndOfWord`. To insert a word, we start at root and traverse down. If a character node doesn't exist, we create it. At the last character, we set `isEndOfWord = true`. Search traverses similarly and checks the end flag. Prefix search just checks if the path exists.",
      complexity: "Time Complexity: O(L) for `insert`, `search`, and `startsWith`, where L is word/prefix length.\nSpace Complexity: O(N * L) where N is words count and L is average length, since nodes are shared between words with common prefixes.",
      edgeCases: "1. Empty searches: handled correctly.\n2. Checking prefix of a word that is already fully inserted: startsWith returns true, search returns true.",
      debugging: "Make sure you initialize the child pointers to null (or None) when creating a new `TrieNode` to avoid memory errors."
    },
    solutions: {
      cpp: {
        code: `class TrieNode {\npublic:\n    TrieNode* children[26];\n    bool isEndOfWord;\n    TrieNode() {\n        isEndOfWord = false;\n        for (int i = 0; i < 26; i++) {\n            children[i] = nullptr;\n        }\n    }\n};\n\nclass Trie {\nprivate:\n    TrieNode* root;\n\npublic:\n    Trie() {\n        root = new TrieNode();\n    }\n    \n    void insert(string word) {\n        TrieNode* curr = root;\n        for (char c : word) {\n            int idx = c - 'a';\n            if (curr->children[idx] == nullptr) {\n                curr->children[idx] = new TrieNode();\n            }\n            curr = curr->children[idx];\n        }\n        curr->isEndOfWord = true;\n    }\n    \n    bool search(string word) {\n        TrieNode* curr = root;\n        for (char c : word) {\n            int idx = c - 'a';\n            if (curr->children[idx] == nullptr) return false;\n            curr = curr->children[idx];\n        }\n        return curr->isEndOfWord;\n    }\n    \n    bool startsWith(string prefix) {\n        TrieNode* curr = root;\n        for (char c : prefix) {\n            int idx = c - 'a';\n            if (curr->children[idx] == nullptr) return false;\n            curr = curr->children[idx];\n        }\n        return true;\n    }\n};`,
        explanation: [
          { line: 1, text: "Define helper class `TrieNode` representing a node in our tree." },
          { line: 3, text: "Array of 26 pointers for children ('a'-'z')." },
          { line: 4, text: "Boolean flag representing if node is the end of an inserted word." },
          { line: 5, text: "Constructor: sets flag false and initializes all children pointers to `nullptr`." },
          { line: 13, text: "Define main class `Trie`." },
          { line: 18, text: "Constructor: instantiates root node." },
          { line: 22, text: "insert(): loops characters, maps 'a'-'z' to index `c - 'a'`. Creates new nodes if missing, advances pointer, marks `isEndOfWord = true` at end." },
          { line: 34, text: "search(): traverses matching characters, returns false if a child is missing. At the end, returns true if `isEndOfWord` is true." },
          { line: 44, text: "startsWith(): same search traversal, but returns true immediately on reaching end of prefix (regardless of `isEndOfWord` flag)." }
        ]
      },
      python: {
        code: `class TrieNode:\n    def __init__(self):\n        self.children = {}  # char -> TrieNode\n        self.is_end_of_word = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def insert(self, word: str) -> None:\n        curr = self.root\n        for char in word:\n            if char not in curr.children:\n                curr.children[char] = TrieNode()\n            curr = curr.children[char]\n        curr.is_end_of_word = True\n\n    def search(self, word: str) -> bool:\n        curr = self.root\n        for char in word:\n            if char not in curr.children:\n                return False\n            curr = curr.children[char]\n        return curr.is_end_of_word\n\n    def startsWith(self, prefix: str) -> bool:\n        curr = self.root\n        for char in prefix:\n            if char not in curr.children:\n                return False\n            curr = curr.children[char]\n        return True`,
        explanation: [
          { line: 1, text: "Define TrieNode class." },
          { line: 3, text: "Use Python dictionary to map character to node." },
          { line: 6, text: "Define Trie class." },
          { line: 10, text: "insert(): traverse character keys, create node if key is absent, set end flag." },
          { line: 18, text: "search(): return False on missing keys, return end flag at end." },
          { line: 26, text: "startsWith(): check matching path existence, return True." }
        ]
      },
      java: {
        code: `class TrieNode {\n    TrieNode[] children = new TrieNode[26];\n    boolean isEndOfWord = false;\n}\n\nclass Trie {\n    private TrieNode root;\n\n    public Trie() {\n        root = new TrieNode();\n    }\n    \n    public void insert(String word) {\n        TrieNode curr = root;\n        for (char c : word.toCharArray()) {\n            int idx = c - 'a';\n            if (curr.children[idx] == null) {\n                curr.children[idx] = new TrieNode();\n            }\n            curr = curr.children[idx];\n        }\n        curr.isEndOfWord = true;\n    }\n    \n    public boolean search(String word) {\n        TrieNode curr = root;\n        for (char c : word.toCharArray()) {\n            int idx = c - 'a';\n            if (curr.children[idx] == null) return false;\n            curr = curr.children[idx];\n        }\n        return curr.isEndOfWord;\n    }\n    \n    public boolean startsWith(String prefix) {\n        TrieNode curr = root;\n        for (char c : prefix.toCharArray()) {\n            int idx = c - 'a';\n            if (curr.children[idx] == null) return false;\n            curr = curr.children[idx];\n        }\n        return true;\n    }\n}`,
        explanation: [
          { line: 1, text: "TrieNode class definition." },
          { line: 6, text: "Trie class definition." },
          { line: 13, text: "insert(): iterate char array, check array position index `c - 'a'`, instantiate node if null, mark end." },
          { line: 25, text: "search(): trace path, return false on null nodes, return end boolean." },
          { line: 35, text: "startsWith(): check path existence, return true." }
        ]
      }
    }
  },
  {
    id: 51,
    name: "N-Queens",
    difficulty: "Hard",
    topic: "Backtracking",
    leetcodeUrl: "https://leetcode.com/problems/n-queens/",
    tip: "Use DFS Backtracking row-by-row. Maintain sets to check column and diagonal attacks: `cols`, `diags1` (row + col), and `diags2` (row - col). Place queen, recurse, and backtrack.",
    description: "The n-queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other. Given an integer `n`, return all distinct solutions to the n-queens puzzle.",
    chatbotData: {
      intuition: "We must place N queens on an N x N board. Since each row can have exactly one queen, we can solve this row-by-row. When placing a queen at `(row, col)`, we check if it is under attack from any previously placed queen. A queen can attack vertically (same column `col`) and diagonally. Diagonals can be tracked mathematically: positive diagonal values are constant for `row + col`, and negative diagonal values are constant for `row - col`. We use three sets to track occupied columns and diagonals in O(1) time.",
      complexity: "Time Complexity: O(N!) because we try placing a queen in N columns for the first row, N-2 columns for the second, etc.\nSpace Complexity: O(N²) to store the board state and recursion stack.",
      edgeCases: "1. n = 1: returns [['Q']].\n2. n = 2 or n = 3: no solutions exist, returns empty list.",
      debugging: "When backtracking, make sure you remove the elements from your column and diagonal sets (`cols.erase`, `diags1.erase`, etc.) to allow other columns to use them in different search branches."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    unordered_set<int> cols;\n    unordered_set<int> diags1; // row + col\n    unordered_set<int> diags2; // row - col\n    vector<vector<string>> result;\n    \n    void backtrack(int row, int n, vector<string>& board) {\n        if (row == n) {\n            result.push_back(board);\n            return;\n        }\n        for (int col = 0; col < n; col++) {\n            if (cols.count(col) || diags1.count(row + col) || diags2.count(row - col)) {\n                continue;\n            }\n            // Place queen\n            board[row][col] = 'Q';\n            cols.insert(col);\n            diags1.insert(row + col);\n            diags2.insert(row - col);\n            \n            backtrack(row + 1, n, board);\n            \n            // Backtrack\n            board[row][col] = '.';\n            cols.erase(col);\n            diags1.erase(row + col);\n            diags2.erase(row - col);\n        }\n    }\n\npublic:\n    vector<vector<string>> solveNQueens(int n) {\n        vector<string> board(n, string(n, '.'));\n        backtrack(0, n, board);\n        return result;\n    }\n};`,
        explanation: [
          { line: 3, text: "Declare sets to track columns, positive diagonals (`row + col`), and negative diagonals (`row - col`) under attack." },
          { line: 8, text: "DFS backtracking helper function, operating row-by-row." },
          { line: 9, text: "Base case: if we successfully placed queens in all rows (`row == n`), save the board." },
          { line: 13, text: "Loop through columns `col` in the current row." },
          { line: 14, text: "If the column or either diagonal is already under attack, skip this placement." },
          { line: 18, text: "Place the queen by writing 'Q' on the board." },
          { line: 19, text: "Register the column and diagonals under attack in our sets." },
          { line: 23, text: "Recursively place the next queen in `row + 1`." },
          { line: 26, text: "Backtrack: remove the queen (write `.`) and remove column/diagonals from sets." }
        ]
      },
      python: {
        code: `class Solution:\n    def solveNQueens(self, n: int) -> list[list[str]]:\n        result = []\n        board = [["."] * n for _ in range(n)]\n        cols = set()\n        diags1 = set() # row + col\n        diags2 = set() # row - col\n        \n        def backtrack(row):\n            if row == n:\n                result.append(["".join(r) for r in board])\n                return\n            for col in range(n):\n                if col in cols or (row + col) in diags1 or (row - col) in diags2:\n                    continue\n                board[row][col] = "Q"\n                cols.add(col)\n                diags1.add(row + col)\n                diags2.add(row - col)\n                \n                backtrack(row + 1)\n                \n                board[row][col] = "."\n                cols.remove(col)\n                diags1.remove(row + col)\n                diags2.remove(row - col)\n                \n        backtrack(0)\n        return result`,
        explanation: [
          { line: 1, text: "Define Solution class." },
          { line: 4, text: "Initialize 2D character list board representation and sets." },
          { line: 9, text: "Define backtracking helper." },
          { line: 10, text: "On all rows completed, join board characters to form strings and save." },
          { line: 14, text: "Conflict verification using constant-time set checks." },
          { line: 16, text: "Choose, add to sets, recurse, backtrack." }
        ]
      },
      java: {
        code: `class Solution {\n    private Set<Integer> cols = new HashSet<>();\n    private Set<Integer> diags1 = new HashSet<>();\n    private Set<Integer> diags2 = new HashSet<>();\n    private List<List<String>> result = new ArrayList<>();\n    \n    public List<List<String>> solveNQueens(int n) {\n        char[][] board = new char[n][n];\n        for (int i = 0; i < n; i++) Arrays.fill(board[i], '.');\n        backtrack(0, n, board);\n        return result;\n    }\n    \n    private void backtrack(int row, int n, char[][] board) {\n        if (row == n) {\n            List<String> solution = new ArrayList<>();\n            for (int i = 0; i < n; i++) solution.add(new String(board[i]));\n            result.add(solution);\n            return;\n        }\n        for (int col = 0; col < n; col++) {\n            if (cols.contains(col) || diags1.contains(row + col) || diags2.contains(row - col)) continue;\n            board[row][col] = 'Q';\n            cols.add(col);\n            diags1.add(row + col);\n            diags2.add(row - col);\n            backtrack(row + 1, n, board);\n            board[row][col] = '.';\n            cols.remove(col);\n            diags1.remove(row + col);\n            diags2.remove(row - col);\n        }\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare Solution class." },
          { line: 7, text: "Initialize char grid board, fill with `.`, call backtracking DFS." },
          { line: 15, text: "When row reaches n, copy board rows as strings to results list." },
          { line: 21, text: "Verify placements, add to sets, recurse, backtrack by clearing Q and removing from sets." }
        ]
      }
    }
  }
];
