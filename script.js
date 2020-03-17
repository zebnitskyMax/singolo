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

// Portfolio, Appear border after click on picture

const portfolio = document.getElementById('galery_picture');
const touchElement = function (event) {
      if (event.target == portfolio) {
            return;
      }
      var imgList = portfolio.getElementsByTagName('img');
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


//Portfolio, interactive Nav and Picture change place 

const porfolioMenu = document.getElementById('portfolio_menu');
const randomizePictures = function () {
      const picture = document.querySelectorAll('#galery_picture>img');
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