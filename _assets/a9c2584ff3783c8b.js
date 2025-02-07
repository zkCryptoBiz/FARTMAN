(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [4143], {

        /***/
        62516: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(388770);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var F = __c.F;
                var R = __c.R;
                var gLb = function(a, b = "medium") {
                        if (null !== a && void 0 !== a && a.length) {
                            var c = ("number" === typeof b ? b : __c.oY[b]) * (window.devicePixelRatio || 1);
                            return [...a].sort((d, e) => {
                                d = d.width;
                                e = e.width;
                                return d > c && e < c ? -1 : d < c && e > c ? 1 : Math.abs(d - c) - Math.abs(e - c)
                            })[0].url
                        }
                    },
                    lLb = function(a, b) {
                        class c {
                            static j(d) {
                                R(d, {
                                    qf: H4,
                                    xha: H4
                                })
                            }
                            get qf() {
                                switch (this.xha) {
                                    case "date":
                                        return new hLb(this.uA, b.language || "en-AU");
                                    case "select":
                                        return new iLb(this.uA);
                                    case "mention":
                                        return new jLb(this.uA);
                                    case "embed":
                                        return __c.Ui("fromViewableSheetPill");
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new F(this.xha);
                                }
                            }
                            get xha() {
                                var d;
                                return null === (d = this.uA.PA) || void 0 === d ? void 0 : d.type
                            }
                            constructor(d) {
                                c.j(this);
                                this.context = d;
                                this.uA = __c.D(a.sE(d.sheet, d.ua, d.column))
                            }
                        }
                        return kLb(d => (new c(d)).qf)
                    },
                    nLb = function() {
                        const a = I4(() => new Map, []);
                        return {
                            B5a: b => {
                                if (a.has(b)) return __c.D(a.get(b));
                                const c = mLb();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    oLb = function(a, b) {
                        return I4(() => {
                            const c = new Map;
                            return d => {
                                if (c.has(d)) return __c.D(c.get(d));
                                const e = a(d);
                                c.set(d, e);
                                return e
                            }
                        }, b)
                    },
                    vLb = function({
                        children: a,
                        keyFrame: b,
                        TQa: c,
                        ariaLive: d,
                        VIa: e = !1,
                        cYa: f,
                        Wja: g,
                        q2a: h,
                        Wpb: k,
                        yCa: l,
                        qEa: m,
                        Upb: n,
                        yib: p
                    }) {
                        const {
                            B5a: q
                        } = nLb(), {
                            C4a: r,
                            jeb: t
                        } = pLb(b, a), u = oLb(v => () => {
                            (!1 === e || "function" === typeof e && !e(v)) && t(v)
                        }, [t, e]);
                        return J4("div", {
                            className: K4(g, "_9GxJfQ", {
                                KwB0XQ: "hidden" === l,
                                WV1Mmw: "fill-height" === c,
                                _2uSJxw: "flex-grow" === c
                            }),
                            children: J4("div", {
                                className: K4("m2VaAA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: v,
                                    element: x
                                }) => J4(qLb, { in: v === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(v),
                                    onExited: u(v),
                                    children: y => J4(rLb.Provider, {
                                        value: y,
                                        children: J4("div", {
                                            className: K4("KxXR9g", n, {
                                                KwB0XQ: "hidden" === m
                                            }),
                                            ref: q(v),
                                            "aria-hidden": y === sLb || y === tLb || y === uLb,
                                            children: v === b ? a : x
                                        })
                                    })
                                }, v)), r.every(v => v.key !== b) && J4(qLb, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : u(b),
                                    children: v => J4(rLb.Provider, {
                                        value: v,
                                        children: J4("div", {
                                            className: K4("KxXR9g", n),
                                            ref: q(b),
                                            "aria-hidden": v === sLb || v === tLb || v === uLb,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    pLb = function(a,
                        b) {
                        const [c, d] = wLb(() => [{
                            key: a,
                            element: b
                        }]);
                        xLb(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = L4(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            C4a: c,
                            jeb: e
                        }
                    },
                    yLb = function(a) {
                        switch (a.type) {
                            case "mention":
                                return "bCAtqw";
                            case "embed":
                                return "BTcT3w";
                            case "date":
                                return "McKQgg";
                            case "select":
                                return "V2E5nQ";
                            default:
                                throw new F(a);
                        }
                    },
                    ALb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return J4(zLb, {
                                    selected: !!b.TOa
                                });
                            default:
                                throw new F(a);
                        }
                    },
                    M4 = function(a) {
                        return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? "Meta" === a.key || ["91", "224"].includes(a.code) : !1
                    },
                    BLb = function(a) {
                        __c.w(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    CLb = function(a, b, c) {
                        if (c) {
                            var d = gLb(c.images, "medium"),
                                e = gLb(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = N4(() => a.F3.set(b, e));
                                f.onerror =
                                    N4(() => a.F3.set(b, void 0));
                                !f.complete && c.complete ? a.F3.set(b, d) : c.src = ""
                            }
                        } else a.F3.set(b, void 0)
                    },
                    ELb = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e = new Promise(f => {
                                a.tg ? a.tg.Xsb(new DLb({
                                    id: c,
                                    extension: d
                                })).then(({
                                    document: g
                                }) => {
                                    const h = g.vg.content.title;
                                    h ? (O4(() => a.bSa.set(b, {
                                        status: 1,
                                        title: h
                                    })), f(h)) : f(void 0)
                                }).catch(() => {
                                    O4(() => a.bSa.set(b, {
                                        status: 2
                                    }));
                                    f(void 0)
                                }) : f(void 0)
                            });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    FLb = __webpack_require__(443763),
                    J4 = FLb.jsx,
                    GLb =
                    FLb.jsxs;
                var P4 = __webpack_require__(214645).Pi;
                var Q4 = __webpack_require__(875604),
                    HLb = Q4.createContext,
                    mLb = Q4.createRef,
                    R4 = Q4.memo,
                    L4 = Q4.useCallback,
                    xLb = Q4.useEffect,
                    ILb = Q4.useLayoutEffect,
                    I4 = Q4.useMemo,
                    wLb = Q4.useState;
                var S4 = __webpack_require__(519427),
                    N4 = S4.action,
                    JLb = S4.comparer,
                    H4 = S4.computed,
                    KLb = S4.observable,
                    T4 = S4.ObservableMap,
                    O4 = S4.runInAction;
                var kLb = __webpack_require__(635872).Om;
                var LLb = __webpack_require__,
                    MLb = LLb(993864),
                    K4 = LLb.n_x(MLb)();
                var qLb = __webpack_require__(489212).Z;
                var U4 = __webpack_require__(92009),
                    uLb = U4.Wj,
                    sLb = U4.Ix,
                    tLb = U4.$r;
                var NLb = class {
                        static j(a) {
                            R(a, {
                                text: H4,
                                user: H4,
                                brand: H4
                            })
                        }
                        get text() {
                            return this.qf.text
                        }
                        get user() {
                            return this.qf.user
                        }
                        get brand() {
                            return this.qf.brand
                        }
                        constructor(a) {
                            NLb.j(this);
                            this.qf = a;
                            this.type = "mention"
                        }
                    },
                    OLb = class {
                        static j(a) {
                            R(a, {
                                text: H4,
                                url: H4
                            })
                        }
                        get text() {
                            return this.qf.text
                        }
                        get url() {
                            return this.qf.url
                        }
                        constructor(a) {
                            OLb.j(this);
                            this.qf = a;
                            this.type = "embed"
                        }
                    },
                    PLb = class {
                        static j(a) {
                            R(a, {
                                text: H4,
                                language: H4,
                                style: H4,
                                date: H4
                            })
                        }
                        get text() {
                            return this.qf.text
                        }
                        get language() {
                            return this.qf.language
                        }
                        get style() {
                            return this.qf.style
                        }
                        get date() {
                            return this.qf.date
                        }
                        constructor(a) {
                            PLb.j(this);
                            this.qf = a;
                            this.type = "date"
                        }
                    },
                    QLb = class {
                        static j(a) {
                            R(a, {
                                text: H4,
                                options: H4,
                                hf: H4,
                                IQ: H4
                            })
                        }
                        get text() {
                            return this.qf.text
                        }
                        get options() {
                            return this.qf.options.map(a => a)
                        }
                        get hf() {
                            return this.qf.hf
                        }
                        get IQ() {
                            var a;
                            return null === (a = this.qf.options.first(b => b.id === this.qf.hf)) || void 0 === a ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            QLb.j(this);
                            this.qf = a;
                            this.type = "select"
                        }
                    },
                    RLb = kLb(a => {
                        switch (a.type) {
                            case "mention":
                                return new NLb(a);
                            case "embed":
                                return new OLb(a);
                            case "date":
                                return new PLb(a);
                            case "select":
                                return new QLb(a);
                            default:
                                throw new F(a);
                        }
                    });
                var hLb = class {
                        static j(a) {
                            R(a, {
                                style: H4,
                                date: H4,
                                text: H4
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = 2 === this.Mw.mv.type ? this.Mw.mv.date : void 0) || (a = new Date, a = __c.LE(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                v6a: a.getHours(),
                                B$a: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.Mw.nA
                        }
                        constructor(a, b) {
                            hLb.j(this);
                            this.Mw = a;
                            this.language = b;
                            this.type = "date"
                        }
                    },
                    SLb = class {
                        get label() {
                            return this.option.label
                        }
                        get fill() {
                            return this.option.fill
                        }
                        constructor(a, b) {
                            this.option = a;
                            this.id = b
                        }
                    },
                    iLb = class {
                        static j(a) {
                            R(a, {
                                options: H4,
                                hf: H4,
                                IQ: H4,
                                text: H4,
                                OFa: H4({
                                    equals: JLb.shallow
                                })
                            })
                        }
                        get options() {
                            return this.OFa.map((a, b) => new SLb(a, b))
                        }
                        get hf() {
                            var a;
                            return null === (a = this.options.find(b => b.label === this.text)) || void 0 === a ? void 0 : a.id
                        }
                        get IQ() {
                            var a;
                            return null === (a = this.options.find(b => b.id === this.hf)) || void 0 === a ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.Mw.nA
                        }
                        get OFa() {
                            var a, b;
                            __c.B("select" === (null === (a = this.Mw.PA) || void 0 === a ? void 0 : a.type));
                            return null === (b = this.Mw.PA) || void 0 === b ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            iLb.j(this);
                            this.Mw = a;
                            this.type = "select"
                        }
                    },
                    jLb = class {
                        static j(a) {
                            R(a, {
                                PL: H4
                            })
                        }
                        get text() {
                            return this.PL ? this.PL.text : ""
                        }
                        get user() {
                            return this.PL ? this.PL.user : ""
                        }
                        get brand() {
                            return this.PL ? this.PL.brand : ""
                        }
                        get PL() {
                            if (7 !== this.Mw.mv.type) return __c.B(6 === this.Mw.mv.type), this.Mw.mv ? this.Mw.mv.value[0] : void 0
                        }
                        constructor(a) {
                            jLb.j(this);
                            this.Mw = a;
                            this.type = "mention"
                        }
                    };
                var TLb = class {
                    hma(a) {
                        this.mia.hma(a)
                    }
                    T1(a, b) {
                        this.mia.T1(a, b)
                    }
                    XY(a) {
                        return this.mia.XY(a)
                    }
                    ema(a) {
                        this.tEa.ema(a)
                    }
                    constructor(a, b, c, d) {
                        this.mia = a;
                        this.tEa = b;
                        this.vc = c;
                        this.FH = d;
                        this.Twa = new __c.yjb;
                        this.V4a = e => __c.CDa(this.Twa, e)
                    }
                };
                var rLb = HLb(void 0);
                var ULb = Number.parseInt("300ms", 10),
                    VLb = {
                        enter: "_QukmA",
                        enterActive: "_5_06KQ",
                        enterDone: void 0,
                        exitActive: "a952jg",
                        exitDone: "orZOEA"
                    },
                    WLb = R4(function({
                        yx: a = !1,
                        children: b,
                        keyFrame: c,
                        TQa: d,
                        yCa: e = "hidden",
                        qEa: f = "hidden",
                        ariaLive: g,
                        VIa: h,
                        Atb: k = "none"
                    }) {
                        a = __c.tb() && !a;
                        return vLb({
                            children: b,
                            keyFrame: c,
                            TQa: d,
                            ariaLive: g,
                            yCa: e,
                            qEa: f,
                            VIa: h,
                            cYa: a ? ULb : 0,
                            q2a: K4({
                                _1niDPQ: a,
                                Q6kGbg: "none" === k,
                                _9j7ODw: "layout" === k
                            }),
                            yib: VLb
                        })
                    });
                var XLb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var YLb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var ZLb = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var $Lb = R4(a => {
                        const b = a.link,
                            c = a.className,
                            d = a.ariaLabel,
                            e = a.IQ,
                            f = a.y1a,
                            g = a.xWa,
                            h = a.WWa,
                            k = a.measureRef,
                            l = a.onPointerDown,
                            m = a.onMouseEnter,
                            n = a.onMouseLeave,
                            p = K4({
                                EdewNw: !!g,
                                _6ZpPrw: !!h,
                                pzXyUA: 0 < a.text.length
                            });
                        a = 0 < a.text.length ? a.text : "\ufeff";
                        return GLb("span", {
                            className: K4(c, "FedJ0Q"),
                            "aria-label": d || a,
                            children: [J4("span", {
                                className: K4("_2Lr6pQ", p),
                                children: J4("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), GLb("span", {
                                className: K4("XemTdQ", p),
                                ref: k,
                                style: e ? {
                                    color: e
                                } : void 0,
                                onPointerDown: l,
                                onMouseEnter: m,
                                onMouseLeave: n,
                                children: [g, J4("span", {
                                    className: K4("U_QH_A", {
                                        C9XL8g: !f
                                    }),
                                    children: b ? J4("a", {
                                        className: "vgTP5Q",
                                        ...b,
                                        children: a
                                    }) : a
                                }), h]
                            })]
                        })
                    }),
                    aMb = R4(a => {
                        const b = a.backgroundColor,
                            c = a.Hq;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return J4(WLb, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? J4(__c.rsb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                Hq: c,
                                borderColor: c ? void 0 : b
                            }) : J4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: ZLb
                                }
                            })
                        })
                    }),
                    bMb = R4(a => {
                        a = a.icon;
                        return J4(WLb, {
                            keyFrame: a ?
                                "favicon" : "placeholder",
                            children: a ? J4("span", {
                                className: "_tFJqA",
                                children: J4("img", {
                                    src: a,
                                    className: "qpbYdw"
                                })
                            }) : J4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: YLb
                                }
                            })
                        })
                    }),
                    cMb = R4(() => J4("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: XLb
                        }
                    })),
                    zLb = R4(({
                        selected: a
                    }) => J4("div", {
                        className: K4("whph4A", {
                            zgzjww: a
                        }),
                        children: J4(__c.MM, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    dMb = P4(a => {
                        const {
                            qf: b,
                            TOa: c,
                            tsa: d,
                            mode: e = "viewable",
                            measureRef: f,
                            Uv: g,
                            onPointerDown: h
                        } = a;
                        a = b.text || "\u00a0".repeat(16);
                        const k = "embed" === b.type ? d.vc(b.url) : void 0,
                            [l, m] = wLb(!1),
                            n = L4(z => m(M4(z)), [m]),
                            p = L4(z => m(!M4(z)), [m]),
                            q = L4(z => {
                                m(M4(z.nativeEvent));
                                document.addEventListener("keydown", n);
                                document.addEventListener("keyup", p)
                            }, [m, n, p]),
                            r = L4(() => {
                                m(!1);
                                document.removeEventListener("keydown", n);
                                document.removeEventListener("keyup", p)
                            }, [m, n, p]);
                        xLb(() => {
                            O4(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.hma(b.user);
                                        break;
                                    case "embed":
                                        d.ema(b.url)
                                }
                            })
                        }, [b, d]);
                        ILb(() => {
                            null === g || void 0 === g ? void 0 : g()
                        }, [b.type, a, g]);
                        var t = 0 === b.text.length,
                            u = b.text || "",
                            v = yLb(b),
                            x = b.IQ;
                        a: {
                            switch (b.type) {
                                case "mention":
                                    var y = J4(aMb, {
                                        Hq: b.user ? d.XY(b.user) : void 0,
                                        text: b.text,
                                        backgroundColor: b.user ? d.V4a(b.user).background : void 0
                                    });
                                    break a;
                                case "embed":
                                    y = J4(bMb, {
                                        icon: d.tEa.jY.get(b.url)
                                    });
                                    break a;
                                case "date":
                                    y = b.text ? void 0 : J4(cMb, {});
                                    break a;
                                case "select":
                                    break;
                                default:
                                    throw new F(b);
                            }
                            y = void 0
                        }
                        return J4($Lb, {
                            text: a,
                            link: "viewable" === e || l ? k : void 0,
                            y1a: t,
                            ariaLabel: u,
                            className: v,
                            IQ: x,
                            xWa: y,
                            WWa: ALb(b, {
                                TOa: c
                            }),
                            measureRef: f,
                            onPointerDown: h,
                            onMouseEnter: "embed" === b.type && "editable" === e ? q : void 0,
                            onMouseLeave: "embed" === b.type && "editable" === e ? r : void 0
                        })
                    });
                var eMb = __c.L(() => ({
                    gub: __c.VN(11),
                    mode: __c.G("A?", 1, "BY_USER_IDS"),
                    cjb: __c.UN(1)
                }));
                var fMb = class {
                        static j(a) {
                            R(a, {
                                TO: KLb.shallow,
                                iFa: N4
                            })
                        }
                        XY(a) {
                            return this.NAa.XY(a)
                        }
                        hma(a) {
                            this.Swa.has(a) || this.TO.has(a) || (this.TO.add(a), this.a1a())
                        }
                        T1(a, b) {
                            this.Swa.has(a) || (this.Swa.set(a, b), this.TO.delete(a), CLb(this.NAa, a, b))
                        }
                        async iFa() {
                            if (0 !== this.TO.size) {
                                var a = [...this.TO.values()];
                                this.TO.clear();
                                if (this.OAa) {
                                    var b = await this.OAa;
                                    await Promise.all(BLb(a).map(async c => {
                                        const d = new eMb({
                                                cjb: c
                                            }),
                                            {
                                                fnb: e
                                            } = await b.zsb(d);
                                        O4(() => c.forEach(f => this.T1(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.T1(c))
                            }
                        }
                        constructor(a,
                            b) {
                            fMb.j(this);
                            this.OAa = a;
                            this.Swa = new T4;
                            this.TO = new Set;
                            this.NAa = new gMb;
                            this.a1a = __c.Mc(() => this.iFa(), 200);
                            O4(() => {
                                null === b || void 0 === b ? void 0 : b.forEach((c, d) => this.T1(d, c))
                            })
                        }
                    },
                    gMb = class {
                        XY(a) {
                            return this.F3.get(a)
                        }
                        constructor() {
                            this.F3 = new T4
                        }
                    };
                var DLb = __c.L(() => ({
                    id: __c.X("id", 1),
                    extension: __c.Y("extension", 3),
                    Peb: __c.QN("revision", 5),
                    version: __c.QN("version", 2),
                    Qtb: __c.QN("imagesetsLimit", 6)
                }));
                var hMb = class {
                    static j(a) {
                        R(a, {
                            P3a: N4
                        })
                    }
                    async P3a(a) {
                        if (this.tg) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                null == c || 2 > c.length ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await ELb(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        hMb.j(this);
                        this.tg = a;
                        this.bSa = new T4;
                        this.promises = new Map
                    }
                };
                var iMb = class {
                    static j(a) {
                        R(a, {
                            jY: KLb.shallow
                        })
                    }
                    async ema(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await (null === (d = this.FH) || void 0 === d ? void 0 : d.X4(a));
                            c = null === e || void 0 === e ? void 0 : e.O3a
                        } catch (e) {}
                        c ? (b.src = c, b.onload = N4(() => this.jY.set(a, c)), b.onerror = N4(() => this.jY.set(a, void 0))) : this.jY.set(a, void 0)
                    }
                    constructor(a) {
                        iMb.j(this);
                        this.FH = a;
                        this.jY = new Map
                    }
                };
                __c.NAa = {
                    q7a: function(a) {
                        const b = a.document,
                            c = a.tg,
                            d = a.vc,
                            e = a.FH;
                        var f = a.p5;
                        const g = a.fd,
                            h = a.zz,
                            k = a.P3;
                        a = a.bub;
                        f = new fMb(null === a || void 0 === a ? void 0 : a(), f);
                        a = new iMb(e);
                        new hMb(c);
                        const l = new TLb(f, a, d, e),
                            m = lLb(k, b);
                        g.Np.Mga = P4(({
                            item: p,
                            measureRef: q
                        }) => {
                            const r = I4(() => RLb(p.qf), [p.qf]);
                            return J4(dMb, {
                                qf: r,
                                tsa: l,
                                measureRef: q
                            })
                        });
                        const n = P4(({
                            context: p,
                            Uv: q
                        }) => {
                            const r = I4(() => __c.D(m(p.container)), [p]);
                            ILb(q, [q, p.container.column.width]);
                            return J4(dMb, {
                                qf: r,
                                tsa: l,
                                Uv: q
                            })
                        });
                        h.gza = ({
                                context: p,
                                Uv: q
                            }) =>
                            ({
                                type: "react",
                                node: J4(n, {
                                    context: p,
                                    Uv: q
                                })
                            });
                        return {
                            tsa: l
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/a9c2584ff3783c8b.js.map