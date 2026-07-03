export const day3Problems = [
  {
    id: 704,
    name: "Binary Search",
    difficulty: "Easy",
    topic: "Binary Search",
    leetcodeUrl: "https://leetcode.com/problems/binary-search/",
    tip: "Always define `low` and `high` pointers clearly. Find `mid = low + (high - low) / 2` to avoid integer overflow. Compare `nums[mid]` to target, then search left or right.",
    description: "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.",
    chatbotData: {
      intuition: "Since the array is sorted, we can search it in logarithmic time O(log N) instead of linear time O(N). We place pointers `low` and `high` at the bounds of our search space. We look at the middle element `mid`. If `nums[mid] == target`, we return `mid`. If `nums[mid] < target`, it means target is in the right half, so we move `low = mid + 1`. If `nums[mid] > target`, it means target is in the left half, so we move `high = mid - 1`.",
      complexity: "Time Complexity: O(log N) because we cut the search space in half at each step.\nSpace Complexity: O(1) as we only use a few tracking pointers.",
      edgeCases: "1. Target is at the very beginning or end: handled correctly.\n2. Array size is 1: loop runs once, checks mid, returns correctly.\n3. Target is not in the array: low will cross high, loop terminates, returns -1.",
      debugging: "Calculate `mid` using `low + (high - low) / 2` instead of `(low + high) / 2` to prevent potential integer overflow bugs in languages like C++ and Java."
    },
    solutions: {
      cpp: {
        code: `int search(vector<int>& nums, int target) {\n    int low = 0, high = nums.size() - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] == target) {\n            return mid;\n        } else if (nums[mid] < target) {\n            low = mid + 1;\n        } else {\n            high = mid - 1;\n        }\n    }\n    return -1;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes integer vector reference and target int, returns index or -1." },
          { line: 2, text: "Initialize `low` pointer to 0 and `high` pointer to the last element index." },
          { line: 3, text: "Loop while the search space is valid (`low` is less than or equal to `high`)." },
          { line: 4, text: "Calculate the middle index. Using `low + (high - low)/2` prevents integer overflow." },
          { line: 5, text: "If the middle element is our target, return its index." },
          { line: 7, text: "If the middle element is smaller than target, search the right half: move `low` pointer." },
          { line: 9, text: "If the middle element is larger than target, search the left half: move `high` pointer." },
          { line: 13, text: "If the loop terminates without finding target, it's not present: return -1." }
        ]
      },
      python: {
        code: `def search(nums: list[int], target: int) -> int:\n    low, high = 0, len(nums) - 1\n    while low <= high:\n        mid = low + (high - low) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1`,
        explanation: [
          { line: 1, text: "Define function `search` returning integer." },
          { line: 2, text: "Initialize pointers at the bounds of the list." },
          { line: 3, text: "Loop while `low` pointer is less than or equal to `high`." },
          { line: 4, text: "Calculate integer midpoint `mid` using double slash floor division `//`." },
          { line: 5, text: "If the midpoint value equals target, return its index." },
          { line: 7, text: "If mid value is too small, search right side by updating `low`." },
          { line: 9, text: "If mid value is too large, search left side by updating `high`." },
          { line: 11, text: "Return -1 if target is not found." }
        ]
      },
      java: {
        code: `public int search(int[] nums, int target) {\n    int low = 0, high = nums.length - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] == target) {\n            return mid;\n        } else if (nums[mid] < target) {\n            low = mid + 1;\n        } else {\n            high = mid - 1;\n        }\n    }\n    return -1;\n}`,
        explanation: [
          { line: 1, text: "Declare method `search` returning int." },
          { line: 2, text: "Initialize `low` pointer to 0 and `high` pointer to array length - 1." },
          { line: 3, text: "Loop while pointers don't cross." },
          { line: 4, text: "Find middle index `mid` avoiding integer overflow." },
          { line: 5, text: "Compare `nums[mid]` with `target`. Return `mid` if they are equal." },
          { line: 7, text: "If mid value is less than target, search right half by setting `low = mid + 1`." },
          { line: 9, text: "If mid value is greater than target, search left half by setting `high = mid - 1`." },
          { line: 13, text: "Return -1 if target is not present in the array." }
        ]
      }
    }
  },
  {
    id: 33,
    name: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    topic: "Binary Search",
    leetcodeUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    tip: "In a rotated sorted array, one half (either left or right) is ALWAYS normally sorted. Find which half is sorted first, then check if target lies in its range.",
    description: "There is an integer array `nums` sorted in ascending order (with distinct values). Prior to being passed to your function, `nums` is possibly rotated. Return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.",
    chatbotData: {
      intuition: "Even after rotation, if we divide the array in half, at least one of the halves will always remain sorted. For example, in `[4, 5, 6, 7, 0, 1, 2]`, mid is 7. The left half `[4, 5, 6, 7]` is sorted. We can determine if the left half is sorted by checking if `nums[low] <= nums[mid]`. If the left half is sorted, we check if target lies within its bounds. If it does, we search the left half. If not, we search the right half. We do the symmetric check if the right half is sorted.",
      complexity: "Time Complexity: O(log N) because we split the search space in half at each step.\nSpace Complexity: O(1) since it runs iteratively without extra memory.",
      edgeCases: "1. Size 1 or 2 array: correctly handled.\n2. No rotation (already fully sorted): works normally.\n3. Target at boundary indices: handled by inclusive boundary conditions `<=`, `>=`.",
      debugging: "When checking boundaries (e.g. `nums[low] <= target && target < nums[mid]`), be sure to use `<=` for `low` because the target could be exactly at the index `low`."
    },
    solutions: {
      cpp: {
        code: `int search(vector<int>& nums, int target) {\n    int low = 0, high = nums.size() - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] == target) return mid;\n        if (nums[low] <= nums[mid]) {\n            if (nums[low] <= target && target < nums[mid]) {\n                high = mid - 1;\n            } else {\n                low = mid + 1;\n            }\n        } else {\n            if (nums[mid] < target && target <= nums[high]) {\n                low = mid + 1;\n            } else {\n                high = mid - 1;\n            }\n        }\n    }\n    return -1;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes integer vector and target, returns index or -1." },
          { line: 2, text: "Initialize `low` and `high` search boundaries." },
          { line: 3, text: "Loop while the search space remains valid." },
          { line: 4, text: "Compute middle index `mid`." },
          { line: 5, text: "If middle element is the target, return its index immediately." },
          { line: 6, text: "Check if the left half `[low, mid]` is sorted normally (`nums[low] <= nums[mid]`)." },
          { line: 7, text: "If sorted, check if target falls in the range of the left half." },
          { line: 8, text: "If yes, search the left half: move `high = mid - 1`." },
          { line: 10, text: "If no, search the right half: move `low = mid + 1`." },
          { line: 12, text: "Otherwise, the right half `[mid, high]` must be sorted." },
          { line: 13, text: "Check if target falls in the range of the right half." },
          { line: 14, text: "If yes, search the right half: move `low = mid + 1`." },
          { line: 16, text: "If no, search the left half: move `high = mid - 1`." }
        ]
      },
      python: {
        code: `def search(nums: list[int], target: int) -> int:\n    low, high = 0, len(nums) - 1\n    while low <= high:\n        mid = low + (high - low) // 2\n        if nums[mid] == target:\n            return mid\n        if nums[low] <= nums[mid]:\n            if nums[low] <= target < nums[mid]:\n                high = mid - 1\n            else:\n                low = mid + 1\n        else:\n            if nums[mid] < target <= nums[high]:\n                low = mid + 1\n            else:\n                high = mid - 1\n    return -1`,
        explanation: [
          { line: 1, text: "Define search function in Python." },
          { line: 2, text: "Initialize pointers." },
          { line: 3, text: "Start binary search loop." },
          { line: 4, text: "Calculate `mid` using integer division." },
          { line: 5, text: "Check if mid equals target." },
          { line: 7, text: "Verify if left side is sorted." },
          { line: 8, text: "Check if target is bounded within the sorted left side." },
          { line: 12, text: "Otherwise, right side must be sorted." },
          { line: 13, text: "Check if target is bounded within the sorted right side." }
        ]
      },
      java: {
        code: `public int search(int[] nums, int target) {\n    int low = 0, high = nums.length - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] == target) return mid;\n        if (nums[low] <= nums[mid]) {\n            if (nums[low] <= target && target < nums[mid]) {\n                high = mid - 1;\n            } else {\n                low = mid + 1;\n            }\n        } else {\n            if (nums[mid] < target && target <= nums[high]) {\n                low = mid + 1;\n            } else {\n                high = mid - 1;\n            }\n        }\n    }\n    return -1;\n}`,
        explanation: [
          { line: 1, text: "Declare search method." },
          { line: 2, text: "Initialize `low` and `high` pointers." },
          { line: 3, text: "Loop while pointers are valid." },
          { line: 5, text: "Check target match at `mid`." },
          { line: 6, text: "Determine if left subarray is sorted." },
          { line: 7, text: "Target is in sorted left subarray: contract right side." },
          { line: 12, text: "Right subarray is sorted." },
          { line: 13, text: "Target is in sorted right subarray: contract left side." }
        ]
      }
    }
  },
  {
    id: 34,
    name: "Find First and Last Position",
    difficulty: "Medium",
    topic: "Binary Search",
    leetcodeUrl: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    tip: "Run binary search twice. Once to find the first occurrence (when target is found, set `high = mid - 1` and keep searching), and once to find the last occurrence (set `low = mid + 1`).",
    description: "Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value. If target is not found in the array, return `[-1, -1]`.",
    chatbotData: {
      intuition: "Instead of searching linearly (which takes O(N)), we can perform binary search twice. When we do normal binary search and find `nums[mid] == target`, we don't stop. For finding the first position, we record `mid` as a potential answer and continue searching the left half (`high = mid - 1`). For finding the last position, we record `mid` and continue searching the right half (`low = mid + 1`). This maintains the O(log N) runtime.",
      complexity: "Time Complexity: O(log N) because we perform two binary searches sequentially.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. Empty array: returns `[-1, -1]`.\n2. Target not present: returns `[-1, -1]`.\n3. All elements are target (e.g. [8, 8, 8], target 8): returns `[0, 2]`.",
      debugging: "Be sure to initialize your result to -1 inside the helper function so that if the element is not found, it naturally returns -1."
    },
    solutions: {
      cpp: {
        code: `int findBound(vector<int>& nums, int target, bool isFirst) {\n    int low = 0, high = nums.size() - 1, ans = -1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] == target) {\n            ans = mid;\n            if (isFirst) {\n                high = mid - 1;\n            } else {\n                low = mid + 1;\n            }\n        } else if (nums[mid] < target) {\n            low = mid + 1;\n        } else {\n            high = mid - 1;\n        }\n    }\n    return ans;\n}\n\nvector<int> searchRange(vector<int>& nums, int target) {\n    return {findBound(nums, target, true), findBound(nums, target, false)};\n}`,
        explanation: [
          { line: 1, text: "Helper function declaration to find either the first or last boundary of target." },
          { line: 2, text: "Initialize `low`, `high`, and `ans` to -1." },
          { line: 3, text: "Run binary search loop." },
          { line: 5, text: "If we find target at `mid`, record this index in `ans`." },
          { line: 7, text: "If searching for the first occurrence, search left half to find if there's an earlier one." },
          { line: 9, text: "If searching for the last occurrence, search right half." },
          { line: 12, text: "If mid value is smaller than target, search right half." },
          { line: 14, text: "If mid value is larger than target, search left half." },
          { line: 20, text: "Main function: calls `findBound` for the first (true) and last (false) occurrence, and returns the pair." }
        ]
      },
      python: {
        code: `def searchRange(nums: list[int], target: int) -> list[int]:\n    def findBound(is_first: bool) -> int:\n        low, high, ans = 0, len(nums) - 1, -1\n        while low <= high:\n            mid = low + (high - low) // 2\n            if nums[mid] == target:\n                ans = mid\n                if is_first:\n                    high = mid - 1\n                else:\n                    low = mid + 1\n            elif nums[mid] < target:\n                low = mid + 1\n            else:\n                high = mid - 1\n        return ans\n    \n    return [findBound(True), findBound(False)]`,
        explanation: [
          { line: 1, text: "Define searchRange function." },
          { line: 2, text: "Define nested helper function `findBound` taking boolean parameter." },
          { line: 3, text: "Initialize pointers and answer tracker." },
          { line: 6, text: "Check target match at `mid`." },
          { line: 7, text: "Record current match index." },
          { line: 8, text: "If looking for first index, shrink search space to left side." },
          { line: 10, text: "If looking for last index, shrink search space to right side." },
          { line: 18, text: "Call helper function twice: once for start index (True) and once for end index (False)." }
        ]
      },
      java: {
        code: `public int[] searchRange(int[] nums, int target) {\n    return new int[] { findBound(nums, target, true), findBound(nums, target, false) };\n}\n\nprivate int findBound(int[] nums, int target, boolean isFirst) {\n    int low = 0, high = nums.length - 1, ans = -1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] == target) {\n            ans = mid;\n            if (isFirst) {\n                high = mid - 1;\n            } else {\n                low = mid + 1;\n            }\n        } else if (nums[mid] < target) {\n            low = mid + 1;\n        } else {\n            high = mid - 1;\n        }\n    }\n    return ans;\n}`,
        explanation: [
          { line: 1, text: "Declare main method returning two bounds as an array." },
          { line: 2, text: "Call `findBound` for start (true) and end (false) positions." },
          { line: 5, text: "Declare helper method `findBound` returning index of target boundary." },
          { line: 6, text: "Initialize parameters and search pointer values." },
          { line: 9, text: "If target is found at mid, update result index `ans`." },
          { line: 11, text: "Shrink boundary leftward if `isFirst` is true." },
          { line: 13, text: "Shrink boundary rightward if `isFirst` is false." },
          { line: 21, text: "Return target boundary index." }
        ]
      }
    }
  },
  {
    id: 74,
    name: "Search a 2D Matrix",
    difficulty: "Medium",
    topic: "Binary Search",
    leetcodeUrl: "https://leetcode.com/problems/search-a-2d-matrix/",
    tip: "Treat the 2D matrix as a flat 1D array of size `m * n`. A virtual index `mid` in 1D maps to 2D coordinates: `row = mid / n` and `col = mid % n`.",
    description: "You are given an `m x n` integer matrix `matrix` with the following two properties:\n1. Each row is sorted in non-decreasing order.\n2. The first integer of each row is greater than the last integer of the previous row.\nGiven an integer `target`, return `true` if `target` is in `matrix` or `false` otherwise.",
    chatbotData: {
      intuition: "Because the first element of a row is greater than the last element of the previous row, the entire matrix behaves like a single sorted 1D array of length `rows * cols`. We can do a standard binary search on this virtual 1D array with `low = 0` and `high = (rows * cols) - 1`. For any index `mid` in 1D, we convert it back to 2D coordinates: row = `mid / cols` and col = `mid % cols`, then compare `matrix[row][col]` to the target.",
      complexity: "Time Complexity: O(log(M * N)) where M is rows and N is columns.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. Matrix has 1 row or 1 column: works correctly.\n2. Target is smaller than smallest or larger than largest element: returns false early or terminates after full search.\n3. Target exists at boundary of two rows: handled naturally.",
      debugging: "Ensure you use the correct division and modulo logic: `row = mid / cols` (using column count) and `col = mid % cols`. Do not divide by the row count."
    },
    solutions: {
      cpp: {
        code: `bool searchMatrix(vector<vector<int>>& matrix, int target) {\n    if (matrix.empty() || matrix[0].empty()) return false;\n    int m = matrix.size(), n = matrix[0].size();\n    int low = 0, high = m * n - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        int row = mid / n;\n        int col = mid % n;\n        if (matrix[row][col] == target) {\n            return true;\n        } else if (matrix[row][col] < target) {\n            low = mid + 1;\n        } else {\n            high = mid - 1;\n        }\n    }\n    return false;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes 2D matrix and target, returns boolean." },
          { line: 2, text: "Check if matrix is empty. If so, return false." },
          { line: 3, text: "Get row count `m` and column count `n`." },
          { line: 4, text: "Set `low` to 0 and `high` to the last virtual index `m * n - 1`." },
          { line: 5, text: "Standard binary search loop." },
          { line: 6, text: "Find middle virtual index `mid`." },
          { line: 7, text: "Convert virtual 1D index `mid` to 2D row: `mid / n`." },
          { line: 8, text: "Convert virtual 1D index `mid` to 2D column: `mid % n`." },
          { line: 9, text: "Check if matrix element matches target. If yes, return true." },
          { line: 11, text: "If element is too small, search right side." },
          { line: 13, text: "If element is too large, search left side." }
        ]
      },
      python: {
        code: `def searchMatrix(matrix: list[list[int]], target: int) -> bool:\n    if not matrix or not matrix[0]:\n        return False\n    m, n = len(matrix), len(matrix[0])\n    low, high = 0, m * n - 1\n    while low <= high:\n        mid = low + (high - low) // 2\n        row = mid // n\n        col = mid % n\n        if matrix[row][col] == target:\n            return True\n        elif matrix[row][col] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return False`,
        explanation: [
          { line: 1, text: "Define searchMatrix function in Python." },
          { line: 2, text: "Handle empty matrix edge case." },
          { line: 4, text: "Determine rows `m` and columns `n`." },
          { line: 5, text: "Initialize bounds of virtual 1D array." },
          { line: 6, text: "Run binary search loop." },
          { line: 7, text: "Calculate midpoint virtual index." },
          { line: 8, text: "Calculate row index using integer floor division `// n`." },
          { line: 9, text: "Calculate column index using modulo `% n`." },
          { line: 10, text: "If target matched, return `True`." }
        ]
      },
      java: {
        code: `public boolean searchMatrix(int[][] matrix, int target) {\n    if (matrix.length == 0 || matrix[0].length == 0) return false;\n    int m = matrix.length, n = matrix[0].length;\n    int low = 0, high = m * n - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        int row = mid / n;\n        int col = mid % n;\n        if (matrix[row][col] == target) {\n            return true;\n        } else if (matrix[row][col] < target) {\n            low = mid + 1;\n        } else {\n            high = mid - 1;\n        }\n    }\n    return false;\n}`,
        explanation: [
          { line: 1, text: "Declare method `searchMatrix` returning boolean." },
          { line: 2, text: "Verify matrix sizes are valid." },
          { line: 3, text: "Obtain row count `m` and column count `n`." },
          { line: 4, text: "Set boundary variables for virtual 1D matrix search." },
          { line: 5, text: "Perform binary search." },
          { line: 7, text: "Determine cell row." },
          { line: 8, text: "Determine cell column." },
          { line: 9, text: "If element matches target, return true." }
        ]
      }
    }
  },
  {
    id: 153,
    name: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    topic: "Binary Search",
    leetcodeUrl: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    tip: "Compare `nums[mid]` with `nums[high]`. If `nums[mid] > nums[high]`, the minimum is in the right half (move `low = mid + 1`). Otherwise, it's in the left half including mid (move `high = mid`).",
    description: "Given the sorted rotated array `nums` of unique elements, return the minimum element of this array. You must write an algorithm that runs in `O(log n)` time.",
    chatbotData: {
      intuition: "In a rotated sorted array, the minimum element represents the inflection point. We compare `nums[mid]` with the rightmost element `nums[high]`. If `nums[mid] > nums[high]`, it means the inflection point (minimum) must lie in the right half, so we search right (`low = mid + 1`). If `nums[mid] <= nums[high]`, the right half is normally sorted, so the minimum is either at `mid` or to its left, so we search left including mid (`high = mid`). Eventually, `low` and `high` meet at the minimum element.",
      complexity: "Time Complexity: O(log N) since we divide the search space in half at each step.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. Array is not rotated (fully sorted): works correctly, low moves to index 0.\n2. Size 1 array: loop condition `low < high` fails immediately, returns element.\n3. Size 2 array: correctly compares the two and returns min.",
      debugging: "Use `low < high` (not `low <= high`) in the loop condition, and when searching left, set `high = mid` (not `mid - 1`), because the element at `mid` itself could be the minimum."
    },
    solutions: {
      cpp: {
        code: `int findMin(vector<int>& nums) {\n    int low = 0, high = nums.size() - 1;\n    while (low < high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] > nums[high]) {\n            low = mid + 1;\n        } else {\n            high = mid;\n        }\n    }\n    return nums[low];\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes integer vector, returns minimum integer." },
          { line: 2, text: "Initialize `low` at 0 and `high` at the last index." },
          { line: 3, text: "Loop while `low` is strictly less than `high`. When they meet, we've found the minimum." },
          { line: 4, text: "Calculate the middle index `mid`." },
          { line: 5, text: "If `nums[mid] > nums[high]`, the left side is sorted and the inflection point is in the right half." },
          { line: 6, text: "Search the right half: set `low = mid + 1`." },
          { line: 7, text: "Otherwise, the minimum must be in the left half, and could be `mid` itself." },
          { line: 8, text: "Search the left half (including mid): set `high = mid`." },
          { line: 11, text: "Return the element at the meeting point `nums[low]`." }
        ]
      },
      python: {
        code: `def findMin(nums: list[int]) -> int:\n    low, high = 0, len(nums) - 1\n    while low < high:\n        mid = low + (high - low) // 2\n        if nums[mid] > nums[high]:\n            low = mid + 1\n        else:\n            high = mid\n    return nums[low]`,
        explanation: [
          { line: 1, text: "Define findMin function." },
          { line: 2, text: "Initialize pointers." },
          { line: 3, text: "Loop until pointers meet." },
          { line: 4, text: "Compute midpoint." },
          { line: 5, text: "If mid value is larger than high value, pivot lies to the right." },
          { line: 6, text: "Shift search space rightwards." },
          { line: 8, text: "Shift search space leftwards, keeping `mid` as a candidate." },
          { line: 9, text: "Return the element at `low` when pointers converge." }
        ]
      },
      java: {
        code: `public int findMin(int[] nums) {\n    int low = 0, high = nums.length - 1;\n    while (low < high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] > nums[high]) {\n            low = mid + 1;\n        } else {\n            high = mid;\n        }\n    }\n    return nums[low];\n}`,
        explanation: [
          { line: 1, text: "Declare method `findMin` returning int." },
          { line: 2, text: "Initialize boundaries." },
          { line: 3, text: "Loop until boundaries converge." },
          { line: 4, text: "Find middle index." },
          { line: 5, text: "Compare `nums[mid]` with `nums[high]`." },
          { line: 6, text: "Pivot is in right half: set `low = mid + 1`." },
          { line: 8, text: "Pivot is in left half: set `high = mid`." },
          { line: 11, text: "Return the converged value." }
        ]
      }
    }
  },
  {
    id: 162,
    name: "Find Peak Element",
    difficulty: "Medium",
    topic: "Binary Search",
    leetcodeUrl: "https://leetcode.com/problems/find-peak-element/",
    tip: "Compare `nums[mid]` with its right neighbor `nums[mid + 1]`. If `nums[mid] < nums[mid + 1]`, a peak must lie on the right side (move `low = mid + 1`). Otherwise, it's on the left side (move `high = mid`).",
    description: "A peak element is an element that is strictly greater than its neighbors. Given an 0-indexed integer array `nums`, find a peak element, and return its index. You must write an algorithm that runs in `O(log n)` time.",
    chatbotData: {
      intuition: "We can find a peak in O(log N) using binary search by comparing `nums[mid]` to its neighbor `nums[mid + 1]`. If `nums[mid] < nums[mid + 1]`, we are on an ascending slope, meaning a peak must exist somewhere in the right half. So, we search the right half (`low = mid + 1`). If `nums[mid] >= nums[mid + 1]`, we are on a descending slope, meaning a peak must exist at `mid` or in the left half, so we search the left half (`high = mid`).",
      complexity: "Time Complexity: O(log N) because we halve the search space at each step.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. Array size is 1: loop terminates, returns index 0.\n2. Peak at boundary (e.g. index 0 or n-1): handles correctly, since the problem treats out-of-bound neighbors as negative infinity.",
      debugging: "Use `low < high` inside the loop condition, and when moving the right boundary set `high = mid` so we don't accidentally skip a peak that happens to be at `mid`."
    },
    solutions: {
      cpp: {
        code: `int findPeakElement(vector<int>& nums) {\n    int low = 0, high = nums.size() - 1;\n    while (low < high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] < nums[mid + 1]) {\n            low = mid + 1;\n        } else {\n            high = mid;\n        }\n    }\n    return low;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes integer vector, returns a peak element's index." },
          { line: 2, text: "Initialize search bounds." },
          { line: 3, text: "Loop while pointers have not met." },
          { line: 4, text: "Compute middle index." },
          { line: 5, text: "Compare the middle element with its right neighbor." },
          { line: 6, text: "If mid element is smaller, slope is rising: a peak is in the right half. Set `low = mid + 1`." },
          { line: 8, text: "Otherwise, slope is falling: a peak is at `mid` or in the left half. Set `high = mid`." },
          { line: 11, text: "Return the index where the pointers met." }
        ]
      },
      python: {
        code: `def findPeakElement(nums: list[int]) -> int:\n    low, high = 0, len(nums) - 1\n    while low < high:\n        mid = low + (high - low) // 2\n        if nums[mid] < nums[mid + 1]:\n            low = mid + 1\n        else:\n            high = mid\n    return low`,
        explanation: [
          { line: 1, text: "Define findPeakElement function." },
          { line: 2, text: "Initialize pointers." },
          { line: 3, text: "Start binary search loop." },
          { line: 4, text: "Find middle index." },
          { line: 5, text: "If mid value is smaller than right neighbor, go right." },
          { line: 8, text: "Otherwise, go left including `mid`." },
          { line: 9, text: "Return index." }
        ]
      },
      java: {
        code: `public int findPeakElement(int[] nums) {\n    int low = 0, high = nums.length - 1;\n    while (low < high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] < nums[mid + 1]) {\n            low = mid + 1;\n        } else {\n            high = mid;\n        }\n    }\n    return low;\n}`,
        explanation: [
          { line: 1, text: "Declare method returning peak index." },
          { line: 2, text: "Set low and high pointers." },
          { line: 3, text: "Loop while pointers are separate." },
          { line: 4, text: "Compute midpoint." },
          { line: 5, text: "Compare midpoint with right neighbor." },
          { line: 6, text: "Ascending slope: move low pointer." },
          { line: 8, text: "Descending slope: move high pointer." },
          { line: 11, text: "Return peak index." }
        ]
      }
    }
  },
  {
    id: 240,
    name: "Search a 2D Matrix II",
    difficulty: "Medium",
    topic: "Binary Search",
    leetcodeUrl: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
    tip: "Start at the top-right corner. If the element is equal to target, return true. If it is greater, move left (decrease column). If it is smaller, move down (increase row).",
    description: "Write an efficient algorithm that searches for a value `target` in an `m x n` integer matrix `matrix`. This matrix has the following properties:\n1. Integers in each row are sorted in ascending from left to right.\n2. Integers in each column are sorted in ascending from top to bottom.",
    chatbotData: {
      intuition: "Instead of searching the entire matrix (O(M*N)) or binary searching each row (O(M log N)), we can start search from the top-right corner `(row = 0, col = cols - 1)`. At this position, all elements to the left in the same row are smaller, and all elements below in the same column are larger. If the current element is larger than target, we know the target cannot be in this column: we move left `col--`. If the current element is smaller, we know target cannot be in this row: we move down `row++`.",
      complexity: "Time Complexity: O(M + N) because at each step we either eliminate one row or one column. M is rows and N is columns.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. Matrix is empty: returns false.\n2. Target is outside the matrix ranges: row/col index becomes out of bounds, loop terminates, returns false.",
      debugging: "Verify that you start at either top-right or bottom-left corner. Starting at top-left or bottom-right will not work because both directions from those corners either increase or decrease the values, making path decisions ambiguous."
    },
    solutions: {
      cpp: {
        code: `bool searchMatrix(vector<vector<int>>& matrix, int target) {\n    if (matrix.empty() || matrix[0].empty()) return false;\n    int row = 0;\n    int col = matrix[0].size() - 1;\n    while (row < matrix.size() && col >= 0) {\n        if (matrix[row][col] == target) {\n            return true;\n        } else if (matrix[row][col] > target) {\n            col--;\n        } else {\n            row++;\n        }\n    }\n    return false;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes 2D matrix reference and target, returns boolean." },
          { line: 2, text: "Handle empty matrix edge case." },
          { line: 3, text: "Start row pointer at 0 (top row)." },
          { line: 4, text: "Start col pointer at `matrix[0].size() - 1` (rightmost column)." },
          { line: 5, text: "Loop while pointers remain inside the matrix bounds." },
          { line: 6, text: "If current element matches target, return true." },
          { line: 8, text: "If current element is greater than target, target must be in a column to the left: decrement `col`." },
          { line: 10, text: "If current element is smaller than target, target must be in a row below: increment `row`." },
          { line: 14, text: "Return false if pointers go out of bounds." }
        ]
      },
      python: {
        code: `def searchMatrix(matrix: list[list[int]], target: int) -> bool:\n    if not matrix or not matrix[0]:\n        return False\n    row, col = 0, len(matrix[0]) - 1\n    while row < len(matrix) and col >= 0:\n        if matrix[row][col] == target:\n            return True\n        elif matrix[row][col] > target:\n            col -= 1\n        else:\n            row += 1\n    return False`,
        explanation: [
          { line: 1, text: "Define searchMatrix function in Python." },
          { line: 2, text: "Return False if matrix is empty." },
          { line: 4, text: "Initialize pointer at top-right corner." },
          { line: 5, text: "Loop while row is within height and col is within width." },
          { line: 6, text: "Check target match. Return True if found." },
          { line: 8, text: "If element is too big, move leftwards (eliminate column)." },
          { line: 10, text: "If element is too small, move downwards (eliminate row)." }
        ]
      },
      java: {
        code: `public boolean searchMatrix(int[][] matrix, int target) {\n    if (matrix.length == 0 || matrix[0].length == 0) return false;\n    int row = 0;\n    int col = matrix[0].length - 1;\n    while (row < matrix.length && col >= 0) {\n        if (matrix[row][col] == target) {\n            return true;\n        } else if (matrix[row][col] > target) {\n            col--;\n        } else {\n            row++;\n        }\n    }\n    return false;\n}`,
        explanation: [
          { line: 1, text: "Declare searchMatrix method." },
          { line: 2, text: "Verify matrix sizes." },
          { line: 3, text: "Set starting row position to 0." },
          { line: 4, text: "Set starting col position to last column index." },
          { line: 5, text: "Loop while pointers are within limits." },
          { line: 6, text: "Check target match at current index." },
          { line: 8, text: "Move left if element is larger than target." },
          { line: 10, text: "Move down if element is smaller than target." }
        ]
      }
    }
  },
  {
    id: 4,
    name: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    topic: "Binary Search",
    leetcodeUrl: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    tip: "Use binary search on the partition index of the smaller array. Partition both arrays such that the left half has the same number of elements as the right half. Ensure elements at boundaries are correctly sorted.",
    description: "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be `O(log (m+n))`.",
    chatbotData: {
      intuition: "Instead of merging the arrays (which takes O(M+N)), we want to find a partition in both arrays. We binary search the partition point in the smaller array `A` (say size X). Let's call this partition `i`, and the corresponding partition in the larger array `B` (size Y) is `j = (X + Y + 1) / 2 - i`. This partition splits the merged array into two halves of equal size. We check if the partition is correct: the largest element on the left must be <= the smallest element on the right (i.e. `A[i-1] <= B[j]` and `B[j-1] <= A[i]`). If it's correct, we compute the median.",
      complexity: "Time Complexity: O(log(min(M, N))) because we perform binary search only on the smaller array.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. One array is empty: handled correctly by returning the median of the non-empty array.\n2. Boundaries (index out of bounds): handled by treating out-of-bounds left elements as -infinity and right elements as +infinity.",
      debugging: "Always ensure `nums1` is the smaller array. If not, swap `nums1` and `nums2` at the beginning of the function to ensure the correct complexity and prevent out-of-bounds calculations."
    },
    solutions: {
      cpp: {
        code: `double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n    if (nums1.size() > nums2.size()) {\n        return findMedianSortedArrays(nums2, nums1);\n    }\n    int x = nums1.size();\n    int y = nums2.size();\n    int low = 0, high = x;\n    while (low <= high) {\n        int partitionX = low + (high - low) / 2;\n        int partitionY = (x + y + 1) / 2 - partitionX;\n        int maxLeftX = (partitionX == 0) ? INT_MIN : nums1[partitionX - 1];\n        int minRightX = (partitionX == x) ? INT_MAX : nums1[partitionX];\n        int maxLeftY = (partitionY == 0) ? INT_MIN : nums2[partitionY - 1];\n        int minRightY = (partitionY == y) ? INT_MAX : nums2[partitionY];\n        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\n            if ((x + y) % 2 == 0) {\n                return ((double)max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0;\n            } else {\n                return (double)max(maxLeftX, maxLeftY);\n            }\n        } else if (maxLeftX > minRightY) {\n            high = partitionX - 1;\n        } else {\n            low = partitionX + 1;\n        }\n    }\n    return 0.0;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes two sorted vectors, returns median as double." },
          { line: 2, text: "If `nums1` is larger than `nums2`, swap them to binary search on the smaller array. This ensures O(log(min(M, N))) time." },
          { line: 5, text: "Define sizes of both arrays as `x` and `y`." },
          { line: 7, text: "Initialize binary search range `[0, x]` on the smaller array." },
          { line: 8, text: "Loop while the binary search space is valid." },
          { line: 9, text: "Find partition index `partitionX` in the smaller array." },
          { line: 10, text: "Calculate partition index `partitionY` in the larger array to keep equal left/right halves." },
          { line: 11, text: "If `partitionX` is at 0, there are no left elements in X: use `INT_MIN`. Otherwise, use `nums1[partitionX-1]`." },
          { line: 12, text: "If `partitionX` is at X, there are no right elements: use `INT_MAX`. Otherwise, use `nums1[partitionX]`." },
          { line: 13, text: "Do the same out-of-bound checks for array Y." },
          { line: 15, text: "Check if we found the correct partition: left elements are <= right elements." },
          { line: 16, text: "If total size is even, median is average of the maximum left element and minimum right element." },
          { line: 18, text: "If total size is odd, median is the maximum of the left elements." },
          { line: 21, text: "If `maxLeftX > minRightY`, partition X is too far right: search left half by decreasing `high`." },
          { line: 23, text: "Otherwise, partition X is too far left: search right half by increasing `low`." }
        ]
      },
      python: {
        code: `def findMedianSortedArrays(nums1: list[int], nums2: list[int]) -> float:\n    if len(nums1) > len(nums2):\n        return findMedianSortedArrays(nums2, nums1)\n    x, y = len(nums1), len(nums2)\n    low, high = 0, x\n    while low <= high:\n        partitionX = low + (high - low) // 2\n        partitionY = (x + y + 1) // 2 - partitionX\n        maxLeftX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]\n        minRightX = float('inf') if partitionX == x else nums1[partitionX]\n        maxLeftY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]\n        minRightY = float('inf') if partitionY == y else nums2[partitionY]\n        if maxLeftX <= minRightY and maxLeftY <= minRightX:\n            if (x + y) % 2 == 0:\n                return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0\n            else:\n                return float(max(maxLeftX, maxLeftY))\n        elif maxLeftX > minRightY:\n            high = partitionX - 1\n        else:\n            low = partitionX + 1\n    return 0.0`,
        explanation: [
          { line: 1, text: "Define median function." },
          { line: 2, text: "Ensure `nums1` is the smaller list." },
          { line: 4, text: "Get lengths `x` and `y`." },
          { line: 5, text: "Set pointers for partition search." },
          { line: 7, text: "Calculate partition points." },
          { line: 9, text: "Handle boundary values using positive/negative infinity." },
          { line: 13, text: "If partition boundary conditions are met, calculate median." },
          { line: 14, text: "Even total size calculation." },
          { line: 16, text: "Odd total size calculation." },
          { line: 18, text: "If X partition is too large, move left." },
          { line: 20, text: "If X partition is too small, move right." }
        ]
      },
      java: {
        code: `public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n    if (nums1.length > nums2.length) {\n        return findMedianSortedArrays(nums2, nums1);\n    }\n    int x = nums1.length, y = nums2.length;\n    int low = 0, high = x;\n    while (low <= high) {\n        int partitionX = low + (high - low) / 2;\n        int partitionY = (x + y + 1) / 2 - partitionX;\n        int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];\n        int minRightX = (partitionX == x) ? Integer.MAX_VALUE : nums1[partitionX];\n        int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];\n        int minRightY = (partitionY == y) ? Integer.MAX_VALUE : nums2[partitionY];\n        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\n            if ((x + y) % 2 == 0) {\n                return ((double)Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0;\n            } else {\n                return (double)Math.max(maxLeftX, maxLeftY);\n            }\n        } else if (maxLeftX > minRightY) {\n            high = partitionX - 1;\n        } else {\n            low = partitionX + 1;\n        }\n    }\n    return 0.0;\n}`,
        explanation: [
          { line: 1, text: "Declare method findMedianSortedArrays." },
          { line: 2, text: "Swap if nums1 is larger." },
          { line: 5, text: "Define arrays lengths." },
          { line: 6, text: "Initialize boundaries." },
          { line: 8, text: "Compute partitions." },
          { line: 10, text: "Set boundary boundary elements using `Integer.MIN_VALUE` and `Integer.MAX_VALUE`." },
          { line: 14, text: "Verify partition conditions." },
          { line: 15, text: "Median calculation for even lengths sum." },
          { line: 17, text: "Median calculation for odd lengths sum." }
        ]
      }
    }
  }
];
