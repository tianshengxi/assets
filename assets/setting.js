// Plugin Definition
var Setting = function() {

    var horizontalOnChange = function() {
        $(".horizontal").click(function(){
            var item = $(this).find("input[name=options]");
            var value = parseInt(item.attr('value'));
            setHorizontalChange(item);
            ok.horizontalOnChange(value);
        });
    };

    var setHorizontalChange = function(event) {
        $("input[name=options]").closest('label').removeClass('active');
        $(event).closest('label').addClass('active');
//        $(event).attr('checked', true);
    };

    var jumpPageTo = function(pageIndex) {
        ok.jumpPageTo(pageIndex);
    };

    return {
        init: function() {
            horizontalOnChange();
        },
        setHorizontalChange: function(event) {
            setHorizontalChange(event);
        },
        jumpPageTo: function(pageName) {
            jumpPageTo(pageName);
        }
    };
}();

// Plugin Initialization
jQuery(document).ready(function() {
    Setting.init();
});