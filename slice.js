const address ='andorkilla';
const part = address.slice(2,6);  // starts from 2 and end 5
// console.log(part);

const sentence = 'I am a goood and hardworking boy';
// eta dile full sectence ta ekta array te boshay dibe
console.log(sentence.split());

//eta dile prottek ta letter ke alada alada kore dibe 
console.log(sentence.split(''));

//eta dile prottek ta word alada alada hoye jabe
console.log(sentence.split(' '));

//a pailei vagh kore dibe
console.log(sentence.split('a'));


const friendStr = 'karim,rahim,mohim,jobbar';

//shob gulo ke ekta upadan banay fele
console.log(friendStr.split(','));

const realFriend = [ 'karim', 'rahim', 'mohim', 'jobbar' ];

console.log(realFriend.join()); // normally join dibe
console.log(realFriend.join('|')); //majhe | eta dibe
console.log(realFriend.join('-')); //majhe - eta dibe

