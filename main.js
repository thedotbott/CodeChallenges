// 8 Kyu Kata--Find Multiples of a Number

// Tests
// findMultiples(5, 25) ----- returns [5, 10, 15, 20, 25]
// findMultiples(11, 54) ----- returns [11, 22, 33, 44]
// findMultiples(1, 2) ----- returns [1, 2]
// findMultiples(5, 7) ----- returns [5]
// findMultiples(4, 27) ----- returns [4, 8, 12, 16, 20, 24]


function findMultiples(integer, limit){
    const iter = Math.floor(limit/integer)
    let arr = []
    for (let i = 1; i <= iter; i++){
        arr.push(integer * i)
    }
    return arr
}