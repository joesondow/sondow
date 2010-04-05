/**
 * Calculates the browser's tine zone as an offset from GMT
 * 
 * @author Josh Fraser
 * http://www.onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/
 * 
 * @return a negative or positive hour offset from GMT, such as -5 for EST
 */
function calculate_time_zone() {
    
    var convert = function(value) {
        var hours = parseInt(value);
           value -= parseInt(value);
        value *= 60;
        var mins = parseInt(value);
           value -= parseInt(value);
        value *= 60;
        var secs = parseInt(value);
        var display_hours = hours;
        // handle GMT case (00:00)
        if (hours == 0) {
            display_hours = "00";
        } else if (hours > 0) {
            // add a plus sign and perhaps an extra 0
            display_hours = (hours < 10) ? "+0"+hours : "+"+hours;
        } else {
            // add an extra 0 if needed 
            display_hours = (hours > -10) ? "-0"+Math.abs(hours) : hours;
        }
        
        mins = (mins < 10) ? "0"+mins : mins;
        return display_hours+":"+mins;
    }
    
    var rightNow = new Date();
    var jan1Local = new Date(rightNow.getFullYear(), 0, 1, 0, 0, 0, 0);  // jan 1st
    var june1Local = new Date(rightNow.getFullYear(), 6, 1, 0, 0, 0, 0); // june 1st
    var jan1LocalGmtString = jan1Local.toGMTString();
    var jan1Greenwich = new Date(jan1LocalGmtString.substring(0, jan1LocalGmtString.lastIndexOf(" ")-1));
    var june1LocalGmtString = june1Local.toGMTString();
    var june1Greenwich = new Date(june1LocalGmtString.substring(0, june1LocalGmtString.lastIndexOf(" ")-1));
    var hourInMillis = 1000 * 60 * 60;
    var std_time_offset = (jan1Local - jan1Greenwich) / hourInMillis;
    var daylight_time_offset = (june1Local - june1Greenwich) / hourInMillis;
    var dst;
    var hemisphere;
    if (std_time_offset == daylight_time_offset) {
        dst = "0"; // daylight savings time is NOT observed
    } else {
        // positive is southern, negative is northern hemisphere
        hemisphere = std_time_offset - daylight_time_offset;
        if (hemisphere >= 0)
            std_time_offset = daylight_time_offset;
        dst = "1"; // daylight savings time is observed
    }
    
    var i;
    var timeZoneSelect = document.getElementById('timezone');
    if (timeZoneSelect) {
        for (i = 0; i < timeZoneSelect.options.length; i++) {
            if (timeZoneSelect.options[i].value == convert(std_time_offset)+","+dst) {
                timeZoneSelect.selectedIndex = i;
                break;
            }
        }
    }
    
    return std_time_offset;
}

if (jQuery('#outerList').size() > 0) {
    jQuery.get('/checkTimeZone', {'timeZoneOffset' : calculate_time_zone()}, function(data) {
        jQuery('#outerList').prepend(data);
    });
}
