const minNumber = 1;

function decreaseNumberWithoutLoop(number: number) {
  console.log(number);

  if (number > minNumber) {
    decreaseNumberWithoutLoop(number - 1);
  }
}

decreaseNumberWithoutLoop(5);
