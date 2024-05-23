// In TypeScript, a tuple is a type that represents an array with a fixed number of elements of different types
// It is similar to an array, but each element in a tuple has a specific type,
// rather than all elements being of the same type as in an array
//only available in typescript not in JS

const user: (string | number)[] = [1, "tayyab"]

let tUser: [string, number, boolean]
tUser = ["tayyab", 1122, true]

let rgb: [number, number, number] = [255, 123, 144]

type User = [number, string]
// const newUser: User = [1122,"tayyab",122]       error beacuse tuple allow fixed elements
const newUser: User = [1122,"tayyab"]
newUser[1] = "ali"  //overwritting the value of index1
// newUser.push(true)   it maybe a mistaken thing for code for more visit:
//https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array