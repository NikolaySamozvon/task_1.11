let number = prompt("Number is ","");
console.log(seconds(number));
let sidesLength = prompt("Side Length is ","");
let sidesCount = prompt("Sides count is ", "");
console.log(perimeter(sidesLength, sidesCount));
let digitsToPrint = prompt("Max digit to print is ", "");
printDigits(digitsToPrint);
console.log(calculate(15,45,60));
magicArrayFunction(10);
magic2DArrayFunction();
let number1 = prompt("Enter 1st number for operation","");
let number2 = prompt("Enter 2nd number for operation","");
let operationType = prompt("Enter an operation type (Add, Sub, Mul, Div)");
console.log(mathOperations(Number(number1), Number(number2), operationType));
let detectionNumber = prompt("Enter a number to detect","");
console.log(numberDetector(Number(detectionNumber)));
let array = [2, 4, 6, 8, "Hello"];
console.log(array);
setTimeout(()=> {
    console.log(arrayTrick(array));
}, 2000);






// Task 1
function seconds (total) {
    return total % 60;
}


// Task 2
function perimeter (sideLength, count) {
    return sideLength * count;
}


// Task 3
function printDigits (n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz");
        }
        else if (i % 3 == 0) {
            console.log("fizz");
        }
        else if (i % 5 == 0) {
            console.log("buzz");
        }
        else {
            console.log(i);
        }
    }
}


// Task 4
function calculate (num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}


// Task 6
function magicArrayFunction(elementsCount) {
    function random(min, max) {
        return Math.round(min + Math.random() * (max - min));
    }
    let magicArrayOfOdd = [];
    let magicArray = [];
    for (let i = 0; i < elementsCount; i++) {
        magicArray.push(random(1,100));
    }
    console.log(magicArray);
    let maxValue = 0;
    let minValue = 1000;
    let elementsSum = 0;
    for (let i = 0; i < magicArray.length; i++) {
        if (magicArray[i] > maxValue) {
            maxValue = magicArray[i];
        }
        if (magicArray[i] < minValue) {
            minValue = magicArray[i];
        }
        if (magicArray[i] % 2 == 1) {
            magicArrayOfOdd.push(magicArray[i]);
        }
        elementsSum += magicArray[i];
    }
    console.log("Biggest number is " + maxValue);
    console.log("Lowest number is " + minValue);
    console.log("Sum of elements is " + elementsSum);
    console.log("Average is " + elementsSum / magicArray.length);
    console.log("Odd numbers is " + magicArrayOfOdd);
}


// Task 7
function magic2DArrayFunction() {
    let magicArray = [[],[],[],[],[]];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            magicArray[i][j] = Math.round(-50 + Math.random() * (100));
        }
    }
    console.log(magicArray);
    setTimeout(()=>{
        let newMagicArray = magicArray.slice();
        for (let i = 0; i < 5; i++) {
            if (newMagicArray[i][i] < 0) {
                newMagicArray[i][i] = 0;
            }
            if (newMagicArray[i][i] > 0) {
                newMagicArray[i][i] = 1;
            }
        }
        console.log(newMagicArray);
    }, 2000);
}

// Task 8
function mathOperations(number1, number2, operationType) {
    switch (operationType) {
        case "Add":
            return number1 + number2;
        case "Sub":
            return number1 - number2;
        case "Mul":
            return number1 * number2;
        case "Div":
            if(number2 == 0) {
                alert("Can't divide by 0");
                break;
            }
            else {
                return number1 / number2;
            }
        default:
            alert("Hello World");
            break;
    }
}

// Task 9
function numberDetector(number) {
    let description = "";
    if (number < 0) {
        description += "Negative ";
    }
    if (number > 0) {
        description += "Positive ";
    }
    function isSimple(number) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) return "Not Simple ";
        }
        return "Simple ";
    }
    description += isSimple(number);
    if (number % 2 == 0) {
        description += "Dividable by 2 ";
    }
    if (number % 2 != 0) {
        description += "Not Dividable by 2 ";
    }
    if (number % 3 == 0) {
        description += "Dividable by 3 ";
    }
    if (number % 3 != 0) {
        description += "Not Dividable by 3 ";
    }
    if (number % 5 == 0) {
        description += "Dividable by 5 ";
    }
    if (number % 5 != 0) {
        description += "Not Dividable by 5 ";
    }
    if (number % 6 == 0) {
        description += "Dividable by 6 ";
    }
    if (number % 6 != 0) {
        description += "Not Dividable by 6 ";
    }
    if (number % 9 == 0) {
        description += "Dividable by 9 ";
    }
    if (number % 9 != 0) {
        description += "Not Dividable by 9 ";
    }
    return description;
}

// Task 10
function arrayTrick(array) {
    array.reverse();
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(Number.parseInt(array[i]))) {
            array[i] *= array[i];
        }
    }
    return array;
}
