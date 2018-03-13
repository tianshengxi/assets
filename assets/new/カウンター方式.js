$(function () {
    $('#m_touchspin_3, #m_touchspin_2_3').TouchSpin({
        buttondown_class: 'btn btn-secondary',
        buttonup_class: 'btn btn-secondary',

        min: 0,
        max: 1000000000,
        stepinterval: 50,
        maxboostedstep: 10000000,
        postfix: '分'
    });
})