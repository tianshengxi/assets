$(function () {
    // minimum setup
    $('.m_timepicker_1').timepicker({
        defaultTime: '11:45',
        minuteStep: 1,
        showSeconds: false,
        showMeridian: false,
        snapToStep: true
    });

    $('.m_datetimepicker_7').datetimepicker({
        defaultTime: '11:45',
        format: "hh:ii",
        showMeridian: false,
        todayHighlight: false,
        autoclose: true,
        startView: 1,
        minView: 0,
        maxView: 1,
        forceParse: 0,
        pickerPosition: 'top-left'
    });
})