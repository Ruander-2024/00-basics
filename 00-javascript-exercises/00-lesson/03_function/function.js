// függvények

const sumOfAgesWoman = getSumAges(30, 28, 53);
const sumOfAgesMan = getSumAges(73, 12, 34);


console.log (sumOfAgesMan);
console.log (sumOfAgesWoman);

function getSumAges(age1, age2, age3){
    //függvény body
    return (age1+age2+age3)
}

const Base_url = 'https'
 
function sendDataToServer ( ) {
    function name( ) {
        console.log(Base_url, "send") //ez hibás
    }
}
