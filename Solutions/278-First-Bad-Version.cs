
public class Solution : VersionControl {
    public int FirstBadVersion(int n) {
        if(IsBadVersion(1) || n == 1) return 1;
        int left = 1, right = n;
        int middle =  left + (right - left) / 2;
        while(left < right)
        {   
            middle = left + (right - left) / 2;
            if(IsBadVersion(middle)) right = middle;
            else left = middle + 1;
        }
        return left;
    }
}
