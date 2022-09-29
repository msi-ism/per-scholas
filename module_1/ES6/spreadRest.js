// ** Spread Operator ...
const firstArr = [1,2,3]

const firstArrCopy = [...firstArr]

const secondArr = [...firstArr, 4,5,6]

console.log(secondArr)

// & Objects

const user = {
    name: 'Mike',
    age: 32
}

user.location = 'USA'

const superUser = {
    ...user,
    isSuperUser: true
}


console.log(superUser)


// *** Rest Operator ...

const sortNums = (...values) => {
    console.log(values);
    return values.sort()
}

console.log(sortNums(1, 3, 4, 65, 32, 12, 7, 45, 2))

const sum = (...args) => {
    return args.reduce((acc, i) => acc + i)
}

console.log(sum(1,2,3,32,32,12,4,6))