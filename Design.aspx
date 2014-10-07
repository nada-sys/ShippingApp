<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Design.aspx.cs" Inherits="MapWebApp.Design" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <link href="css/ShowForm.css" rel="stylesheet" />
    <link href="css/treeCenter.css" rel="stylesheet" />
    <link href="css/Shapes.css" rel="stylesheet" />
    <link href="css/jquery-ui.css" rel="stylesheet" />
    <link href="css/magnific-popup.css" rel="stylesheet" />


    <script src="js/jquery-1.10.2.js"></script>
    <script src="js/jquery-ui-1.10.4.custom.js"></script>
    <script src="js/raphael.js"></script>
    <script src="js/raphael.free_transform.js"></script>
    <script src="js/jquery.magnific-popup.js"></script>
    <script src="js/json2.js"></script>
    <script type='text/javascript'>
        var crtlSelect = "", ftCtrlSelect = "", undo = [], redo = [];
    </script>
    <script src="js/cusTreeJS.js"></script>
    <script src="js/ShowForm.js"></script>
    <script src="js/Loadshapes.js"></script>
    <script src="js/External.js"></script>
    <script src="js/contentEvents.js"></script>
    <script src="js/Rectangle.js"></script>

    <script>
        $(document).ready(function () {

            var w = 600;
            var h = 400;

            var paperShape = Raphael("hdrShapes");
            var paper = Raphael("canvasBody");
            CreateLayouts(paperShape, paper);
            pageEvents(paper);
            treeEvents();
            // drawRectangleSelection(paper);
            if (GetParameterValues("Open") != undefined) {
                openMap(GetParameterValues("Open").replace(/%20/gi, " "), paper);
            }
            else if (GetParameterValues("Save") != undefined) {
                openMap(GetParameterValues("Save").replace(/%20/gi, " "), paper);
            }

        });
    </script>
    <title></title>
</head>
<body>
    <div id="hdrTop">
        <table style="margin: 0.4%">
            <tbody>
                <tr>
                    <td>
                        <div style="width: 155px;">
                            <%--<img src="Images/ITS_logo.gif" width="54" height="33" />--%>
                        </div>
                    </td>
                    <td style="width: 73%">
                        <div>
                            <input type="button" id="chkNew" value="New">
                            <input type="button" id="chkOpen" value="Open" />
                            <input type="button" id="chkSave" value="Save" />
                            <input type="button" id="chkModifyLocation" value="Modify Locations" />
                            <input type="button" id="popGetServerName" value="Settings" />
                            <input type="button" id="chkGenerate" value="Preview" />
                        </div>
                    </td>
                    <td style="width: 5%; text-align: right;">
                        <label id="lblSaved" style="color: green;">Saved </label>
                    </td>
                    <td style="text-align: right;">
                        <input type="button" id="btnShowGrid" value="Show/Hide Grid">
                    </td>
                    <td style="width: 2%; text-align: right;">
                        <a id="aHelp" href="#"><span>HELP</span></a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="centerContainer">
        <table>
            <tbody>
                <tr>
                    <td>
                        <div id="hdrLeft"></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div id="hdrShapes">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div id="canvasBody" class="canvasBody GridHide">
                            <div id="wait">
                                <img src="Images/ajax-loader.gif" width="64" height="64" /><br>
                                <span>Loading...</span>
                            </div>
                            <div id="shapeIndex">
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="treeViewLocation" class="white-popup mfp-hide">
        <div id="treeLeft"></div>
        <div id="treeCenter">
            <input type="button" id="moveOne" value=">" />
            <input type="button" id="moveAll" value=">>" />
            <input type="button" id="getOne" value="<" />
            <input type="button" id="getAll" value="<<" />
        </div>
        <div id="treeRight"></div>
        <div id="treeBottom">
            <input type="button" id="btnOk" value="OK" />
        </div>
        <div id="notifyText" style="display: none; color: red">
            Please note that removing locations will remove the respective computers from the MAP !
        </div>
    </div>
    <div id="divError" class="white-popupSave mfp-hide">
        <span id="errorMsg" style="margin: 0 auto;">Please Add Server Name</span><br />
        <input id="btnError" type="button" value="OK" />
    </div>
    <div id="saveLocation" class="white-popupSave mfp-hide">
        MapName :<input id="txtMapName" type="text" /><br />
        <input id="btnSave" type="button" value="Save" />
    </div>
    <div id="openLocation" class="white-popupOpen mfp-hide">
        <span>MapName :</span><br />
        <div id="divOpenLocation"></div>
    </div>
    <div id="magImage" class="white-popupOpen mfp-hide">
        <div class="uploadWrapper">
            <input id="txtImageUpload" type="file" name="filedata" size="100" />
        </div>
        <input id="btnImageUpload" type="button" value="Insert" />
    </div>
    <div id="magText" class="white-popupSave  mfp-hide" style="background-color: aliceblue;">
        <label>Enter Text</label>
        <input type="text" id="txtEnterText" />
        <input id="btnSubmitText" type="button" value="Insert" />
    </div>
    <div id="magServerName" class="white-popupServer mfp-hide" style="background-color: aliceblue;">
        <label>Enter ServerName</label>
        <input type="text" id="txtServerName" /><br />
        <label>Refresh Intervel</label>
        <input type="text" id="txtRefresh" /><br />
        <div id="magServerNameButtons">
            <input id="btnServerName" type="button" value="Insert" /><input id="btnTestConnection" type="button" value="Test Connection" />
        </div>
    </div>
</body>
</html>
