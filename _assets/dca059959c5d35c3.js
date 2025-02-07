(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [49222], {

        /***/
        32282: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(999741);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var F = __c.F;
                var B = __c.B;
                var LNb = function(a, b, c, d) {
                        c = new KNb(c, d);
                        B(1 === a.count(), "Only single widget root element is supported");
                        a = a.first();
                        B(null != a && "layout" === a.type, `Unexpected widget root found: ${null===a||void 0===a?void 0:a.type}`);
                        c.ufa(a, b)
                    },
                    NNb = function(a) {
                        return { ...__c.Nw,
                            ...H5,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.qfa.width,
                                height: a.qfa.height
                            },
                            wb: a.wb.map(MNb)
                        }
                    },
                    ONb = function(a) {
                        switch (a.cG) {
                            case 0:
                                var b = __c.zj.Kc().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? 1E3 * a.lineHeight : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on",
                                    direction: a.direction
                                });
                                a.color && b.Og("color", a.color);
                                b = b.yc(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.eM,
                                    ...I5,
                                    ...H5,
                                    La: null !== (c = a.La) && void 0 !== c ? c : 0,
                                    text: b,
                                    nh: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.eM,
                                    ...I5,
                                    ...H5,
                                    text: b,
                                    nh: 2
                                };
                            default:
                                throw new F(a);
                        }
                    },
                    M5 = function({
                        content: a,
                        fill: b,
                        border: c,
                        P: d
                    }) {
                        b = { ...__c.O6a,
                            fill: J5(b),
                            border: K5(c),
                            P: L5(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: NNb(a)
                                };
                            case "text":
                                return { ...b,
                                    element: ONb(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: PNb(a)
                                };
                            default:
                                throw new F(a);
                        }
                    },
                    PNb = function({
                        cells: a,
                        border: b,
                        fill: c,
                        P: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.P6a,
                            ...I5,
                            ...H5,
                            F: I5.width,
                            N: I5.height,
                            fill: J5(c),
                            border: K5(b),
                            direction: 1,
                            P: L5(d),
                            cells: new Map(a.map(k => [k.id, M5(k)])),
                            behavior: {
                                rules: [{
                                    Fg: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: null !== g && void 0 !== g ? g : 0,
                                        rowGap: null !== h && void 0 !== h ? h : 0,
                                        Pg: QNb(a)
                                    }
                                }]
                            },
                            Mf: void 0
                        }
                    },
                    QNb = function(a) {
                        return new Map(a.map(b => [b.id, RNb(b)]))
                    },
                    RNb = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.Twa,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.QR,
                                ...(null != b ? "number" === typeof b ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    K5 = function(a) {
                        var b;
                        const c = null !== (b = null === a || void 0 === a ? void 0 : a.color) && void 0 !== b ? b : "#000000";
                        var d;
                        return { ...__c.BF,
                            all: a ? { ...__c.GR,
                                weight: null !== (d = a.weight) &&
                                    void 0 !== d ? d : 1,
                                color: c,
                                wf: !0
                            } : void 0
                        }
                    },
                    L5 = function(a) {
                        return { ...__c.PR,
                            ...(null != a ? "number" === typeof a ? {
                                all: a
                            } : a : {})
                        }
                    },
                    MNb = function(a) {
                        return { ...__c.Ow,
                            ...a,
                            fill: J5(a.fill),
                            stroke: SNb(a.stroke)
                        }
                    },
                    SNb = function(a) {
                        return a ? { ...__c.GR,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    J5 = function(a) {
                        var b;
                        const c = { ...__c.Pw,
                            La: null !== (b = null === a || void 0 === a ? void 0 : a.La) && void 0 !== b ? b : 0
                        };
                        switch (null === a || void 0 === a ? void 0 : a.type) {
                            case "color":
                                return { ...c,
                                    color: a.color
                                };
                            case "gradient":
                                return { ...c,
                                    jb: a.jb
                                };
                            case void 0:
                                return c;
                            default:
                                throw new F(a);
                        }
                    },
                    YNb = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        TNb(a.cells, c, (e, f) => {
                            let g = !1;
                            UNb(e.element, f.content, () => {
                                a.cells.delete(f.id);
                                a.cells.set(f.id, M5(f));
                                g = !0
                            });
                            g || (N5(e.fill, f.fill), VNb(e.border, f.border), WNb(e.P, f.P))
                        }, e => M5(e));
                        XNb(a.behavior, b, c);
                        N5(a.fill, b.fill);
                        WNb(a.P, b.P);
                        VNb(a.border, b.border);
                        var d;
                        a.La = null !== (d = b.La) && void 0 !== d ? d : 0
                    },
                    XNb = function(a, b, c) {
                        O5(a.rules, [b], d => {
                            ZNb(d.grid.gridTemplateColumns, b.gridTemplateColumns) || (d.grid.gridTemplateColumns =
                                b.gridTemplateColumns);
                            ZNb(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows = b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = null !== (e = b.columnGap) && void 0 !== e ? e : 0;
                            var f;
                            d.grid.rowGap = null !== (f = b.rowGap) && void 0 !== f ? f : 0;
                            TNb(d.grid.Pg, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd = n;
                                "number" === typeof k &&
                                    g.padding.all !== k ? g.padding.all = k : "number" !== typeof k && (g.padding.ya = null === k || void 0 === k ? void 0 : k.ya, g.padding.Ha = null === k || void 0 === k ? void 0 : k.Ha, g.padding.xa = null === k || void 0 === k ? void 0 : k.xa, g.padding.Oa = null === k || void 0 === k ? void 0 : k.Oa);
                                g.alignSelf = p
                            }, g => RNb(g))
                        }, d => {
                            var e, f;
                            return {
                                Fg: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: null !== (e = b.columnGap) && void 0 !== e ? e : 0,
                                    rowGap: null !== (f = b.rowGap) && void 0 !== f ? f : 0,
                                    Pg: QNb(d.cells)
                                }
                            }
                        })
                    },
                    $Nb = function(a,
                        b) {
                        O5(a.wb, b.wb, (e, f) => {
                            e.d = f.d;
                            N5(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref, f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(SNb(f.stroke))
                        }, e => MNb(e));
                        const {
                            viewBox: c,
                            width: d
                        } = NNb(b);
                        a.width = d;
                        __c.Uu(a.viewBox).equals(__c.Uu(c)) || (a.viewBox = c)
                    },
                    UNb = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                "shape" === a.type ? $Nb(a, b) : c();
                                break;
                            case "text":
                                "text" === a.type && __c.zj.domain.Xb(__c.zj.na(a.text), ONb(b).text) || c();
                                break;
                            case "layout":
                                "layout" === a.type ? YNb(a, b) : c();
                                break;
                            default:
                                throw new F(b);
                        }
                    },
                    TNb = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    O5 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    N5 = function(a, b) {
                        switch (null === b || void 0 === b ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.jb.set(void 0);
                                var c;
                                a.La = null !==
                                    (c = b.La) && void 0 !== c ? c : 0;
                                break;
                            case "gradient":
                                if (a.jb.ref && __c.pXa.domain.Xb(a.jb.ref, b.jb)) break;
                                a.color = void 0;
                                a.jb.set(b.jb);
                                var d;
                                a.La = null !== (d = b.La) && void 0 !== d ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.jb.set(void 0)
                        }
                    },
                    WNb = function(a, b) {
                        b = L5(b);
                        a.all = b.all;
                        a.vD = b.vD;
                        a.tD = b.tD;
                        a.uD = b.uD;
                        a.sD = b.sD
                    },
                    VNb = function(a, b) {
                        b = K5(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.CF.domain.Xb(__c.CF.na(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    ZNb = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    bOb = function(a,
                        b, c, d) {
                        let e = a.AOa.get(b);
                        if (e) return e;
                        e = {
                            xx: new aOb(c.rz, b, d, c.joa),
                            tAa: void 0,
                            MJa: void 0,
                            DKa: __c.gW.mode
                        };
                        a.AOa.set(b, e);
                        return e
                    },
                    dOb = function(a, b, c, d, e) {
                        var f, g;
                        e = bOb(a, c, b, e);
                        const h = e.xx,
                            k = e.MJa,
                            l = e.tAa,
                            m = e.DKa;
                        c = __c.YQ.na(c);
                        const n = (null === (f = (g = a.Zz).qGa) || void 0 === f ? void 0 : f.call(g, d)) || __c.gW;
                        h.pj === k && cOb.structural(c, l) && n.mode === m || (e.tAa = c, e.MJa = h.pj, e.DKa = n.mode, b = b.render(h, n), a.G$a.update(d, b), LNb(d, b, (p, q) => a.VO.yoa.set(p, q), (p, q, r) => a.VO.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    gOb = function(a,
                        b) {
                        const c = [],
                            d = () => c.forEach(e => e());
                        c.push(a.qab());
                        c.push(eOb(() => {
                            a: {
                                var e = new fOb;
                                for (const f of b)
                                    if (e.YO(f), e.qma) {
                                        e = e.qma;
                                        break a
                                    }
                                e = void 0
                            }
                            return e && (a.jc.isLoaded(e) || a.upa.has(e))
                        }, e => {
                            if (e) {
                                for (const f of b) B("layout" === f.type), a.yj.tca(f);
                                d()
                            }
                        }));
                        return d
                    },
                    hOb = function(a, b) {
                        return {
                            UQ: ({
                                ql: c
                            }) => {
                                var d;
                                const {
                                    xx: e
                                } = bOb(a.renderer, c, b, a.H_), f = __c.$Q.create([]), g = [];
                                g.push(gOb(a.q4a, f));
                                g.push(eOb(() => {
                                        var k, l;
                                        return [null === (k = (l = a.Zz).qGa) || void 0 === k ? void 0 : k.call(l, f), __c.YQ.na(c), e.pj]
                                    },
                                    () => {
                                        dOb(a.renderer, b, c, f, a.H_)
                                    }, {
                                        fireImmediately: !0,
                                        equals: cOb.structural
                                    }));
                                const h = null === (d = b.Pqa) || void 0 === d ? void 0 : d.call(b, {
                                    xx: e
                                });
                                h && g.push(h);
                                return {
                                    ob: f,
                                    Vv: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    jOb = function(a, b) {
                        let c = a.f5.get(b);
                        c || (c = iOb("weakKey"), a.f5.set(b, c));
                        c.reportObserved()
                    },
                    P5 = __webpack_require__(519427),
                    cOb = P5.comparer,
                    kOb = P5.computed,
                    iOb = P5.createAtom,
                    Q5 = P5.observable,
                    eOb = P5.reaction,
                    lOb = P5.runInAction;
                var mOb = class {
                    static j(a) {
                        __c.R(a, {
                            $bb: Q5.ref,
                            v5a: Q5.ref
                        })
                    }
                    constructor() {
                        mOb.j(this)
                    }
                };
                var nOb = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    aOb = class {
                        static j(a) {
                            __c.R(a, {
                                og: kOb
                            })
                        }
                        get NJa() {
                            var a = this.H_,
                                b = this.ql,
                                c = this.joa;
                            let d = a.sources.get(b);
                            d || (d = Q5.box(c), a.sources.set(b, d));
                            return d
                        }
                        get pj() {
                            return this.NJa.get()
                        }
                        get og() {
                            return this.rz.du({
                                type: "dict",
                                value: this.ql
                            })
                        }
                        Mm(a) {
                            this.NJa.set(a instanceof Function ? { ...this.pj,
                                ...a()
                            } : { ...this.pj,
                                ...a
                            })
                        }
                        constructor(a, b, c, d) {
                            aOb.j(this);
                            this.rz = a;
                            this.ql = b;
                            this.H_ = c;
                            this.joa = d
                        }
                    };
                var KNb = class {
                    T3(a, b) {
                        this.rOa(a, b);
                        b.ref && this.mta(a, b.ref, b.key)
                    }
                    aP(a, b) {
                        b.ref && this.mta(a.text, b.ref, b.key)
                    }
                    uxa(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                B("shape" === a.element.type);
                                this.T3(a.element, b.content);
                                break;
                            case "text":
                                B("text" === a.element.type);
                                this.aP(a.element, b.content);
                                break;
                            case "layout":
                                B("layout" === a.element.type);
                                this.ufa(a.element, b.content);
                                break;
                            default:
                                throw new F(b.content);
                        }
                    }
                    ufa(a, b) {
                        this.rOa(a, b);
                        b.ref && this.mta(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), B(!!d && !!a), this.uxa(d, a)
                    }
                    constructor(a, b) {
                        this.rOa = a;
                        this.mta = b
                    }
                };
                var H5 = {
                        locked: !0,
                        po: {
                            uX: !1,
                            OU: !1
                        },
                        wj: !0
                    },
                    I5 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var oOb = class {
                    constructor(a) {
                        this.yj = a;
                        this.update = (b, c) => {
                            O5(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        YNb(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...PNb(d),
                                            ...H5,
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            F: d.minWidth,
                                            N: d.minHeight
                                        };
                                        break a;
                                    default:
                                        throw new F(d.type);
                                }
                                return d
                            });
                            for (const d of b) B("layout" === d.type), d.width = c.minWidth, d.height = c.minHeight, d.F = c.minWidth, d.N = c.minHeight, c.direction && (d.direction = c.direction), this.yj.tca(d)
                        }
                    }
                };
                var pOb = class {
                    constructor(a, b, c) {
                        this.G$a = a;
                        this.VO = b;
                        this.Zz = c;
                        this.AOa = new WeakMap
                    }
                };
                var qOb = class {
                        static j(a) {
                            __c.R(a, {
                                upa: Q5.shallow
                            })
                        }
                        constructor(a, b) {
                            qOb.j(this);
                            this.jc = a;
                            this.yj = b;
                            this.upa = new Set;
                            this.Cma = new Set;
                            this.qab = () => {
                                this.G8 || (this.G8 = __c.wta(this.jc).subscribe(d => {
                                    lOb(() => {
                                        this.upa.add(d.id)
                                    })
                                }));
                                const c = Symbol();
                                this.Cma.add(c);
                                return () => {
                                    this.Cma.delete(c);
                                    0 >= this.Cma.size && this.G8 && (this.G8.unsubscribe(), this.G8 = void 0)
                                }
                            }
                        }
                    },
                    fOb = class extends __c.RD {
                        YO(a, b) {
                            this.qma || super.YO(a, b)
                        }
                        aP(a) {
                            this.qma = (a = a.text.Rx("font-family")["font-family"].values().next().value) &&
                                __c.JB(a).id
                        }
                    };
                var rOb = !1,
                    sOb = class {
                        register(a, b) {
                            this.DD.has(a) || (this.DD.set(a, b), rOb || (__c.ZQ.set(a, hOb(this, b)), rOb = !0))
                        }
                        get(a) {
                            return this.DD.get(a)
                        }
                        constructor(a, b, c, d, e) {
                            this.renderer = a;
                            this.H_ = b;
                            this.Zz = c;
                            this.jc = d;
                            this.yj = e;
                            this.DD = new Map;
                            this.q4a = new qOb(this.jc, this.yj)
                        }
                    };
                var tOb = class {
                    delete(a) {
                        var b;
                        const c = this.map.delete(a);
                        c && (null === (b = this.f5.get(a)) || void 0 === b ? void 0 : b.reportChanged());
                        return c
                    }
                    get(a) {
                        jOb(this, a);
                        return this.map.get(a)
                    }
                    has(a) {
                        jOb(this, a);
                        return this.map.has(a)
                    }
                    set(a, b) {
                        if (!this.map.has(a) || this.map.get(a) !== b) {
                            var c;
                            this.map.set(a, b);
                            null === (c = this.f5.get(a)) || void 0 === c ? void 0 : c.reportChanged()
                        }
                        return this
                    }
                    constructor() {
                        this.f5 = new WeakMap;
                        this.map = new WeakMap
                    }
                };
                var uOb = class {
                        constructor() {
                            this.yoa = new tOb;
                            this.refs = new tOb
                        }
                    },
                    vOb = class {
                        getContext(a) {
                            return this.VO.refs.get(a)
                        }
                        XL(a) {
                            return this.VO.yoa.get(a)
                        }
                        constructor(a, b, c) {
                            this.VO = a;
                            this.H_ = b;
                            this.renderer = c
                        }
                    };
                __c.tKa = {
                    w7a: function(a) {
                        const b = new mOb;
                        switch (a.Ed) {
                            case "fixed":
                                const c = new uOb,
                                    d = new pOb(new oOb(a.yj), c, b),
                                    e = new nOb;
                                a = new sOb(d, e, b, a.jc, a.yj);
                                return {
                                    Zz: b,
                                    $Bb: new vOb(c, e, d),
                                    Njb: a,
                                    VO: c
                                };
                            case "responsive":
                                throw Error("Not implemented");
                            default:
                                throw new F(a);
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/dca059959c5d35c3.js.map