/*
 * FlexboxDetective v1.0 
 * https://github.com/dmmikkel/FlexboxDetective
 * 
 * Copyright (c) 2013, Dag Martin Mikkelsen
 * Licensed under the MIT license.
 */

window.onload = function() {
    var h = document.body.parentNode;
    var e = document.createElement("div");

    e.style.display = "flex";
    if (e.style.display === "flex") {
        h.className += " flexbox";
    }
    else {
        e.style.display = "-webkit-flex";
        if (e.style.display === "-webkit-flex")
            h.className += " flexbox";
    }
    if ("flexWrap" in document.body.style || "WebkitFlexWrap" in document.body.style)
        h.className += " flex-wrap";
}
