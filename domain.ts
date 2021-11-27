function showData(){
let email:string="yazdan6364@gmail.com";
let domain:string=email.substring(0,email.lastIndexOf("@"));
let name:string=email.substring(email.lastIndexOf("@"));
console.log(domain);
console.log(name);
}
showData();