
var counter = 100;
IEnumerable<string> For()
{
    while (--counter > 0)
    {
        Console.WriteLine(counter.ToString("D10"));
        yield return "Hello";
    }
}


var x = For().Take(10).ToList();
Console.WriteLine(x.Count());
counter = 100;
var y = For().Take(20).ToList();
counter = 100;
var z = For().Take(200);
counter = 100;

