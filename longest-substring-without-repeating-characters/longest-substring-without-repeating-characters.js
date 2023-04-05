/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let right = 0;
    let maxSize = 0;

    // return early
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let c of s) {
        right++;
        while (set.has(c)) {
            set.delete(s[left])
            left++;
        }
        set.add(c);
        maxSize = Math.max(maxSize, right - left)
    }
    return maxSize;
}