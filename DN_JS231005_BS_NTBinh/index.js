function findBiggestAndOnly() {
  let fiveNumber = prompt("nhập ký tự");
  let array = fiveNumber.split("").map((item) => parseInt(item));
  let biggestNumber = array[0];
  for (let number of array) {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
    if (
      number !== biggestNumber &&
      array.filter((n) => n === number).length === 1
    ) {
      biggestNumber = number;
      break;
    }
  }
}

// bài 1
function sumAll() {
  let numberBefore = [8, 6, 3, 4, 1];
  let sumAllnumber = 0;
  for (let i = 0; i < numberBefore.length; i++) {
    sumAllnumber += numberBefore[i];
  }
  console.log(sumAllnumber, "là tổng các số");
}
// bài 2
function heart() {
  console.log("", "*", "*", "", "*", "*", "");
  console.log("*", "", "", "*", "", "", "*");
  console.log("*", "", "", "", "", "", "*");
  console.log("", "*", "", "", "", "*", "");
  console.log("", "", "*", "", "*", "", "");
  console.log("", "", "", "*", "", "", "");
}

// bài 3
function deleteNumber() {
  let allString = prompt("Nhập chuỗi");
  let newArrayAfterSplit = allString.split("");
  let newArr = newArrayAfterSplit.filter((item) => {
    return isNaN(item);
  });
  let result = newArr.join("");
  console.log(result);
}
// bài 4
function reverseOrder() {
  let input = prompt("Nhập chuỗi");
  let splitArray = input.split(" ");
  let outPut = "";
  splitArray.forEach((item) => {
    let first = item.split("");
    first.reverse();
    let joinArray = first.join("");
    outPut += joinArray + " ";
  });
  console.log(outPut);
}
// bài 5
