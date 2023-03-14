const f = (nums, target) => 
{
    let l = 0, r = nums.length - 1;
    if(nums[l] == target) return l;
    if(nums[r] == target) return r;
    
    // find the lesser elemt in the array
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
    
    // fin the target
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

const tests = [
    {   
        Input: [[4,5,6,7,0,1,2], 0],    
        Output: 4       
    },    
    {   
        Input: [[4,5,6,7,0,1,2], 5],    
        Output: 1       
    },    
    {   
        Input: [[4,5,6,7,0,1,2], 1],    
        Output: 5    
    },
    {   
        Input: [[4,5,6,7,0,1,2], 6],
        Output: 2     
    },
    {   
        Input: [[4,5,6,7,0,1,2], 17],
        Output: -1
    },
    {   
        Input: [[1], 0],    
        Output: -1       
    },
]

tests.forEach(({ Input, Output }) => {
    const result = f(Input[0], Input[1]);
    console.log(`${result == Output ? "✅" : "❌"} test: ${Input[0]} (target: ${Input[1]}) => ${result} (expected: ${Output})`);
    steps = 0;
});


