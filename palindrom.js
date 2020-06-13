const str = 'abdbba';

//Не подходит для эмодзи (т.к. они записываются несколькими символами)
const isPalindrom = (str) => {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrom(str));