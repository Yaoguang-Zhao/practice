const day = ['bad', 'good', 'lucky'];

const event = ['hangout with your friends', 'confess to your crush', 'buy a lottery ticket']

const encourage = ['Believe in yourself!', 'You can do this!', 'Good luck!']

const randomText = () => {
 return `Today is a ${day[Math.floor(Math.random()*3)]} day! You should ${event[Math.floor(Math.random()*3)]}, ${encourage[Math.floor(Math.random()*3)]}`
}

console.log(randomText())