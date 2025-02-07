(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [95665], {

        /***/
        537666: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(999741);
            __web_req__(357998);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var F = __c.F;
                var O = __c.O;
                var vb = __c.vb;
                var aKb = function(a, b, c) {
                        return (new __c.Cb(a, c ? __c.Db(c) : void 0, __c.Eb, {
                            ignoreTag: !0
                        })).format(Object.fromEntries(Object.entries(b)))
                    },
                    bKb = function(a) {
                        let {
                            r: b,
                            g: c,
                            b: d
                        } = __c.st(a);
                        c /= 255;
                        d /= 255;
                        a = b / 255;
                        return .2126 * (.03928 >= a ? a / 12.92 : ((a + .055) / 1.055) ** 2.4) + .7152 * (.03928 >= c ? c / 12.92 : ((c + .055) / 1.055) ** 2.4) + .0722 * (.03928 >= d ? d / 12.92 : ((d + .055) / 1.055) ** 2.4)
                    },
                    cKb = function(a) {
                        __c.mub({ ...a,
                            Mh: a.span
                        })
                    },
                    d4 = function(a, b) {
                        var c = a.pSa.get(b);
                        if (null != c) return c;
                        c = {
                            value: a.rz.ns(b)
                        };
                        a.pSa.set(b, c);
                        a.jSa.set(c, b);
                        return c
                    },
                    e4 = function(a, b) {
                        a = a.jSa.get(b);
                        if (null == a) throw new dKb("ref does not exists");
                        return a
                    },
                    h4 = function(a) {
                        const b = (c, d) => {
                            if (null == c && null != a) return a;
                            if ("string" !== (null === c || void 0 === c ? void 0 : c.type)) throw "toWidgetData" === d ? new f4("string", c) : new g4("string", c);
                            return c.value
                        };
                        return {
                            wk: c => ({
                                type: "string",
                                value: c
                            }),
                            qs: c => b(c, "toWidgetState"),
                            ns: c => b(c, "toWidgetData"),
                            du: c => b(c, "toWidgetData")
                        }
                    },
                    j4 = function(a, b) {
                        if (0 === a.length) throw new i4("At least one value must be provided for literal types.");
                        const c = new Set(a),
                            d = (e, f) => {
                                if (null == e) return b;
                                if ("string" !== (null === e || void 0 === e ? void 0 : e.type) || !c.has(e.value)) throw "toWidgetData" === f ? new f4("literal", e) : new g4("literal", e);
                                return e.value
                            };
                        return {
                            wk: e => ({
                                type: "string",
                                value: e
                            }),
                            qs: e => d(e, "toWidgetState"),
                            ns: e => d(e, "toWidgetData"),
                            du: e => d(e, "toWidgetData")
                        }
                    },
                    k4 = function(a) {
                        const b = (c, d) => {
                            if (null == c || !Number.isFinite(a)) return a;
                            if ("double" !== (null === c || void 0 === c ? void 0 : c.type) || !Number.isFinite(c.value)) throw "toWidgetData" === d ? new f4("double",
                                c) : new g4("double", c);
                            return c.value
                        };
                        return {
                            wk: c => {
                                if (!Number.isFinite(c)) throw new eKb(c);
                                return {
                                    type: "double",
                                    value: c
                                }
                            },
                            qs: c => b(c, "toWidgetState"),
                            ns: c => b(c, "toWidgetData"),
                            du: c => b(c, "toWidgetData")
                        }
                    },
                    fKb = function() {
                        const a = b => {
                            if ("fill" !== (null === b || void 0 === b ? void 0 : b.type)) throw new f4("fill", b);
                            return b.value
                        };
                        return {
                            wk: b => ({
                                type: "fill",
                                value: b
                            }),
                            qs: b => {
                                if ("fill" !== (null === b || void 0 === b ? void 0 : b.type)) throw new g4("fill", b);
                                return b.value
                            },
                            ns: a,
                            du: a
                        }
                    },
                    m4 = function(a) {
                        const b = new Set;
                        for (const d of Object.keys(a)) {
                            const [e] =
                            a[d];
                            if (b.has(e)) throw new i4(`Duplicate serialized keys "${e}" found in record schema.`);
                            b.add(e)
                        }
                        const c = (d, e) => {
                            if ("dict" !== (null === e || void 0 === e ? void 0 : e.type)) throw new f4("record", e);
                            const f = {};
                            for (const g of Object.keys(a)) {
                                const [h, k] = a[g], l = l4(() => {
                                    const m = e.value.get(h);
                                    return k.ns(m)
                                }, {
                                    keepAlive: !0
                                });
                                Object.defineProperty(f, g, {
                                    get() {
                                        return l.get()
                                    },
                                    set(m) {
                                        "readonly" !== d && (m = k.wk(m), null == m ? e.value.delete(h) : e.value.set(h, m))
                                    },
                                    enumerable: !0
                                })
                            }
                            return f
                        };
                        return {
                            wk: d => {
                                const e = {};
                                for (const f of Object.keys(a)) {
                                    const [g,
                                        h
                                    ] = a[f], k = h.wk(d[f]);
                                    null != k && (e[g] = k)
                                }
                                return {
                                    type: "dict",
                                    value: new Map(Object.entries(e))
                                }
                            },
                            qs: d => {
                                if ("dict" !== (null === d || void 0 === d ? void 0 : d.type)) throw new g4("record", d);
                                const e = {};
                                for (const f of Object.keys(a)) {
                                    const [g, h] = a[f], k = h.qs(d.value.get(g));
                                    null != k && (e[f] = k)
                                }
                                return e
                            },
                            ns: d => c("editable", d),
                            du: d => c("readonly", d),
                            Oc: d => m4({ ...a,
                                ...d
                            })
                        }
                    },
                    o4 = function(a) {
                        return {
                            wk: b => ({
                                type: "list",
                                value: b.map(c => a.wk(c))
                            }),
                            qs: b => {
                                if ("list" !== (null === b || void 0 === b ? void 0 : b.type)) throw new g4("list", b);
                                return b.value.filter(vb).map(c =>
                                    a.qs(c))
                            },
                            ns: b => {
                                if ("list" !== (null === b || void 0 === b ? void 0 : b.type)) throw new f4("list", b);
                                return new gKb(b, a)
                            },
                            du: b => {
                                if ("list" !== (null === b || void 0 === b ? void 0 : b.type)) throw new f4("list", b);
                                return new n4(b, a)
                            }
                        }
                    },
                    p4 = function(a, b) {
                        const c = new Set(Object.keys(a)),
                            d = e => {
                                var f;
                                if ("dict" !== (null === e || void 0 === e ? void 0 : e.type)) throw new f4("union", e);
                                const g = null === (f = e.value.get("k")) || void 0 === f ? void 0 : f.value;
                                f = e.value.get("v");
                                if (null == g || null == f || "string" !== typeof g || !c.has(g)) throw new f4("union", e);
                                return {
                                    j6: a[g],
                                    k6: f
                                }
                            };
                        return {
                            wk: e => {
                                const f = b(e);
                                return {
                                    type: "dict",
                                    value: new Map([
                                        ["k", {
                                            type: "string",
                                            value: f
                                        }],
                                        ["v", a[f].wk(e)]
                                    ])
                                }
                            },
                            qs: e => {
                                var f;
                                if ("dict" !== (null === e || void 0 === e ? void 0 : e.type)) throw new g4("union", e);
                                const g = null === (f = e.value.get("k")) || void 0 === f ? void 0 : f.value;
                                f = e.value.get("v");
                                if (null == g || null == f || "string" !== typeof g || !c.has(g)) throw new g4("union", e);
                                const {
                                    j6: h,
                                    k6: k
                                } = {
                                    j6: a[g],
                                    k6: f
                                };
                                return h.qs(k)
                            },
                            ns: e => {
                                const {
                                    j6: f,
                                    k6: g
                                } = d(e);
                                return f.ns(g)
                            },
                            du: e => {
                                const {
                                    j6: f,
                                    k6: g
                                } = d(e);
                                return f.du(g)
                            }
                        }
                    },
                    hKb = function(a) {
                        const b = () => a.pj.Jz.get(a.og.aG) || q4;
                        return {
                            ana: function() {
                                const c = a.og,
                                    {
                                        LJ: d
                                    } = b();
                                return !(!d || !c.fields.first(({
                                    value: e
                                }) => !!e.options.first(({
                                    value: f
                                }) => f.id === d)))
                            },
                            w5a: function(c, d) {
                                const {
                                    results: e
                                } = b();
                                c = e.fields.get(c);
                                if (!c) return 0;
                                var f;
                                d = null !== (f = c.VI.get(d)) && void 0 !== f ? f : 0;
                                f = 0 < c.total ? d / c.total * 100 : 0;
                                Number.isInteger(f) || (f = parseFloat(f.toFixed(1)));
                                return f
                            },
                            N5a: function(c) {
                                if (!a.og.fields.first(({
                                        value: e
                                    }) => e.id === c)) return 0;
                                var {
                                    results: d
                                } = b();
                                return (d =
                                    d.fields.get(c)) ? d.total : 0
                            },
                            kna: b,
                            n$a: c => {
                                const d = new Map(a.pj.Jz);
                                d.set(a.og.aG, { ...b(),
                                    ...c
                                });
                                return d
                            }
                        }
                    },
                    lKb = function(a, b, c, d, e, f) {
                        function g() {
                            const u = q();
                            return ("poll" === p || !u) && 0 === a.pj.status
                        }
                        async function h() {
                            var u;
                            const v = f.Aj("submit_response", {
                                Fz: {
                                    name: "ui.rendering.form.submit_response"
                                }
                            });
                            var x = {
                                Gma: m,
                                y4a: p,
                                LG: "interacted",
                                action: "response_submitted",
                                location: "in_form"
                            };
                            e && cKb({
                                span: v,
                                ra: e,
                                event: iKb,
                                props: x
                            });
                            const {
                                results: y,
                                hf: z,
                                Msa: A
                            } = r();
                            if (null != z && g())
                                if (x = null === (u = a.og.fields.first(({
                                        value: I
                                    }) => {
                                        var K;
                                        return !(null === (K = I.options.first(({
                                            value: M
                                        }) => M.id === z)) || void 0 === K || !K.value)
                                    })) || void 0 === u ? void 0 : u.value) {
                                    l("selected_field_found", v);
                                    var C = a.pj,
                                        E = y;
                                    "poll" === p && A && A !== z && (E = r4({
                                        uia: y,
                                        iE: x.id,
                                        vT: A
                                    }));
                                    E = jKb({
                                        mDa: E,
                                        iE: x.id,
                                        vT: z
                                    });
                                    l("field_results_created", v);
                                    s4(() => {
                                        a.Mm(() => ({
                                            Jz: t({
                                                hf: z,
                                                LJ: z,
                                                results: E
                                            }),
                                            status: 2
                                        }))
                                    });
                                    l("submission_set", v);
                                    v.GR();
                                    if ((await c.qvb({
                                            aG: n,
                                            Cmb: {
                                                iE: x.id,
                                                qm: x.label.text.X.trim(),
                                                hf: z,
                                                options: x.options.map(({
                                                    value: I
                                                }) => ({
                                                    id: I.id,
                                                    label: I.label.text.X.trim()
                                                }))
                                            }
                                        })).ok) return s4(() => {
                                        a.Mm(() => ({
                                            status: 0,
                                            Jz: t({
                                                Msa: void 0
                                            })
                                        }))
                                    });
                                    null === d || void 0 === d ? void 0 : __c.mj(d, {
                                        At: O("izckBA"),
                                        group: kKb,
                                        LP: {
                                            $w: O("mQhziQ"),
                                            onClick: h
                                        }
                                    });
                                    var H = r4({
                                        uia: E,
                                        iE: x.id,
                                        vT: z
                                    });
                                    A && (H = jKb({
                                        mDa: H,
                                        iE: x.id,
                                        vT: A
                                    }));
                                    s4(() => {
                                        a.Mm({ ...C,
                                            ...(A && {
                                                Jz: t({
                                                    hf: A,
                                                    LJ: A,
                                                    results: H
                                                })
                                            })
                                        })
                                    })
                                } else v.abort();
                            else v.abort()
                        }
                        async function k(u) {
                            var v;
                            const x = r(),
                                y = null === (v = a.og.fields.first(({
                                    value: C
                                }) => {
                                    var E;
                                    return !(null === (E = C.options.first(({
                                        value: H
                                    }) => H.id === u)) || void 0 === E || !E.value)
                                })) || void 0 === v ? void 0 : v.value;
                            if (y) {
                                var z =
                                    a.pj,
                                    A = r4({
                                        uia: x.results,
                                        iE: y.id,
                                        vT: u
                                    });
                                s4(() => {
                                    a.Mm(() => ({
                                        Jz: t({
                                            hf: void 0,
                                            LJ: void 0,
                                            results: A
                                        }),
                                        kA: void 0,
                                        status: 2
                                    }))
                                });
                                (await c.Gyb({
                                    aG: n
                                })).ok ? s4(() => {
                                    a.Mm(() => ({
                                        status: 0
                                    }))
                                }) : (null === d || void 0 === d ? void 0 : __c.mj(d, {
                                    At: O("kgHTHw"),
                                    group: kKb,
                                    LP: {
                                        $w: O("mQhziQ"),
                                        onClick: () => k(u)
                                    }
                                }), s4(() => {
                                    a.Mm(z)
                                }))
                            }
                        }

                        function l(u, v) {
                            v.Ek(u);
                            v.ih().Ek(u)
                        }
                        const m = a.og.id,
                            n = a.og.aG,
                            p = a.og.type,
                            q = b.ana,
                            r = b.kna,
                            t = b.n$a;
                        return {
                            submit: h,
                            qqa: function() {
                                a.Mm(() => ({
                                    DO: 1
                                }))
                            },
                            rqa: function() {
                                a.Mm(() => ({
                                    DO: 0
                                }))
                            },
                            pqa: function() {
                                a.Mm(() =>
                                    ({
                                        DO: 2
                                    }))
                            },
                            sqa: function() {
                                a.Mm(() => ({
                                    DO: 1
                                }))
                            },
                            Bea: function(u) {
                                const v = r(),
                                    x = "poll" === p && u === (null === v || void 0 === v ? void 0 : v.hf) && u === (null === v || void 0 === v ? void 0 : v.LJ);
                                if (g() && x) k(u);
                                else if (g() && a.og.fields.some(({
                                        value: z
                                    }) => z.options.some(({
                                        value: A
                                    }) => A.id === u))) {
                                    var y = null === v || void 0 === v ? void 0 : v.LJ;
                                    s4(() => {
                                        const z = r();
                                        a.Mm(() => ({
                                            Jz: t({
                                                Msa: y,
                                                hf: z.hf === u ? void 0 : u
                                            })
                                        }))
                                    });
                                    "poll" === p && h()
                                }
                            },
                            uaa: function(u) {
                                g() && a.og.fields.some(({
                                    value: v
                                }) => v.options.some(({
                                    value: x
                                }) => x.id === u)) && a.Mm(() => ({
                                    xE: u
                                }))
                            },
                            vaa: function(u) {
                                0 === a.pj.status && a.og.fields.some(({
                                    value: v
                                }) => v.options.some(({
                                    value: x
                                }) => x.id === u)) && a.pj.xE && a.Mm(() => ({
                                    xE: void 0
                                }))
                            },
                            saa: function(u) {
                                const {
                                    LJ: v,
                                    hf: x
                                } = r();
                                0 === a.pj.status && a.og.fields.some(({
                                    value: y
                                }) => y.options.some(({
                                    value: z
                                }) => z.id === u)) && x !== u && !v && a.Mm(() => ({
                                    kA: u
                                }))
                            },
                            waa: function(u) {
                                0 === a.pj.status && a.og.fields.some(({
                                    value: v
                                }) => v.options.some(({
                                    value: x
                                }) => x.id === u)) && a.pj.kA && a.Mm(() => ({
                                    kA: void 0
                                }))
                            }
                        }
                    },
                    r4 = function({
                        uia: a,
                        iE: b,
                        vT: c
                    }) {
                        var d;
                        const e = null !== (d = a.fields.get(b)) &&
                            void 0 !== d ? d : {
                                id: b,
                                VI: new Map,
                                total: 0
                            };
                        var f;
                        d = Math.max(0, (null !== (f = e.VI.get(c)) && void 0 !== f ? f : 0) - 1);
                        f = new Map(e.VI);
                        0 < d ? f.set(c, d) : f.delete(c);
                        return {
                            fields: t4(a.fields, b, {
                                id: b,
                                VI: f,
                                total: Math.max(0, e.total - 1)
                            })
                        }
                    },
                    jKb = function({
                        mDa: a,
                        iE: b,
                        vT: c
                    }) {
                        var d;
                        const e = null !== (d = a.fields.get(b)) && void 0 !== d ? d : {
                            id: b,
                            VI: new Map,
                            total: 0
                        };
                        var f;
                        d = (null !== (f = e.VI.get(c)) && void 0 !== f ? f : 0) + 1;
                        return {
                            fields: t4(a.fields, b, {
                                id: b,
                                VI: t4(e.VI, c, d),
                                total: e.total + 1
                            })
                        }
                    },
                    t4 = function(a, b, c) {
                        return new Map([...a.entries(), [b,
                            c
                        ]])
                    },
                    mKb = function(a, b) {
                        var c;
                        return (null === (c = a.first()) || void 0 === c ? void 0 : c.value) === b
                    },
                    u4 = function(a, b) {
                        var c;
                        return ((null === (c = a.wwa) || void 0 === c ? void 0 : c.get(a.document.language || "en")) || [])[nKb[b]]
                    },
                    oKb = async function() {
                        var {
                            xwa: a
                        } = await __webpack_require__.me(134787).then(() => ({
                            xwa: '{\n"af-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Verkeerd",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Dien tans in \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laai tans...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Vanlyn",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Korrek",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Regstreeks"\n},\n"ar":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-AE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-EG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-SA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"as-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0985\u09b6\u09c1\u09a6\u09cd\u09a7",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u09a6\u09be\u0996\u09bf\u09b2 \u0995\u09f0\u09be \u09b9\u09c8 \u0986\u099b\u09c7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u09b2\'\u09a1 \u09b9\u09c8 \u0986\u099b\u09c7",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0985\u09ab\u09b2\u09be\u0987\u09a8",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u09b6\u09c1\u09a6\u09cd\u09a7",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u09b2\u09be\u0987\u09ad"\n},\n"az-AZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Yanl\u0131\u015f",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"T\u0259qdim edilir...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Y\u00fckl\u0259nir...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Do\u011fru",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Canl\u0131"\n},\n"bg-BG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041f\u043e\u0434\u0430\u0432\u0430\u043d\u0435\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043d\u0435...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u041f\u0440\u0430\u0432\u0438\u043b\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u041d\u0430 \u0436\u0438\u0432\u043e"\n},\n"bn-BD":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u09ad\u09c1\u09b2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u09aa\u09cd\u09b0\u09a4\u09bf\u0995\u09cd\u09b0\u09bf\u09af\u09bc\u09be \u09b8\u09c7\u09ad \u0995\u09b0\u09be \u09b9\u09df\u09c7\u099b\u09c7",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u099c\u09ae\u09be \u09a6\u09c7\u0993\u09df\u09be \u09b9\u099a\u09cd\u099b\u09c7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u09b2\u09cb\u09a1 \u09b9\u099a\u09cd\u099b\u09c7...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u099f\u09bf \u09ad\u09cb\u099f} other {# \u099f\u09bf \u09ad\u09cb\u099f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0985\u09ab\u09b2\u09be\u0987\u09a8",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u09b8\u09a0\u09bf\u0995",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u09b2\u09be\u0987\u09ad"\n},\n"ca-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecte",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"S\'ha desat la resposta",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"S\'est\u00e0 enviant...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"S\'est\u00e0 carregant...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vot} other {# vots}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sense connexi\u00f3",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcte",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicada"\n},\n"ceb-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Sayop",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Nagsumite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Nag-load...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Husto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"cs-CZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nespr\u00e1vn\u011b",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpov\u011b\u010f ulo\u017eena",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Odes\u00edl\u00e1n\u00ed\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na\u010d\u00edt\u00e1n\u00ed...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0hlas} few {#\u00a0hlasy} many {#\u00a0hlasu} other {#\u00a0hlas\u016f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Spr\u00e1vn\u011b",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"K\u00a0dispozici"\n},\n"cy-GB":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Anghywir",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Wrthi\'n cyflwyno...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Yn llwytho...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"All-lein",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Cywir",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Yn Fyw"\n},\n"da-DK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Forkert",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svaret er gemt",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Indsender...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Indl\u00e6ser...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stemme} other {# stemmer}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Korrekt",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktiv"\n},\n"de-DE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Falsch",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwort gespeichert",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Wird gesendet \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden\u00a0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# Stimme} other {# Stimmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Richtig",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"el-GR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u039b\u03ac\u03b8\u03bf\u03c2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0397 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c4\u03b7\u03ba\u03b5",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u03a5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u03c8\u03ae\u03c6\u03bf\u03c2} other {# \u03c8\u03ae\u03c6\u03bf\u03b9}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0395\u03ba\u03c4\u03cc\u03c2 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7\u03c2",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u03a3\u03c9\u03c3\u03c4\u03ac",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0394\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03bf"\n},\n"en":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-AU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-GB":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-psaccent":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"es-419":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-AR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-CO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-MX":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-US":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"et-EE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Vale",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Esitatud ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laadimine ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"V\u00f5rgu\u00fchenduseta",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u00d5ige",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Avalik"\n},\n"eu-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Oker",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Bidaltzen...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kargatzen\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Lineaz kanpo",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Zuzen",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publikoa"\n},\n"fa-IR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0646\u0627\u062f\u0631\u0633\u062a",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062f\u0631\u062d\u0627\u0644 \u0627\u0631\u0633\u0627\u0644\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062f\u0631\u062d\u0627\u0644 \u0628\u0627\u0631 \u06a9\u0631\u062f\u0646\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641\u0644\u0627\u06cc\u0646",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u06cc\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0632\u0646\u062f\u0647"\n},\n"ff-SN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nana daidai",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Tottirde...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Lowd\u00e9...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Boowal \u0253oggol",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Daidai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Wuur"\n},\n"fi-FI":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"42a556d97b24604fe74079d18c6b127b9c784999":"V\u00e4\u00e4rin",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Vastaus tallennettu",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"L\u00e4hetet\u00e4\u00e4n...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ladataan...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u00e4\u00e4ni} other {# \u00e4\u00e4nt\u00e4}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Oikein",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"K\u00e4ynniss\u00e4"\n},\n"fr-BE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"fr-CA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"fr-FR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"gl-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrectas",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sen conexi\u00f3n",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correctas",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En directo"\n},\n"gu-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0a96\u0acb\u0a9f\u0abe",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0a9c\u0ab5\u0abe\u0aac \u0ab8\u0abe\u0a9a\u0ab5\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0acd\u0aaf\u0acb",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0ab8\u0aac\u0aae\u0abf\u0a9f \u0a95\u0ab0\u0ac0 \u0ab0\u0ab9\u0acd\u0aaf\u0abe \u0a9b\u0ac0\u0a8f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0ab2\u0acb\u0aa1 \u0a95\u0ab0\u0ac0 \u0ab0\u0ab9\u0acd\u0aaf\u0abe\u0a82 \u0a9b\u0ac7...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0aae\u0aa4} other {# \u0aae\u0aa4}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0a91\u0aab\u0ab2\u0abe\u0a87\u0aa8",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0ab8\u0abe\u0a9a\u0abe",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0ab2\u0abe\u0a87\u0ab5"\n},\n"ha-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Ba daidai ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Aikawa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u018aorawa...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"A waje da layi",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Daidai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Nan take"\n},\n"he-IL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"%{0}",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u05dc\u05d0 \u05e0\u05db\u05d5\u05df",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u05d4\u05ea\u05d2\u05d5\u05d1\u05d4 \u05e0\u05e9\u05de\u05e8\u05d4",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u05e9\u05d5\u05dc\u05d7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u05d8\u05d5\u05e2\u05df...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {\u05d4\u05e6\u05d1\u05e2\u05d4 \u05d0\u05d7\u05ea} two {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea} many {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea} other {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u05dc\u05d0 \u05de\u05e7\u05d5\u05d5\u05df",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u05e0\u05db\u05d5\u05df",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u05d6\u05de\u05d9\u05df"\n},\n"hi-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u091c\u0935\u093e\u092c \u0938\u0947\u0935 \u0915\u093f\u092f\u093e \u0917\u092f\u093e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u0915\u093f\u092f\u093e \u091c\u093e \u0930\u0939\u093e \u0939\u0948...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u093e \u0939\u0948...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0935\u094b\u091f} other {# \u0935\u094b\u091f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u095e\u0932\u093e\u0907\u0928",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u0935"\n},\n"hr-HR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neto\u010dno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odgovor je spremljen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Slanje...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"U\u010ditavanje...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# glas} few {# glasa} other {# glasova}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Izvan mre\u017ee",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"To\u010dno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"U\u017eivo"\n},\n"hu-HU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Helytelen",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"V\u00e1lasz mentve",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Bek\u00fcld\u00e9s...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Bet\u00f6lt\u00e9s\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# szavazat} other {# szavazat}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Helyes",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u00c9l\u0151"\n},\n"hy-AM":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u054d\u056d\u0561\u056c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0546\u0565\u0580\u056f\u0561\u0575\u0561\u0581\u057e\u0578\u0582\u0574 \u0567...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0532\u0565\u057c\u0576\u0578\u0582\u0574...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0531\u0576\u0581\u0561\u0576\u0581",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0543\u056b\u0577\u057f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0540\u0580\u0561\u057a\u0561\u0580\u0561\u056f\u057e\u0561\u056e \u0567"\n},\n"id-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons tercatat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Sedang mengirim ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Memuat ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# suara} other {# suara}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Benar",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Sudah tayang"\n},\n"ig-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Abughi eziokwu",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Na-enyefe",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na-ebugo...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"An\u1ecdgh\u1ecb n\'\u1ecbntanet\u1ecb",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Eziokwu",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Gbanyere"\n},\n"it-IT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Risposta errata",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Risposta salvata",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Stiamo inviando il modulo...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Caricamento in corso...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# voti}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Risposta corretta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Disponibile"\n},\n"ja-Hira":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u3075\u305b\u3044\u304b\u3044",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u3078\u3093\u3057\u3093\u304c\u307b\u305e\u3093\u3055\u308c\u307e\u3057\u305f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u305d\u3046\u3057\u3093\u3061\u3085\u3046...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u3088\u307f\u3053\u3093\u3067\u3044\u307e\u3059\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u3072\u3087\u3046} other {#\u3072\u3087\u3046}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u304a\u3075\u3089\u3044\u3093",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u305b\u3044\u304b\u3044",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u3053\u3046\u304b\u3044\u306a\u304b"\n},\n"ja-JP":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u89e3",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u8fd4\u4fe1\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u9001\u4fe1\u4e2d...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u7968} other {#\u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u30aa\u30d5\u30e9\u30a4\u30f3",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u89e3",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u516c\u958b\u4e2d"\n},\n"jv-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons tercatat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Ngirimake...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ngamot...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# suara} other {# suara}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Bener",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Langsung"\n},\n"ka-GE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u10db\u10d8\u10db\u10d3\u10d8\u10dc\u10d0\u10e0\u10d4\u10dd\u10d1\u10e1 \u10e9\u10d0\u10d1\u10d0\u10e0\u10d4\u10d1\u10d0...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u10d8\u10e2\u10d5\u10d8\u10e0\u10d7\u10d4\u10d1\u10d0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u10dd\u10e4\u10da\u10d0\u10d8\u10dc\u10d8",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u10e1\u10ec\u10dd\u10e0\u10d8",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u10e1\u10d0\u10ef\u10d0\u10e0\u10dd"\n},\n"kk-KZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0414\u04b1\u0440\u044b\u0441 \u0435\u043c\u0435\u0441",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0416\u0456\u0431\u0435\u0440\u0456\u043b\u0443\u0434\u0435...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0416\u04af\u043a\u0442\u0435\u043b\u0443\u0434\u0435...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0414\u04b1\u0440\u044b\u0441",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0416\u0430\u043b\u043f\u044b\u0493\u0430 \u043e\u0440\u0442\u0430\u049b"\n},\n"km-KH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u1780\u17c6\u1796\u17bb\u1784\u178a\u17b6\u1780\u17cb\u1794\u1789\u17d2\u1787\u17bc\u1793...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a.",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u1782\u17d2\u1798\u17b6\u1793\u17a2\u17ca\u17b8\u1793\u1792\u17ba\u178e\u17b7\u178f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u1794\u1793\u17d2\u178f\u1795\u17d2\u1791\u17b6\u179b\u17cb"\n},\n"kn-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0ca4\u0caa\u0ccd\u0caa\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0caa\u0ccd\u0cb0\u0ca4\u0cbf\u0c95\u0ccd\u0cb0\u0cbf\u0caf\u0cc6\u0caf\u0ca8\u0ccd\u0ca8\u0cc1 \u0c89\u0cb3\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0cb8\u0cb2\u0ccd\u0cb2\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0cbf\u0ca6\u0cc6...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0cb2\u0ccb\u0ca1\u0ccd \u0c86\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0cbf\u0ca6\u0cc6...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0cae\u0ca4} other {# \u0cae\u0ca4\u0c97\u0cb3\u0cc1}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0c86\u0cab\u0ccd\u200c\u0cb2\u0cc8\u0ca8\u0ccd",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0cb8\u0cb0\u0cbf\u0caf\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0cb2\u0cc8\u0cb5\u0ccd"\n},\n"ko-KR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\uc798\ubabb\ub41c \ub2f5\ubcc0",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\ub2f5\ubcc0\uc774 \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\uc81c\ucd9c \uc911...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\ub85c\ub4dc \uc911...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\ud45c} other {#\ud45c}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\uc624\ud504\ub77c\uc778",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\uc62c\ubc14\ub978 \ub2f5\ubcc0",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\uac8c\uc2dc \uc911"\n},\n"ku-TR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nerast",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"P\u00ea\u015fk\u00ea\u015fkirin...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Bar dike",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Rast",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Z\u00eend\u00ee"\n},\n"ky-KG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041a\u0430\u0442\u0430",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0422\u0430\u043f\u0448\u044b\u0440\u044b\u043b\u0443\u0443\u0434\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0416\u04af\u043a\u0442\u04e9\u043b\u04af\u04af\u0434\u04e9...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0422\u0443\u0443\u0440\u0430",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0422\u04af\u0437 \u043e\u0431\u043e"\n},\n"lt-LT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neteisingai",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Pateikiama...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u012ekeliama...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Neprijungta",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Teisingai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Vie\u0161as"\n},\n"lv-LV":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nepareizi",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iesnieg\u0161ana...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Notiek iel\u0101de",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Bezsaist\u0113",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Pareizi",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Tie\u0161saist\u0113"\n},\n"ma-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u092d\u090f \u0930\u0939\u0932 \u0905\u091b\u093f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u092d\u090f \u0930\u0939\u0932 \u0905\u091b\u093f...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u0935"\n},\n"mg-MG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Diso",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Mandrotsaka...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Mamoaka\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Ivelan-jotra",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Marina",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Mivantana"\n},\n"mk-MK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u0442\u043e\u0447\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0421\u0435 \u043f\u043e\u0434\u043d\u0435\u0441\u0443\u0432\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0421\u0435 \u0432\u0447\u0438\u0442\u0443\u0432\u0430...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0458\u043d",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0422\u043e\u0447\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0408\u0430\u0432\u043d\u043e"\n},\n"ml-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0d24\u0d46\u0d31\u0d4d\u0d31\u0d4d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0d2a\u0d4d\u0d30\u0d24\u0d3f\u0d15\u0d30\u0d23\u0d02 \u0d38\u0d02\u0d30\u0d15\u0d4d\u0d37\u0d3f\u0d1a\u0d4d\u0d1a\u0d41",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0d38\u0d2e\u0d7c\u0d2a\u0d4d\u0d2a\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0d32\u0d4b\u0d21\u0d41\u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d41\u0d28\u0d4d\u0d28\u0d41...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0d35\u0d4b\u0d1f\u0d4d\u0d1f\u0d4d} other {# \u0d35\u0d4b\u0d1f\u0d4d\u0d1f\u0d41\u0d15\u0d7e}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0d13\u0d2b\u0d4d\u200c\u0d32\u0d48\u0d7b",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0d36\u0d30\u0d3f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0d32\u0d48\u0d35\u0d4d"\n},\n"mn-MN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0411\u0443\u0440\u0443\u0443",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0418\u043b\u0433\u044d\u044d\u0436 \u0431\u0430\u0439\u043d\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0410\u0447\u0430\u0430\u043b\u0436 \u0431\u0430\u0439\u043d\u0430...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0417\u04e9\u0432",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0428\u0443\u0443\u0434"\n},\n"mr-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u091a\u0942\u0915",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u092a\u094d\u0930\u0924\u093f\u0938\u093e\u0926 \u091c\u0924\u0928 \u0915\u0947\u0932\u093e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0924 \u0906\u0939\u0947...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u094b\u0924 \u0906\u0939\u0947...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u092e\u0924} other {# \u092e\u0924\u0947}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0905\u091a\u0942\u0915",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0908\u0935"\n},\n"ms-MY":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons disimpan",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Menyerahkan...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Memuatkan...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# undian} other {# undian}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Luar talian",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Betul",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Hidup"\n},\n"my-MM":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u1019\u1019\u103e\u1014\u103a\u1015\u102b",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u1015\u1031\u1038\u1015\u102d\u102f\u1037\u1014\u1031\u101e\u100a\u103a...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u1016\u103d\u1004\u1037\u103a\u1014\u1031\u101e\u100a\u103a...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u1021\u1031\u102c\u1037\u1016\u103a\u101c\u102d\u102f\u1004\u103a\u1038",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u1019\u103e\u1014\u103a\u101e\u100a\u103a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u1010\u1036\u1006\u102d\u1015\u103a\u1021\u101b\u103e\u1004\u103a"\n},\n"nb-NO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Feil",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svar lagret",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Sender inn\u00a0\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laster inn\u00a0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stemme} other {# stemmer}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Frakoblet",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Riktig",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"ne-NP":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u092a\u0947\u0936 \u0917\u0930\u093f\u0926\u0948...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u0941\u0901\u0926\u0948...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0905\u092b\u0932\u093e\u0907\u0928",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u092d"\n},\n"nl-BE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Onjuist",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwoord opgeslagen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Verzenden...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stem} other {# stemmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Juist",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"nl-NL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Onjuist",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwoord opgeslagen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Verzenden...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stem} other {# stemmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Juist",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"om-ET":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Sirrii miti",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Galchaa jirra...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Fe\'uu jira",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sarara ala",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sirrii",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"kallattin"\n},\n"pa-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0a17\u0a32\u0a24",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0a38\u0a2a\u0a41\u0a30\u0a26 \u0a15\u0a40\u0a24\u0a3e \u0a1c\u0a3e \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0a32\u0a4b\u0a21 \u0a15\u0a40\u0a24\u0a3e \u0a1c\u0a3e \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0a14\u0a5e\u0a32\u0a3e\u0a08\u0a28",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0a38\u0a39\u0a40",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0a32\u0a3e\u0a08\u0a35"\n},\n"pa-PK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u0644\u0637",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0645\u0639 \u06a9\u06cc\u062a\u0627 \u062c\u0627 \u0631\u06c1\u06cc\u0627 \u0627\u06d2...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u06cc\u0627 \u0627\u06d2\u06d4\u06d4\u06d4",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641 \u0644\u0627\u0626\u0646",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u062f\u0631\u0633\u062a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0628\u0631\u0627\u06c1\u0650 \u0631\u0627\u0633\u062a"\n},\n"pl-PL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nieprawid\u0142owo",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Zapisano odpowied\u017a",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Przesy\u0142anie\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0141adowanie\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# g\u0142os} few {# g\u0142osy} many {# g\u0142os\u00f3w} other {# g\u0142osu}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Prawid\u0142owo",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktywny"\n},\n"pt-BR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorreta",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"A resposta foi salva",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Carregando\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicado"\n},\n"pt-PT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorreta",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"A resposta foi guardada",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"A carregar...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicado"\n},\n"ro-RO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u0103spunsul a fost salvat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Se trimite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Se \u00eencarc\u0103...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vot} few {# voturi} other {# de voturi}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Corect",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicat"\n},\n"ru-RU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u0432\u0435\u0440\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u041e\u0442\u0432\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0\u0433\u043e\u043b\u043e\u0441} few {#\u00a0\u0433\u043e\u043b\u043e\u0441\u0430} many {#\u00a0\u0433\u043e\u043b\u043e\u0441\u043e\u0432} other {#\u00a0\u0433\u043e\u043b\u043e\u0441\u043e\u0432}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041d\u0435 \u0432 \u0441\u0435\u0442\u0438",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0412\u0435\u0440\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e"\n},\n"sd-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u091c\u092e\u093e \u0915\u0930\u093e\u0913 \u092a\u092f\u094b \u0935\u091e\u0947...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u092a\u092f\u094b \u0925\u093f\u0910...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928\u0902",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u091c\u0940\u0924\u094b-\u091c\u093e\u0917\u0924\u094b"\n},\n"si-LK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0dc0\u0dd0\u0dbb\u0daf\u0dd2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0dba\u0ddc\u0db8\u0dd4 \u0d9a\u0dbb\u0db8\u0dd2\u0db1\u0dca...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0db4\u0dd6\u0dbb\u0dab\u0dba \u0dc0\u0dda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0d95\u0dc6\u0dca\u0dbd\u0dba\u0dd2\u0db1\u0dca",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0db1\u0dd2\u0dc0\u0dd0\u0dbb\u0daf\u0dd2",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0dc3\u0da2\u0dd3\u0dc0\u0dd3"\n},\n"sk-SK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nespr\u00e1vne",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpove\u010f bola ulo\u017een\u00e1",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Odosiela sa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na\u010d\u00edtava sa...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# hlas} few {# hlasy} many {# hlasu} other {# hlasov}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Spr\u00e1vne",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Na\u017eivo"\n},\n"sl-SI":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nepravilno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Po\u0161iljanje \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Nalaganje ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Brez povezave",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Pravilno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"V \u017eivo"\n},\n"sn-ZW":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Vatadza",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Kutumira...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kurodha...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hapana indaneti",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Vagona",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Ruzhinji"\n},\n"so-SO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Khalad",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Gudbinta...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Soo wada bogga.",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Qadka ka maqan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sax",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Toos"\n},\n"sq-AL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"E pasakt\u00eb",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Po d\u00ebrgohet...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"N\u00eb ngarkim...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Jasht\u00eb linje",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"E sakt\u00eb",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktiv"\n},\n"sr-RS":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neta\u010dno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Prosle\u0111ivanje...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"U\u010ditava se...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Van mre\u017ee",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Ta\u010dno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"U\u017eivo"\n},\n"su-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Ngirimkeun...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ngamuat...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflen",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Bener",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktif"\n},\n"sv-SE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Fel",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svar sparat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Skickar in ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"L\u00e4ser in ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# r\u00f6st} other {# r\u00f6ster}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"R\u00e4tt",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicerad"\n},\n"sw-KE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Si sahihi",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Inawasilisha...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kupakia...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Nje ya mtandao",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sahihi",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Moja kwa moja"\n},\n"ta-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0ba4\u0bb5\u0bb1\u0bc1",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0baa\u0ba4\u0bbf\u0bb2\u0bcd \u0b9a\u0bc7\u0bae\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0b9a\u0bae\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0b8f\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1} other {# \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0b95\u0bb3\u0bcd}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0b86\u0b83\u0baa\u0bcd\u0bb2\u0bc8\u0ba9\u0bcd",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0b9a\u0bb0\u0bbf",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0ba8\u0bc7\u0bb0\u0bb2\u0bc8"\n},\n"te-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0c38\u0c30\u0c48\u0c28\u0c26\u0c3f \u0c15\u0c3e\u0c26\u0c41",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0c2a\u0c4d\u0c30\u0c24\u0c3f\u0c38\u0c4d\u0c2a\u0c02\u0c26\u0c28 \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c3f\u0c02\u0c26\u0c3f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0c38\u0c2e\u0c30\u0c4d\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c4b\u0c02\u0c26\u0c3f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0c32\u0c4b\u0c21\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0c13\u0c1f\u0c4d\u200c} other {# \u0c13\u0c1f\u0c4d\u200c\u0c32\u0c41}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0c06\u0c2b\u0c4d\u200c\u0c32\u0c48\u0c28\u0c4d",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0c38\u0c30\u0c48\u0c28\u0c26\u0c3f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0c2a\u0c2c\u0c4d\u0c32\u0c3f\u0c15\u0c4d"\n},\n"th-TH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e41\u0e25\u0e49\u0e27",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2a\u0e48\u0e07...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0e42\u0e2b\u0e27\u0e15} other {# \u0e42\u0e2b\u0e27\u0e15}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49"\n},\n"tl-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Hindi Tama",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Na-save ang tugon",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Isinusumite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Naglo-load...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# boto} other {# (na) boto}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Tama",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"tr-TR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"%{0}",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Yanl\u0131\u015f",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Yan\u0131t\u0131n\u0131z\u0131 kaydettik",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"G\u00f6nderiliyor...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Y\u00fckleniyor...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# oy} other {# oy}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u00c7evrimd\u0131\u015f\u0131",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Do\u011fru",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Yay\u0131nda"\n},\n"uk-UA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0430\u0434\u0430\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041d\u0430\u0434\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c} few {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456} many {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439} other {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041d\u0435 \u0432 \u043c\u0435\u0440\u0435\u0436\u0456",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u041d\u0430\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0443\u0441\u0456\u043c"\n},\n"ur-PK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u0644\u0637",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0645\u0639 \u06a9\u0631\u0648\u0627 \u0631\u06c1\u06d2 \u06c1\u06cc\u06ba...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u0627 \u06c1\u06d2...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641 \u0644\u0627\u0626\u0646",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u062f\u0631\u0633\u062a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0628\u0631\u0627\u06c1\u0650 \u0631\u0627\u0633\u062a"\n},\n"uz-UZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Noto\u02bbg\u02bbri",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Yuborilmoqda...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Yuklanmoqda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"To\u02bbg\u02bbri",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Jonli"\n},\n"vi-VN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Kh\u00f4ng ch\u00ednh x\u00e1c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0110\u00e3 l\u01b0u c\u00e2u tr\u1ea3 l\u1eddi",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0110ang g\u1eedi...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0110ang t\u1ea3i...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# l\u01b0\u1ee3t b\u00ecnh ch\u1ecdn} other {# l\u01b0\u1ee3t b\u00ecnh ch\u1ecdn}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Ch\u00ednh x\u00e1c",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Tr\u1ef1c ti\u1ebfp"\n},\n"wo-SN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Jubul",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Mingi koy joxe...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Mingi yab...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Amul net",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Jub na",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Teew"\n},\n"xh-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Abangachananga",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iyangenisa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Iyalowuda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"I-Offline",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Abachanileyo",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"iLive"\n},\n"yo-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"K\u00f2 t\u1ecd\u0300n\u00e0",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u01f8f\u00e0kal\u1eb9\u0300...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u00d3 n \u1e63araj\u1ecd...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u00c0\u00ecs\u00ed n\u00ed on\u00edfor\u00edkor\u00ed",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"B\u1eb9\u0301\u1eb9\u0300 ni",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"zh-CN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u9519\u8bef",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u4fdd\u5b58\u56de\u5e94",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u6b63\u5728\u52a0\u8f7d\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u7968} other {#\u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u79bb\u7ebf",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u786e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u5df2\u4e0a\u7ebf"\n},\n"zh-HK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u78ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u5132\u5b58\u56de\u61c9",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u6b63\u5728\u8f09\u5165\u2026\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u7968} other {# \u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u96e2\u7dda",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u78ba",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u4e0a\u7dda"\n},\n"zh-TW":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u78ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u5132\u5b58\u56de\u61c9",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u8f09\u5165\u4e2d\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u7968} other {# \u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u96e2\u7dda",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u78ba",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u53ef\u4f7f\u7528"\n},\n"zu-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Akunembile",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iyathumela...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Iyalayisha...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Okungaxhunyiwe ku-inthanethi",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Kunembile",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Bukhoma"\n}\n}'
                        }));
                        a = JSON.parse(a);
                        const b = new Map;
                        for (const c in a) b.set(c, Object.values(a[c]));
                        return b
                    },
                    v4 = function({
                        layout: a,
                        direction: b,
                        gap: c,
                        padding: d,
                        background: e,
                        border: f,
                        P: g,
                        cells: h,
                        ...k
                    }) {
                        a = "vertical" === a;
                        let l = [];
                        const m = [],
                            n = c && d,
                            p = d ? 1 : 0;
                        let q = 1;
                        for (let r = 0; r < h.length; r++) {
                            const t = h[r];
                            "string" === typeof t.size ? l.push(t.size) : l.push(`${t.size}px`);
                            m.push({ ...t,
                                id: t.id,
                                placement: a ? {
                                    gridColumnStart: `${p+1}`,
                                    gridColumnEnd: `${p+2}`,
                                    gridRowStart: `${p+q}`,
                                    gridRowEnd: `${p+q+1}`,
                                    padding: t.padding ? pKb(t.padding) : void 0,
                                    alignSelf: t.alignSelf
                                } : {
                                    gridColumnStart: `${p+q}`,
                                    gridColumnEnd: `${p+q+1}`,
                                    gridRowStart: `${p+1}`,
                                    gridRowEnd: `${p+2}`,
                                    padding: t.padding ? pKb(t.padding) : void 0,
                                    alignSelf: t.alignSelf
                                }
                            });
                            q += n ? 2 : 1
                        }
                        n && (l = l.join(` ${c}px `).split(" "));
                        d && (l = [`${d}px`, ...l, `${d}px`]);
                        return { ...k,
                            type: "layout",
                            cells: m,
                            direction: b,
                            fill: e,
                            border: f,
                            P: g,
                            gridTemplateColumns: a ? d ? [`${d}px`, "1fr", `${d}px`] : ["1fr"] : l,
                            gridTemplateRows: a ? l : d ? [`${d}px`, "auto", `${d}px`] : ["auto"],
                            columnGap: n || a ? void 0 : c,
                            rowGap: !n && a ? c : void 0
                        }
                    },
                    qKb =
                    function({
                        padding: a,
                        direction: b,
                        background: c,
                        P: d,
                        La: e,
                        border: f,
                        content: g,
                        ref: h,
                        key: k,
                        ...l
                    }) {
                        return { ...l,
                            type: "layout",
                            direction: b,
                            gridTemplateColumns: ["1fr"],
                            gridTemplateRows: ["1fr"],
                            fill: c,
                            P: d,
                            La: e,
                            border: f,
                            cells: [{
                                id: "_",
                                content: g,
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: "2",
                                    gridRowStart: "1",
                                    gridRowEnd: "2",
                                    alignSelf: "center",
                                    padding: a
                                }
                            }],
                            key: k,
                            ref: h
                        }
                    },
                    pKb = function(a) {
                        switch (a.length) {
                            case 0:
                                break;
                            case 1:
                                return a[0];
                            case 2:
                                return {
                                    ya: a[0],
                                    Oa: a[1],
                                    Ha: a[0],
                                    xa: a[1]
                                };
                            case 4:
                                return {
                                    ya: a[0],
                                    Oa: a[1],
                                    Ha: a[2],
                                    xa: a[3]
                                };
                            default:
                                throw Error(`Invalid padding value: ${a}`);
                        }
                    },
                    w4 = function(a, b) {
                        __c.w(0 < b.length, "zero contrast candidates received");
                        const c = new Map;
                        return __c.js(b, d => {
                            var e;
                            if (null === (e = c.get(d)) || void 0 === e) {
                                e = bKb(d);
                                const f = bKb(a);
                                e = e > f ? (e + .05) / (f + .05) : (f + .05) / (e + .05)
                            }
                            c.set(d, e);
                            return e
                        })
                    },
                    y4 = function(a, b) {
                        __c.w(!0);
                        __c.w(!0);
                        __c.w(!0);
                        const {
                            ba: c,
                            a: d,
                            b: e
                        } = __c.mt(a), {
                            ba: f,
                            a: g,
                            b: h
                        } = __c.mt(b), k = (c + f) / 2;
                        var l = (Math.hypot(d, e) + Math.hypot(g, h)) / 2;
                        l = .5 * (1 - Math.sqrt(l ** 7 / (l ** 7 + 25 ** 7)));
                        var m =
                            d * (1 + l),
                            n = g * (1 + l),
                            p = Math.hypot(m, e),
                            q = Math.hypot(n, h);
                        l = (p + q) / 2;
                        var r = __c.xt(180 * Math.atan2(e, m) / Math.PI);
                        const t = __c.xt(180 * Math.atan2(h, n) / Math.PI);
                        m = 180 < Math.abs(r - t) ? (r + t + 360) / 2 : (r + t) / 2;
                        n = q - p;
                        p = 2 * Math.sqrt(p * q) * Math.sin((180 >= Math.abs(t - r) ? t - r : t <= r ? t - r + 360 : t - r - 360) / 2 * Math.PI / 180);
                        q = 1 + .045 * l;
                        r = 1 + .015 * l * (1 - .17 * Math.cos((m - 30) * Math.PI / 180) + .24 * Math.cos(2 * m * Math.PI / 180) + .32 * Math.cos((3 * m + 6) * Math.PI / 180) - .2 * Math.cos((4 * m - 63) * Math.PI / 180));
                        return 20 <= Math.sqrt(((f - c) / (1 + .015 * (k - 50) ** 2 / Math.sqrt(20 +
                            (k - 50) ** 2))) ** 2 + (n / (1 * q)) ** 2 + (p / (1 * r)) ** 2 + n / (1 * q) * (p / (1 * r)) * -(2 * Math.sqrt(l ** 7 / (l ** 7 + 25 ** 7))) * Math.sin(60 * Math.exp(-1 * ((m - 275) / 25) ** 2) * Math.PI / 180)) ? a : w4(b, x4)
                    },
                    z4 = function(a) {
                        switch (a.type) {
                            case "color":
                                return a.color;
                            case "gradient":
                                return a.jb.Qm[0].color;
                            default:
                                throw new F(a);
                        }
                    },
                    A4 = function(a, b) {
                        a = __c.zj.create(__c.zj.na(a.text));
                        null != b && a.ik(b);
                        return {
                            type: "text",
                            cG: 1,
                            text: __c.zj.na(a)
                        }
                    },
                    B4 = function(a) {
                        switch (a) {
                            case "l":
                                return 1;
                            case "r":
                                return 2;
                            default:
                                throw new F(a);
                        }
                    },
                    C4 = function(a) {
                        switch (a) {
                            case "l":
                                return "ltr";
                            case "r":
                                return "rtl";
                            default:
                                throw new F(a);
                        }
                    },
                    rKb = function(a) {
                        if (a) return {
                            Bea: a.Bea,
                            uaa: a.uaa,
                            vaa: a.vaa,
                            saa: a.saa,
                            waa: a.waa
                        }
                    },
                    sKb = function({
                        direction: a,
                        text: b,
                        background: c
                    }) {
                        return {
                            id: "header",
                            size: "auto",
                            fill: c,
                            padding: [20, 20, 16, 20],
                            content: A4(b, {
                                direction: C4(a),
                                color: w4(z4(c), x4)
                            })
                        }
                    },
                    vKb = function({
                        direction: a,
                        messages: b,
                        Rra: c,
                        yr: d,
                        Xcb: e,
                        P: f,
                        state: g,
                        YB: h,
                        ow: k
                    }) {
                        var l = h !== k,
                            m = w4(k, x4);
                        h = l ? h : m;
                        m = y4("#000000", k);
                        var n = y4(h, k);
                        l = tKb(g, 3 === g && l ? n : m, l);
                        c = {
                            id: "text",
                            placement: {
                                gridColumnStart: "2",
                                gridColumnEnd: "3",
                                gridRowStart: "2",
                                gridRowEnd: "3",
                                alignSelf: "center"
                            },
                            content: A4(c, {
                                direction: C4(a),
                                ...(3 === g && {
                                    color: w4(h, x4)
                                })
                            })
                        };
                        3 === g || 4 === g || 5 === g ? (b = (n = u4(b, "resultsPercentage")) ? aKb(n, [e], b.document.language) : __c.Bb("sUWUOA", [e]), k = {
                            id: "percentage",
                            placement: {
                                gridColumnStart: "4",
                                gridColumnEnd: "5",
                                gridRowStart: "2",
                                gridRowEnd: "3",
                                alignSelf: "center"
                            },
                            content: {
                                type: "text",
                                cG: 0,
                                fontFamily: d,
                                fontWeight: "bold",
                                fontSize: uKb,
                                text: b,
                                textAlign: "end",
                                direction: C4(a),
                                color: 3 === g ? w4(h, x4) : w4(k, x4)
                            }
                        }) : k = void 0;
                        k = {
                            type: "layout",
                            gridTemplateRows: ["10px", "1fr", "10px"],
                            gridTemplateColumns: ["10px", "1fr", "2px", "45px", "10px"],
                            fill: l,
                            cells: [c, k].filter(vb)
                        };
                        if (3 !== g && 4 !== g && 5 !== g) return k;
                        b = 0 < e;
                        const p = 100 > e;
                        n = (c = b && !p || !b && p) ? 1 : 2;
                        e = [b ? `${e}fr` : void 0, p ? `${100-e}fr` : void 0].filter(vb);
                        g = {
                            type: "color",
                            color: 3 === g ? h : m,
                            La: 3 === g ? 0 : .8
                        };
                        return c ? { ...k,
                            fill: b ? g : l
                        } : {
                            type: "layout",
                            direction: B4(a),
                            gridTemplateRows: ["1fr"],
                            gridTemplateColumns: e,
                            fill: l,
                            cells: [{
                                id: "bar",
                                P: f,
                                fill: g,
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: "2",
                                    gridRowStart: "1",
                                    gridRowEnd: "2"
                                },
                                content: qKb({
                                    direction: B4(a),
                                    content: {
                                        type: "text",
                                        cG: 0,
                                        text: "",
                                        fontFamily: d,
                                        fontSize: uKb,
                                        direction: C4(a)
                                    }
                                })
                            }, {
                                id: "optionTextWithPercentage",
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: `${n+1}`,
                                    gridRowStart: "1",
                                    gridRowEnd: "2"
                                },
                                content: k
                            }]
                        }
                    },
                    tKb = function(a, b, c) {
                        switch (a) {
                            case 0:
                                return {
                                    type: "color",
                                    color: b,
                                    La: .92
                                };
                            case 1:
                            case 5:
                                return {
                                    type: "color",
                                    color: b,
                                    La: .88
                                };
                            case 2:
                                return {
                                    type: "color",
                                    color: b,
                                    La: .74
                                };
                            case 3:
                                return {
                                    type: "color",
                                    color: b,
                                    La: c ? .5 : .92
                                };
                            case 4:
                                return {
                                    type: "color",
                                    color: b,
                                    La: .92
                                };
                            default:
                                throw new F(a);
                        }
                    },
                    wKb = function({
                        x4a: a,
                        tM: b,
                        iE: c,
                        direction: d,
                        options: e,
                        hf: f,
                        xE: g,
                        kA: h,
                        Qra: k,
                        yr: l,
                        i2: m,
                        YB: n,
                        ow: p,
                        messages: q,
                        pfa: r
                    }) {
                        return {
                            id: "field",
                            size: "1fr",
                            padding: [16, 20],
                            alignSelf: "center",
                            content: v4({
                                layout: "vertical",
                                direction: B4(d),
                                gap: 8,
                                cells: e.map(({
                                    value: t
                                }) => {
                                    var u = t.id === f;
                                    const v = t.id === g,
                                        x = t.id === h;
                                    u = m ? u ? 3 : v ? 5 : 4 : x ? 2 : v ? 1 : 0;
                                    return {
                                        id: t.id,
                                        size: "auto",
                                        alignSelf: "center",
                                        content: {
                                            ref: r.option,
                                            key: t.id,
                                            P: k,
                                            Qk: () => {
                                                var y;
                                                return null === b || void 0 === b ? void 0 : null === (y = b.Bea) ||
                                                    void 0 === y ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseEnter: () => {
                                                var y;
                                                return null === b || void 0 === b ? void 0 : null === (y = b.uaa) || void 0 === y ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseLeave: () => {
                                                var y;
                                                return null === b || void 0 === b ? void 0 : null === (y = b.vaa) || void 0 === y ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseDown: () => {
                                                var y;
                                                return null === b || void 0 === b ? void 0 : null === (y = b.saa) || void 0 === y ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseUp: () => {
                                                var y;
                                                return null === b || void 0 === b ? void 0 : null === (y = b.waa) || void 0 === y ? void 0 : y.call(b, t.id)
                                            },
                                            ...vKb({
                                                messages: q,
                                                Rra: t.label,
                                                direction: d,
                                                yr: l,
                                                Xcb: a.w5a(c, t.id),
                                                P: k,
                                                state: u,
                                                YB: n,
                                                ow: p
                                            })
                                        }
                                    }
                                })
                            })
                        }
                    },
                    AKb = function(a) {
                        const b = a.status,
                            c = a.yr,
                            d = a.direction,
                            e = a.backgroundColor;
                        switch (b) {
                            case 0:
                                var f;
                                return {
                                    type: "text",
                                    cG: 1,
                                    text: D4(null !== (f = a.statusMessage) && void 0 !== f ? f : u4(a.messages, "live") || O("/iw6+Q"), c, d, w4(e, xKb), w4(e, x4))
                                };
                            case 1:
                                return {
                                    type: "text",
                                    cG: 1,
                                    text: D4(a.messages.loading(), c, d, w4(e, yKb), w4(e, x4))
                                };
                            case 2:
                                return {
                                    type: "text",
                                    cG: 1,
                                    text: D4(u4(a.messages, "submitting") || O("wutQEA"), c, d, w4(e, yKb), w4(e, x4))
                                };
                            case 3:
                                return {
                                    type: "text",
                                    cG: 1,
                                    text: D4(a.messages.offline(), c, d, w4(e, zKb), w4(e, x4))
                                };
                            default:
                                throw new F(b);
                        }
                    },
                    BKb = function({
                        direction: a,
                        messages: b,
                        yr: c,
                        lab: d,
                        status: e,
                        backgroundColor: f
                    }) {
                        var g = u4(b, "live") || O("/iw6+Q");
                        const h = u4(b, "numVotes");
                        d = h ? aKb(h, [d], b.document.language) : __c.Bb("6QpLYA", [d]);
                        return [{
                            id: "footer",
                            size: "auto",
                            padding: [0, 20, 20, 20],
                            content: AKb({
                                messages: b,
                                status: e,
                                statusMessage: `${g} | ${d}`,
                                yr: c,
                                backgroundColor: f,
                                direction: a
                            })
                        }]
                    },
                    CKb = function({
                        width: a,
                        height: b,
                        Je: c,
                        color: d,
                        P7a: e,
                        backgroundColor: f
                    }) {
                        return {
                            type: "shape",
                            width: a,
                            height: b,
                            qfa: {
                                width: 16,
                                height: 16
                            },
                            wb: [{
                                d: "M 8 16 C 12.4183 16 16 12.4183 16 8 C 16 3.5817 12.4183 0 8 0 C 3.5817 0 0 3.5817 0 8 C 0 12.4183 3.5817 16 8 16 Z",
                                stroke: {
                                    weight: c,
                                    color: d
                                },
                                fill: {
                                    type: "color",
                                    color: d
                                }
                            }, {
                                d: e ? "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z" : "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                                fill: {
                                    type: "color",
                                    color: f
                                }
                            }]
                        }
                    },
                    FKb = function({
                        direction: a,
                        Rra: b,
                        ow: c,
                        state: d
                    }) {
                        const e = y4("#000000", c);
                        return {
                            type: "layout",
                            gridTemplateRows: ["10px", "1fr", "10px"],
                            gridTemplateColumns: ["10px", "1fr", "2px", "18px", "10px"],
                            fill: DKb(d, e),
                            cells: [{
                                id: "text",
                                placement: {
                                    alignSelf: "center",
                                    gridColumnStart: "2",
                                    gridColumnEnd: "3",
                                    gridRowStart: "2",
                                    gridRowEnd: "3"
                                },
                                content: (() => {
                                    switch (d) {
                                        case 5:
                                            return A4(b, {
                                                direction: C4(a),
                                                color: "#00873d"
                                            });
                                        case 6:
                                            return A4(b, {
                                                direction: C4(a),
                                                color: "#c8001e"
                                            });
                                        case 4:
                                            return A4(b, {
                                                direction: C4(a),
                                                color: w4(c, EKb)
                                            });
                                        default:
                                            return A4(b, {
                                                direction: C4(a)
                                            })
                                    }
                                })()
                            }, 5 === d || 6 === d ? {
                                id: "validation",
                                placement: {
                                    gridColumnStart: "4",
                                    gridColumnEnd: "5",
                                    gridRowStart: "2",
                                    gridRowEnd: "3",
                                    alignSelf: "center"
                                },
                                content: CKb({
                                    width: 18,
                                    height: 18,
                                    Je: 1.6,
                                    P7a: 5 === d,
                                    color: 5 === d ? "#00873d" : "#c8001e",
                                    backgroundColor: "#ffffff"
                                })
                            } : void 0].filter(vb)
                        }
                    },
                    DKb = function(a, b) {
                        switch (a) {
                            case 0:
                                return {
                                    type: "color",
                                    color: b,
                                    La: .92
                                };
                            case 1:
                                return {
                                    type: "color",
                                    color: b,
                                    La: .74
                                };
                            case 2:
                                return {
                                    type: "color",
                                    color: b,
                                    La: .88
                                };
                            case 3:
                                return {
                                    type: "color",
                                    color: b,
                                    La: .74
                                };
                            case 4:
                                return {
                                    type: "color",
                                    color: b,
                                    La: .9
                                };
                            case 5:
                                return {
                                    type: "color",
                                    color: "#e3fff0",
                                    La: 0
                                };
                            case 6:
                                return {
                                    type: "color",
                                    color: "#ffd9df",
                                    La: 0
                                };
                            default:
                                throw new F(a);
                        }
                    },
                    GKb = function({
                        tM: a,
                        direction: b,
                        options: c,
                        V6: d,
                        hf: e,
                        xE: f,
                        kA: g,
                        Qra: h,
                        ow: k,
                        i2: l,
                        pfa: m,
                        context: n
                    }) {
                        return {
                            id: "field",
                            size: "1fr",
                            padding: [16, 20, 10, 20],
                            alignSelf: "center",
                            content: v4({
                                layout: "vertical",
                                direction: B4(b),
                                gap: 8,
                                cells: c.map(({
                                    value: p
                                }) => {
                                    const q = p.id === e,
                                        r = mKb(d, p.id),
                                        t = p.id === f,
                                        u = p.id === g;
                                    return {
                                        id: p.id,
                                        size: "auto",
                                        alignSelf: "center",
                                        content: {
                                            ref: m.option,
                                            key: p.id,
                                            P: h,
                                            Qk: () => {
                                                var v;
                                                return null === a || void 0 === a ? void 0 : null === (v = a.Bea) || void 0 === v ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseEnter: () => {
                                                var v;
                                                return null === a || void 0 === a ? void 0 : null === (v = a.uaa) || void 0 === v ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseLeave: () => {
                                                var v;
                                                return null === a || void 0 === a ? void 0 : null === (v = a.vaa) || void 0 === v ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseDown: () => {
                                                var v;
                                                return null === a || void 0 === a ? void 0 : null === (v = a.saa) || void 0 === v ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseUp: () => {
                                                var v;
                                                return null === a || void 0 === a ? void 0 : null === (v = a.waa) || void 0 === v ? void 0 : v.call(a, p.id)
                                            },
                                            ...FKb({
                                                direction: b,
                                                Rra: p.label,
                                                ow: k,
                                                state: l && "edit" !== n.mode ? r ? 5 : q ? 6 : 4 : "edit" === n.mode ? r ? 5 : 4 : q ? 1 : u ? 3 : t ? 2 : 0
                                            })
                                        }
                                    }
                                })
                            })
                        }
                    },
                    HKb = function({
                        direction: a,
                        text: b,
                        nZa: c,
                        pQ: d,
                        tM: e
                    }) {
                        const f = x4.includes(c),
                            {
                                h: g,
                                s: h,
                                ba: k
                            } = __c.ut(c);
                        var l = new __c.kt(g, h, 10 > k ? k + 6 : k - 6);
                        l = __c.vt(l);
                        var m = new __c.kt(g, h, 10 > k ? k + 10 : k - 10);
                        m = __c.vt(m);
                        return {
                            id: "submit",
                            size: "auto",
                            padding: [0, 20],
                            content: qKb({
                                direction: B4(a),
                                Qk: null === e || void 0 ===
                                    e ? void 0 : e.submit,
                                onMouseEnter: null === e || void 0 === e ? void 0 : e.qqa,
                                onMouseLeave: null === e || void 0 === e ? void 0 : e.rqa,
                                onMouseDown: null === e || void 0 === e ? void 0 : e.pqa,
                                onMouseUp: null === e || void 0 === e ? void 0 : e.sqa,
                                background: {
                                    type: "color",
                                    color: 2 === d ? m : 1 === d ? l : c,
                                    La: (null === e || void 0 === e ? 0 : e.submit) ? f ? .1 : void 0 : .6
                                },
                                P: 24,
                                padding: 12,
                                content: A4(b, {
                                    direction: C4(a)
                                })
                            })
                        }
                    },
                    JKb = function({
                        tM: a,
                        direction: b,
                        messages: c,
                        yr: d,
                        $w: e,
                        YB: f,
                        status: g,
                        Q7a: h,
                        backgroundColor: k,
                        i2: l,
                        DO: m
                    }) {
                        const n = w4(k, x4);
                        return l ? [{
                            id: "quiz_results_footer",
                            size: "auto",
                            padding: [20, 20, 24, 20],
                            content: v4({
                                layout: "vertical",
                                direction: B4(b),
                                cells: [{
                                    id: "quiz_result",
                                    size: "auto",
                                    content: {
                                        type: "text",
                                        cG: 0,
                                        fontFamily: d,
                                        text: h ? u4(c, "correctLabel") || O("i3mNPA") : u4(c, "incorrectLabel") || O("As1GTA"),
                                        fontSize: IKb,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        direction: C4(b),
                                        color: w4(k, x4)
                                    }
                                }, {
                                    id: "quiz_message",
                                    size: "auto",
                                    content: {
                                        type: "text",
                                        cG: 0,
                                        fontFamily: d,
                                        text: u4(c, "responseSaved") || O("xSH8Og"),
                                        fontSize: E4,
                                        La: .2,
                                        textAlign: "center",
                                        direction: C4(b),
                                        color: n
                                    }
                                }]
                            })
                        }] : (f = f ===
                            k ? w4(f, x4) : f, [HKb({
                                direction: b,
                                text: e,
                                nZa: f,
                                pQ: m,
                                tM: a
                            }), {
                                id: "quiz_status",
                                size: "auto",
                                padding: [8, 20, 10, 20],
                                content: AKb({
                                    status: g,
                                    yr: d,
                                    messages: c,
                                    direction: b,
                                    backgroundColor: k
                                })
                            }])
                    },
                    KKb = class {
                        constructor() {
                            this.type = "layout"
                        }
                    },
                    F4 = __webpack_require__(519427),
                    LKb = F4.action,
                    l4 = F4.computed,
                    MKb = F4.reaction,
                    s4 = F4.runInAction;
                var n4 = class {
                        static j(a) {
                            __c.R(a, {
                                HDa: l4
                            })
                        }
                        get HDa() {
                            const a = [];
                            for (const b of this.list.value) {
                                const c = d4(this, b);
                                if (void 0 === c) throw new dKb("undefined value found when deserializing list.");
                                a.push(c)
                            }
                            return a
                        }
                        count() {
                            return this.list.value.count()
                        }
                        toArray() {
                            return this.HDa.map(({
                                value: a
                            }) => a)
                        }
                        first(a) {
                            const b = this.list.value.first(a ? c => a(d4(this, c)) : void 0);
                            if (null != b) return d4(this, b)
                        }
                        last(a) {
                            const b = this.list.value.last(a ? c => a(d4(this, c)) : void 0);
                            if (null != b) return d4(this, b)
                        }
                        next(a, b) {
                            var c =
                                b ? d => b(d4(this, d)) : void 0;
                            a = e4(this, a);
                            c = this.list.value.next(a, c);
                            if (null != c) return d4(this, c)
                        }
                        Gc(a, b) {
                            var c = b ? d => b(d4(this, d)) : void 0;
                            a = e4(this, a);
                            c = this.list.value.Gc(a, c);
                            if (null != c) return d4(this, c)
                        }
                        map(a) {
                            return this.list.value.map((b, c) => a(d4(this, b), c))
                        }
                        filter(a) {
                            return this.list.value.filter((b, c) => a(d4(this, b), c)).map(b => d4(this, b))
                        }
                        forEach(a) {
                            return this.list.value.forEach((b, c) => a(d4(this, b), c))
                        }
                        some(a) {
                            return this.list.value.some(b => a(d4(this, b)))
                        }
                        constructor(a, b) {
                            n4.j(this);
                            this.rz =
                                b;
                            this.pSa = new WeakMap;
                            this.jSa = new WeakMap;
                            __c.B("list" === a.type);
                            this.list = a
                        }
                    },
                    gKb = class extends n4 {
                        replace(a, b) {
                            a = e4(this, a);
                            b = this.list.value.replace(a, this.rz.wk(b));
                            return d4(this, b)
                        }
                        oM(a, b) {
                            a = null != a ? e4(this, a) : void 0;
                            b = this.list.value.oM(a, this.rz.wk(b));
                            return d4(this, b)
                        }
                        pM(a, b) {
                            a = null != a ? e4(this, a) : void 0;
                            return this.list.value.pM(a, b.map(c => this.rz.wk(c))).map(c => d4(this, c))
                        }
                        insertBefore(a, b) {
                            a = null != a ? e4(this, a) : void 0;
                            b = this.list.value.insertBefore(a, this.rz.wk(b));
                            return d4(this, b)
                        }
                        append(a) {
                            a =
                                this.list.value.append(this.rz.wk(a));
                            return d4(this, a)
                        }
                        prepend(a) {
                            a = this.list.value.prepend(this.rz.wk(a));
                            return d4(this, a)
                        }
                        delete(a) {
                            a = e4(this, a);
                            this.list.value.delete(a)
                        }
                    };
                var i4 = class extends Error {
                        constructor(a) {
                            super(a);
                            this.name = "SchemaError"
                        }
                    },
                    dKb = class extends i4 {
                        constructor(a) {
                            super(`ListError: ${a}`)
                        }
                    },
                    f4 = class extends i4 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget data`)
                        }
                    },
                    g4 = class extends i4 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget state`)
                        }
                    },
                    eKb = class extends i4 {
                        constructor(a) {
                            super(`Error transforming ${a} into type ${"double"} of document state`)
                        }
                    };
                var NKb = m4({
                        type: ["t", j4(["text2"], "text2"), "readonly"],
                        text: ["te", function() {
                            const a = b => {
                                if ("text2" !== (null === b || void 0 === b ? void 0 : b.type)) throw new f4("text2", b);
                                return b.value
                            };
                            return {
                                wk: b => ({
                                    type: "text2",
                                    value: b
                                }),
                                qs: b => {
                                    if ("text2" !== (null === b || void 0 === b ? void 0 : b.type)) throw new g4("text2", b);
                                    return b.value
                                },
                                ns: a,
                                du: a
                            }
                        }()]
                    }),
                    G4 = p4({
                        text2: NKb
                    }, a => a.type),
                    OKb = m4({
                        id: ["i", h4("")],
                        label: ["l", G4]
                    }),
                    PKb = o4(OKb),
                    QKb = o4(h4("")),
                    RKb = m4({
                        type: ["t", j4(["select"], "select"), "readonly"],
                        id: ["i", h4("")],
                        label: ["l",
                            G4
                        ],
                        options: ["o", PKb],
                        P: ["c", k4(0)],
                        V6: ["co", QKb]
                    }),
                    SKb = p4({
                        select: RKb
                    }, a => a.type),
                    TKb = o4(SKb),
                    UKb = p4({
                        select: RKb
                    }, a => a.type),
                    VKb = o4(UKb),
                    WKb = m4({
                        label: ["l", G4]
                    }),
                    XKb = m4({}),
                    YKb = j4(["l", "r"], "l"),
                    ZKb = m4({
                        minHeight: ["mh", k4(1)],
                        minWidth: ["mw", k4(1)],
                        id: ["i", h4()],
                        aG: ["s", h4()],
                        direction: ["r", YKb],
                        yr: ["d", h4("")],
                        gz: ["pf", fKb()],
                        sz: ["sf", fKb()],
                        border: ["b", function() {
                            const a = b => {
                                if ("stroke" !== (null === b || void 0 === b ? void 0 : b.type)) throw new f4("stroke", b);
                                return b.value
                            };
                            return {
                                wk: b => ({
                                    type: "stroke",
                                    value: b
                                }),
                                qs: b => {
                                    if ("stroke" !== (null === b || void 0 === b ? void 0 : b.type)) throw new g4("stroke", b);
                                    return b.value
                                },
                                ns: a,
                                du: a
                            }
                        }()],
                        P: ["c", k4(0)],
                        header: ["h", function(a) {
                            return {
                                wk: b => null == b ? b : a.wk(b),
                                qs: b => null == b ? b : a.qs(b),
                                ns: b => null == b ? b : a.ns(b),
                                du: b => null == b ? b : a.du(b)
                            }
                        }(XKb)],
                        Rna: ["hh", function(a) {
                            const b = (c, d) => {
                                if (null == c) return a;
                                if ("boolean" !== (null === c || void 0 === c ? void 0 : c.type)) throw "toWidgetData" === d ? new f4("boolean", c) : new g4("boolean", c);
                                return c.value
                            };
                            return {
                                wk: c => ({
                                    type: "boolean",
                                    value: c
                                }),
                                qs: c => b(c, "toWidgetState"),
                                ns: c => b(c, "toWidgetData"),
                                du: c => b(c, "toWidgetData")
                            }
                        }(!1)]
                    }),
                    $Kb = ZKb.Oc({
                        type: ["t", j4(["quiz"], "quiz"), "readonly"],
                        fields: ["f", TKb],
                        footer: ["fo", WKb]
                    }),
                    aLb = ZKb.Oc({
                        type: ["t", j4(["poll"], "poll"), "readonly"],
                        fields: ["f", VKb]
                    });
                j4(["poll", "quiz"], "quiz");
                var bLb = p4({
                        quiz: $Kb,
                        poll: aLb
                    }, a => a.type),
                    q4 = {
                        hf: void 0,
                        LJ: void 0,
                        Msa: void 0,
                        results: {
                            fields: new Map
                        }
                    },
                    cLb = {
                        Jz: new Map,
                        DO: 0,
                        xE: void 0,
                        kA: void 0,
                        status: 1,
                        Cna: !1,
                        Jnb: !1
                    };
                var iKb = {
                    we: "form_widget_interacted",
                    Ef(a) {
                        return __c.FB({
                            form_id: a.Gma,
                            form_type: a.y4a,
                            action_group: a.LG,
                            action: a.action,
                            location: a.location,
                            toggle_value: a.eG,
                            editing_context: null == a.fe ? void 0 : __c.GB(a.fe),
                            performance_context: null == a.Bf ? void 0 : __c.VC(a.Bf)
                        })
                    }
                };
                var kKb = Symbol("UNABLE_TO_SUBMIT");
                var nKb = {
                        resultsPercentage: 0,
                        incorrectLabel: 1,
                        responseSaved: 2,
                        submitting: 3,
                        loading: 4,
                        numVotes: 5,
                        offline: 6,
                        correctLabel: 7,
                        live: 8
                    },
                    dLb = class {
                        async eoa() {
                            this.wwa = await oKb()
                        }
                        offline() {
                            return u4(this, "offline") || O("nFbxIQ")
                        }
                        loading() {
                            return u4(this, "loading") || O("2Q9Q+A")
                        }
                        constructor(a) {
                            this.document = a;
                            this.eoa()
                        }
                    };
                var eLb = class {
                    static j(a) {
                        __c.R(a, {
                            border: l4
                        })
                    }
                    get border() {
                        const a = this.xx.og;
                        a.border.weight && !a.border.color && this.H && this.H.error("Form widget borders cannot have weight without a color");
                        return {
                            weight: a.border.weight,
                            color: a.border.color,
                            VOa: a.P
                        }
                    }
                    constructor(a, b) {
                        eLb.j(this);
                        this.xx = a;
                        this.H = b
                    }
                };
                var fLb = class {
                    static j(a) {
                        __c.R(a, {
                            gz: l4,
                            sz: l4,
                            YB: l4,
                            ow: l4
                        })
                    }
                    get gz() {
                        const a = this.xx.og.gz.color,
                            b = this.xx.og.gz.jb;
                        if (a) return {
                            type: "color",
                            color: a
                        };
                        if (b.ref) return {
                            type: "gradient",
                            jb: b.ref
                        }
                    }
                    get sz() {
                        const a = this.xx.og.sz.color,
                            b = this.xx.og.sz.jb;
                        if (a) return {
                            type: "color",
                            color: a
                        };
                        if (b.ref) return {
                            type: "gradient",
                            jb: b.ref
                        }
                    }
                    get YB() {
                        if (!this.gz) return "#000000";
                        switch (this.gz.type) {
                            case "color":
                                return this.gz.color;
                            case "gradient":
                                return this.gz.jb.Qm[0].color;
                            default:
                                throw new F(this.gz);
                        }
                    }
                    get ow() {
                        if (!this.sz) return "#000000";
                        switch (this.sz.type) {
                            case "color":
                                return this.sz.color;
                            case "gradient":
                                return this.sz.jb.Qm[0].color;
                            default:
                                throw new F(this.sz);
                        }
                    }
                    constructor(a) {
                        fLb.j(this);
                        this.xx = a
                    }
                };
                var x4 = ["#000000", "#ffffff"];
                var uKb = 9 * __c.OU,
                    EKb = ["#cccccc", "#333333"],
                    IKb = 14 * __c.OU,
                    E4 = 9 * __c.OU,
                    xKb = ["#00d200", "#00ed00"],
                    yKb = ["#ffae00", "#ffc654"],
                    zKb = ["#545454", "#c8c8c8"];
                var D4 = (a, b, c, d, e) => __c.zj.Kc().attrs({
                    "font-size": E4,
                    leading: void 0,
                    "text-align": "center",
                    direction: C4(c),
                    color: d
                }).yc("\u25cf ").attrs({
                    "font-family": b,
                    "font-size": E4,
                    color: e,
                    "font-kerning": "normal",
                    "font-feature-liga": "on",
                    "font-feature-clig": "on",
                    "font-feature-calt": "on"
                }).yc(a).yc("\n").build();
                __c.LIa = {
                    r0a: function(a, b, c, d, e, f, g, h, k) {
                        g.Sg("forms");
                        const {
                            Osb: l
                        } = null !== d && void 0 !== d ? d : {}, m = h.Ux("ui.rendering.form"), n = {
                            root: new KKb,
                            option: new KKb
                        }, p = new dLb(b);
                        return {
                            joa: cLb,
                            rz: bLb,
                            Pqa: ({
                                xx: q
                            }) => {
                                if (l && a) {
                                    var r, t = MKb(() => q.og.id, () => {
                                            const v = q.og.aG,
                                                x = q.og.type,
                                                y = l.get({
                                                    Gma: q.og.id,
                                                    Qf: a,
                                                    k8: c
                                                });
                                            null === r || void 0 === r ? void 0 : r.unsubscribe();
                                            "poll" === x && (r = y.Tub({
                                                gtb: () => q.og.aG
                                            }).subscribe(({
                                                results: z,
                                                aG: A
                                            }) => {
                                                s4(() => {
                                                    const C = new Map(q.pj.Jz);
                                                    var E;
                                                    C.set(A, { ...(null !== (E = C.get(A)) && void 0 !==
                                                            E ? E : q4),
                                                        results: z
                                                    });
                                                    q.Mm({
                                                        Jz: C
                                                    })
                                                })
                                            }));
                                            y.xsb({
                                                aG: v
                                            }).then(LKb(z => {
                                                var A;
                                                if (z.ok && z.value) {
                                                    z = z.value;
                                                    var C, E = null !== (C = null === (A = q.og.fields.first()) || void 0 === A ? void 0 : A.value.id) && void 0 !== C ? C : "",
                                                        H;
                                                    ({
                                                        hf: A
                                                    } = null !== (H = z.Dmb.get(E)) && void 0 !== H ? H : {});
                                                    H = new Map(q.pj.Jz);
                                                    var I;
                                                    H.set(v, { ...(null !== (I = H.get(v)) && void 0 !== I ? I : q4),
                                                        hf: A,
                                                        LJ: A
                                                    });
                                                    q.Mm({
                                                        Jz: H
                                                    })
                                                }
                                            }))
                                        }, {
                                            fireImmediately: !0
                                        }),
                                        u = MKb(() => 2 === (null === k || void 0 === k ? void 0 : k.status), LKb(v => {
                                            q.Mm({ ...q.pj,
                                                status: v ? 3 : 0
                                            })
                                        }), {
                                            fireImmediately: !0
                                        });
                                    return () => {
                                        null ===
                                            r || void 0 === r ? void 0 : r.unsubscribe();
                                        t();
                                        u()
                                    }
                                }
                            },
                            render: (q, r) => {
                                var t = hKb(q);
                                if (l && a) {
                                    var u = l.get({
                                        Gma: q.og.id,
                                        Qf: a,
                                        k8: c
                                    });
                                    u = lKb(q, t, u, e, f, m)
                                }
                                a: {
                                    var v = q.og,
                                        x = new fLb(q),
                                        y = new eLb(q);
                                    switch (v.type) {
                                        case "poll":
                                            var z;
                                            r = q.og;
                                            v = q.pj;
                                            var A = x.gz;
                                            x = x.sz;
                                            y = y.border;
                                            var C = y.VOa,
                                                E = r.direction,
                                                H = null === (z = r.fields.first()) || void 0 === z ? void 0 : z.value;
                                            if (H && A && x) {
                                                z = z4(A);
                                                var I = z4(x),
                                                    K = t.ana(),
                                                    M = t.kna();
                                                q = {
                                                    minWidth: r.minWidth,
                                                    minHeight: r.minHeight,
                                                    ...v4({
                                                        layout: "vertical",
                                                        direction: B4(E),
                                                        background: x,
                                                        P: C,
                                                        border: y,
                                                        cells: [r.Rna ? void 0 : sKb({
                                                            direction: E,
                                                            text: H.label,
                                                            background: A
                                                        }), wKb({
                                                            x4a: t,
                                                            tM: rKb(u),
                                                            options: H.options,
                                                            xE: v.xE,
                                                            kA: v.kA,
                                                            hf: M.hf,
                                                            Qra: H.P,
                                                            YB: z,
                                                            ow: I,
                                                            yr: r.yr,
                                                            direction: E,
                                                            i2: K,
                                                            iE: H.id,
                                                            messages: p,
                                                            pfa: n
                                                        }), ...BKb({
                                                            direction: E,
                                                            messages: p,
                                                            yr: r.yr,
                                                            lab: t.N5a(H.id),
                                                            status: q.pj.status,
                                                            backgroundColor: I
                                                        })].filter(vb)
                                                    }),
                                                    ref: n.root
                                                }
                                            } else q = { ...v4({
                                                    layout: "vertical",
                                                    direction: B4(E),
                                                    background: {
                                                        type: "color",
                                                        color: "#ffffff"
                                                    },
                                                    cells: []
                                                }),
                                                minWidth: r.minWidth,
                                                minHeight: r.minHeight
                                            };
                                            break a;
                                        case "quiz":
                                            z = q.og;
                                            v = q.pj;
                                            K = x.gz;
                                            A = x.sz;
                                            y = y.border;
                                            x = y.VOa;
                                            C = z.direction;
                                            var Q = null === (E = z.fields.first()) || void 0 === E ? void 0 : E.value;
                                            if (Q && K && A) {
                                                E = z4(K);
                                                H = z4(A);
                                                I = t.ana();
                                                var P = t.kna();
                                                t = !!P.hf && mKb(Q.V6, P.hf);
                                                M = z.minWidth;
                                                var V = z.minHeight,
                                                    aa = B4(C);
                                                K = z.Rna ? void 0 : sKb({
                                                    direction: C,
                                                    text: Q.label,
                                                    background: K
                                                });
                                                Q = GKb({
                                                    tM: rKb(u),
                                                    direction: C,
                                                    options: Q.options,
                                                    V6: Q.V6,
                                                    xE: v.xE,
                                                    kA: v.kA,
                                                    hf: P.hf,
                                                    Qra: Q.P,
                                                    ow: H,
                                                    i2: I,
                                                    pfa: n,
                                                    context: r
                                                });
                                                u = u ? {
                                                    submit: u.submit,
                                                    qqa: u.qqa,
                                                    rqa: u.rqa,
                                                    pqa: u.pqa,
                                                    sqa: u.sqa
                                                } : void 0;
                                                q = {
                                                    minWidth: M,
                                                    minHeight: V,
                                                    ...v4({
                                                        layout: "vertical",
                                                        direction: aa,
                                                        background: A,
                                                        P: x,
                                                        border: y,
                                                        cells: [K, Q, ...JKb({
                                                            tM: u,
                                                            direction: C,
                                                            messages: p,
                                                            yr: z.yr,
                                                            $w: z.footer.label,
                                                            YB: E,
                                                            status: q.pj.status,
                                                            i2: I && "edit" !== r.mode,
                                                            Q7a: t,
                                                            backgroundColor: H,
                                                            DO: v.DO
                                                        })].filter(vb)
                                                    }),
                                                    ref: n.root
                                                }
                                            } else q = { ...v4({
                                                    layout: "vertical",
                                                    direction: B4(C),
                                                    background: {
                                                        type: "color",
                                                        color: "#ffffff"
                                                    },
                                                    cells: []
                                                }),
                                                minWidth: z.minWidth,
                                                minHeight: z.minHeight
                                            };
                                            break a;
                                        default:
                                            throw new F(v);
                                    }
                                }
                                return q
                            },
                            pfa: n
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/453ec5ba2ec45fc0.js.map