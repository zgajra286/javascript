
// let fullname = rajeshj;
let fullname = prompt("Enter fullname: ");

// let newname = fullname.toLowerCase();
// let nospace = newname.trim();
if (fullname === null){
let cleansed = fullname 
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "")
    
let username = `@${cleansed}${cleansed.length}`;

console.log(username);}
else{
    (alert("Enter a value"));
}

