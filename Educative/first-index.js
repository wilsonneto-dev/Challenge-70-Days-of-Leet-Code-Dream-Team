const binarySearch = (arr, target) => {
    let l = 0, r = arr.length -1;
    if(arr[l] == target) return l;
    if(arr[r] == target) return r;

    while(l <= r)
    {
        let mid = l + Math.floor((r-l) >> 1);
        if(arr[mid] == target) return mid;
        if(target > arr[mid]) l = mid + 1;
        else r = mid - 1;
    }

    return ~l;
}

// time O(log N) - logarithimic
// space O(1) - constant
const firstNumEqualsIndex = (arr) => {
    let l = 0, r = arr.length;
    if(arr[l] == l) return l;
    if(arr[r] == r) return r;

    while(l <= r)
    {
        const mid = l + Math.floor((r - l)/2);
        if(arr[mid] == mid) return mid;

        if(mid > arr[mid])
            l = mid +1;
        else
            r = mid -1;
    }

    return -1;
}

// var index = binarySearch([1,2,3,4,5,6,88,99,100,150]);
// console.log(`indice: ${index} => ${index == 8}`)

var testsNumEqualsIndex = [
    {
        arr: [-10,-5,3,4,7,9],
        expected: -1
    },
    {
        arr: [0,2,5,8,17],
        expected: 0
    },
    {
        arr: [-10,-5,0,3,7],
        expected: 3
    },
    {
        arr: [-10,-5,0,1,4,7],
        expected: 4
    },
    {
        arr: [-10, -5,-4,-3,-2,-1, 1, 2, 5, 9, 12, 13, 14,15, 16, 17, 20],
        expected: 9
    }
]

tests.forEach(({ arr, expected }) => {
    const result = firstNumEqualsIndex(arr);
    console.log(`Test: [${arr}] => ${result} => ${result == expected ? "✅" : "🟡"}`);
});
