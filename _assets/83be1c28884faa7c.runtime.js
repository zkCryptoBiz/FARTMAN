(() => {
    "use strict";
    var e, r, t, n, f, s = {},
        i = {};

    function c(e) {
        var r = i[e];
        if (void 0 !== r) return r.exports;
        var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return s[e].call(t.exports, t, t.exports, c), t.loaded = !0, t.exports
    }
    c.m = s, c.amdD = function() {
        throw new Error("define cannot be used indirect")
    }, c.amdO = {}, e = [], c.O = (r, t, n, f) => {
        if (!t) {
            var s = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [t, n, f] = e[d], i = !0, a = 0; a < t.length; a++)
                    if ((!1 & f || s >= f) && Object.keys(c.O).every((e => c.O[e](t[a])))) t.splice(a--, 1);
                    else if (i = !1, f < s) s = f;
                if (i) {
                    e.splice(d--, 1);
                    var u = n();
                    if (void 0 !== u) r = u
                }
            }
            return r
        } else {
            f = f || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > f; d--) e[d] = e[d - 1];
            e[d] = [t, n, f]
        }
    }, c.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return c.d(r, {
            a: r
        }), r
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, c.t = function(e, n) {
        if (1 & n) e = this(e);
        if (8 & n) return e;
        if ("object" == typeof e && e) {
            if (4 & n && e.__esModule) return e;
            if (16 & n && "function" == typeof e.then) return e
        }
        var f = Object.create(null);
        c.r(f);
        var s = {};
        r = r || [null, t({}), t([]), t(t)];
        for (var i = 2 & n && e;
            "object" == typeof i && !~r.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach((r => s[r] = () => e[r]));
        return s.default = () => e, c.d(f, s), f
    }, c.d = (e, r) => {
        for (var t in r)
            if (c.o(r, t) && !c.o(e, t)) Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
    }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((r, t) => (c.f[t](e, r), r)), [])), c.u = e => {
        if (1587 === e) return "2e9b20fee25e43c2.js";
        if (50869 === e) return "1a4da80d1e145cab.js";
        if (8269 === e) return "c571a99a3a0c8cf8.vendor.js";
        if (79648 === e) return "2945e4594ee37c80.vendor.js";
        if (25486 === e) return "a0abe901a32242f1.js";
        if (68772 === e) return "7d7a4c96d5ccebb4.vendor.js";
        if (60336 === e) return "b20abdfdfdffcb8b.js";
        if (97703 === e) return "028d43556e84b929.js";
        if (4667 === e) return "36c088508f2394bb.js";
        if (23286 === e) return "a127e40d630061f0.js";
        if (32447 === e) return "ce09e7ccaeea2c2f.js";
        if (34874 === e) return "5f8d17541127a89d.js";
        if (7090 === e) return "fa6f43b8e5259b3d.js";
        if (89047 === e) return "646e8b622398a370.js";
        if (74734 === e) return "de3e2303537ed6f7.js";
        if (5366 === e) return "74ce29de77d76e4e.js";
        if (31485 === e) return "ad5ab8592495a2dd.js";
        if (41379 === e) return "7ff630f2d18158dc.js";
        if (52053 === e) return "c8dafb1c96f2f14e.js";
        if (983 === e) return "2eadb05715378ee5.js";
        if (48357 === e) return "066550fab5f6dc41.js";
        if (94465 === e) return "6ba7be9ed8c6c0c5.js";
        if (10947 === e) return "bb35a46c2374d6c1.js";
        if (71854 === e) return "b0e0d693ac19a729.js";
        if (11628 === e) return "d6b60209d30c6cf7.js";
        if (45858 === e) return "6ffaa8e5c3f1b0f2.js";
        if (6505 === e) return "df537f353e002f6a.js";
        if (97607 === e) return "d35ae7dd9c23ed6a.js";
        if (72246 === e) return "b2ea336cfc6ad001.js";
        if (18801 === e) return "26e8442a0266f317.js";
        if (44138 === e) return "474db51ef325daf7.js";
        if (16576 === e) return "1a733fbec09f7dbf.js";
        if (72677 === e) return "d7dc56478082c4dd.js";
        if (67287 === e) return "e93012025931d678.js";
        if (56971 === e) return "38c159e9308c6c46.js";
        if (2758 === e) return "26dae896152579c6.js";
        if (88706 === e) return "524232fd5b9415fd.js";
        if (82872 === e) return "56c5e0c007fb15e6.js";
        if (39368 === e) return "7c61b802070cb223.js";
        if (38829 === e) return "4fc2b335e6ac6106.js";
        if (46061 === e) return "1cbf9405b9f9f06b.js";
        if (47972 === e) return "fcb17d56cf242563.js";
        if (33939 === e) return "24642810dc05a578.js";
        if (31601 === e) return "a99e7f73e271ef4b.js";
        if (47628 === e) return "9fa4c2fb0b10a006.js";
        if (89717 === e) return "9b24309bdcddc320.js";
        if (30781 === e) return "ce6f7e6713247d44.js";
        if (24087 === e) return "9e22fe6139a0acba.js";
        if (54194 === e) return "f4e5f78417e4936d.js";
        if (57717 === e) return "cbc4a06a6ea30993.js";
        if (8229 === e) return "cb7e914ab6ae780f.js";
        if (71481 === e) return "e8140e94c282e5b1.js";
        if (98272 === e) return "844ed478d3b89822.js";
        if (53508 === e) return "dc284d6278bf8ae0.js";
        if (50205 === e) return "7213d1ed846aad19.vendor.js";
        if (83851 === e) return "1a21de23fd78518e.js";
        if (79262 === e) return "4af79bc129730425.vendor.js";
        if (41500 === e) return "193a6769f24f7257.js";
        if (77330 === e) return "f65aa83e7adbd161.vendor.js";
        if (51277 === e) return "84b4154fc2647695.js";
        if (46405 === e) return "42451c9b91cb1b56.js";
        if (57406 === e) return "9477f504566b6ee3.js";
        if (80368 === e) return "14fd6901b023eb15.js";
        if (71132 === e) return "dffd5869df5489da.js";
        if (24698 === e) return "d0e7d6ee2171bdb5.js";
        if (79395 === e) return "441b0e5ad14b9975.js";
        if (92780 === e) return "c43c94cd4190428e.js";
        if (35024 === e) return "a34c7be2f25c09ac.js";
        if (66966 === e) return "ae3c66015941e75d.js";
        if (20382 === e) return "3a883ecc16f9a5a6.js";
        if (47798 === e) return "69cb5a3f8b271938.js";
        if (87717 === e) return "fa8b67e47576b34d.vendor.js";
        if (14408 === e) return "1902dafbb7e066df.js";
        if (91969 === e) return "f389e3c96c27e3ae.js";
        if (26489 === e) return "44465fb5d329461c.js";
        if (4143 === e) return "a9c2584ff3783c8b.js";
        if (31898 === e) return "3152ee0720d6089d.js";
        if (55447 === e) return "f74352ba4597fea4.js";
        if (6566 === e) return "526371e4564fa14a.js";
        if (2142 === e) return "41ce289a06943691.js";
        if (49222 === e) return "dca059959c5d35c3.js";
        if (53684 === e) return "22669d65811efc2a.js";
        if (95665 === e) return "453ec5ba2ec45fc0.js";
        if (67766 === e) return "d8776b05c827ae5b.vendor.js";
        if (6908 === e) return "f6583819d7626471.js";
        if (68275 === e) return "cd06998042828915.js";
        if (12220 === e) return "d9f13544523179f4.js";
        if (14700 === e) return "716b7b4d2736c69c.js";
        if (69091 === e) return "97846a8e652154ce.js";
        if (4492 === e) return "5ac93953c1b41afe.js";
        if (27406 === e) return "12be714885e7e3c5.js";
        if (22543 === e) return "68bde30759f96a70.js";
        if (84283 === e) return "a6c553217c9b7190.js";
        if (50854 === e) return "62b6cf69d214c8d1.js";
        if (23731 === e) return "bf4b5483dc577640.js";
        if (81615 === e) return "69153f76472068a0.vendor.js";
        if (21354 === e) return "471e23592f9d4c2a.js";
        if (38701 === e) return "02f817daa08b4342.js";
        if (4411 === e) return "8f9333c8a4633404.js";
        if (80781 === e) return "de4790edb12ebf62.js";
        if (71327 === e) return "20b9e065e322a227.js";
        if (38226 === e) return "cf80d1a4741c9efa.js";
        if (4450 === e) return "e7d179b4f658c649.js";
        if (42911 === e) return "5578b49e19ae55e2.js";
        if (22104 === e) return "de76bf4f31671817.js";
        if (59927 === e) return "7705edd75c7b45f7.js";
        if (16674 === e) return "43009283d94e91e6.js";
        if (419 === e) return "2690d090f863c8db.js";
        if (83828 === e) return "67d999748e21c1da.js";
        if (20631 === e) return "35ddb482ea8705fc.js";
        if (28595 === e) return "5f688bae1acff436.vendor.js";
        if (15706 === e) return "e2a4693272f7ba69.js";
        if (81869 === e) return "4d642e0da072e6ae.js";
        if (49189 === e) return "14bb8a6ec2edfa75.js";
        if (23441 === e) return "1d420897567f9642.js";
        if (31923 === e) return "d4000802fdc8132f.js";
        if (78889 === e) return "b5a925d78db36459.js";
        if (39482 === e) return "d1975bf5996e2a09.js";
        if (21904 === e) return "80783ab675b4c39a.js";
        if (57437 === e) return "e3d12a0e3ccb3b2f.js";
        if (27013 === e) return "babe28eef6181c5b.js";
        if (71078 === e) return "3e035fad65e7f512.js";
        if (67592 === e) return "d842ddbf8d36eec7.js";
        if (46763 === e) return "d80891ce5a9fa566.js";
        if (20371 === e) return "d042f355db915e0b.js";
        if (83103 === e) return "76e1340056e42fc2.js";
        if (53607 === e) return "ab84efc461ad96aa.js";
        if (12188 === e) return "4881b9b4faa8c065.js";
        if (90364 === e) return "985237e871c81020.js";
        if (76420 === e) return "a95ed970f34cd3ff.js";
        if (69552 === e) return "aca8a4eabc258a65.js";
        if (34161 === e) return "e163982e1df8de12.js";
        if (29443 === e) return "bb8480a5fa8b4248.js";
        if (47831 === e) return "90fef122ae1b9855.js";
        if (73962 === e) return "1fad09549e0c648f.js";
        if (32758 === e) return "852cd88fbcb5da96.js";
        if (77533 === e) return "901dc162c5e5a92a.js";
        if (76889 === e) return "6bb13cebee6200bf.js";
        if (23496 === e) return "e8a09f7cf5326b35.js";
        if (16069 === e) return "ec548fff3e83ac20.js";
        if (81597 === e) return "2c660db4af9eaf00.js"
    }, c.miniCssF = e => {
        if (1587 === e) return "2e93ea3975d28fba.ltr.css";
        if (50869 === e) return "d7cf0aba64e1b2d4.ltr.css";
        if ({
                8269: 1,
                79648: 1,
                68772: 1,
                50205: 1,
                79262: 1,
                77330: 1,
                87717: 1,
                67766: 1,
                81615: 1,
                28595: 1
            }[e]) return "ef46db3751d8e999.vendor.ltr.css";
        if ({
                25486: 1,
                60336: 1,
                97703: 1,
                4667: 1,
                23286: 1,
                32447: 1,
                34874: 1,
                7090: 1,
                89047: 1,
                74734: 1,
                5366: 1,
                41379: 1,
                52053: 1,
                983: 1,
                48357: 1,
                10947: 1,
                71854: 1,
                11628: 1,
                45858: 1,
                6505: 1,
                97607: 1,
                72246: 1,
                18801: 1,
                44138: 1,
                16576: 1,
                72677: 1,
                67287: 1,
                56971: 1,
                2758: 1,
                88706: 1,
                82872: 1,
                39368: 1,
                46061: 1,
                47972: 1,
                33939: 1,
                31601: 1,
                47628: 1,
                89717: 1,
                30781: 1,
                24087: 1,
                54194: 1,
                57717: 1,
                8229: 1,
                83851: 1,
                41500: 1,
                51277: 1,
                46405: 1,
                80368: 1,
                71132: 1,
                24698: 1,
                79395: 1,
                92780: 1,
                66966: 1,
                47798: 1,
                31898: 1,
                55447: 1,
                6566: 1,
                2142: 1,
                49222: 1,
                53684: 1,
                95665: 1,
                6908: 1,
                68275: 1,
                14700: 1,
                69091: 1,
                4492: 1,
                27406: 1,
                22543: 1,
                84283: 1,
                50854: 1,
                21354: 1,
                4411: 1,
                80781: 1,
                38226: 1,
                4450: 1,
                42911: 1,
                22104: 1,
                59927: 1,
                16674: 1,
                419: 1,
                83828: 1,
                20631: 1,
                49189: 1,
                23441: 1,
                31923: 1,
                78889: 1,
                39482: 1,
                21904: 1,
                57437: 1,
                71078: 1,
                67592: 1,
                46763: 1,
                20371: 1,
                83103: 1,
                53607: 1,
                12188: 1,
                90364: 1,
                76420: 1,
                69552: 1,
                34161: 1,
                29443: 1,
                47831: 1,
                73962: 1,
                32758: 1,
                77533: 1,
                76889: 1,
                23496: 1,
                16069: 1,
                81597: 1
            }[e]) return "ef46db3751d8e999.ltr.css";
        if (31485 === e) return "5f1d4839e07de62c.ltr.css";
        if (94465 === e) return "c9bf091720f7f1c3.ltr.css";
        if (38829 === e) return "71dec1f5d11e3f66.ltr.css";
        if (71481 === e) return "f8678f5d2a496896.ltr.css";
        if (98272 === e) return "aed61a49fdfc513b.ltr.css";
        if (53508 === e) return "ca10385ab7f3657c.ltr.css";
        if (57406 === e) return "5b2241d885919c07.ltr.css";
        if (35024 === e) return "1ae932a138400a96.ltr.css";
        if (20382 === e) return "5b7fe8f909b06739.ltr.css";
        if (14408 === e) return "9094dc9ec76e31ae.ltr.css";
        if (91969 === e) return "924c43291449318d.ltr.css";
        if (26489 === e) return "5eb15c719412ac66.ltr.css";
        if (4143 === e) return "fbdc2fa6da953cbd.ltr.css";
        if (12220 === e) return "638e8938c76a575e.ltr.css";
        if (23731 === e) return "56f80e8f7b983062.ltr.css";
        if (38701 === e) return "102d37d51e0b816c.ltr.css";
        if (71327 === e) return "d3f86e5edcfa2e81.ltr.css";
        if (15706 === e) return "2ce5153862ce83bc.ltr.css";
        if (81869 === e) return "da210214fd5a61ff.ltr.css";
        if (27013 === e) return "13d99414f410f430.ltr.css"
    }, c.miniCssFRtl = e => {
        if (98581 === e) return "c166e5d20ad58f4e.runtime.rtl.css";
        if (69588 === e) return "c166e5d20ad58f4e.i3d79q.vendor.rtl.css";
        if (25436 === e) return "8e54262212aed57f.vendor.rtl.css";
        if (21389 === e) return "cb7d67131d5203c2.rtl.css";
        if (1587 === e) return "35e15520bdbbc6fc.rtl.css";
        if (50869 === e) return "cb3538416979fc60.rtl.css";
        if ({
                8269: 1,
                79648: 1,
                68772: 1,
                50205: 1,
                79262: 1,
                77330: 1,
                87717: 1,
                67766: 1,
                81615: 1,
                28595: 1
            }[e]) return "c166e5d20ad58f4e.vendor.rtl.css";
        if ({
                25486: 1,
                60336: 1,
                97703: 1,
                4667: 1,
                23286: 1,
                32447: 1,
                34874: 1,
                7090: 1,
                89047: 1,
                74734: 1,
                5366: 1,
                41379: 1,
                52053: 1,
                983: 1,
                48357: 1,
                10947: 1,
                71854: 1,
                11628: 1,
                45858: 1,
                6505: 1,
                97607: 1,
                72246: 1,
                18801: 1,
                44138: 1,
                16576: 1,
                72677: 1,
                67287: 1,
                56971: 1,
                2758: 1,
                88706: 1,
                82872: 1,
                39368: 1,
                46061: 1,
                47972: 1,
                33939: 1,
                31601: 1,
                47628: 1,
                89717: 1,
                30781: 1,
                24087: 1,
                54194: 1,
                57717: 1,
                8229: 1,
                83851: 1,
                41500: 1,
                51277: 1,
                46405: 1,
                80368: 1,
                71132: 1,
                24698: 1,
                79395: 1,
                92780: 1,
                66966: 1,
                47798: 1,
                31898: 1,
                55447: 1,
                6566: 1,
                2142: 1,
                49222: 1,
                53684: 1,
                95665: 1,
                6908: 1,
                68275: 1,
                14700: 1,
                69091: 1,
                4492: 1,
                27406: 1,
                22543: 1,
                84283: 1,
                50854: 1,
                21354: 1,
                4411: 1,
                80781: 1,
                38226: 1,
                4450: 1,
                42911: 1,
                22104: 1,
                59927: 1,
                16674: 1,
                419: 1,
                83828: 1,
                20631: 1,
                49189: 1,
                23441: 1,
                31923: 1,
                78889: 1,
                39482: 1,
                21904: 1,
                57437: 1,
                71078: 1,
                67592: 1,
                46763: 1,
                20371: 1,
                83103: 1,
                53607: 1,
                12188: 1,
                90364: 1,
                76420: 1,
                69552: 1,
                34161: 1,
                29443: 1,
                47831: 1,
                73962: 1,
                32758: 1,
                77533: 1,
                76889: 1,
                23496: 1,
                16069: 1,
                81597: 1
            }[e]) return "c166e5d20ad58f4e.rtl.css";
        if (31485 === e) return "b4bd268b7e5afaa4.rtl.css";
        if (94465 === e) return "49dcf4c456be0dd9.rtl.css";
        if (38829 === e) return "7cf7805937173758.rtl.css";
        if (71481 === e) return "29bdbb1d75c8c7a3.rtl.css";
        if (98272 === e) return "7dac84e36568326f.rtl.css";
        if (53508 === e) return "be92cdc2c813e15f.rtl.css";
        if (57406 === e) return "3759df5a77daebac.rtl.css";
        if (35024 === e) return "dd88d3697b44cbe1.rtl.css";
        if (20382 === e) return "b197b394e4f55ce1.rtl.css";
        if (14408 === e) return "918171a1aa694966.rtl.css";
        if (91969 === e) return "d41a1c13df702638.rtl.css";
        if (26489 === e) return "a7d46e6bdaad0422.rtl.css";
        if (4143 === e) return "624e4ad1fb844a15.rtl.css";
        if (12220 === e) return "1e246b15020f607d.rtl.css";
        if (23731 === e) return "ef2478b8e93e1183.rtl.css";
        if (38701 === e) return "b1f65af0ed259b26.rtl.css";
        if (71327 === e) return "834bca050b750fa4.rtl.css";
        if (15706 === e) return "b7f7194441bb238d.rtl.css";
        if (81869 === e) return "dd4f397bdc4982dc.rtl.css";
        if (27013 === e) return "b9ec1237e067a990.rtl.css"
    }, c.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), c.hmd = e => {
        if (!(e = Object.create(e)).children) e.children = [];
        return Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: () => {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), n = {}, f = "@canva/web:", c.l = (e, r, t, s) => {
        if (!n[e]) {
            var i, a;
            if (void 0 !== t)
                for (var u = document.getElementsByTagName("script"), d = 0; d < u.length; d++) {
                    var o = u[d];
                    if (o.getAttribute("src") == e || o.getAttribute("data-webpack") == f + t) {
                        i = o;
                        break
                    }
                }
            if (!i) {
                if (a = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, c.nc) i.setAttribute("nonce", c.nc);
                i.setAttribute("data-webpack", f + t), i.src = e
            }
            n[e] = [r];
            var l = (r, t) => {
                    i.onerror = i.onload = null, clearTimeout(b);
                    var f = n[e];
                    if (delete n[e], i.parentNode && i.parentNode.removeChild(i), f && f.forEach((e => e(t))), r) return r(t)
                },
                b = setTimeout(l.bind(null, void 0, {
                    type: "timeout",
                    target: i
                }), 12e4);
            i.onerror = l.bind(null, i.onerror), i.onload = l.bind(null, i.onload), a && document.head.appendChild(i)
        } else n[e].push(r)
    }, c.r = e => {
        if ("undefined" != typeof Symbol && Symbol.toStringTag) Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.nmd = e => {
        if (e.paths = [], !e.children) e.children = [];
        return e
    }, (() => {
        const e = c.e,
            r = function e(r, t, n) {
                return r().catch((function(f) {
                    return 0 === n ? Promise.reject(f) : (s = t, new Promise((function(e) {
                        setTimeout(e, s)
                    }))).then((function() {
                        return e(r, t, n - 1)
                    }));
                    var s
                }))
            };
        c.e = function(t) {
            return r((function() {
                return e(t)
            }), 1e3, 5)
        }
    })(), c.p = "", (() => {
        if (self.__batch_chunks__) ! function(e, r, t, n, f, s, i, c, a) {
            const u = e.l;
            let d = [],
                o = [];
            const l = [];
            for (const O of document.head.querySelectorAll('link[rel="prefetch"][href]')) {
                const e = O.getAttribute("href");
                e && l.push(e)
            }
            let b = e => document.head.appendChild(e);
            e.l = function(e, r, f, i) {
                for (let t = 0; t < l.length; t++)
                    if (l[t].endsWith(e)) return l.splice(t, 1), u(e, r, f, i);
                if (t) {
                    if (0 === d.length) Promise.resolve().then((() => {
                        k(d, p), d = [], h = 0
                    }));
                    const r = y(e);
                    if (d.length >= 1 && h + r > s || d.length >= n) k(d, p), d = [], h = 0;
                    h += r
                } else {
                    if (j++ < 10) return u(e, r, f, i);
                    if (0 === d.length) setTimeout((() => w(d, p)), 1)
                }
                d.push({
                    src: e,
                    callback: function(t) {
                        if ("load" === t.type) r(t);
                        else u(e, r, f, i)
                    },
                    originalLoad: () => {
                        u(e, r, f, i)
                    }
                })
            }, e.loadCss = function(e, r) {
                const f = e.getAttribute("href");
                if (b = r || b, t) {
                    if (0 === o.length) Promise.resolve().then((() => {
                        k(o, v), o = [], g = 0
                    }));
                    const e = y(f);
                    if (o.length >= 1 && g + e > s || o.length >= n) k(o, v), o = [], g = 0;
                    g += e
                } else {
                    if (m++ < 15) return r(e);
                    if (0 === o.length) setTimeout((() => w(o, v)), 1)
                }
                o.push({
                    src: f,
                    callback: t => {
                        if ("load" === t.type) e.onload && e.onload(t);
                        else r(e)
                    },
                    originalLoad: () => {
                        r(e)
                    }
                })
            };
            let j = 0,
                h = 0;

            function p(e, t) {
                const n = document.createElement("script");
                let f;
                const s = e => {
                    n.onerror = n.onload = null, clearTimeout(f), n.parentNode && n.parentNode.removeChild(n), t("string" == typeof e ? {
                        type: "error",
                        target: {}
                    } : e)
                };
                n.onload = n.onerror = s, n.src = e, n.async = !1, f = setTimeout((() => s({
                    type: "timeout",
                    target: n
                })), r), document.head.appendChild(n)
            }
            let m = 0,
                g = 0;

            function v(e, r) {
                const t = document.createElement("link");
                t.onload = t.onerror = e => r(e), t.href = e, t.rel = "stylesheet", b(t)
            }

            function y(e) {
                const r = f(),
                    t = e.substring(r.length);
                return t ? i[t] || 0 : 0
            }

            function _() {
                const e = f(),
                    r = new URL(window.location.href);
                if (null == e ? void 0 : e.startsWith("http")) {
                    const {
                        protocol: r,
                        host: t
                    } = new URL(e);
                    return `${r}//chunk-composing.${t.split(".").slice(-2).join(".")}`
                } else if (["localhost", "127.0.0.1"].includes(r.hostname) && r.searchParams.get("pageLoadWorkerUrl")) return r.searchParams.get("pageLoadWorkerUrl");
                else return r.origin
            }
            async function w(e, r) {
                const t = f();
                let u, d = 0,
                    o = [];
                try {
                    u = self.navigator.serviceWorker
                } catch {}
                const l = c && (null == u ? void 0 : u.controller) ? await async function(e) {
                    const r = await caches.open(a),
                        t = [];
                    for (const n of e)
                        if (await r.match(n.src)) n.originalLoad();
                        else t.push(n);
                    return t
                }(e) : e;
                for (const f of l) {
                    const e = f.src.substring(t.length),
                        r = e ? i[e] || 0 : 0;
                    if (o.length >= 1 && d + r > s || o.length >= n) b(o), o = [], d = 0;
                    o.push(f), d += r
                }

                function b(e) {
                    if (1 === e.length) return void e[0].originalLoad();
                    const n = _(),
                        f = e.map((({
                            src: e
                        }) => e.substring(t.length))).join("+");
                    r(`${n}/chunk-batch/${f}`, (r => {
                        for (const {
                                callback: t,
                                src: n
                            } of e) t({
                            type: r.type,
                            target: {
                                src: n,
                                href: n
                            }
                        })
                    }))
                }
                o.length && b(o), e.length = 0
            }

            function k(e, r) {
                if (0 === e.length) return;
                const t = f();
                if (1 !== e.length) r(`${_()}/chunk-batch/${e.map((({src:e})=>e.substring(t.length))).join("+")}`, (r => {
                    for (const {
                            callback: t,
                            src: n
                        } of e) t({
                        type: r.type,
                        target: {
                            src: n,
                            href: n
                        }
                    })
                }));
                else e[0].originalLoad()
            }
        }(c, 12e4, self.__sync_batch_chunks__, 40, (() => c.p), 10485760, {
            "d66c51e62dd623df.ltr.css": 463972,
            "8f0dc1630854d1a0.js": 15236326,
            "cb7d67131d5203c2.rtl.css": 463992,
            "83be1c28884faa7c.runtime.js": 73383,
            "a0684b0780c739e9.vendor.ltr.css": 15361,
            "1e90d697c2926901.vendor.js": 2026309,
            "8e54262212aed57f.vendor.rtl.css": 15361,
            "6b0b6cd7b4380852.i3d79q.vendor.js": 703374,
            "2e93ea3975d28fba.ltr.css": 356,
            "2e9b20fee25e43c2.js": 14665,
            "35e15520bdbbc6fc.rtl.css": 356,
            "d7cf0aba64e1b2d4.ltr.css": 248,
            "1a4da80d1e145cab.js": 5431,
            "cb3538416979fc60.rtl.css": 248,
            "c571a99a3a0c8cf8.vendor.js": 158499,
            "2945e4594ee37c80.vendor.js": 85008,
            "a0abe901a32242f1.js": 88160,
            "7d7a4c96d5ccebb4.vendor.js": 125594,
            "b20abdfdfdffcb8b.js": 68617,
            "028d43556e84b929.js": 25048,
            "36c088508f2394bb.js": 226404,
            "a127e40d630061f0.js": 53594,
            "ce09e7ccaeea2c2f.js": 71414,
            "5f8d17541127a89d.js": 119282,
            "646e8b622398a370.js": 57389,
            "fa6f43b8e5259b3d.js": 872,
            "de3e2303537ed6f7.js": 13028,
            "74ce29de77d76e4e.js": 5599,
            "5f1d4839e07de62c.ltr.css": 2196,
            "ad5ab8592495a2dd.js": 24403,
            "b4bd268b7e5afaa4.rtl.css": 2196,
            "7ff630f2d18158dc.js": 90036,
            "c8dafb1c96f2f14e.js": 16086,
            "2eadb05715378ee5.js": 21543,
            "066550fab5f6dc41.js": 76853,
            "1a733fbec09f7dbf.js": 163123,
            "c9bf091720f7f1c3.ltr.css": 233,
            "6ba7be9ed8c6c0c5.js": 244752,
            "49dcf4c456be0dd9.rtl.css": 233,
            "71dec1f5d11e3f66.ltr.css": 360,
            "4fc2b335e6ac6106.js": 661557,
            "7cf7805937173758.rtl.css": 360,
            "474db51ef325daf7.js": 1435,
            "26dae896152579c6.js": 265116,
            "e93012025931d678.js": 41354,
            "6ffaa8e5c3f1b0f2.js": 137149,
            "bb35a46c2374d6c1.js": 20366,
            "38c159e9308c6c46.js": 2161,
            "26e8442a0266f317.js": 5147,
            "7c61b802070cb223.js": 71747,
            "d6b60209d30c6cf7.js": 6322,
            "b0e0d693ac19a729.js": 10148,
            "56c5e0c007fb15e6.js": 27157,
            "524232fd5b9415fd.js": 10854,
            "1cbf9405b9f9f06b.js": 99515,
            "df537f353e002f6a.js": 1103,
            "d35ae7dd9c23ed6a.js": 24261,
            "fcb17d56cf242563.js": 132853,
            "24642810dc05a578.js": 131259,
            "a99e7f73e271ef4b.js": 78909,
            "9fa4c2fb0b10a006.js": 250025,
            "ce6f7e6713247d44.js": 934,
            "cbc4a06a6ea30993.js": 316535,
            "9e22fe6139a0acba.js": 8299,
            "f4e5f78417e4936d.js": 74435,
            "9b24309bdcddc320.js": 7765,
            "f8678f5d2a496896.ltr.css": 355,
            "e8140e94c282e5b1.js": 270505,
            "29bdbb1d75c8c7a3.rtl.css": 355,
            "cb7e914ab6ae780f.js": 76501,
            "aed61a49fdfc513b.ltr.css": 355,
            "844ed478d3b89822.js": 287519,
            "7dac84e36568326f.rtl.css": 355,
            "ca10385ab7f3657c.ltr.css": 354,
            "dc284d6278bf8ae0.js": 66847,
            "be92cdc2c813e15f.rtl.css": 354,
            "1a21de23fd78518e.js": 3440,
            "193a6769f24f7257.js": 202229,
            "7213d1ed846aad19.vendor.js": 12754,
            "4af79bc129730425.vendor.js": 18823,
            "84b4154fc2647695.js": 204499,
            "f65aa83e7adbd161.vendor.js": 13455,
            "42451c9b91cb1b56.js": 375166,
            "5b2241d885919c07.ltr.css": 360,
            "9477f504566b6ee3.js": 173725,
            "3759df5a77daebac.rtl.css": 360,
            "14fd6901b023eb15.js": 244025,
            "dffd5869df5489da.js": 63177,
            "d0e7d6ee2171bdb5.js": 12244,
            "441b0e5ad14b9975.js": 40240,
            "1ae932a138400a96.ltr.css": 11013,
            "a34c7be2f25c09ac.js": 643249,
            "dd88d3697b44cbe1.rtl.css": 11013,
            "ae3c66015941e75d.js": 40935,
            "5b7fe8f909b06739.ltr.css": 913,
            "3a883ecc16f9a5a6.js": 60610,
            "b197b394e4f55ce1.rtl.css": 913,
            "fa8b67e47576b34d.vendor.js": 648073,
            "9094dc9ec76e31ae.ltr.css": 446,
            "1902dafbb7e066df.js": 20142,
            "918171a1aa694966.rtl.css": 446,
            "69cb5a3f8b271938.js": 43952,
            "924c43291449318d.ltr.css": 263,
            "f389e3c96c27e3ae.js": 10573,
            "d41a1c13df702638.rtl.css": 263,
            "5eb15c719412ac66.ltr.css": 3164,
            "44465fb5d329461c.js": 72024,
            "a7d46e6bdaad0422.rtl.css": 3164,
            "fbdc2fa6da953cbd.ltr.css": 5920,
            "a9c2584ff3783c8b.js": 227712,
            "624e4ad1fb844a15.rtl.css": 5920,
            "f74352ba4597fea4.js": 233574,
            "3152ee0720d6089d.js": 11182,
            "526371e4564fa14a.js": 85345,
            "dca059959c5d35c3.js": 177777,
            "453ec5ba2ec45fc0.js": 474249,
            "22669d65811efc2a.js": 30115,
            "d8776b05c827ae5b.vendor.js": 919496,
            "638e8938c76a575e.ltr.css": 412,
            "d9f13544523179f4.js": 67911,
            "1e246b15020f607d.rtl.css": 414,
            "97846a8e652154ce.js": 16940,
            "cd06998042828915.js": 38841,
            "f6583819d7626471.js": 17237,
            "716b7b4d2736c69c.js": 45946,
            "5ac93953c1b41afe.js": 9280,
            "12be714885e7e3c5.js": 3575,
            "a6c553217c9b7190.js": 70586,
            "35ddb482ea8705fc.js": 9883,
            "67d999748e21c1da.js": 10222,
            "62b6cf69d214c8d1.js": 14492,
            "69153f76472068a0.vendor.js": 29676,
            "102d37d51e0b816c.ltr.css": 127227,
            "02f817daa08b4342.js": 3062728,
            "b1f65af0ed259b26.rtl.css": 127238,
            "56f80e8f7b983062.ltr.css": 2486,
            "bf4b5483dc577640.js": 216287,
            "ef2478b8e93e1183.rtl.css": 2486,
            "471e23592f9d4c2a.js": 37311,
            "5f688bae1acff436.vendor.js": 92098,
            "2ce5153862ce83bc.ltr.css": 27282,
            "e2a4693272f7ba69.js": 412809,
            "b7f7194441bb238d.rtl.css": 27282,
            "da210214fd5a61ff.ltr.css": 9349,
            "4d642e0da072e6ae.js": 234870,
            "dd4f397bdc4982dc.rtl.css": 9349,
            "13d99414f410f430.ltr.css": 319,
            "babe28eef6181c5b.js": 5625,
            "b9ec1237e067a990.rtl.css": 319,
            "3e035fad65e7f512.js": 209141,
            "d842ddbf8d36eec7.js": 3316,
            "d80891ce5a9fa566.js": 68023,
            "d042f355db915e0b.js": 229737,
            "76e1340056e42fc2.js": 299029,
            "ab84efc461ad96aa.js": 102754,
            "4881b9b4faa8c065.js": 561089,
            "985237e871c81020.js": 46329,
            "a95ed970f34cd3ff.js": 214698,
            "aca8a4eabc258a65.js": 4456,
            "e163982e1df8de12.js": 2785,
            "bb8480a5fa8b4248.js": 1496,
            "90fef122ae1b9855.js": 3787,
            "1fad09549e0c648f.js": 2749,
            "852cd88fbcb5da96.js": 2614,
            "901dc162c5e5a92a.js": 2048,
            "6bb13cebee6200bf.js": 2759,
            "e8a09f7cf5326b35.js": 3036,
            "ec548fff3e83ac20.js": 4016,
            "2c660db4af9eaf00.js": 6118,
            "14bb8a6ec2edfa75.js": 2854,
            "1d420897567f9642.js": 4390,
            "d4000802fdc8132f.js": 4851,
            "b5a925d78db36459.js": 3101,
            "d1975bf5996e2a09.js": 11030,
            "8f9333c8a4633404.js": 11265,
            "de4790edb12ebf62.js": 34831,
            "d3f86e5edcfa2e81.ltr.css": 6124,
            "20b9e065e322a227.js": 63241,
            "834bca050b750fa4.rtl.css": 6124,
            "cf80d1a4741c9efa.js": 59585,
            "e7d179b4f658c649.js": 1945,
            "5578b49e19ae55e2.js": 202110,
            "80783ab675b4c39a.js": 6517,
            "e3d12a0e3ccb3b2f.js": 38347,
            "de76bf4f31671817.js": 1428
        }, self.__check_cache_batch_chunks__, "assets-2")
    })(), (() => {
        const e = JSON.parse('{"2372":81869,"6948":80368,"20467":48357,"22335":34874,"32282":49222,"37489":60336,"38429":74734,"43459":4492,"61228":47972,"62516":4143,"64790":57406,"83205":78889,"84304":34161,"96803":39482,"106951":31923,"107274":53607,"111592":69552,"130253":21904,"134787":419,"136050":41500,"141620":5366,"144616":68772,"160813":84283,"166767":66966,"201096":8269,"204610":67592,"208016":20382,"216266":51277,"218500":22104,"244978":21354,"260806":89047,"261460":97703,"262921":98272,"271969":42911,"275857":23731,"290881":35024,"290924":92780,"315983":50854,"336019":71078,"341476":76889,"343957":52053,"349411":57717,"351398":31485,"399074":15706,"400461":49189,"422959":12188,"429172":69091,"432464":80781,"438339":47831,"449347":73962,"464338":90364,"474513":16674,"519428":25486,"537666":95665,"551499":4411,"552476":71481,"573584":38701,"577944":4450,"603425":6566,"617548":23286,"627433":28595,"629131":79395,"659396":23496,"661584":77533,"662806":47628,"666116":41379,"676145":46061,"688883":91969,"694036":46763,"701273":71132,"707304":32758,"710996":55447,"731709":83103,"735386":20371,"740421":20631,"768853":76420,"772794":57437,"777826":4667,"788691":46405,"814689":38226,"836330":50869,"848004":71327,"881919":16069,"888869":14408,"900828":29443,"907554":67766,"926002":23441,"959334":81597,"989577":983,"998639":59927}'),
            r = JSON.parse('{"419":[],"983":[],"1587":[],"2142":[],"2758":[18801,44138,45858,7090],"4143":[26489],"4411":[],"4450":[],"4492":[],"4667":[],"5366":[],"6505":[],"6566":[31898],"6908":[],"7090":[],"8229":[10947,97607],"8269":[],"10947":[94465],"11628":[71854],"12188":[27013],"12220":[6908],"14408":[47798,87717],"14700":[68275],"15706":[12220,26489,38701],"16069":[],"16576":[71854,94465],"16674":[],"18801":[],"20371":[27013],"20382":[],"20631":[83828],"21354":[],"21389":[],"21904":[42911],"22104":[],"22543":[],"23286":[],"23441":[],"23496":[],"23731":[],"24087":[],"24698":[],"25436":[],"25486":[79648],"26489":[],"27013":[87717],"27406":[],"28595":[],"29443":[],"30781":[45858,88706,89717],"31485":[],"31601":[33939],"31898":[],"31923":[],"32447":[],"32758":[],"33939":[94465],"34161":[],"34874":[23286,32447],"35024":[],"38226":[],"38701":[1587,21354,22543,23731,27406,53684,81615],"38829":[11628,16576,2758,39368,56971,6505,67287,72246,72677,82872,88706,97607],"39368":[94465],"39482":[],"41379":[],"41500":[18801,41379,53508,54194,56971,79262,83851],"42911":[],"44138":[],"45858":[10947],"46061":[38829],"46405":[11628,16576,45858,54194,82872,83851,88706],"46763":[27013],"47628":[10947,16576,31601,44138,56971,97607],"47798":[],"47831":[],"47972":[38829],"48357":[],"49189":[],"49222":[2142],"50205":[],"50854":[27406],"50869":[1587],"51277":[18801,41379,53508,54194,56971,77330,83851],"52053":[],"53508":[11628,94465,983],"53607":[27013],"53684":[],"54194":[33939],"55447":[31898],"56971":[],"57406":[2758,39368,56971,6505,67287,71854,72677,88706],"57437":[],"57717":[16576,24087,2758,30781,39368,54194,56971,72246,72677],"59927":[],"60336":[],"66966":[24698],"67287":[48357,94465],"67592":[],"67766":[],"68275":[6908],"68772":[],"69091":[12220,14700],"69552":[],"69588":[],"71078":[27013],"71132":[2758,31601,56971,67287,89717,97607],"71327":[],"71481":[16576,24087,2758,39368,56971,6505,67287,72677,8229,89717],"71854":[],"72246":[94465],"72677":[],"73962":[],"74734":[],"76420":[27013],"76889":[],"77330":[50205],"77533":[],"78889":[],"79262":[50205],"79395":[24698],"79648":[],"80368":[16576,18801,30781,39368,44138,56971,7090,8229],"80781":[],"81597":[],"81615":[],"81869":[12220,14700,38701,83828],"82872":[94465],"83103":[27013],"83828":[68275],"83851":[],"84283":[22543,27406],"87717":[],"88706":[],"89047":[7090],"89717":[],"90364":[27013],"91969":[47798,87717],"92780":[],"94465":[32447],"95665":[2142,53684],"97607":[94465],"97703":[],"98272":[16576,24087,2758,39368,56971,6505,67287,72677,8229,89717]}'),
            t = (e, n, f) => {
                if (!f.has(e)) return f.add(e), r[e].forEach((e => t(e, n, f))), n.push(e), n
            };
        c.me = function(r) {
            const n = e[r];
            if (null == n) return Promise.resolve(c(r));
            const f = t(n, [], new Set);
            return Promise.all(f.map((e => c.e(e)))).then((() => c(r)))
        }
    })(), (() => {
        const e = {};
        c.f.locale = function(r, t) {
            ! function(e, r, t) {
                if (null == r[e]) {
                    const t = self.cmsg;
                    if (!t || !t.assets) return;
                    const n = t.loaded,
                        f = t.locale || "en";
                    if (n && n[e + "_" + f]) return;
                    const s = t.assets[f] && t.assets[f][e] && t.assets[f][e].js;
                    if (!s) return;
                    r[e] = Promise.all(s.map((t => new Promise(((n, f) => {
                        const s = c.p + t;
                        c.l(s, (s => {
                            if ("load" === s.type) r[e] = 0, n();
                            else delete r[e], f(new Error(`Fail to load message files@${t}`))
                        }), "ensure-locale-" + e, e)
                    })))))
                }
                const n = r[e];
                if (n) t.push(n)
            }(r, e, t)
        }
    })(), (() => {
        let e = "undefined" != typeof self && void 0 !== self.document ? self.document.body.parentElement.getAttribute("dir") : "ltr";
        if ("ltr" !== e && "rtl" !== e) console.warn("Could not determine the direction of text, please check that the dir attribute is set on the html tag"), e = "ltr";
        if ("rtl" === e) c.miniCssF = c.miniCssFRtl
    })(), (() => {
        if ("undefined" != typeof document) {
            var e = e => new Promise(((r, t) => {
                    var n = c.miniCssF(e),
                        f = c.p + n;
                    if (((e, r) => {
                            for (var t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
                                var f = (i = t[n]).getAttribute("data-href") || i.getAttribute("href");
                                if ("stylesheet" === i.rel && (f === e || f === r)) return i
                            }
                            var s = document.getElementsByTagName("style");
                            for (n = 0; n < s.length; n++) {
                                var i;
                                if ((f = (i = s[n]).getAttribute("data-href")) === e || f === r) return i
                            }
                        })(n, f)) return r();
                    ((e, r, t, n, f) => {
                        var s = document.createElement("link");
                        s.rel = "stylesheet", s.type = "text/css", s.onerror = s.onload = t => {
                                if (s.onerror = s.onload = null, "load" === t.type) n();
                                else {
                                    var i = t && ("load" === t.type ? "missing" : t.type),
                                        c = t && t.target && t.target.href || r,
                                        a = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                                    if (a.code = "CSS_CHUNK_LOAD_FAILED", a.type = i, a.request = c, s.parentNode) s.parentNode.removeChild(s);
                                    f(a)
                                }
                            }, s.href = r,
                            function(e) {
                                const r = e => {
                                    document.head.appendChild(e)
                                };
                                if (c.loadCss) c.loadCss(e, r);
                                else r(e)
                            }(s)
                    })(e, f, 0, r, t)
                })),
                r = {
                    98581: 0
                };
            c.f.miniCss = (t, n) => {
                if (r[t]) n.push(r[t]);
                else if (0 !== r[t] && {
                        1587: 1,
                        4143: 1,
                        12220: 1,
                        14408: 1,
                        15706: 1,
                        20382: 1,
                        23731: 1,
                        26489: 1,
                        27013: 1,
                        31485: 1,
                        35024: 1,
                        38701: 1,
                        38829: 1,
                        50869: 1,
                        53508: 1,
                        57406: 1,
                        71327: 1,
                        71481: 1,
                        81869: 1,
                        91969: 1,
                        94465: 1,
                        98272: 1
                    }[t]) n.push(r[t] = e(t).then((() => {
                    r[t] = 0
                }), (e => {
                    throw delete r[t], e
                })))
            }
        }
    })(), (() => {
        var e = {
            98581: 0
        };
        c.f.j = (r, t) => {
            var n = c.o(e, r) ? e[r] : void 0;
            if (0 !== n)
                if (n) t.push(n[2]);
                else if (98581 != r) {
                var f = new Promise(((t, f) => n = e[r] = [t, f]));
                t.push(n[2] = f);
                var s = c.p + c.u(r),
                    i = new Error;
                c.l(s, (t => {
                    if (c.o(e, r)) {
                        if (0 !== (n = e[r])) e[r] = void 0;
                        if (n) {
                            var f = t && ("load" === t.type ? "missing" : t.type),
                                s = t && t.target && t.target.src;
                            i.message = "Loading chunk " + r + " failed.\n(" + f + ": " + s + ")", i.name = "ChunkLoadError", i.type = f, i.request = s, n[1](i)
                        }
                    }
                }), "chunk-" + r, r)
            } else e[r] = 0
        }, c.O.j = r => 0 === e[r];
        var r = (r, t) => {
                var n, f, [s, i, a] = t,
                    u = 0;
                if (s.some((r => 0 !== e[r]))) {
                    for (n in i)
                        if (c.o(i, n)) c.m[n] = i[n];
                    if (a) var d = a(c)
                }
                if (r) r(t);
                for (; u < s.length; u++) {
                    if (f = s[u], c.o(e, f) && e[f]) e[f][0]();
                    e[f] = 0
                }
                return c.O(d)
            },
            t = self.webpackChunk_canva_web = self.webpackChunk_canva_web || [];
        t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
    })()
})();
//# sourceMappingURL=sourcemaps/83be1c28884faa7c.runtime.js.map