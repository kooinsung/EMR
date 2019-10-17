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
      }
    }
  };

  return EMDUI;
}());

$(function () {
  EMDUI.common.init();
});
