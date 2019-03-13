let start = $('#start'),
	finish = $('#finish'),
	car1 = $('#car1'),
	car2 = $('#car2'),
	p1 = $('#car1P'),
	p2 = $('#car2P'),
	count = $('#number'),
	flag = $('.flag'),
	fin = $('#fin'),
	storage1 = $('#storage1'),
	storage2 = $('#storage2');


	$(document).ready(function(){
		let store1 = localStorage.getItem("firstCar"),
			store2 = localStorage.getItem("secondCar");
		finish.prop("disabled",true);
		finish.css({border: '2px solid gray', color: 'gray'});
		count.hide();
		fin.hide();

		if(store1 > store2){
			storage1.text("car one lost with time of "+store1 + "store2s");
			storage2.text("car two won with time of "+store2+" miliseconds");
		}
		else {
			storage1.text("car one won with time of "+store1 + " miliseconds");
			storage2.text("car two lost with time of "+store2+" miliseconds");
		}
	})
	

start.click(function(){
	let car1Time = Math.floor(Math.random()*(3000 - 1500)) +1500,
		car2Time = Math.floor(Math.random()*(3000 - 1500)) +1500;
	localStorage.setItem("firstCar", car1Time);
	localStorage.setItem("secondCar", car2Time);

	let first = localStorage.getItem("firstCar"),
		second = localStorage.getItem('secondCar');

		$(this).prop("disabled",true);
		finish.prop("disabled",false);
		$(this).css({border: '2px solid gray', color: 'gray'});
		finish.css({border: '2px solid gray', color: 'gray'});
	count.show().animate({fontSize: '160px'}, 1000, function(){
		count.text('2').css({fontSize: "45px"}).animate({fontSize: '160px'}, 1000, function(){
			count.text('1').css({fontSize: "45px"}).animate({fontSize: '160px'}, 1000, function(){
				count.hide();
				car1.animate({marginLeft: '1140px'}, car1Time);
				car2.animate({marginLeft: '1140px'}, car2Time);
				finish.css({border: '2px solid white', color: 'white'});
				
					if (car2Time > car1Time) {
						flag.delay(car2Time).animate({
							backgroundColor: 'black',
							opacity: '0.5',
						}, function(){
							fin.show();
						});
						p1.text("car one finished first with time of "+ car1Time +" miliseconds");
						p2.text("car two finished second with time of "+ car2Time +" miliseconds");
						storage1.text("car one won with time of "+first+" miliseconds");
						storage2.text("car two lost with time of "+second+" miliseconds");
					}
					else {
						flag.delay(car1Time).animate({
							backgroundColor: 'black',
							opacity: '0.5',
						}, function(){
							fin.show();
						});
						p1.text("car one finished second with time of "+ car1Time +" miliseconds");
						p2.text("car two finished first with time of "+ car2Time +" miliseconds");
						storage1.text("car one lost with time of "+first+" miliseconds");
						storage2.text("car two won with time of "+second+" miliseconds");
					}
		})
	})
});
	

});

finish.click(function(){
	car1.animate({marginLeft: '0'});
	car2.animate({marginLeft: '0'});
	p1.text("");
	p2.text("");
	start.prop("disabled",false);
	finish.prop("disabled",true);
	$(this).css({border: '2px solid gray', color: 'gray'});
	start.css({border: '2px solid white', color: 'white'});
	count.text('3').css({
		fontSize: "45px",
	});
	flag.animate({opacity: '1'});
	fin.hide();
})
