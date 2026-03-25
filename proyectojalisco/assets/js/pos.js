/**
 * Perfect Scrollbar
 */
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  (function () {
    const articulosscroll = document.getElementById('articulosscroll'),
      listascroll = document.getElementById('listascroll'),
      horizVertExample = document.getElementById('both-scrollbars-example');

    // Vertical Example
    // --------------------------------------------------------------------
    if (articulosscroll) {
      new PerfectScrollbar(articulosscroll, {
        wheelPropagation: false
      });
    }

    // Horizontal Example
    // --------------------------------------------------------------------
    if (listascroll) {
      new PerfectScrollbar(listascroll, {
        wheelPropagation: false
      });
    }

    // Both vertical and Horizontal Example
    // --------------------------------------------------------------------
  })();
});
