let steps = 0;
const f = (n) => {
    // for(let i = 0; i < n/2; i++)
    // {
    //     steps++;
    //     let sqr = i * i;
    //     if(sqr == n) return i;
    //     if(sqr > n) return i -1;
    // }
    if(n <= 1) return n;
    let l = 0, r = n/2;
    while(l + 1 < r)
    {
        steps++;
        let mid = l + Math.floor((r - l)/2);
        let sqr = mid * mid;

        if(sqr == n) return mid;

        if(sqr > n)
            r = mid;
        else
            l = mid;
    }

    return l;
}

const tests = [
    {
        input: 9,
        expected: 3
    },
    {
        input: 11,
        expected: 3
    },
    {
        input: 569,
        expected: 23
    },
    {
        input: 570,
        expected: 23
    },
    {
        input: 881,
        expected: 29
    },
    {
        input: 882,
        expected: 29
    },
    {
        input: 965,
        expected: 31
    },
    {
        input: 966,
        expected: 31
    },
    {
        input: 999,
        expected: 31
    },
    {
        input: 100000,
        expected: 316
    }
]

tests.forEach(({ input, expected }) => {
    const result = f(input);
    console.log(`Test: ${input} => ${result} (${steps}) => ${result == expected ? "✅" : "🟡"}`);
    steps = 0;
});
