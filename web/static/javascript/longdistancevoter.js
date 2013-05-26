(function() {
    var states, findContainers, setUpAllContainers, setUpContainer, init, widgetContainers;
    states = [
        {'url': '', 'full': 'Choose State'},
        {'url': '/alabama', 'full': 'Alabama'},
        {'url': '/alaska', 'full': 'Alaska'},
        {'url': '/arizona', 'full': 'Arizona'},
        {'url': '/arkansas', 'full': 'Arkansas'},
        {'url': '/california', 'full': 'California'},
        {'url': '/colorado', 'full': 'Colorado'},
        {'url': '/connecticut', 'full': 'Connecticut'},
        {'url': '/delaware', 'full': 'Delaware'},
        {'url': '/district_of_columbia', 'full': 'District of Columbia'},
        {'url': '/florida', 'full': 'Florida'},
        {'url': '/georgia', 'full': 'Georgia'},
        {'url': '/hawaii', 'full': 'Hawaii'},
        {'url': '/idaho', 'full': 'Idaho'},
        {'url': '/illinois', 'full': 'Illinois'},
        {'url': '/indiana', 'full': 'Indiana'},
        {'url': '/iowa', 'full': 'Iowa'},
        {'url': '/kansas', 'full': 'Kansas'},
        {'url': '/kentucky', 'full': 'Kentucky'},
        {'url': '/louisiana', 'full': 'Louisiana'},
        {'url': '/maine', 'full': 'Maine'},
        {'url': '/maryland', 'full': 'Maryland'},
        {'url': '/massachusetts', 'full': 'Massachusetts'},
        {'url': '/michigan', 'full': 'Michigan'},
        {'url': '/minnesota', 'full': 'Minnesota'},
        {'url': '/mississippi', 'full': 'Mississippi'},
        {'url': '/missouri', 'full': 'Missouri'},
        {'url': '/montana', 'full': 'Montana'},
        {'url': '/nebraska', 'full': 'Nebraska'},
        {'url': '/nevada', 'full': 'Nevada'},
        {'url': '/new_hampshire', 'full': 'New Hampshire'},
        {'url': '/new_jersey', 'full': 'New Jersey'},
        {'url': '/new_mexico', 'full': 'New Mexico'},
        {'url': '/new_york', 'full': 'New York'},
        {'url': '/north_carolina', 'full': 'North Carolina'},
        {'url': '/north_dakota', 'full': 'North Dakota'},
        {'url': '/ohio', 'full': 'Ohio'},
        {'url': '/oklahoma', 'full': 'Oklahoma'},
        {'url': '/oregon', 'full': 'Oregon'},
        {'url': '/pennsylvania', 'full': 'Pennsylvania'},
        {'url': '/rhode_island', 'full': 'Rhode Island'},
        {'url': '/south_carolina', 'full': 'South Carolina'},
        {'url': '/south_dakota', 'full': 'South Dakota'},
        {'url': '/tennessee', 'full': 'Tennessee'},
        {'url': '/texas', 'full': 'Texas'},
        {'url': '/utah', 'full': 'Utah'},
        {'url': '/vermont', 'full': 'Vermont'},
        {'url': '/virginia', 'full': 'Virginia'},
        {'url': '/washington', 'full': 'Washington'},
        {'url': '/west_virginia', 'full': 'West Virginia'},
        {'url': '/wisconsin', 'full': 'Wisconsin'},
        {'url': '/wyoming', 'full': 'Wyoming'}
    ];
    setUpContainer = function(container) {
        var option, i, makeWindow, select;
        makeWindow = function() {
            var value = select.options[select.selectedIndex].value;
            if (value) {
                window.open('http://www.longdistancevoter.org' + value, 'longdistancevoter');
            }
        };
        select = document.createElement('SELECT');
        for (i = 0; i < states.length; i++) {
            option = document.createElement('OPTION');
            option.setAttribute('value', states[i].url);
            option.innerHTML = states[i].full;
            select.appendChild(option);
        }
        if (select.addEventListener) {
            select.addEventListener('change', makeWindow, false);
        } else {
            select.attachEvent('onchange', makeWindow);
        }
        container.appendChild(select);
    };
    setUpAllContainers = function() {
        var i;
        for (i = 0; i < widgetContainers.length; i++) {
            setUpContainer(widgetContainers[i]);
        }
    };
    findContainers = function() {
        var divs, containers, k;
        containers = [];
        if (document.getElementsByClassName) {
            containers = document.getElementsByClassName('longdistancevoter');
        } else {
            divs = document.getElementsByTagName('DIV');
            for (k = 0; k < divs.length; k++) {
                if (divs[k].className === 'longdistancevoter') {
                    containers.push(divs[k]);
                }
            }
        }
        return containers;
    };
    init = function() {
        widgetContainers = findContainers();
        if (widgetContainers && widgetContainers.length) { setUpAllContainers(); }
    };
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", init, false)
    } else {
        window.attachEvent('onload', init);
    }
    document.write('<div class="longdistancevoter"></div>');
}());