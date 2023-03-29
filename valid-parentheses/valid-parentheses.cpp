class Solution {
public:
    bool isValid(string s) {
        stack<char>* st = new stack<char>; 
        bool succeeded = true;

        for_each(s.begin(), s.end(), [st, &succeeded](char & ch)
        {
            std::cout << "char " << ch << std::endl;

            // if opening bracket then push onto the stack 
            if (ch == '(' || ch == '{' || ch == '[')
            {
                st->push(ch) ; 
            }
            // if closing bracket then check for equality and pop or fail
            else {
                if (!st->empty())
                {
                    char topCharacter = st->top() ;
                    
                    // match found, pop and continue
                    if ((ch == ')' && topCharacter == '(') ||
                        (ch == '}' && topCharacter == '{') ||
                        (ch == ']' && topCharacter == '[')){
                            st->pop() ;
                        }
                        // mismatch found, fail
                        else{
                            succeeded = false;
                            return;
                        }
                }
                // stack is empty on a closing bracket, fail
                else{
                    succeeded = false;
                    return;
                }
            }
            return;
        });

        // ensure the stack is empty and return based on success or failure
        if (st->empty() && succeeded)
        {
            return true ; 
        }
        return false ;
        }
    };