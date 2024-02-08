const palindromes = function (palindrom) {
    let reversePalidrom = palindrom.split("").reverse().join("");
    return removeCharacters(palindrom) === removeCharacters(reversePalidrom);
};

const removeCharacters = function removeCharactersFromPalindromes (word){
  
    let modifiedWord = word.replace(/[.,\/#!$%\^&\*\s;:{}=\-_`~()]/g,"");
    modifiedWord = modifiedWord.toLowerCase();
     console.log(modifiedWord);
    return modifiedWord;

};
// Do not edit below this line
module.exports = palindromes;
