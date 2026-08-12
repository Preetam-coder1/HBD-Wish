let datetxt = "16th August 2026";

let datatxtletter = "Hello Ji, Kaise hou aap? Today, I wish you all the best, lots of health, and lots of joy.And always stay awesome as you are. Stay strong and safe, will always be there for you. I hope we will celebrate many more birthdays like this together. Take onkgula Valobasha. Happy birthday to you.💕";

let titleLetter = "Dear Friend";

let charArrDate = datetxt.split('');
let charArrDateLetter = datatxtletter.split('');
let charArrTitle = titleLetter.split('');

let currentIndex = 0;
let currentIndexLetter = 0;
let currentIndexTitle = 0;

let date__of__birth = document.querySelector(".date__of__birth span");
let text__letter = document.querySelector(".text__letter p");


setTimeout(function(){

    timeDatetxt = setInterval(function(){

        if(currentIndex < charArrDate.length){

            date__of__birth.textContent += charArrDate[currentIndex];
            currentIndex++;

        }
        else{

            let i = document.createElement("i");

            i.className = "fa-solid fa-star";

            document.querySelector(".date__of__birth").prepend(i);

            document.querySelector(".date__of__birth").appendChild(i.cloneNode(true));

            clearInterval(timeDatetxt);
        }

    },100);

},12000);



var intervalContent;
var intervalTitle;


// CLICK HERE BUTTON
$("#btn__letter").on("click", function(){

    // Start music
    const music = document.getElementById("birthdayMusic");

    if (music.paused) {
        music.play();
    }

    $(".box__letter").slideDown();


    setTimeout(function(){

        $(".letter__border").slideDown();

    },1000);


    // =========================
    // LETTER TITLE
    // =========================

    setTimeout(function(){

        intervalTitle = setInterval(function(){

            if(currentIndexTitle < charArrTitle.length){

                document.querySelector(".title__letter").textContent += charArrTitle[currentIndexTitle];

                let i = document.createElement("i");

                i.className = "fa-solid fa-heart";

                document.querySelector(".title__letter").appendChild(i);

                currentIndexTitle++;

            }
            else{

                clearInterval(intervalTitle);

            }

        },100);

    },2000);


    // =========================
    // GIF ANIMATION
    // =========================

    setTimeout(function(){

        document.querySelector("#heart__letter").classList.add("animationOp");

        
        document.querySelector("#mewmew").classList.add("animationOp");

    },2800);


    // =========================
    // HEART ANIMATION
    // =========================

    setTimeout(function(){

        document.querySelectorAll(".heart").forEach((item)=>{

            item.classList.add("animation");

        });

    },3500);


    // =========================
    // LETTER TEXT
    // =========================

    setTimeout(function(){

        intervalContent = setInterval(function(){

            if(currentIndexLetter < charArrDateLetter.length){

                text__letter.textContent += charArrDateLetter[currentIndexLetter];

                currentIndexLetter++;

            }
            else{

                clearInterval(intervalContent);

            }

        },50);

    },6000);

});


// =========================
// CLOSE LETTER
// =========================

$(".close").on("click", function(){

    clearInterval(intervalContent);

    document.querySelector(".title__letter").textContent = "";

    text__letter.textContent = "";

    currentIndexLetter = 0;

    currentIndexTitle = 0;


    document.querySelector("#heart__letter").classList.remove("animationOp");

    document.querySelector(".love__img").classList.remove("animationOp");

    document.querySelector("#mewmew").classList.remove("animationOp");


    document.querySelectorAll(".heart").forEach((item)=>{

        item.classList.remove("animation");

    });


    $(".box__letter").slideUp();

    $(".letter__border").slideUp();

});
const galleryButton = document.getElementById("galleryButton");
const galleryPage = document.getElementById("galleryPage");
const backHome = document.getElementById("backHome");

galleryButton.addEventListener("click", function () {

    document.getElementById("wrapper").style.display = "none";

    galleryPage.style.display = "block";

});


backHome.addEventListener("click", function () {

    galleryPage.style.display = "none";

    document.getElementById("wrapper").style.display = "block";

});