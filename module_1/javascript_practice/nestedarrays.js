const data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.table(data)

//For Loops Method

// for (let i = 0; i < data.length; i++) {
//     console.log(data[i]) // log each nested array
//     for(let j= 0; j < data[i].length; j++) {
//         console.log(data[i][j]) // each item in the array
//     }
// }

const studentsData = [['Jack', 24],['Sara', 23], ['Peter', 24]]

// for (let i = 0; i < studentsData.length; i++) {
//     console.log(studentsData[i])

//     for(let m = 0; m < studentsData[i].length; m++){
//         console.log(studentsData[i][m])
//     }
// }
// forEach Method
studentsData.forEach((arr, idx) => {
    console.log(arr)

    arr.forEach((item) => {
        console.log(item)
    })
})


// For in loop
for (let key in user){
    console.log(user[key])

}

for (const [key, value] of Object.entries(user)){
    console.log(`${key}: ${value}`)
}