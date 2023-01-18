
// with bits:

public class Solution {
    public uint reverseBits(uint n) {
        uint output = 0;
        for(int i = 0; i < 32; i++)
        {
            output <<= 1;
            bool isOne = ((n >> i) % 2) == 1;
            if(isOne) output += 1;
        }
        Console.WriteLine(output);
        return output;
    }
}

// math solution:

public class Solution {
    public uint reverseBits(uint n) {
        uint output = 0;
        uint currentNumber = n;
        for(int i = 0; i < 32; i++)
        {
            output *= 2;
            bool isOne = (currentNumber % 2) == 1;
            if(isOne) output += 1;
            currentNumber /= 2; 
        }
        return output;
    }
}


// with string:

public class Solution {
    public uint reverseBits(uint n) {
        var binaryRepresentation = Convert.ToString(n, 2).PadLeft(32, '0');
        var stack = new Stack<char>();
        foreach(char c in binaryRepresentation) stack.Push(c);
        var builder = new StringBuilder();
        while(stack.Count > 0) builder.Append(stack.Pop());
        var invertedBinaryRepresentation = builder.ToString();
        var output = Convert.ToUInt32(invertedBinaryRepresentation, 2);
        return output;
    }
}

