'use strict'


function getNeedNumber(number,first,second,third){
    function findNumber (fNumber,history){
        if (number === fNumber){
            return history
        }else if ( fNumber > number){
            return null
        }else {
            return findNumber ( fNumber + first, `${history} + ${first} ` ) ||
                    findNumber ( fNumber * second, `${history} * ${second} ` ) ||
                    findNumber ( fNumber * third, `${history} * ${third} ` )
        }
    }
    return findNumber (1, '1')
    
}


let number = Number(prompt("Enter the number: "))
if(isNaN(number)){
    console.log("Enter number please");
}else { 
    let first = Number(prompt("Enter the first (+) kf: "))
    let second = Number(prompt("Enter the second kf(*): "))
    let third = Number(prompt("Enter the third kf (*): "))
        if(isNaN(first) || isNaN(second) || isNaN(third)){
            console.log("Enter number please");
        }
        else   
            console.log(number.toString(), '=' , getNeedNumber(number,first,second,third));
}








