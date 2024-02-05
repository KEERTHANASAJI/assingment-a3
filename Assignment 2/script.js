// Sum of squares of an array

function sum(array){
    var sum=0,i=array.length;
    while(i--)
    sum+=Math.pow(array[i],2);
return sum;
}
console.log(sum([0,1,2,3,4]));