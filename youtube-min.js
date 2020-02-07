/**
 * matter-js 0.14.2 by @liabru 2018-06-11
 * http://brm.io/matter-js/
 * License MIT
 */

/**
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.Matter = f()
    }
})(function() {
    var define, module, exports;
    return (function() {
        function r(e, n, t) {
            function o(i, f) {
                if (!n[i]) {
                    if (!e[i]) {
                        var c = "function" == typeof require && require;
                        if (!f && c) return c(i, !0);
                        if (u) return u(i, !0);
                        var a = new Error("Cannot find module '" + i + "'");
                        throw a.code = "MODULE_NOT_FOUND", a
                    }
                    var p = n[i] = {
                        exports: {}
                    };
                    e[i][0].call(p.exports, function(r) {
                        var n = e[i][1][r];
                        return o(n || r)
                    }, p, p.exports, r, e, n, t)
                }
                return n[i].exports
            }
            for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
            return o
        }
        return r
    })()({
        1: [function(_dereq_, module, exports) {
           
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                _sister = require("sister"),
                _sister2 = _interopRequireDefault(_sister),
                _loadYouTubeIframeApi = require("./loadYouTubeIframeApi"),
                _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi),
                _YouTubePlayer = require("./YouTubePlayer"),
                _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);
        
            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var youtubeIframeAPI = void 0;
            exports.default = function(e) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = (0, _sister2.default)();
                if (youtubeIframeAPI || (youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(r)), o.events) throw new Error("Event handlers cannot be overwritten.");
                if ("string" == typeof e && !document.getElementById(e)) throw new Error('Element "' + e + '" does not exist.');
                o.events = _YouTubePlayer2.default.proxyEvents(r);
                var u = new Promise(function(t) {
                        "object" === (void 0 === e ? "undefined" : _typeof(e)) && e.playVideo instanceof Function ? t(e) : youtubeIframeAPI.then(function(u) {
                            var n = new u.Player(e, o);
                            return r.on("ready", function() {
                                t(n)
                            }), null
                        })
                    }),
                    n = _YouTubePlayer2.default.promisifyPlayer(u, t);
                return n.on = r.on, n.off = r.off, n
            }

            module.exports = exports.default;

        }, {
        }]
    }, {}, [30])(30)
});