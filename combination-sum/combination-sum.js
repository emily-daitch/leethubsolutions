/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];

    // dfs or backtracking
    const dfs = (currentCandidates, currentTarget, value) => {
        if( currentTarget == 0)  {
            console.log('pushing value', value);
            res.push(value);
        }
        if(currentTarget < 0 ) {
            console.log('currentTarget < 0, returning.')
            return;
        }
        for(let v = 0; v < currentCandidates.length; v++){
            console.log('v = ', v);
            console.log('calling dfs recursively with currentCandidates', currentCandidates.slice(v));
            console.log('with currentTarget', currentTarget - currentCandidates[v]);
            console.log('with value', [...value, currentCandidates[v] ]);
            dfs(currentCandidates.slice(v), currentTarget - currentCandidates[v], [...value, currentCandidates[v] ] );  
        }
    }
    console.log('calling dfs with candidates', candidates);
    console.log('with target', target);
    console.log('with value []');
    dfs(candidates, target, []);
    return res;
};