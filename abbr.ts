function printInitials(name:string){
    if(name.length==0)
    return;
    
    let words=name.split(' ');
    words.forEach(myFunction);
  }
    function myFunction(item){
      document.write((item[0].toUpperCase())+ ". ");

 }
    
    printInitials("Yazdan Ahmad Khan");
