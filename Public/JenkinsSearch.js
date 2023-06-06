// ==UserScript==
// @name         jenkins 搜尋框
// @source       https://github.com/stan60250/Browser-Scripts/raw/main/JenkinsSearch.js
// @namespace    https://github.com/stan60250/Browser-Scripts/raw/main/JenkinsSearch.js
// @version      0.1
// @description  jenkins 搜尋框
// @match        *://*/job/*/build*
// @icon         https://www.jenkins.io//favicon.ico
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js
// @resource     select2css https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function() {
    'use strict';

    var select2css = GM_getResourceText ("select2css");
    GM_addStyle (select2css);

    $("select").select2({
        width: '100%'
    });

    $(document).ready(function () {
        $("select").select2({
            width: '100%'
        });
    });

})();