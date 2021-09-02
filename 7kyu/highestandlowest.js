function highAndLow(numbers){
    var numArr = numbers.split(" ");
    var highest = numArr[0];
    var lowest = highest;

    numArr.forEach(element => {
        if (parseInt(element) > highest){
            highest = element;
        }
        if (parseInt(element) < lowest){
            lowest = element;
        }
    })
    return highest + " " + lowest;
  }
