(function() {
  var config = {};
  config.minRowCount = 10;
  config.focusFirstInput = true;
  config.headerRowCount = 1;

  var prepareTableRows = function(table) {
    var r, c, row, cells, text;
    var rows = table.rows;
    for (r = 0; r < rows.length; r++) {
      row = rows[r];
      text = '';
      cells = row.cells;
      for (c = 0; c < cells.length; c++) {
        text += cells[c].innerHTML + ' ';
      }
      row.filterContent = text.toLowerCase();
    }
    return true;
  };

  var runFilter = function(table) {
    var r, row;
    var filterTerm = this.value.toLowerCase();
    var rows = table.rows;
    for (r = 0; r < rows.length; r++) {
      if (!config.headerRowCount || r >= config.headerRowCount) {
        row = rows[r];
        row.style.display = row.filterContent.indexOf(filterTerm) >= 0 ? '' : 'none';
      }
    }
    return true;
  };

  var addFilter = function(table, isFirstTable) {
    // Avoid adding two inputs for a table on back button press
    if (table.filterInput) {
      return;
    }
    var label = document.createElement('LABEL');
    var labelText = document.createTextNode('Filter: ');
    label.appendChild(labelText);
    var input = document.createElement('INPUT');
    input.type = 'text';
    input.onkeyup = function() { runFilter.call(input, table); };
    table.filterInput = input;
    prepareTableRows(table);
    table.parentNode.insertBefore(input, table);
    input.parentNode.insertBefore(label, input);
    if (config.focusFirstInput && isFirstTable) {
      input.focus();
      input.value = input.value; // Move cursor to end of text
    }
  };

  var setUpFilters = function() {
    var tables = document.getElementsByTagName('TABLE');
    var i, table;
    for (i = 0; i < tables.length; i++) {
      table = tables[i];
      if (!config.minRowCount || table.rows.length > config.minRowCount) {
        addFilter(table, i === 0);
      }
    }
  };

  if (window.attachEvent) {
    window.attachEvent('onload', setUpFilters);
  }
  else if (window.addEventListener) {
    window.addEventListener('load', setUpFilters, false);
  }
})();
