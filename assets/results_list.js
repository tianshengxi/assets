// Plugin Definition
var ResultsList = function() {

    var jumpPageTo = function(pageIndex) {
        ok.jumpPageTo(pageIndex);
    };

    var generateButtons = function(arr/* = [['type1', '20:00', '20:30', '', 'aaaa'],['type2', '20:00', '20:30', '', 'aaaa']]*/) {
        var html = '';
        if (arr.length < 1) {
            return;
        }
        for (var i = 0; i < arr.length; i++) {
            var lineData = arr[i];
            var numberOrKeyNo = '';
            if (lineData[3]) {
                numberOrKeyNo = lineData[3];
            }
            if (lineData[4]) {
                numberOrKeyNo = lineData[4];
            }

            html += "<div class='m-stack m-stack--ver m-stack--general m-stack--demo record-row' style='border: solid 5px #4afd00;border-radius: 10px;'>" +
                        "<div class='m-stack__item m-stack__item--right m-stack__item--middle' style='width: 20%;'>" +
                            "<label class='m-checkbox m-checkbox--state-brand'>" +
                                "<input type='checkbox'>" +
                                "<span></span>" +
                            "</label>" +
                        "</div>" +
                        "<div class='m-stack__item m-stack__item--center m-stack__item--middle' style='width: 60%;font-size: 1.3rem;font-weight: bold;'>" +
                            lineData[0] +
                        "</div>" +
                        "<div class='m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--fluid'>" +
                            "<div>" +
                                "<div class='m-stack m-stack--ver m-stack--general'>" +
                                    "<div class='m-stack__item m-stack__item--center m-stack__item--middle' style='padding:0;'>" +
                                        "<input type='text' class='form-control m_timepicker_1 m_timepicker' value='" + lineData[1] + "' readonly placeholder='Select time' />" +
                                    "</div>" +
                                    "<div class='m-stack__item m-stack__item--center m-stack__item--middle' style='padding:0;'>" +
                                        "<input type='text' class='form-control m_timepicker_1 m_timepicker' value='" + lineData[2] + "' readonly placeholder='Select time' />" +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                            "<div>" +
                                "<div class='m-stack m-stack--ver m-stack--general'>" +
                                    "<div class='m-stack__item m-stack__item--center m-stack__item--middle' style='padding:0;'>" +
                                        numberOrKeyNo +
                                    "</div>" +
                                "</div>" +
                            "</div>"+
                        "</div>" +
                    "</div>";
        }
        $("#content").html('');
        $("#content").append(html);
    };

    var initTimePicker = function() {
        $(document).on("focus", ".m_timepicker_1", function(){
            $(this).timepicker({
                format: "hh:ii",
    //            defaultTime: '11:45',
//                template: 'modal',
                minuteStep: 1,
                showSeconds: false,
                showMeridian: false,
                snapToStep: true,
            });
        });
    };

    var initDataTimePicker = function() {
//        $(document).on("focus", ".m_datetimepicker_7", function(){
//            $('.m_datetimepicker_7').datetimepicker({
//                defaultTime: '11:45',
//                format: "hh:ii",
//                showMeridian: false,
//                todayHighlight: false,
//                autoclose: true,
//                startView: 1,
//                minView: 0,
//                maxView: 1,
//                forceParse: 0,
//                pickerPosition: 'top-left'
//            });
//        });
    };

    return {
        init: function() {
            initTimePicker();
//            initDataTimePicker();
        },
        generateButtons: function(arr) {
            generateButtons(arr);
        },
        jumpPageTo: function(pageName) {
            jumpPageTo(pageName);
        }
    };
}();

// Plugin Initialization
jQuery(document).ready(function() {
    ResultsList.init();
//    ResultsList.generateButtons();
});