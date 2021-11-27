function reversestr(str) {
    var rev = [];
    for (var i = str.length; i >= 0; i--) {
        rev.push(str[i]);
    }
    var revstr = rev.join(" ");
    if (str == revstr) {
        return true;
    }
    else {
        return false;
    }
}
console.log(reversestr("Jaan"));
