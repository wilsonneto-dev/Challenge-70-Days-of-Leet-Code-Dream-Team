// first solution, it doens`t fit the requirements cos use O(n) in mmeory

public class Solution {
    public int SingleNumber(int[] nums) {
        if(nums.Length == 1) return nums[0];
        var dictionary = new Dictionary<int, int>();
        
        foreach(int number in nums)
        {
            if(dictionary.ContainsKey(number)) 
                dictionary[number] = dictionary[number] + 1;
            else 
                dictionary.Add(number, 1);
        }

        foreach(int number in nums)
            if(dictionary[number] == 1)
                return number;
        
        return -1;
    }
}

// the right solution
public class Solution {
    public int SingleNumber(int[] nums) {
        int a = 0;
        foreach(int i in nums) a ^= i;
        return a;
    }
}
