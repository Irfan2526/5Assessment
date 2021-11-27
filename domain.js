function showData() {
    var email = "yazdan6364@gmail.com";
    var domain = email.substring(0, email.lastIndexOf("@"));
    var name = email.substring(email.lastIndexOf("@"));
    console.log(domain);
    console.log(name);
}
showData();
