arr1 = [1,2,3];
timesRotate = prompt(parseInt('Times to Rotate: '));

console.log('Rotated the Array ' + '[' + arr1 + '] ' + timesRotate + 'times');

var q = 1;
while (q <= timesRotate)
{
    var pl = arr1[0];
    for (k = 0; k < arr1.length;k++)
    {     
        if (k != arr1.length - 1)
        {
            arr1[k] = arr1[k + 1];
        }

        else
        {
            arr1[k] = pl;
        }
    } 
q++;
}
console.log(arr1);
