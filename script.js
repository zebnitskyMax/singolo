//MENU nav Interactive

const Menu = document.getElementById('menu_li');
const menuClickHandler = function (event) {
      var liLIST = Menu.querySelectorAll('li>a');
      for (var i = 0; i < liLIST.length; i++) {
            liLIST[i].classList.remove('active_li');
      }
      event.target.classList.add('active_li');
}
Menu.addEventListener('click', menuClickHandler);


//Scroll block nav Menu

document.addEventListener('scroll', onScroll);

function onScroll(event) {
      const curPos = window.scrollY;
      const sections = document.querySelectorAll('#main > article > section');
      const links = document.querySelectorAll('#menu_li a');
      /* console.log(curPos); */

      sections.forEach((el) => {
            /* console.log(el.getAttribute('id'));  */
            /*  el.getAttribute('id'); */
            if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos)
                  links.forEach((a) => {
                        a.classList.remove('active_li');
                        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                              a.classList.add('active_li');
                        }
                  })
      })
}


//burger menu
function getGamburger(event){
      event.preventDefault();
      var elem = document.getElementById('gambur');
}

function appearBurgerMenu(event) {
      event.preventDefault();
      var x = document.getElementById('menu_li');
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }


//Slider Phone

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
      showSlides(slideIndex += n);
}

function currentSlide(n) {
      showSlides(slideIndex = n)
}

function showSlides(n) {
      var slides = document.getElementsByClassName('phoneSlaid');
      if (n > slides.length) {
            slideIndex = 1
      }
      if (n < 1) {
            slideIndex = slides.length
      }
      for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "flex";

}


//Click on the phone and appear black window
/* const phoneV = document.getElementById('vertPhone');
const phoneH = document.getElementById('horPhone');

const emptyV = document.getElementById('blackVert');
const emptyH = document.getElementById('blackHor');

function viewBlackWindowV() {
      var isVisible = emptyV.style.display == "block";
      emptyV.style.display = isVisible ? "none" : "block";

}

function viewBlackWindowH() {
      var isVisible = emptyH.style.display == "block";
      emptyH.style.display = isVisible ? "none" : "block";

}
 */
function viewBlackWindow(event,a) {
      event.preventDefault();
      var blackDiv = a.getElementsByClassName('blackWindow')[0];
      var isVisible = blackDiv.style.display == "block";
      blackDiv.style.display = isVisible ? "none" : "block";

}



//Portfolio, interactive Nav and Picture change place 

const porfolioMenu = document.getElementById('portfolio_menu');
const randomizePictures = function () {
      const picture = document.querySelectorAll('#galery_picture_ul>li');
      picture.forEach(function (pic) {
            pic.style.order = Math.ceil(Math.random() * picture.length);
      })
}
const portfolioMenuClickHandler = function (event) {
      const lis = porfolioMenu.querySelectorAll('li>a');
      lis.forEach(function (li) {
            li.classList.remove('active_nav-list-link');
      })
      event.target.classList.add('active_nav-list-link');
      randomizePictures();
}
porfolioMenu.addEventListener('click', portfolioMenuClickHandler);


// Portfolio, Appear border after click on picture

const portfolio = document.getElementById('galery_picture_ul');
const touchElement = function (event) {
      if (event.target == portfolio) {
            return;
      }
      var imgList = portfolio.querySelectorAll('li>img');
      for (var i = 0; i < imgList.length; i++) {
            imgList[i].classList.remove('img_touch');
      }
      event.target.classList.add('img_touch');
}
portfolio.addEventListener('click', touchElement);


//POP-UP

const BUTTON = document.getElementById('btn');
const windowMess = function () {
      var subject = document.getElementById('subje').value.toString();
      var textArea = document.getElementById('Textarea').value.toString();
      if (subject == '') {
            subject = ' No subject';
      }
      document.getElementById('result_subject').innerText = ' ' + subject;
      if (textArea == '') {
            textArea = ' No description';
      }
      document.getElementById('result_describe').innerText = ' ' + textArea;
      document.getElementById('message-block').classList.remove('hidden-message-block');
}
BUTTON.addEventListener('click', windowMess);


const CLOSE_BUTTON = document.getElementById('close-btn');
const closeWindow = function () {
      document.getElementById('result_subject').innerText = '';
      document.getElementById('message-block').classList.add('hidden-message-block');
}
CLOSE_BUTTON.addEventListener('click', closeWindow);


// clear form after close pop-up

function clearForm() {
      document.getElementById('form_block').reset();

}



// Submit load default

function loadDefault() {
      document.getElementById('btn').addEventListener("click", formDefault, false);
}

function formDefault(event) {
      event.preventDefault();
}