function parse(sly) {

    $.ajaxSetup({
        async: false,
        headers: {
            'Authorization': 'Bearer bd9615e2871c56dddd8b88b576f131f51c20f3bc'
        }
    });

    $.getJSON("models.json", function (data) {
        $.each(data, function (key, val) {
            var present;
            if (val.end_date == 9999) {
                val.end_date = (new Date).getFullYear();
                present = 1;
            }

            var years = val.end_date - val.start_date + 1;
            var linewidth = (years * 130) - 30;
            var offset = ((val.start_date - 1896) * 130) + 15;

            if (present == 1) {
                present = 'present';
            } else {
                present = val.end_date;
            }

            $('<div/>', {
                id: val.start_date + '_' + val.id,
                class: 'timeline-grid-line model-line is-hidden',
                style: 'margin-left:' + offset + 'px; width:' + linewidth + 'px',
                'data-end-date': val.end_date,
                'data-start-date': val.start_date,
                html: '<span class="model-tx">' + val.title + ' (' + val.start_date + '-' + present + ')' + '</span>'
            }).prependTo('.timeline-model-list');
        });
    }).fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });

    for (var i = 1896; i < sly.rel.lastItem + 1897; i++) {
        $('[id^=' + i + '_]').removeClass('is-hidden').addClass('is-active');
    }
}

function parseItem(item) {

    if (item.id == undefined) {
        return;
    }

    $.getJSON("/api/web/models/by-date/" + item.id, function (data) {
        $('.timeline-grid-popover').find('.years').html(item.id);
        $('.timeline-grid-popover').find('.popover-model-list-item').remove();

        $.each(data, function (key, val) {
            var present = val.end_date == 9999 ? 'present' : val.end_date;

            var html = '<li class="popover-model-list-item">' +
                '<div class="popover-model-list-item-img">' +
                '<img src="http://placehold.it/108x72" alt=""></div>' +
                '<div class="popover-model-list-item-info">' +
                '<div class="list-item-name">' +
                '<span class="icon icon-arrow-left"></span> ' + val.title + '</div>' +
                '<div class="list-item-years">' + val.start_date + '-' + present + '</div></div></li>';
            if (item.id == val.start_date) {
                $('.timeline-grid-popover').find('.new-model').append(html);
            } else {
                $('.timeline-grid-popover').find('.actual-model').append(html);
            }

        });
    }).fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });
}