// challenge 1 Your age in days

function ageInDays(){
    var birthYear = prompt('What year were you born... Good Friend?');
    var ageInDayss = (2018 - birthYear)*365;
    var h1 = document.createElement('h1');
    var textAns =   document.createTextNode('You are ' + ageInDayss + ' days old.');
    h1.setAttribute('id' , 'ageInDays');
    h1.appendChild(textAns);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageInDayss);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

