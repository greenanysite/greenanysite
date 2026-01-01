var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

jQuery(function($) {
  // now you can use jQuery code here with $ shortcut formatting
  // this executes immediately - before the page finishes loading

  /**
   * Newsletter support
   */
  $('#newsletter')
    .attr('novalidate', true)
    .each(function() {
      var $this = $(this),
        $input = $this.find('input[name="ne"]'),
        $checkbox = $this.find('input[name="cookieConsent"]'),
        $noti = $input.prev(),
        $submit = $this.find('input[type="submit"]'),
        showNoti = function(txt) {
          var $msg = $noti.clone();

          $noti.before($msg);
          $noti.remove();

          $msg.text(txt).addClass('vaporize').attr('aria-hidden', 'false');
        },
        success = function() {
          $this
            .fadeOut('slow', function() {
              $this.replaceWith('<p class="appear-nicely dynamic-msg">🙏</p>');
            });
        };

      // Submit handler
      $this.submit(function(e) {
        var serializedData = $this.serialize();

        $noti = $input.prev();

        console.log('INFO: Form submit.');

        e.preventDefault();

        // validate

        $checkbox = $this.find('input[name="cookieConsent"]');
        if (!$checkbox.prop('checked')) {
          showNoti('Please confirm our GDPR terms!');
        } else {

          if (validateEmail($input.val())) {
            var data = {};

            // Prepare ajax data
            data = {
              action: 'realhero_subscribe',
              nonce: ajax.ajax_nonce,
              data: serializedData
            }

            // send ajax request
            $.ajax({
              method: "POST",
              url: ajax.url,
              data: data,
              beforeSend: function() {
                $input.prop('disabled', true);
                $submit.val('...').prop('disabled', true);
              },
              success: function(data) {

                if (data.status == 'success') {
                  success();
                  console.log('INFO: OK!');
                } else {
                  $input.prop('disabled', false);
                  $submit.val('Submit').prop('disabled', false);

                  showNoti(data.msg);
                  console.log('INFO: Bad response.');
                }
              }
            });

            console.log('INFO: Email ok.');
          } else {
            showNoti('Enter valid e-mail address!');
          };
        }
      });
    });

});

}
/*
     FILE ARCHIVED ON 13:37:01 Jun 03, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:40:01 Dec 31, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 3.891
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.06
  esindex: 0.014
  cdx.remote: 25.904
  LoadShardBlock: 120.399 (3)
  PetaboxLoader3.datanode: 318.329 (5)
  load_resource: 304.112 (2)
  PetaboxLoader3.resolve: 92.21 (2)
*/