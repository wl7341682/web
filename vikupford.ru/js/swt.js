//document.writeln("<div class=\"new-swt\">");
//document.writeln("    <div class=\"newswt-top swt\">");
//document.writeln("        <p>");
//document.writeln("            <img src=\"/images/swt/kf-swt.jpg\" alt=\"\">");
//document.writeln("        </p>");
//document.writeln("    </div>");
//document.writeln("    <div class=\"new-swt-conter swt\">");
//document.writeln("        <img src=\"/images/swt/fix-line.png\" alt=\"\">");
//document.writeln("        <span><i></i></span>");
//document.writeln("    </div>");
//document.writeln("    <div class=\"new-swt-bottom swt\">");
//document.writeln("        <span>");
//document.writeln("            7*24 часы");
//document.writeln("            <br>Спросите подробности");
//document.writeln("        </span>");
//document.writeln("    </div>");
//document.writeln("    <span class=\"new-long swt\">");
//document.writeln("        Онлайн чат");
//document.writeln("    </span>");
//document.writeln("</div>");
//document.writeln("<div class=\"footer_swt\">");
//document.writeln("    <ul class=\"clearfix\">");
//document.writeln("        <li>");
//document.writeln("            <a href=\"/other/contact/\" class=\"onlinemsg\" rel=\"nofollow\"><img src=\"/images/swt/lyb.png\"><span>Сообщение</span></a>");
//document.writeln("        </li>");
//document.writeln("        <li>");
//document.writeln("            <span class=\"swt online footer_swt_li_span\"><img src=\"/images/swt/rgfw.png\"><span>Онлайн чат</span></span>");
//document.writeln("        </li>");
//document.writeln("    </ul>");
//document.writeln("</div>");
//document.writeln("<span id=\"scrollUp\">");
//document.writeln("    <img src=\"/images/swt/top2.png\" alt=\"top\" />");
//document.writeln("</span>");
document.writeln("<script type=\"text/javascript\" src=\"https://live.zoosnet.net/JS/LsJS.aspx?siteid=LEK86479799&amp;float=1&amp;lng=en\"></script>");
document.writeln("<div style=\"display:none\">");
document.writeln("    <script type=\"text/javascript\" src=\"https://s9.cnzz.com/z_stat.php?id=1279427468&web_id=1279427468\"></script>");
document.writeln("</div>");
//menu
//$(function () {
//    $(window).scroll(function (e) {
//        if ($(this).scrollTop() > 46) {
//            $('.header').addClass('active');
//        } else {
//            $('.header').removeClass('active');
//        }
//    })
//});
//top button
$(function () {
    $(window).scroll(function () {
        var _top = $(window).scrollTop();
        if (_top > 300) {
            $('#scrollUp').fadeIn(600);
        } else {
            $('#scrollUp').fadeOut(600);
        }
    });
    $("#scrollUp").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });
    //shangwutong herf
    $('.swt').click(function () {
        //window.open('https://live.zoosnet.net/LR/Chatpre.aspx?id=LEK86479799&lng=en&p=' + encodeURIComponent(window.location.href), 'newwindow', 'width=650,heigh=500');
        window.open('https://live.zoosnet.net/LR/Chatpre.aspx?id=LEK86479799&lng=en&p=' + encodeURIComponent(window.location.href), 'newwindow', 'height=650,width=850,top=' + (screen.height - 650) / 2 + ',left=' + (screen.width - 850) / 2 + ',toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
    });
});


//tanchu swt
var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
var browser = navigator.userAgent.toLowerCase();
var isMobile = "pc";
for (var i = 0; i < mobileAgent.length; i++) {
    if (browser.indexOf(mobileAgent[i]) != -1) {
        isMobile = "m";
        break;
    }
}
// if (isMobile == 'm') {
//     document.writeln('<div style="display: none"><script language="javascript" src="https://live.zoosnet.net/JS/LsJS.aspx?siteid=LEK86479799&float=1&lng=en"></script></div>');
// } else {
//     document.writeln("<div class=\'swt-box\'>");
//     document.writeln("    <div class=\'con\' style=\'width: 600px; height:450px;position: relative\'>");
//     document.writeln("        <div class=\'close\'></div>");
//     document.writeln("        <iframe src=\'\' frameborder=\'0\' class=\'g-swt\'></iframe>");
//     document.writeln("    </div>");
//     document.writeln("</div>");
//     document.writeln("<style>");
//     document.writeln(".swt-box{position:fixed;z-index:99999;display:none;left:50%;top:50%;transform: translate(-50%, -50%);width: 600px;}");
//     document.writeln(".swt-box .close{position:absolute;right:0;top:0;width:80px;height:54px;z-index:1;cursor:pointer}");
//     document.writeln(".g-swt{display:block;width:100%;height:100%}");
//     document.writeln("</style>");
//    var indexSwt = 0;
//    $(function () {
//        showSwt();
//        $(".close").click(function (event) {
//            $(".swt-box").removeAttr('style');
//            indexSwt++;
//            if (indexSwt < 2) {
//                showSwt();
//            }
//            return false;
//        });
//    })
//    function showSwt() {
//        setTimeout(function () {
//            $(".swt-box").attr('style', 'display:block');
//            $('.g-swt').attr('src', 'https://live.zoosnet.net/LR/Chatpre.aspx?id=LEK86479799&lng=en&p=' + encodeURIComponent(window.location.href));
//        }, 5000 * (indexSwt+1))
//    }
//}

var indexSwt = 0;
if (isMobile === 'm') {
    document.writeln('<div style="display: none"><script language="javascript" src="https://live.zoosnet.net/JS/LsJS.aspx?siteid=LEK86479799&float=1&lng=en"></script></div>');
} else {
    document.writeln("<div class=\'swt-box\'>");
    document.writeln("    <div class=\'con\' style=\'width: 500px; height:400px;position: relative\'>");
    document.writeln("        <div class=\'close\'></div>");
    document.writeln("        <iframe src=\'\' frameborder=\'0\' class=\'g-swt\'></iframe>");
    document.writeln("    </div>");
    document.writeln("</div>");
    document.writeln("<style>");
    document.writeln(".swt-box{position:fixed;z-index:99999;display:none;right:0;bottom:0;}");
    document.writeln(".swt-box .close{position:absolute;right:0;top:0;width:80px;height:54px;z-index:1;cursor:pointer}");
    document.writeln(".g-swt{display:block;width:100%;height:100%}");
    document.writeln("</style>");
    $(function () {
        showSwt();
        $(".close").click(function (event) {
            $(".swt-box").removeAttr('style');
            indexSwt++;
            if (indexSwt < 2) {
                showSwt();
            }
            return false;
        });
    });
}
function showSwt() {
    setTimeout(function () {
        $(".swt-box").attr('style', 'display:block');
        $('.g-swt').attr('src', 'https://live.zoosnet.net/LR/Chatpre.aspx?id=LEK86479799&lng=en&p=' + encodeURIComponent(window.location.href));
    }, 5000 * (indexSwt + 1));
}
