export const day8Problems = [
  {
    id: 70,
    name: "Climbing Stairs",
    difficulty: "Easy",
    topic: "DP / Fibonacci",
    leetcodeUrl: "https://leetcode.com/problems/climbing-stairs/",
    tip: "This is the Fibonacci sequence. The number of ways to reach step `n` is `ways(n-1) + ways(n-2)`. Optimize space by only tracking the last two steps.",
    description: "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    chatbotData: {
      intuition: "To reach step `n`, you can only come from step `n-1` (by taking 1 step) or step `n-2` (by taking 2 steps). Thus, the number of ways to reach step `n` is the sum of ways to reach `n-1` and ways to reach `n-2`: `dp[n] = dp[n-1] + dp[n-2]`. This is exactly the Fibonacci sequence! We can calculate this bottom-up. Instead of storing the entire array, we just need to keep track of the ways to reach the last two steps.",
      complexity: "Time Complexity: O(N) because we run a loop from step 3 to N.\nSpace Complexity: O(1) as we only store the values of the last two steps in two variables.",
      edgeCases: "1. n = 1: returns 1.\n2. n = 2: returns 2.\n3. Large n: fits within standard integer bounds.",
      debugging: "Make sure you handle the small base cases `n <= 2` separately at the beginning of the function to avoid errors or loops."
    },
    solutions: {
      cpp: {
        code: `int climbStairs(int n) {\n    if (n <= 2) return n;\n    int prev2 = 1; // ways(1)\n    int prev1 = 2; // ways(2)\n    for (int i = 3; i <= n; i++) {\n        int current = prev1 + prev2;\n        prev2 = prev1;\n        prev1 = current;\n    }\n    return prev1;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes steps count `n` and returns total ways." },
          { line: 2, text: "Base cases: for 1 step there is 1 way, for 2 steps there are 2 ways: return `n`." },
          { line: 3, text: "Initialize `prev2` to represent ways to reach step 1." },
          { line: 4, text: "Initialize `prev1` to represent ways to reach step 2." },
          { line: 5, text: "Loop from step 3 up to `n`." },
          { line: 6, text: "The ways to reach the current step is the sum of ways to reach the previous two steps." },
          { line: 7, text: "Shift `prev2` forward to the value of `prev1`." },
          { line: 8, text: "Shift `prev1` forward to the value of `current`." },
          { line: 10, text: "After loop ends, `prev1` holds the ways to reach step `n`: return it." }
        ]
      },
      python: {
        code: `def climbStairs(n: int) -> int:\n    if n <= 2:\n        return n\n    prev2, prev1 = 1, 2\n    for i in range(3, n + 1):\n        current = prev1 + prev2\n        prev2 = prev1\n        prev1 = current\n    return prev1`,
        explanation: [
          { line: 1, text: "Define climbStairs function." },
          { line: 2, text: "Base cases." },
          { line: 4, text: "Initialize last two values." },
          { line: 5, text: "Loop up to n." },
          { line: 6, text: "Sum last two steps to get current steps ways." },
          { line: 7, text: "Shift tracking variables." },
          { line: 9, text: "Return ways." }
        ]
      },
      java: {
        code: `public int climbStairs(int n) {\n    if (n <= 2) return n;\n    int prev2 = 1;\n    int prev1 = 2;\n    for (int i = 3; i <= n; i++) {\n        int current = prev1 + prev2;\n        prev2 = prev1;\n        prev1 = current;\n    }\n    return prev1;\n}`,
        explanation: [
          { line: 1, text: "Declare method climbStairs." },
          { line: 2, text: "Base cases return." },
          { line: 3, text: "Set steps 1 and 2 values." },
          { line: 5, text: "Compute values iteratively from step 3." },
          { line: 6, text: "Add last two results." },
          { line: 10, text: "Return answer." }
        ]
      }
    }
  },
  {
    id: 121,
    name: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    topic: "DP / Greedy",
    leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    tip: "Maintain a `minPrice` variable. As you iterate, update `minPrice` if current price is lower. Otherwise, calculate profit (`price - minPrice`) and update maximum profit.",
    description: "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit.",
    chatbotData: {
      intuition: "To maximize profit, we want to buy at the lowest possible price and sell at the highest possible price in the future. We iterate through the prices. We maintain `minPrice` (the lowest price we've seen so far). If the current day's price is cheaper than `minPrice`, we update it. Otherwise, if we sell on the current day, our profit would be `price - minPrice`. We update `maxProfit` if this profit is larger than our previous maximum.",
      complexity: "Time Complexity: O(N) since we make a single pass through the array of length N.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. Prices keep decreasing (e.g. [5, 4, 3, 2]): minPrice updates, profit is always 0, returns 0.\n2. Single day: loop doesn't find a future day, profit is 0, returns 0.",
      debugging: "Make sure you initialize `minPrice` to a very large value (like `INT_MAX`) so it correctly updates on the first element, and `maxProfit` to 0."
    },
    solutions: {
      cpp: {
        code: `int maxProfit(vector<int>& prices) {\n    int minPrice = INT_MAX;\n    int maxProfit = 0;\n    for (int price : prices) {\n        if (price < minPrice) {\n            minPrice = price;\n        } else {\n            maxProfit = max(maxProfit, price - minPrice);\n        }\n    }\n    return maxProfit;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes stock prices vector, returns max profit." },
          { line: 2, text: "Initialize `minPrice` to maximum possible integer value." },
          { line: 3, text: "Initialize `maxProfit` to 0." },
          { line: 4, text: "Loop through each price in the vector." },
          { line: 5, text: "If current price is lower than the lowest seen, update `minPrice`." },
          { line: 7, text: "Otherwise, calculate profit if we sell today, and update `maxProfit` if it's the largest." },
          { line: 11, text: "Return the maximum profit." }
        ]
      },
      python: {
        code: `def maxProfit(prices: list[int]) -> int:\n    min_price = float('inf')\n    max_profit = 0\n    for price in prices:\n        if price < min_price:\n            min_price = price\n        else:\n            max_profit = max(max_profit, price - min_price)\n    return max_profit`,
        explanation: [
          { line: 1, text: "Define maxProfit function." },
          { line: 2, text: "Set min price to infinity." },
          { line: 3, text: "Set max profit to 0." },
          { line: 4, text: "Iterate prices list." },
          { line: 5, text: "Update min price if current price is lower." },
          { line: 7, text: "Otherwise, calculate and update max profit." },
          { line: 9, text: "Return profit." }
        ]
      },
      java: {
        code: `public int maxProfit(int[] prices) {\n    int minPrice = Integer.MAX_VALUE;\n    int maxProfit = 0;\n    for (int price : prices) {\n        if (price < minPrice) {\n            minPrice = price;\n        } else {\n            maxProfit = Math.max(maxProfit, price - minPrice);\n        }\n    }\n    return maxProfit;\n}`,
        explanation: [
          { line: 1, text: "Declare method maxProfit." },
          { line: 2, text: "Initialize minPrice to `Integer.MAX_VALUE`." },
          { line: 4, text: "Enhanced for loop across prices." },
          { line: 5, text: "Update minPrice if current price is smaller." },
          { line: 7, text: "Calculate and save max profit." },
          { line: 11, text: "Return results." }
        ]
      }
    }
  },
  {
    id: 53,
    name: "Maximum Subarray",
    difficulty: "Medium",
    topic: "DP / Kadane",
    leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/",
    tip: "Use Kadane's Algorithm. Maintain `currentSum` and `maxSum`. For each element, `currentSum = max(num, currentSum + num)`. Update `maxSum = max(maxSum, currentSum)`.",
    description: "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    chatbotData: {
      intuition: "This is solved in O(N) using Kadane's Algorithm. For any index `i`, the maximum subarray sum ending at `i` is either the number itself `nums[i]` (starting a new subarray), or the sum of the previous maximum subarray plus the number `currentSum + nums[i]`. So, `currentSum = max(nums[i], currentSum + nums[i])`. We update our global maximum `maxSum` at each step.",
      complexity: "Time Complexity: O(N) since we make a single pass through the array of length N.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. All negative numbers (e.g. [-2, -1, -3]): max_sum correctly identifies the largest negative number (-1), because we don't default our sums to 0.",
      debugging: "Initialize `maxSum` to the first element `nums[0]`, not 0. If all elements in the array are negative, initializing to 0 will yield an incorrect result of 0."
    },
    solutions: {
      cpp: {
        code: `int maxSubArray(vector<int>& nums) {\n    int maxSum = nums[0];\n    int currentSum = nums[0];\n    for (int i = 1; i < nums.size(); i++) {\n        currentSum = max(nums[i], currentSum + nums[i]);\n        maxSum = max(maxSum, currentSum);\n    }\n    return maxSum;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes integer vector reference, returns maximum sum." },
          { line: 2, text: "Initialize global `maxSum` with the first element of the array." },
          { line: 3, text: "Initialize running `currentSum` with the first element." },
          { line: 4, text: "Loop through the rest of the array starting from index 1." },
          { line: 5, text: "Decide whether to add the current element to the existing subarray OR start a new subarray: `max(nums[i], currentSum + nums[i])`." },
          { line: 6, text: "Update the global maximum sum if the current subarray sum is larger." },
          { line: 8, text: "Return the maximum subarray sum found." }
        ]
      },
      python: {
        code: `def maxSubArray(nums: list[int]) -> int:\n    max_sum = nums[0]\n    current_sum = nums[0]\n    for i in range(1, len(nums)):\n        current_sum = max(nums[i], current_sum + nums[i])\n        max_sum = max(max_sum, current_sum)\n    return max_sum`,
        explanation: [
          { line: 1, text: "Define maxSubArray function." },
          { line: 2, text: "Initialize both variables to the first element." },
          { line: 4, text: "Loop from index 1 to the end." },
          { line: 5, text: "Compute new current sum." },
          { line: 6, text: "Compute global max sum." },
          { line: 7, text: "Return results." }
        ]
      },
      java: {
        code: `public int maxSubArray(int[] nums) {\n    int maxSum = nums[0];\n    int currentSum = nums[0];\n    for (int i = 1; i < nums.length; i++) {\n        currentSum = Math.max(nums[i], currentSum + nums[i]);\n        maxSum = Math.max(maxSum, currentSum);\n    }\n    return maxSum;\n}`,
        explanation: [
          { line: 1, text: "Declare method maxSubArray." },
          { line: 2, text: "Set global max to first element." },
          { line: 3, text: "Set running max to first element." },
          { line: 4, text: "Loop through elements starting at index 1." },
          { line: 5, text: "Apply Kadane's recurrence relation." },
          { line: 6, text: "Update global maximum." },
          { line: 8, text: "Return results." }
        ]
      }
    }
  },
  {
    id: 62,
    name: "Unique Paths",
    difficulty: "Medium",
    topic: "DP / 2D",
    leetcodeUrl: "https://leetcode.com/problems/unique-paths/",
    tip: "Use a 2D DP array. The robot can only arrive at `(r, c)` from above `(r-1, c)` or left `(r, c-1)`. So, `paths[r][c] = paths[r-1][c] + paths[r][c-1]`. Optimize to 1D row array to save space.",
    description: "There is a robot on an `m x n` grid. The robot is initially located at the top-left corner and tries to move to the bottom-right corner. The robot can only move either down or right at any point in time. Return the number of possible unique paths.",
    chatbotData: {
      intuition: "For any cell `(r, c)`, the robot can only arrive there by moving Down from `(r-1, c)` or moving Right from `(r, c-1)`. Therefore, the number of unique paths to `(r, c)` is: `dp[r][c] = dp[r-1][c] + dp[r][c-1]`. The top row and leftmost column are filled with 1s because there is only one way to reach them (going straight right or straight down). We can build the rest of the grid using these base cases.",
      complexity: "Time Complexity: O(M * N) since we fill out the M x N grid.\nSpace Complexity: O(N) if we optimize the DP array to a single 1D row array (representing the previous row's paths).",
      edgeCases: "1. m = 1 or n = 1: returns 1 path (robot can only go straight).",
      debugging: "Initialize your DP array with 1s, which naturally handles the top row and left column boundaries."
    },
    solutions: {
      cpp: {
        code: `int uniquePaths(int m, int n) {\n    vector<int> row(n, 1);\n    for (int r = 1; r < m; r++) {\n        for (int c = 1; c < n; c++) {\n            row[c] = row[c] + row[c - 1];\n        }\n    }\n    return row[n - 1];\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes rows `m` and columns `n`, returns paths count." },
          { line: 2, text: "Initialize a 1D vector `row` of size `n` with 1s. This represents the top row of the grid." },
          { line: 3, text: "Outer loop: iterates through each row starting from row 1." },
          { line: 4, text: "Inner loop: iterates through each column starting from column 1." },
          { line: 5, text: "The new value `row[c]` is the sum of the value in the row above (`row[c]`) and the value to the left (`row[c-1]`)." },
          { line: 8, text: "Return the last element of the row, representing the bottom-right corner." }
        ]
      },
      python: {
        code: `def uniquePaths(m: int, n: int) -> int:\n    row = [1] * n\n    for r in range(1, m):\n        for c in range(1, n):\n            row[c] = row[c] + row[c - 1]\n    return row[n - 1]`,
        explanation: [
          { line: 1, text: "Define uniquePaths function." },
          { line: 2, text: "Initialize row list with 1s." },
          { line: 3, text: "Loop rows." },
          { line: 4, text: "Loop columns." },
          { line: 5, text: "Update paths count in-place." },
          { line: 6, text: "Return last cell value." }
        ]
      },
      java: {
        code: `public int uniquePaths(int m, int n) {\n    int[] row = new int[n];\n    Arrays.fill(row, 1);\n    for (int r = 1; r < m; r++) {\n        for (int c = 1; c < n; c++) {\n            row[c] = row[c] + row[c - 1];\n        }\n    }\n    return row[n - 1];\n}`,
        explanation: [
          { line: 1, text: "Declare method uniquePaths." },
          { line: 2, text: "Create row array of size `n`." },
          { line: 3, text: "Fill it with 1s." },
          { line: 4, text: "Iterate rows." },
          { line: 5, text: "Iterate columns, adding previous row value (`row[c]`) and left cell value (`row[c-1]`)." },
          { line: 9, text: "Return bottom right cell value." }
        ]
      }
    }
  },
  {
    id: 198,
    name: "House Robber",
    difficulty: "Medium",
    topic: "DP",
    leetcodeUrl: "https://leetcode.com/problems/house-robber/",
    tip: "For each house, you have two choices: rob it (which means adding its value to the max profit from `i-2` houses back) or skip it (profit is max from `i-1` houses). So, `dp[i] = max(nums[i] + dp[i-2], dp[i-1])`.",
    description: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Return the maximum amount of money you can rob tonight without alerting the police.",
    chatbotData: {
      intuition: "For each house `i`, we have two options:\n1. Rob the house: we get its money `nums[i]` plus the max money we robbed up to house `i-2` (since we cannot rob adjacent house `i-1`).\n2. Skip the house: we keep the max money robbed up to house `i-1`.\nSo, the recurrence relation is: `dp[i] = max(nums[i] + dp[i-2], dp[i-1])`. We can solve this with bottom-up DP using only two variables to track the max profits of the last two steps.",
      complexity: "Time Complexity: O(N) since we visit each house exactly once.\nSpace Complexity: O(1) since we only track the last two profits.",
      edgeCases: "1. No houses: returns 0.\n2. One house: returns `nums[0]`.\n3. Two houses: returns `max(nums[0], nums[1])`.",
      debugging: "Make sure you initialize your variables correctly: `rob1` represents `dp[i-2]` (initially 0) and `rob2` represents `dp[i-1]` (initially 0)."
    },
    solutions: {
      cpp: {
        code: `int rob(vector<int>& nums) {\n    int rob1 = 0; // dp[i - 2]\n    int rob2 = 0; // dp[i - 1]\n    for (int num : nums) {\n        int temp = max(num + rob1, rob2);\n        rob1 = rob2;\n        rob2 = temp;\n    }\n    return rob2;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes house values vector, returns maximum cash." },
          { line: 2, text: "Initialize `rob1` (representing max cash possible 2 houses back) to 0." },
          { line: 3, text: "Initialize `rob2` (representing max cash possible 1 house back) to 0." },
          { line: 4, text: "Loop through each house value `num` in the vector." },
          { line: 5, text: "Calculate the maximum cash if we rob this house (`num + rob1`) vs if we skip it (`rob2`)." },
          { line: 6, text: "Shift `rob1` forward to equal the value of `rob2`." },
          { line: 7, text: "Shift `rob2` forward to the new calculated maximum." },
          { line: 9, text: "Return the final maximum cash recorded in `rob2`." }
        ]
      },
      python: {
        code: `def rob(nums: list[int]) -> int:\n    rob1, rob2 = 0, 0\n    for num in nums:\n        temp = max(num + rob1, rob2)\n        rob1 = rob2\n        rob2 = temp\n    return rob2`,
        explanation: [
          { line: 1, text: "Define rob function." },
          { line: 2, text: "Set initial variables to 0." },
          { line: 3, text: "Loop through nums." },
          { line: 4, text: "Compute maximum of robbing current + `rob1` vs skipping (`rob2`)." },
          { line: 5, text: "Shift variables forward." },
          { line: 7, text: "Return max cash." }
        ]
      },
      java: {
        code: `public int rob(int[] nums) {\n    int rob1 = 0;\n    int rob2 = 0;\n    for (int num : nums) {\n        int temp = Math.max(num + rob1, rob2);\n        rob1 = rob2;\n        rob2 = temp;\n    }\n    return rob2;\n}`,
        explanation: [
          { line: 1, text: "Declare method rob." },
          { line: 2, text: "Set trackers to 0." },
          { line: 4, text: "Iterate house cash." },
          { line: 5, text: "Calculate decision using Math.max." },
          { line: 6, text: "Update tracking state." },
          { line: 9, text: "Return maximum cash." }
        ]
      }
    }
  },
  {
    id: 213,
    name: "House Robber II",
    difficulty: "Medium",
    topic: "DP / Circular",
    leetcodeUrl: "https://leetcode.com/problems/house-robber-ii/",
    tip: "Since the first and last houses are connected, you cannot rob both. Solve the problem twice: once excluding the first house, and once excluding the last house. The answer is `max(result1, result2)`.",
    description: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. Return the maximum amount of money you can rob tonight without alerting the police.",
    chatbotData: {
      intuition: "Because the houses are circular, the first house is adjacent to the last house. This means if we rob the first house, we cannot rob the last house. We can split the problem into two subproblems:\n1. Rob houses from index `0` to `n-2` (excluding the last house).\n2. Rob houses from index `1` to `n-1` (excluding the first house).\nWe run the standard House Robber I algorithm on both ranges and return the maximum of the two. This breaks the circular dependency.",
      complexity: "Time Complexity: O(N) because we run standard House Robber I algorithm twice on arrays of size N-1.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. Only 1 house: return `nums[0]`. (This is an important edge case because running the two-range logic on a size-1 array could fail).",
      debugging: "Ensure you check `nums.length == 1` at the beginning of the function to return `nums[0]` immediately. Otherwise, ranges [0, n-2] and [1, n-1] will become invalid."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    int robHelper(vector<int>& nums, int start, int end) {\n        int rob1 = 0, rob2 = 0;\n        for (int i = start; i <= end; i++) {\n            int temp = max(nums[i] + rob1, rob2);\n            rob1 = rob2;\n            rob2 = temp;\n        }\n        return rob2;\n    }\n\npublic:\n    int rob(vector<int>& nums) {\n        int n = nums.size();\n        if (n == 1) return nums[0];\n        return max(robHelper(nums, 0, n - 2), robHelper(nums, 1, n - 1));\n    }\n};`,
        explanation: [
          { line: 3, text: "Helper function: runs standard House Robber DFS/DP on a specific index range `[start, end]`." },
          { line: 4, text: "Initialize last two steps tracker." },
          { line: 5, text: "Loop from `start` index to `end` index." },
          { line: 6, text: "Perform the standard transition equation." },
          { line: 14, text: "Main function." },
          { line: 16, text: "Edge case: if there's only 1 house, return its value immediately." },
          { line: 17, text: "Return the maximum profit of: robbing without the last house (`0` to `n-2`) vs robbing without the first house (`1` to `n-1`)." }
        ]
      },
      python: {
        code: `class Solution:\n    def rob(self, nums: list[int]) -> int:\n        n = len(nums)\n        if n == 1:\n            return nums[0]\n            \n        def rob_helper(start, end):\n            rob1, rob2 = 0, 0\n            for i in range(start, end + 1):\n                temp = max(nums[i] + rob1, rob2)\n                rob1 = rob2\n                rob2 = temp\n            return rob2\n            \n        return max(rob_helper(0, n - 2), rob_helper(1, n - 1))`,
        explanation: [
          { line: 1, text: "Define Solution class." },
          { line: 4, text: "If list has 1 element, return it." },
          { line: 7, text: "Define nested helper function to run DP on index ranges." },
          { line: 9, text: "Run DP loop from start to end index." },
          { line: 15, text: "Return the maximum of the two subproblems (excluding last vs excluding first)." }
        ]
      },
      java: {
        code: `class Solution {\n    public int rob(int[] nums) {\n        int n = nums.length;\n        if (n == 1) return nums[0];\n        return Math.max(robHelper(nums, 0, n - 2), robHelper(nums, 1, n - 1));\n    }\n    \n    private int robHelper(int[] nums, int start, int end) {\n        int rob1 = 0, rob2 = 0;\n        for (int i = start; i <= end; i++) {\n            int temp = Math.max(nums[i] + rob1, rob2);\n            rob1 = rob2;\n            rob2 = temp;\n        }\n        return rob2;\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare Solution class." },
          { line: 4, text: "Return first element if length is 1." },
          { line: 5, text: "Find max of two ranges." },
          { line: 8, text: "Helper method robHelper." },
          { line: 10, text: "Iterate and run recurrence relation." },
          { line: 15, text: "Return profit." }
        ]
      }
    }
  },
  {
    id: 300,
    name: "Longest Increasing Subsequence",
    difficulty: "Medium",
    topic: "DP",
    leetcodeUrl: "https://leetcode.com/problems/longest-increasing-subsequence/",
    tip: "Use a 1D DP array. `dp[i]` represents the length of the LIS ending at index `i`. For each element, look backwards at all smaller elements `j < i`, and `dp[i] = max(dp[i], dp[j] + 1)`. Initialize all `dp` values to 1.",
    description: "Given an integer array `nums`, return the length of the longest strictly increasing subsequence.",
    chatbotData: {
      intuition: "We can solve this with dynamic programming. Let `dp[i]` be the length of the longest increasing subsequence that ends with the number `nums[i]`. Initially, every element on its own forms a subsequence of length 1, so we fill the `dp` array with 1s. To compute `dp[i]`, we look at all previous elements `nums[j]` where `j < i`. If `nums[j] < nums[i]`, it means we can append `nums[i]` to the subsequence ending at `j`. So, `dp[i] = max(dp[i], dp[j] + 1)`. The answer is the maximum value in `dp`.",
      complexity: "Time Complexity: O(N²) because we use nested loops to check all pairs of elements.\nSpace Complexity: O(N) to store the DP array.",
      edgeCases: "1. Empty array: returns 0.\n2. Decreasing array (e.g. [5,4,3]): DP values remain 1, returns 1.",
      debugging: "Make sure you initialize the DP array with 1s, not 0s, since any single element is always an increasing subsequence of length 1."
    },
    solutions: {
      cpp: {
        code: `int lengthOfLIS(vector<int>& nums) {\n    if (nums.empty()) return 0;\n    int n = nums.size();\n    vector<int> dp(n, 1);\n    int maxLIS = 1;\n    for (int i = 1; i < n; i++) {\n        for (int j = 0; j < i; j++) {\n            if (nums[j] < nums[i]) {\n                dp[i] = max(dp[i], dp[j] + 1);\n            }\n        }\n        maxLIS = max(maxLIS, dp[i]);\n    }\n    return maxLIS;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes integer vector reference, returns LIS length." },
          { line: 2, text: "If the vector is empty, return 0." },
          { line: 4, text: "Create vector `dp` of size `n` initialized to 1. `dp[i]` is LIS length ending at `i`." },
          { line: 5, text: "Initialize `maxLIS` to 1." },
          { line: 6, text: "Outer loop: iterate `i` from 1 to `n - 1`." },
          { line: 7, text: "Inner loop: scan `j` from 0 to `i - 1`." },
          { line: 8, text: "If previous element `nums[j]` is smaller than current element `nums[i]`." },
          { line: 9, text: "Extend LIS at `j`: update `dp[i]` with the maximum of its current value vs `dp[j] + 1`." },
          { line: 12, text: "Update the global LIS maximum." },
          { line: 14, text: "Return `maxLIS`." }
        ]
      },
      python: {
        code: `def lengthOfLIS(nums: list[int]) -> int:\n    if not nums:\n        return 0\n    n = len(nums)\n    dp = [1] * n\n    for i in range(1, n):\n        for j in range(i):\n            if nums[j] < nums[i]:\n                dp[i] = max(dp[i], dp[j] + 1)\n    return max(dp)`,
        explanation: [
          { line: 1, text: "Define lengthOfLIS function." },
          { line: 2, text: "Handle empty array case." },
          { line: 5, text: "Initialize DP list with 1s." },
          { line: 6, text: "Iterate outer index `i`." },
          { line: 7, text: "Iterate inner index `j` up to `i`." },
          { line: 8, text: "If `nums[j] < nums[i]`, update DP value." },
          { line: 10, text: "Return the maximum value present in the DP list." }
        ]
      },
      java: {
        code: `public int lengthOfLIS(int[] nums) {\n    if (nums.length == 0) return 0;\n    int n = nums.length;\n    int[] dp = new int[n];\n    Arrays.fill(dp, 1);\n    int maxLIS = 1;\n    for (int i = 1; i < n; i++) {\n        for (int j = 0; j < i; j++) {\n            if (nums[j] < nums[i]) {\n                dp[i] = Math.max(dp[i], dp[j] + 1);\n            }\n        }\n        maxLIS = Math.max(maxLIS, dp[i]);\n    }\n    return maxLIS;\n}`,
        explanation: [
          { line: 1, text: "Declare method lengthOfLIS." },
          { line: 2, text: "Handle zero length." },
          { line: 4, text: "Initialize DP array and fill with 1." },
          { line: 7, text: "Loop through outer pointer `i`." },
          { line: 8, text: "Loop through inner pointer `j`." },
          { line: 9, text: "Compare values and set DP transition." },
          { line: 13, text: "Save the maximum LIS length." },
          { line: 15, text: "Return maximum." }
        ]
      }
    }
  },
  {
    id: 322,
    name: "Coin Change",
    difficulty: "Medium",
    topic: "DP / BFS",
    leetcodeUrl: "https://leetcode.com/problems/coin-change/",
    tip: "Use a 1D DP array. `dp[i]` represents the min coins needed to make amount `i`. For each amount, iterate through the coins: `dp[i] = min(dp[i], dp[i - coin] + 1)`. Initialize `dp` with a large value.",
    description: "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount cannot be made up by any combination of the coins, return `-1`.",
    chatbotData: {
      intuition: "Let `dp[i]` be the minimum coins needed to make amount `i`. The base case is `dp[0] = 0` (0 coins to make amount 0). For any amount `i`, we can try taking every coin in our list. If we take a coin of value `c`, the remaining amount is `i - c`. The coins needed would be `1 + dp[i - c]`. We want the minimum over all coins: `dp[i] = min(dp[i], dp[i - c] + 1)`. We initialize the DP array with a value larger than the amount (like `amount + 1`) to represent infinity.",
      complexity: "Time Complexity: O(Amount * C) where C is the number of coin types. We run a loop up to Amount and check each coin.\nSpace Complexity: O(Amount) to store the DP array.",
      edgeCases: "1. Amount is 0: returns 0.\n2. Amount cannot be reached: DP value remains `amount + 1`, returns -1.",
      debugging: "Initialize `dp` array with size `amount + 1` filled with `amount + 1` (a value representing infinity), and set `dp[0] = 0`."
    },
    solutions: {
      cpp: {
        code: `int coinChange(vector<int>& coins, int amount) {\n    vector<int> dp(amount + 1, amount + 1);\n    dp[0] = 0;\n    for (int i = 1; i <= amount; i++) {\n        for (int coin : coins) {\n            if (i - coin >= 0) {\n                dp[i] = min(dp[i], dp[i - coin] + 1);\n            }\n        }\n    }\n    return (dp[amount] > amount) ? -1 : dp[amount];\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes coins list and target amount, returns coin count or -1." },
          { line: 2, text: "Create vector `dp` of size `amount + 1` initialized to `amount + 1` (representing infinity)." },
          { line: 3, text: "Base case: 0 coins are needed to make amount 0." },
          { line: 4, text: "Outer loop: iterate through each amount `i` from 1 to `amount`." },
          { line: 5, text: "Inner loop: iterate through each coin value." },
          { line: 6, text: "If the coin value is smaller than or equal to the current amount `i`." },
          { line: 7, text: "Update `dp[i]` with the minimum of its current value vs `dp[i - coin] + 1`." },
          { line: 11, text: "If `dp[amount]` is still the initialized value, the amount is unreachable: return -1. Otherwise, return `dp[amount]`." }
        ]
      },
      python: {
        code: `def coinChange(coins: list[int], amount: int) -> int:\n    dp = [amount + 1] * (amount + 1)\n    dp[0] = 0\n    for i in range(1, amount + 1):\n        for coin in coins:\n            if i - coin >= 0:\n                dp[i] = min(dp[i], dp[i - coin] + 1)\n    return dp[amount] if dp[amount] <= amount else -1`,
        explanation: [
          { line: 1, text: "Define coinChange function." },
          { line: 2, text: "Create DP list initialized to `amount + 1` representing infinity." },
          { line: 3, text: "Set amount 0 cost to 0." },
          { line: 4, text: "Loop amounts from 1 to `amount`." },
          { line: 5, text: "Check each coin." },
          { line: 6, text: "If coin can fit, update minimum count." },
          { line: 8, text: "Return answer, check if unreachable." }
        ]
      },
      java: {
        code: `public int coinChange(int[] coins, int amount) {\n    int[] dp = new int[amount + 1];\n    Arrays.fill(dp, amount + 1);\n    dp[0] = 0;\n    for (int i = 1; i <= amount; i++) {\n        for (int coin : coins) {\n            if (i - coin >= 0) {\n                dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n            }\n        }\n    }\n    return (dp[amount] > amount) ? -1 : dp[amount];\n}`,
        explanation: [
          { line: 1, text: "Declare method coinChange." },
          { line: 2, text: "Initialize DP array." },
          { line: 3, text: "Fill with infinity value." },
          { line: 4, text: "Set base case `dp[0] = 0`." },
          { line: 5, text: "Iterate amounts." },
          { line: 6, text: "Iterate coin types." },
          { line: 7, text: "Update DP transitions." },
          { line: 12, text: "Evaluate return results." }
        ]
      }
    }
  },
  {
    id: 416,
    name: "Partition Equal Subset Sum",
    difficulty: "Medium",
    topic: "DP / Knapsack",
    leetcodeUrl: "https://leetcode.com/problems/partition-equal-subset-sum/",
    tip: "If the total sum is odd, return false (cannot partition equally). Otherwise, search for a subset that sums to `target = total_sum / 2`. This is a 0/1 Knapsack problem solved using a 1D DP boolean array.",
    description: "Given an integer array `nums`, return `true` if you can partition the array into two subsets such that the sum of the elements in both subsets is equal, or `false` otherwise.",
    chatbotData: {
      intuition: "Partitioning an array into two subsets of equal sum means each subset must sum to exactly `TotalSum / 2`. If `TotalSum` is odd, it is impossible, so we return false immediately. Otherwise, our `target` is `TotalSum / 2`. We want to find if there is a subset in the array that sums to `target`. We use a boolean DP array of size `target + 1` where `dp[i]` is true if amount `i` can be formed. We initialize `dp[0] = true`. For each number `num` in the array, we iterate backwards and update `dp[i] = dp[i] || dp[i - num]`.",
      complexity: "Time Complexity: O(N * Target) where N is array size and Target is `TotalSum / 2`.\nSpace Complexity: O(Target) to store the boolean DP table.",
      edgeCases: "1. Total sum is odd: returns false immediately.\n2. Single element: total sum is odd or target is unreachable, returns false.",
      debugging: "When updating the DP table for a number `num`, you MUST loop backwards from `target` down to `num` `for (int i = target; i >= num; i--)`. If you loop forwards, you will reuse the same number multiple times (like in the Unbounded Knapsack problem), which violates the condition that each element can only be used once."
    },
    solutions: {
      cpp: {
        code: `bool canPartition(vector<int>& nums) {\n    int sum = 0;\n    for (int num : nums) sum += num;\n    if (sum % 2 != 0) return false;\n    int target = sum / 2;\n    vector<bool> dp(target + 1, false);\n    dp[0] = true;\n    for (int num : nums) {\n        for (int i = target; i >= num; i--) {\n            dp[i] = dp[i] || dp[i - num];\n        }\n    }\n    return dp[target];\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes integer vector reference, returns boolean." },
          { line: 2, text: "Calculate the total sum of the array elements." },
          { line: 4, text: "If the total sum is odd, we cannot divide it into two equal integer subsets: return false." },
          { line: 5, text: "Set our subset target sum to `sum / 2`." },
          { line: 6, text: "Create a boolean vector `dp` of size `target + 1` initialized to `false`." },
          { line: 7, text: "Base case: sum of 0 is always achievable (empty subset)." },
          { line: 8, text: "Loop through each number `num` in the array." },
          { line: 9, text: "Loop backwards from `target` down to `num` to prevent using the same number twice." },
          { line: 10, text: "Update `dp[i]` to be true if we can form sum `i` without `num` OR by adding `num` to subset sum `i - num`." },
          { line: 13, text: "Return whether the target sum is achievable." }
        ]
      },
      python: {
        code: `def canPartition(nums: list[int]) -> bool:\n    total_sum = sum(nums)\n    if total_sum % 2 != 0:\n        return False\n    target = total_sum // 2\n    dp = [False] * (target + 1)\n    dp[0] = True\n    for num in nums:\n        for i in range(target, num - 1, -1):\n            dp[i] = dp[i] or dp[i - num]\n    return dp[target]`,
        explanation: [
          { line: 1, text: "Define canPartition function." },
          { line: 2, text: "Sum array elements." },
          { line: 3, text: "Return False if sum is odd." },
          { line: 5, text: "Set target sum." },
          { line: 6, text: "Create boolean DP list." },
          { line: 7, text: "Set base case `dp[0] = True`." },
          { line: 8, text: "Iterate nums." },
          { line: 9, text: "Loop backwards from target to num to avoid duplicate element usage." },
          { line: 11, text: "Return target achievement status." }
        ]
      },
      java: {
        code: `public boolean canPartition(int[] nums) {\n    int sum = 0;\n    for (int num : nums) sum += num;\n    if (sum % 2 != 0) return false;\n    int target = sum / 2;\n    boolean[] dp = new boolean[target + 1];\n    dp[0] = true;\n    for (int num : nums) {\n        for (int i = target; i >= num; i--) {\n            dp[i] = dp[i] || dp[i - num];\n        }\n    }\n    return dp[target];\n}`,
        explanation: [
          { line: 1, text: "Declare method canPartition." },
          { line: 4, text: "Check odd sum." },
          { line: 5, text: "Define target." },
          { line: 6, text: "Create boolean DP table." },
          { line: 7, text: "Set `dp[0] = true`." },
          { line: 8, text: "Loop elements." },
          { line: 9, text: "Loop backwards through targets." },
          { line: 13, text: "Return answer." }
        ]
      }
    }
  },
  {
    id: 1143,
    name: "Longest Common Subsequence",
    difficulty: "Medium",
    topic: "DP / 2D",
    leetcodeUrl: "https://leetcode.com/problems/longest-common-subsequence/",
    tip: "Use a 2D DP table of size `(m+1) x (n+1)`. If `text1[i-1] == text2[j-1]`, then `dp[i][j] = dp[i-1][j-1] + 1`. Otherwise, `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.",
    description: "Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return `0`.",
    chatbotData: {
      intuition: "Let `dp[i][j]` be the length of the longest common subsequence of prefixes `text1[0...i-1]` and `text2[0...j-1]`. We build the table bottom-up:\n1. If characters match (`text1[i-1] == text2[j-1]`), they contribute to the subsequence: `dp[i][j] = 1 + dp[i-1][j-1]` (1 plus the LCSC length excluding these characters).\n2. If they don't match, we take the best we can get by either ignoring `text1`'s character or `text2`'s character: `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.",
      complexity: "Time Complexity: O(M * N) since we fill out a M x N grid. M and N are the lengths of the two strings.\nSpace Complexity: O(M * N) to store the 2D DP table.",
      edgeCases: "1. No matching characters: returns 0.\n2. One string is empty: returns 0.",
      debugging: "Note that index `i` in the DP table maps to character index `i-1` in the string (due to 1-based indexing for DP table to accommodate empty string base case)."
    },
    solutions: {
      cpp: {
        code: `int longestCommonSubsequence(string text1, string text2) {\n    int m = text1.length();\n    int n = text2.length();\n    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (text1[i - 1] == text2[j - 1]) {\n                dp[i][j] = dp[i - 1][j - 1] + 1;\n            } else {\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n    }\n    return dp[m][n];\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes two strings and returns the LCS length." },
          { line: 2, text: "Get length of `text1` as `m`." },
          { line: 3, text: "Get length of `text2` as `n`." },
          { line: 4, text: "Declare 2D vector `dp` of size `(m + 1) x (n + 1)` initialized to 0." },
          { line: 5, text: "Outer loop: iterate `i` from 1 to `m`." },
          { line: 6, text: "Inner loop: iterate `j` from 1 to `n`." },
          { line: 7, text: "If characters in both strings match (at indices `i-1` and `j-1` due to DP table offset)." },
          { line: 8, text: "Add 1 to the diagonal value: `dp[i - 1][j - 1] + 1`." },
          { line: 10, text: "If they don't match, take the maximum of skipping character in `text1` (`dp[i - 1][j]`) or in `text2` (`dp[i][j - 1]`)." },
          { line: 14, text: "Return the bottom-right cell value, which holds the final LCS length." }
        ]
      },
      python: {
        code: `def longestCommonSubsequence(text1: str, text2: str) -> int:\n    m, n = len(text1), len(text2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if text1[i - 1] == text2[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1] + 1\n            else:\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\n    return dp[m][n]`,
        explanation: [
          { line: 1, text: "Define longestCommonSubsequence function." },
          { line: 2, text: "Find lengths." },
          { line: 3, text: "Initialize 2D list with 0s." },
          { line: 4, text: "Iterate rows from 1 to `m`." },
          { line: 5, text: "Iterate cols from 1 to `n`." },
          { line: 6, text: "If characters match, increment diagonal value." },
          { line: 9, text: "If characters mismatch, take max of top or left cell." },
          { line: 10, text: "Return answer." }
        ]
      },
      java: {
        code: `public int longestCommonSubsequence(String text1, String text2) {\n    int m = text1.length(), n = text2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {\n                dp[i][j] = dp[i - 1][j - 1] + 1;\n            } else {\n                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n    }\n    return dp[m][n];\n}`,
        explanation: [
          { line: 1, text: "Declare method longestCommonSubsequence." },
          { line: 2, text: "Get string sizes." },
          { line: 3, text: "Create 2D DP array." },
          { line: 4, text: "Iterate string indices." },
          { line: 6, text: "Compare characters using `charAt`. If equal, add 1 to diagonal value." },
          { line: 9, text: "If unequal, set cell to max of left or top." },
          { line: 13, text: "Return bottom right cell." }
        ]
      }
    }
  }
];
