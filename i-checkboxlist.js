module.exports = function (window) {
    "use strict";

    var itagCore =  require('itags.core')(window),
        itagName = 'i-checkboxlist', // <-- define your own itag-name here
        DOCUMENT = window.document,
        ITSA = window.ITSA,
        Itag;

    if (!window.ITAGS[itagName]) {

        Itag = DOCUMENT.defineItag(itagName, {
            attrs: {
            },

            init: function() {
            },

            sync: function() {
            },

            destroy: function() {
            }
        });

        window.ITAGS[itagName] = Itag;
    }

    return window.ITAGS[itagName];
};
