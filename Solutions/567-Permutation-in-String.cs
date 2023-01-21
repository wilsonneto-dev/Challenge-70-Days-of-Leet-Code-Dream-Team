// n1 = s1.Length / n2 = s2.Length
// t => O(n1 + ( n2 * n1^2))
// s => O(n1 + n1)
public class Solution {
    public bool CheckInclusion(string s1, string s2) {
        var searchDictionary = new Dictionary<char, int>();
        foreach(char ch in s1)
        {
            if(searchDictionary.ContainsKey(ch))
                searchDictionary[ch] = searchDictionary[ch] + 1;
            else
                searchDictionary.Add(ch, 1);
        }

        Dictionary<char,int> findingDictionary = null;
        int findingStart = 0;
        int currentIndex = 0;
        while(currentIndex < s2.Length)
        {
            var ch = s2[currentIndex];
            if(searchDictionary.ContainsKey(ch))
            {
                if(findingDictionary is null)
                {
                    findingStart = currentIndex;
                    findingDictionary = new();
                    foreach(var pair in searchDictionary)
                        findingDictionary.Add(pair.Key, pair.Value);
                    // findingDictionary = searchDictionary.Clone();
                }

                if(findingDictionary.ContainsKey(ch))
                {
                    var timesToFind = findingDictionary[ch] - 1;
                    if(timesToFind > 0)
                        findingDictionary[ch] = timesToFind;
                    else {
                        findingDictionary.Remove(ch);
                        if(findingDictionary.Count() == 0)
                            return true;
                    }
                }
                else {
                    currentIndex = findingStart + 1;
                    findingDictionary = null;
                    continue;
                }
            } else {
                if(findingDictionary is not null)
                {
                    findingDictionary = null;
                }
            }

            currentIndex++;
        }

        return false;
    }
}
