$(document).ready(function () {
    // Hide loading spinner
    $('.loading-spinner').removeClass('show');

    const darkModeToggle = $('#dark-mode-toggle');
    const darkModeToggleMobile = $('#dark-mode-toggle-mobile');
    const menuToggle = $('#menu-toggle');
    const mobileMenu = $('#mobile-menu');

    // Dark Mode Toggle
    darkModeToggle.click(function () {
        $('body').toggleClass('dark-mode light-mode');
        if ($('body').hasClass('dark-mode')) {
            $('#dark-mode-toggle').text('Light Mode');
            $('#dark-mode-toggle-mobile').text('Light Mode');
        } else {
            $('#dark-mode-toggle').text('Dark Mode');
            $('#dark-mode-toggle-mobile').text('Dark Mode');
        }
    });

    darkModeToggleMobile.click(function () {
        $('body').toggleClass('dark-mode light-mode');
        if ($('body').hasClass('dark-mode')) {
            $('#dark-mode-toggle').text('Light Mode');
            $('#dark-mode-toggle-mobile').text('Light Mode');
        } else {
            $('#dark-mode-toggle').text('Dark Mode');
            $('#dark-mode-toggle-mobile').text('Dark Mode');
        }
    });

    // Mobile Menu Toggle
    menuToggle.click(function () {
        mobileMenu.toggleClass('hidden');
    });

});