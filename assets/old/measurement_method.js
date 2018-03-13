// Plugin Definition
var MeasurementMethod = function() {
    selectedMode = null;

    var clickButton = function(event, index) {
        setButton(event);
        ok.validClick(index);
    };

    var setButton = function(event) {
        if (selectedMode != null) {
            selectedMode.css('background-color', 'transparent');
            selectedMode.css('color', selectedMode.css('border-color'));
        }
        $(event).css('background-color', $(event).css('border-color'));
        $(event).parent().find('.btn-outline-primary,.btn-outline-success,.btn-outline-info,.btn-outline-warning,.btn-outline-danger,.btn-outline-brand,.btn-outline-metal,.btn-outline-accent').css('color', '#FFFFFF');
        $(event).parent().find('.btn-outline-warning,.btn-outline-brand').css('color', '#000000');
        selectedMode = $(event);
    };

    var noticeOnChange = function() {
        $(".notice").click(function(){
            var item = $(this).find("input[name=notice]");
            var value = parseInt(item.attr('value'));
            setNoticeChange(item);
            ok.noticeOnChange(value);
        });
    };

    var setNoticeChange = function(event) {
        $("input[name=notice]").closest('label').removeClass('active');
        $(event).closest('label').addClass('active');
//        $(event).attr('checked', true);
    };

    var pipeOnChange = function() {
        $(".pipe").click(function(){
            var item = $(this).find("input[name=pipe]");
            var value = parseInt(item.attr('value'));
            setPipeChange(item);
            ok.pipeOnChange(value);
        });
    };

    var setPipeChange = function(event) {
        $("input[name=pipe]").closest('label').removeClass('active');
        $(event).closest('label').addClass('active');
//        $(event).attr('checked', true);
    };

    var setTime = function(time) {
        $("#m_touchspin_3").val(time);
    };

    var jumpPageTo = function(pageIndex) {
        ok.jumpPageTo(pageIndex);
    };

    var handleOnClick = function() {
        $(document).on('click',function(e){
            if (selectedMode != null) {
                selectedMode.css('background-color', selectedMode.css('border-color'));
                selectedMode.parent().find('.btn-outline-primary,.btn-outline-success,.btn-outline-info,.btn-outline-danger,.btn-outline-metal,.btn-outline-accent').css('color', '#FFFFFF');
                selectedMode.parent().find('.btn-outline-warning,.btn-outline-brand').css('color', '#000000');
            }
        });
    };

    var handleOnTouchSpin = function() {
        $('#m_touchspin_3, #m_touchspin_2_3').TouchSpin({
            buttondown_class: 'btn btn-secondary',
            buttonup_class: 'btn btn-secondary',

            min: 0,
            max: 1000000000,
            stepinterval: 50,
            maxboostedstep: 10000000,
            postfix: '分'
        });
        $('#m_touchspin_3').change(function(){
            var value = $(this).val();
            if (value > 0) {
                ok.onTimeChange(parseInt(value));
            }
        });
    };
    return {
        init: function() {
            handleOnClick();
            handleOnTouchSpin();
            noticeOnChange();
            pipeOnChange();
        },
        clickButton: function(event, index) {
            clickButton(event, index);
        },
        setButton: function(event) {
            setButton(event);
        },
        jumpPageTo: function(pageName) {
            jumpPageTo(pageName);
        },
//        noticeOnChange: function(event, index) {
//            noticeOnChange(event, index);
//        },
        setNoticeChange: function(event) {
            setNoticeChange(event);
        },
        setTime: function(time) {
            setTime(time);
        },
//        pipeOnChange: function(event, index) {
//            pipeOnChange(event, index);
//        },
        setPipeChange: function(event) {
            setPipeChange(event);
        }
    };
}();

// Plugin Initialization
jQuery(document).ready(function() {
    MeasurementMethod.init();
});