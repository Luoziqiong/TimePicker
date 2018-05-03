var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
var time = ((hour < 10) ? ('0' + hour) : hour) +
    ':' + ((minute < 10) ? ('0' + minute) : minute) +
    ':' + ((second < 10) ? ('0' + second) : second);
$('.time').attr('value', time);

//绑定输入框点击事件，动态加载时间选择器
$('.time').on('click', function () {
    /**
     * 首先判断是否已经创建了picker
     */
    if ($(".picker").length > 0) {
        console.log('hello');
        $('.picker').css('display', 'block');
    } else {
        var timePicker = document.getElementById('time-picker');
        var picker = document.createElement("div");
        picker.className = "picker";
        picker.innerHTML = "<div class='picker'><table rules=rows><tr><td><span class ='prev-hour'></span></td><td>" +
            "<span class = 'prev-minute'> </span></td><td><span class = 'prev-second'></span></td></tr>" +
            "<tr class='prev-time'><td></td><td></td><td></td></tr>" +
            "<tr class='current-time'><td></td><td></td><td></td></tr>" +
            "<tr class='next-time'><td></td><td></td><td></td></tr>" +
            "<tr><td><span class='next-hour'></span></td>" +
            "<td><span class='next-minute'></span></td><td><span class='next-second'></span></td></tr></table>" +
            "<button class='yes'>确定</button><button class='no'>取消</button></div>"
        timePicker.appendChild(picker);
    }

    showTimePicker();
})
/**
 * 显示数据
 */
function showTimePicker() {
    $('.current-time').find('td:eq(0)').text(formateH(hour));
    $('.current-time').find('td:eq(1)').text(formateM(minute));
    $('.current-time').find('td:eq(2)').text(formateS(second));
    $('.prev-time').find('td:eq(0)').text(formateH(hour - 1));
    $('.prev-time').find('td:eq(1)').text(formateM(minute - 1));
    $('.prev-time').find('td:eq(2)').text(formateS(second - 1));
    $('.next-time').find('td:eq(0)').text(formateH(hour + 1));
    $('.next-time').find('td:eq(1)').text(formateM(minute + 1));
    $('.next-time').find('td:eq(2)').text(formateS(second + 1));
}

function formateH(val) {
    if (val < 10) {
        val = '0' + val;
    }
    if (val == '0-1') {
        val = '';
    }
    if (val == 24) {
        val = '';
    }
    return val;
}

function formateM(val) {
    if (val < 10) {
        val = '0' + val;
    }
    if (val == '0-1') {
        val = '';
    }
    if (val == 60) {
        val = '';
    }
    return val;
}

function formateS(val) {
    if (val < 10) {
        val = '0' + val;
    }
    if (val == '0-1') {
        val = '';
    }
    if (val == 60) {
        val = '';
    }
    return val;
}
/**
 * jQuery 使用on绑定动态生成的元素时，不能直接用该对象操作，而是选择其非动态生成的父节点然后再找到本身才能达到效果。
 */
$('.time-picker').on('click', '.prev-hour', function () {
    console.log('aaa');
    hour -= 1;
    if (hour < 0) {
        hour = 0;
    }
    showTimePicker()
})

$('.time-picker').on('click', '.prev-minute', function () {
    minute -= 1;
    if (minute < 0) {
        minute = 0;
    }
    showTimePicker()
})
$('.time-picker').on('click', '.prev-second', function () {
    second -= 1;
    if (second < 0) {
        second = 0;
    }
    showTimePicker()
})
$('.time-picker').on('click', '.next-hour', function () {
    hour += 1;
    if (hour > 23) {
        hour = 23;
    }
    showTimePicker()
})
$('.time-picker').on('click', '.next-minute', function () {
    minute += 1;
    if (minute > 59) {
        minute = 59;
    }
    showTimePicker()
})
$('.time-picker').on('click', '.next-second', function () {
    second += 1;
    if (second > 59) {
        second = 59;
    }
    showTimePicker();
})
$('.time-picker').on('click', '.yes', function () {
    var currentTime = $('.current-time').find('td:eq(0)').text() +
        ':' + $('.current-time').find('td:eq(1)').text() +
        ':' + $('.current-time').find('td:eq(2)').text();
    console.log(currentTime);
    document.getElementById('time').setAttribute('value', currentTime);
    $('.picker').css('display', 'none');
})
$('.time-picker').on('click', '.no', function () {
    $('.picker').css('display', 'none');
})
