let colors = new Set(['Green','Red','Orange','Yellow','Red']);

colors.add('Violet');
colors.add('Indigo');
colors.add('Blue');

console.log(colors);
console.log(colors.size);
// console.log('After Clear method');
// colors.clear();
colors.delete('Violet');
console.log('after delete',colors);
var itr = colors.entries();
console.log("print entries");
for(i=0;i<colors.size;i++)
{
    console.log(itr.next().value); // will print [ 'Green', 'Green' ] <-- double data
   // console.log(itr.next().value[0]); // will print 'Green' <-- just value
   // console.log(itr.next().value[1]); // will print 'Green' <-- just value

}

console.log("print values");
var itr = colors.values();
for(i=0;i<colors.size;i++)
{
    console.log(itr.next().value);// will print 'Green' <-- just value
  //  console.log(itr.next().value[0]);// will print 'G' <-- first letter of the string
}

console.log(colors.has('Blue'));