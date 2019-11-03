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

        //아코디언
        $('.aco-toggle').bind("click",function(e) {
          if($(this).parent().parent().next('div').length > 0){
            e.preventDefault();
            var depth = $(this).parent().parent().next('div');
            if (depth.is(':visible')){
              depth.hide()
              $(this).removeClass('actived');
            }else{
              $('.aco-td2').hide();
              depth.show();
              $('.aco-toggle').removeClass('actived');
              $(this).addClass('actived');
            }
          };
        });
      }
    }
  };

  return EMDUI;
}());

$(function () {
  EMDUI.common.init();
});
