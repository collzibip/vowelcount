
function countVowels(inputString){

const vowelCount = 0;
const vowels = "aeiou";

for (let i = 0; inputString.length; i++){
 if (vowels.includes(inputString[i])) {
      vowelCount++
    }
    return vowelCount;
}
