//arrray
// To specify the type of an array like [1, 2, 3], you can use the syntax number[];
// this syntax works for any type (e.g. string[] is an array of strings, and so on).
// You may also see this written as Array<number>, which means the same thing.
// We’ll learn more about the syntax T<U> when we cover generics.

// Note that [number] is a different thing; refer to the section on Tuples


const superHeros: string[] = []
const heroPower: Array<number> = []

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

const MLModels: number[][]= [
    [255, 255, 255],
    []
]

superHeros.push("spiderman")
heroPower.push(2)

allUsers.push({name: "", isActive: true})