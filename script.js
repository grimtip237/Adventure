let body = document.querySelector("body"); //тело сайта
let main_player = document.querySelector(".main_player"); //игрок на главной сцене

let main = document.querySelector(".main"); //главная локация
let school = document.querySelector(".school"); //картинка школы
let mastery = document.querySelector(".mastery"); //Мастерская настроения
let arena = document.querySelector(".arena"); //Кровавая арена смерти

let location2 = document.querySelector(".location2"); //локация 2
let location3 = document.querySelector(".location3"); //локация 3
let location5 = document.querySelector(".location4")
let nojniBox = document.querySelector(".nojni"); //ачивка ножны
let swordBox = document.querySelector(".sword"); //ачивка меч\
let sword2 = document.querySelector(".sword2");
let hit = document.querySelector(".hits");

let monster = document.querySelector(".loc4_monster")

let achive = 0
let tries = 0
let hit2 = 20
let HP2 = 100

let enHP = 50

let randomizer = function(arg) {
	let random = Math.random() * arg;
	let round = Math.round(random);
	return round;
}
		
if(tries == 0) {
    school.onclick = function(){
	    main_player.style.top = "32%";
	    main_player.style.left = "70%";

	let loc2_variants_block = document.querySelector(".loc2_variants_block");
	let talk = document.querySelector(".loc2_talk");
	let wrong = document.querySelectorAll(".loc2_variants");
	let write = document.querySelector(".loc2_pravilno");
	let timeText = document.querySelector(".loc2_timeText")
	let time1 = 10
	

	function changeLocation2(){
		main.style.display = "none";
		location2.style.display = "block";
		body.style.background = "green";

		setTimeout(talking, 1000);
		setTimeout(showVar, 2000);
	}

	function talking() {
		talk.style.display = "block";
	}

	function time() {
		time1 = time1 - 1
		timeText.innerHTML = time1
		if(time1==0) {
			alert("Ты не успел")
			main.style.display = "block";
		    location2.style.display = "none";
		    body.style.backgroundImage = "url(bg1.png)"
		    body.style.backgroundSize = "cover"
		    time1 = 100000000
		    tries = tries + 1
		}
	}

	function showVar() {
		loc2_variants_block.style.display = "block";

		let timer = setInterval(time, 1000);
	}

	for(let i=0; i<5; i=i+1) {
		wrong[i].onclick = function() {
			alert("Неправильно")
		}
	}

        write.onclick = function() {
		    alert("Правильно!")
		    main.style.display = "block";
		    location2.style.display = "none";
		    body.style.backgroundImage = "url(bg1.png)"
		    body.style.backgroundSize = "cover"
		    nojniBox.style.display = "block"
		    time1 = 100000000
		    achive = achive + 1
	    }

	    setTimeout(changeLocation2, 1000);
    }
}

mastery.onclick = function() {
	main_player.style.top = "65%";
	main_player.style.left = "40%";

	main.style.display = "none";
	location3.style.display = "block";
	body.style.background = "gray";
	
	sword2.onclick = function() {
		hit2 = hit2 - 1
		hit.innerHTML = hit2
		if(hit2 == 0) {
			alert("Меч готов")
			setTimeout(change,1000)
		}
	}

	let change = function() {
		main.style.display = "block";
		    location3.style.display = "none";
		    body.style.backgroundImage = "url(bg1.png)"
		    body.style.backgroundSize = "cover"
		    swordBox.style.display = "block"
		    achive = achive + 1
	}
}

let lostHP = function() {
		HP2 = HP2 - randomizer(15)
		console.log(HP2)
	}

arena.onclick = function() {
	if (achive <= 1) {
		alert("Не хватает вещей для битвы на арене")
	} else {
		HP2 = 100
		enHP = 50
		main_player.style.top = "30%";
	    main_player.style.left = "30%";

	    main.style.display = "none";
	    body.style.backgroundImage = "url(Loc4/Fight.jpg)";
	    body.style.backgroundSize = "100% 100%";
	    location5.style.display = "block";
	    let getDam = setInterval(lostHP,1500);
	    

	    monster.onclick = function() {
	    	enHP = enHP - 1
	    	console.log(enHP)
	    	if(enHP == 0 ) {
	    		alert("Теперь вы Boss of the gym")
	    		main.style.display = "block";
		        location5.style.display = "none";
		        body.style.backgroundImage = "url(bg1.png)"
		        body.style.backgroundSize = "cover"
		        clearInterval(getDam)
	    	} else if (HP2<=0) {
	    		alert("Попробуй еще раз")
	    		main.style.display = "block";
		        location5.style.display = "none";
		        body.style.backgroundImage = "url(bg1.png)"
		        body.style.backgroundSize = "cover"
		        clearInterval(getDam)
	    	}
	    }
	}
}