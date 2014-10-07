function treeLeftLocation(mapName) {
    $.ajax({
        url: 'WebServices/treeWS.asmx/GetLocations',
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: "{}",
        success: function (response) {
            $("#treeLeft").children().remove();
            $("#treeRight").children().remove();
            if (response.d != null) {
                if (response.d.length > 0) {
                    for (var i = 0; i < response.d.length; i++) {
                        var SiteName = response.d[i].SiteName;
                        var SiteId = response.d[i].SiteId;
                        var object = response.d[i].Location;
                        if ($("#treeLeft" + " #" + SiteId + "").length == 0)
                            if (object.length == 0)
                                $("#treeLeft").append('<ul id="' + SiteId + '" data-siteId="' + SiteName + '"><img src="Images/spacer.gif" class="menuBlank"><img class="menuImage" src="Images/Site.png" width="24" height="24" border="0" valign="middle"><span>' + SiteName + '</span></ul>');
                            else
                                $("#treeLeft").append('<ul id="' + SiteId + '" data-siteId="' + SiteName + '"><img src="Images/spacer.gif" class="menuMinus"><img class="menuImage" src="Images/Site.png" width="24" height="24" border="0" valign="middle"><span>' + SiteName + '</span></ul>');
                        for (var j = 0; j < object.length; j++) {
                            var LocationName = object[j].LocationName;
                            var LocationId = object[j].LocationId;
                            if ($("#treeLeft " + " #" + SiteId + " #loc" + LocationId).length == 0)
                                $("#treeLeft" + " #" + SiteId).append('<li class="toggleOff" id="loc' + LocationId + '" data-id="' + SiteId + '" data-id1="' + LocationId + '" data-siteId="' + SiteName + '" data-locId="' + LocationName + '"><img class="menuImage" src="Images/Location.png" width="24" height="24" border="0"><span>' + LocationName + '</span></li>');
                        }
                    }
                }
            }
            else {
                $.magnificPopup.open({
                    items: {
                        src: '#divError',
                        type: 'inline',
                    },
                    closeBtnInside: false
                });
            }
        },
        complete: function () {
            ModifyLocation(mapName);
        },
        error: function (xhr, status) {
            alert('Unknown error ' + status);
        }
    });
}

function ModifyLocation(mapName) {

    if (mapName != "")
        $.ajax({
            url: 'WebServices/treeWS.asmx/ModifyLocations',
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: "{\"mapName\":\"" + mapName.replace(/%20/gi, " ") + "\"}",
            success: function (response) {
                if (response.d != null) {
                    if (response.d.length > 0) {
                        $("#treeRight").children().remove();
                        for (var i = 0; i < response.d.length; i++) {
                            var SiteId = response.d[i].siteId;
                            var SiteName = response.d[i].siteName;
                            var LocationId = response.d[i].locationId;
                            var LocationName = response.d[i].locationName;
                            if ($("#treeLeft " + " #" + SiteId + " #loc" + LocationId).length != 0)
                                $("#treeLeft " + " #" + SiteId + " #loc" + LocationId).remove();
                            if ($("#treeRight " + " #loc" + LocationId).length == 0)
                                $("#treeRight").append('<li id="loc' + LocationId + '" data-id="' + SiteId + '" data-id1="' + LocationId + '" data-siteid="' + SiteName + '" data-locId="' + LocationName + '" class="toggleOff">' + LocationName + '(' + SiteName + ')</li>');
                        }

                    }
                }
            },
            complete: function () {
            },
            error: function (xhr, status) {
                alert('Unknown error ' + status);
            }
        });
}

function treeEvents() {

    $('#moveOne').click(function () {
        $('#treeLeft li').each(function () {
            if ($(this).hasClass("toggleOn")) {
                var siteId = $(this).parent().children().eq(2).text();
                var locId = $(this).data('locid');
                var id = $(this).data('id');
                var id1 = $(this).data('id1');
                $("#treeRight").append('<li id="loc' + id1 + '" data-id="' + id + '" data-id1="' + id1 + '" data-siteid="' + siteId + '" data-locId="' + locId + '" class="toggleOff">' + $(this).text() + '(' + siteId + ')</li>');
                $(this).remove();
            }
        });
    });

    $('#moveAll').click(function () {
        $('#treeLeft li').each(function () {
            var siteId = $(this).parent().children().eq(2).text();
            var locId = $(this).data('locid');
            var id = $(this).data('id');
            var id1 = $(this).data('id1');
            $("#treeRight").append('<li id="loc' + id1 + '" data-id="' + id + '" data-id1="' + id1 + '" data-siteid="' + siteId + '" data-locid="' + locId + '" class="toggleOff">' + $(this).text() + '(' + siteId + ')</li>');
            $(this).remove();
        });
    });
    $('#getOne').click(function () {
        $('#treeRight li').each(function () {
            if ($(this).hasClass("toggleOn")) {
                var siteId = $(this).data('siteid');
                var locId = $(this).data('locid');
                var id = $(this).data('id');
                var id1 = $(this).data('id1');
                $("#" + id).append('<li id="loc' + id1 + '" data-id="' + id + '" data-id1="' + id1 + '" data-siteId="' + siteId + '" data-locid="' + locId + '" class="toggleOff""><img class="menuImage" src="Images/Location.png" width="24" height="24" border="0"><span>' + locId + '</span></li>');
                $(this).remove();
            }
        });

    });
    $('#getAll').click(function () {
        $('#treeRight li').each(function () {
            var siteId = $(this).data('siteid');
            var locId = $(this).data('locid');
            var id = $(this).data('id');
            var id1 = $(this).data('id1');
            $("#" + id).append('<li id="loc' + id1 + '" data-id="' + id + '" data-id1="' + id1 + '" data-siteId="' + siteId + '" data-locid="' + locId + '" class="toggleOff"><img class="menuImage" src="Images/Location.png" width="24" height="24" border="0"><span>' + locId + '</span></li>');
            $(this).remove();
        });
    });

    $('body').on('click', '#treeLeft ul li', function (event) {
        event.stopPropagation();
        if (!$(this).attr('data-toggled') || $(this).attr('data-toggled') == 'off') {

            $(this).attr('data-toggled', 'on');
            $(this).removeClass("toggleOff").addClass("toggleOn");
        }
        else if ($(this).attr('data-toggled') == 'on') {
            $(this).attr('data-toggled', 'off');
            $(this).removeClass("toggleOn").addClass("toggleOff");
        }
    });



    $('body').on('click', '#treeLeft ul', function () {
        $(this).children("li").slideToggle(function () {
            if ($(this).is(":hidden"))
                $(this).parent().children(':first-child').removeClass("menuMinus").addClass("menuPlus");
            else
                $(this).parent().children(':first-child').removeClass("menuPlus").addClass("menuMinus");

        });
    });

    $('body').on('click', '#treeRight li', function () {
        if (!$(this).attr('data-toggled') || $(this).attr('data-toggled') == 'off') {

            $(this).attr('data-toggled', 'on');
            $(this).removeClass("toggleOff").addClass("toggleOn");
        }
        else if ($(this).attr('data-toggled') == 'on') {
            $(this).attr('data-toggled', 'off');
            $(this).removeClass("toggleOn").addClass("toggleOff");
        }
    });
}

