class Solution {
public:
    // string convert(string s, const int numRows) {
    //     if (numRows <= 1){
    //         return s;
    //     }

    //     std::vector<string> columns;
    //     string * verticalComponent;
    //     string * diagonalComponent;

    //     int currentIndex = 0;

    //     while(currentIndex < s.length()){
    //         // vertical column
    //         verticalComponent = new string();
    //         int subLength = s.substr(currentIndex, numRows).length();
    //         *verticalComponent = s.substr(currentIndex, numRows); 
    //         // if component for vertical array is less than the length of the column, fill with spaces
    //         if (currentIndex + numRows > s.length()){
    //             verticalComponent->resize(numRows, ' ');
    //         }
    //         columns.push_back(*verticalComponent);
    //         currentIndex += numRows ;
    //         // diagonal element columns
    //         std::cout << "diagonal element current index " << currentIndex << std::endl;
    //         if(currentIndex < s.length()){
    //             for (int diagonalIndex = 0; diagonalIndex < numRows - 2 && currentIndex < s.length(); diagonalIndex++){
    //                 diagonalComponent = new string(numRows, ' ');
    //                 diagonalComponent->at(numRows - 2 - diagonalIndex) = s.at(currentIndex);
    //                 columns.push_back(*diagonalComponent);
    //                 currentIndex++;
    //             }
    //         }
    //     }

    //     // print 2D array
    //     for (string col: columns){
    //         for (int i = 0; i < numRows; i++)
    //             std::cout << col[i] << ' ';
    //         std:: cout <<  std::endl;
    //     }

    //     // form answer from array
    //     string ans;
    //     for (int i = 0; i < numRows; i++){
    //         for (string col: columns){
    //             if(col[i] != ' ') ans.push_back(col[i]);
    //         }
    //     }

    //     return ans;
    // }
    string convert(string s, int numRows) {
        int n=s.size();
        vector<string>ans(numRows,"");

        int i=0;
        while(i<n) //Iterate in a string
        {
            for(int j=0;j<numRows&&i<n;j++) //Move from top to bottom in a column and store ans 

            {
                ans[j].push_back(s[i]); 
                i++;
            }
            int k=numRows-2;
             for(;k>0&&i<n;k--)  //Then move diagonally from down to up and store ans
            {
                ans[k].push_back(s[i]);
                i++;
            }
        }


        string e;
        for(int i=0;i<numRows;i++)
        {
            e+=ans[i];
            //cout<<ans[i]<<" ";
        }

        return e;
    }
};