(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [35024], {

        /***/
        290881: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var bJ = __c.bJ;
                var Fc = __c.Fc;
                var R = __c.R;
                var fJ = __c.fJ;
                var Fg = __c.Fg;
                var D = __c.D;
                var F = __c.F;
                var O = __c.O;
                var Hz = __c.Hz;
                var V4 = function() {
                        const [a] = (0, __c.Zb)(() => Hz());
                        return a
                    },
                    jMb = function(a) {
                        switch (a) {
                            case 4:
                                return O("9ND0kg");
                            case 2:
                                return O("ibdecg");
                            case 7:
                                return O("446quA");
                            case 5:
                                return O("j1fbqg");
                            case 1:
                                return O("O5i4AQ");
                            case 6:
                                return O("C0VHsg");
                            case 3:
                                return O("+IXmVg");
                            default:
                                throw new F(a);
                        }
                    },
                    kMb = function(a, b, c) {
                        const d = [a];
                        for (; null != a && a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    lMb = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.N)(a, { ...b
                            })
                        })
                    },
                    nMb = function(a) {
                        var b, c = a.zz,
                            d = a.content;
                        a = a.context;
                        __c.B("formula" === (null === d || void 0 === d ? void 0 : null === (b = d.Dg) || void 0 === b ? void 0 : b.type));
                        b = d.Dg.value;
                        switch (b.type) {
                            case "invalid":
                                b = b.oca;
                                break;
                            case "canonical":
                                b = b.QK;
                                break;
                            default:
                                throw new F(b);
                        }
                        __c.B(b.startsWith("="));
                        const e = d.mv;
                        b = {
                            type: "dom",
                            render: h => h.innerText = ""
                        };
                        let f;
                        switch (e.type) {
                            case 7:
                                f = b;
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 5:
                            case 6:
                                f = mMb(c, a, d.nA);
                                break;
                            case 0:
                                f = {
                                    type: "react",
                                    node: W4(__c.zS, {
                                        label: jMb(e.error),
                                        children: W4(__c.MA, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: W4(__c.qpb, {
                                                tone: "critical"
                                            })
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new F(e);
                        }
                        if (!f) return b;
                        c = __c.Vf(__c.NQ, a.attrs);
                        d = __c.aJ(a.attrs.textAlign, "formula", void 0, () => e.type);
                        const g = {
                            textAlign: __c.FEa(d, c.direction),
                            justifyContent: __c.GEa(d),
                            width: "100%"
                        };
                        switch (f.type) {
                            case "dom":
                                return {
                                    type: "dom",
                                    render: h => {
                                        const k = document.createElement("div");
                                        Object.assign(k.style, g);
                                        f.render(k);
                                        h.innerHTML = "";
                                        h.appendChild(k)
                                    }
                                };
                            case "react":
                                return {
                                    type: "react",
                                    node: W4("div", {
                                        style: g,
                                        children: f.node
                                    })
                                };
                            default:
                                throw new F(f);
                        }
                    },
                    mMb = function(a, b, c) {
                        var d;
                        return null === (d = a.Nga) || void 0 === d ? void 0 : d.call(a, {
                            context: b,
                            value: c
                        })
                    },
                    qMb = function(a) {
                        const b = a.zz,
                            c = a.lf;
                        a = a.Ahb;
                        b.Nga = __c.OEa;
                        b.eza = d => nMb({ ...d,
                            zz: b
                        });
                        b.fza = lMb(oMb({
                            lf: c,
                            tP: void 0
                        }));
                        b.hza = pMb(a);
                        b.iza = lMb(X4)
                    },
                    rMb = function({
                        label: a,
                        width: b,
                        height: c,
                        scale: d,
                        kCa: e
                    }) {
                        return W4("div", {
                            style: {
                                width: b,
                                height: c,
                                transform: `scale(${d})`
                            },
                            className: "bx74uQ",
                            children: W4(__c.JA, {
                                className: Y4("ivlMMQ", Z4(e)),
                                size: "small",
                                alignment: "center",
                                children: a
                            })
                        })
                    },
                    Z4 = function(a) {
                        return {
                            _2BX0vg: "primary-default" ===
                                a,
                            JfW_Cg: "primary-low" === a,
                            isMgNg: "primary-active" === a,
                            xwWDeQ: "secondary-default" === a,
                            w0EyUQ: "secondary-low" === a,
                            _8p5AIA: "secondary-active" === a
                        }
                    },
                    tMb = function({
                        yd: a,
                        fHa: b,
                        scale: c,
                        ht: d,
                        Vo: e,
                        sUa: f
                    }) {
                        const g = $4(() => {
                                const m = null === d || void 0 === d ? void 0 : d.get();
                                if (null != m && 0 !== m.length) return new __c.MF(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return W4(__c.KA, {
                            Sp: "light",
                            light: "light",
                            Os: "light",
                            dark: "light",
                            children: m => W4("div", {
                                className: Y4("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: W4("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: Y4("N7J3UA", l),
                                    ref: null === g || void 0 === g ? void 0 : g.Pl,
                                    children: W4(__c.JS, {
                                        className: Y4("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: O("ruWN9A"),
                                        children: W4(sMb, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    vMb = function() {
                        const a = new uMb,
                            b = new __c.aT,
                            c = a5(f => {
                                const {
                                    scale: g = 1,
                                    $Ga: h,
                                    size: k = "small",
                                    sUa: l = !0
                                } = f, m = b5(n => a.Vo({
                                    scale: n,
                                    size: k,
                                    kqa: h
                                }), [k, h]);
                                return W4(tMb, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    yd: "rtl" === f.sheet.direction,
                                    fHa: null != f.selection && a.t8a(f.sheet, f.selection),
                                    Vo: m,
                                    sUa: l
                                })
                            }),
                            d = a5(f => {
                                const {
                                    scale: g = 1,
                                    $Ga: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    ffb: n
                                } = f, p = b5(v => a.Vo({
                                    scale: v,
                                    size: k,
                                    kqa: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = b5(v => null != m && a.fua(m).has(v), [m]), t = b5(v => null != m && a.r6a(l, m).has(v), [l, m]), u = b5(v => {
                                    const x = null != n && 0 <= l.layout.cols.Ke(v, n.Wb) && 0 >= l.layout.cols.Ke(v, n.Hc);
                                    return r(v) ? x ? "secondary-active" : "primary-active" : t(v) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return W4(c5, { ...f,
                                    Ad: g,
                                    Rd: q,
                                    Vo: p,
                                    rE: u,
                                    fF: b
                                })
                            }),
                            e = a5(f => {
                                const {
                                    scale: g = 1,
                                    $Ga: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    ffb: n
                                } = f, p = b5(v => a.Vo({
                                    scale: v,
                                    size: k,
                                    kqa: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = b5(v => null != m && a.hua(m).has(v), [m]), t = b5(v => null != m && a.s6a(l, m).has(v), [l, m]), u = b5(v => {
                                    const x = null != n && 0 <= l.layout.rows.Ke(v, n.bc) && 0 >= l.layout.rows.Ke(v, n.$c);
                                    return r(v) ? x ? "secondary-active" : "primary-active" : t(v) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return W4(d5, { ...f,
                                    Ad: q,
                                    Rd: g,
                                    Vo: p,
                                    rE: u,
                                    fF: b
                                })
                            });
                        return {
                            WUa: c,
                            VUa: d,
                            XUa: e
                        }
                    },
                    wMb = function(a) {
                        const b = a.Cs,
                            c = () => null;
                        return __c.Rz(d => W4(e5, { ...d,
                            Cs: b,
                            Ei: c
                        }))
                    },
                    yMb = function({
                        sheet: a,
                        ea: b,
                        range: c,
                        Gd: d
                    }) {
                        xMb(() => f5(() => {
                            if (null != d.current) {
                                var e, f = null !== (e = null === b || void 0 === b ? void 0 : b.get()) && void 0 !== e ? e : 1;
                                e = "rtl" === a.direction;
                                e = c ? a.xa(c.Wb) * f * (e ? 1 : -1) : 0;
                                var g = c ? -a.ya(c.bc) * f : 0;
                                d.current.style.transform = `translate(${e}px, ${g}px)`;
                                d.current.style.width = `${a.width*f}px`;
                                d.current.style.height = `${a.height*f}px`
                            }
                        }), [a, c, d, b])
                    },
                    BMb = function({
                        onScroll: a
                    }) {
                        const b =
                            new zMb(a);
                        return {
                            jC: b,
                            wga: a5(c => W4(AMb, {
                                sheet: c.sheet,
                                jC: b,
                                children: c.children
                            }))
                        }
                    },
                    FMb = function(a) {
                        const b = a.Cs,
                            c = a.$e,
                            d = a.lQa,
                            e = ({
                                children: k
                            }) => k,
                            {
                                jC: f,
                                wga: g
                            } = BMb({
                                onScroll: a.onScroll
                            });
                        class h extends CMb {
                            get xK() {
                                const k = this.props.Bb.VD;
                                switch (k) {
                                    case "screen":
                                        return g;
                                    case "print":
                                        return e;
                                    default:
                                        throw new F(k);
                                }
                            }
                            componentDidMount() {
                                d.bQa(this.props.item, {
                                    Rb: this.props.Rb,
                                    Bb: this.props.Bb
                                })
                            }
                            componentWillUnmount() {
                                d.c_a(this.props.item, {
                                    Rb: this.props.Rb,
                                    Bb: this.props.Bb
                                })
                            }
                            render() {
                                d.bQa(this.props.item, {
                                    Rb: this.props.Rb,
                                    Bb: this.props.Bb
                                });
                                return W4(DMb, { ...this.props,
                                    ea: this.ea,
                                    Cs: b,
                                    xK: this.xK,
                                    Ei: this.Ei,
                                    lQa: d,
                                    jC: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.ea = g5(() => {
                                    const l = this.props.item;
                                    var m = this.props.Bb,
                                        n = m.VD;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return 1;
                                        case "print":
                                            n = d.I5a(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.cG(l, n.Rb, {
                                                zoom: m
                                            }));
                                            return n / l.config.width;
                                        default:
                                            throw new F(n);
                                    }
                                });
                                this.Ei = a5(l => W4("div", {
                                    className: "wKvivQ",
                                    children: W4(EMb, { ...this.props,
                                        ...l,
                                        $e: c
                                    })
                                }))
                            }
                        }
                        return {
                            NWa: h,
                            jC: f
                        }
                    },
                    GMb = function(a,
                        b) {
                        if (null != b && null != b.Wb && null != b.bc && null != b.Hc && null != b.$c) {
                            var c = a.xa(b.Wb),
                                d = a.ya(b.bc),
                                e = a.xa(b.Hc) + b.Hc.width - c;
                            a = a.ya(b.$c) + b.$c.height - d;
                            return __c.Uu({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    IMb = function(a) {
                        const b = a.Cs,
                            c = () => null;
                        return d => W4(HMb, { ...d,
                            Cs: b,
                            Ei: c
                        })
                    },
                    MMb = function(a, b, c, d, e, f) {
                        if (0 === d.length || 0 === e.length) return [];
                        const g = JMb(b, c, d, e);
                        f = KMb(b, c, d, e, f);
                        const h = LMb(a, b, c, d, e),
                            k = a.E5a(b),
                            l = a.$4a(b),
                            m = "rtl" === b.direction;
                        a = g.map(n => {
                            var p, q, r = n.Igb,
                                t = n.Rla,
                                u = n.WOa;
                            const v = n.color,
                                x = n.weight;
                            n = n.kc;
                            const y = m ? -1 : 1,
                                z = null === (p = h.get(h5(r, u))) || void 0 === p ? void 0 : p.Oa;
                            p = null === (q = h.get(h5(t, u))) || void 0 === q ? void 0 : q.xa;
                            if (null != z && null != p) {
                                q = D(k.get(u.ua));
                                var A = D(l.get(r.column));
                                r = D(l.get(t.column));
                                u = "start" === u.boundary ? q.start : q.end;
                                q = A.start;
                                t = "start" === t.boundary ? r.start : r.end;
                                return {
                                    color: v,
                                    weight: x,
                                    kc: n,
                                    p1: new __c.vu(q + z * y, u),
                                    p2: new __c.vu(t + p * y, u),
                                    ...__c.hJ((t - q) * y, n * x, z)
                                }
                            }
                        }).filter(__c.vb);
                        return [...f.map(n => {
                            var p, q, r = n.bCa,
                                t = n.Rgb,
                                u = n.Ula;
                            const v = n.color,
                                x = n.weight;
                            n = n.kc;
                            const y = null === (p = h.get(h5(r, t))) || void 0 === p ? void 0 : p.Ha;
                            p = null === (q = h.get(h5(r, u))) || void 0 === q ? void 0 : q.ya;
                            if (null != y && null != p) {
                                q = D(l.get(r.column));
                                var z = D(k.get(t.ua));
                                t = D(k.get(u.ua));
                                r = "start" === r.boundary ? q.start : q.end;
                                q = z.start;
                                u = "start" === u.boundary ? t.start : t.end;
                                return {
                                    color: v,
                                    weight: x,
                                    kc: n,
                                    p1: new __c.vu(r, q + y),
                                    p2: new __c.vu(r, u + p),
                                    ...__c.hJ(u - q, n * x, y)
                                }
                            }
                        }).filter(__c.vb), ...a]
                    },
                    NMb = function(a) {
                        const b = [];
                        a = a.filter(c => 0 !== c.weight && null != c.color);
                        a = __c.kd(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.kd(d, e => `${e.Pj}_${e.Rj}`);
                            for (const [, e] of a) {
                                const {
                                    Rj: f,
                                    Pj: g
                                } = e[0];
                                a = __c.kd(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    Pj: g,
                                    Rj: f
                                })
                            }
                        }
                        return b
                    },
                    PMb = function(a, b, c, d) {
                        var e = OMb;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                ua: k,
                                boundary: "start"
                            }, {
                                ua: k,
                                boundary: "end"
                            }] : [{
                                ua: k,
                                boundary: "start"
                            }]),
                            g = c.get().flatMap(k => a.layout.cols.last() === k ? [{
                                column: k,
                                boundary: "start"
                            }, {
                                column: k,
                                boundary: "end"
                            }] : [{
                                column: k,
                                boundary: "start"
                            }]),
                            h =
                            new Map;
                        for (const k of b.get())
                            for (const l of c.get()) b = l && k ? e.kQa.Eeb(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = MMb(e, a, h, f, g, d);
                        return NMb(c)
                    },
                    JMb = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.ua;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || ("start" === k.boundary ? g.span.bc === c : g.span.$c === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = "start" === k.boundary ? null === c || void 0 === c ? void 0 : c.ya : null === c || void 0 === c ? void 0 : c.Ha) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: D(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.Rla, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.WOa, h = h.ua === k.ua && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.kc === c.kc && 0 === g.kc ? g.Rla = f : e.push({
                                            WOa: k,
                                            Igb: l,
                                            Rla: f,
                                            color: c.color,
                                            weight: c.weight,
                                            kc: c.kc
                                        })
                                    }
                            }
                        return e
                    },
                    KMb = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.ua,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || ("start" === l.boundary ? d.span.Wb === h : d.span.Hc === h))
                                    if (d = b.get(`${h.id}:${g.id}`),
                                        (d = "start" === l.boundary ? null === d || void 0 === d ? void 0 : d.xa : null === d || void 0 === d ? void 0 : d.Oa) && ("start" !== l.boundary || 1 !== e(g, h))) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            ua: g,
                                            boundary: "start"
                                        } : {
                                            ua: D(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.bCa, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.Ula, k = k.ua === m.ua && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.kc === d.kc && 0 === h.kc ? h.Ula = g : f.push({
                                            bCa: l,
                                            Rgb: m,
                                            Ula: g,
                                            color: d.color,
                                            weight: d.weight,
                                            kc: d.kc
                                        })
                                    }
                            }
                        return f
                    },
                    LMb = function(a, b, c, d, e) {
                        const f = a.kQa.c0a(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                u = f.get(r) || 0;
                            return t <= u ? q : r
                        };
                        const g = new Map;
                        if (0 === d.length || 0 === e.length) return g;
                        var h = [],
                            k = b.layout.cols.Gc(e[0].column);
                        k && h.push({
                            column: k,
                            boundary: "start"
                        });
                        h.push(...e);
                        (e = b.layout.cols.next(e[e.length - 1].column)) && h.push({
                            column: e,
                            boundary: "start"
                        });
                        e = [];
                        (k = b.layout.rows.Gc(d[0].ua)) && e.push({
                            ua: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].ua)) &&
                        e.push({
                            ua: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = "start" === q.boundary ? q.column : void 0) ? b.layout.cols.Gc(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = "start" === r.boundary ? r.ua : void 0;
                                k = l ? b.layout.rows.Gc(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = "end" === q.boundary ? null === l || void 0 === l ? void 0 : l.Oa : null === m || void 0 === m ? void 0 : m.xa;
                                m = "end" === r.boundary ? null === n || void 0 ===
                                    n ? void 0 : n.Ha : null === m || void 0 === m ? void 0 : m.ya;
                                n = "end" === q.boundary ? null === p || void 0 === p ? void 0 : p.Oa : null === n || void 0 === n ? void 0 : n.xa;
                                l = "end" === r.boundary ? null === p || void 0 === p ? void 0 : p.Ha : null === l || void 0 === l ? void 0 : l.ya;
                                p = __c.YEa({
                                    ya: n,
                                    Ha: k,
                                    xa: l,
                                    Oa: m
                                }, a);
                                let t;
                                switch (p) {
                                    case "blockStart":
                                        t = n;
                                        break;
                                    case "blockEnd":
                                        t = k;
                                        break;
                                    case "inlineStart":
                                        t = l;
                                        break;
                                    case "inlineEnd":
                                        t = m;
                                        break;
                                    default:
                                        t = void 0
                                }
                                const {
                                    height: u,
                                    width: v
                                } = 1 === (null === t || void 0 === t ? void 0 : t.kc) ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((null ===
                                        l || void 0 === l ? void 0 : l.weight) || 0, (null === m || void 0 === m ? void 0 : m.weight) || 0),
                                    width: Math.max((null === n || void 0 === n ? void 0 : n.weight) || 0, (null === k || void 0 === k ? void 0 : k.weight) || 0)
                                };
                                g.set(h5(q, r), __c.cJ(p, u / 2, v / 2))
                            }
                        }
                        return g
                    },
                    i5 = function(a, b, c, d, e) {
                        if (a && b) {
                            var f = b.ut ? a.ut ? void 0 : a : b;
                            return __c.eJ(b.borderStyle, a.borderStyle, d, c, e, null === f || void 0 === f ? void 0 : f.borderStyle)
                        }
                        return null !== (f = null === a || void 0 === a ? void 0 : a.borderStyle) && void 0 !== f ? f : null === b || void 0 === b ? void 0 : b.borderStyle
                    },
                    QMb = function(a,
                        b, c) {
                        var d = b && c && a.layout.cells.get(c, b),
                            e, f, g = b && c ? a.layout.attrs.get(Fg({
                                F5: void 0,
                                jQ: void 0,
                                J5: void 0
                            }), null !== (e = null === d || void 0 === d ? void 0 : d.span.bc) && void 0 !== e ? e : c, null !== (f = null === d || void 0 === d ? void 0 : d.span.Wb) && void 0 !== f ? f : b) || {} : void 0;
                        if (b && c) {
                            b = {
                                color: a.ij.color,
                                weight: a.ij.weight,
                                kc: fJ(a.ij.Vd)
                            };
                            if (!g) return a.vm ? void 0 : {
                                borderStyle: b,
                                ut: !0
                            };
                            c = j5(g.F5);
                            d = k5(g.jQ);
                            g = l5(g.J5);
                            return null == c && null == d && null == g ? a.vm ? void 0 : {
                                borderStyle: b,
                                ut: !0
                            } : {
                                borderStyle: {
                                    color: null !== c && void 0 !== c ?
                                        c : b.color,
                                    weight: null !== d && void 0 !== d ? d : b.weight,
                                    kc: g ? fJ(g) : b.kc
                                },
                                ut: !1
                            }
                        }
                    },
                    RMb = function(a, b, c) {
                        var d = b && c && a.layout.cells.get(c, b),
                            e, f, g = b && c ? a.layout.attrs.get(Fg({
                                E5: void 0,
                                iQ: void 0,
                                I5: void 0
                            }), null !== (e = null === d || void 0 === d ? void 0 : d.span.bc) && void 0 !== e ? e : c, null !== (f = null === d || void 0 === d ? void 0 : d.span.Wb) && void 0 !== f ? f : b) || {} : void 0;
                        if (b && c) {
                            b = {
                                color: a.ij.color,
                                weight: a.ij.weight,
                                kc: fJ(a.ij.Vd)
                            };
                            if (!g) return a.vm ? void 0 : {
                                borderStyle: b,
                                ut: !0
                            };
                            c = j5(g.E5);
                            d = k5(g.iQ);
                            g = l5(g.I5);
                            return null == c && null ==
                                d && null == g ? a.vm ? void 0 : {
                                    borderStyle: b,
                                    ut: !0
                                } : {
                                    borderStyle: {
                                        color: null !== c && void 0 !== c ? c : b.color,
                                        weight: null !== d && void 0 !== d ? d : b.weight,
                                        kc: g ? fJ(g) : b.kc
                                    },
                                    ut: !1
                                }
                        }
                    },
                    SMb = function(a, b, c) {
                        var d = b && c && a.layout.cells.get(c, b),
                            e, f, g = b && c ? a.layout.attrs.get(Fg({
                                H5: void 0,
                                lQ: void 0,
                                M5: void 0
                            }), null !== (e = null === d || void 0 === d ? void 0 : d.span.bc) && void 0 !== e ? e : c, null !== (f = null === d || void 0 === d ? void 0 : d.span.Wb) && void 0 !== f ? f : b) || {} : void 0;
                        if (b && c) {
                            b = {
                                color: a.ij.color,
                                weight: a.ij.weight,
                                kc: fJ(a.ij.Vd)
                            };
                            if (!g) return a.vm ?
                                void 0 : {
                                    borderStyle: b,
                                    ut: !0
                                };
                            c = j5(g.H5);
                            d = k5(g.lQ);
                            g = l5(g.M5);
                            return null == c && null == d && null == g ? a.vm ? void 0 : {
                                borderStyle: b,
                                ut: !0
                            } : {
                                borderStyle: {
                                    color: null !== c && void 0 !== c ? c : b.color,
                                    weight: null !== d && void 0 !== d ? d : b.weight,
                                    kc: g ? fJ(g) : b.kc
                                },
                                ut: !1
                            }
                        }
                    },
                    TMb = function(a, b, c) {
                        var d = b && c && a.layout.cells.get(c, b),
                            e, f, g = b && c ? a.layout.attrs.get(Fg({
                                G5: void 0,
                                kQ: void 0,
                                L5: void 0
                            }), null !== (e = null === d || void 0 === d ? void 0 : d.span.bc) && void 0 !== e ? e : c, null !== (f = null === d || void 0 === d ? void 0 : d.span.Wb) && void 0 !== f ? f : b) || {} :
                            void 0;
                        if (b && c) {
                            b = {
                                color: a.ij.color,
                                weight: a.ij.weight,
                                kc: fJ(a.ij.Vd)
                            };
                            if (!g) return a.vm ? void 0 : {
                                borderStyle: b,
                                ut: !0
                            };
                            c = j5(g.G5);
                            d = k5(g.kQ);
                            g = l5(g.L5);
                            return null == c && null == d && null == g ? a.vm ? void 0 : {
                                borderStyle: b,
                                ut: !0
                            } : {
                                borderStyle: {
                                    color: null !== c && void 0 !== c ? c : b.color,
                                    weight: null !== d && void 0 !== d ? d : b.weight,
                                    kc: g ? fJ(g) : b.kc
                                },
                                ut: !1
                            }
                        }
                    },
                    j5 = function(a) {
                        return null == a || "inherit" === a ? void 0 : a
                    },
                    k5 = function(a) {
                        return null == a || "inherit" === a ? void 0 : Number(a.split("px")[0])
                    },
                    l5 = function(a) {
                        return null == a || "inherit" ===
                            a ? void 0 : a.split(" ").map(b => {
                                b = Number(b);
                                return 0 < b ? b : void 0
                            }).filter(__c.vb)
                    },
                    m5 = function(a, b, c) {
                        let d = 0;
                        for (; null != a && a !== b;)(a = c.next(a)) && d++;
                        return d
                    },
                    UMb = function(a, b) {
                        return (null === a || void 0 === a ? void 0 : a.Ha) === (null === b || void 0 === b ? void 0 : b.Ha) && (null === a || void 0 === a ? void 0 : a.ya) === (null === b || void 0 === b ? void 0 : b.ya) && (null === a || void 0 === a ? void 0 : a.Oa) === (null === b || void 0 === b ? void 0 : b.Oa) && (null === a || void 0 === a ? void 0 : a.xa) === (null === b || void 0 === b ? void 0 : b.xa)
                    },
                    WMb = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                CBa: b,
                                kx: b,
                                Ea: {},
                                uA: {}
                            },
                            d = n5(() => a.aea.style || c, g => {
                                var h;
                                Object.assign(a.l6.style, g.CBa);
                                Object.assign(a.vQ.style, g.kx);
                                Object.assign(a.eH.style, g.Ea);
                                Object.assign(a.ED.style, g.uA);
                                g = null === g || void 0 === g ? void 0 : null === (h = g.Ea) || void 0 === h ? void 0 : h.textDecoration;
                                a.eH.classList.toggle("OQx3PQ", "underline" === g);
                                a.eH.classList.toggle("_99ezUA", "line-through" === g);
                                a.eH.classList.toggle("kppAqQ", "underline line-through" === g)
                            }, {
                                fireImmediately: !0,
                                equals: o5.structural
                            }),
                            e = n5(() => a.UZ && a.wIa, g => {
                                a.eH.classList.toggle("_84KvRA", !g);
                                a.l6.classList.toggle("_84KvRA", !g)
                            }, {
                                fireImmediately: !0
                            }),
                            f = n5(() => a.renderer, g => {
                                a.T6 && "react" !== (null === g || void 0 === g ? void 0 : g.type) ? (a.T6 = void 0, a.V0.remove()) : a.ED.innerHTML = "";
                                switch (null === g || void 0 === g ? void 0 : g.type) {
                                    case "react":
                                        a.T6 = VMb(g.node, a.V0);
                                        a.ED.appendChild(a.V0);
                                        break;
                                    case "dom":
                                        g.render(a.ED);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new F(g);
                                }
                                a.Yqa()
                            }, {
                                fireImmediately: !0
                            });
                        return () => {
                            d();
                            e();
                            f()
                        }
                    },
                    YMb = function(a) {
                        const b = a.Az,
                            c = a.RC,
                            d = a.NTa,
                            e = new XMb(a.V1);
                        return f => W4(p5, { ...f,
                            RC: c,
                            Az: b,
                            Coa: e,
                            NTa: null === d || void 0 === d ? void 0 : d.get()
                        })
                    },
                    oMb = ({
                        lf: a,
                        tP: b
                    }) => c => (0, __c.N)(__c.wib, { ...c,
                        lf: a,
                        tP: b
                    }),
                    q5 = __webpack_require__(443763),
                    ZMb = q5.Fragment,
                    W4 = q5.jsx,
                    r5 = q5.jsxs;
                var a5 = __webpack_require__(214645).Pi;
                var s5 = __webpack_require__(875604),
                    t5 = s5.Component,
                    CMb = s5.PureComponent,
                    b5 = s5.useCallback,
                    xMb = s5.useEffect,
                    $Mb = s5.useLayoutEffect,
                    $4 = s5.useMemo,
                    aNb = s5.useState;
                var u5 = __webpack_require__(519427),
                    v5 = u5.action,
                    f5 = u5.autorun,
                    o5 = u5.comparer,
                    g5 = u5.computed,
                    bNb = u5.createAtom,
                    w5 = u5.observable,
                    n5 = u5.reaction,
                    cNb = u5.untracked;
                var x5 = __webpack_require__(46239).gn;
                var dNb = __webpack_require__,
                    eNb = dNb(993864),
                    Y4 = dNb.n_x(eNb)();
                var fNb = __webpack_require__(358579).Z;
                var y5 = __webpack_require__(635872),
                    z5 = y5.Om,
                    A5 = y5.kq,
                    gNb = y5.YN;
                var VMb = __webpack_require__(204358).createPortal;
                var hNb = a5(a => {
                        var b, c, d = "rtl" === a.sheet.direction;
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const [e] = aNb(() => Hz()), f = {
                            get: b5(() => {
                                var g;
                                const h = null === e || void 0 === e ? void 0 : null === (g = e.current) || void 0 === g ? void 0 : g.getBoundingClientRect();
                                var k, l;
                                g = {
                                    top: 0,
                                    left: 0,
                                    width: null !== (k = null === h || void 0 === h ? void 0 : h.width) && void 0 !== k ? k : 0,
                                    height: null !== (l = null === h || void 0 === h ? void 0 : h.height) && void 0 !== l ? l : 0
                                };
                                return __c.Uu(g)
                            }, [e])
                        };
                        return r5("div", {
                            className: Y4("nMvVqA", d),
                            children: [r5("div", {
                                ref: fNb(a.Gd, e),
                                className: "_0YOFPg",
                                children: [W4(a.Cs, { ...a,
                                    viewport: f
                                }), W4("div", {
                                    className: Y4("Gdl7fQ", d),
                                    children: null === (c = a.Aya) || void 0 === c ? void 0 : null === (b = c.get()) || void 0 === b ? void 0 : b.map((g, h) => W4(g, {}, h))
                                })]
                            }), "visible" === a.ztb && r5(ZMb, {
                                children: [W4("div", {
                                    className: Y4("_32sKQw", d),
                                    children: W4(a.KWa, { ...a
                                    })
                                }), W4("div", {
                                    className: Y4("xdIsTQ", d),
                                    children: W4(a.OWa, { ...a
                                    })
                                }), W4("div", {
                                    className: Y4("rsTRSA", d),
                                    children: W4(a.MWa, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    iNb = a5(a => {
                        a = a.content;
                        __c.w("text2" === a.type || "text3" === a.type);
                        switch (a.type) {
                            case "text2":
                                return a.value.X;
                            case "text3":
                                return __c.xq.na(a.value).cells.X();
                            default:
                                throw new F(a);
                        }
                    });
                var pMb = a => __c.DEa((b, c) => {
                        const d = b.content;
                        b = b.context;
                        if (d.value.isEmpty)
                            for (; c.lastChild;) c.lastChild.remove();
                        else({
                            gi: b
                        } = __c.Vf(__c.Eg, b.attrs)), "wrap" === b && (c = c.appendChild(document.createElement("div")), c.className = "dt4Dlg"), a.render({
                            container: c,
                            text: d.value,
                            Ia: void 0,
                            writingMode: 1,
                            Bd: "start",
                            pg: jNb(d, b)
                        })
                    }),
                    jNb = z5((a, b) => {
                        if ("wrap" === b) return [];
                        a = a.value.X.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: o5.structural
                    });
                var X4 = class extends t5 {
                    static j(a) {
                        R(a, {
                            gi: g5
                        })
                    }
                    get gi() {
                        return __c.Vf(__c.Eg, this.props.context.attrs).gi
                    }
                    render() {
                        var a = this.props.content;
                        const b = this.props.context;
                        if (a.value.isEmpty) return null;
                        a = W4(this.props.Ei, {
                            content: a,
                            ua: b.container.ua,
                            col: b.container.column,
                            gi: this.gi
                        }, this.key++);
                        return "wrap" === this.gi ? W4("div", {
                            className: "dt4Dlg",
                            children: a
                        }) : a
                    }
                    constructor(...a) {
                        super(...a);
                        X4.j(this);
                        this.key = 0
                    }
                };
                X4 = x5([Fc], X4);
                var kNb = 5 * __c.BA,
                    lNb = 4 * __c.BA;
                var uMb = class {
                    Vo({
                        size: a,
                        scale: b,
                        kqa: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return "large" === a ? kNb * b : lNb * b
                    }
                    constructor() {
                        this.t8a = z5((a, b) => {
                            var c, d;
                            b = b.get();
                            return null != b && a.layout.rows.count() === ((null === (c = b.rows) || void 0 === c ? void 0 : c.size) || 0) && a.layout.cols.count() === ((null === (d = b.columns) || void 0 === d ? void 0 : d.size) || 0)
                        });
                        this.fua = A5(a => {
                            var b;
                            return new Set((null === (b = a.get()) || void 0 === b ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.Cr
                        });
                        this.hua = A5(a => {
                            var b;
                            return new Set((null === (b = a.get()) || void 0 === b ? void 0 :
                                b.rows) || [])
                        }, {
                            equals: __c.Cr
                        });
                        this.r6a = z5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (0 < this.hua(b).size) return new Set(a.layout.cols);
                            b = this.fua(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.ua, e.column);
                                for (const f of kMb(c ? c.span.Wb : e.column, c ? c.span.Hc : e.column, a.layout.cols))(0 === b.size || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Cr
                        });
                        this.s6a = z5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (0 < this.fua(b).size) return new Set(a.layout.rows);
                            b = this.hua(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.ua, e.column);
                                for (const f of kMb(c ? c.span.bc : e.ua, c ? c.span.$c : e.ua, a.layout.rows))(0 === b.size || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Cr
                        })
                    }
                };
                var mNb = parseInt("4px", 10) || 4,
                    c5 = class extends t5 {
                        static j(a) {
                            R(a, {
                                yd: g5,
                                cq: g5,
                                E2: g5
                            })
                        }
                        get yd() {
                            return "rtl" === this.props.sheet.direction
                        }
                        get cq() {
                            var a;
                            const b = null === (a = this.props.ht) || void 0 === a ? void 0 : a.get();
                            if (null != b && 0 !== b.length) return new __c.MF(b)
                        }
                        get E2() {
                            var a, b, c;
                            return null === (b = (c = this.props).m5a) || void 0 === b ? void 0 : null === (a = b.call(c)) || void 0 === a ? void 0 : a.get()
                        }
                        render() {
                            return W4(__c.KA, {
                                Sp: "light",
                                light: "light",
                                Os: "light",
                                dark: "light",
                                children: this.q_a
                            })
                        }
                        constructor(...a) {
                            super(...a);
                            c5.j(this);
                            this.onMouseMove = v5(b => {
                                const {
                                    onMouseMove: c,
                                    sheet: d,
                                    Ad: e = 1
                                } = this.props;
                                null === c || void 0 === c ? void 0 : c(b, d, "column", e)
                            });
                            this.onMouseLeave = v5(b => {
                                var c, d;
                                null === (c = (d = this.props).onMouseLeave) || void 0 === c ? void 0 : c.call(d, b)
                            });
                            this.yOa = (b, c, d) => {
                                const {
                                    sheet: e,
                                    Vo: f,
                                    rE: g,
                                    Ad: h = 1,
                                    Rd: k = 1
                                } = this.props, l = {
                                    jNbTIg: !this.yd,
                                    gtA7Dw: this.yd
                                }, m = (null === d || void 0 === d ? 0 : d.sticky) ? this.yd ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                var n;
                                const p = (null === d || void 0 === d ? 0 : d.sticky) ? null !== (n = this.E2) && void 0 !== n ? n : m : void 0;
                                let q = -1;
                                return r5("div", {
                                    style: p,
                                    className: Y4("Vt2_4w", l, {
                                        Tn3nUw: null === d || void 0 === d ? void 0 : d.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [e.layout.cols.map(r => {
                                        q++;
                                        if (!(b && 0 > e.layout.cols.Ke(r, b) || c && 0 < e.layout.cols.Ke(r, c))) return W4(nNb, {
                                            col: r,
                                            label: __c.KC(q),
                                            Vo: f,
                                            rE: g,
                                            Ad: h,
                                            Rd: k
                                        }, r.id)
                                    }), (null === d || void 0 === d ? void 0 : d.sticky) && W4("div", {
                                        style: {
                                            width: mNb * h
                                        },
                                        className: Y4("HBvlug", "ru3tFQ", l)
                                    })]
                                })
                            };
                            this.q_a = b => {
                                var c;
                                const d = this.props.sheet,
                                    e = d.view.freeze.gH ?
                                    d.layout.Fd.get(d.view.freeze.gH) : void 0,
                                    f = {
                                        jNbTIg: !this.yd,
                                        gtA7Dw: this.yd
                                    };
                                return r5("div", {
                                    ref: null === (c = this.cq) || void 0 === c ? void 0 : c.Pl,
                                    className: Y4("xhBZaw", f, b.className),
                                    children: [e && this.yOa(void 0, e, {
                                        sticky: !0
                                    }), this.yOa(e ? d.cols.next(e) : void 0)]
                                })
                            }
                        }
                    };
                c5 = x5([Fc], c5);
                var d5 = class extends t5 {
                    static j(a) {
                        R(a, {
                            yd: g5,
                            cq: g5,
                            E2: g5
                        })
                    }
                    get yd() {
                        return "rtl" === this.props.sheet.direction
                    }
                    get cq() {
                        var a;
                        const b = null === (a = this.props.ht) || void 0 === a ? void 0 : a.get();
                        if (null != b && 0 !== b.length) return new __c.MF(b)
                    }
                    get E2() {
                        var a, b, c;
                        return null === (b = (c = this.props).m5a) || void 0 === b ? void 0 : null === (a = b.call(c)) || void 0 === a ? void 0 : a.get()
                    }
                    render() {
                        return W4(__c.KA, {
                            Sp: "light",
                            light: "light",
                            Os: "light",
                            dark: "light",
                            children: this.Teb
                        })
                    }
                    constructor(...a) {
                        super(...a);
                        d5.j(this);
                        this.onMouseMove =
                            v5(b => {
                                const {
                                    onMouseMove: c,
                                    sheet: d,
                                    Rd: e = 1
                                } = this.props;
                                null === c || void 0 === c ? void 0 : c(b, d, "row", e)
                            });
                        this.onMouseLeave = v5(b => {
                            var c, d;
                            null === (c = (d = this.props).onMouseLeave) || void 0 === c ? void 0 : c.call(d, b)
                        });
                        this.COa = (b, c, d) => {
                            const {
                                sheet: e,
                                Vo: f,
                                rE: g,
                                Ad: h = 1,
                                Rd: k = 1
                            } = this.props, l = {
                                jNbTIg: !this.yd,
                                gtA7Dw: this.yd
                            }, m = (null === d || void 0 === d ? 0 : d.sticky) ? {
                                top: 0
                            } : void 0;
                            var n;
                            const p = (null === d || void 0 === d ? 0 : d.sticky) ? null !== (n = this.E2) && void 0 !== n ? n : m : void 0;
                            let q = -1;
                            return r5("div", {
                                style: p,
                                className: Y4("_93roJg",
                                    l, {
                                        Tn3nUw: null === d || void 0 === d ? void 0 : d.sticky
                                    }),
                                onMouseMove: this.onMouseMove,
                                onMouseLeave: this.onMouseLeave,
                                children: [e.rows.map(r => {
                                    q++;
                                    if (!(b && 0 > e.rows.Ke(r, b) || c && 0 < e.rows.Ke(r, c))) return W4(oNb, {
                                        ua: r,
                                        label: `${q+1}`,
                                        rE: g,
                                        Vo: f,
                                        Ad: h,
                                        Rd: k
                                    }, r.id)
                                }), (null === d || void 0 === d ? void 0 : d.sticky) && W4("div", {
                                    style: {
                                        height: mNb * k
                                    },
                                    className: Y4("HBvlug", "koz2Hg")
                                })]
                            })
                        };
                        this.Teb = b => {
                            var c;
                            const d = this.props.sheet,
                                e = d.view.freeze.jU ? d.layout.Qd.get(d.view.freeze.jU) : void 0,
                                f = {
                                    jNbTIg: !this.yd,
                                    gtA7Dw: this.yd
                                };
                            return r5("div", {
                                ref: null === (c = this.cq) || void 0 === c ? void 0 : c.Pl,
                                className: Y4("An9VeA", f, b.className),
                                children: [e && this.COa(void 0, e, {
                                    sticky: !0
                                }), this.COa(e ? d.rows.next(e) : void 0)]
                            })
                        }
                    }
                };
                d5 = x5([Fc], d5);
                var nNb = a5(a => {
                        const b = a.label,
                            c = a.col,
                            d = a.rE,
                            e = a.Vo,
                            f = a.Ad;
                        a = a.Rd;
                        const g = e(a),
                            h = gNb(() => d(c));
                        return W4("div", {
                            className: Y4("_83Rssw", "d2uLIA", Z4(h)),
                            style: {
                                width: c.width * f,
                                height: g
                            },
                            children: W4(rMb, {
                                label: b,
                                width: c.width,
                                height: e(1),
                                scale: a,
                                kCa: h
                            })
                        })
                    }),
                    oNb = a5(a => {
                        const b = a.label,
                            c = a.ua,
                            d = a.Vo,
                            e = a.rE,
                            f = a.Ad;
                        a = a.Rd;
                        const g = d(f),
                            h = gNb(() => e(c));
                        return W4("div", {
                            className: Y4("_83Rssw", "JhBzyw", Z4(h)),
                            style: {
                                width: g,
                                height: c.height * a
                            },
                            children: W4(rMb, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                kCa: h
                            })
                        })
                    });
                var pNb = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var qNb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var sMb = __c.sS({
                    co: pNb,
                    medium: qNb
                });
                var e5 = class extends t5 {
                    static j(a) {
                        R(a, {
                            Zd: g5.struct
                        })
                    }
                    constructor(...a) {
                        super(...a);
                        e5.j(this)
                    }
                    render() {
                        const a = this.props.element,
                            b = this.props.ht,
                            c = this.props.aB,
                            d = this.props.gB,
                            e = this.props.ea;
                        return W4(this.props.Cs, {
                            sheet: a.config,
                            container: this.props.container.zl(a),
                            ht: b,
                            aB: c,
                            gB: d,
                            ea: e,
                            Zd: this.Zd,
                            Ei: this.props.Ei,
                            RV: void 0
                        })
                    }
                    get Zd() {
                        const a = this.props.ye,
                            b = this.props.element.Va;
                        return b ? b.Ce && !a ? {
                            "aria-hidden": !0
                        } : {
                            "aria-label": b.text
                        } : {}
                    }
                };
                e5 = x5([Fc], e5);
                var rNb = class {
                    constructor() {
                        this.qda = new WeakMap;
                        this.I5a = a => this.qda.get(a);
                        this.bQa = (a, b) => {
                            this.qda.set(a, b)
                        };
                        this.c_a = (a, b) => {
                            const c = this.qda.get(a);
                            c && c.Bb === b.Bb && c.Rb === b.Rb && this.qda.delete(a)
                        }
                    }
                };
                var EMb = a5(a => {
                        const b = a.Bb,
                            c = a.item,
                            d = a.Xf,
                            e = a.Rb,
                            f = a.$e,
                            g = a.col,
                            h = a.ua,
                            k = a.content,
                            l = a.gi;
                        a = a.Uv;
                        __c.w("text3" === k.type);
                        __c.$F(a, __c.xq.na(k.value), (p, q) => __c.xq.domain.Xb(p, q));
                        [a] = aNb(() => new sNb(c, e, g5(() => b.zoom)));
                        const m = $4(() => d.Al(c), [d, c]),
                            n = $4(() => m.Nua.Jd(g, h).OOa.Jd(k.value), [m, g, h, k.value]);
                        return W4(f, {
                            Bb: b,
                            gh: n,
                            text: k.value,
                            Rb: a,
                            pg: "wrap" === l ? "pre-wrap" : "nowrap"
                        })
                    }),
                    sNb = class extends __c.OS {
                        static j(a) {
                            R(a, {
                                width: w5.ref,
                                WO: g5
                            })
                        }
                        get Xw() {
                            return this.pda.Xw
                        }
                        get WO() {
                            const a = (this.o_.width -
                                this.pda.width) / 2;
                            return {
                                left: -a,
                                right: this.pda.width + a
                            }
                        }
                        constructor(a, b, c) {
                            super();
                            sNb.j(this);
                            this.sheet = a;
                            this.pda = b;
                            this.zoom = c;
                            this.width = 0;
                            this.marginWidth = void 0;
                            this.o_ = new __c.cG(this.sheet, this.pda, {
                                zoom: this.zoom.get()
                            })
                        }
                    };
                var B5 = parseInt("4px", 10) || 4,
                    tNb = a5(({
                        sheet: a,
                        ea: b,
                        range: c,
                        ov: d,
                        pv: e
                    }) => {
                        if (null != c && (d || e)) {
                            var f;
                            b = null !== (f = null === b || void 0 === b ? void 0 : b.get()) && void 0 !== f ? f : 1;
                            if (d && e) return d = a.ya(c.$c) + c.$c.height, a = a.xa(c.Hc) + c.Hc.width, W4("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: B5 * b
                                },
                                className: Y4("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.xa(c.Hc) + c.Hc.width, W4("div", {
                                style: {
                                    left: c * b,
                                    width: B5 * b,
                                    height: a.height * b
                                },
                                className: Y4("aX8dhQ", "gl1RPg")
                            });
                            if (e) return c = a.ya(c.$c) + c.$c.height, W4("div", {
                                style: {
                                    top: c * b,
                                    width: a.width *
                                        b,
                                    height: B5 * b
                                },
                                className: Y4("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var C5 = ({
                        sheet: a,
                        range: b,
                        ea: c,
                        children: d
                    }) => {
                        const e = V4();
                        yMb({
                            sheet: a,
                            ea: c,
                            range: b,
                            Gd: e
                        });
                        return W4("div", {
                            ref: e,
                            className: Y4("nstn2A", "rtl" === a.direction ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    uNb = ({
                        sheet: a,
                        range: b,
                        ea: c,
                        children: d
                    }) => {
                        const e = V4();
                        yMb({
                            sheet: a,
                            ea: c,
                            range: b,
                            Gd: e
                        });
                        a = "rtl" === a.direction ? "NgnL2Q" : "f8jAGQ";
                        return W4("div", {
                            className: Y4("nstn2A", a, "_9sodyg"),
                            children: W4("div", {
                                ref: e,
                                className: Y4("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var AMb = a5(({
                        sheet: a,
                        children: b,
                        jC: c
                    }) => {
                        const d = b5(f => {
                                c.Bua(a, f)
                            }, [c, a]),
                            e = b5(f => {
                                null != f ? c.lC.set(a, f) : c.lC.delete(a)
                            }, [c, a]);
                        return W4(__c.Ckb, {
                            direction: "rtl" === a.config.direction ? "rtl" : "ltr",
                            onScroll: d,
                            nw: e,
                            children: b
                        })
                    }),
                    zMb = class {
                        Bua(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.G1.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.lC = new WeakMap;
                            this.G1 = w5.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = v5((b, c) => {
                                b = this.lC.get(b);
                                null === b || void 0 === b ? void 0 : b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var DMb = a5(a => {
                    const b = a.item,
                        c = a.ht,
                        d = a.Xf,
                        e = a.measureRef,
                        f = a.ea,
                        g = a.$Ha,
                        h = a.Rb,
                        k = a.aB,
                        l = a.gB,
                        m = a.Cs,
                        n = a.xK,
                        p = a.Ei,
                        q = a.ye,
                        r = a.jC;
                    a = $4(() => {
                        const u = b.Va;
                        return u ? u.Ce && !q ? {
                            "aria-hidden": !0
                        } : {
                            "aria-label": u.text
                        } : {}
                    }, [b, q]);
                    const t = $4(() => a5(({
                        sheet: u,
                        range: v,
                        ov: x,
                        pv: y
                    }) => W4(C5, {
                        sheet: u,
                        range: v,
                        ea: f,
                        children: W4(tNb, {
                            sheet: u,
                            ea: f,
                            range: v,
                            ov: x,
                            pv: y
                        })
                    })), [f]);
                    xMb(() => f5(() => {
                        var u = b.config.view.freeze.gH ? b.config.layout.Fd.get(b.config.view.freeze.gH) : void 0;
                        if (null != u) {
                            var v = Math.min(h.width, b.F);
                            if (b.config.xa(u) +
                                u.width > v) {
                                if (u = r.lC.get(b)) u.style.overflowX = "hidden"
                            } else if (u = r.lC.get(b)) u.style.overflowX = "scroll"
                        }
                    }), [b, h.width, r]);
                    return W4("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: Math.min(h.width, b.F)
                        },
                        children: W4(n, {
                            sheet: b,
                            children: W4("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: b.F,
                                    height: b.N
                                },
                                children: W4(m, {
                                    container: d.Al(b),
                                    sheet: b.config,
                                    ht: c,
                                    ea: f,
                                    aB: k,
                                    gB: l,
                                    Zd: a,
                                    Ei: p,
                                    RV: t
                                })
                            })
                        })
                    })
                });
                var vNb = a5(({
                    page: a,
                    range: b,
                    dC: c
                }) => {
                    const d = GMb(a.sheet, b);
                    return W4("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => null == d ? c(e, f) : __c.Su(__c.Uu(e)).uq(d) && c(e, f))
                    })
                });
                var wNb = new __c.aT,
                    D5 = a => kNb * a,
                    xNb = () => "primary-default",
                    HMb = a5(({
                        container: a,
                        ht: b,
                        aB: c,
                        gB: d,
                        e9: e,
                        ea: f,
                        viewport: g,
                        ogb: h,
                        Cs: k,
                        Ei: l,
                        dC: m,
                        Dca: n,
                        Slb: p,
                        Rkb: q,
                        Qkb: r
                    }) => {
                        const t = a.page;
                        var u = "rtl" === t.sheet.direction,
                            v;
                        const x = null !== (v = null === f || void 0 === f ? void 0 : f.get()) && void 0 !== v ? v : 1;
                        v = $4(() => a5(({
                            sheet: y,
                            range: z,
                            ov: A,
                            pv: C
                        }) => r5(ZMb, {
                            children: [W4(C5, {
                                sheet: t.sheet,
                                range: z,
                                ea: f,
                                children: W4(tNb, {
                                    sheet: y,
                                    ea: f,
                                    range: z,
                                    ov: A,
                                    pv: C
                                })
                            }), r5(uNb, {
                                sheet: t.sheet,
                                range: z,
                                ea: f,
                                children: [p && W4(p, {}), m && W4(vNb, {
                                    page: t,
                                    dC: m,
                                    range: z
                                }), r && W4(r, {}), n && n()]
                            }), q && z && W4(C5, {
                                sheet: t.sheet,
                                range: z,
                                ea: f,
                                children: W4(q, {
                                    range: z
                                })
                            })]
                        })), [t, f, p, m, r, n, q]);
                        a = W4(k, {
                            sheet: t.sheet,
                            container: a,
                            ht: b,
                            aB: c,
                            gB: d,
                            e9: e,
                            ea: f,
                            viewport: g,
                            Ei: l,
                            RV: v
                        });
                        u = r5("div", {
                            className: "OsKKIQ",
                            children: [W4("div", {
                                className: "VDFv_A",
                                children: a
                            }), W4("div", {
                                className: "_688KWg",
                                children: W4(tMb, {
                                    yd: u,
                                    fHa: !1,
                                    Vo: D5,
                                    scale: x
                                })
                            }), W4("div", {
                                className: "m0cT1w",
                                children: W4(c5, {
                                    sheet: t.sheet,
                                    Ad: x,
                                    Rd: x,
                                    Vo: D5,
                                    rE: xNb,
                                    fF: wNb
                                })
                            }), W4("div", {
                                className: "zm537g",
                                children: W4(d5, {
                                    sheet: t.sheet,
                                    Ad: x,
                                    Rd: x,
                                    Vo: D5,
                                    rE: xNb,
                                    fF: wNb
                                })
                            })]
                        });
                        return h ? u : a
                    });
                var h5 = (a, b) => `${a.column.id}-${a.boundary}:${b.ua.id}-${b.boundary}`,
                    zNb = class {
                        constructor() {
                            this.kQa = yNb;
                            this.E5a = A5(a => {
                                const b = new Map;
                                let c = 0;
                                a.layout.rows.forEach(d => {
                                    const e = c,
                                        f = e + d.height;
                                    b.set(d, {
                                        start: e,
                                        end: f
                                    });
                                    c = f
                                });
                                return b
                            });
                            this.$4a = A5(a => {
                                const b = new Map;
                                var c = "rtl" === a.direction;
                                const d = c ? -1 : 1;
                                let e = 0;
                                c && (c = a.layout.cols.last(), e = null != c ? a.xa(c) + c.width : 0);
                                a.layout.cols.forEach(f => {
                                    const g = e,
                                        h = g + f.width * d;
                                    b.set(f, {
                                        start: g,
                                        end: h
                                    });
                                    e = h
                                });
                                return b
                            })
                        }
                    },
                    ANb = class {
                        constructor() {
                            this.Eeb =
                                z5((a, b, c) => {
                                    const d = a.layout.cells.get(c, b);
                                    var e, f, g = m5(null !== (e = null === d || void 0 === d ? void 0 : d.span.Wb) && void 0 !== e ? e : b, null !== (f = null === d || void 0 === d ? void 0 : d.span.Hc) && void 0 !== f ? f : b, a.layout.cols),
                                        h, k;
                                    e = m5(null !== (h = null === d || void 0 === d ? void 0 : d.span.bc) && void 0 !== h ? h : c, null !== (k = null === d || void 0 === d ? void 0 : d.span.$c) && void 0 !== k ? k : c, a.layout.rows);
                                    var l = d ? c === d.span.bc : !0;
                                    const m = d ? c === d.span.$c : !0,
                                        n = d ? b === d.span.Wb : !0;
                                    f = d ? b === d.span.Hc : !0;
                                    if (n || f || l || m) {
                                        h = {};
                                        var p = a.layout.rows.Gc(c),
                                            q = a.layout.rows.next(c),
                                            r = a.layout.cols.Gc(b);
                                        k = a.layout.cols.next(b);
                                        if (l) {
                                            l = QMb(a, b, c);
                                            const aa = b && p && a.layout.cells.get(p, b);
                                            p = b && p && RMb(a, b, p);
                                            var t, u;
                                            const la = m5(null !== (t = null === aa || void 0 === aa ? void 0 : aa.span.Wb) && void 0 !== t ? t : b, null !== (u = null === aa || void 0 === aa ? void 0 : aa.span.Hc) && void 0 !== u ? u : b, a.layout.cols);
                                            var v, x;
                                            t = a.layout.cols.Ke(null !== (v = null === d || void 0 === d ? void 0 : d.span.Wb) && void 0 !== v ? v : b, null !== (x = null === aa || void 0 === aa ? void 0 : aa.span.Wb) && void 0 !== x ? x : b);
                                            h.ya = i5(l, p, g, la, t)
                                        }
                                        if (m) {
                                            v = RMb(a, b, c);
                                            x = b && q &&
                                                a.layout.cells.get(q, b);
                                            t = b && q && QMb(a, b, q);
                                            var y, z;
                                            u = m5(null !== (y = null === x || void 0 === x ? void 0 : x.span.Wb) && void 0 !== y ? y : b, null !== (z = null === x || void 0 === x ? void 0 : x.span.Hc) && void 0 !== z ? z : b, a.layout.cols);
                                            var A, C;
                                            y = a.layout.cols.Ke(null !== (A = null === d || void 0 === d ? void 0 : d.span.Wb) && void 0 !== A ? A : b, null !== (C = null === x || void 0 === x ? void 0 : x.span.Wb) && void 0 !== C ? C : b);
                                            h.Ha = i5(v, t, g, u, y)
                                        }
                                        if (n) {
                                            g = SMb(a, b, c);
                                            A = r && c && a.layout.cells.get(c, r);
                                            C = r && c && TMb(a, r, c);
                                            var E, H;
                                            y = m5(null !== (E = null === A || void 0 === A ? void 0 : A.span.bc) &&
                                                void 0 !== E ? E : c, null !== (H = null === A || void 0 === A ? void 0 : A.span.$c) && void 0 !== H ? H : c, a.layout.rows);
                                            var I, K;
                                            E = a.layout.rows.Ke(null !== (I = null === d || void 0 === d ? void 0 : d.span.bc) && void 0 !== I ? I : c, null !== (K = null === A || void 0 === A ? void 0 : A.span.bc) && void 0 !== K ? K : c);
                                            h.xa = i5(g, C, e, y, E)
                                        }
                                        if (f) {
                                            b = TMb(a, b, c);
                                            I = k && c && a.layout.cells.get(c, k);
                                            K = k && c && SMb(a, k, c);
                                            var M, Q;
                                            E = m5(null !== (M = null === I || void 0 === I ? void 0 : I.span.bc) && void 0 !== M ? M : c, null !== (Q = null === I || void 0 === I ? void 0 : I.span.$c) && void 0 !== Q ? Q : c, a.layout.rows);
                                            var P,
                                                V;
                                            a = a.layout.rows.Ke(null !== (P = null === d || void 0 === d ? void 0 : d.span.bc) && void 0 !== P ? P : c, null !== (V = null === I || void 0 === I ? void 0 : I.span.bc) && void 0 !== V ? V : c);
                                            h.Oa = i5(b, K, e, E, a)
                                        }
                                        return h
                                    }
                                }, {
                                    equals: UMb
                                });
                            this.c0a = (a, b, c) => {
                                const d = new Map;
                                a.forEach(({
                                    xa: e,
                                    ya: f,
                                    Oa: g,
                                    Ha: h
                                }, k) => {
                                    e && d.set(e.color, (d.get(e.color) || 0) + 1);
                                    f && d.set(f.color, (d.get(f.color) || 0) + 1);
                                    g && c && k.includes(c.id) && d.set(g.color, (d.get(g.color) || 0) + 1);
                                    h && b && k.includes(b.id) && d.set(h.color, (d.get(h.color) || 0) + 1)
                                });
                                return d
                            }
                        }
                    },
                    yNb = new ANb,
                    OMb =
                    new zNb;
                var XMb = class {
                    constructor(a) {
                        this.V1 = a;
                        this.PZa = __c.AU;
                        this.o5a = z5((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let p = 0; p < d.length; p++) {
                                var g = d[p],
                                    h = this.h5a(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[p + 1];
                                            if (null == k || !bJ(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[p + 1];
                                            if (null == k || !bJ(b, c, k)) continue;
                                            k = d[p - 1];
                                            if (null == k || !bJ(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[p - 1];
                                            if (null == k || !bJ(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new F(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + ("center" === h ? 0 : this.PZa);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.xa(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.xa(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.xa(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new F(h);
                                            }
                                            for (l = d.indexOf(g); 0 <= l; l--) {
                                                var m = d[l];
                                                const q = 0 > l - 1 || bJ(b, c, d[l - 1]);
                                                var n;
                                                if (n = m === g || bJ(b, c, m)) n = b.xa(m), n = h < n && n < k;
                                                if (n && q) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = bJ(b, c, l)) m = b.xa(l), m = h < m && m < k;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.h5a = (b, c, d) => {
                            var e, f;
                            const g = b.layout.cells.get(c,
                                d);
                            if (g && (g.ref.content.ref || g.ref.Ja.ref) && g.span.bc === g.span.$c && g.span.Wb === g.span.Hc) {
                                var {
                                    gi: h,
                                    textAlign: k
                                } = __c.Vf(__c.Eg, b.layout.attrs.get(Fg({
                                    gi: void 0,
                                    textAlign: void 0
                                }), c, d) || {});
                                if ("overflow" === h) {
                                    var l = this.V1.sE(b, c, d);
                                    return __c.aJ(k, null === (e = g.ref.content.ref) || void 0 === e ? void 0 : e.type, null === (f = g.ref.Ja.ref) || void 0 === f ? void 0 : f.type, l ? () => l.mv.type : void 0)
                                }
                            }
                        }
                    }
                };
                var BNb = a5(function(a) {
                    const b = a.sheet;
                    var c = a.dr;
                    const d = a.vjb,
                        e = a.ea,
                        f = a.Coa,
                        g = a.Y4a,
                        h = V4();
                    $Mb(() => f5(() => {
                        const n = D(h.current);
                        var p;
                        const q = null !== (p = null === e || void 0 === e ? void 0 : e.get()) && void 0 !== p ? p : 1;
                        p = b.height;
                        n.style.width = `${b.width*q}px`;
                        n.style.height = `${p*q}px`
                    }), [h, e, b]);
                    const k = b5(n => f.o5a(b, n, d, g), [f, b, d, g]);
                    a = b5((n, p) => {
                        var q, r;
                        return null !== (r = null === (q = k(n)) || void 0 === q ? void 0 : q.get(p)) && void 0 !== r ? r : 0
                    }, [k]);
                    c = PMb(b, c, d, a);
                    a = b.width;
                    const l = b.height,
                        m = "rtl" === b.direction;
                    return W4("svg", {
                        ref: h,
                        role: "presentation",
                        className: Y4("c6a1eQ", {
                            H_CtIQ: !m,
                            _8_56PQ: m
                        }),
                        viewBox: `0 0 ${a} ${l}`,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        children: c.map(({
                            lines: n,
                            color: p,
                            weight: q,
                            Pj: r,
                            Rj: t
                        }) => W4("path", {
                            stroke: p,
                            strokeDasharray: r,
                            strokeDashoffset: t,
                            strokeWidth: q,
                            d: n.map(({
                                p1: u,
                                p2: v
                            }) => `M ${u.x} ${u.y} L ${v.x} ${v.y}`).join(" ")
                        }, `${p}-${q}-${r}-${t}`))
                    })
                });
                var CNb = class {
                    get size() {
                        return this.Bda
                    }
                    get([a, b]) {
                        return (a = this.PE.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.PE.get(a);
                        return null == a ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.PE.get(a);
                        null == d && (d = new Map, this.PE.set(a, d));
                        d.set(b, c);
                        this.Bda++;
                        return this
                    }
                    clear() {
                        this.PE.clear();
                        this.Bda = 0
                    }
                    delete([a, b]) {
                        const c = this.PE.get(a);
                        if (null == c || !c.delete(b)) return !1;
                        this.Bda--;
                        0 === c.size && this.PE.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.PE)
                            for (const [d, e] of c) a([b, d], e)
                    }*[Symbol.iterator]() {
                        for (const [a,
                                b
                            ] of this.PE)
                            for (const [c, d] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.Bda = 0;
                        this.PE = new Map
                    }
                };
                var F5 = class extends t5 {
                    static j(a) {
                        R(a, {
                            h8: g5,
                            iTa: g5
                        })
                    }
                    render() {
                        var a;
                        const {
                            OY: b,
                            ...c
                        } = this.props, d = this.props.sheet;
                        return r5("div", {
                            ref: this.oQa,
                            className: Y4("ZTz_iA", "ltr" === d.direction ? "TA4X7w" : "WvuqMw"),
                            children: [(null === b || void 0 === b ? void 0 : b.RAa) && W4(E5, { ...c,
                                sheet: d,
                                range: b.RAa.range,
                                ov: !0,
                                pv: !0,
                                className: "_0C8M3w",
                                p6: this.h8
                            }), (null === b || void 0 === b ? void 0 : b.ZTa) && W4(E5, { ...c,
                                sheet: d,
                                range: b.ZTa.range,
                                ov: !1,
                                pv: !0,
                                className: "_7n44yg",
                                p6: this.h8
                            }), (null === b || void 0 === b ? void 0 : b.iHa) && W4(E5, { ...c,
                                sheet: d,
                                range: b.iHa.range,
                                ov: !0,
                                pv: !1,
                                className: "fF5r6w",
                                p6: this.h8
                            }), (null === b || void 0 === b ? void 0 : b.Ewa) && W4(E5, { ...c,
                                sheet: d,
                                range: null === b || void 0 === b ? void 0 : null === (a = b.Ewa) || void 0 === a ? void 0 : a.range,
                                ov: !1,
                                pv: !1,
                                className: "llILYw",
                                p6: this.iTa
                            })]
                        })
                    }
                    componentDidMount() {
                        const a = f5(() => {
                            var b = this.props,
                                c = b.ea;
                            b = b.sheet;
                            const d = this.oQa.current;
                            d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                        });
                        __c.qc(this, [a])
                    }
                    get h8() {
                        return {
                            type: "excluded"
                        }
                    }
                    get iTa() {
                        return {
                            type: "hidden",
                            isVisible: this.OZa
                        }
                    }
                    constructor(...a) {
                        super(...a);
                        F5.j(this);
                        this.oQa = Hz();
                        this.OZa = (b, c) => {
                            var d;
                            const e = this.props.sheet;
                            var f = this.props.OY;
                            f = null === f || void 0 === f ? void 0 : null === (d = f.Ewa) || void 0 === d ? void 0 : d.range;
                            return e.layout.cols.has(b) && e.layout.rows.has(c) ? null == f ? !0 : 0 >= e.layout.cols.Ke(f.Wb, b) && 0 >= e.layout.cols.Ke(b, f.Hc) && 0 >= e.layout.rows.Ke(f.bc, c) && 0 >= e.layout.rows.Ke(c, f.$c) : !1
                        }
                    }
                };
                F5 = x5([Fc], F5);
                var E5 = class extends t5 {
                    static j(a) {
                        R(a, {
                            mQa: g5
                        })
                    }
                    get mQa() {
                        const a = this.props.viewport,
                            b = this.props.ov,
                            c = this.props.pv;
                        return null == a || !b && !c ? a : g5(() => {
                            const d = __c.bv(a.get());
                            return __c.Uu({
                                top: c ? 0 : d.top,
                                left: b ? 0 : d.left,
                                width: d.width,
                                height: d.height
                            })
                        })
                    }
                    render() {
                        const a = this.props.sheet,
                            b = this.props.container,
                            c = this.props.range,
                            d = this.props.p6,
                            e = this.props.RV,
                            f = this.props.ov,
                            g = this.props.pv;
                        return r5("div", {
                            ref: this.gsa,
                            className: Y4("i0YQww", this.props.className),
                            children: [W4("div", {
                                ref: this.NMa,
                                className: "vUKoKg",
                                children: W4("div", {
                                    ref: this.OMa,
                                    children: W4(G5, {
                                        sheet: a,
                                        container: b,
                                        viewport: this.mQa,
                                        bounds: "hidden" === (null === d || void 0 === d ? void 0 : d.type) ? void 0 : c,
                                        UZ: "hidden" === (null === d || void 0 === d ? void 0 : d.type) ? d.isVisible : void 0,
                                        ht: this.props.ht,
                                        RC: this.props.RC,
                                        yga: this.props.yga,
                                        Ei: this.props.Ei,
                                        AX: this.props.AX,
                                        ea: this.props.ea
                                    })
                                })
                            }), e && W4(e, {
                                sheet: a,
                                range: c,
                                ov: f,
                                pv: g
                            })]
                        })
                    }
                    componentDidMount() {
                        const a = f5(() => {
                                var g = this.props,
                                    h = g.ea,
                                    k = g.sheet;
                                const l = g.range;
                                var m = this.gsa.current;
                                const n =
                                    this.NMa.current;
                                g = this.OMa.current;
                                h = h ? h.get() : 1;
                                const p = l ? k.xa(l.Hc) + l.Hc.width - k.xa(l.Wb) : k.width,
                                    q = l ? k.ya(l.$c) + l.$c.height - k.ya(l.bc) : k.height;
                                m && (m.style.width = `${p*h}px`, m.style.height = `${q*h}px`);
                                n && (n.style.width = `${p*h}px`, n.style.height = `${q*h}px`);
                                m = "rtl" === k.direction;
                                m = l ? k.xa(l.Wb) * h * (m ? 1 : -1) : 0;
                                k = l ? -k.ya(l.bc) * h : 0;
                                g && (g.style.transform = `translate(${m}px, ${k}px)`)
                            }),
                            b = this.props.sheet;
                        var c = this.props.e9;
                        const d = this.props.ov,
                            e = this.props.pv,
                            f = d || e ? null === c || void 0 === c ? void 0 : c(b, d,
                                e) : void 0;
                        c = f5(() => {
                            const g = this.gsa.current;
                            if (null != g) {
                                var h = d || e ? "sticky" : "relative",
                                    k = e ? "0px" : "unset",
                                    l = d ? "0px" : "unset",
                                    m = d ? "0px" : "unset",
                                    n = "rtl" === b.direction;
                                if (null == f) g.style.position = h, g.style.top = k, g.style.left = n ? "unset" : l, g.style.right = n ? m : "unset";
                                else {
                                    const v = f.get();
                                    var p;
                                    g.style.position = null !== (p = v.position) && void 0 !== p ? p : h;
                                    var q;
                                    g.style.top = null !== (q = v.top) && void 0 !== q ? q : k;
                                    var r;
                                    g.style.left = n ? "unset" : null !== (r = v.left) && void 0 !== r ? r : l;
                                    var t;
                                    g.style.right = n ? null !== (t = v.right) && void 0 !==
                                        t ? t : m : "unset";
                                    var u;
                                    g.style.transform = null !== (u = v.transform) && void 0 !== u ? u : "unset"
                                }
                            }
                        });
                        __c.qc(this, [a, c])
                    }
                    constructor(...a) {
                        super(...a);
                        E5.j(this);
                        this.gsa = Hz();
                        this.NMa = Hz();
                        this.OMa = Hz()
                    }
                };
                E5 = x5([Fc], E5);
                var DNb = class {
                        constructor() {
                            this.cells = new CNb;
                            this.lta = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                null == d && (d = w5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.d5a = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                null == d && (d = w5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return null === (c = d.get()) || void 0 === c ? void 0 : c.ECa
                            }
                        }
                    },
                    G5 = class extends t5 {
                        static j(a) {
                            R(a, {
                                cK: w5.shallow,
                                cq: g5,
                                bounds: g5,
                                dr: g5({
                                    equals: o5.shallow
                                }),
                                lxa: g5({
                                    equals: o5.shallow
                                }),
                                AAa: v5,
                                Z6: v5.bound
                            })
                        }
                        get cq() {
                            var a;
                            const b = null === (a = this.props.ht) || void 0 === a ? void 0 : a.get();
                            if (null != b && 0 !== b.length) return new __c.MF(b)
                        }
                        render() {
                            var a;
                            return r5("div", {
                                ref: fNb(this.Gd, null === (a = this.cq) || void 0 === a ? void 0 : a.Pl),
                                children: [W4("div", {
                                    ref: this.jja,
                                    className: "_5YlOqQ"
                                }), W4("div", {
                                    ref: this.lja,
                                    className: "_XCmKw"
                                }), this.cK.map(b => b.kdb), W4(this.zga, {})]
                            })
                        }
                        componentDidMount() {
                            const a = n5(() => [this.props.sheet, this.lxa, this.dr], ([d, e, f], g) => {
                                    [g] = g || [];
                                    d !==
                                        g && (d = D(this.jja.current), g = D(this.lja.current), d.innerHTML = "", g.innerHTML = "", this.ixa.length = 0, this.cK.length = 0);
                                    this.AAa(e, f)
                                }, {
                                    fireImmediately: !0
                                }),
                                b = f5(() => {
                                    var d = this.props,
                                        e = d.ea;
                                    d = d.sheet;
                                    const f = this.Gd.current;
                                    f && (e = e ? e.get() : 1, f.style.width = `${d.width*e}px`, f.style.height = `${d.height*e}px`)
                                }),
                                c = this.cK.map(d => WMb(d));
                            __c.qc(this, [b, a, ...c])
                        }
                        get bounds() {
                            const a = this.props.sheet,
                                b = this.props.bounds;
                            var c, d, e, f;
                            return {
                                Wb: null !== (c = null === b || void 0 === b ? void 0 : b.Wb) && void 0 !== c ? c : a.layout.cols.first(),
                                Hc: null !== (d = null === b || void 0 === b ? void 0 : b.Hc) && void 0 !== d ? d : a.layout.cols.last(),
                                bc: null !== (e = null === b || void 0 === b ? void 0 : b.bc) && void 0 !== e ? e : a.layout.rows.first(),
                                $c: null !== (f = null === b || void 0 === b ? void 0 : b.$c) && void 0 !== f ? f : a.layout.rows.last()
                            }
                        }
                        get dr() {
                            const a = this.props.sheet;
                            var b = this.props.ea,
                                c = this.props.viewport,
                                d = null === c || void 0 === c ? void 0 : c.get();
                            if (d && (0 >= d.height || 0 >= d.width)) return new Map;
                            c = this.bounds;
                            b = b.get();
                            var e = 500 * b;
                            const f = d ? d.tl.y - e : c.bc ? a.ya(c.bc) : 0;
                            d = d ? d.br.y + e : c.$c ? a.ya(c.$c) +
                                c.$c.height : 0;
                            e = new Map;
                            for (let g = c.bc; null != g && null != c.$c && 0 >= a.layout.rows.Ke(g, c.$c); g = a.layout.rows.next(g)) {
                                const h = a.ya(g);
                                if (!(h + g.height < f)) {
                                    if (h > d) break;
                                    e.set(g, h * b)
                                }
                            }
                            return e
                        }
                        get lxa() {
                            const a = this.props.sheet;
                            var b = this.props.ea,
                                c = this.props.viewport,
                                d = null === c || void 0 === c ? void 0 : c.get();
                            if (d && (0 >= d.height || 0 >= d.width)) return new Map;
                            c = this.bounds;
                            b = b.get();
                            var e = 100 * b;
                            const f = d ? d.tl.x - e : c.Wb ? a.xa(c.Wb) : 0;
                            d = d ? d.br.x + e : c.Hc ? a.xa(c.Hc) + c.Hc.width : 0;
                            e = new Map;
                            for (let g = c.Wb; null != g && null !=
                                c.Hc && 0 >= a.layout.cols.Ke(g, c.Hc); g = a.layout.cols.next(g)) {
                                const h = a.xa(g);
                                if (!(h + g.width < f)) {
                                    if (h > d) break;
                                    e.set(g, h * b)
                                }
                            }
                            return e
                        }
                        AAa(a, b) {
                            const c = D(this.jja.current),
                                d = D(this.lja.current),
                                e = [],
                                f = new Map;
                            for (const g of this.ixa) b.has(g.ua) ? f.set(g.ua, g) : e.push(g);
                            for (const [g, h] of b) b = f.get(g) || e.pop(), b || (b = new ENb(this.Z6, g), c.appendChild(b.m6), d.appendChild(b.o6), this.ixa.push(b)), b.update(h, g, a);
                            for (const g of e) g.hide()
                        }
                        Z6(a, b) {
                            const c = this.props.AX,
                                d = this.props.sheet,
                                e = this.props.container,
                                f = this.props.UZ;
                            a = new FNb(this.props.RC, this.props.Ei, c(a, b), d, a, b, e, f, this.U6.lta);
                            __c.qc(this, WMb(a));
                            this.cK.push(a);
                            return a
                        }
                        constructor(...a) {
                            super(...a);
                            G5.j(this);
                            this.Gd = Hz();
                            this.jja = Hz();
                            this.lja = Hz();
                            this.ixa = [];
                            this.cK = [];
                            this.U6 = new DNb;
                            this.xjb = g5(() => [...this.dr.keys()].sort((b, c) => this.props.sheet.layout.rows.Ke(b, c)), {
                                equals: __c.Fr()
                            });
                            this.ujb = g5(() => [...this.lxa.keys()].sort((b, c) => this.props.sheet.layout.cols.Ke(b, c)), {
                                equals: __c.Fr()
                            });
                            this.zga = a5(() => W4(this.props.yga, {
                                dr: this.xjb,
                                vjb: this.ujb,
                                Y4a: this.U6.d5a
                            }))
                        }
                    };
                G5 = x5([Fc], G5);
                var ENb = class {
                        static j(a) {
                            R(a, {
                                update: v5
                            })
                        }
                        update(a, b, c) {
                            [this.m6, this.o6].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.ua = b;
                            for (const [d] of c) c = this.cK.get(d), c || (c = this.Z6(d, b), this.cK.set(d, c), this.m6.appendChild(c.l6), this.o6.appendChild(c.vQ)), c.update(b)
                        }
                        hide() {
                            [this.m6, this.o6].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            ENb.j(this);
                            this.Z6 = a;
                            this.ua = b;
                            this.m6 = document.createElement("div");
                            this.o6 = document.createElement("div");
                            this.cK = new Map
                        }
                    },
                    FNb = class {
                        static j(a) {
                            R(a, {
                                T6: w5.ref,
                                ua: w5.ref,
                                update: v5,
                                Su: g5,
                                attrs: g5.struct,
                                UZ: g5,
                                wIa: g5,
                                kx: g5,
                                renderer: g5,
                                ECa: g5.struct
                            })
                        }
                        update(a) {
                            a !== this.ua && (this.ua = a, this.aea.ua = a, this.hla && this.hla(), this.hla = this.lta(this.ua, this.col, this))
                        }
                        get kdb() {
                            return this.T6
                        }
                        get Su() {
                            const a = this.sheet.layout.cells.get(this.ua, this.col);
                            if (!a || a.span.bc === this.ua && a.span.Wb === this.col) return a ? a.ref : void 0
                        }
                        get attrs() {
                            return this.sheet.layout.attrs.get(Fg({
                                    gi: 0,
                                    textAlign: 0,
                                    direction: 0
                                }), this.ua,
                                this.col) || {}
                        }
                        get UZ() {
                            return null != this.isVisible ? this.isVisible(this.col, this.ua) : !0
                        }
                        get wIa() {
                            const a = this.sheet.layout.cells.get(this.ua, this.col);
                            return !a || a.span.bc === this.ua && a.span.Wb === this.col
                        }
                        get kx() {
                            const a = this.sheet,
                                b = this.ua,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                sheet: a,
                                ua: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.ycb.Jd(c, b);
                                case "sheet-item":
                                    return this.container.Nua.Jd(c, b);
                                case "sheet-element":
                                    return this.container.fgb.Jd(c, b);
                                default:
                                    throw new F(this.container);
                            }
                        }
                        get renderer() {
                            if (this.UZ) {
                                var a = this.Su;
                                if (a && (a.content.ref || a.Ja.ref)) return this.RC({
                                    context: {
                                        container: this.kx,
                                        attrs: this.attrs
                                    },
                                    Uv: this.Yqa,
                                    Ei: this.Ei
                                })
                            }
                        }
                        get ECa() {
                            this.FCa.reportObserved();
                            var a = cNb(() => this.renderer);
                            if (a && (a = "react" === a.type ? this.V0 : this.ED, 0 !== a.childNodes.length && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k) {
                            FNb.j(this);
                            var l, m, n, p, q, r;
                            this.RC = a;
                            this.aea = c;
                            this.sheet = d;
                            this.col = e;
                            this.container =
                                g;
                            this.isVisible = h;
                            this.lta = k;
                            this.l6 = document.createElement("div");
                            this.vQ = document.createElement("div");
                            this.eH = document.createElement("div");
                            this.ED = document.createElement("div");
                            this.V0 = document.createElement("div");
                            this.FCa = bNb("content size atom");
                            this.Yqa = v5(() => this.FCa.reportChanged());
                            this.ua = f;
                            this.l6.className = "_2JFriw";
                            this.vQ.className = "imy9ug";
                            this.eH.className = Y4("pDMp7w", {
                                _0yZ6Qg: "text3" !== (null === (m = this.Su) || void 0 === m ? void 0 : null === (l = m.content.ref) || void 0 === l ? void 0 : l.type),
                                qhF5uA: "text3" !== (null === (p = this.Su) || void 0 === p ? void 0 : null === (n = p.content.ref) || void 0 === n ? void 0 : n.type) && "text2" !== (null === (r = this.Su) || void 0 === r ? void 0 : null === (q = r.content.ref) || void 0 === q ? void 0 : q.type)
                            });
                            this.ED.className = "_30B9pw";
                            this.eH.appendChild(this.ED);
                            this.vQ.appendChild(this.eH);
                            this.V0.className = "G7zH2w";
                            this.hla = k(this.ua, this.col, this);
                            this.Ei = t => W4(b, { ...t,
                                Uv: this.Yqa
                            })
                        }
                    };
                var p5 = class extends t5 {
                    static j(a) {
                        R(a, {
                            OY: g5
                        })
                    }
                    render() {
                        const {
                            sheet: a,
                            container: b,
                            ht: c,
                            e9: d,
                            RC: e,
                            Zd: f,
                            Ei: g,
                            viewport: h,
                            RV: k,
                            NTa: l = !1
                        } = this.props;
                        return W4("div", {
                            className: Y4("SNkrHw", "ltr" === a.direction ? "TA4X7w" : "WvuqMw", {
                                RaA0Nw: l
                            }),
                            ...f,
                            children: W4(F5, {
                                RC: e,
                                Ei: g,
                                yga: this.zga,
                                AX: this.AX,
                                sheet: a,
                                container: b,
                                ht: c,
                                e9: d,
                                ea: this.ea,
                                viewport: h,
                                RV: k,
                                OY: this.OY
                            })
                        })
                    }
                    get OY() {
                        var a = this.props.sheet;
                        const b = {},
                            c = a.view.freeze.jU ? a.layout.Qd.get(a.view.freeze.jU) : void 0,
                            d = a.view.freeze.gH ? a.layout.Fd.get(a.view.freeze.gH) :
                            void 0,
                            e = a.layout.rows.first(),
                            f = a.layout.rows.last(),
                            g = a.layout.cols.first(),
                            h = a.layout.cols.last();
                        if (null != e && null != f && null != g && null != h) {
                            var k = d ? a.layout.cols.next(d) : g;
                            a = c ? a.layout.rows.next(c) : e;
                            c && d && (b.RAa = {
                                range: {
                                    Wb: g,
                                    bc: e,
                                    Hc: d,
                                    $c: c
                                }
                            });
                            c && k && (b.ZTa = {
                                range: {
                                    Wb: k,
                                    bc: e,
                                    Hc: h,
                                    $c: c
                                }
                            });
                            d && a && (b.iHa = {
                                range: {
                                    Wb: g,
                                    bc: a,
                                    Hc: d,
                                    $c: f
                                }
                            });
                            a && k && (b.Ewa = {
                                range: {
                                    Wb: k,
                                    bc: a,
                                    Hc: h,
                                    $c: f
                                }
                            });
                            return b
                        }
                    }
                    get ea() {
                        return this.props.ea ? this.props.ea : g5(() => 1)
                    }
                    constructor(...a) {
                        super(...a);
                        p5.j(this);
                        this.zga = a5(b => W4(BNb, { ...b,
                            sheet: this.props.sheet,
                            ea: this.ea,
                            Coa: this.props.Coa
                        }));
                        this.AX = (b, c) => new __c.QEa(this.props.Az, this.props.sheet, b, c, this.ea, this.aB, this.gB);
                        this.aB = (b, c) => {
                            var d, e;
                            return null === (d = (e = this.props).aB) || void 0 === d ? void 0 : d.call(e, this.props.sheet, b, c)
                        };
                        this.gB = (b, c) => {
                            var d, e;
                            return null === (d = (e = this.props).gB) || void 0 === d ? void 0 : d.call(e, this.props.sheet, b, c)
                        }
                    }
                };
                p5 = x5([Fc], p5);
                __c.WEa = {
                    s7a: function(a) {
                        const b = a.Cn,
                            c = a.ue,
                            d = a.fd,
                            e = a.Wn,
                            f = a.V1,
                            g = a.Az,
                            h = a.QV;
                        qMb({
                            zz: a.zz,
                            lf: a.lf,
                            Ahb: a.aO
                        });
                        const k = YMb({
                            RC: h,
                            V1: f,
                            Az: g
                        });
                        b.Rga = IMb({
                            Cs: k
                        });
                        c.Aga = wMb({
                            Cs: k
                        });
                        ({
                            NWa: a
                        } = FMb({
                            Cs: k,
                            $e: e(),
                            lQa: new rNb
                        }));
                        d.Np.Qga = a;
                        const {
                            WUa: l,
                            XUa: m,
                            VUa: n
                        } = vMb();
                        return {
                            Tya: a5(p => W4(hNb, { ...p,
                                container: void 0,
                                Cs: k,
                                MWa: l,
                                OWa: m,
                                KWa: n,
                                Ei: iNb
                            }))
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/a34c7be2f25c09ac.js.map