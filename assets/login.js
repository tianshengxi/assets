function showErrorMsg(form, type, msg) {
    var alert = $('<div class="m-alert m-alert--outline alert alert-' + type + ' alert-dismissible" role="alert">\
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>\
        <span></span>\
    </div>');

    form.find('.alert').remove();
    alert.prependTo(form);
    alert.animateClass('fadeIn animated');
    alert.find('span').html(msg);
}
function login(e) {
    var btn = $(e);
    var form = $(e).closest('form');
    var id = $("#id").val();
    var password = $("#password").val();
    setTimeout(function() {
        form.validate({
            rules: {
                id: {
                    required: true
                },
                password: {
                    required: true
                }
            },
            messages: {
                 id: {
                    required: "IDは必須項目です。"
                 },
                 password: {
                    required: "Passwordは必須項目です。"
                 }
           }
        });

        if (!form.valid()) {
            btn.removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false);
            return;
        }

        var errMsg = commitForm.loginClicked(id, password);

        if (errMsg != "") {
            setTimeout(function() {
                btn.removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false);
                showErrorMsg(form, 'danger', errMsg);
            },500);
        } else {
            $("#id").val('');
            $("#password").val('');
            btn.removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false);
        }
    },500);
}
jQuery(document).ready(function() {
    $("#id").keyup(function(){
        $('.alert').remove();
    });
    $("#password").keyup(function(){
        $('.alert').remove();
    });
});