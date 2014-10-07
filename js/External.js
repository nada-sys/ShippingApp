function GetParameterValues(param) {
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0] == param) {
            return urlparam[1];
        }
    }
}
function paramReplace(name, string, value) {
    // Find the param with regex
    // Grab the first character in the returned string (should be ? or &)
    // Replace our href string with our new value, passing on the name and delimeter
    var re = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        delimeter = re.exec(string)[0].charAt(0),
        newString = string.replace(re, delimeter + name + "=" + value);

    return newString;
}

