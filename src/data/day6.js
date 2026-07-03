export const day6Problems = [
  {
    id: 104,
    name: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    topic: "Tree / DFS",
    leetcodeUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    tip: "Use simple recursion. The max depth of a tree is `1 + max(depth(left), depth(right))`. Base case is `root == null` returning `0`.",
    description: "Given the `root` of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    chatbotData: {
      intuition: "We can find the depth of a tree recursively. The depth of an empty tree is 0 (our base case). For any non-empty node, its depth is 1 (the node itself) plus the maximum of the depths of its left and right subtrees. This is a post-order traversal because we calculate subtree depths first, then combine them at the parent.",
      complexity: "Time Complexity: O(N) where N is the number of nodes, since we must visit each node exactly once.\nSpace Complexity: O(H) where H is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), H = N; in the best case (balanced tree), H = log N.",
      edgeCases: "1. Empty tree: returns 0.\n2. Single node: left/right depths are 0, returns 1.",
      debugging: "Make sure you include the base case `if (root == nullptr) return 0;` at the very beginning to prevent infinite recursion and segmentation faults."
    },
    solutions: {
      cpp: {
        code: `int maxDepth(TreeNode* root) {\n    if (root == nullptr) return 0;\n    int leftDepth = maxDepth(root->left);\n    int rightDepth = maxDepth(root->right);\n    return 1 + max(leftDepth, rightDepth);\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes TreeNode pointer, returns tree height." },
          { line: 2, text: "Base case: if the root is null, the depth is 0." },
          { line: 3, text: "Recursively calculate the maximum depth of the left subtree." },
          { line: 4, text: "Recursively calculate the maximum depth of the right subtree." },
          { line: 5, text: "Return 1 (current node) plus the maximum of the left and right subtree depths." }
        ]
      },
      python: {
        code: `def maxDepth(root: Optional[TreeNode]) -> int:\n    if not root:\n        return 0\n    return 1 + max(maxDepth(root.left), maxDepth(root.right))`,
        explanation: [
          { line: 1, text: "Define maxDepth function." },
          { line: 2, text: "Base case: return 0 if root is None." },
          { line: 4, text: "Return 1 plus the maximum depth of left and right children recursively." }
        ]
      },
      java: {
        code: `public int maxDepth(TreeNode root) {\n    if (root == null) return 0;\n    int left = maxDepth(root.left);\n    int right = maxDepth(root.right);\n    return 1 + Math.max(left, right);\n}`,
        explanation: [
          { line: 1, text: "Declare method maxDepth." },
          { line: 2, text: "Return 0 if root is null." },
          { line: 3, text: "Recursively find left subtree depth." },
          { line: 4, text: "Recursively find right subtree depth." },
          { line: 5, text: "Return 1 plus max of child depths." }
        ]
      }
    }
  },
  {
    id: 226,
    name: "Invert Binary Tree",
    difficulty: "Easy",
    topic: "Tree",
    leetcodeUrl: "https://leetcode.com/problems/invert-binary-tree/",
    tip: "Swap the left and right children of the current node. Then recursively call `invertTree` on the left child and right child.",
    description: "Given the `root` of a binary tree, invert the tree, and return its root.",
    chatbotData: {
      intuition: "Inverting a binary tree means making a mirror image of it. For every node in the tree, we swap its left child and right child. We can do this recursively: swap the current node's children, and then recursively invert its left child and right child. Once we reach a null node, we stop.",
      complexity: "Time Complexity: O(N) because we visit each of the N nodes exactly once.\nSpace Complexity: O(H) where H is the height of the tree, representing the recursion stack depth.",
      edgeCases: "1. Empty tree: returns null.\n2. Single node: returns node itself.\n3. Skewed tree: inverted correctly.",
      debugging: "When swapping in languages like Java/C++, use a temporary variable to hold the left node before overwriting it, otherwise you will lose reference to it."
    },
    solutions: {
      cpp: {
        code: `TreeNode* invertTree(TreeNode* root) {\n    if (root == nullptr) return nullptr;\n    TreeNode* temp = root->left;\n    root->left = root->right;\n    root->right = temp;\n    invertTree(root->left);\n    invertTree(root->right);\n    return root;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes root pointer, returns inverted root pointer." },
          { line: 2, text: "Base case: if the tree is empty, return nullptr." },
          { line: 3, text: "Save the left child in a temporary pointer `temp`." },
          { line: 4, text: "Swap the left child reference with the right child." },
          { line: 5, text: "Place the saved left child (`temp`) into the right child slot." },
          { line: 6, text: "Recursively invert the left subtree." },
          { line: 7, text: "Recursively invert the right subtree." },
          { line: 8, text: "Return the root node of the inverted tree." }
        ]
      },
      python: {
        code: `def invertTree(root: Optional[TreeNode]) -> Optional[TreeNode]:\n    if not root:\n        return None\n    root.left, root.right = root.right, root.left\n    invertTree(root.left)\n    invertTree(root.right)\n    return root`,
        explanation: [
          { line: 1, text: "Define invertTree function." },
          { line: 2, text: "Base case: return None if root is None." },
          { line: 4, text: "Swap left and right children in a single line using tuple unpacking." },
          { line: 5, text: "Recursively invert left child." },
          { line: 6, text: "Recursively invert right child." },
          { line: 7, text: "Return the modified root." }
        ]
      },
      java: {
        code: `public TreeNode invertTree(TreeNode root) {\n    if (root == null) return null;\n    TreeNode temp = root.left;\n    root.left = root.right;\n    root.right = temp;\n    invertTree(root.left);\n    invertTree(root.right);\n    return root;\n}`,
        explanation: [
          { line: 1, text: "Declare method invertTree." },
          { line: 2, text: "Base case: return null if root is null." },
          { line: 3, text: "Store left node in temporary variable." },
          { line: 4, text: "Swap left and right node references." },
          { line: 5, text: "Put temp node into right slot." },
          { line: 6, text: "Recursively process left subtree." },
          { line: 7, text: "Recursively process right subtree." },
          { line: 8, text: "Return the root." }
        ]
      }
    }
  },
  {
    id: 543,
    name: "Diameter of Binary Tree",
    difficulty: "Easy",
    topic: "Tree / DFS",
    leetcodeUrl: "https://leetcode.com/problems/diameter-of-binary-tree/",
    tip: "The diameter at any node is `depth(left) + depth(right)`. Maintain a global maximum diameter variable. Recursively compute depth, updating the max diameter at each node.",
    description: "Given the `root` of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.",
    chatbotData: {
      intuition: "The longest path between two nodes (diameter) must go up to some node `X` and then go down. The length of this path is the sum of the maximum depths of the left and right subtrees of `X`: `diameter = leftDepth + rightDepth`. We perform a recursive DFS. For each node, we calculate the depths of its left and right subtrees, update our global maximum diameter with `leftDepth + rightDepth`, and return the node's depth (`1 + max(leftDepth, rightDepth)`) to its parent.",
      complexity: "Time Complexity: O(N) because we visit each of the N nodes exactly once.\nSpace Complexity: O(H) where H is the height of the tree, representing the recursion stack depth.",
      edgeCases: "1. Empty tree: returns 0.\n2. Single node: returns 0 (path requires edges, single node has 0 edges).",
      debugging: "Be sure to track the diameter (number of edges) which is `leftDepth + rightDepth`. The return value of the recursive helper function should be the height (number of nodes), which is `1 + max(leftDepth, rightDepth)`."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    int maxDiameter = 0;\n    \n    int depth(TreeNode* node) {\n        if (node == nullptr) return 0;\n        int left = depth(node->left);\n        int right = depth(node->right);\n        maxDiameter = max(maxDiameter, left + right);\n        return 1 + max(left, right);\n    }\n\npublic:\n    int diameterOfBinaryTree(TreeNode* root) {\n        depth(root);\n        return maxDiameter;\n    }\n};`,
        explanation: [
          { line: 3, text: "Declare private variable `maxDiameter` to track the longest path found." },
          { line: 5, text: "Helper function `depth`: calculates subtree depth and updates diameter." },
          { line: 6, text: "Base case: if node is null, return 0." },
          { line: 7, text: "Get depth of left child recursively." },
          { line: 8, text: "Get depth of right child recursively." },
          { line: 9, text: "Update `maxDiameter` with path crossing this node: `left + right`." },
          { line: 10, text: "Return height of current node to its parent: `1 + max(left, right)`." },
          { line: 14, text: "Main function: calls recursive helper `depth` on root, then returns the global maximum." }
        ]
      },
      python: {
        code: `class Solution:\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\n        self.max_diameter = 0\n        \n        def depth(node):\n            if not node:\n                return 0\n            left = depth(node.left)\n            right = depth(node.right)\n            self.max_diameter = max(self.max_diameter, left + right)\n            return 1 + max(left, right)\n            \n        depth(root)\n        return self.max_diameter`,
        explanation: [
          { line: 1, text: "Define Solution class." },
          { line: 3, text: "Initialize `max_diameter` property to 0." },
          { line: 5, text: "Define nested recursive helper function `depth`." },
          { line: 6, text: "Return 0 if node is None." },
          { line: 8, text: "Recursively get left and right subtree depths." },
          { line: 10, text: "Update max diameter seen so far with `left + right`." },
          { line: 11, text: "Return height: `1 + max(left, right)`." },
          { line: 13, text: "Call helper function on root." },
          { line: 14, text: "Return calculated maximum diameter." }
        ]
      },
      java: {
        code: `class Solution {\n    private int maxDiameter = 0;\n    \n    public int diameterOfBinaryTree(TreeNode root) {\n        depth(root);\n        return maxDiameter;\n    }\n    \n    private int depth(TreeNode node) {\n        if (node == null) return 0;\n        int left = depth(node.left);\n        int right = depth(node.right);\n        maxDiameter = Math.max(maxDiameter, left + right);\n        return 1 + Math.max(left, right);\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare Solution wrapper class." },
          { line: 2, text: "Private global diameter tracker." },
          { line: 4, text: "Main method calling helper method `depth`." },
          { line: 9, text: "Helper method `depth` returning node height." },
          { line: 10, text: "Base case: return 0." },
          { line: 11, text: "Compute left subtree height." },
          { line: 12, text: "Compute right subtree height." },
          { line: 13, text: "Update global diameter." },
          { line: 14, text: "Return current subtree height." }
        ]
      }
    }
  },
  {
    id: 98,
    name: "Validate Binary Search Tree",
    difficulty: "Medium",
    topic: "BST",
    leetcodeUrl: "https://leetcode.com/problems/validate-binary-search-tree/",
    tip: "A BST is valid if every node is within a valid range `(min, max)`. Pass these bounds recursively. For left child, range is `(min, node->val)`. For right child, range is `(node->val, max)`.",
    description: "Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).",
    chatbotData: {
      intuition: "It is a common mistake to only check if a node's left child is smaller and right child is larger. In a valid BST, *all* nodes in the left subtree must be smaller than the root, and *all* nodes in the right subtree must be larger. To enforce this, we write a recursive helper function that accepts validation bounds: `isValid(node, minBound, maxBound)`. For the left child, the maximum bound becomes the parent's value. For the right child, the minimum bound becomes the parent's value.",
      complexity: "Time Complexity: O(N) because we check each of the N nodes exactly once.\nSpace Complexity: O(H) where H is the height of the tree, representing the call stack.",
      edgeCases: "1. Node value is equal to min/max integer (e.g. `2147483647`): using `long` values or pointers in C++/Java prevents overflow bugs.",
      debugging: "Use range limits that can represent values larger/smaller than standard integer limits (like using `long long` in C++ or `Long` in Java), because node values in LeetCode test cases can equal `INT_MAX` or `INT_MIN`."
    },
    solutions: {
      cpp: {
        code: `bool validate(TreeNode* node, long long minVal, long long maxVal) {\n    if (node == nullptr) return true;\n    if (node->val <= minVal || node->val >= maxVal) return false;\n    return validate(node->left, minVal, node->val) && \n           validate(node->right, node->val, maxVal);\n}\n\nbool isValidBST(TreeNode* root) {\n    return validate(root, LLONG_MIN, LLONG_MAX);\n}`,
        explanation: [
          { line: 1, text: "Helper function declaration taking node pointer and `long long` min/max boundaries." },
          { line: 2, text: "Base case: an empty tree is a valid BST: return true." },
          { line: 3, text: "Check if the current node's value violates the boundary conditions. If it does, return false." },
          { line: 4, text: "Validate the left subtree: update `maxVal` to the current node's value." },
          { line: 5, text: "Validate the right subtree: update `minVal` to the current node's value. Return true only if both sides are valid." },
          { line: 8, text: "Main function: calls the helper function with the absolute minimum and maximum values possible for a 64-bit integer." }
        ]
      },
      python: {
        code: `def isValidBST(root: Optional[TreeNode]) -> bool:\n    def validate(node, min_val, max_val):\n        if not node:\n            return True\n        if node.val <= min_val or node.val >= max_val:\n            return False\n        return validate(node.left, min_val, node.val) and \\\n               validate(node.right, node.val, max_val)\n               \n    return validate(root, float('-inf'), float('inf'))`,
        explanation: [
          { line: 1, text: "Define isValidBST function." },
          { line: 2, text: "Define nested helper function `validate` taking node and boundary values." },
          { line: 3, text: "Empty node is valid: return True." },
          { line: 5, text: "Check if value is out of bounds." },
          { line: 7, text: "Recursively check left and right subtrees with updated bounds." },
          { line: 10, text: "Call helper using negative and positive infinity as initial boundaries." }
        ]
      },
      java: {
        code: `public boolean isValidBST(TreeNode root) {\n    return validate(root, null, null);\n}\n\nprivate boolean validate(TreeNode node, Integer min, Integer max) {\n    if (node == null) return true;\n    if ((min != null && node.val <= min) || (max != null && node.val >= max)) {\n        return false;\n    }\n    return validate(node.left, min, node.val) && validate(node.right, node.val, max);\n}`,
        explanation: [
          { line: 1, text: "Declare main method." },
          { line: 2, text: "Call helper method starting with null bounds (null means infinity)." },
          { line: 5, text: "Declare helper method using Integer wrappers to allow null pointers for infinity representation." },
          { line: 6, text: "Return true for null subtrees." },
          { line: 7, text: "Check boundary limits, skipping checks if min/max are null." },
          { line: 10, text: "Recursively call validate on left (max=node.val) and right (min=node.val) subtrees." }
        ]
      }
    }
  },
  {
    id: 102,
    name: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    topic: "BFS / Tree",
    leetcodeUrl: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    tip: "Use BFS with a Queue. In each step, record the size of the queue. This size represents the number of nodes in the current level. Loop `size` times to process only the current level.",
    description: "Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    chatbotData: {
      intuition: "To traverse a tree level-by-level, we use Breadth-First Search (BFS) with a queue. We push the root onto the queue. While the queue is not empty, we find its current size, which is exactly the count of nodes in the current level. We loop `size` times, popping nodes from the queue, adding their values to a list for the current level, and pushing their children onto the queue. This separates each level clearly in the output.",
      complexity: "Time Complexity: O(N) because we visit each of the N nodes exactly once.\nSpace Complexity: O(N) since the queue holds up to N/2 nodes (the maximum width of the tree) at the bottom level.",
      edgeCases: "1. Empty tree: returns empty list.\n2. Only left children (skewed): level order list has 1 element per list, handled correctly.",
      debugging: "Remember to store the queue size *before* starting the level loop. Inside the level loop, new children are added to the queue, which increases queue size. If you use `q.size()` directly in the loop condition, it will cause an infinite loop."
    },
    solutions: {
      cpp: {
        code: `vector<vector<int>> levelOrder(TreeNode* root) {\n    if (root == nullptr) return {};\n    vector<vector<int>> result;\n    queue<TreeNode*> q;\n    q.push(root);\n    while (!q.empty()) {\n        int levelSize = q.size();\n        vector<int> currentLevel;\n        for (int i = 0; i < levelSize; i++) {\n            TreeNode* node = q.front();\n            q.pop();\n            currentLevel.push_back(node->val);\n            if (node->left != nullptr) q.push(node->left);\n            if (node->right != nullptr) q.push(node->right);\n        }\n        result.push_back(currentLevel);\n    }\n    return result;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes root pointer, returns a 2D vector of level values." },
          { line: 2, text: "If tree is empty, return an empty vector." },
          { line: 3, text: "Declare `result` vector." },
          { line: 4, text: "Declare queue `q` to store nodes to visit." },
          { line: 5, text: "Push the root node onto the queue." },
          { line: 6, text: "Loop while there are nodes remaining to process." },
          { line: 7, text: "Record `levelSize`, which is the count of nodes in the current level." },
          { line: 8, text: "Create vector `currentLevel` to store values of this level." },
          { line: 9, text: "Loop exactly `levelSize` times to process only current level nodes." },
          { line: 10, text: "Get front node in queue." },
          { line: 11, text: "Pop the node from queue." },
          { line: 12, text: "Add node value to current level list." },
          { line: 13, text: "Push left child if it exists." },
          { line: 14, text: "Push right child if it exists." },
          { line: 16, text: "Push the completed level vector into our results." }
        ]
      },
      python: {
        code: `from collections import deque\n\ndef levelOrder(root: Optional[TreeNode]) -> list[list[int]]:\n    if not root:\n        return []\n    result = []\n    q = deque([root])\n    while q:\n        level_size = len(q)\n        current_level = []\n        for _ in range(level_size):\n            node = q.popleft()\n            current_level.append(node.val)\n            if node.left:\n                q.append(node.left)\n            if node.right:\n                q.append(node.right)\n        result.append(current_level)\n    return result`,
        explanation: [
          { line: 1, text: "Import `deque` from collections." },
          { line: 3, text: "Define levelOrder function." },
          { line: 4, text: "Return empty list for empty trees." },
          { line: 7, text: "Initialize queue with root." },
          { line: 8, text: "Loop while queue is not empty." },
          { line: 9, text: "Get count of nodes in this level." },
          { line: 11, text: "Iterate level size times." },
          { line: 12, text: "Pop node from front of queue." },
          { line: 13, text: "Add node value to current level list." },
          { line: 14, text: "Append children to back of queue." },
          { line: 18, text: "Append level list to result." }
        ]
      },
      java: {
        code: `public List<List<Integer>> levelOrder(TreeNode root) {\n    if (root == null) return new ArrayList<>();\n    List<List<Integer>> result = new ArrayList<>();\n    Queue<TreeNode> q = new LinkedList<>();\n    q.add(root);\n    while (!q.isEmpty()) {\n        int levelSize = q.size();\n        List<Integer> currentLevel = new ArrayList<>();\n        for (int i = 0; i < levelSize; i++) {\n            TreeNode node = q.remove();\n            currentLevel.add(node.val);\n            if (node.left != null) q.add(node.left);\n            if (node.right != null) q.add(node.right);\n        }\n        result.add(currentLevel);\n    }\n    return result;\n}`,
        explanation: [
          { line: 1, text: "Declare levelOrder method." },
          { line: 2, text: "Handle null root case." },
          { line: 4, text: "Initialize BFS queue." },
          { line: 5, text: "Add root to queue." },
          { line: 6, text: "BFS loop." },
          { line: 7, text: "Get number of nodes in this level." },
          { line: 9, text: "Process current level nodes." },
          { line: 10, text: "Pop node from queue." },
          { line: 12, text: "Add child nodes to queue." },
          { line: 15, text: "Add level list to result." }
        ]
      }
    }
  },
  {
    id: 199,
    name: "Binary Tree Right Side View",
    difficulty: "Medium",
    topic: "BFS / Tree",
    leetcodeUrl: "https://leetcode.com/problems/binary-tree-right-side-view/",
    tip: "Use level order traversal (BFS). For each level, append only the LAST node of that level (index `size - 1`) to the result.",
    description: "Given the `root` of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
    chatbotData: {
      intuition: "Standing on the right side of a tree, you can only see the rightmost node of each level. We can use level-order traversal (BFS) with a queue. When we process a level, we loop through all nodes in that level. If it is the last node of the current level loop (index `i == levelSize - 1`), we add its value to our result list.",
      complexity: "Time Complexity: O(N) since we traverse each node once.\nSpace Complexity: O(N) or O(W) where W is the maximum width of the tree, representing the queue size.",
      edgeCases: "1. Empty tree: returns empty list.\n2. Left-skewed tree: the leftmost nodes are visible because they are the *only* nodes at those levels, handled correctly.",
      debugging: "Check that you append to result when `i == levelSize - 1`, which represents the rightmost node. Do not check `node.right == null` as that does not tell you if it's the rightmost node visible from the side."
    },
    solutions: {
      cpp: {
        code: `vector<int> rightSideView(TreeNode* root) {\n    if (root == nullptr) return {};\n    vector<int> result;\n    queue<TreeNode*> q;\n    q.push(root);\n    while (!q.empty()) {\n        int levelSize = q.size();\n        for (int i = 0; i < levelSize; i++) {\n            TreeNode* node = q.front();\n            q.pop();\n            if (i == levelSize - 1) {\n                result.push_back(node->val);\n            }\n            if (node->left != nullptr) q.push(node->left);\n            if (node->right != nullptr) q.push(node->right);\n        }\n    }\n    return result;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes root pointer, returns vector of visible right-side values." },
          { line: 2, text: "Return empty vector for empty trees." },
          { line: 4, text: "Initialize BFS queue." },
          { line: 5, text: "Push root node." },
          { line: 6, text: "BFS loop." },
          { line: 7, text: "Find count of nodes in the current level." },
          { line: 8, text: "Loop through current level nodes." },
          { line: 9, text: "Pop node from front." },
          { line: 11, text: "If `i == levelSize - 1`, this is the rightmost node of this level: add its value to `result`." },
          { line: 14, text: "Queue left and right children for the next level." }
        ]
      },
      python: {
        code: `from collections import deque\n\ndef rightSideView(root: Optional[TreeNode]) -> list[int]:\n    if not root:\n        return []\n    result = []\n    q = deque([root])\n    while q:\n        level_size = len(q)\n        for i in range(level_size):\n            node = q.popleft()\n            if i == level_size - 1:\n                result.append(node.val)\n            if node.left:\n                q.append(node.left)\n            if node.right:\n                q.append(node.right)\n    return result`,
        explanation: [
          { line: 1, text: "Import deque." },
          { line: 3, text: "Define rightSideView function." },
          { line: 4, text: "Check empty root." },
          { line: 7, text: "Initialize queue." },
          { line: 8, text: "BFS queue loop." },
          { line: 9, text: "Get level size." },
          { line: 10, text: "Loop level indices." },
          { line: 12, text: "If current index is `level_size - 1`, append to output." },
          { line: 14, text: "Append children to queue." }
        ]
      },
      java: {
        code: `public List<Integer> rightSideView(TreeNode root) {\n    if (root == null) return new ArrayList<>();\n    List<Integer> result = new ArrayList<>();\n    Queue<TreeNode> q = new LinkedList<>();\n    q.add(root);\n    while (!q.isEmpty()) {\n        int levelSize = q.size();\n        for (int i = 0; i < levelSize; i++) {\n            TreeNode node = q.remove();\n            if (i == levelSize - 1) {\n                result.add(node.val);\n            }\n            if (node.left != null) q.add(node.left);\n            if (node.right != null) q.add(node.right);\n        }\n    }\n    return result;\n}`,
        explanation: [
          { line: 1, text: "Declare rightSideView method." },
          { line: 2, text: "Handle null head." },
          { line: 4, text: "Initialize Queue." },
          { line: 6, text: "Loop while Queue is not empty." },
          { line: 7, text: "Determine level node count." },
          { line: 8, text: "Iterate nodes." },
          { line: 10, text: "If index matches `levelSize - 1`, add to list." },
          { line: 13, text: "Add children to queue." }
        ]
      }
    }
  },
  {
    id: 230,
    name: "Kth Smallest Element in a BST",
    difficulty: "Medium",
    topic: "BST",
    leetcodeUrl: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    tip: "An in-order traversal (Left, Root, Right) of a BST visits nodes in sorted ascending order. Perform in-order traversal, decrement `k` at each visit. When `k == 0`, record the node's value and stop.",
    description: "Given the `root` of a binary search tree, and an integer `k`, return the `k`th smallest value (1-indexed) of all the values of the nodes in the tree.",
    chatbotData: {
      intuition: "In a Binary Search Tree, an In-Order traversal (Left -> Node -> Right) visits elements in sorted, ascending order. We can perform an in-order traversal and maintain a counter. Each time we 'visit' a node (after finishing its left subtree), we decrement `k` by 1. When `k` reaches 0, the current node is the Kth smallest element, so we store its value and terminate the traversal.",
      complexity: "Time Complexity: O(N) or O(H + K) where H is the tree height. We search until we find the Kth element.\nSpace Complexity: O(H) representing the recursive call stack.",
      edgeCases: "1. K = 1: returns the minimum element (leftmost leaf node).\n2. K is the size of the tree: returns the maximum element (rightmost node).",
      debugging: "Use a member variable or helper return structure to pass the updated value of `k` across recursive calls, so the decrement propagates correctly."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    int count;\n    int result = -1;\n    \n    void inorder(TreeNode* node) {\n        if (node == nullptr || count == 0) return;\n        inorder(node->left);\n        count--;\n        if (count == 0) {\n            result = node->val;\n            return;\n        }\n        inorder(node->right);\n    }\n\npublic:\n    int kthSmallest(TreeNode* root, int k) {\n        count = k;\n        inorder(root);\n        return result;\n    }\n};`,
        explanation: [
          { line: 3, text: "Declare class member variable `count` to track remaining visits needed." },
          { line: 4, text: "Declare member variable `result` to store the Kth smallest value." },
          { line: 6, text: "In-order traversal helper function." },
          { line: 7, text: "Base case: return if node is null OR if we already found the result (`count == 0`)." },
          { line: 8, text: "Traverse the left subtree recursively." },
          { line: 9, text: "Decrement visit counter `count`." },
          { line: 10, text: "If `count` reaches 0, we found our target node." },
          { line: 11, text: "Save the current node's value in `result`." },
          { line: 14, text: "Traverse the right subtree." },
          { line: 18, text: "Main function: initializes `count` to `k`, triggers in-order DFS, and returns the result." }
        ]
      },
      python: {
        code: `class Solution:\n    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:\n        self.k = k\n        self.result = None\n        \n        def inorder(node):\n            if not node or self.result is not None:\n                return\n            inorder(node.left)\n            self.k -= 1\n            if self.k == 0:\n                self.result = node.val\n                return\n            inorder(node.right)\n            \n        inorder(root)\n        return self.result`,
        explanation: [
          { line: 1, text: "Define Solution class." },
          { line: 3, text: "Store K in self.k so it is accessible in nested functions." },
          { line: 4, text: "Initialize result to None." },
          { line: 6, text: "Define recursive inorder helper." },
          { line: 7, text: "Exit early if node is None or result is already found." },
          { line: 9, text: "Traverse left child." },
          { line: 10, text: "Decrement `self.k`." },
          { line: 11, text: "If counter is 0, record value and exit." },
          { line: 14, text: "Traverse right child." }
        ]
      },
      java: {
        code: `class Solution {\n    private int count;\n    private int result = -1;\n    \n    public int kthSmallest(TreeNode root, int k) {\n        count = k;\n        inorder(root);\n        return result;\n    }\n    \n    private void inorder(TreeNode node) {\n        if (node == null || count == 0) return;\n        inorder(node.left);\n        count--;\n        if (count == 0) {\n            result = node.val;\n            return;\n        }\n        inorder(node.right);\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare Solution wrapper class." },
          { line: 2, text: "Private counters." },
          { line: 5, text: "Main function calling inorder traversal." },
          { line: 11, text: "Helper method performing recursive in-order traversal." },
          { line: 12, text: "Base case: return if null or result found." },
          { line: 13, text: "Traverse left child." },
          { line: 14, text: "Decrement counter." },
          { line: 15, text: "Set result if counter hits 0." },
          { line: 19, text: "Traverse right child." }
        ]
      }
    }
  },
  {
    id: 236,
    name: "LCA of Binary Tree",
    difficulty: "Medium",
    topic: "Tree / DFS",
    leetcodeUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    tip: "Use DFS. Recursively search left and right subtrees. If a subtree contains p or q, it returns the node. If both subtrees return non-null, the current node is the LCA.",
    description: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.",
    chatbotData: {
      intuition: "We traverse the tree recursively. If we find `p` or `q`, we return that node. If a node is null, we return null. For any node, we search its left and right subtrees. If the left search returns a node and the right search also returns a node, it means `p` is in one subtree and `q` is in the other, making the current node their Lowest Common Ancestor! If only one side returns a node (non-null), it means both `p` and `q` are located on that side, so we pass that result up.",
      complexity: "Time Complexity: O(N) because we visit each of the N nodes at most once.\nSpace Complexity: O(H) where H is the height of the tree, representing the call stack.",
      edgeCases: "1. One node is the ancestor of another: handles correctly because the search returns the ancestor node first and doesn't need to traverse below it.",
      debugging: "When checking matching targets, check `if (root == p || root == q) return root;` at the beginning of your recursive search."
    },
    solutions: {
      cpp: {
        code: `TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n    if (root == nullptr || root == p || root == q) return root;\n    TreeNode* left = lowestCommonAncestor(root->left, p, q);\n    TreeNode* right = lowestCommonAncestor(root->right, p, q);\n    if (left != nullptr && right != nullptr) {\n        return root;\n    }\n    return (left != nullptr) ? left : right;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes root, p, and q pointers, returns LCA pointer." },
          { line: 2, text: "Base case: if root is null OR matches either `p` or `q`, return `root`." },
          { line: 3, text: "Recursively search for `p` and `q` in the left subtree." },
          { line: 4, text: "Recursively search for `p` and `q` in the right subtree." },
          { line: 5, text: "If both left and right searches return non-null, it means p and q are split across current node: return current node." },
          { line: 8, text: "If only one side is non-null, both nodes lie in that subtree: return the non-null result." }
        ]
      },
      python: {
        code: `def lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:\n    if not root or root == p or root == q:\n        return root\n    left = lowestCommonAncestor(root.left, p, q)\n    right = lowestCommonAncestor(root.right, p, q)\n    if left and right:\n        return root\n    return left if left else right`,
        explanation: [
          { line: 1, text: "Define lowestCommonAncestor function." },
          { line: 2, text: "Base case: return root if null or matching p/q." },
          { line: 4, text: "Search left and right subtrees recursively." },
          { line: 6, text: "If both subtrees returned a node, the current node is the LCA." },
          { line: 8, text: "Otherwise, return the non-None subtree result." }
        ]
      },
      java: {
        code: `public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    if (root == null || root == p || root == q) return root;\n    TreeNode left = lowestCommonAncestor(root.left, p, q);\n    TreeNode right = lowestCommonAncestor(root.right, p, q);\n    if (left != null && right != null) {\n        return root;\n    }\n    return (left != null) ? left : right;\n}`,
        explanation: [
          { line: 1, text: "Declare lowestCommonAncestor method." },
          { line: 2, text: "Check base conditions (null or matching search targets)." },
          { line: 3, text: "Traverse left child." },
          { line: 4, text: "Traverse right child." },
          { line: 5, text: "If both are non-null, root is LCA: return root." },
          { line: 8, text: "Return the non-null subtree result." }
        ]
      }
    }
  },
  {
    id: 124,
    name: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    topic: "Tree / DFS",
    leetcodeUrl: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    tip: "Use post-order DFS. At each node, calculate the max path sum that can go down the left and right subtrees. Ignore negative sums (use `max(0, sum)`). The max path sum passing through the current node is `val + leftSum + rightSum`. Update the global maximum.",
    description: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. Given the `root` of a binary tree, return the maximum path sum of any non-empty path.",
    chatbotData: {
      intuition: "A path can start and end at any node in the tree. For any node, the maximum path sum that *curves* at this node is: `node.val + maxLeftPath + maxRightPath`. We write a recursive DFS function that computes the maximum path sum extending down from a node. If a child's path sum is negative, we ignore it by taking `max(0, childSum)`. At each node, we check if the curved path sum (`node.val + left + right`) is greater than our global maximum, and update it. Then we return `node.val + max(left, right)` to let the parent node extend the path.",
      complexity: "Time Complexity: O(N) because we visit each of the N nodes exactly once.\nSpace Complexity: O(H) where H is the height of the tree, representing the recursion stack.",
      edgeCases: "1. All node values are negative: the code handles this by using a global maximum initialized to `INT_MIN` and updating it with the best single negative node val.",
      debugging: "When passing child sums up, do not return `node.val + left + right`. You can only choose ONE branch (either left or right) to continue a valid path upward. Return `node.val + max(left, right)`."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    int maxSum = INT_MIN;\n    \n    int maxGain(TreeNode* node) {\n        if (node == nullptr) return 0;\n        int leftGain = max(0, maxGain(node->left));\n        int rightGain = max(0, maxGain(node->right));\n        int currentPathSum = node->val + leftGain + rightGain;\n        maxSum = max(maxSum, currentPathSum);\n        return node->val + max(leftGain, rightGain);\n    }\n\npublic:\n    int maxPathSum(TreeNode* root) {\n        maxGain(root);\n        return maxSum;\n    }\n};`,
        explanation: [
          { line: 3, text: "Declare member variable `maxSum` initialized to minimum integer limit." },
          { line: 5, text: "Helper function `maxGain`: calculates one-way max path sum from node." },
          { line: 6, text: "Base case: return 0 for null nodes." },
          { line: 7, text: "Get max gain from left child. If negative, ignore it by using `max(0, ...)`." },
          { line: 8, text: "Get max gain from right child." },
          { line: 9, text: "Calculate the path sum that curves through the current node: `val + leftGain + rightGain`." },
          { line: 10, text: "Update the global `maxSum` with the curved path sum." },
          { line: 11, text: "Return the maximum single path gain extending from this node: `val + max(leftGain, rightGain)`." },
          { line: 15, text: "Main function: starts DFS and returns the updated global maximum path sum." }
        ]
      },
      python: {
        code: `class Solution:\n    def maxPathSum(self, root: Optional[TreeNode]) -> int:\n        self.max_sum = float('-inf')\n        \n        def max_gain(node):\n            if not node:\n                return 0\n            left = max(0, max_gain(node.left))\n            right = max(0, max_gain(node.right))\n            current_path_sum = node.val + left + right\n            self.max_sum = max(self.max_sum, current_path_sum)\n            return node.val + max(left, right)\n            \n        max_gain(root)\n        return self.max_sum`,
        explanation: [
          { line: 1, text: "Define Solution class." },
          { line: 3, text: "Initialize `max_sum` to negative infinity." },
          { line: 5, text: "Define recursive helper `max_gain`." },
          { line: 6, text: "Return 0 if node is None." },
          { line: 8, text: "Calculate left and right gains, discarding negative values." },
          { line: 10, text: "Calculate sum of path curving at current node." },
          { line: 11, text: "Update global maximum sum." },
          { line: 12, text: "Return max branch path sum." },
          { line: 14, text: "Execute search." },
          { line: 15, text: "Return max sum." }
        ]
      },
      java: {
        code: `class Solution {\n    private int maxSum = Integer.MIN_VALUE;\n    \n    public int maxPathSum(TreeNode root) {\n        maxGain(root);\n        return maxSum;\n    }\n    \n    private int maxGain(TreeNode node) {\n        if (node == null) return 0;\n        int left = Math.max(0, maxGain(node.left));\n        int right = Math.max(0, maxGain(node.right));\n        int currentPathSum = node.val + left + right;\n        maxSum = Math.max(maxSum, currentPathSum);\n        return node.val + Math.max(left, right);\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare Solution class." },
          { line: 2, text: "Private global maximum path sum tracker." },
          { line: 4, text: "Main method running DFS." },
          { line: 9, text: "Helper method `maxGain` calculating height path values." },
          { line: 10, text: "Base case: return 0." },
          { line: 11, text: "Recursively get left branch value, discarding if < 0." },
          { line: 12, text: "Recursively get right branch value." },
          { line: 13, text: "Calculate sum when treating current node as path peak." },
          { line: 14, text: "Update global max path sum." },
          { line: 15, text: "Return the best single branch path sum." }
        ]
      }
    }
  }
];
