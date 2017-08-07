(function () {
  'use strict';

  var gaProperty = 'UA-25380313-7';
  var gaOptOutProperty = 'ga-disable-' + gaProperty;
  if (document.cookie.indexOf(gaOptOutProperty + '=true') > -1) {
    window[gaOptOutProperty] = true;
  }

  (function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

  ga('create', gaProperty, 'auto');
  ga('require', 'linkid', 'linkid.js');
  ga('send', 'pageview');

  var disableStr = 'ga-disable-' + gaProperty;
  if (document.cookie.indexOf(disableStr + '=true') > -1) {
    window[disableStr] = true;
  }

  // Opt-out function
  function gaOptout() {
    document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    window[disableStr] = true;
  }

  window.gaOptout = gaOptout;

  window.addEventListener("hashchange", function hashChange() {
    var hash = location.hash;
    var header = document.querySelector(hash);
    var title = header.textContent || header.innerText;
    ga('send', 'pageview', {
      'page': location.pathname + location.search + location.hash,
      'title': title
    });
  }, false);
})();
