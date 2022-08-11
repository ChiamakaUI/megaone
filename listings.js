import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
  remove
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
import {
  getAuth,
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyATee6ISEhMCyY2Q5VO1vWKoKaZp0jIivM",
  authDomain: "mega1cms.firebaseapp.com",
  databaseURL: "https://mega1cms-default-rtdb.firebaseio.com",
  projectId: "mega1cms",
  storageBucket: "mega1cms.appspot.com",
  messagingSenderId: "757048331908",
  appId: "1:757048331908:web:17977e2f5ee860f2693cd1",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function banner() {
  const bannersRef = ref(database, "banners/");
  let dataTb = document.getElementById("dataTb");
  onValue(bannersRef, (snapshot) => {
    const banners = snapshot.val();
    for (const key in banners) {
      const [bannerDB] = banners[key];
      // console.log(bannerDB)
      const { duration, genre, imgUrl, name, synopsis, vidUrl } = bannerDB;
      // console.log(duration);

      let resultContent = `
           <tr>
           <td>${name}</td> 
           <td style="word-wrap: break-word;  overflow: hidden;">${imgUrl}</td>
           <td>${vidUrl}</td>
           <td>${duration}</td>
           <td>${genre}</td>
           <td>${synopsis}</td>      
           <td>
           <button onclick="editBanner('${key}')" class="btn btn-success">Edit Banner</button>
            </td>
           </tr> `;
      dataTb.innerHTML += resultContent;
    }
  });
}

function showing() {
  const showingRef = ref(database, "showing/");
  let dataTb = document.getElementById("showingTb");
  onValue(showingRef, (snapshot) => {
    const showing = snapshot.val();
    // console.log(showing);
    for (const key in showing) {
      const [showingDB] = showing[key];
      // console.log(showingDB);
      const { castImgUrl, imgUrl, name, synopsis } = showingDB;
      // console.log(castImgUrl);
      let resultContent = `
           <tr>
           <td>${name}</td> 
           <td style="word-wrap: break-word;  overflow: hidden;">${imgUrl}</td>
           <td style="word-wrap: break-word;  overflow: hidden;">${castImgUrl[0]}</td> 
           <td style="word-wrap: break-word;  overflow: hidden;">${castImgUrl[1]}</td> 
           <td style="word-wrap: break-word;  overflow: hidden;">${castImgUrl[2]}</td> 
           <td>${synopsis}</td>      
           <td>
           <button onclick="editShowing('${key}')"  class="btn btn-success">Edit Showing</button>
            </td>
           </tr> `;
      dataTb.innerHTML += resultContent;
    }
  });
}

function movies() {
  const movieRef = ref(database, "movies/");
  let dataTb = document.getElementById("movieTb");
  onValue(movieRef, (snapshot) => {
    const movies = snapshot.val();
    // console.log(movies);
    for (const key in movies) {
      const [moviesDB] = movies[key];
      // console.log(moviesDB);
      const { genre, imgUrl, name, synopsis, timeSlots, vidUrl } = moviesDB;
      let resultContent = `
             <tr>
             <td>${name}</td> 
             <td>${imgUrl}</td>
             <td>${vidUrl}</td>
             <td>${timeSlots[0]}</td> 
             <td>${timeSlots[1]}</td> 
             <td>${timeSlots[2]}</td> 
             <td>${genre}</td> 
             <td>${synopsis}</td>      
             <td>
             <button onclick="editMovie('${key}')" class="btn btn-success">Edit Movie</button>
              </td>
              <td>
             <button onclick="deleteMovie('${key}')" class="btn btn-danger">Delete Movie</button>
              </td>
             </tr> `;
      dataTb.innerHTML += resultContent;
    }
  });
}

window.editBanner = (key) => {
  // const db = getDatabase();
  window.present_key = { key };
  console.log(window.present_key);
  const bannersRef = ref(database, "banners/" + key);
  console.log(bannersRef);
  onValue(bannersRef, (snapshot) => {
    const banners = snapshot.val();
    console.log(banners);
    const [banner] = banners;
    console.log(banner);
    const { duration, genre, imgUrl, name, synopsis, vidUrl } = banner;
    document.getElementById("movieName").value = name;
    document.getElementById("movieImage").value = imgUrl;
    document.getElementById("movieVideo").value = vidUrl;
    document.getElementById("movieDuration").value = duration;
    document.getElementById("movieGenre").value = genre;
    document.getElementById("movieSynopsis").value = synopsis;
    //document.getElementById("bmiEdit").value = bmi;
  });
  document.getElementById("updateContainer").style.display = "block";
};

window.editShowing = (key) => {
  window.present_key = { key };
  console.log(window.present_key);
  const showingRef = ref(database, "showing/" + key);
  console.log(showingRef);
  onValue(showingRef, (snapshot) => {
    const showingList = snapshot.val();
    console.log(showingList);
    const [showing] = showingList;
    console.log(showing);
    const { castImgUrl, imgUrl, name, synopsis } = showing;
    document.getElementById("showingMovieName").value = name;
    document.getElementById("showingMovieImage").value = imgUrl;
    document.getElementById("castImageOne").value = castImgUrl[0];
    document.getElementById("castImageTwo").value = castImgUrl[1];
    document.getElementById("castImageThree").value = castImgUrl[2];
    document.getElementById("showingMovieSynopsis").value = synopsis;
  });
  document.getElementById("updateShowingContainer").style.display = "block";
};

window.editMovie = (key) => {
  window.present_key = { key };
  console.log(window.present_key);
  const moviesRef = ref(database, "movies/" + key);
  console.log(moviesRef);
  onValue(moviesRef, (snapshot) => {
    const movies = snapshot.val();
    console.log(movies);
    const [movie] = movies;
    console.log(movie);
    const { genre, imgUrl, name, synopsis, timeSlots, vidUrl } = movie;
    document.getElementById("newMovieName").value = name;
    document.getElementById("newMovieImage").value = imgUrl;
    document.getElementById("newMovieVideo").value = vidUrl;
    document.getElementById("movieTimeSlotOne").value = timeSlots[0];
    document.getElementById("movieTimeSlotTwo").value = timeSlots[1];
    document.getElementById("movieTimeSlotThree").value = timeSlots[2];
    document.getElementById("newMovieGenre").value = genre;
    document.getElementById("newMovieSynopsis").value = synopsis;
  });
  document.getElementById("updateMovieContainer").style.display = "block";
};

window.deleteMovie = (key) =>{
  // window.present_key = { key };
  // console.log(window.present_key);
  remove(ref(database, `movies/${key}/0`));
}

const updBannerBtn = document.getElementById("updBannerBtn");

const updateBanner = (e) => {
  e.preventDefault();
  console.log(window.present_key);
  const { key } = window.present_key;
  let name = document.getElementById("movieName").value;
  let imgUrl = document.getElementById("movieImage").value;
  let vidUrl = document.getElementById("movieVideo").value;
  let duration = document.getElementById("movieDuration").value;
  let genre = document.getElementById("movieGenre").value;
  let synopsis = document.getElementById("movieSynopsis").value;

  const details = {
    name,
    imgUrl,
    vidUrl,
    duration,
    genre,
    synopsis,
  };

  update(ref(database, `banners/${key}/0`), details);
  document.getElementById("updateContainer").style.display = "none";
};
updBannerBtn.addEventListener("click", updateBanner);

const updShowingBtn = document.getElementById("updShowingBtn");

const updateShowing = (e) => {
  e.preventDefault();
  console.log(window.present_key);
  const { key } = window.present_key;
  let name = document.getElementById("showingMovieName").value;
  let imgUrl = document.getElementById("showingMovieImage").value;
  let castOne = document.getElementById("castImageOne").value;
  let castTwo = document.getElementById("castImageTwo").value;
  let castThree = document.getElementById("castImageThree").value;
  let synopsis = document.getElementById("showingMovieSynopsis").value;

  let cast = [castOne, castTwo, castThree];

  const details = {
    name,
    imgUrl,
    castImgUrl: cast,
    synopsis,
  };

  update(ref(database, `showing/${key}/0`), details);
  document.getElementById("updateShowingContainer").style.display = "none";
};

updShowingBtn.addEventListener("click", updateShowing);

const updMovieBtn = document.getElementById("updMovieBtn");
//genre, imgUrl, name, synopsis, timeSlots, vidUrl
const updateMovies = (e) => {
  e.preventDefault();
  console.log(window.present_key);
  const { key } = window.present_key;
  let name = document.getElementById("newMovieName").value;
  let imgUrl = document.getElementById("newMovieImage").value;
  let vidUrl = document.getElementById("newMovieVideo").value;
  let timeOne = document.getElementById("movieTimeSlotOne").value;
  let timeTwo = document.getElementById("movieTimeSlotTwo").value;
  let timeThree = document.getElementById("movieTimeSlotThree").value;
  let genre = document.getElementById("newMovieGenre").value;
  let synopsis = document.getElementById("newMovieSynopsis").value;
  let times = [timeOne, timeTwo, timeThree];
  const details = {
    name,
    imgUrl,
    vidUrl,
    timeSlots: times,
    genre,
    synopsis,
  };

  update(ref(database, `movies/${key}/0`), details);
  document.getElementById("updateMovieContainer").style.display = "none";
};

updMovieBtn.addEventListener("click", updateMovies);

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", closeBannerModal);

function closeBannerModal() {
  document.getElementById("updateContainer").style.display = "none";
}

const closeBtnOne = document.querySelector(".closeOne");

closeBtnOne.addEventListener("click", closeShowingModal);

function closeShowingModal() {
  document.getElementById("updateShowingContainer").style.display = "none";
}

const closeBtnTwo = document.querySelector(".closeTwo");

closeBtnTwo.addEventListener("click", closeMovieModal);

function closeMovieModal() {
  document.getElementById("updateMovieContainer").style.display = "none";
}

const closeBtnThree = document.querySelector(".closeThree");

closeBtnThree.addEventListener("click", closeAddMovieModal);

function closeAddMovieModal() {
  document.getElementById("addMovieContainer").style.display = "none";
}

const addMovieBtn = document.getElementById("add_movie");

addMovieBtn.addEventListener("click", () => {
  document.getElementById("addMovieContainer").style.display = "block";
});


// { genre, imgUrl, name, synopsis, timeSlots, vidUrl }
function addMovie(e){
  e.preventDefault();
  let name = document.getElementById('new_movie_name').value;
  let imgUrl = document.getElementById('new_movie_image').value;
  let vidUrl = document.getElementById('new_movie_video').value; 
  let synopsis = document.getElementById('new_movie_synopsis').value; 
  let genre =  document.getElementById('new_movie_genre').value; 
  let timeOne = document.getElementById('newMovieTimeSlotOne').value;
  let timeTwo = document.getElementById('newMovieTimeSlotTwo').value;
  let timeThree = document.getElementById('newMovieTimeSlotThree').value;
  const moviesArr = [];

  if (
    name == "" ||
    imgUrl == "" ||
    vidUrl == "" ||
    synopsis === "" ||
    genre == "" ||
    timeOne == "" ||
    timeTwo == "" ||
    timeThree == ""
    // synopsis.length === 0
  ) {
    alert("Please, fill all fields to continue");
    return;
  }
  const times = [timeOne, timeTwo,timeThree ]

  const movieDetails ={
    name,
    imgUrl,
    vidUrl,
    synopsis,
    genre,
    timeSlots : times,

  }
  moviesArr.push(movieDetails);
  set(ref(database, "movies/" + Date.now()), moviesArr);
  alert('New movie added')
  document.getElementById("addMovieContainer").style.display = "none";
}

const add_movieBtn = document.getElementById('add_movieBtn')

add_movieBtn.addEventListener('click', addMovie)

const signOutBtn = document.getElementById('sign-out')

signOutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const auth = getAuth();

  signOut(auth)
    .then(() => {
      console.log("signed out");
      window.location.href = "login.html";
    })
    .catch((error) => {
      let error_code = error.code;
      let error_message = error.message;

      console.log(error_message);
      alert(error_code);
    });
});

const signUpBtn = document.getElementById('sign-up')

signUpBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  window.location.href = "signup.html";
})


window.addEventListener("load", () => {
  banner();
  showing();
  movies();
});
