function getMethod(){
    console.log("hello");
    console.log("how are u?");
    console.log("I'm fine");
}
getMethod();
// parametrized function
function calculate(amtOfBottles){
    var price=amtOfBottles*5;
    console.log("you have bought"+ price);
}
calculate(3);
//ex: code toLife in Weeks Coding Exercise , the life exist till 90 years age
function lifeInWeeks(age) {
    //Write your code here.
    var result=90-age;
    var daysleft=result*365;
    var weeksleft=result*52;
    var monthsleft=result*12;
    console.log("You have "+ daysleft+" days, "+weeksleft+" weeks,"+" and "+monthsleft+" "+"months left.");

}
lifeInWeeks(12);
// bmi calc
function calcbmi(weight,height){
    var result=(weight)/(height*height);
    return Math.round(resut);
}