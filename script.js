const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFun = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
   const length = +lengthEl.value;
   const hasLower = lowercaseEl.checked;
   const hasUpper = uppercaseEl.checked;
   const hasNumber = numberEl.checked;
   const hasSymbol = symbolsEl.checked;
   resultEl.innerText = generatePassword(
    length,hasLower,hasUpper,hasNumber,hasSymbol
   );
});

function generatePassword(length, lower, upper, number, symbol){
    let genpassword = '';
    const checkedCount = lower + upper + number + symbol;
    console.log(checkedCount);
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (item => Object.values(item)[0]);

    if(checkedCount === 0){
        return '';
    }

    for(let i = 0; i < length; i += checkedCount){
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        genpassword += randomFun[funcName]();
      });
    }
    
    const finalPass = genpassword.slice(0, length);
    return finalPass;
}
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//console.log(getRandomLower())