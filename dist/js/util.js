(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var util = {
  addClass: function addClass(el, name) {
    if (!el) {
      return;
    }
    var nameList = name.split(' ');
    var i = nameList.length;
    while (i--) {
      el.className = new RegExp('(\s*)' + nameList[i] + '(\s*)', 'ig').test(el.className) && el.className || (el.className + ' ' + nameList[i]).replace(/^\s|\s$/g, '');
    }
  },
  removeClass: function removeClass(el, name) {
    if (!el) {
      return;
    }
    var nameList = name.split(' ');
    var i = nameList.length;
    while (i--) {
      el.className = el.className.replace(new RegExp('(\s*)' + nameList[i] + '(\s*)', 'ig'), '').replace(/^\s|\s$/g, '').replace(/\s+/g, ' ');
    }
  }
};

module.exports = util;

},{}]},{},[1])