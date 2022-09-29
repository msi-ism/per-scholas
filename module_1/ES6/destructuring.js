
const user = {
    name: 'Micheal',
    age: 30,
    cohort: '27',
    isStudent: true

}

// const userName = user.name
// console.log(userName)

const {name, age, cohort, isStudent} = user

console.log(name)
console.log(age)

const devs = ['jay', 'kay', 'ayy', 'bay', 'say']

const [dev0, dev1, dev2, dev3, dev4] = devs

console.log(dev0)

const hook = () => {
    const hookName = 'state'
    const hookSetter = () => {}
    return [hookName, hookSetter]
}

const [state, setState] = hook()

console.log(state)
console.log(setState)