function reverseString(str) {
   
    let splitString = str.split(""); //split into an array
 
    
    let reverseArray = splitString.reverse();//reverse the array
    
    let joinArray = reverseArray.join(""); //from array to string
    
    
    return joinArray; 
 }
 reverseString('hello');
 
 
 
 
 
 function upToLowToUp(string)
 {
 
 let splitString = string.split("");
 splitString.forEach(letter => {
 
    if(letter !== [A-Z])
    {
       letter.toUpperCase;
    }
    else
    {
       letter.toLowerCase;
    }
    
 })
 let joinString = splitString.join("");
 return joinString;}
 
 uoToLowToUp('Hello World');
 
 
 
 
 
 
 
 
 
 
 
 function toCelciius(int)
 
 { 
  int = ((int - 32) * 5/9);
  return int;
 
 }
 toCelciius(65);
 
 
 
 
 
 
 
 
 
 const scores =  Array(73, 51 , 87 , 96);
 
 const PassOrFail = scores.map(function(score)
 {
 
    if(score < 75)
    {
       return false;
    }
    return true;
 });
 
 
 
 
 const cardinalNum = [2,3,4,5,6];
 const germanNumm = ['zwei', 'drei', 'vier', 'funf', 'sechs'];
 
 
  function germanNumbers(cardinalNum, germanNumm)
 {
    for( let i = 0; i <= cardinalNum.length; i++)
    {
       for(let j = 0; j <= i; j++)
       {
          console.log(`'${cardinalNum}' is '${germanNumm}'`);
 
       }
    }
 
 
 }
 
 const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
 
 
 function returnPrimeNumbers(nums){
 
    nums.forEach(num => {
       if (num === 1) 
       {
          return false;
        }
        else if(n === 2)
        {
          return true;
        }
        else
        {
          for(let j = 2; j < num; j++)
          {
            if(num % j === 0)
            {
              return false;
            }
          }
          return true;  
        }
       
    });
    console.log(nums);
  }
 
 
 
 
 
 
 for(let i = 1; i <= 100; i++)
 {
   
    if( i % 3 === 0)
    {
       console.log('CSC RULES');
    }
    else( i % 5 === 0)
    {
     console.log('I LOVE JAVASCRIPT');
    }
    
        console.log(`${i}`);
    
    
 
 }
 
    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 