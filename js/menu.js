function ganti1() {
	document.getElementById("img").src="img/home.png";
}

function ganti2(){
	document.getElementById("img").src="img/kikd.png";
}

$(document).ready(function(){
		$('.pilih-menu').click(function(){
			var menu = $(this).attr('id');
			if(menu == "home"){
				$('.halaman').load('menu/home.html');												
			}else if(menu == "kd"){
				$('.halaman').load('menu/kikd.html');											
			}
		});
		// halaman yang di load default pertama kali
		$('.halaman').load('menu/home.html');						

	});