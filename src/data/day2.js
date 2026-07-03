export const day2Problems = [
  {
    id: 125,
    name: "Valid Palindrome",
    difficulty: "Easy",
    topic: "Two Pointer",
    leetcodeUrl: "https://leetcode.com/problems/valid-palindrome/",
    tip: "Use two pointers, one at the start (left) and one at the end (right). Skip non-alphanumeric characters. Compare characters case-insensitively while moving inwards.",
    description: "Given a string `s`, return `true` if it is a palindrome, or `false` otherwise, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters.",
    chatbotData: {
      intuition: "A palindrome reads the same backwards and forwards. We place a pointer `left` at the start of the string, and `right` at the end. We move them towards each other. If a pointer points to a non-alphanumeric character (not a letter or number), we skip it. Otherwise, we compare the lowercase version of the characters. If they differ, it's not a palindrome. If the pointers meet without any mismatch, it is a palindrome.",
      complexity: "Time Complexity: O(N) because we visit each character at most once with our two pointers.\nSpace Complexity: O(1) as we check in-place without creating a new filtered string.",
      edgeCases: "1. Empty string or string with only spaces/punctuation: returns true (empty string is a valid palindrome).\n2. Single character: returns true.\n3. Mixed cases and special chars: correctly handled by skipping and converting to lowercase.",
      debugging: "Make sure you include the condition `left < right` inside the inner while loops that skip non-alphanumeric characters, otherwise pointers could go out of bounds."
    },
    solutions: {
      cpp: {
        code: `bool isPalindrome(string s) {\n    int left = 0, right = s.length() - 1;\n    while (left < right) {\n        while (left < right && !isalnum(s[left])) {\n            left++;\n        }\n        while (left < right && !isalnum(s[right])) {\n            right--;\n        }\n        if (tolower(s[left]) != tolower(s[right])) {\n            return false;\n        }\n        left++;\n        right--;\n    }\n    return true;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes a string `s` and returns a boolean." },
          { line: 2, text: "Initialize `left` pointer at index 0 and `right` pointer at the last index." },
          { line: 3, text: "Loop while the `left` pointer is to the left of the `right` pointer." },
          { line: 4, text: "Skip non-alphanumeric characters from the left. `isalnum` checks if char is a letter/number." },
          { line: 5, text: "Increment `left` pointer to skip the non-alphanumeric character." },
          { line: 7, text: "Skip non-alphanumeric characters from the right side." },
          { line: 8, text: "Decrement `right` pointer to skip." },
          { line: 10, text: "Compare characters case-insensitively using `tolower()`. If they don't match, return `false`." },
          { line: 13, text: "Move both pointers inwards by incrementing `left` and decrementing `right`." },
          { line: 16, text: "If the pointers meet, all alphanumeric characters matched: return `true`." }
        ]
      },
      python: {
        code: `def isPalindrome(s: str) -> bool:\n    left, right = 0, len(s) - 1\n    while left < right:\n        while left < right and not s[left].isalnum():\n            left += 1\n        while left < right and not s[right].isalnum():\n            right -= 1\n        if s[left].lower() != s[right].lower():\n            return False\n        left += 1\n        right -= 1\n    return True`,
        explanation: [
          { line: 1, text: "Define function `isPalindrome` returning bool." },
          { line: 2, text: "Initialize `left` to 0 and `right` to the last index of `s`." },
          { line: 3, text: "Run loop while pointers have not met." },
          { line: 4, text: "Skip non-alphanumeric characters from the left side using `isalnum()`." },
          { line: 6, text: "Skip non-alphanumeric characters from the right side." },
          { line: 8, text: "Convert characters to lowercase using `lower()` and compare them. Return `False` if they differ." },
          { line: 10, text: "Move pointers inwards by one position." },
          { line: 12, text: "Return `True` if no mismatches are found." }
        ]
      },
      java: {
        code: `public boolean isPalindrome(String s) {\n    int left = 0, right = s.length() - 1;\n    while (left < right) {\n        while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {\n            left++;\n        }\n        while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {\n            right--;\n        }\n        if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {\n            return false;\n        }\n        left++;\n        right--;\n    }\n    return true;\n}`,
        explanation: [
          { line: 1, text: "Declare method `isPalindrome` returning a boolean." },
          { line: 2, text: "Set pointers `left` to index 0, and `right` to the last index." },
          { line: 3, text: "Loop while pointers are valid." },
          { line: 4, text: "Use `Character.isLetterOrDigit()` to find next valid alphanumeric character from left." },
          { line: 7, text: "Use `Character.isLetterOrDigit()` to find next valid alphanumeric character from right." },
          { line: 10, text: "Compare characters using `Character.toLowerCase()`. Return false on mismatch." },
          { line: 13, text: "Move pointers inwards." },
          { line: 16, text: "Return true when comparison completes successfully." }
        ]
      }
    }
  },
  {
    id: 26,
    name: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    topic: "Two Pointer",
    leetcodeUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    tip: "Use a slow pointer 'writeIdx' at index 1. Iterate with a fast pointer 'i'. If nums[i] is different from the element before it, copy it to writeIdx and increment writeIdx.",
    description: "Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements `k`.",
    chatbotData: {
      intuition: "Since the array is sorted, duplicates are grouped together. We can use two pointers: a fast pointer `i` that scans the array, and a slow pointer `writeIdx` that marks where the next unique element should be written. Since the first element is always unique, we start `writeIdx` at 1. Whenever the fast pointer finds a number that is different from the previous number (`nums[i] != nums[i-1]`), it means we found a new unique element. We copy it to `writeIdx` and increment `writeIdx`.",
      complexity: "Time Complexity: O(N) because we iterate through the array of length N exactly once.\nSpace Complexity: O(1) since we perform all operations in-place without using extra memory.",
      edgeCases: "1. Empty array: returns 0.\n2. Array with no duplicates: array remains unchanged, returns length.\n3. Array with all duplicates: returns 1, first element is kept.",
      debugging: "Start your iteration from index 1, not index 0, because the element at index 0 has no predecessor and is always part of the unique subarray."
    },
    solutions: {
      cpp: {
        code: `int removeDuplicates(vector<int>& nums) {\n    if (nums.empty()) return 0;\n    int writeIdx = 1;\n    for (int i = 1; i < nums.size(); i++) {\n        if (nums[i] != nums[i - 1]) {\n            nums[writeIdx] = nums[i];\n            writeIdx++;\n        }\n    }\n    return writeIdx;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: returns the count of unique elements, modifies the array in place." },
          { line: 2, text: "If the vector is empty, return 0 immediately." },
          { line: 3, text: "Initialize `writeIdx` pointer to 1. The first element is always unique, so we start writing at index 1." },
          { line: 4, text: "Loop through the array starting from index 1 to the end." },
          { line: 5, text: "Check if the current element is different from the previous element." },
          { line: 6, text: "If it's different, write the unique element at the `writeIdx` position." },
          { line: 7, text: "Increment `writeIdx` to prepare for the next unique element." },
          { line: 10, text: "Return `writeIdx`, which represents the count of unique elements." }
        ]
      },
      python: {
        code: `def removeDuplicates(nums: list[int]) -> int:\n    if not nums:\n        return 0\n    write_idx = 1\n    for i in range(1, len(nums)):\n        if nums[i] != nums[i - 1]:\n            nums[write_idx] = nums[i]\n            write_idx += 1\n    return write_idx`,
        explanation: [
          { line: 1, text: "Define function `removeDuplicates` taking a list of integers, returning the count of unique elements." },
          { line: 2, text: "Return 0 if the list is empty." },
          { line: 4, text: "Set write pointer `write_idx` to 1." },
          { line: 5, text: "Loop from index 1 to the end of the list." },
          { line: 6, text: "Check if current element is different from the preceding element." },
          { line: 7, text: "If it is new, move it to `write_idx` position." },
          { line: 8, text: "Increment write pointer `write_idx`." },
          { line: 9, text: "Return `write_idx`." }
        ]
      },
      java: {
        code: `public int removeDuplicates(int[] nums) {\n    if (nums.length == 0) return 0;\n    int writeIdx = 1;\n    for (int i = 1; i < nums.length; i++) {\n        if (nums[i] != nums[i - 1]) {\n            nums[writeIdx] = nums[i];\n            writeIdx++;\n        }\n    }\n    return writeIdx;\n}`,
        explanation: [
          { line: 1, text: "Declare method `removeDuplicates` returning int." },
          { line: 2, text: "Handle the empty array edge case." },
          { line: 3, text: "Initialize write pointer `writeIdx` to 1." },
          { line: 4, text: "Loop through array elements starting at index 1." },
          { line: 5, text: "If current element `nums[i]` is not equal to `nums[i - 1]`." },
          { line: 6, text: "Overwrite `nums[writeIdx]` with the unique element `nums[i]`." },
          { line: 7, text: "Increment the write index pointer." },
          { line: 10, text: "Return the final index (which equals the length of unique portion)." }
        ]
      }
    }
  },
  {
    id: 11,
    name: "Container With Most Water",
    difficulty: "Medium",
    topic: "Two Pointer",
    leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/",
    tip: "Use two pointers, one at the start and one at the end. Calculate water area, update maximum. Move the pointer pointing to the shorter line inwards.",
    description: "You are given an integer array `height` of length `n`. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
    chatbotData: {
      intuition: "The volume of water is limited by the shorter of the two lines and the distance between them: Area = min(height[left], height[right]) * (right - left). We start with pointers at the extreme ends (`left` and `right`) to maximize width. To find a larger area, we must look for taller lines. Since the area is bottlenecked by the shorter line, moving the taller pointer inwards would never increase the height bottleneck but would definitely decrease the width. Therefore, we always move the pointer pointing to the shorter line inwards.",
      complexity: "Time Complexity: O(N) because the two pointers start at the ends and move closer until they meet, making a single pass.\nSpace Complexity: O(1) since we only store index variables and the maximum area.",
      edgeCases: "1. Two elements: minimum possible size, calculated immediately.\n2. All lines are of equal height: pointers move inwards, width decreases, area decreases, handled correctly.",
      debugging: "Make sure you use `Math.min(height[left], height[right])` for the height of the container, not `Math.max`."
    },
    solutions: {
      cpp: {
        code: `int maxArea(vector<int>& height) {\n    int left = 0, right = height.size() - 1;\n    int maxWater = 0;\n    while (left < right) {\n        int h = min(height[left], height[right]);\n        int w = right - left;\n        maxWater = max(maxWater, h * w);\n        if (height[left] < height[right]) {\n            left++;\n        } else {\n            right--;\n        }\n    }\n    return maxWater;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes integer vector reference of heights and returns the max area." },
          { line: 2, text: "Initialize `left` pointer to 0 and `right` pointer to the last element index." },
          { line: 3, text: "Initialize `maxWater` tracker to 0." },
          { line: 4, text: "Loop while the left pointer is less than the right pointer." },
          { line: 5, text: "Find the bottleneck height: the minimum of the two boundaries." },
          { line: 6, text: "Find the width of the container: `right - left`." },
          { line: 7, text: "Update `maxWater` if the current container's volume (`h * w`) is larger." },
          { line: 8, text: "If the left line is shorter than the right line, move the left pointer rightward to search for a taller boundary." },
          { line: 10, text: "Otherwise, move the right pointer leftward." },
          { line: 14, text: "Return the maximum water calculated." }
        ]
      },
      python: {
        code: `def maxArea(height: list[int]) -> int:\n    left, right = 0, len(height) - 1\n    max_water = 0\n    while left < right:\n        h = min(height[left], height[right])\n        w = right - left\n        max_water = max(max_water, h * w)\n        if height[left] < height[right]:\n            left += 1\n        else:\n            right -= 1\n    return max_water`,
        explanation: [
          { line: 1, text: "Define function `maxArea` returning integer." },
          { line: 2, text: "Initialize two pointers at the ends of the array." },
          { line: 3, text: "Initialize `max_water` to 0." },
          { line: 4, text: "Loop until the pointers meet." },
          { line: 5, text: "Get the limiting height of the container." },
          { line: 6, text: "Calculate the container width." },
          { line: 7, text: "Update the maximum water recorded." },
          { line: 8, text: "If left boundary is shorter, increment `left` to try and find a taller height." },
          { line: 10, text: "Otherwise, decrement `right` pointer." },
          { line: 12, text: "Return maximum water capacity." }
        ]
      },
      java: {
        code: `public int maxArea(int[] height) {\n    int left = 0, right = height.length - 1;\n    int maxWater = 0;\n    while (left < right) {\n        int h = Math.min(height[left], height[right]);\n        int w = right - left;\n        maxWater = Math.max(maxWater, h * w);\n        if (height[left] < height[right]) {\n            left++;\n        } else {\n            right--;\n        }\n    }\n    return maxWater;\n}`,
        explanation: [
          { line: 1, text: "Declare method `maxArea` returning int." },
          { line: 2, text: "Initialize two pointers at index 0 and index `height.length - 1`." },
          { line: 3, text: "Initialize `maxWater` variable." },
          { line: 4, text: "Loop while `left` index is less than `right` index." },
          { line: 5, text: "Find the shorter boundary height." },
          { line: 6, text: "Find the horizontal width." },
          { line: 7, text: "Update `maxWater` with the larger of itself vs current container volume." },
          { line: 8, text: "Compare heights to decide which pointer to shift." },
          { line: 9, text: "Increment `left` if the left boundary is shorter." },
          { line: 11, text: "Decrement `right` if the right boundary is shorter or equal." },
          { line: 14, text: "Return `maxWater` result." }
        ]
      }
    }
  },
  {
    id: 15,
    name: "3Sum",
    difficulty: "Medium",
    topic: "Two Pointer",
    leetcodeUrl: "https://leetcode.com/problems/3sum/",
    tip: "Sort the array first. Loop through the array, fixing the first element `nums[i]`. Use two pointers (`left` and `right`) to find the other two numbers that sum to `-nums[i]`. Skip duplicates.",
    description: "Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`. The solution set must not contain duplicate triplets.",
    chatbotData: {
      intuition: "Sort the array. Sorting allows us to easily skip duplicate elements to avoid duplicate triplets in the output and enables us to use the Two Pointer technique. We iterate through the array, fixing the first number `nums[i]`. If `nums[i] > 0`, we can stop immediately since a sum of three positive numbers can never be 0. Otherwise, we set up `left = i + 1` and `right = len - 1`. If their sum is too small, we increment `left`. If too large, we decrement `right`. If it is exactly 0, we add it to the result and move both pointers, skipping duplicates.",
      complexity: "Time Complexity: O(N²) because we have a outer loop of N and a two-pointer scan of O(N) inside it. Sorting takes O(N log N), which is dominated by the O(N²) loop.\nSpace Complexity: O(log N) or O(N) depending on the language's sorting algorithm implementation.",
      edgeCases: "1. Fewer than 3 elements: returns empty array.\n2. All zeroes (e.g., [0,0,0,0]): returns [[0,0,0]]. Duplicates are properly skipped.\n3. Large array with no triplets that sum to 0: returns empty list.",
      debugging: "Always check and skip duplicate values for all three pointers (`i`, `left`, and `right`) to prevent duplicate triplets from appearing in the output."
    },
    solutions: {
      cpp: {
        code: `vector<vector<int>> threeSum(vector<int>& nums) {\n    vector<vector<int>> result;\n    sort(nums.begin(), nums.end());\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] > 0) break;\n        if (i > 0 && nums[i] == nums[i - 1]) continue;\n        int left = i + 1, right = nums.size() - 1;\n        while (left < right) {\n            int sum = nums[i] + nums[left] + nums[right];\n            if (sum < 0) {\n                left++;\n            } else if (sum > 0) {\n                right--;\n            } else {\n                result.push_back({nums[i], nums[left], nums[right]});\n                while (left < right && nums[left] == nums[left + 1]) left++;\n                while (left < right && nums[right] == nums[right - 1]) right--;\n                left++;\n                right--;\n            }\n        }\n    }\n    return result;\n}`,
        explanation: [
          { line: 1, text: "Function declaration returning a list of integer triplets." },
          { line: 2, text: "Declare `result` vector to store triplets." },
          { line: 3, text: "Sort the input array. This is critical for two pointers and skipping duplicates." },
          { line: 4, text: "Loop through the sorted array. `i` is the first element of our triplet." },
          { line: 5, text: "Since the array is sorted, if `nums[i]` is positive, all subsequent numbers are positive. They can't sum to 0: break loop." },
          { line: 6, text: "Skip duplicate elements for the first position to avoid duplicate triplets." },
          { line: 7, text: "Initialize `left` pointer to `i + 1` and `right` pointer to the end of the array." },
          { line: 8, text: "Run two pointer scan for the remaining two elements." },
          { line: 9, text: "Calculate the sum of the triplet." },
          { line: 10, text: "If the sum is negative, we need a larger value: increment `left` pointer." },
          { line: 12, text: "If the sum is positive, we need a smaller value: decrement `right` pointer." },
          { line: 14, text: "Triplet found! Push it into the `result` vector." },
          { line: 15, text: "Skip duplicate elements for the `left` pointer position." },
          { line: 16, text: "Skip duplicate elements for the `right` pointer position." },
          { line: 17, text: "Advance both pointers inwards to look for other pairs." },
          { line: 21, text: "Return the unique triplets list." }
        ]
      },
      python: {
        code: `def threeSum(nums: list[int]) -> list[list[int]]:\n    result = []\n    nums.sort()\n    for i in range(len(nums)):\n        if nums[i] > 0:\n            break\n        if i > 0 and nums[i] == nums[i - 1]:\n            continue\n        left, right = i + 1, len(nums) - 1\n        while left < right:\n            total = nums[i] + nums[left] + nums[right]\n            if total < 0:\n                left += 1\n            elif total > 0:\n                right -= 1\n            else:\n                result.append([nums[i], nums[left], nums[right]])\n                while left < right and nums[left] == nums[left + 1]:\n                    left += 1\n                while left < right and nums[right] == nums[right - 1]:\n                    right -= 1\n                left += 1\n                right -= 1\n    return result`,
        explanation: [
          { line: 1, text: "Define function `threeSum` returning list of lists." },
          { line: 2, text: "Initialize `result` accumulator." },
          { line: 3, text: "Sort the list in-place." },
          { line: 4, text: "Loop through indices." },
          { line: 5, text: "Break early if current element is positive." },
          { line: 7, text: "Skip identical values for index `i`." },
          { line: 9, text: "Initialize `left` and `right` pointers." },
          { line: 10, text: "Scan array using two pointers." },
          { line: 11, text: "Compute triplet sum." },
          { line: 12, text: "Shift `left` pointer if sum is too low." },
          { line: 14, text: "Shift `right` pointer if sum is too high." },
          { line: 16, text: "Append matched triplet to result." },
          { line: 18, text: "Skip duplicate items for the `left` pointer." },
          { line: 20, text: "Skip duplicate items for the `right` pointer." },
          { line: 22, text: "Move both pointers inwards for the next search." },
          { line: 25, text: "Return triplets list." }
        ]
      },
      java: {
        code: `public List<List<Integer>> threeSum(int[] nums) {\n    List<List<Integer>> result = new ArrayList<>();\n    Arrays.sort(nums);\n    for (int i = 0; i < nums.length; i++) {\n        if (nums[i] > 0) break;\n        if (i > 0 && nums[i] == nums[i - 1]) continue;\n        int left = i + 1, right = nums.length - 1;\n        while (left < right) {\n            int sum = nums[i] + nums[left] + nums[right];\n            if (sum < 0) {\n                left++;\n            } else if (sum > 0) {\n                right--;\n            } else {\n                result.add(Arrays.asList(nums[i], nums[left], nums[right]));\n                while (left < right && nums[left] == nums[left + 1]) left++;\n                while (left < right && nums[right] == nums[right - 1]) right--;\n                left++;\n                right--;\n            }\n        }\n    }\n    return result;\n}`,
        explanation: [
          { line: 1, text: "Declare method returning list of integer lists." },
          { line: 2, text: "Initialize `result` ArrayList." },
          { line: 3, text: "Sort the array using `Arrays.sort()`." },
          { line: 4, text: "Loop through elements." },
          { line: 5, text: "If current number is positive, stop because sum of positive values cannot be 0." },
          { line: 6, text: "Skip duplicates for index `i`." },
          { line: 7, text: "Set pointers `left` and `right`." },
          { line: 8, text: "Loop until pointers meet." },
          { line: 9, text: "Find total sum." },
          { line: 10, text: "If sum < 0, increment `left` pointer." },
          { line: 12, text: "If sum > 0, decrement `right` pointer." },
          { line: 15, text: "Add matching triplets as a list to our results." },
          { line: 16, text: "Skip elements identical to current `left` boundary." },
          { line: 17, text: "Skip elements identical to current `right` boundary." },
          { line: 18, text: "Advance pointers." },
          { line: 23, text: "Return the resulting nested list." }
        ]
      }
    }
  },
  {
    id: 75,
    name: "Sort Colors",
    difficulty: "Medium",
    topic: "Two Pointer",
    leetcodeUrl: "https://leetcode.com/problems/sort-colors/",
    tip: "Use the Dutch National Flag algorithm. Maintain three pointers: `low` (boundary for 0s), `i` (current element), and `high` (boundary for 2s). Swap accordingly.",
    description: "Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue (represented as 0, 1, and 2 respectively).",
    chatbotData: {
      intuition: "This is the classic Dutch National Flag sorting problem. We keep 0s at the left (tracked by pointer `low`), 2s at the right (tracked by pointer `high`), and iterate using `i`. When `nums[i] == 0`, we swap it with `nums[low]` and increment both `low` and `i`. When `nums[i] == 2`, we swap it with `nums[high]` and decrement `high` (we do *not* increment `i` because the swapped element from the back hasn't been checked yet). When `nums[i] == 1`, we just increment `i`.",
      complexity: "Time Complexity: O(N) because we make a single pass through the array of length N.\nSpace Complexity: O(1) auxiliary space since we sort in-place.",
      edgeCases: "1. Empty or single element array: returns immediately.\n2. Already sorted: works correctly.\n3. Array with only one color (e.g., all 2s): pointers correctly bound it.",
      debugging: "When swapping `nums[i]` with `nums[high]`, do NOT increment `i` in the same step. The new element swapped from `high` into index `i` could be a 0 or 2, and must be inspected in the next iteration."
    },
    solutions: {
      cpp: {
        code: `void sortColors(vector<int>& nums) {\n    int low = 0, i = 0, high = nums.size() - 1;\n    while (i <= high) {\n        if (nums[i] == 0) {\n            swap(nums[i], nums[low]);\n            low++;\n            i++;\n        } else if (nums[i] == 2) {\n            swap(nums[i], nums[high]);\n            high--;\n        } else {\n            i++;\n        }\n    }\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes integer vector reference and returns void." },
          { line: 2, text: "Initialize `low` at 0 (boundary for 0s), `i` at 0 (current scanner), and `high` at the last index (boundary for 2s)." },
          { line: 3, text: "Iterate while `i` is less than or equal to `high`." },
          { line: 4, text: "If the current element is 0." },
          { line: 5, text: "Swap the current element with the element at the `low` pointer." },
          { line: 6, text: "Increment `low` to shift the 0s boundary rightward." },
          { line: 7, text: "Increment `i` since we know the swapped element at index `low` was already inspected or is 1." },
          { line: 8, text: "If the current element is 2." },
          { line: 9, text: "Swap the current element with the element at the `high` pointer." },
          { line: 10, text: "Decrement `high` to shift the 2s boundary leftward. (Do NOT increment `i` here)." },
          { line: 11, text: "If the element is 1." },
          { line: 12, text: "Simply increment `i` to leave it in the middle." }
        ]
      },
      python: {
        code: `def sortColors(nums: list[int]) -> None:\n    low, i, high = 0, 0, len(nums) - 1\n    while i <= high:\n        if nums[i] == 0:\n            nums[i], nums[low] = nums[low], nums[i]\n            low += 1\n            i += 1\n        elif nums[i] == 2:\n            nums[i], nums[high] = nums[high], nums[i]\n            high -= 1\n        else:\n            i += 1`,
        explanation: [
          { line: 1, text: "Define function `sortColors` modifying list in-place." },
          { line: 2, text: "Initialize pointers: `low` at 0, `i` at 0, `high` at the last index." },
          { line: 3, text: "Iterate while the current index has not crossed the `high` pointer." },
          { line: 4, text: "If element is 0, swap with `low` position." },
          { line: 5, text: "Perform swap in Python using tuple assignment." },
          { line: 6, text: "Increment `low`." },
          { line: 7, text: "Increment `i`." },
          { line: 8, text: "If element is 2, swap with `high` position." },
          { line: 10, text: "Decrement `high`. (Do not change `i` because we must evaluate the swapped element)." },
          { line: 11, text: "If element is 1." },
          { line: 12, text: "Increment `i` to move to the next item." }
        ]
      },
      java: {
        code: `public void sortColors(int[] nums) {\n    int low = 0, i = 0, high = nums.length - 1;\n    while (i <= high) {\n        if (nums[i] == 0) {\n            int temp = nums[i];\n            nums[i] = nums[low];\n            nums[low] = temp;\n            low++;\n            i++;\n        } else if (nums[i] == 2) {\n            int temp = nums[i];\n            nums[i] = nums[high];\n            nums[high] = temp;\n            high--;\n        } else {\n            i++;\n        }\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare method `sortColors` returning void." },
          { line: 2, text: "Initialize three pointers: `low` = 0, `i` = 0, `high` = last index." },
          { line: 3, text: "Loop while the scanner index `i` is less than or equal to `high`." },
          { line: 4, text: "If current number is 0." },
          { line: 5, text: "Perform in-place swap using temporary variable `temp`." },
          { line: 8, text: "Increment `low` and `i` pointers." },
          { line: 10, text: "If current number is 2, swap with index `high`." },
          { line: 14, text: "Decrement `high` pointer to contract the right side." },
          { line: 15, text: "If current number is 1, it belongs in the middle: increment `i`." }
        ]
      }
    }
  },
  {
    id: 3,
    name: "Longest Substring Without Repeating Chars",
    difficulty: "Medium",
    topic: "Sliding Window",
    leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    tip: "Use a sliding window. Expand the window with a right pointer. If a duplicate is found, shrink the window from the left until the duplicate is removed.",
    description: "Given a string `s`, find the length of the longest substring without repeating characters.",
    chatbotData: {
      intuition: "We maintain a sliding window `[left, right]` containing unique characters. We expand the window by moving the `right` pointer to the right. We use a set to track characters currently inside the window. If we encounter a character that is already in the set, we shrink the window from the `left` by removing characters from the set until the repeated character is removed. At each step, we record the maximum window length (`right - left + 1`).",
      complexity: "Time Complexity: O(N) because each character is added and removed from the set at most once. Both pointers travel at most N steps.\nSpace Complexity: O(min(N, M)) where N is string length and M is character set size (e.g. 26 or 128 for ASCII).",
      edgeCases: "1. Empty string: returns 0.\n2. All repeating characters (e.g. 'bbbbb'): returns 1.\n3. Already unique (e.g. 'abcdef'): returns 6.",
      debugging: "Make sure you use a `while` loop, not an `if` statement, when shrinking the window from the left, because you may need to slide past multiple characters to remove the duplicate."
    },
    solutions: {
      cpp: {
        code: `int lengthOfLongestSubstring(string s) {\n    unordered_set<char> charSet;\n    int left = 0, maxLength = 0;\n    for (int right = 0; right < s.length(); right++) {\n        while (charSet.count(s[right])) {\n            charSet.erase(s[left]);\n            left++;\n        }\n        charSet.insert(s[right]);\n        maxLength = max(maxLength, right - left + 1);\n    }\n    return maxLength;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes string `s`, returns length of longest unique substring." },
          { line: 2, text: "Declare an unordered_set `charSet` to store characters currently in our active window." },
          { line: 3, text: "Initialize `left` pointer to 0, and `maxLength` tracker to 0." },
          { line: 4, text: "Iterate `right` pointer from 0 to string end, expanding the window." },
          { line: 5, text: "While the character at `s[right]` already exists in our set." },
          { line: 6, text: "Erase the character at `s[left]` from our set to shrink the window." },
          { line: 7, text: "Increment `left` pointer to move the window starting edge." },
          { line: 9, text: "Insert the new character `s[right]` into our set." },
          { line: 10, text: "Update `maxLength` with the size of the current valid window (`right - left + 1`)." },
          { line: 12, text: "Return the maximum length found." }
        ]
      },
      python: {
        code: `def lengthOfLongestSubstring(s: str) -> int:\n    char_set = set()\n    left = 0\n    max_length = 0\n    for right in range(len(s)):\n        while s[right] in char_set:\n            char_set.remove(s[left])\n            left += 1\n        char_set.add(s[right])\n        max_length = max(max_length, right - left + 1)\n    return max_length`,
        explanation: [
          { line: 1, text: "Define function `lengthOfLongestSubstring` returning int." },
          { line: 2, text: "Initialize a set `char_set` to store unique characters." },
          { line: 3, text: "Initialize left pointer `left` to 0." },
          { line: 4, text: "Initialize max length tracker `max_length` to 0." },
          { line: 5, text: "Expand window by moving `right` pointer across index range." },
          { line: 6, text: "If the character at `right` is already present in the set, shrink window from left." },
          { line: 7, text: "Remove character at `left` from set." },
          { line: 8, text: "Increment `left` pointer by 1." },
          { line: 9, text: "Add current character at `right` to set." },
          { line: 10, text: "Calculate current window width and update `max_length`." },
          { line: 11, text: "Return final max length." }
        ]
      },
      java: {
        code: `public int lengthOfLongestSubstring(String s) {\n    Set<Character> charSet = new HashSet<>();\n    int left = 0, maxLength = 0;\n    for (int right = 0; right < s.length(); right++) {\n        while (charSet.contains(s.charAt(right))) {\n            charSet.remove(s.charAt(left));\n            left++;\n        }\n        charSet.add(s.charAt(right));\n        maxLength = Math.max(maxLength, right - left + 1);\n    }\n    return maxLength;\n}`,
        explanation: [
          { line: 1, text: "Declare method `lengthOfLongestSubstring` returning int." },
          { line: 2, text: "Create HashSet `charSet` to check character uniqueness." },
          { line: 3, text: "Initialize pointers `left` = 0 and `maxLength` = 0." },
          { line: 4, text: "Iterate right boundary pointer `right` through the string." },
          { line: 5, text: "Check if set already contains character at `right`." },
          { line: 6, text: "Remove left boundary character from set." },
          { line: 7, text: "Increment `left` to contract the window." },
          { line: 9, text: "Add current character at `right` to set." },
          { line: 10, text: "Update `maxLength` with current window length." },
          { line: 12, text: "Return the result." }
        ]
      }
    }
  },
  {
    id: 424,
    name: "Longest Repeating Character Replacement",
    difficulty: "Medium",
    topic: "Sliding Window",
    leetcodeUrl: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    tip: "Use a sliding window and frequency map. Track the maximum frequency of any character in the current window. If (window_size - max_frequency) > k, shrink window from left.",
    description: "You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. Return the length of the longest substring containing the same letter you can get after performing at most `k` operations.",
    chatbotData: {
      intuition: "In any window `[left, right]`, the number of characters we need to replace to make all characters identical is: `WindowSize - MaxFrequencyOfAnyCharacter`. We want to keep this replacement count <= `k`. We expand the window with `right` and update the character frequencies. We track `maxFreq` (highest frequency of any character seen in the current window). If the characters to replace `(right - left + 1) - maxFreq` exceeds `k`, the window is invalid. We shrink it by decrementing the frequency of `s[left]` and incrementing `left` pointer.",
      complexity: "Time Complexity: O(N) because the right and left pointers iterate over the string of size N at most once, and frequency table lookups are O(1) (size 26).\nSpace Complexity: O(1) or O(26) to store the character counts.",
      edgeCases: "1. k is larger than string length: returns string length.\n2. All same characters: no replacements needed, returns string length.\n3. k = 0: returns length of longest substring of repeating chars.",
      debugging: "Note that `maxFreq` does not need to be updated downward when we shrink the window. It is mathematically correct to only update `maxFreq` when it increases, as a smaller `maxFreq` can never produce a larger valid window than one we have already found."
    },
    solutions: {
      cpp: {
        code: `int characterReplacement(string s, int k) {\n    int count[26] = {0};\n    int left = 0, maxFreq = 0, maxLength = 0;\n    for (int right = 0; right < s.length(); right++) {\n        count[s[right] - 'A']++;\n        maxFreq = max(maxFreq, count[s[right] - 'A']);\n        int windowSize = right - left + 1;\n        if (windowSize - maxFreq > k) {\n            count[s[left] - 'A']--;\n            left++;\n        }\n        maxLength = max(maxLength, right - left + 1);\n    }\n    return maxLength;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes string `s` and integer `k`, returns maximum length." },
          { line: 2, text: "Initialize count array of size 26 to store frequencies of uppercase letters." },
          { line: 3, text: "Initialize `left` pointer, `maxFreq` tracker, and `maxLength` tracker to 0." },
          { line: 4, text: "Iterate `right` pointer to expand the sliding window." },
          { line: 5, text: "Increment the frequency of the current character `s[right]`." },
          { line: 6, text: "Update `maxFreq` if the current character frequency is the new maximum." },
          { line: 7, text: "Calculate the current `windowSize`." },
          { line: 8, text: "Check if the number of replacement operations needed (`windowSize - maxFreq`) is greater than `k`." },
          { line: 9, text: "If invalid, decrement the frequency of the character leaving the window on the left." },
          { line: 10, text: "Increment `left` pointer to shrink the window." },
          { line: 12, text: "Calculate and record the maximum valid window size found." },
          { line: 14, text: "Return `maxLength`." }
        ]
      },
      python: {
        code: `def characterReplacement(s: str, k: int) -> int:\n    count = {}\n    left = 0\n    max_freq = 0\n    max_length = 0\n    for right in range(len(s)):\n        count[s[right]] = count.get(s[right], 0) + 1\n        max_freq = max(max_freq, count[s[right]])\n        if (right - left + 1) - max_freq > k:\n            count[s[left]] -= 1\n            left += 1\n        max_length = max(max_length, right - left + 1)\n    return max_length`,
        explanation: [
          { line: 1, text: "Define function `characterReplacement` taking string and integer, returning integer." },
          { line: 2, text: "Initialize an empty dictionary `count` to track character frequencies." },
          { line: 3, text: "Set pointers and trackers." },
          { line: 6, text: "Loop through indices to expand the right edge of the window." },
          { line: 7, text: "Increment the count of character `s[right]` in the dictionary." },
          { line: 8, text: "Update `max_freq` with the max frequency seen in the current window." },
          { line: 9, text: "Check if replacements needed `(window_size - max_freq)` exceed `k`." },
          { line: 10, text: "Decrement count of left element since it's sliding out of the window." },
          { line: 11, text: "Increment `left` pointer." },
          { line: 12, text: "Update maximum length seen." },
          { line: 13, text: "Return the result." }
        ]
      },
      java: {
        code: `public int characterReplacement(String s, int k) {\n    int[] count = new int[26];\n    int left = 0, maxFreq = 0, maxLength = 0;\n    for (int right = 0; right < s.length(); right++) {\n        count[s.charAt(right) - 'A']++;\n        maxFreq = Math.max(maxFreq, count[s.charAt(right) - 'A']);\n        if ((right - left + 1) - maxFreq > k) {\n            count[s.charAt(left) - 'A']--;\n            left++;\n        }\n        maxLength = Math.max(maxLength, right - left + 1);\n    }\n    return maxLength;\n}`,
        explanation: [
          { line: 1, text: "Declare method `characterReplacement` returning integer." },
          { line: 2, text: "Create integer array `count` of size 26 for frequencies." },
          { line: 3, text: "Initialize `left` pointer, `maxFreq` and `maxLength`." },
          { line: 4, text: "Loop using pointer `right` through the string." },
          { line: 5, text: "Increment frequency of character at index `right`." },
          { line: 6, text: "Update `maxFreq` with current character's new count." },
          { line: 7, text: "If the window size minus max frequency exceeds `k`, the window is invalid." },
          { line: 8, text: "Decrement count of character at `left`." },
          { line: 9, text: "Increment `left` to shift window." },
          { line: 11, text: "Update `maxLength` if this window is the largest so far." },
          { line: 13, text: "Return the result." }
        ]
      }
    }
  },
  {
    id: 567,
    name: "Permutation in String",
    difficulty: "Medium",
    topic: "Sliding Window",
    leetcodeUrl: "https://leetcode.com/problems/permutation-in-string/",
    tip: "This is a fixed-size sliding window of size `len(s1)`. Maintain count arrays for characters. Slide the window over `s2` and check if the count array of the window matches `s1`'s count array.",
    description: "Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.",
    chatbotData: {
      intuition: "A permutation means a substring in `s2` has the exact same character frequencies as `s1`. Since the permutation must be a continuous substring, the window size in `s2` must be exactly `len(s1)`. We can calculate the character counts for `s1` and the first window of `s2`. Then, we slide the window of size `len(s1)` across `s2` by adding one character from the right and removing one from the left. If at any point the counts match, we return `true`.",
      complexity: "Time Complexity: O(N) where N is the length of string `s2`, since sliding the window is O(1) per step and comparing two frequency tables of size 26 takes O(26) which is constant time.\nSpace Complexity: O(1) as we use two fixed-size count arrays of size 26.",
      edgeCases: "1. `s1` is longer than `s2`: returns `false` immediately.\n2. `s1` is equal to `s2` length: performs a single check and returns.",
      debugging: "Make sure you compare the full frequency arrays at each step. In Java/C++, you can write a helper function or check equality directly."
    },
    solutions: {
      cpp: {
        code: `bool checkInclusion(string s1, string s2) {\n    if (s1.length() > s2.length()) return false;\n    int s1_count[26] = {0};\n    int s2_count[26] = {0};\n    for (int i = 0; i < s1.length(); i++) {\n        s1_count[s1[i] - 'a']++;\n        s2_count[s2[i] - 'a']++;\n    }\n    for (int i = 0; i <= s2.length() - s1.length(); i++) {\n        bool match = true;\n        for (int j = 0; j < 26; j++) {\n            if (s1_count[j] != s2_count[j]) {\n                match = false;\n                break;\n            }\n        }\n        if (match) return true;\n        if (i < s2.length() - s1.length()) {\n            s2_count[s2[i] - 'a']--;\n            s2_count[s2[i + s1.length()] - 'a']++;\n        }\n    }\n    return false;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: returns true if s2 contains a permutation of s1." },
          { line: 2, text: "If `s1` is longer than `s2`, a permutation cannot fit: return `false`." },
          { line: 3, text: "Initialize alphabet count arrays for `s1` and the sliding window in `s2`." },
          { line: 5, text: "Populate the count for `s1` and the initial window of size `s1.length()` in `s2`." },
          { line: 9, text: "Loop through `s2`, shifting the window rightward. Index `i` is the left edge of the window." },
          { line: 10, text: "Check if the character counts match." },
          { line: 11, text: "Compare frequencies of all 26 lowercase English letters." },
          { line: 17, text: "If they match, a permutation exists: return `true`." },
          { line: 18, text: "If we haven't reached the end, shift the window: remove `s2[i]` (left) and add `s2[i + s1.length()]` (right)." }
        ]
      },
      python: {
        code: `def checkInclusion(s1: str, s2: str) -> bool:\n    if len(s1) > len(s2):\n        return False\n    s1_count = [0] * 26\n    s2_count = [0] * 26\n    for i in range(len(s1)):\n        s1_count[ord(s1[i]) - ord('a')] += 1\n        s2_count[ord(s2[i]) - ord('a')] += 1\n    for i in range(len(s2) - len(s1) + 1):\n        if s1_count == s2_count:\n            return True\n        if i < len(s2) - len(s1):\n            s2_count[ord(s2[i]) - ord('a')] -= 1\n            s2_count[ord(s2[i + len(s1)]) - ord('a')] += 1\n    return False`,
        explanation: [
          { line: 1, text: "Define function `checkInclusion` returning boolean." },
          { line: 2, text: "Check if `s1` length is greater than `s2`. If so, return `False`." },
          { line: 4, text: "Initialize frequency list for `s1` and initial window in `s2`." },
          { line: 6, text: "Count frequencies of letters in both strings up to `len(s1)`." },
          { line: 9, text: "Loop through indices where the window can start." },
          { line: 10, text: "Check if lists `s1_count` and `s2_count` are identical (O(26) comparison)." },
          { line: 11, text: "If identical, return `True`." },
          { line: 12, text: "If not at the last window, shift the window counts." },
          { line: 13, text: "Remove leftmost character `s2[i]` count from current window." },
          { line: 14, text: "Add rightmost new character `s2[i + len(s1)]` count to window." },
          { line: 15, text: "Return `False` if no matches are found." }
        ]
      },
      java: {
        code: `public boolean checkInclusion(String s1, String s2) {\n    if (s1.length() > s2.length()) return false;\n    int[] s1Count = new int[26];\n    int[] s2Count = new int[26];\n    for (int i = 0; i < s1.length(); i++) {\n        s1Count[s1.charAt(i) - 'a']++;\n        s2Count[s2.charAt(i) - 'a']++;\n    }\n    for (int i = 0; i <= s2.length() - s1.length(); i++) {\n        if (matches(s1Count, s2Count)) return true;\n        if (i < s2.length() - s1.length()) {\n            s2Count[s2.charAt(i) - 'a']--;\n            s2Count[s2.charAt(i + s1.length()) - 'a']++;\n        }\n    }\n    return false;\n}\n\nprivate boolean matches(int[] s1Count, int[] s2Count) {\n    for (int i = 0; i < 26; i++) {\n        if (s1Count[i] != s2Count[i]) return false;\n    }\n    return true;\n}`,
        explanation: [
          { line: 1, text: "Declare method `checkInclusion` returning boolean." },
          { line: 2, text: "Verify `s1` can fit inside `s2`." },
          { line: 3, text: "Create frequency count tables of size 26." },
          { line: 5, text: "Fill counts for `s1` and the first window of `s2`." },
          { line: 9, text: "Iterate window start pointer `i` through the string `s2`." },
          { line: 10, text: "Call helper method `matches` to compare count tables. Return true if equal." },
          { line: 11, text: "If there's a next character, update sliding window counts." },
          { line: 12, text: "Remove character leaving window at index `i`." },
          { line: 13, text: "Add character entering window at index `i + s1.length()`." },
          { line: 19, text: "Private helper method to compare two 26-element arrays in O(26) time." }
        ]
      }
    }
  }
];
