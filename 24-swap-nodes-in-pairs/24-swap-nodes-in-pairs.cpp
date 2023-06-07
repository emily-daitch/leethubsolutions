/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        // base cases AND end of list for recursion
        // e.g. [head] -> [next1] -> [next2] -> [next3] -> //
        // for this example, we would recurse until next3
        // and return head, which would be next3
        if (!head || !head->next) {
            return head;
        }
        
        ListNode* nextNode = head->next;
        head->next = swapPairs(nextNode->next);
        // now popping up the recursion stack in our example (head = next2),
        // nextNode is next3
        // below, set next3->next to next2 (this is the actual swap)

        nextNode->next = head;
        // so for the first recursion pop we have [head]->[next1]->[next3]->[next2]

        // and we return [next3]->[next2] to the next recursion pop, where nextNode is next1
        return nextNode;
        // and so we end with [next1]->[head]->[next3]->[next2]
    }
};
