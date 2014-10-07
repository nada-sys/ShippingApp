function LoadRectangle(paper, Transform, show) {

    var c = paper.rect(10, 10, 50, 50).data("id", "rect").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadTriangle(paper, Transform, show) {
    var c = paper.path("M0 30L30 30L15 0Z").data("id", "triangle").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadEllipse(paper, Transform, show) {

    var c = paper.ellipse(15, 15, 15, 15).data("id", "ellipse").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadHexagon(paper, Transform, show) {

    var c = paper.path("M7 0L22 0L30 15L22 30L7 30L0 15Z").data("id", "hexagon").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadPentagon(paper, Transform, show) {

    var c = paper.path("M15 0L30 15L22 30L7 30L0 15Z").data("id", "pentagon").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadLine(paper, Transform, show) {

    var c = paper.path("M0 0L30 30").attr({ fill: 'Black', "stroke-width": 2, cursor: "pointer" }).data("id", "line").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadText(paper, Transform, txt, show) {

    var c = paper.text(50, 100, txt).data("id", "text").attr({ fill: 'Black' }).data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadImage(paper, src, Transform, show) {

    var c = paper.image(src, 10, 10, 80, 80).data("id", "image").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadPrinter(paper, Transform, show) {

    var c = paper.path("m 829.07397,545.88417 66.2743,0 m -66.2743,6.62743 66.2743,0 m -66.2743,6.62743 66.2743,0 m -66.2743,6.62743 66.2743,0 m -76.87817,-123.01188 87.48208,0 0,44.54943 -87.48208,0 z m -14.58037,64.69049 115.31729,0 m -100.65916,29.97348 87.32641,0 0,39.46447 -87.32641,0 z m -19.23846,-49.85577 125.80347,0 c 5.54,0 10,4.46 10,10 l 0,38.32138 c 0,5.54 -4.46,10 -10,10 l -125.80347,0 c -5.54,0 -10,-4.46 -10,-10 l 0,-38.32138 c 0,-5.54 4.46,-10 10,-10 z").data("id", "printer").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadChair(paper, Transform, show) {

    var c = paper.path("m 282.27575,393.29111 10.71455,-0.0515 5.4126,1.67898 5.61255,-0.0268 5.30071,-1.7304 2.42681,-3.76003 -0.1809,-5.45115 -2.72055,-5.09936 -2.93054,-3.73433 -4.13764,-1.6834 -6.68964,-1.67239 -6.63237,0.0318 -9.50612,-1.99868 -10.96971,0.0526 -17.27905,2.12719 -13.46418,1.76911 -7.98169,5.48991 -1.21958,1.71042 -1.16198,3.41342 1.45569,5.44508 2.9306,3.7343 5.41365,1.67899 9.38203,-1.74999 10.71444,-0.0514 0.3615,10.90377 -10.71446,0.0515 -5.30082,1.72844 -5.24324,3.43314 -2.62561,5.46541 -1.09525,5.45767 0.47466,14.3107 -8.16342,0.039 -0.4739,-14.31073 -2.73175,-5.43932 -2.86165,-1.69073 -4.13858,-1.68303 -2.49461,1.71488 -2.74982,1.71761 -1.21861,1.70929 -1.15169,3.75452 0.41833,12.60588 1.31034,39.52328 1.40015,3.74215 1.33165,1.69824 2.91916,3.39362 2.5511,-0.0121 4.08209,-0.0198 2.69232,-3.42053 2.37024,-5.46487 -0.54172,-16.35402 8.16343,-0.039 0.24842,7.49605 1.44544,5.1054 1.5236,7.48861 8.51356,10.52352 10.95179,7.10354 16.19498,3.67117 17.47768,-3.83275 11.7523,-7.21244 6.53827,-10.59572 2.13301,-12.6185 -0.24841,-7.49606 8.16251,-0.0394 0.54236,16.354 1.40026,3.74219 1.58669,1.69698 2.6639,3.39483 4.08228,-0.0197 2.80524,-0.0136 2.43799,-3.41931 2.74966,-1.71778 -0.12434,-3.74829 -1.31031,-39.52334 -0.41783,-12.6059 -0.12434,-3.74841 -2.86265,-1.68965 -2.60744,-1.69196 -2.86169,-1.68915 -4.02582,1.72219 -2.49447,1.71644 -1.47373,1.71045 -1.15171,3.75456 0.47429,14.31071 -8.16254,0.0394 -0.47427,-14.3107 -1.45679,-5.44544 -2.7316,-5.43969 -5.72552,-3.38053 -5.41269,-1.67706 -10.7145,0.0515 -0.3615,-10.90375 -5e-5,0 z m -49.65355,41.47294 0.71157,21.46449 -0.71157,-21.46449 z m -7.45186,21.50367 -0.71155,-21.46448 0.71155,21.46448 z m 92.1449,-21.91 0.71155,21.46448 -0.71155,-21.46448 z m -7.45083,21.50362 -0.71157,-21.46446 0.71157,21.46446 z m -53.09889,-62.44784 25.51023,-0.12239 -25.51023,0.12239 z m 25.87173,10.7814 -25.51023,0.1224 25.51023,-0.1224 z").data("id", "chair").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadFemale(paper, Transform, show) {

    var c = paper.path("m 86.8416,270.35 0.013,113.385 c 0,20.4 -30.565,20.4 -30.565,0 l -0.013,-113.385 -40.504,0 43.339,-150.343 -6.812,0 -25.523,85.881 C 20.7016,224.62 -5.01541,216.925 0.868576,196.867 L 29.2066,103.564 c 3.038,-10.64 16.494,-29.503 39.786,-29.503 l 21.477,0 0,0 23.1154,0 c 23.084,0 36.601,19.022 40.094,29.503 l 28.35,93.212 c 5.67,20.047 -19.845,28.35 -25.92,8.809 l -25.514,-85.578 -7.376,0 43.804,150.343 -40.681,0 0,113.535 c 0,20.25 -30.4374,20.149 -30.4374,0 l 0,-113.535 -9.063,0 z m 4.792,-237.936 m 0,32.414 c 17.9024,0 32.4154,-14.511 32.4154,-32.414 C 124.049,14.514 109.536,0 91.6336,0 c -17.899,0 -32.413,14.514 -32.413,32.414 0,17.903 14.514,32.414 32.413,32.414 z").data("id", "female").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadMale(paper, Transform, show) {

    var c = paper.path("m 357.134,32.414 m 0,32.414 c 17.901,0 32.414,-14.511 32.414,-32.414 C 389.548,14.514 375.035,0 357.134,0 c -17.9,0 -32.414,14.514 -32.414,32.414 0,17.903 14.514,32.414 32.414,32.414 z m -34.187,9.112 c -22.808,0 -41.151,18.867 -41.151,42.4 l 0,100.3 c 0,19.5 28.136,19.5 28.136,0 l 0,-91.714 6.661,0 0,254.127 c 0,26.072 37.468,25.305 37.468,0 l 0,-148.776 6.453,0 0,148.776 c 0,25.305 37.673,26.072 37.673,0 l 0,-254.127 6.505,0 0,91.714 c 0,19.651 27.99,19.65 27.939,0 l 0,-99.7 c 0,-21.7 -16.614,-42.955 -41.656,-42.955 L 322.947,73.94 z").data("id", "male").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadDoor(paper, Transform, show) {

    var c = paper.path("m -527.06695,24.247633 c 0,23.720332 -22.12929,43.044536 -49.68388,43.386003 l -0.72567,-43.386003 z m 0.53218,-2.997651 0.0804,2.25148 -51.75559,0.143891 -0.0804,-2.25148 z").data("id", "door").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadWindow(paper, Transform, show) {

    var c = paper.path("m -139.89778,293.81778 -12.23569,0 0,272.71793 11.51595,0 m -30.72636,-272.71793 12.23569,0 0,272.71793 -11.51594,0 m -1.30122,-285.44953 32.0276,0 0,298.18112 -32.0276,0 z").data("id", "window").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadWall(paper, Transform, show) {

    var c = paper.path("m 576.46014,172.14444 8.84622,0 0,513.51221 -8.84622,0 z").attr({ fill: 'gray' }).data("id", "wall").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}
function LoadHorzontalWall(paper, Transform, show) {

    var c = paper.path("m 160,268 620,0 0,20 -620,0 z").attr({ fill: 'gray' }).data("id", "hwall").data('enable', false);
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}

function LoadCornerTable(paper, Transform, show) {

    var c = paper.path("m 80,212.36218 80,0 0,160 160,0 0,80 -240,0 z").data("id", "CornerTable").data('enable', false)
    c.transform(Transform);
    if (show)
        ClickOptionsLoad(c, paper);
    else
        GenerateOptionsLoad(c, paper);
}
function GenerateOptionsLoad(c, paper) {
    c.attr({ "stroke-width": 2 });
}

function ClickOptionsLoad(c, paper) {
    if (c.type != "text")
        if (c.data("id") != "line")
            if (c.data("id") != "wall" && c.data("id") != "hwall")
                c.attr({ fill: 'gray', stroke: 'black', "stroke-dasharray": "none", "stroke-width": 2, "cursor": "move" }).animate({ "fill-opacity": 0 });
    c.node.oncontextmenu = function () { return false; }
    ApplyTransformHide(c, paper);
    $("#lblSaved").text("Not Saved!").css("color", "red");
    c.click(function (event) {
        event.stopPropagation();
        if (!event.ctrlKey) {
            if (!c.data("enable")) {
                ApplyCtrlTranslates(ctrlSelect, paper);
                HideHandles(paper, c);
                if (c.freeTransform.handles.bbox == null) {
                    removeUndoDrag();
                    var ftShow = ApplyTransformShow(c, paper);
                }
                else {
                    removeUndoDrag(ftHide);
                    var ftHide = ApplyTransformHide(c, paper);

                }
            }
        }
        else if (event.ctrlKey) {
            if (c.data("enable")) {
                ctrlSelect.forEach(function (set) {
                    if (c == set) {
                        c.attr({ "stroke-dasharray": "none" }).data("enable", false);
                        ctrlExclude(c, paper);
                    }
                });
            }
            else {
                if (ftCtrlSelect != null && ftCtrlSelect != "") {
                    var dragX1 = ftCtrlSelect.attrs.translate.x;
                    var dragY1 = ftCtrlSelect.attrs.translate.y;
                    if (parseInt(dragX1) != 0 && parseInt(dragY1) != 0)
                        c.data("ctrlNew", true);
                    else
                        c.data("ctrlNew", false);
                }
                c.attr({ "stroke-dasharray": "-" }).data("enable", true);
                ctrlSelect.push(c);
            }
        }
    });

    c.mouseup(function (e) {
        var ele = c;
        if (e.which == 3) {
            $("#shapeIndex").dialog({
                autoOpen: true,
                draggable: false,
                modal: false,
                resizable: false,
                closeOnEscape: false,
                width: 150,
                height: 100,
                dialogClass: 'noTitleStuff',
                dialogClass: 'Silver',
                position: [e.pageX, e.pageY],
                buttons: {
                    "Send to Back": function () {
                        c.toBack();
                        $(this).dialog("close");
                    },
                    "Bring to Front": function () {
                        c.toFront();
                        $(this).dialog("close");
                    },
                    "Duplicate": function () {
                        if (ctrlSelect.length != 0) {
                            $.each(ctrlSelect, function (key, value) {
                                if (ctrlSelect[key].type != 'set')
                                    var clonectrlSelect = paper[ctrlSelect[key].type]().attr(ctrlSelect[key].attr()).data("id", ctrlSelect[key].data("id")).data('enable', false).translate(15, 15);
                                ClickOptionsLoad(clonectrlSelect, paper);
                            });
                        }
                        else {
                            var clone = paper[c.type]().attr(c.attr()).data("id", c.data("id")).data('enable', false).translate(5, 5);
                            ClickOptionsLoad(clone, paper);
                        }
                        $(this).dialog("close");
                    },
                },
            }).dialog("widget")
                .find(".ui-dialog-titlebar").css({
                    "float": "right",
                    border: 0,
                    padding: 0
                })
                .find(".ui-dialog-title").css({
                    display: "none"
                }).end()
                .find(".ui-dialog-titlebar-close").css({
                    top: 0,
                    right: 0,
                    margin: 0,
                });
        }
    });
}

function removeUndoDrag() {
    var undoFirst = undo[undo.length - 1],
     undoSecond = undo[undo.length - 2],
     ft1 = undoFirst.Ft,
     ft2 = "";
    if (undoSecond != undefined)
        ft2 = undoSecond.Ft;
    if (ft1 == ft2)
        undo.pop();
}

function ApplyTransformHide(c, paper) {
    var options = {
        attrs: { stroke: 'none', fill: 'none', "fill-opacity": "none", cursor: "none" },
        draw: [null, null],
        distance: 1.6,
        drag: [null, 'self'],
        keepRatio: false,
        rotate: [null, null, null],
        scale: [null, null, null, null, null],
        size: 4,
    };
    var ft = paper.freeTransform(c, {}, function (ft, eve) {
        if (eve == 'drag start')
            if (ftCtrlSelect == "" || ftCtrlSelect == null)
                if (c.type == 'set')
                    undo.push({ Event: eve.toString(), Element: c, EleType: c.type, Type: 'single', Transform: c[0].transform(), Ft: JSON.stringify(ft.attrs) });
                else
                    undo.push({ Event: eve.toString(), Element: c, EleType: c.type, Type: 'single', Ft: JSON.stringify(ft.attrs) });
            else {
                var undoCtrl = [];
                $.each(ctrlSelect, function (key, value) {
                    if (ctrlSelect[key].type == 'set')
                        undoCtrl.push({ Element: ctrlSelect[key], Transform: ctrlSelect[key][0].transform(), dragX: 0, dragY: 0 });
                    else
                        undoCtrl.push({ Element: ctrlSelect[key], Transform: ctrlSelect[key].transform(), dragX: 0, dragY: 0 });
                });
                undo.push({ Event: eve.toString(), Element: undoCtrl.slice(0), Type: 'multiple', Ft: JSON.stringify(ft.attrs) });
            }
        else if (eve == 'apply')
            $("#lblSaved").text("Not Saved!").css("color", "red");

    }).setOpts(options, function (ft, eve) {
        if (eve == 'drag start')
            if (ftCtrlSelect == "" || ftCtrlSelect == null)
                if (c.type == 'set')
                    undo.push({ Event: eve.toString(), Element: c, EleType: c.type, Type: 'single', Transform: c[0].transform(), Ft: JSON.stringify(ft.attrs) });
                else
                    undo.push({ Event: eve.toString(), Element: c, EleType: c.type, Type: 'single', Ft: JSON.stringify(ft.attrs) });
            else {
                var undoCtrl = [];
                $.each(ctrlSelect, function (key, value) {
                    if (ctrlSelect[key].type == 'set')
                        undoCtrl.push({ Element: ctrlSelect[key], Transform: ctrlSelect[key][0].transform(), dragX: 0, dragY: 0 });
                    else
                        undoCtrl.push({ Element: ctrlSelect[key], Transform: ctrlSelect[key].transform(), dragX: 0, dragY: 0 });
                });
                undo.push({ Event: eve.toString(), Element: undoCtrl.slice(0), Type: 'multiple', Ft: JSON.stringify(ft.attrs) });
            }
        else if (eve == 'apply')
            $("#lblSaved").text("Not Saved!").css("color", "red");
    });
    return ft;
}

function ApplyTransformShow(c, paper) {
    var options = {
        attrs: { stroke: 'gray', fill: 'gray', "fill-opacity": 0.5, cursor: "ne-resize" },
        draw: ['bbox', null],
        distance: 1.6,
        drag: [null, 'self'],
        keepRatio: false,
        rotate: ['axisX', 'axisY', null],
        scale: [null, null, 'bboxCorners', 'bboxSides', null],
        size: 4,
    };
    var ft = paper.freeTransform(c, {}, function (ft, eve) {
        if (eve == 'drag start' || eve == 'scale start' || eve == 'rotate start') {
            if (ftCtrlSelect == "" || ftCtrlSelect == null)
                undo.push({ Event: eve.toString(), Element: c, EleType: c.type, Type: 'single', Ft: JSON.stringify(ft.attrs) });
            else if (eve == 'drag start')
                undo.push({ Event: eve.toString(), Element: ctrlSelect, Type: 'multiple', Ft: JSON.stringify(ft.attrs) });
        }
        else if (eve == 'apply')
            $("#lblSaved").text("Not Saved!").css("color", "red");
    }).setOpts(options, function (ft, eve) {
        if (eve == 'drag start' || eve == 'scale start' || eve == 'rotate start') {
            if (ftCtrlSelect == "" || ftCtrlSelect == null)
                undo.push({ Event: eve.toString(), Element: c, EleType: c.type, Type: 'single', Ft: JSON.stringify(ft.attrs) });
            else if (eve == 'drag start')
                undo.push({ Event: eve.toString(), Element: ctrlSelect, Type: 'multiple', Ft: JSON.stringify(ft.attrs) });
        }
        else if (eve == 'apply')
            $("#lblSaved").text("Not Saved!").css("color", "red");
    });
    return ft;
}

function LoadWindowsPC(paper, ShapeId, ShapeName, LocationId, LocationName, Transform, show) {
    var st = paper.set();
    st.push(
        paper.rect(3, 2, 26, 18).attr({ title: ShapeName, stroke: 'none' }).data("id", "windowsPCFake").data('enable', false),
        paper.path("M23,30h-2c-1.104,0-2-0.896-2-2v-3h-6v3c0,1.104-0.896,2-2,2H9c-0.553,0-1,0.448-1,1c0,0.553,0.447,1,1,1h14c0.553,0,1-0.447,1-1C24,30.448,23.553,30,23,30zM30.25,0H1.75C0.784,0,0,0.84,0,1.875v19.25C0,22.16,0.784,23,1.75,23h28.5c0.966,0,1.75-0.84,1.75-1.875V1.875C32,0.84,31.216,0,30.25,0z M30,21H2V2h28V21z").attr({ stroke: '#000000', title: ShapeName }).data("id", "windowsPC").data("ControlId", ShapeId).data("LocationName", LocationName).data("LocationId", LocationId).data("name", ShapeName).data('enable', false)
        );
    st.attr({ cursor: "move", fill: "silver", "stroke-dasharray": "none", "stroke-width": 1, stroke: 'black' });
    st.setID(ShapeId);
    st.transform(Transform);
    setPC.push(st);
    if (show) {
        ApplyTransformHide(st, paper);
        clickPC(st, paper, ShapeName);
    }
    $("#lblSaved").text("Not Saved!").css("color", "red");
    return st;
}

Raphael.st.setID = function (id) {
    this.id = id;
}

function clickPC(st, paper, ShapeName) {
    st.click(function (event) {
        event.stopPropagation();
        if (!event.ctrlKey) {
            if (st[0].data("enable") != true && st[1].data("enable") != true) {
                ApplyCtrlTranslates(ctrlSelect, paper);
                HideHandles(paper, st);
                if (st.freeTransform.handles.bbox == null) {
                    removeUndoDrag(ftShow);
                    var ftShow = ApplyTransformShowPC(st, paper);

                }
                else {
                    removeUndoDrag(ftHide);
                    var ftHide = ApplyTransformHide(st, paper);
                }
            }
        }
        else if (event.ctrlKey) {
            if (st[0].data("enable") && st[1].data("enable")) {
                ctrlSelect.forEach(function (set) {
                    if (st == set) {
                        st[0].data("enable", false);
                        st[1].data("enable", false);
                        st.attr({ "stroke-dasharray": "none" });
                        ctrlExclude(st, paper);
                    }
                });
            }
            else {
                if (ftCtrlSelect != null && ftCtrlSelect != "") {
                    var dragX1 = ftCtrlSelect.attrs.translate.x;
                    var dragY1 = ftCtrlSelect.attrs.translate.y;
                    if (parseInt(dragX1) != 0 && parseInt(dragY1) != 0) {
                        st[0].data("ctrlNew", true);
                        st[1].data("ctrlNew", true);
                    }
                    else {
                        st[0].data("ctrlNew", false);
                        st[1].data("ctrlNew", false);
                    }
                }
                st[0].data("enable", true);
                st[1].data("enable", true);
                st.attr({ "stroke-dasharray": "-" });
                ctrlSelect.push(st);
            }
        }
    });
    st.mouseover(function () {
        $(st).attr("title", ShapeName);
    });
}

function ApplyTransformShowPC(st, paper) {
    var options = {
        attrs: { stroke: 'gray', fill: 'gray', "fill-opacity": 0.5 },
        draw: ['bbox', null],
        drag: ['center', 'self'],
        keepRatio: ['axisX', 'axisY'],
        rotate: [null, null, null],
        scale: [null, null, , null, null],
        size: 4,
    };
    var ft = paper.freeTransform(st, {}, function (ft, eve) {
        if (eve == 'drag start')
            if (ftCtrlSelect == "" || ftCtrlSelect == null)
                undo.push({ Event: eve.toString(), Element: st, EleType: st.type, Type: 'single', Transform: st[1].transform(), Ft: JSON.stringify(ft.attrs) });
            else {
                var undoCtrl = [];
                $.each(ctrlSelect, function (key, value) {
                    undoCtrl.push({ Element: ctrlSelect[key], Transform: ctrlSelect[key].transform(), dragX: 0, dragY: 0 });
                });
                undo.push({ Event: eve.toString(), Element: undoCtrl.slice(0), Type: 'multiple', Ft: JSON.stringify(ft.attrs) });
            }
        else if (eve == 'apply')
            $("#lblSaved").text("Not Saved!").css("color", "red");

    }).setOpts(options, function (ft, eve) {
        if (eve == 'drag start')
            if (ftCtrlSelect == "" || ftCtrlSelect == null)
                undo.push({ Event: eve.toString(), Element: st, EleType: st.type, Type: 'single', Transform: st[1].transform(), Ft: JSON.stringify(ft.attrs) });
            else {
                var undoCtrl = [];
                $.each(ctrlSelect, function (key, value) {
                    undoCtrl.push({ Element: ctrlSelect[key], Transform: ctrlSelect[key].transform(), dragX: 0, dragY: 0 });
                });
                undo.push({ Event: eve.toString(), Element: undoCtrl.slice(0), Type: 'multiple', Transform: st[1].transform(), Ft: JSON.stringify(ft.attrs) });
            }
        else if (eve == 'apply')
            $("#lblSaved").text("Not Saved!").css("color", "red");
    });
    return ft;
}

function HideHandles(paper, c) {
    paper.forEach(function (el) {
        if (el != c && el.data("id") != "windowsPCFake" && el.data("id") != "windowsPC")
            ApplyTransformHide(el, paper);
    });
    for (var i = 0; i < setPC.length; i = i + 1) {
        if (setPC[i] != c)
            ApplyTransformHide(setPC[i], paper);
    }
}


function pcRemove(resId, New) {

    var success = true;
    if (!New) {
        tempArr.push(resId);
        for (var i = 0; i < setPC.length; i = i + 1) {

            if (setPC[i].id == resId) {

                success = false;
            }
        }
    }
    return success;
}

function pcRemoveInside() {

    for (var i = 0; i < tempArr.length; i = i + 1) {

        $(setPC).each(function () {
            if (this.id == tempArr[i]) arrResults.push(this);
        });
    }

    $(setPC).each(function () {

        if ($.inArray(this, arrResults) == -1) {
            this.remove();
            setPC.splice($.inArray(this, setPC), 1);
        }
    });
    arrResults = [];
    tempArr = [];
}

function pcDelete(paper) {
    for (var i = 0; i < setPC.length; i = i + 1) {
        if (setPC[i].freeTransform.handles.bbox != null) {
            paper.freeTransform(setPC[i]).unplug();
            undoPCInit(setPC[i], true);
            setPC.splice($.inArray(setPC[i], setPC), 1);
        }
    }
}

function pcRemoveAll(paper) {
    $('#hdrLeft > div').parent().empty();
    for (var i = 0; i < setPC.length; i = i + 1) {
        paper.freeTransform(setPC[i]).unplug();
        setPC[i].remove();
        setPC.splice($.inArray(setPC[i], setPC), 1);
    }
}

function MultipcDelete(paper, st) {
    st.forEach(function (set) {
        if (set.data("name") != undefined) {
            $("#hdrLeft" + set.data("LocationId")).append('<div id="draggable' + set.data("ControlId") + '" data-locid="' + set.data("LocationId") + '" data-resid="' + set.data("ControlId") + '" data-shapename="' + set.data("name") + '" data-locname="' + set.data("LocationName") + '" class="ui-widget-content"><span class="ResName">' + set.data("name") + '</span></div>');
            var paperPC = Raphael("draggable" + set.data("ControlId"), "100%", "100%");
            paperPC.path("M23,30h-2c-1.104,0-2-0.896-2-2v-3h-6v3c0,1.104-0.896,2-2,2H9c-0.553,0-1,0.448-1,1c0,0.553,0.447,1,1,1h14    c0.553,0,1-0.447,1-1C24,30.448,23.553,30,23,30z M30.25,0H1.75C0.784,0,0,0.84,0,1.875v19.25C0,22.16,0.784,23,1.75,23h28.5    c0.966,0,1.75-0.84,1.75-1.875V1.875C32,0.84,31.216,0,30.25,0z M30,21H2V2h28V21z").attr({ fill: "Silver", stroke: '#000000' }).animate({ "fill-opacity": 0 }),
        $(".ui-widget-content").draggable({
            cancel: "span.ResName",
            appendTo: 'body',
            helper: 'clone',
            refreshPositions: true,
            stack: ".ui-widget-content",
            cursorAt: { top: 10, left: 10 },
            revert: "invalid",
        });
        }
    });
    st.hide();
    setPC.splice($.inArray(st, setPC), 1);
}

function undoPCInit(st, Delete) {
    if (Delete) {
        st.forEach(function (set) {
            if (set.data("name") != undefined) {
                $("#hdrLeft" + set.data("LocationId")).append('<div id="draggable' + set.data("ControlId") + '" data-locid="' + set.data("LocationId") + '" data-resid="' + set.data("ControlId") + '" data-shapename="' + set.data("name") + '" data-locname="' + set.data("LocationName") + '" class="ui-widget-content"><span class="ResName">' + set.data("name") + '</span></div>');
                var paperPC = Raphael("draggable" + set.data("ControlId"), "100%", "100%");
                paperPC.path("M23,30h-2c-1.104,0-2-0.896-2-2v-3h-6v3c0,1.104-0.896,2-2,2H9c-0.553,0-1,0.448-1,1c0,0.553,0.447,1,1,1h14    c0.553,0,1-0.447,1-1C24,30.448,23.553,30,23,30z M30.25,0H1.75C0.784,0,0,0.84,0,1.875v19.25C0,22.16,0.784,23,1.75,23h28.5    c0.966,0,1.75-0.84,1.75-1.875V1.875C32,0.84,31.216,0,30.25,0z M30,21H2V2h28V21z").attr({ fill: "Silver", stroke: '#000000' }).animate({ "fill-opacity": 0 }),
            $(".ui-widget-content").draggable({
                cancel: "span.ResName",
                appendTo: 'body',
                helper: 'clone',
                refreshPositions: true,
                stack: ".ui-widget-content",
                cursorAt: { top: 10, left: 10 },
                revert: "invalid",
            });
            }
        });
        undo.push({ Event: 'Delete', Element: st });
        st.hide();
    }
    else {
        setPC.push(st);
    }

}

function IsPcVisible(st) {

    var st1;
    st1 = $.grep(setPC, function (a) {
        return a.id == st.id;
    });

    if (st1.length != 0) {
        st1[0].remove();
        setPC.splice($.inArray(st1[0], setPC), 1);
    }

}

function getSelectedElement(paper) {
    var selElement;
    for (var el = paper.bottom; el != null; el = el.next) {
        if (el.attrs.cursor !== "ne-resize" && el.realPath != null) {
            if (el.data("id") != "windowsPCFake" && el.data("id") != "windowsPC" && el.node.style.display != "none")
                if (el.freeTransform.handles.bbox != null)
                    selElement = el;
        }
    }
    for (var i = 0; i < setPC.length; i = i + 1) {
        if (setPC[i].freeTransform.handles.bbox != null)
            selElement = setPC[i];
    }
    return selElement;
}

function getTranslates(Ele) {
    var transString = Raphael.parseTransformString(Ele.transform().toString());
    var x = 0, y = 0;
    for (var a = 0; a < transString.length; a++) {
        var arr = (transString[a].toString()).split(",");
        if (arr[0] == "T") {
            x = arr[1];
            y = arr[2];
        }
    }
    return [x, y];
}

function getTranslatesWithSmallt(Ele) {
    var transString = Raphael.parseTransformString(Ele.transform().toString());
    var x = 0, y = 0;
    for (var a = 0; a < transString.length; a++) {
        var arr = (transString[a].toString()).split(",");
        if (arr[0] == "t") {
            x = arr[1];
            y = arr[2];
        }
        if (arr[0] == "t") {
            x = arr[1];
            y = arr[2];
        }
    }
    return [x, y];
}

function getMatrixTranslate(Ele) {
    var str = $(Ele.node).attr('transform').replace('matrix', '').replace('(', '').replace(')', '').split(' '),
        x = str[4],
        y = str[5];

    return [x, y];

}

function ctrlExclude(c, paper) {
    var dragX = 0; dragY = 0, translates = "";
    if (ftCtrlSelect != null && ftCtrlSelect != "") {
        dragX = ftCtrlSelect.attrs.translate.x;
        dragY = ftCtrlSelect.attrs.translate.y;
    }
    if (c.type == "set")
        translates = getTranslates(c[0]);
    else
        translates = getTranslates(c);
    var ftSel = ApplyTransformHide(c, paper);
    if (dragX == 0 && dragY == 0) {
        ftSel.attrs.translate.x += 0;
        ftSel.attrs.translate.y += 0;
        ftSel.apply();
    }
    else {
        ftSel.attrs.translate.x += parseInt(translates[0]);
        ftSel.attrs.translate.y += parseInt(translates[1]);
        ftSel.apply();
    }
    ctrlSelect.exclude(c);
}

function ApplyCtrlTranslates(ctrlSelect, paper) {

    var dragX = 0, dragY = 0, translates;
    if (ctrlSelect.length != 0) {
        if (ftCtrlSelect != "") {
            dragX = ftCtrlSelect.attrs.translate.x;
            dragY = ftCtrlSelect.attrs.translate.y;
            ftCtrlSelect.unplug();
            ftCtrlSelect = "";
        }
        $.each(ctrlSelect, function (key, value) {
            if (ctrlSelect[key].type == "set") {
                ctrlSelect[key][0].data("enable", false);
                ctrlSelect[key][1].data("enable", false);
                ctrlSelect[key][0].data("enable", false);
                ctrlSelect[key][1].data("enable", false);
                translates = getTranslates(ctrlSelect[key][0]);
            }
            else {
                ctrlSelect[key].data("enable", false);
                translates = getTranslates(ctrlSelect[key]);
            }
            var ftSel = ApplyTransformHide(ctrlSelect[key], paper);
            if (dragX == 0 && dragY == 0) {
                ftSel.attrs.translate.x += 0;
                ftSel.attrs.translate.y += 0;
                ftSel.apply();
                ftSel.updateHandles();
            }
            else if (dragX != 0 || dragY != 0) {
                ftSel.attrs.translate.x += parseInt(translates[0]);
                ftSel.attrs.translate.y += parseInt(translates[1]);
                ftSel.apply();
                ftSel.updateHandles();
            }
            ctrlSelect.attr({ "stroke-dasharray": "none" });
        });
        ctrlDrag = true;
        ctrlSelect.clear();
    }
}

function ctrlKeyup(paper) {
    if (ctrlSelect.length != 0) {
        var dragX1 = 0, dragY1 = 0, translates = "";
        if (ftCtrlSelect != null && ftCtrlSelect != "") {
            paper.freeTransform(ctrlSelect).unplug();
            dragX1 = ftCtrlSelect.attrs.translate.x;
            dragY1 = ftCtrlSelect.attrs.translate.y;
            if (dragX1 != 0 || dragY1 != 0) {

                $.each(ctrlSelect, function (key, value) {
                    if (ctrlSelect[key].type == "set")
                        translates = getTranslates(ctrlSelect[key][0]);
                    else
                        translates = getTranslates(ctrlSelect[key]);
                    var ftSel = ApplyTransformHide(ctrlSelect[key], paper);
                    if (ctrlSelect[key].type != "set") {
                        if (ctrlSelect[key].data("enable"))
                            if (ctrlSelect[key].data("ctrlNew")) {
                                ftSel.attrs.translate.x += 0;
                                ftSel.attrs.translate.y += 0;
                                ftSel.apply();
                                ctrlSelect[key].data("ctrlNew", false);
                            }
                            else {
                                ftSel.attrs.translate.x += parseInt(translates[0]);
                                ftSel.attrs.translate.y += parseInt(translates[1]);
                                ftSel.apply();
                            }
                    }
                    else {
                        if (ctrlSelect[key][0].data("enable"))
                            if (ctrlSelect[key][0].data("ctrlNew")) {
                                ftSel.attrs.translate.x += 0;
                                ftSel.attrs.translate.y += 0;
                                ftSel.apply();
                                ctrlSelect[key][0].data("ctrlNew", false);
                                ctrlSelect[key][1].data("ctrlNew", false);
                            }
                            else {
                                ftSel.attrs.translate.x += parseInt(translates[0]);
                                ftSel.attrs.translate.y += parseInt(translates[1]);
                                ftSel.apply();
                            }
                    }
                });
            }
        }
        HideHandles(paper, "");
        ftCtrlSelect = ApplyTransformHide(ctrlSelect, paper);
    }
}

var setPC = [];
var tempArr = [];
var arrResults = [];