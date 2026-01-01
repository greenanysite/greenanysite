var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*!
* Bowser - a browser detector
* https://github.com/ded/bowser
* MIT License | (c) Dustin Diaz 2014
*/
!function (e, t) {
    typeof module != "undefined" && module.exports ? module.exports.browser = t() : typeof define == "function" && define.amd ? define(t) : this[e] = t()
}("bowser", function () {
    function t(t) {
        function n(e) {
            var n = t.match(e);
            return n && n.length > 1 && n[1] || ""
        }

        function r(e) {
            var n = t.match(e);
            return n && n.length > 1 && n[2] || ""
        }

        var i = n(/(ipod|iphone|ipad)/i).toLowerCase(), s = /like android/i.test(t), o = !s && /android/i.test(t),
            u = n(/edge\/(\d+(\.\d+)?)/i), a = n(/version\/(\d+(\.\d+)?)/i), f = /tablet/i.test(t),
            l = !f && /[^-]mobi/i.test(t), c;
        /opera|opr/i.test(t) ? c = {
            name: "Opera",
            opera: e,
            version: a || n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
        } : /yabrowser/i.test(t) ? c = {
            name: "Yandex Browser",
            yandexbrowser: e,
            version: a || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
        } : /windows phone/i.test(t) ? (c = {
            name: "Windows Phone",
            windowsphone: e
        }, u ? (c.msedge = e, c.version = u) : (c.msie = e, c.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? c = {
            name: "Internet Explorer",
            msie: e,
            version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
        } : /chrome.+? edge/i.test(t) ? c = {
            name: "Microsoft Edge",
            msedge: e,
            version: u
        } : /chrome|crios|crmo/i.test(t) ? c = {
            name: "Chrome",
            chrome: e,
            version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        } : i ? (c = {name: i == "iphone" ? "iPhone" : i == "ipad" ? "iPad" : "iPod"}, a && (c.version = a)) : /sailfish/i.test(t) ? c = {
            name: "Sailfish",
            sailfish: e,
            version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
        } : /seamonkey\//i.test(t) ? c = {
            name: "SeaMonkey",
            seamonkey: e,
            version: n(/seamonkey\/(\d+(\.\d+)?)/i)
        } : /firefox|iceweasel/i.test(t) ? (c = {
            name: "Firefox",
            firefox: e,
            version: n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
        }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (c.firefoxos = e)) : /silk/i.test(t) ? c = {
            name: "Amazon Silk",
            silk: e,
            version: n(/silk\/(\d+(\.\d+)?)/i)
        } : o ? c = {name: "Android", version: a} : /phantom/i.test(t) ? c = {
            name: "PhantomJS",
            phantom: e,
            version: n(/phantomjs\/(\d+(\.\d+)?)/i)
        } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? c = {
            name: "BlackBerry",
            blackberry: e,
            version: a || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
        } : /(web|hpw)os/i.test(t) ? (c = {
            name: "WebOS",
            webos: e,
            version: a || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
        }, /touchpad\//i.test(t) && (c.touchpad = e)) : /bada/i.test(t) ? c = {
            name: "Bada",
            bada: e,
            version: n(/dolfin\/(\d+(\.\d+)?)/i)
        } : /tizen/i.test(t) ? c = {
            name: "Tizen",
            tizen: e,
            version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || a
        } : /safari/i.test(t) ? c = {name: "Safari", safari: e, version: a} : c = {
            name: n(/^(.*)\/(.*) /),
            version: r(/^(.*)\/(.*) /)
        }, !c.msedge && /(apple)?webkit/i.test(t) ? (c.name = c.name || "Webkit", c.webkit = e, !c.version && a && (c.version = a)) : !c.opera && /gecko\//i.test(t) && (c.name = c.name || "Gecko", c.gecko = e, c.version = c.version || n(/gecko\/(\d+(\.\d+)?)/i)), !c.msedge && (o || c.silk) ? c.android = e : i && (c[i] = e, c.ios = e);
        var h = "";
        c.windowsphone ? h = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i ? (h = n(/os (\d+([_\s]\d+)*) like mac os x/i), h = h.replace(/[_\s]/g, ".")) : o ? h = n(/android[ \/-](\d+(\.\d+)*)/i) : c.webos ? h = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : c.blackberry ? h = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : c.bada ? h = n(/bada\/(\d+(\.\d+)*)/i) : c.tizen && (h = n(/tizen[\/\s](\d+(\.\d+)*)/i)), h && (c.osversion = h);
        var p = h.split(".")[0];
        if (f || i == "ipad" || o && (p == 3 || p == 4 && !l) || c.silk) c.tablet = e; else if (l || i == "iphone" || i == "ipod" || o || c.blackberry || c.webos || c.bada) c.mobile = e;
        return c.msedge || c.msie && c.version >= 10 || c.yandexbrowser && c.version >= 15 || c.chrome && c.version >= 20 || c.firefox && c.version >= 20 || c.safari && c.version >= 6 || c.opera && c.version >= 10 || c.ios && c.osversion && c.osversion.split(".")[0] >= 6 || c.blackberry && c.version >= 10.1 ? c.a = e : c.msie && c.version < 10 || c.chrome && c.version < 20 || c.firefox && c.version < 20 || c.safari && c.version < 6 || c.opera && c.version < 10 || c.ios && c.osversion && c.osversion.split(".")[0] < 6 ? c.c = e : c.x = e, c
    }

    var e = !0, n = t(typeof navigator != "undefined" ? navigator.userAgent : "");
    return n.test = function (e) {
        for (var t = 0; t < e.length; ++t) {
            var r = e[t];
            if (typeof r == "string" && r in n) return !0
        }
        return !1
    }, n._detect = t, n
});

var browserIcon = "";

function getBrowser() {
    var browser = "";
    browserIcon = "";
//Is this a version of Chrome?
    if (bowser.chrome && bowser.webkit) {
        var agent = navigator.userAgent;
        if (agent.includes('Edg') !== false) {
            browser = "edge";
            $("#browserName").html("Edge");
            $("#browserImage").html("<img  style='width: 68px;vertical-align: middle;padding-bottom: 16px;' src='https://web.archive.org/web/20250603133702/https://www.freetree.io/images/edge.png' border='' />");
        } else {
            browser = "chrome";
            $("#browserName").html("Chrome");
            $("#browserImage").html("<img style='width: 68px;vertical-align: middle;padding-bottom: 16px;' src='https://web.archive.org/web/20250603133702/https://www.freetree.io/images/chrome.png' border='' />");
        }
        browerIcon = "\f268";
    }
    //Is this a version of Mozilla?
    if (bowser.firefox && bowser.gecko) {
        browser = "firefox";
        $('.normalBrowser').css('display', 'none');
        $('.notWorkingBrowser').css('display', 'block');
        $("#browserName").html("Firefox");
        $("#browserImage").html("<img  style='width: 68px;vertical-align: middle;padding-bottom: 16px;' src='https://web.archive.org/web/20250603133702/https://www.freetree.io/images/firefox.png' border='' />");
        browerIcon = "\e007";
    }
    //Is this a version of Opera?
    if (bowser.opera) {
        browser = "opera";
        $('.normalBrowser').css('display', 'none');
        $('.notWorkingBrowser').css('display', 'block');
        $("#browserName").html("Opera");
        $("#browserImage").html("<img  style='width: 68px;vertical-align: middle;padding-bottom: 16px;'  src='https://web.archive.org/web/20250603133702/https://www.freetree.io/images/opera.png' border='' />");
        browerIcon = "\f26a";
    }
    //Is this a version of IE?
    if (bowser.msie) {
        browser = "ie";
        $('.normalBrowser').css('display', 'none');
        $('.notWorkingBrowser').css('display', 'block');
        $("#browserName").html("Internet Explorer");
        $("#browserImage").html("<img  style='width: 68px;vertical-align: middle;padding-bottom: 16px;'  src='https://web.archive.org/web/20250603133702/https://www.freetree.io/images/edge.png' border='' />");
        browerIcon = "\f282";
    }
    //Is this a version of Safari?
    if (bowser.safari) {
        browser = "safari";
        $('.normalBrowser').css('display', 'none');
        $('.notWorkingBrowser').css('display', 'block');
        $("#browserName").html("Safari");
        $("#browserImage").html("<img  style='width: 68px;vertical-align: middle;padding-bottom: 16px;'  src='https://web.archive.org/web/20250603133702/https://www.freetree.io/images/safari.png' border='' />");
        browerIcon = "\f267";
    }
    return browser;
};

function positionedPopup() {
    console.log("Open Browser Store");

    if (getCookieRegister('freetree_campaign_source') && getCookieRegister('freetree_campaign_campaign')) {
        var jSfreetree_campaign_source = getCookieRegister('freetree_campaign_source');
        var jSfreetree_campaign_campaign = getCookieRegister('freetree_campaign_campaign');
    }

    var campaignInfo = "";
    if(jSfreetree_campaign_source && jSfreetree_campaign_campaign){
        campaignInfo = "&freetree_campaign_source="+jSfreetree_campaign_source+"&freetree_campaign_campaign="+jSfreetree_campaign_campaign;
    }
    winName = "browserStoreWindow";
    url = 'https://web.archive.org/web/20250603133702/https://www.freetree.io/download/browser-extension.php?browser=' + getBrowser() + "&lang=" + browserLanguage+""+campaignInfo;
    pageWidth = $(window).width();
    pageHeight = window.innerHeight;
    popupWith = pageWidth / 2;
    settings =
        'height=' + pageHeight + ',width=' + popupWith + ',top=0,left=0,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,directories=no,status=no'
    browserStoreWindow = window.open(url, winName, settings)
}

var browserName = '';
var recentBrowserExtensionLink = '';
var campaignInfo = "";

var browserLanguage = 'de';

$(document).ready(function () {
    checkLang();
    browserName = getBrowser();
    if (getCookieRegister('freetree_campaign_source') && getCookieRegister('freetree_campaign_campaign')) {
        var jSfreetree_campaign_source = getCookieRegister('freetree_campaign_source');
        var jSfreetree_campaign_campaign = getCookieRegister('freetree_campaign_campaign');
    }

    if(jSfreetree_campaign_source && jSfreetree_campaign_campaign){
        campaignInfo = "&freetree_campaign_source="+jSfreetree_campaign_source+"&freetree_campaign_campaign="+jSfreetree_campaign_campaign;
    }
    const browserNameBig = browserName.charAt(0).toUpperCase() + browserName.slice(1)
    //Is this a version of Chrome?
    recentBrowserExtensionLink = "https://web.archive.org/web/20250603133702/https://www.freetree.io/download/browser-extension.php?browser=" + browserName + "&lang=" + browserLanguage+""+campaignInfo;
    $("li.installFreetree a")[0].href = recentBrowserExtensionLink;
    //$("a.openExtensionStore")[0].href = recentBrowserExtensionLink;
    $("a.openExtensionStore").on( "click", function( event ) {
        openInNewTab(recentBrowserExtensionLink);
        return false;
    });


    var configuredlang = jQuery('#myLanguage').html();
    if(configuredlang == 'de'){
        $("li.installFreetree a").html("Zu " + browserNameBig + " hinzuf&uuml;gen");
    } else if(configuredlang == 'en'){
        $("li.installFreetree a").html("Add to " + browserNameBig);
    } else if(configuredlang == 'fr'){
        $("li.installFreetree a").html("Ajouter à " + browserNameBig);
    }


    if(configuredlang == 'de'){
        $(".openExtensionStore").html("Zu " + browserNameBig + " hinzuf&uuml;gen");
    } else if(configuredlang == 'en'){
        $(".openExtensionStore").html("Add to " + browserNameBig +" - its free!");
    } else if(configuredlang == 'fr'){
        $(".openExtensionStore").html("Ajouter à " + browserNameBig +"");
    }
/*
    //change browser icon
    $('head').append('<style>.openExtensionStore:before {\n' +
        //'    content: "\\' + browserIcon+ '!important";\n' +
        '    content: "\\\F268";\n' +
        '    font-family: FontAwesome!important;\n' +
        '    font-weight: 400!important;\n' +
        '    color: #FFFFFF;\n' +
        '    line-height: inherit;\n' +
        '    font-size: inherit!important;\n' +
        '    opacity: 1;\n' +
        '    margin-left: -1.3em;\n' +
        '    right: auto;\n' +
        '    display: inline-block;\n' +
        '    font-family: FontAwesome!important;\n' +
        '    font-weight: 400!important;\n' +
        '}</style>')
*/

    //onclick on Sun
    $("#SunCTA_ID").on("click", function (event) {
        openInNewTab(recentBrowserExtensionLink);
    });

});

function checkLang() {
    var lang = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
    if (lang.includes('de')) {
        browserLanguage = 'de';
    } else if (lang.includes('en')) {
        browserLanguage = 'en';
    } else if (lang.includes('fr')) {
        browserLanguage = 'fr';
    }
}

function toTheStore() {
    window.location.replace('https://web.archive.org/web/20250603133702/https://www.freetree.io/download/browser-extension.php?browser=' + getBrowser() + "&lang=" + browserLanguage);
}
function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

//<button onClick="positionedPopup();">Positioned Popup</button>


}
/*
     FILE ARCHIVED ON 13:37:02 Jun 03, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:40:01 Dec 31, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.693
  exclusion.robots: 0.055
  exclusion.robots.policy: 0.042
  esindex: 0.01
  cdx.remote: 11.242
  LoadShardBlock: 115.663 (3)
  PetaboxLoader3.resolve: 204.628 (5)
  PetaboxLoader3.datanode: 103.217 (5)
  load_resource: 254.679 (2)
*/