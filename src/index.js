module.exports = function toReadable(number) {
    let readableStr = "";
    let arr = number.toString().split('');
    if (arr.length === 1) {
       switch(arr[0]) {
           case arr[0] = "0" : readableStr +='zero'; break;
           case arr[0] = "1" : readableStr +='one'; break;
           case arr[0] = "2" : readableStr +='two'; break;
           case arr[0] = "3" : readableStr +='three'; break;
           case arr[0] = "4" : readableStr +='four'; break;
           case arr[0] = "5" : readableStr +='five'; break;
           case arr[0] = "6" : readableStr +='six'; break;
           case arr[0] = "7" : readableStr +='seven'; break;
           case arr[0] = "8" : readableStr +='eight'; break;
           case arr[0] = "9" : readableStr +='nine'; break;
        }
    } 
  else if (number === 10 || number === 11 || number === 12) {
        switch (number) {
            case 10: readableStr = "ten";  break;
            case 11: readableStr = "eleven"; break;
            case 12: readableStr = "twelve"; break;
        }
    }  
  else if (arr.length === 2 && arr[0] == 1) {
      switch(arr[1]) {
             case arr[1] = "0": readableStr +='ten'; break;
             case arr[1] = "1": readableStr +='eleven'; break;
             case arr[1] = "2": readableStr +='twelve'; break;
             case arr[1] = "3": readableStr +='thirteen'; break;
             case arr[1] = "4": readableStr +='fourteen'; break;
             case arr[1] = "5": readableStr +='fifteen'; break;
             case arr[1] = "6": readableStr +='sixteen'; break;
             case arr[1] = "7": readableStr +='seventeen'; break;
             case arr[1] = "8": readableStr +='eighteen'; break;
             case arr[1] = "9": readableStr +='nineteen'; break;
             default:
      } 
  } 
  else if (arr.length === 2 && arr[0] !== 1) {           
          switch(arr[0]) {
            case arr[0] = "2" : readableStr +='twenty'; break;
            case arr[0] = "3" : readableStr +='thirty'; break;
            case arr[0] = "4" : readableStr +='forty'; break;
            case arr[0] = "5" : readableStr +='fifty'; break;
            case arr[0] = "6" : readableStr +='sixty'; break;
            case arr[0] = "7" : readableStr +='seventy'; break;
            case arr[0] = "8" : readableStr +='eighty'; break;
            case arr[0] = "9" : readableStr +='ninety'; break;
          };
       switch(arr[1]) {
           case arr[1] = "0" : readableStr +=''; break;
           case arr[1] = "1" : readableStr +=' one'; break;
           case arr[1] = "2" : readableStr +=' two'; break;
           case arr[1] = "3" : readableStr +=' three'; break;
           case arr[1] = "4" : readableStr +=' four'; break;
           case arr[1] = "5" : readableStr +=' five'; break;
           case arr[1] = "6" : readableStr +=' six'; break;
           case arr[1] = "7" : readableStr +=' seven'; break;
           case arr[1] = "8" : readableStr +=' eight'; break;
           case arr[1] = "9" : readableStr +=' nine'; break;
        }
    
    } 
  else if (arr.length === 3 && arr[1] == 1) {
           switch(arr[0]) {
              case arr[0] = "1" : readableStr +='one hundred'; break;
              case arr[0] = "2" : readableStr +='two hundred'; break;
              case arr[0] = "3" : readableStr +='three hundred'; break;
              case arr[0] = "4" : readableStr +='four hundred'; break;
              case arr[0] = "5" : readableStr +='five hundred'; break;
              case arr[0] = "6" : readableStr +='six hundred'; break;
              case arr[0] = "7" : readableStr +='seven hundred'; break;
              case arr[0] = "8" : readableStr +='eight hundred'; break;
              case arr[0] = "9" : readableStr +='nine hundred'; break;
            };
          switch(arr[2]) {
             case arr[2] = "0": readableStr +=' ten'; break;
             case arr[2] = "1": readableStr +=' eleven'; break;
             case arr[2] = "2": readableStr +=' twelve'; break;
             case arr[2] = "3": readableStr +=' thirteen'; break;
             case arr[2] = "4": readableStr +=' fourteen'; break;
             case arr[2] = "5": readableStr +=' fifteen'; break;
             case arr[2] = "6": readableStr +=' sixteen'; break;
             case arr[2] = "7": readableStr +=' seventeen'; break;
             case arr[2] = "8": readableStr +=' eighteen'; break;
             case arr[2] = "9": readableStr +=' nineteen'; break;
           }           
    } 
  else if (arr.length === 3 && arr[1] !== 1) {
      switch(arr[0]) {
            case arr[0] = "1" : readableStr +='one hundred'; break;
            case arr[0] = "2" : readableStr +='two hundred'; break;
            case arr[0] = "3" : readableStr +='three hundred'; break;
            case arr[0] = "4" : readableStr +='four hundred'; break;
            case arr[0] = "5" : readableStr +='five hundred'; break;
            case arr[0] = "6" : readableStr +='six hundred'; break;
            case arr[0] = "7" : readableStr +='seven hundred'; break;
            case arr[0] = "8" : readableStr +='eight hundred'; break;
            case arr[0] = "9" : readableStr +='nine hundred'; break;
          };
      switch(arr[1]) {
           case arr[1] = "1" : readableStr+=''; break;
            case arr[1] = "2" : readableStr +=' twenty'; break;
            case arr[1] = "3" : readableStr +=' thirty'; break;
            case arr[1] = "4" : readableStr +=' forty'; break;
            case arr[1] = "5" : readableStr +=' fifty'; break;
            case arr[1] = "6" : readableStr +=' sixty'; break;
            case arr[1] = "7" : readableStr +=' seventy'; break;
            case arr[1] = "8" : readableStr +=' eighty'; break;
            case arr[1] = "9" : readableStr +=' ninety'; break;
        };
      switch(arr[2]) {
           case arr[2] = "0" : readableStr +=''; break;
           case arr[2] = "1" : readableStr +=' one'; break;
           case arr[2] = "2" : readableStr +=' two'; break;
           case arr[2] = "3" : readableStr +=' three'; break;
           case arr[2] = "4" : readableStr +=' four'; break;
           case arr[2] = "5" : readableStr +=' five'; break;
           case arr[2] = "6" : readableStr +=' six'; break;
           case arr[2] = "7" : readableStr +=' seven'; break;
           case arr[2] = "8" : readableStr +=' eight'; break;
           case arr[2] = "9" : readableStr +=' nine'; break;
        };
    }
    // console.log(readableStr);
    return readableStr;
     }
