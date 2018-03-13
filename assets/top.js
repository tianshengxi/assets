// プラグイン定義
var Classification = function() {
    selectedItem = null;

    var clickButton = function(event) {
        setButton(event);
        ok.validClick($(event).attr('id'));
    };

    var setButton = function(event) {
        if (selectedItem != null) {
//            selectedItem.css('background-color', 'transparent');
//            selectedItem.css('color', selectedItem.css('border-color'));
            selectedItem.css('border', 'none');
        }
//        $(event).css('background-color', $(event).css('border-color'));
//        $(event).parent().find('.btn-outline-primary,.btn-outline-success,.btn-outline-info,.btn-outline-warning,.btn-outline-danger,.btn-outline-brand,.btn-outline-metal,.btn-outline-accent').css('color', '#FFFFFF');
//        $(event).parent().find('.btn-outline-warning,.btn-outline-brand').css('color', '#000000');
        $(event).css('border', 'solid 5px #42fb05')
        selectedItem = $(event);
    }

    var generateButtonsByJson = function(arr) {
        var html = '';
        if (arr.length < 1) {
            return;
        }
        var lineStart = 0;
        var lineSize = 2;
        for (var i = 0; i < arr.length; i++) {
            var lineData = arr[i];
            var lineNum = parseInt(i/3);
            lineStart = lineNum * 3;
            lineEnd = lineStart + lineSize;

            if (i == lineStart) {
                html += "<div class='m-stack m-stack--ver m-stack--general m-stack--demo m-stack--demorow'>";
            }
            var innerContent = "";
            if (lineData.Icon) {
                innerContent = "<i class='" + lineData.Icon + "'></i><p>" + lineData.DetailType + "</p>";
            } else {
                innerContent = "<div class='main-btn-outter'>" +
                                   "<div class='main-btn-inner'>" +
                                       "<p>" +
                                           lineData.DetailType +
                                       "</p>" +
                                   "</div>" +
                               "</div>";
            }
            html += "<div class='m-stack__item m-stack__item--center m-stack__item--middle'>" +
                        "<div class='btn m-btn--air btn-outline-" + lineData.ButtonColor + " m-btn m-btn--custom m-btn--outline-2x active main-btn' onclick='Classification.clickButton(this)' id='" + lineData.Id + "'>" +
                            innerContent +
                        "</div>" +
                    "</div>";


            if (i != lineEnd && lineEnd > i && arr[i+1] == undefined) {
                var left = lineEnd - i;
                for (var j = 0; j < left; j++) {
                    html += "<div class='m-stack__item m-stack__item--center m-stack__item--middle'></div>";
                }
                html += "</div>";
            }

            if (i == lineEnd) {
                html += "</div>";
            }
        }
        $("#content").html('');
        $("#content").append(html);
    };

    var generateButtons = function(arr) {
        var html = '';
        if (arr.length < 1) {
            return;
        }
        var lineStart = 0;
        var lineSize = 2;
        for (var i = 0; i < arr.length; i++) {
            var lineData = arr[i];
            var lineNum = parseInt(i/3);
            lineStart = lineNum * 3;
            lineEnd = lineStart + lineSize;

            if (i == lineStart) {
                html += "<div class='m-stack m-stack--ver m-stack--general m-stack--demo m-stack--demorow'>";
            }

            html += "<div class='m-stack__item m-stack__item--center m-stack__item--middle'>" +
                         "<div class='btn m-btn--air " + lineData[1] + " m-btn m-btn--custom m-btn--outline-2x active main-btn' onclick='Classification.clickButton(this)' id='button" + i + "'>" +
//                             "<table>" +
//                                 "<tr>" +
//                                     "<td>" +
//                                        lineData[0] +
//                                     "</td>" +
//                                 "</tr>" +
//                             "</table>" +
                            "<div class='main-btn-outter'>" +
                                "<div class='main-btn-inner'>" +
                                    "<p>" +
                                        lineData[0] +
                                    "</p>" +
                                "</div>" +
                            "</div>" +
                         "</div>" +
                     "</div>";


            if (i != lineEnd && lineEnd > i && arr[i+1] == undefined) {
                var left = lineEnd - i;
                for (var j = 0; j < left; j++) {
                    html += "<div class='m-stack__item m-stack__item--center m-stack__item--middle'></div>";
                }
                html += "</div>";
            }

            if (i == lineEnd) {
                html += "</div>";
            }
        }
        $("#content").html('');
        $("#content").append(html);
    };

    var jumpPageTo = function(pageIndex) {
        ok.jumpPageTo(pageIndex);
    }

    var handleOnClick = function() {
        $(document).on('click',function(e){
            if (selectedItem != null) {
//                selectedItem.css('background-color', selectedItem.css('border-color'));
//                selectedItem.parent().find('.btn-outline-primary,.btn-outline-success,.btn-outline-info,.btn-outline-danger,.btn-outline-metal,.btn-outline-accent').css('color', '#FFFFFF');
//                selectedItem.parent().find('.btn-outline-warning,.btn-outline-brand').css('color', '#000000');
            }
        });
    };
    return {
        init: function() {
            handleOnClick();
        },
        clickButton: function(event) {
            clickButton(event);
        },
        setButton: function(event) {
            setButton(event);
        },
        generateButtons: function(arr) {
            generateButtons(arr);
        },
        generateButtonsByJson: function(arr) {
            generateButtonsByJson(arr);
        },
        jumpPageTo: function(pageName) {
            jumpPageTo(pageName);
        }
    };
}();

// プラグイン初期化
jQuery(document).ready(function() {
    Classification.init();
});