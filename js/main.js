var front = {};

(function (context) {
    "use strict";

    var privateVar;

    var ui = {
        init : function () {
            $('html').removeAttr('class');
            if (!privateVar) {
                privateVar = 0;
            }
        }
    };

    context.ui = ui;

})(front);

$(document).ready(front.ui.init());
//$(window).load(function(){ front.ui.init() });