/**
 * testHarness.js — Comprehensive hardcoded test wrappers for problems
 * covering Python, C++, and Java with proper PASSED/FAILED output.
 */

const CPP_HEADERS = `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <map>
#include <set>
#include <queue>
#include <stack>
#include <algorithm>
#include <numeric>
#include <climits>
#include <functional>
#include <sstream>
using namespace std;
`;

const CPP_TREE = `
struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};
TreeNode* buildTree(vector<int> vals) {
    if (vals.empty() || vals[0] == -1) return nullptr;
    TreeNode* root = new TreeNode(vals[0]);
    queue<TreeNode*> q; q.push(root);
    int i = 1;
    while (!q.empty() && i < (int)vals.size()) {
        TreeNode* node = q.front(); q.pop();
        if (i < (int)vals.size() && vals[i] != -1) { node->left = new TreeNode(vals[i]); q.push(node->left); } i++;
        if (i < (int)vals.size() && vals[i] != -1) { node->right = new TreeNode(vals[i]); q.push(node->right); } i++;
    }
    return root;
}
`;

const CPP_LIST = `
struct ListNode {
    int val; ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};
ListNode* buildList(vector<int> v) {
    if (v.empty()) return nullptr;
    ListNode* head = new ListNode(v[0]); ListNode* cur = head;
    for (int i=1;i<(int)v.size();i++){cur->next=new ListNode(v[i]);cur=cur->next;}
    return head;
}
string listToStr(ListNode* head) {
    string s="["; while(head){s+=to_string(head->val);if(head->next)s+=",";head=head->next;} return s+"]";
}
`;

const PY_TREE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def buildTree(vals):
    if not vals or vals[0] is None: return None
    root = TreeNode(vals[0]); queue = [root]; i = 1
    while queue and i < len(vals):
        node = queue.pop(0)
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i]); queue.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i]); queue.append(node.right)
        i += 1
    return root

def treeToList(root):
    if not root: return []
    result, queue = [], [root]
    while queue:
        node = queue.pop(0)
        if node: result.append(node.val); queue.append(node.left); queue.append(node.right)
        else: result.append(None)
    while result and result[-1] is None: result.pop()
    return result
`;

const PY_LIST = `
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val; self.next = next

def buildList(vals):
    if not vals: return None
    head = ListNode(vals[0]); cur = head
    for v in vals[1:]: cur.next = ListNode(v); cur = cur.next
    return head

def listToArr(head):
    result = []
    while head: result.append(head.val); head = head.next
    return result
`;

const JAVA_TREE = `
class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int x) { val = x; }
}
`;

const JAVA_LIST = `
class ListNode {
    int val; ListNode next;
    ListNode(int x) { val = x; }
}
`;

export const harnesses = {

  '1': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
struct TC { vector<int> nums; int target; vector<int> expected; };
int main() {
    Solution sol;
    vector<TC> cases = {
        {{2,7,11,15},9,{0,1}},{{3,2,4},6,{1,2}},{{3,3},6,{0,1}},
        {{1,2,3,4,5},8,{2,4}},{{0,4,3,0},0,{0,3}},
        {{10,25,30,40},50,{0,3}},{{1,3,5,7,9},12,{2,3}},
        {{100,500,1000},1500,{1,2}},{{5,25,75,10},35,{1,3}},
        {{7,11,15,20,25},36,{1,4}}
    };
    int passed = 0;
    for (int i=0;i<(int)cases.size();i++) {
        try {
            auto res = sol.twoSum(cases[i].nums, cases[i].target);
            auto r=res; auto e=cases[i].expected;
            sort(r.begin(),r.end()); sort(e.begin(),e.end());
            if(r==e){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        } catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def twoSum(self, nums, target):\n        return twoSum(nums, target)`}

cases=[([2,7,11,15],9,[0,1]),([3,2,4],6,[1,2]),([3,3],6,[0,1]),([1,2,3,4,5],8,[2,4]),
       ([0,4,3,0],0,[0,3]),([10,25,30,40],50,[0,3]),([1,3,5,7,9],12,[2,3]),
       ([100,500,1000],1500,[1,2]),([5,25,75,10],35,[1,3]),([7,11,15,20,25],36,[1,4])]
sol=Solution();passed=0
for i,(nums,t,exp) in enumerate(cases):
    try:
        res=sol.twoSum(nums,t)
        if sorted(res)==sorted(exp):print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][][] cases = {{{2,7,11,15},{9},{0,1}},{{3,2,4},{6},{1,2}},{{3,3},{6},{0,1}},
            {{1,2,3,4,5},{8},{2,4}},{{0,4,3,0},{0},{0,3}},{{10,25,30,40},{50},{0,3}},
            {{1,3,5,7,9},{12},{2,3}},{{100,500,1000},{1500},{1,2}}};
        int passed=0;
        for(int i=0;i<cases.length;i++){
            try{
                int[] res=sol.twoSum(cases[i][0],cases[i][1][0]);
                int[] r=res.clone();int[] e=cases[i][2].clone();
                Arrays.sort(r);Arrays.sort(e);
                if(Arrays.equals(r,e)){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+cases.length+" cases passed.");
    }
}`
  },

  '217': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,bool>> cases = {
        {{1,2,3,1},true},{{1,2,3,4},false},{{1,1,1,3,3,4,3,2,4,2},true},
        {{},false},{{5},false},{{9,9},true}
    };
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            bool res=sol.containsDuplicate(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def containsDuplicate(self, nums):\n        return containsDuplicate(nums)`}

cases=[([1,2,3,1],True),([1,2,3,4],False),([1,1,1,3,3,4,3,2,4,2],True),([],False),([5],False),([9,9],True)]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        res=sol.containsDuplicate(nums)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{1,2,3,1},{1,2,3,4},{1,1,1,3,3,4,3,2,4,2},{},{5},{9,9}};
        boolean[] exp={true,false,true,false,false,true};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                boolean res=sol.containsDuplicate(nums[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '242': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<string,string,bool>> cases={
        {"anagram","nagaram",true},{"rat","car",false},{"a","ab",false},
        {"awesome","meaweso",true},{"hello","olelh",true},{"test","sett",true},{"","",true}
    };
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            bool res=sol.isAnagram(get<0>(cases[i]),get<1>(cases[i]));
            if(res==get<2>(cases[i])){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def isAnagram(self, s, t):\n        return isAnagram(s, t)`}

cases=[("anagram","nagaram",True),("rat","car",False),("a","ab",False),("awesome","meaweso",True),("hello","olelh",True),("test","sett",True),("","",True)]
sol=Solution();passed=0
for i,(s,t,exp) in enumerate(cases):
    try:
        res=sol.isAnagram(s,t)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        String[] s={"anagram","rat","a","awesome","hello","test",""};
        String[] t={"nagaram","car","ab","meaweso","olelh","sett",""};
        boolean[] exp={true,false,false,true,true,true,true};
        int passed=0;
        for(int i=0;i<s.length;i++){
            try{
                boolean res=sol.isAnagram(s[i],t[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+s.length+" cases passed.");
    }
}`
  },

  '268': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,int>> cases={
        {{3,0,1},2},{{0,1},2},{{9,6,4,2,3,5,7,0,1},8},{{0},1},{{1},0}
    };
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.missingNumber(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def missingNumber(self, nums):\n        return missingNumber(nums)`}

cases=[([3,0,1],2),([0,1],2),([9,6,4,2,3,5,7,0,1],8),([0],1),([1],0)]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        res=sol.missingNumber(nums)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{3,0,1},{0,1},{9,6,4,2,3,5,7,0,1},{0},{1}};
        int[] exp={2,2,8,1,0};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int res=sol.missingNumber(nums[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED (Expected "+exp[i]+", Got "+res+")");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '283': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,vector<int>>> cases={
        {{0,1,0,3,12},{1,3,12,0,0}},{{0},{0}},{{1},{1}},{{0,0,1},{1,0,0}}
    };
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            auto nums=cases[i].first;
            sol.moveZeroes(nums);
            if(nums==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def moveZeroes(self, nums):\n        moveZeroes(nums)`}

cases=[([0,1,0,3,12],[1,3,12,0,0]),([0],[0]),([1],[1]),([0,0,1],[1,0,0])]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        n=nums[:]
        sol.moveZeroes(n)
        if n==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {n})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] input={{0,1,0,3,12},{0},{1},{0,0,1}};
        int[][] exp={{1,3,12,0,0},{0},{1},{1,0,0}};
        int passed=0;
        for(int i=0;i<input.length;i++){
            try{
                int[] nums=input[i].clone();
                sol.moveZeroes(nums);
                if(Arrays.equals(nums,exp[i])){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+input.length+" cases passed.");
    }
}`
  },

  '49': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<string>,int>> cases={
        {{"eat","tea","tan","ate","nat","bat"},3},{{""}, 1},{{"a"},1}
    };
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            auto res=sol.groupAnagrams(cases[i].first);
            int total=0; for(auto& g:res) total+=g.size();
            bool ok=(int)res.size()==cases[i].second && total==(int)cases[i].first.size();
            if(ok){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<" groups, Got "<<res.size()<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def groupAnagrams(self, strs):\n        return groupAnagrams(strs)`}

cases=[(["eat","tea","tan","ate","nat","bat"],3),([""],1),(["a"],1)]
sol=Solution();passed=0
for i,(strs,exp_groups) in enumerate(cases):
    try:
        res=sol.groupAnagrams(strs)
        total=sum(len(g) for g in res)
        if len(res)==exp_groups and total==len(strs):print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp_groups} groups, Got {len(res)})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        String[][] inputs={{"eat","tea","tan","ate","nat","bat"},{""}, {"a"}};
        int[] expGroups={3,1,1};
        int passed=0;
        for(int i=0;i<inputs.length;i++){
            try{
                List<List<String>> res=sol.groupAnagrams(inputs[i]);
                int total=res.stream().mapToInt(List::size).sum();
                if(res.size()==expGroups[i]&&total==inputs[i].length){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+inputs.length+" cases passed.");
    }
}`
  },

  '128': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,int>> cases={
        {{100,4,200,1,3,2},4},{{0,3,7,2,5,8,4,6,0,1},9},{{},0},{{1},1},{{1,2,3},3}
    };
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.longestConsecutive(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def longestConsecutive(self, nums):\n        return longestConsecutive(nums)`}

cases=[([100,4,200,1,3,2],4),([0,3,7,2,5,8,4,6,0,1],9),([],0),([1],1),([1,2,3],3)]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        res=sol.longestConsecutive(nums)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{100,4,200,1,3,2},{0,3,7,2,5,8,4,6,0,1},{},{1},{1,2,3}};
        int[] exp={4,9,0,1,3};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int res=sol.longestConsecutive(nums[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED (Expected "+exp[i]+", Got "+res+")");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '238': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,vector<int>>> cases={{{1,2,3,4},{24,12,8,6}},{{-1,1,0,-3,3},{0,0,9,0,0}}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            auto res=sol.productExceptSelf(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def productExceptSelf(self, nums):\n        return productExceptSelf(nums)`}

cases=[([1,2,3,4],[24,12,8,6]),([-1,1,0,-3,3],[0,0,9,0,0])]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        res=sol.productExceptSelf(nums)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{1,2,3,4},{-1,1,0,-3,3}};
        int[][] exp={{24,12,8,6},{0,0,9,0,0}};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int[] res=sol.productExceptSelf(nums[i]);
                if(Arrays.equals(res,exp[i])){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '125': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<string,bool>> cases={
        {"A man, a plan, a canal: Panama",true},{"race a car",false},{" ",true},
        {"racecar",true},{"hello",false},{"0P",false}
    };
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            bool res=sol.isPalindrome(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def isPalindrome(self, s):\n        return isPalindrome(s)`}

cases=[("A man, a plan, a canal: Panama",True),("race a car",False),(" ",True),("racecar",True),("hello",False),("0P",False)]
sol=Solution();passed=0
for i,(s,exp) in enumerate(cases):
    try:
        res=sol.isPalindrome(s)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        String[] s={"A man, a plan, a canal: Panama","race a car"," ","racecar","hello","0P"};
        boolean[] exp={true,false,true,true,false,false};
        int passed=0;
        for(int i=0;i<s.length;i++){
            try{
                boolean res=sol.isPalindrome(s[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+s.length+" cases passed.");
    }
}`
  },

  '26': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,int>> cases={{{1,1,2},2},{{0,0,1,1,1,2,2,3,3,4},5},{{1},1},{{1,2},2}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            auto nums=cases[i].first;
            int k=sol.removeDuplicates(nums);
            if(k==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected k="<<cases[i].second<<", Got k="<<k<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def removeDuplicates(self, nums):\n        return removeDuplicates(nums)`}

cases=[([1,1,2],2),([0,0,1,1,1,2,2,3,3,4],5),([1],1),([1,2],2)]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        n=nums[:]
        k=sol.removeDuplicates(n)
        if k==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected k={exp}, Got k={k})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{1,1,2},{0,0,1,1,1,2,2,3,3,4},{1},{1,2}};
        int[] exp={2,5,1,2};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int[] n=nums[i].clone();
                int k=sol.removeDuplicates(n);
                if(k==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '11': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,int>> cases={{{1,8,6,2,5,4,8,3,7},49},{{1,1},1},{{4,3,2,1,4},16},{{1,2,1},2}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.maxArea(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def maxArea(self, height):\n        return maxArea(height)`}

cases=[([1,8,6,2,5,4,8,3,7],49),([1,1],1),([4,3,2,1,4],16),([1,2,1],2)]
sol=Solution();passed=0
for i,(h,exp) in enumerate(cases):
    try:
        res=sol.maxArea(h)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] h={{1,8,6,2,5,4,8,3,7},{1,1},{4,3,2,1,4},{1,2,1}};
        int[] exp={49,1,16,2};
        int passed=0;
        for(int i=0;i<h.length;i++){
            try{
                int res=sol.maxArea(h[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED (Expected "+exp[i]+", Got "+res+")");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+h.length+" cases passed.");
    }
}`
  },

  '15': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,int>> cases={{{-1,0,1,2,-1,-4},2},{{0,1,1},0},{{0,0,0},1}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            auto res=sol.threeSum(cases[i].first);
            if((int)res.size()==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<" triplets, Got "<<res.size()<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def threeSum(self, nums):\n        return threeSum(nums)`}

cases=[([-1,0,1,2,-1,-4],2),([0,1,1],0),([0,0,0],1)]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        res=sol.threeSum(nums)
        if len(res)==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp} triplets, Got {len(res)})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{-1,0,1,2,-1,-4},{0,1,1},{0,0,0}};
        int[] exp={2,0,1};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                List<List<Integer>> res=sol.threeSum(nums[i]);
                if(res.size()==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '75': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,vector<int>>> cases={{{2,0,2,1,1,0},{0,0,1,1,2,2}},{{2,0,1},{0,1,2}},{{0},{0}}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            auto nums=cases[i].first;
            sol.sortColors(nums);
            if(nums==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def sortColors(self, nums):\n        sortColors(nums)`}

cases=[([2,0,2,1,1,0],[0,0,1,1,2,2]),([2,0,1],[0,1,2]),([0],[0])]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        n=nums[:]
        sol.sortColors(n)
        if n==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {n})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] inputs={{2,0,2,1,1,0},{2,0,1},{0}};
        int[][] exp={{0,0,1,1,2,2},{0,1,2},{0}};
        int passed=0;
        for(int i=0;i<inputs.length;i++){
            try{
                int[] nums=inputs[i].clone();
                sol.sortColors(nums);
                if(Arrays.equals(nums,exp[i])){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+inputs.length+" cases passed.");
    }
}`
  },

  '3': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<string,int>> cases={{"abcabcbb",3},{"bbbbb",1},{"pwwkew",3},{"",0},{"au",2},{"dvdf",3}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.lengthOfLongestSubstring(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def lengthOfLongestSubstring(self, s):\n        return lengthOfLongestSubstring(s)`}

cases=[("abcabcbb",3),("bbbbb",1),("pwwkew",3),("",0),("au",2),("dvdf",3)]
sol=Solution();passed=0
for i,(s,exp) in enumerate(cases):
    try:
        res=sol.lengthOfLongestSubstring(s)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        String[] s={"abcabcbb","bbbbb","pwwkew","","au","dvdf"};
        int[] exp={3,1,3,0,2,3};
        int passed=0;
        for(int i=0;i<s.length;i++){
            try{
                int res=sol.lengthOfLongestSubstring(s[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED (Expected "+exp[i]+", Got "+res+")");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+s.length+" cases passed.");
    }
}`
  },

  '424': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<string,int,int>> cases={{"ABAB",2,4},{"AABABBA",1,4},{"AAAA",2,4}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.characterReplacement(get<0>(cases[i]),get<1>(cases[i]));
            if(res==get<2>(cases[i])){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<get<2>(cases[i])<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def characterReplacement(self, s, k):\n        return characterReplacement(s, k)`}

cases=[("ABAB",2,4),("AABABBA",1,4),("AAAA",2,4)]
sol=Solution();passed=0
for i,(s,k,exp) in enumerate(cases):
    try:
        res=sol.characterReplacement(s,k)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        String[] s={"ABAB","AABABBA","AAAA"};
        int[] k={2,1,2}; int[] exp={4,4,4};
        int passed=0;
        for(int i=0;i<s.length;i++){
            try{
                int res=sol.characterReplacement(s[i],k[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+s.length+" cases passed.");
    }
}`
  },

  '567': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<string,string,bool>> cases={{"ab","eidbaooo",true},{"ab","eidboaoo",false},{"adc","dcda",true},{"a","b",false}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            bool res=sol.checkInclusion(get<0>(cases[i]),get<1>(cases[i]));
            if(res==get<2>(cases[i])){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def checkInclusion(self, s1, s2):\n        return checkInclusion(s1, s2)`}

cases=[("ab","eidbaooo",True),("ab","eidboaoo",False),("adc","dcda",True),("a","b",False)]
sol=Solution();passed=0
for i,(s1,s2,exp) in enumerate(cases):
    try:
        res=sol.checkInclusion(s1,s2)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        String[] s1={"ab","ab","adc","a"};
        String[] s2={"eidbaooo","eidboaoo","dcda","b"};
        boolean[] exp={true,false,true,false};
        int passed=0;
        for(int i=0;i<s1.length;i++){
            try{
                boolean res=sol.checkInclusion(s1[i],s2[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+s1.length+" cases passed.");
    }
}`
  },

  '704': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<vector<int>,int,int>> cases={{{-1,0,3,5,9,12},9,4},{{-1,0,3,5,9,12},2,-1},{{5},5,0},{{5},3,-1}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.search(get<0>(cases[i]),get<1>(cases[i]));
            if(res==get<2>(cases[i])){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<get<2>(cases[i])<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def search(self, nums, target):\n        return search(nums, target)`}

cases=[([-1,0,3,5,9,12],9,4),([-1,0,3,5,9,12],2,-1),([5],5,0),([5],3,-1)]
sol=Solution();passed=0
for i,(nums,target,exp) in enumerate(cases):
    try:
        res=sol.search(nums,target)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{-1,0,3,5,9,12},{-1,0,3,5,9,12},{5},{5}};
        int[] targets={9,2,5,3};
        int[] exp={4,-1,0,-1};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int res=sol.search(nums[i],targets[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '33': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<vector<int>,int,int>> cases={{{4,5,6,7,0,1,2},0,4},{{4,5,6,7,0,1,2},3,-1},{{1},0,-1},{{1},1,0}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.search(get<0>(cases[i]),get<1>(cases[i]));
            if(res==get<2>(cases[i])){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<get<2>(cases[i])<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def search(self, nums, target):\n        return search(nums, target)`}

cases=[([4,5,6,7,0,1,2],0,4),([4,5,6,7,0,1,2],3,-1),([1],0,-1),([1],1,0)]
sol=Solution();passed=0
for i,(nums,target,exp) in enumerate(cases):
    try:
        res=sol.search(nums,target)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{4,5,6,7,0,1,2},{4,5,6,7,0,1,2},{1},{1}};
        int[] targets={0,3,0,1};
        int[] exp={4,-1,-1,0};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int res=sol.search(nums[i],targets[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '153': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,int>> cases={{{3,4,5,1,2},1},{{4,5,6,7,0,1,2},0},{{11,13,15,17},11}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.findMin(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def findMin(self, nums):\n        return findMin(nums)`}

cases=[([3,4,5,1,2],1),([4,5,6,7,0,1,2],0),([11,13,15,17],11)]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        res=sol.findMin(nums)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{3,4,5,1,2},{4,5,6,7,0,1,2},{11,13,15,17}};
        int[] exp={1,0,11};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int res=sol.findMin(nums[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '20': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<string,bool>> cases={{"()",true},{"()[]{}",true},{"(]",false},{"([)]",false},{"{[]}",true},{"",true}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            bool res=sol.isValid(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def isValid(self, s):\n        return isValid(s)`}

cases=[("()",True),("()[]{}",True),("(]",False),("([)]",False),("{[]}",True),("",True)]
sol=Solution();passed=0
for i,(s,exp) in enumerate(cases):
    try:
        res=sol.isValid(s)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        String[] s={"()","()[]{}","(]","([)]","{[]}",""};
        boolean[] exp={true,true,false,false,true,true};
        int passed=0;
        for(int i=0;i<s.length;i++){
            try{
                boolean res=sol.isValid(s[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+s.length+" cases passed.");
    }
}`
  },

  '150': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<string>,int>> cases={
        {{"2","1","+","3","*"},9},{{"4","13","5","/","+"},6}
    };
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.evalRPN(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def evalRPN(self, tokens):\n        return evalRPN(tokens)`}

cases=[(["2","1","+","3","*"],9),(["4","13","5","/","+"],6)]
sol=Solution();passed=0
for i,(tokens,exp) in enumerate(cases):
    try:
        res=sol.evalRPN(tokens)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        String[][] tokens={{"2","1","+","3","*"},{"4","13","5","/","+"}};
        int[] exp={9,6};
        int passed=0;
        for(int i=0;i<tokens.length;i++){
            try{
                int res=sol.evalRPN(tokens[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+tokens.length+" cases passed.");
    }
}`
  },

  '394': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<string,string>> cases={{"3[a]","aaa"},{"3[a2[c]]","accaccacc"},{"2[abc]3[cd]ef","abcabccdcdcdef"}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            string res=sol.decodeString(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected '"<<cases[i].second<<"', Got '"<<res<<"')\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def decodeString(self, s):\n        return decodeString(s)`}

cases=[("3[a]","aaa"),("3[a2[c]]","accaccacc"),("2[abc]3[cd]ef","abcabccdcdcdef")]
sol=Solution();passed=0
for i,(s,exp) in enumerate(cases):
    try:
        res=sol.decodeString(s)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected '{exp}', Got '{res}')")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        String[] s={"3[a]","3[a2[c]]","2[abc]3[cd]ef"};
        String[] exp={"aaa","accaccacc","abcabccdcdcdef"};
        int passed=0;
        for(int i=0;i<s.length;i++){
            try{
                String res=sol.decodeString(s[i]);
                if(res.equals(exp[i])){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+s.length+" cases passed.");
    }
}`
  },

  '739': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,vector<int>>> cases={
        {{73,74,75,71,69,72,76,73},{1,1,4,2,1,1,0,0}},
        {{30,40,50,60},{1,1,1,0}},{{30,60,90},{1,1,0}}
    };
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            auto res=sol.dailyTemperatures(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def dailyTemperatures(self, temperatures):\n        return dailyTemperatures(temperatures)`}

cases=[([73,74,75,71,69,72,76,73],[1,1,4,2,1,1,0,0]),([30,40,50,60],[1,1,1,0]),([30,60,90],[1,1,0])]
sol=Solution();passed=0
for i,(temps,exp) in enumerate(cases):
    try:
        res=sol.dailyTemperatures(temps)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] temps={{73,74,75,71,69,72,76,73},{30,40,50,60},{30,60,90}};
        int[][] exp={{1,1,4,2,1,1,0,0},{1,1,1,0},{1,1,0}};
        int passed=0;
        for(int i=0;i<temps.length;i++){
            try{
                int[] res=sol.dailyTemperatures(temps[i]);
                if(Arrays.equals(res,exp[i])){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+temps.length+" cases passed.");
    }
}`
  },

  '503': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,vector<int>>> cases={{{1,2,1},{2,-1,2}},{{1,2,3,4,3},{2,3,4,-1,4}}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            auto res=sol.nextGreaterElements(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def nextGreaterElements(self, nums):\n        return nextGreaterElements(nums)`}

cases=[([1,2,1],[2,-1,2]),([1,2,3,4,3],[2,3,4,-1,4])]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        res=sol.nextGreaterElements(nums)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{1,2,1},{1,2,3,4,3}};
        int[][] exp={{2,-1,2},{2,3,4,-1,4}};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int[] res=sol.nextGreaterElements(nums[i]);
                if(Arrays.equals(res,exp[i])){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '104': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_TREE}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,int>> cases={{{3,9,20,-1,-1,15,7},3},{{1,-1,2},2},{{},0},{{1},1}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            TreeNode* root=buildTree(cases[i].first);
            int res=sol.maxDepth(root);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_TREE}

from typing import Optional
${u}

${h ? '' : `class Solution:\n    def maxDepth(self, root):\n        return maxDepth(root)`}

cases=[([3,9,20,None,None,15,7],3),([1,None,2],2),([],0),([1],1)]
sol=Solution();passed=0
for i,(vals,exp) in enumerate(cases):
    try:
        root=buildTree(vals)
        res=sol.maxDepth(root)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_TREE}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static TreeNode build(Integer[] v){
        if(v.length==0||v[0]==null)return null;
        TreeNode root=new TreeNode(v[0]);Queue<TreeNode> q=new LinkedList<>();q.add(root);int i=1;
        while(!q.isEmpty()&&i<v.length){
            TreeNode n=q.poll();
            if(i<v.length&&v[i]!=null){n.left=new TreeNode(v[i]);q.add(n.left);}i++;
            if(i<v.length&&v[i]!=null){n.right=new TreeNode(v[i]);q.add(n.right);}i++;
        }return root;
    }
    public static void main(String[] args) {
        Solution sol=new Solution();
        Object[][] cases={{new Integer[]{3,9,20,null,null,15,7},3},{new Integer[]{1,null,2},2},{new Integer[]{},0},{new Integer[]{1},1}};
        int passed=0;
        for(int i=0;i<cases.length;i++){
            try{
                TreeNode root=build((Integer[])cases[i][0]);
                int res=sol.maxDepth(root);int exp=(int)cases[i][1];
                if(res==exp){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED (Expected "+exp+", Got "+res+")");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+cases.length+" cases passed.");
    }
}`
  },

  '70': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<int,int>> cases={{1,1},{2,2},{3,3},{4,5},{5,8},{10,89}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.climbStairs(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def climbStairs(self, n):\n        return climbStairs(n)`}

cases=[(1,1),(2,2),(3,3),(4,5),(5,8),(10,89)]
sol=Solution();passed=0
for i,(n,exp) in enumerate(cases):
    try:
        res=sol.climbStairs(n)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[] n={1,2,3,4,5,10};int[] exp={1,2,3,5,8,89};
        int passed=0;
        for(int i=0;i<n.length;i++){
            try{
                int res=sol.climbStairs(n[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+n.length+" cases passed.");
    }
}`
  },

  '121': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,int>> cases={{{7,1,5,3,6,4},5},{{7,6,4,3,1},0},{{1,2},1},{{2,4,1},2}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.maxProfit(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def maxProfit(self, prices):\n        return maxProfit(prices)`}

cases=[([7,1,5,3,6,4],5),([7,6,4,3,1],0),([1,2],1),([2,4,1],2)]
sol=Solution();passed=0
for i,(prices,exp) in enumerate(cases):
    try:
        res=sol.maxProfit(prices)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] prices={{7,1,5,3,6,4},{7,6,4,3,1},{1,2},{2,4,1}};
        int[] exp={5,0,1,2};
        int passed=0;
        for(int i=0;i<prices.length;i++){
            try{
                int res=sol.maxProfit(prices[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+prices.length+" cases passed.");
    }
}`
  },

  '53': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,int>> cases={{{-2,1,-3,4,-1,2,1,-5,4},6},{{1},1},{{5,4,-1,7,8},23}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.maxSubArray(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def maxSubArray(self, nums):\n        return maxSubArray(nums)`}

cases=[([-2,1,-3,4,-1,2,1,-5,4],6),([1],1),([5,4,-1,7,8],23)]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        res=sol.maxSubArray(nums)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{-2,1,-3,4,-1,2,1,-5,4},{1},{5,4,-1,7,8}};
        int[] exp={6,1,23};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int res=sol.maxSubArray(nums[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '62': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<int,int,int>> cases={{3,7,28},{3,2,3},{7,3,28},{3,3,6},{1,1,1}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.uniquePaths(get<0>(cases[i]),get<1>(cases[i]));
            if(res==get<2>(cases[i])){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<get<2>(cases[i])<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def uniquePaths(self, m, n):\n        return uniquePaths(m, n)`}

cases=[(3,7,28),(3,2,3),(7,3,28),(3,3,6),(1,1,1)]
sol=Solution();passed=0
for i,(m,n,exp) in enumerate(cases):
    try:
        res=sol.uniquePaths(m,n)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[] m={3,3,7,3,1};int[] n={7,2,3,3,1};int[] exp={28,3,28,6,1};
        int passed=0;
        for(int i=0;i<m.length;i++){
            try{
                int res=sol.uniquePaths(m[i],n[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+m.length+" cases passed.");
    }
}`
  },

  '198': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,int>> cases={{{1,2,3,1},4},{{2,7,9,3,1},12},{{1},1},{{2,1},2}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.rob(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def rob(self, nums):\n        return rob(nums)`}

cases=[([1,2,3,1],4),([2,7,9,3,1],12),([1],1),([2,1],2)]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        res=sol.rob(nums)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{1,2,3,1},{2,7,9,3,1},{1},{2,1}};
        int[] exp={4,12,1,2};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int res=sol.rob(nums[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '300': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,int>> cases={{{10,9,2,5,3,7,101,18},4},{{0,1,0,3,2,3},4},{{7,7,7,7,7,7,7},1}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.lengthOfLIS(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def lengthOfLIS(self, nums):\n        return lengthOfLIS(nums)`}

cases=[([10,9,2,5,3,7,101,18],4),([0,1,0,3,2,3],4),([7,7,7,7,7,7,7],1)]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        res=sol.lengthOfLIS(nums)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{10,9,2,5,3,7,101,18},{0,1,0,3,2,3},{7,7,7,7,7,7,7}};
        int[] exp={4,4,1};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int res=sol.lengthOfLIS(nums[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '322': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<vector<int>,int,int>> cases={{{1,5,10,25},30,2},{{1,2,5},11,3},{{2},3,-1},{{1},0,0}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.coinChange(get<0>(cases[i]),get<1>(cases[i]));
            if(res==get<2>(cases[i])){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<get<2>(cases[i])<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def coinChange(self, coins, amount):\n        return coinChange(coins, amount)`}

cases=[([1,5,10,25],30,2),([1,2,5],11,3),([2],3,-1),([1],0,0)]
sol=Solution();passed=0
for i,(coins,amount,exp) in enumerate(cases):
    try:
        res=sol.coinChange(coins,amount)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] coins={{1,5,10,25},{1,2,5},{2},{1}};
        int[] amounts={30,11,3,0};int[] exp={2,3,-1,0};
        int passed=0;
        for(int i=0;i<coins.length;i++){
            try{
                int res=sol.coinChange(coins[i],amounts[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+coins.length+" cases passed.");
    }
}`
  },

  '416': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,bool>> cases={{{1,5,11,5},true},{{1,2,3,5},false},{{1,1},true}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            bool res=sol.canPartition(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def canPartition(self, nums):\n        return canPartition(nums)`}

cases=[([1,5,11,5],True),([1,2,3,5],False),([1,1],True)]
sol=Solution();passed=0
for i,(nums,exp) in enumerate(cases):
    try:
        res=sol.canPartition(nums)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{1,5,11,5},{1,2,3,5},{1,1}};
        boolean[] exp={true,false,true};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                boolean res=sol.canPartition(nums[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '1143': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<string,string,int>> cases={{"abcde","ace",3},{"abc","abc",3},{"abc","def",0},{"bl","yby",1}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.longestCommonSubsequence(get<0>(cases[i]),get<1>(cases[i]));
            if(res==get<2>(cases[i])){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<get<2>(cases[i])<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def longestCommonSubsequence(self, text1, text2):\n        return longestCommonSubsequence(text1, text2)`}

cases=[("abcde","ace",3),("abc","abc",3),("abc","def",0),("bl","yby",1)]
sol=Solution();passed=0
for i,(t1,t2,exp) in enumerate(cases):
    try:
        res=sol.longestCommonSubsequence(t1,t2)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        String[] t1={"abcde","abc","abc","bl"};
        String[] t2={"ace","abc","def","yby"};
        int[] exp={3,3,0,1};
        int passed=0;
        for(int i=0;i<t1.length;i++){
            try{
                int res=sol.longestCommonSubsequence(t1[i],t2[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+t1.length+" cases passed.");
    }
}`
  },

  '215': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<vector<int>,int,int>> cases={{{3,2,1,5,6,4},2,5},{{3,2,3,1,2,4,5,5,6},4,4}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.findKthLargest(get<0>(cases[i]),get<1>(cases[i]));
            if(res==get<2>(cases[i])){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<get<2>(cases[i])<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `import heapq
${u}

${h ? '' : `class Solution:\n    def findKthLargest(self, nums, k):\n        return findKthLargest(nums, k)`}

cases=[([3,2,1,5,6,4],2,5),([3,2,3,1,2,4,5,5,6],4,4)]
sol=Solution();passed=0
for i,(nums,k,exp) in enumerate(cases):
    try:
        res=sol.findKthLargest(nums,k)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{3,2,1,5,6,4},{3,2,3,1,2,4,5,5,6}};
        int[] k={2,4};int[] exp={5,4};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int res=sol.findKthLargest(nums[i],k[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '347': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<vector<int>,int,vector<int>>> cases={{{1,1,1,2,2,3},2,{1,2}},{{1},1,{1}}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            auto res=sol.topKFrequent(get<0>(cases[i]),get<1>(cases[i]));
            auto r=res;auto e=get<2>(cases[i]);
            sort(r.begin(),r.end());sort(e.begin(),e.end());
            if(r==e){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `import heapq
${u}

${h ? '' : `class Solution:\n    def topKFrequent(self, nums, k):\n        return topKFrequent(nums, k)`}

cases=[([1,1,1,2,2,3],2,[1,2]),([1],1,[1])]
sol=Solution();passed=0
for i,(nums,k,exp) in enumerate(cases):
    try:
        res=sol.topKFrequent(nums,k)
        if sorted(res)==sorted(exp):print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {sorted(exp)}, Got {sorted(res)})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;import java.util.stream.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{1,1,1,2,2,3},{1}};int[] k={2,1};int[][] exp={{1,2},{1}};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int[] res=sol.topKFrequent(nums[i],k[i]);
                int[] r=res.clone();int[] e=exp[i].clone();
                Arrays.sort(r);Arrays.sort(e);
                if(Arrays.equals(r,e)){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '560': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<vector<int>,int,int>> cases={{{1,1,1},2,2},{{1,2,3},3,2},{{0,0,0,0},0,10}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.subarraySum(get<0>(cases[i]),get<1>(cases[i]));
            if(res==get<2>(cases[i])){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<get<2>(cases[i])<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def subarraySum(self, nums, k):\n        return subarraySum(nums, k)`}

cases=[([1,1,1],2,2),([1,2,3],3,2),([0,0,0,0],0,10)]
sol=Solution();passed=0
for i,(nums,k,exp) in enumerate(cases):
    try:
        res=sol.subarraySum(nums,k)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{1,1,1},{1,2,3},{0,0,0,0}};
        int[] k={2,3,0};int[] exp={2,2,10};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int res=sol.subarraySum(nums[i],k[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '76': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<string,string,string>> cases={{"ADOBECODEBANC","ABC","BANC"},{"a","a","a"},{"a","aa",""}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            string res=sol.minWindow(get<0>(cases[i]),get<1>(cases[i]));
            if(res==get<2>(cases[i])){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected '"<<get<2>(cases[i])<<"', Got '"<<res<<"')\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def minWindow(self, s, t):\n        return minWindow(s, t)`}

cases=[("ADOBECODEBANC","ABC","BANC"),("a","a","a"),("a","aa","")]
sol=Solution();passed=0
for i,(s,t,exp) in enumerate(cases):
    try:
        res=sol.minWindow(s,t)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected '{exp}', Got '{res}')")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        String[] s={"ADOBECODEBANC","a","a"};
        String[] t={"ABC","a","aa"};
        String[] exp={"BANC","a",""};
        int passed=0;
        for(int i=0;i<s.length;i++){
            try{
                String res=sol.minWindow(s[i],t[i]);
                if(res.equals(exp[i])){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+s.length+" cases passed.");
    }
}`
  },

  '42': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,int>> cases={{{0,1,0,2,1,0,1,3,2,1,2,1},6},{{4,2,0,3,2,5},9},{{3,0,2,0,4},7}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.trap(cases[i].first);
            if(res==cases[i].second){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<cases[i].second<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def trap(self, height):\n        return trap(height)`}

cases=[([0,1,0,2,1,0,1,3,2,1,2,1],6),([4,2,0,3,2,5],9),([3,0,2,0,4],7)]
sol=Solution();passed=0
for i,(h,exp) in enumerate(cases):
    try:
        res=sol.trap(h)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] h={{0,1,0,2,1,0,1,3,2,1,2,1},{4,2,0,3,2,5},{3,0,2,0,4}};
        int[] exp={6,9,7};
        int passed=0;
        for(int i=0;i<h.length;i++){
            try{
                int res=sol.trap(h[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+h.length+" cases passed.");
    }
}`
  },

  '239': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<vector<int>,int,vector<int>>> cases={{{1,3,-1,-3,5,3,6,7},3,{3,3,5,5,6,7}},{{1},1,{1}}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            auto res=sol.maxSlidingWindow(get<0>(cases[i]),get<1>(cases[i]));
            if(res==get<2>(cases[i])){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `from collections import deque
${u}

${h ? '' : `class Solution:\n    def maxSlidingWindow(self, nums, k):\n        return maxSlidingWindow(nums, k)`}

cases=[([1,3,-1,-3,5,3,6,7],3,[3,3,5,5,6,7]),([1],1,[1])]
sol=Solution();passed=0
for i,(nums,k,exp) in enumerate(cases):
    try:
        res=sol.maxSlidingWindow(nums,k)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] nums={{1,3,-1,-3,5,3,6,7},{1}};
        int[] k={3,1};int[][] exp={{3,3,5,5,6,7},{1}};
        int passed=0;
        for(int i=0;i<nums.length;i++){
            try{
                int[] res=sol.maxSlidingWindow(nums[i],k[i]);
                if(Arrays.equals(res,exp[i])){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+nums.length+" cases passed.");
    }
}`
  },

  '583': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<string,string,int>> cases={{"sea","eat",2},{"leetcode","etco",4},{"abc","",3},{"","",0}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            int res=sol.minDistance(get<0>(cases[i]),get<1>(cases[i]));
            if(res==get<2>(cases[i])){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED (Expected "<<get<2>(cases[i])<<", Got "<<res<<")\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def minDistance(self, word1, word2):\n        return minDistance(word1, word2)`}

cases=[("sea","eat",2),("leetcode","etco",4),("abc","",3),("","",0)]
sol=Solution();passed=0
for i,(w1,w2,exp) in enumerate(cases):
    try:
        res=sol.minDistance(w1,w2)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();
        String[] w1={"sea","leetcode","abc",""};
        String[] w2={"eat","etco","",""};
        int[] exp={2,4,3,0};
        int passed=0;
        for(int i=0;i<w1.length;i++){
            try{
                int res=sol.minDistance(w1[i],w2[i]);
                if(res==exp[i]){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception e){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+w1.length+" cases passed.");
    }
}`
  },

  '200': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    int passed=0;
    try{
        vector<vector<char>> g={{'1','1','1','1','0'},{'1','1','0','1','0'},{'1','1','0','0','0'},{'0','0','0','0','0'}};
        int res=sol.numIslands(g);
        if(res==1){cout<<"Case 1: PASSED\\n";passed++;}else cout<<"Case 1: FAILED (Expected 1, Got "<<res<<")\\n";
    }catch(...){cout<<"Case 1: ERROR\\n";}
    try{
        vector<vector<char>> g={{'1','1','0','0','0'},{'1','1','0','0','0'},{'0','0','1','0','0'},{'0','0','0','1','1'}};
        int res=sol.numIslands(g);
        if(res==3){cout<<"Case 2: PASSED\\n";passed++;}else cout<<"Case 2: FAILED (Expected 3, Got "<<res<<")\\n";
    }catch(...){cout<<"Case 2: ERROR\\n";}
    cout<<"\\n[Test Results] "<<passed<<"/2 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def numIslands(self, grid):\n        return numIslands(grid)`}

import copy
cases=[
    ([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]],1),
    ([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]],3)
]
sol=Solution();passed=0
for i,(grid,exp) in enumerate(cases):
    try:
        res=sol.numIslands(copy.deepcopy(grid))
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();int passed=0;
        try{
            char[][] g={{'1','1','1','1','0'},{'1','1','0','1','0'},{'1','1','0','0','0'},{'0','0','0','0','0'}};
            int res=sol.numIslands(g);
            if(res==1){System.out.println("Case 1: PASSED");passed++;}else System.out.println("Case 1: FAILED (Expected 1, Got "+res+")");
        }catch(Exception e){System.out.println("Case 1: ERROR");}
        try{
            char[][] g={{'1','1','0','0','0'},{'1','1','0','0','0'},{'0','0','1','0','0'},{'0','0','0','1','1'}};
            int res=sol.numIslands(g);
            if(res==3){System.out.println("Case 2: PASSED");passed++;}else System.out.println("Case 2: FAILED (Expected 3, Got "+res+")");
        }catch(Exception e){System.out.println("Case 2: ERROR");}
        System.out.println("\\n[Test Results] "+passed+"/2 cases passed.");
    }
}`
  },

  '207': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;int passed=0;
    try{vector<vector<int>> p={{1,0}};bool res=sol.canFinish(2,p);if(res){cout<<"Case 1: PASSED\\n";passed++;}else cout<<"Case 1: FAILED\\n";}catch(...){cout<<"Case 1: ERROR\\n";}
    try{vector<vector<int>> p={{1,0},{0,1}};bool res=sol.canFinish(2,p);if(!res){cout<<"Case 2: PASSED\\n";passed++;}else cout<<"Case 2: FAILED\\n";}catch(...){cout<<"Case 2: ERROR\\n";}
    try{vector<vector<int>> p={};bool res=sol.canFinish(1,p);if(res){cout<<"Case 3: PASSED\\n";passed++;}else cout<<"Case 3: FAILED\\n";}catch(...){cout<<"Case 3: ERROR\\n";}
    cout<<"\\n[Test Results] "<<passed<<"/3 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def canFinish(self, numCourses, prerequisites):\n        return canFinish(numCourses, prerequisites)`}

cases=[(2,[[1,0]],True),(2,[[1,0],[0,1]],False),(1,[],True)]
sol=Solution();passed=0
for i,(n,prereqs,exp) in enumerate(cases):
    try:
        res=sol.canFinish(n,prereqs)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();int passed=0;
        try{boolean res=sol.canFinish(2,new int[][]{{1,0}});if(res){System.out.println("Case 1: PASSED");passed++;}else System.out.println("Case 1: FAILED");}catch(Exception e){System.out.println("Case 1: ERROR");}
        try{boolean res=sol.canFinish(2,new int[][]{{1,0},{0,1}});if(!res){System.out.println("Case 2: PASSED");passed++;}else System.out.println("Case 2: FAILED");}catch(Exception e){System.out.println("Case 2: ERROR");}
        try{boolean res=sol.canFinish(1,new int[][]{});if(res){System.out.println("Case 3: PASSED");passed++;}else System.out.println("Case 3: FAILED");}catch(Exception e){System.out.println("Case 3: ERROR");}
        System.out.println("\\n[Test Results] "+passed+"/3 cases passed.");
    }
}`
  },

  '206': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_LIST}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,vector<int>>> cases={{{1,2,3,4,5},{5,4,3,2,1}},{{1,2},{2,1}},{{},{} },{{1},{1}}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            auto rev=sol.reverseList(buildList(cases[i].first));
            if(listToStr(rev)==listToStr(buildList(cases[i].second))){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_LIST}

from typing import Optional
${u}

${h ? '' : `class Solution:\n    def reverseList(self, head):\n        return reverseList(head)`}

cases=[([1,2,3,4,5],[5,4,3,2,1]),([1,2],[2,1]),([],[]),([1],[1])]
sol=Solution();passed=0
for i,(vals,exp) in enumerate(cases):
    try:
        res=sol.reverseList(buildList(vals))
        out=listToArr(res)
        if out==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {out})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_LIST}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static ListNode build(int[] v){if(v.length==0)return null;ListNode h=new ListNode(v[0]);ListNode c=h;for(int i=1;i<v.length;i++){c.next=new ListNode(v[i]);c=c.next;}return h;}
    static List<Integer> toList(ListNode h){List<Integer> r=new ArrayList<>();while(h!=null){r.add(h.val);h=h.next;}return r;}
    public static void main(String[] args) {
        Solution sol=new Solution();
        int[][] inputs={{1,2,3,4,5},{1,2},{},{1}};
        int[][] exp={{5,4,3,2,1},{2,1},{},{1}};
        int passed=0;
        for(int i=0;i<inputs.length;i++){
            try{
                ListNode res=sol.reverseList(build(inputs[i]));
                List<Integer> r=toList(res);
                List<Integer> e=new ArrayList<>();for(int x:exp[i])e.add(x);
                if(r.equals(e)){System.out.println("Case "+(i+1)+": PASSED");passed++;}
                else System.out.println("Case "+(i+1)+": FAILED");
            }catch(Exception ex){System.out.println("Case "+(i+1)+": ERROR");}
        }
        System.out.println("\\n[Test Results] "+passed+"/"+inputs.length+" cases passed.");
    }
}`
  },

  '21': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_LIST}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<vector<int>,vector<int>,vector<int>>> cases={{{1,2,4},{1,3,4},{1,1,2,3,4,4}},{{},{},{} },{{},{0},{0}},{{1},{},{1}}};
    int passed=0;
    for(int i=0;i<(int)cases.size();i++){
        try{
            auto res=sol.mergeTwoLists(buildList(get<0>(cases[i])),buildList(get<1>(cases[i])));
            if(listToStr(res)==listToStr(buildList(get<2>(cases[i])))){cout<<"Case "<<i+1<<": PASSED\\n";passed++;}
            else cout<<"Case "<<i+1<<": FAILED\\n";
        }catch(...){cout<<"Case "<<i+1<<": ERROR\\n";}
    }
    cout<<"\\n[Test Results] "<<passed<<"/"<<cases.size()<<" cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_LIST}

from typing import Optional
${u}

${h ? '' : `class Solution:\n    def mergeTwoLists(self, list1, list2):\n        return mergeTwoLists(list1, list2)`}

cases=[([1,2,4],[1,3,4],[1,1,2,3,4,4]),([],[],[]),([],[0],[0]),([1],[],[1])]
sol=Solution();passed=0
for i,(l1,l2,exp) in enumerate(cases):
    try:
        res=sol.mergeTwoLists(buildList(l1),buildList(l2))
        out=listToArr(res)
        if out==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {out})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_LIST}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static ListNode build(int[] v){if(v.length==0)return null;ListNode h=new ListNode(v[0]);ListNode c=h;for(int i=1;i<v.length;i++){c.next=new ListNode(v[i]);c=c.next;}return h;}
    static List<Integer> toList(ListNode h){List<Integer> r=new ArrayList<>();while(h!=null){r.add(h.val);h=h.next;}return r;}
    public static void main(String[] args) {
        Solution sol=new Solution();int passed=0;
        try{ListNode res=sol.mergeTwoLists(build(new int[]{1,2,4}),build(new int[]{1,3,4}));if(toList(res).equals(Arrays.asList(1,1,2,3,4,4))){System.out.println("Case 1: PASSED");passed++;}else System.out.println("Case 1: FAILED");}catch(Exception e){System.out.println("Case 1: ERROR");}
        try{ListNode res=sol.mergeTwoLists(build(new int[]{}),build(new int[]{0}));if(toList(res).equals(Arrays.asList(0))){System.out.println("Case 2: PASSED");passed++;}else System.out.println("Case 2: FAILED");}catch(Exception e){System.out.println("Case 2: ERROR");}
        System.out.println("\\n[Test Results] "+passed+"/2 cases passed.");
    }
}`
  },

  '141': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_LIST}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;int passed=0;
    try{
        ListNode* h=buildList({1,2,3,4});
        bool res=sol.hasCycle(h);
        if(!res){cout<<"Case 1: PASSED\\n";passed++;}else cout<<"Case 1: FAILED (Expected false)\\n";
    }catch(...){cout<<"Case 1: ERROR\\n";}
    try{
        ListNode* h=buildList({3,2,0,-4});
        ListNode* tail=h->next->next->next;tail->next=h->next;
        bool res=sol.hasCycle(h);
        if(res){cout<<"Case 2: PASSED\\n";passed++;}else cout<<"Case 2: FAILED (Expected true)\\n";
    }catch(...){cout<<"Case 2: ERROR\\n";}
    cout<<"\\n[Test Results] "<<passed<<"/2 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_LIST}

from typing import Optional
${u}

${h ? '' : `class Solution:\n    def hasCycle(self, head):\n        return hasCycle(head)`}

sol=Solution();passed=0
try:
    h=buildList([1,2,3,4])
    res=sol.hasCycle(h)
    if not res:print("Case 1: PASSED");passed+=1
    else:print("Case 1: FAILED (Expected False)")
except Exception as e:print(f"Case 1: ERROR ({e})")
try:
    h=buildList([3,2,0,-4])
    cur=h
    while cur.next:cur=cur.next
    cur.next=h.next
    res=sol.hasCycle(h)
    if res:print("Case 2: PASSED");passed+=1
    else:print("Case 2: FAILED (Expected True)")
except Exception as e:print(f"Case 2: ERROR ({e})")
print(f"\\n[Test Results] {passed}/2 cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_LIST}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static ListNode build(int[] v){if(v.length==0)return null;ListNode h=new ListNode(v[0]);ListNode c=h;for(int i=1;i<v.length;i++){c.next=new ListNode(v[i]);c=c.next;}return h;}
    public static void main(String[] args) {
        Solution sol=new Solution();int passed=0;
        try{ListNode h=build(new int[]{1,2,3,4});boolean res=sol.hasCycle(h);if(!res){System.out.println("Case 1: PASSED");passed++;}else System.out.println("Case 1: FAILED");}catch(Exception e){System.out.println("Case 1: ERROR");}
        try{ListNode h=build(new int[]{3,2,0,-4});ListNode tail=h.next.next.next;tail.next=h.next;boolean res=sol.hasCycle(h);if(res){System.out.println("Case 2: PASSED");passed++;}else System.out.println("Case 2: FAILED");}catch(Exception e){System.out.println("Case 2: ERROR");}
        System.out.println("\\n[Test Results] "+passed+"/2 cases passed.");
    }
}`
  },

  '547': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;int passed=0;
    try{vector<vector<int>> c={{1,1,0},{1,1,0},{0,0,1}};int res=sol.findCircleNum(c);if(res==2){cout<<"Case 1: PASSED\\n";passed++;}else cout<<"Case 1: FAILED (Expected 2, Got "<<res<<")\\n";}catch(...){cout<<"Case 1: ERROR\\n";}
    try{vector<vector<int>> c={{1,0,0},{0,1,0},{0,0,1}};int res=sol.findCircleNum(c);if(res==3){cout<<"Case 2: PASSED\\n";passed++;}else cout<<"Case 2: FAILED (Expected 3, Got "<<res<<")\\n";}catch(...){cout<<"Case 2: ERROR\\n";}
    cout<<"\\n[Test Results] "<<passed<<"/2 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def findCircleNum(self, isConnected):\n        return findCircleNum(isConnected)`}

cases=[([[1,1,0],[1,1,0],[0,0,1]],2),([[1,0,0],[0,1,0],[0,0,1]],3)]
sol=Solution();passed=0
for i,(grid,exp) in enumerate(cases):
    try:
        res=sol.findCircleNum(grid)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();int passed=0;
        try{int res=sol.findCircleNum(new int[][]{{1,1,0},{1,1,0},{0,0,1}});if(res==2){System.out.println("Case 1: PASSED");passed++;}else System.out.println("Case 1: FAILED");}catch(Exception e){System.out.println("Case 1: ERROR");}
        try{int res=sol.findCircleNum(new int[][]{{1,0,0},{0,1,0},{0,0,1}});if(res==3){System.out.println("Case 2: PASSED");passed++;}else System.out.println("Case 2: FAILED");}catch(Exception e){System.out.println("Case 2: ERROR");}
        System.out.println("\\n[Test Results] "+passed+"/2 cases passed.");
    }
}`
  },

  '994': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;int passed=0;
    try{vector<vector<int>> g={{2,1,1},{1,1,0},{0,1,1}};int res=sol.orangesRotting(g);if(res==4){cout<<"Case 1: PASSED\\n";passed++;}else cout<<"Case 1: FAILED (Expected 4, Got "<<res<<")\\n";}catch(...){cout<<"Case 1: ERROR\\n";}
    try{vector<vector<int>> g={{2,1,1},{0,1,1},{1,0,1}};int res=sol.orangesRotting(g);if(res==-1){cout<<"Case 2: PASSED\\n";passed++;}else cout<<"Case 2: FAILED (Expected -1, Got "<<res<<")\\n";}catch(...){cout<<"Case 2: ERROR\\n";}
    try{vector<vector<int>> g={{0,2}};int res=sol.orangesRotting(g);if(res==0){cout<<"Case 3: PASSED\\n";passed++;}else cout<<"Case 3: FAILED (Expected 0, Got "<<res<<")\\n";}catch(...){cout<<"Case 3: ERROR\\n";}
    cout<<"\\n[Test Results] "<<passed<<"/3 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `from collections import deque
${u}

${h ? '' : `class Solution:\n    def orangesRotting(self, grid):\n        return orangesRotting(grid)`}

import copy
cases=[([[2,1,1],[1,1,0],[0,1,1]],4),([[2,1,1],[0,1,1],[1,0,1]],-1),([[0,2]],0)]
sol=Solution();passed=0
for i,(grid,exp) in enumerate(cases):
    try:
        res=sol.orangesRotting(copy.deepcopy(grid))
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static int[][] copy2D(int[][] g){int[][] c=new int[g.length][];for(int i=0;i<g.length;i++)c[i]=g[i].clone();return c;}
    public static void main(String[] args) {
        Solution sol=new Solution();int passed=0;
        try{int res=sol.orangesRotting(copy2D(new int[][]{{2,1,1},{1,1,0},{0,1,1}}));if(res==4){System.out.println("Case 1: PASSED");passed++;}else System.out.println("Case 1: FAILED (Expected 4, Got "+res+")");}catch(Exception e){System.out.println("Case 1: ERROR");}
        try{int res=sol.orangesRotting(copy2D(new int[][]{{2,1,1},{0,1,1},{1,0,1}}));if(res==-1){System.out.println("Case 2: PASSED");passed++;}else System.out.println("Case 2: FAILED (Expected -1, Got "+res+")");}catch(Exception e){System.out.println("Case 2: ERROR");}
        try{int res=sol.orangesRotting(copy2D(new int[][]{{0,2}}));if(res==0){System.out.println("Case 3: PASSED");passed++;}else System.out.println("Case 3: FAILED (Expected 0, Got "+res+")");}catch(Exception e){System.out.println("Case 3: ERROR");}
        System.out.println("\\n[Test Results] "+passed+"/3 cases passed.");
    }
}`
  },

  '695': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;int passed=0;
    try{vector<vector<int>> g={{0,0,1,0,0,0,0,1,0,0,0,0,0},{0,0,0,0,0,0,0,1,1,1,0,0,0},{0,1,1,0,1,0,0,0,0,0,0,0,0},{0,1,0,0,1,1,0,0,1,0,1,0,0},{0,1,0,0,1,1,0,0,1,1,1,0,0},{0,0,0,0,0,0,0,0,0,0,1,0,0},{0,0,0,0,0,0,0,1,1,1,0,0,0},{0,0,0,0,0,0,0,1,1,0,0,0,0}};
    int res=sol.maxAreaOfIsland(g);if(res==6){cout<<"Case 1: PASSED\\n";passed++;}else cout<<"Case 1: FAILED (Expected 6, Got "<<res<<")\\n";}catch(...){cout<<"Case 1: ERROR\\n";}
    try{vector<vector<int>> g={{0,0,0,0,0,0,0,0}};int res=sol.maxAreaOfIsland(g);if(res==0){cout<<"Case 2: PASSED\\n";passed++;}else cout<<"Case 2: FAILED (Expected 0, Got "<<res<<")\\n";}catch(...){cout<<"Case 2: ERROR\\n";}
    cout<<"\\n[Test Results] "<<passed<<"/2 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def maxAreaOfIsland(self, grid):\n        return maxAreaOfIsland(grid)`}

import copy
cases=[([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]],6),([[0,0,0,0,0,0,0,0]],0)]
sol=Solution();passed=0
for i,(grid,exp) in enumerate(cases):
    try:
        res=sol.maxAreaOfIsland(copy.deepcopy(grid))
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();int passed=0;
        try{int[][] g={{0,0,1,0,0,0,0,1,0,0,0,0,0},{0,0,0,0,0,0,0,1,1,1,0,0,0},{0,1,1,0,1,0,0,0,0,0,0,0,0},{0,1,0,0,1,1,0,0,1,0,1,0,0},{0,1,0,0,1,1,0,0,1,1,1,0,0},{0,0,0,0,0,0,0,0,0,0,1,0,0},{0,0,0,0,0,0,0,1,1,1,0,0,0},{0,0,0,0,0,0,0,1,1,0,0,0,0}};int res=sol.maxAreaOfIsland(g);if(res==6){System.out.println("Case 1: PASSED");passed++;}else System.out.println("Case 1: FAILED (Expected 6, Got "+res+")");}catch(Exception e){System.out.println("Case 1: ERROR");}
        try{int[][] g={{0,0,0,0,0,0,0,0}};int res=sol.maxAreaOfIsland(g);if(res==0){System.out.println("Case 2: PASSED");passed++;}else System.out.println("Case 2: FAILED (Expected 0, Got "+res+")");}catch(Exception e){System.out.println("Case 2: ERROR");}
        System.out.println("\\n[Test Results] "+passed+"/2 cases passed.");
    }
}`
  },

  '785': {
    cpp: (u, h) => `${CPP_HEADERS}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;int passed=0;
    try{vector<vector<int>> g={{1,2,3},{0,2},{0,1,3},{0,2}};bool res=sol.isBipartite(g);if(!res){cout<<"Case 1: PASSED\\n";passed++;}else cout<<"Case 1: FAILED (Expected false)\\n";}catch(...){cout<<"Case 1: ERROR\\n";}
    try{vector<vector<int>> g={{1,3},{0,2},{1,3},{0,2}};bool res=sol.isBipartite(g);if(res){cout<<"Case 2: PASSED\\n";passed++;}else cout<<"Case 2: FAILED (Expected true)\\n";}catch(...){cout<<"Case 2: ERROR\\n";}
    cout<<"\\n[Test Results] "<<passed<<"/2 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}

${h ? '' : `class Solution:\n    def isBipartite(self, graph):\n        return isBipartite(graph)`}

cases=[([[1,2,3],[0,2],[0,1,3],[0,2]],False),([[1,3],[0,2],[1,3],[0,2]],True)]
sol=Solution();passed=0
for i,(graph,exp) in enumerate(cases):
    try:
        res=sol.isBipartite(graph)
        if res==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {res})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    public static void main(String[] args) {
        Solution sol=new Solution();int passed=0;
        try{boolean res=sol.isBipartite(new int[][]{{1,2,3},{0,2},{0,1,3},{0,2}});if(!res){System.out.println("Case 1: PASSED");passed++;}else System.out.println("Case 1: FAILED (Expected false)");}catch(Exception e){System.out.println("Case 1: ERROR");}
        try{boolean res=sol.isBipartite(new int[][]{{1,3},{0,2},{1,3},{0,2}});if(res){System.out.println("Case 2: PASSED");passed++;}else System.out.println("Case 2: FAILED (Expected true)");}catch(Exception e){System.out.println("Case 2: ERROR");}
        System.out.println("\\n[Test Results] "+passed+"/2 cases passed.");
    }
}`
  },

  '226': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_TREE}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
vector<int> bfs(TreeNode* root){
    if(!root)return{};
    vector<int> res;queue<TreeNode*> q;q.push(root);
    while(!q.empty()){auto n=q.front();q.pop();res.push_back(n->val);if(n->left)q.push(n->left);if(n->right)q.push(n->right);}
    return res;
}
int main() {
    Solution sol;int passed=0;
    try{TreeNode* r=sol.invertTree(buildTree({4,2,7,1,3,6,9}));if(bfs(r)==vector<int>{4,7,2,9,6,3,1}){cout<<"Case 1: PASSED\\n";passed++;}else cout<<"Case 1: FAILED\\n";}catch(...){cout<<"Case 1: ERROR\\n";}
    try{TreeNode* r=sol.invertTree(buildTree({2,1,3}));if(bfs(r)==vector<int>{2,3,1}){cout<<"Case 2: PASSED\\n";passed++;}else cout<<"Case 2: FAILED\\n";}catch(...){cout<<"Case 2: ERROR\\n";}
    cout<<"\\n[Test Results] "<<passed<<"/2 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_TREE}

from typing import Optional
${u}

${h ? '' : `class Solution:\n    def invertTree(self, root):\n        return invertTree(root)`}

cases=[([4,2,7,1,3,6,9],[4,7,2,9,6,3,1]),([2,1,3],[2,3,1])]
sol=Solution();passed=0
for i,(vals,exp) in enumerate(cases):
    try:
        root=buildTree(vals)
        res=sol.invertTree(root)
        out=treeToList(res)
        if out==exp:print(f"Case {i+1}: PASSED");passed+=1
        else:print(f"Case {i+1}: FAILED (Expected {exp}, Got {out})")
    except Exception as e:print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_TREE}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static TreeNode build(int[] v){if(v.length==0)return null;TreeNode root=new TreeNode(v[0]);Queue<TreeNode> q=new LinkedList<>();q.add(root);int i=1;while(!q.isEmpty()&&i<v.length){TreeNode n=q.poll();if(i<v.length){n.left=new TreeNode(v[i++]);q.add(n.left);}if(i<v.length){n.right=new TreeNode(v[i++]);q.add(n.right);}}return root;}
    static List<Integer> bfs(TreeNode root){List<Integer> r=new ArrayList<>();if(root==null)return r;Queue<TreeNode> q=new LinkedList<>();q.add(root);while(!q.isEmpty()){TreeNode n=q.poll();r.add(n.val);if(n.left!=null)q.add(n.left);if(n.right!=null)q.add(n.right);}return r;}
    public static void main(String[] args) {
        Solution sol=new Solution();int passed=0;
        try{TreeNode r=sol.invertTree(build(new int[]{4,2,7,1,3,6,9}));if(bfs(r).equals(Arrays.asList(4,7,2,9,6,3,1))){System.out.println("Case 1: PASSED");passed++;}else System.out.println("Case 1: FAILED");}catch(Exception e){System.out.println("Case 1: ERROR");}
        try{TreeNode r=sol.invertTree(build(new int[]{2,1,3}));if(bfs(r).equals(Arrays.asList(2,3,1))){System.out.println("Case 2: PASSED");passed++;}else System.out.println("Case 2: FAILED");}catch(Exception e){System.out.println("Case 2: ERROR");}
        System.out.println("\\n[Test Results] "+passed+"/2 cases passed.");
    }
}`
  },

  // ─── Palindrome Linked List (ID 234)
  '234': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_LIST}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,bool>> cases = {
        {{1,2,2,1}, true}, {{1,2}, false}, {{1}, true}, {{}, true}
    };
    int passed = 0;
    for (int i = 0; i < (int)cases.size(); i++) {
        try {
            ListNode* h = buildList(cases[i].first);
            bool res = sol.isPalindrome(h);
            if (res == cases[i].second) { cout << "Case " << i+1 << ": PASSED\\n"; passed++; }
            else cout << "Case " << i+1 << ": FAILED\\n";
        } catch(...) { cout << "Case " << i+1 << ": ERROR\\n"; }
    }
    cout << "\\n[Test Results] " << passed << "/" << cases.size() << " cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_LIST}
from typing import Optional
${u}
${h ? '' : `class Solution:\n    def isPalindrome(self, head):\n        return isPalindrome(head)`}
cases = [([1,2,2,1], True), ([1,2], False), ([1], True), ([], True)]
sol = Solution(); passed = 0
for i, (vals, exp) in enumerate(cases):
    try:
        h = buildList(vals)
        res = sol.isPalindrome(h)
        if res == exp: print(f"Case {i+1}: PASSED"); passed += 1
        else: print(f"Case {i+1}: FAILED")
    except Exception as e: print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_LIST}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static ListNode build(int[] v) {
        if (v.length == 0) return null;
        ListNode h = new ListNode(v[0]); ListNode c = h;
        for (int i=1;i<v.length;i++) { c.next = new ListNode(v[i]); c = c.next; }
        return h;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] inputs = {{1,2,2,1}, {1,2}, {1}, {}};
        boolean[] exp = {true, false, true, true};
        int passed = 0;
        for (int i = 0; i < inputs.length; i++) {
            try {
                boolean res = sol.isPalindrome(build(inputs[i]));
                if (res == exp[i]) { System.out.println("Case "+(i+1)+": PASSED"); passed++; }
                else System.out.println("Case "+(i+1)+": FAILED");
            } catch(Exception e) { System.out.println("Case "+(i+1)+": ERROR"); }
        }
        System.out.println("\\n[Test Results] "+passed+"/"+inputs.length+" cases passed.");
    }
}`
  },

  // ─── Add Two Numbers (ID 2)
  '2': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_LIST}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<vector<int>,vector<int>,vector<int>>> cases = {
        {{2,4,3}, {5,6,4}, {7,0,8}},
        {{0}, {0}, {0}},
        {{9,9,9,9,9,9,9}, {9,9,9,9}, {8,9,9,9,0,0,0,1}}
    };
    int passed = 0;
    for (int i = 0; i < (int)cases.size(); i++) {
        try {
            ListNode* l1 = buildList(get<0>(cases[i]));
            ListNode* l2 = buildList(get<1>(cases[i]));
            ListNode* res = sol.addTwoNumbers(l1, l2);
            if (listToStr(res) == listToStr(buildList(get<2>(cases[i])))) { cout << "Case " << i+1 << ": PASSED\\n"; passed++; }
            else cout << "Case " << i+1 << ": FAILED\\n";
        } catch(...) { cout << "Case " << i+1 << ": ERROR\\n"; }
    }
    cout << "\\n[Test Results] " << passed << "/" << cases.size() << " cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_LIST}
from typing import Optional
${u}
${h ? '' : `class Solution:\n    def addTwoNumbers(self, l1, l2):\n        return addTwoNumbers(l1, l2)`}
cases = [([2,4,3], [5,6,4], [7,0,8]), ([0], [0], [0]), ([9,9,9,9,9,9,9], [9,9,9,9], [8,9,9,9,0,0,0,1])]
sol = Solution(); passed = 0
for i, (l1, l2, exp) in enumerate(cases):
    try:
        res = sol.addTwoNumbers(buildList(l1), buildList(l2))
        out = listToArr(res)
        if out == exp: print(f"Case {i+1}: PASSED"); passed += 1
        else: print(f"Case {i+1}: FAILED")
    except Exception as e: print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_LIST}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static ListNode build(int[] v) {
        if (v.length == 0) return null;
        ListNode h = new ListNode(v[0]); ListNode c = h;
        for (int i=1;i<v.length;i++) { c.next = new ListNode(v[i]); c = c.next; }
        return h;
    }
    static List<Integer> toList(ListNode h) {
        List<Integer> r = new ArrayList<>(); while(h!=null){r.add(h.val);h=h.next;} return r;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int passed = 0;
        int[][] l1 = {{2,4,3}, {0}, {9,9,9,9,9,9,9}};
        int[][] l2 = {{5,6,4}, {0}, {9,9,9,9}};
        List<List<Integer>> exp = Arrays.asList(
            Arrays.asList(7,0,8), Arrays.asList(0), Arrays.asList(8,9,9,9,0,0,0,1)
        );
        for (int i = 0; i < l1.length; i++) {
            try {
                ListNode res = sol.addTwoNumbers(build(l1[i]), build(l2[i]));
                if (toList(res).equals(exp.get(i))) { System.out.println("Case "+(i+1)+": PASSED"); passed++; }
                else System.out.println("Case "+(i+1)+": FAILED");
            } catch(Exception e) { System.out.println("Case "+(i+1)+": ERROR"); }
        }
        System.out.println("\\n[Test Results] "+passed+"/"+l1.length+" cases passed.");
    }
}`
  },

  // ─── Remove Nth Node From End (ID 19)
  '19': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_LIST}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<tuple<vector<int>,int,vector<int>>> cases = {
        {{1,2,3,4,5}, 2, {1,2,3,5}},
        {{1}, 1, {}},
        {{1,2}, 1, {1}}
    };
    int passed = 0;
    for (int i = 0; i < (int)cases.size(); i++) {
        try {
            ListNode* res = sol.removeNthFromEnd(buildList(get<0>(cases[i])), get<1>(cases[i]));
            if (listToStr(res) == listToStr(buildList(get<2>(cases[i])))) { cout << "Case " << i+1 << ": PASSED\\n"; passed++; }
            else cout << "Case " << i+1 << ": FAILED\\n";
        } catch(...) { cout << "Case " << i+1 << ": ERROR\\n"; }
    }
    cout << "\\n[Test Results] " << passed << "/" << cases.size() << " cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_LIST}
from typing import Optional
${u}
${h ? '' : `class Solution:\n    def removeNthFromEnd(self, head, n):\n        return removeNthFromEnd(head, n)`}
cases = [([1,2,3,4,5], 2, [1,2,3,5]), ([1], 1, []), ([1,2], 1, [1])]
sol = Solution(); passed = 0
for i, (vals, n, exp) in enumerate(cases):
    try:
        res = sol.removeNthFromEnd(buildList(vals), n)
        out = listToArr(res)
        if out == exp: print(f"Case {i+1}: PASSED"); passed += 1
        else: print(f"Case {i+1}: FAILED")
    except Exception as e: print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_LIST}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static ListNode build(int[] v) {
        if (v.length == 0) return null;
        ListNode h = new ListNode(v[0]); ListNode c = h;
        for (int i=1;i<v.length;i++) { c.next = new ListNode(v[i]); c = c.next; }
        return h;
    }
    static List<Integer> toList(ListNode h) {
        List<Integer> r = new ArrayList<>(); while(h!=null){r.add(h.val);h=h.next;} return r;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int passed = 0;
        int[][] inputs = {{1,2,3,4,5}, {1}, {1,2}};
        int[] n = {2, 1, 1};
        List<List<Integer>> exp = Arrays.asList(
            Arrays.asList(1,2,3,5), Arrays.asList(), Arrays.asList(1)
        );
        for (int i = 0; i < inputs.length; i++) {
            try {
                ListNode res = sol.removeNthFromEnd(build(inputs[i]), n[i]);
                if (toList(res).equals(exp.get(i))) { System.out.println("Case "+(i+1)+": PASSED"); passed++; }
                else System.out.println("Case "+(i+1)+": FAILED");
            } catch(Exception e) { System.out.println("Case "+(i+1)+": ERROR"); }
        }
        System.out.println("\\n[Test Results] "+passed+"/"+inputs.length+" cases passed.");
    }
}`
  },

  // ─── Linked List Cycle II (ID 142)
  '142': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_LIST}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    int passed = 0;
    try {
        ListNode* h = buildList({3,2,0,-4});
        ListNode* cycleStart = h->next;
        h->next->next->next->next = cycleStart; // create cycle
        ListNode* res = sol.detectCycle(h);
        if (res == cycleStart) { cout << "Case 1: PASSED\\n"; passed++; }
        else cout << "Case 1: FAILED\\n";
    } catch(...) { cout << "Case 1: ERROR\\n"; }

    try {
        ListNode* h = buildList({1,2});
        ListNode* cycleStart = h;
        h->next->next = cycleStart; // create cycle
        ListNode* res = sol.detectCycle(h);
        if (res == cycleStart) { cout << "Case 2: PASSED\\n"; passed++; }
        else cout << "Case 2: FAILED\\n";
    } catch(...) { cout << "Case 2: ERROR\\n"; }

    try {
        ListNode* h = buildList({1});
        ListNode* res = sol.detectCycle(h);
        if (res == nullptr) { cout << "Case 3: PASSED\\n"; passed++; }
        else cout << "Case 3: FAILED\\n";
    } catch(...) { cout << "Case 3: ERROR\\n"; }

    cout << "\\n[Test Results] " << passed << "/3 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_LIST}
from typing import Optional
${u}
${h ? '' : `class Solution:\n    def detectCycle(self, head):\n        return detectCycle(head)`}
sol = Solution(); passed = 0
try:
    h = buildList([3,2,0,-4])
    cycleStart = h.next
    h.next.next.next.next = cycleStart
    res = sol.detectCycle(h)
    if res == cycleStart: print("Case 1: PASSED"); passed += 1
    else: print("Case 1: FAILED")
except Exception as e: print(f"Case 1: ERROR ({e})")

try:
    h = buildList([1,2])
    cycleStart = h
    h.next.next = cycleStart
    res = sol.detectCycle(h)
    if res == cycleStart: print("Case 2: PASSED"); passed += 1
    else: print("Case 2: FAILED")
except Exception as e: print(f"Case 2: ERROR ({e})")

try:
    h = buildList([1])
    res = sol.detectCycle(h)
    if res is None: print("Case 3: PASSED"); passed += 1
    else: print("Case 3: FAILED")
except Exception as e: print(f"Case 3: ERROR ({e})")

print(f"\\n[Test Results] {passed}/3 cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_LIST}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static ListNode build(int[] v) {
        if (v.length == 0) return null;
        ListNode h = new ListNode(v[0]); ListNode c = h;
        for (int i=1;i<v.length;i++) { c.next = new ListNode(v[i]); c = c.next; }
        return h;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int passed = 0;
        try {
            ListNode h = build(new int[]{3,2,0,-4});
            ListNode cycleStart = h.next;
            h.next.next.next.next = cycleStart;
            ListNode res = sol.detectCycle(h);
            if (res == cycleStart) { System.out.println("Case 1: PASSED"); passed++; }
            else System.out.println("Case 1: FAILED");
        } catch(Exception e) { System.out.println("Case 1: ERROR"); }

        try {
            ListNode h = build(new int[]{1,2});
            ListNode cycleStart = h;
            h.next.next = cycleStart;
            ListNode res = sol.detectCycle(h);
            if (res == cycleStart) { System.out.println("Case 2: PASSED"); passed++; }
            else System.out.println("Case 2: FAILED");
        } catch(Exception e) { System.out.println("Case 2: ERROR"); }

        try {
            ListNode h = build(new int[]{1});
            ListNode res = sol.detectCycle(h);
            if (res == null) { System.out.println("Case 3: PASSED"); passed++; }
            else System.out.println("Case 3: FAILED");
        } catch(Exception e) { System.out.println("Case 3: ERROR"); }

        System.out.println("\\n[Test Results] "+passed+"/3 cases passed.");
    }
}`
  },

  // ─── LRU Cache (ID 146)
  '146': {
    cpp: (u, h) => `${CPP_HEADERS}
${u}
int main() {
    int passed = 0;
    try {
        LRUCache cache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        int val1 = cache.get(1);
        cache.put(3, 3);
        int val2 = cache.get(2);
        cache.put(4, 4);
        int val3 = cache.get(1);
        int val4 = cache.get(3);
        int val5 = cache.get(4);
        if (val1 == 1 && val2 == -1 && val3 == -1 && val4 == 3 && val5 == 4) {
            cout << "Case 1: PASSED\\n"; passed++;
        } else {
            cout << "Case 1: FAILED\\n";
        }
    } catch(...) { cout << "Case 1: ERROR\\n"; }
    cout << "\\n[Test Results] " << passed << "/1 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}
passed = 0
try:
    cache = LRUCache(2)
    cache.put(1, 1)
    cache.put(2, 2)
    val1 = cache.get(1)
    cache.put(3, 3)
    val2 = cache.get(2)
    cache.put(4, 4)
    val3 = cache.get(1)
    val4 = cache.get(3)
    val5 = cache.get(4)
    if val1 == 1 and val2 == -1 and val3 == -1 and val4 == 3 and val5 == 4:
        print("Case 1: PASSED"); passed += 1
    else:
        print("Case 1: FAILED")
except Exception as e:
    print(f"Case 1: ERROR ({e})")
print(f"\\n[Test Results] {passed}/1 cases passed.")`,
    java: (u, h) => `import java.util.*;
${u}
public class Main {
    public static void main(String[] args) {
        int passed = 0;
        try {
            LRUCache cache = new LRUCache(2);
            cache.put(1, 1);
            cache.put(2, 2);
            int val1 = cache.get(1);
            cache.put(3, 3);
            int val2 = cache.get(2);
            cache.put(4, 4);
            int val3 = cache.get(1);
            int val4 = cache.get(3);
            int val5 = cache.get(4);
            if (val1 == 1 && val2 == -1 && val3 == -1 && val4 == 3 && val5 == 4) {
                System.out.println("Case 1: PASSED"); passed++;
            } else {
                System.out.println("Case 1: FAILED");
            }
        } catch(Exception e) {
            System.out.println("Case 1: ERROR");
        }
        System.out.println("\\n[Test Results] "+passed+"/1 cases passed.");
    }
}`
  },

  // ─── Validate BST (ID 98)
  '98': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_TREE}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    vector<pair<vector<int>,bool>> cases = {
        {{2,1,3}, true},
        {{5,1,4,-1,-1,3,6}, false}
    };
    int passed = 0;
    for (int i = 0; i < (int)cases.size(); i++) {
        try {
            TreeNode* root = buildTree(cases[i].first);
            bool res = sol.isValidBST(root);
            if (res == cases[i].second) { cout << "Case " << i+1 << ": PASSED\\n"; passed++; }
            else cout << "Case " << i+1 << ": FAILED\\n";
        } catch(...) { cout << "Case " << i+1 << ": ERROR\\n"; }
    }
    cout << "\\n[Test Results] " << passed << "/" << cases.size() << " cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_TREE}
from typing import Optional
${u}
${h ? '' : `class Solution:\n    def isValidBST(self, root):\n        return isValidBST(root)`}
cases = [([2,1,3], True), ([5,1,4,None,None,3,6], False)]
sol = Solution(); passed = 0
for i, (vals, exp) in enumerate(cases):
    try:
        root = buildTree(vals)
        res = sol.isValidBST(root)
        if res == exp: print(f"Case {i+1}: PASSED"); passed += 1
        else: print(f"Case {i+1}: FAILED")
    except Exception as e: print(f"Case {i+1}: ERROR ({e})")
print(f"\\n[Test Results] {passed}/{len(cases)} cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_TREE}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static TreeNode build(Integer[] v){
        if(v.length==0||v[0]==null)return null;
        TreeNode root=new TreeNode(v[0]);Queue<TreeNode> q=new LinkedList<>();q.add(root);int i=1;
        while(!q.isEmpty()&&i<v.length){
            TreeNode n=q.poll();
            if(i<v.length&&v[i]!=null){n.left=new TreeNode(v[i]);q.add(n.left);}i++;
            if(i<v.length&&v[i]!=null){n.right=new TreeNode(v[i]);q.add(n.right);}i++;
        }return root;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        Object[][] cases = {{new Integer[]{2,1,3}, true}, {new Integer[]{5,1,4,null,null,3,6}, false}};
        int passed = 0;
        for (int i = 0; i < cases.length; i++) {
            try {
                boolean res = sol.isValidBST(build((Integer[])cases[i][0]));
                if (res == (boolean)cases[i][1]) { System.out.println("Case "+(i+1)+": PASSED"); passed++; }
                else System.out.println("Case "+(i+1)+": FAILED");
            } catch(Exception e) { System.out.println("Case "+(i+1)+": ERROR"); }
        }
        System.out.println("\\n[Test Results] "+passed+"/"+cases.length+" cases passed.");
    }
}`
  },

  // ─── Level Order Traversal (ID 102)
  '102': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_TREE}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    int passed = 0;
    try {
        TreeNode* root = buildTree({3,9,20,-1,-1,15,7});
        auto res = sol.levelOrder(root);
        if (res.size() == 3 && res[0] == vector<int>{3} && res[1] == vector<int>{9,20} && res[2] == vector<int>{15,7}) {
            cout << "Case 1: PASSED\\n"; passed++;
        } else cout << "Case 1: FAILED\\n";
    } catch(...) { cout << "Case 1: ERROR\\n"; }
    cout << "\\n[Test Results] " << passed << "/1 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_TREE}
from typing import Optional, List
${u}
${h ? '' : `class Solution:\n    def levelOrder(self, root):\n        return levelOrder(root)`}
sol = Solution(); passed = 0
try:
    root = buildTree([3,9,20,None,None,15,7])
    res = sol.levelOrder(root)
    if res == [[3], [9,20], [15,7]]: print("Case 1: PASSED"); passed += 1
    else: print("Case 1: FAILED")
except Exception as e: print(f"Case 1: ERROR ({e})")
print(f"\\n[Test Results] {passed}/1 cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_TREE}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static TreeNode build(Integer[] v){
        if(v.length==0||v[0]==null)return null;
        TreeNode root=new TreeNode(v[0]);Queue<TreeNode> q=new LinkedList<>();q.add(root);int i=1;
        while(!q.isEmpty()&&i<v.length){
            TreeNode n=q.poll();
            if(i<v.length&&v[i]!=null){n.left=new TreeNode(v[i]);q.add(n.left);}i++;
            if(i<v.length&&v[i]!=null){n.right=new TreeNode(v[i]);q.add(n.right);}i++;
        }return root;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int passed = 0;
        try {
            TreeNode root = build(new Integer[]{3,9,20,null,null,15,7});
            List<List<Integer>> res = sol.levelOrder(root);
            if (res.size() == 3 && res.get(0).equals(Arrays.asList(3)) && res.get(1).equals(Arrays.asList(9, 20)) && res.get(2).equals(Arrays.asList(15, 7))) {
                System.out.println("Case 1: PASSED"); passed++;
            } else System.out.println("Case 1: FAILED");
        } catch(Exception e) { System.out.println("Case 1: ERROR"); }
        System.out.println("\\n[Test Results] "+passed+"/1 cases passed.");
    }
}`
  },

  // ─── Right Side View (ID 199)
  '199': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_TREE}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    int passed = 0;
    try {
        TreeNode* root = buildTree({1,2,3,-1,5,-1,4});
        auto res = sol.rightSideView(root);
        if (res == vector<int>{1,3,4}) { cout << "Case 1: PASSED\\n"; passed++; }
        else cout << "Case 1: FAILED\\n";
    } catch(...) { cout << "Case 1: ERROR\\n"; }
    cout << "\\n[Test Results] " << passed << "/1 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_TREE}
from typing import Optional, List
${u}
${h ? '' : `class Solution:\n    def rightSideView(self, root):\n        return rightSideView(root)`}
sol = Solution(); passed = 0
try:
    root = buildTree([1,2,3,None,5,None,4])
    res = sol.rightSideView(root)
    if res == [1, 3, 4]: print("Case 1: PASSED"); passed += 1
    else: print("Case 1: FAILED")
except Exception as e: print(f"Case 1: ERROR ({e})")
print(f"\\n[Test Results] {passed}/1 cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_TREE}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static TreeNode build(Integer[] v){
        if(v.length==0||v[0]==null)return null;
        TreeNode root=new TreeNode(v[0]);Queue<TreeNode> q=new LinkedList<>();q.add(root);int i=1;
        while(!q.isEmpty()&&i<v.length){
            TreeNode n=q.poll();
            if(i<v.length&&v[i]!=null){n.left=new TreeNode(v[i]);q.add(n.left);}i++;
            if(i<v.length&&v[i]!=null){n.right=new TreeNode(v[i]);q.add(n.right);}i++;
        }return root;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int passed = 0;
        try {
            TreeNode root = build(new Integer[]{1,2,3,null,5,null,4});
            List<Integer> res = sol.rightSideView(root);
            if (res.equals(Arrays.asList(1,3,4))) { System.out.println("Case 1: PASSED"); passed++; }
            else System.out.println("Case 1: FAILED");
        } catch(Exception e) { System.out.println("Case 1: ERROR"); }
        System.out.println("\\n[Test Results] "+passed+"/1 cases passed.");
    }
}`
  },

  // ─── LCA of Binary Tree (ID 236)
  '236': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_TREE}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    int passed = 0;
    try {
        TreeNode* root = buildTree({3,5,1,6,2,0,8,-1,-1,7,4});
        TreeNode* p = root->left; // Node 5
        TreeNode* q = root->right; // Node 1
        TreeNode* res = sol.lowestCommonAncestor(root, p, q);
        if (res == root) { cout << "Case 1: PASSED\\n"; passed++; }
        else cout << "Case 1: FAILED\\n";
    } catch(...) { cout << "Case 1: ERROR\\n"; }
    cout << "\\n[Test Results] " << passed << "/1 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_TREE}
from typing import Optional
${u}
${h ? '' : `class Solution:\n    def lowestCommonAncestor(self, root, p, q):\n        return lowestCommonAncestor(root, p, q)`}
sol = Solution(); passed = 0
try:
    root = buildTree([3,5,1,6,2,0,8,None,None,7,4])
    p = root.left # 5
    q = root.right # 1
    res = sol.lowestCommonAncestor(root, p, q)
    if res == root: print("Case 1: PASSED"); passed += 1
    else: print("Case 1: FAILED")
except Exception as e: print(f"Case 1: ERROR ({e})")
print(f"\\n[Test Results] {passed}/1 cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_TREE}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static TreeNode build(Integer[] v){
        if(v.length==0||v[0]==null)return null;
        TreeNode root=new TreeNode(v[0]);Queue<TreeNode> q=new LinkedList<>();q.add(root);int i=1;
        while(!q.isEmpty()&&i<v.length){
            TreeNode n=q.poll();
            if(i<v.length&&v[i]!=null){n.left=new TreeNode(v[i]);q.add(n.left);}i++;
            if(i<v.length&&v[i]!=null){n.right=new TreeNode(v[i]);q.add(n.right);}i++;
        }return root;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int passed = 0;
        try {
            TreeNode root = build(new Integer[]{3,5,1,6,2,0,8,null,null,7,4});
            TreeNode p = root.left;
            TreeNode q = root.right;
            TreeNode res = sol.lowestCommonAncestor(root, p, q);
            if (res == root) { System.out.println("Case 1: PASSED"); passed++; }
            else System.out.println("Case 1: FAILED");
        } catch(Exception e) { System.out.println("Case 1: ERROR"); }
        System.out.println("\\n[Test Results] "+passed+"/1 cases passed.");
    }
}`
  },

  // ─── Kth Smallest Element in a BST (ID 230)
  '230': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_TREE}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    int passed = 0;
    try {
        TreeNode* root = buildTree({3,1,4,-1,2});
        int res = sol.kthSmallest(root, 1);
        if (res == 1) { cout << "Case 1: PASSED\\n"; passed++; }
        else cout << "Case 1: FAILED\\n";
    } catch(...) { cout << "Case 1: ERROR\\n"; }
    cout << "\\n[Test Results] " << passed << "/1 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_TREE}
from typing import Optional
${u}
${h ? '' : `class Solution:\n    def kthSmallest(self, root, k):\n        return kthSmallest(root, k)`}
sol = Solution(); passed = 0
try:
    root = buildTree([3,1,4,None,2])
    res = sol.kthSmallest(root, 1)
    if res == 1: print("Case 1: PASSED"); passed += 1
    else: print("Case 1: FAILED")
except Exception as e: print(f"Case 1: ERROR ({e})")
print(f"\\n[Test Results] {passed}/1 cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_TREE}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static TreeNode build(Integer[] v){
        if(v.length==0||v[0]==null)return null;
        TreeNode root=new TreeNode(v[0]);Queue<TreeNode> q=new LinkedList<>();q.add(root);int i=1;
        while(!q.isEmpty()&&i<v.length){
            TreeNode n=q.poll();
            if(i<v.length&&v[i]!=null){n.left=new TreeNode(v[i]);q.add(n.left);}i++;
            if(i<v.length&&v[i]!=null){n.right=new TreeNode(v[i]);q.add(n.right);}i++;
        }return root;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int passed = 0;
        try {
            TreeNode root = build(new Integer[]{3,1,4,null,2});
            int res = sol.kthSmallest(root, 1);
            if (res == 1) { System.out.println("Case 1: PASSED"); passed++; }
            else System.out.println("Case 1: FAILED");
        } catch(Exception e) { System.out.println("Case 1: ERROR"); }
        System.out.println("\\n[Test Results] "+passed+"/1 cases passed.");
    }
}`
  },

  // ─── Diameter of Binary Tree (ID 543)
  '543': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_TREE}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    int passed = 0;
    try {
        TreeNode* root = buildTree({1,2,3,4,5});
        int res = sol.diameterOfBinaryTree(root);
        if (res == 3) { cout << "Case 1: PASSED\\n"; passed++; }
        else cout << "Case 1: FAILED\\n";
    } catch(...) { cout << "Case 1: ERROR\\n"; }
    cout << "\\n[Test Results] " << passed << "/1 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_TREE}
from typing import Optional
${u}
${h ? '' : `class Solution:\n    def diameterOfBinaryTree(self, root):\n        return diameterOfBinaryTree(root)`}
sol = Solution(); passed = 0
try:
    root = buildTree([1,2,3,4,5])
    res = sol.diameterOfBinaryTree(root)
    if res == 3: print("Case 1: PASSED"); passed += 1
    else: print("Case 1: FAILED")
except Exception as e: print(f"Case 1: ERROR ({e})")
print(f"\\n[Test Results] {passed}/1 cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_TREE}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static TreeNode build(Integer[] v){
        if(v.length==0||v[0]==null)return null;
        TreeNode root=new TreeNode(v[0]);Queue<TreeNode> q=new LinkedList<>();q.add(root);int i=1;
        while(!q.isEmpty()&&i<v.length){
            TreeNode n=q.poll();
            if(i<v.length&&v[i]!=null){n.left=new TreeNode(v[i]);q.add(n.left);}i++;
            if(i<v.length&&v[i]!=null){n.right=new TreeNode(v[i]);q.add(n.right);}i++;
        }return root;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int passed = 0;
        try {
            TreeNode root = build(new Integer[]{1,2,3,4,5});
            int res = sol.diameterOfBinaryTree(root);
            if (res == 3) { System.out.println("Case 1: PASSED"); passed++; }
            else System.out.println("Case 1: FAILED");
        } catch(Exception e) { System.out.println("Case 1: ERROR"); }
        System.out.println("\\n[Test Results] "+passed+"/1 cases passed.");
    }
}`
  },

  // ─── Binary Tree Maximum Path Sum (ID 124)
  '124': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_TREE}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    int passed = 0;
    try {
        TreeNode* root = buildTree({-10,9,20,-1,-1,15,7});
        int res = sol.maxPathSum(root);
        if (res == 42) { cout << "Case 1: PASSED\\n"; passed++; }
        else cout << "Case 1: FAILED\\n";
    } catch(...) { cout << "Case 1: ERROR\\n"; }
    cout << "\\n[Test Results] " << passed << "/1 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_TREE}
from typing import Optional
${u}
${h ? '' : `class Solution:\n    def maxPathSum(self, root):\n        return maxPathSum(root)`}
sol = Solution(); passed = 0
try:
    root = buildTree([-10,9,20,None,None,15,7])
    res = sol.maxPathSum(root)
    if res == 42: print("Case 1: PASSED"); passed += 1
    else: print("Case 1: FAILED")
except Exception as e: print(f"Case 1: ERROR ({e})")
print(f"\\n[Test Results] {passed}/1 cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_TREE}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static TreeNode build(Integer[] v){
        if(v.length==0||v[0]==null)return null;
        TreeNode root=new TreeNode(v[0]);Queue<TreeNode> q=new LinkedList<>();q.add(root);int i=1;
        while(!q.isEmpty()&&i<v.length){
            TreeNode n=q.poll();
            if(i<v.length&&v[i]!=null){n.left=new TreeNode(v[i]);q.add(n.left);}i++;
            if(i<v.length&&v[i]!=null){n.right=new TreeNode(v[i]);q.add(n.right);}i++;
        }return root;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int passed = 0;
        try {
            TreeNode root = build(new Integer[]{-10,9,20,null,null,15,7});
            int res = sol.maxPathSum(root);
            if (res == 42) { System.out.println("Case 1: PASSED"); passed++; }
            else System.out.println("Case 1: FAILED");
        } catch(Exception e) { System.out.println("Case 1: ERROR"); }
        System.out.println("\\n[Test Results] "+passed+"/1 cases passed.");
    }
}`
  },

  // ─── Merge K Sorted Lists (ID 23)
  '23': {
    cpp: (u, h) => `${CPP_HEADERS}
${CPP_LIST}
${h ? u : `class Solution {\npublic:\n    ${u}\n};\n`}
int main() {
    Solution sol;
    int passed = 0;
    try {
        vector<ListNode*> lists = { buildList({1,4,5}), buildList({1,3,4}), buildList({2,6}) };
        ListNode* res = sol.mergeKLists(lists);
        if (listToStr(res) == listToStr(buildList({1,1,2,3,4,4,5,6}))) { cout << "Case 1: PASSED\\n"; passed++; }
        else cout << "Case 1: FAILED\\n";
    } catch(...) { cout << "Case 1: ERROR\\n"; }
    try {
        vector<ListNode*> lists = {};
        ListNode* res = sol.mergeKLists(lists);
        if (res == nullptr) { cout << "Case 2: PASSED\\n"; passed++; }
        else cout << "Case 2: FAILED\\n";
    } catch(...) { cout << "Case 2: ERROR\\n"; }
    cout << "\\n[Test Results] " << passed << "/2 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${PY_LIST}
import heapq
from typing import Optional, List
${u}
${h ? '' : `class Solution:\n    def mergeKLists(self, lists):\n        return mergeKLists(lists)`}
sol = Solution(); passed = 0
try:
    lists = [buildList([1,4,5]), buildList([1,3,4]), buildList([2,6])]
    res = sol.mergeKLists(lists)
    out = listToArr(res)
    if out == [1,1,2,3,4,4,5,6]: print("Case 1: PASSED"); passed += 1
    else: print("Case 1: FAILED")
except Exception as e: print(f"Case 1: ERROR ({e})")
try:
    res = sol.mergeKLists([])
    if res is None: print("Case 2: PASSED"); passed += 1
    else: print("Case 2: FAILED")
except Exception as e: print(f"Case 2: ERROR ({e})")
print(f"\\n[Test Results] {passed}/2 cases passed.")`,
    java: (u, h) => `import java.util.*;
${JAVA_LIST}
${h ? u : `class Solution {\n    ${u}\n}`}
public class Main {
    static ListNode build(int[] v) {
        if (v.length == 0) return null;
        ListNode h = new ListNode(v[0]); ListNode c = h;
        for (int i=1;i<v.length;i++) { c.next = new ListNode(v[i]); c = c.next; }
        return h;
    }
    static List<Integer> toList(ListNode h) {
        List<Integer> r = new ArrayList<>(); while(h!=null){r.add(h.val);h=h.next;} return r;
    }
    public static void main(String[] args) {
        Solution sol = new Solution();
        int passed = 0;
        try {
            ListNode[] lists = { build(new int[]{1,4,5}), build(new int[]{1,3,4}), build(new int[]{2,6}) };
            ListNode res = sol.mergeKLists(lists);
            if (toList(res).equals(Arrays.asList(1,1,2,3,4,4,5,6))) { System.out.println("Case 1: PASSED"); passed++; }
            else System.out.println("Case 1: FAILED");
        } catch(Exception e) { System.out.println("Case 1: ERROR"); }
        try {
            ListNode[] lists = new ListNode[0];
            ListNode res = sol.mergeKLists(lists);
            if (res == null) { System.out.println("Case 2: PASSED"); passed++; }
            else System.out.println("Case 2: FAILED");
        } catch(Exception e) { System.out.println("Case 2: ERROR"); }
        System.out.println("\\n[Test Results] "+passed+"/2 cases passed.");
    }
}`
  },

  // ─── Min Stack (ID 155)
  '155': {
    cpp: (u, h) => `${CPP_HEADERS}
${u}
int main() {
    int passed = 0;
    try {
        MinStack minStack;
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        int m1 = minStack.getMin(); // -3
        minStack.pop();
        int t1 = minStack.top();    // 0
        int m2 = minStack.getMin(); // -2
        if (m1 == -3 && t1 == 0 && m2 == -2) { cout << "Case 1: PASSED\\n"; passed++; }
        else cout << "Case 1: FAILED\\n";
    } catch(...) { cout << "Case 1: ERROR\\n"; }
    cout << "\\n[Test Results] " << passed << "/1 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}
passed = 0
try:
    minStack = MinStack()
    minStack.push(-2)
    minStack.push(0)
    minStack.push(-3)
    m1 = minStack.getMin()
    minStack.pop()
    t1 = minStack.top()
    m2 = minStack.getMin()
    if m1 == -3 and t1 == 0 and m2 == -2: print("Case 1: PASSED"); passed += 1
    else: print("Case 1: FAILED")
except Exception as e: print(f"Case 1: ERROR ({e})")
print(f"\\n[Test Results] {passed}/1 cases passed.")`,
    java: (u, h) => `import java.util.*;
${u}
public class Main {
    public static void main(String[] args) {
        int passed = 0;
        try {
            MinStack minStack = new MinStack();
            minStack.push(-2);
            minStack.push(0);
            minStack.push(-3);
            int m1 = minStack.getMin();
            minStack.pop();
            int t1 = minStack.top();
            int m2 = minStack.getMin();
            if (m1 == -3 && t1 == 0 && m2 == -2) { System.out.println("Case 1: PASSED"); passed++; }
            else System.out.println("Case 1: FAILED");
        } catch(Exception e) {
            System.out.println("Case 1: ERROR");
        }
        System.out.println("\\n[Test Results] "+passed+"/1 cases passed.");
    }
}`
  },

  // ─── Implement Stack using Queues (ID 225)
  '225': {
    cpp: (u, h) => `${CPP_HEADERS}
${u}
int main() {
    int passed = 0;
    try {
        MyStack myStack;
        myStack.push(1);
        myStack.push(2);
        int t1 = myStack.top(); // 2
        int p1 = myStack.pop(); // 2
        bool e1 = myStack.empty(); // false
        if (t1 == 2 && p1 == 2 && !e1) { cout << "Case 1: PASSED\\n"; passed++; }
        else cout << "Case 1: FAILED\\n";
    } catch(...) { cout << "Case 1: ERROR\\n"; }
    cout << "\\n[Test Results] " << passed << "/1 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}
passed = 0
try:
    myStack = MyStack()
    myStack.push(1)
    myStack.push(2)
    t1 = myStack.top()
    p1 = myStack.pop()
    e1 = myStack.empty()
    if t1 == 2 and p1 == 2 and not e1: print("Case 1: PASSED"); passed += 1
    else: print("Case 1: FAILED")
except Exception as e: print(f"Case 1: ERROR ({e})")
print(f"\\n[Test Results] {passed}/1 cases passed.")`,
    java: (u, h) => `import java.util.*;
${u}
public class Main {
    public static void main(String[] args) {
        int passed = 0;
        try {
            MyStack myStack = new MyStack();
            myStack.push(1);
            myStack.push(2);
            int t1 = myStack.top();
            int p1 = myStack.pop();
            boolean e1 = myStack.empty();
            if (t1 == 2 && p1 == 2 && !e1) { System.out.println("Case 1: PASSED"); passed++; }
            else System.out.println("Case 1: FAILED");
        } catch(Exception e) {
            System.out.println("Case 1: ERROR");
        }
        System.out.println("\\n[Test Results] "+passed+"/1 cases passed.");
    }
}`
  },

  // ─── Implement Queue using Stacks (ID 232)
  '232': {
    cpp: (u, h) => `${CPP_HEADERS}
${u}
int main() {
    int passed = 0;
    try {
        MyQueue myQueue;
        myQueue.push(1);
        myQueue.push(2);
        int p1 = myQueue.peek(); // 1
        int po1 = myQueue.pop(); // 1
        bool e1 = myQueue.empty(); // false
        if (p1 == 1 && po1 == 1 && !e1) { cout << "Case 1: PASSED\\n"; passed++; }
        else cout << "Case 1: FAILED\\n";
    } catch(...) { cout << "Case 1: ERROR\\n"; }
    cout << "\\n[Test Results] " << passed << "/1 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}
passed = 0
try:
    myQueue = MyQueue()
    myQueue.push(1)
    myQueue.push(2)
    p1 = myQueue.peek()
    po1 = myQueue.pop()
    e1 = myQueue.empty()
    if p1 == 1 and po1 == 1 and not e1: print("Case 1: PASSED"); passed += 1
    else: print("Case 1: FAILED")
except Exception as e: print(f"Case 1: ERROR ({e})")
print(f"\\n[Test Results] {passed}/1 cases passed.")`,
    java: (u, h) => `import java.util.*;
${u}
public class Main {
    public static void main(String[] args) {
        int passed = 0;
        try {
            MyQueue myQueue = new MyQueue();
            myQueue.push(1);
            myQueue.push(2);
            int p1 = myQueue.peek();
            int po1 = myQueue.pop();
            boolean e1 = myQueue.empty();
            if (p1 == 1 && po1 == 1 && !e1) { System.out.println("Case 1: PASSED"); passed++; }
            else System.out.println("Case 1: FAILED");
        } catch(Exception e) {
            System.out.println("Case 1: ERROR");
        }
        System.out.println("\\n[Test Results] "+passed+"/1 cases passed.");
    }
}`
  },

  // ─── Implement Trie (ID 208)
  '208': {
    cpp: (u, h) => `${CPP_HEADERS}
${u}
int main() {
    int passed = 0;
    try {
        Trie trie;
        trie.insert("apple");
        bool s1 = trie.search("apple");   // true
        bool s2 = trie.search("app");     // false
        bool sw1 = trie.startsWith("app"); // true
        trie.insert("app");
        bool s3 = trie.search("app");     // true
        if (s1 && !s2 && sw1 && s3) { cout << "Case 1: PASSED\\n"; passed++; }
        else cout << "Case 1: FAILED\\n";
    } catch(...) { cout << "Case 1: ERROR\\n"; }
    cout << "\\n[Test Results] " << passed << "/1 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}
passed = 0
try:
    trie = Trie()
    trie.insert("apple")
    s1 = trie.search("apple")
    s2 = trie.search("app")
    sw1 = trie.startsWith("app")
    trie.insert("app")
    s3 = trie.search("app")
    if s1 and not s2 and sw1 and s3: print("Case 1: PASSED"); passed += 1
    else: print("Case 1: FAILED")
except Exception as e: print(f"Case 1: ERROR ({e})")
print(f"\\n[Test Results] {passed}/1 cases passed.")`,
    java: (u, h) => `import java.util.*;
${u}
public class Main {
    public static void main(String[] args) {
        int passed = 0;
        try {
            Trie trie = new Trie();
            trie.insert("apple");
            boolean s1 = trie.search("apple");
            boolean s2 = trie.search("app");
            boolean sw1 = trie.startsWith("app");
            trie.insert("app");
            boolean s3 = trie.search("app");
            if (s1 && !s2 && sw1 && s3) { System.out.println("Case 1: PASSED"); passed++; }
            else System.out.println("Case 1: FAILED");
        } catch(Exception e) {
            System.out.println("Case 1: ERROR");
        }
        System.out.println("\\n[Test Results] "+passed+"/1 cases passed.");
    }
}`
  },

  // ─── Find Median from Data Stream (ID 295)
  '295': {
    cpp: (u, h) => `${CPP_HEADERS}
${u}
int main() {
    int passed = 0;
    try {
        MedianFinder medianFinder;
        medianFinder.addNum(1);
        medianFinder.addNum(2);
        double m1 = medianFinder.findMedian(); // 1.5
        medianFinder.addNum(3);
        double m2 = medianFinder.findMedian(); // 2.0
        if (abs(m1 - 1.5) < 1e-6 && abs(m2 - 2.0) < 1e-6) { cout << "Case 1: PASSED\\n"; passed++; }
        else cout << "Case 1: FAILED\\n";
    } catch(...) { cout << "Case 1: ERROR\\n"; }
    cout << "\\n[Test Results] " << passed << "/1 cases passed.\\n";
    return 0;
}`,
    python: (u, h) => `${u}
passed = 0
try:
    medianFinder = MedianFinder()
    medianFinder.addNum(1)
    medianFinder.addNum(2)
    m1 = medianFinder.findMedian()
    medianFinder.addNum(3)
    m2 = medianFinder.findMedian()
    if abs(m1 - 1.5) < 1e-6 and abs(m2 - 2.0) < 1e-6: print("Case 1: PASSED"); passed += 1
    else: print("Case 1: FAILED")
except Exception as e: print(f"Case 1: ERROR ({e})")
print(f"\\n[Test Results] {passed}/1 cases passed.")`,
    java: (u, h) => `import java.util.*;
${u}
public class Main {
    public static void main(String[] args) {
        int passed = 0;
        try {
            MedianFinder medianFinder = new MedianFinder();
            medianFinder.addNum(1);
            medianFinder.addNum(2);
            double m1 = medianFinder.findMedian();
            medianFinder.addNum(3);
            double m2 = medianFinder.findMedian();
            if (Math.abs(m1 - 1.5) < 1e-6 && Math.abs(m2 - 2.0) < 1e-6) { System.out.println("Case 1: PASSED"); passed++; }
            else System.out.println("Case 1: FAILED");
        } catch(Exception e) {
            System.out.println("Case 1: ERROR");
        }
        System.out.println("\\n[Test Results] "+passed+"/1 cases passed.");
    }
}`
  },

};

export function wrapCode(problemId, lang, userCode) {
  const key = String(problemId);
  const prob = harnesses[key];
  if (prob && prob[lang]) {
    const hasClass = /class\s+\w+/.test(userCode);
    return prob[lang](userCode, hasClass);
  }
  return userCode;
}

export function hasHarness(problemId, lang) {
  const key = String(problemId);
  return !!(harnesses[key] && harnesses[key][lang]);
}
