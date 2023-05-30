$(document).ready(function () {
    // 收合選單
  $('.dropdown').click(function(e){ 
    e.preventDefault();
    $('.dropdown-open').slideToggle();
    // 點擊到這個元素回到父層再到父層內找子元素 .dropdown-open進行 slideToggle 這動作
  });
});