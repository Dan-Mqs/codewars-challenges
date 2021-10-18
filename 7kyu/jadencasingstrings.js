String.prototype.toJadenCase = function () {
    var words = this.split(" ");
    let capitalizedWords = words.map((word) => {
        let firstLetter = word.charAt(0);
        let capitalLetter = firstLetter.toUpperCase();
        return word.replace(firstLetter, capitalLetter); 
    })
    return capitalizedWords.join(" ");
};