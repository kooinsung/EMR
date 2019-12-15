EMDUI = (function () {
  'use strict';

  var EMDUI = {
    /**
     * 공통 UI
     */
    common: {
      init: function () {
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

        $('.gnb-depth-item').each(function(i){
          $(this).mouseenter(function(){
            $('.gnb li').eq(i).addClass('actived');
            $('.gnb-depth').show();
          }).mouseleave(function(){
            $('.gnb li').eq(i).removeClass('actived');
          });
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

        $.datepicker.regional['ko'] = {
          closeText: '닫기',
          prevText: '이전달',
          nextText: '다음달',
          currentText: '오늘',
          monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
          monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
          dayNames: ['일', '월', '화', '수', '목', '금', '토'],
          dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
          dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
          weekHeader: 'Wk',
          dateFormat: 'yy-mm-dd',
          firstDay: 0,
          showMonthAfterYear: true,
          yearSuffix: '년'
        };
        $.datepicker.setDefaults($.datepicker.regional['ko']);

        $( ".datepicker > input" ).datepicker({
          showOn: "button",
          buttonImage: "../assets/images/ico_cal.png",
          buttonImageOnly: true,
          beforeShow: function (input, inst) {
            // setTimeout(function(){
            //   inst.dpDiv.outerWidth($(input).outerWidth());
            // },0);
          },
        });
        $(".datepicker input").click(function () {
          $(this).parent().find('input').datepicker("show");
        });

        var $visualCarousel = $(".visual .visual-carousel");
        $visualCarousel.owlCarousel({
          navigation : false,
          pagination: true,
          singleItem:true,
          autoPlay:true,
          slideSpeed:500,
          rewindSpeed:500,
        })

        var $bannerCarousel = $(".banners .banner-carousel");
        $bannerCarousel.owlCarousel({
          navigation : false,
          pagination: false,
          singleItem:true,
          autoPlay:true,
          slideSpeed:500,
          rewindSpeed:500,
        })
        $(".banners .next").click(function(){
          $bannerCarousel.trigger('owl.next');
        });
        $(".banners .prev").click(function(){
          $bannerCarousel.trigger('owl.prev');
        });
      }
    }
  };

  return EMDUI;
}());

$(function () {
  EMDUI.common.init();
});
