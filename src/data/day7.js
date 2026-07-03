export const day7Problems = [
  {
    id: 200,
    name: "Number of Islands",
    difficulty: "Medium",
    topic: "Graph / BFS / DFS",
    leetcodeUrl: "https://leetcode.com/problems/number-of-islands/",
    tip: "Iterate through the grid. When you find '1' (land), increment the island count and run DFS (or BFS) to sink the entire island by changing all adjacent '1's to '0's.",
    description: "Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.",
    chatbotData: {
      intuition: "We scan the 2D grid cell by cell. When we find a land cell `'1'`, it means we've discovered a new island. To avoid counting the same island multiple times, we use DFS (or BFS) starting from this cell to visit all connected land cells (up, down, left, right) and mark them as `'0'` (sinking the island). The number of times we initiate this search is the total number of islands.",
      complexity: "Time Complexity: O(M * N) where M is rows and N is columns. We visit each grid cell at most once.\nSpace Complexity: O(M * N) in the worst case (for the DFS recursion stack if the entire grid is land).",
      edgeCases: "1. Empty grid: returns 0.\n2. Grid with no land: returns 0.\n3. Grid with only 1s: starts DFS at (0,0), sinks all cells, returns 1.",
      debugging: "Check that you do not step out of grid bounds when making recursive calls to neighboring cells (`row < 0`, `row >= m`, `col < 0`, `col >= n`)."
    },
    solutions: {
      cpp: {
        code: `void dfs(vector<vector<char>>& grid, int r, int c) {\n    int m = grid.size();\n    int n = grid[0].size();\n    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == '0') return;\n    grid[r][c] = '0'; // sink the land\n    dfs(grid, r - 1, c);\n    dfs(grid, r + 1, c);\n    dfs(grid, r, c - 1);\n    dfs(grid, r, c + 1);\n}\n\nint numIslands(vector<vector<char>>& grid) {\n    if (grid.empty()) return 0;\n    int count = 0;\n    for (int r = 0; r < grid.size(); r++) {\n        for (int c = 0; c < grid[0].size(); c++) {\n            if (grid[r][c] == '1') {\n                count++;\n                dfs(grid, r, c);\n            }\n        }\n    }\n    return count;\n}`,
        explanation: [
          { line: 1, text: "DFS helper: recursively visits and sinks connected land cells." },
          { line: 4, text: "Base case: if coordinates are out of bounds OR cell is water ('0'), return." },
          { line: 5, text: "Sink the current cell by setting it to '0'. This acts as a 'visited' marker." },
          { line: 6, text: "Visit neighbor above." },
          { line: 7, text: "Visit neighbor below." },
          { line: 8, text: "Visit neighbor to the left." },
          { line: 9, text: "Visit neighbor to the right." },
          { line: 12, text: "Main function: returns the number of islands." },
          { line: 15, text: "Double loop to scan the entire 2D grid." },
          { line: 17, text: "If we find an unvisited land cell ('1'), we found a new island." },
          { line: 18, text: "Increment the island count." },
          { line: 19, text: "Run DFS to sink all connected land cells of this island." }
        ]
      },
      python: {
        code: `def numIslands(grid: list[list[str]]) -> int:\n    if not grid:\n        return 0\n    m, n = len(grid), len(grid[0])\n    count = 0\n    \n    def dfs(r, c):\n        if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] == '0':\n            return\n        grid[r][c] = '0'  # sink land\n        dfs(r - 1, c)\n        dfs(r + 1, c)\n        dfs(r, c - 1)\n        dfs(r, c + 1)\n        \n    for r in range(m):\n        for c in range(n):\n            if grid[r][c] == '1':\n                count += 1\n                dfs(r, c)\n    return count`,
        explanation: [
          { line: 1, text: "Define numIslands function." },
          { line: 4, text: "Calculate rows and columns." },
          { line: 7, text: "Define nested DFS helper function." },
          { line: 8, text: "Check bounds and water state." },
          { line: 10, text: "Mark cell as water to avoid visiting again." },
          { line: 11, text: "Recursively sink all neighbors." },
          { line: 16, text: "Scan the grid. When land is found, increment counter and trigger DFS." }
        ]
      },
      java: {
        code: `public int numIslands(char[][] grid) {\n    if (grid == null || grid.length == 0) return 0;\n    int m = grid.length, n = grid[0].length;\n    int count = 0;\n    for (int r = 0; r < m; r++) {\n        for (int c = 0; c < n; c++) {\n            if (grid[r][c] == '1') {\n                count++;\n                dfs(grid, r, c);\n            }\n        }\n    }\n    return count;\n}\n\nprivate void dfs(char[][] grid, int r, int c) {\n    int m = grid.length, n = grid[0].length;\n    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == '0') return;\n    grid[r][c] = '0';\n    dfs(grid, r - 1, c);\n    dfs(grid, r + 1, c);\n    dfs(grid, r, c - 1);\n    dfs(grid, r, c + 1);\n}`,
        explanation: [
          { line: 1, text: "Declare main method." },
          { line: 5, text: "Scan grid cells using rows and cols indices." },
          { line: 7, text: "If unvisited land, increment count and sink island." },
          { line: 16, text: "Helper method dfs for depth-first island sinking." },
          { line: 18, text: "Boundary and water checks." },
          { line: 19, text: "Mark cell visited ('0')." },
          { line: 20, text: "Recurse into neighbors." }
        ]
      }
    }
  },
  {
    id: 133,
    name: "Clone Graph",
    difficulty: "Medium",
    topic: "Graph / DFS",
    leetcodeUrl: "https://leetcode.com/problems/clone-graph/",
    tip: "Use DFS and a Hash Map. The hash map maps `originalNode -> clonedNode`. When visiting a node, if it is in the map, return the clone. Otherwise, clone it, save in map, and recursively clone neighbors.",
    description: "Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.",
    chatbotData: {
      intuition: "A deep copy means creating new node instances with the same values and structure. Because the graph can have cycles, if we just copy nodes recursively we will enter an infinite loop. We use a Hash Map `originalNode -> clonedNode` to keep track of nodes we have already copied. When we visit a node, if it's already in our map, we return its clone. If not, we create a new clone, put it in the map, and recursively copy all its neighbors, appending them to the clone's neighbors list.",
      complexity: "Time Complexity: O(V + E) where V is vertices and E is edges, since we visit each node and traverse each edge once.\nSpace Complexity: O(V) to store the clone mappings in the hash map and the DFS recursion stack.",
      edgeCases: "1. Empty graph (null node): returns null.\n2. Single node: returns the single cloned node with an empty neighbors list.",
      debugging: "Be sure to insert the cloned node into the map *before* recursively cloning its neighbors. If you do it after, circular connections will lead to an infinite loop and crash your program."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    unordered_map<Node*, Node*> visited;\n\npublic:\n    Node* cloneGraph(Node* node) {\n        if (node == nullptr) return nullptr;\n        if (visited.count(node)) return visited[node];\n        Node* clone = new Node(node->val);\n        visited[node] = clone;\n        for (Node* neighbor : node->neighbors) {\n            clone->neighbors.push_back(cloneGraph(neighbor));\n        }\n        return clone;\n    }\n};`,
        explanation: [
          { line: 3, text: "Declare a hash map `visited` to store mappings of `originalNode -> clonedNode`." },
          { line: 6, text: "Main function: returns the cloned graph." },
          { line: 7, text: "If the input node is null, return nullptr." },
          { line: 8, text: "If the node has already been cloned, return its clone from the map." },
          { line: 9, text: "Create a new clone node with the original node's value." },
          { line: 10, text: "Store the mapping in our `visited` map *before* cloning neighbors." },
          { line: 11, text: "Loop through each neighbor of the original node." },
          { line: 12, text: "Recursively clone the neighbor and append the result to our clone's neighbors list." },
          { line: 14, text: "Return the cloned node." }
        ]
      },
      python: {
        code: `class Solution:\n    def cloneGraph(self, node: 'Node') -> 'Node':\n        visited = {}\n        \n        def dfs(curr):\n            if not curr:\n                return None\n            if curr in visited:\n                return visited[curr]\n            clone = Node(curr.val)\n            visited[curr] = clone\n            for neighbor in curr.neighbors:\n                clone.neighbors.append(dfs(neighbor))\n            return clone\n            \n        return dfs(node)`,
        explanation: [
          { line: 1, text: "Define Solution class." },
          { line: 3, text: "Create empty dictionary `visited`." },
          { line: 5, text: "Define recursive DFS function." },
          { line: 8, text: "If node already cloned, return the clone from dictionary." },
          { line: 10, text: "Create a new Node copy." },
          { line: 11, text: "Store copy in `visited`." },
          { line: 12, text: "Recursively clone neighbors and append to copy's neighbors list." }
        ]
      },
      java: {
        code: `class Solution {\n    private Map<Node, Node> visited = new HashMap<>();\n    \n    public Node cloneGraph(Node node) {\n        if (node == null) return null;\n        if (visited.containsKey(node)) return visited.get(node);\n        Node clone = new Node(node.val);\n        visited.put(node, clone);\n        for (Node neighbor : node.neighbors) {\n            clone.neighbors.add(cloneGraph(neighbor));\n        }\n        return clone;\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare Solution class." },
          { line: 2, text: "Initialize hash map to track cloned nodes." },
          { line: 5, text: "Return null if input node is null." },
          { line: 6, text: "If node is in map, return the clone." },
          { line: 7, text: "Instantiate a new node." },
          { line: 8, text: "Put original and clone into map." },
          { line: 9, text: "Loop neighbors, recursively clone, and add to list." }
        ]
      }
    }
  },
  {
    id: 207,
    name: "Course Schedule",
    difficulty: "Medium",
    topic: "Topological Sort",
    leetcodeUrl: "https://leetcode.com/problems/course-schedule/",
    tip: "This is a cycle detection problem in a directed graph. Represent prerequisites as an adjacency list. Use DFS with a `visited` array (0 = unvisited, 1 = visiting, 2 = visited). If you visit a node that is 'visiting', a cycle exists.",
    description: "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.\nReturn `true` if you can finish all courses. Otherwise, return `false`.",
    chatbotData: {
      intuition: "Taking courses with prerequisites represents a Directed Graph where courses are nodes and prerequisites are directed edges. Finishing all courses is only possible if there are no circular dependencies (cycles) in this graph. We can represent this with 3 states for each node during DFS: 0 (Unvisited), 1 (Visiting - currently in DFS recursion path), and 2 (Visited - fully processed). If DFS encounters a node in state 1, it means we found a cycle (back-edge), so we return false.",
      complexity: "Time Complexity: O(V + E) where V is `numCourses` and E is prerequisites count, since we build the adjacency list and run DFS visiting each node/edge once.\nSpace Complexity: O(V + E) to store the adjacency list graph and the DFS state arrays.",
      edgeCases: "1. No prerequisites: returns true.\n2. Self loop (course depends on itself): returns false.\n3. Multiple disconnected subgraphs: DFS loops over all nodes, handling it correctly.",
      debugging: "Remember to reset the state of the current node to 2 (Visited) after successfully finishing its DFS traversal, so that subsequent DFS calls do not mistake it for a cycle."
    },
    solutions: {
      cpp: {
        code: `bool hasCycle(int node, vector<vector<int>>& adj, vector<int>& visited) {\n    if (visited[node] == 1) return true; // cycle detected\n    if (visited[node] == 2) return false;\n    visited[node] = 1; // mark as visiting\n    for (int neighbor : adj[node]) {\n        if (hasCycle(neighbor, adj, visited)) return true;\n    }\n    visited[node] = 2; // mark as fully processed\n    return false;\n}\n\nbool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n    vector<vector<int>> adj(numCourses);\n    for (auto pre : prerequisites) {\n        adj[pre[1]].push_back(pre[0]);\n    }\n    vector<int> visited(numCourses, 0); // 0=unvisited, 1=visiting, 2=visited\n    for (int i = 0; i < numCourses; i++) {\n        if (hasCycle(i, adj, visited)) return false;\n    }\n    return true;\n}`,
        explanation: [
          { line: 1, text: "Helper function: returns true if a cycle exists starting from this node." },
          { line: 2, text: "If node is state 1 (visiting), we hit it again in the same DFS path: cycle detected, return true." },
          { line: 3, text: "If node is state 2 (visited), it was already checked and is safe: return false." },
          { line: 4, text: "Mark current node as 1 (visiting)." },
          { line: 5, text: "Iterate through all nodes depending on this course." },
          { line: 6, text: "Recursively check for cycles. If any branch has a cycle, return true." },
          { line: 8, text: "Mark current node as 2 (visited) once all branches are verified safe." },
          { line: 12, text: "Main function: builds adjacency list and runs cycle checks." },
          { line: 13, text: "Initialize adjacency list." },
          { line: 14, text: "Populate adjacency list using prerequisites. Course `pre[1]` must be taken before `pre[0]`." },
          { line: 17, text: "Initialize `visited` array of size `numCourses` with 0s (unvisited)." },
          { line: 18, text: "Check every course. If any course starts a path containing a cycle, return false." }
        ]
      },
      python: {
        code: `def canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:\n    adj = [[] for _ in range(numCourses)]\n    for course, pre in prerequisites:\n        adj[pre].append(course)\n    visited = [0] * numCourses  # 0=unvisited, 1=visiting, 2=visited\n    \n    def hasCycle(node):\n        if visited[node] == 1:\n            return True\n        if visited[node] == 2:\n            return False\n        visited[node] = 1\n        for neighbor in adj[node]:\n            if hasCycle(neighbor):\n                return True\n        visited[node] = 2\n        return False\n        \n    for i in range(numCourses):\n        if hasCycle(i):\n            return False\n    return True`,
        explanation: [
          { line: 1, text: "Define canFinish function." },
          { line: 2, text: "Build adjacency list." },
          { line: 5, text: "Initialize visited status array." },
          { line: 7, text: "Define DFS cycle checker." },
          { line: 8, text: "If node is 1 (visiting), cycle exists." },
          { line: 12, text: "Mark node visiting." },
          { line: 13, text: "Run DFS on all dependents." },
          { line: 16, text: "Mark node fully processed (visited)." },
          { line: 19, text: "Verify cycle status for every course in the graph." }
        ]
      },
      java: {
        code: `public boolean canFinish(int numCourses, int[][] prerequisites) {\n    List<List<Integer>> adj = new ArrayList<>();\n    for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());\n    for (int[] pre : prerequisites) {\n        adj.get(pre[1]).add(pre[0]);\n    }\n    int[] visited = new int[numCourses]; // 0=unvisited, 1=visiting, 2=visited\n    for (int i = 0; i < numCourses; i++) {\n        if (hasCycle(i, adj, visited)) return false;\n    }\n    return true;\n}\n\nprivate boolean hasCycle(int node, List<List<Integer>> adj, int[] visited) {\n    if (visited[node] == 1) return true;\n    if (visited[node] == 2) return false;\n    visited[node] = 1;\n    for (int neighbor : adj.get(node)) {\n        if (hasCycle(neighbor, adj, visited)) return true;\n    }\n    visited[node] = 2;\n    return false;\n}`,
        explanation: [
          { line: 1, text: "Declare canFinish method." },
          { line: 2, text: "Initialize adjacency list using nested lists." },
          { line: 4, text: "Populate adjacency list." },
          { line: 7, text: "Create visited state array." },
          { line: 8, text: "Run cycle checker on all courses." },
          { line: 14, text: "Helper method hasCycle." },
          { line: 15, text: "Verify visited states: return true if visiting, false if visited." },
          { line: 17, text: "Set visiting state (1)." },
          { line: 18, text: "Loop dependents." }
        ]
      }
    }
  },
  {
    id: 210,
    name: "Course Schedule II",
    difficulty: "Medium",
    topic: "Topological Sort",
    leetcodeUrl: "https://leetcode.com/problems/course-schedule-ii/",
    tip: "Use DFS Topological Sort. Keep a visited array and a stack (or list). Run DFS; after visiting all neighbors of a course, push it onto the stack. The reversed stack is the correct order.",
    description: "Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.",
    chatbotData: {
      intuition: "This is an extension of Course Schedule I. Instead of just checking for cycles, we need to return the topological order of the directed graph. We use DFS with cycle detection (states 0, 1, 2). When a node is fully processed (state 2, meaning all its dependencies have been traversed), we push it onto a stack or list. Since DFS goes deep first, a course is pushed only *after* all courses that depend on it are visited. Reversing this list gives us the correct order.",
      complexity: "Time Complexity: O(V + E) where V is `numCourses` and E is prerequisites count.\nSpace Complexity: O(V + E) to store adjacency lists, recursion stack, and result arrays.",
      edgeCases: "1. Impossible scheduling (cycle exists): returns empty array `[]`.\n2. Disconnected graph components: handled correctly by exploring all unvisited nodes in outer loop.",
      debugging: "If a cycle is detected during DFS, return an empty array immediately. Ensure you reverse the final order list if you add elements after their recursive calls finish."
    },
    solutions: {
      cpp: {
        code: `class Solution {\nprivate:\n    bool hasCycle(int node, vector<vector<int>>& adj, vector<int>& visited, vector<int>& order) {\n        if (visited[node] == 1) return true;\n        if (visited[node] == 2) return false;\n        visited[node] = 1;\n        for (int neighbor : adj[node]) {\n            if (hasCycle(neighbor, adj, visited, order)) return true;\n        }\n        visited[node] = 2;\n        order.push_back(node); // add to topological order after processing dependencies\n        return false;\n    }\n\npublic:\n    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {\n        vector<vector<int>> adj(numCourses);\n        for (auto pre : prerequisites) {\n            adj[pre[1]].push_back(pre[0]);\n        }\n        vector<int> visited(numCourses, 0);\n        vector<int> order;\n        for (int i = 0; i < numCourses; i++) {\n            if (hasCycle(i, adj, visited, order)) return {};\n        }\n        reverse(order.begin(), order.end());\n        return order;\n    }\n};`,
        explanation: [
          { line: 3, text: "Helper function returns true if a cycle is found. Otherwise populates `order`." },
          { line: 11, text: "Push the node into `order` list after all its dependent nodes have been processed." },
          { line: 16, text: "Main function: returns sorted order list." },
          { line: 17, text: "Build adjacency list." },
          { line: 21, text: "Initialize `visited` tracker." },
          { line: 23, text: "Loop through all courses. If a cycle is detected anywhere, return empty vector `{}`." },
          { line: 26, text: "Reverse the `order` list because the leaves (dependent courses) were added first." }
        ]
      },
      python: {
        code: `def findOrder(numCourses: int, prerequisites: list[list[int]]) -> list[int]:\n    adj = [[] for _ in range(numCourses)]\n    for course, pre in prerequisites:\n        adj[pre].append(course)\n    visited = [0] * numCourses\n    order = []\n    \n    def dfs(node):\n        if visited[node] == 1:\n            return True\n        if visited[node] == 2:\n            return False\n        visited[node] = 1\n        for neighbor in adj[node]:\n            if dfs(neighbor):\n                return True\n        visited[node] = 2\n        order.append(node)\n        return False\n        \n    for i in range(numCourses):\n        if dfs(i):\n            return []\n    return order[::-1]`,
        explanation: [
          { line: 1, text: "Define findOrder function." },
          { line: 2, text: "Initialize adjacency lists." },
          { line: 5, text: "Create visited tracker and order list." },
          { line: 8, text: "DFS cycle checker and topological sorter." },
          { line: 18, text: "Append course to `order` after visiting all dependent nodes." },
          { line: 21, text: "Check all courses. Return empty list if cycle detected." },
          { line: 24, text: "Return the reversed order list using slice notation `[::-1]`." }
        ]
      },
      java: {
        code: `class Solution {\n    private List<Integer> order = new ArrayList<>();\n    \n    public int[] findOrder(int numCourses, int[][] prerequisites) {\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());\n        for (int[] pre : prerequisites) {\n            adj.get(pre[1]).add(pre[0]);\n        }\n        int[] visited = new int[numCourses];\n        for (int i = 0; i < numCourses; i++) {\n            if (hasCycle(i, adj, visited)) return new int[0];\n        }\n        int[] result = new int[numCourses];\n        for (int i = 0; i < numCourses; i++) {\n            result[i] = order.get(numCourses - 1 - i);\n        }\n        return result;\n    }\n    \n    private boolean hasCycle(int node, List<List<Integer>> adj, int[] visited) {\n        if (visited[node] == 1) return true;\n        if (visited[node] == 2) return false;\n        visited[node] = 1;\n        for (int neighbor : adj.get(node)) {\n            if (hasCycle(neighbor, adj, visited)) return true;\n        }\n        visited[node] = 2;\n        order.add(node);\n        return false;\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare Solution class." },
          { line: 2, text: "List to store topological order." },
          { line: 4, text: "Main method to arrange courses." },
          { line: 10, text: "Create visited status array." },
          { line: 11, text: "Run cycle checking DFS." },
          { line: 14, text: "Reconstruct result in reverse order." },
          { line: 21, text: "Helper method hasCycle to detect loops and populate order." }
        ]
      }
    }
  },
  {
    id: 547,
    name: "Number of Provinces",
    difficulty: "Medium",
    topic: "Graph / Union Find",
    leetcodeUrl: "https://leetcode.com/problems/number-of-provinces/",
    tip: "Use DFS. Iterate through the nodes. For each unvisited node, increment the province count and run DFS to visit all directly and indirectly connected nodes, marking them as visited.",
    description: "There are `n` cities. Some of them are connected, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`. A province is a group of directly or indirectly connected cities. Return the total number of provinces.",
    chatbotData: {
      intuition: "This problem asks us to find the number of connected components in an undirected graph. We represent the cities as nodes and connections as edges. We keep a `visited` array for all cities. We loop through each city from 0 to N-1. If a city is not visited, it marks the start of a new province. We increment our province count and start a DFS from this city, traversing all its neighbors (and their neighbors) and marking them as visited.",
      complexity: "Time Complexity: O(N²) because we traverse the adjacency matrix of size N x N.\nSpace Complexity: O(N) to store the visited array and recursion stack.",
      edgeCases: "1. No connections (identity matrix): returns N.\n2. All connected: returns 1.\n3. Disconnected islands of cities: correctly computed.",
      debugging: "In the DFS helper loop `for (int neighbor = 0; neighbor < n; neighbor++)`, verify that `isConnected[node][neighbor] == 1` and the neighbor is unvisited before recursing."
    },
    solutions: {
      cpp: {
        code: `void dfs(int node, vector<vector<int>>& isConnected, vector<bool>& visited) {\n    visited[node] = true;\n    for (int neighbor = 0; neighbor < isConnected.size(); neighbor++) {\n        if (isConnected[node][neighbor] == 1 && !visited[neighbor]) {\n            dfs(neighbor, isConnected, visited);\n        }\n    }\n}\n\nint findCircleNum(vector<vector<int>>& isConnected) {\n    int n = isConnected.size();\n    vector<bool> visited(n, false);\n    int provinces = 0;\n    for (int i = 0; i < n; i++) {\n        if (!visited[i]) {\n            provinces++;\n            dfs(i, isConnected, visited);\n        }\n    }\n    return provinces;\n}`,
        explanation: [
          { line: 1, text: "DFS helper: marks node as visited and recursively visits all its connected neighbors." },
          { line: 2, text: "Mark the current city `node` as visited." },
          { line: 3, text: "Loop through all other cities in the matrix." },
          { line: 4, text: "If city `node` is connected to `neighbor` AND `neighbor` is not yet visited." },
          { line: 5, text: "Run DFS on the neighbor city." },
          { line: 10, text: "Main function: returns province count." },
          { line: 12, text: "Initialize `visited` array of size `n` with `false`." },
          { line: 13, text: "Initialize `provinces` counter to 0." },
          { line: 14, text: "Loop through each city in the network." },
          { line: 15, text: "If city `i` is not visited yet, it starts a new province." },
          { line: 16, text: "Increment province count." },
          { line: 17, text: "Run DFS to mark all connected cities of this province." }
        ]
      },
      python: {
        code: `def findCircleNum(isConnected: list[list[int]]) -> int:\n    n = len(isConnected)\n    visited = [False] * n\n    provinces = 0\n    \n    def dfs(node):\n        visited[node] = True\n        for neighbor in range(n):\n            if isConnected[node][neighbor] == 1 and not visited[neighbor]:\n                dfs(neighbor)\n                \n    for i in range(n):\n        if not visited[i]:\n            provinces += 1\n            dfs(i)\n    return provinces`,
        explanation: [
          { line: 1, text: "Define findCircleNum function." },
          { line: 3, text: "Create visited boolean list." },
          { line: 4, text: "Initialize provinces counter." },
          { line: 6, text: "Define DFS search helper." },
          { line: 7, text: "Mark city as visited." },
          { line: 8, text: "Loop through all possible cities in network." },
          { line: 9, text: "Check connection and visit status before calling recursively." },
          { line: 12, text: "Find unvisited cities, increment province count, and run DFS." }
        ]
      },
      java: {
        code: `public int findCircleNum(int[][] isConnected) {\n    int n = isConnected.length;\n    boolean[] visited = new boolean[n];\n    int provinces = 0;\n    for (int i = 0; i < n; i++) {\n        if (!visited[i]) {\n            provinces++;\n            dfs(i, isConnected, visited);\n        }\n    }\n    return provinces;\n}\n\nprivate void dfs(int node, int[][] isConnected, boolean[] visited) {\n    visited[node] = true;\n    for (int neighbor = 0; neighbor < isConnected.length; neighbor++) {\n        if (isConnected[node][neighbor] == 1 && !visited[neighbor]) {\n            dfs(neighbor, isConnected, visited);\n        }\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare findCircleNum method." },
          { line: 3, text: "Create visited boolean array." },
          { line: 5, text: "Scan through all cities." },
          { line: 7, text: "Increment province count and run DFS for unvisited component." },
          { line: 14, text: "DFS helper method." },
          { line: 15, text: "Mark city visited." },
          { line: 16, text: "Traverse neighbors in adjacency row." }
        ]
      }
    }
  },
  {
    id: 695,
    name: "Max Area of Island",
    difficulty: "Medium",
    topic: "Graph / DFS",
    leetcodeUrl: "https://leetcode.com/problems/max-area-of-island/",
    tip: "Similar to Number of Islands. Instead of just counting islands, make your DFS return the area of the island (`1 + area(neighbors)`). Track the maximum area.",
    description: "You are given an `m x n` binary matrix `grid`. An island is a group of `1`'s (representing land) connected 4-directionally. The area of an island is the number of cells with a value `1` in the island. Return the maximum area of an island in `grid`.",
    chatbotData: {
      intuition: "We scan the grid for land `'1'`. When found, we count how many land cells are connected to it. We write a recursive DFS function `dfs(r, c)` that returns the area of the island starting at `(r, c)`. The base case returns 0 if out of bounds or water. Otherwise, it marks the current cell as 0 (visited) and returns `1 + dfs(up) + dfs(down) + dfs(left) + dfs(right)`. We keep track of the maximum area returned.",
      complexity: "Time Complexity: O(M * N) since we visit each cell in the M x N grid at most once.\nSpace Complexity: O(M * N) for the recursion stack in the worst case.",
      edgeCases: "1. Grid with no land: returns 0.\n2. Grid with only one land cell: returns 1.",
      debugging: "Ensure you return the sum of the DFS calls plus 1 (representing the current cell), and ensure you sink/visit-mark the current cell before recurse calls to prevent infinite recursion loops."
    },
    solutions: {
      cpp: {
        code: `int dfs(vector<vector<int>>& grid, int r, int c) {\n    int m = grid.size();\n    int n = grid[0].size();\n    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == 0) return 0;\n    grid[r][c] = 0; // mark visited\n    return 1 + dfs(grid, r - 1, c) +\n               dfs(grid, r + 1, c) +\n               dfs(grid, r, c - 1) +\n               dfs(grid, r, c + 1);\n}\n\nint maxAreaOfIsland(vector<vector<int>>& grid) {\n    if (grid.empty()) return 0;\n    int maxArea = 0;\n    for (int r = 0; r < grid.size(); r++) {\n        for (int c = 0; c < grid[0].size(); c++) {\n            if (grid[r][c] == 1) {\n                maxArea = max(maxArea, dfs(grid, r, c));\n            }\n        }\n    }\n    return maxArea;\n}`,
        explanation: [
          { line: 1, text: "DFS helper: returns the area of the island containing cell (r, c)." },
          { line: 4, text: "Base case: return 0 if out of bounds or water." },
          { line: 5, text: "Sink the current land cell to mark it visited." },
          { line: 6, text: "Return 1 (current cell) plus the areas of all four neighboring directions recursively." },
          { line: 12, text: "Main function: returns max area." },
          { line: 15, text: "Double loop to scan grid." },
          { line: 17, text: "If land is found, run DFS and update `maxArea` with the larger value." }
        ]
      },
      python: {
        code: `def maxAreaOfIsland(grid: list[list[int]]) -> int:\n    if not grid:\n        return 0\n    m, n = len(grid), len(grid[0])\n    max_area = 0\n    \n    def dfs(r, c):\n        if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] == 0:\n            return 0\n        grid[r][c] = 0  # mark visited\n        return 1 + dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1)\n        \n    for r in range(m):\n        for c in range(n):\n            if grid[r][c] == 1:\n                max_area = max(max_area, dfs(r, c))\n    return max_area`,
        explanation: [
          { line: 1, text: "Define maxAreaOfIsland function." },
          { line: 4, text: "Get dimensions." },
          { line: 7, text: "Define nested DFS helper." },
          { line: 8, text: "Return 0 if bounds are invalid or water." },
          { line: 10, text: "Mark cell visited." },
          { line: 11, text: "Accumulate and return 1 plus neighbors' areas." },
          { line: 13, text: "Loop through grid cells, starting DFS at land nodes." }
        ]
      },
      java: {
        code: `public int maxAreaOfIsland(int[][] grid) {\n    if (grid == null || grid.length == 0) return 0;\n    int m = grid.length, n = grid[0].length;\n    int maxArea = 0;\n    for (int r = 0; r < m; r++) {\n        for (int c = 0; c < n; c++) {\n            if (grid[r][c] == 1) {\n                maxArea = Math.max(maxArea, dfs(grid, r, c));\n            }\n        }\n    }\n    return maxArea;\n}\n\nprivate int dfs(int[][] grid, int r, int c) {\n    int m = grid.length, n = grid[0].length;\n    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == 0) return 0;\n    grid[r][c] = 0;\n    return 1 + dfs(grid, r - 1, c) + dfs(grid, r + 1, c) + dfs(grid, r, c - 1) + dfs(grid, r, c + 1);\n}`,
        explanation: [
          { line: 1, text: "Declare maxAreaOfIsland method." },
          { line: 5, text: "Scan grid." },
          { line: 7, text: "Update max area with DFS output." },
          { line: 15, text: "DFS helper method." },
          { line: 17, text: "Check boundaries." },
          { line: 18, text: "Mark cell visited." },
          { line: 19, text: "Sum and return area." }
        ]
      }
    }
  },
  {
    id: 785,
    name: "Is Graph Bipartite?",
    difficulty: "Medium",
    topic: "Graph / BFS",
    leetcodeUrl: "https://leetcode.com/problems/is-graph-bipartite/",
    tip: "Use BFS/DFS coloring. Color the graph nodes using two colors (0 and 1). For any node, all its neighbors must have the opposite color. If a neighbor already has the same color, the graph is not bipartite.",
    description: "There is an undirected graph with `n` nodes, where each node is numbered between `0` and `n - 1`. Return `true` if the graph is bipartite, or `false` otherwise.",
    chatbotData: {
      intuition: "A graph is bipartite if we can partition its nodes into two independent sets such that no edges exist between nodes in the same set. This is equivalent to coloring the graph with 2 colors (e.g. 1 and -1) such that no two adjacent nodes share the same color. We can traverse the graph using BFS/DFS. We color an uncolored node 1, then traverse its neighbors, coloring them the opposite color (-1). If we see a neighbor that is already colored with the *same* color as the current node, the graph cannot be bipartite.",
      complexity: "Time Complexity: O(V + E) where V is nodes and E is edges, since we color each node and edge at most once.\nSpace Complexity: O(V) to store the color array and BFS queue.",
      edgeCases: "1. Disconnected graph: outer loop over all nodes ensures all components are colored.\n2. Single node or 0 edges: trivially bipartite, returns true.",
      debugging: "Make sure you traverse all nodes in an outer loop `for (int i = 0; i < n; i++)`, as the graph could be disconnected (have multiple separate components)."
    },
    solutions: {
      cpp: {
        code: `bool validColor(int node, int c, vector<vector<int>>& graph, vector<int>& colors) {\n    colors[node] = c;\n    for (int neighbor : graph[node]) {\n        if (colors[neighbor] == colors[node]) return false; // same color neighbor\n        if (colors[neighbor] == 0) {\n            if (!validColor(neighbor, -c, graph, colors)) return false;\n        }\n    }\n    return true;\n}\n\nbool isBipartite(vector<vector<int>>& graph) {\n    int n = graph.size();\n    vector<int> colors(n, 0); // 0=uncolored, 1=color A, -1=color B\n    for (int i = 0; i < n; i++) {\n        if (colors[i] == 0) {\n            if (!validColor(i, 1, graph, colors)) return false;\n        }\n    }\n    return true;\n}`,
        explanation: [
          { line: 1, text: "Helper function: attempts to color node and neighbors recursively. Returns false if color collision occurs." },
          { line: 2, text: "Set current node's color to `c`." },
          { line: 3, text: "Iterate through neighbors of current node." },
          { line: 4, text: "If neighbor has the same color, bipartite property is violated: return false." },
          { line: 5, text: "If neighbor is uncolored (color 0)." },
          { line: 6, text: "Recursively color the neighbor with the opposite color `-c`. Return false if that branch fails." },
          { line: 12, text: "Main function." },
          { line: 14, text: "Initialize colors array. 0 represents uncolored, 1 is color A, -1 is color B." },
          { line: 15, text: "Loop through all nodes to cover disconnected graph components." },
          { line: 16, text: "If node is uncolored, start coloring it with color 1." }
        ]
      },
      python: {
        code: `def isBipartite(graph: list[list[int]]) -> bool:\n    n = len(graph)\n    colors = [0] * n  # 0=uncolored, 1=A, -1=B\n    \n    def dfs(node, color):\n        colors[node] = color\n        for neighbor in graph[node]:\n            if colors[neighbor] == colors[node]:\n                return False\n            if colors[neighbor] == 0:\n                if not dfs(neighbor, -color):\n                    return False\n        return True\n        \n    for i in range(n):\n        if colors[i] == 0:\n            if not dfs(i, 1):\n                return False\n    return True`,
        explanation: [
          { line: 1, text: "Define isBipartite function." },
          { line: 3, text: "Initialize colors list with 0." },
          { line: 5, text: "Define DFS coloring helper." },
          { line: 6, text: "Color the node." },
          { line: 7, text: "Check neighbors. Return False if color conflict." },
          { line: 10, text: "Recurse color for uncolored neighbors with opposite color value `-color`." },
          { line: 15, text: "Ensure all nodes (and components) are processed." }
        ]
      },
      java: {
        code: `public boolean isBipartite(int[][] graph) {\n    int n = graph.length;\n    int[] colors = new int[n]; // 0=uncolored, 1=A, -1=B\n    for (int i = 0; i < n; i++) {\n        if (colors[i] == 0) {\n            if (!validColor(i, 1, graph, colors)) return false;\n        }\n    }\n    return true;\n}\n\nprivate boolean validColor(int node, int color, int[][] graph, int[] colors) {\n    colors[node] = color;\n    for (int neighbor : graph[node]) {\n        if (colors[neighbor] == colors[node]) return false;\n        if (colors[neighbor] == 0) {\n            if (!validColor(neighbor, -color, graph, colors)) return false;\n        }\n    }\n    return true;\n}`,
        explanation: [
          { line: 1, text: "Declare isBipartite method." },
          { line: 3, text: "Create colors array." },
          { line: 4, text: "Scan all nodes in outer loop." },
          { line: 12, text: "DFS coloring helper method." },
          { line: 13, text: "Assign color." },
          { line: 15, text: "Conflict check." },
          { line: 17, text: "Recursively color uncolored neighbors with opposite color value." }
        ]
      }
    }
  },
  {
    id: 994,
    name: "Rotting Oranges",
    difficulty: "Medium",
    topic: "BFS / Multi-source",
    leetcodeUrl: "https://leetcode.com/problems/rotting-oranges/",
    tip: "Use Multi-source BFS. Count fresh oranges first. Push all rotten oranges (value 2) into the queue. Run BFS level-by-level, incrementing minutes. If fresh count becomes 0, return minutes. Otherwise, -1.",
    description: "You are given an `m x n` grid where each cell can have one of three values: 0 (empty), 1 (fresh orange), or 2 (rotten orange). Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.",
    chatbotData: {
      intuition: "This is a shortest path problem in a grid. Because multiple oranges can rot simultaneously, the rot spreads from all rotten oranges at the same time. This is a Multi-Source BFS. We scan the grid to count fresh oranges and push the coordinates of all initially rotten oranges into a queue. We run BFS level by level (each level represents 1 minute). When we rot a fresh orange, we decrement the fresh count. We stop when the queue is empty. If the fresh count is 0, we return minutes, else -1.",
      complexity: "Time Complexity: O(M * N) since we visit each cell in the grid a constant number of times.\nSpace Complexity: O(M * N) to store the BFS queue.",
      edgeCases: "1. 0 fresh oranges: returns 0 minutes immediately.\n2. Fresh orange blocked by empty cells (unreachable): BFS ends, fresh count > 0, returns -1.",
      debugging: "When incrementing the time (minutes), ensure you only increment it if we actually rotted at least one fresh orange in the current level cycle. If we didn't, the last step didn't spread any rot and shouldn't add to the timer."
    },
    solutions: {
      cpp: {
        code: `int orangesRotting(vector<vector<int>>& grid) {\n    int m = grid.size();\n    int n = grid[0].size();\n    queue<pair<int, int>> q;\n    int fresh = 0;\n    for (int r = 0; r < m; r++) {\n        for (int c = 0; c < n; c++) {\n            if (grid[r][c] == 2) {\n                q.push({r, c});\n            } else if (grid[r][c] == 1) {\n                fresh++;\n            }\n        }\n    }\n    if (fresh == 0) return 0;\n    int minutes = 0;\n    int dirs[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};\n    while (!q.empty() && fresh > 0) {\n        int size = q.size();\n        minutes++;\n        for (int i = 0; i < size; i++) {\n            auto [r, c] = q.front();\n            q.pop();\n            for (auto dir : dirs) {\n                int nr = r + dir[0];\n                int nc = c + dir[1];\n                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) {\n                    grid[nr][nc] = 2; // rot the orange\n                    fresh--;\n                    q.push({nr, nc});\n                }\n            }\n        }\n    }\n    return (fresh == 0) ? minutes : -1;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes grid, returns minutes or -1." },
          { line: 4, text: "Declare queue of coordinate pairs for BFS." },
          { line: 5, text: "Initialize fresh orange counter." },
          { line: 6, text: "Scan grid to record all rotten orange coordinates and count fresh oranges." },
          { line: 15, text: "If there are no fresh oranges, no time is needed: return 0." },
          { line: 17, text: "Define direction offsets for top, bottom, left, right neighbors." },
          { line: 18, text: "Loop while queue is not empty AND there are still fresh oranges left." },
          { line: 19, text: "Get count of rotten oranges in the current wave (level)." },
          { line: 20, text: "Increment minutes elapsed." },
          { line: 21, text: "Process all rotten oranges in the current level." },
          { line: 24, text: "Check all 4 adjacent directions." },
          { line: 27, text: "If coordinates are valid and neighbor is a fresh orange." },
          { line: 28, text: "Rot the fresh orange (set to 2)." },
          { line: 29, text: "Decrement the fresh orange counter." },
          { line: 30, text: "Push the new rotten orange's coordinates onto the queue for the next minute wave." }
        ]
      },
      python: {
        code: `from collections import deque\n\ndef orangesRotting(grid: list[list[int]]) -> int:\n    m, n = len(grid), len(grid[0])\n    q = deque()\n    fresh = 0\n    for r in range(m):\n        for c in range(n):\n            if grid[r][c] == 2:\n                q.append((r, c))\n            elif grid[r][c] == 1:\n                fresh += 1\n    if fresh == 0:\n        return 0\n        \n    minutes = 0\n    while q and fresh > 0:\n        minutes += 1\n        for _ in range(len(q)):\n            r, c = q.popleft()\n            for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:\n                    grid[nr][nc] = 2  # rot\n                    fresh -= 1\n                    q.append((nr, nc))\n    return minutes if fresh == 0 else -1`,
        explanation: [
          { line: 1, text: "Import deque." },
          { line: 3, text: "Define orangesRotting function." },
          { line: 7, text: "Queue coordinates of rotten oranges and count fresh oranges." },
          { line: 13, text: "If no fresh oranges exist, return 0." },
          { line: 17, text: "BFS loop, ticking minutes. Process level by level." },
          { line: 21, text: "Check neighbors in four directions." },
          { line: 24, text: "Rot fresh orange, decrement fresh counter, and push to queue." },
          { line: 27, text: "Return elapsed minutes if no fresh oranges remain, otherwise -1." }
        ]
      },
      java: {
        code: `public int orangesRotting(int[][] grid) {\n    int m = grid.length, n = grid[0].length;\n    Queue<int[]> q = new LinkedList<>();\n    int fresh = 0;\n    for (int r = 0; r < m; r++) {\n        for (int c = 0; c < n; c++) {\n            if (grid[r][c] == 2) {\n                q.add(new int[]{r, c});\n            } else if (grid[r][c] == 1) {\n                fresh++;\n            }\n        }\n    }\n    if (fresh == 0) return 0;\n    int minutes = 0;\n    int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};\n    while (!q.isEmpty() && fresh > 0) {\n        int size = q.size();\n        minutes++;\n        for (int i = 0; i < size; i++) {\n            int[] curr = q.remove();\n            for (int[] dir : dirs) {\n                int nr = curr[0] + dir[0];\n                int nc = curr[1] + dir[1];\n                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) {\n                    grid[nr][nc] = 2;\n                    fresh--;\n                    q.add(new int[]{nr, nc});\n                }\n            }\n        }\n    }\n    return (fresh == 0) ? minutes : -1;\n}`,
        explanation: [
          { line: 1, text: "Declare orangesRotting method." },
          { line: 3, text: "Initialize Queue and orange counters." },
          { line: 14, text: "Return 0 if fresh == 0." },
          { line: 17, text: "BFS queue loop." },
          { line: 18, text: "Get count of rotten oranges in current wave." },
          { line: 21, text: "Pop coordinates from queue." },
          { line: 25, text: "Rot fresh adjacent oranges, decrement fresh count, and add to queue." },
          { line: 33, text: "Return output status." }
        ]
      }
    }
  }
];
