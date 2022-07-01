(function ($) {
	"use strict";
	
	/*----------------------------
    Responsive menu Active
    ------------------------------ */
	$(".mainmenu ul#primary-menu").slicknav({
		allowParentLinks: true,
		prependTo: '.responsive-menu',
	});
	
	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 600) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	// $('.user').hide();
	$('.scrollToTop').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
	// $('.menu-area ul > li > .theme-btn').on('click', function () {
	// 	$('.buy-ticket').show();
	// 	return false;
	// });
	
	$('.login-popup').on('click', function () {
		$('.login-area').show();
		return false;
	});
	$('.signup-popup').on('click', function () {
		$('.signup-area').show();
		return false;
	});
	$('.signup-login').on('click', function () {
		$('.login-area').show();
		$('.signup-area').hide();
		return false;
	});
	$('.login-signup').on('click', function () {
		$('.signup-area').show();
		return false;
	});
	$('.login-box > a').on('click', function () {
		$('.login-area').hide();
		return false;
	});
	$('.login-box > a').on('click', function () {
		$('.signup-area').hide();
		return false;
	});

	if (sessionStorage.getItem('email') === null) {
		// console.log(sessionStorage.getItem('email'))
		$('.auth-area').show();
		$('.user').hide();
		
	} else if (sessionStorage.getItem('email') !== null) {
		$('.auth-area').hide();
		$('.user').text("Hi " + sessionStorage.getItem('email'))
		$('.user').css({"padding-left": "10px", "color": '#fff'})
	}
	
	/*----------------------------
    START - Slider activation
    ------------------------------ */
	// var heroSlider = $('.hero-area-slider');
	// heroSlider.owlCarousel({
	// 	loop:true,
	// 	dots: true,
	// 	autoplay: false,
	// 	autoplayTimeout:4000,
	// 	nav: false,
	// 	items: 1,
	// 	responsive:{
	// 		992:{
	// 			dots: false,
	// 		}
	// 	}
	// });
	// heroSlider.on('changed.owl.carousel', function(property) {
	// 	var current = property.item.index;
	// 	var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('.hero-area-slide').html();
	// 	var nextRating = $(property.target).find(".owl-item").eq(current).next().find('.hero-area-slide').html();
	// 	$('.thumb-prev .hero-area-slide').html(prevRating);
	// 	$('.thumb-next .hero-area-slide').html(nextRating);
	// });
	// $('.thumb-next').on('click', function() {
	// 	heroSlider.trigger('next.owl.carousel', [300]);
	// 	return false;z
	// });
	// $('.thumb-prev').on('click', function() {
	// 	heroSlider.trigger('prev.owl.carousel', [300]);
	// 	return false;
	// });
	var newsSlider = $('.news-slide');
	newsSlider.owlCarousel({
		loop:true,
		dots: true,
		autoplay: false,
		autoplayTimeout:4000,
		nav: false,
		items: 1,
		responsive:{
			992:{
				dots: false,
			}
		}
	});
	newsSlider.on('changed.owl.carousel', function(property) {
		var current = property.item.index;
		var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('.single-news').html();
		var nextRating = $(property.target).find(".owl-item").eq(current).next().find('.single-news').html();
		$('.news-prev .single-news').html(prevRating);
		$('.news-next .single-news').html(nextRating);
	});
	$('.news-next').on('click', function() {
		newsSlider.trigger('next.owl.carousel', [300]);
		return false;
	});
	$('.news-prev').on('click', function() {
		newsSlider.trigger('prev.owl.carousel', [300]);
		return false;
	});
	var videoSlider = $('.video-slider');
	videoSlider.owlCarousel({
		loop:true,
		dots: true,
		autoplay: false,
		autoplayTimeout:4000,
		nav: false,
		responsive:{
			0:{
				items: 1,
				margin: 0
			},
			576:{
				items: 2,
				margin: 30
			},
			768:{
				items: 3,
				margin: 30
			},
			992:{
				items: 4,
				margin: 30
			}
		}
	});
	
	/*----------------------------
	START - videos popup
	------------------------------ */
	$('.popup-youtube').magnificPopup({type:'iframe'});
	//iframe scripts
	$.extend(true, $.magnificPopup.defaults, {  
		iframe: {
			patterns: {
				//youtube videos
				youtube: {
					index: 'youtube.com/', 
					id: 'v=', 
					src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
				}
			}
		}
	});
	
	/*----------------------------
    START - Isotope
    ------------------------------ */
    jQuery(".portfolio-item").isotope();
    $(".portfolio-menu li").on("click", function(){
      $(".portfolio-menu li").removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr('data-filter');
      $(".portfolio-item").isotope({
        filter: selector
      })
    });
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	jQuery(window).load(function(){
		jQuery("#preloader").fadeOut(500);
	});
	

}(jQuery));
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js'

// Add Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js'
import { getFirestore, collection, getDocs, addDoc, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js'
// import { axios } from "https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBzTR9oz8WOj_B4lAEAScsowfjaXs_2IsI",
	authDomain: "megaone-c6490.firebaseapp.com",
	projectId: "megaone-c6490",
	storageBucket: "megaone-c6490.appspot.com",
	messagingSenderId: "346666459656",
	appId: "1:346666459656:web:c7b5697d2e0138061ae7bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/*----------------------------
	START - Booking
	------------------------------ */
	// $('.adult-number').val();
	// console.log($('.adult-number').val())
	// $('.ticket-info > span').text($('.adult-number').val() + 'Adults')
	const adults = document.querySelector('.adult-number');
	const children = document.querySelector('.child-number');
	// const nameofMovies = document.querySelector('.portfolio-content > div');
	const timeOfMovies = document.querySelectorAll('.movie-times');
	const ticketAdultInfo = document.querySelector('.adult');
	const ticketChildrenInfo = document.querySelector('.children');
	const ticketprice = document.querySelector('.ticket-price + span');
	const movieName = document.querySelector('.movie-name + span');
	const movieTime = document.querySelector('.time + span');
	const nameofMovies = document.querySelectorAll('.portfolio-content > h2');
	const ticketForm = document.querySelector('.buy-form');
	const ticketEmail = document.querySelector('.booking-email');
	const ticketName = document.querySelector('.booking-name');
	const subscription = document.querySelector('.subscription');
	const Submail = document.querySelector('.subscription > input');
	const btn = document.querySelector('.subscription > button');
	const pay = document.querySelector('.paypage');
	const blockbuster = document.querySelector('.blockbuster > span');
	// console.log(timeOfMovies);

	const Prices = {
		Adults: {
			Weekdays: [1500, 1000, 2500],
			Weekends: [2000, 2500]
		},
		Children: {
			Weekdays: [1000, 2500],
			Weekends: [1500, 2500],
		}
	}


	timeOfMovies.forEach(timeOfMovie => {
		timeOfMovie.addEventListener('click', (e) => {
			$('.buy-ticket').show();
			movieTime.textContent = new Date().toISOString().split("T")[0] + ',' + timeOfMovie.innerText
			movieName.textContent = timeOfMovie.parentElement.parentElement.firstElementChild.textContent
		})
	})
	// console.log(timeOfMovies);

	$('.buy-ticket .buy-ticket-area > a').on('click', function () {
		$('.buy-ticket').hide();
		adults.value = '';
		children.value = '';
		ticketprice.textContent = '';
		ticketAdultInfo.textContent = '';
		ticketChildrenInfo.textContent = '';
		return false;
	});
	
	nameofMovies.forEach(nameofMovie=>{
		movieName.textContent = nameofMovie.innerHTML
	})

	// movieName.textContent = nameofMovies.innerHTML
	

	adults.addEventListener('input', (e) => {
		var adultNum = e.target.value
		ticketAdultInfo.textContent = adultNum + ' Adult(s)'
		pricing();
		// ticketprice.textContent = '₦ ' + (e.target.value * 600)
	}) 

	children.addEventListener('input', (e) => {
		// var childrenTickets = e.target.value + ' child(ren)'
		ticketChildrenInfo.textContent = e.target.value ? e.target.value + ' child(ren)' : 0 + ' child(ren)';
		pricing();
	})

	

	// pricing();

	const pricing = () => {
		const today = new Date().getDay();
		const isBlockbuster = movieName.textContent;

		if (isBlockbuster.includes('(Blockbuster)') === true) {
			const childrenPrice = (ticketChildrenInfo.textContent).split(" ")[0]
			const adultsPrice = (ticketAdultInfo.textContent).split(" ")[0]
			const childPrice = (childrenPrice * `${Prices.Children.Weekdays[1]}`)
			const adultPrice = (adultsPrice * `${Prices.Adults.Weekdays[2]}`)
			ticketprice.textContent = `₦ ${childPrice + adultPrice}`
		} else if (today === 6 || today === 0){
			const childrenPrice = (ticketChildrenInfo.textContent).split(" ")[0]
			const adultsPrice = (ticketAdultInfo.textContent).split(" ")[0]
			const childPrice = (childrenPrice * `${Prices.Children.Weekends[0]}`)
			const adultPrice = (adultsPrice * `${Prices.Adults.Weekends[0]}`)
			ticketprice.textContent = `₦ ${childPrice + adultPrice}`
		} else if (today !== 6 || today !== 0) {
			const childrenPrice = (ticketChildrenInfo.textContent).split(" ")[0]
			const adultsPrice = (ticketAdultInfo.textContent).split(" ")[0]
			const childPrice = (childrenPrice * `${Prices.Children.Weekdays[0]}`)
			const adultPrice = (adultsPrice * `${Prices.Adults.Weekdays[0]}`)
			ticketprice.textContent = `₦ ${childPrice + adultPrice}`
		} else if (today === 3) {
			const childrenPrice = (ticketChildrenInfo.textContent).split(" ")[0]
			const adultsPrice = (ticketAdultInfo.textContent).split(" ")[0]
			const childPrice = (childrenPrice * `${Prices.Children.Weekdays[0]}`)
			const adultPrice = (adultsPrice * `${Prices.Adults.Weekdays[1]}`)
			ticketprice.textContent = `₦ ${childPrice + adultPrice}`
		} 
		// today.getDay()
		// console.log((ticketAdultInfo.textContent).split(" ")[0], (ticketChildrenInfo.textContent).split(" ")[0], today);
	}

	subscription.addEventListener('submit', async (e) => {
		e.preventDefault();
		const subEmail = Submail.value
		const subscriptionRef = collection(db, `Subscription`); ///get the booking collection
		const snaps = await getDocs(subscriptionRef); //get the documents in the collection
		console.log(snaps);

		if (!snaps.exists) {
			// const { bookingEmail, bookingName, total } = user;
			const createdAt = new Date();

			try {
				console.log('saving...')
				await setDoc(doc(db, 'Subscription', `${subEmail}`),  {
					subEmail,
					createdAt
				});
				btn.innerHTML = `Subscribed!`
				subscription.reset();
			} catch (error) {
				console.log("Error Creating User", error.message);
			}
		} else {
			btn.innerHTML = `Already Subscribed!`
			subscription.reset();
		}
	})

	ticketForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		const bookingEmail = ticketEmail.value
		const bookingName = ticketName.value	
		const total = ticketprice.textContent.split(' ')[1];

		console.log(bookingEmail, bookingName, movieTime.textContent, movieName.textContent, total)

		const bookingRef = collection(db, `Booking`); ///get the booking collection
		const snaps = await getDocs(bookingRef); //get the documents in the collection
		console.log(snaps);

		if (!snaps.exists) {
			// const { bookingEmail, bookingName, total } = user;
			const createdAt = new Date();

			try {
				console.log('saving...')
				await setDoc(doc(db, 'Booking', `${bookingEmail}`),  {
					bookingEmail,
					bookingName,
					total,
					createdAt
				});
			} catch (error) {
				console.log("Error Creating User", error.message);
			}
		}
		
		// payment();
		function makeid(length) {
			var result = [];
			var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			var charactersLength = characters.length;
			for (var i = 0; i < length; i++) {
					result.push(characters.charAt(Math.floor(Math.random() *
							charactersLength)));
			}
			return result.join('');
		}
		try {
			FlutterwaveCheckout({
      public_key: "FLWPUBK-20fe99282ac76da7647150b9f93debd5-X", //Megaonepub FLWPUBK-20fe99282ac76da7647150b9f93debd5-X,  FLWPUBK_TEST-de69ccdc798aeb8adde6c0001a9dd3de-X
      tx_ref: makeid(9),
      amount: total,
      currency: "NGN",
      // country: "NGN",
      payment_options: "card",
      // redirect_url: // specified redirect URL
      //   "http://127.0.0.1:5502/payment.html",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: bookingEmail,
        // phone_number: "08102909304",
        name: bookingName,
      },
      callback: function (data) {
        console.log(data);
				payEmail();
      },
      onclose: function() {
        // close modal
      },
      "customizations":{
				"title":"MegaOne Cinema Booking",
				"description": `Booking for ${movieName.textContent} at this ${movieTime.textContent}`,
				"logo":"https://am4pap001files.storage.live.com/y4m0qZJCNoozOjIgMSUt2Rp9fe_SNDb2rBkKx9P_jQXE_HrP2Bbx5wWw83YAlA16Tr-3RTKDvRyY9sfNok5BDeP8rTHYpA2CqmZ9hQ5YwAhv1a1XUiVSQW2ZVeI7VLc_F5x4Mhz7xGlsr5xRxdmcFBWGb2MSok0gyDKqk-i1cqrpUxEzTwThWzGO7Hu98Tzpx8Q?width=150&height=77&cropmode=none"
			}
    });
		} catch (error) {
			console.log('Transaction could not be completed', error)
			alert('Transaction could not be completed, please check your internet connection')
		}
    
	})

	// pay.onload = function(){ alert('loading...') }
	// pay.addEventListener("click", function() {
	// 	console.log('loading....')
	// 	alert('loading....')
	// })

	function payEmail() {
		const bookingEmail = ticketEmail.value
		const bookingName = ticketName.value	
		const total = ticketprice.textContent.split(' ')[1];
		console.log('sending');
		const options = {
			method: "POST",
			url: "https://email-sender1.p.rapidapi.com/",
			params: {
			txt_msg: `This is to confirm your booking for ${movieName.textContent}, for ${movieTime.textContent} time slot, below are your booking details`,
			to: `${bookingEmail}`,
			from: "MegaOneCinemas",
			subject: "Booking Confirmation",
			bcc: "megaonecinemas@trostechnologies.com",
			reply_to: "info@megaonecinemas.com",
			html_msg: `<html><body><b>Dear ${bookingName}</b>, <br/> <br/>This is to confirm your booking for ${movieName.textContent}, for ${movieTime.textContent} time slot, below are your booking details - <ul><li>Movie Name - ${movieName.textContent}</li> <li>Email Address - ${bookingEmail} </li> <li>Total Amount - ₦ ${total}</li><li>Tickets booked for- ${ticketAdultInfo.textContent} and ${ticketChildrenInfo.textContent ? ticketChildrenInfo.textContent : ''}</li></ul> <br/>  See you soon <br/> <br/><b>MegaOne cinema</b></body></html>`,
			cc: "info@megaonecinemas.com",
		},
		headers: {
			"content-type": "application/json",
			"x-rapidapi-host": "email-sender1.p.rapidapi.com",
			"x-rapidapi-key": "041695ddc2msh03ecff701bdb863p15a99ejsnfcf96e24fbff",
		},
		data: { key1: "value", key2: "value" },
	};

 	axios
   .request(options)
   .then(function (response) {
     console.log(response.data);
   })
   .catch(function (error) {
     console.error(error);
   });
	}

//get user inputs
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const form = document.querySelector('.form');
const loginform = document.querySelector('.login-form');
const authArea = document.querySelector('.auth-area');

const rmCheck = document.getElementById("rememberMe"),
		emailInput = document.querySelector(".emails"), passwordInput = document.querySelector(".passwords");


	function lsRememberMe() {
		if (rmCheck.checked && emailInput.value !== "") {
			emailInput.value = localStorage.username;
			rmCheck.value = localStorage.checkbox;
		} else {
			localStorage.username = "";
			localStorage.checkbox = "";
		}
	}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const emailValue = email.value;
	const passwordValue = password.value;
	console.log(emailValue, passwordValue)

	//sign up
	const auth = getAuth();
	createUserWithEmailAndPassword(auth, emailValue, passwordValue)
		.then((userCredential) => {
			// Signed in 
			// console.log(emailValue)
			const user = userCredential.user;
			$('.signup-area').hide();
			sessionStorage.setItem('email', emailValue)
			location.reload()
			// authArea.innerText = `${emailValue}`
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
})

loginform.addEventListener('submit', (e) => {
	e.preventDefault();
	// if (localStorage.checkbox && localStorage.username !== "") {
	// 	rmCheck.setAttribute("checked", "checked");
	// 	emailInput.value = localStorage.username;
	// } else {
	// 	return
	// }


	// lsRememberMe();

	const emailValue = emailInput.value;
	const passwordValue = passwordInput.value;
	console.log(emailValue, passwordValue)

	//sign in
	const auth = getAuth();
	signInWithEmailAndPassword(auth, emailValue, passwordValue)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			console.log(emailValue);
			$('.login-area').hide();
			sessionStorage.setItem('email', emailValue)
			location.reload()
			// authArea.innerText = `${sessionStorage.getItem('email')}`
			// authArea.style.paddingLeft = '10px';
			// authArea.style.color = '#f88835';
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
})