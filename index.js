var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];


// Number of months in array displayed in console log
// Create var for months
// var months = finances.length;
// console.log(`Total Months: ${months}`);

// // Find sum of all 'numbers' in array
// var totalNetSum = 0;
// totalNetSum = finances.reduce((accumulator, value) => {
//   return accumulator + value[1];
// }, 0);

// console.log(`Total: £${totalNetSum}`);

// var totalNetSum = 0;
// totalNetSum = finances.reduce((accumulator, value) => {
//   return accumulator + value[1];
// }, 0);

// console.log(`Total: £${totalNetSum}`);




var months = finances.length;        //Create an variable for total months with the .length attribute
// var totalProfitLoss = 0; //duplicate








console.log("Total months: " + months);        //Display results in the console


//How do I find the net total of Profit/Losses?
  //Find the sum of the objects in the amounts column
    //netTotalProfitLoss = the sum amounts of all months
   
  var totalProfitLoss = 0;         //Create a variable for net total profit/loss

  for (var i = 0; i < months; i++) {

      totalProfitLoss += finances[i][1];       //Sum up the objects in the amounts column 
  }

  console.log("Total Profit/Loss: £" + totalProfitLoss); 

  var averageChange = [];
  var sum = 0;
  var greatest = ['', 0];
  var date;
// **METHOD 1: FOR LOOP*
// // start with i = 1 to start comparison from the second month
for (let i = 1; i < months; i++) {
  let difference = finances[i][1] - finances[i - 1][1];
  averageChange.push(difference);

  
}

console.log(averageChange)


// this has calculated the amount of difference between the months and listed them out

var totalAverageChange = [116771,-662642,-391430,379920,212354,510239,-428211,-821271,693918,416278,-974163,860159,-1115009,1033048,95318,-308093,99052,-521393,605450,231727,-65187,-702716,177975,-1065544,1926159,-917805,898730,-334262,-246499,-64055,-1529236,1497596,304914,-635801,398319,-183161,-37864,-253689,403655,94168,306877,-83000,210462,-2196167,1465222,-956983,1838447,-468003,-64602,206242,-242155,-449079,315198,241099,111540,365942,-219310,-368665,409837,151210,-110244,-341938,-1212159,683246,-70825,335594,417334,-272194,-236462,657432,-211262,-128237,-1750387,925441,932089,-311434,267252,-1876758,1733696,198551,-665765,693229,-734926,77242,532869];
var sum = 0

//add all of these figures together to get a total of -196785
for (var i=0; i<totalAverageChange.length; i++)(
  sum += totalAverageChange[i]
)

// divide -196785 byt 85 as this is the amount of months that have been compared then display in console.
// console.log(Math.round(sum/85))

var average = Math.round((sum / (85)) * 100) / 100;

console.log(average)

var greatestIncrease = []

var greatestDecrease = []