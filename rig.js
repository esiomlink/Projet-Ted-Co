    const name = ["Ted, your ", "Teddy, I think your ", "Mr Bear, everyone tells that your ", "Ted&Co\'s "];
    const first = ["face ", "nose ", "hair ", "ear ", "left foot "];
    const second = ["smelly ", "boring ", "stupid ", "fat ", "ugly "];
    const third = ["fly !", "rat !", "shoe !", "goose !", "donkey !"];
    
    let  rig = (n, f, s, t) => n[randomize(n.length)]+ f[randomize(f.length)]+ "is just like a " + s[randomize(s.length)]+ t[randomize(t.length) ];

    function randomize(b) {
	//returning a random integer between a and b
	return Math.trunc(Math.random() * (b));
    }

    //console.log(rig(name,first,second,third));
    const rigHTML = document.getElementById('insult');
    for (i=0;i<3;++i){rigHTML.innerHTML += rig(name,first,second,third) + "</br>";}