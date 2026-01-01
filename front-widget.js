var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
(function ($) {
    "use strict";
    $(function () {

        $(document).on('submit', 'form#mailjetSubscriptionForm', function (event) {
            event.preventDefault();

            const form = $(this);
            const message = $('.mailjet_widget_form_message');
            $('.mj_form_property').removeClass('has-error');

            jQuery.ajax({
                url : mjWidget.ajax_url,
                type : 'post',
                data : form.serializeArray(),
                success : function(response) {
                    try {
                        var data = JSON.parse(response);

                        if (data.prop_errors) {
                            $.each(data.prop_errors, function() {
                                var propInput = $('.mj_form_property[name="properties['+this+']"]');
                                propInput.addClass('has-error');
                            });
                        }
                    } catch (e) {
                        message.text(response);
                    }
                },
                error : function(err) {
                    message.text('An error occurred.');
                }
            });
        });
    });
}(jQuery));
}
/*
     FILE ARCHIVED ON 13:37:02 Jun 03, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:40:03 Dec 31, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.569
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.053
  esindex: 0.01
  cdx.remote: 19.229
  LoadShardBlock: 83.82 (3)
  PetaboxLoader3.datanode: 97.381 (4)
  load_resource: 92.612
  PetaboxLoader3.resolve: 59.379
*/