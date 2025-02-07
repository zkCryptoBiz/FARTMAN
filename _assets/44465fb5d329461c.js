(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [26489], {

        /***/
        388770: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var csb = function(a) {
                        var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                        try {
                            const c = __c.et(a),
                                d = c instanceof __c.Qs ? c.Zq() : c;
                            return __c.js(b, e => {
                                e = __c.et(e);
                                e = e instanceof __c.Qs ? __c.SI(e, d) : e;
                                return Math.abs(__c.wt(e, d))
                            })
                        } catch (c) {
                            if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                            throw c;
                        }
                    },
                    dsb = function(a) {
                        return a.trim().split(/\s+/, 2).map(b => __c.ou(b)[0]).join("")
                    },
                    gsb = function(a = "") {
                        a = esb(a);
                        a = Math.floor(a() * fsb.length);
                        return fsb[a]
                    },
                    hsb = __webpack_require__(875604),
                    isb =
                    hsb.memo,
                    jsb = hsb.useId;
                var esb = __webpack_require__(503216);
                var ksb = __webpack_require__(443763),
                    mY = ksb.jsx,
                    lsb = ksb.jsxs;
                var msb = __webpack_require__,
                    nsb = msb(993864),
                    nY = msb.n_x(nsb)();
                __c.oY = {
                    xxsmall: 16,
                    xsmall: 24,
                    small: 32,
                    medium: 40,
                    large: 48,
                    xlarge: 64,
                    xxlarge: 80,
                    xxxlarge: 160
                };
                var fsb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                    try {
                        return __c.Xs(__c.Ws(a))
                    } catch (b) {
                        return "#8e8e8e"
                    }
                });
                var osb = isb(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        eQ: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    d ? (a = __c.et(d), a = a instanceof __c.Qs ? __c.at(a) : __c.Xs(a)) : a = e ? gsb(e) : "#8e8e8e";
                    var n = jsb();
                    let p;
                    switch (l) {
                        case "circle":
                            p = mY("defs", {
                                children: mY("clipPath", {
                                    id: n,
                                    children: mY("circle", {
                                        id: `${n}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            p = mY("defs", {
                                children: mY("clipPath", {
                                    id: n,
                                    children: mY("rect", {
                                        id: `${n}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new __c.F(l);
                    }
                    switch (l) {
                        case "circle":
                            n = mY("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: a,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${n})`,
                                stroke: c,
                                className: nY("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            n = mY("rect", {
                                width: "100%",
                                height: "100%",
                                fill: a,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${n})`,
                                stroke: c,
                                className: nY("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new __c.F(l);
                    }
                    return mY("span", {
                        role: f,
                        "aria-label": g,
                        className: nY("VaW8_A", {
                            cUFFRA: "square" === l
                        }),
                        ...m,
                        children: lsb("svg", {
                            className: h,
                            style: k,
                            children: [p, n, mY("text", {
                                x: "50%",
                                y: "50%",
                                "aria-hidden": "true",
                                textAnchor: "middle",
                                fill: csb(a),
                                fontWeight: "500",
                                fontSize: "50%",
                                children: mY("tspan", {
                                    dy: "0.36em",
                                    letterSpacing: "0.01rem",
                                    children: dsb(b).toUpperCase()
                                })
                            })]
                        })
                    })
                });
                var psb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var qsb = ({
                    borderColor: a,
                    fNa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => mY("span", {
                    className: nY(d, {
                        JwH6AA: a,
                        QJpRHw: !a
                    }),
                    style: {
                        backgroundImage: `url(${b})`,
                        borderColor: a && `${a}`,
                        ...e
                    },
                    role: f,
                    "aria-label": "img" === f ? c : void 0,
                    ...g
                });
                __c.rsb = ({
                    name: a,
                    rYa: b,
                    ariaLabel: c,
                    eQ: d,
                    backgroundColor: e,
                    borderColor: f,
                    Hq: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = nY("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: "square" === l
                    });
                    b = b || "presentation";
                    return g ? mY(qsb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        fNa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? mY(osb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        eQ: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : mY(qsb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        fNa: psb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/44465fb5d329461c.js.map