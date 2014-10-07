var pcCount; var element; var mapName = "";
var imagePath;
var New;
var openMapName = "";
function pageEvents(paper) {

    $("#canvasBody").on("contextmenu", function (e) {
        return false;
    });

    $('#content div').click(function () {
        $('#content div').css({ "background-color": "white" });
        $(this).css({ "background-color": "lightgray" });
    });

    $(document).ajaxStart(function () {
        $("#wait").css("display", "block");
    });
    $(document).ajaxComplete(function () {
        $("#wait").css("display", "none");
    });

    $('#aHelp').click(function () {
        var win = window.open("Help.html", '_blank');
        win.focus();
    });

    $('#btnSubmitText').click(function () {

        if ($('#txtEnterText').val() == "")
            return false;

        LoadText(paper, "R0,50.5,100S2.6666666666666665,2.6923076923076925,50.5,100T408.5,-58", $('#txtEnterText').val(), true);
        var magnificPopup = $.magnificPopup.instance;
        magnificPopup.close();

    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                LoadImage(paper, e.target.result, "", true);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#btnImageUpload").click(function () {

        if (imagePath == null)
            return false;
        readURL(imagePath);
        var magnificPopup = $.magnificPopup.instance;
        magnificPopup.close();
    });

    $("#txtImageUpload").change(function () {
        imagePath = this;
    });

    $("#btnServerName").click(function () {

        if ($("#txtServerName").val() == "" || $("#txtRefresh").val() == "")
            return false;
        $.ajax({
            url: 'WebServices/treeWS.asmx/SaveSettings',
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: "{\"server\":\"" + $("#txtServerName").val() + "\",\"refresh\":\"" + $("#txtRefresh").val() + "\"}",
            success: function (response) {
            },
            error: function (xhr, status) {
                alert('Unknown error ' + status);
            }
        });
        var magnificPopup = $.magnificPopup.instance;
        magnificPopup.close();

    });
    $("#btnTestConnection").click(function () {

        if ($("#txtServerName").val() == "")
            return false;
        $.ajax({
            url: 'WebServices/treeWS.asmx/TestConnection',
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: "{\"server\":\"" + $("#txtServerName").val() + "\"}",
            success: function (response) {
                alert(response.d);
            },
            error: function (xhr, status) {
                alert('Unknown error ' + status);
            }
        });
    });

    $("#shapeIndex").dialog({
        autoOpen: false,
        draggable: false,
        modal: false,
        resizable: false,
        closeOnEscape: false,
        width: 150,
        height: 100,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "explode",
            duration: 500
        }
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


    $(document).on('click', '#chkNew', function () {

        New = true;
        $.magnificPopup.open({
            items: {
                src: '#treeViewLocation',
                type: 'inline',
            },
            callbacks: {
                beforeOpen: function () {
                    treeLeftLocation(openMapName);
                },
                close: function () {
                    if (openMapName != "") {
                        treeLeftLocation(openMapName);
                        //ModifyLocation(openMapName);
                    }

                },
            }
        });
    });

    $(document).on('click', '#popGetServerName', function () {
        $.magnificPopup.open({
            items: {
                src: '#magServerName',
                type: 'inline',
            },
            callbacks: {
                beforeOpen: function () {
                    $.ajax({
                        url: 'WebServices/treeWS.asmx/GetServerName',
                        type: "POST",
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        data: {},
                        success: function (response) {
                            if (response.d != null) {
                                $('#txtServerName').val(response.d[0]);
                                $('#txtRefresh').val(response.d[1]);
                            }
                        }
                    });
                },
            }
        });
    });

    $('body').on('click', '.menuHeader', function () {
        $(this).children(".ui-widget-content").slideToggle(function () {
            if ($(this).is(":hidden"))
                $(this).parent().children(':first-child').removeClass("menuMinus").addClass("menuPlus");
            else
                $(this).parent().children(':first-child').removeClass("menuPlus").addClass("menuMinus");
        });
    });

    $(document).on('click', '#chkOpen', function (e) {
        $.ajax({
            url: 'WebServices/treeWS.asmx/GetMapNames',
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: {},
            success: function (response) {
                if (response.d != null) {
                    $('#divOpenLocation > a').parent().empty();
                    $.magnificPopup.open({
                        items: {
                            src: '#openLocation',
                            type: 'inline'
                        },
                        callbacks: {
                            beforeOpen: function () {
                                if (openMapName != "")
                                    treeLeftLocation(openMapName);
                                //ModifyLocation(openMapName);
                            },
                        }
                    });
                    for (var i = 0; i < response.d.length; i++) {
                        $('#divOpenLocation').append('<a href="?Open=' + response.d[i] + '" id="' + response.d[i] + '" style="color:sienna;">' + response.d[i] + '</li></br>');
                    }
                    $('#divOpenLocation > a').click(function () {
                        var magnificPopup = $.magnificPopup.instance;
                        magnificPopup.close();
                    });

                }
            },
            error: function (xhr, status) {
                alert('Unknown error ' + status);
            }
        });
    });

    $('#btnOk').click(function () {
        sendLocations(paper);
    });

    $(document).on('click', '#chkSave', function (e) {
        save(paper);
    });

    $(document).on('click', '#chkModifyLocation', function (e) {
        New = false;
        if (GetParameterValues("Open") != undefined) {
            //ModifyLocation(GetParameterValues("Open"));
            treeLeftLocation(GetParameterValues("Open"));
        }
        else if (GetParameterValues("Save") != undefined) {
            //ModifyLocation(GetParameterValues("Save"));
            treeLeftLocation(GetParameterValues("Save"));
        }
        $('#notifyText').show();
        $("#btnOk").prop('value', 'Save&Close');
        $.magnificPopup.open({
            items: {
                src: '#treeViewLocation',
            },
            callbacks: {
                close: function () {
                    $('#notifyText').hide();
                    $("#btnOk").prop('value', 'Ok');
                }
            }
        });
    });
    ctrlSelect = paper.set();
    var ctrlDrag = true;
    var options = {
        attrs: { stroke: 'white' },
        draw: [null, null],
        distance: 1.3,
        drag: [null, 'self'],
        keepRatio: ['axisX', 'axisY'],
        rotate: [null, null, null],
        scale: [null, null, null, null, null],
        size: 4,
    };
    $(document).keyup(function (e) {
        if (e.keyCode == 17) {
            ctrlKeyup(paper);
        }
        if (e.keyCode == 46) {
            if (ctrlSelect.length != 0) {
                ftCtrlSelect.unplug();
                var undoMulti = [];
                $.each(ctrlSelect, function (key, value) {
                    if (ctrlSelect[key].type == 'set') {
                        MultipcDelete(paper, ctrlSelect[key]);
                        undoMulti.push({ Element: ctrlSelect[key] });
                    }
                    else {
                        ctrlSelect[key].hide();
                        undoMulti.push({ Element: ctrlSelect[key] });
                    }
                });
                undo.push({ Event: 'MultiDelete', Element: undoMulti.slice(0) });
                ApplyCtrlTranslates(ctrlSelect, paper);
            }
            var el = getSelectedElement(paper);
            if (el != null && el.type != "set") {
                paper.freeTransform(el).unplug();
                undo.push({ Event: 'Delete', Element: el });
                el.hide();
            }
            pcDelete(paper);
        }
    });

    $(document).keydown(function (e) {

        if (e.ctrlKey && e.keyCode == 90) {
            var index = (undo.length) - 1;
            if (index != -1) {
                var undoZ = undo[index],
                    Event = undoZ.Event,
                    Element = undoZ.Element,
                    EleType = undoZ.EleType,
                    Type = undoZ.Type,
                    Transform = undoZ.Transform;

                if (Event != 'init' && Event != 'Delete' && Event != 'MultiDelete') {
                    var Ft = JSON.parse(undoZ.Ft),
                        dragX = parseInt(Ft.translate.x),
                        dragY = parseInt(Ft.translate.y),
                        scaleX = parseFloat(Ft.scale.x),
                        scaleY = parseFloat(Ft.scale.y),
                        rotate = parseFloat(Ft.rotate),
                        NewFt = "";
                    if (Type == 'single')
                        NewFt = ApplyTransformHide(Element, paper);
                }
                switch (Event) {
                    case 'init':
                        if (EleType == 'set')
                            undoPCInit(Element, true);
                        else
                            Element.hide();
                        break;
                    case 'drag start':
                        if (Type == 'multiple') {
                            if (ctrlSelect.length != 0)
                                ApplyCtrlTranslates(ctrlSelect, paper);
                            $.each(Element, function (key, value) {
                                Element[key].Element.transform(Element[key].Transform);
                                paper.freeTransform(Element[key].Element).unplug();
                                var newF = ApplyTransformHide(Element[key].Element, paper);
                            });
                        }
                        else {
                            if (EleType == 'set') {
                                Element.transform(Transform);
                                paper.freeTransform(Element).unplug();
                                var newFtSet = ApplyTransformHide(Element, paper);
                            }
                            else {
                                NewFt.attrs.translate.x = dragX;
                                NewFt.attrs.translate.y = dragY;
                                NewFt.apply();
                            }
                        }
                        break;
                    case 'scale start':
                        NewFt.attrs.scale.x = scaleX;
                        NewFt.attrs.scale.y = scaleY;
                        NewFt.attrs.translate.x = dragX;
                        NewFt.attrs.translate.y = dragY;
                        NewFt.apply();
                        break;
                    case 'rotate start':
                        NewFt.attrs.rotate = rotate;
                        NewFt.apply();
                        break;
                    case 'Delete':
                        ApplyTransformHide(Element, paper);
                        Element.show();
                        if (Element.type == 'set') {
                            $('#draggable' + Element[1].data("ControlId")).remove();
                            IsPcVisible(Element);
                            undoPCInit(Element, false);
                        }
                        break;
                    case 'MultiDelete':
                        $.each(Element, function (key, value) {
                            ApplyTransformHide(Element[key].Element, paper);
                            if (Element[key].Element.type == 'set') {
                                $('#draggable' + Element[key].Element[1].data("ControlId")).remove();
                                IsPcVisible(Element[key].Element);
                                undoPCInit(Element[key].Element, false);
                            }
                            Element[key].Element.show();
                        });
                        break;
                }
                undo.pop();
                $("#lblSaved").text("Not Saved!").css("color", "red");
            }
        }


        if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
            var el = getSelectedElement(paper);
            var ft;
            if (ftCtrlSelect != null && ftCtrlSelect != "") {
                ft = ftCtrlSelect;
            }
            if (el != null)
                ft = paper.freeTransform(el);
            if (ft != null) {
                if (e.keyCode == 39) {
                    ft.attrs.translate.x += 1;
                    ft.attrs.translate.y += 0;
                    ft.apply();
                    ft.updateHandles();
                }
                if (e.keyCode == 37) {
                    ft.attrs.translate.x -= 1;
                    ft.attrs.translate.y -= 0;
                    ft.apply();
                    ft.updateHandles();
                }
                if (e.keyCode == 40) {
                    ft.attrs.translate.x += 0;
                    ft.attrs.translate.y += 1;
                    ft.apply();
                    ft.updateHandles();
                }
                if (e.keyCode == 38) {
                    ft.attrs.translate.x -= 0;
                    ft.attrs.translate.y -= 1;
                    ft.apply();
                    ft.updateHandles();
                }
                ctrlKeyup(paper);
            }
        }
    });

    $("#canvasBody").click(function (e) {
        e.preventDefault();
        if (!e.ctrlKey) {
            ApplyCtrlTranslates(ctrlSelect, paper);
            HideHandles(paper, "");
            $("#shapeIndex").dialog("close");
        }
    });

    $("#chkGenerate").click(function () {
        if (mapName == "") {
            $.magnificPopup.open({
                items: {
                    src: '#saveLocation',
                }
            });
            $("#btnSave").click(function () {
                mapName = $('#txtMapName').val();
                if (mapName == "")
                    return false;
                var magnificPopup = $.magnificPopup.instance;
                magnificPopup.close();
                saveLocations(paper);
                window.open("GenerateMap.aspx?" + mapName + ".xml", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=100, left=200, width=1000, height=500");
            });
        }
        else {
            saveLocations(paper);
            window.open("GenerateMap.aspx?" + mapName + ".xml", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=100, left=200, width=1000, height=500");
        }
    });
    $("#canvasBody").droppable({
        accept: '.ui-widget-content',
        tolerance: 'intersect',
        drop: function (e, ui) {
            var ShapeId = $(ui.helper).data('resid');
            var LocationId = $(ui.helper).data('locid');
            var LocationName = $(ui.helper).data('locname');
            var ShapeName = $(ui.helper).data('shapename');
            var X = e.pageX - $('#canvasBody').offset().left
            var Y = e.pageY - $('#canvasBody').offset().top;
            var Transform;
            Transform = "R0,19,23.4245S1,1,19,23.4245T" + (X + 10) + "," + (Y - 10) + "";
            var st = LoadWindowsPC(paper, ShapeId, ShapeName, LocationId, LocationName, Transform, true);
            $(ui.draggable).remove();
        }
    });
    $(document).on('click', '#btnError', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        $.magnificPopup.open({
            items: {
                src: '#magServerName',
                type: 'inline',
            }
        });
    });

    $("#btnShowGrid").click(function () {
        if ($("#canvasBody").hasClass("GridHide"))
            $("#canvasBody").removeClass("GridHide").addClass("GridShow");
        else
            $("#canvasBody").removeClass("GridShow").addClass("GridHide");
    });
}

function openMap(openMapName, paper) {
    var res = openMapName.split(".");
    mapName = res[0];
    $.ajax({
        url: 'WebServices/treeWS.asmx/OpenLocations',
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: "{\"mapName\":\"" + openMapName + "\"}",
        success: function (response) {
            treeLeftLocation(openMapName);
            //ModifyLocation(openMapName);
            $('#hdrLeft > div').parent().empty();
            paper.clear();
            if (response.d != "") {
                if (response.d.length > 0) {
                    for (var i = 0; i < response.d.length; i++) {
                        var ShapeName = response.d[i].ShapeName;
                        var ShapeId = response.d[i].ShapeID;
                        var ControlId = response.d[i].ControlId;
                        var Transform = response.d[i].Transform;
                        var LocationName = response.d[i].LocationName;
                        var src = response.d[i].src;
                        switch (ShapeId) {
                            case "rect":
                                LoadRectangle(paper, Transform, true);
                                break;
                            case "triangle":
                                LoadTriangle(paper, Transform, true);
                                break;
                            case "ellipse":
                                LoadEllipse(paper, Transform, true);
                                break;
                            case "hexagon":
                                LoadHexagon(paper, Transform, true);
                                break;
                            case "pentagon":
                                LoadPentagon(paper, Transform, true);
                                break;
                            case "line":
                                LoadLine(paper, Transform, true);
                                break;
                            case "windowsPC":
                                st = LoadWindowsPC(paper, ControlId, ShapeName, src, LocationName, Transform, true);
                                st.setID(ControlId);
                                break;
                            case "image":
                                LoadImage(paper, src, Transform, true);
                                break;
                            case "text":
                                LoadText(paper, Transform, ShapeName, true);
                                break;
                            case "printer":
                                LoadPrinter(paper, Transform, true);
                                break;
                            case "chair":
                                LoadChair(paper, Transform, true);
                                break;
                            case "female":
                                LoadFemale(paper, Transform, true);
                                break;
                            case "male":
                                LoadMale(paper, Transform, true);
                                break;
                            case "door":
                                LoadDoor(paper, Transform, true);
                                break;
                            case "window":
                                LoadWindow(paper, Transform, true);
                                break;
                            case "wall":
                                LoadWall(paper, Transform, true);
                                break;
                            case "hwall":
                                LoadHorzontalWall(paper, Transform, true);
                                break;
                            case "CornerTable":
                                LoadCornerTable(paper, Transform, true);
                                break;
                            case "draggableHeader":
                                $("#hdrLeft").append('<div class="menuHeader" id="hdrLeft' + src + '"><img src="Images/spacer.gif" class="menuMinus"><img class="menuImage" src="Images/Location.png" width="24" height="24" border="0"><span data-locid="' + src + '">' + Transform + '</span></div>');
                                break;
                            case "draggable":
                                $("#hdrLeft" + src).append('<div id="draggable' + ControlId + '" data-locid="' + src + '" data-locname="' + Transform + '" data-resid="' + ControlId + '" data-shapename="' + ShapeName + '" class="ui-widget-content"><span class="ResName">' + ShapeName + '</span></div>');
                                var paperPC = Raphael("draggable" + ControlId, "100%", "100%");
                                paperPC.path("M23,30h-2c-1.104,0-2-0.896-2-2v-3h-6v3c0,1.104-0.896,2-2,2H9c-0.553,0-1,0.448-1,1c0,0.553,0.447,1,1,1h14    c0.553,0,1-0.447,1-1C24,30.448,23.553,30,23,30z M30.25,0H1.75C0.784,0,0,0.84,0,1.875v19.25C0,22.16,0.784,23,1.75,23h28.5c0.966,0,1.75-0.84,1.75-1.875V1.875C32,0.84,31.216,0,30.25,0z M30,21H2V2h28V21z").attr({ fill: "Silver", stroke: '#000000' }).animate({ "fill-opacity": 0 }),
                            $(".ui-widget-content").draggable({
                                cancel: "span.ResName",
                                appendTo: 'body',
                                helper: 'clone',
                                refreshPositions: true,
                                stack: ".ui-widget-content",
                                cursorAt: { top: 10, left: 10 },
                                revert: "invalid",
                            });
                                break;
                        }
                    }
                }
            }
        },
        complete: function (xhr, status) {
            $("#lblSaved").text("Saved").css("color", "green");
        },
        error: function (xhr, status) {
            alert('Unknown error ' + status);
        }
    });
}

function save(paper) {
    if (mapName == "") {
        $.magnificPopup.open({
            items: {
                src: '#saveLocation',
            }
        });
        $("#btnSave").click(function () {
            mapName = $('#txtMapName').val();
            if (mapName == "")
                return false;
            var magnificPopup = $.magnificPopup.instance;
            magnificPopup.close();
            saveLocations(paper);
        });
    }
    else {
        saveLocations(paper);
    }
}

function saveLocations(paper) {

    var LstObjListItems = [];
    ApplyCtrlTranslates(ctrlSelect, paper);
    HideHandles(paper, "");
    paper.forEach(function (el) {
        if (el.node.style.display != "none") {
            var CONTROL_ID, SRC, x, y, width, height, ShapeName, LocationName;
            var CONTROL_NAME = el.data("id");
            if (CONTROL_NAME != "windowsPCFake" && CONTROL_NAME != "macPCFake") {
                if (CONTROL_NAME == "image")
                    SRC = el.attr("src");
                else if (CONTROL_NAME == "windowsPC") {
                    SRC = el.data("LocationId");
                    LocationName = el.data("LocationName");
                }
                else {
                    SRC = "";
                    LocationName = "";
                }
                if (CONTROL_NAME == "text")
                    ShapeName = el.attr("text");
                else
                    ShapeName = el.data("name");
                LstObjListItems.push({ MapName: mapName, ShapeName: ShapeName, ShapeID: el.data("id"), ControlId: el.data("ControlId"), Transform: el.transform().toString(), LocationName: LocationName, src: SRC });
            }
            else { }
        }
    });

    $('#hdrLeft div').each(function () {

        if ($(this).hasClass("ui-widget-content")) {
            LstObjListItems.push({ MapName: mapName, ShapeName: $(this).data("shapename"), ShapeID: "draggable", ControlId: $(this).data('resid'), Transform: $(this).data("locname"), src: $(this).data("locid") });
        }
        else if ($(this).hasClass("menuHeader")) {
            LstObjListItems.push({ MapName: mapName, ShapeName: "", ShapeID: "draggableHeader", ControlId: "", Transform: $(this).children("span").text(), src: $(this).children("span").data("locid") });
        }
    });
    if (LstObjListItems.length == 0) return;
    $.ajax({
        url: 'WebServices/treeWS.asmx/SaveLocations',
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ itemsClass: LstObjListItems }),
        success: function (response) {
        },
        error: function (xhr, status) {
            alert('Unknown error ' + status);
        },
        complete: function () {
            $("#lblSaved").text("Saved").css("color", "green");
            history.pushState(null, "MapApplication", "Design.aspx?Save=" + mapName + ".xml");
        },
    });
    LstObjListItems = [];
}

function sendLocations(paper) {
    $("#chkFile").trigger('click');
    var magnificPopup = $.magnificPopup.instance;
    magnificPopup.close();
    var LstObjListItems = [];
    var success;
    var RowIndex = 0;
    $('#treeRight li').each(function () {
        var siteId = $(this).data('id');
        var locId = $(this).data('id1');
        var siteName = $(this).data('siteid');
        var locName = $(this).data('locid');
        LstObjListItems[RowIndex] = { siteId: siteId, locationId: locId, siteName: siteName, locationName: locName };
        RowIndex += 1;
    });
    //if (LstObjListItems.length == 0) return;
    $.ajax({
        url: 'WebServices/treeWS.asmx/setSelectedLocations',
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ itemsClass: LstObjListItems }),
        success: function (response) {
            $('#hdrLeft > div').parent().empty();
            if (New) {
                mapName = "";
                paper.clear();
                history.pushState(null, "MapApplication", "Design.aspx");
            }
            if (response.d != null) {
                if (response.d.length > 0) {
                    HideHandles(paper, "");
                    for (var i = 0; i < response.d.length; i++) {
                        var locName = response.d[i].LocationName;
                        var locId = response.d[i].LocationId;
                        var object = response.d[i].Resources;
                        if ($("#hdrLeft" + locId).length == 0)
                            if (object.length == 0)
                                $("#hdrLeft").append('<div class="menuHeader" id="hdrLeft' + locId + '"><img src="Images/spacer.gif" class="menuBlank"><img class="menuImage" src="Images/Location.png" width="24" height="24" border="0"><span data-locid="' + locId + '">' + locName + '</span></div>');
                            else
                                $("#hdrLeft").append('<div class="menuHeader" id="hdrLeft' + locId + '"><img src="Images/spacer.gif" class="menuMinus"><img class="menuImage" src="Images/Location.png" width="24" height="24" border="0"><span data-locid="' + locId + '">' + locName + '</span></div>');
                        for (var j = 0; j < object.length; j++) {
                            var res_name = object[j].RES_NAME;
                            var res_id = object[j].RES_ID;
                            success = pcRemove(res_id, New);
                            if (success) {
                                if ($("#draggable" + res_id).length == 0) {
                                    $("#hdrLeft" + locId).append('<div id="draggable' + res_id + '" data-locid="' + locId + '" data-resid="' + res_id + '" data-shapename="' + res_name + '" data-locname="' + locName + '" class="ui-widget-content"><span class="ResName">' + res_name + '</span></div>');
                                    var paperPC = Raphael("draggable" + res_id, "100%", "100%");
                                    paperPC.path("M23,30h-2c-1.104,0-2-0.896-2-2v-3h-6v3c0,1.104-0.896,2-2,2H9c-0.553,0-1,0.448-1,1c0,0.553,0.447,1,1,1h14    c0.553,0,1-0.447,1-1C24,30.448,23.553,30,23,30z M30.25,0H1.75C0.784,0,0,0.84,0,1.875v19.25C0,22.16,0.784,23,1.75,23h28.5    c0.966,0,1.75-0.84,1.75-1.875V1.875C32,0.84,31.216,0,30.25,0z M30,21H2V2h28V21z").attr({ fill: "Silver", stroke: '#000000' }).animate({ "fill-opacity": 0 })
                                    var revert;
                                    $(".ui-widget-content").draggable({
                                        cancel: "span.ResName",
                                        appendTo: 'body',
                                        helper: 'clone',
                                        refreshPositions: true,
                                        stack: ".ui-widget-content",
                                        cursorAt: { top: 10, left: 10 },
                                        revert: "invalid",
                                        stop: function (e, ui) {
                                        }
                                    });
                                }
                            }
                        }
                    }
                }
                else
                    pcRemoveAll(paper);
            }
        },
        complete: function () {
            $("#lblSaved").text("Not Saved!").css("color", "red");
            if (!New) {
                pcRemoveInside();
                save(paper);
            }
        },
        error: function (xhr, status) {
            alert('Unknown error ' + status);
        }
    });
}