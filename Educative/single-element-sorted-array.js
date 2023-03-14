let steps = 0;

const f = (nums) => 
{
    if(nums.length == 1) return nums[0];

    let l = 0, r = nums.length -1;
    if(nums[l] != nums[l+1]) return nums[l];
    if(nums[r] != nums[r-1]) return nums[r];

    while(l <= r)
    {
        steps++;
        const m = l + Math.floor((r-l)/2);
        
        if(nums[m] != nums[m+1] && nums[m] != nums[m-1])
            return nums[m];

        if(
            (m % 2 == 1 && nums[m] == nums[m-1]) ||
            (m % 2 == 0 && nums[m] == nums[m+1])
        )
            l = m + 1;
        else
            r = m -1;
    }
}

const f_linear = (nums) => 
{
    if(nums.length == 1) return nums[0];

    let pointer = 0;
    while(pointer < nums.length -1)
    {
        steps++;
        if(nums[pointer] == nums[pointer+1])
            pointer += 2;
        else
            return nums[pointer]
    }

    return nums[pointer]
}

const tests = [
    {   
        Input: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,20,20,30,31,31,44,44,55,55,66,66,77,77,88,88,999,999,3333,3333],
        Output: 30 
    }
]

tests.forEach(({ Input, Output }) => {
    const result = f(Input);
    console.log(`${result == Output ? "✅" : "❌"} test: ${Input} => ${result} (expected: ${Output}) [${steps}]`);
    steps = 0;
});



tests.forEach(({ Input, Output }) => {
    const result = f_linear(Input);
    console.log(`${result == Output ? "✅" : "❌"} test: ${Input} => ${result} (expected: ${Output}) [${steps}]`);
    steps = 0;
});


