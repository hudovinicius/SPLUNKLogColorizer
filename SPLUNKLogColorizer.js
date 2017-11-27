// ==UserScript==
// @name         SPLUNKLogColorizer
// @include      */app/search/show_source*
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Hudo Salvador
// @homepageURL  https://github.com/hudovinicius/SPLUNKLogColorizer
// @grant        none
// @updateUrl http://raw.githubusercontent.com/hudovinicius/SPLUNKLogColorizer/master/SPLUNKLogColorizer.js
// @downloadUrl https://raw.githubusercontent.com/hudovinicius/SPLUNKLogColorizer/master/SPLUNKLogColorizer.js
// ==/UserScript==

(function() {
    'use strict';
    $( document ).ajaxComplete(function( event, xhr, settings ) {
        $(".resultsArea ").css('background', 'black');
        $(".perPageLabel, .SoftWrap").css('color', 'white');
        $(".sourceText pre").each(function(){
            var str = $(this).html();
            if (str.indexOf("Error") >= 0 || str.indexOf("error") >= 0 || str.indexOf("ERROR") >= 0){
                $(this).css('color', 'red');
            } else if(str.indexOf("Warning") >= 0 || str.indexOf("warning") >= 0 || str.indexOf("WARNING") >= 0){
                $(this).css('color', 'yellow');
            } else if(str.indexOf("Info") >= 0 || str.indexOf("info") >= 0 || str.indexOf("INFO") >= 0){
                $(this).css('color', '#01f301');
            } else {
                $(this).css('color', 'white');
            }
        });
        $(".SourceLineHL").css('background', 'white');
        $(".SourceLineHL pre").css('font-weight', 'bold');
        $(".SourceLineHL pre").css('color', 'black');
    });
})();