function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "please provide a number"
    }
    let cube;
    cube = number * number * number;
    return cube;
}


function matchFinder(string1, string2) {
    if (typeof string1 !== "string") {
        return "please 1st parameter input provide a string";
    } else if (typeof string2 !== "string") {
        return "please 2nd parameter input provide a string";
    }
    for (const input1 of string1) {
        for (const input2 of string2) {
            if (input1 === input2) {
                return true;
            }
        }
    }
    return false;
}



function sortMaker(arr) {
    if (arr.some(item => typeof item !== 'number' || item < 0)) {
        return "Invalid Input";
    }
    if (arr[0] < arr[1]) {
        return [arr[1], arr[0]];
    } else if (arr[1] < arr[0]) {
        return [arr[0], arr[1]];
    } else {
        return "equal";
    }
}


function findAddress(obj) {
    console.log(obj);
    let street = obj.street || '_';
    let house = obj.house || '_';
    let society = obj.society || '_';
    return `${street} ${house} ${society}`;
}

const obj = {
    street: 'kaulna44',
    // house: "1st home",
    society: "man"
}
const sum = findAddress(obj)
console.log(sum);


function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Missing , please provide an taka";
    }
    let totalCash = changeArray.reduce((acc, val) => acc + val, 0);
    if (totalCash >= totalDue) {
        return true;
    } else {
        return false;
    }
}
const array = [11];
const price = 10;