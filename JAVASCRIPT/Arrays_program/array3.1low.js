var array = [12000,13000,14000,15000,11000,3325000,17000];
var minvalue = array[0]; 
for (var i = 0; i < array.length; i++) {
    if(array[i]<minvalue)
    {
        minvalue = array[i];
    }
}
  console.log(minvalue);


// array.reduce((exp1,exp2))=>exp1<exp2?exp1:exp2;