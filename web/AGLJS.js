!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AGLJS=t():n.AGLJS=t()}(window,function(){return r={},o.m=e=[function(n,t){AFB=function(n,t){"object"!=typeof n&&(n={base:n,token:t});function e(n,t){this.token=n,this.uuid=t}var c,r,o={base:n.base||"api",token:n.token||t||"HELLO",host:n.host||window.location.host,url:n.url||void 0},i=o.url||"ws://"+o.host+"/"+o.base,u=void 0,a=o.token;e.prototype={get token(){return a},set token(n){n&&(a=n)},get uuid(){return u},set uuid(n){n&&(u=n)}},c=new e;function s(n,t,e,r){if(t in n){var o=n[t];delete n[t];try{o[r](e)}catch(n){}}}return(r=function(n,t){var e=i,r="?";c.token&&(e=e+"?x-afb-token="+c.token,r="&"),c.uuid&&(e=e+r+"x-afb-uuid="+c.uuid),this.ws=new WebSocket(e,["x-afb-ws-json1"]),this.url=e,this.pendings={},this.awaitens={},this.counter=0,this.ws.onopen=function(n){var t=this.onopen;delete this.onopen,delete this.onabort,t&&t(this)}.bind(this),this.ws.onerror=function(n){var t=this.onabort;t&&(delete this.onopen,delete this.onabort,t&&t(this));this.onerror&&this.onerror(this)}.bind(this),this.ws.onclose=function(n){var t={jtype:"afb-reply",request:{status:"disconnected",info:"server hung up"}};for(var e in this.pendings)try{this.pendings[e][1](t)}catch(n){}this.pendings={},this.onclose&&this.onclose()}.bind(this),this.ws.onmessage=function(n){var t=JSON.parse(n.data),e=t[0],r=t[1],o=t[2];switch(c.token=t[3],e){case 3:s(this.pendings,r,o,0);break;case 4:s(this.pendings,r,o,1);break;case 5:default:!function(n,t,e){var r=n[t];r&&r.forEach(function(n){n(e)});var o=t.indexOf("/");0<=o&&(r=n[t.substring(0,o)])&&r.forEach(function(n){n(e)});(r=n["*"])&&r.forEach(function(n){n(e)})}(this.awaitens,r,o)}}.bind(this),this.onopen=n,this.onabort=t}).prototype={close:function(){this.ws.close(),this.ws.onopen=this.ws.onerror=this.ws.onclose=this.ws.onmessage=this.onopen=this.onabort=function(){}},call:function(o,i,u){return new Promise(function(n,t){var e,r;if(u){if((e=String(u))in this.pendings)throw new Error("pending callid("+e+") exists")}else for(;(e=String(this.counter=4095&this.counter+1))in this.pendings;);this.pendings[e]=[n,t],r=[2,e,o,i],c.token&&r.push(c.token),this.ws.send(JSON.stringify(r))}.bind(this))},onevent:function(n,t){var e=n;(this.awaitens[e]||(this.awaitens[e]=[])).push(t)}},{context:c,ws:r}}},function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"call",function(){return g}),e.d(r,"subscribe",function(){return m}),e.d(r,"init",function(){return w});var o={};e.r(o),e.d(o,"list_controls",function(){return y}),e.d(o,"set_volume",function(){return _}),e.d(o,"on_volume_changed",function(){return k}),e.d(o,"on_controls_changed",function(){return x});var i={};e.r(i),e.d(i,"runnables",function(){return j}),e.d(i,"start",function(){return M});var u={};e.r(u),e.d(u,"current_weather",function(){return S}),e.d(u,"api_key",function(){return O});var c={};e.r(c),e.d(c,"adapter_state",function(){return B}),e.d(c,"managed_objects",function(){return P}),e.d(c,"pair",function(){return L}),e.d(c,"cancel_pairing",function(){return E}),e.d(c,"confirm_pairing",function(){return A}),e.d(c,"remove_device",function(){return J}),e.d(c,"connect",function(){return T}),e.d(c,"disconnect",function(){return W}),e.d(c,"on_device_changes",function(){return F});var a={};e.r(a),e.d(a,"technologies",function(){return G}),e.d(a,"services",function(){return H}),e.d(a,"scan_services",function(){return N}),e.d(a,"on_global_state",function(){return q});var s={};e.r(s),e.d(s,"showWindow",function(){return R});var f={};e.r(f),e.d(f,"list",function(){return U}),e.d(f,"get",function(){return z});var d={};e.r(d),e.d(d,"playlist",function(){return C}),e.d(d,"pickTrack",function(){return D}),e.d(d,"loop",function(){return I}),e.d(d,"seek",function(){return K}),e.d(d,"play",function(){return Q}),e.d(d,"pause",function(){return V}),e.d(d,"previous",function(){return X}),e.d(d,"next",function(){return Y}),e.d(d,"on_playlist_changes",function(){return Z}),e.d(d,"on_metadata_changes",function(){return $});e(0);var l,h=document.location.hostname,p=document.location.port,v=new URLSearchParams(document.location.search.substring(1)),b=v.get("x-afb-token")||v.get("token")||"HELLO";function g(r,o){return new Promise(function(t,e){var n=new l.ws(function(){n.call(r,o).then(function(n){t(n.response)},function(n){e(n)})},function(){e("ws aborted")})})}function m(o,i,u){return new Promise(function(e,t){var r=new l.ws(function(){r.call(o,i).then(function(n){var t=o.split("/")[0]+"/"+(i.value?i.value:i.event);r.onevent(t,function(n){u(n.data)}),e()},function(n){t(n)})},function(){t("ws aborted")})})}function w(){l=new AFB({host:h+":"+p,token:b})}function y(){return g("audiomixer/list_controls",{})}function _(n,t){return g("audiomixer/volume",{control:n,value:t})}function k(n){return m("audiomixer/subscribe",{event:"volume_changed"},n)}function x(n){return m("audiomixer/subscribe",{event:"controls_changed"},n)}function j(){return g("afm-main/runnables",{})}function M(n){return g("afm-main/start",{id:n})}function S(){return g("weather/current_weather",{})}function O(n){return g("weather/api_key",{value:n})}function B(n){return g("Bluetooth-Manager/adapter_state",n||{})}function P(){return g("Bluetooth-Manager/managed_objects",{})}function L(n){return g("Bluetooth-Manager/pair",{device:n})}function E(){return g("Bluetooth-Manager/cancel_pairing",{})}function A(n){return g("Bluetooth-Manager/confirm_pairing",{pincode:n})}function J(n){return g("Bluetooth-Manager/remove_device",{device:n})}function T(n){return g("Bluetooth-Manager/connect",{device:n})}function W(n){return g("Bluetooth-Manager/disconnect",{device:n})}function F(n){return m("Bluetooth-Manager/subscribe",{value:"device_changes"},n)}function G(){return g("network-manager/technologies",{})}function H(){return g("network-manager/services",{})}function N(n){return g("network-manager/scan_services",n)}function q(n){return m("network-manager/subscribe",{value:"global_state"},n)}function R(n){return g("homescreen/showWindow",{application_id:n,parameter:{area:"normal.full"}})}function U(){return g("low-can/list",{})}function z(n){return g("low-can/get",{event:n})}function C(){return g("mediaplayer/playlist",{})}function D(n){return g("mediaplayer/controls",{value:"pick-track",index:n})}function I(n){return g("mediaplayer/controls",{value:"loop"})}function K(n){return g("mediaplayer/controls",{value:"seek",position:n})}function Q(){return g("mediaplayer/controls",{value:"play"})}function V(){return g("mediaplayer/controls",{value:"pause"})}function X(){return g("mediaplayer/controls",{value:"previous"})}function Y(){return g("mediaplayer/controls",{value:"next"})}function Z(n){return m("mediaplayer/subscribe",{value:"playlist"},n)}function $(n){return m("mediaplayer/subscribe",{value:"metadata"},n)}e.d(t,"audiomixer",function(){return o}),e.d(t,"afmMain",function(){return i}),e.d(t,"weather",function(){return u}),e.d(t,"bluetooth",function(){return c}),e.d(t,"network",function(){return a}),e.d(t,"homescreen",function(){return s}),e.d(t,"lowcan",function(){return f}),e.d(t,"mediaplayer",function(){return d}),e.d(t,"api",function(){return r}),w()}],o.c=r,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="",o(o.s=1);function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var e,r});