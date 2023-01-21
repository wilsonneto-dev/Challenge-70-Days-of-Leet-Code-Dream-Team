// 20/01/2023 - review
public class Solution {
    public bool IsPowerOfTwo(long x) 
        // => (x is not 0) && (x & (x - 1)) == 0;
        => (x is not 0) && (x & (~x +1)) == x;
}

// first solution
public class Solution {
    public bool IsPowerOfTwo(int n) {
        while(n > 0)
        {
            if((n % 2) == 1)
                return n == 1;
            n >>= 1;
        }
        return false;
    }
}

// final solution
public class Solution {
    public bool IsPowerOfTwo(long x)
        => x != 0 && (x & (x - 1)) == 0;  
}
