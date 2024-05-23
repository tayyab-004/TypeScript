function addTwo(num){
    // num.toUpperCase();      error due to any type marker
    return num + 2;
}


addTwo(5)

function addThree(num:number){
    // num.toUpperCase();  error due to no recognition of property uppercase in type number
    return num + 3;
}

addThree(5)

function getUpper(val: string){
    return val.toUpperCase();
}
getUpper("6");
getUpper("tayyab");

function signUpUser(name: string, email: string, isPaid: boolean){}
signUpUser("tayyab","20014119-004@uog.edu.pk",false);

let loginUser = (name:string,email:string,isPaid:boolean = false) => {}
loginUser("tayyab","20014119-004@uog.edu.pk")