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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode returnList; // not a pointer, avoid memory leak
        ListNode * currentNode = &returnList;
        int carry = 0;

        while(l1 || l2 || carry){
            cout << "while" << endl;
            int sum = 0;
            if(l1){
                sum+=l1->val;
                l1=l1->next;
            }
            if(l2){
                sum+=l2->val;
                l2=l2->next;
            }
            sum += carry;
            carry=sum/10;
            ListNode * nextNode = new ListNode(sum%10);
            currentNode->next = nextNode;
            currentNode = nextNode;
        }

        return returnList.next;
    }
};