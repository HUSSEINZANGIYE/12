$(function () {
    'use strict';
    
    function Confirm(title, msg, $true, $false, action) {
        var $content =  "<div class='dialog-ovelay fadeIn'>" +
                        "<div class='dialog zoomIn'><header>" +
                         " <h3> " + title + " </h3> " +
                         "<i class='fa fa-close'></i>" +
                     "</header>" +
                     "<div class='dialog-msg'>" +
                         " <p> " + msg + " </p> " +
                     "</div>" +
                     "<footer>" +
                         "<div class='controls'>" +
                             " <button class='button button-primary-flat doAction'>" + $true + "</button> " +
                             " <button class='button button-default-flat cancelAction'>" + $false + "</button> " +
                         "</div>" +
                     "</footer>" +
                  "</div>" +
                "</div>";
        
        $('body').prepend($content);
        
        $('body').off('click', '.doAction');
        $('body').on('click', '.doAction', function () {
            $(this).parents('.dialog-ovelay').find('.dialog').removeClass('zoomIn').addClass('zoomOut');
            $(this).parents('.dialog-ovelay').fadeOut(function () {
                $(this).remove();
            });
            action();
        });
        
        $('.cancelAction, .fa-close').click(function () {
            $(this).parents('.dialog-ovelay').find('.dialog').removeClass('zoomIn').addClass('zoomOut');
            $(this).parents('.dialog-ovelay').fadeOut(function () {
                $(this).remove();
            });
        });
    }
    
    
    $('.link').click(function () {
        Confirm('Accounts charge ', 'Click Charge to charge your account', 'Charge ', 'I do not want ', function () {
            window.open('payment');
        });
    });
    
});