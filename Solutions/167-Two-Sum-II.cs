// 16/01/2023
// space = O(1) / time = O(n)
public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        int leftPointer = 0,
            rightPointer = numbers.Length -1;
        while(leftPointer < rightPointer)
        {
            var sum = numbers[leftPointer] + numbers[rightPointer];
            if(sum == target) return new int[] { leftPointer + 1, rightPointer + 1 };
            if(sum > target) rightPointer--;
            else leftPointer++;
        }
        return null;
    }
}
