// Plugin Definition
var ResultsInput = function() {
    selectedInputItem = null;

    var clickButton = function(event, index) {
        setButton(event);
        ok.validClick(index);
    };

    var setButton = function(event) {
        if (selectedInputItem != null) {
            selectedInputItem.css('background-color', 'transparent');
            selectedInputItem.css('color', selectedInputItem.css('border-color'));
        }
        $(event).css('background-color', $(event).css('border-color'));
        $(event).parent().find('.btn-outline-primary,.btn-outline-success,.btn-outline-info,.btn-outline-warning,.btn-outline-danger,.btn-outline-brand,.btn-outline-metal,.btn-outline-accent').css('color', '#FFFFFF');
        $(event).parent().find('.btn-outline-warning,.btn-outline-brand').css('color', '#000000');
        selectedInputItem = $(event);
    }

    var jumpPageTo = function(pageIndex) {
        ok.jumpPageTo(pageIndex);
    }

    var handleOnClick = function() {
        $(document).on('click',function(e){
            if (selectedInputItem != null) {
                selectedInputItem.css('background-color', selectedInputItem.css('border-color'));
                selectedInputItem.parent().find('.btn-outline-primary,.btn-outline-success,.btn-outline-info,.btn-outline-danger,.btn-outline-metal,.btn-outline-accent').css('color', '#FFFFFF');
                selectedInputItem.parent().find('.btn-outline-warning,.btn-outline-brand').css('color', '#000000');
            }
        });
    };
    return {
        init: function() {
            handleOnClick();
        },
        clickButton: function(event, index) {
            clickButton(event, index);
        },
        setButton: function(event) {
            setButton(event);
        },
        jumpPageTo: function(pageName) {
            jumpPageTo(pageName);
        }
    };
}();

// Plugin Initialization
jQuery(document).ready(function() {
    ResultsInput.init();
});