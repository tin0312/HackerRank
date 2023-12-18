const checkCashRegister = (price, cash, cid) => {
  //type bills available as a library for reference to use.
  const UNIT_AMOUNT = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0,
  };
  //Keep track of cash the drawer as iterating through the array of cash avaible in the drawer
  let totalCID = 0;
  for (let element of cid) {
    totalCID += element[1];
  }
  totalCID = totalCID.toFixed(2);
  //calculate the change
  let changeToGive = cash - price;
  //keep track of the change types
  const changeArray = [];
  if (changeToGive > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: changeArray };
  } else if (changeToGive.toFixed(2) === totalCID) {
    return { status: "CLOSED", change: cid };
  } else {
    //reverse a cash value bills in the drawer
    cid = cid.reverse();
    for (let elem of cid) {
      //Initiate an empty array to store type of bill and amount of that bill
      let temp = [elem[0], 0];
      //make sure the change greater than the current unit value and there is cash in the drawer
      while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
        //update the amount of current currency unit
        temp[1] += UNIT_AMOUNT[elem[0]];
        //update the amount of that currency unit left
        elem[1] -= UNIT_AMOUNT[elem[0]];
        //update the change left to continue getting change
        changeToGive -= UNIT_AMOUNT[elem[0]];
        changeToGive = changeToGive.toFixed(2);
      }
      //if there is any change of that currency unit, push it to the change array
      if (temp[1] > 0) {
        changeArray.push(temp);
      }
    }
  }
  //if there is any change left, return insufficient funds
  if (changeToGive > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  //return the change array
  return { status: "OPEN", change: changeArray };
};
console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]))
