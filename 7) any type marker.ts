// TypeScript also has a special type, any,
// that you can use whenever you don’t want a particular value to cause typechecking errors.
let hero;

function getHero(){
    return "thor";
}
// let hero: any        error
// hero = getHero();
//maybe its a bad experience for user/developer
// You usually want to avoid this, though, because any isn’t type-checked.
// Use the compiler flag noImplicitAny to flag any implicit any as an error