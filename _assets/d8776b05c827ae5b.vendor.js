/*! For license information please see d8776b05c827ae5b.vendor.js.LICENSE.txt */
(self.webpackChunk_canva_web = self.webpackChunk_canva_web || []).push([
    [67766], {
        907554: (e, t, n) => {
            ! function() {
                var e = "undefined" != typeof window ? window : n.g,
                    i = {};
                for (var r in function(e, t, n) {
                        var i;

                        function a(e) {
                            var t = 0;
                            return function() {
                                return t < e.length ? {
                                    done: !1,
                                    value: e[t++]
                                } : {
                                    done: !0
                                }
                            }
                        }
                        var o = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                            return e == Array.prototype || e == Object.prototype || (e[t] = n.value), e
                        };
                        var s = function(n) {
                            n = ["object" == typeof globalThis && globalThis, n, "object" == typeof e && e, "object" == typeof self && self, "object" == typeof t && t];
                            for (var i = 0; i < n.length; ++i) {
                                var r = n[i];
                                if (r && r.Math == Math) return r
                            }
                            throw Error("Cannot find global object")
                        }(this);

                        function u(e, t) {
                            if (t) e: {
                                var n = s;e = e.split(".");
                                for (var i = 0; i < e.length - 1; i++) {
                                    var r = e[i];
                                    if (!(r in n)) break e;
                                    n = n[r]
                                }(t = t(i = n[e = e[e.length - 1]])) != i && null != t && o(n, e, {
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        }

                        function l(e) {
                            return (e = {
                                next: e
                            })[Symbol.iterator] = function() {
                                return this
                            }, e
                        }

                        function c(e) {
                            var t = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
                            return t ? t.call(e) : {
                                next: a(e)
                            }
                        }

                        function d(e) {
                            if (!(e instanceof Array)) {
                                e = c(e);
                                for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                                e = n
                            }
                            return e
                        }
                        u("Symbol", (function(e) {
                            function t(e, t) {
                                this.g = e, o(this, "description", {
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                            if (e) return e;
                            t.prototype.toString = function() {
                                return this.g
                            };
                            var n = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_",
                                i = 0;
                            return function e(r) {
                                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                                return new t(n + (r || "") + "_" + i++, r)
                            }
                        })), u("Symbol.iterator", (function(e) {
                            if (e) return e;
                            e = Symbol("Symbol.iterator");
                            for (var t = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), n = 0; n < t.length; n++) {
                                var i = s[t[n]];
                                "function" == typeof i && "function" != typeof i.prototype[e] && o(i.prototype, e, {
                                    configurable: !0,
                                    writable: !0,
                                    value: function() {
                                        return l(a(this))
                                    }
                                })
                            }
                            return e
                        }));
                        var h, f = "function" == typeof Object.create ? Object.create : function(e) {
                            function t() {}
                            return t.prototype = e, new t
                        };
                        if ("function" == typeof Object.setPrototypeOf) h = Object.setPrototypeOf;
                        else {
                            var p;
                            e: {
                                var g = {};
                                try {
                                    g.__proto__ = {
                                        a: !0
                                    }, p = g.a;
                                    break e
                                } catch (bp) {}
                                p = !1
                            }
                            h = p ? function(e, t) {
                                if (e.__proto__ = t, e.__proto__ !== t) throw new TypeError(e + " is not extensible");
                                return e
                            } : null
                        }
                        var m = h;

                        function v(e, t) {
                            if (e.prototype = f(t.prototype), e.prototype.constructor = e, m) m(e, t);
                            else
                                for (var n in t)
                                    if ("prototype" != n)
                                        if (Object.defineProperties) {
                                            var i = Object.getOwnPropertyDescriptor(t, n);
                                            i && Object.defineProperty(e, n, i)
                                        } else e[n] = t[n];
                            e.zg = t.prototype
                        }

                        function y() {
                            this.o = !1, this.l = null, this.h = void 0, this.g = 1, this.j = this.m = 0, this.u = this.i = null
                        }

                        function b(e) {
                            if (e.o) throw new TypeError("Generator is already running");
                            e.o = !0
                        }

                        function w(e, t) {
                            e.i = {
                                me: t,
                                ue: !0
                            }, e.g = e.m || e.j
                        }

                        function x(e, t, n) {
                            return e.g = n, {
                                value: t
                            }
                        }

                        function T(e) {
                            e.g = 0
                        }

                        function S(e, t, n) {
                            e.m = t, null != n && (e.j = n)
                        }

                        function A(e, t, n) {
                            e.g = t, e.m = n || 0
                        }

                        function k(e, t) {
                            return e.m = t || 0, t = e.i.me, e.i = null, t
                        }

                        function E(e) {
                            e.u = [e.i], e.m = 0, e.j = 0
                        }

                        function C(e) {
                            var t = e.u.splice(0)[0];
                            (t = e.i = e.i || t) ? t.ue ? e.g = e.m || e.j : null != t.B && e.j < t.B ? (e.g = t.B, e.i = null) : e.g = e.j: e.g = 0
                        }

                        function I(e) {
                            this.g = new y, this.h = e
                        }

                        function M(e, t, n, i) {
                            try {
                                var r = t.call(e.g.l, n);
                                if (!(r instanceof Object)) throw new TypeError("Iterator result " + r + " is not an object");
                                if (!r.done) return e.g.o = !1, r;
                                var a = r.value
                            } catch (o) {
                                return e.g.l = null, w(e.g, o), D(e)
                            }
                            return e.g.l = null, i.call(e.g, a), D(e)
                        }

                        function D(e) {
                            for (; e.g.g;) try {
                                var t = e.h(e.g);
                                if (t) return e.g.o = !1, {
                                    value: t.value,
                                    done: !1
                                }
                            } catch (n) {
                                e.g.h = void 0, w(e.g, n)
                            }
                            if (e.g.o = !1, e.g.i) {
                                if (t = e.g.i, e.g.i = null, t.ue) throw t.me;
                                return {
                                    value: t.return,
                                    done: !0
                                }
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }

                        function R(e) {
                            this.next = function(t) {
                                return b(e.g), e.g.l ? t = M(e, e.g.l.next, t, e.g.s) : (e.g.s(t), t = D(e)), t
                            }, this.throw = function(t) {
                                return b(e.g), e.g.l ? t = M(e, e.g.l.throw, t, e.g.s) : (w(e.g, t), t = D(e)), t
                            }, this.return = function(t) {
                                return function(e, t) {
                                    b(e.g);
                                    var n = e.g.l;
                                    return n ? M(e, "return" in n ? n.return : function(e) {
                                        return {
                                            value: e,
                                            done: !0
                                        }
                                    }, t, e.g.return) : (e.g.return(t), D(e))
                                }(e, t)
                            }, this[Symbol.iterator] = function() {
                                return this
                            }
                        }

                        function _(e) {
                            return function(e) {
                                function t(t) {
                                    return e.next(t)
                                }

                                function n(t) {
                                    return e.throw(t)
                                }
                                return new Promise((function(i, r) {
                                    ! function e(a) {
                                        a.done ? i(a.value) : Promise.resolve(a.value).then(t, n).then(e, r)
                                    }(e.next())
                                }))
                            }(new R(new I(e)))
                        }

                        function P() {
                            for (var e = Number(this), t = [], n = e; n < arguments.length; n++) t[n - e] = arguments[n];
                            return t
                        }

                        function L(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }

                        function N(e, t, n) {
                            e instanceof String && (e = String(e));
                            for (var i = e.length, r = 0; r < i; r++) {
                                var a = e[r];
                                if (t.call(n, a, r, e)) return {
                                    re: r,
                                    v: a
                                }
                            }
                            return {
                                re: -1,
                                v: void 0
                            }
                        }

                        function j(e, t, n) {
                            if (null == e) throw new TypeError("The 'this' value for String.prototype." + n + " must not be null or undefined");
                            if (t instanceof RegExp) throw new TypeError("First argument to String.prototype." + n + " must not be a regular expression");
                            return e + ""
                        }

                        function O(e, t) {
                            e instanceof String && (e += "");
                            var n = 0,
                                i = !1,
                                r = {
                                    next: function() {
                                        if (!i && n < e.length) {
                                            var r = n++;
                                            return {
                                                value: t(r, e[r]),
                                                done: !1
                                            }
                                        }
                                        return i = !0, {
                                            done: !0,
                                            value: void 0
                                        }
                                    }
                                };
                            return r[Symbol.iterator] = function() {
                                return r
                            }, r
                        }
                        y.prototype.s = function(e) {
                            this.h = e
                        }, y.prototype.return = function(e) {
                            this.i = {
                                return: e
                            }, this.g = this.j
                        }, y.prototype.B = function(e) {
                            this.g = e
                        }, u("Promise", (function(e) {
                            function t(e) {
                                this.h = 0, this.i = void 0, this.g = [], this.o = !1;
                                var t = this.j();
                                try {
                                    e(t.resolve, t.reject)
                                } catch (r) {
                                    t.reject(r)
                                }
                            }

                            function n() {
                                this.g = null
                            }

                            function i(e) {
                                return e instanceof t ? e : new t((function(t) {
                                    t(e)
                                }))
                            }
                            if (e) return e;
                            n.prototype.h = function(e) {
                                if (null == this.g) {
                                    this.g = [];
                                    var t = this;
                                    this.i((function() {
                                        t.l()
                                    }))
                                }
                                this.g.push(e)
                            };
                            var a = s.setTimeout;
                            n.prototype.i = function(e) {
                                a(e, 0)
                            }, n.prototype.l = function() {
                                for (; this.g && this.g.length;) {
                                    var e = this.g;
                                    this.g = [];
                                    for (var t = 0; t < e.length; ++t) {
                                        var n = e[t];
                                        e[t] = null;
                                        try {
                                            n()
                                        } catch (i) {
                                            this.j(i)
                                        }
                                    }
                                }
                                this.g = null
                            }, n.prototype.j = function(e) {
                                this.i((function() {
                                    throw e
                                }))
                            }, t.prototype.j = function() {
                                function e(e) {
                                    return function(i) {
                                        n || (n = !0, e.call(t, i))
                                    }
                                }
                                var t = this,
                                    n = !1;
                                return {
                                    resolve: e(this.D),
                                    reject: e(this.l)
                                }
                            }, t.prototype.D = function(e) {
                                if (e === this) this.l(new TypeError("A Promise cannot resolve to itself"));
                                else if (e instanceof t) this.I(e);
                                else {
                                    e: switch (typeof e) {
                                        case "object":
                                            var n = null != e;
                                            break e;
                                        case "function":
                                            n = !0;
                                            break e;
                                        default:
                                            n = !1
                                    }
                                    n ? this.C(e) : this.m(e)
                                }
                            }, t.prototype.C = function(e) {
                                var t = void 0;
                                try {
                                    t = e.then
                                } catch (r) {
                                    return void this.l(r)
                                }
                                "function" == typeof t ? this.K(t, e) : this.m(e)
                            }, t.prototype.l = function(e) {
                                this.s(2, e)
                            }, t.prototype.m = function(e) {
                                this.s(1, e)
                            }, t.prototype.s = function(e, t) {
                                if (0 != this.h) throw Error("Cannot settle(" + e + ", " + t + "): Promise already settled in state" + this.h);
                                this.h = e, this.i = t, 2 === this.h && this.F(), this.u()
                            }, t.prototype.F = function() {
                                var e = this;
                                a((function() {
                                    if (e.A()) {
                                        var t = s.console;
                                        void 0 !== t && t.error(e.i)
                                    }
                                }), 1)
                            }, t.prototype.A = function() {
                                if (this.o) return !1;
                                var e = s.CustomEvent,
                                    t = s.Event,
                                    n = s.dispatchEvent;
                                return void 0 === n || ("function" == typeof e ? e = new e("unhandledrejection", {
                                    cancelable: !0
                                }) : "function" == typeof t ? e = new t("unhandledrejection", {
                                    cancelable: !0
                                }) : (e = s.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection", !1, !0, e), e.promise = this, e.reason = this.i, n(e))
                            }, t.prototype.u = function() {
                                if (null != this.g) {
                                    for (var e = 0; e < this.g.length; ++e) o.h(this.g[e]);
                                    this.g = null
                                }
                            };
                            var o = new n;
                            return t.prototype.I = function(e) {
                                var t = this.j();
                                e.zc(t.resolve, t.reject)
                            }, t.prototype.K = function(e, t) {
                                var n = this.j();
                                try {
                                    e.call(t, n.resolve, n.reject)
                                } catch (i) {
                                    n.reject(i)
                                }
                            }, t.prototype.then = function(e, n) {
                                function i(e, t) {
                                    return "function" == typeof e ? function(t) {
                                        try {
                                            r(e(t))
                                        } catch (n) {
                                            a(n)
                                        }
                                    } : t
                                }
                                var r, a, o = new t((function(e, t) {
                                    r = e, a = t
                                }));
                                return this.zc(i(e, r), i(n, a)), o
                            }, t.prototype.catch = function(e) {
                                return this.then(void 0, e)
                            }, t.prototype.zc = function(e, t) {
                                function n() {
                                    switch (i.h) {
                                        case 1:
                                            e(i.i);
                                            break;
                                        case 2:
                                            t(i.i);
                                            break;
                                        default:
                                            throw Error("Unexpected state: " + i.h)
                                    }
                                }
                                var i = this;
                                null == this.g ? o.h(n) : this.g.push(n), this.o = !0
                            }, t.resolve = i, t.reject = function(e) {
                                return new t((function(t, n) {
                                    n(e)
                                }))
                            }, t.race = function(e) {
                                return new t((function(t, n) {
                                    for (var r = c(e), a = r.next(); !a.done; a = r.next()) i(a.value).zc(t, n)
                                }))
                            }, t.all = function(e) {
                                var n = c(e),
                                    r = n.next();
                                return r.done ? i([]) : new t((function(e, t) {
                                    function a(t) {
                                        return function(n) {
                                            o[t] = n, 0 == --s && e(o)
                                        }
                                    }
                                    var o = [],
                                        s = 0;
                                    do {
                                        o.push(void 0), s++, i(r.value).zc(a(o.length - 1), t), r = n.next()
                                    } while (!r.done)
                                }))
                            }, t
                        })), u("WeakMap", (function(e) {
                            function t(e) {
                                if (this.g = (u += Math.random() + 1).toString(), e) {
                                    e = c(e);
                                    for (var t; !(t = e.next()).done;) t = t.value, this.set(t[0], t[1])
                                }
                            }

                            function n() {}

                            function i(e) {
                                var t = typeof e;
                                return "object" === t && null !== e || "function" === t
                            }

                            function r(e) {
                                if (!L(e, s)) {
                                    var t = new n;
                                    o(e, s, {
                                        value: t
                                    })
                                }
                            }

                            function a(e) {
                                var t = Object[e];
                                t && (Object[e] = function(e) {
                                    return e instanceof n ? e : (Object.isExtensible(e) && r(e), t(e))
                                })
                            }
                            if (function() {
                                    if (!e || !Object.seal) return !1;
                                    try {
                                        var t = Object.seal({}),
                                            n = Object.seal({}),
                                            i = new e([
                                                [t, 2],
                                                [n, 3]
                                            ]);
                                        return 2 == i.get(t) && 3 == i.get(n) && (i.delete(t), i.set(n, 4), !i.has(t) && 4 == i.get(n))
                                    } catch (r) {
                                        return !1
                                    }
                                }()) return e;
                            var s = "$jscomp_hidden_" + Math.random();
                            a("freeze"), a("preventExtensions"), a("seal");
                            var u = 0;
                            return t.prototype.set = function(e, t) {
                                if (!i(e)) throw Error("Invalid WeakMap key");
                                if (r(e), !L(e, s)) throw Error("WeakMap key fail: " + e);
                                return e[s][this.g] = t, this
                            }, t.prototype.get = function(e) {
                                return i(e) && L(e, s) ? e[s][this.g] : void 0
                            }, t.prototype.has = function(e) {
                                return i(e) && L(e, s) && L(e[s], this.g)
                            }, t.prototype.delete = function(e) {
                                return !!(i(e) && L(e, s) && L(e[s], this.g)) && delete e[s][this.g]
                            }, t
                        })), u("Map", (function(e) {
                            function t() {
                                var e = {};
                                return e.Ra = e.next = e.head = e
                            }

                            function n(e, t) {
                                var n = e.g;
                                return l((function() {
                                    if (n) {
                                        for (; n.head != e.g;) n = n.Ra;
                                        for (; n.next != n.head;) return n = n.next, {
                                            done: !1,
                                            value: t(n)
                                        };
                                        n = null
                                    }
                                    return {
                                        done: !0,
                                        value: void 0
                                    }
                                }))
                            }

                            function i(e, t) {
                                var n = t && typeof t;
                                "object" == n || "function" == n ? a.has(t) ? n = a.get(t) : (n = "" + ++o, a.set(t, n)) : n = "p_" + t;
                                var i = e.h[n];
                                if (i && L(e.h, n))
                                    for (e = 0; e < i.length; e++) {
                                        var r = i[e];
                                        if (t != t && r.key != r.key || t === r.key) return {
                                            id: n,
                                            list: i,
                                            index: e,
                                            entry: r
                                        }
                                    }
                                return {
                                    id: n,
                                    list: i,
                                    index: -1,
                                    entry: void 0
                                }
                            }

                            function r(e) {
                                if (this.h = {}, this.g = t(), this.size = 0, e) {
                                    e = c(e);
                                    for (var n; !(n = e.next()).done;) n = n.value, this.set(n[0], n[1])
                                }
                            }
                            if (function() {
                                    if (!e || "function" != typeof e || !e.prototype.entries || "function" != typeof Object.seal) return !1;
                                    try {
                                        var t = Object.seal({
                                                x: 4
                                            }),
                                            n = new e(c([
                                                [t, "s"]
                                            ]));
                                        if ("s" != n.get(t) || 1 != n.size || n.get({
                                                x: 4
                                            }) || n.set({
                                                x: 4
                                            }, "t") != n || 2 != n.size) return !1;
                                        var i = n.entries(),
                                            r = i.next();
                                        return !r.done && r.value[0] == t && "s" == r.value[1] && !((r = i.next()).done || 4 != r.value[0].x || "t" != r.value[1] || !i.next().done)
                                    } catch (a) {
                                        return !1
                                    }
                                }()) return e;
                            var a = new WeakMap;
                            r.prototype.set = function(e, t) {
                                var n = i(this, e = 0 === e ? 0 : e);
                                return n.list || (n.list = this.h[n.id] = []), n.entry ? n.entry.value = t : (n.entry = {
                                    next: this.g,
                                    Ra: this.g.Ra,
                                    head: this.g,
                                    key: e,
                                    value: t
                                }, n.list.push(n.entry), this.g.Ra.next = n.entry, this.g.Ra = n.entry, this.size++), this
                            }, r.prototype.delete = function(e) {
                                return !(!(e = i(this, e)).entry || !e.list) && (e.list.splice(e.index, 1), e.list.length || delete this.h[e.id], e.entry.Ra.next = e.entry.next, e.entry.next.Ra = e.entry.Ra, e.entry.head = null, this.size--, !0)
                            }, r.prototype.clear = function() {
                                this.h = {}, this.g = this.g.Ra = t(), this.size = 0
                            }, r.prototype.has = function(e) {
                                return !!i(this, e).entry
                            }, r.prototype.get = function(e) {
                                return (e = i(this, e).entry) && e.value
                            }, r.prototype.entries = function() {
                                return n(this, (function(e) {
                                    return [e.key, e.value]
                                }))
                            }, r.prototype.keys = function() {
                                return n(this, (function(e) {
                                    return e.key
                                }))
                            }, r.prototype.values = function() {
                                return n(this, (function(e) {
                                    return e.value
                                }))
                            }, r.prototype.forEach = function(e, t) {
                                for (var n, i = this.entries(); !(n = i.next()).done;) n = n.value, e.call(t, n[1], n[0], this)
                            }, r.prototype[Symbol.iterator] = r.prototype.entries;
                            var o = 0;
                            return r
                        })), u("Set", (function(e) {
                            function t(e) {
                                if (this.g = new Map, e) {
                                    e = c(e);
                                    for (var t; !(t = e.next()).done;) this.add(t.value)
                                }
                                this.size = this.g.size
                            }
                            return function() {
                                if (!e || "function" != typeof e || !e.prototype.entries || "function" != typeof Object.seal) return !1;
                                try {
                                    var t = Object.seal({
                                            x: 4
                                        }),
                                        n = new e(c([t]));
                                    if (!n.has(t) || 1 != n.size || n.add(t) != n || 1 != n.size || n.add({
                                            x: 4
                                        }) != n || 2 != n.size) return !1;
                                    var i = n.entries(),
                                        r = i.next();
                                    return !r.done && r.value[0] == t && r.value[1] == t && (!(r = i.next()).done && r.value[0] != t && 4 == r.value[0].x && r.value[1] == r.value[0] && i.next().done)
                                } catch (a) {
                                    return !1
                                }
                            }() ? e : (t.prototype.add = function(e) {
                                return e = 0 === e ? 0 : e, this.g.set(e, e), this.size = this.g.size, this
                            }, t.prototype.delete = function(e) {
                                return e = this.g.delete(e), this.size = this.g.size, e
                            }, t.prototype.clear = function() {
                                this.g.clear(), this.size = 0
                            }, t.prototype.has = function(e) {
                                return this.g.has(e)
                            }, t.prototype.entries = function() {
                                return this.g.entries()
                            }, t.prototype.values = function() {
                                return this.g.values()
                            }, t.prototype.keys = t.prototype.values, t.prototype[Symbol.iterator] = t.prototype.values, t.prototype.forEach = function(e, t) {
                                var n = this;
                                this.g.forEach((function(i) {
                                    return e.call(t, i, i, n)
                                }))
                            }, t)
                        })), u("Array.prototype.findIndex", (function(e) {
                            return e || function(e, t) {
                                return N(this, e, t).re
                            }
                        })), u("Object.is", (function(e) {
                            return e || function(e, t) {
                                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
                            }
                        })), u("Array.prototype.includes", (function(e) {
                            return e || function(e, t) {
                                var n = this;
                                n instanceof String && (n = String(n));
                                var i = n.length;
                                for (0 > (t = t || 0) && (t = Math.max(t + i, 0)); t < i; t++) {
                                    var r = n[t];
                                    if (r === e || Object.is(r, e)) return !0
                                }
                                return !1
                            }
                        })), u("String.prototype.includes", (function(e) {
                            return e || function(e, t) {
                                return -1 !== j(this, e, "includes").indexOf(e, t || 0)
                            }
                        })), u("Array.prototype.find", (function(e) {
                            return e || function(e, t) {
                                return N(this, e, t).v
                            }
                        })), u("String.prototype.startsWith", (function(e) {
                            return e || function(e, t) {
                                var n = j(this, e, "startsWith"),
                                    i = n.length,
                                    r = e.length;
                                t = Math.max(0, Math.min(0 | t, n.length));
                                for (var a = 0; a < r && t < i;)
                                    if (n[t++] != e[a++]) return !1;
                                return a >= r
                            }
                        })), u("Array.prototype.keys", (function(e) {
                            return e || function() {
                                return O(this, (function(e) {
                                    return e
                                }))
                            }
                        }));
                        var U = "function" == typeof Object.assign ? Object.assign : function(e, t) {
                            for (var n = 1; n < arguments.length; n++) {
                                var i = arguments[n];
                                if (i)
                                    for (var r in i) L(i, r) && (e[r] = i[r])
                            }
                            return e
                        };
                        u("Object.assign", (function(e) {
                            return e || U
                        })), u("Array.from", (function(e) {
                            return e || function(e, t, n) {
                                t = null != t ? t : function(e) {
                                    return e
                                };
                                var i = [],
                                    r = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
                                if ("function" == typeof r) {
                                    e = r.call(e);
                                    for (var a = 0; !(r = e.next()).done;) i.push(t.call(n, r.value, a++))
                                } else
                                    for (r = e.length, a = 0; a < r; a++) i.push(t.call(n, e[a], a));
                                return i
                            }
                        })), u("Array.prototype.values", (function(e) {
                            return e || function() {
                                return O(this, (function(e, t) {
                                    return t
                                }))
                            }
                        })), u("Object.values", (function(e) {
                            return e || function(e) {
                                var t, n = [];
                                for (t in e) L(e, t) && n.push(e[t]);
                                return n
                            }
                        })), u("Promise.prototype.finally", (function(e) {
                            return e || function(e) {
                                return this.then((function(t) {
                                    return Promise.resolve(e()).then((function() {
                                        return t
                                    }))
                                }), (function(t) {
                                    return Promise.resolve(e()).then((function() {
                                        throw t
                                    }))
                                }))
                            }
                        })), u("Math.log2", (function(e) {
                            return e || function(e) {
                                return Math.log(e) / Math.LN2
                            }
                        })), u("Array.prototype.entries", (function(e) {
                            return e || function() {
                                return O(this, (function(e, t) {
                                    return [e, t]
                                }))
                            }
                        })), u("String.prototype.repeat", (function(e) {
                            return e || function(e) {
                                var t = j(this, null, "repeat");
                                if (0 > e || 1342177279 < e) throw new RangeError("Invalid count value");
                                e |= 0;
                                for (var n = ""; e;) 1 & e && (n += t), (e >>>= 1) && (t += t);
                                return n
                            }
                        })), u("Number.isNaN", (function(e) {
                            return e || function(e) {
                                return "number" == typeof e && isNaN(e)
                            }
                        })), u("Number.isFinite", (function(e) {
                            return e || function(e) {
                                return "number" == typeof e && (!isNaN(e) && 1 / 0 !== e && -1 / 0 !== e)
                            }
                        }));
                        var B = this || self;

                        function F(e, t) {
                            e = e.split(".");
                            var n, i = B;
                            e[0] in i || void 0 === i.execScript || i.execScript("var " + e[0]);
                            for (; e.length && (n = e.shift());) e.length || void 0 === t ? i = i[n] && i[n] !== Object.prototype[n] ? i[n] : i[n] = {} : i[n] = t
                        }

                        function H(e) {
                            this.g = Math.exp(Math.log(.5) / e), this.i = this.h = 0
                        }

                        function V(e) {
                            return e.h / (1 - Math.pow(e.g, e.i))
                        }

                        function z() {
                            this.h = new H(2), this.j = new H(5), this.g = 0, this.i = 128e3, this.l = 16e3
                        }

                        function q() {}

                        function K() {}

                        function G() {}

                        function W(e) {
                            var t = P.apply(1, arguments);
                            X.has(e) || (X.add(e), G.apply(q, d(t)))
                        }
                        H.prototype.sample = function(e, t) {
                            var n = Math.pow(this.g, e);
                            t = t * (1 - n) + n * this.h, isNaN(t) || (this.h = t, this.i += e)
                        }, z.prototype.configure = function(e) {
                            this.i = e.minTotalBytes, this.l = e.minBytes, this.h.g = Math.exp(Math.log(.5) / e.fastHalfLife), this.j.g = Math.exp(Math.log(.5) / e.slowHalfLife)
                        }, z.prototype.sample = function(e, t) {
                            if (!(t < this.l)) {
                                var n = 8e3 * t / e;
                                e /= 1e3, this.g += t, this.h.sample(e, n), this.j.sample(e, n)
                            }
                        }, z.prototype.getBandwidthEstimate = function(e) {
                            return this.g < this.i ? e : Math.min(V(this.h), V(this.j))
                        };
                        var X = new Set;

                        function Y(e) {
                            if (J.has(e)) return J.get(e);
                            var t = MediaSource.isTypeSupported(e);
                            return J.set(e, t), t
                        }
                        e.console && (G = function() {
                            return console.warn.apply(console, d(P.apply(0, arguments)))
                        }, K = function() {
                            console.error.apply(console, d(P.apply(0, arguments)))
                        });
                        var J = new Map;

                        function $() {}

                        function Q() {}

                        function Z() {}

                        function ee(e, t) {
                            if (!e && !t) return !0;
                            if (!e || !t || e.byteLength != t.byteLength) return !1;
                            if (te(e) == te(t) && (e.byteOffset || 0) == (t.byteOffset || 0)) return !0;
                            var n = ie(e);
                            t = ie(t);
                            for (var i = 0; i < e.byteLength; i++)
                                if (n[i] != t[i]) return !1;
                            return !0
                        }

                        function te(e) {
                            return e instanceof ArrayBuffer ? e : e.buffer
                        }

                        function ne(e) {
                            return e instanceof ArrayBuffer ? e : 0 == e.byteOffset && e.byteLength == e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer
                        }

                        function ie(e, t, n) {
                            return ae(e, void 0 === t ? 0 : t, n = void 0 === n ? 1 / 0 : n, Uint8Array)
                        }

                        function re(e, t, n) {
                            return ae(e, void 0 === t ? 0 : t, n = void 0 === n ? 1 / 0 : n, DataView)
                        }

                        function ae(e, t, n, i) {
                            var r = (e.byteOffset || 0) + e.byteLength;
                            return t = Math.max(0, Math.min((e.byteOffset || 0) + t, r)), new i(te(e), t, Math.min(t + Math.max(n, 0), r) - t)
                        }

                        function oe() {}

                        function se(e) {
                            this.h = new Q, (e = ue[e.toLowerCase()]) && (this.h = e()), this.g = new $, (e = le) && (this.g = e())
                        }
                        $.prototype.extract = function() {}, $.prototype.decode = function() {
                            return []
                        }, $.prototype.clear = function() {}, Q.prototype.init = function() {}, Q.prototype.parse = function() {
                            return []
                        }, F("shaka.util.BufferUtils", Z), Z.toDataView = re, Z.toUint8 = ie, Z.toArrayBuffer = ne, Z.equal = ee, oe.prototype.init = function() {}, oe.prototype.j = function() {}, oe.prototype.i = function() {}, F("shaka.media.IClosedCaptionParser", oe), se.prototype.init = function(e) {
                            this.h.init(e)
                        }, se.prototype.j = function(e) {
                            for (var t = (e = c(e = this.h.parse(e))).next(); !t.done; t = e.next()) {
                                var n = ie((t = t.value).packet);
                                0 < n.length && this.g.extract(n, t.pts)
                            }
                            return this.g.decode()
                        }, se.prototype.i = function() {
                            this.g.clear()
                        }, F("shaka.media.ClosedCaptionParser", se), se.findDecoder = function() {
                            return le
                        }, se.unregisterDecoder = function() {
                            le = null
                        }, se.registerDecoder = function(e) {
                            le = e
                        }, se.findParser = function(e) {
                            return ue[e]
                        }, se.unregisterParser = function(e) {
                            delete ue[e]
                        }, se.registerParser = function(e, t) {
                            ue[e] = t
                        };
                        var ue = {},
                            le = null;

                        function ce(e, t) {
                            return !("number" != typeof e || "number" != typeof t || !isNaN(e) || !isNaN(t)) || e === t
                        }

                        function de(e, t) {
                            var n;
                            if (n || (n = ce), e.length != t.length) return !1;
                            t = t.slice();
                            for (var i = {}, r = (e = c(e)).next(); !r.done; i = {
                                    ad: i.ad
                                }, r = e.next()) {
                                if (i.ad = r.value, -1 == (r = t.findIndex(function(e) {
                                        return function(t) {
                                            return n(e.ad, t)
                                        }
                                    }(i)))) return !1;
                                t[r] = t[t.length - 1], t.pop()
                            }
                            return 0 == t.length
                        }

                        function he(e, t, n) {
                            if (n || (n = ce), e.length != t.length) return !1;
                            for (var i = 0; i < e.length; i++)
                                if (!n(e[i], t[i])) return !1;
                            return !0
                        }

                        function fe(e, t, n) {
                            this.startTime = e, this.endTime = t, this.S = n, this.region = new Ae, this.position = null, this.D = ge, this.size = 0, this.textAlign = me, this.direction = ye, this.writingMode = be, this.u = we, this.h = null, this.L = "", this.i = xe, this.j = ve, this.A = this.backgroundColor = this.l = "", this.C = Te, this.m = Se, this.K = this.I = "", this.O = 1, this.o = [], this.id = this.Z = this.W = this.P = "", this.g = [], this.s = !1, this.F = {
                                ug: 32,
                                rows: 15
                            }
                        }

                        function pe(e, t) {
                            if (e.startTime != t.startTime || e.endTime != t.endTime || e.S != t.S) return !1;
                            for (var n in e)
                                if ("startTime" != n && "endTime" != n && "payload" != n)
                                    if ("nestedCues" == n) {
                                        if (!he(e.g, t.g, pe)) return !1
                                    } else if ("region" == n || "cellResolution" == n) {
                                for (var i in e[n])
                                    if (e[n][i] != t[n][i]) return !1
                            } else if (Array.isArray(e[n])) {
                                if (!he(e[n], t[n])) return !1
                            } else if (e[n] != t[n]) return !1;
                            return !0
                        }
                        fe.prototype.clone = function() {
                            var e, t = new fe(0, 0, "");
                            for (e in this) t[e] = this[e], t[e] && t[e].constructor == Array && (t[e] = t[e].slice());
                            return t
                        }, F("shaka.text.Cue", fe), fe.equal = pe, fe.prototype.clone = fe.prototype.clone;
                        var ge = "auto";
                        fe.positionAlign = {
                            LEFT: "line-left",
                            RIGHT: "line-right",
                            CENTER: "center",
                            AUTO: ge
                        };
                        var me = "center";
                        fe.textAlign = {
                            LEFT: "left",
                            RIGHT: "right",
                            CENTER: me,
                            START: "start",
                            END: "end"
                        };
                        var ve = "after";
                        fe.displayAlign = {
                            BEFORE: "before",
                            CENTER: "center",
                            AFTER: ve
                        };
                        var ye = "ltr";
                        fe.direction = {
                            HORIZONTAL_LEFT_TO_RIGHT: ye,
                            HORIZONTAL_RIGHT_TO_LEFT: "rtl"
                        };
                        var be = "horizontal-tb";
                        fe.writingMode = {
                            HORIZONTAL_TOP_TO_BOTTOM: be,
                            VERTICAL_LEFT_TO_RIGHT: "vertical-lr",
                            VERTICAL_RIGHT_TO_LEFT: "vertical-rl"
                        };
                        var we = 0;
                        fe.lineInterpretation = {
                            LINE_NUMBER: we,
                            PERCENTAGE: 1
                        };
                        var xe = "start";
                        fe.lineAlign = {
                            CENTER: "center",
                            START: xe,
                            END: "end"
                        }, fe.defaultTextColor = {
                            white: "white",
                            lime: "lime",
                            cyan: "cyan",
                            red: "red",
                            yellow: "yellow",
                            magenta: "magenta",
                            blue: "blue",
                            black: "black"
                        }, fe.defaultTextBackgroundColor = {
                            bg_white: "white",
                            bg_lime: "lime",
                            bg_cyan: "cyan",
                            bg_red: "red",
                            bg_yellow: "yellow",
                            bg_magenta: "magenta",
                            bg_blue: "blue",
                            bg_black: "black"
                        };
                        var Te = 400;
                        fe.fontWeight = {
                            NORMAL: Te,
                            BOLD: 700
                        };
                        var Se = "normal";

                        function Ae() {
                            this.id = "", this.height = this.width = 100, this.h = this.i = this.g = ke
                        }
                        fe.fontStyle = {
                            NORMAL: Se,
                            ITALIC: "italic",
                            OBLIQUE: "oblique"
                        }, fe.textDecoration = {
                            UNDERLINE: "underline",
                            LINE_THROUGH: "lineThrough",
                            OVERLINE: "overline"
                        }, F("shaka.text.CueRegion", Ae);
                        var ke = 1;

                        function Ee() {}

                        function Ce(e, t, n) {
                            Me[e.toLowerCase().split(";")[0] + "-" + n] = {
                                priority: n,
                                Wc: t
                            }
                        }

                        function Ie(e, t) {
                            for (var n = e.toLowerCase().split(";")[0], i = c([Pe, _e, Re, De]), r = i.next(); !r.done; r = i.next())
                                if (r = Me[n + "-" + r.value]) {
                                    var a = r.Wc(),
                                        o = a.isSupported(e, t);
                                    if (a.destroy(), o) return r.Wc
                                }
                            return null
                        }
                        Ae.units = {
                            PX: 0,
                            PERCENTAGE: ke,
                            LINES: 2
                        }, Ae.scrollMode = {
                            NONE: "",
                            UP: "up"
                        }, Ee.prototype.destroy = function() {}, F("shaka.transmuxer.TransmuxerEngine", Ee), Ee.findTransmuxer = Ie, Ee.unregisterTransmuxer = function(e, t) {
                            delete Me[e.toLowerCase().split(";")[0] + "-" + t]
                        }, Ee.registerTransmuxer = Ce, Ee.prototype.destroy = Ee.prototype.destroy;
                        var Me = {},
                            De = 1,
                            Re = 2,
                            _e = 3,
                            Pe = 4;
                        Ee.PluginPriority = {
                            FALLBACK: De,
                            PREFERRED_SECONDARY: Re,
                            PREFERRED: _e,
                            APPLICATION: Pe
                        };
                        var Le = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

                        function Ne(e) {
                            var t;
                            e instanceof Ne ? (je(this, e.za), this.sb = e.sb, this.Da = e.Da, Oe(this, e.Lb), this.va = e.va, Ue(this, e.g.clone()), this.ib = e.ib) : e && (t = String(e).match(Le)) ? (je(this, t[1] || "", !0), this.sb = Be(t[2] || ""), this.Da = Be(t[3] || "", !0), Oe(this, t[4]), this.va = Be(t[5] || "", !0), Ue(this, t[6] || "", !0), this.ib = Be(t[7] || "")) : this.g = new We(null)
                        }

                        function je(e, t, n) {
                            e.za = n ? Be(t, !0) : t, e.za && (e.za = e.za.replace(/:$/, ""))
                        }

                        function Oe(e, t) {
                            if (t) {
                                if (t = Number(t), isNaN(t) || 0 > t) throw Error("Bad port number " + t);
                                e.Lb = t
                            } else e.Lb = null
                        }

                        function Ue(e, t, n) {
                            t instanceof We ? e.g = t : (n || (t = Fe(t, Ke)), e.g = new We(t))
                        }

                        function Be(e, t) {
                            return e ? t ? decodeURI(e) : decodeURIComponent(e) : ""
                        }

                        function Fe(e, t, n) {
                            return null != e ? (e = encodeURI(e).replace(t, He), n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), e) : null
                        }

                        function He(e) {
                            return "%" + ((e = e.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & e).toString(16)
                        }(i = Ne.prototype).za = "", i.sb = "", i.Da = "", i.Lb = null, i.va = "", i.ib = "", i.toString = function() {
                            var e = [],
                                t = this.za;
                            if (t && e.push(Fe(t, Ve, !0), ":"), t = this.Da) {
                                e.push("//");
                                var n = this.sb;
                                n && e.push(Fe(n, Ve, !0), "@"), e.push(encodeURIComponent(t).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (t = this.Lb) && e.push(":", String(t))
                            }
                            return (t = this.va) && (this.Da && "/" != t.charAt(0) && e.push("/"), e.push(Fe(t, "/" == t.charAt(0) ? qe : ze, !0))), (t = this.g.toString()) && e.push("?", t), (t = this.ib) && e.push("#", Fe(t, Ge)), e.join("")
                        }, i.resolve = function(e) {
                            var t = this.clone();
                            "data" === t.za && (t = new Ne);
                            var n = !!e.za;
                            n ? je(t, e.za) : n = !!e.sb, n ? t.sb = e.sb : n = !!e.Da, n ? t.Da = e.Da : n = null != e.Lb;
                            var i = e.va;
                            if (n) Oe(t, e.Lb);
                            else if (n = !!e.va) {
                                if ("/" != i.charAt(0))
                                    if (this.Da && !this.va) i = "/" + i;
                                    else {
                                        var r = t.va.lastIndexOf("/"); - 1 != r && (i = t.va.substr(0, r + 1) + i)
                                    }
                                if (".." == i || "." == i) i = "";
                                else if (-1 != i.indexOf("./") || -1 != i.indexOf("/.")) {
                                    r = 0 == i.lastIndexOf("/", 0), i = i.split("/");
                                    for (var a = [], o = 0; o < i.length;) {
                                        var s = i[o++];
                                        "." == s ? r && o == i.length && a.push("") : ".." == s ? ((1 < a.length || 1 == a.length && "" != a[0]) && a.pop(), r && o == i.length && a.push("")) : (a.push(s), r = !0)
                                    }
                                    i = a.join("/")
                                }
                            }
                            return n ? t.va = i : n = "" !== e.g.toString(), n ? Ue(t, e.g.clone()) : n = !!e.ib, n && (t.ib = e.ib), t
                        }, i.clone = function() {
                            return new Ne(this)
                        };
                        var Ve = /[#\/\?@]/g,
                            ze = /[#\?:]/g,
                            qe = /[#\?]/g,
                            Ke = /[#\?@]/g,
                            Ge = /#/g;

                        function We(e) {
                            this.g = e || null
                        }

                        function Xe(e) {
                            if (!e.la && (e.la = {}, e.Cc = 0, e.g))
                                for (var t = e.g.split("&"), n = 0; n < t.length; n++) {
                                    var i = t[n].indexOf("="),
                                        r = null;
                                    if (0 <= i) {
                                        var a = t[n].substring(0, i);
                                        r = t[n].substring(i + 1)
                                    } else a = t[n];
                                    a = decodeURIComponent(a.replace(/\+/g, " ")), r = r || "", e.add(a, decodeURIComponent(r.replace(/\+/g, " ")))
                                }
                        }

                        function Ye(e, t, n) {
                            var i = P.apply(3, arguments);
                            if (this.severity = e, this.category = t, this.code = n, this.data = i, this.handled = !1, this.message = "Shaka Error " + this.code, Je) try {
                                throw Error(this.message || "Shaka Error")
                            } catch (r) {
                                this.stack = r.stack
                            }
                        }(i = We.prototype).la = null, i.Cc = null, i.add = function(e, t) {
                            Xe(this), this.g = null;
                            var n = this.la.hasOwnProperty(e) ? this.la[e] : null;
                            return n || (this.la[e] = n = []), n.push(t), this.Cc++, this
                        }, i.set = function(e, t) {
                            return Xe(this), this.g = null, this.la.hasOwnProperty(e) ? this.la[e] = [t] : this.add(e, t), this
                        }, i.toString = function() {
                            if (this.g) return this.g;
                            if (!this.la) return "";
                            var e, t = [];
                            for (e in this.la)
                                for (var n = encodeURIComponent(e), i = this.la[e], r = 0; r < i.length; r++) {
                                    var a = n;
                                    "" !== i[r] && (a += "=" + encodeURIComponent(i[r])), t.push(a)
                                }
                            return this.g = t.join("&")
                        }, i.clone = function() {
                            var e = new We;
                            if (e.g = this.g, this.la) {
                                var t, n = {};
                                for (t in this.la) n[t] = this.la[t].concat();
                                e.la = n, e.Cc = this.Cc
                            }
                            return e
                        }, Ye.prototype.toString = function() {
                            return "shaka.util.Error " + JSON.stringify(this, null, "  ")
                        }, F("shaka.util.Error", Ye);
                        var Je = !0;

                        function $e(e, t) {
                            return e.concat(t)
                        }

                        function Qe() {}

                        function Ze(e) {
                            return null != e
                        }

                        function et(e, t) {
                            if (0 == t.length) return e;
                            var n = t.map((function(e) {
                                return new Ne(e)
                            }));
                            return e.map((function(e) {
                                return new Ne(e)
                            })).map((function(e) {
                                return n.map((function(t) {
                                    return e.resolve(t)
                                }))
                            })).reduce($e, []).map((function(e) {
                                return e.toString()
                            }))
                        }

                        function tt(e, t) {
                            return {
                                keySystem: e,
                                licenseServerUri: "",
                                distinctiveIdentifierRequired: !1,
                                persistentStateRequired: !1,
                                audioRobustness: "",
                                videoRobustness: "",
                                serverCertificate: null,
                                serverCertificateUri: "",
                                sessionType: "",
                                initData: t || [],
                                keyIds: new Set
                            }
                        }

                        function nt(e, t) {
                            if (1 == t.length) return t[0];
                            if (null != (e = it(e, t))) return e;
                            throw new Ye(2, 4, 4025, t)
                        }

                        function it(e, t) {
                            for (var n = c(ot[e]), i = n.next(); !i.done; i = n.next()) {
                                i = i.value;
                                for (var r = c(t), a = r.next(); !a.done; a = r.next())
                                    if (a = a.value, i.test(a.trim())) return a.trim()
                            }
                            return e == rt ? "" : null
                        }
                        Ye.Severity = {
                            RECOVERABLE: 1,
                            CRITICAL: 2
                        }, Ye.Category = {
                            NETWORK: 1,
                            TEXT: 2,
                            MEDIA: 3,
                            MANIFEST: 4,
                            STREAMING: 5,
                            DRM: 6,
                            PLAYER: 7,
                            CAST: 8,
                            STORAGE: 9,
                            ADS: 10
                        }, Ye.Code = {
                            UNSUPPORTED_SCHEME: 1e3,
                            BAD_HTTP_STATUS: 1001,
                            HTTP_ERROR: 1002,
                            TIMEOUT: 1003,
                            MALFORMED_DATA_URI: 1004,
                            REQUEST_FILTER_ERROR: 1006,
                            RESPONSE_FILTER_ERROR: 1007,
                            MALFORMED_TEST_URI: 1008,
                            UNEXPECTED_TEST_REQUEST: 1009,
                            ATTEMPTS_EXHAUSTED: 1010,
                            SEGMENT_MISSING: 1011,
                            INVALID_TEXT_HEADER: 2e3,
                            INVALID_TEXT_CUE: 2001,
                            UNABLE_TO_DETECT_ENCODING: 2003,
                            BAD_ENCODING: 2004,
                            INVALID_XML: 2005,
                            INVALID_MP4_TTML: 2007,
                            INVALID_MP4_VTT: 2008,
                            UNABLE_TO_EXTRACT_CUE_START_TIME: 2009,
                            INVALID_MP4_CEA: 2010,
                            TEXT_COULD_NOT_GUESS_MIME_TYPE: 2011,
                            CANNOT_ADD_EXTERNAL_TEXT_TO_SRC_EQUALS: 2012,
                            TEXT_ONLY_WEBVTT_SRC_EQUALS: 2013,
                            MISSING_TEXT_PLUGIN: 2014,
                            CHAPTERS_TRACK_FAILED: 2015,
                            CANNOT_ADD_EXTERNAL_THUMBNAILS_TO_SRC_EQUALS: 2016,
                            UNSUPPORTED_EXTERNAL_THUMBNAILS_URI: 2017,
                            BUFFER_READ_OUT_OF_BOUNDS: 3e3,
                            JS_INTEGER_OVERFLOW: 3001,
                            EBML_OVERFLOW: 3002,
                            EBML_BAD_FLOATING_POINT_SIZE: 3003,
                            MP4_SIDX_WRONG_BOX_TYPE: 3004,
                            MP4_SIDX_INVALID_TIMESCALE: 3005,
                            MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
                            WEBM_CUES_ELEMENT_MISSING: 3007,
                            WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
                            WEBM_SEGMENT_ELEMENT_MISSING: 3009,
                            WEBM_INFO_ELEMENT_MISSING: 3010,
                            WEBM_DURATION_ELEMENT_MISSING: 3011,
                            WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
                            WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
                            MEDIA_SOURCE_OPERATION_FAILED: 3014,
                            MEDIA_SOURCE_OPERATION_THREW: 3015,
                            VIDEO_ERROR: 3016,
                            QUOTA_EXCEEDED_ERROR: 3017,
                            TRANSMUXING_FAILED: 3018,
                            CONTENT_TRANSFORMATION_FAILED: 3019,
                            MSS_MISSING_DATA_FOR_TRANSMUXING: 3020,
                            MSS_TRANSMUXING_CODEC_UNKNOWN: 3021,
                            MSS_TRANSMUXING_FAILED: 3022,
                            UNABLE_TO_GUESS_MANIFEST_TYPE: 4e3,
                            DASH_INVALID_XML: 4001,
                            DASH_NO_SEGMENT_INFO: 4002,
                            DASH_EMPTY_ADAPTATION_SET: 4003,
                            DASH_EMPTY_PERIOD: 4004,
                            DASH_WEBM_MISSING_INIT: 4005,
                            DASH_UNSUPPORTED_CONTAINER: 4006,
                            DASH_PSSH_BAD_ENCODING: 4007,
                            DASH_NO_COMMON_KEY_SYSTEM: 4008,
                            DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
                            DASH_CONFLICTING_KEY_IDS: 4010,
                            RESTRICTIONS_CANNOT_BE_MET: 4012,
                            HLS_PLAYLIST_HEADER_MISSING: 4015,
                            INVALID_HLS_TAG: 4016,
                            HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
                            DASH_DUPLICATE_REPRESENTATION_ID: 4018,
                            HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
                            HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
                            HLS_REQUIRED_TAG_MISSING: 4024,
                            HLS_COULD_NOT_GUESS_CODECS: 4025,
                            HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
                            DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,
                            DASH_XLINK_DEPTH_LIMIT: 4028,
                            CONTENT_UNSUPPORTED_BY_BROWSER: 4032,
                            CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM: 4033,
                            NO_VARIANTS: 4036,
                            PERIOD_FLATTENING_FAILED: 4037,
                            INCONSISTENT_DRM_ACROSS_PERIODS: 4038,
                            HLS_VARIABLE_NOT_FOUND: 4039,
                            HLS_MSE_ENCRYPTED_MP2T_NOT_SUPPORTED: 4040,
                            HLS_MSE_ENCRYPTED_LEGACY_APPLE_MEDIA_KEYS_NOT_SUPPORTED: 4041,
                            NO_WEB_CRYPTO_API: 4042,
                            HLS_AES_128_INVALID_IV_LENGTH: 4043,
                            HLS_AES_128_INVALID_KEY_LENGTH: 4044,
                            CANNOT_ADD_EXTERNAL_THUMBNAILS_TO_LIVE_STREAM: 4045,
                            MSS_INVALID_XML: 4046,
                            MSS_LIVE_CONTENT_NOT_SUPPORTED: 4047,
                            STREAMING_ENGINE_STARTUP_INVALID_STATE: 5006,
                            NO_RECOGNIZED_KEY_SYSTEMS: 6e3,
                            REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
                            FAILED_TO_CREATE_CDM: 6002,
                            FAILED_TO_ATTACH_TO_VIDEO: 6003,
                            INVALID_SERVER_CERTIFICATE: 6004,
                            FAILED_TO_CREATE_SESSION: 6005,
                            FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
                            LICENSE_REQUEST_FAILED: 6007,
                            LICENSE_RESPONSE_REJECTED: 6008,
                            ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
                            NO_LICENSE_SERVER_GIVEN: 6012,
                            OFFLINE_SESSION_REMOVED: 6013,
                            EXPIRED: 6014,
                            SERVER_CERTIFICATE_REQUIRED: 6015,
                            INIT_DATA_TRANSFORM_ERROR: 6016,
                            SERVER_CERTIFICATE_REQUEST_FAILED: 6017,
                            MIN_HDCP_VERSION_NOT_MATCH: 6018,
                            ERROR_CHECKING_HDCP_VERSION: 6019,
                            LOAD_INTERRUPTED: 7e3,
                            OPERATION_ABORTED: 7001,
                            NO_VIDEO_ELEMENT: 7002,
                            OBJECT_DESTROYED: 7003,
                            CONTENT_NOT_LOADED: 7004,
                            CAST_API_UNAVAILABLE: 8e3,
                            NO_CAST_RECEIVERS: 8001,
                            ALREADY_CASTING: 8002,
                            UNEXPECTED_CAST_ERROR: 8003,
                            CAST_CANCELED_BY_USER: 8004,
                            CAST_CONNECTION_TIMED_OUT: 8005,
                            CAST_RECEIVER_APP_UNAVAILABLE: 8006,
                            STORAGE_NOT_SUPPORTED: 9e3,
                            INDEXED_DB_ERROR: 9001,
                            DEPRECATED_OPERATION_ABORTED: 9002,
                            REQUESTED_ITEM_NOT_FOUND: 9003,
                            MALFORMED_OFFLINE_URI: 9004,
                            CANNOT_STORE_LIVE_OFFLINE: 9005,
                            NO_INIT_DATA_FOR_OFFLINE: 9007,
                            LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,
                            NEW_KEY_OPERATION_NOT_SUPPORTED: 9011,
                            KEY_NOT_FOUND: 9012,
                            MISSING_STORAGE_CELL: 9013,
                            STORAGE_LIMIT_REACHED: 9014,
                            DOWNLOAD_SIZE_CALLBACK_ERROR: 9015,
                            MODIFY_OPERATION_NOT_SUPPORTED: 9016,
                            INDEXED_DB_INIT_TIMED_OUT: 9017,
                            CS_IMA_SDK_MISSING: 1e4,
                            CS_AD_MANAGER_NOT_INITIALIZED: 10001,
                            SS_IMA_SDK_MISSING: 10002,
                            SS_AD_MANAGER_NOT_INITIALIZED: 10003,
                            CURRENT_DAI_REQUEST_NOT_FINISHED: 10004
                        };
                        var rt = "text",
                            at = {
                                Aa: "video",
                                xb: "audio",
                                da: rt,
                                fd: "image",
                                ng: "application"
                            },
                            ot = {
                                audio: [/^vorbis$/, /^Opus$/, /^opus$/, /^fLaC$/, /^flac$/, /^mp4a/, /^[ae]c-3$/, /^ac-4$/, /^dts[cex]$/],
                                video: [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av01/, /^dvh/],
                                text: [/^vtt$/, /^wvtt/, /^stpp/]
                            };

                        function st() {}

                        function ut(e, t) {
                            var n = e;
                            return t && !pt.includes(e) && (n += '; codecs="' + t + '"'), n
                        }

                        function lt(e, t) {
                            return t && (e += '; codecs="' + t + '"'), e
                        }

                        function ct(e, t, n) {
                            var i = ut(e, t);
                            return Ie(t = lt(e, t)) ? (e = Ie(t)) ? (n = (e = e()).convertCodecs(n, t), e.destroy()) : n = t : n = "video/mp2t" != e && "audio" == n ? i.replace("video", "audio") : i, n
                        }

                        function dt(e) {
                            var t = ft(e);
                            switch (e = t[0], t = t[1].toLowerCase(), !0) {
                                case "mp4a" === e && "69" === t:
                                case "mp4a" === e && "6b" === t:
                                case "mp4a" === e && "40.34" === t:
                                    return "mp3";
                                case "mp4a" === e && "66" === t:
                                case "mp4a" === e && "67" === t:
                                case "mp4a" === e && "68" === t:
                                case "mp4a" === e && "40.2" === t:
                                case "mp4a" === e && "40.02" === t:
                                case "mp4a" === e && "40.5" === t:
                                case "mp4a" === e && "40.05" === t:
                                case "mp4a" === e && "40.29" === t:
                                case "mp4a" === e && "40.42" === t:
                                    return "aac";
                                case "mp4a" === e && "a5" === t:
                                    return "ac-3";
                                case "mp4a" === e && "a6" === t:
                                    return "ec-3";
                                case "mp4a" === e && "b2" === t:
                                    return "dtsx";
                                case "mp4a" === e && "a9" === t:
                                    return "dtsc";
                                case "avc1" === e:
                                case "avc3" === e:
                                    return "avc";
                                case "hvc1" === e:
                                case "hev1" === e:
                                    return "hevc";
                                case "dvh1" === e:
                                case "dvhe" === e:
                                    return "dovi"
                            }
                            return e
                        }

                        function ht(e) {
                            return (e = e.split(/ *; */)).shift(), (e = e.find((function(e) {
                                return e.startsWith("codecs=")
                            }))) ? e.split("=")[1].replace(/^"|"$/g, "") : ""
                        }

                        function ft(e) {
                            var t = (e = e.split("."))[0];
                            return e.shift(), [t, e.join(".")]
                        }
                        F("shaka.util.MimeUtils", st), st.getFullTypeWithAllCodecs = lt, st.getFullType = ut, (new Map).set("codecs", "codecs").set("frameRate", "framerate").set("bandwidth", "bitrate").set("width", "width").set("height", "height").set("channelsCount", "channels");
                        var pt = ["audio/aac", "audio/ac3", "audio/ec3", "audio/mpeg"];

                        function gt(e) {
                            this.i = null, this.j = e, this.u = !1, this.l = this.s = 0, this.m = 1 / 0, this.h = this.g = null, this.A = "", this.o = new Map
                        }

                        function mt(e) {
                            return !!bt[e] || ("application/cea-608" == e || "application/cea-708" == e) && !!le
                        }

                        function vt(e, t, n) {
                            if (e.A = t, t = e.o.get(t))
                                for (var i = c(t.keys()), r = i.next(); !r.done; r = i.next())(r = t.get(r.value).filter((function(e) {
                                    return e.endTime <= n
                                }))) && e.j.append(r)
                        }

                        function yt(e, t, n) {
                            t.startTime += n, t.endTime += n;
                            for (var i = (t = c(t.g)).next(); !i.done; i = t.next()) yt(e, i.value, n)
                        }
                        gt.prototype.destroy = function() {
                            return this.j = this.i = null, this.o.clear(), Promise.resolve()
                        }, gt.prototype.remove = function(e, t) {
                            var n = this;
                            return _((function(i) {
                                if (1 == i.g) return x(i, Promise.resolve(), 2);
                                !n.j || !n.j.remove(e, t) || null == n.g || t <= n.g || e >= n.h || (e <= n.g && t >= n.h ? n.g = n.h = null : e <= n.g && t < n.h ? n.g = t : e > n.g && t >= n.h && (n.h = e)), T(i)
                            }))
                        }, F("shaka.text.TextEngine", gt), gt.prototype.destroy = gt.prototype.destroy, gt.findParser = function(e) {
                            return bt[e]
                        }, gt.unregisterParser = function(e) {
                            delete bt[e]
                        }, gt.registerParser = function(e, t) {
                            bt[e] = t
                        };
                        var bt = {};

                        function wt() {}

                        function xt(e, t) {
                            return e = At(e), t = At(t), e.split("-")[0] == t.split("-")[0]
                        }

                        function Tt(e, t) {
                            return e = At(e), t = At(t), e = e.split("-"), t = t.split("-"), e[0] == t[0] && 1 == e.length && 2 == t.length
                        }

                        function St(e, t) {
                            return e = At(e), t = At(t), e = e.split("-"), t = t.split("-"), 2 == e.length && 2 == t.length && e[0] == t[0]
                        }

                        function At(e) {
                            var t = e.split("-x-"),
                                n = t[0].split("-");
                            return e = n[0] || "", n = n[1] || "", t = t[1] ? "x-" + t[1] : "", e = e.toLowerCase(), e = Mt.get(e) || e, ((n = n.toUpperCase()) ? e + "-" + n : e) + (t ? "-" + t : "")
                        }

                        function kt(e, t) {
                            return e = At(e), (t = At(t)) == e ? 4 : Tt(t, e) ? 3 : St(t, e) ? 2 : Tt(e, t) ? 1 : 0
                        }

                        function Et(e) {
                            var t = e.indexOf("-");
                            return e = (e = 0 <= t ? e.substring(0, t) : e).toLowerCase(), Mt.get(e) || e
                        }

                        function Ct(e) {
                            return e.language ? At(e.language) : e.audio && e.audio.language ? At(e.audio.language) : e.video && e.video.language ? At(e.video.language) : "und"
                        }

                        function It(e, t) {
                            e = At(e);
                            var n = new Set,
                                i = c(t);
                            for (t = i.next(); !t.done; t = i.next()) n.add(At(t.value));
                            for (t = (i = c(n)).next(); !t.done; t = i.next())
                                if ((t = t.value) == e) return t;
                            for (t = (i = c(n)).next(); !t.done; t = i.next())
                                if (Tt(t = t.value, e)) return t;
                            for (t = (i = c(n)).next(); !t.done; t = i.next())
                                if (St(t = t.value, e)) return t;
                            for (t = (n = c(n)).next(); !t.done; t = n.next())
                                if (Tt(e, t = t.value)) return t;
                            return null
                        }
                        F("shaka.util.LanguageUtils", wt), wt.findClosestLocale = It, wt.getLocaleForVariant = Ct, wt.getLocaleForText = function(e) {
                            return At(e.language || "und")
                        }, wt.getBase = Et, wt.relatedness = kt, wt.areSiblings = function(e, t) {
                            var n = Et(e),
                                i = Et(t);
                            return e != n && t != i && n == i
                        }, wt.normalize = At, wt.isSiblingOf = St, wt.isParentOf = Tt, wt.areLanguageCompatible = xt, wt.areLocaleCompatible = function(e, t) {
                            return (e = At(e)) == (t = At(t))
                        };
                        var Mt = new Map([
                            ["aar", "aa"],
                            ["abk", "ab"],
                            ["afr", "af"],
                            ["aka", "ak"],
                            ["alb", "sq"],
                            ["amh", "am"],
                            ["ara", "ar"],
                            ["arg", "an"],
                            ["arm", "hy"],
                            ["asm", "as"],
                            ["ava", "av"],
                            ["ave", "ae"],
                            ["aym", "ay"],
                            ["aze", "az"],
                            ["bak", "ba"],
                            ["bam", "bm"],
                            ["baq", "eu"],
                            ["bel", "be"],
                            ["ben", "bn"],
                            ["bih", "bh"],
                            ["bis", "bi"],
                            ["bod", "bo"],
                            ["bos", "bs"],
                            ["bre", "br"],
                            ["bul", "bg"],
                            ["bur", "my"],
                            ["cat", "ca"],
                            ["ces", "cs"],
                            ["cha", "ch"],
                            ["che", "ce"],
                            ["chi", "zh"],
                            ["chu", "cu"],
                            ["chv", "cv"],
                            ["cor", "kw"],
                            ["cos", "co"],
                            ["cre", "cr"],
                            ["cym", "cy"],
                            ["cze", "cs"],
                            ["dan", "da"],
                            ["deu", "de"],
                            ["div", "dv"],
                            ["dut", "nl"],
                            ["dzo", "dz"],
                            ["ell", "el"],
                            ["eng", "en"],
                            ["epo", "eo"],
                            ["est", "et"],
                            ["eus", "eu"],
                            ["ewe", "ee"],
                            ["fao", "fo"],
                            ["fas", "fa"],
                            ["fij", "fj"],
                            ["fin", "fi"],
                            ["fra", "fr"],
                            ["fre", "fr"],
                            ["fry", "fy"],
                            ["ful", "ff"],
                            ["geo", "ka"],
                            ["ger", "de"],
                            ["gla", "gd"],
                            ["gle", "ga"],
                            ["glg", "gl"],
                            ["glv", "gv"],
                            ["gre", "el"],
                            ["grn", "gn"],
                            ["guj", "gu"],
                            ["hat", "ht"],
                            ["hau", "ha"],
                            ["heb", "he"],
                            ["her", "hz"],
                            ["hin", "hi"],
                            ["hmo", "ho"],
                            ["hrv", "hr"],
                            ["hun", "hu"],
                            ["hye", "hy"],
                            ["ibo", "ig"],
                            ["ice", "is"],
                            ["ido", "io"],
                            ["iii", "ii"],
                            ["iku", "iu"],
                            ["ile", "ie"],
                            ["ina", "ia"],
                            ["ind", "id"],
                            ["ipk", "ik"],
                            ["isl", "is"],
                            ["ita", "it"],
                            ["jav", "jv"],
                            ["jpn", "ja"],
                            ["kal", "kl"],
                            ["kan", "kn"],
                            ["kas", "ks"],
                            ["kat", "ka"],
                            ["kau", "kr"],
                            ["kaz", "kk"],
                            ["khm", "km"],
                            ["kik", "ki"],
                            ["kin", "rw"],
                            ["kir", "ky"],
                            ["kom", "kv"],
                            ["kon", "kg"],
                            ["kor", "ko"],
                            ["kua", "kj"],
                            ["kur", "ku"],
                            ["lao", "lo"],
                            ["lat", "la"],
                            ["lav", "lv"],
                            ["lim", "li"],
                            ["lin", "ln"],
                            ["lit", "lt"],
                            ["ltz", "lb"],
                            ["lub", "lu"],
                            ["lug", "lg"],
                            ["mac", "mk"],
                            ["mah", "mh"],
                            ["mal", "ml"],
                            ["mao", "mi"],
                            ["mar", "mr"],
                            ["may", "ms"],
                            ["mkd", "mk"],
                            ["mlg", "mg"],
                            ["mlt", "mt"],
                            ["mon", "mn"],
                            ["mri", "mi"],
                            ["msa", "ms"],
                            ["mya", "my"],
                            ["nau", "na"],
                            ["nav", "nv"],
                            ["nbl", "nr"],
                            ["nde", "nd"],
                            ["ndo", "ng"],
                            ["nep", "ne"],
                            ["nld", "nl"],
                            ["nno", "nn"],
                            ["nob", "nb"],
                            ["nor", "no"],
                            ["nya", "ny"],
                            ["oci", "oc"],
                            ["oji", "oj"],
                            ["ori", "or"],
                            ["orm", "om"],
                            ["oss", "os"],
                            ["pan", "pa"],
                            ["per", "fa"],
                            ["pli", "pi"],
                            ["pol", "pl"],
                            ["por", "pt"],
                            ["pus", "ps"],
                            ["que", "qu"],
                            ["roh", "rm"],
                            ["ron", "ro"],
                            ["rum", "ro"],
                            ["run", "rn"],
                            ["rus", "ru"],
                            ["sag", "sg"],
                            ["san", "sa"],
                            ["sin", "si"],
                            ["slk", "sk"],
                            ["slo", "sk"],
                            ["slv", "sl"],
                            ["sme", "se"],
                            ["smo", "sm"],
                            ["sna", "sn"],
                            ["snd", "sd"],
                            ["som", "so"],
                            ["sot", "st"],
                            ["spa", "es"],
                            ["sqi", "sq"],
                            ["srd", "sc"],
                            ["srp", "sr"],
                            ["ssw", "ss"],
                            ["sun", "su"],
                            ["swa", "sw"],
                            ["swe", "sv"],
                            ["tah", "ty"],
                            ["tam", "ta"],
                            ["tat", "tt"],
                            ["tel", "te"],
                            ["tgk", "tg"],
                            ["tgl", "tl"],
                            ["tha", "th"],
                            ["tib", "bo"],
                            ["tir", "ti"],
                            ["ton", "to"],
                            ["tsn", "tn"],
                            ["tso", "ts"],
                            ["tuk", "tk"],
                            ["tur", "tr"],
                            ["twi", "tw"],
                            ["uig", "ug"],
                            ["ukr", "uk"],
                            ["urd", "ur"],
                            ["uzb", "uz"],
                            ["ven", "ve"],
                            ["vie", "vi"],
                            ["vol", "vo"],
                            ["wel", "cy"],
                            ["wln", "wa"],
                            ["wol", "wo"],
                            ["xho", "xh"],
                            ["yid", "yi"],
                            ["yor", "yo"],
                            ["zha", "za"],
                            ["zho", "zh"],
                            ["zul", "zu"]
                        ]);

                        function Dt() {
                            this.g = {}
                        }

                        function Rt(e) {
                            this.h = e, this.g = null
                        }

                        function _t(e) {
                            this.h = e, this.g = null
                        }

                        function Pt() {
                            return !(!e.MediaSource || !MediaSource.isTypeSupported)
                        }

                        function Lt(e) {
                            return "" != zt().canPlayType(e)
                        }

                        function Nt() {
                            return !!navigator.userAgent.match(/Edge?\//)
                        }

                        function jt() {
                            return Vt("Xbox One")
                        }

                        function Ot() {
                            return Vt("Tizen")
                        }

                        function Ut() {
                            return Vt("Web0S") && Vt("Chrome/38.0.2125.122 Safari/537.36")
                        }

                        function Bt() {
                            return !!navigator.vendor && navigator.vendor.includes("Apple") && !Ot() && !Vt("PC=EOS") && !Vt("VirginMedia") && !Vt("SOPOpenBrowser") && !Ft() && !Vt("AFT")
                        }

                        function Ft() {
                            return Vt("PlayStation 4")
                        }

                        function Ht() {
                            if (!Bt()) return null;
                            var e = navigator.userAgent.match(/Version\/(\d+)/);
                            return e || (e = navigator.userAgent.match(/OS (\d+)(?:_\d+)?/)) ? parseInt(e[1], 10) : null
                        }

                        function Vt(e) {
                            return (navigator.userAgent || "").includes(e)
                        }

                        function zt() {
                            return Kt || (qt || (qt = new _t((function() {
                                Kt = null
                            }))), (Kt = document.getElementsByTagName("video")[0] || document.getElementsByTagName("audio")[0]) || (Kt = document.createElement("video")), qt.V(1), Kt)
                        }(i = Dt.prototype).push = function(e, t) {
                            this.g.hasOwnProperty(e) ? this.g[e].push(t) : this.g[e] = [t]
                        }, i.get = function(e) {
                            return (e = this.g[e]) ? e.slice() : null
                        }, i.remove = function(e, t) {
                            e in this.g && (this.g[e] = this.g[e].filter((function(e) {
                                return e != t
                            })), 0 == this.g[e].length && delete this.g[e])
                        }, i.forEach = function(e) {
                            for (var t in this.g) e(t, this.g[t])
                        }, i.size = function() {
                            return Object.keys(this.g).length
                        }, i.keys = function() {
                            return Object.keys(this.g)
                        }, Rt.prototype.V = function(t) {
                            var n = this;
                            this.stop();
                            var i = !0,
                                r = null;
                            return this.g = function() {
                                e.clearTimeout(r), i = !1
                            }, r = e.setTimeout((function() {
                                i && n.h()
                            }), 1e3 * t), this
                        }, Rt.prototype.stop = function() {
                            this.g && (this.g(), this.g = null)
                        }, _t.prototype.Zd = function() {
                            return this.stop(), this.h(), this
                        }, _t.prototype.V = function(e) {
                            var t = this;
                            return this.stop(), this.g = new Rt((function() {
                                t.h()
                            })).V(e), this
                        }, _t.prototype.sa = function(e) {
                            var t = this;
                            return this.stop(), this.g = new Rt((function() {
                                t.g.V(e), t.h()
                            })).V(e), this
                        }, _t.prototype.stop = function() {
                            this.g && (this.g.stop(), this.g = null)
                        }, F("shaka.util.Timer", _t), _t.prototype.stop = _t.prototype.stop, _t.prototype.tickEvery = _t.prototype.sa, _t.prototype.tickAfter = _t.prototype.V, _t.prototype.tickNow = _t.prototype.Zd;
                        var qt = null,
                            Kt = null;

                        function Gt() {}

                        function Wt(e, t, n, i, r) {
                            var a = e.variants;
                            (t.length || n.length) && (a = function(e, t, n) {
                                for (var i = {}, r = (t = c(t)).next(); !r.done; i = {
                                        ed: i.ed
                                    }, r = t.next())
                                    if (i.ed = r.value, r = e.filter(function(e) {
                                            return function(t) {
                                                return t.video && t.video.codecs.startsWith(e.ed)
                                            }
                                        }(i)), r.length) {
                                        e = r;
                                        break
                                    }
                                for (i = {}, n = c(n), t = n.next(); !t.done; i = {
                                        $c: i.$c
                                    }, t = n.next())
                                    if (i.$c = t.value, t = e.filter(function(e) {
                                            return function(t) {
                                                return t.audio && t.audio.codecs.startsWith(e.$c)
                                            }
                                        }(i)), t.length) {
                                        e = t;
                                        break
                                    }
                                return e
                            }(a, t, n)), t = function(e) {
                                for (var t = new Dt, n = (e = c(e)).next(); !n.done; n = e.next()) {
                                    var i = Yt(n = n.value);
                                    t.push(i, n)
                                }
                                return t
                            }(a = gn(a, i)), t = function(e) {
                                var t = 0,
                                    n = new Map,
                                    i = e.size();
                                return e.forEach((function(e, r) {
                                    for (var a = (r = c(r)).next(); !a.done; a = r.next()) {
                                        var o = (a = a.value).video;
                                        if (o && o.width && o.height) {
                                            o = o.width * o.height * (o.frameRate || 1), n.has(o) || n.set(o, new Dt);
                                            var s = n.get(o);
                                            s.push(e, a), s.size() === i && (t = Math.max(t, o))
                                        }
                                    }
                                })), t ? n.get(t) : e
                            }(t);
                            var o = function(e, t) {
                                for (var n = (t = c(t)).next(); !n.done; n = t.next())
                                    if ((n = n.value) == Tn || n == Sn) {
                                        if (1 == (e = Xt(e, n)).size()) return e.keys()[0]
                                    } else if (n == An) break;
                                return function(e) {
                                    var t = "",
                                        n = 1 / 0;
                                    return e.forEach((function(e, i) {
                                        for (var r = 0, a = 0, o = (i = c(i)).next(); !o.done; o = i.next()) r += o.value.bandwidth || 0, ++a;
                                        (r /= a) < n && (t = e, n = r)
                                    })), t
                                }(e)
                            }(t, r);
                            e.variants = e.variants.filter((function(e) {
                                return Yt(e) == o
                            }))
                        }

                        function Xt(e, t) {
                            var n = 0,
                                i = new Dt;
                            return e.forEach((function(e, r) {
                                for (var a = 0, o = 0, s = c(r), u = s.next(); !u.done; u = s.next())(u = u.value).decodingInfos.length && (a += u.decodingInfos[0][t] ? 1 : 0, o++);
                                (a /= o) > n ? (i.g = {}, i.push(e, r), n = a) : a == n && i.push(e, r)
                            })), i
                        }

                        function Yt(e) {
                            var t = "";
                            e.video && (t = dt(e.video.codecs));
                            var n = "";
                            return e.audio && (n = dt(e.audio.codecs)), t + "-" + n
                        }

                        function Jt(e, t, n) {
                            function i(e, t, n) {
                                return e >= t && e <= n
                            }
                            var r = e.video;
                            return !(r && r.width && r.height && (!i(r.width, t.minWidth, Math.min(t.maxWidth, n.width)) || !i(r.height, t.minHeight, Math.min(t.maxHeight, n.height)) || !i(r.width * r.height, t.minPixels, t.maxPixels)) || e && e.video && e.video.frameRate && !i(e.video.frameRate, t.minFrameRate, t.maxFrameRate) || !i(e.bandwidth, t.minBandwidth, t.maxBandwidth))
                        }

                        function $t(e, t) {
                            return _((function(n) {
                                return 1 == n.g ? x(n, function(e, t) {
                                    return _((function(n) {
                                        if (1 == n.g) return x(n, en(e.variants, t, !1, []), 2);
                                        e.variants = e.variants.filter((function(e) {
                                            var t = e.video;
                                            if (t) {
                                                var n = rn(t.codecs);
                                                if (t.codecs.includes(",")) {
                                                    var i = t.codecs.split(",");
                                                    n = rn(n = nt("video", i)), i = nn(i = nt("audio", i));
                                                    var r = ct(t.mimeType, i, "audio");
                                                    if (!Y(r)) return !1;
                                                    n = [n, i].join()
                                                }
                                                if (!Y(i = ct(t.mimeType, n, "video"))) return !1;
                                                t.codecs = n
                                            }
                                            if (n = e.audio) {
                                                if (i = nn(n.codecs), !Y(r = ct(n.mimeType, i, "audio"))) return !1;
                                                n.codecs = i
                                            }
                                            return jt() && t && (t.width && 1920 < t.width || t.height && 1080 < t.height) && (t.codecs.includes("avc1.") || t.codecs.includes("avc3.")) ? (yn(e), !1) : ((t = e.decodingInfos.some((function(e) {
                                                return e.supported
                                            }))) || yn(e), t)
                                        })), T(n)
                                    }))
                                }(t, 0 < t.offlineSessionIds.length), 2) : (an(e, t), function(e) {
                                    e.textStreams = e.textStreams.filter((function(e) {
                                        return mt(e = ut(e.mimeType, e.codecs))
                                    }))
                                }(t), x(n, function(e) {
                                    var t, n, i, r, a, o, s;
                                    return _((function(u) {
                                        switch (u.g) {
                                            case 1:
                                                t = [], n = c(e.imageStreams), i = n.next();
                                            case 2:
                                                if (i.done) {
                                                    u.B(4);
                                                    break
                                                }
                                                if (r = i.value, a = r.mimeType, kn.has(a)) {
                                                    u.B(5);
                                                    break
                                                }
                                                if (!(o = En.get(a))) {
                                                    kn.set(a, !1), u.B(5);
                                                    break
                                                }
                                                return x(u, function(e) {
                                                    return new Promise((function(t) {
                                                        var n = new Image;
                                                        n.src = e, "decode" in n ? n.decode().then((function() {
                                                            t(!0)
                                                        })).catch((function() {
                                                            t(!1)
                                                        })) : n.onload = n.onerror = function() {
                                                            t(2 === n.height)
                                                        }
                                                    }))
                                                }(o), 7);
                                            case 7:
                                                s = u.h, kn.set(a, s);
                                            case 5:
                                                kn.get(a) && t.push(r), i = n.next(), u.B(2);
                                                break;
                                            case 4:
                                                e.imageStreams = t, T(u)
                                        }
                                    }))
                                }(t), 0))
                            }))
                        }

                        function Qt(e) {
                            var t = [];
                            for (n in e) t.push(n);
                            t.sort();
                            for (var n = [], i = (t = c(t)).next(); !i.done; i = t.next()) {
                                var r = i.value;
                                i = JSON.stringify(r), (r = e[r]) instanceof Object ? (r = Qt(r), n.push(i + ":" + r)) : (r = JSON.stringify(r), n.push(i + ":" + r))
                            }
                            return "{" + n.join(",") + "}"
                        }

                        function Zt(e, t) {
                            var n, i, r;
                            return _((function(a) {
                                switch (a.g) {
                                    case 1:
                                        if (n = Qt(t), S(a, 2), (i = wn)[n]) {
                                            e.decodingInfos.push(i[n]), a.B(4);
                                            break
                                        }
                                        return x(a, navigator.mediaCapabilities.decodingInfo(t), 5);
                                    case 5:
                                        r = a.h, i[n] = r, e.decodingInfos.push(r);
                                    case 4:
                                        A(a, 0);
                                        break;
                                    case 2:
                                        k(a), JSON.stringify(t), T(a)
                                }
                            }))
                        }

                        function en(e, t, n, i) {
                            var r, a, o, s, u, l, d, h, f, p, g, m, v, y, b, w;
                            return _((function(T) {
                                switch (T.g) {
                                    case 1:
                                        if (e.some((function(e) {
                                                return e.decodingInfos.length
                                            }))) return T.return();
                                        r = {}, a = c(i), o = a.next();
                                    case 2:
                                        if (o.done) {
                                            T.B(4);
                                            break
                                        }
                                        r.bd = o.value, s = !1, u = c(e), l = u.next();
                                    case 5:
                                        if (l.done) {
                                            T.B(7);
                                            break
                                        }
                                        d = l.value, h = tn(d, t, n).filter((S = r, function(e) {
                                            return (e.keySystemConfiguration && e.keySystemConfiguration.keySystem) === S.bd
                                        })), f = c(h), p = f.next();
                                    case 8:
                                        if (p.done) {
                                            T.B(10);
                                            break
                                        }
                                        return g = p.value, x(T, Zt(d, g), 9);
                                    case 9:
                                        p = f.next(), T.B(8);
                                        break;
                                    case 10:
                                        d.decodingInfos.length && (s = !0), l = u.next(), T.B(5);
                                        break;
                                    case 7:
                                        if (s) return T.return();
                                        r = {
                                            bd: r.bd
                                        }, o = a.next(), T.B(2);
                                        break;
                                    case 4:
                                        m = c(e), l = m.next();
                                    case 12:
                                        if (l.done) {
                                            T.B(0);
                                            break
                                        }
                                        v = l.value, y = tn(v, t, n).filter((function(e) {
                                            return !(e = e.keySystemConfiguration && e.keySystemConfiguration.keySystem) || !i.includes(e)
                                        })), b = c(y), p = b.next();
                                    case 15:
                                        if (p.done) {
                                            l = m.next(), T.B(12);
                                            break
                                        }
                                        return w = p.value, x(T, Zt(v, w), 16);
                                    case 16:
                                        p = b.next(), T.B(15)
                                }
                                var S
                            }))
                        }

                        function tn(e, t, n) {
                            var i = e.audio,
                                r = e.video;
                            if (n = {
                                    type: n ? "file" : "media-source"
                                }, r) {
                                var a = r.codecs;
                                if (r.codecs.includes(",")) {
                                    var o = r.codecs.split(",");
                                    a = rn(a = nt("video", o)), o = nn(o = nt("audio", o)), o = ct(r.mimeType, o, "audio"), n.audio = {
                                        contentType: o,
                                        channels: 2,
                                        bitrate: e.bandwidth || 1,
                                        samplerate: 1,
                                        spatialRendering: !1
                                    }
                                }
                                if (a = rn(a), a = ct(r.mimeType, a, "video"), n.video = {
                                        contentType: a,
                                        width: r.width || 64,
                                        height: r.height || 64,
                                        bitrate: r.bandwidth || e.bandwidth || 1,
                                        framerate: r.frameRate || 1
                                    }, r.hdr) switch (r.hdr) {
                                    case "SDR":
                                        n.video.transferFunction = "srgb";
                                        break;
                                    case "PQ":
                                        n.video.transferFunction = "pq";
                                        break;
                                    case "HLG":
                                        n.video.transferFunction = "hlg"
                                }
                            }
                            if (i && (a = nn(i.codecs), a = ct(i.mimeType, a, "audio"), n.audio = {
                                    contentType: a,
                                    channels: i.channelsCount || 2,
                                    bitrate: i.bandwidth || e.bandwidth || 1,
                                    samplerate: i.audioSamplingRate || 1,
                                    spatialRendering: i.spatialAudio
                                }), !(o = (e.video ? e.video.drmInfos : []).concat(e.audio ? e.audio.drmInfos : [])).length) return [n];
                            e = [], a = new Map;
                            for (var s = (o = c(o)).next(); !s.done; s = o.next()) {
                                var u = s.value;
                                a.get(u.keySystem) || a.set(u.keySystem, []), a.get(u.keySystem).push(u)
                            }
                            o = t ? "required" : "optional", t = t ? ["persistent-license"] : ["temporary"];
                            for (var l = (u = c(a.keys())).next(); !l.done; l = u.next()) {
                                var d = l.value;
                                l = Object.assign({}, n);
                                var h = a.get(d);
                                for (d = {
                                        keySystem: d,
                                        initDataType: "cenc",
                                        persistentState: o,
                                        distinctiveIdentifier: "optional",
                                        sessionTypes: t
                                    }, s = (h = c(h)).next(); !s.done; s = h.next()) {
                                    if ((s = s.value).initData && s.initData.length) {
                                        for (var f = new Set, p = c(s.initData), g = p.next(); !g.done; g = p.next()) f.add(g.value.initDataType);
                                        d.initDataType = s.initData[0].initDataType
                                    }
                                    s.distinctiveIdentifierRequired && (d.distinctiveIdentifier = "required"), s.persistentStateRequired && (d.persistentState = "required"), s.sessionType && (d.sessionTypes = [s.sessionType]), i && ("" != s.audioRobustness ? d.audio ? d.audio.robustness = d.audio.robustness || s.audioRobustness : d.audio = {
                                        robustness: s.audioRobustness
                                    } : d.audio || (d.audio = {})), r && ("" != s.videoRobustness ? d.video ? d.video.robustness = d.video.robustness || s.videoRobustness : d.video = {
                                        robustness: s.videoRobustness
                                    } : d.video || (d.video = {}))
                                }
                                l.keySystemConfiguration = d, e.push(l)
                            }
                            return e
                        }

                        function nn(e) {
                            return "fLaC" === e ? "flac" : "Opus" === e ? "opus" : Ot() && "ac-3" == e.toLowerCase() ? "ec-3" : e
                        }

                        function rn(e) {
                            if (e.includes("avc1")) {
                                var t = e.split(".");
                                if (3 == t.length) return e = t.shift() + ".", (e += parseInt(t.shift(), 10).toString(16)) + ("000" + parseInt(t.shift(), 10).toString(16)).slice(-4)
                            } else if ("vp9" == e) return "vp09.00.41.08";
                            return e
                        }

                        function an(e, t) {
                            t.variants = t.variants.filter((function(t) {
                                var n = t.audio;
                                return t = t.video, !(n && e && e.audio && !on(n, e.audio) || t && e && e.video && !on(t, e.video))
                            }))
                        }

                        function on(e, t) {
                            return e.mimeType == t.mimeType && e.codecs.split(".")[0] == t.codecs.split(".")[0]
                        }

                        function sn(e) {
                            var t = e.audio,
                                n = e.video,
                                i = t ? t.mimeType : null,
                                r = n ? n.mimeType : null,
                                a = t ? t.codecs : null,
                                o = n ? n.codecs : null,
                                s = [];
                            o && s.push(o), a && s.push(a);
                            var u = [];
                            n && u.push(n.mimeType), t && u.push(t.mimeType), u = u[0] || null;
                            var l = [];
                            t && l.push(t.kind), n && l.push(n.kind), l = l[0] || null;
                            var d = new Set;
                            if (t)
                                for (var h = c(t.roles), f = h.next(); !f.done; f = h.next()) d.add(f.value);
                            if (n)
                                for (f = (h = c(n.roles)).next(); !f.done; f = h.next()) d.add(f.value);
                            return e = {
                                id: e.id,
                                active: !1,
                                type: "variant",
                                bandwidth: e.bandwidth,
                                language: e.language,
                                label: null,
                                kind: l,
                                width: null,
                                height: null,
                                frameRate: null,
                                pixelAspectRatio: null,
                                hdr: null,
                                mimeType: u,
                                audioMimeType: i,
                                videoMimeType: r,
                                codecs: s.join(", "),
                                audioCodec: a,
                                videoCodec: o,
                                primary: e.primary,
                                roles: Array.from(d),
                                audioRoles: null,
                                forced: !1,
                                videoId: null,
                                audioId: null,
                                channelsCount: null,
                                audioSamplingRate: null,
                                spatialAudio: !1,
                                tilesLayout: null,
                                audioBandwidth: null,
                                videoBandwidth: null,
                                originalVideoId: null,
                                originalAudioId: null,
                                originalTextId: null,
                                originalImageId: null,
                                accessibilityPurpose: null,
                                originalLanguage: null
                            }, n && (e.videoId = n.id, e.originalVideoId = n.originalId, e.width = n.width || null, e.height = n.height || null, e.frameRate = n.frameRate || null, e.pixelAspectRatio = n.pixelAspectRatio || null, e.videoBandwidth = n.bandwidth || null, e.hdr = n.hdr || null), t && (e.audioId = t.id, e.originalAudioId = t.originalId, e.channelsCount = t.channelsCount, e.audioSamplingRate = t.audioSamplingRate, e.audioBandwidth = t.bandwidth || null, e.spatialAudio = t.spatialAudio, e.label = t.label, e.audioRoles = t.roles, e.accessibilityPurpose = t.accessibilityPurpose, e.originalLanguage = t.originalLanguage), e
                        }

                        function un(e) {
                            return {
                                id: e.id,
                                active: !1,
                                type: rt,
                                bandwidth: 0,
                                language: e.language,
                                label: e.label,
                                kind: e.kind || null,
                                width: null,
                                height: null,
                                frameRate: null,
                                pixelAspectRatio: null,
                                hdr: null,
                                mimeType: e.mimeType,
                                audioMimeType: null,
                                videoMimeType: null,
                                codecs: e.codecs || null,
                                audioCodec: null,
                                videoCodec: null,
                                primary: e.primary,
                                roles: e.roles,
                                audioRoles: null,
                                forced: e.forced,
                                videoId: null,
                                audioId: null,
                                channelsCount: null,
                                audioSamplingRate: null,
                                spatialAudio: !1,
                                tilesLayout: null,
                                audioBandwidth: null,
                                videoBandwidth: null,
                                originalVideoId: null,
                                originalAudioId: null,
                                originalTextId: e.originalId,
                                originalImageId: null,
                                accessibilityPurpose: e.accessibilityPurpose,
                                originalLanguage: e.originalLanguage
                            }
                        }

                        function ln(e) {
                            var t = e.width || null,
                                n = e.height || null,
                                i = null;
                            e.segmentIndex && (i = e.segmentIndex.get(0));
                            var r = e.tilesLayout;
                            return i && (r = i.tilesLayout || r), r && null != t && (t /= Number(r.split("x")[0])), r && null != n && (n /= Number(r.split("x")[1])), {
                                id: e.id,
                                active: !1,
                                type: "image",
                                bandwidth: e.bandwidth || 0,
                                language: "",
                                label: null,
                                kind: null,
                                width: t,
                                height: n,
                                frameRate: null,
                                pixelAspectRatio: null,
                                hdr: null,
                                mimeType: e.mimeType,
                                audioMimeType: null,
                                videoMimeType: null,
                                codecs: null,
                                audioCodec: null,
                                videoCodec: null,
                                primary: !1,
                                roles: [],
                                audioRoles: null,
                                forced: !1,
                                videoId: null,
                                audioId: null,
                                channelsCount: null,
                                audioSamplingRate: null,
                                spatialAudio: !1,
                                tilesLayout: r || null,
                                audioBandwidth: null,
                                videoBandwidth: null,
                                originalVideoId: null,
                                originalAudioId: null,
                                originalTextId: null,
                                originalImageId: e.originalId,
                                accessibilityPurpose: null,
                                originalLanguage: null
                            }
                        }

                        function cn(e) {
                            return e.__shaka_id || (e.__shaka_id = xn++), e.__shaka_id
                        }

                        function dn(e) {
                            var t = fn(e);
                            return t.active = "disabled" != e.mode, t.type = "text", t.originalTextId = e.id, "captions" == e.kind && (t.mimeType = "application/cea-608"), "subtitles" == e.kind && (t.mimeType = "text/vtt"), e.kind && (t.roles = [e.kind]), "forced" == e.kind && (t.forced = !0), t
                        }

                        function hn(e) {
                            var t = fn(e);
                            return t.active = e.enabled, t.type = "variant", t.originalAudioId = e.id, "main" == e.kind && (t.primary = !0), e.kind && (t.roles = [e.kind], t.audioRoles = [e.kind], t.label = e.label), t
                        }

                        function fn(e) {
                            var t = e.language;
                            return {
                                id: cn(e),
                                active: !1,
                                type: "",
                                bandwidth: 0,
                                language: At(t || "und"),
                                label: e.label,
                                kind: e.kind,
                                width: null,
                                height: null,
                                frameRate: null,
                                pixelAspectRatio: null,
                                hdr: null,
                                mimeType: null,
                                audioMimeType: null,
                                videoMimeType: null,
                                codecs: null,
                                audioCodec: null,
                                videoCodec: null,
                                primary: !1,
                                roles: [],
                                forced: !1,
                                audioRoles: null,
                                videoId: null,
                                audioId: null,
                                channelsCount: null,
                                audioSamplingRate: null,
                                spatialAudio: !1,
                                tilesLayout: null,
                                audioBandwidth: null,
                                videoBandwidth: null,
                                originalVideoId: null,
                                originalAudioId: null,
                                originalTextId: null,
                                originalImageId: null,
                                accessibilityPurpose: null,
                                originalLanguage: t
                            }
                        }

                        function pn(e) {
                            return e.allowedByApplication && e.allowedByKeySystem && 0 == e.disabledUntilTime
                        }

                        function gn(e, t) {
                            for (var n = e.filter((function(e) {
                                    return e.audio && e.audio.channelsCount
                                })), i = new Map, r = (n = c(n)).next(); !r.done; r = n.next()) {
                                var a = (r = r.value).audio.channelsCount;
                                i.has(a) || i.set(a, []), i.get(a).push(r)
                            }
                            return 0 == (n = Array.from(i.keys())).length ? e : (e = n.filter((function(e) {
                                return e <= t
                            }))).length ? i.get(Math.max.apply(Math, d(e))) : i.get(Math.min.apply(Math, d(n)))
                        }

                        function mn(e, t, n, i) {
                            var r = e,
                                a = e.filter((function(e) {
                                    return e.primary
                                }));
                            a.length && (r = a);
                            var o = r.length ? r[0].language : "";
                            if (r = r.filter((function(e) {
                                    return e.language == o
                                })), t) {
                                var s = It(At(t), e.map((function(e) {
                                    return e.language
                                })));
                                s && (r = e.filter((function(e) {
                                    return At(e.language) == s
                                })))
                            }
                            if (r = r.filter((function(e) {
                                    return e.forced == i
                                })), n) {
                                if ((e = vn(r, n)).length) return e
                            } else if (e = r.filter((function(e) {
                                    return 0 == e.roles.length
                                })), e.length) return e;
                            return e = r.map((function(e) {
                                return e.roles
                            })).reduce($e, []), e.length ? vn(r, e[0]) : r
                        }

                        function vn(e, t) {
                            return e.filter((function(e) {
                                return e.roles.includes(t)
                            }))
                        }

                        function yn(e) {
                            var t = [];
                            return e.audio && t.push(bn(e.audio)), e.video && t.push(bn(e.video)), t.join(", ")
                        }

                        function bn(e) {
                            return "audio" == e.type ? "type=audio codecs=" + e.codecs + " bandwidth=" + e.bandwidth + " channelsCount=" + e.channelsCount + " audioSamplingRate=" + e.audioSamplingRate : "video" == e.type ? "type=video codecs=" + e.codecs + " bandwidth=" + e.bandwidth + " frameRate=" + e.frameRate + " width=" + e.width + " height=" + e.height : "unexpected stream type"
                        }
                        F("shaka.util.StreamUtils", Gt), Gt.meetsRestrictions = Jt;
                        var wn = {},
                            xn = 0,
                            Tn = "smooth",
                            Sn = "powerEfficient",
                            An = "bandwidth",
                            kn = (new Map).set("image/svg+xml", !0).set("image/png", !0).set("image/jpeg", !0).set("image/jpg", !0),
                            En = (new Map).set("image/webp", "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA").set("image/avif", "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=");

                        function Cn() {
                            var e = this;
                            this.l = null, this.o = !1, this.i = new z, this.u = null, navigator.connection && navigator.connection.addEventListener && (this.u = function() {
                                if (e.o && e.g.useNetworkInformation) {
                                    e.i = new z, e.g && e.i.configure(e.g.advanced);
                                    var t = e.chooseVariant();
                                    t && e.l(t, e.g.clearBufferSwitch, e.g.safeMarginSwitch)
                                }
                            }, navigator.connection.addEventListener("change", this.u)), this.m = [], this.A = 1, this.D = !1, this.h = this.j = this.g = this.s = null, this.C = new _t((function() {
                                if (e.g.restrictToElementSize) {
                                    var t = e.chooseVariant();
                                    t && e.l(t, e.g.clearBufferSwitch, e.g.safeMarginSwitch)
                                }
                            }))
                        }

                        function In(e) {
                            var t = e.g.defaultBandwidthEstimate;
                            return navigator.connection && navigator.connection.downlink && e.g.useNetworkInformation && (t = 1e6 * navigator.connection.downlink), t
                        }

                        function Mn(e, t, n, i) {
                            return e && (t = t.filter((function(t) {
                                return Jt(t, e, {
                                    width: i,
                                    height: n
                                })
                            }))), t.sort((function(e, t) {
                                return e.bandwidth - t.bandwidth
                            }))
                        }(i = Cn.prototype).stop = function() {
                            this.l = null, this.o = !1, this.m = [], this.A = 1, this.j = this.s = null, this.h && (this.h.disconnect(), this.h = null), this.C.stop()
                        }, i.release = function() {
                            navigator.connection && navigator.connection.removeEventListener && (navigator.connection.removeEventListener("change", this.u), this.u = null), this.C = null
                        }, i.init = function(e) {
                            this.l = e
                        }, i.chooseVariant = function() {
                            var t = 1 / 0,
                                n = 1 / 0;
                            this.g.restrictToScreenSize && (n = this.g.ignoreDevicePixelRatio ? 1 : e.devicePixelRatio, t = e.screen.height * n, n *= e.screen.width), this.h && this.g.restrictToElementSize && (n = this.g.ignoreDevicePixelRatio ? 1 : e.devicePixelRatio, t = this.j.clientHeight * n, n *= this.j.clientWidth), t = Mn(this.g.restrictions, this.m, t, n), n = this.i.getBandwidthEstimate(In(this)), this.m.length && !t.length && (t = [(t = Mn(null, this.m, 1 / 0, 1 / 0))[0]]);
                            for (var i = t[0] || null, r = 0; r < t.length; r++) {
                                for (var a = t[r], o = isNaN(this.A) ? 1 : Math.abs(this.A), s = o * a.bandwidth / this.g.bandwidthDowngradeTarget, u = {
                                        bandwidth: 1 / 0
                                    }, l = r + 1; l < t.length; l++)
                                    if (a.bandwidth != t[l].bandwidth) {
                                        u = t[l];
                                        break
                                    }
                                o = o * u.bandwidth / this.g.bandwidthUpgradeTarget, n >= s && n <= o && i.bandwidth != a.bandwidth && (i = a)
                            }
                            return this.s = Date.now(), i
                        }, i.enable = function() {
                            this.o = !0
                        }, i.disable = function() {
                            this.o = !1
                        }, i.segmentDownloaded = function(e, t) {
                            if (this.i.sample(e, t), null != this.s && this.o) e: {
                                if (this.D) {
                                    if (Date.now() - this.s < 1e3 * this.g.switchInterval) break e
                                } else {
                                    if (!((e = this.i).g >= e.i)) break e;
                                    this.D = !0
                                }
                                e = this.chooseVariant(),
                                this.i.getBandwidthEstimate(In(this)),
                                e && this.l(e, this.g.clearBufferSwitch, this.g.safeMarginSwitch)
                            }
                        }, i.getBandwidthEstimate = function() {
                            return this.i.getBandwidthEstimate(In(this))
                        }, i.setVariants = function(e) {
                            this.m = e
                        }, i.playbackRateChanged = function(e) {
                            this.A = e
                        }, i.setMediaElement = function(t) {
                            var n = this;
                            this.j = t, this.h && (this.h.disconnect(), this.h = null), this.j && "ResizeObserver" in e && (this.h = new ResizeObserver((function() {
                                n.C.V(Dn)
                            })), this.h.observe(this.j))
                        }, i.configure = function(e) {
                            this.g = e, this.i && this.g && this.i.configure(this.g.advanced)
                        }, F("shaka.abr.SimpleAbrManager", Cn), Cn.prototype.configure = Cn.prototype.configure, Cn.prototype.setMediaElement = Cn.prototype.setMediaElement, Cn.prototype.playbackRateChanged = Cn.prototype.playbackRateChanged, Cn.prototype.setVariants = Cn.prototype.setVariants, Cn.prototype.getBandwidthEstimate = Cn.prototype.getBandwidthEstimate, Cn.prototype.segmentDownloaded = Cn.prototype.segmentDownloaded, Cn.prototype.disable = Cn.prototype.disable, Cn.prototype.enable = Cn.prototype.enable, Cn.prototype.chooseVariant = Cn.prototype.chooseVariant, Cn.prototype.init = Cn.prototype.init, Cn.prototype.release = Cn.prototype.release, Cn.prototype.stop = Cn.prototype.stop;
                        var Dn = 1;

                        function Rn(e, t, n, i, r) {
                            if (i >= r) return null;
                            for (var a = -1, o = -1, s = 0; s < n.length; s++)
                                if (n[s].some((function(e) {
                                        return null != e && "" != e.g.trim()
                                    }))) {
                                    a = s;
                                    break
                                }
                            for (s = n.length - 1; 0 <= s; s--)
                                if (n[s].some((function(e) {
                                        return null != e && "" != e.g.trim()
                                    }))) {
                                    o = s;
                                    break
                                }
                            if (-1 === a || -1 === o) return null;
                            for (var u = s = !1, l = "white", c = "black", d = _n(i, r, s, u, l, c); a <= o; a++) {
                                for (var h = n[a], f = -1, p = -1, g = 0; g < h.length; g++)
                                    if (null != h[g] && "" !== h[g].g.trim()) {
                                        f = g;
                                        break
                                    }
                                for (g = h.length - 1; 0 <= g; g--)
                                    if (null != h[g] && "" !== h[g].g.trim()) {
                                        p = g;
                                        break
                                    }
                                if (-1 === f || -1 === p) h = Pn(i, r), e.g.push(h);
                                else {
                                    for (; f <= p; f++)
                                        if (g = h[f]) {
                                            var m = g.l,
                                                v = g.i,
                                                y = g.j,
                                                b = g.h;
                                            m == s && v == u && y == l && b == c || (d.S && e.g.push(d), d = _n(i, r, m, v, y, b), s = m, u = v, l = y, c = b), d.S += g.g
                                        } else d.S += " ";
                                    d.S && e.g.push(d), a !== o && (d = Pn(i, r), e.g.push(d)), d = _n(i, r, s, u, l, c)
                                }
                            }
                            return e.g.length ? {
                                cue: e,
                                stream: t
                            } : null
                        }

                        function _n(e, t, n, i, r, a) {
                            return e = new fe(e, t, ""), n && e.o.push("underline"), i && (e.m = "italic"), e.l = r, e.backgroundColor = a, e
                        }

                        function Pn(e, t) {
                            return (e = new fe(e, t, "")).s = !0, e
                        }

                        function Ln(e, t, n, i, r) {
                            this.g = e, this.l = t, this.i = n, this.h = i, this.j = r
                        }

                        function Nn(e, t) {
                            this.i = [], this.g = 1, this.h = 0, this.u = e, this.s = t, this.j = this.m = !1, this.l = "white", this.o = "black", On(this)
                        }

                        function jn(e, t, n) {
                            var i = "CC" + (e.u << 1 | e.s + 1),
                                r = new fe(t, n, "");
                            return r.u = 1, r.h = e.g / 16 * 100, Rn(r, i, e.i, t, n)
                        }

                        function On(e) {
                            Fn(e, 0, 15), e.g = 1
                        }

                        function Un(e, t, n) {
                            if (!(32 > n || 127 < n)) {
                                var i = "";
                                switch (t) {
                                    case Hn:
                                        i = Kn.has(n) ? Kn.get(n) : String.fromCharCode(n);
                                        break;
                                    case Vn:
                                        i = Gn.get(n);
                                        break;
                                    case zn:
                                        e.i[e.g].pop(), i = Wn.get(n);
                                        break;
                                    case qn:
                                        e.i[e.g].pop(), i = Xn.get(n)
                                }
                                i && e.i[e.g].push(new Ln(i, e.m, e.j, e.o, e.l))
                            }
                        }

                        function Bn(e, t, n, i) {
                            if (!(0 > n || 0 > t))
                                if (t >= n)
                                    for (--i; 0 <= i; i--) e.i[t + i] = e.i[n + i].map((function(e) {
                                        return e
                                    }));
                                else
                                    for (var r = 0; r < i; r++) e.i[t + r] = e.i[n + r].map((function(e) {
                                        return e
                                    }))
                        }

                        function Fn(e, t, n) {
                            for (var i = 0; i <= n; i++) e.i[t + i] = []
                        }
                        var Hn = 0,
                            Vn = 1,
                            zn = 2,
                            qn = 3,
                            Kn = new Map([
                                [39, "’"],
                                [42, "á"],
                                [92, "é"],
                                [92, "é"],
                                [94, "í"],
                                [95, "ó"],
                                [96, "ú"],
                                [123, "ç"],
                                [124, "÷"],
                                [125, "Ñ"],
                                [126, "ñ"],
                                [127, "█"]
                            ]),
                            Gn = new Map([
                                [48, "®"],
                                [49, "°"],
                                [50, "½"],
                                [51, "¿"],
                                [52, "™"],
                                [53, "¢"],
                                [54, "£"],
                                [55, "♪"],
                                [56, "à"],
                                [57, "⠀"],
                                [58, "è"],
                                [59, "â"],
                                [60, "ê"],
                                [61, "î"],
                                [62, "ô"],
                                [63, "û"]
                            ]),
                            Wn = new Map([
                                [32, "Á"],
                                [33, "É"],
                                [34, "Ó"],
                                [35, "Ú"],
                                [36, "Ü"],
                                [37, "ü"],
                                [38, "‘"],
                                [39, "¡"],
                                [40, "*"],
                                [41, "'"],
                                [42, "─"],
                                [43, "©"],
                                [44, "℠"],
                                [45, "·"],
                                [46, "“"],
                                [47, "”"],
                                [48, "À"],
                                [49, "Â"],
                                [50, "Ç"],
                                [51, "È"],
                                [52, "Ê"],
                                [53, "Ë"],
                                [54, "ë"],
                                [55, "Î"],
                                [56, "Ï"],
                                [57, "ï"],
                                [58, "Ô"],
                                [59, "Ù"],
                                [60, "ù"],
                                [61, "Û"],
                                [62, "«"],
                                [63, "»"]
                            ]),
                            Xn = new Map([
                                [32, "Ã"],
                                [33, "ã"],
                                [34, "Í"],
                                [35, "Ì"],
                                [36, "ì"],
                                [37, "Ò"],
                                [38, "ò"],
                                [39, "Õ"],
                                [40, "õ"],
                                [41, "{"],
                                [42, "}"],
                                [43, "\\"],
                                [44, "^"],
                                [45, "_"],
                                [46, "|"],
                                [47, "~"],
                                [48, "Ä"],
                                [49, "ä"],
                                [50, "Ö"],
                                [51, "ö"],
                                [52, "ß"],
                                [53, "¥"],
                                [54, "¤"],
                                [55, "│"],
                                [56, "Å"],
                                [57, "å"],
                                [58, "Ø"],
                                [59, "ø"],
                                [60, "┌"],
                                [61, "┐"],
                                [62, "└"],
                                [63, "┘"]
                            ]);

                        function Yn(e, t) {
                            this.h = Zn, this.o = new Nn(e, t), this.i = new Nn(e, t), this.g = this.j = new Nn(e, t), this.l = 0, this.m = null
                        }

                        function Jn(e, t, n) {
                            e.g = e.i;
                            var i = e.g,
                                r = null;
                            return e.h !== ti && e.h !== ni && (r = jn(i, e.l, n), (n = e.i).g = 0 < n.h ? n.h : 0, Fn(n, 0, 15), (n = e.j).g = 0 < n.h ? n.h : 0, Fn(n, 0, 15), i.g = 15), e.h = ti, i.h = t, r
                        }

                        function $n(e) {
                            e.h = ei, e.g = e.j, e.g.h = 0
                        }

                        function Qn(e) {
                            W("Cea608DataChannel", "CEA-608 text mode entered, but is unsupported"), e.g = e.o, e.h = ni
                        }
                        var Zn = 0,
                            ei = 1,
                            ti = 3,
                            ni = 4,
                            ii = "black green blue cyan red yellow magenta black".split(" "),
                            ri = "white green blue cyan red yellow magenta white_italics".split(" ");

                        function ai() {
                            this.l = !1, this.A = this.D = 0, this.C = fi, this.i = [], this.g = this.h = this.j = 0, this.u = this.o = !1, this.s = "white", this.m = "black", oi(this)
                        }

                        function oi(e) {
                            e.i = [];
                            for (var t = 0; 16 > t; t++) e.i.push(si())
                        }

                        function si() {
                            for (var e = [], t = 0; 42 > t; t++) e.push(null);
                            return e
                        }

                        function ui(e, t) {
                            li(e) && (e.i[e.h][e.g] = new Ln(t, e.u, e.o, e.m, e.s), e.g++)
                        }

                        function li(e) {
                            var t = e.g < e.A && 0 <= e.g;
                            return e.h < e.D && 0 <= e.h && t
                        }

                        function ci(e, t, n) {
                            var i = new fe(e.j, t, "");
                            return i.textAlign = e.C === di ? "left" : e.C === hi ? "right" : me, (n = Rn(i, "svc" + n, e.i, e.j, t)) && (e.j = t), n
                        }
                        ai.prototype.isVisible = function() {
                            return this.l
                        };
                        var di = 0,
                            hi = 1,
                            fi = 2;

                        function pi() {
                            this.i = [], this.h = null, this.g = 0
                        }

                        function gi(e, t) {
                            3 === t.type ? (e.g = 2 * (63 & t.value) - 1, e.h = []) : e.h && (0 < e.g && (e.h.push(t), e.g--), 0 === e.g && (e.i.push(new mi(e.h)), e.h = null, e.g = 0))
                        }

                        function mi(e) {
                            this.g = 0, this.h = e
                        }

                        function vi(e) {
                            if (!e.ea()) throw new Ye(2, 2, 3e3);
                            return e.h[e.g++]
                        }

                        function yi(e) {
                            this.i = e, this.h = [null, null, null, null, null, null, null, null], this.g = null
                        }

                        function bi(e, t, n, i) {
                            if (128 <= n && 135 >= n) i = 7 & n, e.h[i] && (e.g = e.h[i]);
                            else {
                                if (136 === n) {
                                    n = vi(t).value, t = null;
                                    for (var r = (n = c(wi(e, n))).next(); !r.done; r = n.next())(r = e.h[r.value]).isVisible() && (t = ci(r, i, e.i)), oi(r);
                                    return t
                                }
                                if (137 === n)
                                    for (n = (t = c(wi(e, t = vi(t).value))).next(); !n.done; n = t.next())(n = e.h[n.value]).isVisible() || (n.j = i), n.l = !0;
                                else {
                                    if (138 === n) {
                                        for (n = vi(t).value, t = null, r = (n = c(wi(e, n))).next(); !r.done; r = n.next())(r = e.h[r.value]).isVisible() && (t = ci(r, i, e.i)), r.l = !1;
                                        return t
                                    }
                                    if (139 === n) {
                                        for (n = vi(t).value, t = null, r = (n = c(wi(e, n))).next(); !r.done; r = n.next())(r = e.h[r.value]).isVisible() ? t = ci(r, i, e.i) : r.j = i, r.l = !r.l;
                                        return t
                                    }
                                    if (140 === n) return xi(e, t = vi(t).value, i);
                                    if (143 === n) return i = xi(e, 255, i), Ti(e), i;
                                    if (144 === n) t.skip(1), i = vi(t).value, e.g && (e.g.o = 0 < (128 & i), e.g.u = 0 < (64 & i));
                                    else if (145 === n) i = vi(t).value, n = vi(t).value, t.skip(1), e.g && (t = Si((48 & n) >> 4, (12 & n) >> 2, 3 & n), e.g.s = Si((48 & i) >> 4, (12 & i) >> 2, 3 & i), e.g.m = t);
                                    else if (146 === n) i = vi(t).value, t = vi(t).value, e.g && ((e = e.g).h = 15 & i, e.g = 63 & t);
                                    else if (151 === n) t.skip(1), t.skip(1), i = vi(t).value, t.skip(1), e.g && (e.g.C = 3 & i);
                                    else if (152 <= n && 159 >= n) {
                                        if (n = (15 & n) - 8, !(r = null !== e.h[n])) {
                                            var a = new ai;
                                            a.j = i, e.h[n] = a
                                        }
                                        i = vi(t).value, vi(t), vi(t), a = vi(t).value;
                                        var o = vi(t).value;
                                        t = vi(t).value, r && !(7 & t) || ((t = e.h[n]).h = 0, t.g = 0, t.u = !1, t.o = !1, t.s = "white", t.m = "black"), (t = e.h[n]).l = 0 < (32 & i), t.D = 1 + (15 & a), t.A = 1 + (63 & o), e.g = e.h[n]
                                    }
                                }
                            }
                            return null
                        }

                        function wi(e, t) {
                            for (var n = [], i = 0; 8 > i; i++) !(1 & ~t) && e.h[i] && n.push(i), t >>= 1;
                            return n
                        }

                        function xi(e, t, n) {
                            for (var i = null, r = (t = c(wi(e, t))).next(); !r.done; r = t.next()) {
                                r = r.value;
                                var a = e.h[r];
                                a.isVisible() && (i = ci(a, n, e.i)), e.h[r] = null
                            }
                            return i
                        }

                        function Ti(e) {
                            e.g = null, e.h = [null, null, null, null, null, null, null, null]
                        }

                        function Si(e, t, n) {
                            var i = {
                                0: 0,
                                1: 0,
                                2: 1,
                                3: 1
                            };
                            return ki[(e = i[e]) << 2 | (t = i[t]) << 1 | (n = i[n])]
                        }
                        mi.prototype.ea = function() {
                            return this.g < this.h.length
                        }, mi.prototype.aa = function() {
                            return this.g
                        }, mi.prototype.skip = function(e) {
                            if (this.g + e > this.h.length) throw new Ye(2, 2, 3e3);
                            this.g += e
                        };
                        var Ai = new Map([
                                [32, " "],
                                [33, " "],
                                [37, "…"],
                                [42, "Š"],
                                [44, "Œ"],
                                [48, "█"],
                                [49, "‘"],
                                [50, "’"],
                                [51, "“"],
                                [52, "”"],
                                [53, "•"],
                                [57, "™"],
                                [58, "š"],
                                [60, "œ"],
                                [61, "℠"],
                                [63, "Ÿ"],
                                [118, "⅛"],
                                [119, "⅜"],
                                [120, "⅝"],
                                [121, "⅞"],
                                [122, "│"],
                                [123, "┐"],
                                [124, "└"],
                                [125, "─"],
                                [126, "┘"],
                                [127, "┌"]
                            ]),
                            ki = "black blue green cyan red magenta yellow white".split(" ");

                        function Ei(e) {
                            this.h = e, this.g = void 0
                        }

                        function Ci() {}

                        function Ii(t) {
                            if (!t) return "";
                            if (239 == (t = ie(t))[0] && 187 == t[1] && 191 == t[2] && (t = t.subarray(3)), e.TextDecoder && !Ft()) return (t = (new TextDecoder).decode(t)).includes("�") && K('Decoded string contains an "unknown character" codepoint.  That probably means the UTF8 encoding was incorrect!'), t;
                            for (var n = "", i = 0; i < t.length; ++i) {
                                var r = 65533;
                                if (128 & t[i] ? t.length >= i + 2 && 192 == (224 & t[i]) && 128 == (192 & t[i + 1]) ? (r = (31 & t[i]) << 6 | 63 & t[i + 1], i += 1) : t.length >= i + 3 && 224 == (240 & t[i]) && 128 == (192 & t[i + 1]) && 128 == (192 & t[i + 2]) ? (r = (15 & t[i]) << 12 | (63 & t[i + 1]) << 6 | 63 & t[i + 2], i += 2) : t.length >= i + 4 && 240 == (241 & t[i]) && 128 == (192 & t[i + 1]) && 128 == (192 & t[i + 2]) && 128 == (192 & t[i + 3]) && (r = (7 & t[i]) << 18 | (63 & t[i + 1]) << 12 | (63 & t[i + 2]) << 6 | 63 & t[i + 3], i += 3) : r = t[i], 65535 >= r) n += String.fromCharCode(r);
                                else {
                                    var a = 1023 & (r -= 65536);
                                    n += String.fromCharCode(55296 + (r >> 10)), n += String.fromCharCode(56320 + a)
                                }
                            }
                            return n
                        }

                        function Mi(e, t, n) {
                            if (!e) return "";
                            if (!n && 0 != e.byteLength % 2) throw new Ye(2, 2, 2004);
                            n = Math.floor(e.byteLength / 2);
                            var i = new Uint16Array(n);
                            e = re(e);
                            for (var r = 0; r < n; r++) i[r] = e.getUint16(2 * r, t);
                            return Pi.value()(i)
                        }

                        function Di(e) {
                            function t(e) {
                                return n.byteLength <= e || 32 <= n[e] && 126 >= n[e]
                            }
                            if (!e) return "";
                            var n = ie(e);
                            if (239 == n[0] && 187 == n[1] && 191 == n[2]) return Ii(n);
                            if (254 == n[0] && 255 == n[1]) return Mi(n.subarray(2), !1);
                            if (255 == n[0] && 254 == n[1]) return Mi(n.subarray(2), !0);
                            if (0 == n[0] && 0 == n[2]) return Mi(e, !1);
                            if (0 == n[1] && 0 == n[3]) return Mi(e, !0);
                            if (t(0) && t(1) && t(2) && t(3)) return Ii(e);
                            throw new Ye(2, 2, 2003)
                        }

                        function Ri(t) {
                            if (e.TextEncoder && !Ft()) {
                                var n = new TextEncoder;
                                return ne(n.encode(t))
                            }
                            t = encodeURIComponent(t), t = unescape(t), n = new Uint8Array(t.length);
                            for (var i = 0; i < t.length; i++) n[i] = t[i].charCodeAt(0);
                            return ne(n)
                        }

                        function _i(e, t) {
                            for (var n = new ArrayBuffer(2 * e.length), i = new DataView(n), r = 0; r < e.length; ++r) i.setUint16(2 * r, e.charCodeAt(r), t);
                            return n
                        }
                        Ei.prototype.value = function() {
                            return null == this.g && (this.g = this.h()), this.g
                        }, F("shaka.util.StringUtils", Ci), Ci.resetFromCharCode = function() {
                            Pi.g = void 0
                        }, Ci.toUTF16 = _i, Ci.toUTF8 = Ri, Ci.fromBytesAutoDetect = Di, Ci.fromUTF16 = Mi, Ci.fromUTF8 = Ii;
                        var Pi = new Ei((function() {
                            function e(e) {
                                try {
                                    var t = new Uint8Array(e);
                                    return 0 < String.fromCharCode.apply(null, t).length
                                } catch (n) {
                                    return !1
                                }
                            }
                            for (var t = {
                                    Wa: 65536
                                }; 0 < t.Wa;
                                (t = {
                                    Wa: t.Wa
                                }).Wa /= 2)
                                if (e(t.Wa)) return function(e) {
                                    return function(t) {
                                        for (var n = "", i = 0; i < t.length; i += e.Wa) n += String.fromCharCode.apply(null, t.subarray(i, i + e.Wa));
                                        return n
                                    }
                                }(t);
                            return null
                        }));

                        function Li(e, t) {
                            this.h = re(e), this.i = t == ji, this.g = 0
                        }

                        function Ni() {
                            return new Ye(2, 3, 3e3)
                        }(i = Li.prototype).ea = function() {
                            return this.g < this.h.byteLength
                        }, i.aa = function() {
                            return this.g
                        }, i.getLength = function() {
                            return this.h.byteLength
                        }, i.Sa = function() {
                            try {
                                var e = this.h.getUint8(this.g);
                                return this.g += 1, e
                            } catch (t) {
                                throw Ni()
                            }
                        }, i.ab = function() {
                            try {
                                var e = this.h.getUint16(this.g, this.i);
                                return this.g += 2, e
                            } catch (t) {
                                throw Ni()
                            }
                        }, i.H = function() {
                            try {
                                var e = this.h.getUint32(this.g, this.i);
                                return this.g += 4, e
                            } catch (t) {
                                throw Ni()
                            }
                        }, i.Ae = function() {
                            try {
                                var e = this.h.getInt32(this.g, this.i);
                                return this.g += 4, e
                            } catch (t) {
                                throw Ni()
                            }
                        }, i.Mb = function() {
                            try {
                                if (this.i) var e = this.h.getUint32(this.g, !0),
                                    t = this.h.getUint32(this.g + 4, !0);
                                else t = this.h.getUint32(this.g, !1), e = this.h.getUint32(this.g + 4, !1)
                            } catch (n) {
                                throw Ni()
                            }
                            if (2097151 < t) throw new Ye(2, 3, 3001);
                            return this.g += 8, t * Math.pow(2, 32) + e
                        }, i.$a = function(e) {
                            if (this.g + e > this.h.byteLength) throw Ni();
                            var t = ie(this.h, this.g, e);
                            return this.g += e, t
                        }, i.skip = function(e) {
                            if (this.g + e > this.h.byteLength) throw Ni();
                            this.g += e
                        }, i.Zf = function(e) {
                            if (this.g < e) throw Ni();
                            this.g -= e
                        }, i.seek = function(e) {
                            if (0 > e || e > this.h.byteLength) throw Ni();
                            this.g = e
                        }, i.pc = function() {
                            for (var e = this.g; this.ea() && 0 != this.h.getUint8(this.g);) this.g += 1;
                            return e = ie(this.h, e, this.g - e), this.g += 1, Ii(e)
                        }, F("shaka.util.DataViewReader", Li), Li.prototype.readTerminatedString = Li.prototype.pc, Li.prototype.seek = Li.prototype.seek, Li.prototype.rewind = Li.prototype.Zf, Li.prototype.skip = Li.prototype.skip, Li.prototype.readBytes = Li.prototype.$a, Li.prototype.readUint64 = Li.prototype.Mb, Li.prototype.readInt32 = Li.prototype.Ae, Li.prototype.readUint32 = Li.prototype.H, Li.prototype.readUint16 = Li.prototype.ab, Li.prototype.readUint8 = Li.prototype.Sa, Li.prototype.getLength = Li.prototype.getLength, Li.prototype.getPosition = Li.prototype.aa, Li.prototype.hasMoreData = Li.prototype.ea;
                        var ji = 1;

                        function Oi() {
                            this.h = [], this.g = [], this.i = new pi, this.l = 0, this.m = new Map([
                                ["CC1", new Yn(0, 0)],
                                ["CC2", new Yn(0, 1)],
                                ["CC3", new Yn(1, 0)],
                                ["CC4", new Yn(1, 1)]
                            ]), this.s = this.o = 0, this.j = new Map, this.u = !0, Ui(this)
                        }

                        function Ui(e) {
                            e.o = 0, e.s = 0;
                            for (var t = c(e.m.values()), n = t.next(); !n.done; n = t.next())(n = n.value).h = Zn, n.g = n.j, n.m = null, On(n.i), On(n.j), On(n.o);
                            e.u = !0
                        }

                        function Bi(e, t) {
                            var n = t.type;
                            if (16 == (112 & t.ua)) {
                                var i = t.ua >> 3 & 1;
                                0 === n ? e.o = i : e.s = i
                            }
                            if (n = e.m.get("CC" + (n << 1 | (n ? e.s : e.o) + 1)), 255 === t.ua && 255 === t.Ia || !t.ua && !t.Ia || !Hi(t.ua) || !Hi(t.Ia)) return 45 <= ++e.l && Ui(e), null;
                            if (e.l = 0, t.ua &= 127, t.Ia &= 127, !t.ua && !t.Ia) return null;
                            if (e = null, 16 == (112 & t.ua)) e: {
                                if (i = t.ua, e = t.Ia, n.m === (i << 8 | e)) n.m = null;
                                else if (n.m = i << 8 | e, 16 == (240 & i) && 64 == (192 & e)) {
                                    t = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(7 & i) << 1 | e >> 5 & 1];
                                    var r = (30 & e) >> 1;
                                    i = "white";
                                    var a = !1;
                                    7 > r ? i = ri[r] : 7 === r && (a = !0), e = !(1 & ~e), n.h !== ni && (r = n.g, n.h === ti && t !== r.g && (Bn(r, n = 1 + t - r.h, 1 + r.g - r.h, r.h), Fn(r, 0, n - 1), Fn(r, t + 1, 15 - t)), r.g = t, r.m = e, r.j = a, r.l = i, r.o = "black")
                                } else if (17 == (247 & i) && 32 == (240 & e)) n.g.m = !1,
                                n.g.j = !1,
                                n.g.l = "white",
                                Un(n.g, Hn, 32),
                                i = !1,
                                "white_italics" === (t = ri[(14 & e) >> 1]) && (t = "white", i = !0),
                                n.g.m = !(1 & ~e),
                                n.g.j = i,
                                n.g.l = t;
                                else if (16 == (247 & i) && 32 == (240 & e) || 23 == (247 & i) && 45 == (255 & e)) t = "black",
                                !(7 & i) && (t = ii[(14 & e) >> 1]),
                                n.g.o = t;
                                else if (17 == (247 & i) && 48 == (240 & e)) Un(n.g, Vn, e);
                                else if (18 == (246 & i) && 32 == (224 & e)) Un(n.g, 1 & i ? qn : zn, e);
                                else if (20 == (246 & i) && 32 == (240 & e)) {
                                    switch (e = t.pts, i = null, t.Ia) {
                                        case 32:
                                            $n(n);
                                            break;
                                        case 33:
                                            (n = n.g).i[n.g].pop();
                                            break;
                                        case 37:
                                            i = Jn(n, 2, e);
                                            break;
                                        case 38:
                                            i = Jn(n, 3, e);
                                            break;
                                        case 39:
                                            i = Jn(n, 4, e);
                                            break;
                                        case 40:
                                            Un(n.g, Hn, 32);
                                            break;
                                        case 41:
                                            n.h = 2, n.g = n.i, n.g.h = 0, n.l = e;
                                            break;
                                        case 42:
                                            On(n.o), Qn(n);
                                            break;
                                        case 43:
                                            Qn(n);
                                            break;
                                        case 44:
                                            t = n.i, i = null, n.h !== ni && (i = jn(t, n.l, e)), Fn(t, 0, 15);
                                            break;
                                        case 45:
                                            t = n.g, n.h !== ti ? i = null : (i = jn(t, n.l, e), Bn(t, (a = t.g - t.h + 1) - 1, a, t.h), Fn(t, 0, a - 1), Fn(t, t.g, 15 - t.g), n.l = e);
                                            break;
                                        case 46:
                                            Fn(n.j, 0, 15);
                                            break;
                                        case 47:
                                            t = null, n.h !== ni && (t = jn(n.i, n.l, e)), i = n.j, n.j = n.i, n.i = i, $n(n), n.l = e, i = t
                                    }
                                    e = i;
                                    break e
                                }
                                e = null
                            }
                            else i = t.Ia, Un(n.g, Hn, t.ua), Un(n.g, Hn, i);
                            return e
                        }

                        function Fi(e, t) {
                            var n = [];
                            try {
                                for (; t.ea();) {
                                    var i = vi(t).value,
                                        r = (224 & i) >> 5,
                                        a = 31 & i;
                                    if (7 === r && 0 != a && (r = 63 & vi(t).value), 0 != r) {
                                        e.j.has(r) || e.j.set(r, new yi(r));
                                        for (var o = e.j.get(r), s = t.aa(); t.aa() - s < a;) {
                                            var u = vi(r = t),
                                                l = u.value,
                                                c = u.pts;
                                            if (16 === l) l = l << 16 | vi(r).value;
                                            if (0 <= l && 31 >= l) {
                                                var d = c;
                                                if (o.g) {
                                                    var h = o.g;
                                                    switch (r = null, l) {
                                                        case 8:
                                                            !li(h) || 0 >= h.g && 0 >= h.h || (0 >= h.g ? (h.g = h.A - 1, h.h--) : h.g--, h.i[h.h][h.g] = null);
                                                            break;
                                                        case 13:
                                                            if (h.isVisible() && (r = ci(h, d, o.i)), h.h + 1 >= h.D) {
                                                                d = h;
                                                                for (var f = 0, p = 1; 16 > p; p++, f++) d.i[f] = d.i[p];
                                                                for (p = 0; 1 > p; p++, f++) d.i[f] = si()
                                                            } else h.h++;
                                                            h.g = 0;
                                                            break;
                                                        case 14:
                                                            h.isVisible() && (r = ci(h, d, o.i)), h.i[h.h] = si(), h.g = 0;
                                                            break;
                                                        case 12:
                                                            h.isVisible() && (r = ci(h, d, o.i)), oi(h), (d = h).h = 0, d.g = 0
                                                    }
                                                    var g = r
                                                } else g = null
                                            } else if (128 <= l && 159 >= l) g = bi(o, r, l, c);
                                            else {
                                                if (4096 <= l && 4127 >= l) 8 <= (d = 255 & l) && 15 >= d ? r.skip(1) : 16 <= d && 23 >= d ? r.skip(2) : 24 <= d && 31 >= d && r.skip(3);
                                                else if (4224 <= l && 4255 >= l) 128 <= (d = 255 & l) && 135 >= d ? r.skip(4) : 136 <= d && 143 >= d && r.skip(5);
                                                else if (32 <= l && 127 >= l) r = l, o.g && ui(o.g, 127 === r ? "♪" : String.fromCharCode(r));
                                                else if (160 <= l && 255 >= l) o.g && ui(o.g, String.fromCharCode(l));
                                                else if (4128 <= l && 4223 >= l) {
                                                    if (r = 255 & l, o.g)
                                                        if (Ai.has(r)) {
                                                            var m = Ai.get(r);
                                                            ui(o.g, m)
                                                        } else ui(o.g, "_")
                                                } else 4256 <= l && 4351 >= l && o.g && ui(o.g, 160 != (255 & l) ? "_" : "[CC]");
                                                g = null
                                            }(r = g) && n.push(r)
                                        }
                                    }
                                }
                            } catch (v) {
                                if (!(v instanceof Ye && 3e3 === v.code)) throw v;
                                W("CEA708_INVALID_DATA", "Buffer read out of bounds / invalid CEA-708 Data.")
                            }
                            return n
                        }

                        function Hi(e) {
                            for (var t = 0; e;) t ^= 1 & e, e >>= 1;
                            return 1 === t
                        }

                        function Vi(e) {
                            for (var t = [], n = e, i = e = 0; i < n.length;) 2 == e && 3 == n[i] ? (e = 0, (n = [].concat(d(n))).splice(i, 1), n = new Uint8Array(n)) : 0 == n[i] ? e++ : e = 0, i++;
                            for (e = n, i = 0; i < e.length;) {
                                for (n = 0; 255 == e[i];) n += 255, i++;
                                n += e[i++];
                                for (var r = 0; 255 == e[i];) r += 255, i++;
                                r += e[i++], 4 == n && t.push(e.subarray(i, i + r)), i += r
                            }
                            return t
                        }

                        function zi() {
                            this.i = [], this.h = [], this.g = !1
                        }

                        function qi(e) {
                            for (var t = Yi(e); e.reader.ea() && !e.parser.g;) e.parser.nc(e.start + t, e.reader, e.partialOkay)
                        }

                        function Ki(e) {
                            for (var t = Yi(e), n = e.reader.H(), i = 0; i < n && (e.parser.nc(e.start + t, e.reader, e.partialOkay), !e.parser.g); i++);
                        }

                        function Gi(e) {
                            var t = Yi(e);
                            for (e.reader.skip(78); e.reader.ea() && !e.parser.g;) e.parser.nc(e.start + t, e.reader, e.partialOkay)
                        }

                        function Wi(e) {
                            for (var t = 0, n = (e = c(e)).next(); !n.done; n = e.next()) t = t << 8 | n.value.charCodeAt(0);
                            return t
                        }

                        function Xi(e) {
                            return String.fromCharCode(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e)
                        }

                        function Yi(e) {
                            return 8 + (e.has64BitSize ? 8 : 0) + (null != e.flags ? 4 : 0)
                        }
                        Li.Endianness = {
                            BIG_ENDIAN: 0,
                            LITTLE_ENDIAN: ji
                        }, Oi.prototype.clear = function() {
                            this.l = 0, this.h = [], this.g = [];
                            var e = this.i;
                            e.i = [], e.h = [], e.g = 0, Ui(this);
                            for (var t = (e = c(this.j.values())).next(); !t.done; t = e.next()) Ti(t.value)
                        }, Oi.prototype.extract = function(e, t) {
                            if (this.u) {
                                for (var n = c(this.m.values()), i = n.next(); !i.done; i = n.next()) i.value.l = t;
                                this.u = !1
                            }
                            if (181 === (e = new Li(e, 0)).Sa() && 49 === e.ab() && 1195456820 === e.H() && 3 === e.Sa() && 64 & (n = e.Sa()))
                                for (n &= 31, e.skip(1), i = 0; i < n; i++) {
                                    var r = e.Sa(),
                                        a = (4 & r) >> 2,
                                        o = e.Sa(),
                                        s = e.Sa();
                                    a && (0 === (r &= 3) || 1 === r ? this.h.push({
                                        pts: t,
                                        type: r,
                                        ua: o,
                                        Ia: s,
                                        order: this.h.length
                                    }) : (this.g.push({
                                        pts: t,
                                        type: r,
                                        value: o,
                                        order: this.g.length
                                    }), this.g.push({
                                        pts: t,
                                        type: 2,
                                        value: s,
                                        order: this.g.length
                                    })))
                                }
                        }, Oi.prototype.decode = function() {
                            function e(e, t) {
                                return e.pts - t.pts || e.order - t.order
                            }
                            var t = [];
                            this.h.sort(e), this.g.sort(e);
                            for (var n = c(this.h), i = n.next(); !i.done; i = n.next())(i = Bi(this, i.value)) && t.push(i);
                            for (i = (n = c(this.g)).next(); !i.done; i = n.next()) gi(this.i, i.value);
                            for (i = (n = c(this.i.i)).next(); !i.done; i = n.next()) i = Fi(this, i.value), t.push.apply(t, d(i));
                            return this.i.i = [], this.h = [], this.g = [], t
                        }, F("shaka.cea.CeaDecoder", Oi), le = function() {
                            return new Oi
                        }, (i = zi.prototype).box = function(e, t) {
                            return e = Wi(e), this.i[e] = Ji, this.h[e] = t, this
                        }, i.R = function(e, t) {
                            return e = Wi(e), this.i[e] = $i, this.h[e] = t, this
                        }, i.stop = function() {
                            this.g = !0
                        }, i.parse = function(e, t, n) {
                            for (e = new Li(e, 0), this.g = !1; e.ea() && !this.g;) this.nc(0, e, t, n)
                        }, i.nc = function(e, t, n, i) {
                            var r = t.aa();
                            if (i && r + 8 > t.getLength()) this.g = !0;
                            else {
                                var a = t.H(),
                                    o = t.H(),
                                    s = Xi(o),
                                    u = !1;
                                switch (a) {
                                    case 0:
                                        a = t.getLength() - r;
                                        break;
                                    case 1:
                                        if (i && t.aa() + 8 > t.getLength()) return void(this.g = !0);
                                        a = t.Mb(), u = !0
                                }
                                var l = this.h[o];
                                if (l) {
                                    var c = null,
                                        d = null;
                                    if (this.i[o] == $i) {
                                        if (i && t.aa() + 4 > t.getLength()) return void(this.g = !0);
                                        c = (d = t.H()) >>> 24, d &= 16777215
                                    }
                                    o = r + a, n && o > t.getLength() && (o = t.getLength()), i && o > t.getLength() ? this.g = !0 : (i = o - t.aa(), l({
                                        name: s,
                                        parser: this,
                                        partialOkay: n || !1,
                                        version: c,
                                        flags: d,
                                        reader: t = new Li(t = 0 < i ? t.$a(i) : new Uint8Array(0), 0),
                                        size: a,
                                        start: r + e,
                                        has64BitSize: u
                                    }))
                                } else t.skip(Math.min(r + a - t.aa(), t.getLength() - t.aa()))
                            }
                        }, F("shaka.util.Mp4Parser", zi), zi.headerSize = Yi, zi.typeToString = Xi, zi.allData = function(e) {
                            return function(t) {
                                e(t.reader.$a(t.reader.getLength() - t.reader.aa()))
                            }
                        }, zi.visualSampleEntry = Gi, zi.sampleDescription = Ki, zi.children = qi, zi.prototype.parseNext = zi.prototype.nc, zi.prototype.parse = zi.prototype.parse, zi.prototype.stop = zi.prototype.stop, zi.prototype.fullBox = zi.prototype.R, zi.prototype.box = zi.prototype.box;
                        var Ji = 0,
                            $i = 1;

                        function Qi(e, t) {
                            return 1 == t ? (t = e.H(), e = e.H(), {
                                baseMediaDecodeTime: t * Math.pow(2, 32) + e
                            }) : {
                                baseMediaDecodeTime: e.H()
                            }
                        }

                        function Zi(e, t) {
                            return 1 == t ? (e.skip(8), e.skip(8)) : (e.skip(4), e.skip(4)), t = e.H(), e.skip(4), e = e.ab(), {
                                timescale: t,
                                language: String.fromCharCode(96 + (e >> 10)) + String.fromCharCode(96 + ((960 & e) >> 5)) + String.fromCharCode(96 + (31 & e))
                            }
                        }

                        function er() {
                            this.j = new Map, this.i = this.h = 0, this.g = tr
                        }
                        er.prototype.init = function(e) {
                            function t(e) {
                                (e = e.name) in rr && (n.g = rr[e])
                            }
                            var n = this,
                                i = [],
                                r = [];
                            if ((new zi).box("moov", qi).box("mvex", qi).R("trex", (function(e) {
                                    var t = e.reader;
                                    t.skip(4), t.skip(4), e = t.H(), t = t.H(), n.h = e, n.i = t
                                })).box("trak", qi).R("tkhd", (function(e) {
                                    var t = e.reader;
                                    1 == (e = e.version) ? (t.skip(8), t.skip(8)) : (t.skip(4), t.skip(4));
                                    var n = t.H();
                                    1 == e ? t.skip(8) : t.skip(4), t.skip(4), t.skip(8), t.skip(2), t.skip(2), t.skip(2), t.skip(2), t.skip(36), t.ab(), t.ab(), t.ab(), t.ab(), i.push(n)
                                })).box("mdia", qi).R("mdhd", (function(e) {
                                    e = Zi(e.reader, e.version), r.push(e.timescale)
                                })).box("minf", qi).box("stbl", qi).R("stsd", Ki).box("avc1", t).box("avc3", t).box("hev1", t).box("hvc1", t).box("dvh1", t).box("dvhe", t).box("encv", Gi).box("sinf", qi).box("frma", (function(e) {
                                    (e = Xi(e = e.reader.H())) in rr && (n.g = rr[e])
                                })).parse(e, !0), !i.length || !r.length || i.length != r.length) throw new Ye(2, 2, 2010);
                            this.g == tr && G("Unable to determine bitstream format for CEA parsing!"), i.forEach((function(e, t) {
                                n.j.set(e, r[t])
                            }))
                        }, er.prototype.parse = function(e) {
                            var t = this;
                            if (this.g == tr) return [];
                            var n = [],
                                i = this.h,
                                r = this.i,
                                a = 0,
                                o = [],
                                s = null,
                                u = 9e4;
                            return (new zi).box("moof", (function(e) {
                                a = e.start, o = [], qi(e)
                            })).box("traf", qi).R("trun", (function(e) {
                                var t = e.reader,
                                    n = e.version;
                                e = e.flags;
                                var i = t.H(),
                                    r = [],
                                    a = null;
                                1 & e && (a = t.H()), 4 & e && t.skip(4);
                                for (var s = 0; s < i; s++) {
                                    var u = {
                                        Ce: null,
                                        sampleSize: null,
                                        Be: null
                                    };
                                    256 & e && (u.Ce = t.H()), 512 & e && (u.sampleSize = t.H()), 1024 & e && t.skip(4), 2048 & e && (u.Be = 0 == n ? t.H() : t.Ae()), r.push(u)
                                }
                                o.push({
                                    yg: i,
                                    $f: r,
                                    Ye: a
                                })
                            })).R("tfhd", (function(e) {
                                var n = e.reader;
                                e = e.flags;
                                var a = null,
                                    o = null,
                                    s = n.H();
                                1 & e && n.Mb(), 2 & e && n.skip(4), 8 & e && (a = n.H()), 16 & e && (o = n.H()), i = a || t.h, r = o || t.i, t.j.has(s) && (u = t.j.get(s))
                            })).R("tfdt", (function(e) {
                                s = Qi(e.reader, e.version).baseMediaDecodeTime
                            })).box("mdat", (function(e) {
                                if (null === s) throw G("Unable to find base media decode time for CEA captions!"), new Ye(2, 2, 2010);
                                ! function(e, t, n, i, r, a, o, s, u) {
                                    var l = 0,
                                        h = a,
                                        f = s.map((function(e) {
                                            return e.$f
                                        }));
                                    for ((f = [].concat.apply([], d(f))).length && (h = f[0].sampleSize || a), t.skip(o + s[0].Ye); t.ea();) {
                                        o = t.H();
                                        var p = t.Sa(),
                                            g = null;
                                        switch (g = !1, s = 1, e.g) {
                                            case nr:
                                                g = 6 == (g = 31 & p);
                                                break;
                                            case ir:
                                                s = 2, t.skip(1), g = 39 == (g = p >> 1 & 63) || 40 == g;
                                                break;
                                            default:
                                                return
                                        }
                                        if (g)
                                            for (p = 0, l < f.length && (p = f[l].Be || 0), p = (n + p) / i, g = (s = c(Vi(t.$a(o - s)))).next(); !g.done; g = s.next()) u.push({
                                                packet: g.value,
                                                pts: p
                                            });
                                        else try {
                                            t.skip(o - s)
                                        } catch (m) {
                                            break
                                        }
                                        0 == (h -= o + 4) && (n = l < f.length ? n + (f[l].Ce || r) : n + r, h = ++l < f.length && f[l].sampleSize || a)
                                    }
                                }(t, e.reader, s, u, i, r, a - e.start - 8, o, n)
                            })).parse(e, !1), n
                        }, F("shaka.cea.Mp4CeaParser", er);
                        var tr = 0,
                            nr = 1,
                            ir = 2,
                            rr = {
                                avc1: nr,
                                avc3: nr,
                                hev1: ir,
                                hvc1: ir,
                                dvh1: ir,
                                dvhe: ir
                            };

                        function ar(e, t) {
                            this.g = e, this.h = t
                        }

                        function or(e, t) {
                            var n = new ar(5, 0),
                                i = lr,
                                r = i.g,
                                a = n.h - r.h;
                            (0 < (n.g - r.g || a) ? i.i : i.h)(i.g, n, e, t)
                        }

                        function sr(e, t, n, i) {
                            G([n, "has been deprecated and will be removed in", t, ". We are currently at version", e, ". Additional information:", i].join(" "))
                        }

                        function ur(e, t, n, i) {
                            K([n, "has been deprecated and has been removed in", t, ". We are now at version", e, ". Additional information:", i].join(""))
                        }
                        ue["video/mp4"] = function() {
                            return new er
                        }, ar.prototype.toString = function() {
                            return "v" + this.g + "." + this.h
                        };
                        var lr = null;

                        function cr(e) {
                            this.j = e, this.i = e.byteLength, this.g = this.h = 0
                        }

                        function dr(e) {
                            var t = e.j.byteLength - e.i,
                                n = new Uint8Array(4),
                                i = Math.min(4, e.i);
                            0 !== i && (n.set(e.j.subarray(t, t + i)), e.h = new Li(n, 0).H(), e.g = 8 * i, e.i -= i)
                        }

                        function hr(e, t) {
                            if (e.g <= t) {
                                t -= e.g;
                                var n = Math.floor(t / 8);
                                t -= 8 * n, e.g -= n, dr(e)
                            }
                            e.h <<= t, e.g -= t
                        }

                        function fr(e, t) {
                            var n = Math.min(e.g, t),
                                i = e.h >>> 32 - n;
                            return e.g -= n, 0 < e.g ? e.h <<= n : 0 < e.i && dr(e), 0 < (n = t - n) ? i << n | fr(e, n) : i
                        }

                        function pr(e) {
                            var t;
                            for (t = 0; t < e.g; ++t)
                                if (e.h & 2147483648 >>> t) return e.h <<= t, e.g -= t, t;
                            return dr(e), t + pr(e)
                        }

                        function gr(e) {
                            hr(e, 1 + pr(e))
                        }

                        function mr(e) {
                            return fr(e, pr(e) + 1) - 1
                        }

                        function vr(e, t) {
                            for (var n = 8, i = 8, r = 0; r < t; r++) 0 !== i && (i = (n + (1 & (i = mr(e)) ? 1 + i >>> 1 : -1 * (i >>> 1)) + 256) % 256), n = 0 === i ? n : i
                        }

                        function yr(e) {
                            return fr(e, 8), mr(e), mr(e)
                        }

                        function br() {}

                        function wr(e, t) {
                            return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && 255 > e[t + 3] && 255 > e[t + 4] && 128 > e[t + 6] && 128 > e[t + 7] && 128 > e[t + 8] && 128 > e[t + 9]
                        }

                        function xr(e, t) {
                            return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && 255 > e[t + 3] && 255 > e[t + 4] && 128 > e[t + 6] && 128 > e[t + 7] && 128 > e[t + 8] && 128 > e[t + 9]
                        }

                        function Tr(e, t) {
                            var n = (127 & e[t]) << 21;
                            return n |= (127 & e[t + 1]) << 14, (n |= (127 & e[t + 2]) << 7) | 127 & e[t + 3]
                        }

                        function Sr(e) {
                            var t = {
                                key: e.type,
                                description: "",
                                data: ""
                            };
                            if ("TXXX" === e.type) {
                                if (2 > e.size || 3 !== e.data[0]) return null;
                                var n = e.data.subarray(1).indexOf(0);
                                if (-1 === n) return null;
                                var i = Ii(ie(e.data, 1, n));
                                return e = Ii(ie(e.data, 2 + n)).replace(/\0*$/, ""), t.description = i, t.data = e, t
                            }
                            return "WXXX" === e.type ? 2 > e.size || 3 !== e.data[0] || -1 === (n = e.data.subarray(1).indexOf(0)) ? null : (i = Ii(ie(e.data, 1, n)), e = Ii(ie(e.data, 2 + n)).replace(/\0*$/, ""), t.description = i, t.data = e, t) : "PRIV" === e.type ? 2 > e.size || -1 === (i = e.data.indexOf(0)) ? null : (i = Ii(ie(e.data, 0, i)), t.description = i, "com.apple.streaming.transportStreamTimestamp" == i ? (i = e.data.subarray(i.length + 1), e = 1 & i[3], i = (i[4] << 23) + (i[5] << 15) + (i[6] << 7) + i[7], i /= 45, e && (i += 47721858.84), t.data = i) : (e = ne(e.data.subarray(i.length + 1)), t.data = e), t) : "T" === e.type[0] ? 2 > e.size || 3 !== e.data[0] ? null : (e = Ii(e.data.subarray(1)).replace(/\0*$/, ""), t.data = e, t) : "W" === e.type[0] ? (e = Ii(e.data).replace(/\0*$/, ""), t.data = e, t) : e.data ? (t.data = ne(e.data), t) : null
                        }

                        function Ar(e) {
                            for (var t = 0, n = []; wr(e, t);) {
                                var i = Tr(e, t + 6);
                                for (e[t + 5] >> 6 & 1 && (t += 10), i = (t += 10) + i; t + 10 < i;) {
                                    var r = e.subarray(t),
                                        a = Tr(r, 4);
                                    (a = Sr(r = {
                                        type: String.fromCharCode(r[0], r[1], r[2], r[3]),
                                        size: a,
                                        data: r.subarray(10, 10 + a)
                                    })) && n.push(a), t += r.size + 10
                                }
                                xr(e, t) && (t += 10)
                            }
                            return n
                        }

                        function kr(e, t) {
                            for (var n = t = void 0 === t ? 0 : t, i = 0; wr(e, t);) e[t + 5] >> 6 & 1 && (i += 10), i += 10, i += Tr(e, t + 6), xr(e, t + 10) && (i += 10), t += i;
                            return 0 < i ? e.subarray(n, n + i) : new Uint8Array([])
                        }

                        function Er() {}

                        function Cr(e) {
                            return e = ie(e), e = Pi.value()(e), btoa(e)
                        }

                        function Ir(e, t) {
                            return t = null == t || t, e = Cr(e).replace(/\+/g, "-").replace(/\//g, "_"), t ? e : e.replace(/[=]*$/, "")
                        }

                        function Mr(t) {
                            t = e.atob(t.replace(/-/g, "+").replace(/_/g, "/"));
                            for (var n = new Uint8Array(t.length), i = 0; i < t.length; ++i) n[i] = t.charCodeAt(i);
                            return n
                        }

                        function Dr(t) {
                            for (var n = t.length / 2, i = new Uint8Array(n), r = 0; r < n; r++) i[r] = e.parseInt(t.substr(2 * r, 2), 16);
                            return i
                        }

                        function Rr(e) {
                            var t = ie(e);
                            e = "";
                            for (var n = (t = c(t)).next(); !n.done; n = t.next()) 1 == (n = (n = n.value).toString(16)).length && (n = "0" + n), e += n;
                            return e
                        }

                        function _r() {
                            for (var e = P.apply(0, arguments), t = 0, n = c(e), i = n.next(); !i.done; i = n.next()) t += i.value.byteLength;
                            for (t = new Uint8Array(t), n = 0, i = (e = c(e)).next(); !i.done; i = e.next()) i = i.value, t.set(ie(i), n), n += i.byteLength;
                            return t
                        }

                        function Pr() {
                            this.u = null, this.A = !1, this.m = this.o = null, this.i = [], this.s = this.j = null, this.g = [], this.l = null, this.h = []
                        }

                        function Lr(e) {
                            if (1 != (e[0] << 16 | e[1] << 8 | e[2])) return null;
                            var t = {
                                data: new Uint8Array(0),
                                Md: e[4] << 8 | e[5],
                                pts: null,
                                dts: null
                            };
                            if (t.Md && t.Md > e.byteLength - 6) return null;
                            var n = e[7];
                            return 192 & n && (t.pts = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, t.dts = t.pts, 64 & n && (t.dts = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2)), n = e[8] + 9, e.byteLength <= n ? null : (t.data = e.subarray(n), t)
                        }

                        function Nr(e) {
                            return !(0 > jr(e))
                        }

                        function jr(e) {
                            for (var t = Math.min(1e3, e.length - 564), n = 0; n < t;) {
                                if (71 == e[n] && 71 == e[n + 188] && 71 == e[n + 376]) return n;
                                n++
                            }
                            return -1
                        }
                        F("shaka.util.ExpGolomb", cr), F("shaka.util.Id3Utils", br), br.getID3Data = kr, br.getID3Frames = Ar, F("shaka.util.Uint8ArrayUtils", Er), Er.concat = _r, Er.toHex = Rr, Er.fromHex = Dr, Er.fromBase64 = Mr, Er.toBase64 = Ir, Er.toStandardBase64 = Cr, (i = Pr.prototype).clearData = function() {
                            this.i = [], this.g = [], this.h = []
                        }, i.parse = function(e) {
                            if (564 > e.length) return this;
                            for (var t = Math.max(0, jr(e)), n = e.length - (e.length + t) % 188, i = !1, r = t; r < n; r += 188)
                                if (71 == e[r]) {
                                    var a = !!(64 & e[r + 1]),
                                        o = ((31 & e[r + 1]) << 8) + e[r + 2];
                                    if (1 < (48 & e[r + 3]) >> 4) {
                                        var s = r + 5 + e[r + 4];
                                        if (s == r + 188) continue
                                    } else s = r + 4;
                                    switch (o) {
                                        case 0:
                                            a && (s += e[s] + 1), this.u = (31 & e[s + 10]) << 8 | e[s + 11];
                                            break;
                                        case 17:
                                        case 8191:
                                            break;
                                        case this.u:
                                            a && (s += e[s] + 1), o = {
                                                audio: -1,
                                                video: -1,
                                                rd: -1,
                                                audioCodec: "",
                                                videoCodec: ""
                                            };
                                            var u = s + 3 + ((15 & (a = e)[s + 1]) << 8 | a[s + 2]) - 4;
                                            for (s += 12 + ((15 & a[s + 10]) << 8 | a[s + 11]); s < u;) {
                                                var l = (31 & a[s + 1]) << 8 | a[s + 2],
                                                    c = (15 & a[s + 3]) << 8 | a[s + 4];
                                                switch (a[s]) {
                                                    case 6:
                                                        if (-1 == o.audio && 0 < c)
                                                            for (var d = s + 5, h = c; 2 < h;) {
                                                                switch (a[d]) {
                                                                    case 106:
                                                                        o.audio = l, o.audioCodec = "ac3";
                                                                        break;
                                                                    case 122:
                                                                        o.audio = l, o.audioCodec = "ec3"
                                                                }
                                                                var f = a[d + 1] + 2;
                                                                d += f, h -= f
                                                            }
                                                        break;
                                                    case 15:
                                                        -1 == o.audio && (o.audio = l, o.audioCodec = "aac");
                                                        break;
                                                    case 21:
                                                        -1 == o.rd && (o.rd = l);
                                                        break;
                                                    case 27:
                                                        -1 == o.video && (o.video = l, o.videoCodec = "avc");
                                                        break;
                                                    case 3:
                                                    case 4:
                                                        -1 == o.audio && (o.audio = l, o.audioCodec = "mp3");
                                                        break;
                                                    case 36:
                                                        -1 == o.video && (o.video = l, o.videoCodec = "hvc");
                                                        break;
                                                    case 129:
                                                        -1 == o.audio && (o.audio = l, o.audioCodec = "ac3");
                                                        break;
                                                    case 132:
                                                    case 135:
                                                        -1 == o.audio && (o.audio = l, o.audioCodec = "ec3")
                                                }
                                                s += c + 5
                                            }
                                            a = o, null == this.o && (this.o = a.video, this.m = a.videoCodec), null == this.j && (this.j = a.audio, this.s = a.audioCodec), null == this.l && (this.l = a.rd), i && !this.A && (i = !1, r = t - 188), this.A = !0;
                                            break;
                                        case this.o:
                                            s = e.subarray(s, r + 188), a ? this.i.push(s) : this.i.length && (a = this.i[this.i.length - 1]) && (this.i[this.i.length - 1] = _r(a, s));
                                            break;
                                        case this.j:
                                            s = e.subarray(s, r + 188), a ? this.g.push(s) : this.g.length && (a = this.g[this.g.length - 1]) && (this.g[this.g.length - 1] = _r(a, s));
                                            break;
                                        case this.l:
                                            s = e.subarray(s, r + 188), a ? this.h.push(s) : this.h.length && (a = this.h[this.h.length - 1]) && (this.h[this.h.length - 1] = _r(a, s));
                                            break;
                                        default:
                                            i = !0
                                    }
                                }
                            return this
                        }, i.Nd = function(e, t) {
                            for (var n, i = e.pts ? e.pts / 9e4 : null, r = e.data, a = r.byteLength, o = 0, s = [], u = -1, l = 0, c = !1, d = 0; d < a; ++d) {
                                var h = r[d];
                                if (h) {
                                    if (2 <= o && 1 == h && c) {
                                        if (0 == (e = d - (3 < o ? 3 : o))) break;
                                        n.data = _r(n.data, r.subarray(0, e)), n.La = _r(n.La, r.subarray(0, e));
                                        break
                                    }
                                    if (2 <= o && 1 == h) {
                                        if (0 <= u && (o = d - ((3 < o ? 3 : o) + 1), s.push({
                                                data: r.subarray(u + 1, o + 1),
                                                La: r.subarray(u, o + 1),
                                                type: l,
                                                time: i
                                            })), d >= a - 1) return s;
                                        u = ++d, l = 31 & r[d]
                                    }
                                    o = 0
                                } else o++;
                                d >= a - 1 && 0 <= u && 0 <= o && (c ? (n.data = _r(n.data, r), n.La = _r(n.La, r)) : (c = !0, n = {
                                    data: r.subarray(u + 1, a),
                                    La: r.subarray(u, a),
                                    type: l,
                                    time: i
                                }, t && 0 == e.Md && (a = (r = t.data).byteLength, d = -1)))
                            }
                            return n && s.push(n), s
                        }, i.getMetadata = function() {
                            for (var e = [], t = c(this.h), n = t.next(); !n.done; n = t.next())(n = Lr(n.value)) && e.push({
                                cueTime: n.pts ? n.pts / 9e4 : null,
                                data: n.data,
                                frames: Ar(n.data),
                                dts: n.dts,
                                pts: n.pts
                            });
                            return e
                        }, i.jb = function() {
                            for (var e = [], t = c(this.g), n = t.next(); !n.done; n = t.next())(n = Lr(n.value)) && e.push(n);
                            return e
                        }, i.Jc = function() {
                            for (var e = [], t = c(this.i), n = t.next(); !n.done; n = t.next()) {
                                var i = Lr(n = n.value);
                                i && null != i.pts && null != i.dts ? e.push(i) : e.length && (n = i ? i.data : n) && ((i = e.pop()).data = _r(i.data, n), e.push(i))
                            }
                            return e
                        }, i.getStartTime = function() {
                            for (var e = null, t = c(this.jb()), n = t.next(); !n.done; n = t.next()) {
                                var i = n.value;
                                i && null != i.pts && (i = Math.min(i.dts, i.pts) / 9e4, null == e || e > i) && (e = i)
                            }
                            for (t = null, n = (i = c(this.Jc())).next(); !n.done; n = i.next())(n = n.value) && null != n.pts && (n = Math.min(n.dts, n.pts) / 9e4, null == t || t > n) && (t = n);
                            return {
                                audio: e,
                                video: t
                            }
                        }, i.md = function() {
                            return {
                                audio: this.s,
                                video: this.m
                            }
                        }, i.qd = function() {
                            var e = [];
                            if ("avc" != this.m) return e;
                            for (var t = this.Jc(), n = 0; n < t.length; n++) {
                                var i = t[n],
                                    r = void 0;
                                n + 1 < t.length && (r = t[n + 1]), e.push.apply(e, d(this.Nd(i, r)))
                            }
                            return e
                        }, i.Cf = function() {
                            or("TsParser", "Please use getVideoInfo function instead.");
                            var e = this.qe();
                            return {
                                height: e.height,
                                width: e.width
                            }
                        }, i.qe = function() {
                            var e = {
                                    height: null,
                                    width: null,
                                    Bc: null
                                },
                                t = this.qd();
                            if (!t.length) return e;
                            if (!(t = t.find((function(e) {
                                    return 7 == e.type
                                })))) return e;
                            var n = fr(t = new cr(t.data), 8),
                                i = fr(t, 8),
                                r = fr(t, 8);
                            if (gr(t), Or.includes(n)) {
                                var a = mr(t);
                                if (3 === a && hr(t, 1), gr(t), gr(t), hr(t, 1), 1 === fr(t, 1)) {
                                    a = 3 !== a ? 8 : 12;
                                    for (var o = 0; o < a; o++) 1 === fr(t, 1) && vr(t, 6 > o ? 16 : 64)
                                }
                            }
                            if (gr(t), 0 === (a = mr(t))) mr(t);
                            else if (1 === a)
                                for (hr(t, 1), gr(t), gr(t), a = mr(t), o = 0; o < a; o++) gr(t);
                            gr(t), hr(t, 1), a = mr(t), o = mr(t);
                            var s = fr(t, 1);
                            0 === s && hr(t, 1), hr(t, 1);
                            var u = 0,
                                l = 0,
                                c = 0,
                                d = 0;
                            return 1 === fr(t, 1) && (u = mr(t), l = mr(t), c = mr(t), d = mr(t)), e.height = String((2 - s) * (o + 1) * 16 - 2 * c - 2 * d), e.width = String(16 * (a + 1) - 2 * u - 2 * l), e.Bc = "avc1." + ("0" + n.toString(16).toUpperCase()).slice(-2) + ("0" + i.toString(16).toUpperCase()).slice(-2) + ("0" + r.toString(16).toUpperCase()).slice(-2), e
                        }, F("shaka.util.TsParser", Pr), Pr.syncOffset = jr, Pr.probe = Nr, Pr.prototype.getVideoInfo = Pr.prototype.qe, Pr.prototype.getVideoResolution = Pr.prototype.Cf, Pr.prototype.getVideoNalus = Pr.prototype.qd, Pr.prototype.getCodecs = Pr.prototype.md, Pr.prototype.getStartTime = Pr.prototype.getStartTime, Pr.prototype.getVideoData = Pr.prototype.Jc, Pr.prototype.getAudioData = Pr.prototype.jb, Pr.prototype.getMetadata = Pr.prototype.getMetadata, Pr.prototype.parseAvcNalus = Pr.prototype.Nd, Pr.prototype.parse = Pr.prototype.parse, Pr.prototype.clearData = Pr.prototype.clearData, Pr.Timescale = 9e4;
                        var Or = [100, 110, 122, 244, 44, 83, 86, 118, 128, 138, 139, 134];

                        function Ur() {}

                        function Br(e) {
                            var t = this;
                            this.h = [], this.g = [], this.data = [], (new zi).box("moov", qi).box("moof", qi).R("pssh", (function(e) {
                                if (!(1 < e.version)) {
                                    var n = ie(e.reader.h, -12, e.size);
                                    if (t.data.push(n), t.h.push(Rr(e.reader.$a(16))), 0 < e.version) {
                                        n = e.reader.H();
                                        for (var i = 0; i < n; i++) {
                                            var r = Rr(e.reader.$a(16));
                                            t.g.push(r)
                                        }
                                    }
                                }
                            })).parse(e)
                        }

                        function Fr(e, t, n, i) {
                            var r = e.length,
                                a = t.length + 16 + r;
                            0 < i && (a += 4 + 16 * n.size);
                            var o = new Uint8Array(a),
                                s = re(o),
                                u = 0;
                            if (s.setUint32(u, a), u += 4, s.setUint32(u, 1886614376), u += 4, 1 > i ? s.setUint32(u, 0) : s.setUint32(u, 16777216), u += 4, o.set(t, u), u += t.length, 0 < i)
                                for (s.setUint32(u, n.size), u += 4, n = (t = c(n)).next(); !n.done; n = t.next()) n = Dr(n.value), o.set(n, u), u += n.length;
                            return s.setUint32(u, r), o.set(e, u + 4), o
                        }

                        function Hr(e, t) {
                            return 1 != (e = zr(e, t)).length ? null : e[0]
                        }

                        function Vr(e, t, n) {
                            return 1 != (e = qr(e, t, n)).length ? null : e[0]
                        }

                        function zr(e, t) {
                            for (var n = [], i = (e = c(e.childNodes)).next(); !i.done; i = e.next())(i = i.value) instanceof Element && i.tagName == t && n.push(i);
                            return n
                        }

                        function qr(e, t, n) {
                            for (var i = [], r = (e = c(e.childNodes)).next(); !r.done; r = e.next())(r = r.value) instanceof Element && r.localName == n && r.namespaceURI == t && i.push(r);
                            return i
                        }

                        function Kr(e, t, n) {
                            return e.hasAttributeNS(t, n) ? e.getAttributeNS(t, n) : null
                        }

                        function Gr(e) {
                            return Array.from(e.childNodes).every(Wr) ? e.textContent.trim() : null
                        }

                        function Wr(e) {
                            return e.nodeType == Node.TEXT_NODE || e.nodeType == Node.CDATA_SECTION_NODE
                        }

                        function Xr(e, t, n, i) {
                            i = void 0 === i ? null : i;
                            var r = null;
                            return null != (e = e.getAttribute(t)) && (r = n(e)), null == r ? i : r
                        }

                        function Yr(e) {
                            return e ? (/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e) && (e += "Z"), e = Date.parse(e), isNaN(e) ? null : e / 1e3) : null
                        }

                        function Jr(e) {
                            return e && (e = RegExp("^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$").exec(e)) ? (e = 31536e3 * Number(e[1] || null) + 2592e3 * Number(e[2] || null) + 86400 * Number(e[3] || null) + 3600 * Number(e[4] || null) + 60 * Number(e[5] || null) + Number(e[6] || null), isFinite(e) ? e : null) : null
                        }

                        function $r(e) {
                            var t = /([0-9]+)-([0-9]+)/.exec(e);
                            return t ? (e = Number(t[1]), isFinite(e) ? (t = Number(t[2]), isFinite(t) ? {
                                start: e,
                                end: t
                            } : null) : null) : null
                        }

                        function Qr(e) {
                            return 0 == (e = Number(e)) % 1 ? e : null
                        }

                        function Zr(e) {
                            return 0 == (e = Number(e)) % 1 && 0 < e ? e : null
                        }

                        function ea(e) {
                            return 0 == (e = Number(e)) % 1 && 0 <= e ? e : null
                        }

                        function ta(e) {
                            return e = Number(e), isNaN(e) ? null : e
                        }

                        function na(e) {
                            return !!e && "true" === e.toLowerCase()
                        }

                        function ia(e) {
                            var t, n = (t = e.match(/^(\d+)\/(\d+)$/)) ? Number(t[1]) / Number(t[2]) : Number(e);
                            return isNaN(n) ? null : n
                        }

                        function ra(e, t) {
                            var n = new DOMParser,
                                i = oa.value()(e);
                            e = null;
                            try {
                                e = n.parseFromString(i, "text/xml")
                            } catch (r) {
                                return null
                            }
                            if (!(n = e.documentElement) || n.getElementsByTagName("parsererror").length || n.tagName != t) return null;
                            for (t = document.createNodeIterator(e, NodeFilter.SHOW_ALL); e = t.nextNode();)
                                if (e instanceof HTMLElement || e instanceof SVGElement) return null;
                            return n
                        }

                        function aa(e, t) {
                            try {
                                return ra(Di(e), t)
                            } catch (n) {
                                return null
                            }
                        }
                        Ur.prototype.init = function() {}, Ur.prototype.parse = function(e) {
                            var t = [];
                            if (!Nr(e = ie(e))) return t;
                            for (var n = (e = c(e = (new Pr).parse(e).qd())).next(); !n.done; n = e.next())
                                if (6 == (n = n.value).type && null != n.time)
                                    for (var i = c(Vi(n.data)), r = i.next(); !r.done; r = i.next()) t.push({
                                        packet: r.value,
                                        pts: n.time
                                    });
                            return t
                        }, F("shaka.cea.TsCeaParser", Ur), ue["video/mp2t"] = function() {
                            return new Ur
                        }, F("shaka.config.AutoShowText", {
                            NEVER: 0,
                            ALWAYS: 1,
                            IF_PREFERRED_TEXT_LANGUAGE: 2,
                            IF_SUBTITLES_MAY_BE_NEEDED: 3
                        });
                        var oa = new Ei((function() {
                            if ("undefined" != typeof trustedTypes) {
                                var e = trustedTypes.createPolicy("shaka-player#xml", {
                                    createHTML: function(e) {
                                        return e
                                    }
                                });
                                return function(t) {
                                    return e.createHTML(t)
                                }
                            }
                            return function(e) {
                                return e
                            }
                        }));

                        function sa(e, t, n) {
                            var i = function(e) {
                                    for (var t = [], n = (e = c(e)).next(); !n.done; n = e.next())(n = la(n.value)) && t.push(n);
                                    return t
                                }(e),
                                r = null;
                            e = [];
                            var a = [],
                                o = new Set(i.map((function(e) {
                                    return e.keyId
                                })));
                            if (o.delete(null), 1 < o.size) throw new Ye(2, 4, 4010);
                            if (t || (a = i.filter((function(e) {
                                    return "urn:mpeg:dash:mp4protection:2011" != e.Td || (r = e.init || r, !1)
                                }))).length && (e = function(e, t, n, i) {
                                    for (var r = [], a = (t = c(t)).next(); !a.done; a = t.next()) {
                                        var o = n[(a = a.value).Td];
                                        if (o) {
                                            var s;
                                            if (s = Vr(a.node, "urn:microsoft:playready", "pro")) {
                                                s = Mr(s.textContent);
                                                var u = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                                                s = [{
                                                    initData: Fr(s, u, new Set, 0),
                                                    initDataType: "cenc",
                                                    keyId: a.keyId
                                                }]
                                            } else s = null;
                                            if (u = null, "urn:uuid:e2719d58-a985-b3c9-781a-b030af78d30e" === a.Td)
                                                if (0 == (u = i).size) u = null;
                                                else {
                                                    var l = new Uint8Array([16, 119, 239, 236, 192, 178, 77, 2, 172, 227, 60, 30, 82, 226, 251, 75]);
                                                    u = [{
                                                        initData: Fr(new Uint8Array([]), l, u, 1),
                                                        initDataType: "cenc",
                                                        keyId: a.keyId
                                                    }]
                                                }
                                            s = tt(o, a.init || e || s || u), (o = da.get(o)) && (s.licenseServerUri = o(a)), r.push(s)
                                        }
                                    }
                                    return r
                                }(r, a, n, o), 0 == e.length && (e = [tt("", r)])), i.length && (t || !a.length))
                                for (e = [], n = (t = c(Object.values(n))).next(); !n.done; n = t.next()) "org.w3.clearkey" != (n = n.value) && e.push(tt(n, r));
                            if (o = Array.from(o)[0] || null)
                                for (n = (t = c(e)).next(); !n.done; n = t.next())
                                    for (i = (n = c(n.value.initData)).next(); !i.done; i = n.next()) i.value.keyId = o;
                            return {
                                ke: o,
                                vg: r,
                                drmInfos: e,
                                ne: !0
                            }
                        }

                        function ua(e) {
                            var t = Vr(e.node, "https://dashif.org/CPS", "Laurl");
                            return t && t.textContent ? t.textContent : (e = Vr(e.node, "urn:microsoft:playready", "pro")) ? (e = function(e) {
                                var t = 0,
                                    n = re(e),
                                    i = n.getUint32(t, !0);
                                if (i != e.byteLength) return [];
                                e: {
                                    for (e = t + 6, t = []; e < n.byteLength - 1;) {
                                        i = n.getUint16(e, !0), e += 2;
                                        var r = n.getUint16(e, !0);
                                        if (e += 2, 1 & r || r + e > n.byteLength) {
                                            n = [];
                                            break e
                                        }
                                        var a = ie(n, e, r);
                                        t.push({
                                            type: i,
                                            value: a
                                        }), e += r
                                    }
                                    n = t
                                }
                                return n
                            }(e = Mr(e.textContent)).filter((function(e) {
                                return e.type === ca
                            }))[0], e && (e = ra(e = Mi(e.value, !0), "WRMHEADER")) ? function(e) {
                                for (var t = (e = c(e.getElementsByTagName("DATA"))).next(); !t.done; t = e.next())
                                    for (var n = (t = c(t.value.childNodes)).next(); !n.done; n = t.next())
                                        if ((n = n.value) instanceof Element && "LA_URL" == n.tagName) return n.textContent;
                                return ""
                            }(e) : "") : ""
                        }

                        function la(e) {
                            var t = e.getAttribute("schemeIdUri"),
                                n = Kr(e, "urn:mpeg:cenc:2013", "default_KID"),
                                i = qr(e, "urn:mpeg:cenc:2013", "pssh").map(Gr);
                            if (!t) return null;
                            if (t = t.toLowerCase(), n && (n = n.replace(/-/g, "").toLowerCase()).includes(" ")) throw new Ye(2, 4, 4009);
                            var r = [];
                            try {
                                r = i.map((function(e) {
                                    return {
                                        initDataType: "cenc",
                                        initData: Mr(e),
                                        keyId: null
                                    }
                                }))
                            } catch (a) {
                                throw new Ye(2, 4, 4007)
                            }
                            return {
                                node: e,
                                Td: t,
                                keyId: n,
                                init: 0 < r.length ? r : null
                            }
                        }
                        var ca = 1,
                            da = (new Map).set("com.widevine.alpha", (function(e) {
                                var t = Vr(e.node, "https://dashif.org/CPS", "Laurl");
                                return t && t.textContent ? t.textContent : (e = Vr(e.node, "urn:microsoft", "laurl")) && e.getAttribute("licenseUrl") || ""
                            })).set("com.microsoft.playready", ua).set("com.microsoft.playready.recommendation", ua).set("com.microsoft.playready.software", ua).set("com.microsoft.playready.hardware", ua).set("org.w3.clearkey", (function(e) {
                                var t = Vr(e.node, "https://dashif.org/CPS", "Laurl");
                                return t && t.textContent ? t.textContent : (e = Vr(e.node, "http://dashif.org/guidelines/clearKey", "Laurl")) && "EME-1.0" === e.getAttribute("Lic_type") && e.textContent ? e.textContent : ""
                            }));

                        function ha(e, t) {
                            var n = {
                                maxAttempts: 2,
                                baseDelay: 1e3,
                                backoffFactor: 2,
                                fuzzFactor: .5,
                                timeout: 3e4,
                                stallTimeout: 5e3,
                                connectionTimeout: 1e4
                            };
                            this.l = null == e.maxAttempts ? n.maxAttempts : e.maxAttempts, this.j = null == e.baseDelay ? n.baseDelay : e.baseDelay, this.o = null == e.fuzzFactor ? n.fuzzFactor : e.fuzzFactor, this.m = null == e.backoffFactor ? n.backoffFactor : e.backoffFactor, this.g = 0, this.h = this.j, (this.i = void 0 !== t && t) && (this.g = 1)
                        }

                        function fa(e) {
                            var t, n;
                            return _((function(i) {
                                if (1 == i.g) {
                                    if (e.g >= e.l) {
                                        if (!e.i) throw new Ye(2, 7, 1010);
                                        e.g = 1, e.h = e.j
                                    }
                                    return t = e.g, e.g++, 0 == t ? i.return() : (n = e.h * (1 + (2 * Math.random() - 1) * e.o), x(i, new Promise((function(e) {
                                        new _t(e).V(n / 1e3)
                                    })), 2))
                                }
                                e.h *= e.m, T(i)
                            }))
                        }

                        function pa() {
                            var e, t, n = new Promise((function(n, i) {
                                e = n, t = i
                            }));
                            return n.resolve = e, n.reject = t, n
                        }

                        function ga(e, t) {
                            this.promise = e, this.i = t, this.g = !1
                        }

                        function ma(e) {
                            return new ga(Promise.reject(e), (function() {
                                return Promise.resolve()
                            }))
                        }

                        function va() {
                            var e = Promise.reject(new Ye(2, 7, 7001));
                            return e.catch((function() {})), new ga(e, (function() {
                                return Promise.resolve()
                            }))
                        }

                        function ya(e) {
                            return new ga(Promise.resolve(e), (function() {
                                return Promise.resolve()
                            }))
                        }

                        function ba(e) {
                            return new ga(e, (function() {
                                return e.catch((function() {}))
                            }))
                        }

                        function wa(e) {
                            return new ga(Promise.all(e.map((function(e) {
                                return e.promise
                            }))), (function() {
                                return Promise.all(e.map((function(e) {
                                    return e.abort()
                                })))
                            }))
                        }

                        function xa(t, n) {
                            if (n)
                                if (n instanceof Map)
                                    for (var i = c(n.keys()), r = i.next(); !r.done; r = i.next()) r = r.value, Object.defineProperty(this, r, {
                                        value: n.get(r),
                                        writable: !0,
                                        enumerable: !0
                                    });
                                else
                                    for (i in n) Object.defineProperty(this, i, {
                                        value: n[i],
                                        writable: !0,
                                        enumerable: !0
                                    });
                            this.defaultPrevented = this.cancelable = this.bubbles = !1, this.timeStamp = e.performance && e.performance.now ? e.performance.now() : Date.now(), this.type = t, this.isTrusted = !1, this.target = this.currentTarget = null, this.g = !1
                        }

                        function Ta() {
                            this.ia = new Dt, this.Ke = this
                        }

                        function Sa(e) {
                            var t = new Set;
                            return function e(n) {
                                switch (typeof n) {
                                    case "undefined":
                                    case "boolean":
                                    case "number":
                                    case "string":
                                    case "symbol":
                                    case "function":
                                        return n;
                                    default:
                                        if (!n || n.buffer && n.buffer.constructor == ArrayBuffer) return n;
                                        if (t.has(n)) return null;
                                        var i = n.constructor == Array;
                                        if (n.constructor != Object && !i) return null;
                                        t.add(n);
                                        var r, a = i ? [] : {};
                                        for (r in n) a[r] = e(n[r]);
                                        return i && (a.length = n.length), a
                                }
                            }(e)
                        }

                        function Aa(e) {
                            var t, n = {};
                            for (t in e) n[t] = e[t];
                            return n
                        }

                        function ka() {
                            this.g = []
                        }

                        function Ea(e, t) {
                            e.g.push(t.finally((function() {
                                var n = e.g,
                                    i = n.indexOf(t); - 1 < i && n.splice(i, 1)
                            })))
                        }

                        function Ca(e, t, n, i) {
                            Ta.call(this), this.i = !1, this.m = new ka, this.g = new Set, this.h = new Set, this.l = e || null, this.j = t || null, this.s = n || null, this.u = i || null, this.o = !1
                        }

                        function Ia(e, t, n, i) {
                            n = n || La;
                            var r = Na[e];
                            (!r || n >= r.priority) && (Na[e] = {
                                priority: n,
                                Wc: t,
                                Tf: void 0 !== i && i
                            })
                        }

                        function Ma(e, t, n) {
                            return {
                                uris: e,
                                method: "GET",
                                body: null,
                                headers: {},
                                allowCrossSiteCredentials: !1,
                                retryParameters: t,
                                licenseRequestType: null,
                                sessionId: null,
                                drmInfo: null,
                                initData: null,
                                initDataType: null,
                                streamDataCallback: void 0 === n ? null : n
                            }
                        }

                        function Da(e, t, n, i, r, a, o) {
                            e.o && (n.uris[r] = n.uris[r].replace("http://", "https://"));
                            var s = new Ne(n.uris[r]),
                                u = s.za,
                                l = !1;
                            u || (je(s, u = (u = location.protocol).slice(0, -1)), n.uris[r] = s.toString()), u = u.toLowerCase();
                            var c = (u = Na[u]) ? u.Wc : null;
                            if (!c) return ma(new Ye(2, 1, 1e3, s));
                            var d, h = u.Tf,
                                f = null,
                                p = null,
                                g = !1,
                                m = !1;
                            return ba(fa(i)).ka((function() {
                                if (e.i) return va();
                                d = Date.now();
                                var i = c(n.uris[r], n, t, (function(n, i, r) {
                                    f && f.stop(), p && p.V(s / 1e3), e.l && t == Pa && (e.l(n, i), l = !0, o.g = r)
                                }), (function(i) {
                                    e.j && e.j(i, n, t), m = !0
                                }));
                                if (!h) return i;
                                var a = n.retryParameters.connectionTimeout;
                                a && (f = new _t((function() {
                                    g = !0, i.abort()
                                }))).V(a / 1e3);
                                var s = n.retryParameters.stallTimeout;
                                return s && (p = new _t((function() {
                                    g = !0, i.abort()
                                }))), i
                            })).ka((function(i) {
                                f && f.stop(), p && p.stop(), null == i.timeMs && (i.timeMs = Date.now() - d);
                                var r = {
                                    response: i,
                                    Ef: l
                                };
                                return !m && e.j && e.j(i.headers, n, t), r
                            }), (function(s) {
                                if (f && f.stop(), p && p.stop(), e.s) {
                                    var u = null,
                                        l = 0;
                                    s instanceof Ye && (u = s, 1001 == s.code && (l = s.data[1])), e.s(n, u, l, g)
                                }
                                if (e.i) return va();
                                if (g && (s = new Ye(1, 1, 1003, n.uris[r], t)), s instanceof Ye) {
                                    if (7001 == s.code) throw s;
                                    if (1010 == s.code) throw a;
                                    if (1 == s.severity) return u = new xa("retry", u = (new Map).set("error", s)), e.dispatchEvent(u), r = (r + 1) % n.uris.length, Da(e, t, n, i, r, s, o)
                                }
                                throw s
                            }))
                        }

                        function Ra() {
                            this.g = 0
                        }

                        function _a(e, t, n) {
                            ga.call(this, e, t), this.h = n
                        }
                        pa.prototype.resolve = function() {}, pa.prototype.reject = function() {}, ga.prototype.abort = function() {
                            return this.g = !0, this.i()
                        }, ga.prototype.finally = function(e) {
                            return this.promise.then((function() {
                                return e(!0)
                            }), (function() {
                                return e(!1)
                            })), this
                        }, ga.prototype.ka = function(e, t) {
                            function n(n) {
                                return function(s) {
                                    if (r.g && n) a.reject(o);
                                    else {
                                        var u = n ? e : t;
                                        u ? i = function(e, t, n) {
                                            try {
                                                var i = e(t);
                                                return i && i.promise && i.abort ? (n.resolve(i.promise), function() {
                                                    return i.abort()
                                                }) : (n.resolve(i), function() {
                                                    return Promise.resolve(i).then((function() {}), (function() {}))
                                                })
                                            } catch (r) {
                                                return n.reject(r),
                                                    function() {
                                                        return Promise.resolve()
                                                    }
                                            }
                                        }(u, s, a) : (n ? a.resolve : a.reject)(s)
                                    }
                                }
                            }

                            function i() {
                                return a.reject(o), r.abort()
                            }
                            var r = this,
                                a = new pa,
                                o = new Ye(2, 7, 7001);
                            return this.promise.then(n(!0), n(!1)), new ga(a, (function() {
                                return i()
                            }))
                        }, F("shaka.util.AbortableOperation", ga), ga.prototype.chain = ga.prototype.ka, ga.prototype.finally = ga.prototype.finally, ga.all = wa, ga.prototype.abort = ga.prototype.abort, ga.notAbortable = ba, ga.completed = ya, ga.aborted = va, ga.failed = ma, xa.prototype.preventDefault = function() {
                            this.cancelable && (this.defaultPrevented = !0)
                        }, xa.prototype.stopImmediatePropagation = function() {
                            this.g = !0
                        }, xa.prototype.stopPropagation = function() {}, F("shaka.util.FakeEvent", xa), Ta.prototype.addEventListener = function(e, t) {
                            this.ia && this.ia.push(e, t)
                        }, Ta.prototype.removeEventListener = function(e, t) {
                            this.ia && this.ia.remove(e, t)
                        }, Ta.prototype.dispatchEvent = function(e) {
                            if (!this.ia) return !0;
                            var t = this.ia.get(e.type) || [],
                                n = this.ia.get("All");
                            for (n && (t = t.concat(n)), n = (t = c(t)).next(); !n.done; n = t.next()) {
                                n = n.value, e.target = this.Ke, e.currentTarget = this.Ke;
                                try {
                                    n.handleEvent ? n.handleEvent(e) : n.call(this, e)
                                } catch (i) {}
                                if (e.g) break
                            }
                            return e.defaultPrevented
                        }, Ta.prototype.release = function() {
                            this.ia = null
                        }, ka.prototype.destroy = function() {
                            for (var e = [], t = c(this.g), n = t.next(); !n.done; n = t.next())(n = n.value).promise.catch((function() {})), e.push(n.abort());
                            return this.g = [], Promise.all(e)
                        }, v(Ca, Ta), (i = Ca.prototype).Vd = function(e) {
                            this.o = e
                        }, i.Uf = function(e) {
                            this.g.add(e)
                        }, i.jg = function(e) {
                            this.g.delete(e)
                        }, i.Ve = function() {
                            this.g.clear()
                        }, i.Vf = function(e) {
                            this.h.add(e)
                        }, i.kg = function(e) {
                            this.h.delete(e)
                        }, i.We = function() {
                            this.h.clear()
                        }, i.destroy = function() {
                            return this.i = !0, this.g.clear(), this.h.clear(), Ta.prototype.release.call(this), this.m.destroy()
                        }, i.request = function(e, t, n) {
                            var i = this,
                                r = new Ra;
                            if (this.i) {
                                var a = Promise.reject(new Ye(2, 7, 7001));
                                return a.catch((function() {})), new _a(a, (function() {
                                    return Promise.resolve()
                                }), r)
                            }
                            t.method = t.method || "GET", t.headers = t.headers || {}, t.retryParameters = t.retryParameters ? Sa(t.retryParameters) : {
                                maxAttempts: 2,
                                baseDelay: 1e3,
                                backoffFactor: 2,
                                fuzzFactor: .5,
                                timeout: 3e4,
                                stallTimeout: 5e3,
                                connectionTimeout: 1e4
                            }, t.uris = Sa(t.uris), a = function(e, t, n, i) {
                                function r(e) {
                                    a = a.ka((function() {
                                        return n.body && (n.body = ne(n.body)), e(t, n, i)
                                    }))
                                }
                                var a = ya(void 0);
                                e.u && r(e.u);
                                for (var o = (e = c(e.g)).next(); !o.done; o = e.next()) r(o.value);
                                return a.ka(void 0, (function(e) {
                                    if (e instanceof Ye && 7001 == e.code) throw e;
                                    throw new Ye(2, 1, 1006, e)
                                }))
                            }(this, e, t, n);
                            var o = a.ka((function() {
                                    return Da(i, e, t, new ha(t.retryParameters, !1), 0, null, r)
                                })),
                                s = o.ka((function(t) {
                                    return function(e, t, n, i) {
                                        for (var r = ya(void 0), a = {}, o = (e = c(e.h)).next(); !o.done; a = {
                                                dd: a.dd
                                            }, o = e.next()) a.dd = o.value, r = r.ka(function(e) {
                                            return function() {
                                                var r = n.response;
                                                return r.data && (r.data = ne(r.data)), e.dd(t, r, i)
                                            }
                                        }(a));
                                        return r.ka((function() {
                                            return n
                                        }), (function(e) {
                                            var t = 2;
                                            if (e instanceof Ye) {
                                                if (7001 == e.code) throw e;
                                                t = e.severity
                                            }
                                            throw new Ye(t, 1, 1007, e)
                                        }))
                                    }(i, e, t, n)
                                })),
                                u = Date.now(),
                                l = 0;
                            a.promise.then((function() {
                                l = Date.now() - u
                            }), (function() {}));
                            var d = 0;
                            o.promise.then((function() {
                                d = Date.now()
                            }), (function() {}));
                            var h = s.ka((function(n) {
                                var r = Date.now() - d,
                                    a = n.response;
                                return a.timeMs += l, a.timeMs += r, n.Ef || !i.l || a.fromCache || "HEAD" == t.method || e != Pa || i.l(a.timeMs, a.data.byteLength), a
                            }), (function(e) {
                                throw e && (e.severity = 2), e
                            }));
                            return a = new _a(h.promise, (function() {
                                return h.abort()
                            }), r), Ea(this.m, a), a
                        }, F("shaka.net.NetworkingEngine", Ca), Ca.prototype.request = Ca.prototype.request, Ca.prototype.destroy = Ca.prototype.destroy, Ca.makeRequest = Ma, Ca.defaultRetryParameters = function() {
                            return {
                                maxAttempts: 2,
                                baseDelay: 1e3,
                                backoffFactor: 2,
                                fuzzFactor: .5,
                                timeout: 3e4,
                                stallTimeout: 5e3,
                                connectionTimeout: 1e4
                            }
                        }, Ca.prototype.clearAllResponseFilters = Ca.prototype.We, Ca.prototype.unregisterResponseFilter = Ca.prototype.kg, Ca.prototype.registerResponseFilter = Ca.prototype.Vf, Ca.prototype.clearAllRequestFilters = Ca.prototype.Ve, Ca.prototype.unregisterRequestFilter = Ca.prototype.jg, Ca.prototype.registerRequestFilter = Ca.prototype.Uf, Ca.unregisterScheme = function(e) {
                            delete Na[e]
                        }, Ca.registerScheme = Ia, Ca.prototype.setForceHTTPS = Ca.prototype.Vd, Ca.NumBytesRemainingClass = Ra, v(_a, ga), Ca.PendingRequest = _a;
                        var Pa = 1;
                        Ca.RequestType = {
                            MANIFEST: 0,
                            SEGMENT: Pa,
                            LICENSE: 2,
                            APP: 3,
                            TIMING: 4,
                            SERVER_CERTIFICATE: 5,
                            KEY: 6
                        }, Ca.AdvancedRequestType = {
                            INIT_SEGMENT: 0,
                            MEDIA_SEGMENT: 1,
                            MEDIA_PLAYLIST: 2,
                            MASTER_PLAYLIST: 3,
                            MPD: 4,
                            MSS: 5
                        };
                        var La = 3;
                        Ca.PluginPriority = {
                            FALLBACK: 1,
                            PREFERRED: 2,
                            APPLICATION: La
                        };
                        var Na = {};

                        function ja(t, n, i, r, a) {
                            var o = {
                                RepresentationID: n,
                                Number: i,
                                Bandwidth: r,
                                Time: a
                            };
                            return t.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g, (function(t, n, i, r) {
                                if ("$$" == t) return "$";
                                var a = o[n];
                                if (null == a) return t;
                                switch ("RepresentationID" == n && i && (i = void 0), "Time" == n && (a = Math.round(a)), r) {
                                    case void 0:
                                    case "d":
                                    case "i":
                                    case "u":
                                        t = a.toString();
                                        break;
                                    case "o":
                                        t = a.toString(8);
                                        break;
                                    case "x":
                                        t = a.toString(16);
                                        break;
                                    case "X":
                                        t = a.toString(16).toUpperCase();
                                        break;
                                    default:
                                        t = a.toString()
                                }
                                return i = e.parseInt(i, 10) || 1, Array(Math.max(0, i - t.length) + 1).join("0") + t
                            }))
                        }

                        function Oa(e, t) {
                            var n = Ua(e, t, "timescale"),
                                i = 1;
                            n && (i = Zr(n) || 1);
                            var r = Ua(e, t, "duration");
                            n = Zr(r || ""), "image" == e.G.contentType && (n = ta(r || "")), n && (n /= i);
                            var a = Ua(e, t, "startNumber");
                            r = Number(Ua(e, t, "presentationTimeOffset")) || 0;
                            var o = ea(a || "");
                            if (null != a && null != o || (o = 1), a = Ba(e, t, "SegmentTimeline"), t = null, a) {
                                t = i, e = e.U.duration || 1 / 0, a = zr(a, "S");
                                for (var s = [], u = -r, l = 0; l < a.length; ++l) {
                                    var c = a[l],
                                        d = a[l + 1],
                                        h = Xr(c, "t", ea),
                                        f = Xr(c, "d", ea);
                                    if (c = Xr(c, "r", Qr), null != h && (h -= r), !f) break;
                                    if (h = null != h ? h : u, 0 > (c = c || 0))
                                        if (d) {
                                            if (null == (d = Xr(d, "t", ea))) break;
                                            if (h >= d) break;
                                            c = Math.ceil((d - h) / f) - 1
                                        } else {
                                            if (1 / 0 == e) break;
                                            if (h / t >= e) break;
                                            c = Math.ceil((e * t - h) / f) - 1
                                        }
                                    for (0 < s.length && h != u && (s[s.length - 1].end = h / t), d = 0; d <= c; ++d) u = h + f, s.push({
                                        start: h / t,
                                        end: u / t,
                                        be: h
                                    }), h = u
                                }
                                t = s
                            }
                            return {
                                timescale: i,
                                fa: n,
                                Pb: o,
                                Ta: r / i || 0,
                                ae: r,
                                timeline: t
                            }
                        }

                        function Ua(e, t, n) {
                            return [t(e.G), t(e.$), t(e.ba)].filter(Ze).map((function(e) {
                                return e.getAttribute(n)
                            })).reduce((function(e, t) {
                                return e || t
                            }))
                        }

                        function Ba(e, t, n) {
                            return [t(e.G), t(e.$), t(e.ba)].filter(Ze).map((function(e) {
                                return Hr(e, n)
                            })).reduce((function(e, t) {
                                return e || t
                            }))
                        }

                        function Fa(e, t, n, i, r, a) {
                            if (a = void 0 === a ? 0 : a, Kr(e, "http://www.w3.org/1999/xlink", "href")) {
                                var o = function(e, t, n, i, r, a) {
                                    for (var o = Kr(e, "http://www.w3.org/1999/xlink", "href"), s = Kr(e, "http://www.w3.org/1999/xlink", "actuate") || "onRequest", u = c(Array.from(e.attributes)), l = u.next(); !l.done; l = u.next()) "http://www.w3.org/1999/xlink" == (l = l.value).namespaceURI && e.removeAttributeNS(l.namespaceURI, l.localName);
                                    if (5 <= a) return ma(new Ye(2, 4, 4028));
                                    if ("onLoad" != s) return ma(new Ye(2, 4, 4027));
                                    var d = et([i], [o]);
                                    return r.request(0, Ma(d, t)).ka((function(i) {
                                        if (!(i = aa(i.data, e.tagName))) return ma(new Ye(2, 4, 4001, o));
                                        for (; e.childNodes.length;) e.removeChild(e.childNodes[0]);
                                        for (; i.childNodes.length;) {
                                            var s = i.childNodes[0];
                                            i.removeChild(s), e.appendChild(s)
                                        }
                                        for (s = (i = c(Array.from(i.attributes))).next(); !s.done; s = i.next()) e.setAttributeNode(s.value.cloneNode(!1));
                                        return Fa(e, t, n, d[0], r, a + 1)
                                    }))
                                }(e, t, n, i, r, a);
                                return n && (o = o.ka(void 0, (function() {
                                    return Fa(e, t, n, i, r, a)
                                }))), o
                            }
                            o = [];
                            for (var s = c(Array.from(e.childNodes)), u = s.next(); !u.done; u = s.next())(u = u.value) instanceof Element && ("urn:mpeg:dash:resolve-to-zero:2013" == Kr(u, "http://www.w3.org/1999/xlink", "href") ? e.removeChild(u) : "SegmentTimeline" != u.tagName && o.push(Fa(u, t, n, i, r, a)));
                            return wa(o).ka((function() {
                                return e
                            }))
                        }

                        function Ha(e, t, n, i, r, a) {
                            this.Oa = e, this.j = t, this.i = n, this.Cd = void 0 === i ? null : i, this.timescale = void 0 === r ? null : r, this.g = void 0 === a ? null : a
                        }

                        function Va(e, t, n, i, r, a, o, s, u, l, c, d, h, f, p) {
                            l = void 0 === l ? [] : l, f = void 0 === f ? za : f, this.startTime = e, this.l = this.endTime = t, this.O = n, this.j = i, this.i = r, this.g = a, this.m = o, this.L = s, this.K = u, this.h = l, this.tilesLayout = void 0 === c ? "" : c, this.I = void 0 === d ? null : d, this.D = void 0 === h ? null : h, this.status = f, this.u = !1, this.s = !0, this.A = !1, this.C = void 0 === p ? null : p, this.F = null, this.o = 0
                        }
                        Ha.prototype.ic = function() {
                            return this.j
                        }, Ha.prototype.ec = function() {
                            return this.i
                        }, F("shaka.media.InitSegmentReference", Ha), Ha.prototype.getEndByte = Ha.prototype.ec, Ha.prototype.getStartByte = Ha.prototype.ic, (i = Va.prototype).Oa = function() {
                            return this.O()
                        }, i.getStartTime = function() {
                            return this.startTime
                        }, i.gf = function() {
                            return this.endTime
                        }, i.ic = function() {
                            return this.j
                        }, i.ec = function() {
                            return this.i
                        }, i.Af = function() {
                            return this.tilesLayout
                        }, i.zf = function() {
                            return this.I
                        }, i.jc = function() {
                            return this.status
                        }, i.Mf = function() {
                            this.status = qa
                        }, i.Lf = function() {
                            this.u = !0
                        }, i.If = function() {
                            return this.u
                        }, i.Kf = function() {
                            this.s = !1
                        }, i.Hf = function() {
                            return this.s
                        }, i.Jf = function() {
                            this.A = !0
                        }, i.Ff = function() {
                            return this.A
                        }, i.Ie = function(e) {
                            this.F = e
                        }, i.xf = function() {
                            return this.F
                        }, i.offset = function(e) {
                            this.startTime += e, this.endTime += e, this.l += e;
                            for (var t = c(this.h), n = t.next(); !n.done; n = t.next())(n = n.value).startTime += e, n.endTime += e, n.l += e
                        }, i.hg = function(e) {
                            null == this.D ? K("Sync attempted without sync time!") : (e = this.D - e - this.startTime, .001 <= Math.abs(e) && this.offset(e))
                        }, F("shaka.media.SegmentReference", Va), Va.prototype.syncAgainst = Va.prototype.hg, Va.prototype.offset = Va.prototype.offset, Va.prototype.getThumbnailSprite = Va.prototype.xf, Va.prototype.setThumbnailSprite = Va.prototype.Ie, Va.prototype.hasByterangeOptimization = Va.prototype.Ff, Va.prototype.markAsByterangeOptimization = Va.prototype.Jf, Va.prototype.isIndependent = Va.prototype.Hf, Va.prototype.markAsNonIndependent = Va.prototype.Kf, Va.prototype.isPreload = Va.prototype.If, Va.prototype.markAsPreload = Va.prototype.Lf, Va.prototype.markAsUnavailable = Va.prototype.Mf, Va.prototype.getStatus = Va.prototype.jc, Va.prototype.getTileDuration = Va.prototype.zf, Va.prototype.getTilesLayout = Va.prototype.Af, Va.prototype.getEndByte = Va.prototype.ec, Va.prototype.getStartByte = Va.prototype.ic, Va.prototype.getEndTime = Va.prototype.gf, Va.prototype.getStartTime = Va.prototype.getStartTime, Va.prototype.getUris = Va.prototype.Oa;
                        var za = 0,
                            qa = 1;

                        function Ka(e, t, n, i, r, a, o) {
                            var s, u = (new zi).R("sidx", (function(e) {
                                s = function(e, t, n, i, r, a, o) {
                                    var s = [];
                                    o.reader.skip(4);
                                    var u = o.reader.H();
                                    if (0 == u) throw new Ye(2, 3, 3005);
                                    if (0 == o.version) var l = o.reader.H(),
                                        c = o.reader.H();
                                    else l = o.reader.Mb(), c = o.reader.Mb();
                                    o.reader.skip(2);
                                    var d = o.reader.ab();
                                    for (e = e + o.size + c, c = 0; c < d; c++) {
                                        var h = o.reader.H(),
                                            f = (2147483648 & h) >>> 31;
                                        h &= 2147483647;
                                        var p = o.reader.H();
                                        if (o.reader.skip(4), 1 == f) throw new Ye(2, 3, 3006);
                                        s.push(new Va(l / u + n, (l + p) / u + n, (function() {
                                            return a
                                        }), e, e + h - 1, t, n, i, r)), l += p, e += h
                                    }
                                    return o.parser.stop(), s
                                }(t, i, r, a, o, n, e)
                            }));
                            if (e && u.parse(e), s) return s;
                            throw new Ye(2, 3, 3004)
                        }

                        function Ga(e) {
                            this.g = e, this.l = null, this.i = 0, this.m = !1
                        }

                        function Wa(e, t, n) {
                            return new Ga([new Va(e, e + t, (function() {
                                return n
                            }), 0, null, null, e, e, e + t)])
                        }

                        function Xa(e, t, n) {
                            this.i = e, this.g = t, this.h = n
                        }

                        function Ya() {
                            Ga.call(this, []), this.h = []
                        }

                        function Ja(e) {
                            this.h = re(e), this.g = new Li(this.h, 0)
                        }

                        function $a(e) {
                            var t = Qa(e);
                            if (7 < t.length) throw new Ye(2, 3, 3002);
                            for (var n = 0, i = (t = c(t)).next(); !i.done; i = t.next()) n = 256 * n + i.value;
                            t = Qa(e);
                            e: {
                                for (var r = (i = c(Za)).next(); !r.done; r = i.next())
                                    if (ee(t, new Uint8Array(r.value))) {
                                        i = !0;
                                        break e
                                    }
                                i = !1
                            }
                            if (i) t = e.h.byteLength - e.g.aa();
                            else {
                                if (8 == t.length && 224 & t[1]) throw new Ye(2, 3, 3001);
                                for (r = i = 0; r < t.length; r++) {
                                    var a = t[r];
                                    i = 0 == r ? a & (1 << 8 - t.length) - 1 : 256 * i + a
                                }
                                t = i
                            }
                            return t = e.g.aa() + t <= e.h.byteLength ? t : e.h.byteLength - e.g.aa(), i = re(e.h, e.g.aa(), t), e.g.skip(t), new eo(n, i)
                        }

                        function Qa(e) {
                            var t = e.g.aa(),
                                n = e.g.Sa();
                            if (0 == n) throw new Ye(2, 3, 3002);
                            return n = 8 - Math.floor(Math.log2(n)), e.g.skip(n - 1), ie(e.h, t, n)
                        }
                        Va.Status = {
                            og: za,
                            sg: qa,
                            qg: 2
                        }, (i = Ga.prototype).fc = function() {
                            return this.g.length
                        }, i.release = function() {
                            this.m || (this.g = [], this.l && this.l.stop(), this.l = null)
                        }, i.Nf = function() {
                            this.m = !0
                        }, i.find = function(e) {
                            for (var t = this.g.length - 1, n = t; 0 <= n; --n) {
                                var i = this.g[n],
                                    r = n < t ? this.g[n + 1].startTime : i.endTime;
                                if (e >= i.startTime && e < r) return n + this.i
                            }
                            return this.g.length && e < this.g[0].startTime ? this.i : null
                        }, i.get = function(e) {
                            return 0 == this.g.length || 0 > (e -= this.i) || e >= this.g.length ? null : this.g[e]
                        }, i.offset = function(e) {
                            if (!this.m)
                                for (var t = c(this.g), n = t.next(); !n.done; n = t.next()) n.value.offset(e)
                        }, i.Qc = function(e) {
                            if (!this.m && e.length) {
                                var t = Math.round(1e3 * e[0].startTime) / 1e3;
                                this.g = this.g.filter((function(e) {
                                    return Math.round(1e3 * e.startTime) / 1e3 < t
                                })), this.g.push.apply(this.g, d(e))
                            }
                        }, i.Rc = function(e, t) {
                            var n = this;
                            e = e.filter((function(e) {
                                return e.endTime > t && (0 == n.g.length || e.endTime > n.g[0].startTime)
                            })), this.Qc(e), this.Ka(t)
                        }, i.Ka = function(e) {
                            if (!this.m) {
                                var t = this.g.length;
                                this.g = this.g.filter((function(t) {
                                    return t.endTime > e
                                })), this.i += t - this.g.length
                            }
                        }, i.dc = function(e, t, n) {
                            if (n = void 0 !== n && n, !this.m) {
                                for (; this.g.length && this.g[this.g.length - 1].startTime >= t;) this.g.pop();
                                for (; this.g.length && this.g[0].endTime <= e;) this.g.shift(), n || this.i++;
                                0 != this.g.length && (e = this.g[this.g.length - 1], this.g[this.g.length - 1] = new Va(e.startTime, t, e.O, e.j, e.i, e.g, e.m, e.L, e.K, e.h, e.tilesLayout, e.I, e.D, e.status, e.C), this.g[this.g.length - 1].o = e.o)
                            }
                        }, i.Yc = function(e, t) {
                            var n = this;
                            this.m || (this.l && this.l.stop(), this.l = new _t((function() {
                                var e = t();
                                e ? n.g.push.apply(n.g, d(e)) : (n.l.stop(), n.l = null)
                            })), this.l.sa(e))
                        }, Ga.prototype[Symbol.iterator] = function() {
                            return this.kb(0)
                        }, Ga.prototype.kb = function(e) {
                            var t = this.find(e);
                            if (null == t) return null;
                            t--;
                            var n = this.get(t + 1),
                                i = -1;
                            if (n && 0 < n.h.length)
                                for (var r = n.h.length - 1; 0 <= r; --r) {
                                    var a = n.h[r];
                                    if (e >= a.startTime && e < a.endTime) {
                                        for (; r && !a.s;) r--, a = n.h[r];
                                        if (!a.s) return K("No independent partial segment found!"), null;
                                        t++, i = r - 1;
                                        break
                                    }
                                }
                            return new Xa(this, t, i)
                        }, F("shaka.media.SegmentIndex", Ga), Ga.forSingleSegment = Wa, Ga.prototype.getIteratorForTime = Ga.prototype.kb, Ga.prototype.updateEvery = Ga.prototype.Yc, Ga.prototype.fit = Ga.prototype.dc, Ga.prototype.evict = Ga.prototype.Ka, Ga.prototype.mergeAndEvict = Ga.prototype.Rc, Ga.prototype.offset = Ga.prototype.offset, Ga.prototype.get = Ga.prototype.get, Ga.prototype.find = Ga.prototype.find, Ga.prototype.markImmutable = Ga.prototype.Nf, Ga.prototype.release = Ga.prototype.release, Xa.prototype.Xe = function() {
                            return this.g
                        }, Xa.prototype.current = function() {
                            var e = this.i.get(this.g);
                            return e && 0 < e.h.length && e.Oa().length && this.h >= e.h.length && (this.g++, this.h = 0, e = this.i.get(this.g)), e && 0 < e.h.length ? e.h[this.h] : e
                        }, Xa.prototype.next = function() {
                            var e = this.i.get(this.g);
                            return e && 0 < e.h.length ? (this.h++, e.Oa().length && this.h == e.h.length && (this.g++, this.h = 0)) : (this.g++, this.h = 0), {
                                value: e = this.current(),
                                done: !e
                            }
                        }, F("shaka.media.SegmentIterator", Xa), Xa.prototype.next = Xa.prototype.next, Xa.prototype.current = Xa.prototype.current, Xa.prototype.currentPosition = Xa.prototype.Xe, v(Ya, Ga), (i = Ya.prototype).clone = function() {
                            var e = new Ya;
                            return e.h = this.h.slice(), e
                        }, i.release = function() {
                            for (var e = c(this.h), t = e.next(); !t.done; t = e.next()) t.value.release();
                            this.h = []
                        }, i.find = function(e) {
                            for (var t = 0, n = c(this.h), i = n.next(); !i.done; i = n.next()) {
                                var r = (i = i.value).find(e);
                                if (null != r) return r + t;
                                t += i.i + i.g.length
                            }
                            return null
                        }, i.get = function(e) {
                            for (var t = 0, n = c(this.h), i = n.next(); !i.done; i = n.next()) {
                                var r = (i = i.value).get(e - t);
                                if (r) return r;
                                t += i.i + i.g.length
                            }
                            return null
                        }, i.offset = function() {}, i.Qc = function() {}, i.Ka = function() {}, i.Rc = function() {}, i.dc = function() {}, i.Yc = function() {}, F("shaka.media.MetaSegmentIndex", Ya), Ya.prototype.updateEvery = Ya.prototype.Yc, Ya.prototype.fit = Ya.prototype.dc, Ya.prototype.mergeAndEvict = Ya.prototype.Rc, Ya.prototype.evict = Ya.prototype.Ka, Ya.prototype.merge = Ya.prototype.Qc, Ya.prototype.offset = Ya.prototype.offset, Ya.prototype.get = Ya.prototype.get, Ya.prototype.find = Ya.prototype.find, Ya.prototype.release = Ya.prototype.release, Ja.prototype.ea = function() {
                            return this.g.ea()
                        };
                        var Za = [
                            [255],
                            [127, 255],
                            [63, 255, 255],
                            [31, 255, 255, 255],
                            [15, 255, 255, 255, 255],
                            [7, 255, 255, 255, 255, 255],
                            [3, 255, 255, 255, 255, 255, 255],
                            [1, 255, 255, 255, 255, 255, 255, 255]
                        ];

                        function eo(e, t) {
                            this.id = e, this.g = t
                        }

                        function to(e) {
                            if (8 < e.g.byteLength) throw new Ye(2, 3, 3002);
                            if (8 == e.g.byteLength && 224 & e.g.getUint8(0)) throw new Ye(2, 3, 3001);
                            for (var t = 0, n = 0; n < e.g.byteLength; n++) {
                                t = 256 * t + e.g.getUint8(n)
                            }
                            return t
                        }

                        function no(e) {
                            var t = new Ja(e.g);
                            if (179 != (e = $a(t)).id) throw new Ye(2, 3, 3013);
                            if (e = to(e), 183 != (t = $a(t)).id) throw new Ye(2, 3, 3012);
                            t = new Ja(t.g);
                            for (var n = 0; t.ea();) {
                                var i = $a(t);
                                if (241 == i.id) {
                                    n = to(i);
                                    break
                                }
                            }
                            return {
                                lg: e,
                                Wf: n
                            }
                        }

                        function io(e, t) {
                            if (!(t = Ba(e, t, "Initialization"))) return null;
                            var n = e.G.ta,
                                i = t.getAttribute("sourceURL");
                            i && (n = et(e.G.ta, [i])), i = 0;
                            var r = null;
                            return (t = Xr(t, "range", $r)) && (i = t.start, r = t.end), new Ha((function() {
                                return n
                            }), i, r, lo(e))
                        }

                        function ro(e, t) {
                            var n = Number(Ua(e, oo, "presentationTimeOffset")) || 0,
                                i = Ua(e, oo, "timescale"),
                                r = 1;
                            i && (r = Zr(i) || 1);
                            var a = n / r || 0,
                                o = io(e, oo);
                            ! function(e, t) {
                                if (uo(e, t), !so(e)) throw new Ye(2, 4, 4002)
                            }(e, o);
                            var s = Aa(e);
                            return {
                                Eb: function() {
                                    var e = Ba(s, oo, "RepresentationIndex"),
                                        n = s.G.ta;
                                    return e && (e = e.getAttribute("sourceURL")) && (n = et(s.G.ta, [e])), e = so(s), ao(s, t, o, n, e.start, e.end, a)
                                }
                            }
                        }

                        function ao(e, t, n, i, r, a, o) {
                            var s, u, l, c, d, h, f, p, g, m, v, y, b, w, T;
                            return _((function(S) {
                                if (1 == S.g) return s = e.presentationTimeline, u = !e.Ya || !e.U.sd, l = e.U.start, c = e.U.duration, d = e.G.mimeType.split("/")[1], f = null, p = [(h = t)(i, r, a, !1), "webm" == d ? h(n.Oa(), n.j, n.i, !0) : null], h = null, x(S, Promise.all(p), 2);
                                if (g = S.h, m = g[0], v = g[1] || null, null, b = l - o, w = l, T = c ? l + c : 1 / 0, "mp4" == d) var A = Ka(m, r, i, n, b, w, T);
                                else {
                                    if (440786851 != $a(A = new Ja(v)).id) throw new Ye(2, 3, 3008);
                                    var k = $a(A);
                                    if (408125543 != k.id) throw new Ye(2, 3, 3009);
                                    A = k.g.byteOffset, k = new Ja(k.g);
                                    for (var E = null; k.ea();) {
                                        var C = $a(k);
                                        if (357149030 == C.id) {
                                            E = C;
                                            break
                                        }
                                    }
                                    if (!E) throw new Ye(2, 3, 3010);
                                    for (E = new Ja(E.g), C = 1e6, k = null; E.ea();) {
                                        var I = $a(E);
                                        if (2807729 == I.id) C = to(I);
                                        else if (17545 == I.id)
                                            if (4 == I.g.byteLength) k = I.g.getFloat32(0);
                                            else {
                                                if (8 != I.g.byteLength) throw new Ye(2, 3, 3003);
                                                k = I.g.getFloat64(0)
                                            }
                                    }
                                    if (null == k) throw new Ye(2, 3, 3011);
                                    if (k *= E = C / 1e9, 475249515 != (C = $a(new Ja(m))).id) throw new Ye(2, 3, 3007);
                                    A = function(e, t, n, i, r, a, o, s, u) {
                                        function l() {
                                            return r
                                        }
                                        var c = [];
                                        e = new Ja(e.g);
                                        for (var d = null, h = null; e.ea();) {
                                            var f = $a(e);
                                            if (187 == f.id) {
                                                var p = no(f);
                                                p && (f = n * p.lg, p = t + p.Wf, null != d && c.push(new Va(d + o, f + o, l, h, p - 1, a, o, s, u)), d = f, h = p)
                                            }
                                        }
                                        return null != d && c.push(new Va(d + o, i + o, l, h, null, a, o, s, u)), c
                                    }(C, A, E, k, i, n, b, w, T)
                                }
                                return y = A, s.Hd(y), f = new Ga(y), u && f.dc(w, T, !0), S.return(f)
                            }))
                        }

                        function oo(e) {
                            return e.sc
                        }

                        function so(e) {
                            var t = Ba(e, oo, "RepresentationIndex");
                            return e = $r((e = Ua(e, oo, "indexRange")) || ""), t && (e = Xr(t, "range", $r, e)), e
                        }

                        function uo(e, t) {
                            var n = e.G.mimeType.split("/")[1];
                            if (e.G.contentType != rt && "mp4" != n && "webm" != n) throw new Ye(2, 4, 4006);
                            if ("webm" == n && !t) throw new Ye(2, 4, 4005)
                        }

                        function lo(e) {
                            var t = e.G;
                            return {
                                bandwidth: e.bandwidth,
                                audioSamplingRate: t.audioSamplingRate,
                                codecs: t.codecs,
                                contentType: t.contentType,
                                frameRate: t.frameRate || null,
                                height: t.height || null,
                                mimeType: t.mimeType,
                                channelsCount: t.Tc,
                                pixelAspectRatio: t.pixelAspectRatio || null,
                                width: t.width || null
                            }
                        }

                        function co(e, t) {
                            var n = io(e, ho),
                                i = function(e) {
                                    var t = function(e) {
                                        return [e.G.bb, e.$.bb, e.ba.bb].filter(Ze).map((function(e) {
                                            return zr(e, "SegmentURL")
                                        })).reduce((function(e, t) {
                                            return 0 < e.length ? e : t
                                        })).map((function(t) {
                                            return t.getAttribute("indexRange") && !e.se && (e.se = !0), {
                                                Of: t.getAttribute("media"),
                                                start: (t = Xr(t, "mediaRange", $r, {
                                                    start: 0,
                                                    end: null
                                                })).start,
                                                end: t.end
                                            }
                                        }))
                                    }(e);
                                    e = Oa(e, ho);
                                    var n = e.Pb;
                                    0 == n && (n = 1);
                                    var i = 0;
                                    return e.fa ? i = e.fa * (n - 1) : e.timeline && 0 < e.timeline.length && (i = e.timeline[0].start), {
                                        fa: e.fa,
                                        startTime: i,
                                        Pb: n,
                                        Ta: e.Ta,
                                        timeline: e.timeline,
                                        Jb: t
                                    }
                                }(e);
                            if (!i.fa && !i.timeline && 1 < i.Jb.length) throw new Ye(2, 4, 4002);
                            if (!i.fa && !e.U.duration && !i.timeline && 1 == i.Jb.length) throw new Ye(2, 4, 4002);
                            if (i.timeline && 0 == i.timeline.length) throw new Ye(2, 4, 4002);
                            var r = null,
                                a = null;
                            e.ba.id && e.G.id && (a = t[e.ba.id + "," + e.G.id]) && (r = a.segmentIndex);
                            var o = function(e, t, n, i, r) {
                                var a = i.Jb.length;
                                i.timeline && i.timeline.length != i.Jb.length && (a = Math.min(i.timeline.length, i.Jb.length));
                                for (var o = e - i.Ta, s = t ? e + t : 1 / 0, u = [], l = i.startTime, c = {}, d = 0; d < a; c = {
                                        Vb: c.Vb,
                                        Tb: c.Tb
                                    }, d++) {
                                    c.Tb = i.Jb[d];
                                    var h = void 0;
                                    h = null != i.fa ? l + i.fa : i.timeline ? i.timeline[d].end : l + t, c.Vb = null, u.push(new Va(e + l, e + h, function(e) {
                                        return function() {
                                            return null == e.Vb && (e.Vb = et(n, [e.Tb.Of])), e.Vb
                                        }
                                    }(c), c.Tb.start, c.Tb.end, r, o, e, s)), l = h
                                }
                                return u
                            }(e.U.start, e.U.duration, e.G.ta, i, n);
                            return t = !r, r ? r.Rc(o, e.presentationTimeline.mb()) : r = new Ga(o), e.presentationTimeline.Hd(o), e.Ya && e.U.sd || r.dc(e.U.start, e.U.duration ? e.U.start + e.U.duration : 1 / 0, t), a && (a.segmentIndex = r), {
                                Eb: function() {
                                    return r && 0 != r.fc() || r.Qc(o), Promise.resolve(r)
                                }
                            }
                        }

                        function ho(e) {
                            return e.bb
                        }

                        function fo(e, t, n, i, r, a) {
                            var o = function(e) {
                                    var t = Ua(e, po, "initialization");
                                    if (!t) return null;
                                    var n = e.G.id,
                                        i = e.bandwidth || null,
                                        r = e.G.ta;
                                    return new Ha((function() {
                                        var e = ja(t, n, null, i, null);
                                        return et(r, [e])
                                    }), 0, null, lo(e))
                                }(e),
                                s = function(e) {
                                    var t = Oa(e, po),
                                        n = Ua(e, po, "media");
                                    return e = Ua(e, po, "index"), {
                                        fa: t.fa,
                                        timescale: t.timescale,
                                        Pb: t.Pb,
                                        Ta: t.Ta,
                                        ae: t.ae,
                                        timeline: t.timeline,
                                        Dd: n,
                                        lc: e
                                    }
                                }(e);
                            ! function(e) {
                                var t = e.lc ? 1 : 0;
                                if (t += e.timeline ? 1 : 0, t += e.fa ? 1 : 0, 0 == t) throw new Ye(2, 4, 4002);
                                if (1 != t && (e.lc && (e.timeline = null), e.fa = null), !e.lc && !e.Dd) throw new Ye(2, 4, 4002)
                            }(s);
                            var u = Aa(e);
                            if (s.lc) return uo(e, o), {
                                Eb: function() {
                                    var e = ja(s.lc, u.G.id, null, u.bandwidth || null, null);
                                    return e = et(u.G.ta, [e]), ao(u, t, o, e, 0, null, s.Ta)
                                }
                            };
                            if (s.fa) return i || "image" === e.$.contentType || (e.presentationTimeline.Gd(s.fa), e.presentationTimeline.Sc(e.U.start)), {
                                Eb: function() {
                                    return function(e, t, n, i, r) {
                                        function a(e) {
                                            var n = (e - p) * f,
                                                r = n + t.Ta,
                                                a = n + l;
                                            return n = a + f, (a = new Va(a, Math.min(n, s()), (function() {
                                                var t = ja(m, y, e, v, r * g);
                                                return et(b, [t])
                                            }), 0, null, i, w, l, s())).l = n, a
                                        }

                                        function o() {
                                            var e = [Math.max(u.mb(), l), Math.min(u.lb(), s())].map((function(e) {
                                                return e - l
                                            }));
                                            return [Math.ceil(e[0] / f), Math.ceil(e[1] / f) - 1].map((function(e) {
                                                return e + p
                                            }))
                                        }

                                        function s() {
                                            var e = null != d && r[d] || h;
                                            return e ? l + e : 1 / 0
                                        }
                                        var u = e.presentationTimeline,
                                            l = e.U.start,
                                            d = e.ba.id,
                                            h = e.U.duration,
                                            f = t.fa,
                                            p = t.Pb,
                                            g = t.timescale,
                                            m = t.Dd,
                                            v = e.bandwidth || null,
                                            y = e.G.id,
                                            b = e.G.ta,
                                            w = l - t.Ta,
                                            x = o();
                                        e = e.Ya ? Math.max(x[0], x[1] - n + 1) : x[0], x = x[1], n = [];
                                        for (var T = e; T <= x; ++T) {
                                            var S = a(T);
                                            n.push(S)
                                        }
                                        var A = new Ga(n);
                                        if (n = u.lb() < s(), T = u.T(), n || T) {
                                            var k = Math.max(e, x + 1);
                                            A.Yc(f, (function() {
                                                var e = u.mb();
                                                A.Ka(e);
                                                var t = c(o());
                                                t.next(), t = t.next().value;
                                                for (var n = []; k <= t;) {
                                                    var i = a(k);
                                                    n.push(i), k++
                                                }
                                                return e > s() && !n.length ? null : n
                                            }))
                                        }
                                        return Promise.resolve(A)
                                    }(u, s, r, o, a)
                                }
                            };
                            var l = null;
                            i = i = null, e.ba.id && e.G.id && (i = n[i = e.ba.id + "," + e.G.id]) && (l = i.segmentIndex);
                            var d = e.U.start,
                                h = e.U.duration ? d + e.U.duration : 1 / 0,
                                f = !(e.Ya && e.U.sd);
                            return l ? (mo(n = l, s, d, h, f), n.Ka(e.presentationTimeline.mb())) : l = new go(s, e.G.id, e.bandwidth, e.G.ta, d, h, o, f), s.timeline && "image" !== e.$.contentType && e.presentationTimeline.ye(s.timeline, d), i && e.Ya && (i.segmentIndex = l), {
                                Eb: function() {
                                    return l instanceof go && 0 == l.fc() && mo(l, s, d, h, f), Promise.resolve(l)
                                }
                            }
                        }

                        function po(e) {
                            return e.tc
                        }

                        function go(e, t, n, i, r, a, o, s) {
                            Ga.call(this, []), this.h = e, this.C = t, this.s = n, this.u = i, this.j = r, this.o = a, this.A = o, s && vo(this)
                        }

                        function mo(e, t, n, i, r) {
                            if (e.h) {
                                var a = (n = e.h.timeline)[n.length - 1];
                                0 < (t = t.timeline.filter((function(e) {
                                    return e.start >= a.end
                                }))).length && e.h.timeline.push.apply(e.h.timeline, d(t)), e.o !== i && (e.o = i)
                            } else e.h = t, e.j = n, e.o = i;
                            r && vo(e)
                        }

                        function vo(e) {
                            if (!e.m) {
                                for (var t = e.h.timeline; t.length && t[t.length - 1].start >= e.o;) t.pop();
                                e.Ka(e.j), 0 !== t.length && 1 / 0 !== e.o && (t[t.length - 1].end = e.o - e.j)
                            }
                        }

                        function yo() {}

                        function bo(e, t, n) {
                            var i, r, a;
                            return _((function(o) {
                                return 1 == o.g ? ((i = Ma([e], n)).method = "HEAD", x(o, t.request(0, i).promise, 2)) : (r = o.h, a = r.headers["content-type"], o.return(a ? a.toLowerCase().split(";").shift() : ""))
                            }))
                        }

                        function wo(e) {
                            return 1 == (e = new Ne(e).va.split("/").pop().split(".")).length ? "" : e.pop().toLowerCase()
                        }
                        v(go, Ga), (i = go.prototype).fc = function() {
                            return this.h ? this.h.timeline.length : 0
                        }, i.release = function() {
                            Ga.prototype.release.call(this), this.h = null
                        }, i.Ka = function(e) {
                            if (this.h) {
                                for (var t = 0, n = this.h.timeline, i = 0; i < n.length && n[i].end + this.j <= e; i += 1) t += 1;
                                0 < t && (this.h.timeline = n.slice(t), this.g.length >= t && (this.g = this.g.slice(t)), this.i += t, 0 === this.fc() && this.release())
                            }
                        }, i.find = function(e) {
                            if (this.h && this.h.timeline && this.h.timeline.length && e < this.h.timeline[0].start + this.j) return this.i;
                            if (!this.h) return null;
                            var t = this.h.timeline;
                            if (e < this.j || e > this.o) return null;
                            for (var n = t.length - 1, i = 0; i < t.length; i++) {
                                var r = t[i],
                                    a = r.start + this.j;
                                if (r = r.end + this.j, i < n && (r = t[i + 1].start + this.j), e >= a && e < r) return i + this.i
                            }
                            return null
                        }, i.get = function(e) {
                            var t = this,
                                n = e - this.i;
                            if (0 > n || n >= this.fc() || !this.h) return null;
                            var i = this.g[n];
                            if (!i) {
                                i = this.h.timeline[n];
                                var r = e + this.h.Pb,
                                    a = this.h.ae + i.be;
                                i = new Va(this.j + i.start, this.j + i.end, (function() {
                                    return t.h ? function(e, t, n, i, r, a) {
                                        return e = ja(e, t, n, i || null, r), et(a, [e]).map((function(e) {
                                            return e.toString()
                                        }))
                                    }(t.h.Dd, t.C, r, t.s, a, t.u) : []
                                }), 0, null, this.A, this.j - this.h.Ta, this.j, this.o), this.g[n] = i
                            }
                            return i
                        }, F("shaka.media.ManifestParser", yo), yo.unregisterParserByMime = function(e) {
                            delete xo[e]
                        }, yo.registerParserByMime = function(e, t) {
                            xo[e] = t
                        }, yo.registerParserByExtension = function(e, t) {
                            To[e] = t
                        }, yo.AccessibilityPurpose = {
                            tg: "visually impaired",
                            pg: "hard of hearing"
                        };
                        var xo = {},
                            To = {};

                        function So(e, t, n) {
                            this.i = e, this.u = t, this.o = this.j = 1 / 0, this.g = 1, this.h = this.l = null, this.m = 0, this.C = !0, this.D = 0, this.s = void 0 === n || n, this.F = 0, this.A = !1
                        }

                        function Ao(e, t, n, i, r) {
                            return e = Ma(e, i, r), 0 == t && null == n || (e.headers.Range = n ? "bytes=" + t + "-" + n : "bytes=" + t + "-"), e
                        }

                        function ko(e) {
                            this.g = !1, this.h = new pa, this.i = e
                        }

                        function Eo(e, t) {
                            if (e.g) {
                                if (t instanceof Ye && 7003 == t.code) throw t;
                                throw new Ye(2, 7, 7003, t)
                            }
                        }

                        function Co() {
                            this.g = new Dt
                        }

                        function Io(e, t, n, i) {
                            this.target = e, this.type = t, this.listener = n, this.g = function(e, t) {
                                if (null == t) return !1;
                                if ("boolean" == typeof t) return t;
                                var n = new Set(["passive", "capture"]);
                                return Object.keys(t).filter((function(e) {
                                        return !n.has(e)
                                    })),
                                    function(e) {
                                        var t = Mo;
                                        if (null == t) {
                                            t = !1;
                                            try {
                                                var n = {},
                                                    i = {
                                                        get: function() {
                                                            return t = !0, !1
                                                        }
                                                    };
                                                Object.defineProperty(n, "passive", i), Object.defineProperty(n, "capture", i), i = function() {}, e.addEventListener("test", i, n), e.removeEventListener("test", i, n)
                                            } catch (r) {
                                                t = !1
                                            }
                                            Mo = t
                                        }
                                        return t || !1
                                    }(e) ? t : t.capture || !1
                            }(e, i), this.target.addEventListener(t, n, this.g)
                        }(i = So.prototype).getDuration = function() {
                            return this.j
                        }, i.pf = function() {
                            return this.g
                        }, i.eg = function(e) {
                            this.i = e
                        }, i.Va = function(e) {
                            this.j = e
                        }, i.uf = function() {
                            return this.i
                        }, i.He = function(e) {
                            this.m = e
                        }, i.Yd = function(e) {
                            this.C = e
                        }, i.Xd = function(e) {
                            this.o = e
                        }, i.cg = function(e) {
                            this.u = e
                        }, i.ff = function() {
                            return this.u
                        }, i.ye = function(e, t) {
                            if (0 != e.length) {
                                var n = e[e.length - 1].end + t;
                                this.Sc(e[0].start + t), this.g = e.reduce((function(e, t) {
                                    return Math.max(e, t.end - t.start)
                                }), this.g), this.h = Math.max(this.h, n), null != this.i && this.s && !this.A && (this.i = (Date.now() + this.m) / 1e3 - this.h - this.g)
                            }
                        }, i.Hd = function(e) {
                            if (0 != e.length) {
                                for (var t = e[0].startTime, n = e[0].endTime, i = (Date.now() + this.m) / 1e3, r = (e = c(e)).next(); !r.done; r = e.next()) i < (r = r.value).startTime || (t = Math.min(t, r.startTime), n = Math.max(n, r.endTime), this.g = Math.max(this.g, r.endTime - r.startTime));
                                this.Sc(t), this.h = Math.max(this.h, n), null != this.i && this.s && !this.A && (this.i = i - this.h - this.g)
                            }
                        }, i.zd = function() {
                            this.A = !0
                        }, i.Sc = function(e) {
                            this.l = null == this.l ? e : Math.min(this.l, e)
                        }, i.Gd = function(e) {
                            this.g = Math.max(this.g, e)
                        }, i.offset = function(e) {
                            null != this.l && (this.l += e), null != this.h && (this.h += e)
                        }, i.T = function() {
                            return 1 / 0 == this.j && !this.C
                        }, i.Hb = function() {
                            return 1 / 0 != this.j && !this.C
                        }, i.mb = function() {
                            return Math.max(this.D, this.lb() - this.o)
                        }, i.Je = function(e) {
                            this.D = e
                        }, i.lb = function() {
                            return this.T() || this.Hb() ? Math.min(Math.max(0, (Date.now() + this.m) / 1e3 - this.g - this.i) + this.F, this.j) : this.h ? Math.min(this.h, this.j) : this.j
                        }, i.hc = function(e) {
                            var t = Math.max(this.l, this.D);
                            return 1 / 0 == this.o ? Math.ceil(1e3 * t) / 1e3 : Math.max(t, Math.min(this.lb() - this.o + e, this.Na()))
                        }, i.Fb = function() {
                            return this.hc(0)
                        }, i.Na = function() {
                            return Math.max(0, this.lb() - (this.T() || this.Hb() ? this.u : 0))
                        }, i.Oe = function() {
                            return !(null == this.i || null != this.h && this.s)
                        }, i.Ge = function(e) {
                            this.F = e
                        }, F("shaka.media.PresentationTimeline", So), So.prototype.setAvailabilityTimeOffset = So.prototype.Ge, So.prototype.usingPresentationStartTime = So.prototype.Oe, So.prototype.getSeekRangeEnd = So.prototype.Na, So.prototype.getSeekRangeStart = So.prototype.Fb, So.prototype.getSafeSeekRangeStart = So.prototype.hc, So.prototype.getSegmentAvailabilityEnd = So.prototype.lb, So.prototype.setUserSeekStart = So.prototype.Je, So.prototype.getSegmentAvailabilityStart = So.prototype.mb, So.prototype.isInProgress = So.prototype.Hb, So.prototype.isLive = So.prototype.T, So.prototype.offset = So.prototype.offset, So.prototype.notifyMaxSegmentDuration = So.prototype.Gd, So.prototype.notifyMinSegmentStartTime = So.prototype.Sc, So.prototype.lockStartTime = So.prototype.zd, So.prototype.notifySegments = So.prototype.Hd, So.prototype.notifyTimeRange = So.prototype.ye, So.prototype.getDelay = So.prototype.ff, So.prototype.setDelay = So.prototype.cg, So.prototype.setSegmentAvailabilityDuration = So.prototype.Xd, So.prototype.setStatic = So.prototype.Yd, So.prototype.setClockOffset = So.prototype.He, So.prototype.getPresentationStartTime = So.prototype.uf, So.prototype.setDuration = So.prototype.Va, So.prototype.setPresentationStartTime = So.prototype.eg, So.prototype.getMaxSegmentDuration = So.prototype.pf, So.prototype.getDuration = So.prototype.getDuration, ko.prototype.destroy = function() {
                            var e = this;
                            return this.g ? this.h : (this.g = !0, this.i().then((function() {
                                e.h.resolve()
                            }), (function() {
                                e.h.resolve()
                            })))
                        }, (i = Co.prototype).release = function() {
                            this.Nb(), this.g = null
                        }, i.J = function(e, t, n, i) {
                            this.g && (e = new Io(e, t, n, i), this.g.push(t, e))
                        }, i.oa = function(e, t, n, i) {
                            var r = this;
                            this.J(e, t, (function i(a) {
                                r.uc(e, t, i), n(a)
                            }), i)
                        }, i.uc = function(e, t, n) {
                            if (this.g)
                                for (var i = this.g.get(t) || [], r = (i = c(i)).next(); !r.done; r = i.next())(r = r.value).target != e || n != r.listener && n || (r.uc(), this.g.remove(t, r))
                        }, i.Nb = function() {
                            if (this.g) {
                                var e, t = this.g,
                                    n = [];
                                for (e in t.g) n.push.apply(n, d(t.g[e]));
                                for (n = (t = c(n)).next(); !n.done; n = t.next()) n.value.uc();
                                this.g.g = {}
                            }
                        }, F("shaka.util.EventManager", Co), Co.prototype.removeAll = Co.prototype.Nb, Co.prototype.unlisten = Co.prototype.uc, Co.prototype.listenOnce = Co.prototype.oa, Co.prototype.listen = Co.prototype.J, Co.prototype.release = Co.prototype.release, Io.prototype.uc = function() {
                            this.target.removeEventListener(this.type, this.listener, this.g), this.listener = this.target = null, this.g = !1
                        };
                        var Mo = void 0;

                        function Do(e) {
                            for (var t = new Map, n = c(Object.keys(e)), i = n.next(); !i.done; i = n.next()) i = i.value, t.set(i, e[i]);
                            return t
                        }

                        function Ro(e) {
                            var t = {};
                            return e.forEach((function(e, n) {
                                t[n] = e
                            })), t
                        }

                        function _o(e, t) {
                            if (!e && !t) return !0;
                            if (e && !t || t && !e) return !1;
                            if (e.size != t.size) return !1;
                            for (var n = (e = c(e)).next(); !n.done; n = e.next()) {
                                var i = c(n.value);
                                if (n = i.next().value, i = i.next().value, !t.has(n)) return !1;
                                if ((n = t.get(n)) != i || null == n) return !1
                            }
                            return !0
                        }

                        function Po(e, t) {
                            var n = this;
                            t = void 0 === t ? 1 : t, this.C = e, this.F = new Set, this.m = this.s = null, this.ha = !1, this.I = 0, this.g = null, this.u = new Co, this.i = new Map, this.A = new Map, this.l = new pa, this.h = null, this.o = function(t) {
                                2 == t.severity && n.l.reject(t), e.onError(t)
                            }, this.P = new Map, this.ia = new Map, this.W = new _t((function() {
                                return function(e) {
                                    var t = e.P,
                                        n = e.ia;
                                    n.clear(), t.forEach((function(e, t) {
                                        return n.set(t, e)
                                    })), t = Array.from(n.values()), t.length && t.every((function(e) {
                                        return "expired" == e
                                    })) && e.o(new Ye(2, 6, 6014)), e.C.ze(Ro(n))
                                }(n)
                            })), this.ca = !1, this.L = [], this.O = !1, this.ja = new _t((function() {
                                ! function(e) {
                                    e.i.forEach((function(t, n) {
                                        var i = t.Jd,
                                            r = n.expiration;
                                        isNaN(r) && (r = 1 / 0), r != i && (e.C.onExpirationUpdated(n.sessionId, r), t.Jd = r)
                                    }))
                                }(n)
                            })).sa(t), this.l.catch((function() {})), this.j = new ko((function() {
                                return function(e) {
                                    return _((function(t) {
                                        switch (t.g) {
                                            case 1:
                                                return e.u.release(), e.u = null, e.l.reject(), e.ja.stop(), e.ja = null, e.W.stop(), e.W = null, x(t, Vo(e), 2);
                                            case 2:
                                                if (!e.m) {
                                                    t.B(3);
                                                    break
                                                }
                                                return S(t, 4), x(t, e.m.setMediaKeys(null), 6);
                                            case 6:
                                                A(t, 5);
                                                break;
                                            case 4:
                                                k(t);
                                            case 5:
                                                e.m = null;
                                            case 3:
                                                e.g = null, e.F.clear(), e.s = null, e.A = new Map, e.h = null, e.o = function() {}, e.C = null, e.Z = !1, e.D = null, T(t)
                                        }
                                    }))
                                }(n)
                            })), this.Z = !1, this.K = this.D = null
                        }

                        function Lo(t, n, i) {
                            t.A = new Map;
                            for (var r = (i = c(i)).next(); !r.done; r = i.next()) t.A.set(r.value, {
                                initData: null,
                                initDataType: null
                            });
                            for (r = (i = c(t.h.persistentSessionsMetadata)).next(); !r.done; r = i.next()) r = r.value, t.A.set(r.sessionId, {
                                initData: r.initData,
                                initDataType: r.initDataType
                            });
                            return t.ca = 0 < t.A.size,
                                function(t, n) {
                                    var i, r, a, o, s, u, l, d, h, f, p, g, m, v, y;
                                    return _((function(b) {
                                        if (1 == b.g) {
                                            if (i = function(t) {
                                                    if (t = Do(t.h.clearKeys), 0 == t.size) return null;
                                                    var n = [],
                                                        i = [];
                                                    t.forEach((function(e, t) {
                                                        var r = t;
                                                        22 != r.length && (r = Ir(Dr(t), !1)), 22 != (t = e).length && (t = Ir(Dr(e), !1)), e = {
                                                            kty: "oct",
                                                            kid: r,
                                                            k: t
                                                        }, n.push(e), i.push(e.kid)
                                                    })), t = JSON.stringify({
                                                        keys: n
                                                    });
                                                    var r = JSON.stringify({
                                                        kids: i
                                                    });
                                                    return r = [{
                                                        initData: ie(Ri(r)),
                                                        initDataType: "keyids"
                                                    }], {
                                                        keySystem: "org.w3.clearkey",
                                                        licenseServerUri: "data:application/json;base64," + e.btoa(t),
                                                        distinctiveIdentifierRequired: !1,
                                                        persistentStateRequired: !1,
                                                        audioRobustness: "",
                                                        videoRobustness: "",
                                                        serverCertificate: null,
                                                        serverCertificateUri: "",
                                                        sessionType: "",
                                                        initData: r,
                                                        keyIds: new Set(i)
                                                    }
                                                }(t))
                                                for (r = c(n), a = r.next(); !a.done; a = r.next())(o = a.value).video && (o.video.drmInfos = [i]), o.audio && (o.audio.drmInfos = [i]);
                                            for ((s = n.some((function(e) {
                                                    return !!(e.video && e.video.drmInfos.length || e.audio && e.audio.drmInfos.length)
                                                }))) || (u = Do(t.h.servers), function(e, t) {
                                                    var n = [];
                                                    for (t.forEach((function(e, t) {
                                                            n.push({
                                                                keySystem: t,
                                                                licenseServerUri: e,
                                                                distinctiveIdentifierRequired: !1,
                                                                persistentStateRequired: !1,
                                                                audioRobustness: "",
                                                                videoRobustness: "",
                                                                serverCertificate: null,
                                                                serverCertificateUri: "",
                                                                initData: [],
                                                                keyIds: new Set
                                                            })
                                                        })), e = c(e), t = e.next(); !t.done; t = e.next())(t = t.value).video && (t.video.drmInfos = n), t.audio && (t.audio.drmInfos = n)
                                                }(n, u)), l = new Set, d = c(n), a = d.next(); !a.done; a = d.next())
                                                for (h = a.value, f = qo(h), p = c(f), g = p.next(); !g.done; g = p.next()) m = g.value, l.add(m);
                                            for (v = c(l), g = v.next(); !g.done; g = v.next()) Wo(g.value, Do(t.h.servers), Do(t.h.advanced || {}), t.h.keySystemsMapping);
                                            return x(b, en(n, t.ca, t.Z, t.h.preferredKeySystems), 2)
                                        }
                                        return s || Object.keys(t.h.servers).length ? (y = function(e, t) {
                                            var n, i, r, a, o, s, u, l, d, h, f, p, g, m;
                                            return _((function(v) {
                                                switch (v.g) {
                                                    case 1:
                                                        if (n = new Map, t.length) {
                                                            i = function(e, t, n) {
                                                                for (var i = c(t), r = i.next(); !r.done; r = i.next()) {
                                                                    var a = c(qo(r.value));
                                                                    for (r = a.next(); !r.done; r = a.next()) r = r.value, n.has(r.keySystem) || n.set(r.keySystem, []), n.get(r.keySystem).push(r)
                                                                }
                                                                if (1 == n.size && n.has("")) throw new Ye(2, 6, 6e3);
                                                                for (i = {}, e = c(e.h.preferredKeySystems), r = e.next(); !r.done; i = {
                                                                        cd: i.cd
                                                                    }, r = e.next())
                                                                    for (i.cd = r.value, a = c(t), r = a.next(); !r.done; r = a.next())
                                                                        if (r = r.value.decodingInfos.find(function(e) {
                                                                                return function(t) {
                                                                                    return t.supported && null != t.keySystemAccess && t.keySystemAccess.keySystem == e.cd
                                                                                }
                                                                            }(i))) return r.keySystemAccess;
                                                                for (e = c([!0, !1]), r = e.next(); !r.done; r = e.next())
                                                                    for (i = r.value, a = c(t), r = a.next(); !r.done; r = a.next()) {
                                                                        var o = c(r.value.decodingInfos);
                                                                        for (r = o.next(); !r.done; r = o.next()) {
                                                                            var s = r.value;
                                                                            if (s.supported && s.keySystemAccess) {
                                                                                var u = c(r = n.get(s.keySystemAccess.keySystem));
                                                                                for (r = u.next(); !r.done; r = u.next())
                                                                                    if (!!r.value.licenseServerUri == i) return s.keySystemAccess
                                                                            }
                                                                        }
                                                                    }
                                                                return null
                                                            }(e, t, n), v.B(2);
                                                            break
                                                        }
                                                        return x(v, function(e) {
                                                            var t, n, i, r, a, o, s, u, l, d, h, f, p, g, m;
                                                            return _((function(v) {
                                                                switch (v.g) {
                                                                    case 1:
                                                                        if (1 == (void 0).size && (void 0).has("")) throw new Ye(2, 6, 6e3);
                                                                        for (n = c((void 0).values()), i = n.next(); !i.done; i = n.next()) 0 == (r = i.value).audioCapabilities.length && delete r.audioCapabilities, 0 == r.videoCapabilities.length && delete r.videoCapabilities;
                                                                        a = c(e.h.preferredKeySystems), o = a.next();
                                                                    case 2:
                                                                        if (o.done) {
                                                                            v.B(4);
                                                                            break
                                                                        }
                                                                        if (s = o.value, !(void 0).has(s)) {
                                                                            v.B(3);
                                                                            break
                                                                        }
                                                                        return u = (void 0).get(s), S(v, 6), x(v, navigator.requestMediaKeySystemAccess(s, [u]), 8);
                                                                    case 8:
                                                                        return t = v.h, v.return(t);
                                                                    case 6:
                                                                        k(v);
                                                                    case 7:
                                                                        Eo(e.j);
                                                                    case 3:
                                                                        o = a.next(), v.B(2);
                                                                        break;
                                                                    case 4:
                                                                        l = c([!0, !1]), d = l.next();
                                                                    case 9:
                                                                        if (d.done) {
                                                                            v.B(11);
                                                                            break
                                                                        }
                                                                        h = d.value, f = c((void 0).keys()), o = f.next();
                                                                    case 12:
                                                                        if (o.done) {
                                                                            d = l.next(), v.B(9);
                                                                            break
                                                                        }
                                                                        if (p = o.value, g = (void 0).get(p), m = g.drmInfos.some((function(e) {
                                                                                return !!e.licenseServerUri
                                                                            })), m != h) {
                                                                            v.B(13);
                                                                            break
                                                                        }
                                                                        return S(v, 15), x(v, navigator.requestMediaKeySystemAccess(p, [g]), 17);
                                                                    case 17:
                                                                        return t = v.h, v.return(t);
                                                                    case 15:
                                                                        k(v);
                                                                    case 16:
                                                                        Eo(e.j);
                                                                    case 13:
                                                                        o = f.next(), v.B(12);
                                                                        break;
                                                                    case 11:
                                                                        return v.return(t)
                                                                }
                                                            }))
                                                        }(e), 3);
                                                    case 3:
                                                        i = v.h;
                                                    case 2:
                                                        if (!(r = i)) throw new Ye(2, 6, 6001);
                                                        for (Eo(e.j), S(v, 4), e.F.clear(), a = r.getConfiguration(), o = a.audioCapabilities || [], s = a.videoCapabilities || [], u = c(o), l = u.next(); !l.done; l = u.next()) d = l.value, e.F.add(d.contentType.toLowerCase());
                                                        for (h = c(s), l = h.next(); !l.done; l = h.next()) f = l.value, e.F.add(f.contentType.toLowerCase());
                                                        if (t.length) {
                                                            var y = r.keySystem,
                                                                b = n.get(r.keySystem),
                                                                w = [],
                                                                T = [],
                                                                E = [],
                                                                C = [],
                                                                I = new Set;
                                                            Go(b, w, E, T, C, I);
                                                            var M = e.ca ? "persistent-license" : "temporary";
                                                            for (y = {
                                                                    keySystem: y,
                                                                    licenseServerUri: w[0],
                                                                    distinctiveIdentifierRequired: b[0].distinctiveIdentifierRequired,
                                                                    persistentStateRequired: b[0].persistentStateRequired,
                                                                    sessionType: b[0].sessionType || M,
                                                                    audioRobustness: b[0].audioRobustness || "",
                                                                    videoRobustness: b[0].videoRobustness || "",
                                                                    serverCertificate: E[0],
                                                                    serverCertificateUri: T[0],
                                                                    initData: C,
                                                                    keyIds: I
                                                                }, w = (b = c(b)).next(); !w.done; w = b.next())(w = w.value).distinctiveIdentifierRequired && (y.distinctiveIdentifierRequired = w.distinctiveIdentifierRequired), w.persistentStateRequired && (y.persistentStateRequired = w.persistentStateRequired);
                                                            b = y
                                                        } else b = r.keySystem, y = (void 0).get(r.keySystem), w = [], T = [], E = [], C = [], I = new Set, Go(y.drmInfos, w, E, T, C, I), b = {
                                                            keySystem: b,
                                                            licenseServerUri: w[0],
                                                            distinctiveIdentifierRequired: "required" == y.distinctiveIdentifier,
                                                            persistentStateRequired: "required" == y.persistentState,
                                                            sessionType: y.sessionTypes[0] || "temporary",
                                                            audioRobustness: (y.audioCapabilities ? y.audioCapabilities[0].robustness : "") || "",
                                                            videoRobustness: (y.videoCapabilities ? y.videoCapabilities[0].robustness : "") || "",
                                                            serverCertificate: E[0],
                                                            serverCertificateUri: T[0],
                                                            initData: C,
                                                            keyIds: I
                                                        };
                                                        if (e.g = b, !e.g.licenseServerUri) throw new Ye(2, 6, 6012, e.g.keySystem);
                                                        return x(v, r.createMediaKeys(), 6);
                                                    case 6:
                                                        if (p = v.h, Eo(e.j), e.s = p, "" == e.h.minHdcpVersion || !("getStatusForPolicy" in e.s)) {
                                                            v.B(7);
                                                            break
                                                        }
                                                        return S(v, 8), x(v, e.s.getStatusForPolicy({
                                                            minHdcpVersion: e.h.minHdcpVersion
                                                        }), 10);
                                                    case 10:
                                                        if ("usable" != v.h) throw new Ye(2, 6, 6018);
                                                        Eo(e.j), A(v, 7, 4);
                                                        break;
                                                    case 8:
                                                        if ((g = k(v, 4)) instanceof Ye) throw g;
                                                        throw new Ye(2, 6, 6019, g.message);
                                                    case 7:
                                                        return e.ha = !0, x(v, function(e) {
                                                            var t, n;
                                                            return _((function(i) {
                                                                switch (i.g) {
                                                                    case 1:
                                                                        if (!e.s || !e.g) return i.return();
                                                                        if (!e.g.serverCertificateUri || e.g.serverCertificate && e.g.serverCertificate.length) {
                                                                            i.B(2);
                                                                            break
                                                                        }
                                                                        return t = Ma([e.g.serverCertificateUri], e.h.retryParameters), S(i, 3), x(i, e.C.mc.request(5, t).promise, 5);
                                                                    case 5:
                                                                        n = i.h, e.g.serverCertificate = ie(n.data), A(i, 4);
                                                                        break;
                                                                    case 3:
                                                                        throw new Ye(2, 6, 6017, k(i));
                                                                    case 4:
                                                                        if (e.j.g) return i.return();
                                                                    case 2:
                                                                        return e.g.serverCertificate && e.g.serverCertificate.length ? (S(i, 6), x(i, e.s.setServerCertificate(e.g.serverCertificate), 8)) : i.return();
                                                                    case 8:
                                                                        A(i, 0);
                                                                        break;
                                                                    case 6:
                                                                        throw new Ye(2, 6, 6004, k(i).message)
                                                                }
                                                            }))
                                                        }(e), 11);
                                                    case 11:
                                                        Eo(e.j), A(v, 0);
                                                        break;
                                                    case 4:
                                                        if (m = k(v), Eo(e.j, m), e.g = null, e.F.clear(), m instanceof Ye) throw m;
                                                        throw new Ye(2, 6, 6002, m.message)
                                                }
                                            }))
                                        }(t, n), b.return(s ? y : y.catch((function() {})))) : (t.ha = !0, b.return(Promise.resolve()))
                                    }))
                                }(t, n)
                        }

                        function No(e) {
                            var t;
                            return _((function(n) {
                                switch (n.g) {
                                    case 1:
                                        if (e.m.mediaKeys) return n.return();
                                        if (!e.D) {
                                            n.B(2);
                                            break
                                        }
                                        return x(n, e.D, 3);
                                    case 3:
                                        return Eo(e.j), n.return();
                                    case 2:
                                        return S(n, 4), e.D = e.m.setMediaKeys(e.s), x(n, e.D, 6);
                                    case 6:
                                        A(n, 5);
                                        break;
                                    case 4:
                                        t = k(n), e.o(new Ye(2, 6, 6003, t.message));
                                    case 5:
                                        Eo(e.j), T(n)
                                }
                            }))
                        }

                        function jo(e, t, n) {
                            if (n.length) {
                                for (var i = e.i.values(), r = (i = c(i)).next(); !r.done; r = i.next())
                                    if (ee(n, r.value.initData) && !Vt("Tizen 2")) return;
                                0 < e.i.size && Ko(e) && (e.l.resolve(), e.l = new pa, e.l.catch((function() {}))),
                                    function(e, t, n, i) {
                                        try {
                                            var r = e.s.createSession(i)
                                        } catch (a) {
                                            return void e.o(new Ye(2, 6, 6005, a.message))
                                        }
                                        e.u.J(r, "message", (function(t) {
                                            e.m && e.h.delayLicenseRequestUntilPlayed && e.m.paused && !e.O ? e.L.push(t) : Fo(e, t)
                                        })), e.u.J(r, "keystatuseschange", (function(t) {
                                            return Ho(e, t)
                                        })), e.i.set(r, {
                                            initData: n,
                                            initDataType: t,
                                            loaded: !1,
                                            Jd: 1 / 0,
                                            cb: null,
                                            type: i
                                        });
                                        try {
                                            n = e.h.initDataTransform(n, t, e.g)
                                        } catch (a) {
                                            return t = a, a instanceof Ye || (t = new Ye(2, 6, 6016, a)), void e.o(t)
                                        }
                                        e.h.logLicenseExchange && Ir(n), r.generateRequest(t, n).catch((function(t) {
                                            if (!e.j.g) {
                                                e.i.delete(r);
                                                var n = t.errorCode;
                                                if (n && n.systemCode) {
                                                    var i = n.systemCode;
                                                    0 > i && (i += Math.pow(2, 32)), i = "0x" + i.toString(16)
                                                }
                                                e.o(new Ye(2, 6, 6006, t.message, t, i))
                                            }
                                        }))
                                    }(e, t, n, e.g.sessionType)
                            }
                        }

                        function Oo(e) {
                            return !!e && !!e.match(/^com\.(microsoft|chromecast)\.playready/)
                        }

                        function Uo(e) {
                            Ko(e) && e.l.resolve()
                        }

                        function Bo(e, t) {
                            new _t((function() {
                                t.loaded = !0, Uo(e)
                            })).V(Yo)
                        }

                        function Fo(e, t) {
                            var n, i, r, a, o, s, u, l, d, h, f, p;
                            _((function(g) {
                                switch (g.g) {
                                    case 1:
                                        if (n = t.target, e.h.logLicenseExchange && Ir(t.message), i = e.i.get(n), r = e.g.licenseServerUri, a = e.h.advanced[e.g.keySystem], "individualization-request" == t.messageType && a && a.individualizationServer && (r = a.individualizationServer), (o = Ma([r], e.h.retryParameters)).body = t.message, o.method = "POST", o.licenseRequestType = t.messageType, o.sessionId = n.sessionId, o.drmInfo = e.g, i && (o.initData = i.initData, o.initDataType = i.initDataType), Oo(e.g.keySystem)) {
                                            var m = Mi(o.body, !0, !0);
                                            if (m.includes("PlayReadyKeyMessage")) {
                                                for (var v = c((m = ra(m, "PlayReadyKeyMessage")).getElementsByTagName("HttpHeader")), y = v.next(); !y.done; y = v.next()) y = y.value, o.headers[y.getElementsByTagName("name")[0].textContent] = y.getElementsByTagName("value")[0].textContent;
                                                o.body = Mr(m.getElementsByTagName("Challenge")[0].textContent)
                                            } else o.headers["Content-Type"] = "text/xml; charset=utf-8"
                                        }
                                        return s = Date.now(), S(g, 2), x(g, e.C.mc.request(2, o).promise, 4);
                                    case 4:
                                        u = g.h, A(g, 3);
                                        break;
                                    case 2:
                                        return l = k(g), d = new Ye(2, 6, 6007, l), e.o(d), i && i.cb && i.cb.reject(d), g.return();
                                    case 3:
                                        return e.j.g ? g.return() : (e.I += (Date.now() - s) / 1e3, e.h.logLicenseExchange && Ir(u.data), S(g, 5), x(g, n.update(u.data), 7));
                                    case 7:
                                        A(g, 6);
                                        break;
                                    case 5:
                                        return h = k(g), f = new Ye(2, 6, 6008, h.message), e.o(f), i && i.cb && i.cb.reject(f), g.return();
                                    case 6:
                                        if (e.j.g) return g.return();
                                        p = new xa("drmsessionupdate"), e.C.onEvent(p), i && (i.cb && i.cb.resolve(), Bo(e, i)), T(g)
                                }
                            }))
                        }

                        function Ho(e, t) {
                            t = t.target;
                            var n = e.i.get(t),
                                i = !1;
                            t.keyStatuses.forEach((function(t, r) {
                                if ("string" == typeof r) {
                                    var a = r;
                                    r = t, t = a
                                }
                                if (Oo(e.g.keySystem) && 16 == r.byteLength && (Nt() || Ft())) {
                                    var o = (a = re(r)).getUint32(0, !0),
                                        s = a.getUint16(4, !0),
                                        u = a.getUint16(6, !0);
                                    a.setUint32(0, o, !1), a.setUint16(4, s, !1), a.setUint16(6, u, !1)
                                }
                                "status-pending" != t && (n.loaded = !0), "expired" == t && (i = !0), r = Rr(r).slice(0, 32), e.P.set(r, t)
                            }));
                            var r = t.expiration - Date.now();
                            (0 > r || i && 1e3 > r) && n && !n.cb && (e.i.delete(t), t.close().catch((function() {}))), Ko(e) && (e.l.resolve(), e.W.V(Jo))
                        }

                        function Vo(e) {
                            var t;
                            return _((function(n) {
                                return t = Array.from(e.i.entries()), e.i.clear(), x(n, Promise.all(t.map((function(t) {
                                    var n = (t = c(t)).next().value,
                                        i = t.next().value;
                                    return _((function(t) {
                                        return 1 == t.g ? (S(t, 2), e.A.has(n.sessionId) || "persistent-license" !== i.type || e.h.persistentSessionOnlinePlayback ? x(t, function(e) {
                                            var t;
                                            return _((function(n) {
                                                return 1 == n.g ? (t = new Promise((function(e, t) {
                                                    new _t(t).V(Xo)
                                                })), S(n, 2), x(n, Promise.race([Promise.all([e.close(), e.closed]), t]), 4)) : 2 != n.g ? A(n, 0) : (k(n), void T(n))
                                            }))
                                        }(n), 5) : x(t, n.remove(), 5)) : 2 != t.g ? A(t, 0) : (k(t), void T(t))
                                    }))
                                }))), 0)
                            }))
                        }

                        function zo(e, t) {
                            if (!e.length) return t;
                            if (!t.length) return e;
                            for (var n = [], i = (e = c(e)).next(); !i.done; i = e.next()) {
                                i = i.value;
                                for (var r = {}, a = c(t), o = a.next(); !o.done; r = {
                                        ya: r.ya
                                    }, o = a.next())
                                    if (o = o.value, i.keySystem == o.keySystem) {
                                        r.ya = [], r.ya = r.ya.concat(i.initData || []), r.ya = r.ya.concat(o.initData || []), r.ya = r.ya.filter(function(e) {
                                            return function(t, n) {
                                                return void 0 === t.keyId || n === e.ya.findIndex((function(e) {
                                                    return e.keyId === t.keyId
                                                }))
                                            }
                                        }(r)), a = i.keyIds && o.keyIds ? new Set([].concat(d(i.keyIds), d(o.keyIds))) : i.keyIds || o.keyIds, n.push({
                                            keySystem: i.keySystem,
                                            licenseServerUri: i.licenseServerUri || o.licenseServerUri,
                                            distinctiveIdentifierRequired: i.distinctiveIdentifierRequired || o.distinctiveIdentifierRequired,
                                            persistentStateRequired: i.persistentStateRequired || o.persistentStateRequired,
                                            videoRobustness: i.videoRobustness || o.videoRobustness,
                                            audioRobustness: i.audioRobustness || o.audioRobustness,
                                            serverCertificate: i.serverCertificate || o.serverCertificate,
                                            serverCertificateUri: i.serverCertificateUri || o.serverCertificateUri,
                                            initData: r.ya,
                                            keyIds: a
                                        });
                                        break
                                    }
                            }
                            return n
                        }

                        function qo(e) {
                            return (e.video ? e.video.drmInfos : []).concat(e.audio ? e.audio.drmInfos : [])
                        }

                        function Ko(e) {
                            return function(e, t) {
                                for (var n = (e = c(e)).next(); !n.done; n = e.next())
                                    if (!t(n.value)) return !1;
                                return !0
                            }(e = e.i.values(), (function(e) {
                                return e.loaded
                            }))
                        }

                        function Go(e, t, n, i, r, a) {
                            for (var o = {}, s = (e = c(e)).next(); !s.done; o = {
                                    ma: o.ma
                                }, s = e.next()) {
                                if (o.ma = s.value, t.includes(o.ma.licenseServerUri) || t.push(o.ma.licenseServerUri), i.includes(o.ma.serverCertificateUri) || i.push(o.ma.serverCertificateUri), o.ma.serverCertificate && (n.some(function(e) {
                                        return function(t) {
                                            return ee(t, e.ma.serverCertificate)
                                        }
                                    }(o)) || n.push(o.ma.serverCertificate)), o.ma.initData) {
                                    s = {};
                                    for (var u = c(o.ma.initData), l = u.next(); !l.done; s = {
                                            wc: s.wc
                                        }, l = u.next()) s.wc = l.value, r.some(function(e) {
                                        return function(t) {
                                            var n = e.wc;
                                            return !(!t.keyId || t.keyId != n.keyId) || t.initDataType == n.initDataType && ee(t.initData, n.initData)
                                        }
                                    }(s)) || r.push(s.wc)
                                }
                                if (o.ma.keyIds)
                                    for (u = (s = c(o.ma.keyIds)).next(); !u.done; u = s.next()) a.add(u.value)
                            }
                        }

                        function Wo(t, n, i, r) {
                            var a = t.keySystem;
                            !a || "org.w3.clearkey" == a && t.licenseServerUri || (n.size && (n = n.get(a) || "", t.licenseServerUri = n), t.keyIds || (t.keyIds = new Set), (i = i.get(a)) && (t.distinctiveIdentifierRequired || (t.distinctiveIdentifierRequired = i.distinctiveIdentifierRequired), t.persistentStateRequired || (t.persistentStateRequired = i.persistentStateRequired), t.videoRobustness || (t.videoRobustness = i.videoRobustness), t.audioRobustness || (t.audioRobustness = i.audioRobustness), t.serverCertificate || (t.serverCertificate = i.serverCertificate), i.sessionType && (t.sessionType = i.sessionType), t.serverCertificateUri || (t.serverCertificateUri = i.serverCertificateUri)), r[a] && (t.keySystem = r[a]), e.cast && e.cast.__platform__ && "com.microsoft.playready" == a && (t.keySystem = "com.chromecast.playready"))
                        }(i = Po.prototype).destroy = function() {
                            return this.j.destroy()
                        }, i.configure = function(e) {
                            this.h = e
                        }, i.Xb = function(e) {
                            var t = this;
                            return _((function(n) {
                                if (1 == n.g) return t.s ? (t.m = e, t.u.oa(t.m, "play", (function() {
                                    for (var e = c(t.L), n = e.next(); !n.done; n = e.next()) Fo(t, n.value);
                                    t.O = !0, t.L = []
                                })), "webkitCurrentPlaybackTargetIsWireless" in t.m && t.u.J(t.m, "webkitcurrentplaybacktargetiswirelesschanged", (function() {
                                    return Vo(t)
                                })), t.K = t.g && t.g.initData.find((function(e) {
                                    return 0 < e.initData.length
                                })) || null, t.K || "com.apple.fps" !== t.g.keySystem || t.A.size ? x(n, No(t), 2) : n.B(2)) : (t.u.oa(e, "encrypted", (function() {
                                    t.o(new Ye(2, 6, 6010))
                                })), n.return());
                                (function(e) {
                                    var t, n, i, r;
                                    return _((function(a) {
                                        if (1 == a.g) return e.A.size ? (e.A.forEach((function(t, n) {
                                            ! function(e, t, n) {
                                                var i, r, a, o, s, u, l;
                                                _((function(c) {
                                                    switch (c.g) {
                                                        case 1:
                                                            try {
                                                                i = e.s.createSession("persistent-license")
                                                            } catch (d) {
                                                                return r = new Ye(2, 6, 6005, d.message), e.o(r), c.return(Promise.reject(r))
                                                            }
                                                            return e.u.J(i, "message", (function(t) {
                                                                e.m && e.h.delayLicenseRequestUntilPlayed && e.m.paused && !e.O ? e.L.push(t) : Fo(e, t)
                                                            })), e.u.J(i, "keystatuseschange", (function(t) {
                                                                return Ho(e, t)
                                                            })), a = {
                                                                initData: n.initData,
                                                                initDataType: n.initDataType,
                                                                loaded: !1,
                                                                Jd: 1 / 0,
                                                                cb: null,
                                                                type: "persistent-license"
                                                            }, e.i.set(i, a), S(c, 2), x(c, i.load(t), 4);
                                                        case 4:
                                                            return o = c.h, Eo(e.j), o || (e.i.delete(i), s = e.h.persistentSessionOnlinePlayback ? 1 : 2, e.o(new Ye(s, 6, 6013)), a.loaded = !0), Bo(e, a), Uo(e), c.return(i);
                                                        case 2:
                                                            u = k(c), Eo(e.j, u), e.i.delete(i), l = e.h.persistentSessionOnlinePlayback ? 1 : 2, e.o(new Ye(l, 6, 6005, u.message)), a.loaded = !0, Uo(e);
                                                        case 3:
                                                            return c.return(Promise.resolve())
                                                    }
                                                }))
                                            }(e, n, t)
                                        })), x(a, e.l, 3)) : a.B(2);
                                        if (2 != a.g) {
                                            if (0 < (e.g && e.g.keyIds || new Set([])).size && function(e) {
                                                    for (var t = c(e.g && e.g.keyIds || new Set([])), n = t.next(); !n.done; n = t.next())
                                                        if ("usable" !== e.P.get(n.value)) return !1;
                                                    return !0
                                                }(e)) return a.return(e.l);
                                            e.l = new pa, e.l.catch((function() {}))
                                        }
                                        for (t = (e.g ? e.g.initData : []) || [], n = c(t), i = n.next(); !i.done; i = n.next()) r = i.value, jo(e, r.initDataType, r.initData);
                                        return t.length || e.l.resolve(), a.return(e.l)
                                    }))
                                })(t).catch((function() {})), t.K || t.A.size || t.h.parseInbandPsshEnabled || t.u.J(t.m, "encrypted", (function(e) {
                                    return function(e, t) {
                                        return _((function(n) {
                                            if (1 == n.g) return x(n, No(e), 2);
                                            jo(e, t.initDataType, ie(t.initData)), T(n)
                                        }))
                                    }(t, e)
                                })), T(n)
                            }))
                        }, i.ld = function() {
                            var e = this,
                                t = this.i.keys();
                            return t = function(e, t) {
                                for (var n = [], i = (e = c(e)).next(); !i.done; i = e.next()) n.push(t(i.value));
                                return n
                            }(t, (function(t) {
                                var n = e.i.get(t);
                                return {
                                    sessionId: t.sessionId,
                                    sessionType: n.type,
                                    initData: n.initData,
                                    initDataType: n.initDataType
                                }
                            })), Array.from(t)
                        }, i.nd = function() {
                            for (var e = 1 / 0, t = this.i.keys(), n = (t = c(t)).next(); !n.done; n = t.next()) n = n.value, isNaN(n.expiration) || (e = Math.min(e, n.expiration));
                            return e
                        }, i.Fc = function() {
                            return Ro(this.ia)
                        };
                        var Xo = 1,
                            Yo = 5,
                            Jo = .5,
                            $o = new Ei((function() {
                                return ne(new Uint8Array([0]))
                            }));

                        function Qo() {
                            this.j = [], this.g = [], this.i = [], this.l = [], this.h = [], this.m = new Set
                        }

                        function Zo(e, t, n) {
                            var i, r, a, o, s, u, l, d, h, f, p, g, m, v, y, b, w, T, S = is,
                                A = rs;
                            return _((function(k) {
                                switch (k.g) {
                                    case 1:
                                        for (i = at, r = [], a = 0; a < t.length; a++) a >= n ? r.push(new Set(t[a])) : r.push(new Set);
                                        o = c(e), s = o.next();
                                    case 2:
                                        if (s.done) {
                                            k.B(4);
                                            break
                                        }
                                        return x(k, function(e, t, n, i, r) {
                                            return _((function(a) {
                                                return 1 == a.g ? (as(t, e), e.matchedStreams ? e.segmentIndex ? x(a, es(e, n), 2) : a.B(2) : a.return(!1)) : (ns(e, n, i, r), a.return(!0))
                                            }))
                                        }(s.value, t, n, A, r), 5);
                                    case 5:
                                        if (!k.h) throw new Ye(2, 4, 4037);
                                        s = o.next(), k.B(2);
                                        break;
                                    case 4:
                                        for (u = c(r), l = u.next(); !l.done; l = u.next())
                                            for (d = l.value, h = c(d), f = h.next(); !f.done; f = h.next()) p = f.value, (g = ts(p, t, S, A, r)) && e.push(g);
                                        for (m = c(r), l = m.next(); !l.done; l = m.next())
                                            for (v = l.value, y = {}, b = c(v), f = b.next(); !f.done; y = {
                                                    Xa: y.Xa
                                                }, f = b.next())
                                                if (y.Xa = f.value, w = y.Xa.type == i.da && !y.Xa.language, T = y.Xa.type == i.fd && !y.Xa.tilesLayout, !w && !T && e.some(function(e) {
                                                        return function(t) {
                                                            return t.mimeType == e.Xa.mimeType && dt(t.codecs) == dt(e.Xa.codecs)
                                                        }
                                                    }(y))) throw new Ye(2, 4, 4037);
                                        return k.return(e)
                                }
                            }))
                        }

                        function es(e, t) {
                            var n, i, r, a, o, s, u;
                            return _((function(l) {
                                if (1 == l.g) {
                                    for (n = [], i = e.matchedStreams, r = c(i), a = r.next(); !a.done; a = r.next()) o = a.value, n.push(o.createSegmentIndex()), o.trickModeVideo && !o.trickModeVideo.segmentIndex && n.push(o.trickModeVideo.createSegmentIndex());
                                    return x(l, Promise.all(n), 2)
                                }
                                if (e.segmentIndex instanceof Ya)
                                    for (s = t; s < i.length; s++)(u = i[s]).segmentIndex && e.segmentIndex.h.push(u.segmentIndex);
                                T(l)
                            }))
                        }

                        function ts(e, t, n, i, r) {
                            var a = n(e);
                            return as(t, a), a.createSegmentIndex && (a.createSegmentIndex = function() {
                                return _((function(e) {
                                    return a.segmentIndex ? e.B(0) : (a.segmentIndex = new Ya, x(e, es(a, 0), 0))
                                }))
                            }), a.matchedStreams && a.matchedStreams.length ? (ns(a, 0, i, r), a) : null
                        }

                        function ns(e, t, n, i) {
                            for (var r = e.matchedStreams, a = 0; a < r.length; a++)
                                if (a >= t) {
                                    var o = r[a];
                                    n(e, o);
                                    var s = !0;
                                    "audio" == e.type && 0 == kt(e.language, o.language) && (s = !1), s && i[a].delete(o)
                                }
                        }

                        function is(e) {
                            var t = Object.assign({}, e);
                            return t.originalId = null, t.createSegmentIndex = function() {
                                return Promise.resolve()
                            }, t.closeSegmentIndex = function() {
                                if (t.segmentIndex && (t.segmentIndex.release(), t.segmentIndex = null), t.matchedStreams)
                                    for (var e = c(t.matchedStreams), n = e.next(); !n.done; n = e.next())(n = n.value).segmentIndex && (n.segmentIndex.release(), n.segmentIndex = null)
                            }, t.segmentIndex = null, t.emsgSchemeIdUris = [], t.keyIds = new Set, t.closedCaptions = null, t.trickModeVideo = null, t
                        }

                        function rs(e, t) {
                            var n, i;
                            e.roles = Array.from(new Set(e.roles.concat(t.roles))), t.emsgSchemeIdUris && (e.emsgSchemeIdUris = Array.from(new Set(e.emsgSchemeIdUris.concat(t.emsgSchemeIdUris)))), e.keyIds = (n = e.keyIds, i = t.keyIds, new Set([].concat(d(n), d(i)))), null == e.originalId ? e.originalId = t.originalId : e.originalId += "," + (t.originalId || "");
                            var r = zo(e.drmInfos, t.drmInfos);
                            if (t.drmInfos.length && e.drmInfos.length && !r.length) throw new Ye(2, 4, 4038);
                            if (e.drmInfos = r, e.encrypted = e.encrypted || t.encrypted, t.closedCaptions) {
                                e.closedCaptions || (e.closedCaptions = new Map);
                                for (var a = (r = c(t.closedCaptions)).next(); !a.done; a = r.next()) {
                                    var o = c(a.value);
                                    a = o.next().value, o = o.next().value, e.closedCaptions.set(a, o)
                                }
                            }
                            t.trickModeVideo ? (e.trickModeVideo || (e.trickModeVideo = is(t.trickModeVideo), e.trickModeVideo.createSegmentIndex = function() {
                                return e.trickModeVideo.segmentIndex = e.segmentIndex.clone(), Promise.resolve()
                            }), rs(e.trickModeVideo, t.trickModeVideo)) : e.trickModeVideo && rs(e.trickModeVideo, t)
                        }

                        function as(e, t) {
                            for (var n = [], i = (e = c(e)).next(); !i.done; i = e.next()) {
                                for (var r = t, a = {
                                        audio: os,
                                        video: os,
                                        text: ss,
                                        image: us
                                    }[r.type], o = {
                                        audio: ls,
                                        video: cs,
                                        text: ds,
                                        image: hs
                                    }[r.type], s = null, u = (i = c(i.value)).next(); !u.done; u = i.next()) !a(r, u = u.value) || s && !o(r, s, u) || (s = u);
                                if (!(r = s)) return;
                                n.push(r)
                            }
                            t.matchedStreams = n
                        }

                        function os(e, t) {
                            function n(e) {
                                if (!bs.has(e)) {
                                    var t = dt(e);
                                    bs.set(e, t)
                                }
                                return bs.get(e)
                            }
                            return !(t.mimeType != e.mimeType || n(t.codecs) != n(e.codecs) || e.drmInfos && ! function(e, t) {
                                return !e.length || !t.length || e === t || 0 < zo(e, t).length
                            }(e.drmInfos, t.drmInfos))
                        }

                        function ss(e, t) {
                            return !!e.language && (!t.language || 0 != kt(e.language, t.language) && t.kind == e.kind)
                        }

                        function us(e) {
                            return !!e.tilesLayout
                        }

                        function ls(e, t, n) {
                            if (e.id == n.id) return !0;
                            var i = kt(e.language, t.language),
                                r = kt(e.language, n.language);
                            return r > i || !(r < i) && (e.roles.length ? (i = t.roles.filter((function(t) {
                                return e.roles.includes(t)
                            })), (r = n.roles.filter((function(t) {
                                return e.roles.includes(t)
                            }))).length > i.length || !(r.length < i.length) && n.roles.length < t.roles.length) : !(n.roles.length || !t.roles.length) || !(n.roles.length && !t.roles.length) && (!(t.primary || !n.primary) || !(t.primary && !n.primary) && ((i = ps(e.channelsCount, t.channelsCount, n.channelsCount)) == ms || i != ys && ((i = ps(e.audioSamplingRate, t.audioSamplingRate, n.audioSamplingRate)) == ms || i != ys && !(!e.bandwidth || gs(e.bandwidth, t.bandwidth, n.bandwidth) != ms)))))
                        }

                        function cs(e, t, n) {
                            if (e.id == n.id) return !0;
                            var i = ps(e.width * e.height, t.width * t.height, n.width * n.height);
                            if (i == ms) return !0;
                            if (i == ys) return !1;
                            if (e.frameRate) {
                                if ((i = ps(e.frameRate, t.frameRate, n.frameRate)) == ms) return !0;
                                if (i == ys) return !1
                            }
                            return !(!e.bandwidth || gs(e.bandwidth, t.bandwidth, n.bandwidth) != ms)
                        }

                        function ds(e, t, n) {
                            if (e.id == n.id) return !0;
                            var i = kt(e.language, t.language),
                                r = kt(e.language, n.language);
                            if (r > i) return !0;
                            if (r < i) return !1;
                            if (!t.primary && n.primary) return !0;
                            if (t.primary && !n.primary) return !1;
                            if (e.roles.length) {
                                if (i = t.roles.filter((function(t) {
                                        return e.roles.includes(t)
                                    })), (r = n.roles.filter((function(t) {
                                        return e.roles.includes(t)
                                    }))).length > i.length) return !0;
                                if (r.length < i.length) return !1
                            } else {
                                if (!n.roles.length && t.roles.length) return !0;
                                if (n.roles.length && !t.roles.length) return !1
                            }
                            return n.mimeType == e.mimeType && n.codecs == e.codecs && (t.mimeType != e.mimeType || t.codecs != e.codecs)
                        }

                        function hs(e, t, n) {
                            return e.id == n.id || ps(e.width * e.height, t.width * t.height, n.width * n.height) == ms
                        }

                        function fs(e) {
                            return {
                                id: 0,
                                originalId: "",
                                createSegmentIndex: function() {
                                    return Promise.resolve()
                                },
                                segmentIndex: new Ga([]),
                                mimeType: "",
                                codecs: "",
                                encrypted: !1,
                                drmInfos: [],
                                keyIds: new Set,
                                language: "",
                                originalLanguage: null,
                                label: null,
                                type: e,
                                primary: !1,
                                trickModeVideo: null,
                                emsgSchemeIdUris: null,
                                roles: [],
                                forced: !1,
                                channelsCount: null,
                                audioSamplingRate: null,
                                spatialAudio: !1,
                                closedCaptions: null,
                                accessibilityPurpose: null,
                                external: !1
                            }
                        }

                        function ps(e, t, n) {
                            if (t == e && e != n) return ys;
                            if (n == e && e != t) return ms;
                            if (t > e) {
                                if (n <= e || n - e < t - e) return ms;
                                if (n - e > t - e) return ys
                            } else {
                                if (n > e) return ys;
                                if (e - n < e - t) return ms;
                                if (e - n > e - t) return ys
                            }
                            return vs
                        }

                        function gs(e, t, n) {
                            return t = Math.abs(e - t), (e = Math.abs(e - n)) < t ? ms : t < e ? ys : vs
                        }(i = Qo.prototype).release = function() {
                            for (var e = c(this.g.concat(this.i, this.l, this.h)), t = e.next(); !t.done; t = e.next())(t = t.value).segmentIndex && t.segmentIndex.release();
                            this.g = [], this.i = [], this.l = [], this.h = [], this.j = []
                        }, i.Bf = function() {
                            return this.j
                        }, i.pd = function() {
                            return this.l.slice()
                        }, i.hf = function() {
                            return this.h
                        }, i.ie = function(e, t) {
                            var n, i, r, a, o, s, u, l, d, h, f, p, g, m, v, y, b, w, S, A, k, E, C, I, M, D, R, P, L = this;
                            return _((function(_) {
                                switch (_.g) {
                                    case 1:
                                        if (n = at, function(e) {
                                                for (var t = (e = c(e)).next(); !t.done; t = e.next()) {
                                                    for (var n = [], i = c((t = t.value).audioStreams), r = i.next(); !r.done; r = i.next()) {
                                                        r = r.value;
                                                        for (var a = !1, o = c(n), s = o.next(); !s.done; s = o.next()) s = s.value, r.id != s.id && r.channelsCount == s.channelsCount && r.language == s.language && r.bandwidth == s.bandwidth && r.label == s.label && r.codecs == s.codecs && r.mimeType == s.mimeType && de(r.roles, s.roles) && r.audioSamplingRate == s.audioSamplingRate && r.primary == s.primary && (a = !0);
                                                        a || n.push(r)
                                                    }
                                                    t.audioStreams = n
                                                }
                                            }(e), function(e) {
                                                for (var t = (e = c(e)).next(); !t.done; t = e.next()) {
                                                    for (var n = [], i = c((t = t.value).videoStreams), r = i.next(); !r.done; r = i.next()) {
                                                        r = r.value;
                                                        for (var a = !1, o = c(n), s = o.next(); !s.done; s = o.next()) s = s.value, r.id != s.id && r.width == s.width && r.frameRate == s.frameRate && r.codecs == s.codecs && r.mimeType == s.mimeType && r.label == s.label && de(r.roles, s.roles) && _o(r.closedCaptions, s.closedCaptions) && r.bandwidth == s.bandwidth && (a = !0);
                                                        a || n.push(r)
                                                    }
                                                    t.videoStreams = n
                                                }
                                            }(e), function(e) {
                                                for (var t = (e = c(e)).next(); !t.done; t = e.next()) {
                                                    for (var n = [], i = c((t = t.value).textStreams), r = i.next(); !r.done; r = i.next()) {
                                                        r = r.value;
                                                        for (var a = !1, o = c(n), s = o.next(); !s.done; s = o.next()) s = s.value, r.id != s.id && r.language == s.language && r.label == s.label && r.codecs == s.codecs && r.mimeType == s.mimeType && r.bandwidth == s.bandwidth && de(r.roles, s.roles) && (a = !0);
                                                        a || n.push(r)
                                                    }
                                                    t.textStreams = n
                                                }
                                            }(e), function(e) {
                                                for (var t = (e = c(e)).next(); !t.done; t = e.next()) {
                                                    for (var n = [], i = c((t = t.value).imageStreams), r = i.next(); !r.done; r = i.next()) {
                                                        r = r.value;
                                                        for (var a = !1, o = c(n), s = o.next(); !s.done; s = o.next()) s = s.value, r.id != s.id && r.width == s.width && r.codecs == s.codecs && r.mimeType == s.mimeType && (a = !0);
                                                        a || n.push(r)
                                                    }
                                                    t.imageStreams = n
                                                }
                                            }(e), !t && 1 == e.length) {
                                            i = e[0], L.g = i.audioStreams, L.i = i.videoStreams, L.l = i.textStreams, L.h = i.imageStreams, _.B(2);
                                            break
                                        }
                                        for (r = -1, a = 0; a < e.length; a++) o = e[a], L.m.has(o.id) || (L.m.add(o.id), -1 == r && (r = a));
                                        if (-1 == r) return _.return();
                                        for (s = e.map((function(e) {
                                                return e.audioStreams
                                            })), u = e.map((function(e) {
                                                return e.videoStreams
                                            })), l = e.map((function(e) {
                                                return e.textStreams
                                            })), d = e.map((function(e) {
                                                return e.imageStreams
                                            })), h = c(l), f = h.next(); !f.done; f = h.next()) f.value.push(fs(n.da));
                                        for (p = c(d), g = p.next(); !g.done; g = p.next()) g.value.push(fs(n.fd));
                                        return x(_, Zo(L.g, s, r), 3);
                                    case 3:
                                        return x(_, Zo(L.i, u, r), 4);
                                    case 4:
                                        return x(_, Zo(L.l, l, r), 5);
                                    case 5:
                                        return x(_, Zo(L.h, d, r), 2);
                                    case 2:
                                        if (m = 0, v = [], L.i.length && L.g.length)
                                            for (k = c(L.g), E = k.next(); !E.done; E = k.next())
                                                for (C = E.value, I = c(L.i), M = I.next(); !M.done; M = I.next()) D = M.value, R = zo(C.drmInfos, D.drmInfos), C.drmInfos.length && D.drmInfos.length && !R.length || (P = m++, v.push({
                                                    id: P,
                                                    language: C.language,
                                                    disabledUntilTime: 0,
                                                    primary: C.primary,
                                                    audio: C,
                                                    video: D,
                                                    bandwidth: (C.bandwidth || 0) + (D.bandwidth || 0),
                                                    drmInfos: R,
                                                    allowedByApplication: !0,
                                                    allowedByKeySystem: !0,
                                                    decodingInfos: []
                                                }));
                                        else
                                            for (y = L.i.concat(L.g), b = c(y), w = b.next(); !w.done; w = b.next()) S = w.value, A = m++, v.push({
                                                id: A,
                                                language: S.language,
                                                disabledUntilTime: 0,
                                                primary: S.primary,
                                                audio: S.type == n.xb ? S : null,
                                                video: S.type == n.Aa ? S : null,
                                                bandwidth: S.bandwidth || 0,
                                                drmInfos: S.drmInfos,
                                                allowedByApplication: !0,
                                                allowedByKeySystem: !0,
                                                decodingInfos: []
                                            });
                                        L.j = v, T(_)
                                }
                            }))
                        }, F("shaka.util.PeriodCombiner", Qo), Qo.prototype.combinePeriods = Qo.prototype.ie, Qo.prototype.getImageStreams = Qo.prototype.hf, Qo.prototype.getTextStreams = Qo.prototype.pd, Qo.prototype.getVariants = Qo.prototype.Bf;
                        var ms = 1,
                            vs = 0,
                            ys = -1,
                            bs = new Map;

                        function ws() {
                            var e = this;
                            this.h = this.g = null, this.o = [], this.i = null, this.I = 1, this.l = {}, this.L = {}, this.j = new Qo, this.C = 0, this.F = new H(5), this.D = new _t((function() {
                                ! function(e) {
                                    var t, n;
                                    _((function(i) {
                                        switch (i.g) {
                                            case 1:
                                                return t = 0, S(i, 2), x(i, xs(e), 4);
                                            case 4:
                                                t = i.h, A(i, 3);
                                                break;
                                            case 2:
                                                if (n = k(i), e.h) {
                                                    if (e.g.raiseFatalErrorOnManifestUpdateRequestFailure) return e.h.onError(n), i.return();
                                                    n.severity = 1, e.h.onError(n)
                                                }
                                            case 3:
                                                if (!e.h) return i.return();
                                                ks(e, t), T(i)
                                        }
                                    }))
                                }(e)
                            })), this.u = new ka, this.A = null, this.K = [], this.m = 1 / 0, this.s = !1
                        }

                        function xs(e) {
                            var t, n, i, r, a, o, s;
                            return _((function(u) {
                                return 1 == u.g ? (t = Ma(e.o, e.g.retryParameters), n = e.h.networkingEngine, i = Date.now(), r = n.request(0, t, {
                                    type: 4
                                }), Ea(e.u, r), x(u, r.promise, 2)) : 3 != u.g ? (a = u.h, e.h ? (a.uri && !e.o.includes(a.uri) && e.o.unshift(a.uri), x(u, function(e, t, n) {
                                    var i, r, a, o;
                                    return _((function(s) {
                                        if (1 == s.g) {
                                            if (!(i = aa(t, "MPD"))) throw new Ye(2, 4, 4001, n);
                                            return e.g.dash.disableXlinkProcessing ? s.return(Ts(e, i, n)) : (r = e.g.dash.xlinkFailGracefully, a = Fa(i, e.g.retryParameters, r, n, e.h.networkingEngine), Ea(e.u, a), x(s, a.promise, 2))
                                        }
                                        return o = s.h, s.return(Ts(e, o, n))
                                    }))
                                }(e, a.data, a.uri), 3)) : u.return(0)) : (o = Date.now(), s = (o - i) / 1e3, e.F.sample(1, s), u.return(s))
                            }))
                        }

                        function Ts(e, t, n) {
                            var i, r, a, o, s, u, l, d, h, f, p, g, m, v, y, b, w, E, C, I, M, D, R, P, L, N, j, O, U;
                            return _((function(B) {
                                switch (B.g) {
                                    case 1:
                                        if ((i = e.g.dash.manifestPreprocessor) && i(t), r = [n], 0 < (a = zr(t, "Location").map(Gr).filter(Ze)).length && (o = et(r, a), r = e.o = o), s = zr(t, "BaseURL"), u = s.map(Gr), l = et(r, u), d = 0, s && s.length && (d = Xr(s[0], "availabilityTimeOffset", ta) || 0), h = e.g.dash.ignoreMinBufferTime, f = 0, h || (f = Xr(t, "minBufferTime", Jr) || 0), e.C = Xr(t, "minimumUpdatePeriod", Jr, -1), p = Xr(t, "availabilityStartTime", Yr), g = Xr(t, "timeShiftBufferDepth", Jr), m = e.g.dash.ignoreSuggestedPresentationDelay, v = null, m || (v = Xr(t, "suggestedPresentationDelay", Jr)), y = e.g.dash.ignoreMaxSegmentDuration, b = null, y || (b = Xr(t, "maxSegmentDuration", Jr)), w = t.getAttribute("type") || "static", e.i)
                                            for (E = e.i.presentationTimeline, C = c(Object.values(e.l)), I = C.next(); !I.done; I = C.next())(M = I.value).segmentIndex && M.segmentIndex.Ka(E.mb());
                                        else D = e.g.defaultPresentationDelay || 1.5 * f, E = new So(p, null != v ? v : D, e.g.dash.autoCorrectDrift);
                                        return E.Yd("static" == w), E.T() && !isNaN(e.g.availabilityWindowOverride) && (g = e.g.availabilityWindowOverride), null == g && (g = 1 / 0), E.Xd(g), R = t.getAttribute("profiles") || "", P = {
                                            Ya: "static" != w,
                                            presentationTimeline: E,
                                            ba: null,
                                            U: null,
                                            $: null,
                                            G: null,
                                            bandwidth: 0,
                                            se: !1,
                                            Db: d,
                                            profiles: R.split(",")
                                        }, L = function(e, t, n, i) {
                                            var r = Xr(i, "mediaPresentationDuration", Jr),
                                                a = [],
                                                o = 0;
                                            i = zr(i, "Period");
                                            for (var s = 0; s < i.length; s++) {
                                                var u = i[s],
                                                    l = i[s + 1],
                                                    c = Xr(u, "start", Jr, o),
                                                    d = u.id,
                                                    h = Xr(u, "duration", Jr),
                                                    f = null;
                                                if (l) {
                                                    var p = Xr(l, "start", Jr);
                                                    null != p && (f = p - c)
                                                } else null != r && (f = r - c);
                                                if (null == f && (f = h), !(null !== e.A && null !== d && null !== c && c < e.A) || e.K.includes(d) || s + 1 == i.length) {
                                                    if (null !== c && (null === e.A || c > e.A) && (e.A = c), o = Ss(e, t, n, {
                                                            start: c,
                                                            duration: f,
                                                            node: u,
                                                            sd: null == f || !l
                                                        }), a.push(o), t.ba.id && f && (e.L[t.ba.id] = f), null == f) {
                                                        o = null;
                                                        break
                                                    }
                                                    o = c + f
                                                }
                                            }
                                            return e.K = a.map((function(e) {
                                                return e.id
                                            })), null != r ? {
                                                periods: a,
                                                duration: r,
                                                le: !1
                                            } : {
                                                periods: a,
                                                duration: o,
                                                le: !0
                                            }
                                        }(e, P, l, t), N = L.duration, j = L.periods, "static" != w && L.le || E.Va(N || 1 / 0), e.m && !e.s && e.h.isAutoLowLatencyMode() && (e.h.enableLowLatencyMode(), e.s = e.h.isLowLatencyMode()), e.s ? E.Ge(e.m) : e.m && G("Low-latency DASH live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details."), E.Gd(b || 1), x(B, e.j.ie(j, P.Ya), 2);
                                    case 2:
                                        if (e.s && (f = 0), e.s && e.m && (e.C = e.m), e.i) {
                                            e.i.variants = e.j.j, e.i.textStreams = e.j.pd(), e.i.imageStreams = e.j.h, e.h.filter(e.i), B.B(3);
                                            break
                                        }
                                        var F = E,
                                            H = e.j.j,
                                            V = e.j.pd(),
                                            z = e.j.h,
                                            q = f || 0,
                                            K = e.g.dash.sequenceMode,
                                            W = Hr(t, "ServiceDescription");
                                        if (W) {
                                            var X = Hr(W, "Latency");
                                            W = Hr(W, "PlaybackRate"), X && X.getAttribute("max") || W ? X = {
                                                maxLatency: X = X && X.getAttribute("max") ? parseInt(X.getAttribute("max"), 10) / 1e3 : null,
                                                maxPlaybackRate: W = W ? parseFloat(W.getAttribute("max")) : null
                                            } : X = null
                                        } else X = null;
                                        if (e.i = {
                                                presentationTimeline: F,
                                                variants: H,
                                                textStreams: V,
                                                imageStreams: z,
                                                offlineSessionIds: [],
                                                minBufferTime: q,
                                                sequenceMode: K,
                                                ignoreManifestTimestampsInSegmentsMode: !1,
                                                type: "DASH",
                                                serviceDescription: X
                                            }, !E.Oe()) {
                                            B.B(4);
                                            break
                                        }
                                        return O = zr(t, "UTCTiming"), x(B, function(e, t, n) {
                                            var i, r, a, o, s, u, l, d;
                                            return _((function(h) {
                                                switch (h.g) {
                                                    case 1:
                                                        i = n.map((function(e) {
                                                            return {
                                                                scheme: e.getAttribute("schemeIdUri"),
                                                                value: e.getAttribute("value")
                                                            }
                                                        })), r = e.g.dash.clockSyncUri, !i.length && r && i.push({
                                                            scheme: "urn:mpeg:dash:utc:http-head:2014",
                                                            value: r
                                                        }), a = c(i), o = a.next();
                                                    case 2:
                                                        if (o.done) {
                                                            h.B(4);
                                                            break
                                                        }
                                                        switch (s = o.value, S(h, 5), u = s.scheme, l = s.value, u) {
                                                            case "urn:mpeg:dash:utc:http-head:2014":
                                                            case "urn:mpeg:dash:utc:http-head:2012":
                                                                return h.B(7);
                                                            case "urn:mpeg:dash:utc:http-xsdate:2014":
                                                            case "urn:mpeg:dash:utc:http-iso:2014":
                                                            case "urn:mpeg:dash:utc:http-xsdate:2012":
                                                            case "urn:mpeg:dash:utc:http-iso:2012":
                                                                return h.B(8);
                                                            case "urn:mpeg:dash:utc:direct:2014":
                                                            case "urn:mpeg:dash:utc:direct:2012":
                                                                return d = Date.parse(l), h.return(isNaN(d) ? 0 : d - Date.now());
                                                            case "urn:mpeg:dash:utc:http-ntp:2014":
                                                            case "urn:mpeg:dash:utc:ntp:2014":
                                                            case "urn:mpeg:dash:utc:sntp:2014":
                                                                G("NTP UTCTiming scheme is not supported");
                                                                break;
                                                            default:
                                                                G("Unrecognized scheme in UTCTiming element", u)
                                                        }
                                                        h.B(9);
                                                        break;
                                                    case 7:
                                                        return x(h, Cs(e, t, l, "HEAD"), 10);
                                                    case 10:
                                                        return h.return(h.h);
                                                    case 8:
                                                        return x(h, Cs(e, t, l, "GET"), 11);
                                                    case 11:
                                                        return h.return(h.h);
                                                    case 9:
                                                        A(h, 3);
                                                        break;
                                                    case 5:
                                                        k(h);
                                                    case 3:
                                                        o = a.next(), h.B(2);
                                                        break;
                                                    case 4:
                                                        return G("A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!"), h.return(0)
                                                }
                                            }))
                                        }(e, l, O), 5);
                                    case 5:
                                        if (U = B.h, !e.h) return B.return();
                                        E.He(U);
                                    case 4:
                                        E.zd();
                                    case 3:
                                        e.h.makeTextStreamsForClosedCaptions(e.i), T(B)
                                }
                            }))
                        }

                        function Ss(e, t, n, i) {
                            t.ba = Es(i.node, null, n), t.U = i, t.ba.Db = t.Db, t.ba.id || (t.ba.id = "__shaka_period_" + i.start);
                            var r = zr(i.node, "EventStream");
                            n = t.presentationTimeline.mb();
                            for (var a = (r = c(r)).next(); !a.done; a = r.next()) Is(e, i.start, i.duration, a.value, n);
                            if (n = zr(i.node, "AdaptationSet").map((function(n) {
                                    return function(e, t, n) {
                                        function i(e) {
                                            switch (e) {
                                                case 1:
                                                case 6:
                                                case 13:
                                                case 14:
                                                case 15:
                                                    return "SDR";
                                                case 16:
                                                    return "PQ";
                                                case 18:
                                                    return "HLG"
                                            }
                                        }
                                        t.$ = Es(n, t.ba, null);
                                        var r, a = !1,
                                            o = zr(n, "Role"),
                                            s = o.map((function(e) {
                                                return e.getAttribute("value")
                                            })).filter(Ze),
                                            u = void 0,
                                            l = t.$.contentType == rt;
                                        l && (u = "subtitle");
                                        for (var h = (o = c(o)).next(); !h.done; h = o.next()) {
                                            var f = (h = h.value).getAttribute("schemeIdUri");
                                            if (null == f || "urn:mpeg:dash:role:2011" == f) switch (h = h.getAttribute("value"), h) {
                                                case "main":
                                                    a = !0;
                                                    break;
                                                case "caption":
                                                case "subtitle":
                                                    u = h
                                            }
                                        }
                                        f = zr(n, "EssentialProperty"), o = null, h = !1;
                                        for (var p = (f = c(f)).next(); !p.done; p = f.next()) {
                                            var g = (p = p.value).getAttribute("schemeIdUri");
                                            "http://dashif.org/guidelines/trickmode" == g ? o = p.getAttribute("value") : "urn:mpeg:mpegB:cicp:TransferCharacteristics" == g ? r = i(parseInt(p.getAttribute("value"), 10)) : "urn:mpeg:mpegB:cicp:ColourPrimaries" != g && "urn:mpeg:mpegB:cicp:MatrixCoefficients" != g && (h = !0)
                                        }
                                        for (f = c(f = zr(n, "SupplementalProperty")), p = f.next(); !p.done; p = f.next()) "urn:mpeg:mpegB:cicp:TransferCharacteristics" == (p = p.value).getAttribute("schemeIdUri") && (r = i(parseInt(p.getAttribute("value"), 10)));
                                        f = zr(n, "Accessibility");
                                        var m, v = new Map;
                                        for (f = c(f), p = f.next(); !p.done; p = f.next())
                                            if (g = p.value, p = g.getAttribute("schemeIdUri"), g = g.getAttribute("value"), "urn:scte:dash:cc:cea-608:2015" == p)
                                                if (p = 1, null != g)
                                                    for (var y = c(g = g.split(";")), b = y.next(); !b.done; b = y.next()) {
                                                        var w = b.value,
                                                            S = b = void 0;
                                                        w.includes("=") ? (b = (w = w.split("="))[0].startsWith("CC") ? w[0] : "CC" + w[0], S = w[1] || "und") : (b = "CC" + p, 2 == g.length ? p += 2 : p++, S = w), v.set(b, At(S))
                                                    } else v.set("CC1", "und");
                                                else if ("urn:scte:dash:cc:cea-708:2015" == p)
                                            if (p = 1, null != g)
                                                for (g = c(g.split(";")), b = g.next(); !b.done; b = g.next()) b = b.value, w = y = void 0, b.includes("=") ? (b = b.split("="), y = "svc" + b[0], w = b[1].split(",")[0].split(":").pop()) : (y = "svc" + p, p++, w = b), v.set(y, At(w));
                                            else v.set("svc1", "und");
                                        else "urn:mpeg:dash:role:2011" == p ? null != g && (s.push(g), "captions" == g && (u = "caption")) : "urn:tva:metadata:cs:AudioPurposeCS:2007" == p && ("1" == g ? m = "visually impaired" : "2" == g && (m = "hard of hearing"));
                                        if (h) return null;
                                        h = zr(n, "ContentProtection");
                                        var A = sa(h, e.g.dash.ignoreDrmInfo, e.g.dash.keySystemsByURI),
                                            k = At(t.$.language || "und"),
                                            E = n.getAttribute("label");
                                        if ((h = zr(n, "Label")) && h.length && (h = h[0], h.textContent && (E = h.textContent)), h = zr(n, "Representation"), n = h.map((function(n) {
                                                return (n = function(e, t, i, r, a, o, s, u, l, c, d) {
                                                    if (t.G = Es(c, t.$, null), e.m = Math.min(e.m, t.G.Db), ! function(e) {
                                                            var t = e.sc ? 1 : 0;
                                                            return t += e.bb ? 1 : 0, t += e.tc ? 1 : 0, 0 == t ? e.contentType == rt || "application" == e.contentType : (1 != t && (e.sc && (e.bb = null), e.tc = null), !0)
                                                        }(t.G)) return null;
                                                    var h = t.U.start;
                                                    t.bandwidth = Xr(c, "bandwidth", Zr) || 0;
                                                    var f = t.G.contentType,
                                                        p = f == rt || "application" == f;
                                                    f = "image" == f;
                                                    try {
                                                        var g = function(t, n, i, r) {
                                                            return function(e, t, n, i, r) {
                                                                var a, o, s, u, l, c;
                                                                return _((function(d) {
                                                                    return 1 == d.g ? (a = Pa, o = r ? 0 : 1, s = Ao(t, n, i, e.g.retryParameters), u = e.h.networkingEngine, l = u.request(a, s, {
                                                                        type: o
                                                                    }), Ea(e.u, l), x(d, l.promise, 2)) : (c = d.h, d.return(c.data))
                                                                }))
                                                            }(e, t, n, i, r)
                                                        };
                                                        if (t.G.sc) var m = ro(t, g);
                                                        else if (t.G.bb) m = co(t, e.l);
                                                        else if (t.G.tc) m = fo(t, g, e.l, !!e.i, e.g.dash.initialSegmentLimit, e.L);
                                                        else {
                                                            var v = t.G.ta,
                                                                y = t.U.duration || 0;
                                                            m = {
                                                                Eb: function() {
                                                                    return Promise.resolve(Wa(h, y, v))
                                                                }
                                                            }
                                                        }
                                                    } catch (n) {
                                                        if ((p || f) && 4002 == n.code) return null;
                                                        throw n
                                                    }
                                                    g = zr(c, "ContentProtection"), g = function(e, t, n, i) {
                                                        var r = sa(e, n, i);
                                                        if (t.ne) e = 1 == t.drmInfos.length && !t.drmInfos[0].keySystem, n = 0 == r.drmInfos.length, (0 == t.drmInfos.length || e && !n) && (t.drmInfos = r.drmInfos), t.ne = !1;
                                                        else if (0 < r.drmInfos.length && (t.drmInfos = t.drmInfos.filter((function(e) {
                                                                return r.drmInfos.some((function(t) {
                                                                    return t.keySystem == e.keySystem
                                                                }))
                                                            })), 0 == t.drmInfos.length)) throw new Ye(2, 4, 4008);
                                                        return r.ke || t.ke
                                                    }(g, i, e.g.dash.ignoreDrmInfo, e.g.dash.keySystemsByURI), g = new Set(g ? [g] : []);
                                                    var b = !1;
                                                    zr(c, "SupplementalProperty").some((function(e) {
                                                        return "tag:dolby.com,2018:dash:EC3_ExtensionType:2018" == e.getAttribute("schemeIdUri") && "JOC" == e.getAttribute("value")
                                                    })) && (b = !0);
                                                    var w, S, A = !1;
                                                    if (p && (A = u.includes("forced_subtitle") || u.includes("forced-subtitle")), f && ((c = zr(c, "EssentialProperty").find((function(e) {
                                                            return ["http://dashif.org/thumbnail_tile", "http://dashif.org/guidelines/thumbnail_tile"].includes(e.getAttribute("schemeIdUri"))
                                                        }))) && (w = c.getAttribute("value")), !w)) return null;
                                                    c = t.G.codecs, t.profiles.includes("http://dashif.org/guidelines/dash-if-uhd#hevc-hdr-pq10") && (c.includes("hvc1.2.4.L153.B0") || c.includes("hev1.2.4.L153.B0")) && (S = "PQ"), c = t.G.id ? t.ba.id + "," + t.G.id : "";
                                                    var k = c && e.l[c] ? e.l[c] : {
                                                        id: e.I++,
                                                        originalId: t.G.id,
                                                        createSegmentIndex: function() {
                                                            return Promise.resolve()
                                                        },
                                                        closeSegmentIndex: function() {
                                                            k.segmentIndex && (k.segmentIndex.release(), k.segmentIndex = null)
                                                        },
                                                        segmentIndex: null,
                                                        mimeType: t.G.mimeType,
                                                        codecs: t.G.codecs,
                                                        frameRate: t.G.frameRate,
                                                        pixelAspectRatio: t.G.pixelAspectRatio,
                                                        bandwidth: t.bandwidth,
                                                        width: t.G.width,
                                                        height: t.G.height,
                                                        kind: r,
                                                        encrypted: 0 < i.drmInfos.length,
                                                        drmInfos: i.drmInfos,
                                                        keyIds: g,
                                                        language: a,
                                                        originalLanguage: t.$.language,
                                                        label: o,
                                                        type: t.$.contentType,
                                                        primary: s,
                                                        trickModeVideo: null,
                                                        emsgSchemeIdUris: t.G.emsgSchemeIdUris,
                                                        roles: u,
                                                        forced: A,
                                                        channelsCount: t.G.Tc,
                                                        audioSamplingRate: t.G.audioSamplingRate,
                                                        spatialAudio: b,
                                                        closedCaptions: l,
                                                        hdr: S,
                                                        tilesLayout: w,
                                                        matchedStreams: [],
                                                        accessibilityPurpose: d,
                                                        external: !1
                                                    };
                                                    return k.createSegmentIndex = function() {
                                                        var e;
                                                        return _((function(t) {
                                                            if (1 == t.g) return k.segmentIndex ? t.B(0) : (e = k, x(t, m.Eb(), 3));
                                                            e.segmentIndex = t.h, T(t)
                                                        }))
                                                    }, c && t.Ya && !e.l[c] && (e.l[c] = k), k
                                                }(e, t, A, u, k, E, a, s, v, n, m)) && (n.hdr = n.hdr || r), n
                                            })).filter((function(e) {
                                                return !!e
                                            })), 0 == n.length) {
                                            if (o = "image" == t.$.contentType, e.g.dash.ignoreEmptyAdaptationSet || l || o) return null;
                                            throw new Ye(2, 4, 4003)
                                        }
                                        if (!t.$.contentType || "application" == t.$.contentType)
                                            for (t.$.contentType = Ms(n[0].mimeType, n[0].codecs), l = c(n), f = l.next(); !f.done; f = l.next()) f.value.type = t.$.contentType;
                                        for (l = c(n), f = l.next(); !f.done; f = l.next())
                                            for (f = f.value, p = c(A.drmInfos), g = p.next(); !g.done; g = p.next())(g = g.value).keyIds = g.keyIds && f.keyIds ? new Set([].concat(d(g.keyIds), d(f.keyIds))) : g.keyIds || f.keyIds;
                                        return l = h.map((function(e) {
                                            return e.getAttribute("id")
                                        })).filter(Ze), {
                                            id: t.$.id || "__fake__" + e.I++,
                                            contentType: t.$.contentType,
                                            language: k,
                                            wg: a,
                                            streams: n,
                                            drmInfos: A.drmInfos,
                                            $d: o,
                                            Xf: l
                                        }
                                    }(e, t, n)
                                })).filter(Ze), t.Ya) {
                                for (i = [], a = (r = c(n)).next(); !a.done; a = r.next())
                                    for (var o = (a = c(a.value.Xf)).next(); !o.done; o = a.next()) i.push(o.value);
                                if (i.length != new Set(i).size) throw new Ye(2, 4, 4018)
                            }
                            for (i = n.filter((function(e) {
                                    return !e.$d
                                })), r = (n = c(n = n.filter((function(e) {
                                    return e.$d
                                })))).next(); !r.done; r = n.next()) {
                                a = (r = r.value).$d.split(" ");
                                for (var s = (o = c(i)).next(); !s.done; s = o.next()) {
                                    var u = s.value;
                                    if (a.includes(u.id)) {
                                        s = {};
                                        for (var l = (u = c(u.streams)).next(); !l.done; s = {
                                                xc: s.xc
                                            }, l = u.next()) s.xc = l.value, s.xc.trickModeVideo = r.streams.find(function(e) {
                                            return function(t) {
                                                return dt(e.xc.codecs) == dt(t.codecs)
                                            }
                                        }(s))
                                    }
                                }
                            }
                            if (r = e.g.disableAudio ? [] : As(i, "audio"), o = e.g.disableVideo ? [] : As(i, "video"), a = e.g.disableText ? [] : As(i, rt), n = e.g.disableThumbnails ? [] : As(i, "image"), !o.length && !r.length) throw new Ye(2, 4, 4004);
                            for (i = [], s = (r = c(r)).next(); !s.done; s = r.next()) i.push.apply(i, d(s.value.streams));
                            for (r = [], s = (o = c(o)).next(); !s.done; s = o.next()) r.push.apply(r, d(s.value.streams));
                            for (o = [], s = (a = c(a)).next(); !s.done; s = a.next()) o.push.apply(o, d(s.value.streams));
                            for (a = [], s = (n = c(n)).next(); !s.done; s = n.next()) a.push.apply(a, d(s.value.streams));
                            return {
                                id: t.ba.id,
                                audioStreams: i,
                                videoStreams: r,
                                textStreams: o,
                                imageStreams: a
                            }
                        }

                        function As(e, t) {
                            return e.filter((function(e) {
                                return e.contentType == t
                            }))
                        }

                        function ks(e, t) {
                            0 > e.C || e.D.V(Math.max(e.C - t, V(e.F)))
                        }

                        function Es(e, t, n) {
                            t = t || {
                                contentType: "",
                                mimeType: "",
                                codecs: "",
                                emsgSchemeIdUris: [],
                                frameRate: void 0,
                                pixelAspectRatio: void 0,
                                Tc: null,
                                audioSamplingRate: null,
                                Db: 0
                            }, n = n || t.ta;
                            for (var i = zr(e, "BaseURL"), r = i.map(Gr), a = e.getAttribute("contentType") || t.contentType, o = e.getAttribute("mimeType") || t.mimeType, s = e.getAttribute("codecs") || t.codecs, u = Xr(e, "frameRate", ia) || t.frameRate, l = e.getAttribute("sar") || t.pixelAspectRatio, d = zr(e, "InbandEventStream"), h = t.emsgSchemeIdUris.slice(), f = (d = c(d)).next(); !f.done; f = d.next()) f = f.value.getAttribute("schemeIdUri"), h.includes(f) || h.push(f);
                            d = function(e) {
                                for (var t = (e = c(e)).next(); !t.done; t = e.next()) {
                                    var n = t.value;
                                    if ((t = n.getAttribute("schemeIdUri")) && (n = n.getAttribute("value"))) switch (t) {
                                        case "urn:mpeg:dash:outputChannelPositionList:2012":
                                            return n.trim().split(/ +/).length;
                                        case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":
                                        case "urn:dts:dash:audio_channel_configuration:2012":
                                            if (!(t = parseInt(n, 10))) continue;
                                            return t;
                                        case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":
                                        case "urn:dolby:dash:audio_channel_configuration:2011":
                                            if (!(t = parseInt(n, 16))) continue;
                                            for (e = 0; t;) 1 & t && ++e, t >>= 1;
                                            return e;
                                        case "urn:mpeg:mpegB:cicp:ChannelConfiguration":
                                            if (t = [0, 1, 2, 3, 4, 5, 6, 8, 2, 3, 4, 7, 8, 24, 8, 12, 10, 12, 14, 12, 14], (n = parseInt(n, 10)) && 0 < n && n < t.length) return t[n]
                                    }
                                }
                                return null
                            }(d = zr(e, "AudioChannelConfiguration")) || t.Tc, f = Xr(e, "audioSamplingRate", ea) || t.audioSamplingRate, a || (a = Ms(o, s));
                            var p = Hr(e, "SegmentBase"),
                                g = Hr(e, "SegmentTemplate"),
                                m = p && Xr(p, "availabilityTimeOffset", ta) || 0,
                                v = g && Xr(g, "availabilityTimeOffset", ta) || 0;
                            return i = i && i.length && Xr(i[0], "availabilityTimeOffset", ta) || 0, i = t.Db + i + m + v, {
                                ta: et(n, r),
                                sc: p || t.sc,
                                bb: Hr(e, "SegmentList") || t.bb,
                                tc: g || t.tc,
                                width: Xr(e, "width", ea) || t.width,
                                height: Xr(e, "height", ea) || t.height,
                                contentType: a,
                                mimeType: o,
                                codecs: s,
                                frameRate: u,
                                pixelAspectRatio: l,
                                emsgSchemeIdUris: h,
                                id: e.getAttribute("id"),
                                language: e.getAttribute("lang"),
                                Tc: d,
                                audioSamplingRate: f,
                                Db: i
                            }
                        }

                        function Cs(e, t, n, i) {
                            var r, a, o, s, u, l;
                            return _((function(c) {
                                if (1 == c.g) return r = et(t, [n]), (a = Ma(r, e.g.retryParameters)).method = i, o = e.h.networkingEngine.request(4, a), Ea(e.u, o), x(c, o.promise, 2);
                                if (s = c.h, "HEAD" == i) {
                                    if (!s.headers || !s.headers.date) return c.return(0);
                                    u = s.headers.date
                                } else u = Ii(s.data);
                                return l = Date.parse(u), isNaN(l) ? c.return(0) : c.return(l - Date.now())
                            }))
                        }

                        function Is(e, t, n, i, r) {
                            for (var a = i.getAttribute("schemeIdUri") || "", o = i.getAttribute("value") || "", s = Xr(i, "timescale", ea) || 1, u = (i = c(zr(i, "Event"))).next(); !u.done; u = i.next()) {
                                var l = Xr(u = u.value, "presentationTime", ea) || 0,
                                    d = Xr(u, "duration", ea) || 0;
                                d = (l = l / s + t) + d / s, null != n && (l = Math.min(l, t + n), d = Math.min(d, t + n)), d < r || (u = {
                                    schemeIdUri: a,
                                    value: o,
                                    startTime: l,
                                    endTime: d,
                                    id: u.getAttribute("id") || "",
                                    eventElement: u
                                }, e.h.onTimelineRegionAdded(u))
                            }
                        }

                        function Ms(e, t) {
                            return mt(t = ut(e, t)) ? rt : e.split("/")[0]
                        }

                        function Ds() {}(i = ws.prototype).configure = function(e) {
                            this.g = e
                        }, i.start = function(e, t) {
                            var n, i = this;
                            return _((function(r) {
                                if (1 == r.g) return i.s = t.isLowLatencyMode(), i.o = [e], i.h = t, x(r, xs(i), 2);
                                if (n = r.h, i.h && ks(i, n), !i.h) throw new Ye(2, 7, 7001);
                                return r.return(i.i)
                            }))
                        }, i.stop = function() {
                            for (var e = c(Object.values(this.l)), t = e.next(); !t.done; t = e.next())(t = t.value).segmentIndex && t.segmentIndex.release();
                            return this.j && this.j.release(), this.g = this.h = null, this.o = [], this.i = null, this.l = {}, this.j = null, null != this.D && (this.D.stop(), this.D = null), this.u.destroy()
                        }, i.update = function() {
                            var e, t = this;
                            return _((function(n) {
                                return 1 == n.g ? (S(n, 2), x(n, xs(t), 4)) : 2 != n.g ? A(n, 0) : (e = k(n), t.h && e ? (t.h.onError(e), void T(n)) : n.return())
                            }))
                        }, i.onExpirationUpdated = function() {}, F("shaka.dash.DashParser", ws), To.mpd = function() {
                            return new ws
                        }, xo["application/dash+xml"] = function() {
                            return new ws
                        }, xo["video/vnd.mpeg.dash.mpd"] = function() {
                            return new ws
                        }, F("shaka.dependencies", Ds), Ds.has = function(e) {
                            return _s.has(e)
                        }, Ds.add = function(e, t) {
                            if (!Rs[e]) throw Error(e + " is not supported");
                            _s.set(e, (function() {
                                return t
                            }))
                        };
                        var Rs = {
                            muxjs: "muxjs",
                            ISOBoxer: "ISOBoxer"
                        };
                        Ds.Allowed = Rs;
                        var _s = new Map([
                            ["muxjs", function() {
                                return e.muxjs
                            }],
                            ["ISOBoxer", function() {
                                return e.ISOBoxer
                            }]
                        ]);

                        function Ps(e, t, n) {
                            this.g = null, this.i = -1, this.j = e, this.h = t, this.l = n, "undefined" == typeof libDPIModule && G("Could not Find LCEVC Library dependencies on this page"), "undefined" == typeof LcevcDil ? G("Could not Find LCEVC Library on this page") : LcevcDil.SupportObject.SupportStatus || G(LcevcDil.SupportObject.SupportError), "undefined" != typeof LcevcDil && "undefined" != typeof libDPIModule && this.h instanceof HTMLCanvasElement && LcevcDil.SupportObject.SupportStatus && !this.g && LcevcDil.SupportObject.webGLSupport(this.h) && (this.h.classList.remove("shaka-hidden"), this.g = new LcevcDil.LcevcDil(this.j, this.h, this.l))
                        }

                        function Ls(e, t) {
                            var n = Ns;
                            switch (t.mimeType) {
                                case "video/webm":
                                    n = js;
                                    break;
                                case "video/mp4":
                                    n = Os
                            }
                            e.g && (e.i = t.id, e.g.setLevelSwitching(t.id, !0), e.g.setContainerFormat(n))
                        }
                        Ps.prototype.release = function() {
                            this.g && (this.g.close(), this.g = null)
                        }, F("shaka.lcevc.Dil", Ps), Ps.prototype.release = Ps.prototype.release;
                        var Ns = 0,
                            js = 1,
                            Os = 2;

                        function Us(e, t) {
                            for (this.h = e, this.g = new Set([e]), t = (e = c(t = t || [])).next(); !t.done; t = e.next()) this.add(t.value)
                        }

                        function Bs(e, t) {
                            var n;
                            if (!(n = !!e.audio != !!t.audio || !!e.video != !!t.video || e.language != t.language) && (n = e.audio && t.audio)) {
                                n = e.audio;
                                var i = t.audio;
                                n = !((!(!n.channelsCount || !i.channelsCount || 2 < n.channelsCount || 2 < i.channelsCount) || n.channelsCount == i.channelsCount) && Fs(n, i) && Hs(n.roles, i.roles))
                            }
                            return !n && (n = e.video && t.video) && (n = !(Fs(e = e.video, t = t.video) && Hs(e.roles, t.roles))), !n
                        }

                        function Fs(e, t) {
                            if (e.mimeType != t.mimeType) return !1;
                            if (e = e.codecs.split(",").map((function(e) {
                                    return ft(e)[0]
                                })), t = t.codecs.split(",").map((function(e) {
                                    return ft(e)[0]
                                })), e.length != t.length) return !1;
                            e.sort(), t.sort();
                            for (var n = 0; n < e.length; n++)
                                if (e[n] != t[n]) return !1;
                            return !0
                        }

                        function Hs(e, t) {
                            if (e = new Set(e), t = new Set(t), e.delete("main"), t.delete("main"), e.size != t.size) return !1;
                            for (var n = (e = c(e)).next(); !n.done; n = e.next())
                                if (!t.has(n.value)) return !1;
                            return !0
                        }

                        function Vs(e) {
                            this.g = e, this.h = new zs(e.language, "", e.audio && e.audio.channelsCount ? e.audio.channelsCount : 0, "", "")
                        }

                        function zs(e, t, n, i, r) {
                            this.j = e, this.l = t, this.g = n, this.h = i, this.i = void 0 === r ? "" : r
                        }

                        function qs() {
                            this.g = Ws, this.h = (new Map).set(Ws, 2).set(Gs, 1)
                        }

                        function Ks(e, t, n) {
                            e.h.set(Ws, n).set(Gs, t)
                        }
                        Us.prototype.add = function(e) {
                            return !!Bs(this.h, e) && (this.g.add(e), !0)
                        }, Us.prototype.values = function() {
                            return this.g.values()
                        }, Vs.prototype.create = function(e) {
                            var t = this,
                                n = e.filter((function(e) {
                                    return Bs(t.g, e)
                                }));
                            return n.length ? new Us(n[0], n) : this.h.create(e)
                        }, zs.prototype.create = function(t) {
                            var n = [];
                            n = function(e, t) {
                                t = At(t);
                                var n = It(t, e.map((function(e) {
                                    return Ct(e)
                                })));
                                return n ? e.filter((function(e) {
                                    return n == Ct(e)
                                })) : []
                            }(t, this.j);
                            var i = t.filter((function(e) {
                                return e.primary
                            }));
                            for (t = function(e, t) {
                                    return e.filter((function(e) {
                                        return !!e.audio && (t ? e.audio.roles.includes(t) : 0 == e.audio.roles.length)
                                    }))
                                }(n = n.length ? n : i.length ? i : t, this.l), t.length && (n = t), this.h && (t = function(t, n) {
                                    return "AUTO" == n && (n = e.matchMedia("(color-gamut: p3)").matches ? "PQ" : "SDR"), t.filter((function(e) {
                                        return !e.video || !e.video.hdr || e.video.hdr == n
                                    }))
                                }(n, this.h), t.length && (n = t)), this.g && ((t = gn(n, this.g)).length && (n = t)), this.i && (t = function(e, t) {
                                    return e.filter((function(e) {
                                        return !(!e.audio || !e.audio.label) && e.audio.label.toLowerCase() == t.toLowerCase()
                                    }))
                                }(n, this.i), t.length && (n = t)), t = new Us(n[0]), i = (n = c(n)).next(); !i.done; i = n.next()) i = i.value, Bs(t.h, i) && t.add(i);
                            return t
                        };
                        var Gs = 0,
                            Ws = 1;

                        function Xs(e, t, n, i, r) {
                            var a = Js.value(),
                                o = e.subarray(n.start, n.start + n.size),
                                s = re(o),
                                u = new Uint8Array(n.size + a.byteLength);
                            for (u.set(o, 0), (o = re(u)).setUint32(4, r), u.set(a, n.size), r = s.getUint32(4), o.setUint32(n.size + 16, r), Ys(u, 0, u.byteLength), r = new Uint8Array(e.byteLength + u.byteLength), n = jt() ? n.start : n.start + n.size, a = e.subarray(n), r.set(e.subarray(0, n)), r.set(u, n), r.set(a, n + u.byteLength), i = (e = c(i)).next(); !i.done; i = e.next()) Ys(r, (i = i.value).start, i.size + u.byteLength);
                            return u = re(r, t.start), t = Yi(t), e = u.getUint32(t), u.setUint32(t, e + 1), r
                        }

                        function Ys(e, t, n) {
                            0 != (t = (e = re(e, t)).getUint32(0)) && (1 == t ? (e.setUint32(8, n >> 32), e.setUint32(12, 4294967295 & n)) : e.setUint32(0, n))
                        }
                        var Js = new Ei((function() {
                            return new Uint8Array([0, 0, 0, 80, 115, 105, 110, 102, 0, 0, 0, 12, 102, 114, 109, 97, 0, 0, 0, 0, 0, 0, 0, 20, 115, 99, 104, 109, 0, 0, 0, 0, 99, 101, 110, 99, 0, 1, 0, 0, 0, 0, 0, 40, 115, 99, 104, 105, 0, 0, 0, 32, 116, 101, 110, 99, 0, 0, 0, 0, 0, 0, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
                        }));

                        function $s(e) {
                            return !e || 1 == e.length && 1e-6 > e.end(0) - e.start(0) ? null : e.length ? e.end(e.length - 1) : null
                        }

                        function Qs(e, t) {
                            return !(!e || !e.length || 1 == e.length && 1e-6 > e.end(0) - e.start(0) || t > e.end(e.length - 1)) && t >= e.start(0)
                        }

                        function Zs(e, t) {
                            if (!e || !e.length || 1 == e.length && 1e-6 > e.end(0) - e.start(0)) return 0;
                            for (var n = 0, i = (e = c(eu(e))).next(); !i.done; i = e.next()) {
                                var r = i.value;
                                i = r.start, (r = r.end) > t && (n += r - Math.max(i, t))
                            }
                            return n
                        }

                        function eu(e) {
                            if (!e) return [];
                            for (var t = [], n = 0; n < e.length; n++) t.push({
                                start: e.start(n),
                                end: e.end(n)
                            });
                            return t
                        }

                        function tu(e, t, n) {
                            this.l = n, this.j = e, this.s = iu(e), this.g = e.g.currentTime, this.m = Date.now() / 1e3, this.h = !1, this.o = 0, this.u = t, this.i = function() {}
                        }

                        function nu(e) {
                            this.g = e
                        }

                        function iu(e) {
                            if (e.g.paused || 0 == e.g.playbackRate || 0 == e.g.buffered.length) var t = !1;
                            else e: {
                                t = e.g.currentTime;
                                for (var n = (e = c(eu(e.g.buffered))).next(); !n.done; n = e.next())
                                    if (!(t < (n = n.value).start - .1 || t > n.end - .5)) {
                                        t = !0;
                                        break e
                                    }
                                t = !1
                            }
                            return t
                        }

                        function ru(e, t, n, i, r) {
                            var a = this;
                            this.u = r, this.g = e, this.A = t, this.s = n, this.l = new Co, this.j = !1, this.D = e.readyState, this.C = this.i = 0, this.h = i, this.o = !1, this.l.J(e, "waiting", (function() {
                                return au(a)
                            })), this.m = new _t((function() {
                                au(a)
                            })).sa(this.s.gapJumpTimerTime)
                        }

                        function au(e) {
                            if (0 != e.g.readyState) {
                                if (e.g.seeking) {
                                    if (!e.j) return
                                } else e.j = !1;
                                if (!e.g.paused || e.g.currentTime == e.i && (e.g.autoplay || e.g.currentTime != e.i)) {
                                    var t;
                                    if (e.g.readyState != e.D && (e.D = e.g.readyState), !(t = !e.h)) {
                                        var n = (t = e.h).j,
                                            i = iu(n),
                                            r = n.g.currentTime,
                                            a = Date.now() / 1e3;
                                        t.g == r && t.s == i || (t.m = a, t.g = r, t.s = i, t.h = !1), (i = (r = a - t.m) >= t.u && i && !t.h) && (t.i(t.g, r), t.h = !0, t.g = n.g.currentTime, t.o++, t.l(new xa("stalldetected"))), t = !i
                                    }
                                    t && (t = e.g.currentTime, i = function(e, t, n) {
                                        return !e || !e.length || 1 == e.length && 1e-6 > e.end(0) - e.start(0) ? null : 0 <= (e = eu(e).findIndex((function(e, i, r) {
                                            return e.start > t && (0 == i || r[i - 1].end - t <= n)
                                        }))) ? e : null
                                    }(n = e.g.buffered, t, e.s.gapDetectionThreshold), null == i || 0 == i && !e.o || ((r = n.start(i)) >= e.A.Na() || .001 > r - t || (0 != i && n.end(i - 1), e.g.currentTime = r, t == e.i && (e.i = r), e.C++, e.u(new xa("gapjumped")))))
                                }
                            }
                        }

                        function ou(e, t, n, i) {
                            var r = this;
                            this.l = e, this.C = null, this.u = t, this.h = {}, this.I = {}, this.ca = {}, this.g = null, this.O = !1, this.ia = n || function() {}, this.L = i || null, this.j = {}, this.A = new Co, this.m = {}, this.D = null, this.F = new pa, this.W = "", this.i = su(this, this.F), this.o = !1, this.K = new ko((function() {
                                return function(e) {
                                    var t, n, i, r, a, o, s;
                                    return _((function(u) {
                                        if (1 == u.g) {
                                            for (n in t = [], e.j)
                                                for (i = e.j[n], r = i[0], e.j[n] = i.slice(0, 1), r && t.push(r.p.catch(Qe)), a = c(i.slice(1)), o = a.next(); !o.done; o = a.next()) o.value.p.reject(new Ye(2, 7, 7003, void 0));
                                            for (s in e.g && t.push(e.g.destroy()), e.u && t.push(e.u.destroy()), e.m) t.push(e.m[s].destroy());
                                            return x(u, Promise.all(t), 2)
                                        }
                                        e.A && (e.A.release(), e.A = null), e.l && (e.l.removeAttribute("src"), e.l.load(), e.l = null), e.C = null, e.i = null, e.g = null, e.u = null, e.h = {}, e.m = {}, e.D = null, e.j = {}, e.L = null, T(u)
                                    }))
                                }(r)
                            })), this.s = !1, this.P = "UNKNOWN", this.Z = this.ha = !1, this.ja = new pa
                        }

                        function su(e, t) {
                            var n = new MediaSource;
                            return e.A.oa(n, "sourceopen", (function() {
                                URL.revokeObjectURL(e.W), t.resolve()
                            })), e.W = ku(n), e.l.src = e.W, n
                        }

                        function uu(e, t, n) {
                            var i = ut(n.mimeType, n.codecs);
                            if (t == rt) lu(e, i, e.s, n.external);
                            else {
                                var r = e.C.forceTransmux;
                                (!Y(i) || !e.s && pt.includes(i)) && (r = !0);
                                var a = lt(n.mimeType, n.codecs);
                                r && (r = Ie(a)) && (i = r(), e.m[t] = i, i = i.convertCodecs(t, a)), a = i + e.C.sourceBufferExtraFeatures, Eo(e.K);
                                try {
                                    var o = e.i.addSourceBuffer(a)
                                } catch (s) {
                                    throw new Ye(2, 3, 3015, s, "The mediaSource_ status was" + e.i.readyState + "expected 'open'")
                                }
                                e.s && (o.mode = Eu), e.A.J(o, "error", (function() {
                                    e.j[t][0].p.reject(new Ye(2, 3, 3014, e.l.error ? e.l.error.code : 0))
                                })), e.A.J(o, "updateend", (function() {
                                    return wu(e, t)
                                })), e.h[t] = o, e.I[t] = i, e.ca[t] = !!n.drmInfos.length
                            }
                        }

                        function lu(e, t, n, i) {
                            e.g || (e.g = new gt(e.u));
                            var r = e.g;
                            i = i || e.O, e = e.P, "application/cea-608" == t || "application/cea-708" == t ? r.i = null : (r.i = (0, bt[t])(), r.i.setSequenceMode ? r.i.setSequenceMode(n) : G('Text parsers should have a "setSequenceMode" method!'), r.i.setManifestType ? r.i.setManifestType(e) : G('Text parsers should have a "setManifestType" method!'), r.u = i)
                        }

                        function cu(e) {
                            return !e.o && (!e.i || "ended" == e.i.readyState)
                        }

                        function du(e, t) {
                            return e.o ? e = null : t == rt ? e = e.g.g : e = !(e = fu(e, t)) || 1 == e.length && 1e-6 > e.end(0) - e.start(0) ? null : 1 == e.length && 0 > e.start(0) ? 0 : e.length ? e.start(0) : null, e
                        }

                        function hu(e, t) {
                            return e.o ? null : t == rt ? e.g.h : $s(fu(e, t))
                        }

                        function fu(e, t) {
                            try {
                                return e.h[t].buffered
                            } catch (n) {
                                return null
                            }
                        }

                        function pu(e, t, n, i, r, a, o, s) {
                            var u, l, d, h, f, p, g, m, v, y;
                            return o = void 0 !== o && o, s = void 0 !== s && s, _((function(b) {
                                switch (b.g) {
                                    case 1:
                                        if (t != (u = at).da) {
                                            b.B(2);
                                            break
                                        }
                                        if (!e.s) {
                                            b.B(3);
                                            break
                                        }
                                        return x(b, e.ja, 4);
                                    case 4:
                                        l = b.h, e.g.s = l;
                                    case 3:
                                        return x(b, function(e, t, n, i) {
                                            var r, a, o, s;
                                            return _((function(u) {
                                                return 1 == u.g ? x(u, Promise.resolve(), 2) : e.i && e.j ? null == n || null == i ? (e.i.parseInit(ie(t)), u.return()) : (r = e.u ? n : e.s, a = {
                                                    periodStart: e.s,
                                                    segmentStart: n,
                                                    segmentEnd: i,
                                                    vttOffset: r
                                                }, o = e.i.parseMedia(ie(t), a), s = o.filter((function(t) {
                                                    return t.startTime >= e.l && t.startTime < e.m
                                                })), e.j.append(s), null == e.g && (e.g = Math.max(n, e.l)), e.h = Math.min(i, e.m), void T(u)) : u.return()
                                            }))
                                        }(e.g, n, i ? i.startTime : null, i ? i.endTime : null), 5);
                                    case 5:
                                        return b.return();
                                    case 2:
                                        if (d = e.h[t].timestampOffset, h = e.I[t], e.m[t] && (h = e.m[t].getOrginalMimeType()), i && (f = function(e, t, n, i, r, a) {
                                                var o = null,
                                                    s = ie(n);
                                                if (pt.includes(r))(a = Ar(s)).length && i && ((t = a.find((function(e) {
                                                    return "com.apple.streaming.transportStreamTimestamp" === e.description
                                                }))) && t.data && (o = Math.round(t.data) / 1e3), e.ia([{
                                                    cueTime: i.startTime,
                                                    data: s,
                                                    frames: a,
                                                    dts: i.startTime,
                                                    pts: i.startTime
                                                }], 0, i.endTime));
                                                else if (r.includes("/mp4") && i && 0 == i.m && i.g && i.g.timescale) {
                                                    var u = i.g.timescale;
                                                    if (!isNaN(u)) {
                                                        var l = 0,
                                                            c = !1;
                                                        (new zi).box("moof", qi).box("traf", qi).R("tfdt", (function(e) {
                                                            l = Qi(e.reader, e.version).baseMediaDecodeTime / u, c = !0, e.parser.stop()
                                                        })).parse(n, !0), c && (o = l)
                                                    }
                                                } else r.includes("/mp4") || r.includes("/webm") || !Nr(s) || (null != (t = (s = (new Pr).parse(s)).getStartTime()[t]) && (o = t), (s = s.getMetadata()).length && e.ia(s, a, i ? i.endTime : null));
                                                return o
                                            }(e, t, n, i, h, d), null != f) && (p = i.startTime - f, (.1 <= Math.abs(d - p) || o || s) && (d = p, e.Z && (xu(e, t, (function() {
                                                return yu(e, t)
                                            })), xu(e, t, (function() {
                                                return bu(e, t, d)
                                            })))), g = t == u.Aa || !(u.Aa in e.h), e.s && g && e.ja.resolve(d)), a && t == u.Aa && (e.g || lu(e, "application/cea-608", e.s, !1), e.D || (m = h.split(";", 1)[0], e.D = new se(m)), i ? (v = e.D.j(n)).length && function(e, t, n, i, r) {
                                                for (var a = n + " " + i, o = new Map, s = (t = c(t)).next(); !s.done; s = t.next()) {
                                                    var u = s.value;
                                                    s = u.stream, u = u.cue, o.has(s) || o.set(s, new Map), o.get(s).has(a) || o.get(s).set(a, []), yt(e, u, r), u.startTime >= e.l && u.startTime < e.m && (o.get(s).get(a).push(u), s == e.A && e.j.append([u]))
                                                }
                                                for (a = (r = c(o.keys())).next(); !a.done; a = r.next())
                                                    for (a = a.value, e.o.has(a) || e.o.set(a, new Map), s = (t = c(o.get(a).keys())).next(); !s.done; s = t.next()) s = s.value, u = o.get(a).get(s), e.o.get(a).set(s, u);
                                                e.g = null == e.g ? Math.max(n, e.l) : Math.min(e.g, Math.max(n, e.l)), e.h = Math.max(e.h, Math.min(i, e.m))
                                            }(e.g, v, i.startTime, i.endTime, d) : e.D.init(n)), !e.m[t]) {
                                            b.B(6);
                                            break
                                        }
                                        return x(b, e.m[t].transmux(n, r, i, e.i.duration, t), 7);
                                    case 7:
                                        n = b.h;
                                    case 6:
                                        return n = function(e, t, n, i) {
                                            var r = e.ca[i];
                                            return e.C.insertFakeEncryptionInInit && null == n && r && (Ot() || jt()) && "mp4" == e.I[i].split(";")[0].split("/")[1] && (t = function(e) {
                                                function t() {
                                                    r = !0
                                                }

                                                function n(e) {
                                                    a.push(e), qi(e)
                                                }
                                                e = ie(e);
                                                var i, r = !1,
                                                    a = [],
                                                    o = [];
                                                if ((new zi).box("moov", n).box("trak", n).box("mdia", n).box("minf", n).box("stbl", n).R("stsd", (function(e) {
                                                        i = e, a.push(e), Ki(e)
                                                    })).R("encv", t).R("enca", t).R("hev1", (function(e) {
                                                        o.push({
                                                            box: e,
                                                            pb: 1701733238
                                                        })
                                                    })).R("hvc1", (function(e) {
                                                        o.push({
                                                            box: e,
                                                            pb: 1701733238
                                                        })
                                                    })).R("avc1", (function(e) {
                                                        o.push({
                                                            box: e,
                                                            pb: 1701733238
                                                        })
                                                    })).R("avc3", (function(e) {
                                                        o.push({
                                                            box: e,
                                                            pb: 1701733238
                                                        })
                                                    })).R("ac-3", (function(e) {
                                                        o.push({
                                                            box: e,
                                                            pb: 1701733217
                                                        })
                                                    })).R("ec-3", (function(e) {
                                                        o.push({
                                                            box: e,
                                                            pb: 1701733217
                                                        })
                                                    })).R("mp4a", (function(e) {
                                                        o.push({
                                                            box: e,
                                                            pb: 1701733217
                                                        })
                                                    })).parse(e), r) return e;
                                                if (0 == o.length || !i) throw Rr(e), new Ye(2, 3, 3019);
                                                o.reverse();
                                                for (var s = c(o), u = s.next(); !u.done; u = s.next()) u = u.value, e = Xs(e, i, u.box, a, u.pb);
                                                return e
                                            }(t)), t
                                        }(e, n, i ? i.startTime : null, t), i && e.s && t != u.da && (o || s) && (y = i.startTime, xu(e, t, (function() {
                                            return yu(e, t)
                                        })), xu(e, t, (function() {
                                            return bu(e, t, y)
                                        }))), x(b, xu(e, t, (function() {
                                            var i = n;
                                            if ("video" == t && e.L) {
                                                var r = e.L;
                                                r.g && r.g.appendBuffer(i, "video", r.i)
                                            }
                                            e.h[t].appendBuffer(i)
                                        })), 8);
                                    case 8:
                                        T(b)
                                }
                            }))
                        }

                        function gu(e, t) {
                            return _((function(n) {
                                return t == at.da ? e.g ? x(n, e.g.remove(0, 1 / 0), 0) : n.return() : x(n, xu(e, t, (function() {
                                    var n = e.i.duration;
                                    0 >= n ? wu(e, t) : e.h[t].remove(0, n)
                                })), 0)
                            }))
                        }

                        function mu(t, n, i, r, a, o, s, u) {
                            var l;
                            return _((function(d) {
                                return 1 == d.g ? n == at.da ? (o || (t.g.s = i), function(e, t, n) {
                                    e.l = t, e.m = n
                                }(t.g, r, a), d.return()) : (l = [], x(d, function(t, n, i, r) {
                                    var a, o, s, u, l, d, h, f, p;
                                    return _((function(g) {
                                        return 1 == g.g ? (a = ft(ht(t.I[n]))[0], o = t.I[n].split(";")[0], u = ut(i.mimeType, i.codecs), l = t.C.forceTransmux, (!Y(u) || !t.s && pt.includes(u)) && (l = !0), d = lt(i.mimeType, i.codecs), l && (h = Ie(d)) && (s = h(), u = s.convertCodecs(n, d)), f = ft(ht(u))[0], p = u.split(";")[0], a === f && o === p ? g.return(!1) : e.SourceBuffer && SourceBuffer.prototype && SourceBuffer.prototype.changeType ? x(g, function(t, n, i, r) {
                                            return xu(t, n, (function() {
                                                n !== rt && (e.SourceBuffer && SourceBuffer.prototype && SourceBuffer.prototype.changeType && (t.m[n] && t.m[n].destroy(), r && (t.m[n] = r), t.h[n].changeType(i + t.C.sourceBufferExtraFeatures), t.I[n] = i), wu(t, n))
                                            }))
                                        }(t, n, u, s), 3) : (s && s.destroy(), x(g, function(e, t) {
                                            return Tu(e, (function() {
                                                return function(e, t) {
                                                    var n, i, r, a, o, s, u, l, d, h, f, p, g, m, v, y, b, w, T;
                                                    return _((function(S) {
                                                        switch (S.g) {
                                                            case 1:
                                                                for (r in e.o = !0, n = e.l.currentTime, function(e) {
                                                                        e.m = 0, e.j = 2
                                                                    }(S), e.A.Nb(), i = [], e.m) i.push(e.m[r].destroy());
                                                                for (a in e.j)
                                                                    for (o = e.j[a], s = o[0], e.j[a] = o.slice(0, 1), s && i.push(s.p.catch(Qe)), u = c(o.slice(1)), l = u.next(); !l.done; l = u.next()) l.value.p.reject(new Ye(2, 7, 7003, void 0));
                                                                for (d in e.h) {
                                                                    h = e.h[d];
                                                                    try {
                                                                        e.i.removeSourceBuffer(h)
                                                                    } catch (A) {}
                                                                }
                                                                return x(S, Promise.all(i), 4);
                                                            case 4:
                                                                return e.m = {}, e.j = {}, e.h = {}, f = e.i.duration, e.F = new pa, e.i = su(e, e.F), x(S, e.F, 5);
                                                            case 5:
                                                                for (e.i.duration = f, p = new pa, g = e.i.sourceBuffers, m = t.size, v = 0, e.A.J(g, "addsourcebuffer", (function() {
                                                                        ++v === m && p.resolve()
                                                                    })), y = c(t.keys()), b = y.next(); !b.done; b = y.next()) w = b.value, T = t.get(w), uu(e, w, T);
                                                                return e.l.currentTime = n, x(S, p, 2);
                                                            case 2:
                                                                E(S), e.o = !1, C(S)
                                                        }
                                                    }))
                                                }(e, t)
                                            }))
                                        }(t, r), 3))) : g.return(!0)
                                    }))
                                }(t, n, s, u), 2)) : (d.h || l.push(xu(t, n, (function() {
                                    return yu(t, n)
                                }))), o || l.push(xu(t, n, (function() {
                                    return bu(t, n, i)
                                }))), l.push(xu(t, n, (function() {
                                    t.h[n].appendWindowStart = 0, t.h[n].appendWindowEnd = a, t.h[n].appendWindowStart = r, wu(t, n)
                                }))), x(d, Promise.all(l), 0))
                            }))
                        }

                        function vu(e, t, n) {
                            return _((function(i) {
                                return t == at.da ? i.return() : (xu(e, t, (function() {
                                    return yu(e, t)
                                })), x(i, xu(e, t, (function() {
                                    return bu(e, t, n)
                                })), 0))
                            }))
                        }

                        function yu(e, t) {
                            var n = e.h[t].appendWindowStart,
                                i = e.h[t].appendWindowEnd;
                            e.h[t].abort(), e.h[t].appendWindowStart = n, e.h[t].appendWindowEnd = i, wu(e, t)
                        }

                        function bu(e, t, n) {
                            0 > n && (n += .001), e.h[t].timestampOffset = n, wu(e, t)
                        }

                        function wu(e, t) {
                            if (!e.o) {
                                var n = e.j[t][0];
                                n && (n.p.resolve(), Su(e, t))
                            }
                        }

                        function xu(e, t, n) {
                            return Eo(e.K), n = {
                                start: n,
                                p: new pa
                            }, e.j[t].push(n), 1 == e.j[t].length && Au(e, t), n.p
                        }

                        function Tu(e, t) {
                            var n, i, r, a, o;
                            return _((function(s) {
                                switch (s.g) {
                                    case 1:
                                        for (r in Eo(e.K), n = [], i = {}, e.h) i.Sb = new pa, a = {
                                            start: function(e) {
                                                return function() {
                                                    return e.Sb.resolve()
                                                }
                                            }(i),
                                            p: i.Sb
                                        }, e.j[r].push(a), n.push(i.Sb), 1 == e.j[r].length && a.start(), i = {
                                            Sb: i.Sb
                                        };
                                        return S(s, 2), x(s, Promise.all(n), 4);
                                    case 4:
                                        A(s, 3);
                                        break;
                                    case 2:
                                        throw k(s);
                                    case 3:
                                        return S(s, 5, 6), x(s, t(), 6);
                                    case 6:
                                        for (o in E(s), e.h) Su(e, o);
                                        C(s);
                                        break;
                                    case 5:
                                        throw new Ye(2, 3, 3015, k(s), e.l.error || "No error in the media element")
                                }
                            }))
                        }

                        function Su(e, t) {
                            e.j[t].shift(), Au(e, t)
                        }

                        function Au(e, t) {
                            var n = e.j[t][0];
                            if (n) try {
                                n.start()
                            } catch (i) {
                                "QuotaExceededError" == i.name ? n.p.reject(new Ye(2, 3, 3017, t)) : n.p.reject(new Ye(2, 3, 3015, i, e.l.error || "No error in the media element")), Su(e, t)
                            }
                        }
                        tu.prototype.release = function() {
                            this.l = this.j = null, this.i = function() {}
                        }, ru.prototype.release = function() {
                            this.l && (this.l.release(), this.l = null), null != this.m && (this.m.stop(), this.m = null), this.h && (this.h.release(), this.h = null), this.g = this.A = this.u = null
                        }, ru.prototype.Kd = function() {
                            this.o = !0, au(this)
                        }, (i = ou.prototype).destroy = function() {
                            return this.K.destroy()
                        }, i.init = function(e, t, n, i) {
                            t = void 0 !== t && t, n = void 0 === n ? "UNKNOWN" : n, i = void 0 !== i && i;
                            var r, a, o, s, u = this;
                            return _((function(l) {
                                if (1 == l.g) return x(l, u.F, 2);
                                for (u.s = t, u.P = n, u.ha = i, u.Z = !u.s && "HLS" == u.P && !u.ha, r = c(e.keys()), a = r.next(); !a.done; a = r.next()) o = a.value, s = e.get(o), uu(u, o, s), u.j[o] = [];
                                T(l)
                            }))
                        }, i.configure = function(e) {
                            this.C = e
                        }, i.Ma = function() {
                            var e = {
                                total: this.o ? [] : eu(this.l.buffered),
                                audio: this.o ? [] : eu(fu(this, "audio")),
                                video: this.o ? [] : eu(fu(this, "video")),
                                text: []
                            };
                            if (this.g) {
                                var t = this.g.g,
                                    n = this.g.h;
                                null != t && null != n && e.text.push({
                                    start: t,
                                    end: n
                                })
                            }
                            return e
                        }, i.remove = function(e, t, n) {
                            var i = this;
                            return _((function(r) {
                                return e == at.da ? x(r, i.g.remove(t, n), 0) : x(r, xu(i, e, (function() {
                                    n <= t ? wu(i, e) : i.h[e].remove(t, n)
                                })), 0)
                            }))
                        }, i.flush = function(e) {
                            var t = this;
                            return _((function(n) {
                                return e == at.da ? n.return() : x(n, xu(t, e, (function() {
                                    t.l.currentTime -= .001, wu(t, e)
                                })), 0)
                            }))
                        }, i.endOfStream = function(e) {
                            var t = this;
                            return _((function(n) {
                                return x(n, Tu(t, (function() {
                                    cu(t) || "closed" === t.i.readyState || (e ? t.i.endOfStream(e) : t.i.endOfStream())
                                })), 0)
                            }))
                        }, i.Va = function(e) {
                            var t = this;
                            return _((function(n) {
                                return x(n, Tu(t, (function() {
                                    if (e < t.i.duration)
                                        for (var n in t.h) {
                                            var i = {
                                                start: function() {},
                                                p: new pa
                                            };
                                            t.j[n].unshift(i)
                                        }
                                    t.i.duration = e
                                })), 0)
                            }))
                        }, i.getDuration = function() {
                            return this.i.duration
                        };
                        var ku = e.URL.createObjectURL,
                            Eu = "sequence";

                        function Cu(e) {
                            var t = this;
                            this.g = e, this.j = !1, this.i = this.g.Ic(), this.h = new _t((function() {
                                t.g.we(.25 * t.i)
                            }))
                        }

                        function Iu(e) {
                            e.h.stop();
                            var t = e.j ? 0 : e.i;
                            if (0 <= t) try {
                                return void(e.g.Ic() != t && e.g.Wd(t))
                            } catch (n) {}
                            e.h.sa(.25), 0 != e.g.Ic() && e.g.Wd(0)
                        }

                        function Mu(e, t, n, i) {
                            t == HTMLMediaElement.HAVE_NOTHING || e.readyState >= t ? i() : (t = Du.value().get(t), n.oa(e, t, i))
                        }
                        Cu.prototype.release = function() {
                            this.h && (this.h.stop(), this.h = null), this.g = null
                        }, Cu.prototype.set = function(e) {
                            this.i = e, Iu(this)
                        }, Cu.prototype.Ec = function() {
                            return this.g.Ec()
                        };
                        var Du = new Ei((function() {
                            return new Map([
                                [HTMLMediaElement.HAVE_METADATA, "loadedmetadata"],
                                [HTMLMediaElement.HAVE_CURRENT_DATA, "loadeddata"],
                                [HTMLMediaElement.HAVE_FUTURE_DATA, "canplay"],
                                [HTMLMediaElement.HAVE_ENOUGH_DATA, "canplaythrough"]
                            ])
                        }));

                        function Ru(e, t, n, i) {
                            var r = this;
                            this.g = e, this.m = t, this.s = n, this.l = null, this.j = function() {
                                return null == r.l && (r.l = i()), r.l
                            }, this.o = !1, this.h = new Co, this.i = new ju(e), Mu(this.g, HTMLMediaElement.HAVE_METADATA, this.h, (function() {
                                Lu(r, r.j())
                            }))
                        }

                        function _u(e) {
                            return e.o ? e.g.currentTime : e.j()
                        }

                        function Pu(e, t) {
                            0 < e.g.readyState ? Ou(e.i, t) : Mu(e.g, HTMLMediaElement.HAVE_METADATA, e.h, (function() {
                                Lu(e, e.j())
                            }))
                        }

                        function Lu(e, t) {
                            .001 > Math.abs(e.g.currentTime - t) ? Nu(e) : (e.h.oa(e.g, "seeking", (function() {
                                Nu(e)
                            })), Ou(e.i, e.g.currentTime && 0 != e.g.currentTime ? e.g.currentTime : t))
                        }

                        function Nu(e) {
                            e.o = !0, e.h.J(e.g, "seeking", (function() {
                                return e.m()
                            })), e.s(e.g.currentTime)
                        }

                        function ju(e) {
                            var t = this;
                            this.h = e, this.m = 10, this.l = this.j = this.i = 0, this.g = new _t((function() {
                                0 >= t.i || t.h.currentTime != t.j ? t.g.stop() : (t.h.currentTime = t.l, t.i--)
                            }))
                        }

                        function Ou(e, t) {
                            e.j = e.h.currentTime, e.l = t, e.i = e.m, e.h.currentTime = t, e.g.sa(.1)
                        }

                        function Uu(e) {
                            this.g = e, this.j = !1, this.h = null, this.i = new Co
                        }

                        function Bu(e, t, n, i, r, a) {
                            var o = this;
                            this.i = e, this.g = t.presentationTimeline, this.A = t.minBufferTime || 0, this.l = n, this.u = r, this.s = null, this.o = function(e, t, n) {
                                if (!t.stallEnabled) return null;
                                var i = t.stallSkip;
                                return t = new tu(new nu(e), t.stallThreshold, n),
                                    function(e, t) {
                                        e.i = t
                                    }(t, (function() {
                                        i ? e.currentTime += i : (e.pause(), e.play())
                                    })), t
                            }(e, n, a), this.j = new ru(e, t.presentationTimeline, n, this.o, a), this.h = new Ru(e, (function() {
                                var e = o.j;
                                e.j = !0, e.o = !1;
                                var t = _u(o.h);
                                return e = Hu(o, t), .001 < Math.abs(e - t) && (t = Date.now() / 1e3, !o.s || o.s < t - 1) ? (o.s = t, Pu(o.h, e), e = void 0) : (o.u(), e = void 0), e
                            }), (function(e) {
                                var t = o.j;
                                t.g.seeking && !t.j && (t.j = !0, t.i = e)
                            }), (function() {
                                var e = i;
                                return null == e ? e = 1 / 0 > o.g.getDuration() ? o.g.Fb() : o.g.Na() : 0 > e && (e = o.g.Na() + e), Fu(o, Vu(o, e))
                            })), this.m = new _t((function() {
                                if (0 != o.i.readyState && !o.i.paused) {
                                    var e = _u(o.h),
                                        t = o.g.Fb(),
                                        n = o.g.Na();
                                    3 > n - t && (t = n - 3), e < t && (e = Hu(o, e), o.i.currentTime = e)
                                }
                            }))
                        }

                        function Fu(e, t) {
                            var n = e.g.getDuration();
                            return t >= n ? n - e.l.durationBackoff : t
                        }

                        function Hu(e, t) {
                            var n = Math.max(e.A, e.l.rebufferingGoal),
                                i = e.l.safeSeekOffset,
                                r = e.g.Fb(),
                                a = e.g.Na(),
                                o = e.g.getDuration();
                            3 > a - r && (r = a - 3);
                            var s = e.g.hc(n),
                                u = e.g.hc(i);
                            return n = e.g.hc(n + i), t >= o ? Fu(e, t) : t > a ? a : t < r ? Qs(e.i.buffered, u) ? u : n : t >= s || Qs(e.i.buffered, t) ? t : n
                        }

                        function Vu(e, t) {
                            var n = e.g.Fb();
                            return t < n ? n : t > (e = e.g.Na()) ? e : t
                        }

                        function zu(e) {
                            var t = this;
                            this.h = e, this.g = new Set, this.i = new _t((function() {
                                qu(t, !1)
                            })).sa(.25)
                        }

                        function qu(e, t) {
                            for (var n = c(e.g), i = n.next(); !i.done; i = n.next()) i.value.j(e.h.currentTime, t)
                        }

                        function Ku(e) {
                            Ta.call(this), this.g = new Map, this.h = e
                        }

                        function Gu(e) {
                            Ta.call(this);
                            var t = this;
                            this.g = new Set, this.i = e, this.h = new _t((function() {
                                for (var e = t.i(), n = c(t.g), i = n.next(); !i.done; i = n.next())(i = i.value).endTime < e.start && (t.g.delete(i), i = new xa("regionremove", new Map([
                                    ["region", i]
                                ])), t.dispatchEvent(i))
                            })).sa(2)
                        }

                        function Wu(e, t) {
                            Ta.call(this);
                            var n = this;
                            this.i = e, this.l = t, this.g = new Map, this.m = [{
                                vb: null,
                                ub: Ju,
                                ob: function(e, t) {
                                    return Xu(n, "enter", e, t)
                                }
                            }, {
                                vb: Yu,
                                ub: Ju,
                                ob: function(e, t) {
                                    return Xu(n, "enter", e, t)
                                }
                            }, {
                                vb: $u,
                                ub: Ju,
                                ob: function(e, t) {
                                    return Xu(n, "enter", e, t)
                                }
                            }, {
                                vb: Ju,
                                ub: Yu,
                                ob: function(e, t) {
                                    return Xu(n, "exit", e, t)
                                }
                            }, {
                                vb: Ju,
                                ub: $u,
                                ob: function(e, t) {
                                    return Xu(n, "exit", e, t)
                                }
                            }, {
                                vb: Yu,
                                ub: $u,
                                ob: function(e, t) {
                                    return Xu(n, "skip", e, t)
                                }
                            }, {
                                vb: $u,
                                ub: Yu,
                                ob: function(e, t) {
                                    return Xu(n, "skip", e, t)
                                }
                            }], this.h = new Co, this.h.J(this.i, "regionremove", (function(e) {
                                n.g.delete(e.region)
                            }))
                        }

                        function Xu(e, t, n, i) {
                            t = new xa(t, new Map([
                                ["region", n],
                                ["seeking", i]
                            ])), e.dispatchEvent(t)
                        }
                        Ru.prototype.release = function() {
                            this.h && (this.h.release(), this.h = null), null != this.i && (this.i.release(), this.i = null), this.m = function() {}, this.g = null
                        }, ju.prototype.release = function() {
                            this.g && (this.g.stop(), this.g = null), this.h = null
                        }, (i = Uu.prototype).gd = function() {
                            var e = this;
                            Mu(this.g, HTMLMediaElement.HAVE_CURRENT_DATA, this.i, (function() {
                                null == e.h || 0 == e.h ? e.j = !0 : (e.i.oa(e.g, "seeking", (function() {
                                    e.j = !0
                                })), e.g.currentTime = Math.max(0, e.g.currentTime + e.h))
                            }))
                        }, i.release = function() {
                            this.i && (this.i.release(), this.i = null), this.g = null
                        }, i.hd = function(e) {
                            this.h = this.j ? this.h : e
                        }, i.yc = function() {
                            return (this.j ? this.g.currentTime : this.h) || 0
                        }, i.de = function() {
                            return 0
                        }, i.ce = function() {
                            return 0
                        }, i.xe = function() {}, (i = Bu.prototype).gd = function() {
                            this.m.sa(.25)
                        }, i.release = function() {
                            this.h && (this.h.release(), this.h = null), this.j && (this.j.release(), this.j = null), this.m && (this.m.stop(), this.m = null), this.i = this.h = this.g = this.l = null, this.u = function() {}
                        }, i.hd = function(e) {
                            Pu(this.h, e)
                        }, i.yc = function() {
                            var e = _u(this.h);
                            return 0 < this.i.readyState && !this.i.paused ? Vu(this, e) : e
                        }, i.de = function() {
                            return this.o ? this.o.o : 0
                        }, i.ce = function() {
                            return this.j.C
                        }, i.xe = function() {
                            this.j.Kd()
                        }, zu.prototype.release = function() {
                            this.i.stop();
                            for (var e = c(this.g), t = e.next(); !t.done; t = e.next()) t.value.release();
                            this.g.clear()
                        }, v(Ku, Ta), Ku.prototype.release = function() {
                            this.g.clear(), Ta.prototype.release.call(this)
                        }, Ku.prototype.j = function(e) {
                            for (var t = c(this.g.values()), n = t.next(); !n.done; n = t.next()) {
                                e: {
                                    for (var i = (n = n.value).oc, r = i.length - 1; 0 <= r; r--) {
                                        var a = i[r];
                                        if (a.position <= e) {
                                            i = a.Cd;
                                            break e
                                        }
                                    }
                                    i = null
                                }
                                if ((r = i) && (r = !((r = n.je) === i || r && i && r.bandwidth == i.bandwidth && r.audioSamplingRate == i.audioSamplingRate && r.codecs == i.codecs && r.contentType == i.contentType && r.frameRate == i.frameRate && r.height == i.height && r.mimeType == i.mimeType && r.channelsCount == i.channelsCount && r.pixelAspectRatio == i.pixelAspectRatio && r.width == i.width)), r) e: {
                                    if (r = e, a = i.contentType, (a = this.h()[a]) && 0 < a.length) {
                                        var o = a[a.length - 1].end;
                                        if (r >= a[0].start && r < o) {
                                            r = !0;
                                            break e
                                        }
                                    }
                                    r = !1
                                }
                                r && (n.je = i, JSON.stringify(i), n = new xa("qualitychange", new Map([
                                    ["quality", i],
                                    ["position", e]
                                ])), this.dispatchEvent(n))
                            }
                        }, v(Gu, Ta), Gu.prototype.release = function() {
                            this.g.clear(), this.h.stop(), Ta.prototype.release.call(this)
                        }, v(Wu, Ta), Wu.prototype.release = function() {
                            this.i = null, this.g.clear(), this.h.release(), this.h = null, Ta.prototype.release.call(this)
                        }, Wu.prototype.j = function(e, t) {
                            if (!this.l || 0 != e) {
                                this.l = !1;
                                for (var n = c(this.i.g), i = n.next(); !i.done; i = n.next()) {
                                    i = i.value;
                                    var r = this.g.get(i),
                                        a = e < i.startTime ? Yu : e > i.endTime ? $u : Ju;
                                    this.g.set(i, a);
                                    for (var o = c(this.m), s = o.next(); !s.done; s = o.next())(s = s.value).vb == r && s.ub == a && s.ob(i, t)
                                }
                            }
                        };
                        var Yu = 1,
                            Ju = 2,
                            $u = 3;

                        function Qu(e, t, n) {
                            this.j = e, this.h = t, this.i = 0, this.l = n, this.g = new Map
                        }

                        function Zu(e) {
                            if (0 !== e.g.size) {
                                for (var t = c(e.g.keys()), n = t.next(); !n.done; n = t.next())(n = n.value) && el(e, n);
                                e.i = 0
                            }
                        }

                        function el(e, t) {
                            var n = e.g.get(t);
                            e.g.delete(t), n && n.abort()
                        }

                        function tl(e) {
                            this.i = e, this.g = this.h = null
                        }

                        function nl(e, t, n) {
                            e.g = e.i(t, n, (function(t) {
                                return _((function(n) {
                                    return e.h ? x(n, e.h(t), 0) : n.B(0)
                                }))
                            }))
                        }

                        function il(e, t) {
                            var n = this;
                            this.g = t, this.m = e, this.i = null, this.u = 1, this.o = this.j = null, this.D = 0, this.C = !1, this.h = new Map, this.A = !1, this.F = null, this.s = !1, this.l = new ko((function() {
                                return function(e) {
                                    var t, n, i, r;
                                    return _((function(a) {
                                        if (1 == a.g) {
                                            for (t = [], n = c(e.h.values()), i = n.next(); !i.done; i = n.next()) yl(r = i.value), t.push(bl(r));
                                            return x(a, Promise.all(t), 2)
                                        }
                                        e.h.clear(), e.g = null, e.m = null, e.i = null, T(a)
                                    }))
                                }(n)
                            }))
                        }

                        function rl(e, t) {
                            var n = e.h.get("video");
                            if (n) {
                                var i = n.stream;
                                i && (t ? (t = i.trickModeVideo) && !n.rb && (sl(e, t, !1, 0, !1), n.rb = i) : (i = n.rb) && (n.rb = null, sl(e, i, !0, 0, !1)))
                            }
                        }

                        function al(e, t, n, i, r, a) {
                            n = void 0 !== n && n, i = void 0 === i ? 0 : i, r = void 0 !== r && r, a = void 0 !== a && a, e.j = t, e.A && (t.video && sl(e, t.video, n, i, r, a), t.audio && sl(e, t.audio, n, i, r, a))
                        }

                        function ol(e, t) {
                            _((function(n) {
                                if (1 == n.g) return e.o = t, e.A ? t.segmentIndex ? n.B(2) : x(n, t.createSegmentIndex(), 2) : n.return();
                                sl(e, t, !0, 0, !1), T(n)
                            }))
                        }

                        function sl(e, t, n, i, r, a) {
                            var o = e.h.get(t.type);
                            o || t.type != rt ? o && (o.rb && (t.trickModeVideo ? (o.rb = t, t = t.trickModeVideo) : o.rb = null), o.stream != t || r) && (o.ra && function(e, t) {
                                t && t !== e.h && (Zu(e), e.h = t)
                            }(o.ra, t), t.type == rt && (r = ut(t.mimeType, t.codecs), lu(e.g.N, r, e.m.sequenceMode, t.external)), o.stream.closeSegmentIndex && o.stream.closeSegmentIndex(), o.stream = t, o.X = null, o.ee = !!a, n && (o.$b ? o.Zc = !0 : o.pa ? (o.eb = !0, o.Ac = i, o.Zc = !0) : (yl(o), ml(e, o, !0, i).catch((function(t) {
                                e.g && e.g.onError(t)
                            })))), function(e, t) {
                                var n, i;
                                return _((function(r) {
                                    if (1 == r.g) return t.qa ? (n = t.stream, i = t.qa, n.segmentIndex ? r.B(2) : x(r, n.createSegmentIndex(), 2)) : r.return();
                                    if (t.qa != i || t.stream != n) return r.return();
                                    var a = e.g.Hc(),
                                        o = hu(e.g.N, t.type),
                                        s = t.stream.segmentIndex.find(t.na ? t.na.endTime : a),
                                        u = null == s ? null : t.stream.segmentIndex.get(s);
                                    s = u && u.i ? u.i - u.j : null, u && !s && (s = (u.endTime - u.getStartTime()) * (t.stream.bandwidth || 0) / 8), s ? ((u = u.g) && (s += (u.i ? u.i - u.j : null) || 0), a = 8 * s / (u = e.g.getBandwidthEstimate()) < (o || 0) - a - Math.max(e.m.minBufferTime || 0, e.i.rebufferingGoal) || t.qa.h.g > s) : a = !1, a && t.qa.abort(), T(r)
                                }))
                            }(e, o).catch((function(t) {
                                e.g && e.g.onError(t)
                            }))) : function(e, t) {
                                var n, i, r, a, o;
                                _((function(s) {
                                    switch (s.g) {
                                        case 1:
                                            return n = at, e.D++, i = e.D, S(s, 2), x(s, gu(e.g.N, n.da), 4);
                                        case 4:
                                            A(s, 3);
                                            break;
                                        case 2:
                                            r = k(s), e.g && e.g.onError(r);
                                        case 3:
                                            a = ut(t.mimeType, t.codecs), lu(e.g.N, a, e.m.sequenceMode, t.external), (e.g.N.u.isTextVisible() || e.i.alwaysStreamText) && e.D == i && (o = ll(e, t), e.h.set(n.da, o), vl(e, o, 0)), T(s)
                                    }
                                }))
                            }(e, t)
                        }

                        function ul(e, t) {
                            t.$b || t.eb || (t.pa ? (t.eb = !0, t.Ac = 0) : null == du(e.g.N, t.type) ? null == t.Ha && vl(e, t, 0) : (yl(t), ml(e, t, !1, 0).catch((function(t) {
                                e.g && e.g.onError(t)
                            }))))
                        }

                        function ll(e, t) {
                            return {
                                stream: t,
                                type: t.type,
                                X: null,
                                ra: cl(e, t),
                                na: null,
                                Ib: null,
                                yd: null,
                                wd: null,
                                vd: null,
                                rb: null,
                                endOfStream: !1,
                                pa: !1,
                                Ha: null,
                                eb: !1,
                                Ac: 0,
                                Zc: !1,
                                $b: !1,
                                rc: !0,
                                Fd: !1,
                                Qd: !1,
                                kc: !1,
                                qa: null
                            }
                        }

                        function cl(e, t) {
                            return "video" !== t.type && "audio" !== t.type ? null : 0 < e.i.segmentPrefetchLimit ? new Qu(e.i.segmentPrefetchLimit, t, (function(t, n, i) {
                                return gl(e, t, n, i)
                            })) : null
                        }

                        function dl(t, n) {
                            var i, r, a, o, s;
                            return _((function(u) {
                                switch (u.g) {
                                    case 1:
                                        if (Eo(t.l), n.pa || null == n.Ha || n.$b) return u.return();
                                        if (n.Ha = null, !n.eb) {
                                            u.B(2);
                                            break
                                        }
                                        return x(u, ml(t, n, n.Zc, n.Ac), 3);
                                    case 3:
                                        return u.return();
                                    case 2:
                                        if (n.stream.segmentIndex) {
                                            u.B(4);
                                            break
                                        }
                                        return i = n.stream, x(u, n.stream.createSegmentIndex(), 5);
                                    case 5:
                                        if (i != n.stream) return i.closeSegmentIndex && i.closeSegmentIndex(), n.pa || n.Ha || vl(t, n, 0), u.return();
                                    case 4:
                                        S(u, 6), r = function(t, n) {
                                            if (fl(n)) return function(e, t) {
                                                var n = hu(e, "video") || 0;
                                                vt(e.g, t, n)
                                            }(t.g.N, n.stream.originalId || ""), null;
                                            n.type == rt && function(e) {
                                                e.g && vt(e.g, "", 0)
                                            }(t.g.N);
                                            var i = t.g.Hc(),
                                                r = n.na ? n.na.endTime : i,
                                                a = function(e, t, n) {
                                                    return e.o ? 0 : t == rt ? null == (e = e.g).h || e.h < n ? 0 : e.h - Math.max(n, e.g) : Zs(e = fu(e, t), n)
                                                }(t.g.N, n.type, i),
                                                o = Math.max(t.m.minBufferTime || 0, t.i.rebufferingGoal, t.i.bufferingGoal) * t.u,
                                                s = t.m.presentationTimeline.getDuration() - r,
                                                u = hu(t.g.N, n.type);
                                            if (1e-6 > s && u) return n.endOfStream = !0, "video" == n.type && (t = t.h.get(rt)) && fl(t) && (t.endOfStream = !0), null;
                                            if (n.endOfStream = !1, a >= o) return t.i.updateIntervalSeconds / 2;
                                            if (a = function(e, t, n, i) {
                                                    if (t.X) return t.X.current();
                                                    if (t.na || i) return n = t.na ? t.na.endTime : i, t.Fd = !0, t.X = t.stream.segmentIndex.kb(n), t.X && t.X.next().value;
                                                    e = e.i.inaccurateManifestTolerance, i = Math.max(n - e, 0);
                                                    var r = null;
                                                    return e && (t.X = t.stream.segmentIndex.kb(i), r = t.X && t.X.next().value), r || (t.X = t.stream.segmentIndex.kb(n), r = t.X && t.X.next().value), r
                                                }(t, n, i, u), !a) return t.i.updateIntervalSeconds;
                                            for (o = 1 / 0, s = c(s = Array.from(t.h.values())), u = s.next(); !u.done; u = s.next()) fl(u = u.value) || u.X && !u.X.current() || (o = Math.min(o, u.na ? u.na.endTime : i));
                                            return r >= o + t.m.presentationTimeline.g ? t.i.updateIntervalSeconds : (n.ra && n.X && function(e, t) {
                                                if (e.h.segmentIndex) {
                                                    var n = e.h.segmentIndex.kb(Math.max(t.startTime, e.i));
                                                    if (n)
                                                        for (; e.g.size < e.j && null != t;) {
                                                            var i = !0;
                                                            t.u && null != t.i && (i = !1), 2 == t.jc() && (i = !1), i && !e.g.has(t) && (nl(i = new tl(e.l), t, e.h), e.g.set(t, i)), e.i = t.startTime, t = n.next().value
                                                        }
                                                }
                                            }(n.ra, a), function(t, n, i, r) {
                                                var a, o, s, u, l, c, d, h, f, p, g, m, v, y;
                                                return _((function(b) {
                                                    switch (b.g) {
                                                        case 1:
                                                            if (a = at, o = n.stream, s = n.X, n.pa = !0, S(b, 2), 2 == r.jc()) throw new Ye(1, 1, 1011);
                                                            return x(b, function(e, t, n) {
                                                                var i, r, a, o, s, u, l, c, d, h, f, p, g;
                                                                return _((function(m) {
                                                                    return i = at, r = [], a = Math.max(0, n.L - .1), o = n.K + .01, s = ft(t.stream.codecs)[0], u = t.stream.mimeType.split(";")[0], (l = n.m) == t.yd && a == t.wd && o == t.vd && s == t.Pc && u == t.xd || ((t.Pc && s != t.Pc || t.xd && u != t.xd) && (t.type === i.Aa ? (c = e.h.get(i.xb)) && (c.Ib = null, bl(c)) : t.type === i.xb && (d = e.h.get(i.Aa)) && (d.Ib = null, bl(d))), h = function() {
                                                                        var n, r, c;
                                                                        return _((function(d) {
                                                                            if (1 == d.g) return n = new Map, e.j.audio && n.set(i.xb, e.j.audio), e.j.video && n.set(i.Aa, e.j.video), S(d, 2), t.wd = a, t.vd = o, t.Pc = s, t.xd = u, t.yd = l, r = e.m.sequenceMode || "HLS" == e.m.type, x(d, mu(e.g.N, t.type, l, a, o, r, t.stream, n), 4);
                                                                            if (2 != d.g) return A(d, 0);
                                                                            throw c = k(d), t.wd = null, t.vd = null, t.Pc = null, t.yd = null, c
                                                                        }))
                                                                    }, r.push(h())), ! function(e, t) {
                                                                        return e && t ? e.ic() == t.ic() && e.ec() == t.ec() && he(e.Oa(), t.Oa()) && ee(e.g, t.g) : e == t
                                                                    }(n.g, t.Ib) && (t.Ib = n.g) && (f = pl(e, t, n.g, void 0, !0), p = function() {
                                                                        var r, a, o, s, u;
                                                                        return _((function(l) {
                                                                            switch (l.g) {
                                                                                case 1:
                                                                                    return S(l, 2), x(l, f, 4);
                                                                                case 4:
                                                                                    return r = l.h, Eo(e.l), a = null, o = new Map, (new zi).box("moov", qi).box("trak", qi).box("mdia", qi).R("mdhd", (function(e) {
                                                                                        a = Zi(e.reader, e.version).timescale
                                                                                    })).box("hdlr", (function(e) {
                                                                                        (e = e.reader).skip(8), e = e.$a(4);
                                                                                        var t = String.fromCharCode(e[0]);
                                                                                        switch (t += String.fromCharCode(e[1]), t += String.fromCharCode(e[2]), t += String.fromCharCode(e[3])) {
                                                                                            case "soun":
                                                                                                o.set(i.xb, a);
                                                                                                break;
                                                                                            case "vide":
                                                                                                o.set(i.Aa, a)
                                                                                        }
                                                                                        a = null
                                                                                    })).parse(r), o.has(t.type) ? n.g.timescale = o.get(t.type) : null != a && (n.g.timescale = a), s = t.stream.closedCaptions && 0 < t.stream.closedCaptions.size, x(l, e.g.fe(t.type, r), 5);
                                                                                case 5:
                                                                                    return x(l, pu(e.g.N, t.type, r, null, t.stream, s), 6);
                                                                                case 6:
                                                                                    A(l, 0);
                                                                                    break;
                                                                                case 2:
                                                                                    throw u = k(l), t.Ib = null, u
                                                                            }
                                                                        }))
                                                                    }, e.g.Qf(n.startTime, n.g), r.push(p())), g = t.na ? t.na.o : null, e.m.sequenceMode ? (n.o != g || t.Fd) && (t.Fd = !1, r.push(vu(e.g.N, t.type, n.startTime))) : e.m.ignoreManifestTimestampsInSegmentsMode && n.o != g && r.push(vu(e.g.N, t.type, n.m)), x(m, Promise.all(r), 0)
                                                                }))
                                                            }(t, n, r), 4);
                                                        case 4:
                                                            return Eo(t.l), t.s ? b.return() : (u = "video/mp4" == o.mimeType || "audio/mp4" == o.mimeType, l = e.ReadableStream, t.i.lowLatencyMode && l && u && ("HLS" != t.m.type || r.A) ? (d = new Uint8Array(0), f = h = !1, p = function(e) {
                                                                var a, s, u;
                                                                return _((function(l) {
                                                                    return h ? l.return() : (f = !0, Eo(t.l), t.s ? l.return() : (d = function(e, t) {
                                                                        var n = new Uint8Array(e.length + t.length);
                                                                        return n.set(e), n.set(t, e.length), n
                                                                    }(d, e), a = !1, s = 0, (new zi).box("mdat", (function(e) {
                                                                        s = e.size + e.start, a = !0
                                                                    })).parse(d, !1, !0), a ? (u = d.subarray(0, s), d = d.subarray(s), x(l, hl(t, n, i, o, r, u), 0)) : l.B(0)))
                                                                }))
                                                            }, x(b, pl(t, n, r, p), 11)) : x(b, pl(t, n, r), 7));
                                                        case 7:
                                                            if (c = b.h, Eo(t.l), t.s) return b.return();
                                                            if (!r.C) {
                                                                b.B(8);
                                                                break
                                                            }
                                                            return x(b, function(t, n, i) {
                                                                var r, a, o, s;
                                                                return _((function(u) {
                                                                    if (1 == u.g) return (r = n.C).cryptoKey ? u.B(2) : x(u, r.fetchKey(), 3);
                                                                    if (!(a = r.iv))
                                                                        for (a = ie(new ArrayBuffer(16)), o = r.firstMediaSequenceNumber + i.g, s = a.byteLength - 1; 0 <= s; s--) a[s] = 255 & o, o >>= 8;
                                                                    return u.return(e.crypto.subtle.decrypt({
                                                                        name: "AES-CBC",
                                                                        iv: a
                                                                    }, r.cryptoKey, t))
                                                                }))
                                                            }(c, r, s), 9);
                                                        case 9:
                                                            c = b.h;
                                                        case 8:
                                                            return Eo(t.l), n.eb ? (n.pa = !1, vl(t, n, 0), b.return()) : x(b, hl(t, n, i, o, r, c), 6);
                                                        case 11:
                                                            if (g = b.h, f) {
                                                                b.B(6);
                                                                break
                                                            }
                                                            return h = !0, Eo(t.l), t.s ? b.return() : n.eb ? (n.pa = !1, vl(t, n, 0), b.return()) : x(b, hl(t, n, i, o, r, g), 6);
                                                        case 6:
                                                            if (Eo(t.l), t.s) return b.return();
                                                            n.na = r, s.next(), n.pa = !1, n.Qd = !1, m = t.g.N.Ma(), v = m[n.type], JSON.stringify(v), n.eb || t.g.Kd(r.startTime, r.endTime, n.type), vl(t, n, 0), A(b, 0);
                                                            break;
                                                        case 2:
                                                            if (y = k(b), Eo(t.l, y), t.s) return b.return();
                                                            if (n.pa = !1, 7001 == y.code) n.pa = !1, yl(n), vl(t, n, 0), b.B(0);
                                                            else if (n.type == a.da && t.i.ignoreTextStreamFailures) t.h.delete(a.da), b.B(0);
                                                            else {
                                                                if (3017 != y.code) return n.kc = !0, y.severity = 2, x(b, wl(t, n, y), 0);
                                                                (function(e, t, n) {
                                                                    if (!Array.from(e.h.values()).some((function(e) {
                                                                            return e != t && e.Qd
                                                                        }))) {
                                                                        var i = Math.round(100 * e.u);
                                                                        if (20 < i) e.u -= .2;
                                                                        else {
                                                                            if (!(4 < i)) return t.kc = !0, e.s = !0, void e.g.onError(n);
                                                                            e.u -= .04
                                                                        }
                                                                        t.Qd = !0
                                                                    }
                                                                    vl(e, t, 4)
                                                                })(t, n, y), b.B(0)
                                                            }
                                                    }
                                                }))
                                            }(t, n, i, a).catch((function() {})), null)
                                        }(t, n), null != r && (vl(t, n, r), n.kc = !1), A(u, 7);
                                        break;
                                    case 6:
                                        return a = k(u), x(u, wl(t, n, a), 8);
                                    case 8:
                                        return u.return();
                                    case 7:
                                        if (o = Array.from(t.h.values()), !t.A || !o.every((function(e) {
                                                return e.endOfStream
                                            }))) {
                                            u.B(0);
                                            break
                                        }
                                        return x(u, t.g.N.endOfStream(), 10);
                                    case 10:
                                        Eo(t.l), 0 != (s = t.g.N.getDuration()) && s < t.m.presentationTimeline.getDuration() && t.m.presentationTimeline.Va(s), T(u)
                                }
                            }))
                        }

                        function hl(e, t, n, i, r, a) {
                            var o, s, u, l, c, d;
                            return _((function(h) {
                                switch (h.g) {
                                    case 1:
                                        return o = i.closedCaptions && 0 < i.closedCaptions.size, u = null != i.emsgSchemeIdUris && 0 < i.emsgSchemeIdUris.length || e.i.dispatchAllEmsgBoxes, l = e.i.parsePrftBox && !e.C, (u || l) && (s = new zi), u && s.R("emsg", (function(t) {
                                            var n = i.emsgSchemeIdUris;
                                            if (0 === t.version) var a = t.reader.pc(),
                                                o = t.reader.pc(),
                                                s = t.reader.H(),
                                                u = t.reader.H(),
                                                l = t.reader.H(),
                                                c = t.reader.H(),
                                                d = r.startTime + u / s;
                                            else s = t.reader.H(), u = (d = t.reader.Mb() / s + r.m) - r.startTime, l = t.reader.H(), c = t.reader.H(), a = t.reader.pc(), o = t.reader.pc();
                                            t = t.reader.$a(t.reader.getLength() - t.reader.aa()), (n && n.includes(a) || e.i.dispatchAllEmsgBoxes) && ("urn:mpeg:dash:event:2012" == a ? e.g.Rf() : ((n = new xa("emsg", n = (new Map).set("detail", {
                                                startTime: d,
                                                endTime: d + l / s,
                                                schemeIdUri: a,
                                                value: o,
                                                timescale: s,
                                                presentationTimeDelta: u,
                                                eventDuration: l,
                                                id: c,
                                                messageData: t
                                            }))).cancelable = !0, e.g.onEvent(n), n.defaultPrevented || "https://aomedia.org/emsg/ID3" != a && "https://developer.apple.com/streaming/emsg-id3" != a || (a = Ar(t)).length && r && e.g.Sf([{
                                                cueTime: r.startTime,
                                                data: t,
                                                frames: a,
                                                dts: r.startTime,
                                                pts: r.startTime
                                            }], 0, r.endTime)))
                                        })), l && s.R("prft", (function(t) {
                                            if (!e.C && r.g.timescale) {
                                                var n = t.reader,
                                                    i = t.version;
                                                n.H(), t = 1e3 * (t = n.H()) + n.H() / Math.pow(2, 32) * 1e3, 0 === i ? n = n.H() : (i = n.H(), n = n.H(), n = i * Math.pow(2, 32) + n), t = new Date(new Date(Date.UTC(1900, 0, 1, 0, 0, 0)).getTime() + t).getTime(), n = new xa("prft", n = (new Map).set("detail", {
                                                    wallClockTime: t,
                                                    programStartDate: new Date(t - n / r.g.timescale * 1e3)
                                                })), e.g.onEvent(n), e.C = !0
                                            }
                                        })), (u || l) && s.parse(a), x(h, function(e, t, n) {
                                            var i, r, a;
                                            return _((function(o) {
                                                if (1 == o.g) return i = Math.max(e.i.bufferBehind, e.m.presentationTimeline.g), null == (r = du(e.g.N, t.type)) || .01 >= (a = n - r - i) ? o.return() : x(o, e.g.N.remove(t.type, r, r + a), 2);
                                                Eo(e.l), T(o)
                                            }))
                                        }(e, t, n), 2);
                                    case 2:
                                        return Eo(e.l), c = t.rc, t.rc = !1, d = t.ee, t.ee = !1, x(h, e.g.fe(t.type, a), 3);
                                    case 3:
                                        return x(h, pu(e.g.N, t.type, a, r, i, o, c, d), 4);
                                    case 4:
                                        Eo(e.l), T(h)
                                }
                            }))
                        }

                        function fl(e) {
                            return e && e.type == rt && ("application/cea-608" == e.stream.mimeType || "application/cea-708" == e.stream.mimeType)
                        }

                        function pl(e, t, n, i, r) {
                            var a, o, s;
                            return _((function(u) {
                                if (1 == u.g) {
                                    if (n instanceof Ha && (a = n.g)) return u.return(a);
                                    if (o = null, t.ra && n instanceof Va) {
                                        var l = t.ra;
                                        if (l.g.has(n)) {
                                            var c = l.g.get(n);
                                            i && (c.h = i), l.g.delete(n), o = c.g
                                        } else o = null
                                    }
                                    return o || (o = gl(e, n, t.stream, i, r)), t.qa = o, x(u, o.promise, 2)
                                }
                                return s = u.h, t.qa = null, u.return(s.data)
                            }))
                        }

                        function gl(e, t, n, i, r) {
                            r = r ? 0 : 1;
                            var a = t instanceof Va ? t : void 0;
                            return t = Ao(t.Oa(), t.j, t.i, e.i.retryParameters, i), e.g.mc.request(Pa, t, {
                                type: r,
                                stream: n,
                                segment: a
                            })
                        }

                        function ml(e, t, n, i) {
                            var r, a;
                            return _((function(o) {
                                return 1 == o.g ? (t.eb = !1, t.Zc = !1, t.Ac = 0, t.$b = !0, t.na = null, t.Ib = null, t.X = null, t.ra && Zu(t.ra), i ? (r = e.g.Hc(), a = e.g.N.getDuration(), x(o, e.g.N.remove(t.type, r + i, a), 3)) : x(o, gu(e.g.N, t.type), 4)) : 3 != o.g ? (Eo(e.l), n ? x(o, e.g.N.flush(t.type), 3) : o.B(3)) : (Eo(e.l), t.$b = !1, t.endOfStream = !1, t.pa || t.Ha || vl(e, t, 0), void T(o))
                            }))
                        }

                        function vl(e, t, n) {
                            var i = t.type;
                            (i != rt || e.h.has(i)) && (t.Ha = new Rt((function() {
                                var n;
                                return _((function(i) {
                                    return 1 == i.g ? (S(i, 2), x(i, dl(e, t), 4)) : 2 != i.g ? A(i, 0) : (n = k(i), e.g && e.g.onError(n), void T(i))
                                }))
                            })).V(n))
                        }

                        function yl(e) {
                            null != e.Ha && (e.Ha.stop(), e.Ha = null)
                        }

                        function bl(e) {
                            return _((function(t) {
                                return e.qa ? x(t, e.qa.abort(), 0) : t.B(0)
                            }))
                        }

                        function wl(e, t, n) {
                            var i;
                            return _((function(r) {
                                if (1 == r.g) return x(r, fa(e.F), 2);
                                Eo(e.l), i = 0 === e.i.maxDisabledTime && 1011 == n.code ? 1 : e.i.maxDisabledTime, 1 === n.category && 0 < i && (n.handled = e.g.kd(t.stream, i), n.handled && (n.severity = 1)), e.g.onError(n), n.handled || e.i.failureCallback(n), T(r)
                            }))
                        }

                        function xl(e) {
                            if (e = Tl(e)) e: {
                                for (var t = (e = c(e.getElementsByTagName("DATA"))).next(); !t.done; t = e.next())
                                    if (t = Hr(t.value, "LA_URL")) {
                                        e = t.textContent;
                                        break e
                                    }
                                e = ""
                            }
                            else e = "";
                            return e
                        }

                        function Tl(e) {
                            return (e = function(e) {
                                var t = 0,
                                    n = re(e),
                                    i = n.getUint32(t, !0);
                                if (i != e.byteLength) return [];
                                e: {
                                    for (e = t + 6, t = []; e < n.byteLength - 1;) {
                                        i = n.getUint16(e, !0), e += 2;
                                        var r = n.getUint16(e, !0);
                                        if (e += 2, 1 & r || r + e > n.byteLength) {
                                            n = [];
                                            break e
                                        }
                                        var a = ie(n, e, r);
                                        t.push({
                                            type: i,
                                            value: a
                                        }), e += r
                                    }
                                    n = t
                                }
                                return n
                            }(e = Mr(e.textContent)).filter((function(e) {
                                return e.type === Sl
                            }))[0]) && (e = ra(e = Mi(e.value, !0), "WRMHEADER")) ? e : null
                        }
                        tl.prototype.abort = function() {
                            this.g && this.g.abort()
                        }, (i = il.prototype).destroy = function() {
                            return this.l.destroy()
                        }, i.configure = function(e) {
                            this.i = e, this.F = new ha({
                                maxAttempts: Math.max(e.retryParameters.maxAttempts, 2),
                                baseDelay: e.retryParameters.baseDelay,
                                backoffFactor: e.retryParameters.backoffFactor,
                                fuzzFactor: e.retryParameters.fuzzFactor,
                                timeout: 0,
                                stallTimeout: 0,
                                connectionTimeout: 0
                            }, !0);
                            for (var t = c(this.h.keys()), n = t.next(); !n.done; n = t.next())
                                if ((n = this.h.get(n.value)).ra) {
                                    var i = n.ra,
                                        r = e.segmentPrefetchLimit;
                                    i.j = r;
                                    for (var a = Array.from(i.g.keys()); a.length > r;) {
                                        var o = a.pop();
                                        o && el(i, o)
                                    }
                                    0 < e.segmentPrefetchLimit || (n.ra = null)
                                } else 0 < e.segmentPrefetchLimit && (n.ra = cl(this, n.stream))
                        }, i.start = function() {
                            var e = this;
                            return _((function(t) {
                                if (1 == t.g) return x(t, function(e) {
                                    var t, n, i, r, a, o, s, u;
                                    return _((function(l) {
                                        if (1 == l.g) {
                                            if (t = at, !e.j) throw new Ye(2, 5, 5006);
                                            return n = new Map, i = new Set, e.j.audio && (n.set(t.xb, e.j.audio), i.add(e.j.audio)), e.j.video && (n.set(t.Aa, e.j.video), i.add(e.j.video)), e.o && (n.set(t.da, e.o), i.add(e.o)), x(l, e.g.N.init(n, e.m.sequenceMode, e.m.type, e.m.ignoreManifestTimestampsInSegmentsMode), 2)
                                        }
                                        for (Eo(e.l), e.updateDuration(), r = c(n.keys()), a = r.next(); !a.done; a = r.next()) o = a.value, s = n.get(o), e.h.has(o) || (u = ll(e, s), e.h.set(o, u), vl(e, u, 0));
                                        T(l)
                                    }))
                                }(e), 2);
                                Eo(e.l), e.A = !0, T(t)
                            }))
                        }, i.rc = function() {
                            if (this.g)
                                for (var e = this.g.Hc(), t = c(this.h.keys()), n = t.next(); !n.done; n = t.next()) {
                                    var i = n.value,
                                        r = null;
                                    (n = this.h.get(i)).X && (r = n.X.current()), (!r || r.startTime > e || r.endTime < e) && (n.X = null), (r = this.g.N).o ? r = !1 : i == rt ? r = null != (r = r.g).g && null != r.h && (e >= r.g && e < r.h) : r = Qs(r = fu(r, i), e), r || ((null != hu(this.g.N, i) || n.pa) && ul(this, n), n.qa && (n.qa.abort(), n.qa = null), i === rt && ((i = this.g.N).D && i.D.i()), n.rc = !0)
                                }
                        }, i.updateDuration = function() {
                            var e = this.m.presentationTimeline.getDuration();
                            1 / 0 > e ? this.g.N.Va(e) : this.g.N.Va(Math.pow(2, 32))
                        };
                        var Sl = 1,
                            Al = (new Map).set("com.microsoft.playready", xl).set("com.microsoft.playready.recommendation", xl).set("com.microsoft.playready.software", xl).set("com.microsoft.playready.hardware", xl);

                        function kl(e) {
                            if (!Pl) {
                                Pl = !0;
                                var t = new Uint8Array([105, 115, 111, 109]),
                                    n = new Uint8Array([97, 118, 99, 49]),
                                    i = new Uint8Array([0, 0, 0, 1]);
                                Kl = _l("ftyp", t, i, t, n), t = _l("dref", Gl), Wl = _l("dinf", t)
                            }
                            this.g = e
                        }

                        function El(e) {
                            var t = _l,
                                n = new Uint8Array([]);
                            switch (e.type) {
                                case "video":
                                    if (e.codecs.includes("avc1")) {
                                        n = e.stream.width || 0;
                                        var i = e.stream.height || 0;
                                        if (0 < e.ga.byteLength) var r = _l("avcC", e.ga);
                                        else {
                                            r = _l;
                                            for (var a = 7, o = [], s = [], u = 0, l = 0, c = 0, h = 0; h < e.xa.length; h++) {
                                                var f = Rl(e.xa[h]);
                                                switch (31 & f[0]) {
                                                    case 7:
                                                        o.push(f), a += f.length + 2;
                                                        break;
                                                    case 8:
                                                        s.push(f), a += f.length + 2
                                                }
                                            }
                                            for (0 < o.length && (u = o[0][1], c = o[0][2], l = o[0][3]), h = 0, (a = new Uint8Array(a))[h++] = 1, a[h++] = u, a[h++] = c, a[h++] = l, a[h++] = 255, a[h++] = 224 | o.length, u = 0; u < o.length; u++) a[h++] = (65280 & o[u].length) >> 8, a[h++] = 255 & o[u].length, a.set(o[u], h), h += o[u].length;
                                            for (a[h++] = s.length, o = 0; o < s.length; o++) a[h++] = (65280 & s[o].length) >> 8, a[h++] = 255 & s[o].length, a.set(s[o], h), h += s[o].length;
                                            r = r("avcC", a)
                                        }
                                        n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].concat(d(Dl(n, 2)), d(Dl(i, 2)), [0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17])), i = "avc1", s = new Uint8Array([]), e.encrypted && (s = Il(e), i = "encv"), n = _l(i, n, r, s)
                                    } else e.codecs.includes("hvc1") && (i = e.stream.width || 0, r = e.stream.height || 0, n = new Uint8Array([]), 0 < e.ga.byteLength && (n = _l("hvcC", e.ga)), i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].concat(d(Dl(i, 2)), d(Dl(r, 2)), [0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17])), r = "hvc1", s = new Uint8Array([]), e.encrypted && (s = Il(e), r = "encv"), n = _l(r, i, n, s));
                                    break;
                                case "audio":
                                    e.codecs.includes("mp3") ? e = _l(".mp3", Cl(e)) : e.codecs.includes("ac-3") ? (n = _l("dac3", e.Y), i = "ac-3", r = new Uint8Array([]), e.encrypted && (r = Il(e), i = "enca"), e = _l(i, Cl(e), n, r)) : e.codecs.includes("ec-3") ? (n = _l("dec3", e.Y), i = "ec-3", r = new Uint8Array([]), e.encrypted && (r = Il(e), i = "enca"), e = _l(i, Cl(e), n, r)) : (0 < e.Y.byteLength ? n = _l("esds", e.Y) : (n = _l, i = e.id + 1, r = e.stream.bandwidth || 0, s = e.stream.channelsCount || 2, u = e.stream.audioSamplingRate || 44100, l = nt("audio", e.codecs.split(",")), o = (c = {
                                        96e3: 0,
                                        88200: 1,
                                        64e3: 2,
                                        48e3: 3,
                                        44100: 4,
                                        32e3: 5,
                                        24e3: 6,
                                        22050: 7,
                                        16e3: 8,
                                        12e3: 9,
                                        11025: 10,
                                        8e3: 11,
                                        7350: 12
                                    })[u], "mp4a.40.5" !== l && "mp4a.40.29" !== l || (o = c[2 * u]), u = parseInt(l.split(".").pop(), 10), n = n("esds", i = new Uint8Array([0, 0, 0, 0, 3, 25].concat(d(Dl(i, 2)), [0, 4, 17, 64, 21, 0, 6, 0], d(Dl(r, 4)), d(Dl(r, 4)), [5, 2, u << 3 | o >>> 1, o << 7 | s << 3, 6, 1, 2])))), i = "mp4a", r = new Uint8Array([]), e.encrypted && (r = Il(e), i = "enca"), e = _l(i, Cl(e), n, r)), n = e
                            }
                            return t("stbl", e = _l("stsd", ql, n), _l("stts", Ul), _l("stsc", Bl), _l("stsz", Hl), _l("stco", Fl))
                        }

                        function Cl(e) {
                            return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.stream.channelsCount || 2, 0, 16, 0, 0, 0, 0].concat(d(Dl(e.stream.audioSamplingRate || 44100, 2)), [0, 0]))
                        }

                        function Il(e) {
                            for (var t = _l, n = e.codecs.substring(0, e.codecs.indexOf(".")), i = 0, r = 0; r < n.length; r += 1) i |= n.charCodeAt(r) << 8 * (n.length - r - 1);
                            n = _l("frma", n = new Uint8Array([].concat(d(Dl(i, 4))))), i = _l("schm", i = new Uint8Array([0, 0, 0, 0, 99, 101, 110, 99, 0, 1, 0, 0])), r = _l;
                            for (var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), o = (e = c(e.stream.drmInfos)).next(); !o.done; o = e.next())
                                if ((o = o.value) && o.keyIds && o.keyIds.size)
                                    for (var s = (o = c(o.keyIds)).next(); !s.done; s = o.next()) a = Rl(s.value);
                            return t("sinf", n, i, r("schi", a = _l("tenc", e = new Uint8Array([0, 0, 0, 0, 0, 0, 1, 8]), a)))
                        }

                        function Ml(e) {
                            for (var t = new Uint8Array([]), n = (e = c(e.g)).next(); !n.done; n = e.next()) {
                                n = n.value;
                                var i, r = _l,
                                    a = new Uint8Array([0, 0, 0, 0].concat(d(Dl(n.data ? n.data.Ua : 0, 4))));
                                a = _l("mfhd", a);
                                var o = n.data ? n.data.wa : [],
                                    s = new Uint8Array(4 + o.length);
                                for (i = 0; i < o.length; i++) {
                                    var u = o[i].flags;
                                    s[i + 4] = u.Ca << 4 | u.Fa << 2 | u.Ea
                                }
                                var l = (o = _l("sdtp", s)).length + 92;
                                s = _l, i = _l("tfhd", i = new Uint8Array([0, 0, 0, 58].concat(d(Dl(n.id + 1, 4)), [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))), u = n.data ? n.data.baseMediaDecodeTime : 0;
                                var h = Math.floor(u % (Ll + 1));
                                u = _l("tfdt", u = new Uint8Array([1, 0, 0, 0].concat(d(Dl(Math.floor(u / (Ll + 1)), 4)), d(Dl(h, 4)))));
                                var f = l,
                                    p = 12 + 16 * (h = (l = n.data ? n.data.wa : []).length),
                                    g = new Uint8Array(p);
                                for (f += 8 + p, g.set(["video" === n.type ? 1 : 0, 0, 15, 1].concat(d(Dl(h, 4)), d(Dl(f, 4))), 0), f = 0; f < h; f++) {
                                    var m = l[f];
                                    p = Dl(m.duration, 4);
                                    var v = Dl(m.size, 4),
                                        y = m.flags;
                                    m = Dl(m.Ja, 4), g.set([].concat(d(p), d(v), [y.Pa << 2 | y.Ca, y.Fa << 6 | y.Ea << 4 | y.Qa, 61440 & y.Ba, 15 & y.Ba], d(m)), 12 + 16 * f)
                                }
                                for (r = r("moof", a, o = s("traf", i, u, l = _l("trun", g), o)), a = n.data ? n.data.wa : [], n = new Uint8Array([]), o = (a = c(a)).next(); !o.done; o = a.next()) n = _r(n, o.value.data);
                                t = _r(t, r, n = _l("mdat", n))
                            }
                            return t
                        }

                        function Dl(e, t) {
                            var n = [];
                            for (--t; 0 <= t; t--) n.push(e >> 8 * t & 255);
                            return n
                        }

                        function Rl(e) {
                            for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length / 2; n += 1) t[n] = parseInt(String(e[2 * n] + e[2 * n + 1]), 16);
                            return t
                        }

                        function _l(e) {
                            var t = P.apply(1, arguments),
                                n = Nl[e];
                            n || (n = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)], Nl[e] = n);
                            for (var i = 8, r = t.length - 1; 0 <= r; r--) i += t[r].byteLength;
                            for ((r = new Uint8Array(i))[0] = i >> 24 & 255, r[1] = i >> 16 & 255, r[2] = i >> 8 & 255, r[3] = 255 & i, r.set(n, 4), n = 0, i = 8; n < t.length; n++) r.set(t[n], i), i += t[n].byteLength;
                            return r
                        }
                        kl.prototype.initSegment = function() {
                            for (var e = new Uint8Array([]), t = c(this.g), n = t.next(); !n.done; n = t.next()) {
                                var i = e;
                                e = n.value, n = _l;
                                var r = e.id + 1,
                                    a = e.stream.width || 0,
                                    o = e.stream.height || 0;
                                "audio" == e.type && (o = a = 0);
                                var s = e.duration * e.timescale,
                                    u = Math.floor(s / (Ll + 1));
                                switch (s = Math.floor(s % (Ll + 1)), r = _l("tkhd", r = new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3].concat(d(Dl(r, 4)), [0, 0, 0, 0], d(Dl(u, 4)), d(Dl(s, 4)), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0], d(Dl(a, 2)), [0, 0], d(Dl(o, 2)), [0, 0]))), a = _l, u = e.duration * e.timescale, o = Math.floor(u / (Ll + 1)), u = Math.floor(u % (Ll + 1)), s = (s = e.stream.language).charCodeAt(0) - 96 << 10 | s.charCodeAt(1) - 96 << 5 | s.charCodeAt(2) - 96, o = _l("mdhd", o = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3].concat(d(Dl(e.timescale, 4)), d(Dl(o, 4)), d(Dl(u, 4)), d(Dl(s, 2)), [0, 0]))), u = e, s = new Uint8Array([]), u.type) {
                                    case "video":
                                        s = jl;
                                        break;
                                    case "audio":
                                        s = Ol
                                }
                                u = _l("hdlr", s);
                                e: {
                                    switch (e.type) {
                                        case "video":
                                            e = _l("minf", _l("vmhd", Vl), Wl, El(e));
                                            break e;
                                        case "audio":
                                            e = _l("minf", _l("smhd", zl), Wl, El(e));
                                            break e
                                    }
                                    e = new Uint8Array([])
                                }
                                e = _r(i, n = n("trak", r, e = a("mdia", o, u, e)))
                            }
                            for (t = _l, r = (n = this.g[0]).duration * n.timescale, i = Math.floor(r / (Ll + 1)), r = Math.floor(r % (Ll + 1)), i = _l("mvhd", i = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3].concat(d(Dl(n.timescale, 4)), d(Dl(i, 4)), d(Dl(r, 4)), [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]))), a = new Uint8Array([]), o = (r = c(this.g)).next(); !o.done; o = r.next()) a = _r(a, o = _l("trex", o = new Uint8Array([0, 0, 0, 0].concat(d(Dl(o.value.id + 1, 4)), [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))));
                            if (r = _l("mvex", a), a = new Uint8Array([]), n.encrypted)
                                for (o = (n = c(n.stream.drmInfos)).next(); !o.done; o = n.next())
                                    if ((o = o.value).initData)
                                        for (u = (o = c(o.initData)).next(); !u.done; u = o.next()) a = _r(a, u.value.initData);
                            return t = t("moov", i, e, r, a), (i = new Uint8Array(Kl.byteLength + t.byteLength)).set(Kl), i.set(t, Kl.byteLength), i
                        };
                        var Pl = !1,
                            Ll = Math.pow(2, 32) - 1,
                            Nl = {},
                            jl = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                            Ol = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]),
                            Ul = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                            Bl = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                            Fl = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                            Hl = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                            Vl = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
                            zl = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                            ql = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]),
                            Kl = new Uint8Array([]),
                            Gl = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                            Wl = new Uint8Array([]);

                        function Xl() {
                            var e = this;
                            this.h = this.g = null, this.l = [], this.j = null, this.s = 1, this.i = null, this.A = new H(5), this.o = new _t((function() {
                                ! function(e) {
                                    var t;
                                    _((function(n) {
                                        switch (n.g) {
                                            case 1:
                                                return S(n, 2), x(n, Yl(e), 4);
                                            case 4:
                                                A(n, 3);
                                                break;
                                            case 2:
                                                t = k(n), e.h && (t.severity = 1, e.h.onError(t));
                                            case 3:
                                                if (!e.h) return n.return();
                                                T(n)
                                        }
                                    }))
                                }(e)
                            })), this.u = new ka, this.m = new Map
                        }

                        function Yl(e) {
                            var t, n, i, r, a, o, s;
                            return _((function(u) {
                                if (1 == u.g) return t = Ma(e.l, e.g.retryParameters), n = e.h.networkingEngine, i = Date.now(), r = n.request(0, t, {
                                    type: 5
                                }), Ea(e.u, r), x(u, r.promise, 2);
                                if (a = u.h, !e.h) return u.return();
                                a.uri && !e.l.includes(a.uri) && e.l.unshift(a.uri);
                                var l = a.uri,
                                    h = aa(a.data, "SmoothStreamingMedia");
                                if (!h) throw new Ye(2, 4, 4046, l);
                                if ((l = e.g.mss.manifestPreprocessor) && l(h), e.i || (e.i = new So(null, 0)), l = Xr(h, "IsLive", na, !1)) throw new Ye(2, 4, 4047);
                                e.i.Yd(!l);
                                var f = Xr(h, "TimeScale", ea, 1e7),
                                    p = Xr(h, "DVRWindowLength", ea);
                                l && (0 === p || isNaN(p)) && (p = 1 / 0);
                                var g, m = Xr(h, "CanSeek", na, !1);
                                for (0 === p && m && (p = 1 / 0), m = null, p && 0 < p && (m = p / f), l && !isNaN(e.g.availabilityWindowOverride) && (m = e.g.availabilityWindowOverride), null == m && (m = 1 / 0), e.i.Xd(m), p = Xr(h, "Duration", ea, 1 / 0), l || e.i.Va(p / f), l = {
                                        variants: [],
                                        textStreams: [],
                                        timescale: f,
                                        duration: p / f
                                    }, m = zr(h, "Protection"), f = e.g.mss.keySystemsBySystemId, p = [], g = (m = c(m)).next(); !g.done; g = m.next()) p = p.concat(zr(g.value, "ProtectionHeader"));
                                if (p.length) {
                                    for (m = [], g = 0; g < p.length; g++) {
                                        var v = p[g],
                                            y = v.getAttribute("SystemID").toLowerCase(),
                                            b = f[y];
                                        if (b) {
                                            var w = Tl(v);
                                            if (w) e: {
                                                for (var S = (w = c(w.getElementsByTagName("DATA"))).next(); !S.done; S = w.next())
                                                    if (S = Hr(S.value, "KID")) {
                                                        w = Mr(S.textContent), w = Rr(w = new Uint8Array([w[3], w[2], w[1], w[0], w[5], w[4], w[7], w[6]].concat(d(w.slice(8)))));
                                                        break e
                                                    }
                                                w = null
                                            }
                                            else w = null;
                                            y = tt(b, y = [{
                                                initData: Fr(S = Mr(v.textContent), y = Dr(y.replace(/-/g, "")), new Set, 0),
                                                initDataType: "cenc",
                                                keyId: w
                                            }]), w && y.keyIds.add(w), (b = Al.get(b)) && (y.licenseServerUri = b(v)), m.push(y)
                                        }
                                    }
                                    f = m
                                } else f = [];
                                for (g = f, m = [], f = [], p = [], v = (h = c(h = zr(h, "StreamIndex"))).next(); !v.done; v = h.next()) {
                                    b = zr(v = v.value, "QualityLevel"), y = l.timescale, w = l.duration, S = zr(v, "c");
                                    for (var A = [], k = 0, E = 0; E < S.length; ++E) {
                                        var C = S[E],
                                            I = S[E + 1],
                                            M = Xr(C, "t", ea),
                                            D = Xr(C, "d", ea);
                                        if (C = Xr(C, "r", Qr), !D) break;
                                        if (M = null != M ? M : k, 0 > (C = C || 0))
                                            if (I) {
                                                if (null == (I = Xr(I, "t", ea))) break;
                                                if (M >= I) break;
                                                C = Math.ceil((I - M) / D) - 1
                                            } else {
                                                if (1 / 0 == w) break;
                                                if (M / y >= w) break;
                                                C = Math.ceil((w * y - M) / D) - 1
                                            }
                                        for (I = 0; I <= C; ++I) k = M + D, A.push({
                                            start: M / y,
                                            end: k / y,
                                            be: M
                                        }), M = k
                                    }
                                    for (y = A, w = (b = c(b)).next(); !w.done; w = b.next())(w = Jl(e, v, w.value, y, g, l)) && ("audio" != w.type || e.g.disableAudio ? "video" != w.type || e.g.disableVideo ? w.type != rt || e.g.disableText || p.push(w) : f.push(w) : m.push(w))
                                }
                                for (h = [], g = (m = c(0 < m.length ? m : [null])).next(); !g.done; g = m.next())
                                    for (g = g.value, w = (v = c(0 < f.length ? f : [null])).next(); !w.done; w = v.next()) y = (b = h).push, w = w.value, S = 0, g && g.bandwidth && 0 < g.bandwidth && (S += g.bandwidth), w && w.bandwidth && 0 < w.bandwidth && (S += w.bandwidth), w = {
                                        id: e.s++,
                                        language: g ? g.language : "und",
                                        disabledUntilTime: 0,
                                        primary: !!g && g.primary || !!w && w.primary,
                                        audio: g,
                                        video: w,
                                        bandwidth: S,
                                        allowedByApplication: !0,
                                        allowedByKeySystem: !0,
                                        decodingInfos: []
                                    }, y.call(b, w);
                                l.variants = h, l.textStreams = p, e.j ? (e.j.variants = l.variants, e.j.textStreams = l.textStreams, e.h.filter(e.j)) : (e.j = {
                                    presentationTimeline: e.i,
                                    variants: l.variants,
                                    textStreams: l.textStreams,
                                    imageStreams: [],
                                    offlineSessionIds: [],
                                    minBufferTime: 0,
                                    sequenceMode: e.g.mss.sequenceMode,
                                    ignoreManifestTimestampsInSegmentsMode: !1,
                                    type: "MSS",
                                    serviceDescription: null
                                }, e.i.zd()), Promise.resolve(), o = Date.now(), s = (o - i) / 1e3, e.A.sample(1, s), T(u)
                            }))
                        }

                        function Jl(e, t, n, i, r, a) {
                            var o = t.getAttribute("Type");
                            if ("audio" !== o && "video" !== o && "text" !== o) return G("Ignoring unrecognized type:", o), null;
                            var s = t.getAttribute("Language"),
                                u = e.s++,
                                l = Xr(n, "Bitrate", Zr),
                                d = Xr(n, "MaxWidth", Zr),
                                h = Xr(n, "MaxHeight", Zr),
                                f = Xr(n, "Channels", Zr),
                                p = Xr(n, "SamplingRate", Zr),
                                g = a.duration;
                            i.length && (g = i[i.length - 1].end - i[0].start);
                            var m = e.i.getDuration();
                            e.i.Va(Math.min(g, m));
                            var v = {
                                id: u,
                                originalId: t.getAttribute("Name") || String(u),
                                createSegmentIndex: function() {
                                    return Promise.resolve()
                                },
                                closeSegmentIndex: function() {
                                    return Promise.resolve()
                                },
                                segmentIndex: null,
                                mimeType: "",
                                codecs: "",
                                frameRate: void 0,
                                pixelAspectRatio: void 0,
                                bandwidth: l || 0,
                                width: d || void 0,
                                height: h || void 0,
                                kind: "",
                                encrypted: 0 < r.length,
                                drmInfos: r,
                                keyIds: new Set,
                                language: At(s || "und"),
                                originalLanguage: s,
                                label: "",
                                type: "",
                                primary: !1,
                                trickModeVideo: null,
                                emsgSchemeIdUris: [],
                                roles: [],
                                forced: !1,
                                channelsCount: f,
                                audioSamplingRate: p,
                                spatialAudio: !1,
                                closedCaptions: null,
                                hdr: void 0,
                                tilesLayout: void 0,
                                matchedStreams: [],
                                mssPrivateData: {
                                    duration: g,
                                    timescale: a.timescale,
                                    codecPrivateData: null
                                },
                                accessibilityPurpose: null,
                                external: !1
                            };
                            if ((r = t.getAttribute("Subtype")) && ((r = Ql[r]) && v.roles.push(r), "main" === r && (v.primary = !0)), null !== (r = n.getAttribute("FourCC")) && "" !== r || (r = t.getAttribute("FourCC")), !r)
                                if ("audio" === o) r = "AAC";
                                else if ("video" === o) return G('FourCC is not defined whereas it is required for a QualityLevel element for a StreamIndex of type "video"'), null;
                            if (!$l.includes(r.toUpperCase())) return G("Codec not supported:", r), null;
                            switch (n = function(e, t, n, i) {
                                if (e = e.getAttribute("CodecPrivateData")) return e;
                                if ("audio" !== t) return null;
                                t = i.channelsCount || 2, e = i.audioSamplingRate || 44100;
                                var r = {
                                    96e3: 0,
                                    88200: 1,
                                    64e3: 2,
                                    48e3: 3,
                                    44100: 4,
                                    32e3: 5,
                                    24e3: 6,
                                    22050: 7,
                                    16e3: 8,
                                    12e3: 9,
                                    11025: 10,
                                    8e3: 11,
                                    7350: 12
                                };
                                return i = r[e], "AACH" === n ? (n = new Uint8Array(4), e = r[2 * e], n[0] = 40 | i >> 1, n[1] = i << 7 | t << 3 | e >> 1, n[2] = e << 7 | 8, n[3] = 0, t = new Uint16Array(2), t[0] = (n[0] << 8) + n[1], t[1] = (n[2] << 8) + n[3], t[0].toString(16) + t[1].toString(16)) : (n = new Uint8Array(2), n[0] = 16 | i >> 1, n[1] = i << 7 | t << 3, t = new Uint16Array(1), t[0] = (n[0] << 8) + n[1], t[0].toString(16))
                            }(n, o, r, v), v.mssPrivateData.codecPrivateData = n, o) {
                                case "audio":
                                    if (!n) return G("Quality unsupported without CodecPrivateData", o), null;
                                    v.type = "audio", v.mimeType = "mss/audio/mp4", v.codecs = function(e, t) {
                                        var n = 0;
                                        return "AACH" === e && (n = 5), t ? 0 === n && (n = (248 & parseInt(t.substr(0, 2), 16)) >> 3) : (n = 2, "AACH" === e && (n = 5)), "mp4a.40." + n
                                    }(r, n);
                                    break;
                                case "video":
                                    if (!n) return G("Quality unsupported without CodecPrivateData", o), null;
                                    v.type = "video", v.mimeType = "mss/video/mp4", v.codecs = function(e) {
                                        var t = /00000001[0-9]7/.exec(e);
                                        return t.length && e ? "avc1." + e.substr(e.indexOf(t[0]) + 10, 6) : ""
                                    }(n);
                                    break;
                                case "text":
                                    v.type = rt, v.mimeType = "application/mp4", ("TTML" === r || "DFXP" === r) && (v.codecs = "stpp")
                            }
                            return v.createSegmentIndex = function() {
                                if (v.segmentIndex) return Promise.resolve();
                                if (e.m.has(v.id)) var n = e.m.get(v.id);
                                else n = [], "video" == v.type && (n = v.mssPrivateData.codecPrivateData.split("00000001").slice(1)), n = new kl([n = {
                                    id: v.id,
                                    type: v.type,
                                    codecs: v.codecs,
                                    encrypted: v.encrypted,
                                    timescale: v.mssPrivateData.timescale,
                                    duration: v.mssPrivateData.duration,
                                    xa: n,
                                    Y: new Uint8Array([]),
                                    ga: new Uint8Array([]),
                                    data: null,
                                    stream: v
                                }]).initSegment(), e.m.set(v.id, n);
                                return n = function(e, t, n, i, r) {
                                    var a = i.getAttribute("Url").replace("{bitrate}", String(n.bandwidth));
                                    i = [];
                                    for (var o = {}, s = (r = c(r)).next(); !s.done; o = {
                                            Ub: o.Ub
                                        }, s = r.next()) o.Ub = s.value, i.push(new Va(o.Ub.start, o.Ub.end, function(t) {
                                        return function() {
                                            return et(e.l, [a.replace("{start time}", String(t.Ub.be))])
                                        }
                                    }(o), 0, null, t, 0, 0, n.mssPrivateData.duration));
                                    return i
                                }(e, new Ha((function() {
                                    return []
                                }), 0, null, null, void 0, n), v, t, i), v.segmentIndex = new Ga(n), Promise.resolve()
                            }, v.closeSegmentIndex = function() {
                                v.segmentIndex && (v.segmentIndex.release(), v.segmentIndex = null)
                            }, v
                        }(i = Xl.prototype).configure = function(e) {
                            this.g = e
                        }, i.start = function(e, t) {
                            var n = this;
                            return _((function(i) {
                                if (1 == i.g) return n.l = [e], n.h = t, x(i, Yl(n), 2);
                                if (!n.h) throw new Ye(2, 7, 7001);
                                return i.return(n.j)
                            }))
                        }, i.stop = function() {
                            return this.g = this.h = null, this.l = [], this.j = null, null != this.o && (this.o.stop(), this.o = null), this.m.clear(), this.u.destroy()
                        }, i.update = function() {
                            var e, t = this;
                            return _((function(n) {
                                return 1 == n.g ? (S(n, 2), x(n, Yl(t), 4)) : 2 != n.g ? A(n, 0) : (e = k(n), t.h && e ? (t.h.onError(e), void T(n)) : n.return())
                            }))
                        }, i.onExpirationUpdated = function() {}, F("shaka.mss.MssParser", Xl);
                        var $l = "AAC AACL AACH AACP AVC1 H264 TTML DFXP".split(" "),
                            Ql = {
                                CAPT: "main",
                                SUBT: "alternate",
                                DESC: "main"
                            };

                        function Zl(e, t, n, i, r, a) {
                            if (200 <= n && 299 >= n && 202 != n) return {
                                uri: r || i,
                                originalUri: i,
                                data: t,
                                status: n,
                                headers: e,
                                fromCache: !!e["x-shaka-from-cache"]
                            };
                            r = null;
                            try {
                                r = Di(t)
                            } catch (o) {}
                            throw new Ye(401 == n || 403 == n ? 2 : 1, 1, 1001, i, n, r, e, a)
                        }

                        function ec() {}

                        function tc(e, t, n, i, r) {
                            var a = new sc;
                            Do(t.headers).forEach((function(e, t) {
                                a.append(t, e)
                            }));
                            var o = new ac,
                                s = {
                                    he: !1,
                                    Le: !1
                                };
                            if (e = function(e, t, n, i, r, a, o) {
                                    var s, u, l, c, d, h, f, p, g, m, v, y;
                                    return _((function(b) {
                                        switch (b.g) {
                                            case 1:
                                                return s = rc, u = oc, h = d = 0, f = Date.now(), S(b, 2), x(b, s(e, n), 4);
                                            case 4:
                                                if (l = b.h, a(nc(l.headers)), "HEAD" == n.method) {
                                                    b.B(5);
                                                    break
                                                }
                                                return p = l.clone().body.getReader(), m = (g = l.headers.get("Content-Length")) ? parseInt(g, 10) : 0, new u({
                                                    start: function(e) {
                                                        function t() {
                                                            var n, i;
                                                            return _((function(a) {
                                                                switch (a.g) {
                                                                    case 1:
                                                                        return S(a, 2), x(a, p.read(), 4);
                                                                    case 4:
                                                                        n = a.h, A(a, 3);
                                                                        break;
                                                                    case 2:
                                                                        return k(a), a.return();
                                                                    case 3:
                                                                        if (n.done) {
                                                                            a.B(5);
                                                                            break
                                                                        }
                                                                        if (d += n.value.byteLength, !o) {
                                                                            a.B(5);
                                                                            break
                                                                        }
                                                                        return x(a, o(n.value), 5);
                                                                    case 5:
                                                                        (100 < (i = Date.now()) - f || n.done) && (r(i - f, d - h, m - d), h = d, f = i), n.done ? e.close() : (e.enqueue(n.value), t()), T(a)
                                                                }
                                                            }))
                                                        }
                                                        t()
                                                    }
                                                }), x(b, l.arrayBuffer(), 6);
                                            case 6:
                                                c = b.h;
                                            case 5:
                                                A(b, 3);
                                                break;
                                            case 2:
                                                if (v = k(b), i.he) throw new Ye(1, 1, 7001, e, t);
                                                if (i.Le) throw new Ye(1, 1, 1003, e, t);
                                                throw new Ye(1, 1, 1002, e, v, t);
                                            case 3:
                                                return y = nc(l.headers), b.return(Zl(y, c, l.status, e, l.url, t))
                                        }
                                    }))
                                }(e, n, {
                                    body: t.body || void 0,
                                    headers: a,
                                    method: t.method,
                                    signal: o.signal,
                                    credentials: t.allowCrossSiteCredentials ? "include" : void 0
                                }, s, i, r, t.streamDataCallback), e = new ga(e, (function() {
                                    return s.he = !0, o.abort(), Promise.resolve()
                                })), t = t.retryParameters.timeout) {
                                var u = new _t((function() {
                                    s.Le = !0, o.abort()
                                }));
                                u.V(t / 1e3), e.finally((function() {
                                    u.stop()
                                }))
                            }
                            return e
                        }

                        function nc(e) {
                            var t = {};
                            return e.forEach((function(e, n) {
                                t[n.trim()] = e
                            })), t
                        }

                        function ic() {
                            if (!e.ReadableStream) return !1;
                            try {
                                new ReadableStream({})
                            } catch (bp) {
                                return !1
                            }
                            return !!e.Response && (!!new Response("").body && !(!e.fetch || !e.AbortController))
                        }
                        To.ism = function() {
                            return new Xl
                        }, xo["application/vnd.ms-sstr+xml"] = function() {
                            return new Xl
                        }, F("shaka.net.HttpFetchPlugin", ec), ec.isSupported = ic, ec.parse = tc;
                        var rc = e.fetch,
                            ac = e.AbortController,
                            oc = e.ReadableStream,
                            sc = e.Headers;

                        function uc() {}

                        function lc(e, t, n, i, r) {
                            var a = new dc,
                                o = Date.now(),
                                s = 0;
                            return new ga(new Promise((function(u, l) {
                                a.open(t.method, e, !0), a.responseType = "arraybuffer", a.timeout = t.retryParameters.timeout, a.withCredentials = t.allowCrossSiteCredentials, a.onabort = function() {
                                    l(new Ye(1, 1, 7001, e, n))
                                };
                                var c = !1;
                                for (var d in a.onreadystatechange = function() {
                                        if (2 == a.readyState && !c) {
                                            var e = cc(a);
                                            r(e), c = !0
                                        }
                                    }, a.onload = function() {
                                        var t = cc(a),
                                            i = a.response;
                                        try {
                                            var r = Zl(t, i, a.status, e, a.responseURL, n);
                                            u(r)
                                        } catch (o) {
                                            l(o)
                                        }
                                    }, a.onerror = function(t) {
                                        l(new Ye(1, 1, 1002, e, t, n))
                                    }, a.ontimeout = function() {
                                        l(new Ye(1, 1, 1003, e, n))
                                    }, a.onprogress = function(e) {
                                        var t = Date.now();
                                        (100 < t - o || e.lengthComputable && e.loaded == e.total) && (i(t - o, e.loaded - s, e.total - e.loaded), s = e.loaded, o = t)
                                    }, t.headers) a.setRequestHeader(d.toLowerCase(), t.headers[d]);
                                a.send(t.body)
                            })), (function() {
                                return a.abort(), Promise.resolve()
                            }))
                        }

                        function cc(e) {
                            var t = e.getAllResponseHeaders().trim().split("\r\n");
                            e = {};
                            for (var n = (t = c(t)).next(); !n.done; n = t.next()) e[(n = n.value.split(": "))[0].toLowerCase()] = n.slice(1).join(": ");
                            return e
                        }
                        ic() && (Ia("http", tc, 2, !0), Ia("https", tc, 2, !0), Ia("blob", tc, 2, !0)), F("shaka.net.HttpXHRPlugin", uc), uc.parse = lc;
                        var dc = e.XMLHttpRequest;

                        function hc(e, t) {
                            var n = Zd(),
                                i = this;
                            this.j = t, this.i = e, this.l = n, this.o = null, this.m = [], this.h = this.g = null, this.u = Promise.resolve().then((function() {
                                return function(e) {
                                    return _((function(t) {
                                        if (e.s.g) t = t.B(0);
                                        else {
                                            if (0 == e.m.length || e.g && !e.g.nb) var n = !1;
                                            else {
                                                e.g && (e.g.Ga.qb(), e.g = null);
                                                var i = (n = e.m.shift()).create(e.l);
                                                i ? (n.Ga.Kb(), e.g = {
                                                    node: i.node,
                                                    S: i.S,
                                                    nb: i.nb,
                                                    Ga: n.Ga
                                                }) : n.Ga.Vc(), n = !0
                                            }
                                            n ? n = Promise.resolve() : e.g ? n = function(e) {
                                                var t, n;
                                                return _((function(i) {
                                                    switch (i.g) {
                                                        case 1:
                                                            return e.i = e.j.rf(e.i, e.l, e.g.node, e.g.S), S(i, 2), e.h = e.j.Ze(e.i, e.l, e.g.S), x(i, e.h.promise, 4);
                                                        case 4:
                                                            e.h = null, e.i == e.g.node && (e.g.Ga.Uc(), e.g = null), A(i, 0);
                                                            break;
                                                        case 2:
                                                            return 7001 == (t = k(i)).code ? e.g.Ga.qb() : e.g.Ga.onError(t), e.g = null, e.h = null, n = e, x(i, e.j.handleError(e.l, t), 5);
                                                        case 5:
                                                            n.i = i.h, T(i)
                                                    }
                                                }))
                                            }(e) : (e.j.Pf(e.i), e.o = new pa, n = e.o), t = x(t, n, 1)
                                        }
                                        return t
                                    }))
                                }(i)
                            })), this.s = new ko((function() {
                                return function(e) {
                                    var t, n;
                                    return _((function(i) {
                                        if (1 == i.g) return e.h && e.h.abort(), pc(e), x(i, e.u, 2);
                                        for (e.g && e.g.Ga.qb(), t = c(e.m), n = t.next(); !n.done; n = t.next()) n.value.Ga.qb();
                                        e.g = null, e.m = [], e.j = null, T(i)
                                    }))
                                }(i)
                            }))
                        }

                        function fc(e, t) {
                            var n = {
                                Kb: function() {},
                                Uc: function() {},
                                qb: function() {},
                                onError: function() {},
                                Vc: function() {},
                                xg: function() {}
                            };
                            return e.m.push({
                                create: t,
                                Ga: n
                            }), e.h && e.h.abort(), pc(e), n
                        }

                        function pc(e) {
                            e.o && (e.o.resolve(), e.o = null)
                        }

                        function gc(e) {
                            if (e.s) return "\n";
                            if (e.g.length) return e.g.map(gc).join("");
                            var t = [],
                                n = 700 <= e.C,
                                i = "italic" == e.m,
                                r = e.o.includes("underline");
                            return n && t.push(["b"]), i && t.push(["i"]), r && t.push(["u"]), n = "", (i = mc(e.l)) && (n += "." + i), (i = mc(e.backgroundColor)) && (n += ".bg_" + i), n && t.push(["c", n]), t.reduceRight((function(e, t) {
                                var n = c(t);
                                return "<" + (t = n.next().value) + (void 0 === (n = n.next().value) ? "" : n) + ">" + e + "</" + t + ">"
                            }), e.S)
                        }

                        function mc(e) {
                            switch (e.toLowerCase()) {
                                case "white":
                                case "#fff":
                                case "#ffffff":
                                    return "white";
                                case "lime":
                                case "#0f0":
                                case "#00ff00":
                                    return "lime";
                                case "cyan":
                                case "#0ff":
                                case "#00ffff":
                                    return "cyan";
                                case "red":
                                case "#f00":
                                case "#ff0000":
                                    return "red";
                                case "yellow":
                                case "#ff0":
                                case "#ffff00":
                                    return "yellow";
                                case "magenta":
                                case "#f0f":
                                    return "magenta";
                                case "blue":
                                case "#00f":
                                case "#0000ff":
                                    return "blue";
                                case "black":
                                case "#000":
                                case "#000000":
                                    return "black"
                            }
                            return null
                        }

                        function vc(e) {
                            for (var t = [], n = (e = c(e)).next(); !n.done; n = e.next()) {
                                var i = (n = n.value).clone();
                                i.g = [], i.S = gc(n), t.push(i)
                            }
                            return t
                        }

                        function yc(e) {
                            this.g = null;
                            for (var t = c(Array.from(e.textTracks)), n = t.next(); !n.done; n = t.next())(n = n.value).mode = "disabled", "Shaka Player TextTrack" == n.label && (this.g = n);
                            this.g || (this.g = e.addTextTrack("subtitles", "Shaka Player TextTrack")), this.g.mode = "hidden"
                        }

                        function bc(e) {
                            if (e.startTime >= e.endTime) return null;
                            var t = new VTTCue(e.startTime, e.endTime, e.S);
                            t.lineAlign = e.i, t.positionAlign = e.D, e.size && (t.size = e.size);
                            try {
                                t.align = e.textAlign
                            } catch (n) {}
                            return "center" == e.textAlign && "center" != t.align && (t.align = "middle"), "vertical-lr" == e.writingMode ? t.vertical = "lr" : "vertical-rl" == e.writingMode && (t.vertical = "rl"), 1 == e.u && (t.snapToLines = !1), null != e.h && (t.line = e.h), null != e.position && (t.position = e.position), t
                        }

                        function wc(e, t) {
                            var n = e.mode;
                            e.mode = "showing" == n ? "showing" : "hidden";
                            for (var i = c(Array.from(e.cues)), r = i.next(); !r.done; r = i.next())(r = r.value) && t(r) && e.removeCue(r);
                            e.mode = n
                        }

                        function xc() {}

                        function Tc(e) {
                            for (; e.firstChild;) e.removeChild(e.firstChild)
                        }

                        function Sc(t, n) {
                            var i = this;
                            this.j = !1, this.i = [], this.A = t, this.m = n, this.g = document.createElement("div"), this.g.classList.add("shaka-text-container"), this.g.style.textAlign = "center", this.g.style.display = "flex", this.g.style.flexDirection = "column", this.g.style.alignItems = "center", this.g.style.justifyContent = "flex-end", this.m.appendChild(this.g), this.u = new _t((function() {
                                Ec(i)
                            })).sa(.25), this.h = new Map, this.s = new Co, this.s.J(document, "fullscreenchange", (function() {
                                Ec(i, !0)
                            })), this.l = null, "ResizeObserver" in e && (this.l = new ResizeObserver((function() {
                                Ec(i, !0)
                            })), this.l.observe(this.g)), this.o = new Map
                        }

                        function Ac(e, t) {
                            for (; null != t;) {
                                if (t == e.g) return !0;
                                t = t.parentElement
                            }
                            return !1
                        }

                        function kc(e, t, n, i, r) {
                            for (var a = !1, o = [], s = [], u = (t = c(t)).next(); !u.done; u = t.next()) {
                                u = u.value, r.push(u);
                                var l = e.h.get(u),
                                    d = u.startTime <= i && u.endTime > i,
                                    h = l ? l.Pe : null;
                                l && (o.push(l.jd), l.qc && o.push(l.qc), d || (a = !0, e.h.delete(u), l = null)), d && (s.push(u), l ? Ac(e, h) || (a = !0) : (Cc(e, u, r), h = (l = e.h.get(u)).Pe, a = !0)), 0 < u.g.length && h && kc(e, u.g, h, i, r), r.pop()
                            }
                            if (a) {
                                for (r = (i = c(o)).next(); !r.done; r = i.next())(r = r.value).parentElement && r.parentElement.removeChild(r);
                                for (s.sort((function(e, t) {
                                        return e.startTime != t.startTime ? e.startTime - t.startTime : e.endTime - t.endTime
                                    })), u = (s = c(s)).next(); !u.done; u = s.next())(i = e.h.get(u.value)).qc ? (n.appendChild(i.qc), i.qc.appendChild(i.jd)) : n.appendChild(i.jd)
                            }
                        }

                        function Ec(e, t) {
                            if (e.g) {
                                var n = e.A.currentTime;
                                if (!e.j || void 0 !== t && t) {
                                    for (var i = (t = c(e.o.values())).next(); !i.done; i = t.next()) Tc(i.value);
                                    Tc(e.g), e.h.clear(), e.o.clear()
                                }
                                if (e.j) {
                                    t = new Map;
                                    for (var r = (i = c(e.h.keys())).next(); !r.done; r = i.next()) r = r.value, t.set(r, e.h.get(r));
                                    kc(e, e.i, e.g, n, [])
                                }
                            }
                        }

                        function Cc(e, t, n) {
                            var i = 1 < n.length,
                                r = i ? "span" : "div";
                            t.s && (r = "br"), i = !i && 0 < t.g.length;
                            var a = document.createElement(r);
                            if ("br" != r && function(e, t, n, i, r) {
                                    var a = t.style,
                                        o = 0 == n.g.length,
                                        s = 1 < i.length;
                                    a.whiteSpace = "pre-wrap";
                                    var u = n.S.replace(/\s+$/g, (function(e) {
                                        return " ".repeat(e.length)
                                    }));
                                    if (a.webkitTextStrokeColor = n.W, a.webkitTextStrokeWidth = n.Z, a.color = n.l, a.direction = n.direction, a.opacity = n.O, a.paddingLeft = Ic(n, e.m), a.paddingRight = Ic(n, e.m), a.textShadow = n.P, n.g.length) var l = t;
                                    else l = document.createElement("span"), t.appendChild(l);
                                    n.A && (l.style.border = n.A), r || ((t = function(e, t) {
                                        for (var n = e.length - 1; 0 <= n; n--) {
                                            var i = t(e[n]);
                                            if (i || 0 === i) return i
                                        }
                                        return null
                                    }(i, (function(e) {
                                        return e.backgroundColor
                                    }))) ? l.style.backgroundColor = t : u && (l.style.backgroundColor = "rgba(0, 0, 0, 0.8)")), u && (l.textContent = u), s ? a.display = "inline" : (a.display = "flex", a.flexDirection = "column", a.alignItems = "center", a.justifyContent = "before" == n.j ? "flex-start" : "center" == n.j ? "center" : "flex-end"), o || (a.margin = "0"), a.fontFamily = n.I, a.fontWeight = n.C.toString(), a.fontStyle = n.m, a.letterSpacing = n.K, a.fontSize = Ic(n, e.m), null != n.h && (e = n.u, 0 == n.h && e == we && (e = 1), 1 == e && (a.position = "absolute", n.writingMode == be ? (a.width = "100%", n.i == xe ? a.top = n.h + "%" : "end" == n.i && (a.bottom = 100 - n.h + "%")) : "vertical-lr" == n.writingMode ? (a.height = "100%", n.i == xe ? a.left = n.h + "%" : "end" == n.i && (a.right = 100 - n.h + "%")) : (a.height = "100%", n.i == xe ? a.right = n.h + "%" : "end" == n.i && (a.left = 100 - n.h + "%")))), a.lineHeight = n.L, null != n.position && (n.writingMode == be ? a.paddingLeft = n.position : a.paddingTop = n.position), e = function(e) {
                                        var t = e.direction,
                                            n = e.D;
                                        return e = e.textAlign, n !== ge ? n : "left" === e || "start" === e && t === ye || "end" === e && "rtl" === t ? "line-left" : "right" === e || "start" === e && "rtl" === t || "end" === e && t === ye ? "line-right" : "center"
                                    }(n), "line-left" == e ? a.cssFloat = "left" : "line-right" == e && (a.cssFloat = "right"), a.textAlign = n.textAlign, a.textDecoration = n.o.join(" "), a.writingMode = n.writingMode, "writingMode" in document.documentElement.style && a.writingMode == n.writingMode || (a.webkitWritingMode = n.writingMode), n.size && (n.writingMode == be ? a.width = n.size + "%" : a.height = n.size + "%")
                                }(e, a, t, n, i), n = null, t.region && t.region.id)
                                if (r = (n = t.region).id + "_" + n.width + "x" + n.height + (n.g == ke ? "%" : "px") + "-0x0" + (n.h == ke ? "%" : "px"), e.o.has(r)) n = e.o.get(r);
                                else {
                                    var o = document.createElement("span"),
                                        s = n.g == ke ? "%" : "px",
                                        u = n.i == ke ? "%" : "px",
                                        l = n.h == ke ? "%" : "px";
                                    o.id = "shaka-text-region---" + r, o.classList.add("shaka-text-region"), o.style.height = n.height + s, o.style.width = n.width + u, o.style.position = "absolute", o.style.top = 0 + l, o.style.left = 0 + l, o.style.display = "flex", o.style.flexDirection = "column", o.style.alignItems = "center", o.style.justifyContent = "before" == t.j ? "flex-start" : "center" == t.j ? "center" : "flex-end", e.o.set(r, o), n = o
                                }
                            r = a, i && ((r = document.createElement("span")).classList.add("shaka-text-wrapper"), r.style.backgroundColor = t.backgroundColor, r.style.lineHeight = "normal", a.appendChild(r)), e.h.set(t, {
                                jd: a,
                                Pe: r,
                                qc: n
                            })
                        }

                        function Ic(e, t) {
                            var n = (n = new RegExp(/(\d*\.?\d+)([a-z]+|%+)/).exec("")) ? {
                                value: Number(n[1]),
                                unit: n[2]
                            } : null;
                            if (!n) return "";
                            var i = n.value;
                            switch (n.unit) {
                                case "%":
                                    return i / 100 * t.clientHeight / e.F.rows + "px";
                                case "c":
                                    return t.clientHeight * i / e.F.rows + "px";
                                default:
                                    return ""
                            }
                        }

                        function Mc(e, t) {
                            this.h = e, this.g = t, this.j = "", this.o = void 0, this.i = !1, this.m = !0, this.l = !1
                        }

                        function Dc(t) {
                            return t.j || (t.j = t.g.sessionId || e.crypto.randomUUID()), {
                                v: 1,
                                sf: t.o,
                                sid: t.j,
                                cid: t.g.contentId,
                                mtp: t.h.getBandwidthEstimate() / 1e3
                            }
                        }

                        function Rc(e, t, n) {
                            n = void 0 === n ? {} : n;
                            var i = void 0 === i ? e.g.useHeaders : i;
                            if (e.g.enabled) {
                                Object.assign(n, Dc(e)), n.pr = e.h.Gc();
                                var r = n.ot === jc || n.ot === Oc;
                                if (e.l && r && (n.bs = !0, n.su = !0, e.l = !1), null == n.su && (n.su = e.m), i) e = function(e) {
                                    for (var t = Object.keys(e), n = {}, i = ["Object", "Request", "Session", "Status"], r = [{}, {}, {}, {}], a = {
                                            br: 0,
                                            d: 0,
                                            ot: 0,
                                            tb: 0,
                                            bl: 1,
                                            dl: 1,
                                            mtp: 1,
                                            nor: 1,
                                            nrr: 1,
                                            su: 1,
                                            cid: 2,
                                            pr: 2,
                                            sf: 2,
                                            sid: 2,
                                            st: 2,
                                            v: 2,
                                            bs: 3,
                                            rtp: 3
                                        }, o = (t = c(t)).next(); !o.done; o = t.next()) o = o.value, r[null != a[o] ? a[o] : 1][o] = e[o];
                                    for (e = 0; e < r.length; e++)(a = _c(r[e])) && (n["CMCD-" + i[e]] = a);
                                    return n
                                }(n), Object.keys(e).length && Object.assign(t.headers, e);
                                else {
                                    var a = _c(n);
                                    a && (t.uris = t.uris.map((function(e) {
                                        return Pc(e, a)
                                    })))
                                }
                            }
                        }

                        function _c(e) {
                            function t(e) {
                                return 100 * n(e / 100)
                            }

                            function n(e) {
                                return Math.round(e)
                            }
                            for (var i, r = [], a = {
                                    br: n,
                                    d: n,
                                    bl: t,
                                    dl: t,
                                    mtp: t,
                                    nor: function(e) {
                                        return encodeURIComponent(e)
                                    },
                                    rtp: t,
                                    tb: n
                                }, o = Object.keys(e || {}).sort(), s = (o = c(o)).next(); !s.done; s = o.next()) {
                                var u = e[s = s.value];
                                if (!(i = u, Number.isNaN(i) || null == i || "" === i || !1 === i || "v" === s && 1 === u || "pr" == s && 1 === u)) {
                                    var l = a[s];
                                    l && (u = l(u));
                                    var d;
                                    d = "string" === (l = typeof u) && "ot" !== s && "sf" !== s && "st" !== s ? s + "=" + JSON.stringify(u) : "boolean" === l ? s : "symbol" === l ? s + "=" + u.description : s + "=" + u, r.push(d)
                                }
                            }
                            return r.join(",")
                        }

                        function Pc(e, t) {
                            return !t || e.includes("offline:") ? e : ((e = new Ne(e)).g.set("CMCD", t), e.toString())
                        }
                        Ia("http", lc, 1, !0), Ia("https", lc, 1, !0), Ia("blob", lc, 1, !0), hc.prototype.destroy = function() {
                            return this.s.destroy()
                        }, (i = yc.prototype).remove = function(e, t) {
                            return !!this.g && (wc(this.g, (function(n) {
                                return n.startTime < t && n.endTime > e
                            })), !0)
                        }, i.append = function(e) {
                            var t = vc(e),
                                n = [];
                            e = this.g.cues ? Array.from(this.g.cues) : [];
                            for (var i = {}, r = (t = c(t)).next(); !r.done; i = {
                                    wb: i.wb
                                }, r = t.next()) i.wb = r.value, e.some(function(e) {
                                return function(t) {
                                    return t.startTime == e.wb.startTime && t.endTime == e.wb.endTime && t.text == e.wb.S
                                }
                            }(i)) || (r = bc(i.wb)) && n.push(r);
                            for (i = (e = c(e = n.slice().sort((function(e, t) {
                                    return e.startTime != t.startTime ? e.startTime - t.startTime : e.endTime != t.endTime ? e.endTime - t.startTime : "line" in VTTCue.prototype ? n.indexOf(t) - n.indexOf(e) : n.indexOf(e) - n.indexOf(t)
                                })))).next(); !i.done; i = e.next()) this.g.addCue(i.value)
                        }, i.destroy = function() {
                            return this.g && (wc(this.g, (function() {
                                return !0
                            })), this.g.mode = "disabled"), this.g = null, Promise.resolve()
                        }, i.isTextVisible = function() {
                            return "showing" == this.g.mode
                        }, i.setTextVisibility = function(e) {
                            this.g.mode = e ? "showing" : "hidden"
                        }, F("shaka.text.SimpleTextDisplayer", yc), yc.prototype.setTextVisibility = yc.prototype.setTextVisibility, yc.prototype.isTextVisible = yc.prototype.isTextVisible, yc.prototype.destroy = yc.prototype.destroy, yc.prototype.append = yc.prototype.append, yc.prototype.remove = yc.prototype.remove, F("shaka.util.Dom", xc), xc.removeAllChildren = Tc, (i = Sc.prototype).append = function(e) {
                            for (var t = [].concat(d(this.i)), n = {}, i = (e = c(e)).next(); !i.done; n = {
                                    vc: n.vc
                                }, i = e.next()) n.vc = i.value, t.some(function(e) {
                                return function(t) {
                                    return pe(t, e.vc)
                                }
                            }(n)) || this.i.push(n.vc);
                            Ec(this)
                        }, i.destroy = function() {
                            this.m.removeChild(this.g), this.g = null, this.j = !1, this.i = [], this.u && this.u.stop(), this.h.clear(), this.s && (this.s.release(), this.s = null), this.l && (this.l.disconnect(), this.l = null)
                        }, i.remove = function(e, t) {
                            if (!this.g) return !1;
                            var n = this.i.length;
                            return this.i = this.i.filter((function(n) {
                                return n.startTime < e || n.endTime >= t
                            })), Ec(this, n > this.i.length), !0
                        }, i.isTextVisible = function() {
                            return this.j
                        }, i.setTextVisibility = function(e) {
                            this.j = e
                        }, F("shaka.text.UITextDisplayer", Sc), Sc.prototype.setTextVisibility = Sc.prototype.setTextVisibility, Sc.prototype.isTextVisible = Sc.prototype.isTextVisible, Sc.prototype.remove = Sc.prototype.remove, Sc.prototype.destroy = Sc.prototype.destroy, Sc.prototype.append = Sc.prototype.append, F("shaka.text.WebVttGenerator", (function() {})), Mc.prototype.configure = function(e) {
                            this.g = e
                        };
                        var Lc = "m",
                            Nc = "a",
                            jc = "v",
                            Oc = "av",
                            Uc = "i",
                            Bc = "c",
                            Fc = "tt";

                        function Hc() {}

                        function Vc(e, t, n, i, r) {
                            var a, o = r in i,
                                s = !0;
                            for (a in t) {
                                var u = r + "." + a,
                                    l = o ? i[r] : n[a];
                                o || a in n ? void 0 === t[a] ? void 0 === l || o ? delete e[a] : e[a] = Sa(l) : l.constructor == Object && t[a] && t[a].constructor == Object ? (e[a] || (e[a] = Sa(l)), u = Vc(e[a], t[a], l, i, u), s = s && u) : typeof t[a] != typeof l || null == t[a] || "function" != typeof t[a] && t[a].constructor != l.constructor ? (K("Invalid config, wrong type for " + u), s = !1) : ("function" == typeof n[a] && n[a].length != t[a].length && G("Unexpected number of arguments for " + u), e[a] = t[a]) : (K("Invalid config, unrecognized key " + u), s = !1)
                            }
                            return s
                        }

                        function zc(e, t) {
                            for (var n = {}, i = n, r = 0, a = 0; !(0 > (r = e.indexOf(".", r)));) 0 != r && "\\" == e[r - 1] || (i[a = e.substring(a, r).replace(/\\\./g, ".")] = {}, i = i[a], a = r + 1), r += 1;
                            return i[e.substring(a).replace(/\\\./g, ".")] = t, n
                        }

                        function qc(e, t) {
                            return e && t
                        }

                        function Kc() {}

                        function Gc(e) {
                            return new Ne(e = Di(e)).Da
                        }

                        function Wc(e, t, n) {
                            function i(e) {
                                re(a).setUint32(o, e.byteLength, !0), o += 4, a.set(ie(e), o), o += e.byteLength
                            }
                            if (!n || !n.byteLength) throw new Ye(2, 6, 6015);
                            var r;
                            r = "string" == typeof t ? _i(t, !0) : t, e = _i(e = Di(e), !0);
                            var a = new Uint8Array(12 + e.byteLength + r.byteLength + n.byteLength),
                                o = 0;
                            return i(e), i(r), i(n), a
                        }

                        function Xc(e, t, n) {
                            return "skd" !== t ? e : (t = n.serverCertificate, Wc(e, n = Di(e).split("skd://").pop(), t))
                        }

                        function Yc(e, t) {
                            2 === e && (t.headers["Content-Type"] = "application/octet-stream")
                        }

                        function Jc() {}

                        function $c() {
                            var t = 1 / 0;
                            navigator.connection && navigator.connection.saveData && (t = 360);
                            var n = {
                                    retryParameters: {
                                        maxAttempts: 2,
                                        baseDelay: 1e3,
                                        backoffFactor: 2,
                                        fuzzFactor: .5,
                                        timeout: 3e4,
                                        stallTimeout: 5e3,
                                        connectionTimeout: 1e4
                                    },
                                    servers: {},
                                    clearKeys: {},
                                    advanced: {},
                                    delayLicenseRequestUntilPlayed: !1,
                                    persistentSessionOnlinePlayback: !1,
                                    persistentSessionsMetadata: [],
                                    initDataTransform: function(t, n, i) {
                                        return e.shakaMediaKeysPolyfill && "skd" == n && (n = i.serverCertificate, t = Wc(t, i = Gc(t), n)), t
                                    },
                                    logLicenseExchange: !1,
                                    updateExpirationTime: 1,
                                    preferredKeySystems: [],
                                    keySystemsMapping: {},
                                    parseInbandPsshEnabled: jt(),
                                    minHdcpVersion: ""
                                },
                                i = {
                                    retryParameters: {
                                        maxAttempts: 2,
                                        baseDelay: 1e3,
                                        backoffFactor: 2,
                                        fuzzFactor: .5,
                                        timeout: 3e4,
                                        stallTimeout: 5e3,
                                        connectionTimeout: 1e4
                                    },
                                    availabilityWindowOverride: NaN,
                                    disableAudio: !1,
                                    disableVideo: !1,
                                    disableText: !1,
                                    disableThumbnails: !1,
                                    defaultPresentationDelay: 0,
                                    segmentRelativeVttTiming: !1,
                                    raiseFatalErrorOnManifestUpdateRequestFailure: !1,
                                    dash: {
                                        clockSyncUri: "",
                                        ignoreDrmInfo: !1,
                                        disableXlinkProcessing: !1,
                                        xlinkFailGracefully: !1,
                                        ignoreMinBufferTime: !1,
                                        autoCorrectDrift: !0,
                                        initialSegmentLimit: 1e3,
                                        ignoreSuggestedPresentationDelay: !1,
                                        ignoreEmptyAdaptationSet: !1,
                                        ignoreMaxSegmentDuration: !1,
                                        keySystemsByURI: {
                                            "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
                                            "urn:uuid:e2719d58-a985-b3c9-781a-b030af78d30e": "org.w3.clearkey",
                                            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
                                            "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
                                            "urn:uuid:79f0049a-4098-8642-ab92-e65be0885f95": "com.microsoft.playready",
                                            "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
                                        },
                                        manifestPreprocessor: function(e) {
                                            return qc([e], e)
                                        },
                                        sequenceMode: !1
                                    },
                                    hls: {
                                        ignoreTextStreamFailures: !1,
                                        ignoreImageStreamFailures: !1,
                                        defaultAudioCodec: "mp4a.40.2",
                                        defaultVideoCodec: "avc1.42E01E",
                                        ignoreManifestProgramDateTime: !1,
                                        mediaPlaylistFullMimeType: 'video/mp2t; codecs="avc1.42E01E, mp4a.40.2"',
                                        useSafariBehaviorForLive: !0,
                                        liveSegmentsDelay: 3,
                                        sequenceMode: !(Vt("Tizen 3") || Vt("Tizen 2") || Ut() || Ft()),
                                        ignoreManifestTimestampsInSegmentsMode: !1
                                    },
                                    mss: {
                                        manifestPreprocessor: function(e) {
                                            return qc([e], e)
                                        },
                                        sequenceMode: !1,
                                        keySystemsBySystemId: {
                                            "9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
                                            "79f0049a-4098-8642-ab92-e65be0885f95": "com.microsoft.playready"
                                        }
                                    }
                                },
                                r = {
                                    retryParameters: {
                                        maxAttempts: 2,
                                        baseDelay: 1e3,
                                        backoffFactor: 2,
                                        fuzzFactor: .5,
                                        timeout: 3e4,
                                        stallTimeout: 5e3,
                                        connectionTimeout: 1e4
                                    },
                                    failureCallback: function(e) {
                                        return qc([e])
                                    },
                                    rebufferingGoal: 2,
                                    bufferingGoal: 10,
                                    bufferBehind: 30,
                                    ignoreTextStreamFailures: !1,
                                    alwaysStreamText: !1,
                                    startAtSegmentBoundary: !1,
                                    gapDetectionThreshold: .5,
                                    gapJumpTimerTime: .25,
                                    durationBackoff: 1,
                                    safeSeekOffset: 5,
                                    stallEnabled: !0,
                                    stallThreshold: 1,
                                    stallSkip: .1,
                                    useNativeHlsOnSafari: !0,
                                    inaccurateManifestTolerance: 2,
                                    lowLatencyMode: !1,
                                    autoLowLatencyMode: !1,
                                    forceHTTPS: !1,
                                    preferNativeHls: !1,
                                    updateIntervalSeconds: 1,
                                    dispatchAllEmsgBoxes: !1,
                                    observeQualityChanges: !1,
                                    maxDisabledTime: 30,
                                    parsePrftBox: !1,
                                    segmentPrefetchLimit: 0,
                                    liveSync: !1,
                                    liveSyncMaxLatency: 1,
                                    liveSyncPlaybackRate: 1.1
                                };
                            (Vt("Web0S") || Ot() || Vt("CrKey")) && (r.stallSkip = 0);
                            var a = {
                                    trackSelectionCallback: function(e) {
                                        return _((function(t) {
                                            return t.return(e)
                                        }))
                                    },
                                    downloadSizeCallback: function(e) {
                                        var t;
                                        return _((function(n) {
                                            return 1 == n.g ? navigator.storage && navigator.storage.estimate ? x(n, navigator.storage.estimate(), 3) : n.return(!0) : (t = n.h, n.return(t.usage + e < .95 * t.quota))
                                        }))
                                    },
                                    progressCallback: function(e, t) {
                                        return qc([e, t])
                                    },
                                    usePersistentLicense: !0,
                                    numberOfParallelDownloads: 5
                                },
                                o = {
                                    drm: n,
                                    manifest: i,
                                    streaming: r,
                                    mediaSource: {
                                        sourceBufferExtraFeatures: "",
                                        forceTransmux: !1,
                                        insertFakeEncryptionInInit: !0
                                    },
                                    offline: a,
                                    abrFactory: function() {
                                        return new Cn
                                    },
                                    abr: {
                                        enabled: !0,
                                        useNetworkInformation: !0,
                                        defaultBandwidthEstimate: 1e6,
                                        switchInterval: 8,
                                        bandwidthUpgradeTarget: .85,
                                        bandwidthDowngradeTarget: .95,
                                        restrictions: {
                                            minWidth: 0,
                                            maxWidth: 1 / 0,
                                            minHeight: 0,
                                            maxHeight: t,
                                            minPixels: 0,
                                            maxPixels: 1 / 0,
                                            minFrameRate: 0,
                                            maxFrameRate: 1 / 0,
                                            minBandwidth: 0,
                                            maxBandwidth: 1 / 0
                                        },
                                        advanced: {
                                            minTotalBytes: 128e3,
                                            minBytes: 16e3,
                                            fastHalfLife: 2,
                                            slowHalfLife: 5
                                        },
                                        restrictToElementSize: !1,
                                        restrictToScreenSize: !1,
                                        ignoreDevicePixelRatio: !1,
                                        clearBufferSwitch: !1,
                                        safeMarginSwitch: 0
                                    },
                                    autoShowText: 3,
                                    preferredAudioLanguage: "",
                                    preferredAudioLabel: "",
                                    preferredTextLanguage: "",
                                    preferredVariantRole: "",
                                    preferredTextRole: "",
                                    preferredAudioChannelCount: 2,
                                    preferredVideoHdrLevel: "AUTO",
                                    preferredVideoCodecs: [],
                                    preferredAudioCodecs: [],
                                    preferForcedSubs: !1,
                                    preferredDecodingAttributes: [],
                                    restrictions: {
                                        minWidth: 0,
                                        maxWidth: 1 / 0,
                                        minHeight: 0,
                                        maxHeight: 1 / 0,
                                        minPixels: 0,
                                        maxPixels: 1 / 0,
                                        minFrameRate: 0,
                                        maxFrameRate: 1 / 0,
                                        minBandwidth: 0,
                                        maxBandwidth: 1 / 0
                                    },
                                    playRangeStart: 0,
                                    playRangeEnd: 1 / 0,
                                    textDisplayFactory: function() {
                                        return null
                                    },
                                    cmcd: {
                                        enabled: !1,
                                        sessionId: "",
                                        contentId: "",
                                        useHeaders: !1
                                    },
                                    lcevc: {
                                        enabled: !1,
                                        dynamicPerformanceScaling: !0,
                                        logLevel: 0,
                                        drawLogo: !1
                                    },
                                    ads: {
                                        customPlayheadTracker: !1
                                    }
                                };
                            return a.trackSelectionCallback = function(e) {
                                return _((function(t) {
                                    return t.return(function(e, t) {
                                        var n = e.filter((function(e) {
                                                return "variant" == e.type
                                            })),
                                            i = [],
                                            r = It(t, n.map((function(e) {
                                                return e.language
                                            })));
                                        r && (i = n.filter((function(e) {
                                            return At(e.language) == r
                                        }))), 0 == i.length && (i = n.filter((function(e) {
                                            return e.primary
                                        }))), 0 == i.length && (n.map((function(e) {
                                            return e.language
                                        })), i = n);
                                        var a = i.filter((function(e) {
                                            return e.height && 480 >= e.height
                                        }));
                                        for (a.length && (a.sort((function(e, t) {
                                                return t.height - e.height
                                            })), i = a.filter((function(e) {
                                                return e.height == a[0].height
                                            }))), t = [], i.length && (n = Math.floor(i.length / 2), i.sort((function(e, t) {
                                                return e.bandwidth - t.bandwidth
                                            })), t.push(i[n])), e = c(e), i = e.next(); !i.done; i = e.next())(i = i.value).type != rt && "image" != i.type || t.push(i);
                                        return t
                                    }(e, o.preferredAudioLanguage))
                                }))
                            }, o
                        }

                        function Qc(e, t, n) {
                            var i = {
                                ".drm.keySystemsMapping": "",
                                ".drm.servers": "",
                                ".drm.clearKeys": "",
                                ".drm.advanced": {
                                    distinctiveIdentifierRequired: !1,
                                    persistentStateRequired: !1,
                                    videoRobustness: "",
                                    audioRobustness: "",
                                    sessionType: "",
                                    serverCertificate: new Uint8Array(0),
                                    serverCertificateUri: "",
                                    individualizationServer: ""
                                }
                            };
                            return Vc(e, t, n || $c(), i, "")
                        }

                        function Zc() {
                            this.g = null, this.h = []
                        }

                        function ed(e, t) {
                            if (null == e.g) e.g = {
                                timestamp: Date.now() / 1e3,
                                state: t,
                                duration: 0
                            };
                            else {
                                var n = Date.now() / 1e3;
                                e.g.duration = n - e.g.timestamp, e.g.state != t && (e.h.push(e.g), e.g = {
                                    timestamp: n,
                                    state: t,
                                    duration: 0
                                })
                            }
                        }

                        function td(e, t) {
                            var n = 0;
                            e.g && e.g.state == t && (n += e.g.duration);
                            for (var i = (e = c(e.h)).next(); !i.done; i = e.next()) n += (i = i.value).state == t ? i.duration : 0;
                            return n
                        }

                        function nd() {
                            this.i = this.h = null, this.g = []
                        }

                        function id(e, t, n) {
                            e.i != t && (e.i = t, e.g.push({
                                timestamp: Date.now() / 1e3,
                                id: t.id,
                                type: "text",
                                fromAdaptation: n,
                                bandwidth: null
                            }))
                        }

                        function rd() {
                            this.u = this.A = this.F = this.C = this.s = this.j = this.D = this.m = this.i = this.O = this.P = this.I = this.K = this.L = this.l = this.o = NaN, this.g = new Zc, this.h = new nd
                        }

                        function ad(t, n) {
                            Ta.call(this);
                            var i = this;
                            this.l = nh, this.Dc = this.h = null, this.ha = !1, this.Nc = new Co, this.Wb = new Co, this.o = new Co, this.Qb = this.i = this.Oc = this.K = this.j = this.fb = this.L = this.Ne = this.W = this.gb = this.O = this.Kc = this.I = this.Bb = this.A = this.D = this.m = this.F = null, this.bc = !1, this.ud = this.s = null, this.Od = 1e9, this.g = Td(this), this.Ld = {
                                width: 1 / 0,
                                height: 1 / 0
                            }, this.u = null, this.yb = new zs(this.g.preferredAudioLanguage, this.g.preferredVariantRole, this.g.preferredAudioChannelCount, this.g.preferredVideoHdrLevel), this.zb = this.g.preferredTextLanguage, this.ac = this.g.preferredTextRole, this.Zb = this.g.preferForcedSubs, this.Yb = [], this.cc = null, n && n(this), this.W = function(e) {
                                return new Mc({
                                    getBandwidthEstimate: function() {
                                        return e.s ? e.s.getBandwidthEstimate() : NaN
                                    },
                                    Ma: function() {
                                        return e.Ma()
                                    },
                                    getCurrentTime: function() {
                                        return e.h ? e.h.currentTime : 0
                                    },
                                    Gc: function() {
                                        return e.Gc()
                                    },
                                    od: function() {
                                        return e.od()
                                    },
                                    Za: function() {
                                        return e.Za()
                                    },
                                    T: function() {
                                        return e.T()
                                    }
                                }, e.g.cmcd)
                            }(this), this.F = function(e) {
                                return new Ca((function(t, n) {
                                    e.s && e.s.segmentDownloaded(t, n)
                                }), (function(t, n, i) {
                                    t = (new Map).set("headers", t).set("request", n).set("requestType", i), e.dispatchEvent(sd("downloadheadersreceived", t))
                                }), (function(t, n, i, r) {
                                    t = (new Map).set("request", t).set("error", n).set("httpResponseCode", i).set("aborted", r), e.dispatchEvent(sd("downloadfailed", t))
                                }), (function(t, n, i) {
                                    var r = e.W;
                                    if (i = void 0 === i ? {} : i, r.g.enabled)
                                        if ("HEAD" === n.method) Rc(r, n);
                                        else switch (t) {
                                            case 0:
                                                try {
                                                    if (r.g.enabled) {
                                                        if (i.type) {
                                                            e: {
                                                                switch (i.type) {
                                                                    case 4:
                                                                        var a = "d";
                                                                        break e;
                                                                    case 3:
                                                                    case 2:
                                                                        a = "h";
                                                                        break e;
                                                                    case 5:
                                                                        a = "s";
                                                                        break e
                                                                }
                                                                a = void 0
                                                            }
                                                            r.o = a
                                                        }
                                                        Rc(r, n, {
                                                            ot: Lc,
                                                            su: !r.i
                                                        })
                                                    }
                                                } catch (d) {
                                                    W("CMCD_MANIFEST_ERROR", "Could not generate manifest CMCD data.", d)
                                                }
                                                break;
                                            case Pa:
                                                t = i;
                                                try {
                                                    if (r.g.enabled) {
                                                        var o = t.segment;
                                                        a = 0, o && (a = o.endTime - o.startTime);
                                                        var s = {
                                                            d: 1e3 * a,
                                                            st: r.h.T() ? "l" : "v"
                                                        };
                                                        s.ot = function(e) {
                                                            if (0 === e.type) return Uc;
                                                            if (e = e.stream) {
                                                                var t = e.type;
                                                                if ("video" == t) return e.codecs && e.codecs.includes(",") ? Oc : jc;
                                                                if ("audio" == t) return Nc;
                                                                if ("text" == t) return "application/mp4" === e.mimeType ? Fc : Bc
                                                            }
                                                        }(t);
                                                        var u = s.ot === jc || s.ot === Nc || s.ot === Oc || s.ot === Fc,
                                                            l = t.stream;
                                                        l && (u && (s.bl = function(e, t) {
                                                            if (!(t = e.h.Ma()[t]).length) return NaN;
                                                            var n = e.h.getCurrentTime();
                                                            return (e = t.find((function(e) {
                                                                return e.start <= n && e.end >= n
                                                            }))) ? 1e3 * (e.end - n) : NaN
                                                        }(r, l.type)), l.bandwidth && (s.br = l.bandwidth / 1e3)), u && s.ot !== Fc && (s.tb = function(e, t) {
                                                            var n = e.h.Za();
                                                            if (!n.length) return NaN;
                                                            e = n[0];
                                                            for (var i = (n = c(n)).next(); !i.done; i = n.next()) "variant" === (i = i.value).type && i.bandwidth > e.bandwidth && (e = i);
                                                            switch (t) {
                                                                case jc:
                                                                    return e.videoBandwidth || NaN;
                                                                case Nc:
                                                                    return e.audioBandwidth || NaN;
                                                                default:
                                                                    return e.bandwidth
                                                            }
                                                        }(r, s.ot) / 1e3), Rc(r, n, s)
                                                    }
                                                } catch (d) {
                                                    W("CMCD_SEGMENT_ERROR", "Could not generate segment CMCD data.", d)
                                                }
                                                break;
                                            case 2:
                                            case 5:
                                            case 6:
                                                Rc(r, n, {
                                                    ot: "k"
                                                });
                                                break;
                                            case 4:
                                                Rc(r, n, {
                                                    ot: "o"
                                                })
                                        }
                                }))
                            }(this), this.F.Vd(this.g.streaming.forceHTTPS), this.C = null, uh && (this.C = uh()), this.Nc.J(e, "online", (function() {
                                Bd(i), i.Rd()
                            })), this.P = {
                                name: "detach"
                            }, this.Z = {
                                name: "attach"
                            }, this.ja = {
                                name: "unload"
                            }, this.Pd = {
                                name: "manifest-parser"
                            }, this.Id = {
                                name: "manifest"
                            }, this.Ab = {
                                name: "media-source"
                            }, this.Bd = {
                                name: "drm-engine"
                            }, this.ca = {
                                name: "load"
                            }, this.Sd = {
                                name: "src-equals-drm-engine"
                            }, this.Cb = {
                                name: "src-equals"
                            };
                            var r = new Map;
                            r.set(this.Z, (function(e, t) {
                                return ba(function(e, t, n) {
                                    return null == t.mediaElement && (t.mediaElement = n.mediaElement, e.Wb.J(t.mediaElement, "error", (function() {
                                        var t = Vd(e);
                                        t && Fd(e, t)
                                    }))), e.h = t.mediaElement, Promise.resolve()
                                }(i, e, t))
                            })), r.set(this.P, (function(e) {
                                return e.mediaElement && (i.Wb.Nb(), e.mediaElement = null), i.C && i.C.release(), i.h = null, ba(e = Promise.resolve())
                            })), r.set(this.ja, (function(e) {
                                return ba(ud(i, e))
                            })), r.set(this.Ab, (function(e) {
                                return e = function(e, t) {
                                    var n, i, r, a, o;
                                    return _((function(s) {
                                        if (1 == s.g) return n = e.g.textDisplayFactory, i = n(), e.Ed = n, r = function(e, t, n, i) {
                                            return new ou(e, t, n, i)
                                        }(t.mediaElement, i, (function(t, n, i) {
                                            ld(e, t, n, i)
                                        }), e.L), r.configure(e.g.mediaSource), a = e.g.manifest, o = a.segmentRelativeVttTiming, r.O = o, x(s, r.F, 2);
                                        e.D = r, T(s)
                                    }))
                                }(i, e), ba(e)
                            })), r.set(this.Pd, (function(e, t) {
                                return e = function(e, t, n) {
                                    var i, r, a, o;
                                    return _((function(s) {
                                        if (1 == s.g) return t.mimeType = n.mimeType, t.uri = n.uri, i = t.uri, r = e.F, e.Qb = i, a = e, x(s, function(e, t, n, i) {
                                            var r, a, o, s;
                                            return _((function(u) {
                                                if (1 == u.g) return i && (r = xo[i.toLowerCase()]) ? u.return(r) : (a = wo(e)) && (o = To[a]) ? u.return(o) : i ? u.B(2) : x(u, bo(e, t, n), 3);
                                                if (2 != u.g && (i = u.h) && (s = xo[i])) return u.return(s);
                                                throw new Ye(2, 4, 4e3, e)
                                            }))
                                        }(i, r, e.g.manifest.retryParameters, t.mimeType), 2);
                                        a.Oc = s.h, e.K = e.Oc(), o = Sa(e.g.manifest), n.mediaElement && "AUDIO" === n.mediaElement.nodeName && (o.disableVideo = !0), e.K.configure(o), T(s)
                                    }))
                                }(i, e, t), ba(e)
                            })), r.set(this.Id, (function(e) {
                                return function(e, t) {
                                    var n = t.uri;
                                    t = e.F, e.gb = new Gu((function() {
                                        return e.Ob()
                                    })), e.gb.addEventListener("regionadd", (function(t) {
                                        t = t.region, Hd(e, "timelineregionadded", t), e.C && e.C.onDashTimedMetadata(t)
                                    })), e.fb = null, e.g.streaming.observeQualityChanges && (e.fb = new Ku((function() {
                                        return e.Ma()
                                    })), e.fb.addEventListener("qualitychange", (function(t) {
                                        var n = t.quality;
                                        t = t.position, n = (new Map).set("mediaQuality", {
                                            bandwidth: n.bandwidth,
                                            audioSamplingRate: n.audioSamplingRate,
                                            codecs: n.codecs,
                                            contentType: n.contentType,
                                            frameRate: n.frameRate,
                                            height: n.height,
                                            mimeType: n.mimeType,
                                            channelsCount: n.channelsCount,
                                            pixelAspectRatio: n.pixelAspectRatio,
                                            width: n.width
                                        }).set("position", t), e.dispatchEvent(sd("mediaqualitychanged", n))
                                    })));
                                    var i = {
                                            networkingEngine: t,
                                            filter: function(t) {
                                                return Sd(e, t)
                                            },
                                            makeTextStreamsForClosedCaptions: function(t) {
                                                return function(e, t) {
                                                    for (var n = new Set, i = c(t.textStreams), r = i.next(); !r.done; r = i.next()) "application/cea-608" != (r = r.value).mimeType && "application/cea-708" != r.mimeType || n.add(r.originalId);
                                                    for (i = c(t.variants), r = i.next(); !r.done; r = i.next())
                                                        if ((r = r.value.video) && r.closedCaptions)
                                                            for (var a = c(r.closedCaptions.keys()), o = a.next(); !o.done; o = a.next())
                                                                if (o = o.value, !n.has(o)) {
                                                                    var s = o.startsWith("CC") ? "application/cea-608" : "application/cea-708",
                                                                        u = new Ya,
                                                                        l = r.closedCaptions.get(o);
                                                                    s = {
                                                                        id: e.Od++,
                                                                        originalId: o,
                                                                        createSegmentIndex: function() {
                                                                            return Promise.resolve()
                                                                        },
                                                                        segmentIndex: u,
                                                                        mimeType: s,
                                                                        codecs: "",
                                                                        kind: "caption",
                                                                        encrypted: !1,
                                                                        drmInfos: [],
                                                                        keyIds: new Set,
                                                                        language: l,
                                                                        originalLanguage: l,
                                                                        label: null,
                                                                        type: rt,
                                                                        primary: !1,
                                                                        trickModeVideo: null,
                                                                        emsgSchemeIdUris: null,
                                                                        roles: r.roles,
                                                                        forced: !1,
                                                                        channelsCount: null,
                                                                        audioSamplingRate: null,
                                                                        spatialAudio: !1,
                                                                        closedCaptions: null,
                                                                        accessibilityPurpose: null,
                                                                        external: !1
                                                                    }, t.textStreams.push(s), n.add(o)
                                                                }
                                                }(e, t)
                                            },
                                            onTimelineRegionAdded: function(t) {
                                                var n = e.gb;
                                                e: {
                                                    for (var i = c(n.g), r = i.next(); !r.done; r = i.next())
                                                        if ((r = r.value).schemeIdUri == t.schemeIdUri && r.id == t.id && r.startTime == t.startTime && r.endTime == t.endTime) {
                                                            i = r;
                                                            break e
                                                        }
                                                    i = null
                                                }
                                                null == i && (n.g.add(t), t = new xa("regionadd", new Map([
                                                    ["region", t]
                                                ])), n.dispatchEvent(t))
                                            },
                                            onEvent: function(t) {
                                                return e.dispatchEvent(t)
                                            },
                                            onError: function(t) {
                                                return Fd(e, t)
                                            },
                                            isLowLatencyMode: function() {
                                                return e.g.streaming.lowLatencyMode
                                            },
                                            isAutoLowLatencyMode: function() {
                                                return e.g.streaming.autoLowLatencyMode
                                            },
                                            enableLowLatencyMode: function() {
                                                e.configure("streaming.lowLatencyMode", !0)
                                            },
                                            updateDuration: function() {
                                                e.j && e.j.updateDuration()
                                            },
                                            newDrmInfo: function(t) {
                                                var n = e.m ? e.m.g : null;
                                                n && e.m.s && kd(e, n.keySystem, t)
                                            }
                                        },
                                        r = Date.now() / 1e3;
                                    return new ga(function() {
                                        var t, a, o, s;
                                        return _((function(u) {
                                            if (1 == u.g) return t = e, x(u, e.K.start(n, i), 2);
                                            if (t.i = u.h, a = sd("manifestparsed"), e.dispatchEvent(a), 0 == e.i.variants.length) throw new Ye(2, 4, 4036);
                                            ! function(e) {
                                                function t(e) {
                                                    return e.video && e.audio || e.video && e.video.codecs.includes(",")
                                                }
                                                e.variants.some(t) && (e.variants = e.variants.filter(t))
                                            }(e.i), o = Date.now() / 1e3, s = o - r, e.u.D = s, T(u)
                                        }))
                                    }(), (function() {
                                        return e.K.stop()
                                    }))
                                }(i, e)
                            })), r.set(this.Bd, (function(e) {
                                return e = function(e, t) {
                                    var n, i;
                                    return _((function(r) {
                                        return 1 == r.g ? (n = Date.now() / 1e3, i = !0, e.m = hd(e, {
                                            mc: e.F,
                                            onError: function(t) {
                                                Fd(e, t)
                                            },
                                            ze: function(t) {
                                                zd(e, t)
                                            },
                                            onExpirationUpdated: function(t, n) {
                                                qd(e, t, n)
                                            },
                                            onEvent: function(t) {
                                                e.dispatchEvent(t), "drmsessionupdate" == t.type && i && (i = !1, e.u.j = Date.now() / 1e3 - n, e.L && ((t = e.L).g && t.h.classList.add("shaka-hidden")))
                                            }
                                        }), e.m.configure(e.g.drm), x(r, Lo(e.m, e.i.variants, e.i.offlineSessionIds), 2)) : 3 != r.g ? x(r, e.m.Xb(t.mediaElement), 3) : x(r, Sd(e, e.i), 0)
                                    }))
                                }(i, e), ba(e)
                            })), r.set(this.ca, (function(e, t) {
                                return ba(function(e, t, n) {
                                    var i, r, a, o, s, u, l, d, h, f, p, g, m, v, y, b, w;
                                    return _((function(S) {
                                        switch (S.g) {
                                            case 1:
                                                for (t.startTime = n.startTime, null != e.cc && (t.startTime = e.cc, e.cc = null), i = t.mediaElement, r = t.uri, e.Qb = r, e.I = new Cu({
                                                        Ic: function() {
                                                            return i.playbackRate
                                                        },
                                                        Ec: function() {
                                                            return i.defaultPlaybackRate
                                                        },
                                                        Wd: function(e) {
                                                            i.playbackRate = e
                                                        },
                                                        we: function(e) {
                                                            i.currentTime += e
                                                        }
                                                    }), a = function() {
                                                        return Id(e)
                                                    }, o = function() {
                                                        return Cd(e)
                                                    }, e.o.J(i, "playing", a), e.o.J(i, "pause", a), e.o.J(i, "ended", a), e.o.J(i, "ratechange", o), function(e, t) {
                                                        if (t.lcevc.enabled) {
                                                            var n = e.Za();
                                                            n && n[0] && n[0].videoMimeType == lh.ts && (Nt() || navigator.userAgent.match(/Edge\//)) && (t.mediaSource.forceTransmux || G("LCEVC Warning: For MPEG-2 TS decoding the config.mediaSource.forceTransmux must be enabled.")), od(e), null == e.L && (e.L = new Ps(e.h, e.Ne, t.lcevc), e.D && (e.D.L = e.L))
                                                        } else od(e)
                                                    }(e, e.g), s = e.g.abrFactory, e.s && e.ud == s || (e.ud = s, e.s = s(), "function" != typeof e.s.setMediaElement && (or("AbrManager", "Please use an AbrManager with setMediaElement function."), e.s.setMediaElement = function() {}), e.s.configure(e.g.abr)), e.yb = new zs(e.g.preferredAudioLanguage, e.g.preferredVariantRole, e.g.preferredAudioChannelCount, e.g.preferredVideoHdrLevel, e.g.preferredAudioLabel), e.zb = e.g.preferredTextLanguage, e.ac = e.g.preferredTextRole, e.Zb = e.g.preferForcedSubs, Kd(e.i.presentationTimeline, e.g.playRangeStart, e.g.playRangeEnd), e.s.init((function(t, n, i) {
                                                        e.j && t != e.j.j && _d(e, t, !0, void 0 !== n && n, void 0 === i ? 0 : i)
                                                    })), e.s.setMediaElement(i), Wt(e.i, e.g.preferredVideoCodecs, e.g.preferredAudioCodecs, e.g.preferredAudioChannelCount, e.g.preferredDecodingAttributes), e.j = function(e) {
                                                        return new il(e.i, {
                                                            Hc: function() {
                                                                return e.A ? e.A.yc() : 0
                                                            },
                                                            getBandwidthEstimate: function() {
                                                                return e.s.getBandwidthEstimate()
                                                            },
                                                            N: e.D,
                                                            mc: e.F,
                                                            onError: function(t) {
                                                                return Fd(e, t)
                                                            },
                                                            onEvent: function(t) {
                                                                return e.dispatchEvent(t)
                                                            },
                                                            Rf: function() {
                                                                e.K && e.K.update && e.K.update()
                                                            },
                                                            Kd: function(t, n, i) {
                                                                e.A && e.A.xe(), pd(e), t = (new Map).set("start", t).set("end", n).set("contentType", i), e.dispatchEvent(sd("segmentappended", t))
                                                            },
                                                            Qf: function(t, n) {
                                                                (n = n.Cd) && e.fb && function(e, t, n) {
                                                                    var i = function(e, t) {
                                                                        var n = e.g.get(t);
                                                                        return n || (n = {
                                                                            oc: [],
                                                                            je: null,
                                                                            contentType: t
                                                                        }, e.g.set(t, n)), n
                                                                    }(e, t.contentType);
                                                                    ! function(e, t) {
                                                                        if ((e = e.h()[t.contentType]) && 0 < e.length) {
                                                                            var n = e[0].start,
                                                                                i = e[e.length - 1].end,
                                                                                r = t.oc;
                                                                            t.oc = r.filter((function(e, t) {
                                                                                return !(e.position <= n && t + 1 < r.length && r[t + 1].position <= n || e.position >= i)
                                                                            }))
                                                                        } else t.oc = []
                                                                    }(e, i), e = {
                                                                        Cd: t,
                                                                        position: n
                                                                    }, 0 <= (t = (i = i.oc).findIndex((function(e) {
                                                                        return e.position >= n
                                                                    }))) ? i.splice(t, i[t].position == n ? 1 : 0, e) : i.push(e)
                                                                }(e.fb, n, t)
                                                            },
                                                            fe: function(t, n) {
                                                                var i = e.m;
                                                                if (i.h.parseInbandPsshEnabled && !i.K && ["audio", "video"].includes(t)) {
                                                                    var r = 0,
                                                                        a = c((n = new Br(ie(n))).data);
                                                                    for (t = a.next(); !t.done; t = a.next()) r += t.value.length;
                                                                    if (0 == r) i = Promise.resolve();
                                                                    else {
                                                                        for (r = new Uint8Array(r), a = 0, t = (n = c(n.data)).next(); !t.done; t = n.next()) t = t.value, r.set(t, a), a += t.length;
                                                                        jo(i, "cenc", r), i = i.l
                                                                    }
                                                                } else i = Promise.resolve();
                                                                return i
                                                            },
                                                            Sf: function(t, n, i) {
                                                                ld(e, t, n, i)
                                                            },
                                                            kd: function(t, n) {
                                                                return e.kd(t, n)
                                                            }
                                                        })
                                                    }(e), e.j.configure(e.g.streaming), e.l = ih, i.textTracks && e.o.J(i.textTracks, "addtrack", (function(t) {
                                                        if (t.track && "chapters" === (t = t.track).kind) dd(e, t)
                                                    })), e.dispatchEvent(sd("streaming")), u = null, (l = e.j.j) || (u = Dd(e) ? e.s.chooseVariant() : null), d = [], f = c([(h = l || u).video, h.audio]), p = f.next(); !p.done; p = f.next())(g = p.value) && !g.segmentIndex && d.push(g.createSegmentIndex());
                                                if (!(0 < d.length)) {
                                                    S.B(2);
                                                    break
                                                }
                                                return x(S, Promise.all(d), 2);
                                            case 2:
                                                if (Kd(e.i.presentationTimeline, e.g.playRangeStart, e.g.playRangeEnd), e.A = function(e, t) {
                                                        return new Bu(e.h, e.i, e.g.streaming, t, (function() {
                                                            e.Bb && qu(e.Bb, !0), e.j && e.j.rc(), e.O && pd(e)
                                                        }), (function(t) {
                                                            return e.dispatchEvent(t)
                                                        }))
                                                    }(e, t.startTime), e.Bb = function(e, t) {
                                                        t = new Wu(e.gb, e.T() || 0 < t), t.addEventListener("enter", (function(t) {
                                                            Hd(e, "timelineregionenter", t.region)
                                                        })), t.addEventListener("exit", (function(t) {
                                                            Hd(e, "timelineregionexit", t.region)
                                                        })), t.addEventListener("skip", (function(t) {
                                                            var n = t.region;
                                                            t.seeking || (Hd(e, "timelineregionenter", n), Hd(e, "timelineregionexit", n))
                                                        }));
                                                        var n = new zu(e.h);
                                                        return n.g.add(t), e.fb && n.g.add(e.fb), n
                                                    }(e, t.Xc), m = Math.max(e.i.minBufferTime, e.g.streaming.rebufferingGoal), fd(e, m), l) {
                                                    S.B(4);
                                                    break
                                                }
                                                if (_d(e, u, !0, !1, 0), !e.g.streaming.startAtSegmentBoundary) {
                                                    S.B(4);
                                                    break
                                                }
                                                return v = e.A.yc(), x(S, function(e, t) {
                                                    var n, i, r, a, o;
                                                    return _((function(s) {
                                                        return 1 == s.g ? (n = e.audio, i = e.video, r = function(e, t) {
                                                            var n, i, r;
                                                            return _((function(a) {
                                                                return 1 == a.g ? e ? x(a, e.createSegmentIndex(), 2) : a.return(null) : (i = (n = e.segmentIndex.kb(t)) ? n.next().value : null) ? (r = i.startTime, a.return(r)) : a.return(null)
                                                            }))
                                                        }, x(s, r(n, t), 2)) : 3 != s.g ? (a = s.h, x(s, r(i, t), 3)) : null != (o = s.h) && null != a ? s.return(Math.max(o, a)) : null != o ? s.return(o) : null != a ? s.return(a) : s.return(t)
                                                    }))
                                                }(u, v), 6);
                                            case 6:
                                                y = S.h, e.A.hd(y);
                                            case 4:
                                                return e.A.gd(), e.Gb().find((function(e) {
                                                    return e.active
                                                })) || ((b = mn(e.i.textStreams, e.zb, e.ac, e.Zb)[0] || null) && id(e.u.h, b, !0), u && (b ? (u.audio && function(e, t, n) {
                                                    if (0 == e.g.autoShowText) return !1;
                                                    if (1 == e.g.autoShowText) return !0;
                                                    var i = At(e.g.preferredTextLanguage);
                                                    return n = At(n.language), 2 == e.g.autoShowText ? xt(n, i) : 3 == e.g.autoShowText ? (e = At(t.language), xt(n, i) && !xt(e, n)) : (G("Invalid autoShowText setting!"), !1)
                                                }(e, u.audio, b) && (e.ha = !0), e.ha && e.D.u.setTextVisibility(!0), Od(e)) : e.ha = !1), b && (e.g.streaming.alwaysStreamText || e.td()) && ol(e.j, b)), x(S, e.j.start(), 7);
                                            case 7:
                                                e.g.abr.enabled && (e.s.enable(), Ud(e)), an(e.j ? e.j.j : null, e.i), Wd(e.i), Ld(e), Dd(e), e.i.variants.some((function(e) {
                                                    return e.primary
                                                })), e.T() && (e.g.streaming.liveSync || e.i.serviceDescription) && (w = function() {
                                                    return Md(e)
                                                }, e.o.J(i, "timeupdate", w)), e.bc = !0, e.o.oa(i, "loadedmetadata", (function() {
                                                    e.u.m = Date.now() / 1e3 - n.Xc
                                                })), T(S)
                                        }
                                    }))
                                }(i, e, t))
                            })), r.set(this.Sd, (function(e, t) {
                                return e = function(e, t, n) {
                                    var i, r, a, o, s, u, l;
                                    return _((function(c) {
                                        return 1 == c.g ? (i = at, r = Date.now() / 1e3, a = !0, e.m = hd(e, {
                                            mc: e.F,
                                            onError: function(t) {
                                                Fd(e, t)
                                            },
                                            ze: function(t) {
                                                zd(e, t)
                                            },
                                            onExpirationUpdated: function(t, n) {
                                                qd(e, t, n)
                                            },
                                            onEvent: function(t) {
                                                e.dispatchEvent(t), "drmsessionupdate" == t.type && a && (a = !1, e.u.j = Date.now() / 1e3 - r)
                                            }
                                        }), e.m.configure(e.g.drm), o = n.uri || "", s = wo(o), "application/x-mpegurl" == (u = lh[s]) && Bt() && (u = "application/vnd.apple.mpegurl"), u || (u = "video/mp4"), l = {
                                            id: 0,
                                            language: "und",
                                            disabledUntilTime: 0,
                                            primary: !1,
                                            audio: null,
                                            video: {
                                                id: 0,
                                                originalId: null,
                                                createSegmentIndex: function() {
                                                    return Promise.resolve()
                                                },
                                                segmentIndex: null,
                                                mimeType: n.mimeType ? n.mimeType.split(";")[0] : u,
                                                codecs: n.mimeType ? ht(n.mimeType) : "",
                                                encrypted: !0,
                                                drmInfos: [],
                                                keyIds: new Set,
                                                language: "und",
                                                originalLanguage: null,
                                                label: null,
                                                type: i.Aa,
                                                primary: !1,
                                                trickModeVideo: null,
                                                emsgSchemeIdUris: null,
                                                roles: [],
                                                forced: !1,
                                                channelsCount: null,
                                                audioSamplingRate: null,
                                                spatialAudio: !1,
                                                closedCaptions: null,
                                                accessibilityPurpose: null,
                                                external: !1
                                            },
                                            bandwidth: 100,
                                            allowedByApplication: !0,
                                            allowedByKeySystem: !0,
                                            decodingInfos: []
                                        }, e.m.Z = !0, x(c, Lo(e.m, [l], []), 2)) : x(c, e.m.Xb(t.mediaElement), 0)
                                    }))
                                }(i, e, t), ba(e)
                            })), r.set(this.Cb, (function(e, t) {
                                return function(e, t, n) {
                                    function i() {
                                        return Id(e)
                                    }
                                    t.uri = n.uri, t.startTime = n.startTime, e.Qb = t.uri;
                                    var r = t.mediaElement;
                                    e.A = new Uu(r);
                                    var a = !1;
                                    e.Yb.push((function() {
                                        a = !0
                                    })), null != t.startTime && e.A.hd(t.startTime), e.I = new Cu({
                                        Ic: function() {
                                            return r.playbackRate
                                        },
                                        Ec: function() {
                                            return r.defaultPlaybackRate
                                        },
                                        Wd: function(e) {
                                            r.playbackRate = e
                                        },
                                        we: function(e) {
                                            r.currentTime += e
                                        }
                                    }), fd(e, e.g.streaming.rebufferingGoal), e.o.J(r, "playing", i), e.o.J(r, "pause", i), e.o.J(r, "ended", i), e.o.J(r, "ratechange", (function() {
                                        return Cd(e)
                                    })), "none" != r.preload && e.o.oa(r, "loadedmetadata", (function() {
                                        e.u.m = Date.now() / 1e3 - n.Xc
                                    })), r.audioTracks && (e.o.J(r.audioTracks, "addtrack", (function() {
                                        return Ld(e)
                                    })), e.o.J(r.audioTracks, "removetrack", (function() {
                                        return Ld(e)
                                    })), e.o.J(r.audioTracks, "change", (function() {
                                        return Ld(e)
                                    }))), r.textTracks && (e.o.J(r.textTracks, "addtrack", (function(t) {
                                        if (t.track) switch (t = t.track, t.kind) {
                                            case "metadata":
                                                ! function(e, t) {
                                                    if ("metadata" == t.kind) {
                                                        t.mode = "hidden", e.o.J(t, "cuechange", (function() {
                                                            if (t.activeCues)
                                                                for (var n = c(t.activeCues), i = n.next(); !i.done; i = n.next()) i = i.value, cd(e, i.startTime, i.endTime, i.type, i.value), e.C && e.C.onCueMetadataChange(i.value)
                                                        }));
                                                        var n = new _t((function() {
                                                            for (var t = function(e) {
                                                                    return Array.from(e.h.textTracks).filter((function(e) {
                                                                        return "metadata" == e.kind
                                                                    }))
                                                                }(e), n = (t = c(t)).next(); !n.done; n = t.next()) n.value.mode = "hidden"
                                                        })).Zd().V(.5);
                                                        e.Yb.push((function() {
                                                            n.stop()
                                                        }))
                                                    }
                                                }(e, t);
                                                break;
                                            case "chapters":
                                                dd(e, t);
                                                break;
                                            default:
                                                Ld(e)
                                        }
                                    })), e.o.J(r.textTracks, "removetrack", (function() {
                                        return Ld(e)
                                    })), e.o.J(r.textTracks, "change", (function() {
                                        return Ld(e)
                                    })));
                                    var o = wo(t.uri);
                                    r.src = function(e, t, n) {
                                        try {
                                            if (!e.g.enabled) return t;
                                            var i = Dc(e);
                                            e: {
                                                switch (n) {
                                                    case "video/webm":
                                                    case "video/mp4":
                                                        var r = Oc;
                                                        break e;
                                                    case "application/x-mpegurl":
                                                        r = Lc;
                                                        break e
                                                }
                                                r = void 0
                                            }
                                            return i.ot = r, i.su = !0, Pc(t, _c(i))
                                        } catch (o) {
                                            return W("CMCD_SRC_ERROR", "Could not generate src CMCD data.", o), t
                                        }
                                    }(e.W, t.uri, lh[o]), (Ot() || Vt("Web0S")) && r.load(), e.l = rh, e.dispatchEvent(sd("streaming"));
                                    var s = new pa;
                                    return Mu(r, HTMLMediaElement.HAVE_METADATA, e.o, (function() {
                                        e.A.gd(), s.resolve()
                                    })), Mu(r, HTMLMediaElement.HAVE_CURRENT_DATA, e.o, (function() {
                                        var t;
                                        return _((function(n) {
                                            return 1 == n.g ? (function(e) {
                                                var t = e.g.preferredAudioLanguage;
                                                "" != t && e.De(t, e.g.preferredVariantRole)
                                            }(e), (t = md(e)).find((function(e) {
                                                return "disabled" != e.mode
                                            })) ? (0 < t.length && (e.ha = !0), n.B(2)) : x(n, new Promise((function(t) {
                                                e.o.oa(r.textTracks, "change", t), new _t(t).V(1)
                                            })), 2)) : a ? n.return() : (function(e) {
                                                var t = e.g.preferredTextLanguage;
                                                "" != t && e.Ee(t, e.g.preferredTextRole, e.g.preferForcedSubs)
                                            }(e), void T(n))
                                        }))
                                    })), r.error ? s.reject(Vd(e)) : "none" == r.preload && (G('With <video preload="none">, the browser will not load anything until play() is called. We are unable to measure load latency in a meaningful way, and we cannot provide track info yet. Please do not use preload="none" with Shaka Player.'), s.resolve()), e.o.oa(r, "error", (function() {
                                        s.reject(Vd(e))
                                    })), new ga(s, (function() {
                                        return s.reject(new Ye(2, 7, 7001)), Promise.resolve()
                                    })).ka((function() {
                                        e.T() && e.g.streaming.liveSync && e.o.J(r, "timeupdate", (function() {
                                            return Md(e)
                                        })), e.bc = !0
                                    }))
                                }(i, e, t)
                            })), this.hb = new hc(this.P, {
                                rf: function(e, t, n, r) {
                                    var a = null;
                                    return e == i.P && (a = n == i.P ? i.P : i.Z), e == i.Z && (a = n == i.P || t.mediaElement != r.mediaElement ? i.P : n == i.Z ? i.Z : n == i.Ab || n == i.ca ? i.Ab : n == i.Cb ? i.Sd : null), e == i.Ab && (a = n == i.ca && t.mediaElement == r.mediaElement ? i.Pd : i.ja), e == i.Pd && (a = Qd(i.ca, i.Id, i.ja, n, t, r)), e == i.Id && (a = Qd(i.ca, i.Bd, i.ja, n, t, r)), e == i.Bd && (a = Qd(i.ca, i.ca, i.ja, n, t, r)), e == i.Sd && (a = n == i.Cb && t.mediaElement == r.mediaElement ? i.Cb : i.ja), e != i.ca && e != i.Cb || (a = i.ja), e == i.ja && (a = r.mediaElement && t.mediaElement == r.mediaElement ? i.Z : i.P), a
                                },
                                Ze: function(e, t, n) {
                                    return i.dispatchEvent(sd("onstatechange", (new Map).set("state", e.name))), r.get(e)(t, n)
                                },
                                handleError: function(e) {
                                    return _((function(t) {
                                        return 1 == t.g ? x(t, ud(i, e), 2) : t.return(e.mediaElement ? i.Z : i.P)
                                    }))
                                },
                                Pf: function(e) {
                                    i.dispatchEvent(sd("onstateidle", (new Map).set("state", e.name)))
                                }
                            }), this.Mc = new _t((function() {
                                return function(e) {
                                    function t(e) {
                                        var t = "";
                                        return e.video && (t += "video:" + e.video.id), e.audio && (t = t + (t ? "&" : "") + "audio:" + e.audio.id), t
                                    }
                                    for (var n = Date.now() / 1e3, i = !1, r = c(e.i.variants), a = r.next(); !a.done; a = r.next()) 0 < (a = a.value).disabledUntilTime && a.disabledUntilTime <= n && (a.disabledUntilTime = 0, i = !0, t(a));
                                    e.i.variants.every((function(e) {
                                        return 0 === e.disabledUntilTime
                                    })) && e.Mc.stop(), i && Rd(e, !0, void 0, !1, !1)
                                }(i)
                            })), t && this.Xb(t, !0)
                        }

                        function od(e) {
                            null != e.L && (e.L.release(), e.L = null)
                        }

                        function sd(e, t) {
                            return new xa(e, t)
                        }

                        function ud(e, t) {
                            var n, i, r, a, o, s, u, l, d;
                            return _((function(h) {
                                switch (h.g) {
                                    case 1:
                                        return e.l != th && (e.l = nh), n = e.Yb.map((function(e) {
                                            return e()
                                        })), e.Yb = [], x(h, Promise.all(n), 2);
                                    case 2:
                                        if (e.dispatchEvent(sd("unloading")), t.mimeType = null, t.startTime = null, t.uri = null, e.gb && (e.gb.release(), e.gb = null), t.mediaElement && e.o.Nb(), e.Mc.stop(), e.Bb && (e.Bb.release(), e.Bb = null), e.Kc && (e.Kc.stop(), e.Kc = null), !e.K) {
                                            h.B(3);
                                            break
                                        }
                                        return x(h, e.K.stop(), 4);
                                    case 4:
                                        e.K = null, e.Oc = null;
                                    case 3:
                                        if (!e.s) {
                                            h.B(5);
                                            break
                                        }
                                        return x(h, e.s.stop(), 5);
                                    case 5:
                                        if (!e.j) {
                                            h.B(7);
                                            break
                                        }
                                        return x(h, e.j.destroy(), 8);
                                    case 8:
                                        e.j = null;
                                    case 7:
                                        if (e.I && (e.I.release(), e.I = null), e.A && (e.A.release(), e.A = null), !e.D) {
                                            h.B(9);
                                            break
                                        }
                                        return x(h, e.D.destroy(), 10);
                                    case 10:
                                        e.D = null;
                                    case 9:
                                        if (e.C && e.C.onAssetUnload(), !t.mediaElement || !t.mediaElement.src) {
                                            h.B(11);
                                            break
                                        }
                                        return x(h, new Promise((function(e) {
                                            return new _t(e).V(.1)
                                        })), 12);
                                    case 12:
                                        for (t.mediaElement.removeAttribute("src"), t.mediaElement.load(); t.mediaElement.lastChild;) t.mediaElement.removeChild(t.mediaElement.firstChild);
                                    case 11:
                                        if (!e.m) {
                                            h.B(13);
                                            break
                                        }
                                        return x(h, e.m.destroy(), 14);
                                    case 14:
                                        e.m = null;
                                    case 13:
                                        if (e.Qb = null, e.O = null, e.i) {
                                            for (i = c(e.i.variants), r = i.next(); !r.done; r = i.next())
                                                for (a = r.value, o = c([a.audio, a.video]), s = o.next(); !s.done; s = o.next())(u = s.value) && u.segmentIndex && u.segmentIndex.release();
                                            for (l = c(e.i.textStreams), s = l.next(); !s.done; s = l.next())(d = s.value).segmentIndex && d.segmentIndex.release()
                                        }
                                        e.i = null, e.u = new rd, e.Ed = null, Ed(e), T(h)
                                }
                            }))
                        }

                        function ld(e, t, n, i) {
                            for (var r = (t = c(t)).next(); !r.done; r = t.next())
                                if ((r = r.value).data && r.cueTime && r.frames) {
                                    var a = r.cueTime + n,
                                        o = i;
                                    o && a > o && (o = a);
                                    for (var s = c(r.frames), u = s.next(); !u.done; u = s.next()) cd(e, a, o, "org.id3", u.value);
                                    e.C && e.C.onHlsTimedMetadata(r, a)
                                }
                        }

                        function cd(e, t, n, i, r) {
                            t = (new Map).set("startTime", t).set("endTime", n).set("metadataType", i).set("payload", r), e.dispatchEvent(sd("metadata", t))
                        }

                        function dd(e, t) {
                            if (t && "chapters" == t.kind) {
                                t.mode = "hidden";
                                var n = new _t((function() {
                                    t.mode = "hidden"
                                })).Zd().V(.5);
                                e.Yb.push((function() {
                                    n.stop()
                                }))
                            }
                        }

                        function hd(e, t) {
                            return new Po(t, e.g.drm.updateExpirationTime)
                        }

                        function fd(e, t) {
                            e.O = new qs, e.O.g = Gs, Ks(e.O, t, Math.min(.5, t / 2)), Ed(e), e.Kc = new _t((function() {
                                pd(e)
                            })).sa(.25)
                        }

                        function pd(e) {
                            switch (e.l) {
                                case rh:
                                    if (e.h.ended) var t = !0;
                                    else {
                                        var n = $s(e.h.buffered);
                                        t = null != n && n >= e.h.duration - 1
                                    }
                                    break;
                                case ih:
                                    e: if (e.h.ended || cu(e.D)) t = !0;
                                        else {
                                            if (e.i.presentationTimeline.T()) {
                                                n = e.i.presentationTimeline.lb();
                                                var i = $s(e.h.buffered);
                                                if (null != i && i >= n) {
                                                    t = !0;
                                                    break e
                                                }
                                            }
                                            t = !1
                                        }
                                    break;
                                default:
                                    t = !1
                            }
                            i = Zs(e.h.buffered, e.h.currentTime);
                            var r = t,
                                a = (n = e.O).h.get(n.g);
                            t = n.g, i = r || i >= a ? Ws : Gs, n.g = i, t != i && Ed(e)
                        }

                        function gd(e) {
                            if (e.K) {
                                var t = Sa(e.g.manifest);
                                e.h && "AUDIO" === e.h.nodeName && (t.disableVideo = !0), e.K.configure(t)
                            }
                            if (e.m && e.m.configure(e.g.drm), e.j) {
                                e.j.configure(e.g.streaming);
                                try {
                                    Ad(e, e.i)
                                } catch (a) {
                                    Fd(e, a)
                                }
                                e.s && Dd(e), !(t = e.j.j) || t.allowedByApplication && t.allowedByKeySystem || Rd(e)
                            }
                            if (e.F && e.F.Vd(e.g.streaming.forceHTTPS), e.D && (e.D.configure(e.g.mediaSource), e.D.O = e.g.manifest.segmentRelativeVttTiming, t = e.g.textDisplayFactory, e.Ed != t)) {
                                var n = t(),
                                    i = e.D,
                                    r = i.u;
                                i.u = n, r && (n.setTextVisibility(r.isTextVisible()), r.destroy()), i.g && (i.g.j = n), e.Ed = t, e.j && ((n = (t = e.j).h.get(rt)) && sl(t, n.stream, !0, 0, !0))
                            }
                            e.s && (e.s.configure(e.g.abr), e.g.abr.enabled ? e.s.enable() : e.s.disable(), Ud(e)), e.O && (t = e.g.streaming.rebufferingGoal, e.i && (t = Math.max(t, e.i.minBufferTime)), Ks(e.O, t, Math.min(.5, t / 2))), e.i && Kd(e.i.presentationTimeline, e.g.playRangeStart, e.g.playRangeEnd), e.C && e.C.configure(e.g.ads), e.W && e.W.configure(e.g.cmcd)
                        }

                        function md(e) {
                            return Array.from(e.h.textTracks).filter((function(e) {
                                return "metadata" != e.kind && "chapters" != e.kind && "Shaka Player TextTrack" != e.label
                            }))
                        }

                        function vd(e) {
                            return Array.from(e.h.textTracks).filter((function(e) {
                                return "chapters" == e.kind
                            }))
                        }

                        function yd(e, t) {
                            var n, i;
                            return _((function(r) {
                                switch (r.g) {
                                    case 1:
                                        return n = wo(t), (i = ch[n]) ? r.return(i) : (S(r, 2), x(r, bo(t, e.F, e.g.streaming.retryParameters), 4));
                                    case 4:
                                        i = r.h, A(r, 3);
                                        break;
                                    case 2:
                                        k(r);
                                    case 3:
                                        if (i) return r.return(i);
                                        throw new Ye(1, 2, 2011, n)
                                }
                            }))
                        }

                        function bd(e, t, n, i, r, a, o) {
                            var s, u, l, c;
                            return _((function(d) {
                                if (1 == d.g) return "text/vtt" != r || o.length ? x(d, wd(e, t, e.F, e.g.streaming.retryParameters), 3) : d.B(2);
                                2 != d.g && (s = d.h, u = xd(e, s, r, o), l = new Blob([u], {
                                    type: "text/vtt"
                                }), t = ku(l), r = "text/vtt"), c = document.createElement("track");
                                var h = e.W,
                                    f = t;
                                try {
                                    if (h.g.enabled) {
                                        var p = Dc(h);
                                        p.ot = Bc, p.su = !0;
                                        var g = Pc(f, _c(p))
                                    } else g = f
                                } catch (m) {
                                    W("CMCD_TEXT_TRACK_ERROR", "Could not generate text track CMCD data.", m), g = f
                                }
                                return c.src = g, c.label = a, c.kind = i, c.srclang = n, e.h.getAttribute("crossorigin") || e.h.setAttribute("crossorigin", "anonymous"), e.h.appendChild(c), d.return(c)
                            }))
                        }

                        function wd(e, t, n, i) {
                            var r, a, o;
                            return _((function(s) {
                                if (1 == s.g) {
                                    r = Pa, (a = Ma([t], i)).method = "GET";
                                    var u = e.W;
                                    try {
                                        u.g.enabled && Rc(u, a, {
                                            ot: Bc,
                                            su: !0
                                        })
                                    } catch (l) {
                                        W("CMCD_TEXT_ERROR", "Could not generate text CMCD data.", l)
                                    }
                                    return x(s, n.request(r, a).promise, 2)
                                }
                                return o = s.h, s.return(o.data)
                            }))
                        }

                        function xd(e, t, n, i) {
                            var r = bt[n];
                            if (r) return n = r(), e = {
                                    periodStart: 0,
                                    segmentStart: 0,
                                    segmentEnd: e.h.duration,
                                    vttOffset: 0
                                }, t = ie(t),
                                function(e, t) {
                                    function n(e) {
                                        for (var n = e, i = c(t), r = i.next(); !r.done; r = i.next())(r = r.value).end && r.start < e && (n += r.end - r.start);
                                        return (10 > (e = Math.floor(n / 3600)) ? "0" : "") + e + ":" + (10 > (i = Math.floor(n / 60 % 60)) ? "0" : "") + i + ":" + (10 > (r = Math.floor(n % 60)) ? "0" : "") + r + "." + (100 > (n = Math.floor(1e3 * n % 1e3)) ? 10 > n ? "00" : "0" : "") + n
                                    }
                                    var i = vc(e);
                                    e = "WEBVTT\n\n";
                                    for (var r = (i = c(i)).next(); !r.done; r = i.next()) e += n((r = r.value).startTime) + " --\x3e " + n(r.endTime) + function(e) {
                                        var t = [];
                                        switch (e.textAlign) {
                                            case "left":
                                                t.push("align:left");
                                                break;
                                            case "right":
                                                t.push("align:right");
                                                break;
                                            case me:
                                                t.push("align:middle");
                                                break;
                                            case "start":
                                                t.push("align:start");
                                                break;
                                            case "end":
                                                t.push("align:end")
                                        }
                                        switch (e.writingMode) {
                                            case "vertical-lr":
                                                t.push("vertical:lr");
                                                break;
                                            case "vertical-rl":
                                                t.push("vertical:rl")
                                        }
                                        return t.length ? " " + t.join(" ") : ""
                                    }(r) + "\n", e += r.S + "\n\n";
                                    return e
                                }(t = n.parseMedia(t, e), i);
                            throw new Ye(2, 2, 2014, n)
                        }

                        function Td(e) {
                            var t = $c();
                            return t.streaming.failureCallback = function(t) {
                                if (e.T()) {
                                    var n = null;
                                    1001 == t.code || 1002 == t.code ? n = 1 : 1003 == t.code && (n = .1), null != n && (t.severity = 1, e.Rd(n))
                                }
                            }, t.textDisplayFactory = function() {
                                return e.Dc ? new Sc(e.h, e.Dc) : new yc(e.h)
                            }, t
                        }

                        function Sd(e, t) {
                            return _((function(n) {
                                if (1 == n.g) return x(n, function(e, t) {
                                    return _((function(n) {
                                        if (1 == n.g) return x(n, $t(e.j ? e.j.j : null, t), 2);
                                        Wd(t), T(n)
                                    }))
                                }(e, t), 2);
                                Ad(e, t), T(n)
                            }))
                        }

                        function Ad(e, t) {
                            if (e.l != th) {
                                for (var n = e.g.restrictions, i = e.Ld, r = !1, a = c(t.variants), o = a.next(); !o.done; o = a.next()) {
                                    var s = (o = o.value).allowedByApplication;
                                    o.allowedByApplication = Jt(o, n, i), s != o.allowedByApplication && (r = !0)
                                }
                                if (r && e.j && Ld(e), (n = e.m ? e.m.g : null) && e.m.s)
                                    for (r = (i = c(t.variants)).next(); !r.done; r = i.next()) r = r.value, kd(e, n.keySystem, r.video), kd(e, n.keySystem, r.audio);
                                Gd(e, t)
                            }
                        }

                        function kd(e, t, n) {
                            if (n)
                                for (var i = (n = c(n.drmInfos)).next(); !i.done; i = n.next())
                                    if ((i = i.value).keySystem == t)
                                        for (var r = (i = c(i.initData || [])).next(); !r.done; r = i.next()) r = r.value, jo(e.m, r.initDataType, r.initData)
                        }

                        function Ed(e) {
                            var t = e.te();
                            if (e.u && e.O && e.A) {
                                var n = e.I;
                                n.j = t, Iu(n), e.W && (n = e.W, t || n.i || (n.i = !0), n.i && t && (n.l = !0), n.m = t), Id(e)
                            }
                            t = (new Map).set("buffering", t), e.dispatchEvent(sd("buffering", t))
                        }

                        function Cd(e) {
                            var t = e.h.playbackRate;
                            0 != t && (e.I && e.I.set(t), t = sd("ratechange"), e.dispatchEvent(t))
                        }

                        function Id(e) {
                            if (e.u && e.O) {
                                var t = e.u.g;
                                e.O.g == Gs ? ed(t, "buffering") : e.h.paused ? ed(t, "paused") : e.h.ended ? ed(t, "ended") : ed(t, "playing")
                            }
                        }

                        function Md(e) {
                            if (e.T()) {
                                var t = e.Ob();
                                if (Number.isFinite(t.end) && !(e.h.currentTime < t.start)) {
                                    if (e.g.streaming.liveSync) var n = e.g.streaming.liveSyncMaxLatency,
                                        i = e.g.streaming.liveSyncPlaybackRate;
                                    else e.i && e.i.serviceDescription && (n = e.i.serviceDescription.maxLatency || e.g.streaming.liveSyncMaxLatency, i = e.i.serviceDescription.maxPlaybackRate || e.g.streaming.liveSyncPlaybackRate);
                                    var r = e.h.playbackRate,
                                        a = t.end - e.h.currentTime,
                                        o = 0;
                                    if (e.l == rh) {
                                        var s = e.h.buffered;
                                        0 < s.length && (o = s.end(s.length - 1), o = Math.max(i, o - t.end))
                                    }
                                    n && i && a - o > n ? r != i && e.Me(i) : 1 !== r && 0 !== r && e.ge()
                                }
                            }
                        }

                        function Dd(e) {
                            try {
                                Gd(e, e.i)
                            } catch (n) {
                                return Fd(e, n), !1
                            }
                            var t = function(e) {
                                return e.filter((function(e) {
                                    return pn(e)
                                }))
                            }(e.i.variants);
                            return t = e.yb.create(t), e.s.setVariants(Array.from(t.values())), !0
                        }

                        function Rd(e, t, n, i, r) {
                            var a;
                            t = void 0 === t || t, n = void 0 === n ? 0 : n, i = void 0 !== i && i, r = void 0 === r || r, (a = Dd(e) ? e.s.chooseVariant() : null) && _d(e, a, r, t, n, i)
                        }

                        function _d(e, t, n, i, r, a) {
                            a = void 0 !== a && a;
                            var o = e.j.j;
                            if (t == o) i && al(e.j, t, i, r, !0);
                            else {
                                var s = e.u.h;
                                s.h != t && (s.h = t, s.g.push({
                                    timestamp: Date.now() / 1e3,
                                    id: t.id,
                                    type: "variant",
                                    fromAdaptation: n,
                                    bandwidth: t.bandwidth
                                })), al(e.j, t, i, r, a, n), i = null, o && (i = sn(o)), t = sn(t), n ? (n = (new Map).set("oldTrack", i).set("newTrack", t), e.L && Ls(e.L, t), Xd(e, n = sd("adaptation", n))) : Nd(e, i, t)
                            }
                        }

                        function Pd(e, t) {
                            var n = Array.from(e.h.audioTracks).find((function(e) {
                                return e.enabled
                            }));
                            t.enabled = !0, t.id !== n.id && (n.enabled = !1), Nd(e, n = hn(n), t = hn(t))
                        }

                        function Ld(e) {
                            Xd(e, sd("trackschanged"))
                        }

                        function Nd(e, t, n) {
                            t = (new Map).set("oldTrack", t).set("newTrack", n), e.L && Ls(e.L, n), Xd(e, n = sd("variantchanged", t))
                        }

                        function jd(e) {
                            Xd(e, sd("textchanged"))
                        }

                        function Od(e) {
                            Xd(e, sd("texttrackvisibility"))
                        }

                        function Ud(e) {
                            e.g.abr.enabled || Bd(e), Xd(e, sd("abrstatuschanged", (new Map).set("newStatus", e.g.abr.enabled)))
                        }

                        function Bd(e, t) {
                            if (t = void 0 === t || t, e.l == ih) {
                                e.Mc.stop();
                                for (var n = c(e.i.variants), i = n.next(); !i.done; i = n.next()) i.value.disabledUntilTime = 0;
                                t && Dd(e)
                            }
                        }

                        function Fd(e, t) {
                            if (e.l != th) {
                                2 === t.severity && Bd(e, !1);
                                var n = sd("error", (new Map).set("detail", t));
                                e.dispatchEvent(n), n.defaultPrevented && (t.handled = !0)
                            }
                        }

                        function Hd(e, t, n) {
                            n = (new Map).set("detail", {
                                schemeIdUri: n.schemeIdUri,
                                value: n.value,
                                startTime: n.startTime,
                                endTime: n.endTime,
                                id: n.id,
                                eventElement: n.eventElement
                            }), e.dispatchEvent(sd(t, n))
                        }

                        function Vd(e) {
                            if (!e.h.error) return null;
                            var t = e.h.error.code;
                            if (1 == t) return null;
                            var n = e.h.error.msExtendedCode;
                            return n && (0 > n && (n += Math.pow(2, 32)), n = n.toString(16)), new Ye(2, 3, 3016, t, n, e.h.error.message)
                        }

                        function zd(e, t) {
                            if (e.j) {
                                var n = Object.keys(t),
                                    i = 1 == n.length && "00" == n[0],
                                    r = !1;
                                if (n.length)
                                    for (var a = (n = c(e.i.variants)).next(); !a.done; a = n.next()) {
                                        var o = [];
                                        (a = a.value).audio && o.push(a.audio), a.video && o.push(a.video);
                                        for (var s = (o = c(o)).next(); !s.done; s = o.next()) {
                                            var u = s.value;
                                            if (s = a.allowedByKeySystem, u.keyIds.size) {
                                                a.allowedByKeySystem = !0;
                                                for (var l = (u = c(u.keyIds)).next(); !l.done; l = u.next()) l = l.value, l = t[i ? "00" : l], a.allowedByKeySystem = a.allowedByKeySystem && !!l && !oh.includes(l)
                                            }
                                            s != a.allowedByKeySystem && (r = !0)
                                        }
                                    }
                                r && !Dd(e) || ((t = e.j.j) && !t.allowedByKeySystem && Rd(e), r && Ld(e))
                            }
                        }

                        function qd(e, t, n) {
                            e.K && e.K.onExpirationUpdated && e.K.onExpirationUpdated(t, n), t = sd("expirationupdated"), e.dispatchEvent(t)
                        }

                        function Kd(e, t, n) {
                            0 < t && (e.T() || e.Je(t)), n < (t = e.getDuration()) && (e.T() || e.Va(n))
                        }

                        function Gd(e, t) {
                            e = e.m ? e.m.Fc() : {};
                            var n = Object.keys(e);
                            n = n.length && "00" == n[0];
                            for (var i = !1, r = !1, a = new Set, o = new Set, s = (t = c(t.variants)).next(); !s.done; s = t.next()) {
                                var u = [];
                                (s = s.value).audio && u.push(s.audio), s.video && u.push(s.video);
                                for (var l = (u = c(u)).next(); !l.done; l = u.next())
                                    if ((l = l.value).keyIds.size)
                                        for (var d = (l = c(l.keyIds)).next(); !d.done; d = l.next()) {
                                            d = d.value;
                                            var h = e[n ? "00" : d];
                                            h ? oh.includes(h) && o.add(h) : a.add(d)
                                        }
                                s.allowedByApplication ? s.allowedByKeySystem && (i = !0) : r = !0
                            }
                            if (!i) throw new Ye(2, 4, 4012, e = {
                                hasAppRestrictions: r,
                                missingKeys: Array.from(a),
                                restrictedKeyStatuses: Array.from(o)
                            })
                        }

                        function Wd(e) {
                            if (!e.variants.some(pn)) throw new Ye(2, 4, 4032)
                        }

                        function Xd(e, t) {
                            _((function(n) {
                                if (1 == n.g) return x(n, Promise.resolve(), 2);
                                e.l != th && e.dispatchEvent(t), T(n)
                            }))
                        }

                        function Yd(e) {
                            for (var t = new Set, n = (e = c(e)).next(); !n.done; n = e.next())(n = n.value).language ? t.add(At(n.language)) : t.add("und");
                            return t
                        }

                        function Jd(e) {
                            for (var t = new Map, n = new Map, i = (e = c(e)).next(); !i.done; i = e.next()) {
                                var r = "und",
                                    a = [];
                                (i = i.value).language && (r = At(i.language)), (a = "variant" == i.type ? i.audioRoles : i.roles) && a.length || (a = [""]), t.has(r) || t.set(r, new Set);
                                for (var o = (a = c(a)).next(); !o.done; o = a.next()) o = o.value, t.get(r).add(o), i.label && (n.has(r) || n.set(r, new Map), n.get(r).set(o, i.label))
                            }
                            var s = [];
                            return t.forEach((function(e, t) {
                                for (var i = (e = c(e)).next(); !i.done; i = e.next()) {
                                    i = i.value;
                                    var r = null;
                                    n.has(t) && n.get(t).has(i) && (r = n.get(t).get(i)), s.push({
                                        language: t,
                                        role: i,
                                        label: r
                                    })
                                }
                            })), s
                        }

                        function $d() {
                            return new Ye(2, 7, 7e3)
                        }

                        function Qd(e, t, n, i, r, a) {
                            return i == e && r.mediaElement == a.mediaElement && r.uri == a.uri && r.mimeType == a.mimeType ? t : n
                        }

                        function Zd() {
                            return {
                                mediaElement: null,
                                mimeType: null,
                                startTime: null,
                                Xc: NaN,
                                uri: null
                            }
                        }

                        function eh(e) {
                            return new Promise((function(t, n) {
                                e.qb = function() {
                                    return n($d())
                                }, e.Uc = function() {
                                    return t()
                                }, e.onError = function(e) {
                                    return n(e)
                                }, e.Vc = function() {
                                    return n($d())
                                }
                            }))
                        }
                        F("shaka.util.CmcdManager.StreamingFormat", {
                            DASH: "d",
                            HLS: "h",
                            rg: "s",
                            OTHER: "o"
                        }), F("shaka.util.ConfigUtils", Hc), Hc.convertToConfigObject = zc, Hc.mergeConfigObjects = Vc, F("shaka.util.FairPlayUtils", Kc), Kc.commonFairPlayResponse = function(e, t) {
                            if (2 === e) {
                                try {
                                    var n = Ii(t.data)
                                } catch (r) {
                                    return
                                }
                                e = !1, "<ckc>" === (n = n.trim()).substr(0, 5) && "</ckc>" === n.substr(-6) && (n = n.slice(5, -6), e = !0);
                                try {
                                    var i = JSON.parse(n);
                                    i.ckc && (n = i.ckc, e = !0), i.CkcMessage && (n = i.CkcMessage, e = !0), i.License && (n = i.License, e = !0)
                                } catch (r) {}
                                e && (t.data = ne(Mr(n)))
                            }
                        }, Kc.expressplayFairPlayRequest = function(e, t) {
                            Yc(e, t)
                        }, Kc.conaxFairPlayRequest = function(e, t) {
                            Yc(e, t)
                        }, Kc.ezdrmFairPlayRequest = function(e, t) {
                            Yc(e, t)
                        }, Kc.verimatrixFairPlayRequest = function(e, t) {
                            2 === e && (e = Ir(e = ie(t.body)), t.headers["Content-Type"] = "application/x-www-form-urlencoded", t.body = Ri("spc=" + e))
                        }, Kc.expressplayInitDataTransform = function(e, t, n) {
                            return Xc(e, t, n)
                        }, Kc.conaxInitDataTransform = function(t, n, i) {
                            if ("skd" !== n) return t;
                            n = i.serverCertificate, i = Di(t).split("skd://").pop().split("?").shift(), i = e.atob(i);
                            var r = new ArrayBuffer(2 * i.length);
                            r = new Uint16Array(r);
                            for (var a = 0, o = i.length; a < o; a++) r[a] = i.charCodeAt(a);
                            return Wc(t, r, n)
                        }, Kc.ezdrmInitDataTransform = function(e, t, n) {
                            return "skd" !== t ? e : (t = n.serverCertificate, Wc(e, n = Di(e).split(";").pop(), t))
                        }, Kc.verimatrixInitDataTransform = function(e, t, n) {
                            return Xc(e, t, n)
                        }, Kc.initDataTransform = Wc, Kc.defaultGetContentId = Gc, Kc.isFairPlaySupported = function() {
                            var e;
                            return _((function(t) {
                                return 1 == t.g ? (e = {
                                    initDataTypes: ["cenc", "sinf", "skd"],
                                    videoCapabilities: [{
                                        contentType: 'video/mp4; codecs="avc1.42E01E"'
                                    }]
                                }, S(t, 2), x(t, navigator.requestMediaKeySystemAccess("com.apple.fps", [e]), 4)) : 2 != t.g ? t.return(!0) : (k(t), t.return(!1))
                            }))
                        }, F("shaka.util.PlayerConfiguration", Jc), Jc.mergeConfigObjects = Qc, Jc.createDefault = $c, v(ad, Ta), (i = ad.prototype).destroy = function() {
                            var e, t = this;
                            return _((function(n) {
                                switch (n.g) {
                                    case 1:
                                        return t.l == th ? n.return() : (od(t), t.l = th, e = fc(t.hb, (function() {
                                            return {
                                                node: t.P,
                                                S: Zd(),
                                                nb: !1
                                            }
                                        })), x(n, new Promise((function(t) {
                                            e.Kb = function() {}, e.Uc = function() {
                                                t()
                                            }, e.qb = function() {
                                                t()
                                            }, e.onError = function() {
                                                t()
                                            }, e.Vc = function() {
                                                t()
                                            }
                                        })), 2));
                                    case 2:
                                        return x(n, t.hb.destroy(), 3);
                                    case 3:
                                        if (t.Nc && (t.Nc.release(), t.Nc = null), t.Wb && (t.Wb.release(), t.Wb = null), t.o && (t.o.release(), t.o = null), t.ud = null, t.g = null, t.u = null, t.Dc = null, t.W = null, !t.F) {
                                            n.B(4);
                                            break
                                        }
                                        return x(n, t.F.destroy(), 5);
                                    case 5:
                                        t.F = null;
                                    case 4:
                                        t.s && (t.s.release(), t.s = null), Ta.prototype.release.call(t), T(n)
                                }
                            }))
                        }, i.Xb = function(e, t) {
                            if (t = void 0 === t || t, this.l == th) return Promise.reject($d());
                            var n = Zd();
                            n.mediaElement = e, Pt() || (t = !1);
                            var i = t ? this.Ab : this.Z;
                            return (e = fc(this.hb, (function() {
                                return {
                                    node: i,
                                    S: n,
                                    nb: !1
                                }
                            }))).Kb = function() {}, eh(e)
                        }, i.Te = function(e) {
                            this.Ne = e
                        }, i.detach = function() {
                            var e = this;
                            if (this.l == th) return Promise.reject($d());
                            var t = fc(this.hb, (function() {
                                return {
                                    node: e.P,
                                    S: Zd(),
                                    nb: !1
                                }
                            }));
                            return t.Kb = function() {}, eh(t)
                        }, i.ig = function(e) {
                            var t = this;
                            if (e = void 0 === e || e, this.l == th) return Promise.reject($d());
                            this.bc = !1, Pt() || (e = !1), od(this);
                            var n = Zd(),
                                i = fc(this.hb, (function(i) {
                                    var r = i.mediaElement && e ? t.Ab : i.mediaElement ? t.Z : t.P;
                                    return n.mediaElement = i.mediaElement, {
                                        node: r,
                                        S: n,
                                        nb: !1
                                    }
                                }));
                            return i.Kb = function() {}, eh(i)
                        }, i.mg = function(e) {
                            this.cc = e
                        }, i.load = function(e, t, n) {
                            var i = this;
                            if (this.cc = null, this.bc = !1, this.l == th) return Promise.reject($d());
                            this.dispatchEvent(sd("loading"));
                            var r = Zd();
                            r.uri = e, r.Xc = Date.now() / 1e3, n && (r.mimeType = n), void 0 !== t && (r.startTime = t);
                            var a = function(e, t) {
                                    if (!Pt()) return !0;
                                    var n = t.mimeType,
                                        i = t.uri || "";
                                    if (n || (n = wo(i), n = lh[n]), n) {
                                        if ("" == (t.mediaElement || zt()).canPlayType(n)) return !1;
                                        if (!Pt() || !(n in xo) && !(wo(i) in To) || ("application/x-mpegurl" === n || "application/vnd.apple.mpegurl" === n) && e.g.streaming.preferNativeHls) return !0;
                                        if (Bt()) return e.g.streaming.useNativeHlsOnSafari
                                    }
                                    return !1
                                }(this, r) ? this.Cb : this.ca,
                                o = fc(this.hb, (function(e) {
                                    return null == e.mediaElement ? null : (r.mediaElement = e.mediaElement, {
                                        node: a,
                                        S: r,
                                        nb: !0
                                    })
                                }));
                            return this.u = new rd, o.Kb = function() {}, new Promise((function(e, t) {
                                o.Vc = function() {
                                    return t(new Ye(2, 7, 7002))
                                }, o.Uc = function() {
                                    e(), i.dispatchEvent(sd("loaded"))
                                }, o.qb = function() {
                                    return t($d())
                                }, o.onError = function(e) {
                                    return t(e)
                                }
                            }))
                        }, i.configure = function(e, t) {
                            2 == arguments.length && "string" == typeof e && (e = zc(e, t)), e.streaming && "forceTransmuxTS" in e.streaming && (or("streaming.forceTransmuxTS configuration", "Please Use mediaSource.forceTransmux instead."), e.mediaSource.mediaSource = e.streaming.forceTransmuxTS, delete e.streaming.forceTransmuxTS), e.streaming && "forceTransmux" in e.streaming && (or("streaming.forceTransmux configuration", "Please Use mediaSource.forceTransmux instead."), e.mediaSource.mediaSource = e.streaming.forceTransmux, delete e.streaming.forceTransmux), e.streaming && e.streaming.lowLatencyMode && (null == e.streaming.inaccurateManifestTolerance && (e.streaming.inaccurateManifestTolerance = 0), null == e.streaming.rebufferingGoal && (e.streaming.rebufferingGoal = .01), null == e.streaming.segmentPrefetchLimit && (e.streaming.segmentPrefetchLimit = 2));
                            var n = Qc(this.g, e, Td(this));
                            return gd(this), n
                        }, i.getConfiguration = function() {
                            var e = Td(this);
                            return Qc(e, this.g, Td(this)), e
                        }, i.df = function() {
                            if (this.h) {
                                var e = this.h.buffered.length;
                                e = e ? this.h.buffered.end(e - 1) : 0;
                                var t = this.getConfiguration().streaming.bufferingGoal;
                                if (e >= (t = Math.min(this.h.currentTime + t, this.Ob().end))) return 1;
                                if (!(e <= this.h.currentTime) && e < t) return (e - this.h.currentTime) / (t - this.h.currentTime)
                            }
                            return 0
                        }, i.Yf = function() {
                            for (var e in this.g) delete this.g[e];
                            Qc(this.g, Td(this), Td(this)), gd(this)
                        }, i.kf = function() {
                            return this.l
                        }, i.nf = function() {
                            return this.i ? this.i.type : null
                        }, i.qf = function() {
                            return this.h
                        }, i.od = function() {
                            return this.F
                        }, i.af = function() {
                            return this.Qb
                        }, i.$e = function() {
                            return this.C ? this.C : null
                        }, i.T = function() {
                            return this.i ? this.i.presentationTimeline.T() : !(!this.h || !this.h.src) && 1 / 0 == this.h.duration
                        }, i.Hb = function() {
                            return !!this.i && this.i.presentationTimeline.Hb()
                        }, i.Gf = function() {
                            if (this.i) {
                                var e = this.i.variants;
                                return !!e.length && !e[0].video
                            }
                            return !(!this.h || !this.h.src) && (this.h.videoTracks ? 0 == this.h.videoTracks.length : 0 == this.h.videoHeight)
                        }, i.Ob = function() {
                            if (!this.bc) return {
                                start: 0,
                                end: 0
                            };
                            if (this.i) {
                                var e = this.i.presentationTimeline;
                                return {
                                    start: e.Fb(),
                                    end: e.Na()
                                }
                            }
                            return this.h && this.h.src && (e = this.h.seekable).length ? {
                                start: e.start(0),
                                end: e.end(e.length - 1)
                            } : {
                                start: 0,
                                end: 0
                            }
                        }, i.Df = function() {
                            this.T() && (this.h.currentTime = this.Ob().end)
                        }, i.keySystem = function() {
                            var e = this.drmInfo();
                            return e ? e.keySystem : ""
                        }, i.drmInfo = function() {
                            return this.m ? this.m.g : null
                        }, i.nd = function() {
                            return this.m ? this.m.nd() : 1 / 0
                        }, i.ld = function() {
                            return this.m ? this.m.ld() : []
                        }, i.Fc = function() {
                            return this.m ? this.m.Fc() : {}
                        }, i.te = function() {
                            return !!this.O && this.O.g == Gs
                        }, i.Gc = function() {
                            return this.h ? this.I ? this.I.i : 1 : 0
                        }, i.Me = function(e) {
                            0 == e ? G("A trick play rate of 0 is unsupported!") : (this.h.paused && this.h.play(), this.I.set(e), this.l == ih && (this.s.playbackRateChanged(e), rl(this.j, 1 < Math.abs(e))))
                        }, i.ge = function() {
                            var e = this.I.Ec();
                            this.l == rh && this.I.set(e), this.l == ih && (this.I.set(e), this.s.playbackRateChanged(e), rl(this.j, !1))
                        }, i.Za = function() {
                            if (this.i) {
                                for (var e = this.j ? this.j.j : null, t = [], n = 0, i = c(this.i.variants), r = i.next(); !r.done; r = i.next())
                                    if (pn(r = r.value)) {
                                        var a = sn(r);
                                        a.active = r == e, a.active || 1 == n || null == e || r.video != e.video || r.audio != e.audio || (a.active = !0), a.active && n++, t.push(a)
                                    }
                                return t
                            }
                            return this.h && this.h.audioTracks ? Array.from(this.h.audioTracks).map((function(e) {
                                return hn(e)
                            })) : []
                        }, i.Gb = function() {
                            if (this.i) {
                                for (var e = this.j ? this.j.o : null, t = [], n = c(this.i.textStreams), i = n.next(); !i.done; i = n.next()) {
                                    var r = un(i = i.value);
                                    r.active = i == e, t.push(r)
                                }
                                return t
                            }
                            return this.h && this.h.src && this.h.textTracks ? md(this).map((function(e) {
                                return dn(e)
                            })) : []
                        }, i.jf = function() {
                            return this.i ? this.i.imageStreams.map((function(e) {
                                return ln(e)
                            })) : []
                        }, i.yf = function(e, t) {
                            var n, i, r, a, o, s, u, l, c, d, h, f, p, g, m, v, y, b, w, T, S = this;
                            return _((function(A) {
                                return 1 == A.g ? S.i ? (n = S.i.imageStreams.find((function(t) {
                                    return t.id == e
                                }))) ? n.segmentIndex ? A.B(3) : x(A, n.createSegmentIndex(), 3) : A.return(null) : A.B(2) : 2 != A.g ? null == (i = n.segmentIndex.find(t)) ? A.return(null) : (r = n.segmentIndex.get(i), a = r.tilesLayout || n.tilesLayout, (o = /(\d+)x(\d+)/.exec(a)) ? (s = n.width || 0, u = n.height || 0, l = parseInt(o[1], 10), c = parseInt(o[2], 10), d = s / l, h = u / c, f = l * c, p = r.l - r.startTime, g = r.I || p / f, m = r.startTime, y = v = 0, 1 < f && (b = Math.floor((t - r.startTime) / g), m = r.startTime + b * g, v = b % l * d, y = Math.floor(b / l) * h), w = !1, (T = r.F) && (w = !0, h = T.height, v = T.positionX, y = T.positionY, d = T.width), A.return({
                                    imageHeight: u,
                                    imageWidth: s,
                                    height: h,
                                    positionX: v,
                                    positionY: y,
                                    startTime: m,
                                    duration: g,
                                    uris: r.Oa(),
                                    width: d,
                                    sprite: w
                                })) : A.return(null)) : A.return(null)
                            }))
                        }, i.Fe = function(e) {
                            if (this.i && this.j) {
                                var t = this.i.textStreams.find((function(t) {
                                    return t.id == e.id
                                }));
                                t && t != this.j.o && (id(this.u.h, t, !1), ol(this.j, t), jd(this), this.zb = t.language)
                            } else if (this.h && this.h.src && this.h.textTracks) {
                                for (var n = (t = c(t = md(this))).next(); !n.done; n = t.next()) cn(n = n.value) == e.id ? n.mode = this.ha ? "showing" : "hidden" : n.mode = "disabled";
                                jd(this)
                            }
                        }, i.Ud = function(e, t, n) {
                            if (t = void 0 !== t && t, n = void 0 === n ? 0 : n, this.i && this.j) {
                                this.g.abr.enabled && G("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");
                                var i = this.i.variants.find((function(t) {
                                    return t.id == e.id
                                }));
                                i && pn(i) && (_d(this, i, !1, t, n), this.yb = new Vs(i), Dd(this))
                            } else if (this.h && this.h.audioTracks)
                                for (n = (t = c(t = Array.from(this.h.audioTracks))).next(); !n.done; n = t.next())
                                    if (cn(n = n.value) == e.id) {
                                        Pd(this, n);
                                        break
                                    }
                        }, i.cf = function() {
                            return Jd(this.Za())
                        }, i.wf = function() {
                            return Jd(this.Gb())
                        }, i.bf = function() {
                            return Array.from(Yd(this.Za()))
                        }, i.vf = function() {
                            return Array.from(Yd(this.Gb()))
                        }, i.De = function(e, t, n, i) {
                            if (n = void 0 === n ? 0 : n, i = void 0 === i ? 0 : i, this.i && this.A) {
                                this.yb = new zs(e, t || "", n, "", ""), e = function(e, t) {
                                    return e.video || t.video ? e.video && t.video ? Math.abs((e.video.height || 0) - (t.video.height || 0)) + Math.abs((e.video.width || 0) - (t.video.width || 0)) : 1 / 0 : 0
                                }, t = this.j.j;
                                var r = this.yb.create(this.i.variants);
                                n = null;
                                for (var a = (r = c(r.values())).next(); !a.done; a = r.next()) a = a.value, (!n || e(n, t) > e(a, t)) && (n = a);
                                n ? (e = sn(n), this.Ud(e, !0, i)) : Rd(this)
                            } else this.h && this.h.audioTracks && (i = mn(this.Za(), e, t || "", !1)[0]) && this.Ud(i)
                        }, i.Ee = function(e, t, n) {
                            n = void 0 !== n && n, this.i && this.A ? (this.zb = e, this.ac = t || "", this.Zb = n, (e = mn(this.i.textStreams, this.zb, this.ac, this.Zb)[0] || null) && e != this.j.o && (id(this.u.h, e, !1), this.g.streaming.alwaysStreamText || this.td()) && (ol(this.j, e), jd(this))) : (e = mn(this.Gb(), e, t || "", n)[0]) && this.Fe(e)
                        }, i.bg = function(e, t, n) {
                            if (t = void 0 === t || t, n = void 0 === n ? 0 : n, this.i && this.A) {
                                for (var i = null, r = c(this.i.variants), a = r.next(); !a.done; a = r.next())
                                    if ((a = a.value).audio.label == e) {
                                        i = a;
                                        break
                                    }
                                null != i && (this.yb = new zs(i.language, "", 0, "", e), Rd(this, t, n))
                            } else if (this.h && this.h.audioTracks) {
                                for (t = null, i = (n = c(n = Array.from(this.h.audioTracks))).next(); !i.done; i = n.next())(i = i.value).label == e && (t = i);
                                t && Pd(this, t)
                            }
                        }, i.td = function() {
                            var e = this.ha;
                            return this.D ? this.D.u.isTextVisible() : this.h && this.h.src && this.h.textTracks ? md(this).some((function(e) {
                                return "showing" == e.mode
                            })) : e
                        }, i.oe = function() {
                            return this.h && this.h.src && this.h.textTracks ? vd(this).map((function(e) {
                                return dn(e)
                            })) : []
                        }, i.ef = function(e) {
                            var t = At(e),
                                n = vd(this).filter((function(e) {
                                    return At(e.language) == t
                                }));
                            if (!n || !n.length) return [];
                            e = [];
                            for (var i = new Set, r = (n = c(n)).next(); !r.done; r = n.next())
                                if ((r = r.value) && r.cues)
                                    for (var a = (r = c(r.cues)).next(); !a.done; a = r.next()) {
                                        var o = a.value;
                                        (a = o.id) && "" != a || (a = o.startTime + "-" + o.endTime + "-" + o.text), o = {
                                            id: a,
                                            title: o.text,
                                            startTime: o.startTime,
                                            endTime: o.endTime
                                        }, i.has(a) || (e.push(o), i.add(a))
                                    }
                            return e
                        }, i.fg = function(e) {
                            if (e = !!e, this.ha != e) {
                                if (this.ha = e, this.l == ih) this.D.u.setTextVisibility(e), this.g.streaming.alwaysStreamText || (e ? this.j.o || 0 < (e = mn(this.i.textStreams, this.zb, this.ac, this.Zb)).length && (ol(this.j, e[0]), jd(this)) : function(e) {
                                    var t = e.h.get(rt);
                                    t && (yl(t), bl(t).catch((function() {})), e.h.delete(rt)), e.o = null
                                }(this.j));
                                else if (this.h && this.h.src && this.h.textTracks)
                                    for (var t = md(this), n = (t = c(t)).next(); !n.done; n = t.next()) "disabled" != (n = n.value).mode && (n.mode = e ? "showing" : "hidden");
                                Od(this)
                            }
                        }, i.tf = function() {
                            if (!this.T()) return null;
                            var e = this.hb.l,
                                t = 0;
                            if (this.A) t = this.A.yc();
                            else if (e) {
                                if (null == e.startTime) return new Date;
                                t = e.startTime
                            }
                            return this.i ? new Date(1e3 * (this.i.presentationTimeline.i + t)) : this.h && this.h.getStartDate ? (e = this.h.getStartDate(), isNaN(e.getTime()) ? null : new Date(e.getTime() + 1e3 * t)) : null
                        }, i.pe = function() {
                            if (!this.T()) return null;
                            if (this.i) return new Date(1e3 * this.i.presentationTimeline.i);
                            if (this.h && this.h.getStartDate) {
                                var e = this.h.getStartDate();
                                return isNaN(e.getTime()) ? null : e
                            }
                            return null
                        }, i.Ma = function() {
                            if (this.l == ih) return this.D.Ma();
                            var e = {
                                total: [],
                                audio: [],
                                video: [],
                                text: []
                            };
                            return this.l == rh && (e.total = eu(this.h.buffered)), e
                        }, i.getStats = function() {
                            if (this.l != ih && this.l != rh) return {
                                width: NaN,
                                height: NaN,
                                streamBandwidth: NaN,
                                decodedFrames: NaN,
                                droppedFrames: NaN,
                                corruptedFrames: NaN,
                                stallsDetected: NaN,
                                gapsJumped: NaN,
                                estimatedBandwidth: NaN,
                                completionPercent: NaN,
                                loadLatency: NaN,
                                manifestTimeSeconds: NaN,
                                drmTimeSeconds: NaN,
                                playTime: NaN,
                                pauseTime: NaN,
                                bufferingTime: NaN,
                                licenseTime: NaN,
                                liveLatency: NaN,
                                maxSegmentDuration: NaN,
                                switchHistory: [],
                                stateHistory: []
                            };
                            Id(this);
                            var e = this.h,
                                t = e.currentTime / e.duration;
                            if (!isNaN(t)) {
                                var n = this.u;
                                t = Math.round(100 * t), n.i = isNaN(n.i) ? t : Math.max(n.i, t)
                            }
                            if (this.A && (this.u.O = this.A.ce(), this.u.P = this.A.de()), e.getVideoPlaybackQuality) {
                                n = e.getVideoPlaybackQuality(), t = this.u;
                                var i = Number(n.totalVideoFrames);
                                t.L = Number(n.droppedVideoFrames), t.K = i, this.u.I = Number(n.corruptedVideoFrames)
                            }
                            this.m ? n = (n = this.m).I ? n.I : NaN : n = NaN, this.u.s = n, this.l == ih && ((n = this.j.j) && (this.u.A = (this.I ? this.I.i : 1) * n.bandwidth), n && n.video && (t = this.u, i = n.video.height || NaN, t.o = n.video.width || NaN, t.l = i), this.T() && (n = this.pe().valueOf() + 1e3 * this.Ob().end, this.u.C = (Date.now() - n) / 1e3), this.i && this.i.presentationTimeline && (this.u.F = this.i.presentationTimeline.g), n = this.s.getBandwidthEstimate(), this.u.u = n), this.l == rh && (n = this.u, t = e.videoHeight || NaN, n.o = e.videoWidth || NaN, n.l = t);
                            var r = this.u;
                            e = r.o, n = r.l, t = r.A, i = r.K;
                            for (var a = r.L, o = r.I, s = r.P, u = r.O, l = r.u, d = r.i, h = r.m, f = r.D, p = r.j, g = td(r.g, "playing"), m = td(r.g, "paused"), v = td(r.g, "buffering"), y = r.s, b = r.C, w = r.F, x = function(e) {
                                    function t(e) {
                                        return {
                                            timestamp: e.timestamp,
                                            state: e.state,
                                            duration: e.duration
                                        }
                                    }
                                    for (var n = [], i = c(e.h), r = i.next(); !r.done; r = i.next()) n.push(t(r.value));
                                    return e.g && n.push(t(e.g)), n
                                }(r.g), T = [], S = (r = c(r.h.g)).next(); !S.done; S = r.next()) S = S.value, T.push({
                                timestamp: S.timestamp,
                                id: S.id,
                                type: S.type,
                                fromAdaptation: S.fromAdaptation,
                                bandwidth: S.bandwidth
                            });
                            return {
                                width: e,
                                height: n,
                                streamBandwidth: t,
                                decodedFrames: i,
                                droppedFrames: a,
                                corruptedFrames: o,
                                stallsDetected: s,
                                gapsJumped: u,
                                estimatedBandwidth: l,
                                completionPercent: d,
                                loadLatency: h,
                                manifestTimeSeconds: f,
                                drmTimeSeconds: p,
                                playTime: g,
                                pauseTime: m,
                                bufferingTime: v,
                                licenseTime: y,
                                liveLatency: b,
                                maxSegmentDuration: w,
                                stateHistory: x,
                                switchHistory: T
                            }
                        }, i.Re = function(e, t, n, i, r, a, o) {
                            o = void 0 !== o && o;
                            var s, u, l, c, d, h, f, p, g, m, v = this;
                            return _((function(y) {
                                switch (y.g) {
                                    case 1:
                                        if (v.l != ih && v.l != rh) throw new Ye(1, 7, 7004);
                                        if (i) {
                                            y.B(2);
                                            break
                                        }
                                        return x(y, yd(v, e), 3);
                                    case 3:
                                        i = y.h;
                                    case 2:
                                        if (s = [], v.C) try {
                                            s = v.C.getServerSideCuePoints()
                                        } catch (b) {}
                                        if (v.l != rh) {
                                            y.B(4);
                                            break
                                        }
                                        return o && (n = "forced"), x(y, bd(v, e, t, n, i, a || "", s), 5);
                                    case 5:
                                        if (u = v.Gb(), l = u.find((function(e) {
                                                return e.language == t && e.label == (a || "") && e.kind == n
                                            }))) return Ld(v), y.return(l);
                                        throw new Ye(1, 2, 2012);
                                    case 4:
                                        if (c = at, 1 / 0 == (d = v.i.presentationTimeline.getDuration())) throw new Ye(1, 4, 4033);
                                        if (!s.length) {
                                            y.B(6);
                                            break
                                        }
                                        return x(y, wd(v, e, v.F, v.g.streaming.retryParameters), 7);
                                    case 7:
                                        h = y.h, f = xd(v, h, i, s), p = new Blob([f], {
                                            type: "text/vtt"
                                        }), e = ku(p), i = "text/vtt";
                                    case 6:
                                        if (g = {
                                                id: v.Od++,
                                                originalId: null,
                                                createSegmentIndex: function() {
                                                    return Promise.resolve()
                                                },
                                                segmentIndex: Wa(0, d, [e]),
                                                mimeType: i || "",
                                                codecs: r || "",
                                                kind: n,
                                                encrypted: !1,
                                                drmInfos: [],
                                                keyIds: new Set,
                                                language: t,
                                                originalLanguage: t,
                                                label: a || null,
                                                type: c.da,
                                                primary: !1,
                                                trickModeVideo: null,
                                                emsgSchemeIdUris: null,
                                                roles: [],
                                                forced: !!o,
                                                channelsCount: null,
                                                audioSamplingRate: null,
                                                spatialAudio: !1,
                                                closedCaptions: null,
                                                accessibilityPurpose: null,
                                                external: !0
                                            }, m = ut(g.mimeType, g.codecs), !mt(m)) throw new Ye(2, 2, 2014, i);
                                        return v.i.textStreams.push(g), Ld(v), y.return(un(g))
                                }
                            }))
                        }, i.Se = function(e, t) {
                            var n, i, r, a, o, s, u, l, d, h, f, p, g, m, v, y, b = this;
                            return _((function(w) {
                                switch (w.g) {
                                    case 1:
                                        if (b.l != ih && b.l != rh) throw new Ye(1, 7, 7004);
                                        if (b.l == rh) throw new Ye(1, 2, 2016);
                                        if (t) {
                                            w.B(2);
                                            break
                                        }
                                        return x(w, yd(b, e), 3);
                                    case 3:
                                        t = w.h;
                                    case 2:
                                        if ("text/vtt" != t) throw new Ye(1, 2, 2017, e);
                                        if (n = at, 1 / 0 == (i = b.i.presentationTimeline.getDuration())) throw new Ye(1, 4, 4045);
                                        return x(w, wd(b, e, b.F, b.g.streaming.retryParameters), 4);
                                    case 4:
                                        if (r = w.h, !(a = bt[t])) throw new Ye(2, 2, 2014, t);
                                        for (o = a(), s = {
                                                periodStart: 0,
                                                segmentStart: 0,
                                                segmentEnd: i,
                                                vttOffset: 0
                                            }, u = ie(r), l = o.parseMedia(u, s), d = [], h = {}, f = c(l), p = f.next(); !p.done; h = {
                                                Rb: h.Rb
                                            }, p = f.next()) g = p.value, h.Rb = et([e], [g.S])[0], m = new Va(g.startTime, g.endTime, function(e) {
                                            return function() {
                                                return [e.Rb]
                                            }
                                        }(h), 0, null, null, 0, 0, 1 / 0), h.Rb.includes("#xywh") && (4 === (v = h.Rb.split("#xywh=")[1].split(",")).length && m.Ie({
                                            height: parseInt(v[3], 10),
                                            positionX: parseInt(v[0], 10),
                                            positionY: parseInt(v[1], 10),
                                            width: parseInt(v[2], 10)
                                        })), d.push(m);
                                        return y = {
                                            id: b.Od++,
                                            originalId: null,
                                            createSegmentIndex: function() {
                                                return Promise.resolve()
                                            },
                                            segmentIndex: new Ga(d),
                                            mimeType: t || "",
                                            codecs: "",
                                            kind: "",
                                            encrypted: !1,
                                            drmInfos: [],
                                            keyIds: new Set,
                                            language: "und",
                                            originalLanguage: null,
                                            label: null,
                                            type: n.fd,
                                            primary: !1,
                                            trickModeVideo: null,
                                            emsgSchemeIdUris: null,
                                            roles: [],
                                            forced: !1,
                                            channelsCount: null,
                                            audioSamplingRate: null,
                                            spatialAudio: !1,
                                            closedCaptions: null,
                                            tilesLayout: "1x1",
                                            accessibilityPurpose: null,
                                            external: !0
                                        }, b.i.imageStreams.push(y), Ld(b), w.return(ln(y))
                                }
                            }))
                        }, i.Qe = function(e, t, n) {
                            var i, r, a, o, s = this;
                            return _((function(u) {
                                switch (u.g) {
                                    case 1:
                                        if (s.l != ih && s.l != rh) throw new Ye(1, 7, 7004);
                                        if (n) {
                                            u.B(2);
                                            break
                                        }
                                        return x(u, yd(s, e), 3);
                                    case 3:
                                        n = u.h;
                                    case 2:
                                        if (i = [], s.C) try {
                                            i = s.C.getServerSideCuePoints()
                                        } catch (l) {}
                                        return x(u, bd(s, e, t, "chapters", n, "", i), 4);
                                    case 4:
                                        if (r = u.h, a = s.oe(), !(o = a.find((function(e) {
                                                return e.language == t
                                            })))) {
                                            u.B(5);
                                            break
                                        }
                                        return x(u, new Promise((function(e, t) {
                                            s.o.oa(r, "load", e), s.o.oa(r, "error", (function() {
                                                t(new Ye(1, 2, 2015))
                                            }))
                                        })), 6);
                                    case 6:
                                        return u.return(o);
                                    case 5:
                                        throw new Ye(1, 2, 2012)
                                }
                            }))
                        }, i.dg = function(e, t) {
                            this.Ld.width = e, this.Ld.height = t
                        }, i.Rd = function(e) {
                            if (this.l == ih) {
                                var t = this.j;
                                if (e = void 0 === e ? .1 : e, t.l.g) t = !1;
                                else if (t.s) t = !1;
                                else {
                                    for (var n = c(t.h.values()), i = n.next(); !i.done; i = n.next()) !(i = i.value).kc || i.pa || i.Ha || (i.kc = !1, vl(t, i, e));
                                    t = !0
                                }
                            } else t = !1;
                            return t
                        }, i.lf = function() {
                            return G("Shaka Player's internal Manifest structure is NOT covered by semantic versioning compatibility guarantees.  It may change at any time!  Please consider filing a feature request for whatever you use getManifest() for."), this.i
                        }, i.mf = function() {
                            return this.Oc
                        }, i.gg = function(e) {
                            this.Dc = e
                        }, i.kd = function(e, t) {
                            if (!this.g.abr.enabled || this.l === th || !navigator.onLine) return !1;
                            if (this.i.variants.some((function(t) {
                                    return !(!(t = t[e.type]) || t.id === e.id) && ("audio" != e.type || e.language === t.language)
                                }))) {
                                for (var n = c(this.i.variants), i = n.next(); !i.done; i = n.next()) {
                                    var r = (i = i.value)[e.type];
                                    r && r.id === e.id && (i.disabledUntilTime = Date.now() / 1e3 + t)
                                }
                                return this.Mc.sa(1), Rd(this, !0, t = this.Ma().video.reduce((function(e, t) {
                                    return e + t.end - t.start
                                }), 0), !0, !1), !0
                            }
                            return !1
                        }, F("shaka.Player", ad), ad.prototype.setVideoContainer = ad.prototype.gg, ad.prototype.getManifestParserFactory = ad.prototype.mf, ad.prototype.getManifest = ad.prototype.lf, ad.prototype.retryStreaming = ad.prototype.Rd, ad.prototype.setMaxHardwareResolution = ad.prototype.dg, ad.prototype.addChaptersTrack = ad.prototype.Qe, ad.prototype.addThumbnailsTrack = ad.prototype.Se, ad.prototype.addTextTrackAsync = ad.prototype.Re, ad.prototype.getStats = ad.prototype.getStats, ad.prototype.getBufferedInfo = ad.prototype.Ma, ad.prototype.getPresentationStartTimeAsDate = ad.prototype.pe, ad.prototype.getPlayheadTimeAsDate = ad.prototype.tf, ad.prototype.setTextTrackVisibility = ad.prototype.fg, ad.prototype.getChapters = ad.prototype.ef, ad.prototype.getChaptersTracks = ad.prototype.oe, ad.prototype.isTextTrackVisible = ad.prototype.td, ad.prototype.selectVariantsByLabel = ad.prototype.bg, ad.prototype.selectTextLanguage = ad.prototype.Ee, ad.prototype.selectAudioLanguage = ad.prototype.De, ad.prototype.getTextLanguages = ad.prototype.vf, ad.prototype.getAudioLanguages = ad.prototype.bf, ad.prototype.getTextLanguagesAndRoles = ad.prototype.wf, ad.prototype.getAudioLanguagesAndRoles = ad.prototype.cf, ad.prototype.selectVariantTrack = ad.prototype.Ud, ad.prototype.selectTextTrack = ad.prototype.Fe, ad.prototype.getThumbnails = ad.prototype.yf, ad.prototype.getImageTracks = ad.prototype.jf, ad.prototype.getTextTracks = ad.prototype.Gb, ad.prototype.getVariantTracks = ad.prototype.Za, ad.prototype.cancelTrickPlay = ad.prototype.ge, ad.prototype.trickPlay = ad.prototype.Me, ad.prototype.getPlaybackRate = ad.prototype.Gc, ad.prototype.isBuffering = ad.prototype.te, ad.prototype.getKeyStatuses = ad.prototype.Fc, ad.prototype.getActiveSessionsMetadata = ad.prototype.ld, ad.prototype.getExpiration = ad.prototype.nd, ad.prototype.drmInfo = ad.prototype.drmInfo, ad.prototype.keySystem = ad.prototype.keySystem, ad.prototype.goToLive = ad.prototype.Df, ad.prototype.seekRange = ad.prototype.Ob, ad.prototype.isAudioOnly = ad.prototype.Gf, ad.prototype.isInProgress = ad.prototype.Hb, ad.prototype.isLive = ad.prototype.T, ad.prototype.getAdManager = ad.prototype.$e, ad.prototype.getAssetUri = ad.prototype.af, ad.prototype.getNetworkingEngine = ad.prototype.od, ad.prototype.getMediaElement = ad.prototype.qf, ad.prototype.getManifestType = ad.prototype.nf, ad.prototype.getLoadMode = ad.prototype.kf, ad.prototype.resetConfiguration = ad.prototype.Yf, ad.prototype.getBufferFullness = ad.prototype.df, ad.prototype.getConfiguration = ad.prototype.getConfiguration, ad.prototype.configure = ad.prototype.configure, ad.prototype.load = ad.prototype.load, ad.prototype.updateStartTime = ad.prototype.mg, ad.prototype.unload = ad.prototype.ig, ad.prototype.detach = ad.prototype.detach, ad.prototype.attachCanvas = ad.prototype.Te, ad.prototype.attach = ad.prototype.Xb, ad.probeSupport = function(e) {
                            var t, n, i, r, a;
                            return e = void 0 === e || e, _((function(o) {
                                if (1 == o.g) return t = {}, e ? x(o, function() {
                                    var e, t, n, i, r, a;
                                    return _((function(o) {
                                        return 1 == o.g ? (e = "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.microsoft.playready.recommendation com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" "), n = [{
                                            videoCapabilities: t = [{
                                                contentType: 'video/mp4; codecs="avc1.42E01E"'
                                            }, {
                                                contentType: 'video/webm; codecs="vp8"'
                                            }],
                                            persistentState: "required",
                                            sessionTypes: ["persistent-license"]
                                        }, {
                                            initDataTypes: ["cenc"],
                                            videoCapabilities: t
                                        }], i = new Map, r = function(e) {
                                            var t, r, a;
                                            return _((function(o) {
                                                switch (o.g) {
                                                    case 1:
                                                        if (S(o, 2), "org.w3.clearkey" === e && Ht()) throw Error("Unsupported keySystem");
                                                        return x(o, navigator.requestMediaKeySystemAccess(e, n), 4);
                                                    case 4:
                                                        return t = o.h, a = !!(r = t.getConfiguration().sessionTypes) && r.includes("persistent-license"), Vt("Tizen 3") && (a = !1), i.set(e, {
                                                            persistentState: a
                                                        }), x(o, t.createMediaKeys(), 5);
                                                    case 5:
                                                        A(o, 0);
                                                        break;
                                                    case 2:
                                                        k(o), i.set(e, null), T(o)
                                                }
                                            }))
                                        }, a = e.map((function(e) {
                                            return r(e)
                                        })), x(o, Promise.all(a), 2)) : o.return(Ro(i))
                                    }))
                                }(), 3) : o.B(2);
                                2 != o.g && (t = o.h);
                                var s = {};
                                if (Pt()) {
                                    for (var u in xo) s[u] = !0;
                                    for (var l in To) s[l] = !0
                                }
                                u = {
                                    mpd: "application/dash+xml",
                                    m3u8: "application/x-mpegurl",
                                    ism: "application/vnd.ms-sstr+xml"
                                };
                                for (var h = (l = c(["application/dash+xml", "application/x-mpegurl", "application/vnd.apple.mpegurl", "application/vnd.ms-sstr+xml"])).next(); !h.done; h = l.next()) s[h = h.value] = Pt() ? !!xo[h] : Lt(h);
                                for (var f in u) s[f] = Pt() ? !!To[f] : Lt(u[f]);
                                for (n = s, s = {}, u = (f = c(f = 'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",video/mp4; codecs="av01.0.01M.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",audio/mp4; codecs="dtsc",audio/mp4; codecs="dtse",audio/mp4; codecs="dtsx",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").concat(d(pt)))).next(); !u.done; u = f.next()) s[u = u.value] = Pt() ? !!mt(u) || (Y(u) || !!Ie(u)) : Lt(u), s[l = u.split(";")[0]] = s[l] || s[u];
                                for (a in i = {
                                        manifest: n,
                                        media: s,
                                        drm: t
                                    }, r = sh) i[a] = r[a]();
                                return o.return(i)
                            }))
                        }, ad.isBrowserSupported = function() {
                            if (e.Promise || G("A Promise implementation or polyfill is required"), !(e.Promise && e.Uint8Array && Array.prototype.forEach) || Vt("Trident/")) return !1;
                            var t = Ht();
                            return !(t && 13 > t || !(e.MediaKeys && e.navigator && e.navigator.requestMediaKeySystemAccess && e.MediaKeySystemAccess && e.MediaKeySystemAccess.prototype.getConfiguration)) && (!!Pt() || Lt("application/x-mpegurl"))
                        }, ad.setAdManagerFactory = function(e) {
                            uh = e
                        }, ad.registerSupportPlugin = function(e, t) {
                            sh[e] = t
                        }, ad.prototype.destroy = ad.prototype.destroy;
                        var th = 0,
                            nh = 1,
                            ih = 2,
                            rh = 3;
                        ad.LoadMode = {
                            DESTROYED: th,
                            NOT_LOADED: nh,
                            MEDIA_SOURCE: ih,
                            SRC_EQUALS: rh
                        }, ad.version = "4.4.2-npm-dirty";
                        var ah = ["", "4"];
                        lr = new function(e) {
                            this.g = e, this.i = sr, this.h = ur
                        }(new ar(Number(ah[0]), Number(ah[1])));
                        var oh = ["output-restricted", "internal-error"],
                            sh = {},
                            uh = null,
                            lh = {
                                mp4: "video/mp4",
                                m4v: "video/mp4",
                                m4a: "audio/mp4",
                                webm: "video/webm",
                                weba: "audio/webm",
                                mkv: "video/webm",
                                ts: "video/mp2t",
                                ogv: "video/ogg",
                                ogg: "audio/ogg",
                                mpg: "video/mpeg",
                                mpeg: "video/mpeg",
                                m3u8: "application/x-mpegurl",
                                mpd: "application/dash+xml",
                                mp3: "audio/mpeg",
                                aac: "audio/aac",
                                flac: "audio/flac",
                                wav: "audio/wav"
                            },
                            ch = {
                                sbv: "text/x-subviewer",
                                srt: "text/srt",
                                vtt: "text/vtt",
                                webvtt: "text/vtt",
                                ttml: "application/ttml+xml",
                                lrc: "application/x-subtitle-lrc",
                                ssa: "text/x-ssa",
                                ass: "text/x-ssa"
                            };

                        function dh() {}

                        function hh(e, t) {
                            for (e = {
                                    priority: t || 0,
                                    Ue: e
                                }, t = 0; t < fh.length; t++)
                                if (fh[t].priority < e.priority) return void fh.splice(t, 0, e);
                            fh.push(e)
                        }
                        F("shaka.polyfill", dh), dh.register = hh, dh.installAll = function() {
                            for (var e = c(fh), t = e.next(); !t.done; t = e.next()) {
                                t = t.value;
                                try {
                                    t.Ue()
                                } catch (n) {
                                    G("Error installing polyfill!", n)
                                }
                            }
                        };
                        var fh = [];

                        function ph() {
                            this.g = new mh
                        }

                        function gh() {
                            e.AbortController || (e.AbortController = ph, e.AbortSignal = mh)
                        }

                        function mh() {
                            Ta.call(this), this.h = !1, this.g = void 0, this.onabort = null
                        }

                        function vh() {}

                        function yh() {
                            if (!Object.getOwnPropertyDescriptor(Element.prototype, "ariaHidden"))
                                for (var e = c(["ariaHidden", "ariaLabel", "ariaPressed", "ariaSelected"]), t = e.next(); !t.done; t = e.next()) bh(t.value)
                        }

                        function bh(e) {
                            var t = "aria-" + e.toLowerCase().replace(/^aria/, "");
                            Object.defineProperty(Element.prototype, e, {
                                get: function() {
                                    return this.getAttribute(t)
                                },
                                set: function(e) {
                                    null == e || null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                                }
                            })
                        }

                        function wh() {}

                        function xh() {
                            yp()
                        }

                        function Th() {}

                        function Sh() {
                            if (e.Document) {
                                var t = Element.prototype;
                                t.requestFullscreen = t.requestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen || t.webkitRequestFullscreen, (t = Document.prototype).exitFullscreen = t.exitFullscreen || t.mozCancelFullScreen || t.msExitFullscreen || t.webkitCancelFullScreen, "fullscreenElement" in document || (Object.defineProperty(document, "fullscreenElement", {
                                    get: function() {
                                        return document.mozFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement
                                    }
                                }), Object.defineProperty(document, "fullscreenEnabled", {
                                    get: function() {
                                        return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled
                                    }
                                })), document.addEventListener("webkitfullscreenchange", Ah), document.addEventListener("webkitfullscreenerror", Ah), document.addEventListener("mozfullscreenchange", Ah), document.addEventListener("mozfullscreenerror", Ah), document.addEventListener("MSFullscreenChange", Ah), document.addEventListener("MSFullscreenError", Ah)
                            }
                        }

                        function Ah(e) {
                            var t = e.type.replace(/^(webkit|moz|MS)/, "").toLowerCase(),
                                n = document.createEvent("Event");
                            n.initEvent(t, e.bubbles, e.cancelable), e.target.dispatchEvent(n)
                        }

                        function kh() {}

                        function Eh() {
                            var e = !0;
                            (Bt() || Vt("PlayStation 5") || Ft() || Vt("Web0S") || Ot() || Vt("CrKey") || Vt("PC=EOS") || Vt("Hisense") || Vt("VIDAA")) && (e = !1), e && navigator.mediaCapabilities || (navigator.mediaCapabilities || (navigator.mediaCapabilities = {}), Ih = navigator.mediaCapabilities, navigator.mediaCapabilities.decodingInfo = Ch)
                        }

                        function Ch(t) {
                            var n, i, r, a, o, s, u, l, c, d, h, f, p, g, m, v;
                            return _((function(y) {
                                switch (y.g) {
                                    case 1:
                                        if (n = {
                                                supported: !1,
                                                powerEfficient: !0,
                                                smooth: !0,
                                                keySystemAccess: null,
                                                configuration: t
                                            }, !t) return y.return(n);
                                        if (i = t.video, r = t.audio, "media-source" == t.type) {
                                            if (!Pt()) return y.return(n);
                                            if (i) {
                                                if (Vt("CrKey"))
                                                    if (e.cast && cast.__platform__ && cast.__platform__.canDisplayType) {
                                                        var b = i.contentType;
                                                        i.width && i.height && (b += "; width=" + i.width + "; height=" + i.height), i.framerate && (b += "; framerate=" + i.framerate), "pq" === i.transferFunction && (b += "; eotf=smpte2084"), a = cast.__platform__.canDisplayType(b)
                                                    } else a = Y(i.contentType);
                                                else Ot() ? (o = i.contentType, i.width && i.height && (o += "; width=" + i.width, o += "; height=" + i.height), i.framerate && (o += "; framerate=" + i.framerate), i.bitrate && (o += "; bitrate=" + i.bitrate), a = Y(o)) : a = Y(i.contentType);
                                                if (!a) return y.return(n)
                                            }
                                            if (r && (s = r.contentType, !Y(s))) return y.return(n)
                                        } else {
                                            if ("file" != t.type) return y.return(n);
                                            if (i && (u = i.contentType, !Lt(u)) || r && (l = r.contentType, !Lt(l))) return y.return(n)
                                        }
                                        if (!t.keySystemConfiguration) return n.supported = !0, y.return(Promise.resolve(n));
                                        if (c = t.keySystemConfiguration, d = [], h = [], c.audio && (f = {
                                                robustness: c.audio.robustness || "",
                                                contentType: t.audio.contentType
                                            }, d.push(f)), c.video && (p = {
                                                robustness: c.video.robustness || "",
                                                contentType: t.video.contentType
                                            }, h.push(p)), g = {
                                                initDataTypes: [c.initDataType],
                                                distinctiveIdentifier: c.distinctiveIdentifier,
                                                persistentState: c.persistentState,
                                                sessionTypes: c.sessionTypes
                                            }, d.length && (g.audioCapabilities = d), h.length && (g.videoCapabilities = h), m = (t.video ? t.video.contentType : "") + "#" + (t.audio ? t.audio.contentType : "") + "#" + t.keySystemConfiguration.keySystem, S(y, 3), m in Mh) {
                                            v = Mh[m], y.B(5);
                                            break
                                        }
                                        return x(y, navigator.requestMediaKeySystemAccess(c.keySystem, [g]), 6);
                                    case 6:
                                        v = y.h, Mh[m] = v;
                                    case 5:
                                        A(y, 4);
                                        break;
                                    case 3:
                                        k(y);
                                    case 4:
                                        v && (n.supported = !0, n.keySystemAccess = v);
                                    case 2:
                                        return y.return(n)
                                }
                            }))
                        }
                        ph.prototype.abort = function(e) {
                            var t = this.g;
                            t.h || (t.h = !0, t.g = e, void 0 === t.g && (t.g = new DOMException("signal is aborted without reason", "AbortError")), e = new xa("abort"), t.onabort && t.onabort(e), t.dispatchEvent(e))
                        }, s.Object.defineProperties(ph.prototype, {
                            signal: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.g
                                }
                            }
                        }), dh.AbortController = ph, ph.install = gh, v(mh, Ta), s.Object.defineProperties(mh.prototype, {
                            aborted: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.h
                                }
                            },
                            reason: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.g
                                }
                            }
                        }), hh(gh), dh.Aria = vh, vh.install = yh, hh(yh), dh.EncryptionScheme = wh, wh.install = xh, hh(xh, -2), dh.Fullscreen = Th, Th.install = Sh, hh(Sh), dh.MediaCapabilities = kh, kh.install = Eh;
                        var Ih = null;
                        kh.originalMcap = Ih;
                        var Mh = {};

                        function Dh() {}

                        function Rh() {
                            var t = Ht();
                            e.MediaSource && (e.cast && cast.__platform__ && cast.__platform__.canDisplayType ? function() {
                                var e = MediaSource.isTypeSupported;
                                MediaSource.isTypeSupported = function(t) {
                                    var n = t.split(/ *; */);
                                    return n.shift(), n.some((function(e) {
                                        return e.startsWith("codecs=")
                                    })) ? cast.__platform__.canDisplayType(t) : e(t)
                                }
                            }() : t ? 12 >= t ? (_h(), function() {
                                var e = SourceBuffer.prototype.remove;
                                SourceBuffer.prototype.remove = function(t, n) {
                                    return e.call(this, t, n - .001)
                                }
                            }()) : 15 >= t && _h() : Nt() ? function() {
                                var e = MediaSource.isTypeSupported;
                                MediaSource.isTypeSupported = function(t) {
                                    return "mp2t" != t.split(";")[0].split("/")[1] && e(t)
                                }
                            }() : (Vt("Tizen 2") || Vt("Tizen 3") || Vt("Tizen 4")) && function() {
                                var e = MediaSource.isTypeSupported;
                                MediaSource.isTypeSupported = function(t) {
                                    return "opus" != ft(t)[0] && e(t)
                                }
                            }()), e.MediaSource && MediaSource.isTypeSupported('video/webm; codecs="vp9"') && !MediaSource.isTypeSupported('video/webm; codecs="vp09.00.10.08"') && function() {
                                var e = MediaSource.isTypeSupported;
                                Vt("Web0S") || (MediaSource.isTypeSupported = function(t) {
                                    var n = t.split(/ *; */),
                                        i = n.findIndex((function(e) {
                                            return e.startsWith("codecs=")
                                        }));
                                    if (0 > i) return e(t);
                                    var r = n[i].replace("codecs=", "").replace(/"/g, "").split(/\s*,\s*/),
                                        a = r.findIndex((function(e) {
                                            return e.startsWith("vp09")
                                        }));
                                    return 0 <= a && (r[a] = "vp9", n[i] = 'codecs="' + r.join(",") + '"', t = n.join("; ")), e(t)
                                })
                            }()
                        }

                        function _h() {
                            var e = MediaSource.prototype.addSourceBuffer;
                            MediaSource.prototype.addSourceBuffer = function() {
                                var t = e.apply(this, P.apply(0, arguments));
                                return t.abort = function() {}, t
                            }
                        }

                        function Ph() {}

                        function Lh() {
                            screen.orientation && screen.orientation.unlock || (null != screen.orientation ? (void 0 === screen.orientation.lock && (screen.orientation.lock = function() {
                                return Promise.resolve()
                            }), void 0 === screen.orientation.unlock && (screen.orientation.unlock = function() {})) : null != e.orientation && function() {
                                function t() {
                                    switch (e.orientation) {
                                        case -90:
                                            n.type = "landscape-secondary", n.angle = 270;
                                            break;
                                        case 0:
                                            n.type = "portrait-primary", n.angle = 0;
                                            break;
                                        case 90:
                                            n.type = "landscape-primary", n.angle = 90;
                                            break;
                                        case 180:
                                            n.type = "portrait-secondary", n.angle = 180
                                    }
                                }
                                var n = new Nh;
                                screen.orientation = n, t(), e.addEventListener("orientationchange", (function() {
                                    t();
                                    var e = new xa("change");
                                    n.dispatchEvent(e)
                                }))
                            }())
                        }

                        function Nh() {
                            Ta.call(this), this.type = "", this.angle = 0
                        }

                        function jh() {}

                        function Oh() {
                            !e.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (navigator.requestMediaKeySystemAccess = Uh, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Bh, e.MediaKeys = Fh, e.MediaKeySystemAccess = Hh, e.shakaMediaKeysPolyfill = !0)
                        }

                        function Uh() {
                            return Promise.reject(Error("The key system specified is not supported."))
                        }

                        function Bh(e) {
                            return null == e ? Promise.resolve() : Promise.reject(Error("MediaKeys not supported."))
                        }

                        function Fh() {
                            throw new TypeError("Illegal constructor.")
                        }

                        function Hh() {
                            throw this.keySystem = "", new TypeError("Illegal constructor.")
                        }

                        function Vh() {}

                        function zh() {
                            if (!(!e.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration)) {
                                if (HTMLMediaElement.prototype.webkitGenerateKeyRequest) nf = "webkit";
                                else if (!HTMLMediaElement.prototype.generateKeyRequest) return;
                                navigator.requestMediaKeySystemAccess = Kh, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Gh, e.MediaKeys = Xh, e.MediaKeySystemAccess = Wh, e.shakaMediaKeysPolyfill = !0
                            }
                        }

                        function qh(e) {
                            return nf ? nf + e.charAt(0).toUpperCase() + e.slice(1) : e
                        }

                        function Kh(e, t) {
                            try {
                                var n = new Wh(e, t);
                                return Promise.resolve(n)
                            } catch (i) {
                                return Promise.reject(i)
                            }
                        }

                        function Gh(e) {
                            var t = this.mediaKeys;
                            return t && t != e && Yh(t, null), delete this.mediaKeys, (this.mediaKeys = e) && Yh(e, this), Promise.resolve()
                        }

                        function Wh(e, t) {
                            this.g = this.keySystem = e;
                            var n = !1;
                            "org.w3.clearkey" == e && (this.g = "webkit-org.w3.clearkey", n = !1);
                            var i = !1,
                                r = document.getElementsByTagName("video");
                            r = r.length ? r[0] : document.createElement("video");
                            for (var a = (t = c(t)).next(); !a.done; a = t.next()) {
                                var o = {
                                        audioCapabilities: [],
                                        videoCapabilities: [],
                                        persistentState: "optional",
                                        distinctiveIdentifier: "optional",
                                        initDataTypes: (a = a.value).initDataTypes,
                                        sessionTypes: ["temporary"],
                                        label: a.label
                                    },
                                    s = !1;
                                if (a.audioCapabilities)
                                    for (var u = c(a.audioCapabilities), l = u.next(); !l.done; l = u.next())(l = l.value).contentType && (s = !0, r.canPlayType(l.contentType.split(";")[0], this.g) && (o.audioCapabilities.push(l), i = !0));
                                if (a.videoCapabilities)
                                    for (l = (u = c(a.videoCapabilities)).next(); !l.done; l = u.next())(l = l.value).contentType && (s = !0, r.canPlayType(l.contentType, this.g) && (o.videoCapabilities.push(l), i = !0));
                                if (s || (i = r.canPlayType("video/mp4", this.g) || r.canPlayType("video/webm", this.g)), "required" == a.persistentState && (n ? (o.persistentState = "required", o.sessionTypes = ["persistent-license"]) : i = !1), i) return void(this.h = o)
                            }
                            throw n = "Unsupported keySystem", "org.w3.clearkey" != e && "com.widevine.alpha" != e || (n = "None of the requested configurations were supported."), (e = Error(n)).name = "NotSupportedError", e.code = DOMException.NOT_SUPPORTED_ERR, e
                        }

                        function Xh(e) {
                            this.l = e, this.h = null, this.g = new Co, this.i = [], this.j = new Map
                        }

                        function Yh(e, t) {
                            e.h = t, e.g.Nb();
                            var n = nf;
                            t && (e.g.J(t, n + "needkey", (function(t) {
                                var n = new CustomEvent("encrypted");
                                n.initDataType = "cenc", n.initData = ne(t.initData), e.h.dispatchEvent(n)
                            })), e.g.J(t, n + "keymessage", (function(t) {
                                var n = Jh(e, t.sessionId);
                                n && (t = new xa("message", t = (new Map).set("messageType", null == n.keyStatuses.jc() ? "licenserequest" : "licenserenewal").set("message", t.message)), n.h && (n.h.resolve(), n.h = null), n.dispatchEvent(t))
                            })), e.g.J(t, n + "keyadded", (function(t) {
                                (t = Jh(e, t.sessionId)) && (ef(t, "usable"), t.g && t.g.resolve(), t.g = null)
                            })), e.g.J(t, n + "keyerror", (function(t) {
                                var n = Jh(e, t.sessionId);
                                n && n.handleError(t)
                            })))
                        }

                        function Jh(e, t) {
                            var n = e.j.get(t);
                            return n || ((n = e.i.shift()) ? (n.sessionId = t, e.j.set(t, n), n) : null)
                        }

                        function $h(e, t, n) {
                            Ta.call(this), this.j = e, this.m = !1, this.g = this.h = null, this.i = t, this.l = n, this.sessionId = "", this.expiration = NaN, this.closed = new pa, this.keyStatuses = new tf
                        }

                        function Qh(e, t, n) {
                            if (e.m) return Promise.reject(Error("The session is already initialized."));
                            e.m = !0;
                            try {
                                if ("persistent-license" == e.l)
                                    if (n) var i = ie(Ri("LOAD_SESSION|" + n));
                                    else {
                                        var r = Ri("PERSISTENT|");
                                        i = _r(r, t)
                                    }
                                else i = ie(t)
                            } catch (o) {
                                return Promise.reject(o)
                            }
                            e.h = new pa;
                            var a = qh("generateKeyRequest");
                            try {
                                e.j[a](e.i, i)
                            } catch (o) {
                                if ("InvalidStateError" != o.name) return e.h = null, Promise.reject(o);
                                new _t((function() {
                                    try {
                                        e.j[a](e.i, i)
                                    } catch (t) {
                                        e.h.reject(t), e.h = null
                                    }
                                })).V(.01)
                            }
                            return e.h
                        }

                        function Zh(e, t, n) {
                            if (e.g) e.g.then((function() {
                                return Zh(e, t, n)
                            })).catch((function() {
                                return Zh(e, t, n)
                            }));
                            else {
                                if (e.g = t, "webkit-org.w3.clearkey" == e.i) {
                                    var i = Ii(n),
                                        r = JSON.parse(i);
                                    "oct" != r.keys[0].kty && (e.g.reject(Error("Response is not a valid JSON Web Key Set.")), e.g = null), i = Mr(r.keys[0].k), r = Mr(r.keys[0].kid)
                                } else i = ie(n), r = null;
                                var a = qh("addKey");
                                try {
                                    e.j[a](e.i, i, r, e.sessionId)
                                } catch (o) {
                                    e.g.reject(o), e.g = null
                                }
                            }
                        }

                        function ef(e, t) {
                            var n = e.keyStatuses;
                            n.size = null == t ? 0 : 1, n.g = t, t = new xa("keystatuseschange"), e.dispatchEvent(t)
                        }

                        function tf() {
                            this.size = 0, this.g = void 0
                        }
                        kh.memoizedMediaKeySystemAccessRequests_ = Mh, hh(Eh, -1), dh.MediaSource = Dh, Dh.install = Rh, hh(Rh), dh.Orientation = Ph, Ph.install = Lh, v(Nh, Ta), Nh.prototype.lock = function(e) {
                            function t(e) {
                                return screen.lockOrientation ? screen.lockOrientation(e) : screen.mozLockOrientation ? screen.mozLockOrientation(e) : !!screen.msLockOrientation && screen.msLockOrientation(e)
                            }
                            var n = !1;
                            switch (e) {
                                case "natural":
                                    n = t("default");
                                    break;
                                case "any":
                                    n = !0, this.unlock();
                                    break;
                                default:
                                    n = t(e)
                            }
                            return n ? Promise.resolve() : ((e = Error("screen.orientation.lock() is not available on this device")).name = "NotSupportedError", e.code = DOMException.NOT_SUPPORTED_ERR, Promise.reject(e))
                        }, Nh.prototype.unlock = function() {
                            screen.unlockOrientation ? screen.unlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
                        }, hh(Lh), dh.PatchedMediaKeysNop = jh, jh.install = Oh, Fh.prototype.createSession = function() {}, Fh.prototype.setServerCertificate = function() {}, Fh.prototype.getStatusForPolicy = function() {
                            return Promise.resolve("usable")
                        }, Hh.prototype.getConfiguration = function() {}, Hh.prototype.createMediaKeys = function() {}, hh(Oh, -10), dh.PatchedMediaKeysWebkit = Vh, Vh.install = zh, Wh.prototype.createMediaKeys = function() {
                            var e = new Xh(this.g);
                            return Promise.resolve(e)
                        }, Wh.prototype.getConfiguration = function() {
                            return this.h
                        }, Xh.prototype.createSession = function(e) {
                            if ("temporary" != (e = e || "temporary") && "persistent-license" != e) throw new TypeError("Session type " + e + " is unsupported on this platform.");
                            var t = this.h || document.createElement("video");
                            return t.src || (t.src = "about:blank"), e = new $h(t, this.l, e), this.i.push(e), e
                        }, Xh.prototype.setServerCertificate = function() {
                            return Promise.resolve(!1)
                        }, Xh.prototype.getStatusForPolicy = function() {
                            return Promise.resolve("usable")
                        }, v($h, Ta), (i = $h.prototype).handleError = function(e) {
                            var t = Error("EME v0.1b key error"),
                                n = e.errorCode;
                            n.systemCode = e.systemCode, t.errorCode = n, !e.sessionId && this.h ? (45 == e.systemCode && (t.message = "Unsupported session type."), this.h.reject(t), this.h = null) : e.sessionId && this.g ? (this.g.reject(t), this.g = null) : (t = e.systemCode, e.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT ? ef(this, "output-restricted") : ef(this, 1 == t ? "expired" : "internal-error"))
                        }, i.generateRequest = function(e, t) {
                            return Qh(this, t, null)
                        }, i.load = function(e) {
                            return "persistent-license" == this.l ? Qh(this, null, e) : Promise.reject(Error("Not a persistent session."))
                        }, i.update = function(e) {
                            var t = new pa;
                            return Zh(this, t, e), t
                        }, i.close = function() {
                            if ("persistent-license" != this.l) {
                                if (!this.sessionId) return this.closed.reject(Error("The session is not callable.")), this.closed;
                                var e = qh("cancelKeyRequest");
                                try {
                                    this.j[e](this.i, this.sessionId)
                                } catch (t) {}
                            }
                            return this.closed.resolve(), this.closed
                        }, i.remove = function() {
                            return "persistent-license" != this.l ? Promise.reject(Error("Not a persistent session.")) : this.close()
                        }, (i = tf.prototype).jc = function() {
                            return this.g
                        }, i.forEach = function(e) {
                            this.g && e(this.g, $o.value())
                        }, i.get = function(e) {
                            if (this.has(e)) return this.g
                        }, i.has = function(e) {
                            var t = $o.value();
                            return !(!this.g || !ee(e, t))
                        }, i.entries = function() {}, i.keys = function() {}, i.values = function() {};
                        var nf = "";

                        function rf() {}

                        function af() {
                            if (e.HTMLVideoElement) {
                                var t = HTMLVideoElement.prototype;
                                t.requestPictureInPicture && document.exitPictureInPicture || !t.webkitSupportsPresentationMode || (document.pictureInPictureEnabled = !0, document.pictureInPictureElement = null, t.requestPictureInPicture = sf, Object.defineProperty(t, "disablePictureInPicture", {
                                    get: lf,
                                    set: cf,
                                    enumerable: !0,
                                    configurable: !0
                                }), document.exitPictureInPicture = uf, document.addEventListener("webkitpresentationmodechanged", of , !0))
                            }
                        }

                        function of (e) {
                            if ("picture-in-picture" == (e = e.target).webkitPresentationMode) {
                                document.pictureInPictureElement = e;
                                var t = new Event("enterpictureinpicture");
                                e.dispatchEvent(t)
                            } else document.pictureInPictureElement == e && (document.pictureInPictureElement = null), t = new Event("leavepictureinpicture"), e.dispatchEvent(t)
                        }

                        function sf() {
                            return this.webkitSupportsPresentationMode("picture-in-picture") ? (this.webkitSetPresentationMode("picture-in-picture"), document.pictureInPictureElement = this, Promise.resolve()) : Promise.reject(Error("PiP not allowed by video element"))
                        }

                        function uf() {
                            var e = document.pictureInPictureElement;
                            return e ? (e.webkitSetPresentationMode("inline"), document.pictureInPictureElement = null, Promise.resolve()) : Promise.reject(Error("No picture in picture element found"))
                        }

                        function lf() {
                            return !!this.hasAttribute("disablePictureInPicture") || !this.webkitSupportsPresentationMode("picture-in-picture")
                        }

                        function cf(e) {
                            e ? this.setAttribute("disablePictureInPicture", "") : this.removeAttribute("disablePictureInPicture")
                        }

                        function df() {}

                        function hf() {
                            e.crypto && ("randomUUID" in e.crypto || (e.crypto.randomUUID = ff))
                        }

                        function ff() {
                            var e = URL.createObjectURL(new Blob),
                                t = e.toString();
                            return URL.revokeObjectURL(e), t.substr(t.lastIndexOf("/") + 1)
                        }

                        function pf() {}

                        function gf() {
                            navigator.storage && navigator.storage.estimate || !navigator.webkitTemporaryStorage || !navigator.webkitTemporaryStorage.queryUsageAndQuota || ("storage" in navigator || (navigator.storage = {}), navigator.storage.estimate = mf)
                        }

                        function mf() {
                            return new Promise((function(e, t) {
                                navigator.webkitTemporaryStorage.queryUsageAndQuota((function(t, n) {
                                    e({
                                        usage: t,
                                        quota: n
                                    })
                                }), t)
                            }))
                        }

                        function vf() {}

                        function yf() {
                            var e = Symbol.prototype;
                            "description" in e || Object.defineProperty(e, "description", {
                                get: bf
                            })
                        }

                        function bf() {
                            var e = /\((.*)\)/.exec(this.toString());
                            return e ? e[1] : void 0
                        }

                        function wf() {}

                        function xf() {
                            if (e.HTMLMediaElement) {
                                var t = HTMLMediaElement.prototype.play;
                                HTMLMediaElement.prototype.play = function() {
                                    var e = t.apply(this);
                                    return e && e.catch((function() {})), e
                                }
                            }
                        }

                        function Tf() {}

                        function Sf() {
                            if (e.HTMLVideoElement) {
                                var t = HTMLVideoElement.prototype;
                                !t.getVideoPlaybackQuality && ("webkitDroppedFrameCount" in t || Ut()) && (t.getVideoPlaybackQuality = Af)
                            }
                        }

                        function Af() {
                            return {
                                droppedVideoFrames: this.webkitDroppedFrameCount,
                                totalVideoFrames: this.webkitDecodedFrameCount,
                                corruptedVideoFrames: 0,
                                creationTime: NaN,
                                totalFrameDelay: 0
                            }
                        }

                        function kf() {}

                        function Ef() {
                            if (!e.VTTCue && e.TextTrackCue) {
                                var t = null,
                                    n = TextTrackCue.length;
                                if (3 == n) t = Cf;
                                else if (6 == n) t = If;
                                else {
                                    try {
                                        var i = !!Cf(1, 2, "")
                                    } catch (r) {
                                        i = !1
                                    }
                                    i && (t = Cf)
                                }
                                t && (e.VTTCue = function(e, n, i) {
                                    return t(e, n, i)
                                })
                            }
                        }

                        function Cf(t, n, i) {
                            return new e.TextTrackCue(t, n, i)
                        }

                        function If(t, n, i) {
                            return new e.TextTrackCue(t + "-" + n + "-" + i, t, n, i)
                        }

                        function Mf(e, t) {
                            var n = 1 & e[t + 1] ? 7 : 9;
                            return t + n <= e.length && 0 < (e = ((3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5) - n) ? {
                                Lc: n,
                                M: e
                            } : null
                        }

                        function Df(e, t) {
                            var n = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
                                i = (60 & e[t + 2]) >>> 2;
                            if (i > n.length - 1) return null;
                            var r = 1 + ((192 & e[t + 2]) >>> 6),
                                a = (1 & e[t + 2]) << 2;
                            return a |= (192 & e[t + 3]) >>> 6, {
                                sampleRate: n[i],
                                channelCount: a,
                                Bc: "mp4a.40." + r
                            }
                        }

                        function Rf(e, t) {
                            if (t + 1 < e.length && 255 === e[t] && 240 == (246 & e[t + 1])) {
                                var n = 1 & e[t + 1] ? 7 : 9;
                                if (t + n >= e.length) return !1;
                                var i = (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5;
                                return !(i <= n) && ((t += i) === e.length || t + 1 < e.length && 255 === e[t] && 240 == (246 & e[t + 1]))
                            }
                            return !1
                        }

                        function _f(e) {
                            this.i = e, this.h = 0, this.g = new Map
                        }

                        function Pf(e, t) {
                            if (t + 8 > e.length || 11 !== e[t] || 119 !== e[t + 1]) return null;
                            var n = e[t + 4] >> 6;
                            if (3 <= n) return null;
                            var i = 63 & e[t + 4],
                                r = 2 * [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][3 * i + n];
                            if (t + r > e.length) return null;
                            var a = e[t + 6] >> 5,
                                o = 0;
                            2 === a ? o += 2 : (1 & a && 1 !== a && (o += 2), 4 & a && (o += 2)), o = (e[t + 6] << 8 | e[t + 7]) >> 12 - o & 1;
                            var s = 7 & e[t + 5];
                            return e = new Uint8Array([n << 6 | e[t + 5] >> 3 << 1 | s >> 2, (3 & s) << 6 | a << 3 | o << 2 | i >> 4, i << 4 & 224]), {
                                sampleRate: [48e3, 44100, 32e3][n],
                                channelCount: [2, 1, 2, 3, 3, 4, 4, 5][a] + o,
                                Y: e,
                                M: r
                            }
                        }

                        function Lf(e, t) {
                            if (11 === e[t] && 119 === e[t + 1]) {
                                var n, i, r = 0,
                                    a = 5;
                                for (t += a; 0 < a;) {
                                    i = e[t];
                                    var o = Math.min(a, 8),
                                        s = 8 - o;
                                    n = (i & (n = 4278190080 >>> 24 + s << s)) >> s, r = r ? r << o | n : n, t += 1, a -= o
                                }
                                if (16 > r) return !0
                            }
                            return !1
                        }

                        function Nf(e) {
                            this.i = e, this.h = 0, this.g = new Map
                        }

                        function jf(e, t) {
                            if (t + 8 > e.length || 2935 != (e[t] << 8 | e[t + 1])) return null;
                            var n = new cr(e.subarray(t + 2));
                            hr(n, 2), hr(n, 3);
                            var i = fr(n, 11) + 1 << 1,
                                r = fr(n, 2);
                            if (3 == r) {
                                r = [24e3, 22060, 16e3][r = fr(n, 2)];
                                var a = 3
                            } else r = [48e3, 44100, 32e3][r], a = fr(n, 2);
                            var o = fr(n, 3),
                                s = fr(n, 1);
                            return n = fr(n, 5), t + i > e.byteLength ? null : (e = Math.floor(i * r / (16 * [1, 2, 3, 6][a])), e = new Uint8Array([(8160 & e) >> 5, (31 & e) << 3, r << 6 | n << 1, o << 1 | s, 0]), {
                                sampleRate: r,
                                channelCount: [2, 1, 2, 3, 3, 4, 4, 5][o] + s,
                                Y: e,
                                M: i
                            })
                        }

                        function Of(e) {
                            this.i = e, this.h = 0, this.g = new Map
                        }

                        function Uf(e) {
                            for (var t = !1, n = new Uint8Array([]), i = e.find((function(e) {
                                    return 7 == e.type
                                })), r = !1, a = (e = c(e)).next(); !a.done; a = e.next()) {
                                var o = !1;
                                switch ((a = a.value).type) {
                                    case 1:
                                        o = r = !0;
                                        var s = a.data;
                                        i && 4 < s.length && (2 === (s = yr(new cr(s))) || 4 === s || 7 === s || 9 === s) && (t = !0);
                                        break;
                                    case 5:
                                        t = o = r = !0;
                                        break;
                                    case 6:
                                    case 7:
                                    case 8:
                                    case 12:
                                        o = !0;
                                        break;
                                    case 9:
                                        r = o = !0;
                                        break;
                                    default:
                                        o = !1
                                }
                                r && o && (o = a.La.byteLength, (s = new Uint8Array(4))[0] = o >> 24 & 255, s[1] = o >> 16 & 255, s[2] = o >> 8 & 255, s[3] = 255 & o, n = _r(n, s, a.La))
                            }
                            return n.byteLength ? {
                                data: n,
                                ve: t
                            } : null
                        }
                        hh(zh), dh.PiPWebkit = rf, rf.install = af, hh(af), dh.RandomUUID = df, df.install = hf, hh(hf), dh.StorageEstimate = pf, pf.install = gf, hh(gf), dh.Symbol = vf, vf.install = yf, hh(yf), dh.VideoPlayPromise = wf, wf.install = xf, hh(xf), dh.VideoPlaybackQuality = Tf, Tf.install = Sf, hh(Sf), dh.VTTCue = kf, kf.install = Ef, hh(Ef), (i = _f.prototype).destroy = function() {
                            this.g.clear()
                        }, i.isSupported = function(e) {
                            return "audio/aac" == e.toLowerCase().split(";")[0] && Y(this.convertCodecs("audio", e))
                        }, i.convertCodecs = function(e, t) {
                            return "audio/aac" == t.toLowerCase().split(";")[0] ? 'audio/mp4; codecs="' + (ht(t) || "mp4a.40.2") + '"' : t
                        }, i.getOrginalMimeType = function() {
                            return this.i
                        }, i.transmux = function(e, t, n, i) {
                            for (var r = ie(e), a = kr(r), o = a.length; o < r.length && !Rf(r, o); o++);
                            if (e = 1e3 * n.endTime, (a = Ar(a)).length && n && (n = a.find((function(e) {
                                    return "com.apple.streaming.transportStreamTimestamp" === e.description
                                }))) && (e = n.data), !(n = Df(r, o))) return Promise.reject(new Ye(2, 3, 3018));
                            for (t.audioSamplingRate = n.sampleRate, t.channelsCount = n.channelCount, a = []; o < r.length;) {
                                var s = Mf(r, o);
                                if (!s) return Promise.reject(new Ye(2, 3, 3018));
                                var u = s.Lc + s.M;
                                o + u <= r.length && a.push({
                                    data: r.subarray(o + s.Lc, o + u),
                                    size: s.M,
                                    duration: 1024,
                                    Ja: 0,
                                    flags: {
                                        Pa: 0,
                                        Fa: 0,
                                        Ea: 0,
                                        Ba: 0,
                                        Ca: 2,
                                        Qa: 0
                                    }
                                }), o += u
                            }
                            return r = n.sampleRate, e = Math.floor(e * r / 1e3), e = new kl([i = {
                                id: t.id,
                                type: "audio",
                                codecs: n.Bc,
                                encrypted: t.encrypted && 0 < t.drmInfos.length,
                                timescale: r,
                                duration: i,
                                xa: [],
                                Y: new Uint8Array([]),
                                ga: new Uint8Array([]),
                                data: {
                                    Ua: this.h,
                                    baseMediaDecodeTime: e,
                                    wa: a
                                },
                                stream: t
                            }]), this.g.has(t.id) ? i = this.g.get(t.id) : (i = e.initSegment(), this.g.set(t.id, i)), t = Ml(e), this.h++, t = _r(i, t), Promise.resolve(t)
                        }, F("shaka.transmuxer.AacTransmuxer", _f), _f.prototype.transmux = _f.prototype.transmux, _f.prototype.getOrginalMimeType = _f.prototype.getOrginalMimeType, _f.prototype.convertCodecs = _f.prototype.convertCodecs, _f.prototype.isSupported = _f.prototype.isSupported, _f.prototype.destroy = _f.prototype.destroy, Ce("audio/aac", (function() {
                            return new _f("audio/aac")
                        }), De), (i = Nf.prototype).destroy = function() {
                            this.g.clear()
                        }, i.isSupported = function(e) {
                            return "audio/ac3" == e.toLowerCase().split(";")[0] && Y(this.convertCodecs("audio", e))
                        }, i.convertCodecs = function(e, t) {
                            return "audio/ac3" == t.toLowerCase().split(";")[0] ? 'audio/mp4; codecs="ac-3"' : t
                        }, i.getOrginalMimeType = function() {
                            return this.i
                        }, i.transmux = function(e, t, n, i) {
                            for (var r = kr(e = ie(e)), a = r.length; a < e.length && !Lf(e, a); a++);
                            var o = 1e3 * n.endTime;
                            (r = Ar(r)).length && n && (n = r.find((function(e) {
                                return "com.apple.streaming.transportStreamTimestamp" === e.description
                            }))) && (o = n.data), n = 0, r = new Uint8Array([]);
                            for (var s = []; a < e.length;) {
                                var u = Pf(e, a);
                                if (!u) return Promise.reject(new Ye(2, 3, 3018));
                                t.audioSamplingRate = u.sampleRate, t.channelsCount = u.channelCount, n = u.sampleRate, r = u.Y, s.push({
                                    data: e.subarray(a, a + u.M),
                                    size: u.M,
                                    duration: 1536,
                                    Ja: 0,
                                    flags: {
                                        Pa: 0,
                                        Fa: 0,
                                        Ea: 0,
                                        Ba: 0,
                                        Ca: 2,
                                        Qa: 0
                                    }
                                }), a += u.M
                            }
                            return e = Math.floor(o * n / 1e3), e = new kl([i = {
                                id: t.id,
                                type: "audio",
                                codecs: "ac-3",
                                encrypted: t.encrypted && 0 < t.drmInfos.length,
                                timescale: n,
                                duration: i,
                                xa: [],
                                Y: r,
                                ga: new Uint8Array([]),
                                data: {
                                    Ua: this.h,
                                    baseMediaDecodeTime: e,
                                    wa: s
                                },
                                stream: t
                            }]), this.g.has(t.id) ? i = this.g.get(t.id) : (i = e.initSegment(), this.g.set(t.id, i)), t = Ml(e), this.h++, t = _r(i, t), Promise.resolve(t)
                        }, F("shaka.transmuxer.Ac3Transmuxer", Nf), Nf.prototype.transmux = Nf.prototype.transmux, Nf.prototype.getOrginalMimeType = Nf.prototype.getOrginalMimeType, Nf.prototype.convertCodecs = Nf.prototype.convertCodecs, Nf.prototype.isSupported = Nf.prototype.isSupported, Nf.prototype.destroy = Nf.prototype.destroy, Ce("audio/ac3", (function() {
                            return new Nf("audio/ac3")
                        }), De), (i = Of.prototype).destroy = function() {
                            this.g.clear()
                        }, i.isSupported = function(e) {
                            return "audio/ec3" == e.toLowerCase().split(";")[0] && Y(this.convertCodecs("audio", e))
                        }, i.convertCodecs = function(e, t) {
                            return "audio/ec3" == t.toLowerCase().split(";")[0] ? 'audio/mp4; codecs="ec-3"' : t
                        }, i.getOrginalMimeType = function() {
                            return this.i
                        }, i.transmux = function(e, t, n, i) {
                            for (var r = kr(e = ie(e)), a = r.length; a < e.length && 2935 != (e[a] << 8 | e[a + 1]); a++);
                            var o = 1e3 * n.endTime;
                            (r = Ar(r)).length && n && (n = r.find((function(e) {
                                return "com.apple.streaming.transportStreamTimestamp" === e.description
                            }))) && (o = n.data), n = 0, r = new Uint8Array([]);
                            for (var s = []; a < e.length;) {
                                var u = jf(e, a);
                                if (!u) return Promise.reject(new Ye(2, 3, 3018));
                                t.audioSamplingRate = u.sampleRate, t.channelsCount = u.channelCount, n = u.sampleRate, r = u.Y, s.push({
                                    data: e.subarray(a, a + u.M),
                                    size: u.M,
                                    duration: 1536,
                                    Ja: 0,
                                    flags: {
                                        Pa: 0,
                                        Fa: 0,
                                        Ea: 0,
                                        Ba: 0,
                                        Ca: 2,
                                        Qa: 0
                                    }
                                }), a += u.M
                            }
                            return e = Math.floor(o * n / 1e3), e = new kl([i = {
                                id: t.id,
                                type: "audio",
                                codecs: "ec-3",
                                encrypted: t.encrypted && 0 < t.drmInfos.length,
                                timescale: n,
                                duration: i,
                                xa: [],
                                Y: r,
                                ga: new Uint8Array([]),
                                data: {
                                    Ua: this.h,
                                    baseMediaDecodeTime: e,
                                    wa: s
                                },
                                stream: t
                            }]), this.g.has(t.id) ? i = this.g.get(t.id) : (i = e.initSegment(), this.g.set(t.id, i)), t = Ml(e), this.h++, t = _r(i, t), Promise.resolve(t)
                        }, F("shaka.transmuxer.Ec3Transmuxer", Of), Of.prototype.transmux = Of.prototype.transmux, Of.prototype.getOrginalMimeType = Of.prototype.getOrginalMimeType, Of.prototype.convertCodecs = Of.prototype.convertCodecs, Of.prototype.isSupported = Of.prototype.isSupported, Of.prototype.destroy = Of.prototype.destroy, Ce("audio/ec3", (function() {
                            return new Of("audio/ec3")
                        }), De);
                        var Bf = [100, 110, 122, 244, 44, 83, 86, 118, 128, 138, 139, 134];

                        function Ff(e, t) {
                            var n = e[t + 1] >> 3 & 3,
                                i = e[t + 1] >> 1 & 3,
                                r = e[t + 2] >> 4 & 15,
                                a = e[t + 2] >> 2 & 3;
                            if (1 !== n && 0 !== r && 15 !== r && 3 !== a) {
                                var o = e[t + 3] >> 6;
                                r = 1e3 * Vf[14 * (3 === n ? 3 - i : 3 === i ? 3 : 4) + r - 1], a = zf[3 * (3 === n ? 0 : 2 === n ? 1 : 2) + a], n = qf[n][i];
                                var s = Kf[i],
                                    u = Math.floor(n * r / a + (e[t + 2] >> 1 & 1)) * s,
                                    l = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                                return (l = l ? parseInt(l[1], 10) : 0) && 87 >= l && 2 === i && 224e3 <= r && 0 === o && (e[t + 3] |= 128), {
                                    sampleRate: a,
                                    channelCount: 3 === o ? 1 : 2,
                                    M: u,
                                    ag: 8 * n * s
                                }
                            }
                            return null
                        }

                        function Hf(e, t) {
                            return !(255 !== e[t] || 224 & ~e[t + 1] || !(6 & e[t + 1]))
                        }
                        var Vf = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                            zf = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                            qf = [
                                [0, 72, 144, 12],
                                [0, 0, 0, 0],
                                [0, 72, 144, 12],
                                [0, 144, 144, 12]
                            ],
                            Kf = [0, 1, 1, 4];

                        function Gf(e) {
                            this.i = e, this.h = 0, this.g = new Map
                        }

                        function Wf(e) {
                            this.h = e, this.g = null
                        }

                        function Xf(e) {
                            this.h = e, (this.g = _s.get("ISOBoxer")()) && function(e) {
                                function t() {
                                    this._procFullBox(), 1 & this.flags && (this._procField("AlgorithmID", "uint", 24), this._procField("IV_size", "uint", 8), this._procFieldArray("KID", 16, "uint", 8)), this._procField("sample_count", "uint", 32), this._procEntries("entry", this.sample_count, (function(e) {
                                        this._procEntryField(e, "InitializationVector", "data", 8), 2 & this.flags && (this._procEntryField(e, "NumberOfEntries", "uint", 16), this._procSubEntries(e, "clearAndCryptedData", e.NumberOfEntries, (function(e) {
                                            this._procEntryField(e, "BytesOfClearData", "uint", 16), this._procEntryField(e, "BytesOfEncryptedData", "uint", 32)
                                        })))
                                    }))
                                }
                                e.g.addBoxProcessor("saio", (function() {
                                    this._procFullBox(), 1 & this.flags && (this._procField("aux_info_type", "uint", 32), this._procField("aux_info_type_parameter", "uint", 32)), this._procField("entry_count", "uint", 32), this._procFieldArray("offset", this.entry_count, "uint", 1 === this.version ? 64 : 32)
                                })), e.g.addBoxProcessor("saiz", (function() {
                                    this._procFullBox(), 1 & this.flags && (this._procField("aux_info_type", "uint", 32), this._procField("aux_info_type_parameter", "uint", 32)), this._procField("default_sample_info_size", "uint", 8), this._procField("sample_count", "uint", 32), 0 === this.default_sample_info_size && this._procFieldArray("sample_info_size", this.sample_count, "uint", 8)
                                })), e.g.addBoxProcessor("senc", t), e.g.addBoxProcessor("uuid", (function() {
                                    for (var e = !0, n = 0; 16 > n; n++) this.usertype[n] !== Jf[n] && (e = !1);
                                    e && (this._parsing && (this.type = "sepiff"), t.call(this))
                                }))
                            }(this)
                        }

                        function Yf(e, t) {
                            for (var n = 8, i = 0; i < e.boxes.length && e.boxes[i].type !== t; i++) n += e.boxes[i].size;
                            return n
                        }(i = Gf.prototype).destroy = function() {
                            this.g.clear()
                        }, i.isSupported = function(e) {
                            return "audio/mpeg" == e.toLowerCase().split(";")[0] && Y(this.convertCodecs("audio", e))
                        }, i.convertCodecs = function(e, t) {
                            return "audio/mpeg" == t.toLowerCase().split(";")[0] ? 'audio/mp4; codecs="mp3"' : t
                        }, i.getOrginalMimeType = function() {
                            return this.i
                        }, i.transmux = function(e, t, n, i) {
                            for (n = kr(e = ie(e)).length; n < e.length; n++) {
                                var r = n;
                                if (r + 1 < e.length && Hf(e, r)) {
                                    var a = Ff(e, r),
                                        o = 4;
                                    a && a.M && (o = a.M), r = (r += o) === e.length || r + 1 < e.length && Hf(e, r)
                                } else r = !1;
                                if (r) break
                            }
                            var s;
                            for (r = []; n < e.length;) {
                                if (!(a = Ff(e, n))) return Promise.reject(new Ye(2, 3, 3018));
                                s || (s = a), n + a.M <= e.length && r.push({
                                    data: e.subarray(n, n + a.M),
                                    size: a.M,
                                    duration: 1152,
                                    Ja: 0,
                                    flags: {
                                        Pa: 0,
                                        Fa: 0,
                                        Ea: 0,
                                        Ba: 0,
                                        Ca: 2,
                                        Qa: 0
                                    }
                                }), n += a.M
                            }
                            return s ? (e = 9e4 * s.ag / s.sampleRate * this.h, s = new kl([i = {
                                id: t.id,
                                type: "audio",
                                codecs: "mp3",
                                encrypted: t.encrypted && 0 < t.drmInfos.length,
                                timescale: s.sampleRate,
                                duration: i,
                                xa: [],
                                Y: new Uint8Array([]),
                                ga: new Uint8Array([]),
                                data: {
                                    Ua: this.h,
                                    baseMediaDecodeTime: e,
                                    wa: r
                                },
                                stream: t
                            }]), this.g.has(t.id) ? i = this.g.get(t.id) : (i = s.initSegment(), this.g.set(t.id, i)), t = Ml(s), this.h++, t = _r(i, t), Promise.resolve(t)) : Promise.reject(new Ye(2, 3, 3018))
                        }, F("shaka.transmuxer.Mp3Transmuxer", Gf), Gf.prototype.transmux = Gf.prototype.transmux, Gf.prototype.getOrginalMimeType = Gf.prototype.getOrginalMimeType, Gf.prototype.convertCodecs = Gf.prototype.convertCodecs, Gf.prototype.isSupported = Gf.prototype.isSupported, Gf.prototype.destroy = Gf.prototype.destroy, Ce("audio/mpeg", (function() {
                            return new Gf("audio/mpeg")
                        }), De), (i = Wf.prototype).destroy = function() {}, i.isSupported = function(e) {
                            if ("video/mp2t" != e.toLowerCase().split(";")[0]) return !1;
                            var t = ht(e).split(","),
                                n = it("audio", t);
                            return t = it("video", t), !(!n || t || "mp3" != dt(n)) && Y(this.convertCodecs("audio", e))
                        }, i.convertCodecs = function(e, t) {
                            return "video/mp2t" == t.toLowerCase().split(";")[0] ? "audio/mpeg" : t
                        }, i.getOrginalMimeType = function() {
                            return this.h
                        }, i.transmux = function(e) {
                            this.g ? this.g.clearData() : this.g = new Pr, e = ie(e);
                            var t = this.g.parse(e);
                            if ("mp3" != (e = t.md()).audio || e.video) return Promise.reject(new Ye(2, 3, 3018));
                            e = new Uint8Array([]);
                            for (var n = (t = c(t.jb())).next(); !n.done; n = t.next())
                                if (n = n.value.data)
                                    for (var i = 0; i < n.length;) {
                                        var r = Ff(n, i);
                                        r ? (i + r.M <= n.length && (e = _r(e, n.subarray(i, i + r.M))), i += r.M) : i++
                                    }
                            return Promise.resolve(e)
                        }, F("shaka.transmuxer.MpegTsTransmuxer", Wf), Wf.prototype.transmux = Wf.prototype.transmux, Wf.prototype.getOrginalMimeType = Wf.prototype.getOrginalMimeType, Wf.prototype.convertCodecs = Wf.prototype.convertCodecs, Wf.prototype.isSupported = Wf.prototype.isSupported, Wf.prototype.destroy = Wf.prototype.destroy, Ce("video/mp2t", (function() {
                            return new Wf("video/mp2t")
                        }), Re), (i = Xf.prototype).destroy = function() {}, i.isSupported = function(e, t) {
                            var n = e.startsWith("mss/");
                            return !(!this.g || !n) && (t ? Y(this.convertCodecs(t, e)) : (t = this.convertCodecs("audio", e), e = this.convertCodecs("video", e), Y(t) || Y(e)))
                        }, i.convertCodecs = function(e, t) {
                            return t.replace("mss/", "")
                        }, i.getOrginalMimeType = function() {
                            return this.h
                        }, i.transmux = function(e, t, n) {
                            if (!n) return Promise.resolve(ie(e));
                            if (!t.mssPrivateData) return Promise.reject(new Ye(2, 3, 3020));
                            try {
                                var i, r = this.g.parseBuffer(e),
                                    a = r.fetch("tfhd");
                                a.track_ID = t.id + 1;
                                var o = r.fetch("tfdt"),
                                    s = r.fetch("traf");
                                null === o && ((o = this.g.createFullBox("tfdt", s, a)).version = 1, o.flags = 0, o.baseMediaDecodeTime = Math.floor(n.startTime * t.mssPrivateData.timescale));
                                var u = r.fetch("trun"),
                                    l = r.fetch("tfxd");
                                l && l._parent.boxes.splice(l._parent.boxes.indexOf(l), 1);
                                var c = r.fetch("tfrf");
                                c && c._parent.boxes.splice(c._parent.boxes.indexOf(c), 1);
                                var d = r.fetch("sepiff");
                                if (null !== d) {
                                    d.type = "senc", d.usertype = void 0;
                                    var h = r.fetch("saio");
                                    if (null === h) {
                                        (h = this.g.createFullBox("saio", s)).version = 0, h.flags = 0, h.entry_count = 1, h.offset = [0];
                                        var f = this.g.createFullBox("saiz", s);
                                        if (f.version = 0, f.flags = 0, f.sample_count = d.sample_count, f.default_sample_info_size = 0, f.sample_info_size = [], 2 & d.flags)
                                            for (i = 0; i < d.sample_count; i += 1) f.sample_info_size[i] = 10 + 6 * d.entry[i].NumberOfEntries;
                                        else f.default_sample_info_size = 8
                                    }
                                }
                                a.flags &= 16777214, a.flags |= 131072, u.flags |= 1;
                                var p = r.fetch("moof");
                                u.data_offset = p.getLength() + 8;
                                var g = r.fetch("saio");
                                null !== g && (g.offset[0] = Yf(p, "traf") + Yf(s, "senc") + 16);
                                var m = ie(r.write());
                                return Promise.resolve(m)
                            } catch (v) {
                                return v instanceof Ye ? Promise.reject(v) : Promise.reject(new Ye(2, 3, 3022))
                            }
                        }, F("shaka.transmuxer.MssTransmuxer", Xf), Xf.prototype.transmux = Xf.prototype.transmux, Xf.prototype.getOrginalMimeType = Xf.prototype.getOrginalMimeType, Xf.prototype.convertCodecs = Xf.prototype.convertCodecs, Xf.prototype.isSupported = Xf.prototype.isSupported, Xf.prototype.destroy = Xf.prototype.destroy;
                        var Jf = new Uint8Array([162, 57, 79, 82, 90, 155, 79, 20, 162, 68, 108, 66, 124, 100, 141, 244]);

                        function $f(e) {
                            var t = this;
                            this.m = e, this.j = _s.get("muxjs")(), this.h = this.g = null, this.l = [], this.i = !1, this.j && (this.g = new this.j.mp4.Transmuxer({
                                keepOriginalTimestamps: !0
                            }), this.g.on("data", (function(e) {
                                t.l.push(_r(e.initSegment, e.data))
                            })), this.g.on("done", (function() {
                                var e = _r.apply(Er, d(t.l));
                                t.h.resolve(e), t.i = !1
                            })))
                        }

                        function Qf(e, t) {
                            if (t = t.replace(/mp2t/i, "mp4"), "audio" == e && (t = t.replace("video", "audio")), e = /avc1\.(66|77|100)\.(\d+)/.exec(t)) {
                                var n = "avc1.",
                                    i = e[1],
                                    r = Number(e[2]);
                                n = ("66" == i ? n + "4200" : "77" == i ? n + "4d00" : n + "6400") + (r >> 4).toString(16), n += (15 & r).toString(16), t = t.replace(e[0], n)
                            }
                            return t
                        }

                        function Zf(e) {
                            this.j = e, this.g = 0, this.h = new Map, this.i = null
                        }
                        Ce("mss/audio/mp4", (function() {
                            return new Xf("mss/audio/mp4")
                        }), De), Ce("mss/video/mp4", (function() {
                            return new Xf("mss/video/mp4")
                        }), De), (i = $f.prototype).destroy = function() {
                            this.g && this.g.dispose(), this.g = null
                        }, i.isSupported = function(e, t) {
                            var n = "mp2t" == e.toLowerCase().split(";")[0].split("/")[1];
                            return !(!this.j || !n) && (t ? Y(Qf(t, e)) : (t = Qf("audio", e), e = Qf("video", e), Y(t) || Y(e)))
                        }, i.convertCodecs = function(e, t) {
                            return "mp2t" == t.toLowerCase().split(";")[0].split("/")[1] ? Qf(e, t) : t
                        }, i.getOrginalMimeType = function() {
                            return this.m
                        }, i.transmux = function(e) {
                            return this.i = !0, this.h = new pa, this.l = [], e = ie(e), this.g.push(e), this.g.flush(), this.i && this.h.reject(new Ye(2, 3, 3018)), this.h
                        }, F("shaka.transmuxer.MuxjsTransmuxer", $f), $f.prototype.transmux = $f.prototype.transmux, $f.prototype.getOrginalMimeType = $f.prototype.getOrginalMimeType, $f.prototype.convertCodecs = $f.prototype.convertCodecs, $f.prototype.isSupported = $f.prototype.isSupported, $f.prototype.destroy = $f.prototype.destroy, Ce("video/mp2t", (function() {
                            return new $f("video/mp2t")
                        }), De), (i = Zf.prototype).destroy = function() {
                            this.h.clear()
                        }, i.isSupported = function(e, t) {
                            if ("video/mp2t" != e.toLowerCase().split(";")[0]) return !1;
                            var n = ht(e).split(","),
                                i = it("audio", n);
                            return n = it("video", n), !(i && n || i && (i = dt(i), !np.includes(i)) || n && (i = dt(n), !ip.includes(i))) && (t ? Y(this.convertCodecs(t, e)) : (t = this.convertCodecs("audio", e), e = this.convertCodecs("video", e), Y(t) || Y(e)))
                        }, i.convertCodecs = function(e, t) {
                            return "video/mp2t" == t.toLowerCase().split(";")[0] ? (t = ht(t).replace("mp4a.40.34", "mp3"), "audio" == e ? 'audio/mp4; codecs="' + t + '"' : 'video/mp4; codecs="' + t + '"') : t
                        }, i.getOrginalMimeType = function() {
                            return this.j
                        }, i.transmux = function(e, t, n, i, r) {
                            this.i ? this.i.clearData() : this.i = new Pr, e = ie(e);
                            var a = this.i.parse(e);
                            e = [];
                            var o = a.md();
                            try {
                                if (n = null, "video" == r) {
                                    if ("avc" === o.video) {
                                        for (var s = [], u = null, l = [], h = a.Jc(), f = 0; f < h.length; f++) {
                                            var p = h[f],
                                                g = void 0;
                                            f + 1 < h.length && (g = h[f + 1]);
                                            var m = a.Nd(p, g);
                                            l = l.concat(m);
                                            var v = Uf(m);
                                            v && (null == u && (u = p.dts), g = void 0, g = f + 1 < h.length ? (h[f + 1].dts || 0) - (p.dts || 0) : (p.dts || 0) - (h[f - 1].dts || 0), s.push({
                                                data: v.data,
                                                size: v.data.byteLength,
                                                duration: g,
                                                Ja: Math.round((p.pts || 0) - (p.dts || 0)),
                                                flags: {
                                                    Pa: 0,
                                                    Fa: 0,
                                                    Ea: 0,
                                                    Ba: 0,
                                                    Ca: v.ve ? 2 : 1,
                                                    Qa: v.ve ? 0 : 1
                                                }
                                            }))
                                        }
                                        var y = function(e) {
                                            if (!e.length) return null;
                                            var t = e.find((function(e) {
                                                return 7 == e.type
                                            }));
                                            if (e = e.find((function(e) {
                                                    return 8 == e.type
                                                })), !t || !e) return null;
                                            var n = new cr(t.data),
                                                i = fr(n, 8);
                                            if (fr(n, 8), fr(n, 8), gr(n), Bf.includes(i) && (3 === (i = mr(n)) && hr(n, 1), gr(n), gr(n), hr(n, 1), 1 === fr(n, 1))) {
                                                i = 3 !== i ? 8 : 12;
                                                for (var r = 0; r < i; r++) 1 === fr(n, 1) && vr(n, 6 > r ? 16 : 64)
                                            }
                                            if (gr(n), 0 === (i = mr(n))) mr(n);
                                            else if (1 === i)
                                                for (hr(n, 1), gr(n), gr(n), i = mr(n), r = 0; r < i; r++) gr(n);
                                            gr(n), hr(n, 1), i = mr(n);
                                            var a = mr(n),
                                                o = fr(n, 1);
                                            0 === o && hr(n, 1), hr(n, 1);
                                            var s = r = 0,
                                                u = 0,
                                                l = 0;
                                            return 1 === fr(n, 1) && (r = mr(n), s = mr(n), u = mr(n), l = mr(n)), n = (2 - o) * (a + 1) * 16 - 2 * u - 2 * l, i = 16 * (i + 1) - 2 * r - 2 * s, r = [], t = t.La, r.push(t.byteLength >>> 8 & 255), r.push(255 & t.byteLength), r = r.concat.apply(r, d(t)), t = [], e = e.La, t.push(e.byteLength >>> 8 & 255), t.push(255 & e.byteLength), t = t.concat.apply(t, d(e)), {
                                                height: n,
                                                width: i,
                                                ga: e = new Uint8Array([1, r[3], r[4], r[5], 255, 225].concat(r, [1], t))
                                            }
                                        }(l);
                                        if (!y || null == u) throw new Ye(2, 3, 3018);
                                        t.height = y.height, t.width = y.width, n = {
                                            id: t.id,
                                            type: "video",
                                            codecs: "avc1",
                                            encrypted: t.encrypted && 0 < t.drmInfos.length,
                                            timescale: 9e4,
                                            duration: i,
                                            xa: [],
                                            Y: new Uint8Array([]),
                                            ga: y.ga,
                                            data: {
                                                Ua: this.g,
                                                baseMediaDecodeTime: u,
                                                wa: s
                                            },
                                            stream: t
                                        }
                                    }
                                    n && (e.push(n), n = null)
                                }
                                if ("audio" == r) {
                                    switch (o.audio) {
                                        case "aac":
                                            for (var b, w = [], x = null, T = c(a.jb()), S = T.next(); !S.done; S = T.next()) {
                                                var A = S.value,
                                                    k = A.data;
                                                if (k) {
                                                    if (!(b = Df(k, a = 0))) throw new Ye(2, 3, 3018);
                                                    for (t.audioSamplingRate = b.sampleRate, t.channelsCount = b.channelCount, null == x && null !== A.pts && (x = A.pts); a < k.length;) {
                                                        var E = Mf(k, a);
                                                        if (E) {
                                                            var C = E.Lc + E.M;
                                                            a + C <= k.length && w.push({
                                                                data: k.subarray(a + E.Lc, a + C),
                                                                size: E.M,
                                                                duration: 1024,
                                                                Ja: 0,
                                                                flags: {
                                                                    Pa: 0,
                                                                    Fa: 0,
                                                                    Ea: 0,
                                                                    Ba: 0,
                                                                    Ca: 2,
                                                                    Qa: 0
                                                                }
                                                            }), a += C
                                                        } else a++
                                                    }
                                                }
                                            }
                                            if (!b || null == x) throw new Ye(2, 3, 3018);
                                            var I = b.sampleRate;
                                            a = x / 9e4 * I, n = {
                                                id: t.id,
                                                type: "audio",
                                                codecs: b.Bc,
                                                encrypted: t.encrypted && 0 < t.drmInfos.length,
                                                timescale: I,
                                                duration: i,
                                                xa: [],
                                                Y: new Uint8Array([]),
                                                ga: new Uint8Array([]),
                                                data: {
                                                    Ua: this.g,
                                                    baseMediaDecodeTime: a,
                                                    wa: w
                                                },
                                                stream: t
                                            };
                                            break;
                                        case "ac3":
                                            x = [], b = 0, w = new Uint8Array([]), I = null;
                                            for (var M = c(a.jb()), D = M.next(); !D.done; D = M.next()) {
                                                var R = D.value,
                                                    _ = R.data;
                                                for (null == I && null !== R.pts && (I = R.pts), a = 0; a < _.length;) {
                                                    var P = Pf(_, a);
                                                    P ? (t.audioSamplingRate = P.sampleRate, t.channelsCount = P.channelCount, b = P.sampleRate, w = P.Y, x.push({
                                                        data: _.subarray(a, a + P.M),
                                                        size: P.M,
                                                        duration: 1536,
                                                        Ja: 0,
                                                        flags: {
                                                            Pa: 0,
                                                            Fa: 0,
                                                            Ea: 0,
                                                            Ba: 0,
                                                            Ca: 2,
                                                            Qa: 0
                                                        }
                                                    }), a += P.M) : a++
                                                }
                                            }
                                            if (0 == b || 0 == w.byteLength || null == I) throw new Ye(2, 3, 3018);
                                            a = I / 9e4 * b, n = {
                                                id: t.id,
                                                type: "audio",
                                                codecs: "ac-3",
                                                encrypted: t.encrypted && 0 < t.drmInfos.length,
                                                timescale: b,
                                                duration: i,
                                                xa: [],
                                                Y: w,
                                                ga: new Uint8Array([]),
                                                data: {
                                                    Ua: this.g,
                                                    baseMediaDecodeTime: a,
                                                    wa: x
                                                },
                                                stream: t
                                            };
                                            break;
                                        case "ec3":
                                            w = [], b = 0, x = new Uint8Array([]), I = null;
                                            for (var L = c(a.jb()), N = L.next(); !N.done; N = L.next()) {
                                                var j = N.value,
                                                    O = j.data;
                                                for (null == I && null !== j.pts && (I = j.pts), a = 0; a < O.length;) {
                                                    var U = jf(O, a);
                                                    U ? (t.audioSamplingRate = U.sampleRate, t.channelsCount = U.channelCount, b = U.sampleRate, x = U.Y, w.push({
                                                        data: O.subarray(a, a + U.M),
                                                        size: U.M,
                                                        duration: 1536,
                                                        Ja: 0,
                                                        flags: {
                                                            Pa: 0,
                                                            Fa: 0,
                                                            Ea: 0,
                                                            Ba: 0,
                                                            Ca: 2,
                                                            Qa: 0
                                                        }
                                                    }), a += U.M) : a++
                                                }
                                            }
                                            if (0 == b || 0 == x.byteLength || null == I) throw new Ye(2, 3, 3018);
                                            a = I / 9e4 * b, n = {
                                                id: t.id,
                                                type: "audio",
                                                codecs: "ec-3",
                                                encrypted: t.encrypted && 0 < t.drmInfos.length,
                                                timescale: b,
                                                duration: i,
                                                xa: [],
                                                Y: x,
                                                ga: new Uint8Array([]),
                                                data: {
                                                    Ua: this.g,
                                                    baseMediaDecodeTime: a,
                                                    wa: w
                                                },
                                                stream: t
                                            };
                                            break;
                                        case "mp3":
                                            var B;
                                            w = [], x = null;
                                            for (var F = c(a.jb()), H = F.next(); !H.done; H = F.next()) {
                                                var V = H.value,
                                                    z = V.data;
                                                if (z)
                                                    for (null == x && null !== V.pts && (x = V.pts), a = 0; a < z.length;) {
                                                        var q = Ff(z, a);
                                                        q ? (B || (B = q), a + q.M <= z.length && w.push({
                                                            data: z.subarray(a, a + q.M),
                                                            size: q.M,
                                                            duration: 1152,
                                                            Ja: 0,
                                                            flags: {
                                                                Pa: 0,
                                                                Fa: 0,
                                                                Ea: 0,
                                                                Ba: 0,
                                                                Ca: 2,
                                                                Qa: 0
                                                            }
                                                        }), a += q.M) : a++
                                                    }
                                            }
                                            if (!B || null == x) throw new Ye(2, 3, 3018);
                                            var K = B.sampleRate;
                                            a = x / 9e4 * K, n = {
                                                id: t.id,
                                                type: "audio",
                                                codecs: "mp3",
                                                encrypted: t.encrypted && 0 < t.drmInfos.length,
                                                timescale: K,
                                                duration: i,
                                                xa: [],
                                                Y: new Uint8Array([]),
                                                ga: new Uint8Array([]),
                                                data: {
                                                    Ua: this.g,
                                                    baseMediaDecodeTime: a,
                                                    wa: w
                                                },
                                                stream: t
                                            }
                                    }
                                    n && e.push(n)
                                }
                            } catch (G) {
                                return Promise.reject(G)
                            }
                            return e.length ? (e = new kl(e), this.h.has(t.id) ? i = this.h.get(t.id) : (i = e.initSegment(), this.h.set(t.id, i)), t = Ml(e), this.g++, t = _r(i, t), Promise.resolve(t)) : Promise.reject(new Ye(2, 3, 3018))
                        }, F("shaka.transmuxer.TsTransmuxer", Zf), Zf.prototype.transmux = Zf.prototype.transmux, Zf.prototype.getOrginalMimeType = Zf.prototype.getOrginalMimeType, Zf.prototype.convertCodecs = Zf.prototype.convertCodecs, Zf.prototype.isSupported = Zf.prototype.isSupported, Zf.prototype.destroy = Zf.prototype.destroy;
                        var ep, tp, np = ["aac", "ac-3", "ec-3", "mp3"],
                            ip = ["avc"];

                        function rp() {}

                        function ap() {
                            ep ? console.debug("EmeEncryptionSchemePolyfill: Already installed.") : navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration ? (ep = navigator.requestMediaKeySystemAccess, console.debug("EmeEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."), navigator.requestMediaKeySystemAccess = op) : console.debug("EmeEncryptionSchemePolyfill: EME not found")
                        }

                        function op(e, t) {
                            var n, i = this;
                            return _((function(r) {
                                return 1 == r.g ? (console.assert(i == navigator, 'bad "this" for requestMediaKeySystemAccess'), x(r, ep.call(i, e, t), 2)) : mp(n = r.h) ? (console.debug("EmeEncryptionSchemePolyfill: Native encryptionScheme support found."), navigator.requestMediaKeySystemAccess = ep, r.return(n)) : (console.debug("EmeEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support."), navigator.requestMediaKeySystemAccess = sp, r.return(sp.call(i, e, t)))
                            }))
                        }

                        function sp(e, t) {
                            var n, i, r, a, o, s, u, l, d, h, f = this;
                            return _((function(p) {
                                if (1 == p.g) {
                                    for (console.assert(f == navigator, 'bad "this" for requestMediaKeySystemAccess'), n = gp(e), i = [], r = c(t), a = r.next(); !a.done; a = r.next()) o = a.value, s = up(o.videoCapabilities, n), u = up(o.audioCapabilities, n), o.videoCapabilities && o.videoCapabilities.length && !s.length || o.audioCapabilities && o.audioCapabilities.length && !u.length || ((l = Object.assign({}, o)).videoCapabilities = s, l.audioCapabilities = u, i.push(l));
                                    if (!i.length) throw (d = Error("Unsupported keySystem or supportedConfigurations.")).name = "NotSupportedError", d.code = DOMException.NOT_SUPPORTED_ERR, d;
                                    return x(p, ep.call(f, e, i), 2)
                                }
                                return h = p.h, p.return(new pp(h, n))
                            }))
                        }

                        function up(e, t) {
                            return e ? e.filter((function(e) {
                                return !e.encryptionScheme || e.encryptionScheme == t
                            })) : e
                        }

                        function lp() {}

                        function cp() {
                            tp ? console.debug("McEncryptionSchemePolyfill: Already installed.") : navigator.mediaCapabilities ? (tp = navigator.mediaCapabilities.decodingInfo, console.debug("McEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."), navigator.mediaCapabilities.decodingInfo = dp) : console.debug("McEncryptionSchemePolyfill: MediaCapabilities not found")
                        }

                        function dp(e) {
                            var t, n, i, r = this;
                            return _((function(a) {
                                switch (a.g) {
                                    case 1:
                                        return console.assert(r == navigator.mediaCapabilities, 'bad "this" for decodingInfo'), x(a, tp.call(r, e), 2);
                                    case 2:
                                        if (t = a.h, !e.keySystemConfiguration) return a.return(t);
                                        if ((n = t.keySystemAccess) && mp(n)) return console.debug("McEncryptionSchemePolyfill: Native encryptionScheme support found."), navigator.mediaCapabilities.decodingInfo = tp, a.return(t);
                                        if (console.debug("McEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support."), navigator.mediaCapabilities.decodingInfo = hp, n) {
                                            a.B(3);
                                            break
                                        }
                                        return i = t, x(a, fp(e), 4);
                                    case 4:
                                        return i.keySystemAccess = a.h, a.return(t);
                                    case 3:
                                        return a.return(hp.call(r, e))
                                }
                            }))
                        }

                        function hp(e) {
                            var t, n, i, r, a, o, s, u, l = this;
                            return _((function(c) {
                                switch (c.g) {
                                    case 1:
                                        return console.assert(l == navigator.mediaCapabilities, 'bad "this" for decodingInfo'), t = null, e.keySystemConfiguration && (n = e.keySystemConfiguration, i = n.keySystem, r = n.audio && n.audio.encryptionScheme, a = n.video && n.video.encryptionScheme, t = gp(i), o = {
                                            powerEfficient: !1,
                                            smooth: !1,
                                            supported: !1,
                                            keySystemAccess: null,
                                            configuration: e
                                        }, r && r != t || a && a != t) ? c.return(o) : x(c, tp.call(l, e), 2);
                                    case 2:
                                        if ((s = c.h).keySystemAccess) {
                                            s.keySystemAccess = new pp(s.keySystemAccess, t), c.B(3);
                                            break
                                        }
                                        if (!e.keySystemConfiguration) {
                                            c.B(3);
                                            break
                                        }
                                        return u = s, x(c, fp(e), 5);
                                    case 5:
                                        u.keySystemAccess = c.h;
                                    case 3:
                                        return c.return(s)
                                }
                            }))
                        }

                        function fp(e) {
                            var t, n;
                            return _((function(i) {
                                if (1 == i.g) {
                                    var r = e.keySystemConfiguration,
                                        a = [],
                                        o = [];
                                    return r.audio && a.push({
                                        robustness: r.audio.robustness || "",
                                        contentType: e.audio.contentType
                                    }), r.video && o.push({
                                        robustness: r.video.robustness || "",
                                        contentType: e.video.contentType
                                    }), r = {
                                        initDataTypes: r.initDataType ? [r.initDataType] : [],
                                        distinctiveIdentifier: r.distinctiveIdentifier,
                                        persistentState: r.persistentState,
                                        sessionTypes: r.sessionTypes
                                    }, a.length && (r.audioCapabilities = a), o.length && (r.videoCapabilities = o), t = r, x(i, navigator.requestMediaKeySystemAccess(e.keySystemConfiguration.keySystem, [t]), 2)
                                }
                                return n = i.h, i.return(n)
                            }))
                        }

                        function pp(e, t) {
                            this.h = e, this.g = t, this.keySystem = e.keySystem
                        }

                        function gp(e) {
                            return e.startsWith("com.widevine") || e.startsWith("com.microsoft") || e.startsWith("com.chromecast") || e.startsWith("com.adobe") || e.startsWith("org.w3") ? "cenc" : e.startsWith("com.apple") ? "cbcs-1-9" : (console.warn("EmeEncryptionSchemePolyfill: Unknown key system:", e, "Please contribute!"), null)
                        }

                        function mp(e) {
                            var t = (e = e.getConfiguration()).audioCapabilities && e.audioCapabilities[0];
                            return !(!(e = e.videoCapabilities && e.videoCapabilities[0] || t) || void 0 === e.encryptionScheme)
                        }

                        function vp() {}

                        function yp() {
                            ap(), cp()
                        }
                        Ce("video/mp2t", (function() {
                            return new Zf("video/mp2t")
                        }), _e), F("EmeEncryptionSchemePolyfill", rp), rp.install = ap, F("McEncryptionSchemePolyfill", lp), lp.install = cp, pp.prototype.getConfiguration = function() {
                            var e = this.h.getConfiguration();
                            if (e.videoCapabilities)
                                for (var t = c(e.videoCapabilities), n = t.next(); !n.done; n = t.next()) n.value.encryptionScheme = this.g;
                            if (e.audioCapabilities)
                                for (n = (t = c(e.audioCapabilities)).next(); !n.done; n = t.next()) n.value.encryptionScheme = this.g;
                            return e
                        }, pp.prototype.createMediaKeys = function() {
                            return this.h.createMediaKeys()
                        }, F("EncryptionSchemePolyfills", vp), vp.install = yp, void 0 !== n && n.exports && (n.exports = vp)
                    }.call(i, e, e, void 0), i.shaka) t[r] = i.shaka[r]
            }()
        }
    }
]);
//# sourceMappingURL=sourcemaps/d8776b05c827ae5b.vendor.js.map