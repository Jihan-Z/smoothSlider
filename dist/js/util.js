!function e(r,s,t){function n(i,o){if(!s[i]){if(!r[i]){var c="function"==typeof require&&require;if(!o&&c)return c(i,!0);if(a)return a(i,!0);throw new Error("Cannot find module '"+i+"'")}var f=s[i]={exports:{}};r[i][0].call(f.exports,function(e){var s=r[i][1][e];return n(s?s:e)},f,f.exports,e,r,s,t)}return s[i].exports}for(var a="function"==typeof require&&require,i=0;i<t.length;i++)n(t[i]);return n}({1:[function(e,r,s){"use strict";var t={addClass:function(e,r){if(e)for(var s=r.split(" "),t=s.length;t--;)e.className=new RegExp("(s*)"+s[t]+"(s*)","ig").test(e.className)&&e.className||(e.className+" "+s[t]).replace(/^\s|\s$/g,"")},removeClass:function(e,r){if(e)for(var s=r.split(" "),t=s.length;t--;)e.className=e.className.replace(new RegExp("(s*)"+s[t]+"(s*)","ig"),"").replace(/^\s|\s$/g,"").replace(/\s+/g," ")}};r.exports=t},{}]},{},[1]);