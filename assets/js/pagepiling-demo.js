$(function () {


    "use strict";

    /* --------- pagepiling --------- */

    var deleteLog = false;

    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12'],
        loopTop: true,
        loopBottom: true,
        verticalCentered: true,
    });

});