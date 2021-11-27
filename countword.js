function count(string, word) {
    return string.split(word).length - 1;
}
var text = "We went down to the stall, then down to the river.";
var showData = count(text, "down");
console.log(showData);
