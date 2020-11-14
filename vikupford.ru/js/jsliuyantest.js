
function doSubmits() {
    var stremail = document.getElementById("email");
    if (stremail.value == "") {
        stremail.style.backgroundColor = "#bbc0c6";
        alert('Запишите правильный адрес электронной почты');
        stremail.focus();
        return false;
    } else {
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        isok = reg.test(stremail.value);
        if (!isok) {
            alert("Неправильный формат электронного письма, введите его еще раз！");
            stremail.focus();
            return false;
        }
    }

    var smessage = document.getElementById("message");
    if (smessage.value == "") {
        smessage.style.backgroundColor = "#bbc0c6";
        alert('Пожалуйста, заполните сообщение');
        smessage.focus();
        return false;
    }
    var phone = document.getElementById("telephone");
    if (phone.value !== "") {
        var regs = /^[0-9]*$/;
        isok = regs.test(phone.value);
        leng = phone.value.length;
        if (!isok || leng > 20) {
            alert("Пожалуйста, введите правильный номер мобильного телефона или WhatsApp;");
            phone.focus();
            return false;
        }
    }
    // 1.客户端浏览器时间
    var myDate = new Date();
    var datenow = myDate.toLocaleDateString() + "-" + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
    //2. 随即字符串
    var str = '';
    var length = 10;
    for (; str.length < length; str += Math.random().toString(36).substr(2));
    str = str.substr(0, length);

    //3.移动版
    var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito",
        "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
    var browser = navigator.userAgent.toLowerCase();
    var isMobile = "pc";
    for (var i = 0; i < mobileAgent.length; i++) {
        if (browser.indexOf(mobileAgent[i]) != -1) {
            isMobile = "m";
            break;
        }
    }

    window.document.Inquiry.site_feedback.value = str;
    window.document.Inquiry.from_way.value = "|" + isMobile + "|";
    window.document.Inquiry.refer.value = window.location.href + "?data=" + datenow + "&rnd=" + str + "&sys=" +
        isMobile;
    window.document.Inquiry.action = window.document.Inquiry.action + "?data=" + datenow + "&rnd=" + str + "&sys=" +
        isMobile;
    document.getElementById("button_sub").disabled = true;
    window.document.Inquiry.submit();

}