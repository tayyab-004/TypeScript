//funtion with 1 return type
function addTwo(num:number):number{
    return num+2;
    // return "hello";  error due to passing string in number property
}

//funtion with more than 1 return type
//error
// function getValue(myVal: number): boolean{
//     if (myVal > 5){
//         return true;
//     }
//     return "200 ok!";
// }

//arrow function decleration
const getHello = (s: string): string =>{
    return "";
}

const heros= ["thor", "spiderman", "ironman"]       //array
// const heros= [1,2,3]     //if it applied it will change return type of .map

heros.map((heros): string =>{ //.map: create a new array with results of calling a provided function on every element in this array
    return 'hero is ${hero}'
})


function consoleError(errmsg: string): void{
    console.log(errmsg);
}

// The never type represents values which are never observed.
// In a return type, this means that the function throws an exception or terminates execution of the program
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}