jQuery(window).on('load', function() {

    jQuery('.rev_slider').each(function() {

        var ids = jQuery(this).attr('id').split('rev_slider_')[1].split('_')[0],
        api  = eval('revapi' + ids);

        api.on('revolution.slide.onchange', function(e, data) {

            var data = 'Slider ' + ids + ' changed to slide #' + data.slideIndex;
            gtag('event', 'click', { event_category: 'outbound', event_action: 'click', event_label: data});

        });

    });

});
