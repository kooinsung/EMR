EMDUI = (function () {
  'use strict';

  var EMDUI = {
    /**
     * 공통 UI
     */
    common: {
      init: function () {
        $('.owl-carousel').owlCarousel({
          margin:10,
          loop:true,
          autoWidth:true,
        })

        //TO-DO : 스크립트 개선
        $('.gnb li').each(function(i){
          $(this).mouseenter(function(){
            $(this).addClass('actived');
            $('.gnb-depth').show();
          }).mouseleave(function(){
            $(this).removeClass('actived');
          });
        });

        $('.gnb-area').mouseleave(function(){
          $('.gnb-depth').hide();
        });
      }
    }
  };

  return EMDUI;
}());

$(function () {
  EMDUI.common.init();
});
