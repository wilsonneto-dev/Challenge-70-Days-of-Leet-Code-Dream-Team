let steps = 0;
const f = (arr) => {

    let l = 0;
    let r = arr.length - 1;

    while(l <= r)
    {
        let mid = l + Math.floor((r - l)/2);
        if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1])
        return mid;

        if(arr[mid] > arr[mid+1])
        r = mid - 1;
        else
        l = mid + 1;        
    }

    return -1;
}

const tests = [    
    {                        
        Input: [1, 100,99,79,78,67,36,26,19],
        Output: 1    
    },
    {
        Input: [3,4,5,1],
        Output: 2
    },
    {
        Input: [0,10,5,2],
        Output: 1
    },
    {
        Input: [0,2,1,0],    
        Output: 1
    },
    {
        Input: [0,1,0],   
        Output: 1
    }
]

tests.forEach(({ Input, Output }) => {
    const result = f(Input);
    console.log(`Test: ${Input} => ${result} (expected: ${Output}) => ${result == Output ? "✅" : "🟡"}`);
    steps = 0;
});