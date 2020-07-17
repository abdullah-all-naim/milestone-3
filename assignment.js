// *********Feet to Mile Converter*********
function feetToMile (feet) {
    var mile = feet*0.00018939; /**1 mile= 0.00018939 feet */
    if(feet < 0){
        return "Invalid input! measurement value should be positive number!";
    }
    return mile;
}

var miles = feetToMile(45); /** feet input */
console.log ("Convert from Feet to Miles : ", miles,"miles");


//********* Wood Calculator**********
function woodCalculator(chair,table,bed){

    var totalChairWood = 1*chair;
    var totalTableWood = 3*table;
    var totalBedWood = 5*bed; 
    totalWoodNeeded = totalChairWood + totalTableWood + totalBedWood;

    if(chair<0 || table<0 || bed <0){
        return "Invalid input! values should be positive.";
    }
    return totalWoodNeeded;         
}

var customerInput = woodCalculator(10,8,5); /** (chair,table,bed) */
console.log ("Total wood needed for chair,table,bed : " , customerInput,"cubicFeet");


// *********Brick Calculation**********
function brickCalculator(floor) {

    if(floor>0 && floor<=10){
    return floor*15*1000;
    }
    else if(floor>=11 && floor <= 20){
        return (150+(floor-10)*12)*1000;
    }
    else if(floor > 21){
        return (270+(floor-20)*10)*1000;
    }
    else if(floor<0){
        return "Invalid input! value should be positive. ";
    }
    else{
        return "Please input correct value!";
    }    
}

var floorInput = brickCalculator(50); /** demo(floor number input) */
console.log ("Bricks needed for your given floor input : ", floorInput,"pcs");


//***********Find the Tiny named friend**************
function tinyFriend(friendsNameArr) {
    
    var tinyName= friendsNameArr[0];
    for(var i = 0; i < friendsNameArr.length; i++){
        var tinyWord = friendsNameArr[i];
      if(tinyWord.length < tinyName.length){
          tinyName=tinyWord;
       }   
    }
    return tinyName;  
  }
  
  var tinyNamedFriend=tinyFriend(["tajmilur","shahidur rahman","taj","naimur","naim"]);/**array input[] */
  console.log("The name of my tiny named friend is : ",tinyNamedFriend);

