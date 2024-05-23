// interfaces are a more powerful tool for describing the shape of an object
// But type aliases can be useful for creating shorter names for types
// or for describing types that cannot be expressed using interfaces
// Interface aloow you inheritance
// Interface also allow you to extent any structure of your interface

interface User {
    readonly dbID: number,
    email: string,
    userID: number,
    googleID?: string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

// interface Admin extends User {       rechecking this error
    interface User {
    role: "admin" | "ta" | "learner"
}

const tayyab: User ={dbID: 11, email: "20014119-004", userID: 1122,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "Trail Started"
},
getCoupon: (name: "tayab10", off: 10) => {
    return 10
}
}
tayyab.email ="tayyab"
