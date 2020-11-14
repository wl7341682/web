var dbfl= 17;//底部浮动，取值范围（1-18）
var rlfl= 11;//右侧浮动，取值范围（1-20）
var sltp = 10;//回到顶部，取值范围（1-22）
if ($("#liuyan").length > 0) {
    jump = "#liuyan";
} else {
    jump = "/other/contact/#liuyan";
}
//dbfl
switch (dbfl){
    case 1:
document.write("<div class=\"dbzw dbzw01\">");
document.write("<div class=\"dbfl dbfl01 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'><img src=\"images\/dbfl01-tb01.png\" alt=\"\">Send Message<\/a>");
document.write("	<a class=\"btn3\" href=\"mailto:customer@sinoftm.com\"><img src=\"images\/dbfl01-tb03.png\" alt=\"\"><\/a>");
document.write("	<span class=\"btn btn2 swt\"><img src=\"images\/dbfl01-tb02.png\" alt=\"\">Inquiry Online<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 2:
document.write("<div class=\"dbzw dbzw02\">");
document.write("<div class=\"dbfl dbfl02 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'>Send Message<\/a>");
document.write("	<span class=\"btn btn2 swt\">Inquiry Online<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 3:
document.write("<div class=\"dbzw dbzw03\">");
document.write("<div class=\"dbfl dbfl03 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'>Send Message<\/a>");
document.write("	<span class=\"btn btn2 swt\">Inquiry Online<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 4:
document.write("<div class=\"dbzw dbzw04\">");
document.write("<div class=\"dbfl dbfl04 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'>Send Message<\/a>");
document.write("	<span class=\"btn btn2 swt\">Free Consultation<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 5:
document.write("<div class=\"dbzw dbzw05\">");
document.write("<div class=\"dbfl dbfl05 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'>leave message<\/a>");
document.write("	<span class=\"btn btn2 swt\">Inquiry Online<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 6:
document.write("<div class=\"dbzw dbzw06\">");
document.write("<div class=\"dbfl dbfl06 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'>leave message<\/a>");
document.write("	<span class=\"btn btn2 swt\">Inquiry Online<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 7:
document.write("<div class=\"dbzw dbzw07\">");
document.write("<div class=\"dbfl dbfl07 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'>Send Message<\/a>");
document.write("	<span class=\"btn btn2 swt\">Inquiry Online<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 8:
document.write("<div class=\"dbzw dbzw08\">");
document.write("<div class=\"dbfl dbfl08 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'><img src=\"images\/dbfl07-tb01.png\" alt=\"\">Send Message<\/a>");
document.write("	<a class=\"btn3\" href=\"mailto:customer@sinoftm.com\"><img src=\"images\/dbfl08-tb01.png\" alt=\"\"><\/a>");
document.write("	<span class=\"btn btn2 swt\"><img src=\"images\/dbfl07-tb02.png\" alt=\"\">Inquiry Online<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 9:
document.write("<div class=\"dbzw dbzw09\">");
document.write("<div class=\"dbfl dbfl09 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'>Send Message<\/a>");
document.write("	<span class=\"btn btn2 swt\">Inquiry Online<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 10:
document.write("<div class=\"dbzw dbzw10\">");
document.write("<div class=\"dbfl dbfl10 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\"mailto:customer@sinoftm.com\">mail<\/a>");
document.write("	<span class=\"btn btn2 swt\">advisory<\/span>");
document.write("	<a class=\"btn btn3\" href=\'" + jump + "\'>Offer<\/a>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 11:
document.write("<div class=\"dbzw dbzw11\">");
document.write("<div class=\"dbfl dbfl11 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\"mailto:customer@sinoftm.com\">mail<\/a>");
document.write("	<span class=\"btn btn2 swt\">advisory<\/span>");
document.write("	<a class=\"btn btn3\" href=\'" + jump + "\'>Offer<\/a>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 12:
document.write("<div class=\"dbzw dbzw12\">");
document.write("<div class=\"dbfl dbfl12 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'>leave message<\/a>");
document.write("	<span class=\"btn btn2 swt\">Inquiry Online<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 13:
document.write("<div class=\"dbzw dbzw13\">");
document.write("<div class=\"dbfl dbfl13 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'>leave message<\/a>");
document.write("	<span class=\"btn btn2 swt\">Inquiry Online<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 14:
document.write("<div class=\"dbzw dbzw14\">");
document.write("<div class=\"dbfl dbfl14 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'>Send Message<\/a>");
document.write("	<span class=\"btn btn2 swt\">Inquiry Online<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 15:
document.write("<div class=\"dbzw dbzw15\">");
document.write("<div class=\"dbfl dbfl15 clearfix\">");
document.write("	<span class=\"btn btn1 swt\">OnlineChat<\/span>");
document.write("	<a class=\"btn btn2\" href=\'" + jump + "\'>Leave Message<\/a>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 16:
document.write("<div class=\"dbzw dbzw16\">");
document.write("<div class=\"dbfl dbfl16 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'>Message<\/a>");
document.write("	<span class=\"btn btn2 swt\">Online Chat<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 17:
document.write("<div class=\"dbzw dbzw17\">");
document.write("<div class=\"dbfl dbfl17 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\"mailto:customer@sinoftm.com\">е-мейл<\/a>");
document.write("	<a class=\"btn btn2\" href=\'" + jump + "\'>Сообщение<\/a>");
document.write("	<span class=\"btn btn3 swt\">Онлайн чат<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
    case 18:
document.write("<div class=\"dbzw dbzw18\">");
document.write("<div class=\"dbfl dbfl18 clearfix\">");
document.write("	<a class=\"btn btn1\" href=\'" + jump + "\'>Message<\/a>");
document.write("	<span class=\"btn btn2 swt\">OnlineChat<\/span>");
document.write("<\/div>");
document.write("<\/div>");
    break;
}
//rlfl
switch (rlfl){
    case 1:
document.write("<div class=\"rlfl rlfl01 swt\">");
document.write("	<p class=\"sty1\">Hello,what can i help you?<\/p>");
document.write("	<p class=\"sty2\"><span class=\"sp1\">7x24<\/span><span class=\"sp2\">Online<\/span><\/p>");
document.write("	<span class=\"sty3\">Get Quote<\/span>");
document.write("<\/div>");
    break;
    case 2:
document.write("<div class=\"rlfl rlfl02 swt\">");
document.write("	<span class=\"sty1\">Get Quote<\/span>");
document.write("	<p class=\"sty2\">7x24 Online<\/p>");
document.write("<\/div>");
    break;
    case 3:
document.write("<div class=\"rlfl rlfl03 swt\">");
document.write("	<p class=\"sty1\">Hello,what can i help you?<\/p>");
document.write("	<p class=\"sty2\"><span class=\"sp1\">7x24<\/span><span class=\"sp2\">Online<\/span><\/p>");
document.write("	<span class=\"sty3\">Get Quote<\/span>");
document.write("<\/div>");
    break;
    case 4:
document.write("<div class=\"rlfl rlfl04 swt\">");
document.write("	<p class=\"sty1\">");
document.write("		<img src=\"images\/rlfl04-pic.jpg\" alt=\"\">");
document.write("		<i class=\"i1\"><\/i>");
document.write("		<i class=\"i2\"><\/i>");
document.write("		<i class=\"i3\"><\/i>");
document.write("	<\/p>");
document.write("	<p class=\"sty2\">7×24h online<\/p>");
document.write("<\/div>");
    break;
    case 5:
document.write("<div class=\"rlfl rlfl05 swt\">");
document.write("	<span class=\"sty1\">Get Quotes<\/span>");
document.write("<\/div>");
    break;
    case 6:
document.write("<div class=\"rlfl rlfl06 swt\">");
document.write("	<p class=\"sty1\"><span>7*24 hours<\/span>Ask for details<\/p>");
document.write("	<span class=\"sty2\">Online Message<\/span>");
document.write("<\/div>");
    break;
    case 7:
document.write("<div class=\"rlfl rlfl07 swt\">");
document.write("	<img src=\"images\/rlfl07-pic.jpg\" alt=\"\">");
document.write("	<span class=\"sty1\">Get quotes<\/span>");
document.write("<\/div>");
    break;
    case 8:
document.write("<div class=\"rlfl rlfl08 swt\">");
document.write("	<p class=\"sty1\">7*24 Online<\/p>");
document.write("	<span class=\"sty1 sty2\">Inquiry Online<\/span>");
document.write("<\/div>");
    break;
    case 9:
document.write("<div class=\"rlfl rlfl09 swt\">");
document.write("	<p class=\"sty1\"><span class=\"sp1\">Inquiry<\/span> <span class=\"sp2\">Online<\/span><\/p>");
document.write("	<p class=\"sty2\">7*24 Online<\/p>");
document.write("<\/div>");
    break;
    case 10:
document.write("<div class=\"rlfl rlfl10\">");
document.write("	<p class=\"sty1\"><span>7*24 hours<\/span>Ask for details<\/p>");
document.write("	<a class=\"sty2\" href=\'" + jump + "\'>Online Message<\/a>");
document.write("	<span class=\"sty3 swt\">Get Quote<\/span>");
document.write("<\/div>");
    break;
    case 11:
document.write("<div class=\"rlfl rlfl11 swt\">");
document.write("	<p class=\"sty1\">7 * 24 часа<\/p>");
document.write("	<span class=\"sty2\">Получить цитаты<\/span>");
document.write("<\/div>");
    break;
    case 12:
document.write("<div class=\"rlfl rlfl12 swt\">");
document.write("	<img src=\"images\/rlfl12-pic.png\" alt=\"\">");
document.write("<\/div>");
    break;
    case 13:
document.write("<div class=\"rlfl rlfl13 swt\">");
document.write("	<p class=\"sty1\"><span>7*24 hours<\/span>Ask for details<\/p>");
document.write("	<span class=\"sty2\">Inquiry Online<\/span>");
document.write("<\/div>");
    break;
    case 14:
document.write("<div class=\"rlfl rlfl14 swt\">");
document.write("	<p class=\"sty1\">7*24 hours<\/p>");
document.write("	<p class=\"sty2\"><span class=\"sp1\">Get<\/span> <span class=\"sp2\">Quotes<\/span><\/p>");
document.write("<\/div>");
    break;
    case 15:
document.write("<div class=\"rlfl rlfl15 swt\">");
document.write("	<img src=\"images\/rlfl15-pic.png\" alt=\"\">");
document.write("<\/div>");
    break;
    case 16:
document.write("<div class=\"rlfl rlfl16 swt\">");
document.write("	<img src=\"images\/rlfl16-pic.png\" alt=\"\">");
document.write("<\/div>");
    break;
    case 17:
document.write("<div class=\"rlfl rlfl17 swt\">");
document.write("	<img src=\"images\/rlfl17-pic.png\" alt=\"\">");
document.write("<\/div>");
    break;
    case 18:
document.write("<div class=\"rlfl rlfl18\">");
document.write("	<div class=\"swt swt-botton1 fixed-box\">");
document.write("		<span class=\"swt-botton\"><\/span>");
document.write("		<p class=\"right-pt1\">Need a Quick Quote?<\/p>");
document.write("	<\/div>");
document.write("	<div class=\"swt-botton2 fixed-box\">");
document.write("		<a href=\"mailto:customer@sinoftm.com\" class=\"right-emil\"><\/a>");
document.write("		<p class=\"right-pt2\">Send us an email?<\/p>");
document.write("	<\/div>");
document.write("	<div class=\"swt-botton3 fixed-box\">");
document.write("		<a href=\"\/contact.html#lyb\" class=\"right-msg\"><\/a>");
document.write("		<p class=\"right-pt3\">Leave us a message<\/p>");
document.write("	<\/div>");
document.write("<\/div>");
    break;
    case 19:
document.write("<div class=\"rlfl rlfl19 swt\">");
document.write("	<div class=\"newswt-top\">");
document.write("		<p>");
document.write("			<img src=\"images\/rlfl19-pic.jpg\" alt=\"\">");
document.write("		<\/p>");
document.write("	<\/div>");
document.write("	<p class=\"rlfl19-conter\">");
document.write("		<img src=\"images\/rlfl19-zs.png\" alt=\"\">");
document.write("		<span><i><\/i><\/span>");
document.write("	<\/p>");
document.write("	<p class=\"rlfl19-bottom\">");
document.write("		<span>7*24 hours");
document.write("			<br>Ask for details<\/span>");
document.write("	<\/p>");
document.write("	<span class=\"new-long\">");
document.write("		Chat Online");
document.write("	<\/span>");
document.write("<\/div>");
    break;
    case 20:
document.write("<div class=\"rlfl rlfl20 swt\">");
document.write("	<img src=\"images\/rlfl20-pic.png\" alt=\"\">");
document.write("<\/div>");
    break;
}
// scroll to top
if ( sltp <= 11 ) {
    document.write("<div class=\'sltp sltpone sltp"+ sltp +"\'><\/div>");
} else {
    document.write("<div class=\'sltp sltptwo sltp"+ sltp +"\'><\/div>");
}
$(function () {
    $(document).scroll(function () {
        var winScrollTop = $(window).scrollTop();
        if (winScrollTop > 300) {
            $(".sltp").addClass("sltp-show");
        } else {
            $(".sltp").removeClass("sltp-show");
        }
    });
    $(".sltp").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 300);
    });
})