// JavaScript Document

var input = prompt('Write a word');    

var isPalindrome = str => {
    var strLen = str.length;
		
    if (strLen < 2) return true;

    if (str[0] === str[strLen - 1]) {
        return isPalindrome( str.slice(1, strLen - 1) );
    }

    return false;
};

document.write(isPalindrome(input));

