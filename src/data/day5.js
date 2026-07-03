export const day5Problems = [
  {
    id: 20,
    name: "Valid Parentheses",
    difficulty: "Easy",
    topic: "Stack",
    leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/",
    tip: "Use a Stack. Push opening brackets `(`, `{`, `[` onto the stack. When you encounter a closing bracket, check if the stack is non-empty and the top matches. If yes, pop it. Otherwise, invalid.",
    description: "Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.",
    chatbotData: {
      intuition: "Brackets must close in the reverse order they open (LIFO - Last In First Out). A Stack is perfect for this. We loop through the characters. If we see an opening bracket, we push it onto the stack. If we see a closing bracket, we check the top of the stack. If the stack is empty or the top doesn't match the closing bracket, it is invalid. If it matches, we pop the opening bracket. At the end, the stack must be empty.",
      complexity: "Time Complexity: O(N) since we inspect each of the N characters exactly once.\nSpace Complexity: O(N) to store up to N characters in the stack in the worst case (e.g. all opening brackets).",
      edgeCases: "1. Only opening brackets (e.g., '((('): returns false because stack won't be empty at the end.\n2. Only closing brackets (e.g., '))'): returns false because stack is empty when trying to inspect top.\n3. Empty string: returns true.",
      debugging: "Do not forget to check `stack.empty()` before calling `stack.top()` (or `peek()` / `pop()`) to avoid a program crash or out-of-bounds errors when processing strings that start with closing brackets."
    },
    solutions: {
      cpp: {
        code: `bool isValid(string s) {\n    stack<char> st;\n    for (char c : s) {\n        if (c == '(' || c == '{' || c == '[') {\n            st.push(c);\n        } else {\n            if (st.empty()) return false;\n            if (c == ')' && st.top() != '(') return false;\n            if (c == '}' && st.top() != '{') return false;\n            if (c == ']' && st.top() != '[') return false;\n            st.pop();\n        }\n    }\n    return st.empty();\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes string reference, returns boolean." },
          { line: 2, text: "Declare a stack of characters `st`." },
          { line: 3, text: "Iterate through each character `c` in the string." },
          { line: 4, text: "If the character is an opening bracket, push it onto the stack." },
          { line: 7, text: "Otherwise, it is a closing bracket: check if the stack is empty." },
          { line: 8, text: "If current closing bracket doesn't match the top opening bracket, return false." },
          { line: 11, text: "If it matches, pop the opening bracket off the stack." },
          { line: 14, text: "If the stack is empty, all brackets were matched: return true. Otherwise, return false." }
        ]
      },
      python: {
        code: `def isValid(s: str) -> bool:\n    stack = []\n    mapping = {")": "(", "}": "{", "]": "["}\n    for char in s:\n        if char in mapping.values():\n            stack.append(char)\n        elif char in mapping:\n            if not stack or stack[-1] != mapping[char]:\n                return False\n            stack.pop()\n    return len(stack) == 0`,
        explanation: [
          { line: 1, text: "Define isValid function." },
          { line: 2, text: "Use a Python list `stack` as a stack (append/pop)." },
          { line: 3, text: "Define a dictionary to map closing brackets to opening brackets." },
          { line: 4, text: "Iterate through each character in the string." },
          { line: 5, text: "If character is an opening bracket, append to stack." },
          { line: 7, text: "Otherwise, check if stack is empty or the last element doesn't match." },
          { line: 10, text: "Pop the matching bracket off the stack." },
          { line: 11, text: "Return True if stack is empty, meaning all brackets matched." }
        ]
      },
      java: {
        code: `public boolean isValid(String s) {\n    Stack<Character> stack = new Stack<>();\n    for (char c : s.toCharArray()) {\n        if (c == '(' || c == '{' || c == '[') {\n            stack.push(c);\n        } else {\n            if (stack.isEmpty()) return false;\n            char top = stack.peek();\n            if (c == ')' && top != '(') return false;\n            if (c == '}' && top != '{') return false;\n            if (c == ']' && top != '[') return false;\n            stack.pop();\n        }\n    }\n    return stack.isEmpty();\n}`,
        explanation: [
          { line: 1, text: "Declare isValid method." },
          { line: 2, text: "Instantiate a new Stack of Character objects." },
          { line: 3, text: "Loop through characters." },
          { line: 4, text: "If opening bracket, push onto stack." },
          { line: 7, text: "Verify stack isn't empty before peeking." },
          { line: 8, text: "Get top character using `stack.peek()`." },
          { line: 9, text: "Validate matching pairs." },
          { line: 12, text: "Pop the matching bracket." },
          { line: 15, text: "Return true if stack is empty." }
        ]
      }
    }
  },
  {
    id: 225,
    name: "Implement Stack using Queues",
    difficulty: "Easy",
    topic: "Design",
    leetcodeUrl: "https://leetcode.com/problems/implement-stack-using-queues/",
    tip: "You can implement a Stack using just ONE Queue. When pushing an element, append it to the queue, then rotate the queue by popping and re-appending all previous elements.",
    description: "Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).",
    chatbotData: {
      intuition: "A Queue is FIFO (First In First Out), while a Stack is LIFO. To make a queue behave like a stack, we can make the `push` operation do all the work so that the top element is always at the front of the queue. When we push `x` into the queue, we first add it to the back. Then, we find the size of the queue before `x` was added. We pop elements from the front and push them back to the end of the queue one by one. This rotates the queue, placing `x` at the front!",
      complexity: "Time Complexity: `push` is O(N) because we rotate all existing N elements. `pop`, `top`, and `empty` are O(1) time.\nSpace Complexity: O(N) to store N elements in the queue.",
      edgeCases: "1. Empty operations: user is assumed to call pop/top only on non-empty stacks, but `empty()` handles empty state correctly.",
      debugging: "Ensure you rotate exactly `size - 1` elements. Rotating too few or too many will mess up the stack order."
    },
    solutions: {
      cpp: {
        code: `class MyStack {\nprivate:\n    queue<int> q;\n\npublic:\n    MyStack() {}\n    \n    void push(int x) {\n        q.push(x);\n        int size = q.size();\n        for (int i = 0; i < size - 1; i++) {\n            q.push(q.front());\n            q.pop();\n        }\n    }\n    \n    int pop() {\n        int val = q.front();\n        q.pop();\n        return val;\n    }\n    \n    int top() {\n        return q.front();\n    }\n    \n    bool empty() {\n        return q.empty();\n    }\n};`,
        explanation: [
          { line: 3, text: "Declare a private standard queue `q`." },
          { line: 8, text: "push() function: pushes new element to the back of the queue." },
          { line: 10, text: "Get the current size of the queue." },
          { line: 11, text: "Loop `size - 1` times to rotate all elements that were already in the queue." },
          { line: 12, text: "Push the element at the front of the queue to the back." },
          { line: 13, text: "Pop the front element. This shifts the new element `x` to the front." },
          { line: 17, text: "pop() function: returns and removes the front element of the queue (which represents stack top)." },
          { line: 23, text: "top() function: returns the front element without removing it." },
          { line: 27, text: "empty() function: returns whether the queue is empty." }
        ]
      },
      python: {
        code: `from collections import deque\n\nclass MyStack:\n    def __init__(self):\n        self.q = deque()\n\n    def push(self, x: int) -> None:\n        self.q.append(x)\n        for _ in range(len(self.q) - 1):\n            self.q.append(self.q.popleft())\n\n    def pop(self) -> int:\n        return self.q.popleft()\n\n    def top(self) -> int:\n        return self.q[0]\n\n    def empty(self) -> bool:\n        return len(self.q) == 0`,
        explanation: [
          { line: 1, text: "Import `deque` (double-ended queue) from collections." },
          { line: 4, text: "Constructor: initialize an empty deque `q`." },
          { line: 7, text: "push(): append `x` to the end of the deque." },
          { line: 9, text: "Rotate the deque: pop from the left and append to the right `size - 1` times." },
          { line: 12, text: "pop(): pop and return the leftmost element (front of queue)." },
          { line: 15, text: "top(): return the element at index 0 (front of queue)." },
          { line: 18, text: "empty(): check if deque length is 0." }
        ]
      },
      java: {
        code: `class MyStack {\n    private Queue<Integer> q = new LinkedList<>();\n\n    public MyStack() {}\n    \n    public void push(int x) {\n        q.add(x);\n        int size = q.size();\n        for (int i = 0; i < size - 1; i++) {\n            q.add(q.remove());\n        }\n    }\n    \n    public int pop() {\n        return q.remove();\n    }\n    \n    public int top() {\n        return q.peek();\n    }\n    \n    public boolean empty() {\n        return q.isEmpty();\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare class MyStack." },
          { line: 2, text: "Initialize `q` as a LinkedList which implements the Queue interface." },
          { line: 6, text: "push(): add the element to queue." },
          { line: 8, text: "Get queue size." },
          { line: 9, text: "Loop `size - 1` times: remove the element from the front and add it to the back." },
          { line: 14, text: "pop(): remove and return the element at the front." },
          { line: 18, text: "top(): peek the front element." },
          { line: 22, text: "empty(): return queue's empty status." }
        ]
      }
    }
  },
  {
    id: 232,
    name: "Implement Queue using Stacks",
    difficulty: "Easy",
    topic: "Design",
    leetcodeUrl: "https://leetcode.com/problems/implement-queue-using-stacks/",
    tip: "Use two stacks: `input` and `output`. For `push`, push onto the `input` stack. For `pop` / `peek`, if `output` stack is empty, pop all elements from `input` and push them onto `output`. Then operate on `output`.",
    description: "Implement a first-in-first-out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).",
    chatbotData: {
      intuition: "A stack reverses order. If we push items into stack `input` and then pop them into stack `output`, the order is reversed *twice*, which restores the original FIFO order! When we push, we simply push onto `input` (O(1)). When we pop or peek, we check if `output` has elements. If it doesn't, we transfer all elements from `input` to `output`. This guarantees that the oldest element is always at the top of `output`.",
      complexity: "Time Complexity: `push` and `empty` are O(1). `pop` and `peek` are O(1) amortized, because each element is pushed, popped, and transferred at most a constant number of times.\nSpace Complexity: O(N) to store N elements in the two stacks.",
      edgeCases: "1. Alternating push and pop: elements are transferred only when output is empty, maintaining correct ordering.",
      debugging: "Do not transfer elements from `input` to `output` on every push. Only transfer when `output` is completely empty during a pop or peek operation."
    },
    solutions: {
      cpp: {
        code: `class MyQueue {\nprivate:\n    stack<int> input;\n    stack<int> output;\n    \n    void transfer() {\n        if (output.empty()) {\n            while (!input.empty()) {\n                output.push(input.top());\n                input.pop();\n            }\n        }\n    }\n\npublic:\n    MyQueue() {}\n    \n    void push(int x) {\n        input.push(x);\n    }\n    \n    int pop() {\n        transfer();\n        int val = output.top();\n        output.pop();\n        return val;\n    }\n    \n    int peek() {\n        transfer();\n        return output.top();\n    }\n    \n    bool empty() {\n        return input.empty() && output.empty();\n    }\n};`,
        explanation: [
          { line: 3, text: "Declare private stack `input` for incoming pushes." },
          { line: 4, text: "Declare private stack `output` for outgoing pops/peeks." },
          { line: 6, text: "Helper function `transfer`: if `output` is empty, move all items from `input` to `output` in reverse order." },
          { line: 18, text: "push() function: push `x` onto the `input` stack (O(1))." },
          { line: 22, text: "pop() function: call transfer, get the top element of `output`, pop it and return it." },
          { line: 29, text: "peek() function: call transfer, return top of `output` without popping." },
          { line: 34, text: "empty() function: returns true only if BOTH stacks are empty." }
        ]
      },
      python: {
        code: `class MyQueue:\n    def __init__(self):\n        self.input = []\n        self.output = []\n\n    def _transfer(self):\n        if not self.output:\n            while self.input:\n                self.output.append(self.input.pop())\n\n    def push(self, x: int) -> None:\n        self.input.append(x)\n\n    def pop(self) -> int:\n        self._transfer()\n        return self.output.pop()\n\n    def peek(self) -> int:\n        self._transfer()\n        return self.output[-1]\n\n    def empty(self) -> bool:\n        return not self.input and not self.output`,
        explanation: [
          { line: 1, text: "Define MyQueue class." },
          { line: 3, text: "Initialize `input` and `output` lists acting as stacks." },
          { line: 6, text: "Helper `_transfer()`: if `output` is empty, pop all from `input` and append to `output`." },
          { line: 11, text: "push(): append `x` to `input`." },
          { line: 14, text: "pop(): ensure elements are transferred, then pop from `output`." },
          { line: 18, text: "peek(): ensure elements are transferred, then return last element in `output`." },
          { line: 22, text: "empty(): return true if both lists are empty." }
        ]
      },
      java: {
        code: `class MyQueue {\n    private Stack<Integer> input = new Stack<>();\n    private Stack<Integer> output = new Stack<>();\n\n    public MyQueue() {}\n    \n    private void transfer() {\n        if (output.isEmpty()) {\n            while (!input.isEmpty()) {\n                output.push(input.pop());\n            }\n        }\n    }\n    \n    public void push(int x) {\n        input.push(x);\n    }\n    \n    public int pop() {\n        transfer();\n        return output.pop();\n    }\n    \n    public int peek() {\n        transfer();\n        return output.peek();\n    }\n    \n    public boolean empty() {\n        return input.isEmpty() && output.isEmpty();\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare class MyQueue." },
          { line: 2, text: "Create input and output Stack objects." },
          { line: 7, text: "Helper to move elements when output stack is empty." },
          { line: 15, text: "push(): push to input stack." },
          { line: 19, text: "pop(): transfer if needed, then pop." },
          { line: 24, text: "peek(): transfer if needed, then peek." },
          { line: 29, text: "empty(): return true if both stacks are empty." }
        ]
      }
    }
  },
  {
    id: 150,
    name: "Evaluate Reverse Polish Notation",
    difficulty: "Medium",
    topic: "Stack",
    leetcodeUrl: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    tip: "Use a Stack. Iterate through the tokens. If the token is a number, push it onto the stack. If it is an operator, pop the top two numbers, apply the operator, and push the result back.",
    description: "You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation. Evaluate the expression. Return an integer that represents the value of the expression.",
    chatbotData: {
      intuition: "Reverse Polish Notation (postfix) places operators *after* their operands (e.g., `['2', '1', '+']` means `2 + 1`). We process tokens from left to right. When we see a number, we push it onto the stack. When we see an operator (+, -, *, /), we pop the top two numbers from the stack. Crucially, the first popped number `b` is the *right* operand, and the second popped number `a` is the *left* operand. We calculate `a [operator] b`, and push the result back onto the stack.",
      complexity: "Time Complexity: O(N) since we process each of the N tokens exactly once.\nSpace Complexity: O(N) to store values in the stack.",
      edgeCases: "1. Division by negative numbers: standard integer division handles this.\n2. Negatives (e.g. '-11'): parsed as numbers, not operators.",
      debugging: "When popping operands, note the order: `secondOperand = pop()`, then `firstOperand = pop()`. For operations like subtraction and division, `firstOperand / secondOperand` is correct, whereas `secondOperand / firstOperand` will give the wrong result."
    },
    solutions: {
      cpp: {
        code: `int evalRPN(vector<string>& tokens) {\n    stack<int> st;\n    for (string s : tokens) {\n        if (s == "+" || s == "-" || s == "*" || s == "/") {\n            int b = st.top(); st.pop();\n            int a = st.top(); st.pop();\n            if (s == "+") st.push(a + b);\n            else if (s == "-") st.push(a - b);\n            else if (s == "*") st.push(a * b);\n            else if (s == "/") st.push(a / b);\n        } else {\n            st.push(stoi(s));\n        }\n    }\n    return st.top();\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes list of token strings, returns evaluation result." },
          { line: 2, text: "Declare integer stack `st`." },
          { line: 3, text: "Loop through each token `s` in the vector." },
          { line: 4, text: "Check if the token is one of the four basic operators." },
          { line: 5, text: "Pop the first operand `b` (the right operand)." },
          { line: 6, text: "Pop the second operand `a` (the left operand)." },
          { line: 7, text: "Apply operators and push the resulting calculation back onto the stack." },
          { line: 11, text: "If the token is a number, convert it to an integer using `stoi(s)` and push it." },
          { line: 15, text: "Return the final result remaining at the top of the stack." }
        ]
      },
      python: {
        code: `def evalRPN(tokens: list[str]) -> int:\n    stack = []\n    for token in tokens:\n        if token in {"+", "-", "*", "/"}:\n            b = stack.pop()\n            a = stack.pop()\n            if token == "+":\n                stack.append(a + b)\n            elif token == "-":\n                stack.append(a - b)\n            elif token == "*":\n                stack.append(a * b)\n            elif token == "/":\n                # Integer division truncating toward zero\n                stack.append(int(a / b))\n        else:\n            stack.append(int(token))\n    return stack[0]`,
        explanation: [
          { line: 1, text: "Define evalRPN function." },
          { line: 2, text: "Initialize stack list." },
          { line: 3, text: "Loop through tokens." },
          { line: 4, text: "Identify if the token is an operator." },
          { line: 5, text: "Pop the right operand `b` and left operand `a`." },
          { line: 7, text: "Perform addition, subtraction, or multiplication." },
          { line: 13, text: "Perform division. `int(a / b)` correctly truncates toward zero in Python (unlike `a // b` which floors)." },
          { line: 16, text: "Otherwise, cast token string to integer and push." },
          { line: 18, text: "Return the final value." }
        ]
      },
      java: {
        code: `public int evalRPN(String[] tokens) {\n    Stack<Integer> stack = new Stack<>();\n    for (String s : tokens) {\n        if (s.equals("+") || s.equals("-") || s.equals("*") || s.equals("/")) {\n            int b = stack.pop();\n            int a = stack.pop();\n            if (s.equals("+")) stack.push(a + b);\n            else if (s.equals("-")) stack.push(a - b);\n            else if (s.equals("*")) stack.push(a * b);\n            else if (s.equals("/")) stack.push(a / b);\n        } else {\n            stack.push(Integer.parseInt(s));\n        }\n    }\n    return stack.peek();\n}`,
        explanation: [
          { line: 1, text: "Declare evalRPN method." },
          { line: 2, text: "Create integer Stack." },
          { line: 3, text: "Loop through tokens, using `.equals()` for string comparison." },
          { line: 4, text: "If operator, pop operands `b` and `a`." },
          { line: 7, text: "Compute and push result." },
          { line: 11, text: "Otherwise, parse string as integer and push." },
          { line: 15, text: "Return the top of the stack." }
        ]
      }
    }
  },
  {
    id: 155,
    name: "Min Stack",
    difficulty: "Medium",
    topic: "Stack / Design",
    leetcodeUrl: "https://leetcode.com/problems/min-stack/",
    tip: "Use two stacks: a main `valStack` to store values, and a `minStack` that keeps track of the minimum value at each point. When pushing `x`, push `min(x, minStack.top())` onto `minStack`.",
    description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time `O(1)`.",
    chatbotData: {
      intuition: "To retrieve the minimum in O(1) time, we must keep track of the minimum element at *every* stage of the stack. We do this by maintaining a secondary stack `minStack`. When we push a value `x` onto our main stack, we look at the top of `minStack`. We push the smaller of `x` and the current minimum onto `minStack`. When we pop from the main stack, we also pop from `minStack`. The top of `minStack` will always represent the minimum value in the stack.",
      complexity: "Time Complexity: O(1) for all operations (`push`, `pop`, `top`, `getMin`) since we only perform basic stack pushes/pops/peeks.\nSpace Complexity: O(N) to store elements in the two stacks.",
      edgeCases: "1. Negative values: handled correctly.\n2. Pushing the same minimum value multiple times: `minStack` correctly duplicates it, keeping counts synchronized.",
      debugging: "When pushing to `minStack` for the first time (when stack is empty), push the value itself directly without comparing (or compare against infinity)."
    },
    solutions: {
      cpp: {
        code: `class MinStack {\nprivate:\n    stack<int> valStack;\n    stack<int> minStack;\n\npublic:\n    MinStack() {}\n    \n    void push(int val) {\n        valStack.push(val);\n        if (minStack.empty()) {\n            minStack.push(val);\n        } else {\n            minStack.push(min(val, minStack.top()));\n        }\n    }\n    \n    void pop() {\n        valStack.pop();\n        minStack.pop();\n    }\n    \n    int top() {\n        return valStack.top();\n    }\n    \n    int getMin() {\n        return minStack.top();\n    }\n};`,
        explanation: [
          { line: 3, text: "Declare `valStack` to store the actual data values." },
          { line: 4, text: "Declare `minStack` to store the running minimums." },
          { line: 9, text: "push() function: push the value onto `valStack`." },
          { line: 11, text: "If `minStack` is empty, this value is the first minimum: push it directly." },
          { line: 14, text: "Otherwise, compare `val` to current minimum (`minStack.top()`) and push the smaller one." },
          { line: 18, text: "pop() function: pop from both stacks to keep them synchronized." },
          { line: 23, text: "top() function: return the top of `valStack`." },
          { line: 27, text: "getMin() function: return the top of `minStack` (the current minimum)." }
        ]
      },
      python: {
        code: `class MinStack:\n    def __init__(self):\n        self.val_stack = []\n        self.min_stack = []\n\n    def push(self, val: int) -> None:\n        self.val_stack.append(val)\n        if not self.min_stack:\n            self.min_stack.append(val)\n        else:\n            self.min_stack.append(min(val, self.min_stack[-1]))\n\n    def pop(self) -> None:\n        self.val_stack.pop()\n        self.min_stack.pop()\n\n    def top(self) -> int:\n        return self.val_stack[-1]\n\n    def getMin(self) -> int:\n        return self.min_stack[-1]`,
        explanation: [
          { line: 1, text: "Define MinStack class." },
          { line: 2, text: "Constructor: initialize two list stacks." },
          { line: 6, text: "push(): append `val` to value stack." },
          { line: 8, text: "If min stack is empty, append `val` directly." },
          { line: 11, text: "Otherwise, append the minimum of `val` and current minimum `self.min_stack[-1]`." },
          { line: 13, text: "pop(): pop from both list stacks." },
          { line: 17, text: "top(): return last element of value stack." },
          { line: 20, text: "getMin(): return last element of min stack." }
        ]
      },
      java: {
        code: `class MinStack {\n    private Stack<Integer> valStack = new Stack<>();\n    private Stack<Integer> minStack = new Stack<>();\n\n    public MinStack() {}\n    \n    public void push(int val) {\n        valStack.push(val);\n        if (minStack.isEmpty()) {\n            minStack.push(val);\n        } else {\n            minStack.push(Math.min(val, minStack.peek()));\n        }\n    }\n    \n    public void pop() {\n        valStack.pop();\n        minStack.pop();\n    }\n    \n    public int top() {\n        return valStack.peek();\n    }\n    \n    public int getMin() {\n        return minStack.peek();\n    }\n}`,
        explanation: [
          { line: 1, text: "Declare class MinStack." },
          { line: 2, text: "Initialize the two stacks." },
          { line: 7, text: "push(): push to valStack, and push min value to minStack." },
          { line: 16, text: "pop(): pop from both stacks." },
          { line: 21, text: "top(): peek valStack." },
          { line: 25, text: "getMin(): peek minStack." }
        ]
      }
    }
  },
  {
    id: 394,
    name: "Decode String",
    difficulty: "Medium",
    topic: "Stack",
    leetcodeUrl: "https://leetcode.com/problems/decode-string/",
    tip: "Use two stacks: one for numbers (`countStack`) and one for strings (`stringStack`). Loop through the characters. Build numbers and current strings, pushing/popping on brackets.",
    description: "Given an encoded string, return its decoded string. The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times.",
    chatbotData: {
      intuition: "When we see nested brackets, it behaves like a stack evaluation. We maintain a `currentString` and a `currentK`. When we see a digit, we parse it into `currentK`. When we see an alphabet, we append it to `currentString`. When we see `[`, we push the `currentString` and `currentK` onto their respective stacks, and reset them. When we see `]`, we pop the repeat count and previous string. We repeat `currentString` by count, and prepend the popped previous string to it.",
      complexity: "Time Complexity: O(N) where N is the length of the decoded string, since we write each output character once.\nSpace Complexity: O(N) to store characters in the stacks.",
      edgeCases: "1. Nested brackets (e.g., '3[a2[c]]' -> 'accaccacc'): handled correctly by stacking intermediate strings.\n2. Multiple digits (e.g. '100[a]'): handled by accumulating digit string.",
      debugging: "Ensure you reset `currentK` to 0 and `currentString` to empty when pushing onto the stacks after encountering `[`."
    },
    solutions: {
      cpp: {
        code: `string decodeString(string s) {\n    stack<int> countStack;\n    stack<string> stringStack;\n    string currentString = "";\n    int currentK = 0;\n    for (char c : s) {\n        if (isdigit(c)) {\n            currentK = currentK * 10 + (c - 'a' + 49); // c - '0'\n        } else if (c == '[') {\n            countStack.push(currentK);\n            stringStack.push(currentString);\n            currentK = 0;\n            currentString = "";\n        } else if (c == ']') {\n            string prevString = stringStack.top(); stringStack.pop();\n            int repeatTimes = countStack.top(); countStack.pop();\n            string temp = "";\n            for (int i = 0; i < repeatTimes; i++) {\n                temp += currentString;\n            }\n            currentString = prevString + temp;\n        } else {\n            currentString += c;\n        }\n    }\n    return currentString;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes encoded string, returns decoded string." },
          { line: 2, text: "Declare stack of integers to store repeat factors." },
          { line: 3, text: "Declare stack of strings to store intermediate decoded prefixes." },
          { line: 4, text: "Initialize current string builder and multiplier." },
          { line: 6, text: "Loop through each character in string `s`." },
          { line: 7, text: "If char is a digit, update `currentK` (accumulate digits for numbers >= 10)." },
          { line: 9, text: "If char is `[`, push `currentK` and `currentString` to stacks, then reset them." },
          { line: 14, text: "If char is `]`, pop the previous string prefix and repeat count." },
          { line: 17, text: "Generate the repeated string block." },
          { line: 21, text: "Combine the previous prefix with the repeated block to form the new `currentString`." },
          { line: 22, text: "Otherwise, the character is a letter: append it to `currentString`." },
          { line: 26, text: "Return the final fully decoded string." }
        ]
      },
      python: {
        code: `def decodeString(s: str) -> str:\n    count_stack = []\n    string_stack = []\n    current_string = ""\n    current_k = 0\n    for char in s:\n        if char.isdigit():\n            current_k = current_k * 10 + int(char)\n        elif char == '[':\n            count_stack.append(current_k)\n            string_stack.append(current_string)\n            current_k = 0\n            current_string = ""\n        elif char == ']':\n            prev_string = string_stack.pop()\n            repeat_times = count_stack.pop()\n            current_string = prev_string + current_string * repeat_times\n        else:\n            current_string += char\n    return current_string`,
        explanation: [
          { line: 1, text: "Define decodeString function." },
          { line: 2, text: "Initialize stacks." },
          { line: 4, text: "Initialize current trackers." },
          { line: 6, text: "Loop through characters." },
          { line: 7, text: "Accumulate digit characters." },
          { line: 9, text: "Push states to stacks on open bracket, reset variables." },
          { line: 14, text: "Pop states and reconstruct repeated segments on closing bracket." },
          { line: 18, text: "Append alphabetical character to builder." },
          { line: 20, text: "Return result." }
        ]
      },
      java: {
        code: `public String decodeString(String s) {\n    Stack<Integer> countStack = new Stack<>();\n    Stack<StringBuilder> stringStack = new Stack<>();\n    StringBuilder currentString = new StringBuilder();\n    int currentK = 0;\n    for (char c : s.toCharArray()) {\n        if (Character.isDigit(c)) {\n            currentK = currentK * 10 + (c - '0');\n        } else if (c == '[') {\n            countStack.push(currentK);\n            stringStack.push(currentString);\n            currentK = 0;\n            currentString = new StringBuilder();\n        } else if (c == ']') {\n            StringBuilder prevString = stringStack.pop();\n            int repeatTimes = countStack.pop();\n            StringBuilder temp = new StringBuilder();\n            for (int i = 0; i < repeatTimes; i++) {\n                temp.append(currentString);\n            }\n            currentString = prevString.append(temp);\n        } else {\n            currentString.append(c);\n        }\n    }\n    return currentString.toString();\n}`,
        explanation: [
          { line: 1, text: "Declare method returning decoded String." },
          { line: 2, text: "Create integer and StringBuilder stacks." },
          { line: 6, text: "Iterate through character array." },
          { line: 7, text: "Accumulate number counts." },
          { line: 9, text: "Push number and string to stacks, clear active builders." },
          { line: 14, text: "On `]`, pop states, construct loop block, append to prefix." },
          { line: 22, text: "Otherwise, append letter to current StringBuilder." },
          { line: 26, text: "Return decoded string." }
        ]
      }
    }
  },
  {
    id: 503,
    name: "Next Greater Element II",
    difficulty: "Medium",
    topic: "Monotonic Stack",
    leetcodeUrl: "https://leetcode.com/problems/next-greater-element-ii/",
    tip: "Since the array is circular, double the search space (loop from `2 * n - 1` down to 0). Use a monotonic stack to store indices, and use `i % n` for array indexing.",
    description: "Given a circular integer array `nums`, return the next greater number for every element in `nums`.",
    chatbotData: {
      intuition: "To find the next greater element in a circular array, we can pretend the array is concatenated with itself (doubling its length to `2 * N`). We iterate backwards from index `2 * N - 1` down to 0, using `i % N` to reference the array. We maintain a monotonic decreasing stack of values. When looking at `nums[i % N]`, we pop all values from the stack that are <= `nums[i % N]`. The top of the stack will be the next greater element. Then, we push `nums[i % N]` onto the stack.",
      complexity: "Time Complexity: O(N) because we make at most two passes over the array, and each element is pushed and popped from the stack at most once.\nSpace Complexity: O(N) to store the stack of size at most N.",
      edgeCases: "1. No greater element exists (e.g. max element): stack becomes empty, result is -1.\n2. Already sorted in descending order: stack finds next element at index 0 correctly.",
      debugging: "When referencing the array, always use index modulo `i % n` to avoid OutOfBounds errors, since `i` ranges up to `2 * n`."
    },
    solutions: {
      cpp: {
        code: `vector<int> nextGreaterElements(vector<int>& nums) {\n    int n = nums.size();\n    vector<int> res(n, -1);\n    stack<int> st; // stores values\n    for (int i = 2 * n - 1; i >= 0; i--) {\n        while (!st.empty() && st.top() <= nums[i % n]) {\n            st.pop();\n        }\n        if (i < n) {\n            if (!st.empty()) res[i] = st.top();\n        }\n        st.push(nums[i % n]);\n    }\n    return res;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes integer vector reference, returns next greater elements vector." },
          { line: 2, text: "Get array size `n`." },
          { line: 3, text: "Initialize result vector `res` of size `n` filled with -1." },
          { line: 4, text: "Declare stack `st` to hold candidate elements." },
          { line: 5, text: "Loop backwards from `2 * n - 1` to 0. This simulates a circular array traversal." },
          { line: 6, text: "Pop all elements from stack that are smaller or equal to the current element." },
          { line: 9, text: "If we are in the first pass (`i < n`), record the top of the stack (which is the next greater element) in `res[i]`." },
          { line: 12, text: "Push the current element `nums[i % n]` onto the stack." },
          { line: 14, text: "Return the result vector." }
        ]
      },
      python: {
        code: `def nextGreaterElements(nums: list[int]) -> list[int]:\n    n = len(nums)\n    res = [-1] * n\n    stack = []\n    for i in range(2 * n - 1, -1, -1):\n        while stack and stack[-1] <= nums[i % n]:\n            stack.pop()\n        if i < n:\n            if stack:\n                res[i] = stack[-1]\n        stack.append(nums[i % n])\n    return res`,
        explanation: [
          { line: 1, text: "Define nextGreaterElements function." },
          { line: 2, text: "Setup sizes and result lists." },
          { line: 4, text: "Initialize empty stack." },
          { line: 5, text: "Loop backward across a virtual double-length list index." },
          { line: 6, text: "Maintain monotonic decreasing property: pop smaller elements." },
          { line: 8, text: "If we are within range of original list, capture next greater element if stack is not empty." },
          { line: 11, text: "Push current item onto stack." },
          { line: 12, text: "Return results." }
        ]
      },
      java: {
        code: `public int[] nextGreaterElements(int[] nums) {\n    int n = nums.length;\n    int[] res = new int[n];\n    Arrays.fill(res, -1);\n    Stack<Integer> stack = new Stack<>();\n    for (int i = 2 * n - 1; i >= 0; i--) {\n        while (!stack.isEmpty() && stack.peek() <= nums[i % n]) {\n            stack.pop();\n        }\n        if (i < n) {\n            if (!stack.isEmpty()) res[i] = stack.peek();\n        }\n        stack.push(nums[i % n]);\n    }\n    return res;\n}`,
        explanation: [
          { line: 1, text: "Declare method returning next greater elements array." },
          { line: 2, text: "Get length of array." },
          { line: 3, text: "Create and fill result array with -1." },
          { line: 5, text: "Initialize Stack." },
          { line: 6, text: "Iterate circular search index range backwards." },
          { line: 7, text: "Pop smaller items." },
          { line: 10, text: "Assign next greater element if in first half." },
          { line: 13, text: "Push current element." }
        ]
      }
    }
  },
  {
    id: 739,
    name: "Daily Temperatures",
    difficulty: "Medium",
    topic: "Monotonic Stack",
    leetcodeUrl: "https://leetcode.com/problems/daily-temperatures/",
    tip: "Use a Monotonic Stack storing indices. Iterate through the array. While the current temperature is hotter than the temperature at the index at stack top, pop the index and write the difference (`current_index - popped_index`) to the answer.",
    description: "Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`th day to get a warmer temperature.",
    chatbotData: {
      intuition: "We want to find the next warmer temperature for each day. We can use a monotonic stack that stores the *indices* of days we haven't found a warmer day for yet. We iterate through the days. While the stack is not empty and the current day's temperature is warmer than the temperature at the index on the top of the stack, we pop the index. The waiting time is `currentDayIndex - poppedIndex`. We store this in our result, then push the current index onto the stack.",
      complexity: "Time Complexity: O(N) because each index is pushed and popped from the stack at most once.\nSpace Complexity: O(N) to store indices in the stack.",
      edgeCases: "1. Temperatures keep decreasing: nothing gets popped, stack grows, results remain 0, handled correctly.\n2. Single day: returns [0].",
      debugging: "Remember to store the *indices* in the stack, not the temperatures themselves, so you can easily calculate the waiting distance `current_index - popped_index`."
    },
    solutions: {
      cpp: {
        code: `vector<int> dailyTemperatures(vector<int>& temperatures) {\n    int n = temperatures.size();\n    vector<int> ans(n, 0);\n    stack<int> st; // stores indices\n    for (int i = 0; i < n; i++) {\n        while (!st.empty() && temperatures[i] > temperatures[st.top()]) {\n            int prevIdx = st.top();\n            st.pop();\n            ans[prevIdx] = i - prevIdx;\n        }\n        st.push(i);\n    }\n    return ans;\n}`,
        explanation: [
          { line: 1, text: "Function declaration: takes temperatures vector, returns wait days vector." },
          { line: 2, text: "Get array size `n`." },
          { line: 3, text: "Initialize answer vector `ans` with all 0s." },
          { line: 4, text: "Declare stack `st` which will store indices of elements." },
          { line: 5, text: "Loop through temperatures from left to right." },
          { line: 6, text: "While stack is not empty and current temperature is greater than temperature at the stack top index." },
          { line: 7, text: "Retrieve index at stack top." },
          { line: 8, text: "Pop the index from the stack." },
          { line: 9, text: "Write the waiting distance `i - prevIdx` to the corresponding position in our answer." },
          { line: 11, text: "Push the current index `i` onto the stack for future comparisons." }
        ]
      },
      python: {
        code: `def dailyTemperatures(temperatures: list[int]) -> list[int]:\n    n = len(temperatures)\n    ans = [0] * n\n    stack = []  # stores indices\n    for i in range(n):\n        while stack and temperatures[i] > temperatures[stack[-1]]:\n            prev_idx = stack.pop()\n            ans[prev_idx] = i - prev_idx\n        stack.append(i)\n    return ans`,
        explanation: [
          { line: 1, text: "Define dailyTemperatures function." },
          { line: 2, text: "Setup sizes and result lists." },
          { line: 4, text: "Initialize index stack." },
          { line: 5, text: "Iterate index through array." },
          { line: 6, text: "If current temp is warmer than temp at top stack index, pop it." },
          { line: 8, text: "Write waiting distance to result list." },
          { line: 9, text: "Push current index to stack." },
          { line: 10, text: "Return answer." }
        ]
      },
      java: {
        code: `public int[] dailyTemperatures(int[] temperatures) {\n    int n = temperatures.length;\n    int[] ans = new int[n];\n    Stack<Integer> stack = new Stack<>(); // stores indices\n    for (int i = 0; i < n; i++) {\n        while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {\n            int prevIdx = stack.pop();\n            ans[prevIdx] = i - prevIdx;\n        }\n        stack.push(i);\n    }\n    return ans;\n}`,
        explanation: [
          { line: 1, text: "Declare method returning waiting days." },
          { line: 2, text: "Get length of array." },
          { line: 3, text: "Create result array." },
          { line: 4, text: "Initialize index Stack." },
          { line: 5, text: "Iterate indices." },
          { line: 6, text: "Pop and write differences for all colder elements in stack." },
          { line: 10, text: "Push current index." }
        ]
      }
    }
  }
];
