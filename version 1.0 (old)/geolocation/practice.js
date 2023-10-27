var wkArray = [
    'Mon.',
    'Tue.',
    'Wed.',
    'Thu.',
    'Fri.',
    "Sat.",
    'Sun.'
];

for (var day in wkArray)
{
    console.log(wkArray[day] + ' is a day number '
    + (parseInt(day) + 1) + ' of the week');  // print
}

var nums = [1, 2, 3, 4];

nums = nums.map(function(num)
{
    return num * 2;
})

console.log(nums);