if (jQuery('#outerList').size() > 0) {
    setInterval(function() {
        var elem = jQuery('#outerList > .software > h2');
        elem.animate(
            { 'backgroundPosition': '+600px 0' }, 
            4000, 
            function() {
                elem.css('backgroundPosition', '0 0');
            }
        );
    }, 10000);
}
