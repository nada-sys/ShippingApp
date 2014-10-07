<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="GenerateMap.aspx.cs" Inherits="MapWebApp.GenerateMap" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <link href="css/GenerateMap.css" rel="stylesheet" />
    <script src="js/jquery-1.11.1.js"></script>
    <script src="js/raphael.js"></script>
    <script src="js/raphael.free_transform.js"></script>
    <script src="js/Loadshapes.js"></script>
    <script src="js/GenerateMap.js"></script>

    <title></title>
    <script type="text/javascript">

        $(document).ready(function () {

            var paper = Raphael("Content");
            console.log(window.outerHeight);
            fitToScreen();

            function fitToScreen() {
                var w = screen.width,
                    h = window.outerHeight,
                    h1 = window.innerHeight;

                var comma = ",";
                var resolution = w + comma + h;
                switch (resolution) {
                    case "1366,696"://14 inch
                        paper.setViewBox(-56, -24, 1242, h1, false);
                        paper.setSize('100%', '100%');
                        InUse = InuseCount(paper, 1282, 72, 655, -108, 30, -557);
                        break;
                    case "1366,744"://17 inch
                    case "1366,858"://17 inch Full Screen
                        paper.setViewBox(-96, -24, 1374, 657, false);
                        paper.setSize('100%', '100%');
                        InUse = InuseCount(paper, 1370, 70, 585, -148, 30, -557);
                        break;
                    case "1366,768"://17 inch Full Screen
                        paper.setViewBox(0, -23, 1165, 665, false);
                        paper.setSize('100%', '100%');
                        InUse = InuseCount(paper, 1188, 74, 665, -57, 30, -557);
                        break;
                    case "1920,1056":// 22 inch
                        paper.setViewBox(-35, 0, 1196, 630, false);
                        paper.setSize('100%', '100%');
                        InUse = InuseCount(paper, 1250, 65, 585, -88, 30, -557);
                        break;
                    case "1920,1080"://22 inch Full screen
                        paper.setViewBox(-4, -24, 1188, 644, false);
                        paper.setSize('100%', '100%');
                        InUse = InuseCount(paper, 1190, 80, 585, -58, 30, -557);
                        break;
                    default:
                        paper.setViewBox(-96, -24, 1374, 657, false);
                        paper.setSize('100%', '100%');
                        InUse = InuseCount(paper, 1370, 70, 585, -148, 30, -557);
                        break;
                }
            }
            var InUse;

            var lstPC = [];

            function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for (var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                }
                return vars;
            }
            var mapName = getUrlVars();
            $.ajax({
                url: 'WebServices/treeWS.asmx/OpenLocations',
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: "{\"mapName\":\"" + mapName[0].toString().replace(/%20/gi, " ") + "\"}",
                success: function (response) {
                    if (response.d != "") {
                        if (response.d.length > 0) {
                            for (var i = 0; i < response.d.length; i++) {
                                var ShapeName = response.d[i].ShapeName;
                                var ShapeId = response.d[i].ShapeID;
                                var ControlId = response.d[i].ControlId;
                                var Transform = response.d[i].Transform;
                                var src = response.d[i].src;
                                switch (ShapeId) {
                                    case "rect":
                                        var c = LoadRectangle(paper, Transform, false);
                                        break;
                                    case "triangle":
                                        LoadTriangle(paper, Transform, false);
                                        break;
                                    case "ellipse":
                                        LoadEllipse(paper, Transform, false);
                                        break;
                                    case "hexagon":
                                        LoadHexagon(paper, Transform, false);
                                        break;
                                    case "pentagon":
                                        LoadPentagon(paper, Transform, false);
                                        break;
                                    case "line":
                                        LoadLine(paper, Transform, false);
                                        break;
                                    case "windowsPC":
                                        var st = LoadWindowsPC(paper, ControlId, ShapeName, "", "", Transform, false);
                                        lstPC.push(st);
                                        st.mouseover(function () {
                                            $(st).attr("title", ShapeName);
                                        });
                                        break;
                                    case "image":
                                        LoadImage(paper, src, Transform, false);
                                        break;
                                    case "text":
                                        LoadText(paper, Transform, ShapeName, false);
                                        break;
                                    case "printer":
                                        LoadPrinter(paper, Transform, false);
                                        break;
                                    case "chair":
                                        LoadChair(paper, Transform, false);
                                        break;
                                    case "female":
                                        LoadFemale(paper, Transform, false);
                                        break;
                                    case "male":
                                        LoadMale(paper, Transform, false);
                                        break;
                                    case "door":
                                        LoadDoor(paper, Transform, false);
                                        break;
                                    case "window":
                                        LoadWindow(paper, Transform, false);
                                        break;
                                    case "wall":
                                        LoadWall(paper, Transform, false);
                                        break;
                                    case "hwall":
                                        LoadHorzontalWall(paper, Transform, false);
                                        break;
                                    case "CornerTable":
                                        LoadCornerTable(paper, Transform, false);
                                        break;
                                }
                            }
                        }
                    }
                }
            });

            var available = 0, notAvailable = 0, reserved = 0, inUse = 0, Refresh = mapName[1];

            function GetStatus() {
                console.log()
                var st;
                $.ajax({
                    url: 'WebServices/treeWS.asmx/GetStatus',
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    data: "{}",
                    success: function (response) {
                        if (response.d != "" && response.d != null) {
                            if (response.d.length > 0) {
                                for (var i = 0; i < response.d.length; i++) {
                                    var ResId = response.d[i].ResId;
                                    var ResState = response.d[i].ResStatus;
                                    st = $.grep(lstPC, function (a) {
                                        return a.id == ResId;
                                    });
                                    if (st.length != 0) {
                                        switch (ResState) {
                                            case "AVAILABLE":
                                                available++;
                                                st[0].attr({ fill: "#7AF131" });
                                                break;
                                            case "NOT_AVAILABLE":
                                                notAvailable++;
                                                st[0].attr({ fill: "black" });
                                                break;
                                            case "IN_USE":
                                                inUse++;
                                                st[0].attr({ fill: "blue" });
                                                break;
                                            case "RESERVED":
                                                reserved++;
                                                st[0].attr({ fill: "red" });
                                                break;
                                        }
                                    }

                                }
                            }
                        }

                    },
                    complete: function () {
                        InUse[0].forEach(function (set) {
                            if (set.data('id') == 'count')
                                set.attr('text', inUse);
                        });
                        InUse[1].forEach(function (set) {
                            if (set.data('id') == 'count')
                                set.attr('text', reserved);
                        });
                        InUse[2].forEach(function (set) {
                            if (set.data('id') == 'count')
                                set.attr('text', available);
                        });
                        InUse[3].forEach(function (set) {
                            if (set.data('id') == 'count')
                                set.attr('text', notAvailable);
                        });
                        inUse = 0; available = 0; notAvailable = 0; reserved = 0;
                        if (Refresh == undefined)
                            Refresh = 0;
                        setTimeout(GetStatus, parseInt(Refresh * 1000));
                    }
                });

            }
            GetStatus();

        });

    </script>
</head>
<body>
    <div id="Content">
    </div>
</body>
</html>
