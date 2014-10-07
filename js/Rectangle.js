function drawRectangleSelection(paper) {

    var div_paper = $('#canvasBody');
    var div_paper1 = document.getElementById('canvasBody');
    var bool = true;
    'use strict';
    var rect;
    var startX = 0, startY = 0;
    var offset = findPos(div_paper1);


    // Get the absolute position of a particular object on the page
    function findPos(obj) {
        var curleft = 0, curtop = 0;
        if (obj.offsetParent) {
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return [curleft, curtop];
        } else {
            return false;
        }
    }

    // Get the current position of the mouse, relative to the page
    function getCoords(event) {
        event = event || window.event;
        if (event.pageX || event.pageY) {
            return { x: event.pageX, y: event.pageY };
        }
        return {
            x: event.clientX + document.body.scrollLeft - document.body.clientLeft,
            y: event.clientY + document.body.scrollTop - document.body.clientTop
        };
    }

    div_paper.mousedown(function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        console.log("down");
        var cursor = $(event.target).css('cursor');
        if (cursor == "auto") {
            var cursor = $('body').css('cursor');
            var mouseCoords = getCoords(event);
            startX = mouseCoords.x - offset[0];
            startY = mouseCoords.y - offset[1];
            rect = paper.rect(startX, startY, 0, 0).attr({ fill: "gray", "fill-opacity": 0.3 }).data("rectSelect", true);
            rect.node.id = 10;
        }
        div_paper.mousemove(function (event) {
            if (rect) {
                var mousePos = getCoords(event);
                var currentX = mousePos.x - offset[0];
                var currentY = mousePos.y - offset[1];
                var width = currentX - startX;
                var height = currentY - startY;
                bool = false;

                if (width < 0) {
                    rect.attr({ 'x': currentX, 'width': width * -1 });
                } else {
                    rect.attr({ 'x': startX, 'width': width });
                }
                if (height < 0) {
                    rect.attr({ 'y': currentY, 'height': height * -1 });
                } else {
                    rect.attr({ 'y': startY, 'height': height });
                }
            }

        });

        div_paper.mouseup(function (event) {
            ctrlSelect.clear();
            if (rect) {
                var bounds = rect.getBBox();
                $("#10").remove();
                rect.remove();
                paper.forEach(function (ele) {
                    if (bounds != undefined)
                        if (Raphael.isBBoxIntersect(bounds, ele.getBBox()) && !ele.data("rectSelect")) {
                            ele.attr({ "stroke-dasharray": "-", "stroke-width": 2, stroke: "black", cursor: 'move' }).animate({ "fill-opacity": 0 }).data("enable", true);
                            ctrlSelect.push(ele);
                        }
                });
                ctrlKeyup(paper);
            }
        });
    });
};