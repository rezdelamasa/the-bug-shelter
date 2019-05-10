var galleryButton = document.querySelectorAll(".gallery__button");

var galleryImage = document.querySelectorAll(".gallery__image");

for(var i = 0; i < galleryButton.length; i++) {
		console.log(galleryButton);

	galleryButton[i].addEventListener("click", function() {
		console.log(this.id);
		galleryImage.forEach(function(image) {
			image.classList.add('hidden');
		});
		console.log(this);
		galleryImage[this.id].classList.remove('hidden');
	});
}

// function that will size and resize the dropdown menu in the navbar to be the same width as the navbar list

var submenu = document.querySelector('.navbar__submenu');
console.log(submenu);

var navList = document.querySelector('.navbar__list');

if(submenu) {
	submenu.style.width = navList.offsetWidth + 'px'; 	
}


// code for navbar menu expand functionality
// when the button is clicked, toggle hide class on navbar list element

var navbarButton = document.querySelector('.hamburger');

var navbarList = document.querySelector('.navbar__list');

navbarButton.addEventListener('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	console.log(e.target);
	this.classList.toggle('is-active');
	// navbarList.classList.toggle('show');
	if(navbarList.classList.length == 1) {
		navbarList.classList.toggle('scale-in-ver-top');
	} else {
		navbarList.classList.toggle('scale-in-ver-top');
		navbarList.classList.toggle('scale-out-ver-top');
	}
	// navbarList.classList.toggle('scale-out-ver-top');
	console.log(navbarList);
});

console.log(window.location.pathname.split('/').pop());

// window.onload = function() {
//     document.getElementById('contact-form').addEventListener('submit', function(event) {
//         event.preventDefault();
//         this.contact_number.value = Math.random() * 100000 | 0;
//         emailjs.sendForm('gmail', 'test', this);
//     });
// }

var myform = document.getElementById('contact-form');
// myform.submit(function(event){
// 	event.preventDefault();

//   // Change to your service ID, or keep using the default service
//   var service_id = "gmail";
//   var template_id = "test";
//   var user_id = "user_yZKgIdBWTvdXGn5DybQM2";
//   this.contact_number.value = Math.random() * 100000 | 0;

//   // myform.querySelector("button").innerHTML("Sending...");
//   // emailjs.sendForm(service_id,template_id,myform, user_id)
//   // 	.then(function(){ 
//   //   	alert("Sent!");
//   //      myform.find("button").text("Send");
//   //   }, function(err) {
//   //      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
//   //      myform.find("button").text("Send");
//   //   });
//   // return false;
//   var template_params = {
//    "user_name": "user_name_value",
//    "user_email": "user_email_value",
//    "contact_number": "contact_number_value",
//    "contact": "contact_value",
//    "number": "number_value",
//    "company": "company_value"
// 	}

// 	var service_id = "default_service";
// 	var template_id = "test";
// 	emailjs.send(service_id, template_id, template_params, user_id);
// });

var myform = document.getElementById('contact-form');
myform.addEventListener('submit', function(event){
	event.preventDefault();
	console.log(document.getElementById('user_name').value);

	var template_params = {
	   "user_name": document.getElementById('user_name').value,
	   "user_email": document.getElementById('user_email').value,
	   "contact_number": Math.random() * 100000 | 0,
	   "text": document.getElementById('text').value,
	   "number": document.getElementById('number').value,
	   "company": document.getElementById('company').value
	}

	var service_id = "gmail";
	var template_id = "test";
	var user_id = "user_yZKgIdBWTvdXGn5DybQM2";
	var contactButton = document.querySelector(".contact__button");
	contactButton.innerHTML = "Sending...";
	emailjs.send(service_id, template_id, template_params, user_id)
	  	.then(function(){ 
	    	alert("Sent!");
	       contactButton.innerHTML = "Send";
	    }, function(err) {
	       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
	       contactButton.innerHTML = "Send";
	    });
	    document.getElementById('user_name').value = '';
	    document.getElementById('user_email').value = '';
	    document.getElementById('text').value = '';
	    document.getElementById('number').value = '';
	    document.getElementById('company').value = '';
	    return false;
});
