/**
 * botw-tracker user profile scripts
 *
 * Copyright (c) 2017, Evan Moritz.
 * 
 * botw-tracker is an open source software project released under the MIT License.
 * See the accompanying LICENSE file for terms.
 *
 */
requirejs.config({
    paths: {
        "jquery": "/static/lib/jquery-3.2.1.min"
    }
});

requirejs(['jquery'], function($) {
    var ATTRIBUTE = 'data-quests-active';
    var hashchangeEvent = $(window).on('hashchange', function() {
        var hash = location.hash.substr(1);
        $('[' + ATTRIBUTE + ']').each(function(index, container) {
            $(container).attr(ATTRIBUTE, 'False');
        });
        $("#" + hash).attr(ATTRIBUTE, 'True');
    });
    $(document).ready(function() {
        $(".quests-undiscovered-dropdown").each(function(index, el) {
            var quest_type = $(el).attr('data-quest-type');
            $(el).click(function() {
                var block = $(".quests-undiscovered[data-quest-type=" + quest_type + "]");
                if (block.css("display") === "block") {
                    $(el).text("+");
                    block.css("display", "none");
                } else {
                    $(el).text("-");
                    block.css("display", "block");
                }
            });
        });
        if (location.hash) {
            hashchangeEvent.trigger('hashchange');
        } else {
            location.hash = $("#quests-container :first-child").attr('id');
        }
    });
});