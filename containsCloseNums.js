function solution(nums, k) {
    const mySet = new Set(nums)
    if (mySet.size===nums.length) {
        return false;
    }
    for (i=0;i<nums.length;i++) {
        for (j=nums.length;j>=0;j--) {
            if (nums[i]===nums[j] && i!=j && Math.abs(i-j) <= k) {
                return true;
            }
        }
    }
    return false;
}

