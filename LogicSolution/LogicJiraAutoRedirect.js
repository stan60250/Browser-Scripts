// ==UserScript==
// @name         logicjira 自動轉址
// @source       https://github.com/stan60250/Browser-Scripts/raw/main/LogicSolution/LogicJiraAutoRedirect.js
// @namespace    https://github.com/stan60250/Browser-Scripts/raw/main/LogicSolution/LogicJiraAutoRedirect.js
// @version      0.1
// @description  logicjira 自動轉址
// @match        http://*/*
// @icon         https://logicjira.atlassian.net/images/jira-safari-pintab-icon.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var OLD_ADDRESS = "lsjiranew.logicsolutions.com.cn";
    var NEW_ADDRESS = "logicjira.atlassian.net";

    /**
     * Convert a node list to array.
     * @returns {Array.<HTMLElement>}
     */
    NodeList.prototype.toArray = function () {
        var that = this;
        return Array.prototype.slice.call(that);
    };

    var currentAddress = location.href.split('//')[1];
    if (currentAddress.startsWith(OLD_ADDRESS)) {
        // Check whether current page is of the old address and
        // redirect if so.
        var targetAddress = location.href.replace(OLD_ADDRESS, NEW_ADDRESS);
        console.log("Redirecting to " + targetAddress + "...");
        location.replace(targetAddress);
    } else {
        // otherwise check all href link and replace them with new address
        addEventListener('load', function (event) {
            var targetElements = document.querySelectorAll("[href*=\"" + OLD_ADDRESS + "\"]").toArray();
            targetElements.forEach(function (element) {
                var newAddress = element.getAttribute('href').replace(OLD_ADDRESS, NEW_ADDRESS);
                console.log("Redirecting " + element.getAttribute('href') + " to " + newAddress + "...");
                element.setAttribute('href', newAddress);
            });
        });
    }

})();