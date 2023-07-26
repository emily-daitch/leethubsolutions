class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
				// e.g
				// [[ 1, 2, 3 ],
				//  [ 4, 5, 6 ],
				//  [ 7, 8, 9 ]]

        for(int i = 0; i < matrix.size(); i++)
        {
            for(int j = 0; j < i; j++)
            {
                swap(matrix[i][j], matrix[j][i]);
            }
        }
				// e.g. after above loop
				// [[ 1, 4, 7 ],
				//  [ 2, 5, 8 ],
				//  [ 3, 6, 9 ]]

        for(int i = 0; i < matrix.size(); i++)
        		reverse(matrix[i].begin(), matrix[i].end());
				// e.g. after above loop
				// [[ 7, 4, 1 ],
				//  [ 8, 5, 2 ],
				//  [ 9, 6, 3 ]]
    }
};