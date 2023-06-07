$(document).ready(function () {
  // 收合選單
  $('.dropdown').click(function (e) {
    e.preventDefault();
    //burger-menu的交換icon部分與滿版的部分
    // .dropdown-open進行 toggleClass('menuShow') 加入這個class的動作
    $('.dropdown-open').toggleClass('menuShow');
    $('.menu-btn').toggleClass('btn-open');
    $('.menu-btn').toggleClass('btn-close');
  });

  //AiTool由新到舊的部分
  // 開起選單
  $('.dropdown-btn').click(function (e) {
    $('.dropdown-menu').toggleClass('show');
  });

  // 切換按鈕文字
  $('.new-to-old').click(function (e) {
    e.preventDefault();
    $('.dropdown-menu').toggleClass('show');
    $('.dropdown-btnText').text("由新到舊");
  });

  $('.old-to-new').click(function (e) {
    e.preventDefault();
    $('.dropdown-menu').toggleClass('show');
    $('.dropdown-btnText').text("由舊到新");
  });





});