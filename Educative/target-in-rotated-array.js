/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => 
{
    let l = 0, r = nums.length - 1;
    if(nums[l] == target) return l;
    if(nums[r] == target) return r;
    
    // find the lesser elemet in the array
    let minimumIndex = l;
    if(nums[l] > nums[r])
    {
        // [6,7,8,1,2,3,4,5]
        while(l <= r)
        {
            const m = l + Math.floor((r-l)/2);
            if(nums[m] == target)
                return m;

            if(nums[m] < nums[m-1])
            {
                minimumIndex = m;
                break;
            }

            if(nums[m] > nums[nums.length -1])
                l = m +1;
            else 
                r = m -1;
        }
    }
    
    // find the target
    if(target > nums[nums.length -1])
    {
        r = minimumIndex -1;
        l = 0;
    } else {
        r = nums.length -1;
        l = minimumIndex +1;
    }

    while(l <= r)
    {
        const m = l + Math.floor((r-l)/2);
        if(nums[m] == target)
            return m;
        
        if(target > nums[m])
            l = m +1;
        else
            r = m -1;
    }

    return -1;
}
