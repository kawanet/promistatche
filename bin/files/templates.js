if (!!!exports) var exports = {};
exports["help"] = function(G,I,P,S,U,V){return G(['USAGE:   promistache [OPTIONS] FILES\n\nOPTIONS: --tag="{{ }}"                 custom tag delimiter\n         --output="templates.js"       outputs JavaScript file\n         --namespace=""                prepend string to template names\n         --variable="exports"          variable name\n         --runtime                     embed async runtime\n         --runtime="sync"              embed sync runtime\n         --spaces                      preserves white spaces\n\nEXAMPLE: promistache ./templates/*.html > templates.js\n         promistache ./templates/*.html --variable=exports --runtime --output=templates.js\n\nSEE:     ',V("package.homepage"),'\n'])};

!function(t){!function(r){Object.keys(t).forEach(function(k){var o=t[k];t[k]=function(c,a){return(t[k]=r(o))(c,a)}})}(function(exports){"use strict";exports.runtimeSync=function(){var i={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;"};return function(r){return r(t,u,o,n,f,e)};function t(u){return function(n,t){return Array.isArray(u)?y(u.map(r)):r(u);function r(r){return"function"!=typeof r?r:r(n,t)}}}function n(r,n){var u=c(r),i=t(n);return function(r,n){var t=u(r,n);if(Array.isArray(t))return y(t.map(function(r){return i(r,n)}));if(t)return i("object"==typeof t?t:r,n)}}function u(r,n){var u=c(r),i=t(n);return function(r,n){var t=u(r,n);if(!t||Array.isArray(t)&&!t.length)return i(r,n)}}function e(r){var u=c(r);return function(r,n){return"string"!=typeof(t=u(r,n))?t:t.replace(/[<"&>]/g,function(r){return i[r]});var t}}function f(r){return c(r)}function o(r){return c(r,1)}function c(r,e){if("."===r)return a;var f=r.split("."),o=f.length;return function(r,n){var t,u,i=!e&&r;for(u=0;i&&u<o;u++)i=(t=i)[f[u]];if(!i)for(i=n,u=0;i&&u<o;u++)i=(t=i)[f[u]];return"function"==typeof i?i.call(t,r,n):i||void 0}}function a(r){return r}function y(r){return r.join("")}}();return exports.runtimeSync;}({}))}(exports);
