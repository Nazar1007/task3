const prompt = require("prompt-sync")()
let numm = prompt("Введіть число від 1 до 100: ")

let num1 
let num2 


if (numm.length == 1)
{
    check2(numm)
    console.log (numm,'=', num2)
    return
}
else if (numm.length == 2)
{
    if (numm >= 10 && numm<20)
    {
       check3(numm) 
       console.log (numm, '=', num1 )
    }
    else
    {
    check1 (numm[0])
    check2(numm[1])
        
    console.log(numm, '=', num1, num2)
    }
}
else 
{
    console.log(numm, '=', 'Сто')
}
function check1(n1)
{
    switch(n1)
    {
        case '2': 
            num1 = 'Дватьсять'; 
            break
        case '3': 
            num1 = 'Трицять'; 
            break
        case '4': 
            num1 = 'Сорок'; 
            break
        case '5': 
            num1 = 'П\'ятдесят'; 
            break
        case '6': 
            num1 = 'Шістдесят'; 
            break
        case '7': 
            num1 = 'Сімдесят'; 
            break
        case '8': 
            num1 = 'Вісімдесят'; 
            break
        case '9' : 
            num1 = 'Дев\'яносто'; 
            break
    }
}

function check2(n2)
{
    switch(n2)
    {
        case '0': 
            num2 = 'Нуль'; 
            break
        case '1': 
            num2 = 'Один'; 
            break
        case '2': 
            num2 = 'Два'; 
            break
        case '3': 
            num2 = 'Три'; 
            break
        case '4': 
            num2 = 'Чотири'; 
            break
        case '5':
            num2 = 'П\'ять'; 
            break
        case '6': 
            num2 = 'Шість';
            break
        case '7': 
            num2 = 'Сім'; 
            break
        case '8': 
            num2 = 'Вісім'; 
            break
        case '9': 
            num2 = 'Дев\'ять'; 
            break
    }
}

function check3(n3)
{
    switch(n3)
    {
        case '10': 
            num1 = 'Десять'; 
            break
        case '11': 
            num1 = 'Одинацять'; 
            break
        case '12': 
            num1 = 'Дванацять'; 
            break
        case '13': 
            num1 = 'Тринацять'; 
            break
        case '14': 
            num1 = 'Чотирнацять'; 
            break
        case '15':
            num1 = 'П\'ятнацять'; 
            break
        case '16': 
            num1 = 'Шіснацять';
            break
        case '17': 
            num1 = 'Сімнацять';
            break
        case '18': 
            num1 = 'Вісімнацять'; 
            break
        case '19': 
            num1 = 'Дев\'ятнацять'; 
            break
    }
}
