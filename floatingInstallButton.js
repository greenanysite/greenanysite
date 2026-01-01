var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
jQuery(document).ready(function ($) { // When jQuery is ready

    function check_from_top_de() { // Create our function
        if (scroll >= scrollDeep) { // If it is equal or more than 300 - you can change this to what you want
            //$('#SunCTA_ID').addClass('makeSunBigger');
            //$('#SunCTA_ID').css('display', 'block');
            $('#SunCTA_ID').css('opacity', '1');

            //$('#SunCTA_ID .et_pb_text_inner').addClass('showSunText');
            $('#SunCTA_ID .et_pb_text_inner').removeClass('hideSunText');
            check_viewportOfCTA();
            /*
            $( '#SunCTA_ID' ).mouseover(function() {
                       $( '#SunCTA_ID' ).css('transform', 'scale(2.0) !important;')
                  });
                  */
        } else {
            $('#SunCTA_ID').css('opacity', '0');
            $('#SunCTA_ID').addClass('smallSun');
            //$('#SunCTA_ID').removeClass('showSun');
            $('#SunCTA_ID').removeClass('hideSun');
            //$('#SunCTA_ID').removeClass('makeSunBigger');
            $('#SunCTA_ID .et_pb_text_inner').addClass('hideSunText');
            // $('#SunCTA_ID .et_pb_text_inner').removeClass('showSunText');
        }
    }

    check_from_top_de(); // On load, run the function
    var scrollDeep = "";
    var scroll = "";

    $(window).scroll(function () { // When scroll - run function
        scrollDeep = 600;
        scroll = $(window).scrollTop(); // Check scroll distance
        check_from_top_de();
    });


    function check_viewportOfCTA() {
        if (document.querySelector('#installButtonBottom') != undefined) {

            var bigCTASection = document.querySelector('#installButtonBottom');
            if (isInViewport(bigCTASection)) {
                $('#SunCTA_ID').css('opacity', '0');
            } else {
                if (scroll >= scrollDeep) {
                    $('#SunCTA_ID').css('opacity', '1');
                }
            }
        }
    }
});

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
   // console.log(bounding);
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

}
/*
     FILE ARCHIVED ON 13:37:02 Jun 03, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:40:06 Dec 31, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2.329
  exclusion.robots: 0.044
  exclusion.robots.policy: 0.033
  esindex: 0.01
  cdx.remote: 5.151
  LoadShardBlock: 61.2 (3)
  PetaboxLoader3.datanode: 414.097 (5)
  load_resource: 466.081 (2)
  PetaboxLoader3.resolve: 48.758
*/