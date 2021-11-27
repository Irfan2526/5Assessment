function count(string:string, word:string) {
    return string.split(word).length - 1;
 }
 let text="We went down to the stall, then down to the river."; 
 let showData= count(text,"down");
  console.log(showData);  