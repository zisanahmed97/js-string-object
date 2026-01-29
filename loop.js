const mobile={
    name:'samsung',
    price:22000,
    ram: '8gb',
    color:'grey',
    camera:'64mp'
}


//for of = array
//for in= object

for(const prop in mobile){
    // console.log(prop);
    // console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key + ': ' + mobile[key]);
    
}
