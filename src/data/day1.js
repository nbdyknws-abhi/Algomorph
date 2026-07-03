export const day1Problems = [
  {
    id: 1,
    name: "Two Sum",
    difficulty: "Easy",
    topic: "HashMap",
    leetcodeUrl: "https://leetcode.com/problems/two-sum/",
    tip: "Use a hash map (dictionary) to store visited numbers and their indices. This lets you find the complement in O(1) time instead of nested loops.",
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
    chatbotData: {
      intuition: "Instead of searching for pairs from scratch (which takes O(N²)), we can remember numbers we have already seen. For any number x, we look for its complement (target - x) in a hash map. If it's already there, we found our pair! Otherwise, we store x and its index, then keep moving.",
      complexity: "Time Complexity: O(N) because we iterate through the list of N elements exactly once, and hash map operations (lookups/insertions) take O(1) average time.\nSpace Complexity: O(N) since in the worst case we will store up to N elements in our hash map.",
      edgeCases: "1. The array contains duplicate numbers (e.g., nums = [3, 3], target = 6). The map handles this correctly because we look for the partner *before* adding the current duplicate.\n2. The complement is the element itself (cannot use same element twice). Since we check the map before adding the current element, we never match a number with itself.",
      debugging: "If your solution returns the same index twice, make sure you check if the complement exists in the map *before* adding the current element."
    },
    solutions: {
      cpp: {
        code: `vector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> numMap; // value -> index\n    for (int i = 0; i < nums.size(); i++) {\n        int complement = target - nums[i];\n        if (numMap.count(complement)) {\n            return {numMap[complement], i};\n        }\n        numMap[nums[i]] = i;\n    }\n    return {};\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes a reference to vector of ints `nums` and `target` int, returns vector of two indices." },
          { line: 2, text: "Declare an unordered_map `numMap` where keys are the numbers we've seen and values are their array indices." },
          { line: 3, text: "Iterate through the array from index `0` to the size of the array." },
          { line: 4, text: "Calculate the `complement` which is the value we need to find to reach the target." },
          { line: 5, text: "Check if this `complement` is already a key in our map using `numMap.count()`." },
          { line: 6, text: "If it exists, return the index of the complement and the current index `i`." },
          { line: 8, text: "If the complement doesn't exist, save the current number and its index `i` into the map for future lookups." },
          { line: 10, text: "Return an empty vector as a fallback (though the problem guarantees a solution exists)." }
        ]
      },
      python: {
        code: `def twoSum(nums: list[int], target: int) -> list[int]:\n    num_map = {}  # value -> index\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in num_map:\n            return [num_map[complement], i]\n        num_map[num] = i\n    return []`,
        explanation: [
          { line: 1, text: "Define function `twoSum` with type annotations. It returns a list of integers." },
          { line: 2, text: "Create an empty dictionary `num_map` to map visited numbers to their indices." },
          { line: 3, text: "Loop through `nums` using `enumerate` to get both the index `i` and value `num`." },
          { line: 4, text: "Compute `complement` (the number needed to add up to `target`)." },
          { line: 5, text: "Check if the complement is in our dictionary." },
          { line: 6, text: "If it is, return the stored index of the complement and the current index `i`." },
          { line: 7, text: "Otherwise, add the current number and index to the dictionary." },
          { line: 8, text: "Return an empty list if no pair is found." }
        ]
      },
      java: {
        code: `public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> numMap = new HashMap<>(); // value -> index\n    for (int i = 0; i < nums.length; i++) {\n        int complement = target - nums[i];\n        if (numMap.containsKey(complement)) {\n            return new int[] { numMap.get(complement), i };\n        }\n        numMap.put(nums[i], i);\n    }\n    return new int[] {};\n}`,
        explanation: [
          { line: 1, text: "Declare method `twoSum` returning an array of two integers." },
          { line: 2, text: "Create a new HashMap mapping Integer values to Integer indices." },
          { line: 3, text: "Loop through the `nums` array from index 0 to `nums.length - 1`." },
          { line: 4, text: "Find the complement needed to make `target` with the current element." },
          { line: 5, text: "Use `numMap.containsKey()` to check if the complement has been stored." },
          { line: 6, text: "If it exists, return a new array containing the complement's index and `i`." },
          { line: 8, text: "If not, put the current element and its index into the map." },
          { line: 10, text: "Return an empty array if no solution is found." }
        ]
      }
    }
  },
  {
    id: 217,
    name: "Contains Duplicate",
    difficulty: "Easy",
    topic: "Array",
    leetcodeUrl: "https://leetcode.com/problems/contains-duplicate/",
    tip: "Use a Hash Set. As you iterate, check if the element is already in the set. If yes, you found a duplicate.",
    description: "Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",
    chatbotData: {
      intuition: "A set only stores unique elements. We can walk through the array and insert each element into a set. If we see an element that's already in the set, we immediately know there's a duplicate. If we reach the end of the array without seeing any duplicates, all elements are unique.",
      complexity: "Time Complexity: O(N) because we iterate through the array of length N once, and set lookups/insertions are O(1) on average.\nSpace Complexity: O(N) to store elements in the set in the worst-case scenario (when all elements are unique).",
      edgeCases: "1. Empty array: return false.\n2. Single element: return false.\n3. Large duplicates: returns true on first duplicate, which is highly efficient.",
      debugging: "Make sure you insert the elements into the set *during* iteration, so you can check and exit early."
    },
    solutions: {
      cpp: {
        code: `bool containsDuplicate(vector<int>& nums) {\n    unordered_set<int> seen;\n    for (int num : nums) {\n        if (seen.count(num)) {\n            return true;\n        }\n        seen.insert(num);\n    }\n    return false;\n}`,
        explanation: [
          { line: 1, text: "Define the function taking a reference to the integer vector, returning a boolean." },
          { line: 2, text: "Declare an unordered_set `seen` to store the numbers we encounter." },
          { line: 3, text: "Use a range-based for loop to iterate through each number `num` in the vector." },
          { line: 4, text: "Check if the current number is already in the set using `seen.count(num)`." },
          { line: 5, text: "If `seen.count` is 1 (true), we've seen it before: return `true`." },
          { line: 7, text: "If it's new, insert it into our set." },
          { line: 9, text: "If loop ends without returning true, all elements are unique: return `false`." }
        ]
      },
      python: {
        code: `def containsDuplicate(nums: list[int]) -> bool:\n    seen = set()\n    for num in nums:\n        if num in seen:\n            return True\n        seen.add(num)\n    return False`,
        explanation: [
          { line: 1, text: "Define function `containsDuplicate` which takes a list of integers and returns a boolean." },
          { line: 2, text: "Initialize an empty set called `seen`." },
          { line: 3, text: "Iterate through each number `num` in `nums`." },
          { line: 4, text: "Check if `num` already exists in our `seen` set (O(1) lookup)." },
          { line: 5, text: "If it exists, we found a duplicate: return `True`." },
          { line: 6, text: "If not, add `num` to our set." },
          { line: 7, text: "If the loop finishes, all elements are unique: return `False`." }
        ]
      },
      java: {
        code: `public boolean containsDuplicate(int[] nums) {\n    Set<Integer> seen = new HashSet<>();\n    for (int num : nums) {\n        if (seen.contains(num)) {\n            return true;\n        }\n        seen.add(num);\n    }\n    return false;\n}`,
        explanation: [
          { line: 1, text: "Method definition: takes an int array and returns a boolean." },
          { line: 2, text: "Create a HashSet `seen` to store visited numbers." },
          { line: 3, text: "Iterate through the array using an enhanced for-loop." },
          { line: 4, text: "Use `seen.contains()` to check if the current element is in the set." },
          { line: 5, text: "If true, return `true` (duplicate found)." },
          { line: 7, text: "Otherwise, add the number to the set." },
          { line: 9, text: "If loop completes, no duplicates were found: return `false`." }
        ]
      }
    }
  },
  {
    id: 242,
    name: "Valid Anagram",
    difficulty: "Easy",
    topic: "String / HashMap",
    leetcodeUrl: "https://leetcode.com/problems/valid-anagram/",
    tip: "Use a frequency array or hash map. Increment counts for characters in string s, and decrement for string t. All counts should end at 0.",
    description: "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
    chatbotData: {
      intuition: "An anagram means both strings have the exact same character frequencies. First, if their lengths differ, they can't be anagrams. Then, we can count the frequency of each character in string `s` and subtract the counts of characters in string `t`. If all character counts end up as exactly zero, the strings are anagrams.",
      complexity: "Time Complexity: O(N) where N is the length of string s (or t), since we iterate over both strings once.\nSpace Complexity: O(1) or O(K) where K is the alphabet size (26 for lowercase English letters), which fits in a fixed-size array.",
      edgeCases: "1. Different lengths: handled immediately with a length check.\n2. Unicode characters: using a hash map is better for Unicode than a fixed size 26-array. The beginner codes here use a 26-array assuming standard lowercase English letters, which is common in interviews.",
      debugging: "Ensure you check the length at the start to return false immediately for strings of different sizes."
    },
    solutions: {
      cpp: {
        code: `bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int c : count) {\n        if (c != 0) return false;\n    }\n    return true;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes two strings and returns a boolean." },
          { line: 2, text: "If the lengths of `s` and `t` are not equal, they cannot be anagrams: return `false` immediately." },
          { line: 3, text: "Initialize an integer array of size 26 with all zeros to track counts of characters 'a' through 'z'." },
          { line: 4, text: "Loop through strings `s` and `t` (we know they are of equal length now)." },
          { line: 5, text: "Increment the count for the character at `s[i]`. `s[i] - 'a'` maps character 'a' to index 0, 'b' to 1, etc." },
          { line: 6, text: "Decrement the count for the character at `t[i]` using the same index mapping." },
          { line: 8, text: "Loop through our count array to make sure every value is 0." },
          { line: 9, text: "If any character count is not 0, it means the frequencies did not match: return `false`." },
          { line: 11, text: "If all character counts are 0, they are anagrams: return `true`." }
        ]
      },
      python: {
        code: `def isAnagram(s: str, t: str) -> bool:\n    if len(s) != len(t):\n        return False\n    count = [0] * 26\n    for i in range(len(s)):\n        count[ord(s[i]) - ord('a')] += 1\n        count[ord(t[i]) - ord('a')] -= 1\n    for val in count:\n        if val != 0:\n            return False\n    return True`,
        explanation: [
          { line: 1, text: "Define function `isAnagram` taking two strings `s` and `t`." },
          { line: 2, text: "Check if the lengths are different. If so, they cannot be anagrams." },
          { line: 4, text: "Create a list of 26 zeros representing alphabet counts." },
          { line: 5, text: "Loop through the indices of the strings." },
          { line: 6, text: "Use `ord()` to get Unicode values, subtracting `ord('a')` to map 'a'-'z' to indices 0-25. Increment for string `s`." },
          { line: 7, text: "Decrement for character in string `t` at the same index." },
          { line: 8, text: "Iterate through the frequency array." },
          { line: 9, text: "If any character frequency is non-zero, return `False`." },
          { line: 11, text: "Otherwise, return `True`." }
        ]
      },
      java: {
        code: `public boolean isAnagram(String s, String t) {\n    if (s.length() != t.length()) return false;\n    int[] count = new int[26];\n    for (int i = 0; i < s.length(); i++) {\n        count[s.charAt(i) - 'a']++;\n        count[t.charAt(i) - 'a']--;\n    }\n    for (int val : count) {\n        if (val != 0) return false;\n    }\n    return true;\n}`,
        explanation: [
          { line: 1, text: "Declare method `isAnagram` returning boolean." },
          { line: 2, text: "Verify that lengths match. If not, return false." },
          { line: 3, text: "Create an int array of size 26 for the 26 lowercase English letters." },
          { line: 4, text: "Loop through the characters of both strings." },
          { line: 5, text: "Increment the count for character in `s` at position `i`. `charAt(i) - 'a'` calculates index." },
          { line: 6, text: "Decrement count for character in `t` at position `i`." },
          { line: 8, text: "Check if all values in the `count` array are zero." },
          { line: 9, text: "If any cell is not 0, return false." },
          { line: 11, text: "Return true if all counts are balanced." }
        ]
      }
    }
  },
  {
    id: 268,
    name: "Missing Number",
    difficulty: "Easy",
    topic: "Array / Math",
    leetcodeUrl: "https://leetcode.com/problems/missing-number/",
    tip: "Use the Gauss formula: sum of numbers 0 to n is n * (n + 1) / 2. Subtract the sum of the array elements from this expected sum to find the missing number.",
    description: "Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.",
    chatbotData: {
      intuition: "We know that the array is missing exactly one number in the range [0, n]. The sum of all numbers from 0 to n can be calculated in O(1) using Gauss's formula: S = n * (n + 1) / 2. If we calculate the actual sum of the array and subtract it from the expected sum S, the remainder must be the missing number!",
      complexity: "Time Complexity: O(N) because we sum up the array elements (takes one pass).\nSpace Complexity: O(1) as we only use a few variables for tracking sums.",
      edgeCases: "1. Missing number is 0: works, because expected sum will exceed actual sum by 0.\n2. Missing number is n (at the end): works perfectly.\n3. Array size is 1: e.g. [0], n=1, expected sum=1, actual sum=0. Missing is 1.",
      debugging: "Make sure you use the length of the array `n = nums.length` to calculate the expected sum, not the maximum element in the array."
    },
    solutions: {
      cpp: {
        code: `int missingNumber(vector<int>& nums) {\n    int n = nums.size();\n    int expectedSum = n * (n + 1) / 2;\n    int actualSum = 0;\n    for (int num : nums) {\n        actualSum += num;\n    }\n    return expectedSum - actualSum;\n}`,
        explanation: [
          { line: 1, text: "Function declaration taking vector `nums` reference and returning the missing integer." },
          { line: 2, text: "Get the array size `n` which represents the range maximum." },
          { line: 3, text: "Calculate `expectedSum` of all integers from `0` to `n` using formula `n * (n + 1) / 2`." },
          { line: 4, text: "Initialize `actualSum` to 0." },
          { line: 5, text: "Iterate through each number `num` in the array." },
          { line: 6, text: "Add the current number to `actualSum`." },
          { line: 8, text: "The difference between the expected and actual sum is the missing number: return it." }
        ]
      },
      python: {
        code: `def missingNumber(nums: list[int]) -> int:\n    n = len(nums)\n    expected_sum = n * (n + 1) // 2\n    actual_sum = sum(nums)\n    return expected_sum - actual_sum`,
        explanation: [
          { line: 1, text: "Define function `missingNumber` taking list and returning int." },
          { line: 2, text: "Get length of `nums` as `n`." },
          { line: 3, text: "Compute expected sum from `0` to `n` using integer division `//`." },
          { line: 4, text: "Compute the sum of elements in `nums` using built-in `sum()` function." },
          { line: 5, text: "Return the difference." }
        ]
      },
      java: {
        code: `public int missingNumber(int[] nums) {\n    int n = nums.length;\n    int expectedSum = n * (n + 1) / 2;\n    int actualSum = 0;\n    for (int num : nums) {\n        actualSum += num;\n    }\n    return expectedSum - actualSum;\n}`,
        explanation: [
          { line: 1, text: "Declare method `missingNumber` taking int array and returning int." },
          { line: 2, text: "Get length of `nums` array." },
          { line: 3, text: "Calculate the expected sum using Gauss's formula." },
          { line: 4, text: "Initialize `actualSum` to 0." },
          { line: 5, text: "Iterate through elements in `nums`." },
          { line: 6, text: "Add current element to `actualSum`." },
          { line: 8, text: "Subtract `actualSum` from `expectedSum` to find the missing integer." }
        ]
      }
    }
  },
  {
    id: 283,
    name: "Move Zeroes",
    difficulty: "Easy",
    topic: "Array",
    leetcodeUrl: "https://leetcode.com/problems/move-zeroes/",
    tip: "Use a write pointer to keep track of where the next non-zero element should go. After copying all non-zeros, fill the rest of the array with zeroes.",
    description: "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements in-place.",
    chatbotData: {
      intuition: "We can maintain a pointer, let's call it `writePointer`, which starts at index 0. We iterate through the array. Whenever we see a non-zero element, we write it at `writePointer` and increment `writePointer`. Once the loop ends, all non-zero elements have been shifted to the front. We then fill all indices from `writePointer` to the end of the array with 0.",
      complexity: "Time Complexity: O(N) because we iterate through the array once to copy non-zero elements and then another partial pass to write zeroes. This takes at most 2N operations.\nSpace Complexity: O(1) auxiliary space as we modify the array in-place.",
      edgeCases: "1. No zeroes in the array (e.g. [1, 2, 3]): no changes made, works.\n2. All zeroes in the array (e.g. [0, 0, 0]): array stays all zeroes, works.\n3. Zeroes at the beginning/end: handled correctly.",
      debugging: "Remember that the question asks you to do this in-place; do not create a new array to copy elements."
    },
    solutions: {
      cpp: {
        code: `void moveZeroes(vector<int>& nums) {\n    int writeIdx = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            nums[writeIdx] = nums[i];\n            writeIdx++;\n        }\n    }\n    for (int i = writeIdx; i < nums.size(); i++) {\n        nums[i] = 0;\n    }\n}`,
        explanation: [
          { line: 1, text: "Function declaration: returns void since we modify in-place." },
          { line: 2, text: "Initialize `writeIdx` at 0. This tracks the position for the next non-zero value." },
          { line: 3, text: "Iterate through the array using index `i`." },
          { line: 4, text: "If the current element `nums[i]` is not zero." },
          { line: 5, text: "Copy the non-zero element to `nums[writeIdx]`." },
          { line: 6, text: "Increment `writeIdx` to point to the next slot." },
          { line: 9, text: "Start a second loop from the current `writeIdx` to the end of the array." },
          { line: 10, text: "Fill these remaining indices with 0." }
        ]
      },
      python: {
        code: `def moveZeroes(nums: list[int]) -> None:\n    write_idx = 0\n    for i in range(len(nums)):\n        if nums[i] != 0:\n            nums[write_idx] = nums[i]\n            write_idx += 1\n    for i in range(write_idx, len(nums)):\n        nums[i] = 0`,
        explanation: [
          { line: 1, text: "Define function `moveZeroes` returning `None` (modifies list in place)." },
          { line: 2, text: "Set write pointer `write_idx` to 0." },
          { line: 3, text: "Loop through indices of `nums` from 0 to length - 1." },
          { line: 4, text: "Check if the current element is non-zero." },
          { line: 5, text: "Move the non-zero element forward to `write_idx` position." },
          { line: 6, text: "Increment `write_idx` by 1." },
          { line: 7, text: "Start loop from `write_idx` to the end of the list." },
          { line: 8, text: "Set each remaining position to 0." }
        ]
      },
      java: {
        code: `public void moveZeroes(int[] nums) {\n    int writeIdx = 0;\n    for (int i = 0; i < nums.length; i++) {\n        if (nums[i] != 0) {\n            nums[writeIdx] = nums[i];\n            writeIdx++;\n        }\n    }\n    for (int i = writeIdx; i < nums.length; i++) {\n        nums[i] = 0;\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare method `moveZeroes` returning void." },
          { line: 2, text: "Declare a write pointer index initialized to 0." },
          { line: 3, text: "Loop through the input array `nums`." },
          { line: 4, text: "If `nums[i]` is not equal to 0." },
          { line: 5, text: "Move the current non-zero value to `writeIdx` position." },
          { line: 6, text: "Increment `writeIdx`." },
          { line: 9, text: "Fill the rest of the array with zeroes, starting from `writeIdx`." },
          { line: 10, text: "Set index `i` of array `nums` to 0." }
        ]
      }
    }
  },
  {
    id: 49,
    name: "Group Anagrams",
    difficulty: "Medium",
    topic: "HashMap",
    leetcodeUrl: "https://leetcode.com/problems/group-anagrams/",
    tip: "Use a hash map where the key is the sorted version of the string, and the value is a list of strings that match that sorted pattern.",
    description: "Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.",
    chatbotData: {
      intuition: "Two words are anagrams of each other if they contain the exact same letters. If we sort the characters of an anagram, they will both produce the exact same sorted string (e.g., 'eat' and 'tea' both sort to 'aet'). We can use this sorted string as a unique key in a hash map, and append the original string to the list of values matching that key.",
      complexity: "Time Complexity: O(N * K log K) where N is the number of strings and K is the maximum length of a string. For each string, we sort it which takes O(K log K) time.\nSpace Complexity: O(N * K) to store the strings in the hash map.",
      edgeCases: "1. Empty input list: returns empty list.\n2. Single character strings or empty strings: handled correctly.\n3. No anagrams: each string forms its own group.",
      debugging: "Be sure to pass keys by value or copy when inserting/retrieving from maps, and extract only the values of the map to construct the final return list."
    },
    solutions: {
      cpp: {
        code: `vector<vector<string>> groupAnagrams(vector<string>& strs) {\n    unordered_map<string, vector<string>> groups;\n    for (string s : strs) {\n        string sorted_s = s;\n        sort(sorted_s.begin(), sorted_s.end());\n        groups[sorted_s].push_back(s);\n    }\n    vector<vector<string>> result;\n    for (auto pair : groups) {\n        result.push_back(pair.second);\n    }\n    return result;\n}`,
        explanation: [
          { line: 1, text: "Function signature taking a vector of strings, returning a vector of string vectors." },
          { line: 2, text: "Declare an unordered_map `groups` mapping sorted keys to their list of anagrams." },
          { line: 3, text: "Loop through each string `s` in the input vector `strs`." },
          { line: 4, text: "Create a copy of string `s` called `sorted_s`." },
          { line: 5, text: "Sort the characters in `sorted_s` alphabetically so anagrams have the same key." },
          { line: 6, text: "Add the original string `s` to the vector of anagrams associated with key `sorted_s`." },
          { line: 8, text: "Declare `result` vector to store grouped lists." },
          { line: 9, text: "Iterate through each key-value pair in our hash map." },
          { line: 10, text: "Push the vector of anagrams (`pair.second`) into the `result` list." },
          { line: 12, text: "Return the list of groups." }
        ]
      },
      python: {
        code: `def groupAnagrams(strs: list[str]) -> list[list[str]]:\n    groups = {}\n    for s in strs:\n        sorted_s = "".join(sorted(s))\n        if sorted_s not in groups:\n            groups[sorted_s] = []\n        groups[sorted_s].append(s)\n    return list(groups.values())`,
        explanation: [
          { line: 1, text: "Define function `groupAnagrams` returning list of string lists." },
          { line: 2, text: "Initialize dictionary `groups` to hold the sorted key mapping." },
          { line: 3, text: "Iterate through each string `s` in the list `strs`." },
          { line: 4, text: "Sort the characters of `s` and join them back into a string to use as a key." },
          { line: 5, text: "If the key is not in `groups`, initialize it with an empty list." },
          { line: 7, text: "Append the original string `s` to the list of the corresponding sorted key." },
          { line: 8, text: "Return the values of the dictionary as a list of lists." }
        ]
      },
      java: {
        code: `public List<List<String>> groupAnagrams(String[] strs) {\n    Map<String, List<String>> groups = new HashMap<>();\n    for (String s : strs) {\n        char[] chars = s.toCharArray();\n        Arrays.sort(chars);\n        String key = new String(chars);\n        if (!groups.containsKey(key)) {\n            groups.put(key, new ArrayList<>());\n        }\n        groups.get(key).add(s);\n    }\n    return new ArrayList<>(groups.values());\n}`,
        explanation: [
          { line: 1, text: "Declare method returning list of string lists." },
          { line: 2, text: "Initialize a HashMap to store sorted key mappings to string lists." },
          { line: 3, text: "Iterate over every string `s` in the array." },
          { line: 4, text: "Convert the string to a character array `chars`." },
          { line: 5, text: "Sort the character array." },
          { line: 6, text: "Create a new string from the sorted chars to serve as the map key." },
          { line: 7, text: "If map does not have the key, insert it with a new empty ArrayList." },
          { line: 10, text: "Add the original string `s` to the list corresponding to the key." },
          { line: 12, text: "Construct and return a new ArrayList from the values in the map." }
        ]
      }
    }
  },
  {
    id: 128,
    name: "Longest Consecutive Sequence",
    difficulty: "Medium",
    topic: "HashMap",
    leetcodeUrl: "https://leetcode.com/problems/longest-consecutive-sequence/",
    tip: "Put all numbers in a Hash Set. Only start a sequence from a number if its predecessor (num - 1) is NOT in the set. This ensures O(n) total run time.",
    description: "Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.",
    chatbotData: {
      intuition: "If we search for consecutive numbers for every single number, it would be O(N²). To do this in O(N), we first store all numbers in a hash set. Then, we only start building a consecutive sequence if the current number is the *start* of a sequence. We know a number `x` is the start of a sequence if `x - 1` is not in the set. If it is the start, we check for `x + 1`, `x + 2`, etc., and record the sequence length.",
      complexity: "Time Complexity: O(N) because each number is visited at most twice (once during iteration and at most once inside the while loop as part of a sequence).\nSpace Complexity: O(N) to store the numbers in the Hash Set.",
      edgeCases: "1. Empty array: returns 0.\n2. All elements are the same: returns 1 (duplicates do not extend consecutive sequences).\n3. Negatives and positives combined: handled correctly by set.",
      debugging: "Do not forget the check `!set.contains(num - 1)`. Without this check, the complexity drops to O(N²)."
    },
    solutions: {
      cpp: {
        code: `int longestConsecutive(vector<int>& nums) {\n    unordered_set<int> numSet(nums.begin(), nums.end());\n    int longestStreak = 0;\n    for (int num : numSet) {\n        if (!numSet.count(num - 1)) {\n            int currentNum = num;\n            int currentStreak = 1;\n            while (numSet.count(currentNum + 1)) {\n                currentNum += 1;\n                currentStreak += 1;\n            }\n            longestStreak = max(longestStreak, currentStreak);\n        }\n    }\n    return longestStreak;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes integer vector reference and returns the longest consecutive count." },
          { line: 2, text: "Create an `unordered_set` from `nums` to remove duplicates and enable O(1) lookups." },
          { line: 3, text: "Initialize `longestStreak` tracker to 0." },
          { line: 4, text: "Iterate through each unique number `num` in the set." },
          { line: 5, text: "Check if `num - 1` is in the set. If NOT, then `num` can be the beginning of a sequence." },
          { line: 6, text: "Initialize variables to keep track of the current sequence number." },
          { line: 7, text: "Initialize the `currentStreak` length to 1." },
          { line: 8, text: "While `currentNum + 1` exists in our set." },
          { line: 9, text: "Increment the sequence number by 1." },
          { line: 10, text: "Increment the current streak size." },
          { line: 12, text: "Update `longestStreak` if the current streak is larger." },
          { line: 15, text: "Return the longest consecutive sequence length found." }
        ]
      },
      python: {
        code: `def longestConsecutive(nums: list[int]) -> int:\n    num_set = set(nums)\n    longest_streak = 0\n    for num in num_set:\n        if (num - 1) not in num_set:\n            current_num = num\n            current_streak = 1\n            while (current_num + 1) in num_set:\n                current_num += 1\n                current_streak += 1\n            longest_streak = max(longest_streak, current_streak)\n    return longest_streak`,
        explanation: [
          { line: 1, text: "Define function `longestConsecutive` taking list of integers and returning integer." },
          { line: 2, text: "Convert the input list to a set to enable O(1) average lookups." },
          { line: 3, text: "Set `longest_streak` accumulator to 0." },
          { line: 4, text: "Iterate through the unique numbers in the set." },
          { line: 5, text: "Check if `num - 1` is in the set. If it is NOT, `num` is a sequence start." },
          { line: 6, text: "Set `current_num` to the starting number." },
          { line: 7, text: "Initialize `current_streak` to 1." },
          { line: 8, text: "Use a while loop to find consecutive numbers onwards." },
          { line: 10, text: "Increment streak as we find each consecutive element." },
          { line: 11, text: "Record the maximum streak found so far." },
          { line: 12, text: "Return the result." }
        ]
      },
      java: {
        code: `public int longestConsecutive(int[] nums) {\n    Set<Integer> numSet = new HashSet<>();\n    for (int num : nums) numSet.add(num);\n    int longestStreak = 0;\n    for (int num : numSet) {\n        if (!numSet.contains(num - 1)) {\n            int currentNum = num;\n            int currentStreak = 1;\n            while (numSet.contains(currentNum + 1)) {\n                currentNum += 1;\n                currentStreak += 1;\n            }\n            longestStreak = Math.max(longestStreak, currentStreak);\n        }\n    }\n    return longestStreak;\n}`,
        explanation: [
          { line: 1, text: "Declare method returning the size of the sequence." },
          { line: 2, text: "Create a HashSet `numSet` to store numbers." },
          { line: 3, text: "Populate the set with all numbers in `nums` to remove duplicates." },
          { line: 4, text: "Initialize `longestStreak` to 0." },
          { line: 5, text: "Iterate over elements in `numSet`." },
          { line: 6, text: "If `numSet` does not contain `num - 1`, we can start a new streak." },
          { line: 7, text: "Set helper variable `currentNum` to current `num`." },
          { line: 8, text: "Set `currentStreak` to 1." },
          { line: 9, text: "Check for sequential integers in the hash set." },
          { line: 12, text: "Save the maximum of current streak vs global streak." },
          { line: 16, text: "Return the final streak result." }
        ]
      }
    }
  },
  {
    id: 238,
    name: "Product of Array Except Self",
    difficulty: "Medium",
    topic: "Array",
    leetcodeUrl: "https://leetcode.com/problems/product-of-array-except-self/",
    tip: "Do NOT use division. Instead, make a prefix product pass from left to right, then a suffix product pass from right to left, multiplying them together.",
    description: "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.",
    chatbotData: {
      intuition: "For any element at index `i`, its result is (product of all numbers to its left) * (product of all numbers to its right). We can calculate the prefix products of all elements in one pass. Then we iterate backwards, keeping a running suffix product and multiplying it into our answer array. This allows us to solve it in O(N) time with O(1) extra space (since the output array does not count as extra space).",
      complexity: "Time Complexity: O(N) because we make exactly two linear passes over the array of size N.\nSpace Complexity: O(1) auxiliary space (excluding the output array, which is allowed by the problem description).",
      edgeCases: "1. Zeroes in the array: if there is one zero, all other positions are 0 except the zero position. If there are multiple zeroes, all positions become 0. This approach handles both cases naturally without crashing (unlike division which would cause division by zero errors).",
      debugging: "Keep a running variable `suffix` that is updated at each step of the backward loop. Do not reinitialize it."
    },
    solutions: {
      cpp: {
        code: `vector<int> productExceptSelf(vector<int>& nums) {\n    int n = nums.size();\n    vector<int> ans(n, 1);\n    for (int i = 1; i < n; i++) {\n        ans[i] = ans[i - 1] * nums[i - 1];\n    }\n    int suffix = 1;\n    for (int i = n - 1; i >= 0; i--) {\n        ans[i] = ans[i] * suffix;\n        suffix = suffix * nums[i];\n    }\n    return ans;\n}`,
        explanation: [
          { line: 1, text: "Function signature taking reference to integer vector, returning vector of products." },
          { line: 2, text: "Get size `n` of the vector." },
          { line: 3, text: "Initialize output vector `ans` of size `n` filled with 1s." },
          { line: 4, text: "Loop from index 1 to `n - 1` to compute prefix products." },
          { line: 5, text: "Set `ans[i]` to prefix product of all elements to the left (current index element times previous prefix)." },
          { line: 7, text: "Initialize `suffix` product tracker to 1." },
          { line: 8, text: "Loop backward from `n - 1` down to 0." },
          { line: 9, text: "Multiply `ans[i]` (which currently holds prefix product) by `suffix` (right product)." },
          { line: 10, text: "Update `suffix` by multiplying it with the current element `nums[i]`." },
          { line: 12, text: "Return the filled product vector." }
        ]
      },
      python: {
        code: `def productExceptSelf(nums: list[int]) -> list[int]:\n    n = len(nums)\n    ans = [1] * n\n    for i in range(1, n):\n        ans[i] = ans[i - 1] * nums[i - 1]\n    suffix = 1\n    for i in range(n - 1, -1, -1):\n        ans[i] = ans[i] * suffix\n        suffix = suffix * nums[i]\n    return ans`,
        explanation: [
          { line: 1, text: "Define function `productExceptSelf` returning a list of integers." },
          { line: 2, text: "Find the size of input list `nums`." },
          { line: 3, text: "Initialize `ans` array of size `n` with 1." },
          { line: 4, text: "Loop forward from index 1 to `n - 1`." },
          { line: 5, text: "Store prefix product (product of elements before index `i`) in `ans[i]`." },
          { line: 6, text: "Initialize `suffix` tracking variable to 1." },
          { line: 7, text: "Loop backward from `n - 1` to 0." },
          { line: 8, text: "Multiply current prefix product in `ans[i]` by `suffix`." },
          { line: 9, text: "Multiply `suffix` by current element `nums[i]` to update it for the next element." },
          { line: 10, text: "Return the result array." }
        ]
      },
      java: {
        code: `public int[] productExceptSelf(int[] nums) {\n    int n = nums.length;\n    int[] ans = new int[n];\n    ans[0] = 1;\n    for (int i = 1; i < n; i++) {\n        ans[i] = ans[i - 1] * nums[i - 1];\n    }\n    int suffix = 1;\n    for (int i = n - 1; i >= 0; i--) {\n        ans[i] = ans[i] * suffix;\n        suffix = suffix * nums[i];\n    }\n    return ans;\n}`,
        explanation: [
          { line: 1, text: "Declare method returning an integer array of products." },
          { line: 2, text: "Get length of array `nums`." },
          { line: 3, text: "Create output array `ans` of size `n`." },
          { line: 4, text: "Set first element of output array to 1 (prefix of index 0 is 1)." },
          { line: 5, text: "Loop from 1 to `n - 1`." },
          { line: 6, text: "Store prefix products in `ans[i]`." },
          { line: 8, text: "Set suffix variable to 1." },
          { line: 9, text: "Loop backward from `n - 1` down to 0." },
          { line: 10, text: "Multiply prefix in `ans[i]` by suffix." },
          { line: 11, text: "Update suffix by multiplying with `nums[i]`." },
          { line: 13, text: "Return final array." }
        ]
      }
    }
  }
];
