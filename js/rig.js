const first = [
    "Ted, your services are the worst on the entire planet ! ",
    "I hoped to get an incredible service, I wasn't disappointed (it's a little bit ironic...) ! ",
    "What the Hell happened ? They are so irresponsible !! ",
    "That was the worst experience of my life (except the birth of my children)... ",
    "Why aren't these bears in jail ? This is madness ! "
];
const second = [
    "I paid for a premium package, called \"Fantastic Party\" but I'm still waiting for my event. ",
    "My wife and I were not satisfied at all, these weirdos are crazy ! "
    
];
const third = [
    "I swear, this is the first and the last time I'll call them ! ",
    "They took your greenback and they'll never go back... "
];
const fourth = [
    "Don't spend any money for these bears, they'll steal your money !!",
    "Seriously, guys... Run away from these dumbs bears."
];
let rig = (a, b, c, d) => a[randomize(a.length)] + b[randomize(b.length)] + c[randomize(c.length)] + d[randomize(d.length)];
function randomize(b) {
    return Math.trunc(Math.random() * (b));
}
//console.log(rig(first,second,third,fourth));
