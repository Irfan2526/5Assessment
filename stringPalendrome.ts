function reversestr(str:string){
    let rev:string[]=[];
    for(let i=str.length;i>=0;i--)
    {
        rev.push(str[i]);
    }
      let revstr:string= rev.join(" ");
          if(str==revstr)
          {
             return true;
           }          
           else
           {
              return false;
           }
}
console.log(reversestr("Jaan"));
