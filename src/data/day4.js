export const day4Problems = [
  {
    id: 21,
    name: "Merge Two Sorted Lists",
    difficulty: "Easy",
    topic: "Linked List",
    leetcodeUrl: "https://leetcode.com/problems/merge-two-sorted-lists/",
    tip: "Use a dummy head node. This simplifies edge cases when inserting the first element, as you can always append to `tail->next`.",
    description: "You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
    chatbotData: {
      intuition: "We can build the merged list node by node. We create a `dummy` node to act as the head of the new list, and maintain a `tail` pointer. We compare the values at `list1` and `list2`. We append the smaller node to `tail.next` and move that list's pointer forward. We also move `tail` forward. Once one of the lists becomes empty, we simply link the rest of the other list to the end.",
      complexity: "Time Complexity: O(N + M) where N and M are the sizes of the two lists, since we visit each node exactly once.\nSpace Complexity: O(1) auxiliary space as we reuse the existing nodes.",
      edgeCases: "1. One or both lists are empty: handled correctly by appending the remaining list.\n2. All elements in list1 are smaller than list2: list1 is traversed first, then tail links to list2.",
      debugging: "Remember to return `dummy.next` (or `dummy->next`), not `dummy`, because the dummy node itself is just a placeholder and is not part of the sorted lists."
    },
    solutions: {
      cpp: {
        code: `ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n    ListNode dummy(0);\n    ListNode* tail = &dummy;\n    while (list1 != nullptr && list2 != nullptr) {\n        if (list1->val <= list2->val) {\n            tail->next = list1;\n            list1 = list1->next;\n        } else {\n            tail->next = list2;\n            list2 = list2->next;\n        }\n        tail = tail->next;\n    }\n    tail->next = (list1 != nullptr) ? list1 : list2;\n    return dummy.next;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes head pointers of two lists, returns head pointer of merged list." },
          { line: 2, text: "Create a local stack-allocated `dummy` ListNode with value 0 to avoid dynamic memory allocation." },
          { line: 3, text: "Set `tail` pointer to point to the address of `dummy`." },
          { line: 4, text: "Loop while both lists have nodes remaining." },
          { line: 5, text: "Compare values of the current nodes in both lists." },
          { line: 6, text: "If `list1` node is smaller or equal, append `list1` node to `tail->next`." },
          { line: 7, text: "Advance `list1` pointer to its next node." },
          { line: 9, text: "Otherwise, append `list2` node to `tail->next`." },
          { line: 10, text: "Advance `list2` pointer." },
          { line: 12, text: "Advance the `tail` pointer to the newly appended node." },
          { line: 14, text: "Once loop ends, append the remaining elements of the non-empty list directly to the tail." },
          { line: 15, text: "Return the node after dummy, which is the actual start of the merged list." }
        ]
      },
      python: {
        code: `def mergeTwoLists(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n    dummy = ListNode(0)\n    tail = dummy\n    while list1 and list2:\n        if list1.val <= list2.val:\n            tail.next = list1\n            list1 = list1.next\n        else:\n            tail.next = list2\n            list2 = list2.next\n        tail = tail.next\n    tail.next = list1 if list1 else list2\n    return dummy.next`,
        explanation: [
          { line: 1, text: "Define mergeTwoLists function." },
          { line: 2, text: "Create a dummy ListNode." },
          { line: 3, text: "Set `tail` pointer to dummy node." },
          { line: 4, text: "Loop while both `list1` and `list2` are not None." },
          { line: 5, text: "Compare node values." },
          { line: 6, text: "Link smaller node to `tail.next` and advance list pointer." },
          { line: 11, text: "Advance `tail` pointer." },
          { line: 12, text: "Link any remaining nodes from the non-empty list." },
          { line: 13, text: "Return the head of merged list (`dummy.next`)." }
        ]
      },
      java: {
        code: `public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n    ListNode dummy = new ListNode(0);\n    ListNode tail = dummy;\n    while (list1 != null && list2 != null) {\n        if (list1.val <= list2.val) {\n            tail.next = list1;\n            list1 = list1.next;\n        } else {\n            tail.next = list2;\n            list2 = list2.next;\n        }\n        tail = tail.next;\n    }\n    tail.next = (list1 != null) ? list1 : list2;\n    return dummy.next;\n}`,
        explanation: [
          { line: 1, text: "Declare mergeTwoLists method." },
          { line: 2, text: "Create dummy head node." },
          { line: 3, text: "Set tail pointer to dummy." },
          { line: 4, text: "Loop while both lists are non-null." },
          { line: 5, text: "If `list1` has a smaller value, append it and advance `list1`." },
          { line: 8, text: "If `list2` has a smaller value, append it and advance `list2`." },
          { line: 12, text: "Move tail pointer forward." },
          { line: 14, text: "Append remaining nodes of whichever list is not null." },
          { line: 15, text: "Return dummy's next node." }
        ]
      }
    }
  },
  {
    id: 141,
    name: "Linked List Cycle",
    difficulty: "Easy",
    topic: "Fast & Slow Pointer",
    leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle/",
    tip: "Use Floyd's Cycle Finding Algorithm (two pointers). The slow pointer moves by 1 step, the fast pointer moves by 2 steps. If they meet, there is a cycle.",
    description: "Given `head`, the head of a linked list, determine if the linked list has a cycle in it. Return `true` if there is a cycle, and `false` otherwise.",
    chatbotData: {
      intuition: "Think of two runners on a circular track. A fast runner will eventually lap the slow runner and meet them from behind. We initialize a `slow` pointer and a `fast` pointer at the head. In each iteration, `slow` moves 1 node, and `fast` moves 2 nodes. If there is no cycle, `fast` will eventually reach the end of the list (`null`). If there is a cycle, `fast` will enter the loop first, and `slow` will follow. Eventually, `fast` and `slow` will point to the same node, indicating a cycle.",
      complexity: "Time Complexity: O(N) where N is the number of nodes in the list. If there is no cycle, fast reaches the end in N/2 steps. If there is a cycle, fast meets slow in at most N steps.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. Empty list or single node: returns false immediately.\n2. Cycle of size 2: handled correctly, pointers meet on second step.",
      debugging: "Always verify `fast != null` and `fast.next != null` inside the loop condition to avoid NullPointerExceptions."
    },
    solutions: {
      cpp: {
        code: `bool hasCycle(ListNode *head) {\n    if (head == nullptr) return false;\n    ListNode* slow = head;\n    ListNode* fast = head;\n    while (fast != nullptr && fast->next != nullptr) {\n        slow = slow->next;\n        fast = fast->next->next;\n        if (slow == fast) {\n            return true;\n        }\n    }\n    return false;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes a head pointer, returns boolean." },
          { line: 2, text: "If the list is empty, there can't be a cycle: return false." },
          { line: 3, text: "Initialize `slow` pointer at the head." },
          { line: 4, text: "Initialize `fast` pointer at the head." },
          { line: 5, text: "Loop while `fast` and `fast->next` are not null (i.e. we haven't reached list end)." },
          { line: 6, text: "Move `slow` pointer forward by one node." },
          { line: 7, text: "Move `fast` pointer forward by two nodes." },
          { line: 8, text: "Check if the two pointers have met." },
          { line: 9, text: "If they met, a cycle is present: return true." },
          { line: 12, text: "If loop ends, it means we reached the end of list: return false." }
        ]
      },
      python: {
        code: `def hasCycle(head: Optional[ListNode]) -> bool:\n    slow, fast = head, head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False`,
        explanation: [
          { line: 1, text: "Define hasCycle function." },
          { line: 2, text: "Set both pointers to the head." },
          { line: 3, text: "Loop while `fast` and its next node exist." },
          { line: 4, text: "Advance slow by 1, fast by 2." },
          { line: 6, text: "Check if pointers are at the same node. If so, cycle found." },
          { line: 8, text: "Return False if loop finishes without collision." }
        ]
      },
      java: {
        code: `public boolean hasCycle(ListNode head) {\n    if (head == null) return false;\n    ListNode slow = head;\n    ListNode fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) {\n            return true;\n        }\n    }\n    return false;\n}`,
        explanation: [
          { line: 1, text: "Declare hasCycle method." },
          { line: 2, text: "Check if the head node is null." },
          { line: 3, text: "Initialize slow pointer." },
          { line: 4, text: "Initialize fast pointer." },
          { line: 5, text: "Loop while fast pointer is not null." },
          { line: 6, text: "Move slow 1 step." },
          { line: 7, text: "Move fast 2 steps." },
          { line: 8, text: "Compare nodes: return true if they match." },
          { line: 12, text: "Return false when end is reached." }
        ]
      }
    }
  },
  {
    id: 206,
    name: "Reverse Linked List",
    difficulty: "Easy",
    topic: "Linked List",
    leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list/",
    tip: "Use three pointers: `prev` (initialized to null), `curr` (initialized to head), and `nextTemp` (to temporarily store `curr->next` before reversing).",
    description: "Given the `head` of a singly linked list, reverse the list, and return the reversed list.",
    chatbotData: {
      intuition: "To reverse a list, we must change the direction of each node's `next` pointer. Normally, `nodeA.next` points to `nodeB`. We want it to point to `prev` (the node before it). We iterate through the list. For each node `curr`, we temporarily store its next node `nextTemp = curr.next` (otherwise we would lose the rest of the list). Then we reverse the link: `curr.next = prev`. Finally, we move our pointers forward: `prev` becomes `curr`, and `curr` becomes `nextTemp`.",
      complexity: "Time Complexity: O(N) because we visit each of the N nodes exactly once.\nSpace Complexity: O(1) auxiliary space as we reverse in-place by changing pointer references.",
      edgeCases: "1. Empty list: returns null.\n2. Single node: returns the node itself (reversing a single node does nothing).",
      debugging: "Don't forget to temporarily save `curr.next` before overwriting it with `prev`. Otherwise, you will break the chain and have no way to access the remaining nodes."
    },
    solutions: {
      cpp: {
        code: `ListNode* reverseList(ListNode* head) {\n    ListNode* prev = nullptr;\n    ListNode* curr = head;\n    while (curr != nullptr) {\n        ListNode* nextTemp = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = nextTemp;\n    }\n    return prev;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes list head pointer, returns reversed head pointer." },
          { line: 2, text: "Initialize `prev` pointer to `nullptr`. This will eventually be the new head." },
          { line: 3, text: "Initialize `curr` pointer to `head`." },
          { line: 4, text: "Loop while the `curr` pointer is not null." },
          { line: 5, text: "Temporarily store the next node in `nextTemp` so we don't lose access to it." },
          { line: 6, text: "Reverse the link: make `curr->next` point to the previous node `prev`." },
          { line: 7, text: "Shift `prev` pointer forward to the current node." },
          { line: 8, text: "Shift `curr` pointer forward to the saved next node." },
          { line: 10, text: "After loop ends, `prev` points to the new head node: return it." }
        ]
      },
      python: {
        code: `def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:\n    prev = None\n    curr = head\n    while curr:\n        next_temp = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_temp\n    return prev`,
        explanation: [
          { line: 1, text: "Define reverseList function." },
          { line: 2, text: "Initialize `prev` to None." },
          { line: 3, text: "Initialize `curr` to head." },
          { line: 4, text: "Loop through nodes." },
          { line: 5, text: "Save `curr.next` in `next_temp`." },
          { line: 6, text: "Reverse current node pointer to face backward." },
          { line: 7, text: "Move `prev` to `curr`." },
          { line: 8, text: "Move `curr` to `next_temp`." },
          { line: 9, text: "Return `prev` (new head of reversed list)." }
        ]
      },
      java: {
        code: `public ListNode reverseList(ListNode head) {\n    ListNode prev = null;\n    ListNode curr = head;\n    while (curr != null) {\n        ListNode nextTemp = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = nextTemp;\n    }\n    return prev;\n}`,
        explanation: [
          { line: 1, text: "Declare method reverseList." },
          { line: 2, text: "Initialize `prev` pointer to null." },
          { line: 3, text: "Initialize `curr` pointer to head." },
          { line: 4, text: "Loop while curr is not null." },
          { line: 5, text: "Save next node reference." },
          { line: 6, text: "Link current node's next field to previous node." },
          { line: 7, text: "Advance prev pointer." },
          { line: 8, text: "Advance curr pointer." },
          { line: 10, text: "Return prev pointer." }
        ]
      }
    }
  },
  {
    id: 234,
    name: "Palindrome Linked List",
    difficulty: "Easy",
    topic: "Linked List",
    leetcodeUrl: "https://leetcode.com/problems/palindrome-linked-list/",
    tip: "Use fast & slow pointers to find the midpoint. Reverse the second half of the linked list. Compare the first half and the reversed second half. (Optional: restore the list).",
    description: "Given the `head` of a singly linked list, return `true` if it is a palindrome or `false` otherwise.",
    chatbotData: {
      intuition: "We can check if a linked list is a palindrome in O(N) time and O(1) space. First, we use a `slow` and `fast` pointer to find the middle of the list. Then, we reverse the second half of the list starting from `slow`. Finally, we compare the nodes of the first half (starting at `head`) with the reversed second half (starting at the new head of the reversed half). If any values differ, it's not a palindrome.",
      complexity: "Time Complexity: O(N) since we make a pass to find the midpoint, a pass to reverse the second half, and a pass to compare values.\nSpace Complexity: O(1) auxiliary space as we modify list pointers in-place.",
      edgeCases: "1. Single node: returns true.\n2. Two nodes (e.g. 1 -> 2): middle found, second half reversed, compared, returns false.",
      debugging: "Make sure you handle cases with odd numbers of elements. The first half will be slightly longer or equal to the second, so loop check should run while the reversed second half pointer is not null."
    },
    solutions: {
      cpp: {
        code: `ListNode* reverse(ListNode* head) {\n    ListNode* prev = nullptr;\n    ListNode* curr = head;\n    while (curr != nullptr) {\n        ListNode* next = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}\n\nbool isPalindrome(ListNode* head) {\n    if (head == nullptr || head->next == nullptr) return true;\n    ListNode* slow = head;\n    ListNode* fast = head;\n    while (fast != nullptr && fast->next != nullptr) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    ListNode* secondHalf = reverse(slow);\n    ListNode* firstHalf = head;\n    while (secondHalf != nullptr) {\n        if (firstHalf->val != secondHalf->val) {\n            return false;\n        }\n        firstHalf = firstHalf->next;\n        secondHalf = secondHalf->next;\n    }\n    return true;\n}`,
        explanation: [
          { line: 1, text: "Helper function declaration to reverse a linked list." },
          { line: 12, text: "Main function declaration." },
          { line: 13, text: "A list of size 0 or 1 is automatically a palindrome: return true." },
          { line: 14, text: "Initialize slow and fast pointers to head." },
          { line: 16, text: "Loop to advance slow by 1 and fast by 2. When fast reaches the end, slow is at the midpoint." },
          { line: 20, text: "Reverse the second half of the list starting from the midpoint `slow`." },
          { line: 21, text: "Set pointer `firstHalf` to start at `head`." },
          { line: 22, text: "Loop while the reversed second half has nodes." },
          { line: 23, text: "Compare values at both pointers. If they differ, return false." },
          { line: 26, text: "Advance both pointers forward." },
          { line: 29, text: "If all nodes match, return true." }
        ]
      },
      python: {
        code: `def isPalindrome(head: Optional[ListNode]) -> bool:\n    if not head or not head.next:\n        return True\n    \n    # Find mid\n    slow, fast = head, head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        \n    # Reverse second half\n    prev = None\n    curr = slow\n    while curr:\n        next_node = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_node\n        \n    # Compare halves\n    left, right = head, prev\n    while right:\n        if left.val != right.val:\n            return False\n        left = left.next\n        right = right.next\n    return True`,
        explanation: [
          { line: 1, text: "Define isPalindrome function." },
          { line: 2, text: "Return True for lists of size <= 1." },
          { line: 6, text: "Initialize fast/slow pointers." },
          { line: 7, text: "Run loop to place `slow` at the middle." },
          { line: 12, text: "Initialize pointers to reverse second half in-place." },
          { line: 14, text: "Reverse links from `slow` node to the end of list." },
          { line: 21, text: "Compare first half (`left`) and reversed second half (`right`)." },
          { line: 23, text: "Return False if any value is unequal." },
          { line: 27, text: "Return True when right pointer reaches end successfully." }
        ]
      },
      java: {
        code: `public boolean isPalindrome(ListNode head) {\n    if (head == null || head.next == null) return true;\n    ListNode slow = head;\n    ListNode fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    ListNode prev = null;\n    ListNode curr = slow;\n    while (curr != null) {\n        ListNode next = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = next;\n    }\n    ListNode left = head;\n    ListNode right = prev;\n    while (right != null) {\n        if (left.val != right.val) return false;\n        left = left.next;\n        right = right.next;\n    }\n    return true;\n}`,
        explanation: [
          { line: 1, text: "Declare method `isPalindrome`." },
          { line: 2, text: "Handle empty or single element lists." },
          { line: 3, text: "Find midpoint using slow and fast pointers." },
          { line: 9, text: "Initialize parameters to reverse list starting at `slow`." },
          { line: 11, text: "Reverse the second half of the list." },
          { line: 17, text: "Initialize left pointer at head and right pointer at reversed second half's head." },
          { line: 19, text: "Loop through reversed half to compare values." },
          { line: 20, text: "Return false if a mismatch is found." },
          { line: 24, text: "Return true if all characters are symmetric." }
        ]
      }
    }
  },
  {
    id: 2,
    name: "Add Two Numbers",
    difficulty: "Medium",
    topic: "Linked List",
    leetcodeUrl: "https://leetcode.com/problems/add-two-numbers/",
    tip: "Iterate through both lists simultaneously. Maintain a `carry` variable. Create new nodes with `(val1 + val2 + carry) % 10` and calculate new `carry` using division `/ 10`.",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    chatbotData: {
      intuition: "Since the digits are stored in reverse order, the head of the list holds the least significant digit (ones place). This is exactly how we perform manual addition (right-to-left)! We traverse both lists together, calculating the sum of matching digits plus any `carry` from the previous step. The new digit is `sum % 10`, and the new carry is `sum / 10`. We append each new digit to our output list.",
      complexity: "Time Complexity: O(max(N, M)) where N and M are the lengths of the two lists, since we iterate through the longest list once.\nSpace Complexity: O(max(N, M)) to store the resulting sum linked list.",
      edgeCases: "1. Lists of different lengths (e.g. 99 + 1): carry propagates past the end of the shorter list, and might create an extra node at the end (e.g. 100).\n2. One list is 0: works naturally.",
      debugging: "Make sure you include a check for `carry > 0` in your loop condition or after the loop. If there is a leftover carry after reaching the end of both lists, you must append one final node containing that carry value."
    },
    solutions: {
      cpp: {
        code: `ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n    ListNode dummy(0);\n    ListNode* tail = &dummy;\n    int carry = 0;\n    while (l1 != nullptr || l2 != nullptr || carry > 0) {\n        int val1 = (l1 != nullptr) ? l1->val : 0;\n        int val2 = (l2 != nullptr) ? l2->val : 0;\n        int sum = val1 + val2 + carry;\n        carry = sum / 10;\n        tail->next = new ListNode(sum % 10);\n        tail = tail->next;\n        if (l1 != nullptr) l1 = l1->next;\n        if (l2 != nullptr) l2 = l2->next;\n    }\n    return dummy.next;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes two list heads, returns head of the sum list." },
          { line: 2, text: "Create a `dummy` head node to simplify node appending." },
          { line: 3, text: "Initialize `tail` pointer pointing to dummy." },
          { line: 4, text: "Initialize `carry` variable to 0." },
          { line: 5, text: "Loop while there are nodes left in `l1` OR `l2` OR there is a leftover carry from the last addition." },
          { line: 6, text: "Get value of current `l1` node, or 0 if we reached its end." },
          { line: 7, text: "Get value of current `l2` node, or 0." },
          { line: 8, text: "Calculate the total sum (val1 + val2 + carry)." },
          { line: 9, text: "Calculate the new carry for the next digits (using division by 10)." },
          { line: 10, text: "Create a new node with digit `sum % 10` and link it to `tail->next`." },
          { line: 11, text: "Advance the `tail` pointer." },
          { line: 12, text: "Move `l1` pointer to next node if it exists." },
          { line: 13, text: "Move `l2` pointer if it exists." },
          { line: 15, text: "Return the node after dummy, which is the start of the sum list." }
        ]
      },
      python: {
        code: `def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n    dummy = ListNode(0)\n    tail = dummy\n    carry = 0\n    while l1 or l2 or carry:\n        val1 = l1.val if l1 else 0\n        val2 = l2.val if l2 else 0\n        total = val1 + val2 + carry\n        carry = total // 10\n        tail.next = ListNode(total % 10)\n        tail = tail.next\n        l1 = l1.next if l1 else None\n        l2 = l2.next if l2 else None\n    return dummy.next`,
        explanation: [
          { line: 1, text: "Define addTwoNumbers function." },
          { line: 2, text: "Create dummy node." },
          { line: 3, text: "Initialize tail and carry." },
          { line: 5, text: "Loop while l1, l2, or carry exists." },
          { line: 6, text: "Get digit values or default to 0." },
          { line: 8, text: "Sum digits and carry." },
          { line: 9, text: "Find new carry using integer floor division." },
          { line: 10, text: "Create new node with modulo value and append it." },
          { line: 12, text: "Advance list nodes." },
          { line: 14, text: "Return merged result starting at `dummy.next`." }
        ]
      },
      java: {
        code: `public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0);\n    ListNode tail = dummy;\n    int carry = 0;\n    while (l1 != null || l2 != null || carry > 0) {\n        int val1 = (l1 != null) ? l1.val : 0;\n        int val2 = (l2 != null) ? l2.val : 0;\n        int sum = val1 + val2 + carry;\n        carry = sum / 10;\n        tail.next = new ListNode(sum % 10);\n        tail = tail.next;\n        if (l1 != null) l1 = l1.next;\n        if (l2 != null) l2 = l2.next;\n    }\n    return dummy.next;\n}`,
        explanation: [
          { line: 1, text: "Declare addTwoNumbers method." },
          { line: 2, text: "Create dummy ListNode." },
          { line: 3, text: "Set tail and carry trackers." },
          { line: 5, text: "Loop while list nodes remain or carry is positive." },
          { line: 6, text: "Get values, handling null positions." },
          { line: 8, text: "Sum digits and carry." },
          { line: 9, text: "Set carry." },
          { line: 10, text: "Instantiate new node with digit and link to tail." },
          { line: 11, text: "Advance tail." },
          { line: 15, text: "Return dummy's next node." }
        ]
      }
    }
  },
  {
    id: 19,
    name: "Remove Nth Node From End",
    difficulty: "Medium",
    topic: "Two Pointer",
    leetcodeUrl: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    tip: "Use a dummy head. Set two pointers `first` and `second` at dummy. Move `first` pointer `n + 1` steps ahead first. Then move both together until `first` hits null. `second` will point right before the node to delete.",
    description: "Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.",
    chatbotData: {
      intuition: "To remove the Nth node from the end in one pass, we use two pointers: `fast` and `slow`. We first place them at a `dummy` node. We advance `fast` by `n + 1` steps. This establishes a gap of exactly `n` nodes between `fast` and `slow`. Then, we advance both pointers at the same speed (1 step at a time) until `fast` becomes null. Because of the gap, when `fast` reaches the end, `slow` will point *exactly* to the node preceding the Nth node from the end. We delete it by doing `slow.next = slow.next.next`.",
      complexity: "Time Complexity: O(N) since we traverse the list of N nodes in a single pass.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. List has only 1 element and n=1: dummy node handles it perfectly, returns null.\n2. Deleting the head node: because slow starts at dummy, it correctly deletes the head and dummy.next points to the new head.",
      debugging: "Make sure you initialize the pointers at a dummy head node. Without a dummy node, deleting the head of the list requires custom edge-case conditions, which increases code complexity."
    },
    solutions: {
      cpp: {
        code: `ListNode* removeNthFromEnd(ListNode* head, int n) {\n    ListNode dummy(0);\n    dummy.next = head;\n    ListNode* first = &dummy;\n    ListNode* second = &dummy;\n    for (int i = 1; i <= n + 1; i++) {\n        first = first->next;\n    }\n    while (first != nullptr) {\n        first = first->next;\n        second = second->next;\n    }\n    second->next = second->next->next;\n    return dummy.next;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes head pointer and integer n, returns modified head pointer." },
          { line: 2, text: "Create a dummy head node with value 0." },
          { line: 3, text: "Link `dummy.next` to the head of the list." },
          { line: 4, text: "Initialize `first` pointer to point to the dummy node." },
          { line: 5, text: "Initialize `second` pointer to point to the dummy node." },
          { line: 6, text: "Move `first` pointer `n + 1` steps forward to create a gap of `n` nodes between `first` and `second`." },
          { line: 9, text: "Move both pointers forward until `first` pointer reaches the end (`nullptr`)." },
          { line: 13, text: "Skip the target node: make `second->next` point to `second->next->next`." },
          { line: 14, text: "Return the node after dummy (the head of our modified list)." }
        ]
      },
      python: {
        code: `def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:\n    dummy = ListNode(0)\n    dummy.next = head\n    first = dummy\n    second = dummy\n    for i in range(n + 1):\n        first = first.next\n    while first:\n        first = first.next\n        second = second.next\n    second.next = second.next.next\n    return dummy.next`,
        explanation: [
          { line: 1, text: "Define removeNthFromEnd function." },
          { line: 2, text: "Create a dummy node." },
          { line: 4, text: "Initialize both pointers to dummy." },
          { line: 6, text: "Move `first` pointer `n + 1` steps forward." },
          { line: 8, text: "Move both pointers together until `first` is None." },
          { line: 11, text: "Unlink the N-th node from the end by skipping it." },
          { line: 12, text: "Return `dummy.next`." }
        ]
      },
      java: {
        code: `public ListNode removeNthFromEnd(ListNode head, int n) {\n    ListNode dummy = new ListNode(0);\n    dummy.next = head;\n    ListNode first = dummy;\n    ListNode second = dummy;\n    for (int i = 1; i <= n + 1; i++) {\n        first = first.next;\n    }\n    while (first != null) {\n        first = first.next;\n        second = second.next;\n    }\n    second.next = second.next.next;\n    return dummy.next;\n}`,
        explanation: [
          { line: 1, text: "Declare method removeNthFromEnd." },
          { line: 2, text: "Create dummy node." },
          { line: 4, text: "Set pointers to dummy node." },
          { line: 6, text: "Move `first` pointer `n + 1` steps." },
          { line: 9, text: "Loop until `first` is null." },
          { line: 13, text: "Point `second.next` to the node after the one we want to delete." },
          { line: 14, text: "Return the head of list." }
        ]
      }
    }
  },
  {
    id: 142,
    name: "Linked List Cycle II",
    difficulty: "Medium",
    topic: "Fast & Slow Pointer",
    leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle-ii/",
    tip: "Find the meeting point of slow and fast pointers. Then, reset the slow pointer to the head of the list. Move both pointers at the same speed (1 step); the node where they meet is the start of the cycle.",
    description: "Given the `head` of a linked list, return the node where the cycle begins. If there is no cycle, return `null`.",
    chatbotData: {
      intuition: "Using Floyd's Cycle Detection, when `slow` (1 step) and `fast` (2 steps) meet, they are at some node inside the cycle. Let the distance from head to cycle entrance be `D`, and distance from entrance to meeting point be `K`. It is mathematically provable that the remaining distance from the meeting point to the cycle entrance is also `D` (plus some cycles). Therefore, if we reset `slow` to the `head` and leave `fast` at the meeting point, and move both at 1 step per turn, they will meet exactly at the cycle entrance!",
      complexity: "Time Complexity: O(N) where N is the number of nodes in the list. Both pointers travel at most 2N steps.\nSpace Complexity: O(1) auxiliary space.",
      edgeCases: "1. No cycle: fast reaches null, returns null.\n2. Cycle starts at head: slow and fast meet, slow reset to head, they meet immediately at head.",
      debugging: "Make sure you do not reset both pointers. Only reset one pointer (e.g. `slow` to `head`), and leave the other pointer at the collision node."
    },
    solutions: {
      cpp: {
        code: `ListNode *detectCycle(ListNode *head) {\n    if (head == nullptr || head->next == nullptr) return nullptr;\n    ListNode* slow = head;\n    ListNode* fast = head;\n    bool hasCycle = false;\n    while (fast != nullptr && fast->next != nullptr) {\n        slow = slow->next;\n        fast = fast->next->next;\n        if (slow == fast) {\n            hasCycle = true;\n            break;\n        }\n    }\n    if (!hasCycle) return nullptr;\n    slow = head;\n    while (slow != fast) {\n        slow = slow->next;\n        fast = fast->next;\n    }\n    return slow;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes head pointer, returns pointer to cycle start or nullptr." },
          { line: 2, text: "Handle empty list or single node cases." },
          { line: 3, text: "Initialize slow and fast pointers at head." },
          { line: 5, text: "Boolean flag to track if a cycle is found." },
          { line: 6, text: "Standard Floyd's cycle detection loop." },
          { line: 9, text: "Pointers collided: cycle exists! Set flag to true and break loop." },
          { line: 14, text: "If no cycle was found, return nullptr." },
          { line: 15, text: "Reset the `slow` pointer to the head of the list." },
          { line: 16, text: "Loop while the two pointers are not equal." },
          { line: 17, text: "Move `slow` forward by 1 node." },
          { line: 18, text: "Move `fast` forward by 1 node (at the same speed as slow)." },
          { line: 20, text: "The meeting node is the cycle start: return it." }
        ]
      },
      python: {
        code: `def detectCycle(head: Optional[ListNode]) -> Optional[ListNode]:\n    slow, fast = head, head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            break\n    else:\n        return None\n        \n    slow = head\n    while slow != fast:\n        slow = slow.next\n        fast = fast.next\n    return slow`,
        explanation: [
          { line: 1, text: "Define detectCycle function." },
          { line: 2, text: "Set both pointers to head." },
          { line: 3, text: "Detect cycle loop." },
          { line: 6, text: "Collision found: break loop." },
          { line: 8, text: "Python `while-else` construct: runs if loop finished without breaking (meaning no cycle): return None." },
          { line: 11, text: "Reset `slow` pointer to the head." },
          { line: 12, text: "Move both pointers 1 step at a time until they collide." },
          { line: 15, text: "Return the node where they meet." }
        ]
      },
      java: {
        code: `public ListNode detectCycle(ListNode head) {\n    if (head == null || head.next == null) return null;\n    ListNode slow = head;\n    ListNode fast = head;\n    boolean hasCycle = false;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) {\n            hasCycle = true;\n            break;\n        }\n    }\n    if (!hasCycle) return null;\n    slow = head;\n    while (slow != fast) {\n        slow = slow.next;\n        fast = fast.next;\n    }\n    return slow;\n}`,
        explanation: [
          { line: 1, text: "Declare detectCycle method." },
          { line: 2, text: "Verify basic list dimensions." },
          { line: 3, text: "Set up fast and slow pointers." },
          { line: 6, text: "Standard collision check." },
          { line: 9, text: "Record cycle exists and break loop." },
          { line: 14, text: "Return null if no cycle." },
          { line: 15, text: "Reset slow pointer to head." },
          { line: 16, text: "Loop while pointers are different." },
          { line: 20, text: "Return start node." }
        ]
      }
    }
  },
  {
    id: 146,
    name: "LRU Cache",
    difficulty: "Medium",
    topic: "Design / HashMap",
    leetcodeUrl: "https://leetcode.com/problems/lru-cache/",
    tip: "Use a Doubly Linked List and a Hash Map. The doubly linked list maintains the usage order (head = most recent, tail = least recent). The hash map maps keys to list node addresses for O(1) access.",
    description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the `LRUCache` class with `get` and `put` operations in `O(1)` time complexity.",
    chatbotData: {
      intuition: "To achieve O(1) for both `get` and `put`, we need a combination of two data structures: a Hash Map and a Doubly Linked List. The doubly linked list keeps track of the order of access. We place the most recently used items at the head, and the least recently used at the tail. The Hash Map stores `key -> Node` mappings, allowing us to find any node in the list in O(1) time. When we access or update an item, we move its node to the head. If we exceed capacity during a `put`, we delete the node at the tail.",
      complexity: "Time Complexity: O(1) for both `get` and `put` operations since map lookups and list node additions/deletions take O(1) time.\nSpace Complexity: O(Capacity) to store at most `capacity` number of items in the map and list.",
      edgeCases: "1. Capacity of 1: node is evicted on every new put.\n2. Updating an existing key: updates value and moves node to the head of the list, doesn't increase size.",
      debugging: "Implement helper methods like `addNode(Node*)` (add to head) and `removeNode(Node*)` (delete from list). This keeps code clean and prevents pointers from getting messed up during complex updates."
    },
    solutions: {
      cpp: {
        code: `class LRUCache {\nprivate:\n    struct Node {\n        int key, val;\n        Node* prev;\n        Node* next;\n        Node(int k, int v) : key(k), val(v), prev(nullptr), next(nullptr) {}\n    };\n    \n    int capacity;\n    unordered_map<int, Node*> map;\n    Node* head = new Node(-1, -1);\n    Node* tail = new Node(-1, -1);\n    \n    void addNode(Node* node) {\n        Node* temp = head->next;\n        node->next = temp;\n        node->prev = head;\n        head->next = node;\n        temp->prev = node;\n    }\n    \n    void removeNode(Node* node) {\n        Node* prevNode = node->prev;\n        Node* nextNode = node->next;\n        prevNode->next = nextNode;\n        nextNode->prev = prevNode;\n    }\n    \n    void moveToHead(Node* node) {\n        removeNode(node);\n        addNode(node);\n    }\n\npublic:\n    LRUCache(int cap) {\n        capacity = cap;\n        head->next = tail;\n        tail->prev = head;\n    }\n    \n    int get(int key) {\n        if (map.find(key) == map.end()) return -1;\n        Node* node = map[key];\n        moveToHead(node);\n        return node->val;\n    }\n    \n    void put(int key, int value) {\n        if (map.find(key) != map.end()) {\n            Node* node = map[key];\n            node->val = value;\n            moveToHead(node);\n        } else {\n            if (map.size() == capacity) {\n                Node* lru = tail->prev;\n                removeNode(lru);\n                map.erase(lru->key);\n                delete lru;\n            }\n            Node* newNode = new Node(key, value);\n            map[key] = newNode;\n            addNode(newNode);\n        }\n    }\n};`,
        explanation: [
          { line: 3, text: "Define a private `Node` structure for our Doubly Linked List containing key, val, prev, and next pointers." },
          { line: 10, text: "Declare capacity variable." },
          { line: 11, text: "Declare hash map mapping key to node pointer." },
          { line: 12, text: "Create dummy head and tail nodes to avoid null pointer boundary checks." },
          { line: 15, text: "Helper function: inserts a node directly after the dummy `head` (most recently used position)." },
          { line: 23, text: "Helper function: removes an existing node from the list by updating its neighbors' pointers." },
          { line: 30, text: "Helper function: moves a node to the head of the list (marks as recently used) by removing and re-adding it." },
          { line: 36, text: "Constructor: initializes capacity and links head and tail dummy nodes together." },
          { line: 42, text: "get() function: checks if key exists in map. If not, returns -1." },
          { line: 44, text: "If key exists, retrieve the node, move it to the head, and return its value." },
          { line: 49, text: "put() function: checks if key already exists. If yes, update value and move node to head." },
          { line: 54, text: "If key is new, check if cache is full. If full, get the LRU node (`tail->prev`), remove it from map and list, and free memory." },
          { line: 60, text: "Create the new node, insert it in the map, and add it to the head of the list." }
        ]
      },
      python: {
        code: `class Node:\n    def __init__(self, key, val):\n        self.key = key\n        self.val = val\n        self.prev = None\n        self.next = None\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.map = {}\n        self.head = Node(-1, -1)\n        self.tail = Node(-1, -1)\n        self.head.next = self.tail\n        self.tail.prev = self.head\n\n    def _add(self, node):\n        temp = self.head.next\n        node.next = temp\n        node.prev = self.head\n        self.head.next = node\n        temp.prev = node\n\n    def _remove(self, node):\n        node.prev.next = node.next\n        node.next.prev = node.prev\n\n    def get(self, key: int) -> int:\n        if key not in self.map:\n            return -1\n        node = self.map[key]\n        self._remove(node)\n        self._add(node)\n        return node.val\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.map:\n            node = self.map[key]\n            node.val = value\n            self._remove(node)\n            self._add(node)\n        else:\n            if len(self.map) == self.cap:\n                lru = self.tail.prev\n                self._remove(lru)\n                del self.map[lru.key]\n            new_node = Node(key, value)\n            self.map[key] = new_node\n            self._add(new_node)`,
        explanation: [
          { line: 1, text: "Define Node class with key, value, prev, next." },
          { line: 8, text: "Define LRUCache class." },
          { line: 9, text: "Constructor: initialize variables and setup dummy head/tail links." },
          { line: 17, text: "Helper method to add a node right after head." },
          { line: 24, text: "Helper method to remove node from list." },
          { line: 28, text: "get(): check key presence. Return -1 if absent." },
          { line: 31, text: "If present, move node to head of list and return value." },
          { line: 36, text: "put(): if key exists, update value and move node to head." },
          { line: 43, text: "If key is new and capacity exceeded, remove LRU node (`tail.prev`) from list and dict." },
          { line: 47, text: "Create new node, save in dictionary, and insert at head." }
        ]
      },
      java: {
        code: `class LRUCache {\n    private class Node {\n        int key, val;\n        Node prev, next;\n        Node(int k, int v) { key = k; val = v; }\n    }\n    \n    private int capacity;\n    private Map<Integer, Node> map = new HashMap<>();\n    private Node head = new Node(-1, -1);\n    private Node tail = new Node(-1, -1);\n    \n    public LRUCache(int capacity) {\n        this.capacity = capacity;\n        head.next = tail;\n        tail.prev = head;\n    }\n    \n    private void add(Node node) {\n        Node temp = head.next;\n        node.next = temp;\n        node.prev = head;\n        head.next = node;\n        temp.prev = node;\n    }\n    \n    private void remove(Node node) {\n        node.prev.next = node.next;\n        node.next.prev = node.prev;\n    }\n    \n    public int get(int key) {\n        if (!map.containsKey(key)) return -1;\n        Node node = map.get(key);\n        remove(node);\n        add(node);\n        return node.val;\n    }\n    \n    public void put(int key, int value) {\n        if (map.containsKey(key)) {\n            Node node = map.get(key);\n            node.val = value;\n            remove(node);\n            add(node);\n        } else {\n            if (map.size() == capacity) {\n                Node lru = tail.prev;\n                remove(lru);\n                map.remove(lru.key);\n            }\n            Node newNode = new Node(key, value);\n            map.put(key, newNode);\n            add(newNode);\n        }\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare LRUCache class." },
          { line: 2, text: "Define inner Node class." },
          { line: 9, text: "Initialize hash map mapping keys to nodes." },
          { line: 10, text: "Initialize dummy nodes." },
          { line: 19, text: "Add node to head helper." },
          { line: 27, text: "Remove node helper." },
          { line: 32, text: "get(): return -1 if key not found; otherwise move node to head and return val." },
          { line: 40, text: "put(): if key exists, update value and move to head. If new, evict LRU node if full, then save new node." }
        ]
      }
    }
  }
];
