var mySwiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,  // 設置為循環播放
  slidesPerView: 'auto',
  autoplay: {
    delay: 0,  // 自動播放間隔時間（單位：毫秒）
    disableOnInteraction:false,
  },
  lazy: {
    loadPrevNext: true,
  },
  speed: 3500,  // 滑動速度（單位：毫秒）
});


setTimeout(function(){
var mySwiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,  // 設置為循環播放
  slidesPerView: 'auto',
  autoplay: {
    delay: 0,  // 自動播放間隔時間（單位：毫秒）
    disableOnInteraction:false,
  },
  lazy: {
    loadPrevNext: true,
  },
  speed: 3500,  // 滑動速度（單位：毫秒）
});
},1500);


var SwiperComment = new Swiper ('.swiper-comment', {
  direction: 'horizontal', // 
 
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
})      