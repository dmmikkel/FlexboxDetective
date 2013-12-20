/*
 * FlexboxDetective v1.0 
 * https://github.com/dmmikkel/FlexboxDetective
 * 
 * Copyright (c) 2013, Dag Martin Mikkelsen
 * Licensed under the MIT license.
 */

window.onload = function() {
    var htmlEl = document.body.parentNode;
    var testEl = document.createElement("div");

    // Test for display: flex
    testEl.style.display = "flex";
    if (testEl.style.display === "flex") {
        // Prepend a space if other classes already exist on html-element
        if (htmlEl.className.length > 0) htmlEl.className += " "
        htmlEl.className += "flexbox";
    }
    else {
        testEl.style.display = "-webkit-flex";
        if (testEl.style.display === "-webkit-flex")
            htmlEl.className += " flexbox";
    }

    // Test for flex-wrap property
    if ("flexWrap" in document.body.style || "WebkitFlexWrap" in document.body.style)
        htmlEl.className += " flex-wrap";

    // Test for order property
    if ("order" in document.body.style || "WebkitOrder" in document.body.style)
        htmlEl.className += " order";
}
