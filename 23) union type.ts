//In TypeScript, a union type represents a value that can be one of several different types.
// Union types are written using the | symbol, which separates the different possible types

let score: number | string = 33
score = 44;
score = "55"

type User= {
    name: string;
    id: number
}


type Admin= {
    userName: string;
    id: number
}

let tayyab: User | Admin = {name: "tayyab", id: 1122}

tayyab = {userName: "001", id: 1122}
getDBId(3)
getDBId("3")

function getDBId(id: number | string){
if (typeof id== "string"){
    id.toLowerCase()
}

    // console.log('DB id is: ${id}');
}

// array with union discussion

const data: number[] = [1,2,3,4]
const data2: string[] = ["1","2","3","4"]
const data3: string[] | number[] = ["1","2","3","4"]
const data4: (string | number | boolean)[] = ["1","2","3",4,true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"   error