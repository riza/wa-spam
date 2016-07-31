$(document).ready(function() {
	console.log("[*] Wa$pammer loaded.");

	var spam = {
		'count':null,
		'sentence':null
	} 

	var doSpam = function(count,sentence) {
		var campo = document.getElementsByClassName("input")[1];
		contador = 0;
		function dispatch(target, eventType, char) {
			var evt = document.createEvent("TextEvent");    
			evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
			target.focus();
			target.dispatchEvent(evt);
		}
		function spam(){
			if (contador<count){  
				dispatch(campo, "textInput", sentence); 
				var input = document.getElementsByClassName("icon btn-icon icon-send"); 
				input[0].click(); 
				contador++;
				setTimeout(spam,1); 
			}
		}
		spam();
		spam.sentence = null;
		spam.count = null;
	}

	var isConversion = function() {
		if ($(".pane-chat-header").length) {

			swal({   
				title: "do $pam!",  
				text: "Kaç adet spam yapmak istiyorsun?",  
				type: "input", 
				showCancelButton: true, 
				closeOnConfirm: false, 
				animation: "slide-from-top",  
				inputPlaceholder: "100?" }, function(count){   
					if (count === false) return false;   
					if (count === "") {   
						swal.showInputError("Lütfen kaç adet spam yapacağını yaz dostum ;)");   
						return false 
					}      
					spam.count = count;

					swal({   
						title: "do $pam!",  
						text: "Ne yazmak istiyorsun?",  
						type: "input", 
						showCancelButton: true, 
						closeOnConfirm: false, 
						animation: "slide-from-top",  
						inputPlaceholder: "Naber? ehe." }, function(sentence){   
							if (sentence === false) return false;   
							if (sentence === "") {   
								swal.showInputError("Lütfen ne yazmak istediğini gir dostum ;)");   
								return false 
							}      
							spam.sentence = sentence;
							doSpam(spam.count,spam.sentence);
							swal("Good job!", "Başarıyla bombalanıyor. :c", "success")
						});
				});

		} else {
			sweetAlert("Oops...", "Lütfen bir sohbete tıkla.", "error");	
		}
	}

	var generateBtn = setInterval(function() { 
		if($('.menu-horizontal span').length) {
			var menu = $('.menu-horizontal'),
			newButton = '<div class="menu-item"><button class="btn btn-danger do-spam" title="Do $pam!">$PAM</button></div>';
			menu.append(newButton);
			console.log("[*] Button generated.");
			clearInterval(generateBtn);
		}
	},1000);

	$(".do-spam").live("click",function() {
		isConversion();
	});
});