window.cytubeEnhanced.getModule('themes').done(function (extraModules) {
    extraModules.add({
        title: 'My cool theme', //name in themes list
        name: 'my_cool_theme', //system theme name
        cssUrl: 'https://rawgit.com/kaba99/cytube-enhanced-theme-template/master/theme/theme.css', //path to theme css
        jsUrl: 'https://rawgit.com/kaba99/cytube-enhanced-theme-template/master/theme/theme.js', //path to theme js
        pictureUrl: 'https://rawgit.com/kaba99/cytube-enhanced-theme-template/master/theme/screenshot.png' //theme image in themes list
    });
});