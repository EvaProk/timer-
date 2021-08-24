const arg = process.argv.slice(2);

let timeArray = arg.sort((a,b) =>  a - b ).map(Number);
  for (let i = 0; i < timeArray.length; i ++) {
    if(timeArray === []) {
    break;
    }
    if(timeArray[i] < 0 || timeArray[i] === NaN){
      continue;
    }
    setTimeout(() => {
      process.stdout.write('beep \n');;
    }, timeArray[i] * 1000);
  }

