var tg = t => {
    throw TypeError(t)
}
;
var Fc = (t, e, r) => e.has(t) || tg("Cannot " + r);
var P = (t, e, r) => (Fc(t, e, "read from private field"),
r ? r.call(t) : e.get(t))
  , ye = (t, e, r) => e.has(t) ? tg("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r)
  , te = (t, e, r, i) => (Fc(t, e, "write to private field"),
i ? i.call(t, r) : e.set(t, r),
r)
  , Pe = (t, e, r) => (Fc(t, e, "access private method"),
r);
var Ka = (t, e, r, i) => ({
    set _(a) {
        te(t, e, a, r)
    },
    get _() {
        return P(t, e, i)
    }
});
function $S(t, e) {
    for (var r = 0; r < e.length; r++) {
        const i = e[r];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const a in i)
                if (a !== "default" && !(a in t)) {
                    const u = Object.getOwnPropertyDescriptor(i, a);
                    u && Object.defineProperty(t, a, u.get ? u : {
                        enumerable: !0,
                        get: () => i[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        i(a);
    new MutationObserver(a => {
        for (const u of a)
            if (u.type === "childList")
                for (const c of u.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && i(c)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(a) {
        const u = {};
        return a.integrity && (u.integrity = a.integrity),
        a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? u.credentials = "include" : a.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin",
        u
    }
    function i(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const u = r(a);
        fetch(a.href, u)
    }
}
)();
function zv(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Vc = {
    exports: {}
}
  , Yi = {}
  , Bc = {
    exports: {}
}
  , ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ng;
function HS() {
    if (ng)
        return ke;
    ng = 1;
    var t = Symbol.for("react.element")
      , e = Symbol.for("react.portal")
      , r = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , a = Symbol.for("react.profiler")
      , u = Symbol.for("react.provider")
      , c = Symbol.for("react.context")
      , f = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , g = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function w(A) {
        return A === null || typeof A != "object" ? null : (A = y && A[y] || A["@@iterator"],
        typeof A == "function" ? A : null)
    }
    var k = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , x = Object.assign
      , b = {};
    function S(A, z, ce) {
        this.props = A,
        this.context = z,
        this.refs = b,
        this.updater = ce || k
    }
    S.prototype.isReactComponent = {},
    S.prototype.setState = function(A, z) {
        if (typeof A != "object" && typeof A != "function" && A != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, A, z, "setState")
    }
    ,
    S.prototype.forceUpdate = function(A) {
        this.updater.enqueueForceUpdate(this, A, "forceUpdate")
    }
    ;
    function R() {}
    R.prototype = S.prototype;
    function B(A, z, ce) {
        this.props = A,
        this.context = z,
        this.refs = b,
        this.updater = ce || k
    }
    var M = B.prototype = new R;
    M.constructor = B,
    x(M, S.prototype),
    M.isPureReactComponent = !0;
    var j = Array.isArray
      , U = Object.prototype.hasOwnProperty
      , Y = {
        current: null
    }
      , ee = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function N(A, z, ce) {
        var fe, be = {}, Ce = null, xe = null;
        if (z != null)
            for (fe in z.ref !== void 0 && (xe = z.ref),
            z.key !== void 0 && (Ce = "" + z.key),
            z)
                U.call(z, fe) && !ee.hasOwnProperty(fe) && (be[fe] = z[fe]);
        var Ne = arguments.length - 2;
        if (Ne === 1)
            be.children = ce;
        else if (1 < Ne) {
            for (var De = Array(Ne), rt = 0; rt < Ne; rt++)
                De[rt] = arguments[rt + 2];
            be.children = De
        }
        if (A && A.defaultProps)
            for (fe in Ne = A.defaultProps,
            Ne)
                be[fe] === void 0 && (be[fe] = Ne[fe]);
        return {
            $$typeof: t,
            type: A,
            key: Ce,
            ref: xe,
            props: be,
            _owner: Y.current
        }
    }
    function q(A, z) {
        return {
            $$typeof: t,
            type: A.type,
            key: z,
            ref: A.ref,
            props: A.props,
            _owner: A._owner
        }
    }
    function Q(A) {
        return typeof A == "object" && A !== null && A.$$typeof === t
    }
    function J(A) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + A.replace(/[=:]/g, function(ce) {
            return z[ce]
        })
    }
    var $ = /\/+/g;
    function re(A, z) {
        return typeof A == "object" && A !== null && A.key != null ? J("" + A.key) : z.toString(36)
    }
    function Te(A, z, ce, fe, be) {
        var Ce = typeof A;
        (Ce === "undefined" || Ce === "boolean") && (A = null);
        var xe = !1;
        if (A === null)
            xe = !0;
        else
            switch (Ce) {
            case "string":
            case "number":
                xe = !0;
                break;
            case "object":
                switch (A.$$typeof) {
                case t:
                case e:
                    xe = !0
                }
            }
        if (xe)
            return xe = A,
            be = be(xe),
            A = fe === "" ? "." + re(xe, 0) : fe,
            j(be) ? (ce = "",
            A != null && (ce = A.replace($, "$&/") + "/"),
            Te(be, z, ce, "", function(rt) {
                return rt
            })) : be != null && (Q(be) && (be = q(be, ce + (!be.key || xe && xe.key === be.key ? "" : ("" + be.key).replace($, "$&/") + "/") + A)),
            z.push(be)),
            1;
        if (xe = 0,
        fe = fe === "" ? "." : fe + ":",
        j(A))
            for (var Ne = 0; Ne < A.length; Ne++) {
                Ce = A[Ne];
                var De = fe + re(Ce, Ne);
                xe += Te(Ce, z, ce, De, be)
            }
        else if (De = w(A),
        typeof De == "function")
            for (A = De.call(A),
            Ne = 0; !(Ce = A.next()).done; )
                Ce = Ce.value,
                De = fe + re(Ce, Ne++),
                xe += Te(Ce, z, ce, De, be);
        else if (Ce === "object")
            throw z = String(A),
            Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
        return xe
    }
    function pe(A, z, ce) {
        if (A == null)
            return A;
        var fe = []
          , be = 0;
        return Te(A, fe, "", "", function(Ce) {
            return z.call(ce, Ce, be++)
        }),
        fe
    }
    function he(A) {
        if (A._status === -1) {
            var z = A._result;
            z = z(),
            z.then(function(ce) {
                (A._status === 0 || A._status === -1) && (A._status = 1,
                A._result = ce)
            }, function(ce) {
                (A._status === 0 || A._status === -1) && (A._status = 2,
                A._result = ce)
            }),
            A._status === -1 && (A._status = 0,
            A._result = z)
        }
        if (A._status === 1)
            return A._result.default;
        throw A._result
    }
    var de = {
        current: null
    }
      , V = {
        transition: null
    }
      , le = {
        ReactCurrentDispatcher: de,
        ReactCurrentBatchConfig: V,
        ReactCurrentOwner: Y
    };
    function X() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return ke.Children = {
        map: pe,
        forEach: function(A, z, ce) {
            pe(A, function() {
                z.apply(this, arguments)
            }, ce)
        },
        count: function(A) {
            var z = 0;
            return pe(A, function() {
                z++
            }),
            z
        },
        toArray: function(A) {
            return pe(A, function(z) {
                return z
            }) || []
        },
        only: function(A) {
            if (!Q(A))
                throw Error("React.Children.only expected to receive a single React element child.");
            return A
        }
    },
    ke.Component = S,
    ke.Fragment = r,
    ke.Profiler = a,
    ke.PureComponent = B,
    ke.StrictMode = i,
    ke.Suspense = h,
    ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le,
    ke.act = X,
    ke.cloneElement = function(A, z, ce) {
        if (A == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
        var fe = x({}, A.props)
          , be = A.key
          , Ce = A.ref
          , xe = A._owner;
        if (z != null) {
            if (z.ref !== void 0 && (Ce = z.ref,
            xe = Y.current),
            z.key !== void 0 && (be = "" + z.key),
            A.type && A.type.defaultProps)
                var Ne = A.type.defaultProps;
            for (De in z)
                U.call(z, De) && !ee.hasOwnProperty(De) && (fe[De] = z[De] === void 0 && Ne !== void 0 ? Ne[De] : z[De])
        }
        var De = arguments.length - 2;
        if (De === 1)
            fe.children = ce;
        else if (1 < De) {
            Ne = Array(De);
            for (var rt = 0; rt < De; rt++)
                Ne[rt] = arguments[rt + 2];
            fe.children = Ne
        }
        return {
            $$typeof: t,
            type: A.type,
            key: be,
            ref: Ce,
            props: fe,
            _owner: xe
        }
    }
    ,
    ke.createContext = function(A) {
        return A = {
            $$typeof: c,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        A.Provider = {
            $$typeof: u,
            _context: A
        },
        A.Consumer = A
    }
    ,
    ke.createElement = N,
    ke.createFactory = function(A) {
        var z = N.bind(null, A);
        return z.type = A,
        z
    }
    ,
    ke.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ke.forwardRef = function(A) {
        return {
            $$typeof: f,
            render: A
        }
    }
    ,
    ke.isValidElement = Q,
    ke.lazy = function(A) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: A
            },
            _init: he
        }
    }
    ,
    ke.memo = function(A, z) {
        return {
            $$typeof: m,
            type: A,
            compare: z === void 0 ? null : z
        }
    }
    ,
    ke.startTransition = function(A) {
        var z = V.transition;
        V.transition = {};
        try {
            A()
        } finally {
            V.transition = z
        }
    }
    ,
    ke.unstable_act = X,
    ke.useCallback = function(A, z) {
        return de.current.useCallback(A, z)
    }
    ,
    ke.useContext = function(A) {
        return de.current.useContext(A)
    }
    ,
    ke.useDebugValue = function() {}
    ,
    ke.useDeferredValue = function(A) {
        return de.current.useDeferredValue(A)
    }
    ,
    ke.useEffect = function(A, z) {
        return de.current.useEffect(A, z)
    }
    ,
    ke.useId = function() {
        return de.current.useId()
    }
    ,
    ke.useImperativeHandle = function(A, z, ce) {
        return de.current.useImperativeHandle(A, z, ce)
    }
    ,
    ke.useInsertionEffect = function(A, z) {
        return de.current.useInsertionEffect(A, z)
    }
    ,
    ke.useLayoutEffect = function(A, z) {
        return de.current.useLayoutEffect(A, z)
    }
    ,
    ke.useMemo = function(A, z) {
        return de.current.useMemo(A, z)
    }
    ,
    ke.useReducer = function(A, z, ce) {
        return de.current.useReducer(A, z, ce)
    }
    ,
    ke.useRef = function(A) {
        return de.current.useRef(A)
    }
    ,
    ke.useState = function(A) {
        return de.current.useState(A)
    }
    ,
    ke.useSyncExternalStore = function(A, z, ce) {
        return de.current.useSyncExternalStore(A, z, ce)
    }
    ,
    ke.useTransition = function() {
        return de.current.useTransition()
    }
    ,
    ke.version = "18.3.1",
    ke
}
var rg;
function hf() {
    return rg || (rg = 1,
    Bc.exports = HS()),
    Bc.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sg;
function qS() {
    if (sg)
        return Yi;
    sg = 1;
    var t = hf()
      , e = Symbol.for("react.element")
      , r = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , u = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function c(f, h, m) {
        var g, y = {}, w = null, k = null;
        m !== void 0 && (w = "" + m),
        h.key !== void 0 && (w = "" + h.key),
        h.ref !== void 0 && (k = h.ref);
        for (g in h)
            i.call(h, g) && !u.hasOwnProperty(g) && (y[g] = h[g]);
        if (f && f.defaultProps)
            for (g in h = f.defaultProps,
            h)
                y[g] === void 0 && (y[g] = h[g]);
        return {
            $$typeof: e,
            type: f,
            key: w,
            ref: k,
            props: y,
            _owner: a.current
        }
    }
    return Yi.Fragment = r,
    Yi.jsx = c,
    Yi.jsxs = c,
    Yi
}
var ig;
function WS() {
    return ig || (ig = 1,
    Vc.exports = qS()),
    Vc.exports
}
var T = WS()
  , L = hf();
const Ds = zv(L)
  , KS = $S({
    __proto__: null,
    default: Ds
}, [L]);
var Qa = {}
  , Uc = {
    exports: {}
}
  , Rt = {}
  , zc = {
    exports: {}
}
  , $c = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var og;
function QS() {
    return og || (og = 1,
    (function(t) {
        function e(V, le) {
            var X = V.length;
            V.push(le);
            e: for (; 0 < X; ) {
                var A = X - 1 >>> 1
                  , z = V[A];
                if (0 < a(z, le))
                    V[A] = le,
                    V[X] = z,
                    X = A;
                else
                    break e
            }
        }
        function r(V) {
            return V.length === 0 ? null : V[0]
        }
        function i(V) {
            if (V.length === 0)
                return null;
            var le = V[0]
              , X = V.pop();
            if (X !== le) {
                V[0] = X;
                e: for (var A = 0, z = V.length, ce = z >>> 1; A < ce; ) {
                    var fe = 2 * (A + 1) - 1
                      , be = V[fe]
                      , Ce = fe + 1
                      , xe = V[Ce];
                    if (0 > a(be, X))
                        Ce < z && 0 > a(xe, be) ? (V[A] = xe,
                        V[Ce] = X,
                        A = Ce) : (V[A] = be,
                        V[fe] = X,
                        A = fe);
                    else if (Ce < z && 0 > a(xe, X))
                        V[A] = xe,
                        V[Ce] = X,
                        A = Ce;
                    else
                        break e
                }
            }
            return le
        }
        function a(V, le) {
            var X = V.sortIndex - le.sortIndex;
            return X !== 0 ? X : V.id - le.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var u = performance;
            t.unstable_now = function() {
                return u.now()
            }
        } else {
            var c = Date
              , f = c.now();
            t.unstable_now = function() {
                return c.now() - f
            }
        }
        var h = []
          , m = []
          , g = 1
          , y = null
          , w = 3
          , k = !1
          , x = !1
          , b = !1
          , S = typeof setTimeout == "function" ? setTimeout : null
          , R = typeof clearTimeout == "function" ? clearTimeout : null
          , B = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function M(V) {
            for (var le = r(m); le !== null; ) {
                if (le.callback === null)
                    i(m);
                else if (le.startTime <= V)
                    i(m),
                    le.sortIndex = le.expirationTime,
                    e(h, le);
                else
                    break;
                le = r(m)
            }
        }
        function j(V) {
            if (b = !1,
            M(V),
            !x)
                if (r(h) !== null)
                    x = !0,
                    he(U);
                else {
                    var le = r(m);
                    le !== null && de(j, le.startTime - V)
                }
        }
        function U(V, le) {
            x = !1,
            b && (b = !1,
            R(N),
            N = -1),
            k = !0;
            var X = w;
            try {
                for (M(le),
                y = r(h); y !== null && (!(y.expirationTime > le) || V && !J()); ) {
                    var A = y.callback;
                    if (typeof A == "function") {
                        y.callback = null,
                        w = y.priorityLevel;
                        var z = A(y.expirationTime <= le);
                        le = t.unstable_now(),
                        typeof z == "function" ? y.callback = z : y === r(h) && i(h),
                        M(le)
                    } else
                        i(h);
                    y = r(h)
                }
                if (y !== null)
                    var ce = !0;
                else {
                    var fe = r(m);
                    fe !== null && de(j, fe.startTime - le),
                    ce = !1
                }
                return ce
            } finally {
                y = null,
                w = X,
                k = !1
            }
        }
        var Y = !1
          , ee = null
          , N = -1
          , q = 5
          , Q = -1;
        function J() {
            return !(t.unstable_now() - Q < q)
        }
        function $() {
            if (ee !== null) {
                var V = t.unstable_now();
                Q = V;
                var le = !0;
                try {
                    le = ee(!0, V)
                } finally {
                    le ? re() : (Y = !1,
                    ee = null)
                }
            } else
                Y = !1
        }
        var re;
        if (typeof B == "function")
            re = function() {
                B($)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Te = new MessageChannel
              , pe = Te.port2;
            Te.port1.onmessage = $,
            re = function() {
                pe.postMessage(null)
            }
        } else
            re = function() {
                S($, 0)
            }
            ;
        function he(V) {
            ee = V,
            Y || (Y = !0,
            re())
        }
        function de(V, le) {
            N = S(function() {
                V(t.unstable_now())
            }, le)
        }
        t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function(V) {
            V.callback = null
        }
        ,
        t.unstable_continueExecution = function() {
            x || k || (x = !0,
            he(U))
        }
        ,
        t.unstable_forceFrameRate = function(V) {
            0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : q = 0 < V ? Math.floor(1e3 / V) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return w
        }
        ,
        t.unstable_getFirstCallbackNode = function() {
            return r(h)
        }
        ,
        t.unstable_next = function(V) {
            switch (w) {
            case 1:
            case 2:
            case 3:
                var le = 3;
                break;
            default:
                le = w
            }
            var X = w;
            w = le;
            try {
                return V()
            } finally {
                w = X
            }
        }
        ,
        t.unstable_pauseExecution = function() {}
        ,
        t.unstable_requestPaint = function() {}
        ,
        t.unstable_runWithPriority = function(V, le) {
            switch (V) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                V = 3
            }
            var X = w;
            w = V;
            try {
                return le()
            } finally {
                w = X
            }
        }
        ,
        t.unstable_scheduleCallback = function(V, le, X) {
            var A = t.unstable_now();
            switch (typeof X == "object" && X !== null ? (X = X.delay,
            X = typeof X == "number" && 0 < X ? A + X : A) : X = A,
            V) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
            }
            return z = X + z,
            V = {
                id: g++,
                callback: le,
                priorityLevel: V,
                startTime: X,
                expirationTime: z,
                sortIndex: -1
            },
            X > A ? (V.sortIndex = X,
            e(m, V),
            r(h) === null && V === r(m) && (b ? (R(N),
            N = -1) : b = !0,
            de(j, X - A))) : (V.sortIndex = z,
            e(h, V),
            x || k || (x = !0,
            he(U))),
            V
        }
        ,
        t.unstable_shouldYield = J,
        t.unstable_wrapCallback = function(V) {
            var le = w;
            return function() {
                var X = w;
                w = le;
                try {
                    return V.apply(this, arguments)
                } finally {
                    w = X
                }
            }
        }
    }
    )($c)),
    $c
}
var ag;
function GS() {
    return ag || (ag = 1,
    zc.exports = QS()),
    zc.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lg;
function YS() {
    if (lg)
        return Rt;
    lg = 1;
    var t = hf()
      , e = GS();
    function r(n) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
            s += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , a = {};
    function u(n, s) {
        c(n, s),
        c(n + "Capture", s)
    }
    function c(n, s) {
        for (a[n] = s,
        n = 0; n < s.length; n++)
            i.add(s[n])
    }
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , h = Object.prototype.hasOwnProperty
      , m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , g = {}
      , y = {};
    function w(n) {
        return h.call(y, n) ? !0 : h.call(g, n) ? !1 : m.test(n) ? y[n] = !0 : (g[n] = !0,
        !1)
    }
    function k(n, s, o, l) {
        if (o !== null && o.type === 0)
            return !1;
        switch (typeof s) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return l ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5),
            n !== "data-" && n !== "aria-");
        default:
            return !1
        }
    }
    function x(n, s, o, l) {
        if (s === null || typeof s > "u" || k(n, s, o, l))
            return !0;
        if (l)
            return !1;
        if (o !== null)
            switch (o.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
            }
        return !1
    }
    function b(n, s, o, l, d, p, v) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4,
        this.attributeName = l,
        this.attributeNamespace = d,
        this.mustUseProperty = o,
        this.propertyName = n,
        this.type = s,
        this.sanitizeURL = p,
        this.removeEmptyString = v
    }
    var S = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
        S[n] = new b(n,0,!1,n,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
        var s = n[0];
        S[s] = new b(s,1,!1,n[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
        S[n] = new b(n,2,!1,n.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
        S[n] = new b(n,2,!1,n,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
        S[n] = new b(n,3,!1,n.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(n) {
        S[n] = new b(n,3,!0,n,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(n) {
        S[n] = new b(n,4,!1,n,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(n) {
        S[n] = new b(n,6,!1,n,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(n) {
        S[n] = new b(n,5,!1,n.toLowerCase(),null,!1,!1)
    });
    var R = /[\-:]([a-z])/g;
    function B(n) {
        return n[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
        var s = n.replace(R, B);
        S[s] = new b(s,1,!1,n,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
        var s = n.replace(R, B);
        S[s] = new b(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
        var s = n.replace(R, B);
        S[s] = new b(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(n) {
        S[n] = new b(n,1,!1,n.toLowerCase(),null,!1,!1)
    }),
    S.xlinkHref = new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(n) {
        S[n] = new b(n,1,!1,n.toLowerCase(),null,!0,!0)
    });
    function M(n, s, o, l) {
        var d = S.hasOwnProperty(s) ? S[s] : null;
        (d !== null ? d.type !== 0 : l || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (x(s, o, d, l) && (o = null),
        l || d === null ? w(s) && (o === null ? n.removeAttribute(s) : n.setAttribute(s, "" + o)) : d.mustUseProperty ? n[d.propertyName] = o === null ? d.type === 3 ? !1 : "" : o : (s = d.attributeName,
        l = d.attributeNamespace,
        o === null ? n.removeAttribute(s) : (d = d.type,
        o = d === 3 || d === 4 && o === !0 ? "" : "" + o,
        l ? n.setAttributeNS(l, s, o) : n.setAttribute(s, o))))
    }
    var j = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , U = Symbol.for("react.element")
      , Y = Symbol.for("react.portal")
      , ee = Symbol.for("react.fragment")
      , N = Symbol.for("react.strict_mode")
      , q = Symbol.for("react.profiler")
      , Q = Symbol.for("react.provider")
      , J = Symbol.for("react.context")
      , $ = Symbol.for("react.forward_ref")
      , re = Symbol.for("react.suspense")
      , Te = Symbol.for("react.suspense_list")
      , pe = Symbol.for("react.memo")
      , he = Symbol.for("react.lazy")
      , de = Symbol.for("react.offscreen")
      , V = Symbol.iterator;
    function le(n) {
        return n === null || typeof n != "object" ? null : (n = V && n[V] || n["@@iterator"],
        typeof n == "function" ? n : null)
    }
    var X = Object.assign, A;
    function z(n) {
        if (A === void 0)
            try {
                throw Error()
            } catch (o) {
                var s = o.stack.trim().match(/\n( *(at )?)/);
                A = s && s[1] || ""
            }
        return `
` + A + n
    }
    var ce = !1;
    function fe(n, s) {
        if (!n || ce)
            return "";
        ce = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(s.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (I) {
                        var l = I
                    }
                    Reflect.construct(n, [], s)
                } else {
                    try {
                        s.call()
                    } catch (I) {
                        l = I
                    }
                    n.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (I) {
                    l = I
                }
                n()
            }
        } catch (I) {
            if (I && l && typeof I.stack == "string") {
                for (var d = I.stack.split(`
`), p = l.stack.split(`
`), v = d.length - 1, E = p.length - 1; 1 <= v && 0 <= E && d[v] !== p[E]; )
                    E--;
                for (; 1 <= v && 0 <= E; v--,
                E--)
                    if (d[v] !== p[E]) {
                        if (v !== 1 || E !== 1)
                            do
                                if (v--,
                                E--,
                                0 > E || d[v] !== p[E]) {
                                    var C = `
` + d[v].replace(" at new ", " at ");
                                    return n.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", n.displayName)),
                                    C
                                }
                            while (1 <= v && 0 <= E);
                        break
                    }
            }
        } finally {
            ce = !1,
            Error.prepareStackTrace = o
        }
        return (n = n ? n.displayName || n.name : "") ? z(n) : ""
    }
    function be(n) {
        switch (n.tag) {
        case 5:
            return z(n.type);
        case 16:
            return z("Lazy");
        case 13:
            return z("Suspense");
        case 19:
            return z("SuspenseList");
        case 0:
        case 2:
        case 15:
            return n = fe(n.type, !1),
            n;
        case 11:
            return n = fe(n.type.render, !1),
            n;
        case 1:
            return n = fe(n.type, !0),
            n;
        default:
            return ""
        }
    }
    function Ce(n) {
        if (n == null)
            return null;
        if (typeof n == "function")
            return n.displayName || n.name || null;
        if (typeof n == "string")
            return n;
        switch (n) {
        case ee:
            return "Fragment";
        case Y:
            return "Portal";
        case q:
            return "Profiler";
        case N:
            return "StrictMode";
        case re:
            return "Suspense";
        case Te:
            return "SuspenseList"
        }
        if (typeof n == "object")
            switch (n.$$typeof) {
            case J:
                return (n.displayName || "Context") + ".Consumer";
            case Q:
                return (n._context.displayName || "Context") + ".Provider";
            case $:
                var s = n.render;
                return n = n.displayName,
                n || (n = s.displayName || s.name || "",
                n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"),
                n;
            case pe:
                return s = n.displayName || null,
                s !== null ? s : Ce(n.type) || "Memo";
            case he:
                s = n._payload,
                n = n._init;
                try {
                    return Ce(n(s))
                } catch {}
            }
        return null
    }
    function xe(n) {
        var s = n.type;
        switch (n.tag) {
        case 24:
            return "Cache";
        case 9:
            return (s.displayName || "Context") + ".Consumer";
        case 10:
            return (s._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return n = s.render,
            n = n.displayName || n.name || "",
            s.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return s;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ce(s);
        case 8:
            return s === N ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof s == "function")
                return s.displayName || s.name || null;
            if (typeof s == "string")
                return s
        }
        return null
    }
    function Ne(n) {
        switch (typeof n) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return n;
        case "object":
            return n;
        default:
            return ""
        }
    }
    function De(n) {
        var s = n.type;
        return (n = n.nodeName) && n.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }
    function rt(n) {
        var s = De(n) ? "checked" : "value"
          , o = Object.getOwnPropertyDescriptor(n.constructor.prototype, s)
          , l = "" + n[s];
        if (!n.hasOwnProperty(s) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var d = o.get
              , p = o.set;
            return Object.defineProperty(n, s, {
                configurable: !0,
                get: function() {
                    return d.call(this)
                },
                set: function(v) {
                    l = "" + v,
                    p.call(this, v)
                }
            }),
            Object.defineProperty(n, s, {
                enumerable: o.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(v) {
                    l = "" + v
                },
                stopTracking: function() {
                    n._valueTracker = null,
                    delete n[s]
                }
            }
        }
    }
    function Hn(n) {
        n._valueTracker || (n._valueTracker = rt(n))
    }
    function Pr(n) {
        if (!n)
            return !1;
        var s = n._valueTracker;
        if (!s)
            return !0;
        var o = s.getValue()
          , l = "";
        return n && (l = De(n) ? n.checked ? "true" : "false" : n.value),
        n = l,
        n !== o ? (s.setValue(n),
        !0) : !1
    }
    function Fo(n) {
        if (n = n || (typeof document < "u" ? document : void 0),
        typeof n > "u")
            return null;
        try {
            return n.activeElement || n.body
        } catch {
            return n.body
        }
    }
    function ql(n, s) {
        var o = s.checked;
        return X({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ?? n._wrapperState.initialChecked
        })
    }
    function lh(n, s) {
        var o = s.defaultValue == null ? "" : s.defaultValue
          , l = s.checked != null ? s.checked : s.defaultChecked;
        o = Ne(s.value != null ? s.value : o),
        n._wrapperState = {
            initialChecked: l,
            initialValue: o,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }
    function uh(n, s) {
        s = s.checked,
        s != null && M(n, "checked", s, !1)
    }
    function Wl(n, s) {
        uh(n, s);
        var o = Ne(s.value)
          , l = s.type;
        if (o != null)
            l === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
        else if (l === "submit" || l === "reset") {
            n.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? Kl(n, s.type, o) : s.hasOwnProperty("defaultValue") && Kl(n, s.type, Ne(s.defaultValue)),
        s.checked == null && s.defaultChecked != null && (n.defaultChecked = !!s.defaultChecked)
    }
    function ch(n, s, o) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var l = s.type;
            if (!(l !== "submit" && l !== "reset" || s.value !== void 0 && s.value !== null))
                return;
            s = "" + n._wrapperState.initialValue,
            o || s === n.value || (n.value = s),
            n.defaultValue = s
        }
        o = n.name,
        o !== "" && (n.name = ""),
        n.defaultChecked = !!n._wrapperState.initialChecked,
        o !== "" && (n.name = o)
    }
    function Kl(n, s, o) {
        (s !== "number" || Fo(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o))
    }
    var di = Array.isArray;
    function ls(n, s, o, l) {
        if (n = n.options,
        s) {
            s = {};
            for (var d = 0; d < o.length; d++)
                s["$" + o[d]] = !0;
            for (o = 0; o < n.length; o++)
                d = s.hasOwnProperty("$" + n[o].value),
                n[o].selected !== d && (n[o].selected = d),
                d && l && (n[o].defaultSelected = !0)
        } else {
            for (o = "" + Ne(o),
            s = null,
            d = 0; d < n.length; d++) {
                if (n[d].value === o) {
                    n[d].selected = !0,
                    l && (n[d].defaultSelected = !0);
                    return
                }
                s !== null || n[d].disabled || (s = n[d])
            }
            s !== null && (s.selected = !0)
        }
    }
    function Ql(n, s) {
        if (s.dangerouslySetInnerHTML != null)
            throw Error(r(91));
        return X({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + n._wrapperState.initialValue
        })
    }
    function dh(n, s) {
        var o = s.value;
        if (o == null) {
            if (o = s.children,
            s = s.defaultValue,
            o != null) {
                if (s != null)
                    throw Error(r(92));
                if (di(o)) {
                    if (1 < o.length)
                        throw Error(r(93));
                    o = o[0]
                }
                s = o
            }
            s == null && (s = ""),
            o = s
        }
        n._wrapperState = {
            initialValue: Ne(o)
        }
    }
    function fh(n, s) {
        var o = Ne(s.value)
          , l = Ne(s.defaultValue);
        o != null && (o = "" + o,
        o !== n.value && (n.value = o),
        s.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)),
        l != null && (n.defaultValue = "" + l)
    }
    function hh(n) {
        var s = n.textContent;
        s === n._wrapperState.initialValue && s !== "" && s !== null && (n.value = s)
    }
    function ph(n) {
        switch (n) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function Gl(n, s) {
        return n == null || n === "http://www.w3.org/1999/xhtml" ? ph(s) : n === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n
    }
    var Vo, mh = (function(n) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, o, l, d) {
            MSApp.execUnsafeLocalFunction(function() {
                return n(s, o, l, d)
            })
        }
        : n
    }
    )(function(n, s) {
        if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in n)
            n.innerHTML = s;
        else {
            for (Vo = Vo || document.createElement("div"),
            Vo.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>",
            s = Vo.firstChild; n.firstChild; )
                n.removeChild(n.firstChild);
            for (; s.firstChild; )
                n.appendChild(s.firstChild)
        }
    });
    function fi(n, s) {
        if (s) {
            var o = n.firstChild;
            if (o && o === n.lastChild && o.nodeType === 3) {
                o.nodeValue = s;
                return
            }
        }
        n.textContent = s
    }
    var hi = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , Kx = ["Webkit", "ms", "Moz", "O"];
    Object.keys(hi).forEach(function(n) {
        Kx.forEach(function(s) {
            s = s + n.charAt(0).toUpperCase() + n.substring(1),
            hi[s] = hi[n]
        })
    });
    function gh(n, s, o) {
        return s == null || typeof s == "boolean" || s === "" ? "" : o || typeof s != "number" || s === 0 || hi.hasOwnProperty(n) && hi[n] ? ("" + s).trim() : s + "px"
    }
    function yh(n, s) {
        n = n.style;
        for (var o in s)
            if (s.hasOwnProperty(o)) {
                var l = o.indexOf("--") === 0
                  , d = gh(o, s[o], l);
                o === "float" && (o = "cssFloat"),
                l ? n.setProperty(o, d) : n[o] = d
            }
    }
    var Qx = X({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Yl(n, s) {
        if (s) {
            if (Qx[n] && (s.children != null || s.dangerouslySetInnerHTML != null))
                throw Error(r(137, n));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null)
                    throw Error(r(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html"in s.dangerouslySetInnerHTML))
                    throw Error(r(61))
            }
            if (s.style != null && typeof s.style != "object")
                throw Error(r(62))
        }
    }
    function Xl(n, s) {
        if (n.indexOf("-") === -1)
            return typeof s.is == "string";
        switch (n) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Jl = null;
    function Zl(n) {
        return n = n.target || n.srcElement || window,
        n.correspondingUseElement && (n = n.correspondingUseElement),
        n.nodeType === 3 ? n.parentNode : n
    }
    var eu = null
      , us = null
      , cs = null;
    function vh(n) {
        if (n = Mi(n)) {
            if (typeof eu != "function")
                throw Error(r(280));
            var s = n.stateNode;
            s && (s = la(s),
            eu(n.stateNode, n.type, s))
        }
    }
    function wh(n) {
        us ? cs ? cs.push(n) : cs = [n] : us = n
    }
    function xh() {
        if (us) {
            var n = us
              , s = cs;
            if (cs = us = null,
            vh(n),
            s)
                for (n = 0; n < s.length; n++)
                    vh(s[n])
        }
    }
    function Sh(n, s) {
        return n(s)
    }
    function bh() {}
    var tu = !1;
    function Eh(n, s, o) {
        if (tu)
            return n(s, o);
        tu = !0;
        try {
            return Sh(n, s, o)
        } finally {
            tu = !1,
            (us !== null || cs !== null) && (bh(),
            xh())
        }
    }
    function pi(n, s) {
        var o = n.stateNode;
        if (o === null)
            return null;
        var l = la(o);
        if (l === null)
            return null;
        o = l[s];
        e: switch (s) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (n = n.type,
            l = !(n === "button" || n === "input" || n === "select" || n === "textarea")),
            n = !l;
            break e;
        default:
            n = !1
        }
        if (n)
            return null;
        if (o && typeof o != "function")
            throw Error(r(231, s, typeof o));
        return o
    }
    var nu = !1;
    if (f)
        try {
            var mi = {};
            Object.defineProperty(mi, "passive", {
                get: function() {
                    nu = !0
                }
            }),
            window.addEventListener("test", mi, mi),
            window.removeEventListener("test", mi, mi)
        } catch {
            nu = !1
        }
    function Gx(n, s, o, l, d, p, v, E, C) {
        var I = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(o, I)
        } catch (W) {
            this.onError(W)
        }
    }
    var gi = !1
      , Bo = null
      , Uo = !1
      , ru = null
      , Yx = {
        onError: function(n) {
            gi = !0,
            Bo = n
        }
    };
    function Xx(n, s, o, l, d, p, v, E, C) {
        gi = !1,
        Bo = null,
        Gx.apply(Yx, arguments)
    }
    function Jx(n, s, o, l, d, p, v, E, C) {
        if (Xx.apply(this, arguments),
        gi) {
            if (gi) {
                var I = Bo;
                gi = !1,
                Bo = null
            } else
                throw Error(r(198));
            Uo || (Uo = !0,
            ru = I)
        }
    }
    function _r(n) {
        var s = n
          , o = n;
        if (n.alternate)
            for (; s.return; )
                s = s.return;
        else {
            n = s;
            do
                s = n,
                (s.flags & 4098) !== 0 && (o = s.return),
                n = s.return;
            while (n)
        }
        return s.tag === 3 ? o : null
    }
    function kh(n) {
        if (n.tag === 13) {
            var s = n.memoizedState;
            if (s === null && (n = n.alternate,
            n !== null && (s = n.memoizedState)),
            s !== null)
                return s.dehydrated
        }
        return null
    }
    function Th(n) {
        if (_r(n) !== n)
            throw Error(r(188))
    }
    function Zx(n) {
        var s = n.alternate;
        if (!s) {
            if (s = _r(n),
            s === null)
                throw Error(r(188));
            return s !== n ? null : n
        }
        for (var o = n, l = s; ; ) {
            var d = o.return;
            if (d === null)
                break;
            var p = d.alternate;
            if (p === null) {
                if (l = d.return,
                l !== null) {
                    o = l;
                    continue
                }
                break
            }
            if (d.child === p.child) {
                for (p = d.child; p; ) {
                    if (p === o)
                        return Th(d),
                        n;
                    if (p === l)
                        return Th(d),
                        s;
                    p = p.sibling
                }
                throw Error(r(188))
            }
            if (o.return !== l.return)
                o = d,
                l = p;
            else {
                for (var v = !1, E = d.child; E; ) {
                    if (E === o) {
                        v = !0,
                        o = d,
                        l = p;
                        break
                    }
                    if (E === l) {
                        v = !0,
                        l = d,
                        o = p;
                        break
                    }
                    E = E.sibling
                }
                if (!v) {
                    for (E = p.child; E; ) {
                        if (E === o) {
                            v = !0,
                            o = p,
                            l = d;
                            break
                        }
                        if (E === l) {
                            v = !0,
                            l = p,
                            o = d;
                            break
                        }
                        E = E.sibling
                    }
                    if (!v)
                        throw Error(r(189))
                }
            }
            if (o.alternate !== l)
                throw Error(r(190))
        }
        if (o.tag !== 3)
            throw Error(r(188));
        return o.stateNode.current === o ? n : s
    }
    function Ch(n) {
        return n = Zx(n),
        n !== null ? Ph(n) : null
    }
    function Ph(n) {
        if (n.tag === 5 || n.tag === 6)
            return n;
        for (n = n.child; n !== null; ) {
            var s = Ph(n);
            if (s !== null)
                return s;
            n = n.sibling
        }
        return null
    }
    var _h = e.unstable_scheduleCallback
      , Rh = e.unstable_cancelCallback
      , e1 = e.unstable_shouldYield
      , t1 = e.unstable_requestPaint
      , Qe = e.unstable_now
      , n1 = e.unstable_getCurrentPriorityLevel
      , su = e.unstable_ImmediatePriority
      , Ah = e.unstable_UserBlockingPriority
      , zo = e.unstable_NormalPriority
      , r1 = e.unstable_LowPriority
      , Nh = e.unstable_IdlePriority
      , $o = null
      , hn = null;
    function s1(n) {
        if (hn && typeof hn.onCommitFiberRoot == "function")
            try {
                hn.onCommitFiberRoot($o, n, void 0, (n.current.flags & 128) === 128)
            } catch {}
    }
    var en = Math.clz32 ? Math.clz32 : a1
      , i1 = Math.log
      , o1 = Math.LN2;
    function a1(n) {
        return n >>>= 0,
        n === 0 ? 32 : 31 - (i1(n) / o1 | 0) | 0
    }
    var Ho = 64
      , qo = 4194304;
    function yi(n) {
        switch (n & -n) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return n & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return n & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return n
        }
    }
    function Wo(n, s) {
        var o = n.pendingLanes;
        if (o === 0)
            return 0;
        var l = 0
          , d = n.suspendedLanes
          , p = n.pingedLanes
          , v = o & 268435455;
        if (v !== 0) {
            var E = v & ~d;
            E !== 0 ? l = yi(E) : (p &= v,
            p !== 0 && (l = yi(p)))
        } else
            v = o & ~d,
            v !== 0 ? l = yi(v) : p !== 0 && (l = yi(p));
        if (l === 0)
            return 0;
        if (s !== 0 && s !== l && (s & d) === 0 && (d = l & -l,
        p = s & -s,
        d >= p || d === 16 && (p & 4194240) !== 0))
            return s;
        if ((l & 4) !== 0 && (l |= o & 16),
        s = n.entangledLanes,
        s !== 0)
            for (n = n.entanglements,
            s &= l; 0 < s; )
                o = 31 - en(s),
                d = 1 << o,
                l |= n[o],
                s &= ~d;
        return l
    }
    function l1(n, s) {
        switch (n) {
        case 1:
        case 2:
        case 4:
            return s + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return s + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function u1(n, s) {
        for (var o = n.suspendedLanes, l = n.pingedLanes, d = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
            var v = 31 - en(p)
              , E = 1 << v
              , C = d[v];
            C === -1 ? ((E & o) === 0 || (E & l) !== 0) && (d[v] = l1(E, s)) : C <= s && (n.expiredLanes |= E),
            p &= ~E
        }
    }
    function iu(n) {
        return n = n.pendingLanes & -1073741825,
        n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    }
    function Oh() {
        var n = Ho;
        return Ho <<= 1,
        (Ho & 4194240) === 0 && (Ho = 64),
        n
    }
    function ou(n) {
        for (var s = [], o = 0; 31 > o; o++)
            s.push(n);
        return s
    }
    function vi(n, s, o) {
        n.pendingLanes |= s,
        s !== 536870912 && (n.suspendedLanes = 0,
        n.pingedLanes = 0),
        n = n.eventTimes,
        s = 31 - en(s),
        n[s] = o
    }
    function c1(n, s) {
        var o = n.pendingLanes & ~s;
        n.pendingLanes = s,
        n.suspendedLanes = 0,
        n.pingedLanes = 0,
        n.expiredLanes &= s,
        n.mutableReadLanes &= s,
        n.entangledLanes &= s,
        s = n.entanglements;
        var l = n.eventTimes;
        for (n = n.expirationTimes; 0 < o; ) {
            var d = 31 - en(o)
              , p = 1 << d;
            s[d] = 0,
            l[d] = -1,
            n[d] = -1,
            o &= ~p
        }
    }
    function au(n, s) {
        var o = n.entangledLanes |= s;
        for (n = n.entanglements; o; ) {
            var l = 31 - en(o)
              , d = 1 << l;
            d & s | n[l] & s && (n[l] |= s),
            o &= ~d
        }
    }
    var Me = 0;
    function Lh(n) {
        return n &= -n,
        1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Dh, lu, Mh, jh, Ih, uu = !1, Ko = [], qn = null, Wn = null, Kn = null, wi = new Map, xi = new Map, Qn = [], d1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Fh(n, s) {
        switch (n) {
        case "focusin":
        case "focusout":
            qn = null;
            break;
        case "dragenter":
        case "dragleave":
            Wn = null;
            break;
        case "mouseover":
        case "mouseout":
            Kn = null;
            break;
        case "pointerover":
        case "pointerout":
            wi.delete(s.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            xi.delete(s.pointerId)
        }
    }
    function Si(n, s, o, l, d, p) {
        return n === null || n.nativeEvent !== p ? (n = {
            blockedOn: s,
            domEventName: o,
            eventSystemFlags: l,
            nativeEvent: p,
            targetContainers: [d]
        },
        s !== null && (s = Mi(s),
        s !== null && lu(s)),
        n) : (n.eventSystemFlags |= l,
        s = n.targetContainers,
        d !== null && s.indexOf(d) === -1 && s.push(d),
        n)
    }
    function f1(n, s, o, l, d) {
        switch (s) {
        case "focusin":
            return qn = Si(qn, n, s, o, l, d),
            !0;
        case "dragenter":
            return Wn = Si(Wn, n, s, o, l, d),
            !0;
        case "mouseover":
            return Kn = Si(Kn, n, s, o, l, d),
            !0;
        case "pointerover":
            var p = d.pointerId;
            return wi.set(p, Si(wi.get(p) || null, n, s, o, l, d)),
            !0;
        case "gotpointercapture":
            return p = d.pointerId,
            xi.set(p, Si(xi.get(p) || null, n, s, o, l, d)),
            !0
        }
        return !1
    }
    function Vh(n) {
        var s = Rr(n.target);
        if (s !== null) {
            var o = _r(s);
            if (o !== null) {
                if (s = o.tag,
                s === 13) {
                    if (s = kh(o),
                    s !== null) {
                        n.blockedOn = s,
                        Ih(n.priority, function() {
                            Mh(o)
                        });
                        return
                    }
                } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        n.blockedOn = null
    }
    function Qo(n) {
        if (n.blockedOn !== null)
            return !1;
        for (var s = n.targetContainers; 0 < s.length; ) {
            var o = du(n.domEventName, n.eventSystemFlags, s[0], n.nativeEvent);
            if (o === null) {
                o = n.nativeEvent;
                var l = new o.constructor(o.type,o);
                Jl = l,
                o.target.dispatchEvent(l),
                Jl = null
            } else
                return s = Mi(o),
                s !== null && lu(s),
                n.blockedOn = o,
                !1;
            s.shift()
        }
        return !0
    }
    function Bh(n, s, o) {
        Qo(n) && o.delete(s)
    }
    function h1() {
        uu = !1,
        qn !== null && Qo(qn) && (qn = null),
        Wn !== null && Qo(Wn) && (Wn = null),
        Kn !== null && Qo(Kn) && (Kn = null),
        wi.forEach(Bh),
        xi.forEach(Bh)
    }
    function bi(n, s) {
        n.blockedOn === s && (n.blockedOn = null,
        uu || (uu = !0,
        e.unstable_scheduleCallback(e.unstable_NormalPriority, h1)))
    }
    function Ei(n) {
        function s(d) {
            return bi(d, n)
        }
        if (0 < Ko.length) {
            bi(Ko[0], n);
            for (var o = 1; o < Ko.length; o++) {
                var l = Ko[o];
                l.blockedOn === n && (l.blockedOn = null)
            }
        }
        for (qn !== null && bi(qn, n),
        Wn !== null && bi(Wn, n),
        Kn !== null && bi(Kn, n),
        wi.forEach(s),
        xi.forEach(s),
        o = 0; o < Qn.length; o++)
            l = Qn[o],
            l.blockedOn === n && (l.blockedOn = null);
        for (; 0 < Qn.length && (o = Qn[0],
        o.blockedOn === null); )
            Vh(o),
            o.blockedOn === null && Qn.shift()
    }
    var ds = j.ReactCurrentBatchConfig
      , Go = !0;
    function p1(n, s, o, l) {
        var d = Me
          , p = ds.transition;
        ds.transition = null;
        try {
            Me = 1,
            cu(n, s, o, l)
        } finally {
            Me = d,
            ds.transition = p
        }
    }
    function m1(n, s, o, l) {
        var d = Me
          , p = ds.transition;
        ds.transition = null;
        try {
            Me = 4,
            cu(n, s, o, l)
        } finally {
            Me = d,
            ds.transition = p
        }
    }
    function cu(n, s, o, l) {
        if (Go) {
            var d = du(n, s, o, l);
            if (d === null)
                _u(n, s, l, Yo, o),
                Fh(n, l);
            else if (f1(d, n, s, o, l))
                l.stopPropagation();
            else if (Fh(n, l),
            s & 4 && -1 < d1.indexOf(n)) {
                for (; d !== null; ) {
                    var p = Mi(d);
                    if (p !== null && Dh(p),
                    p = du(n, s, o, l),
                    p === null && _u(n, s, l, Yo, o),
                    p === d)
                        break;
                    d = p
                }
                d !== null && l.stopPropagation()
            } else
                _u(n, s, l, null, o)
        }
    }
    var Yo = null;
    function du(n, s, o, l) {
        if (Yo = null,
        n = Zl(l),
        n = Rr(n),
        n !== null)
            if (s = _r(n),
            s === null)
                n = null;
            else if (o = s.tag,
            o === 13) {
                if (n = kh(s),
                n !== null)
                    return n;
                n = null
            } else if (o === 3) {
                if (s.stateNode.current.memoizedState.isDehydrated)
                    return s.tag === 3 ? s.stateNode.containerInfo : null;
                n = null
            } else
                s !== n && (n = null);
        return Yo = n,
        null
    }
    function Uh(n) {
        switch (n) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (n1()) {
            case su:
                return 1;
            case Ah:
                return 4;
            case zo:
            case r1:
                return 16;
            case Nh:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var Gn = null
      , fu = null
      , Xo = null;
    function zh() {
        if (Xo)
            return Xo;
        var n, s = fu, o = s.length, l, d = "value"in Gn ? Gn.value : Gn.textContent, p = d.length;
        for (n = 0; n < o && s[n] === d[n]; n++)
            ;
        var v = o - n;
        for (l = 1; l <= v && s[o - l] === d[p - l]; l++)
            ;
        return Xo = d.slice(n, 1 < l ? 1 - l : void 0)
    }
    function Jo(n) {
        var s = n.keyCode;
        return "charCode"in n ? (n = n.charCode,
        n === 0 && s === 13 && (n = 13)) : n = s,
        n === 10 && (n = 13),
        32 <= n || n === 13 ? n : 0
    }
    function Zo() {
        return !0
    }
    function $h() {
        return !1
    }
    function jt(n) {
        function s(o, l, d, p, v) {
            this._reactName = o,
            this._targetInst = d,
            this.type = l,
            this.nativeEvent = p,
            this.target = v,
            this.currentTarget = null;
            for (var E in n)
                n.hasOwnProperty(E) && (o = n[E],
                this[E] = o ? o(p) : p[E]);
            return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Zo : $h,
            this.isPropagationStopped = $h,
            this
        }
        return X(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1),
                this.isDefaultPrevented = Zo)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
                this.isPropagationStopped = Zo)
            },
            persist: function() {},
            isPersistent: Zo
        }),
        s
    }
    var fs = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(n) {
            return n.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, hu = jt(fs), ki = X({}, fs, {
        view: 0,
        detail: 0
    }), g1 = jt(ki), pu, mu, Ti, ea = X({}, ki, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: yu,
        button: 0,
        buttons: 0,
        relatedTarget: function(n) {
            return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget
        },
        movementX: function(n) {
            return "movementX"in n ? n.movementX : (n !== Ti && (Ti && n.type === "mousemove" ? (pu = n.screenX - Ti.screenX,
            mu = n.screenY - Ti.screenY) : mu = pu = 0,
            Ti = n),
            pu)
        },
        movementY: function(n) {
            return "movementY"in n ? n.movementY : mu
        }
    }), Hh = jt(ea), y1 = X({}, ea, {
        dataTransfer: 0
    }), v1 = jt(y1), w1 = X({}, ki, {
        relatedTarget: 0
    }), gu = jt(w1), x1 = X({}, fs, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), S1 = jt(x1), b1 = X({}, fs, {
        clipboardData: function(n) {
            return "clipboardData"in n ? n.clipboardData : window.clipboardData
        }
    }), E1 = jt(b1), k1 = X({}, fs, {
        data: 0
    }), qh = jt(k1), T1 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, C1 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, P1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function _1(n) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(n) : (n = P1[n]) ? !!s[n] : !1
    }
    function yu() {
        return _1
    }
    var R1 = X({}, ki, {
        key: function(n) {
            if (n.key) {
                var s = T1[n.key] || n.key;
                if (s !== "Unidentified")
                    return s
            }
            return n.type === "keypress" ? (n = Jo(n),
            n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? C1[n.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: yu,
        charCode: function(n) {
            return n.type === "keypress" ? Jo(n) : 0
        },
        keyCode: function(n) {
            return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
        },
        which: function(n) {
            return n.type === "keypress" ? Jo(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
        }
    })
      , A1 = jt(R1)
      , N1 = X({}, ea, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Wh = jt(N1)
      , O1 = X({}, ki, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: yu
    })
      , L1 = jt(O1)
      , D1 = X({}, fs, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , M1 = jt(D1)
      , j1 = X({}, ea, {
        deltaX: function(n) {
            return "deltaX"in n ? n.deltaX : "wheelDeltaX"in n ? -n.wheelDeltaX : 0
        },
        deltaY: function(n) {
            return "deltaY"in n ? n.deltaY : "wheelDeltaY"in n ? -n.wheelDeltaY : "wheelDelta"in n ? -n.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , I1 = jt(j1)
      , F1 = [9, 13, 27, 32]
      , vu = f && "CompositionEvent"in window
      , Ci = null;
    f && "documentMode"in document && (Ci = document.documentMode);
    var V1 = f && "TextEvent"in window && !Ci
      , Kh = f && (!vu || Ci && 8 < Ci && 11 >= Ci)
      , Qh = " "
      , Gh = !1;
    function Yh(n, s) {
        switch (n) {
        case "keyup":
            return F1.indexOf(s.keyCode) !== -1;
        case "keydown":
            return s.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Xh(n) {
        return n = n.detail,
        typeof n == "object" && "data"in n ? n.data : null
    }
    var hs = !1;
    function B1(n, s) {
        switch (n) {
        case "compositionend":
            return Xh(s);
        case "keypress":
            return s.which !== 32 ? null : (Gh = !0,
            Qh);
        case "textInput":
            return n = s.data,
            n === Qh && Gh ? null : n;
        default:
            return null
        }
    }
    function U1(n, s) {
        if (hs)
            return n === "compositionend" || !vu && Yh(n, s) ? (n = zh(),
            Xo = fu = Gn = null,
            hs = !1,
            n) : null;
        switch (n) {
        case "paste":
            return null;
        case "keypress":
            if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                if (s.char && 1 < s.char.length)
                    return s.char;
                if (s.which)
                    return String.fromCharCode(s.which)
            }
            return null;
        case "compositionend":
            return Kh && s.locale !== "ko" ? null : s.data;
        default:
            return null
        }
    }
    var z1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Jh(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s === "input" ? !!z1[n.type] : s === "textarea"
    }
    function Zh(n, s, o, l) {
        wh(l),
        s = ia(s, "onChange"),
        0 < s.length && (o = new hu("onChange","change",null,o,l),
        n.push({
            event: o,
            listeners: s
        }))
    }
    var Pi = null
      , _i = null;
    function $1(n) {
        yp(n, 0)
    }
    function ta(n) {
        var s = vs(n);
        if (Pr(s))
            return n
    }
    function H1(n, s) {
        if (n === "change")
            return s
    }
    var ep = !1;
    if (f) {
        var wu;
        if (f) {
            var xu = "oninput"in document;
            if (!xu) {
                var tp = document.createElement("div");
                tp.setAttribute("oninput", "return;"),
                xu = typeof tp.oninput == "function"
            }
            wu = xu
        } else
            wu = !1;
        ep = wu && (!document.documentMode || 9 < document.documentMode)
    }
    function np() {
        Pi && (Pi.detachEvent("onpropertychange", rp),
        _i = Pi = null)
    }
    function rp(n) {
        if (n.propertyName === "value" && ta(_i)) {
            var s = [];
            Zh(s, _i, n, Zl(n)),
            Eh($1, s)
        }
    }
    function q1(n, s, o) {
        n === "focusin" ? (np(),
        Pi = s,
        _i = o,
        Pi.attachEvent("onpropertychange", rp)) : n === "focusout" && np()
    }
    function W1(n) {
        if (n === "selectionchange" || n === "keyup" || n === "keydown")
            return ta(_i)
    }
    function K1(n, s) {
        if (n === "click")
            return ta(s)
    }
    function Q1(n, s) {
        if (n === "input" || n === "change")
            return ta(s)
    }
    function G1(n, s) {
        return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s
    }
    var tn = typeof Object.is == "function" ? Object.is : G1;
    function Ri(n, s) {
        if (tn(n, s))
            return !0;
        if (typeof n != "object" || n === null || typeof s != "object" || s === null)
            return !1;
        var o = Object.keys(n)
          , l = Object.keys(s);
        if (o.length !== l.length)
            return !1;
        for (l = 0; l < o.length; l++) {
            var d = o[l];
            if (!h.call(s, d) || !tn(n[d], s[d]))
                return !1
        }
        return !0
    }
    function sp(n) {
        for (; n && n.firstChild; )
            n = n.firstChild;
        return n
    }
    function ip(n, s) {
        var o = sp(n);
        n = 0;
        for (var l; o; ) {
            if (o.nodeType === 3) {
                if (l = n + o.textContent.length,
                n <= s && l >= s)
                    return {
                        node: o,
                        offset: s - n
                    };
                n = l
            }
            e: {
                for (; o; ) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = sp(o)
        }
    }
    function op(n, s) {
        return n && s ? n === s ? !0 : n && n.nodeType === 3 ? !1 : s && s.nodeType === 3 ? op(n, s.parentNode) : "contains"in n ? n.contains(s) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(s) & 16) : !1 : !1
    }
    function ap() {
        for (var n = window, s = Fo(); s instanceof n.HTMLIFrameElement; ) {
            try {
                var o = typeof s.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o)
                n = s.contentWindow;
            else
                break;
            s = Fo(n.document)
        }
        return s
    }
    function Su(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s && (s === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || s === "textarea" || n.contentEditable === "true")
    }
    function Y1(n) {
        var s = ap()
          , o = n.focusedElem
          , l = n.selectionRange;
        if (s !== o && o && o.ownerDocument && op(o.ownerDocument.documentElement, o)) {
            if (l !== null && Su(o)) {
                if (s = l.start,
                n = l.end,
                n === void 0 && (n = s),
                "selectionStart"in o)
                    o.selectionStart = s,
                    o.selectionEnd = Math.min(n, o.value.length);
                else if (n = (s = o.ownerDocument || document) && s.defaultView || window,
                n.getSelection) {
                    n = n.getSelection();
                    var d = o.textContent.length
                      , p = Math.min(l.start, d);
                    l = l.end === void 0 ? p : Math.min(l.end, d),
                    !n.extend && p > l && (d = l,
                    l = p,
                    p = d),
                    d = ip(o, p);
                    var v = ip(o, l);
                    d && v && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== v.node || n.focusOffset !== v.offset) && (s = s.createRange(),
                    s.setStart(d.node, d.offset),
                    n.removeAllRanges(),
                    p > l ? (n.addRange(s),
                    n.extend(v.node, v.offset)) : (s.setEnd(v.node, v.offset),
                    n.addRange(s)))
                }
            }
            for (s = [],
            n = o; n = n.parentNode; )
                n.nodeType === 1 && s.push({
                    element: n,
                    left: n.scrollLeft,
                    top: n.scrollTop
                });
            for (typeof o.focus == "function" && o.focus(),
            o = 0; o < s.length; o++)
                n = s[o],
                n.element.scrollLeft = n.left,
                n.element.scrollTop = n.top
        }
    }
    var X1 = f && "documentMode"in document && 11 >= document.documentMode
      , ps = null
      , bu = null
      , Ai = null
      , Eu = !1;
    function lp(n, s, o) {
        var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        Eu || ps == null || ps !== Fo(l) || (l = ps,
        "selectionStart"in l && Su(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        Ai && Ri(Ai, l) || (Ai = l,
        l = ia(bu, "onSelect"),
        0 < l.length && (s = new hu("onSelect","select",null,s,o),
        n.push({
            event: s,
            listeners: l
        }),
        s.target = ps)))
    }
    function na(n, s) {
        var o = {};
        return o[n.toLowerCase()] = s.toLowerCase(),
        o["Webkit" + n] = "webkit" + s,
        o["Moz" + n] = "moz" + s,
        o
    }
    var ms = {
        animationend: na("Animation", "AnimationEnd"),
        animationiteration: na("Animation", "AnimationIteration"),
        animationstart: na("Animation", "AnimationStart"),
        transitionend: na("Transition", "TransitionEnd")
    }
      , ku = {}
      , up = {};
    f && (up = document.createElement("div").style,
    "AnimationEvent"in window || (delete ms.animationend.animation,
    delete ms.animationiteration.animation,
    delete ms.animationstart.animation),
    "TransitionEvent"in window || delete ms.transitionend.transition);
    function ra(n) {
        if (ku[n])
            return ku[n];
        if (!ms[n])
            return n;
        var s = ms[n], o;
        for (o in s)
            if (s.hasOwnProperty(o) && o in up)
                return ku[n] = s[o];
        return n
    }
    var cp = ra("animationend")
      , dp = ra("animationiteration")
      , fp = ra("animationstart")
      , hp = ra("transitionend")
      , pp = new Map
      , mp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Yn(n, s) {
        pp.set(n, s),
        u(s, [n])
    }
    for (var Tu = 0; Tu < mp.length; Tu++) {
        var Cu = mp[Tu]
          , J1 = Cu.toLowerCase()
          , Z1 = Cu[0].toUpperCase() + Cu.slice(1);
        Yn(J1, "on" + Z1)
    }
    Yn(cp, "onAnimationEnd"),
    Yn(dp, "onAnimationIteration"),
    Yn(fp, "onAnimationStart"),
    Yn("dblclick", "onDoubleClick"),
    Yn("focusin", "onFocus"),
    Yn("focusout", "onBlur"),
    Yn(hp, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , eS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));
    function gp(n, s, o) {
        var l = n.type || "unknown-event";
        n.currentTarget = o,
        Jx(l, s, void 0, n),
        n.currentTarget = null
    }
    function yp(n, s) {
        s = (s & 4) !== 0;
        for (var o = 0; o < n.length; o++) {
            var l = n[o]
              , d = l.event;
            l = l.listeners;
            e: {
                var p = void 0;
                if (s)
                    for (var v = l.length - 1; 0 <= v; v--) {
                        var E = l[v]
                          , C = E.instance
                          , I = E.currentTarget;
                        if (E = E.listener,
                        C !== p && d.isPropagationStopped())
                            break e;
                        gp(d, E, I),
                        p = C
                    }
                else
                    for (v = 0; v < l.length; v++) {
                        if (E = l[v],
                        C = E.instance,
                        I = E.currentTarget,
                        E = E.listener,
                        C !== p && d.isPropagationStopped())
                            break e;
                        gp(d, E, I),
                        p = C
                    }
            }
        }
        if (Uo)
            throw n = ru,
            Uo = !1,
            ru = null,
            n
    }
    function Fe(n, s) {
        var o = s[Du];
        o === void 0 && (o = s[Du] = new Set);
        var l = n + "__bubble";
        o.has(l) || (vp(s, n, 2, !1),
        o.add(l))
    }
    function Pu(n, s, o) {
        var l = 0;
        s && (l |= 4),
        vp(o, n, l, s)
    }
    var sa = "_reactListening" + Math.random().toString(36).slice(2);
    function Oi(n) {
        if (!n[sa]) {
            n[sa] = !0,
            i.forEach(function(o) {
                o !== "selectionchange" && (eS.has(o) || Pu(o, !1, n),
                Pu(o, !0, n))
            });
            var s = n.nodeType === 9 ? n : n.ownerDocument;
            s === null || s[sa] || (s[sa] = !0,
            Pu("selectionchange", !1, s))
        }
    }
    function vp(n, s, o, l) {
        switch (Uh(s)) {
        case 1:
            var d = p1;
            break;
        case 4:
            d = m1;
            break;
        default:
            d = cu
        }
        o = d.bind(null, s, o, n),
        d = void 0,
        !nu || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (d = !0),
        l ? d !== void 0 ? n.addEventListener(s, o, {
            capture: !0,
            passive: d
        }) : n.addEventListener(s, o, !0) : d !== void 0 ? n.addEventListener(s, o, {
            passive: d
        }) : n.addEventListener(s, o, !1)
    }
    function _u(n, s, o, l, d) {
        var p = l;
        if ((s & 1) === 0 && (s & 2) === 0 && l !== null)
            e: for (; ; ) {
                if (l === null)
                    return;
                var v = l.tag;
                if (v === 3 || v === 4) {
                    var E = l.stateNode.containerInfo;
                    if (E === d || E.nodeType === 8 && E.parentNode === d)
                        break;
                    if (v === 4)
                        for (v = l.return; v !== null; ) {
                            var C = v.tag;
                            if ((C === 3 || C === 4) && (C = v.stateNode.containerInfo,
                            C === d || C.nodeType === 8 && C.parentNode === d))
                                return;
                            v = v.return
                        }
                    for (; E !== null; ) {
                        if (v = Rr(E),
                        v === null)
                            return;
                        if (C = v.tag,
                        C === 5 || C === 6) {
                            l = p = v;
                            continue e
                        }
                        E = E.parentNode
                    }
                }
                l = l.return
            }
        Eh(function() {
            var I = p
              , W = Zl(o)
              , K = [];
            e: {
                var H = pp.get(n);
                if (H !== void 0) {
                    var Z = hu
                      , se = n;
                    switch (n) {
                    case "keypress":
                        if (Jo(o) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        Z = A1;
                        break;
                    case "focusin":
                        se = "focus",
                        Z = gu;
                        break;
                    case "focusout":
                        se = "blur",
                        Z = gu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        Z = gu;
                        break;
                    case "click":
                        if (o.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        Z = Hh;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        Z = v1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        Z = L1;
                        break;
                    case cp:
                    case dp:
                    case fp:
                        Z = S1;
                        break;
                    case hp:
                        Z = M1;
                        break;
                    case "scroll":
                        Z = g1;
                        break;
                    case "wheel":
                        Z = I1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        Z = E1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        Z = Wh
                    }
                    var ae = (s & 4) !== 0
                      , Ge = !ae && n === "scroll"
                      , O = ae ? H !== null ? H + "Capture" : null : H;
                    ae = [];
                    for (var _ = I, D; _ !== null; ) {
                        D = _;
                        var G = D.stateNode;
                        if (D.tag === 5 && G !== null && (D = G,
                        O !== null && (G = pi(_, O),
                        G != null && ae.push(Li(_, G, D)))),
                        Ge)
                            break;
                        _ = _.return
                    }
                    0 < ae.length && (H = new Z(H,se,null,o,W),
                    K.push({
                        event: H,
                        listeners: ae
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if (H = n === "mouseover" || n === "pointerover",
                    Z = n === "mouseout" || n === "pointerout",
                    H && o !== Jl && (se = o.relatedTarget || o.fromElement) && (Rr(se) || se[Pn]))
                        break e;
                    if ((Z || H) && (H = W.window === W ? W : (H = W.ownerDocument) ? H.defaultView || H.parentWindow : window,
                    Z ? (se = o.relatedTarget || o.toElement,
                    Z = I,
                    se = se ? Rr(se) : null,
                    se !== null && (Ge = _r(se),
                    se !== Ge || se.tag !== 5 && se.tag !== 6) && (se = null)) : (Z = null,
                    se = I),
                    Z !== se)) {
                        if (ae = Hh,
                        G = "onMouseLeave",
                        O = "onMouseEnter",
                        _ = "mouse",
                        (n === "pointerout" || n === "pointerover") && (ae = Wh,
                        G = "onPointerLeave",
                        O = "onPointerEnter",
                        _ = "pointer"),
                        Ge = Z == null ? H : vs(Z),
                        D = se == null ? H : vs(se),
                        H = new ae(G,_ + "leave",Z,o,W),
                        H.target = Ge,
                        H.relatedTarget = D,
                        G = null,
                        Rr(W) === I && (ae = new ae(O,_ + "enter",se,o,W),
                        ae.target = D,
                        ae.relatedTarget = Ge,
                        G = ae),
                        Ge = G,
                        Z && se)
                            t: {
                                for (ae = Z,
                                O = se,
                                _ = 0,
                                D = ae; D; D = gs(D))
                                    _++;
                                for (D = 0,
                                G = O; G; G = gs(G))
                                    D++;
                                for (; 0 < _ - D; )
                                    ae = gs(ae),
                                    _--;
                                for (; 0 < D - _; )
                                    O = gs(O),
                                    D--;
                                for (; _--; ) {
                                    if (ae === O || O !== null && ae === O.alternate)
                                        break t;
                                    ae = gs(ae),
                                    O = gs(O)
                                }
                                ae = null
                            }
                        else
                            ae = null;
                        Z !== null && wp(K, H, Z, ae, !1),
                        se !== null && Ge !== null && wp(K, Ge, se, ae, !0)
                    }
                }
                e: {
                    if (H = I ? vs(I) : window,
                    Z = H.nodeName && H.nodeName.toLowerCase(),
                    Z === "select" || Z === "input" && H.type === "file")
                        var ue = H1;
                    else if (Jh(H))
                        if (ep)
                            ue = Q1;
                        else {
                            ue = W1;
                            var me = q1
                        }
                    else
                        (Z = H.nodeName) && Z.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (ue = K1);
                    if (ue && (ue = ue(n, I))) {
                        Zh(K, ue, o, W);
                        break e
                    }
                    me && me(n, H, I),
                    n === "focusout" && (me = H._wrapperState) && me.controlled && H.type === "number" && Kl(H, "number", H.value)
                }
                switch (me = I ? vs(I) : window,
                n) {
                case "focusin":
                    (Jh(me) || me.contentEditable === "true") && (ps = me,
                    bu = I,
                    Ai = null);
                    break;
                case "focusout":
                    Ai = bu = ps = null;
                    break;
                case "mousedown":
                    Eu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Eu = !1,
                    lp(K, o, W);
                    break;
                case "selectionchange":
                    if (X1)
                        break;
                case "keydown":
                case "keyup":
                    lp(K, o, W)
                }
                var ge;
                if (vu)
                    e: {
                        switch (n) {
                        case "compositionstart":
                            var we = "onCompositionStart";
                            break e;
                        case "compositionend":
                            we = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            we = "onCompositionUpdate";
                            break e
                        }
                        we = void 0
                    }
                else
                    hs ? Yh(n, o) && (we = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (we = "onCompositionStart");
                we && (Kh && o.locale !== "ko" && (hs || we !== "onCompositionStart" ? we === "onCompositionEnd" && hs && (ge = zh()) : (Gn = W,
                fu = "value"in Gn ? Gn.value : Gn.textContent,
                hs = !0)),
                me = ia(I, we),
                0 < me.length && (we = new qh(we,n,null,o,W),
                K.push({
                    event: we,
                    listeners: me
                }),
                ge ? we.data = ge : (ge = Xh(o),
                ge !== null && (we.data = ge)))),
                (ge = V1 ? B1(n, o) : U1(n, o)) && (I = ia(I, "onBeforeInput"),
                0 < I.length && (W = new qh("onBeforeInput","beforeinput",null,o,W),
                K.push({
                    event: W,
                    listeners: I
                }),
                W.data = ge))
            }
            yp(K, s)
        })
    }
    function Li(n, s, o) {
        return {
            instance: n,
            listener: s,
            currentTarget: o
        }
    }
    function ia(n, s) {
        for (var o = s + "Capture", l = []; n !== null; ) {
            var d = n
              , p = d.stateNode;
            d.tag === 5 && p !== null && (d = p,
            p = pi(n, o),
            p != null && l.unshift(Li(n, p, d)),
            p = pi(n, s),
            p != null && l.push(Li(n, p, d))),
            n = n.return
        }
        return l
    }
    function gs(n) {
        if (n === null)
            return null;
        do
            n = n.return;
        while (n && n.tag !== 5);
        return n || null
    }
    function wp(n, s, o, l, d) {
        for (var p = s._reactName, v = []; o !== null && o !== l; ) {
            var E = o
              , C = E.alternate
              , I = E.stateNode;
            if (C !== null && C === l)
                break;
            E.tag === 5 && I !== null && (E = I,
            d ? (C = pi(o, p),
            C != null && v.unshift(Li(o, C, E))) : d || (C = pi(o, p),
            C != null && v.push(Li(o, C, E)))),
            o = o.return
        }
        v.length !== 0 && n.push({
            event: s,
            listeners: v
        })
    }
    var tS = /\r\n?/g
      , nS = /\u0000|\uFFFD/g;
    function xp(n) {
        return (typeof n == "string" ? n : "" + n).replace(tS, `
`).replace(nS, "")
    }
    function oa(n, s, o) {
        if (s = xp(s),
        xp(n) !== s && o)
            throw Error(r(425))
    }
    function aa() {}
    var Ru = null
      , Au = null;
    function Nu(n, s) {
        return n === "textarea" || n === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var Ou = typeof setTimeout == "function" ? setTimeout : void 0
      , rS = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Sp = typeof Promise == "function" ? Promise : void 0
      , sS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sp < "u" ? function(n) {
        return Sp.resolve(null).then(n).catch(iS)
    }
    : Ou;
    function iS(n) {
        setTimeout(function() {
            throw n
        })
    }
    function Lu(n, s) {
        var o = s
          , l = 0;
        do {
            var d = o.nextSibling;
            if (n.removeChild(o),
            d && d.nodeType === 8)
                if (o = d.data,
                o === "/$") {
                    if (l === 0) {
                        n.removeChild(d),
                        Ei(s);
                        return
                    }
                    l--
                } else
                    o !== "$" && o !== "$?" && o !== "$!" || l++;
            o = d
        } while (o);
        Ei(s)
    }
    function Xn(n) {
        for (; n != null; n = n.nextSibling) {
            var s = n.nodeType;
            if (s === 1 || s === 3)
                break;
            if (s === 8) {
                if (s = n.data,
                s === "$" || s === "$!" || s === "$?")
                    break;
                if (s === "/$")
                    return null
            }
        }
        return n
    }
    function bp(n) {
        n = n.previousSibling;
        for (var s = 0; n; ) {
            if (n.nodeType === 8) {
                var o = n.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (s === 0)
                        return n;
                    s--
                } else
                    o === "/$" && s++
            }
            n = n.previousSibling
        }
        return null
    }
    var ys = Math.random().toString(36).slice(2)
      , pn = "__reactFiber$" + ys
      , Di = "__reactProps$" + ys
      , Pn = "__reactContainer$" + ys
      , Du = "__reactEvents$" + ys
      , oS = "__reactListeners$" + ys
      , aS = "__reactHandles$" + ys;
    function Rr(n) {
        var s = n[pn];
        if (s)
            return s;
        for (var o = n.parentNode; o; ) {
            if (s = o[Pn] || o[pn]) {
                if (o = s.alternate,
                s.child !== null || o !== null && o.child !== null)
                    for (n = bp(n); n !== null; ) {
                        if (o = n[pn])
                            return o;
                        n = bp(n)
                    }
                return s
            }
            n = o,
            o = n.parentNode
        }
        return null
    }
    function Mi(n) {
        return n = n[pn] || n[Pn],
        !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n
    }
    function vs(n) {
        if (n.tag === 5 || n.tag === 6)
            return n.stateNode;
        throw Error(r(33))
    }
    function la(n) {
        return n[Di] || null
    }
    var Mu = []
      , ws = -1;
    function Jn(n) {
        return {
            current: n
        }
    }
    function Ve(n) {
        0 > ws || (n.current = Mu[ws],
        Mu[ws] = null,
        ws--)
    }
    function Ie(n, s) {
        ws++,
        Mu[ws] = n.current,
        n.current = s
    }
    var Zn = {}
      , ht = Jn(Zn)
      , kt = Jn(!1)
      , Ar = Zn;
    function xs(n, s) {
        var o = n.type.contextTypes;
        if (!o)
            return Zn;
        var l = n.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === s)
            return l.__reactInternalMemoizedMaskedChildContext;
        var d = {}, p;
        for (p in o)
            d[p] = s[p];
        return l && (n = n.stateNode,
        n.__reactInternalMemoizedUnmaskedChildContext = s,
        n.__reactInternalMemoizedMaskedChildContext = d),
        d
    }
    function Tt(n) {
        return n = n.childContextTypes,
        n != null
    }
    function ua() {
        Ve(kt),
        Ve(ht)
    }
    function Ep(n, s, o) {
        if (ht.current !== Zn)
            throw Error(r(168));
        Ie(ht, s),
        Ie(kt, o)
    }
    function kp(n, s, o) {
        var l = n.stateNode;
        if (s = s.childContextTypes,
        typeof l.getChildContext != "function")
            return o;
        l = l.getChildContext();
        for (var d in l)
            if (!(d in s))
                throw Error(r(108, xe(n) || "Unknown", d));
        return X({}, o, l)
    }
    function ca(n) {
        return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Zn,
        Ar = ht.current,
        Ie(ht, n),
        Ie(kt, kt.current),
        !0
    }
    function Tp(n, s, o) {
        var l = n.stateNode;
        if (!l)
            throw Error(r(169));
        o ? (n = kp(n, s, Ar),
        l.__reactInternalMemoizedMergedChildContext = n,
        Ve(kt),
        Ve(ht),
        Ie(ht, n)) : Ve(kt),
        Ie(kt, o)
    }
    var _n = null
      , da = !1
      , ju = !1;
    function Cp(n) {
        _n === null ? _n = [n] : _n.push(n)
    }
    function lS(n) {
        da = !0,
        Cp(n)
    }
    function er() {
        if (!ju && _n !== null) {
            ju = !0;
            var n = 0
              , s = Me;
            try {
                var o = _n;
                for (Me = 1; n < o.length; n++) {
                    var l = o[n];
                    do
                        l = l(!0);
                    while (l !== null)
                }
                _n = null,
                da = !1
            } catch (d) {
                throw _n !== null && (_n = _n.slice(n + 1)),
                _h(su, er),
                d
            } finally {
                Me = s,
                ju = !1
            }
        }
        return null
    }
    var Ss = []
      , bs = 0
      , fa = null
      , ha = 0
      , zt = []
      , $t = 0
      , Nr = null
      , Rn = 1
      , An = "";
    function Or(n, s) {
        Ss[bs++] = ha,
        Ss[bs++] = fa,
        fa = n,
        ha = s
    }
    function Pp(n, s, o) {
        zt[$t++] = Rn,
        zt[$t++] = An,
        zt[$t++] = Nr,
        Nr = n;
        var l = Rn;
        n = An;
        var d = 32 - en(l) - 1;
        l &= ~(1 << d),
        o += 1;
        var p = 32 - en(s) + d;
        if (30 < p) {
            var v = d - d % 5;
            p = (l & (1 << v) - 1).toString(32),
            l >>= v,
            d -= v,
            Rn = 1 << 32 - en(s) + d | o << d | l,
            An = p + n
        } else
            Rn = 1 << p | o << d | l,
            An = n
    }
    function Iu(n) {
        n.return !== null && (Or(n, 1),
        Pp(n, 1, 0))
    }
    function Fu(n) {
        for (; n === fa; )
            fa = Ss[--bs],
            Ss[bs] = null,
            ha = Ss[--bs],
            Ss[bs] = null;
        for (; n === Nr; )
            Nr = zt[--$t],
            zt[$t] = null,
            An = zt[--$t],
            zt[$t] = null,
            Rn = zt[--$t],
            zt[$t] = null
    }
    var It = null
      , Ft = null
      , Ue = !1
      , nn = null;
    function _p(n, s) {
        var o = Kt(5, null, null, 0);
        o.elementType = "DELETED",
        o.stateNode = s,
        o.return = n,
        s = n.deletions,
        s === null ? (n.deletions = [o],
        n.flags |= 16) : s.push(o)
    }
    function Rp(n, s) {
        switch (n.tag) {
        case 5:
            var o = n.type;
            return s = s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase() ? null : s,
            s !== null ? (n.stateNode = s,
            It = n,
            Ft = Xn(s.firstChild),
            !0) : !1;
        case 6:
            return s = n.pendingProps === "" || s.nodeType !== 3 ? null : s,
            s !== null ? (n.stateNode = s,
            It = n,
            Ft = null,
            !0) : !1;
        case 13:
            return s = s.nodeType !== 8 ? null : s,
            s !== null ? (o = Nr !== null ? {
                id: Rn,
                overflow: An
            } : null,
            n.memoizedState = {
                dehydrated: s,
                treeContext: o,
                retryLane: 1073741824
            },
            o = Kt(18, null, null, 0),
            o.stateNode = s,
            o.return = n,
            n.child = o,
            It = n,
            Ft = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function Vu(n) {
        return (n.mode & 1) !== 0 && (n.flags & 128) === 0
    }
    function Bu(n) {
        if (Ue) {
            var s = Ft;
            if (s) {
                var o = s;
                if (!Rp(n, s)) {
                    if (Vu(n))
                        throw Error(r(418));
                    s = Xn(o.nextSibling);
                    var l = It;
                    s && Rp(n, s) ? _p(l, o) : (n.flags = n.flags & -4097 | 2,
                    Ue = !1,
                    It = n)
                }
            } else {
                if (Vu(n))
                    throw Error(r(418));
                n.flags = n.flags & -4097 | 2,
                Ue = !1,
                It = n
            }
        }
    }
    function Ap(n) {
        for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
            n = n.return;
        It = n
    }
    function pa(n) {
        if (n !== It)
            return !1;
        if (!Ue)
            return Ap(n),
            Ue = !0,
            !1;
        var s;
        if ((s = n.tag !== 3) && !(s = n.tag !== 5) && (s = n.type,
        s = s !== "head" && s !== "body" && !Nu(n.type, n.memoizedProps)),
        s && (s = Ft)) {
            if (Vu(n))
                throw Np(),
                Error(r(418));
            for (; s; )
                _p(n, s),
                s = Xn(s.nextSibling)
        }
        if (Ap(n),
        n.tag === 13) {
            if (n = n.memoizedState,
            n = n !== null ? n.dehydrated : null,
            !n)
                throw Error(r(317));
            e: {
                for (n = n.nextSibling,
                s = 0; n; ) {
                    if (n.nodeType === 8) {
                        var o = n.data;
                        if (o === "/$") {
                            if (s === 0) {
                                Ft = Xn(n.nextSibling);
                                break e
                            }
                            s--
                        } else
                            o !== "$" && o !== "$!" && o !== "$?" || s++
                    }
                    n = n.nextSibling
                }
                Ft = null
            }
        } else
            Ft = It ? Xn(n.stateNode.nextSibling) : null;
        return !0
    }
    function Np() {
        for (var n = Ft; n; )
            n = Xn(n.nextSibling)
    }
    function Es() {
        Ft = It = null,
        Ue = !1
    }
    function Uu(n) {
        nn === null ? nn = [n] : nn.push(n)
    }
    var uS = j.ReactCurrentBatchConfig;
    function ji(n, s, o) {
        if (n = o.ref,
        n !== null && typeof n != "function" && typeof n != "object") {
            if (o._owner) {
                if (o = o._owner,
                o) {
                    if (o.tag !== 1)
                        throw Error(r(309));
                    var l = o.stateNode
                }
                if (!l)
                    throw Error(r(147, n));
                var d = l
                  , p = "" + n;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === p ? s.ref : (s = function(v) {
                    var E = d.refs;
                    v === null ? delete E[p] : E[p] = v
                }
                ,
                s._stringRef = p,
                s)
            }
            if (typeof n != "string")
                throw Error(r(284));
            if (!o._owner)
                throw Error(r(290, n))
        }
        return n
    }
    function ma(n, s) {
        throw n = Object.prototype.toString.call(s),
        Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : n))
    }
    function Op(n) {
        var s = n._init;
        return s(n._payload)
    }
    function Lp(n) {
        function s(O, _) {
            if (n) {
                var D = O.deletions;
                D === null ? (O.deletions = [_],
                O.flags |= 16) : D.push(_)
            }
        }
        function o(O, _) {
            if (!n)
                return null;
            for (; _ !== null; )
                s(O, _),
                _ = _.sibling;
            return null
        }
        function l(O, _) {
            for (O = new Map; _ !== null; )
                _.key !== null ? O.set(_.key, _) : O.set(_.index, _),
                _ = _.sibling;
            return O
        }
        function d(O, _) {
            return O = lr(O, _),
            O.index = 0,
            O.sibling = null,
            O
        }
        function p(O, _, D) {
            return O.index = D,
            n ? (D = O.alternate,
            D !== null ? (D = D.index,
            D < _ ? (O.flags |= 2,
            _) : D) : (O.flags |= 2,
            _)) : (O.flags |= 1048576,
            _)
        }
        function v(O) {
            return n && O.alternate === null && (O.flags |= 2),
            O
        }
        function E(O, _, D, G) {
            return _ === null || _.tag !== 6 ? (_ = Oc(D, O.mode, G),
            _.return = O,
            _) : (_ = d(_, D),
            _.return = O,
            _)
        }
        function C(O, _, D, G) {
            var ue = D.type;
            return ue === ee ? W(O, _, D.props.children, G, D.key) : _ !== null && (_.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === he && Op(ue) === _.type) ? (G = d(_, D.props),
            G.ref = ji(O, _, D),
            G.return = O,
            G) : (G = Va(D.type, D.key, D.props, null, O.mode, G),
            G.ref = ji(O, _, D),
            G.return = O,
            G)
        }
        function I(O, _, D, G) {
            return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== D.containerInfo || _.stateNode.implementation !== D.implementation ? (_ = Lc(D, O.mode, G),
            _.return = O,
            _) : (_ = d(_, D.children || []),
            _.return = O,
            _)
        }
        function W(O, _, D, G, ue) {
            return _ === null || _.tag !== 7 ? (_ = Br(D, O.mode, G, ue),
            _.return = O,
            _) : (_ = d(_, D),
            _.return = O,
            _)
        }
        function K(O, _, D) {
            if (typeof _ == "string" && _ !== "" || typeof _ == "number")
                return _ = Oc("" + _, O.mode, D),
                _.return = O,
                _;
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                case U:
                    return D = Va(_.type, _.key, _.props, null, O.mode, D),
                    D.ref = ji(O, null, _),
                    D.return = O,
                    D;
                case Y:
                    return _ = Lc(_, O.mode, D),
                    _.return = O,
                    _;
                case he:
                    var G = _._init;
                    return K(O, G(_._payload), D)
                }
                if (di(_) || le(_))
                    return _ = Br(_, O.mode, D, null),
                    _.return = O,
                    _;
                ma(O, _)
            }
            return null
        }
        function H(O, _, D, G) {
            var ue = _ !== null ? _.key : null;
            if (typeof D == "string" && D !== "" || typeof D == "number")
                return ue !== null ? null : E(O, _, "" + D, G);
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case U:
                    return D.key === ue ? C(O, _, D, G) : null;
                case Y:
                    return D.key === ue ? I(O, _, D, G) : null;
                case he:
                    return ue = D._init,
                    H(O, _, ue(D._payload), G)
                }
                if (di(D) || le(D))
                    return ue !== null ? null : W(O, _, D, G, null);
                ma(O, D)
            }
            return null
        }
        function Z(O, _, D, G, ue) {
            if (typeof G == "string" && G !== "" || typeof G == "number")
                return O = O.get(D) || null,
                E(_, O, "" + G, ue);
            if (typeof G == "object" && G !== null) {
                switch (G.$$typeof) {
                case U:
                    return O = O.get(G.key === null ? D : G.key) || null,
                    C(_, O, G, ue);
                case Y:
                    return O = O.get(G.key === null ? D : G.key) || null,
                    I(_, O, G, ue);
                case he:
                    var me = G._init;
                    return Z(O, _, D, me(G._payload), ue)
                }
                if (di(G) || le(G))
                    return O = O.get(D) || null,
                    W(_, O, G, ue, null);
                ma(_, G)
            }
            return null
        }
        function se(O, _, D, G) {
            for (var ue = null, me = null, ge = _, we = _ = 0, ot = null; ge !== null && we < D.length; we++) {
                ge.index > we ? (ot = ge,
                ge = null) : ot = ge.sibling;
                var Oe = H(O, ge, D[we], G);
                if (Oe === null) {
                    ge === null && (ge = ot);
                    break
                }
                n && ge && Oe.alternate === null && s(O, ge),
                _ = p(Oe, _, we),
                me === null ? ue = Oe : me.sibling = Oe,
                me = Oe,
                ge = ot
            }
            if (we === D.length)
                return o(O, ge),
                Ue && Or(O, we),
                ue;
            if (ge === null) {
                for (; we < D.length; we++)
                    ge = K(O, D[we], G),
                    ge !== null && (_ = p(ge, _, we),
                    me === null ? ue = ge : me.sibling = ge,
                    me = ge);
                return Ue && Or(O, we),
                ue
            }
            for (ge = l(O, ge); we < D.length; we++)
                ot = Z(ge, O, we, D[we], G),
                ot !== null && (n && ot.alternate !== null && ge.delete(ot.key === null ? we : ot.key),
                _ = p(ot, _, we),
                me === null ? ue = ot : me.sibling = ot,
                me = ot);
            return n && ge.forEach(function(ur) {
                return s(O, ur)
            }),
            Ue && Or(O, we),
            ue
        }
        function ae(O, _, D, G) {
            var ue = le(D);
            if (typeof ue != "function")
                throw Error(r(150));
            if (D = ue.call(D),
            D == null)
                throw Error(r(151));
            for (var me = ue = null, ge = _, we = _ = 0, ot = null, Oe = D.next(); ge !== null && !Oe.done; we++,
            Oe = D.next()) {
                ge.index > we ? (ot = ge,
                ge = null) : ot = ge.sibling;
                var ur = H(O, ge, Oe.value, G);
                if (ur === null) {
                    ge === null && (ge = ot);
                    break
                }
                n && ge && ur.alternate === null && s(O, ge),
                _ = p(ur, _, we),
                me === null ? ue = ur : me.sibling = ur,
                me = ur,
                ge = ot
            }
            if (Oe.done)
                return o(O, ge),
                Ue && Or(O, we),
                ue;
            if (ge === null) {
                for (; !Oe.done; we++,
                Oe = D.next())
                    Oe = K(O, Oe.value, G),
                    Oe !== null && (_ = p(Oe, _, we),
                    me === null ? ue = Oe : me.sibling = Oe,
                    me = Oe);
                return Ue && Or(O, we),
                ue
            }
            for (ge = l(O, ge); !Oe.done; we++,
            Oe = D.next())
                Oe = Z(ge, O, we, Oe.value, G),
                Oe !== null && (n && Oe.alternate !== null && ge.delete(Oe.key === null ? we : Oe.key),
                _ = p(Oe, _, we),
                me === null ? ue = Oe : me.sibling = Oe,
                me = Oe);
            return n && ge.forEach(function(zS) {
                return s(O, zS)
            }),
            Ue && Or(O, we),
            ue
        }
        function Ge(O, _, D, G) {
            if (typeof D == "object" && D !== null && D.type === ee && D.key === null && (D = D.props.children),
            typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case U:
                    e: {
                        for (var ue = D.key, me = _; me !== null; ) {
                            if (me.key === ue) {
                                if (ue = D.type,
                                ue === ee) {
                                    if (me.tag === 7) {
                                        o(O, me.sibling),
                                        _ = d(me, D.props.children),
                                        _.return = O,
                                        O = _;
                                        break e
                                    }
                                } else if (me.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === he && Op(ue) === me.type) {
                                    o(O, me.sibling),
                                    _ = d(me, D.props),
                                    _.ref = ji(O, me, D),
                                    _.return = O,
                                    O = _;
                                    break e
                                }
                                o(O, me);
                                break
                            } else
                                s(O, me);
                            me = me.sibling
                        }
                        D.type === ee ? (_ = Br(D.props.children, O.mode, G, D.key),
                        _.return = O,
                        O = _) : (G = Va(D.type, D.key, D.props, null, O.mode, G),
                        G.ref = ji(O, _, D),
                        G.return = O,
                        O = G)
                    }
                    return v(O);
                case Y:
                    e: {
                        for (me = D.key; _ !== null; ) {
                            if (_.key === me)
                                if (_.tag === 4 && _.stateNode.containerInfo === D.containerInfo && _.stateNode.implementation === D.implementation) {
                                    o(O, _.sibling),
                                    _ = d(_, D.children || []),
                                    _.return = O,
                                    O = _;
                                    break e
                                } else {
                                    o(O, _);
                                    break
                                }
                            else
                                s(O, _);
                            _ = _.sibling
                        }
                        _ = Lc(D, O.mode, G),
                        _.return = O,
                        O = _
                    }
                    return v(O);
                case he:
                    return me = D._init,
                    Ge(O, _, me(D._payload), G)
                }
                if (di(D))
                    return se(O, _, D, G);
                if (le(D))
                    return ae(O, _, D, G);
                ma(O, D)
            }
            return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D,
            _ !== null && _.tag === 6 ? (o(O, _.sibling),
            _ = d(_, D),
            _.return = O,
            O = _) : (o(O, _),
            _ = Oc(D, O.mode, G),
            _.return = O,
            O = _),
            v(O)) : o(O, _)
        }
        return Ge
    }
    var ks = Lp(!0)
      , Dp = Lp(!1)
      , ga = Jn(null)
      , ya = null
      , Ts = null
      , zu = null;
    function $u() {
        zu = Ts = ya = null
    }
    function Hu(n) {
        var s = ga.current;
        Ve(ga),
        n._currentValue = s
    }
    function qu(n, s, o) {
        for (; n !== null; ) {
            var l = n.alternate;
            if ((n.childLanes & s) !== s ? (n.childLanes |= s,
            l !== null && (l.childLanes |= s)) : l !== null && (l.childLanes & s) !== s && (l.childLanes |= s),
            n === o)
                break;
            n = n.return
        }
    }
    function Cs(n, s) {
        ya = n,
        zu = Ts = null,
        n = n.dependencies,
        n !== null && n.firstContext !== null && ((n.lanes & s) !== 0 && (Ct = !0),
        n.firstContext = null)
    }
    function Ht(n) {
        var s = n._currentValue;
        if (zu !== n)
            if (n = {
                context: n,
                memoizedValue: s,
                next: null
            },
            Ts === null) {
                if (ya === null)
                    throw Error(r(308));
                Ts = n,
                ya.dependencies = {
                    lanes: 0,
                    firstContext: n
                }
            } else
                Ts = Ts.next = n;
        return s
    }
    var Lr = null;
    function Wu(n) {
        Lr === null ? Lr = [n] : Lr.push(n)
    }
    function Mp(n, s, o, l) {
        var d = s.interleaved;
        return d === null ? (o.next = o,
        Wu(s)) : (o.next = d.next,
        d.next = o),
        s.interleaved = o,
        Nn(n, l)
    }
    function Nn(n, s) {
        n.lanes |= s;
        var o = n.alternate;
        for (o !== null && (o.lanes |= s),
        o = n,
        n = n.return; n !== null; )
            n.childLanes |= s,
            o = n.alternate,
            o !== null && (o.childLanes |= s),
            o = n,
            n = n.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var tr = !1;
    function Ku(n) {
        n.updateQueue = {
            baseState: n.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function jp(n, s) {
        n = n.updateQueue,
        s.updateQueue === n && (s.updateQueue = {
            baseState: n.baseState,
            firstBaseUpdate: n.firstBaseUpdate,
            lastBaseUpdate: n.lastBaseUpdate,
            shared: n.shared,
            effects: n.effects
        })
    }
    function On(n, s) {
        return {
            eventTime: n,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function nr(n, s, o) {
        var l = n.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Ae & 2) !== 0) {
            var d = l.pending;
            return d === null ? s.next = s : (s.next = d.next,
            d.next = s),
            l.pending = s,
            Nn(n, o)
        }
        return d = l.interleaved,
        d === null ? (s.next = s,
        Wu(l)) : (s.next = d.next,
        d.next = s),
        l.interleaved = s,
        Nn(n, o)
    }
    function va(n, s, o) {
        if (s = s.updateQueue,
        s !== null && (s = s.shared,
        (o & 4194240) !== 0)) {
            var l = s.lanes;
            l &= n.pendingLanes,
            o |= l,
            s.lanes = o,
            au(n, o)
        }
    }
    function Ip(n, s) {
        var o = n.updateQueue
          , l = n.alternate;
        if (l !== null && (l = l.updateQueue,
        o === l)) {
            var d = null
              , p = null;
            if (o = o.firstBaseUpdate,
            o !== null) {
                do {
                    var v = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    p === null ? d = p = v : p = p.next = v,
                    o = o.next
                } while (o !== null);
                p === null ? d = p = s : p = p.next = s
            } else
                d = p = s;
            o = {
                baseState: l.baseState,
                firstBaseUpdate: d,
                lastBaseUpdate: p,
                shared: l.shared,
                effects: l.effects
            },
            n.updateQueue = o;
            return
        }
        n = o.lastBaseUpdate,
        n === null ? o.firstBaseUpdate = s : n.next = s,
        o.lastBaseUpdate = s
    }
    function wa(n, s, o, l) {
        var d = n.updateQueue;
        tr = !1;
        var p = d.firstBaseUpdate
          , v = d.lastBaseUpdate
          , E = d.shared.pending;
        if (E !== null) {
            d.shared.pending = null;
            var C = E
              , I = C.next;
            C.next = null,
            v === null ? p = I : v.next = I,
            v = C;
            var W = n.alternate;
            W !== null && (W = W.updateQueue,
            E = W.lastBaseUpdate,
            E !== v && (E === null ? W.firstBaseUpdate = I : E.next = I,
            W.lastBaseUpdate = C))
        }
        if (p !== null) {
            var K = d.baseState;
            v = 0,
            W = I = C = null,
            E = p;
            do {
                var H = E.lane
                  , Z = E.eventTime;
                if ((l & H) === H) {
                    W !== null && (W = W.next = {
                        eventTime: Z,
                        lane: 0,
                        tag: E.tag,
                        payload: E.payload,
                        callback: E.callback,
                        next: null
                    });
                    e: {
                        var se = n
                          , ae = E;
                        switch (H = s,
                        Z = o,
                        ae.tag) {
                        case 1:
                            if (se = ae.payload,
                            typeof se == "function") {
                                K = se.call(Z, K, H);
                                break e
                            }
                            K = se;
                            break e;
                        case 3:
                            se.flags = se.flags & -65537 | 128;
                        case 0:
                            if (se = ae.payload,
                            H = typeof se == "function" ? se.call(Z, K, H) : se,
                            H == null)
                                break e;
                            K = X({}, K, H);
                            break e;
                        case 2:
                            tr = !0
                        }
                    }
                    E.callback !== null && E.lane !== 0 && (n.flags |= 64,
                    H = d.effects,
                    H === null ? d.effects = [E] : H.push(E))
                } else
                    Z = {
                        eventTime: Z,
                        lane: H,
                        tag: E.tag,
                        payload: E.payload,
                        callback: E.callback,
                        next: null
                    },
                    W === null ? (I = W = Z,
                    C = K) : W = W.next = Z,
                    v |= H;
                if (E = E.next,
                E === null) {
                    if (E = d.shared.pending,
                    E === null)
                        break;
                    H = E,
                    E = H.next,
                    H.next = null,
                    d.lastBaseUpdate = H,
                    d.shared.pending = null
                }
            } while (!0);
            if (W === null && (C = K),
            d.baseState = C,
            d.firstBaseUpdate = I,
            d.lastBaseUpdate = W,
            s = d.shared.interleaved,
            s !== null) {
                d = s;
                do
                    v |= d.lane,
                    d = d.next;
                while (d !== s)
            } else
                p === null && (d.shared.lanes = 0);
            jr |= v,
            n.lanes = v,
            n.memoizedState = K
        }
    }
    function Fp(n, s, o) {
        if (n = s.effects,
        s.effects = null,
        n !== null)
            for (s = 0; s < n.length; s++) {
                var l = n[s]
                  , d = l.callback;
                if (d !== null) {
                    if (l.callback = null,
                    l = o,
                    typeof d != "function")
                        throw Error(r(191, d));
                    d.call(l)
                }
            }
    }
    var Ii = {}
      , mn = Jn(Ii)
      , Fi = Jn(Ii)
      , Vi = Jn(Ii);
    function Dr(n) {
        if (n === Ii)
            throw Error(r(174));
        return n
    }
    function Qu(n, s) {
        switch (Ie(Vi, s),
        Ie(Fi, n),
        Ie(mn, Ii),
        n = s.nodeType,
        n) {
        case 9:
        case 11:
            s = (s = s.documentElement) ? s.namespaceURI : Gl(null, "");
            break;
        default:
            n = n === 8 ? s.parentNode : s,
            s = n.namespaceURI || null,
            n = n.tagName,
            s = Gl(s, n)
        }
        Ve(mn),
        Ie(mn, s)
    }
    function Ps() {
        Ve(mn),
        Ve(Fi),
        Ve(Vi)
    }
    function Vp(n) {
        Dr(Vi.current);
        var s = Dr(mn.current)
          , o = Gl(s, n.type);
        s !== o && (Ie(Fi, n),
        Ie(mn, o))
    }
    function Gu(n) {
        Fi.current === n && (Ve(mn),
        Ve(Fi))
    }
    var ze = Jn(0);
    function xa(n) {
        for (var s = n; s !== null; ) {
            if (s.tag === 13) {
                var o = s.memoizedState;
                if (o !== null && (o = o.dehydrated,
                o === null || o.data === "$?" || o.data === "$!"))
                    return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0)
                    return s
            } else if (s.child !== null) {
                s.child.return = s,
                s = s.child;
                continue
            }
            if (s === n)
                break;
            for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                    return null;
                s = s.return
            }
            s.sibling.return = s.return,
            s = s.sibling
        }
        return null
    }
    var Yu = [];
    function Xu() {
        for (var n = 0; n < Yu.length; n++)
            Yu[n]._workInProgressVersionPrimary = null;
        Yu.length = 0
    }
    var Sa = j.ReactCurrentDispatcher
      , Ju = j.ReactCurrentBatchConfig
      , Mr = 0
      , $e = null
      , et = null
      , st = null
      , ba = !1
      , Bi = !1
      , Ui = 0
      , cS = 0;
    function pt() {
        throw Error(r(321))
    }
    function Zu(n, s) {
        if (s === null)
            return !1;
        for (var o = 0; o < s.length && o < n.length; o++)
            if (!tn(n[o], s[o]))
                return !1;
        return !0
    }
    function ec(n, s, o, l, d, p) {
        if (Mr = p,
        $e = s,
        s.memoizedState = null,
        s.updateQueue = null,
        s.lanes = 0,
        Sa.current = n === null || n.memoizedState === null ? pS : mS,
        n = o(l, d),
        Bi) {
            p = 0;
            do {
                if (Bi = !1,
                Ui = 0,
                25 <= p)
                    throw Error(r(301));
                p += 1,
                st = et = null,
                s.updateQueue = null,
                Sa.current = gS,
                n = o(l, d)
            } while (Bi)
        }
        if (Sa.current = Ta,
        s = et !== null && et.next !== null,
        Mr = 0,
        st = et = $e = null,
        ba = !1,
        s)
            throw Error(r(300));
        return n
    }
    function tc() {
        var n = Ui !== 0;
        return Ui = 0,
        n
    }
    function gn() {
        var n = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return st === null ? $e.memoizedState = st = n : st = st.next = n,
        st
    }
    function qt() {
        if (et === null) {
            var n = $e.alternate;
            n = n !== null ? n.memoizedState : null
        } else
            n = et.next;
        var s = st === null ? $e.memoizedState : st.next;
        if (s !== null)
            st = s,
            et = n;
        else {
            if (n === null)
                throw Error(r(310));
            et = n,
            n = {
                memoizedState: et.memoizedState,
                baseState: et.baseState,
                baseQueue: et.baseQueue,
                queue: et.queue,
                next: null
            },
            st === null ? $e.memoizedState = st = n : st = st.next = n
        }
        return st
    }
    function zi(n, s) {
        return typeof s == "function" ? s(n) : s
    }
    function nc(n) {
        var s = qt()
          , o = s.queue;
        if (o === null)
            throw Error(r(311));
        o.lastRenderedReducer = n;
        var l = et
          , d = l.baseQueue
          , p = o.pending;
        if (p !== null) {
            if (d !== null) {
                var v = d.next;
                d.next = p.next,
                p.next = v
            }
            l.baseQueue = d = p,
            o.pending = null
        }
        if (d !== null) {
            p = d.next,
            l = l.baseState;
            var E = v = null
              , C = null
              , I = p;
            do {
                var W = I.lane;
                if ((Mr & W) === W)
                    C !== null && (C = C.next = {
                        lane: 0,
                        action: I.action,
                        hasEagerState: I.hasEagerState,
                        eagerState: I.eagerState,
                        next: null
                    }),
                    l = I.hasEagerState ? I.eagerState : n(l, I.action);
                else {
                    var K = {
                        lane: W,
                        action: I.action,
                        hasEagerState: I.hasEagerState,
                        eagerState: I.eagerState,
                        next: null
                    };
                    C === null ? (E = C = K,
                    v = l) : C = C.next = K,
                    $e.lanes |= W,
                    jr |= W
                }
                I = I.next
            } while (I !== null && I !== p);
            C === null ? v = l : C.next = E,
            tn(l, s.memoizedState) || (Ct = !0),
            s.memoizedState = l,
            s.baseState = v,
            s.baseQueue = C,
            o.lastRenderedState = l
        }
        if (n = o.interleaved,
        n !== null) {
            d = n;
            do
                p = d.lane,
                $e.lanes |= p,
                jr |= p,
                d = d.next;
            while (d !== n)
        } else
            d === null && (o.lanes = 0);
        return [s.memoizedState, o.dispatch]
    }
    function rc(n) {
        var s = qt()
          , o = s.queue;
        if (o === null)
            throw Error(r(311));
        o.lastRenderedReducer = n;
        var l = o.dispatch
          , d = o.pending
          , p = s.memoizedState;
        if (d !== null) {
            o.pending = null;
            var v = d = d.next;
            do
                p = n(p, v.action),
                v = v.next;
            while (v !== d);
            tn(p, s.memoizedState) || (Ct = !0),
            s.memoizedState = p,
            s.baseQueue === null && (s.baseState = p),
            o.lastRenderedState = p
        }
        return [p, l]
    }
    function Bp() {}
    function Up(n, s) {
        var o = $e
          , l = qt()
          , d = s()
          , p = !tn(l.memoizedState, d);
        if (p && (l.memoizedState = d,
        Ct = !0),
        l = l.queue,
        sc(Hp.bind(null, o, l, n), [n]),
        l.getSnapshot !== s || p || st !== null && st.memoizedState.tag & 1) {
            if (o.flags |= 2048,
            $i(9, $p.bind(null, o, l, d, s), void 0, null),
            it === null)
                throw Error(r(349));
            (Mr & 30) !== 0 || zp(o, s, d)
        }
        return d
    }
    function zp(n, s, o) {
        n.flags |= 16384,
        n = {
            getSnapshot: s,
            value: o
        },
        s = $e.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        $e.updateQueue = s,
        s.stores = [n]) : (o = s.stores,
        o === null ? s.stores = [n] : o.push(n))
    }
    function $p(n, s, o, l) {
        s.value = o,
        s.getSnapshot = l,
        qp(s) && Wp(n)
    }
    function Hp(n, s, o) {
        return o(function() {
            qp(s) && Wp(n)
        })
    }
    function qp(n) {
        var s = n.getSnapshot;
        n = n.value;
        try {
            var o = s();
            return !tn(n, o)
        } catch {
            return !0
        }
    }
    function Wp(n) {
        var s = Nn(n, 1);
        s !== null && an(s, n, 1, -1)
    }
    function Kp(n) {
        var s = gn();
        return typeof n == "function" && (n = n()),
        s.memoizedState = s.baseState = n,
        n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: zi,
            lastRenderedState: n
        },
        s.queue = n,
        n = n.dispatch = hS.bind(null, $e, n),
        [s.memoizedState, n]
    }
    function $i(n, s, o, l) {
        return n = {
            tag: n,
            create: s,
            destroy: o,
            deps: l,
            next: null
        },
        s = $e.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        $e.updateQueue = s,
        s.lastEffect = n.next = n) : (o = s.lastEffect,
        o === null ? s.lastEffect = n.next = n : (l = o.next,
        o.next = n,
        n.next = l,
        s.lastEffect = n)),
        n
    }
    function Qp() {
        return qt().memoizedState
    }
    function Ea(n, s, o, l) {
        var d = gn();
        $e.flags |= n,
        d.memoizedState = $i(1 | s, o, void 0, l === void 0 ? null : l)
    }
    function ka(n, s, o, l) {
        var d = qt();
        l = l === void 0 ? null : l;
        var p = void 0;
        if (et !== null) {
            var v = et.memoizedState;
            if (p = v.destroy,
            l !== null && Zu(l, v.deps)) {
                d.memoizedState = $i(s, o, p, l);
                return
            }
        }
        $e.flags |= n,
        d.memoizedState = $i(1 | s, o, p, l)
    }
    function Gp(n, s) {
        return Ea(8390656, 8, n, s)
    }
    function sc(n, s) {
        return ka(2048, 8, n, s)
    }
    function Yp(n, s) {
        return ka(4, 2, n, s)
    }
    function Xp(n, s) {
        return ka(4, 4, n, s)
    }
    function Jp(n, s) {
        if (typeof s == "function")
            return n = n(),
            s(n),
            function() {
                s(null)
            }
            ;
        if (s != null)
            return n = n(),
            s.current = n,
            function() {
                s.current = null
            }
    }
    function Zp(n, s, o) {
        return o = o != null ? o.concat([n]) : null,
        ka(4, 4, Jp.bind(null, s, n), o)
    }
    function ic() {}
    function em(n, s) {
        var o = qt();
        s = s === void 0 ? null : s;
        var l = o.memoizedState;
        return l !== null && s !== null && Zu(s, l[1]) ? l[0] : (o.memoizedState = [n, s],
        n)
    }
    function tm(n, s) {
        var o = qt();
        s = s === void 0 ? null : s;
        var l = o.memoizedState;
        return l !== null && s !== null && Zu(s, l[1]) ? l[0] : (n = n(),
        o.memoizedState = [n, s],
        n)
    }
    function nm(n, s, o) {
        return (Mr & 21) === 0 ? (n.baseState && (n.baseState = !1,
        Ct = !0),
        n.memoizedState = o) : (tn(o, s) || (o = Oh(),
        $e.lanes |= o,
        jr |= o,
        n.baseState = !0),
        s)
    }
    function dS(n, s) {
        var o = Me;
        Me = o !== 0 && 4 > o ? o : 4,
        n(!0);
        var l = Ju.transition;
        Ju.transition = {};
        try {
            n(!1),
            s()
        } finally {
            Me = o,
            Ju.transition = l
        }
    }
    function rm() {
        return qt().memoizedState
    }
    function fS(n, s, o) {
        var l = or(n);
        if (o = {
            lane: l,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        sm(n))
            im(s, o);
        else if (o = Mp(n, s, o, l),
        o !== null) {
            var d = St();
            an(o, n, l, d),
            om(o, s, l)
        }
    }
    function hS(n, s, o) {
        var l = or(n)
          , d = {
            lane: l,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (sm(n))
            im(s, d);
        else {
            var p = n.alternate;
            if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = s.lastRenderedReducer,
            p !== null))
                try {
                    var v = s.lastRenderedState
                      , E = p(v, o);
                    if (d.hasEagerState = !0,
                    d.eagerState = E,
                    tn(E, v)) {
                        var C = s.interleaved;
                        C === null ? (d.next = d,
                        Wu(s)) : (d.next = C.next,
                        C.next = d),
                        s.interleaved = d;
                        return
                    }
                } catch {} finally {}
            o = Mp(n, s, d, l),
            o !== null && (d = St(),
            an(o, n, l, d),
            om(o, s, l))
        }
    }
    function sm(n) {
        var s = n.alternate;
        return n === $e || s !== null && s === $e
    }
    function im(n, s) {
        Bi = ba = !0;
        var o = n.pending;
        o === null ? s.next = s : (s.next = o.next,
        o.next = s),
        n.pending = s
    }
    function om(n, s, o) {
        if ((o & 4194240) !== 0) {
            var l = s.lanes;
            l &= n.pendingLanes,
            o |= l,
            s.lanes = o,
            au(n, o)
        }
    }
    var Ta = {
        readContext: Ht,
        useCallback: pt,
        useContext: pt,
        useEffect: pt,
        useImperativeHandle: pt,
        useInsertionEffect: pt,
        useLayoutEffect: pt,
        useMemo: pt,
        useReducer: pt,
        useRef: pt,
        useState: pt,
        useDebugValue: pt,
        useDeferredValue: pt,
        useTransition: pt,
        useMutableSource: pt,
        useSyncExternalStore: pt,
        useId: pt,
        unstable_isNewReconciler: !1
    }
      , pS = {
        readContext: Ht,
        useCallback: function(n, s) {
            return gn().memoizedState = [n, s === void 0 ? null : s],
            n
        },
        useContext: Ht,
        useEffect: Gp,
        useImperativeHandle: function(n, s, o) {
            return o = o != null ? o.concat([n]) : null,
            Ea(4194308, 4, Jp.bind(null, s, n), o)
        },
        useLayoutEffect: function(n, s) {
            return Ea(4194308, 4, n, s)
        },
        useInsertionEffect: function(n, s) {
            return Ea(4, 2, n, s)
        },
        useMemo: function(n, s) {
            var o = gn();
            return s = s === void 0 ? null : s,
            n = n(),
            o.memoizedState = [n, s],
            n
        },
        useReducer: function(n, s, o) {
            var l = gn();
            return s = o !== void 0 ? o(s) : s,
            l.memoizedState = l.baseState = s,
            n = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: n,
                lastRenderedState: s
            },
            l.queue = n,
            n = n.dispatch = fS.bind(null, $e, n),
            [l.memoizedState, n]
        },
        useRef: function(n) {
            var s = gn();
            return n = {
                current: n
            },
            s.memoizedState = n
        },
        useState: Kp,
        useDebugValue: ic,
        useDeferredValue: function(n) {
            return gn().memoizedState = n
        },
        useTransition: function() {
            var n = Kp(!1)
              , s = n[0];
            return n = dS.bind(null, n[1]),
            gn().memoizedState = n,
            [s, n]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(n, s, o) {
            var l = $e
              , d = gn();
            if (Ue) {
                if (o === void 0)
                    throw Error(r(407));
                o = o()
            } else {
                if (o = s(),
                it === null)
                    throw Error(r(349));
                (Mr & 30) !== 0 || zp(l, s, o)
            }
            d.memoizedState = o;
            var p = {
                value: o,
                getSnapshot: s
            };
            return d.queue = p,
            Gp(Hp.bind(null, l, p, n), [n]),
            l.flags |= 2048,
            $i(9, $p.bind(null, l, p, o, s), void 0, null),
            o
        },
        useId: function() {
            var n = gn()
              , s = it.identifierPrefix;
            if (Ue) {
                var o = An
                  , l = Rn;
                o = (l & ~(1 << 32 - en(l) - 1)).toString(32) + o,
                s = ":" + s + "R" + o,
                o = Ui++,
                0 < o && (s += "H" + o.toString(32)),
                s += ":"
            } else
                o = cS++,
                s = ":" + s + "r" + o.toString(32) + ":";
            return n.memoizedState = s
        },
        unstable_isNewReconciler: !1
    }
      , mS = {
        readContext: Ht,
        useCallback: em,
        useContext: Ht,
        useEffect: sc,
        useImperativeHandle: Zp,
        useInsertionEffect: Yp,
        useLayoutEffect: Xp,
        useMemo: tm,
        useReducer: nc,
        useRef: Qp,
        useState: function() {
            return nc(zi)
        },
        useDebugValue: ic,
        useDeferredValue: function(n) {
            var s = qt();
            return nm(s, et.memoizedState, n)
        },
        useTransition: function() {
            var n = nc(zi)[0]
              , s = qt().memoizedState;
            return [n, s]
        },
        useMutableSource: Bp,
        useSyncExternalStore: Up,
        useId: rm,
        unstable_isNewReconciler: !1
    }
      , gS = {
        readContext: Ht,
        useCallback: em,
        useContext: Ht,
        useEffect: sc,
        useImperativeHandle: Zp,
        useInsertionEffect: Yp,
        useLayoutEffect: Xp,
        useMemo: tm,
        useReducer: rc,
        useRef: Qp,
        useState: function() {
            return rc(zi)
        },
        useDebugValue: ic,
        useDeferredValue: function(n) {
            var s = qt();
            return et === null ? s.memoizedState = n : nm(s, et.memoizedState, n)
        },
        useTransition: function() {
            var n = rc(zi)[0]
              , s = qt().memoizedState;
            return [n, s]
        },
        useMutableSource: Bp,
        useSyncExternalStore: Up,
        useId: rm,
        unstable_isNewReconciler: !1
    };
    function rn(n, s) {
        if (n && n.defaultProps) {
            s = X({}, s),
            n = n.defaultProps;
            for (var o in n)
                s[o] === void 0 && (s[o] = n[o]);
            return s
        }
        return s
    }
    function oc(n, s, o, l) {
        s = n.memoizedState,
        o = o(l, s),
        o = o == null ? s : X({}, s, o),
        n.memoizedState = o,
        n.lanes === 0 && (n.updateQueue.baseState = o)
    }
    var Ca = {
        isMounted: function(n) {
            return (n = n._reactInternals) ? _r(n) === n : !1
        },
        enqueueSetState: function(n, s, o) {
            n = n._reactInternals;
            var l = St()
              , d = or(n)
              , p = On(l, d);
            p.payload = s,
            o != null && (p.callback = o),
            s = nr(n, p, d),
            s !== null && (an(s, n, d, l),
            va(s, n, d))
        },
        enqueueReplaceState: function(n, s, o) {
            n = n._reactInternals;
            var l = St()
              , d = or(n)
              , p = On(l, d);
            p.tag = 1,
            p.payload = s,
            o != null && (p.callback = o),
            s = nr(n, p, d),
            s !== null && (an(s, n, d, l),
            va(s, n, d))
        },
        enqueueForceUpdate: function(n, s) {
            n = n._reactInternals;
            var o = St()
              , l = or(n)
              , d = On(o, l);
            d.tag = 2,
            s != null && (d.callback = s),
            s = nr(n, d, l),
            s !== null && (an(s, n, l, o),
            va(s, n, l))
        }
    };
    function am(n, s, o, l, d, p, v) {
        return n = n.stateNode,
        typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(l, p, v) : s.prototype && s.prototype.isPureReactComponent ? !Ri(o, l) || !Ri(d, p) : !0
    }
    function lm(n, s, o) {
        var l = !1
          , d = Zn
          , p = s.contextType;
        return typeof p == "object" && p !== null ? p = Ht(p) : (d = Tt(s) ? Ar : ht.current,
        l = s.contextTypes,
        p = (l = l != null) ? xs(n, d) : Zn),
        s = new s(o,p),
        n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        s.updater = Ca,
        n.stateNode = s,
        s._reactInternals = n,
        l && (n = n.stateNode,
        n.__reactInternalMemoizedUnmaskedChildContext = d,
        n.__reactInternalMemoizedMaskedChildContext = p),
        s
    }
    function um(n, s, o, l) {
        n = s.state,
        typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(o, l),
        typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(o, l),
        s.state !== n && Ca.enqueueReplaceState(s, s.state, null)
    }
    function ac(n, s, o, l) {
        var d = n.stateNode;
        d.props = o,
        d.state = n.memoizedState,
        d.refs = {},
        Ku(n);
        var p = s.contextType;
        typeof p == "object" && p !== null ? d.context = Ht(p) : (p = Tt(s) ? Ar : ht.current,
        d.context = xs(n, p)),
        d.state = n.memoizedState,
        p = s.getDerivedStateFromProps,
        typeof p == "function" && (oc(n, s, p, o),
        d.state = n.memoizedState),
        typeof s.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (s = d.state,
        typeof d.componentWillMount == "function" && d.componentWillMount(),
        typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(),
        s !== d.state && Ca.enqueueReplaceState(d, d.state, null),
        wa(n, o, d, l),
        d.state = n.memoizedState),
        typeof d.componentDidMount == "function" && (n.flags |= 4194308)
    }
    function _s(n, s) {
        try {
            var o = ""
              , l = s;
            do
                o += be(l),
                l = l.return;
            while (l);
            var d = o
        } catch (p) {
            d = `
Error generating stack: ` + p.message + `
` + p.stack
        }
        return {
            value: n,
            source: s,
            stack: d,
            digest: null
        }
    }
    function lc(n, s, o) {
        return {
            value: n,
            source: null,
            stack: o ?? null,
            digest: s ?? null
        }
    }
    function uc(n, s) {
        try {
            console.error(s.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var yS = typeof WeakMap == "function" ? WeakMap : Map;
    function cm(n, s, o) {
        o = On(-1, o),
        o.tag = 3,
        o.payload = {
            element: null
        };
        var l = s.value;
        return o.callback = function() {
            La || (La = !0,
            kc = l),
            uc(n, s)
        }
        ,
        o
    }
    function dm(n, s, o) {
        o = On(-1, o),
        o.tag = 3;
        var l = n.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var d = s.value;
            o.payload = function() {
                return l(d)
            }
            ,
            o.callback = function() {
                uc(n, s)
            }
        }
        var p = n.stateNode;
        return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
            uc(n, s),
            typeof l != "function" && (sr === null ? sr = new Set([this]) : sr.add(this));
            var v = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: v !== null ? v : ""
            })
        }
        ),
        o
    }
    function fm(n, s, o) {
        var l = n.pingCache;
        if (l === null) {
            l = n.pingCache = new yS;
            var d = new Set;
            l.set(s, d)
        } else
            d = l.get(s),
            d === void 0 && (d = new Set,
            l.set(s, d));
        d.has(o) || (d.add(o),
        n = NS.bind(null, n, s, o),
        s.then(n, n))
    }
    function hm(n) {
        do {
            var s;
            if ((s = n.tag === 13) && (s = n.memoizedState,
            s = s !== null ? s.dehydrated !== null : !0),
            s)
                return n;
            n = n.return
        } while (n !== null);
        return null
    }
    function pm(n, s, o, l, d) {
        return (n.mode & 1) === 0 ? (n === s ? n.flags |= 65536 : (n.flags |= 128,
        o.flags |= 131072,
        o.flags &= -52805,
        o.tag === 1 && (o.alternate === null ? o.tag = 17 : (s = On(-1, 1),
        s.tag = 2,
        nr(o, s, 1))),
        o.lanes |= 1),
        n) : (n.flags |= 65536,
        n.lanes = d,
        n)
    }
    var vS = j.ReactCurrentOwner
      , Ct = !1;
    function xt(n, s, o, l) {
        s.child = n === null ? Dp(s, null, o, l) : ks(s, n.child, o, l)
    }
    function mm(n, s, o, l, d) {
        o = o.render;
        var p = s.ref;
        return Cs(s, d),
        l = ec(n, s, o, l, p, d),
        o = tc(),
        n !== null && !Ct ? (s.updateQueue = n.updateQueue,
        s.flags &= -2053,
        n.lanes &= ~d,
        Ln(n, s, d)) : (Ue && o && Iu(s),
        s.flags |= 1,
        xt(n, s, l, d),
        s.child)
    }
    function gm(n, s, o, l, d) {
        if (n === null) {
            var p = o.type;
            return typeof p == "function" && !Nc(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (s.tag = 15,
            s.type = p,
            ym(n, s, p, l, d)) : (n = Va(o.type, null, l, s, s.mode, d),
            n.ref = s.ref,
            n.return = s,
            s.child = n)
        }
        if (p = n.child,
        (n.lanes & d) === 0) {
            var v = p.memoizedProps;
            if (o = o.compare,
            o = o !== null ? o : Ri,
            o(v, l) && n.ref === s.ref)
                return Ln(n, s, d)
        }
        return s.flags |= 1,
        n = lr(p, l),
        n.ref = s.ref,
        n.return = s,
        s.child = n
    }
    function ym(n, s, o, l, d) {
        if (n !== null) {
            var p = n.memoizedProps;
            if (Ri(p, l) && n.ref === s.ref)
                if (Ct = !1,
                s.pendingProps = l = p,
                (n.lanes & d) !== 0)
                    (n.flags & 131072) !== 0 && (Ct = !0);
                else
                    return s.lanes = n.lanes,
                    Ln(n, s, d)
        }
        return cc(n, s, o, l, d)
    }
    function vm(n, s, o) {
        var l = s.pendingProps
          , d = l.children
          , p = n !== null ? n.memoizedState : null;
        if (l.mode === "hidden")
            if ((s.mode & 1) === 0)
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Ie(As, Vt),
                Vt |= o;
            else {
                if ((o & 1073741824) === 0)
                    return n = p !== null ? p.baseLanes | o : o,
                    s.lanes = s.childLanes = 1073741824,
                    s.memoizedState = {
                        baseLanes: n,
                        cachePool: null,
                        transitions: null
                    },
                    s.updateQueue = null,
                    Ie(As, Vt),
                    Vt |= n,
                    null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                l = p !== null ? p.baseLanes : o,
                Ie(As, Vt),
                Vt |= l
            }
        else
            p !== null ? (l = p.baseLanes | o,
            s.memoizedState = null) : l = o,
            Ie(As, Vt),
            Vt |= l;
        return xt(n, s, d, o),
        s.child
    }
    function wm(n, s) {
        var o = s.ref;
        (n === null && o !== null || n !== null && n.ref !== o) && (s.flags |= 512,
        s.flags |= 2097152)
    }
    function cc(n, s, o, l, d) {
        var p = Tt(o) ? Ar : ht.current;
        return p = xs(s, p),
        Cs(s, d),
        o = ec(n, s, o, l, p, d),
        l = tc(),
        n !== null && !Ct ? (s.updateQueue = n.updateQueue,
        s.flags &= -2053,
        n.lanes &= ~d,
        Ln(n, s, d)) : (Ue && l && Iu(s),
        s.flags |= 1,
        xt(n, s, o, d),
        s.child)
    }
    function xm(n, s, o, l, d) {
        if (Tt(o)) {
            var p = !0;
            ca(s)
        } else
            p = !1;
        if (Cs(s, d),
        s.stateNode === null)
            _a(n, s),
            lm(s, o, l),
            ac(s, o, l, d),
            l = !0;
        else if (n === null) {
            var v = s.stateNode
              , E = s.memoizedProps;
            v.props = E;
            var C = v.context
              , I = o.contextType;
            typeof I == "object" && I !== null ? I = Ht(I) : (I = Tt(o) ? Ar : ht.current,
            I = xs(s, I));
            var W = o.getDerivedStateFromProps
              , K = typeof W == "function" || typeof v.getSnapshotBeforeUpdate == "function";
            K || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (E !== l || C !== I) && um(s, v, l, I),
            tr = !1;
            var H = s.memoizedState;
            v.state = H,
            wa(s, l, v, d),
            C = s.memoizedState,
            E !== l || H !== C || kt.current || tr ? (typeof W == "function" && (oc(s, o, W, l),
            C = s.memoizedState),
            (E = tr || am(s, o, E, l, H, C, I)) ? (K || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(),
            typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()),
            typeof v.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308),
            s.memoizedProps = l,
            s.memoizedState = C),
            v.props = l,
            v.state = C,
            v.context = I,
            l = E) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308),
            l = !1)
        } else {
            v = s.stateNode,
            jp(n, s),
            E = s.memoizedProps,
            I = s.type === s.elementType ? E : rn(s.type, E),
            v.props = I,
            K = s.pendingProps,
            H = v.context,
            C = o.contextType,
            typeof C == "object" && C !== null ? C = Ht(C) : (C = Tt(o) ? Ar : ht.current,
            C = xs(s, C));
            var Z = o.getDerivedStateFromProps;
            (W = typeof Z == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (E !== K || H !== C) && um(s, v, l, C),
            tr = !1,
            H = s.memoizedState,
            v.state = H,
            wa(s, l, v, d);
            var se = s.memoizedState;
            E !== K || H !== se || kt.current || tr ? (typeof Z == "function" && (oc(s, o, Z, l),
            se = s.memoizedState),
            (I = tr || am(s, o, I, l, H, se, C) || !1) ? (W || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(l, se, C),
            typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(l, se, C)),
            typeof v.componentDidUpdate == "function" && (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || E === n.memoizedProps && H === n.memoizedState || (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && H === n.memoizedState || (s.flags |= 1024),
            s.memoizedProps = l,
            s.memoizedState = se),
            v.props = l,
            v.state = se,
            v.context = C,
            l = I) : (typeof v.componentDidUpdate != "function" || E === n.memoizedProps && H === n.memoizedState || (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && H === n.memoizedState || (s.flags |= 1024),
            l = !1)
        }
        return dc(n, s, o, l, p, d)
    }
    function dc(n, s, o, l, d, p) {
        wm(n, s);
        var v = (s.flags & 128) !== 0;
        if (!l && !v)
            return d && Tp(s, o, !1),
            Ln(n, s, p);
        l = s.stateNode,
        vS.current = s;
        var E = v && typeof o.getDerivedStateFromError != "function" ? null : l.render();
        return s.flags |= 1,
        n !== null && v ? (s.child = ks(s, n.child, null, p),
        s.child = ks(s, null, E, p)) : xt(n, s, E, p),
        s.memoizedState = l.state,
        d && Tp(s, o, !0),
        s.child
    }
    function Sm(n) {
        var s = n.stateNode;
        s.pendingContext ? Ep(n, s.pendingContext, s.pendingContext !== s.context) : s.context && Ep(n, s.context, !1),
        Qu(n, s.containerInfo)
    }
    function bm(n, s, o, l, d) {
        return Es(),
        Uu(d),
        s.flags |= 256,
        xt(n, s, o, l),
        s.child
    }
    var fc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function hc(n) {
        return {
            baseLanes: n,
            cachePool: null,
            transitions: null
        }
    }
    function Em(n, s, o) {
        var l = s.pendingProps, d = ze.current, p = !1, v = (s.flags & 128) !== 0, E;
        if ((E = v) || (E = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0),
        E ? (p = !0,
        s.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1),
        Ie(ze, d & 1),
        n === null)
            return Bu(s),
            n = s.memoizedState,
            n !== null && (n = n.dehydrated,
            n !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : n.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824,
            null) : (v = l.children,
            n = l.fallback,
            p ? (l = s.mode,
            p = s.child,
            v = {
                mode: "hidden",
                children: v
            },
            (l & 1) === 0 && p !== null ? (p.childLanes = 0,
            p.pendingProps = v) : p = Ba(v, l, 0, null),
            n = Br(n, l, o, null),
            p.return = s,
            n.return = s,
            p.sibling = n,
            s.child = p,
            s.child.memoizedState = hc(o),
            s.memoizedState = fc,
            n) : pc(s, v));
        if (d = n.memoizedState,
        d !== null && (E = d.dehydrated,
        E !== null))
            return wS(n, s, v, l, E, d, o);
        if (p) {
            p = l.fallback,
            v = s.mode,
            d = n.child,
            E = d.sibling;
            var C = {
                mode: "hidden",
                children: l.children
            };
            return (v & 1) === 0 && s.child !== d ? (l = s.child,
            l.childLanes = 0,
            l.pendingProps = C,
            s.deletions = null) : (l = lr(d, C),
            l.subtreeFlags = d.subtreeFlags & 14680064),
            E !== null ? p = lr(E, p) : (p = Br(p, v, o, null),
            p.flags |= 2),
            p.return = s,
            l.return = s,
            l.sibling = p,
            s.child = l,
            l = p,
            p = s.child,
            v = n.child.memoizedState,
            v = v === null ? hc(o) : {
                baseLanes: v.baseLanes | o,
                cachePool: null,
                transitions: v.transitions
            },
            p.memoizedState = v,
            p.childLanes = n.childLanes & ~o,
            s.memoizedState = fc,
            l
        }
        return p = n.child,
        n = p.sibling,
        l = lr(p, {
            mode: "visible",
            children: l.children
        }),
        (s.mode & 1) === 0 && (l.lanes = o),
        l.return = s,
        l.sibling = null,
        n !== null && (o = s.deletions,
        o === null ? (s.deletions = [n],
        s.flags |= 16) : o.push(n)),
        s.child = l,
        s.memoizedState = null,
        l
    }
    function pc(n, s) {
        return s = Ba({
            mode: "visible",
            children: s
        }, n.mode, 0, null),
        s.return = n,
        n.child = s
    }
    function Pa(n, s, o, l) {
        return l !== null && Uu(l),
        ks(s, n.child, null, o),
        n = pc(s, s.pendingProps.children),
        n.flags |= 2,
        s.memoizedState = null,
        n
    }
    function wS(n, s, o, l, d, p, v) {
        if (o)
            return s.flags & 256 ? (s.flags &= -257,
            l = lc(Error(r(422))),
            Pa(n, s, v, l)) : s.memoizedState !== null ? (s.child = n.child,
            s.flags |= 128,
            null) : (p = l.fallback,
            d = s.mode,
            l = Ba({
                mode: "visible",
                children: l.children
            }, d, 0, null),
            p = Br(p, d, v, null),
            p.flags |= 2,
            l.return = s,
            p.return = s,
            l.sibling = p,
            s.child = l,
            (s.mode & 1) !== 0 && ks(s, n.child, null, v),
            s.child.memoizedState = hc(v),
            s.memoizedState = fc,
            p);
        if ((s.mode & 1) === 0)
            return Pa(n, s, v, null);
        if (d.data === "$!") {
            if (l = d.nextSibling && d.nextSibling.dataset,
            l)
                var E = l.dgst;
            return l = E,
            p = Error(r(419)),
            l = lc(p, l, void 0),
            Pa(n, s, v, l)
        }
        if (E = (v & n.childLanes) !== 0,
        Ct || E) {
            if (l = it,
            l !== null) {
                switch (v & -v) {
                case 4:
                    d = 2;
                    break;
                case 16:
                    d = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    d = 32;
                    break;
                case 536870912:
                    d = 268435456;
                    break;
                default:
                    d = 0
                }
                d = (d & (l.suspendedLanes | v)) !== 0 ? 0 : d,
                d !== 0 && d !== p.retryLane && (p.retryLane = d,
                Nn(n, d),
                an(l, n, d, -1))
            }
            return Ac(),
            l = lc(Error(r(421))),
            Pa(n, s, v, l)
        }
        return d.data === "$?" ? (s.flags |= 128,
        s.child = n.child,
        s = OS.bind(null, n),
        d._reactRetry = s,
        null) : (n = p.treeContext,
        Ft = Xn(d.nextSibling),
        It = s,
        Ue = !0,
        nn = null,
        n !== null && (zt[$t++] = Rn,
        zt[$t++] = An,
        zt[$t++] = Nr,
        Rn = n.id,
        An = n.overflow,
        Nr = s),
        s = pc(s, l.children),
        s.flags |= 4096,
        s)
    }
    function km(n, s, o) {
        n.lanes |= s;
        var l = n.alternate;
        l !== null && (l.lanes |= s),
        qu(n.return, s, o)
    }
    function mc(n, s, o, l, d) {
        var p = n.memoizedState;
        p === null ? n.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: o,
            tailMode: d
        } : (p.isBackwards = s,
        p.rendering = null,
        p.renderingStartTime = 0,
        p.last = l,
        p.tail = o,
        p.tailMode = d)
    }
    function Tm(n, s, o) {
        var l = s.pendingProps
          , d = l.revealOrder
          , p = l.tail;
        if (xt(n, s, l.children, o),
        l = ze.current,
        (l & 2) !== 0)
            l = l & 1 | 2,
            s.flags |= 128;
        else {
            if (n !== null && (n.flags & 128) !== 0)
                e: for (n = s.child; n !== null; ) {
                    if (n.tag === 13)
                        n.memoizedState !== null && km(n, o, s);
                    else if (n.tag === 19)
                        km(n, o, s);
                    else if (n.child !== null) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === s)
                        break e;
                    for (; n.sibling === null; ) {
                        if (n.return === null || n.return === s)
                            break e;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            l &= 1
        }
        if (Ie(ze, l),
        (s.mode & 1) === 0)
            s.memoizedState = null;
        else
            switch (d) {
            case "forwards":
                for (o = s.child,
                d = null; o !== null; )
                    n = o.alternate,
                    n !== null && xa(n) === null && (d = o),
                    o = o.sibling;
                o = d,
                o === null ? (d = s.child,
                s.child = null) : (d = o.sibling,
                o.sibling = null),
                mc(s, !1, d, o, p);
                break;
            case "backwards":
                for (o = null,
                d = s.child,
                s.child = null; d !== null; ) {
                    if (n = d.alternate,
                    n !== null && xa(n) === null) {
                        s.child = d;
                        break
                    }
                    n = d.sibling,
                    d.sibling = o,
                    o = d,
                    d = n
                }
                mc(s, !0, o, null, p);
                break;
            case "together":
                mc(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
            }
        return s.child
    }
    function _a(n, s) {
        (s.mode & 1) === 0 && n !== null && (n.alternate = null,
        s.alternate = null,
        s.flags |= 2)
    }
    function Ln(n, s, o) {
        if (n !== null && (s.dependencies = n.dependencies),
        jr |= s.lanes,
        (o & s.childLanes) === 0)
            return null;
        if (n !== null && s.child !== n.child)
            throw Error(r(153));
        if (s.child !== null) {
            for (n = s.child,
            o = lr(n, n.pendingProps),
            s.child = o,
            o.return = s; n.sibling !== null; )
                n = n.sibling,
                o = o.sibling = lr(n, n.pendingProps),
                o.return = s;
            o.sibling = null
        }
        return s.child
    }
    function xS(n, s, o) {
        switch (s.tag) {
        case 3:
            Sm(s),
            Es();
            break;
        case 5:
            Vp(s);
            break;
        case 1:
            Tt(s.type) && ca(s);
            break;
        case 4:
            Qu(s, s.stateNode.containerInfo);
            break;
        case 10:
            var l = s.type._context
              , d = s.memoizedProps.value;
            Ie(ga, l._currentValue),
            l._currentValue = d;
            break;
        case 13:
            if (l = s.memoizedState,
            l !== null)
                return l.dehydrated !== null ? (Ie(ze, ze.current & 1),
                s.flags |= 128,
                null) : (o & s.child.childLanes) !== 0 ? Em(n, s, o) : (Ie(ze, ze.current & 1),
                n = Ln(n, s, o),
                n !== null ? n.sibling : null);
            Ie(ze, ze.current & 1);
            break;
        case 19:
            if (l = (o & s.childLanes) !== 0,
            (n.flags & 128) !== 0) {
                if (l)
                    return Tm(n, s, o);
                s.flags |= 128
            }
            if (d = s.memoizedState,
            d !== null && (d.rendering = null,
            d.tail = null,
            d.lastEffect = null),
            Ie(ze, ze.current),
            l)
                break;
            return null;
        case 22:
        case 23:
            return s.lanes = 0,
            vm(n, s, o)
        }
        return Ln(n, s, o)
    }
    var Cm, gc, Pm, _m;
    Cm = function(n, s) {
        for (var o = s.child; o !== null; ) {
            if (o.tag === 5 || o.tag === 6)
                n.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o,
                o = o.child;
                continue
            }
            if (o === s)
                break;
            for (; o.sibling === null; ) {
                if (o.return === null || o.return === s)
                    return;
                o = o.return
            }
            o.sibling.return = o.return,
            o = o.sibling
        }
    }
    ,
    gc = function() {}
    ,
    Pm = function(n, s, o, l) {
        var d = n.memoizedProps;
        if (d !== l) {
            n = s.stateNode,
            Dr(mn.current);
            var p = null;
            switch (o) {
            case "input":
                d = ql(n, d),
                l = ql(n, l),
                p = [];
                break;
            case "select":
                d = X({}, d, {
                    value: void 0
                }),
                l = X({}, l, {
                    value: void 0
                }),
                p = [];
                break;
            case "textarea":
                d = Ql(n, d),
                l = Ql(n, l),
                p = [];
                break;
            default:
                typeof d.onClick != "function" && typeof l.onClick == "function" && (n.onclick = aa)
            }
            Yl(o, l);
            var v;
            o = null;
            for (I in d)
                if (!l.hasOwnProperty(I) && d.hasOwnProperty(I) && d[I] != null)
                    if (I === "style") {
                        var E = d[I];
                        for (v in E)
                            E.hasOwnProperty(v) && (o || (o = {}),
                            o[v] = "")
                    } else
                        I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (a.hasOwnProperty(I) ? p || (p = []) : (p = p || []).push(I, null));
            for (I in l) {
                var C = l[I];
                if (E = d != null ? d[I] : void 0,
                l.hasOwnProperty(I) && C !== E && (C != null || E != null))
                    if (I === "style")
                        if (E) {
                            for (v in E)
                                !E.hasOwnProperty(v) || C && C.hasOwnProperty(v) || (o || (o = {}),
                                o[v] = "");
                            for (v in C)
                                C.hasOwnProperty(v) && E[v] !== C[v] && (o || (o = {}),
                                o[v] = C[v])
                        } else
                            o || (p || (p = []),
                            p.push(I, o)),
                            o = C;
                    else
                        I === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0,
                        E = E ? E.__html : void 0,
                        C != null && E !== C && (p = p || []).push(I, C)) : I === "children" ? typeof C != "string" && typeof C != "number" || (p = p || []).push(I, "" + C) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (a.hasOwnProperty(I) ? (C != null && I === "onScroll" && Fe("scroll", n),
                        p || E === C || (p = [])) : (p = p || []).push(I, C))
            }
            o && (p = p || []).push("style", o);
            var I = p;
            (s.updateQueue = I) && (s.flags |= 4)
        }
    }
    ,
    _m = function(n, s, o, l) {
        o !== l && (s.flags |= 4)
    }
    ;
    function Hi(n, s) {
        if (!Ue)
            switch (n.tailMode) {
            case "hidden":
                s = n.tail;
                for (var o = null; s !== null; )
                    s.alternate !== null && (o = s),
                    s = s.sibling;
                o === null ? n.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = n.tail;
                for (var l = null; o !== null; )
                    o.alternate !== null && (l = o),
                    o = o.sibling;
                l === null ? s || n.tail === null ? n.tail = null : n.tail.sibling = null : l.sibling = null
            }
    }
    function mt(n) {
        var s = n.alternate !== null && n.alternate.child === n.child
          , o = 0
          , l = 0;
        if (s)
            for (var d = n.child; d !== null; )
                o |= d.lanes | d.childLanes,
                l |= d.subtreeFlags & 14680064,
                l |= d.flags & 14680064,
                d.return = n,
                d = d.sibling;
        else
            for (d = n.child; d !== null; )
                o |= d.lanes | d.childLanes,
                l |= d.subtreeFlags,
                l |= d.flags,
                d.return = n,
                d = d.sibling;
        return n.subtreeFlags |= l,
        n.childLanes = o,
        s
    }
    function SS(n, s, o) {
        var l = s.pendingProps;
        switch (Fu(s),
        s.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return mt(s),
            null;
        case 1:
            return Tt(s.type) && ua(),
            mt(s),
            null;
        case 3:
            return l = s.stateNode,
            Ps(),
            Ve(kt),
            Ve(ht),
            Xu(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (n === null || n.child === null) && (pa(s) ? s.flags |= 4 : n === null || n.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024,
            nn !== null && (Pc(nn),
            nn = null))),
            gc(n, s),
            mt(s),
            null;
        case 5:
            Gu(s);
            var d = Dr(Vi.current);
            if (o = s.type,
            n !== null && s.stateNode != null)
                Pm(n, s, o, l, d),
                n.ref !== s.ref && (s.flags |= 512,
                s.flags |= 2097152);
            else {
                if (!l) {
                    if (s.stateNode === null)
                        throw Error(r(166));
                    return mt(s),
                    null
                }
                if (n = Dr(mn.current),
                pa(s)) {
                    l = s.stateNode,
                    o = s.type;
                    var p = s.memoizedProps;
                    switch (l[pn] = s,
                    l[Di] = p,
                    n = (s.mode & 1) !== 0,
                    o) {
                    case "dialog":
                        Fe("cancel", l),
                        Fe("close", l);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Fe("load", l);
                        break;
                    case "video":
                    case "audio":
                        for (d = 0; d < Ni.length; d++)
                            Fe(Ni[d], l);
                        break;
                    case "source":
                        Fe("error", l);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Fe("error", l),
                        Fe("load", l);
                        break;
                    case "details":
                        Fe("toggle", l);
                        break;
                    case "input":
                        lh(l, p),
                        Fe("invalid", l);
                        break;
                    case "select":
                        l._wrapperState = {
                            wasMultiple: !!p.multiple
                        },
                        Fe("invalid", l);
                        break;
                    case "textarea":
                        dh(l, p),
                        Fe("invalid", l)
                    }
                    Yl(o, p),
                    d = null;
                    for (var v in p)
                        if (p.hasOwnProperty(v)) {
                            var E = p[v];
                            v === "children" ? typeof E == "string" ? l.textContent !== E && (p.suppressHydrationWarning !== !0 && oa(l.textContent, E, n),
                            d = ["children", E]) : typeof E == "number" && l.textContent !== "" + E && (p.suppressHydrationWarning !== !0 && oa(l.textContent, E, n),
                            d = ["children", "" + E]) : a.hasOwnProperty(v) && E != null && v === "onScroll" && Fe("scroll", l)
                        }
                    switch (o) {
                    case "input":
                        Hn(l),
                        ch(l, p, !0);
                        break;
                    case "textarea":
                        Hn(l),
                        hh(l);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof p.onClick == "function" && (l.onclick = aa)
                    }
                    l = d,
                    s.updateQueue = l,
                    l !== null && (s.flags |= 4)
                } else {
                    v = d.nodeType === 9 ? d : d.ownerDocument,
                    n === "http://www.w3.org/1999/xhtml" && (n = ph(o)),
                    n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = v.createElement("div"),
                    n.innerHTML = "<script><\/script>",
                    n = n.removeChild(n.firstChild)) : typeof l.is == "string" ? n = v.createElement(o, {
                        is: l.is
                    }) : (n = v.createElement(o),
                    o === "select" && (v = n,
                    l.multiple ? v.multiple = !0 : l.size && (v.size = l.size))) : n = v.createElementNS(n, o),
                    n[pn] = s,
                    n[Di] = l,
                    Cm(n, s, !1, !1),
                    s.stateNode = n;
                    e: {
                        switch (v = Xl(o, l),
                        o) {
                        case "dialog":
                            Fe("cancel", n),
                            Fe("close", n),
                            d = l;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Fe("load", n),
                            d = l;
                            break;
                        case "video":
                        case "audio":
                            for (d = 0; d < Ni.length; d++)
                                Fe(Ni[d], n);
                            d = l;
                            break;
                        case "source":
                            Fe("error", n),
                            d = l;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Fe("error", n),
                            Fe("load", n),
                            d = l;
                            break;
                        case "details":
                            Fe("toggle", n),
                            d = l;
                            break;
                        case "input":
                            lh(n, l),
                            d = ql(n, l),
                            Fe("invalid", n);
                            break;
                        case "option":
                            d = l;
                            break;
                        case "select":
                            n._wrapperState = {
                                wasMultiple: !!l.multiple
                            },
                            d = X({}, l, {
                                value: void 0
                            }),
                            Fe("invalid", n);
                            break;
                        case "textarea":
                            dh(n, l),
                            d = Ql(n, l),
                            Fe("invalid", n);
                            break;
                        default:
                            d = l
                        }
                        Yl(o, d),
                        E = d;
                        for (p in E)
                            if (E.hasOwnProperty(p)) {
                                var C = E[p];
                                p === "style" ? yh(n, C) : p === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0,
                                C != null && mh(n, C)) : p === "children" ? typeof C == "string" ? (o !== "textarea" || C !== "") && fi(n, C) : typeof C == "number" && fi(n, "" + C) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (a.hasOwnProperty(p) ? C != null && p === "onScroll" && Fe("scroll", n) : C != null && M(n, p, C, v))
                            }
                        switch (o) {
                        case "input":
                            Hn(n),
                            ch(n, l, !1);
                            break;
                        case "textarea":
                            Hn(n),
                            hh(n);
                            break;
                        case "option":
                            l.value != null && n.setAttribute("value", "" + Ne(l.value));
                            break;
                        case "select":
                            n.multiple = !!l.multiple,
                            p = l.value,
                            p != null ? ls(n, !!l.multiple, p, !1) : l.defaultValue != null && ls(n, !!l.multiple, l.defaultValue, !0);
                            break;
                        default:
                            typeof d.onClick == "function" && (n.onclick = aa)
                        }
                        switch (o) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            l = !!l.autoFocus;
                            break e;
                        case "img":
                            l = !0;
                            break e;
                        default:
                            l = !1
                        }
                    }
                    l && (s.flags |= 4)
                }
                s.ref !== null && (s.flags |= 512,
                s.flags |= 2097152)
            }
            return mt(s),
            null;
        case 6:
            if (n && s.stateNode != null)
                _m(n, s, n.memoizedProps, l);
            else {
                if (typeof l != "string" && s.stateNode === null)
                    throw Error(r(166));
                if (o = Dr(Vi.current),
                Dr(mn.current),
                pa(s)) {
                    if (l = s.stateNode,
                    o = s.memoizedProps,
                    l[pn] = s,
                    (p = l.nodeValue !== o) && (n = It,
                    n !== null))
                        switch (n.tag) {
                        case 3:
                            oa(l.nodeValue, o, (n.mode & 1) !== 0);
                            break;
                        case 5:
                            n.memoizedProps.suppressHydrationWarning !== !0 && oa(l.nodeValue, o, (n.mode & 1) !== 0)
                        }
                    p && (s.flags |= 4)
                } else
                    l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l),
                    l[pn] = s,
                    s.stateNode = l
            }
            return mt(s),
            null;
        case 13:
            if (Ve(ze),
            l = s.memoizedState,
            n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
                if (Ue && Ft !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0)
                    Np(),
                    Es(),
                    s.flags |= 98560,
                    p = !1;
                else if (p = pa(s),
                l !== null && l.dehydrated !== null) {
                    if (n === null) {
                        if (!p)
                            throw Error(r(318));
                        if (p = s.memoizedState,
                        p = p !== null ? p.dehydrated : null,
                        !p)
                            throw Error(r(317));
                        p[pn] = s
                    } else
                        Es(),
                        (s.flags & 128) === 0 && (s.memoizedState = null),
                        s.flags |= 4;
                    mt(s),
                    p = !1
                } else
                    nn !== null && (Pc(nn),
                    nn = null),
                    p = !0;
                if (!p)
                    return s.flags & 65536 ? s : null
            }
            return (s.flags & 128) !== 0 ? (s.lanes = o,
            s) : (l = l !== null,
            l !== (n !== null && n.memoizedState !== null) && l && (s.child.flags |= 8192,
            (s.mode & 1) !== 0 && (n === null || (ze.current & 1) !== 0 ? tt === 0 && (tt = 3) : Ac())),
            s.updateQueue !== null && (s.flags |= 4),
            mt(s),
            null);
        case 4:
            return Ps(),
            gc(n, s),
            n === null && Oi(s.stateNode.containerInfo),
            mt(s),
            null;
        case 10:
            return Hu(s.type._context),
            mt(s),
            null;
        case 17:
            return Tt(s.type) && ua(),
            mt(s),
            null;
        case 19:
            if (Ve(ze),
            p = s.memoizedState,
            p === null)
                return mt(s),
                null;
            if (l = (s.flags & 128) !== 0,
            v = p.rendering,
            v === null)
                if (l)
                    Hi(p, !1);
                else {
                    if (tt !== 0 || n !== null && (n.flags & 128) !== 0)
                        for (n = s.child; n !== null; ) {
                            if (v = xa(n),
                            v !== null) {
                                for (s.flags |= 128,
                                Hi(p, !1),
                                l = v.updateQueue,
                                l !== null && (s.updateQueue = l,
                                s.flags |= 4),
                                s.subtreeFlags = 0,
                                l = o,
                                o = s.child; o !== null; )
                                    p = o,
                                    n = l,
                                    p.flags &= 14680066,
                                    v = p.alternate,
                                    v === null ? (p.childLanes = 0,
                                    p.lanes = n,
                                    p.child = null,
                                    p.subtreeFlags = 0,
                                    p.memoizedProps = null,
                                    p.memoizedState = null,
                                    p.updateQueue = null,
                                    p.dependencies = null,
                                    p.stateNode = null) : (p.childLanes = v.childLanes,
                                    p.lanes = v.lanes,
                                    p.child = v.child,
                                    p.subtreeFlags = 0,
                                    p.deletions = null,
                                    p.memoizedProps = v.memoizedProps,
                                    p.memoizedState = v.memoizedState,
                                    p.updateQueue = v.updateQueue,
                                    p.type = v.type,
                                    n = v.dependencies,
                                    p.dependencies = n === null ? null : {
                                        lanes: n.lanes,
                                        firstContext: n.firstContext
                                    }),
                                    o = o.sibling;
                                return Ie(ze, ze.current & 1 | 2),
                                s.child
                            }
                            n = n.sibling
                        }
                    p.tail !== null && Qe() > Ns && (s.flags |= 128,
                    l = !0,
                    Hi(p, !1),
                    s.lanes = 4194304)
                }
            else {
                if (!l)
                    if (n = xa(v),
                    n !== null) {
                        if (s.flags |= 128,
                        l = !0,
                        o = n.updateQueue,
                        o !== null && (s.updateQueue = o,
                        s.flags |= 4),
                        Hi(p, !0),
                        p.tail === null && p.tailMode === "hidden" && !v.alternate && !Ue)
                            return mt(s),
                            null
                    } else
                        2 * Qe() - p.renderingStartTime > Ns && o !== 1073741824 && (s.flags |= 128,
                        l = !0,
                        Hi(p, !1),
                        s.lanes = 4194304);
                p.isBackwards ? (v.sibling = s.child,
                s.child = v) : (o = p.last,
                o !== null ? o.sibling = v : s.child = v,
                p.last = v)
            }
            return p.tail !== null ? (s = p.tail,
            p.rendering = s,
            p.tail = s.sibling,
            p.renderingStartTime = Qe(),
            s.sibling = null,
            o = ze.current,
            Ie(ze, l ? o & 1 | 2 : o & 1),
            s) : (mt(s),
            null);
        case 22:
        case 23:
            return Rc(),
            l = s.memoizedState !== null,
            n !== null && n.memoizedState !== null !== l && (s.flags |= 8192),
            l && (s.mode & 1) !== 0 ? (Vt & 1073741824) !== 0 && (mt(s),
            s.subtreeFlags & 6 && (s.flags |= 8192)) : mt(s),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(r(156, s.tag))
    }
    function bS(n, s) {
        switch (Fu(s),
        s.tag) {
        case 1:
            return Tt(s.type) && ua(),
            n = s.flags,
            n & 65536 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 3:
            return Ps(),
            Ve(kt),
            Ve(ht),
            Xu(),
            n = s.flags,
            (n & 65536) !== 0 && (n & 128) === 0 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 5:
            return Gu(s),
            null;
        case 13:
            if (Ve(ze),
            n = s.memoizedState,
            n !== null && n.dehydrated !== null) {
                if (s.alternate === null)
                    throw Error(r(340));
                Es()
            }
            return n = s.flags,
            n & 65536 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 19:
            return Ve(ze),
            null;
        case 4:
            return Ps(),
            null;
        case 10:
            return Hu(s.type._context),
            null;
        case 22:
        case 23:
            return Rc(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Ra = !1
      , gt = !1
      , ES = typeof WeakSet == "function" ? WeakSet : Set
      , ne = null;
    function Rs(n, s) {
        var o = n.ref;
        if (o !== null)
            if (typeof o == "function")
                try {
                    o(null)
                } catch (l) {
                    qe(n, s, l)
                }
            else
                o.current = null
    }
    function yc(n, s, o) {
        try {
            o()
        } catch (l) {
            qe(n, s, l)
        }
    }
    var Rm = !1;
    function kS(n, s) {
        if (Ru = Go,
        n = ap(),
        Su(n)) {
            if ("selectionStart"in n)
                var o = {
                    start: n.selectionStart,
                    end: n.selectionEnd
                };
            else
                e: {
                    o = (o = n.ownerDocument) && o.defaultView || window;
                    var l = o.getSelection && o.getSelection();
                    if (l && l.rangeCount !== 0) {
                        o = l.anchorNode;
                        var d = l.anchorOffset
                          , p = l.focusNode;
                        l = l.focusOffset;
                        try {
                            o.nodeType,
                            p.nodeType
                        } catch {
                            o = null;
                            break e
                        }
                        var v = 0
                          , E = -1
                          , C = -1
                          , I = 0
                          , W = 0
                          , K = n
                          , H = null;
                        t: for (; ; ) {
                            for (var Z; K !== o || d !== 0 && K.nodeType !== 3 || (E = v + d),
                            K !== p || l !== 0 && K.nodeType !== 3 || (C = v + l),
                            K.nodeType === 3 && (v += K.nodeValue.length),
                            (Z = K.firstChild) !== null; )
                                H = K,
                                K = Z;
                            for (; ; ) {
                                if (K === n)
                                    break t;
                                if (H === o && ++I === d && (E = v),
                                H === p && ++W === l && (C = v),
                                (Z = K.nextSibling) !== null)
                                    break;
                                K = H,
                                H = K.parentNode
                            }
                            K = Z
                        }
                        o = E === -1 || C === -1 ? null : {
                            start: E,
                            end: C
                        }
                    } else
                        o = null
                }
            o = o || {
                start: 0,
                end: 0
            }
        } else
            o = null;
        for (Au = {
            focusedElem: n,
            selectionRange: o
        },
        Go = !1,
        ne = s; ne !== null; )
            if (s = ne,
            n = s.child,
            (s.subtreeFlags & 1028) !== 0 && n !== null)
                n.return = s,
                ne = n;
            else
                for (; ne !== null; ) {
                    s = ne;
                    try {
                        var se = s.alternate;
                        if ((s.flags & 1024) !== 0)
                            switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (se !== null) {
                                    var ae = se.memoizedProps
                                      , Ge = se.memoizedState
                                      , O = s.stateNode
                                      , _ = O.getSnapshotBeforeUpdate(s.elementType === s.type ? ae : rn(s.type, ae), Ge);
                                    O.__reactInternalSnapshotBeforeUpdate = _
                                }
                                break;
                            case 3:
                                var D = s.stateNode.containerInfo;
                                D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(r(163))
                            }
                    } catch (G) {
                        qe(s, s.return, G)
                    }
                    if (n = s.sibling,
                    n !== null) {
                        n.return = s.return,
                        ne = n;
                        break
                    }
                    ne = s.return
                }
        return se = Rm,
        Rm = !1,
        se
    }
    function qi(n, s, o) {
        var l = s.updateQueue;
        if (l = l !== null ? l.lastEffect : null,
        l !== null) {
            var d = l = l.next;
            do {
                if ((d.tag & n) === n) {
                    var p = d.destroy;
                    d.destroy = void 0,
                    p !== void 0 && yc(s, o, p)
                }
                d = d.next
            } while (d !== l)
        }
    }
    function Aa(n, s) {
        if (s = s.updateQueue,
        s = s !== null ? s.lastEffect : null,
        s !== null) {
            var o = s = s.next;
            do {
                if ((o.tag & n) === n) {
                    var l = o.create;
                    o.destroy = l()
                }
                o = o.next
            } while (o !== s)
        }
    }
    function vc(n) {
        var s = n.ref;
        if (s !== null) {
            var o = n.stateNode;
            switch (n.tag) {
            case 5:
                n = o;
                break;
            default:
                n = o
            }
            typeof s == "function" ? s(n) : s.current = n
        }
    }
    function Am(n) {
        var s = n.alternate;
        s !== null && (n.alternate = null,
        Am(s)),
        n.child = null,
        n.deletions = null,
        n.sibling = null,
        n.tag === 5 && (s = n.stateNode,
        s !== null && (delete s[pn],
        delete s[Di],
        delete s[Du],
        delete s[oS],
        delete s[aS])),
        n.stateNode = null,
        n.return = null,
        n.dependencies = null,
        n.memoizedProps = null,
        n.memoizedState = null,
        n.pendingProps = null,
        n.stateNode = null,
        n.updateQueue = null
    }
    function Nm(n) {
        return n.tag === 5 || n.tag === 3 || n.tag === 4
    }
    function Om(n) {
        e: for (; ; ) {
            for (; n.sibling === null; ) {
                if (n.return === null || Nm(n.return))
                    return null;
                n = n.return
            }
            for (n.sibling.return = n.return,
            n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
                if (n.flags & 2 || n.child === null || n.tag === 4)
                    continue e;
                n.child.return = n,
                n = n.child
            }
            if (!(n.flags & 2))
                return n.stateNode
        }
    }
    function wc(n, s, o) {
        var l = n.tag;
        if (l === 5 || l === 6)
            n = n.stateNode,
            s ? o.nodeType === 8 ? o.parentNode.insertBefore(n, s) : o.insertBefore(n, s) : (o.nodeType === 8 ? (s = o.parentNode,
            s.insertBefore(n, o)) : (s = o,
            s.appendChild(n)),
            o = o._reactRootContainer,
            o != null || s.onclick !== null || (s.onclick = aa));
        else if (l !== 4 && (n = n.child,
        n !== null))
            for (wc(n, s, o),
            n = n.sibling; n !== null; )
                wc(n, s, o),
                n = n.sibling
    }
    function xc(n, s, o) {
        var l = n.tag;
        if (l === 5 || l === 6)
            n = n.stateNode,
            s ? o.insertBefore(n, s) : o.appendChild(n);
        else if (l !== 4 && (n = n.child,
        n !== null))
            for (xc(n, s, o),
            n = n.sibling; n !== null; )
                xc(n, s, o),
                n = n.sibling
    }
    var lt = null
      , sn = !1;
    function rr(n, s, o) {
        for (o = o.child; o !== null; )
            Lm(n, s, o),
            o = o.sibling
    }
    function Lm(n, s, o) {
        if (hn && typeof hn.onCommitFiberUnmount == "function")
            try {
                hn.onCommitFiberUnmount($o, o)
            } catch {}
        switch (o.tag) {
        case 5:
            gt || Rs(o, s);
        case 6:
            var l = lt
              , d = sn;
            lt = null,
            rr(n, s, o),
            lt = l,
            sn = d,
            lt !== null && (sn ? (n = lt,
            o = o.stateNode,
            n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : lt.removeChild(o.stateNode));
            break;
        case 18:
            lt !== null && (sn ? (n = lt,
            o = o.stateNode,
            n.nodeType === 8 ? Lu(n.parentNode, o) : n.nodeType === 1 && Lu(n, o),
            Ei(n)) : Lu(lt, o.stateNode));
            break;
        case 4:
            l = lt,
            d = sn,
            lt = o.stateNode.containerInfo,
            sn = !0,
            rr(n, s, o),
            lt = l,
            sn = d;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!gt && (l = o.updateQueue,
            l !== null && (l = l.lastEffect,
            l !== null))) {
                d = l = l.next;
                do {
                    var p = d
                      , v = p.destroy;
                    p = p.tag,
                    v !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && yc(o, s, v),
                    d = d.next
                } while (d !== l)
            }
            rr(n, s, o);
            break;
        case 1:
            if (!gt && (Rs(o, s),
            l = o.stateNode,
            typeof l.componentWillUnmount == "function"))
                try {
                    l.props = o.memoizedProps,
                    l.state = o.memoizedState,
                    l.componentWillUnmount()
                } catch (E) {
                    qe(o, s, E)
                }
            rr(n, s, o);
            break;
        case 21:
            rr(n, s, o);
            break;
        case 22:
            o.mode & 1 ? (gt = (l = gt) || o.memoizedState !== null,
            rr(n, s, o),
            gt = l) : rr(n, s, o);
            break;
        default:
            rr(n, s, o)
        }
    }
    function Dm(n) {
        var s = n.updateQueue;
        if (s !== null) {
            n.updateQueue = null;
            var o = n.stateNode;
            o === null && (o = n.stateNode = new ES),
            s.forEach(function(l) {
                var d = LS.bind(null, n, l);
                o.has(l) || (o.add(l),
                l.then(d, d))
            })
        }
    }
    function on(n, s) {
        var o = s.deletions;
        if (o !== null)
            for (var l = 0; l < o.length; l++) {
                var d = o[l];
                try {
                    var p = n
                      , v = s
                      , E = v;
                    e: for (; E !== null; ) {
                        switch (E.tag) {
                        case 5:
                            lt = E.stateNode,
                            sn = !1;
                            break e;
                        case 3:
                            lt = E.stateNode.containerInfo,
                            sn = !0;
                            break e;
                        case 4:
                            lt = E.stateNode.containerInfo,
                            sn = !0;
                            break e
                        }
                        E = E.return
                    }
                    if (lt === null)
                        throw Error(r(160));
                    Lm(p, v, d),
                    lt = null,
                    sn = !1;
                    var C = d.alternate;
                    C !== null && (C.return = null),
                    d.return = null
                } catch (I) {
                    qe(d, s, I)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null; )
                Mm(s, n),
                s = s.sibling
    }
    function Mm(n, s) {
        var o = n.alternate
          , l = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (on(s, n),
            yn(n),
            l & 4) {
                try {
                    qi(3, n, n.return),
                    Aa(3, n)
                } catch (ae) {
                    qe(n, n.return, ae)
                }
                try {
                    qi(5, n, n.return)
                } catch (ae) {
                    qe(n, n.return, ae)
                }
            }
            break;
        case 1:
            on(s, n),
            yn(n),
            l & 512 && o !== null && Rs(o, o.return);
            break;
        case 5:
            if (on(s, n),
            yn(n),
            l & 512 && o !== null && Rs(o, o.return),
            n.flags & 32) {
                var d = n.stateNode;
                try {
                    fi(d, "")
                } catch (ae) {
                    qe(n, n.return, ae)
                }
            }
            if (l & 4 && (d = n.stateNode,
            d != null)) {
                var p = n.memoizedProps
                  , v = o !== null ? o.memoizedProps : p
                  , E = n.type
                  , C = n.updateQueue;
                if (n.updateQueue = null,
                C !== null)
                    try {
                        E === "input" && p.type === "radio" && p.name != null && uh(d, p),
                        Xl(E, v);
                        var I = Xl(E, p);
                        for (v = 0; v < C.length; v += 2) {
                            var W = C[v]
                              , K = C[v + 1];
                            W === "style" ? yh(d, K) : W === "dangerouslySetInnerHTML" ? mh(d, K) : W === "children" ? fi(d, K) : M(d, W, K, I)
                        }
                        switch (E) {
                        case "input":
                            Wl(d, p);
                            break;
                        case "textarea":
                            fh(d, p);
                            break;
                        case "select":
                            var H = d._wrapperState.wasMultiple;
                            d._wrapperState.wasMultiple = !!p.multiple;
                            var Z = p.value;
                            Z != null ? ls(d, !!p.multiple, Z, !1) : H !== !!p.multiple && (p.defaultValue != null ? ls(d, !!p.multiple, p.defaultValue, !0) : ls(d, !!p.multiple, p.multiple ? [] : "", !1))
                        }
                        d[Di] = p
                    } catch (ae) {
                        qe(n, n.return, ae)
                    }
            }
            break;
        case 6:
            if (on(s, n),
            yn(n),
            l & 4) {
                if (n.stateNode === null)
                    throw Error(r(162));
                d = n.stateNode,
                p = n.memoizedProps;
                try {
                    d.nodeValue = p
                } catch (ae) {
                    qe(n, n.return, ae)
                }
            }
            break;
        case 3:
            if (on(s, n),
            yn(n),
            l & 4 && o !== null && o.memoizedState.isDehydrated)
                try {
                    Ei(s.containerInfo)
                } catch (ae) {
                    qe(n, n.return, ae)
                }
            break;
        case 4:
            on(s, n),
            yn(n);
            break;
        case 13:
            on(s, n),
            yn(n),
            d = n.child,
            d.flags & 8192 && (p = d.memoizedState !== null,
            d.stateNode.isHidden = p,
            !p || d.alternate !== null && d.alternate.memoizedState !== null || (Ec = Qe())),
            l & 4 && Dm(n);
            break;
        case 22:
            if (W = o !== null && o.memoizedState !== null,
            n.mode & 1 ? (gt = (I = gt) || W,
            on(s, n),
            gt = I) : on(s, n),
            yn(n),
            l & 8192) {
                if (I = n.memoizedState !== null,
                (n.stateNode.isHidden = I) && !W && (n.mode & 1) !== 0)
                    for (ne = n,
                    W = n.child; W !== null; ) {
                        for (K = ne = W; ne !== null; ) {
                            switch (H = ne,
                            Z = H.child,
                            H.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                qi(4, H, H.return);
                                break;
                            case 1:
                                Rs(H, H.return);
                                var se = H.stateNode;
                                if (typeof se.componentWillUnmount == "function") {
                                    l = H,
                                    o = H.return;
                                    try {
                                        s = l,
                                        se.props = s.memoizedProps,
                                        se.state = s.memoizedState,
                                        se.componentWillUnmount()
                                    } catch (ae) {
                                        qe(l, o, ae)
                                    }
                                }
                                break;
                            case 5:
                                Rs(H, H.return);
                                break;
                            case 22:
                                if (H.memoizedState !== null) {
                                    Fm(K);
                                    continue
                                }
                            }
                            Z !== null ? (Z.return = H,
                            ne = Z) : Fm(K)
                        }
                        W = W.sibling
                    }
                e: for (W = null,
                K = n; ; ) {
                    if (K.tag === 5) {
                        if (W === null) {
                            W = K;
                            try {
                                d = K.stateNode,
                                I ? (p = d.style,
                                typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (E = K.stateNode,
                                C = K.memoizedProps.style,
                                v = C != null && C.hasOwnProperty("display") ? C.display : null,
                                E.style.display = gh("display", v))
                            } catch (ae) {
                                qe(n, n.return, ae)
                            }
                        }
                    } else if (K.tag === 6) {
                        if (W === null)
                            try {
                                K.stateNode.nodeValue = I ? "" : K.memoizedProps
                            } catch (ae) {
                                qe(n, n.return, ae)
                            }
                    } else if ((K.tag !== 22 && K.tag !== 23 || K.memoizedState === null || K === n) && K.child !== null) {
                        K.child.return = K,
                        K = K.child;
                        continue
                    }
                    if (K === n)
                        break e;
                    for (; K.sibling === null; ) {
                        if (K.return === null || K.return === n)
                            break e;
                        W === K && (W = null),
                        K = K.return
                    }
                    W === K && (W = null),
                    K.sibling.return = K.return,
                    K = K.sibling
                }
            }
            break;
        case 19:
            on(s, n),
            yn(n),
            l & 4 && Dm(n);
            break;
        case 21:
            break;
        default:
            on(s, n),
            yn(n)
        }
    }
    function yn(n) {
        var s = n.flags;
        if (s & 2) {
            try {
                e: {
                    for (var o = n.return; o !== null; ) {
                        if (Nm(o)) {
                            var l = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(r(160))
                }
                switch (l.tag) {
                case 5:
                    var d = l.stateNode;
                    l.flags & 32 && (fi(d, ""),
                    l.flags &= -33);
                    var p = Om(n);
                    xc(n, p, d);
                    break;
                case 3:
                case 4:
                    var v = l.stateNode.containerInfo
                      , E = Om(n);
                    wc(n, E, v);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (C) {
                qe(n, n.return, C)
            }
            n.flags &= -3
        }
        s & 4096 && (n.flags &= -4097)
    }
    function TS(n, s, o) {
        ne = n,
        jm(n)
    }
    function jm(n, s, o) {
        for (var l = (n.mode & 1) !== 0; ne !== null; ) {
            var d = ne
              , p = d.child;
            if (d.tag === 22 && l) {
                var v = d.memoizedState !== null || Ra;
                if (!v) {
                    var E = d.alternate
                      , C = E !== null && E.memoizedState !== null || gt;
                    E = Ra;
                    var I = gt;
                    if (Ra = v,
                    (gt = C) && !I)
                        for (ne = d; ne !== null; )
                            v = ne,
                            C = v.child,
                            v.tag === 22 && v.memoizedState !== null ? Vm(d) : C !== null ? (C.return = v,
                            ne = C) : Vm(d);
                    for (; p !== null; )
                        ne = p,
                        jm(p),
                        p = p.sibling;
                    ne = d,
                    Ra = E,
                    gt = I
                }
                Im(n)
            } else
                (d.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = d,
                ne = p) : Im(n)
        }
    }
    function Im(n) {
        for (; ne !== null; ) {
            var s = ne;
            if ((s.flags & 8772) !== 0) {
                var o = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0)
                        switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            gt || Aa(5, s);
                            break;
                        case 1:
                            var l = s.stateNode;
                            if (s.flags & 4 && !gt)
                                if (o === null)
                                    l.componentDidMount();
                                else {
                                    var d = s.elementType === s.type ? o.memoizedProps : rn(s.type, o.memoizedProps);
                                    l.componentDidUpdate(d, o.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                                }
                            var p = s.updateQueue;
                            p !== null && Fp(s, p, l);
                            break;
                        case 3:
                            var v = s.updateQueue;
                            if (v !== null) {
                                if (o = null,
                                s.child !== null)
                                    switch (s.child.tag) {
                                    case 5:
                                        o = s.child.stateNode;
                                        break;
                                    case 1:
                                        o = s.child.stateNode
                                    }
                                Fp(s, v, o)
                            }
                            break;
                        case 5:
                            var E = s.stateNode;
                            if (o === null && s.flags & 4) {
                                o = E;
                                var C = s.memoizedProps;
                                switch (s.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    C.autoFocus && o.focus();
                                    break;
                                case "img":
                                    C.src && (o.src = C.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (s.memoizedState === null) {
                                var I = s.alternate;
                                if (I !== null) {
                                    var W = I.memoizedState;
                                    if (W !== null) {
                                        var K = W.dehydrated;
                                        K !== null && Ei(K)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(r(163))
                        }
                    gt || s.flags & 512 && vc(s)
                } catch (H) {
                    qe(s, s.return, H)
                }
            }
            if (s === n) {
                ne = null;
                break
            }
            if (o = s.sibling,
            o !== null) {
                o.return = s.return,
                ne = o;
                break
            }
            ne = s.return
        }
    }
    function Fm(n) {
        for (; ne !== null; ) {
            var s = ne;
            if (s === n) {
                ne = null;
                break
            }
            var o = s.sibling;
            if (o !== null) {
                o.return = s.return,
                ne = o;
                break
            }
            ne = s.return
        }
    }
    function Vm(n) {
        for (; ne !== null; ) {
            var s = ne;
            try {
                switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    var o = s.return;
                    try {
                        Aa(4, s)
                    } catch (C) {
                        qe(s, o, C)
                    }
                    break;
                case 1:
                    var l = s.stateNode;
                    if (typeof l.componentDidMount == "function") {
                        var d = s.return;
                        try {
                            l.componentDidMount()
                        } catch (C) {
                            qe(s, d, C)
                        }
                    }
                    var p = s.return;
                    try {
                        vc(s)
                    } catch (C) {
                        qe(s, p, C)
                    }
                    break;
                case 5:
                    var v = s.return;
                    try {
                        vc(s)
                    } catch (C) {
                        qe(s, v, C)
                    }
                }
            } catch (C) {
                qe(s, s.return, C)
            }
            if (s === n) {
                ne = null;
                break
            }
            var E = s.sibling;
            if (E !== null) {
                E.return = s.return,
                ne = E;
                break
            }
            ne = s.return
        }
    }
    var CS = Math.ceil
      , Na = j.ReactCurrentDispatcher
      , Sc = j.ReactCurrentOwner
      , Wt = j.ReactCurrentBatchConfig
      , Ae = 0
      , it = null
      , Je = null
      , ut = 0
      , Vt = 0
      , As = Jn(0)
      , tt = 0
      , Wi = null
      , jr = 0
      , Oa = 0
      , bc = 0
      , Ki = null
      , Pt = null
      , Ec = 0
      , Ns = 1 / 0
      , Dn = null
      , La = !1
      , kc = null
      , sr = null
      , Da = !1
      , ir = null
      , Ma = 0
      , Qi = 0
      , Tc = null
      , ja = -1
      , Ia = 0;
    function St() {
        return (Ae & 6) !== 0 ? Qe() : ja !== -1 ? ja : ja = Qe()
    }
    function or(n) {
        return (n.mode & 1) === 0 ? 1 : (Ae & 2) !== 0 && ut !== 0 ? ut & -ut : uS.transition !== null ? (Ia === 0 && (Ia = Oh()),
        Ia) : (n = Me,
        n !== 0 || (n = window.event,
        n = n === void 0 ? 16 : Uh(n.type)),
        n)
    }
    function an(n, s, o, l) {
        if (50 < Qi)
            throw Qi = 0,
            Tc = null,
            Error(r(185));
        vi(n, o, l),
        ((Ae & 2) === 0 || n !== it) && (n === it && ((Ae & 2) === 0 && (Oa |= o),
        tt === 4 && ar(n, ut)),
        _t(n, l),
        o === 1 && Ae === 0 && (s.mode & 1) === 0 && (Ns = Qe() + 500,
        da && er()))
    }
    function _t(n, s) {
        var o = n.callbackNode;
        u1(n, s);
        var l = Wo(n, n === it ? ut : 0);
        if (l === 0)
            o !== null && Rh(o),
            n.callbackNode = null,
            n.callbackPriority = 0;
        else if (s = l & -l,
        n.callbackPriority !== s) {
            if (o != null && Rh(o),
            s === 1)
                n.tag === 0 ? lS(Um.bind(null, n)) : Cp(Um.bind(null, n)),
                sS(function() {
                    (Ae & 6) === 0 && er()
                }),
                o = null;
            else {
                switch (Lh(l)) {
                case 1:
                    o = su;
                    break;
                case 4:
                    o = Ah;
                    break;
                case 16:
                    o = zo;
                    break;
                case 536870912:
                    o = Nh;
                    break;
                default:
                    o = zo
                }
                o = Gm(o, Bm.bind(null, n))
            }
            n.callbackPriority = s,
            n.callbackNode = o
        }
    }
    function Bm(n, s) {
        if (ja = -1,
        Ia = 0,
        (Ae & 6) !== 0)
            throw Error(r(327));
        var o = n.callbackNode;
        if (Os() && n.callbackNode !== o)
            return null;
        var l = Wo(n, n === it ? ut : 0);
        if (l === 0)
            return null;
        if ((l & 30) !== 0 || (l & n.expiredLanes) !== 0 || s)
            s = Fa(n, l);
        else {
            s = l;
            var d = Ae;
            Ae |= 2;
            var p = $m();
            (it !== n || ut !== s) && (Dn = null,
            Ns = Qe() + 500,
            Fr(n, s));
            do
                try {
                    RS();
                    break
                } catch (E) {
                    zm(n, E)
                }
            while (!0);
            $u(),
            Na.current = p,
            Ae = d,
            Je !== null ? s = 0 : (it = null,
            ut = 0,
            s = tt)
        }
        if (s !== 0) {
            if (s === 2 && (d = iu(n),
            d !== 0 && (l = d,
            s = Cc(n, d))),
            s === 1)
                throw o = Wi,
                Fr(n, 0),
                ar(n, l),
                _t(n, Qe()),
                o;
            if (s === 6)
                ar(n, l);
            else {
                if (d = n.current.alternate,
                (l & 30) === 0 && !PS(d) && (s = Fa(n, l),
                s === 2 && (p = iu(n),
                p !== 0 && (l = p,
                s = Cc(n, p))),
                s === 1))
                    throw o = Wi,
                    Fr(n, 0),
                    ar(n, l),
                    _t(n, Qe()),
                    o;
                switch (n.finishedWork = d,
                n.finishedLanes = l,
                s) {
                case 0:
                case 1:
                    throw Error(r(345));
                case 2:
                    Vr(n, Pt, Dn);
                    break;
                case 3:
                    if (ar(n, l),
                    (l & 130023424) === l && (s = Ec + 500 - Qe(),
                    10 < s)) {
                        if (Wo(n, 0) !== 0)
                            break;
                        if (d = n.suspendedLanes,
                        (d & l) !== l) {
                            St(),
                            n.pingedLanes |= n.suspendedLanes & d;
                            break
                        }
                        n.timeoutHandle = Ou(Vr.bind(null, n, Pt, Dn), s);
                        break
                    }
                    Vr(n, Pt, Dn);
                    break;
                case 4:
                    if (ar(n, l),
                    (l & 4194240) === l)
                        break;
                    for (s = n.eventTimes,
                    d = -1; 0 < l; ) {
                        var v = 31 - en(l);
                        p = 1 << v,
                        v = s[v],
                        v > d && (d = v),
                        l &= ~p
                    }
                    if (l = d,
                    l = Qe() - l,
                    l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * CS(l / 1960)) - l,
                    10 < l) {
                        n.timeoutHandle = Ou(Vr.bind(null, n, Pt, Dn), l);
                        break
                    }
                    Vr(n, Pt, Dn);
                    break;
                case 5:
                    Vr(n, Pt, Dn);
                    break;
                default:
                    throw Error(r(329))
                }
            }
        }
        return _t(n, Qe()),
        n.callbackNode === o ? Bm.bind(null, n) : null
    }
    function Cc(n, s) {
        var o = Ki;
        return n.current.memoizedState.isDehydrated && (Fr(n, s).flags |= 256),
        n = Fa(n, s),
        n !== 2 && (s = Pt,
        Pt = o,
        s !== null && Pc(s)),
        n
    }
    function Pc(n) {
        Pt === null ? Pt = n : Pt.push.apply(Pt, n)
    }
    function PS(n) {
        for (var s = n; ; ) {
            if (s.flags & 16384) {
                var o = s.updateQueue;
                if (o !== null && (o = o.stores,
                o !== null))
                    for (var l = 0; l < o.length; l++) {
                        var d = o[l]
                          , p = d.getSnapshot;
                        d = d.value;
                        try {
                            if (!tn(p(), d))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = s.child,
            s.subtreeFlags & 16384 && o !== null)
                o.return = s,
                s = o;
            else {
                if (s === n)
                    break;
                for (; s.sibling === null; ) {
                    if (s.return === null || s.return === n)
                        return !0;
                    s = s.return
                }
                s.sibling.return = s.return,
                s = s.sibling
            }
        }
        return !0
    }
    function ar(n, s) {
        for (s &= ~bc,
        s &= ~Oa,
        n.suspendedLanes |= s,
        n.pingedLanes &= ~s,
        n = n.expirationTimes; 0 < s; ) {
            var o = 31 - en(s)
              , l = 1 << o;
            n[o] = -1,
            s &= ~l
        }
    }
    function Um(n) {
        if ((Ae & 6) !== 0)
            throw Error(r(327));
        Os();
        var s = Wo(n, 0);
        if ((s & 1) === 0)
            return _t(n, Qe()),
            null;
        var o = Fa(n, s);
        if (n.tag !== 0 && o === 2) {
            var l = iu(n);
            l !== 0 && (s = l,
            o = Cc(n, l))
        }
        if (o === 1)
            throw o = Wi,
            Fr(n, 0),
            ar(n, s),
            _t(n, Qe()),
            o;
        if (o === 6)
            throw Error(r(345));
        return n.finishedWork = n.current.alternate,
        n.finishedLanes = s,
        Vr(n, Pt, Dn),
        _t(n, Qe()),
        null
    }
    function _c(n, s) {
        var o = Ae;
        Ae |= 1;
        try {
            return n(s)
        } finally {
            Ae = o,
            Ae === 0 && (Ns = Qe() + 500,
            da && er())
        }
    }
    function Ir(n) {
        ir !== null && ir.tag === 0 && (Ae & 6) === 0 && Os();
        var s = Ae;
        Ae |= 1;
        var o = Wt.transition
          , l = Me;
        try {
            if (Wt.transition = null,
            Me = 1,
            n)
                return n()
        } finally {
            Me = l,
            Wt.transition = o,
            Ae = s,
            (Ae & 6) === 0 && er()
        }
    }
    function Rc() {
        Vt = As.current,
        Ve(As)
    }
    function Fr(n, s) {
        n.finishedWork = null,
        n.finishedLanes = 0;
        var o = n.timeoutHandle;
        if (o !== -1 && (n.timeoutHandle = -1,
        rS(o)),
        Je !== null)
            for (o = Je.return; o !== null; ) {
                var l = o;
                switch (Fu(l),
                l.tag) {
                case 1:
                    l = l.type.childContextTypes,
                    l != null && ua();
                    break;
                case 3:
                    Ps(),
                    Ve(kt),
                    Ve(ht),
                    Xu();
                    break;
                case 5:
                    Gu(l);
                    break;
                case 4:
                    Ps();
                    break;
                case 13:
                    Ve(ze);
                    break;
                case 19:
                    Ve(ze);
                    break;
                case 10:
                    Hu(l.type._context);
                    break;
                case 22:
                case 23:
                    Rc()
                }
                o = o.return
            }
        if (it = n,
        Je = n = lr(n.current, null),
        ut = Vt = s,
        tt = 0,
        Wi = null,
        bc = Oa = jr = 0,
        Pt = Ki = null,
        Lr !== null) {
            for (s = 0; s < Lr.length; s++)
                if (o = Lr[s],
                l = o.interleaved,
                l !== null) {
                    o.interleaved = null;
                    var d = l.next
                      , p = o.pending;
                    if (p !== null) {
                        var v = p.next;
                        p.next = d,
                        l.next = v
                    }
                    o.pending = l
                }
            Lr = null
        }
        return n
    }
    function zm(n, s) {
        do {
            var o = Je;
            try {
                if ($u(),
                Sa.current = Ta,
                ba) {
                    for (var l = $e.memoizedState; l !== null; ) {
                        var d = l.queue;
                        d !== null && (d.pending = null),
                        l = l.next
                    }
                    ba = !1
                }
                if (Mr = 0,
                st = et = $e = null,
                Bi = !1,
                Ui = 0,
                Sc.current = null,
                o === null || o.return === null) {
                    tt = 1,
                    Wi = s,
                    Je = null;
                    break
                }
                e: {
                    var p = n
                      , v = o.return
                      , E = o
                      , C = s;
                    if (s = ut,
                    E.flags |= 32768,
                    C !== null && typeof C == "object" && typeof C.then == "function") {
                        var I = C
                          , W = E
                          , K = W.tag;
                        if ((W.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
                            var H = W.alternate;
                            H ? (W.updateQueue = H.updateQueue,
                            W.memoizedState = H.memoizedState,
                            W.lanes = H.lanes) : (W.updateQueue = null,
                            W.memoizedState = null)
                        }
                        var Z = hm(v);
                        if (Z !== null) {
                            Z.flags &= -257,
                            pm(Z, v, E, p, s),
                            Z.mode & 1 && fm(p, I, s),
                            s = Z,
                            C = I;
                            var se = s.updateQueue;
                            if (se === null) {
                                var ae = new Set;
                                ae.add(C),
                                s.updateQueue = ae
                            } else
                                se.add(C);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                fm(p, I, s),
                                Ac();
                                break e
                            }
                            C = Error(r(426))
                        }
                    } else if (Ue && E.mode & 1) {
                        var Ge = hm(v);
                        if (Ge !== null) {
                            (Ge.flags & 65536) === 0 && (Ge.flags |= 256),
                            pm(Ge, v, E, p, s),
                            Uu(_s(C, E));
                            break e
                        }
                    }
                    p = C = _s(C, E),
                    tt !== 4 && (tt = 2),
                    Ki === null ? Ki = [p] : Ki.push(p),
                    p = v;
                    do {
                        switch (p.tag) {
                        case 3:
                            p.flags |= 65536,
                            s &= -s,
                            p.lanes |= s;
                            var O = cm(p, C, s);
                            Ip(p, O);
                            break e;
                        case 1:
                            E = C;
                            var _ = p.type
                              , D = p.stateNode;
                            if ((p.flags & 128) === 0 && (typeof _.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (sr === null || !sr.has(D)))) {
                                p.flags |= 65536,
                                s &= -s,
                                p.lanes |= s;
                                var G = dm(p, E, s);
                                Ip(p, G);
                                break e
                            }
                        }
                        p = p.return
                    } while (p !== null)
                }
                qm(o)
            } catch (ue) {
                s = ue,
                Je === o && o !== null && (Je = o = o.return);
                continue
            }
            break
        } while (!0)
    }
    function $m() {
        var n = Na.current;
        return Na.current = Ta,
        n === null ? Ta : n
    }
    function Ac() {
        (tt === 0 || tt === 3 || tt === 2) && (tt = 4),
        it === null || (jr & 268435455) === 0 && (Oa & 268435455) === 0 || ar(it, ut)
    }
    function Fa(n, s) {
        var o = Ae;
        Ae |= 2;
        var l = $m();
        (it !== n || ut !== s) && (Dn = null,
        Fr(n, s));
        do
            try {
                _S();
                break
            } catch (d) {
                zm(n, d)
            }
        while (!0);
        if ($u(),
        Ae = o,
        Na.current = l,
        Je !== null)
            throw Error(r(261));
        return it = null,
        ut = 0,
        tt
    }
    function _S() {
        for (; Je !== null; )
            Hm(Je)
    }
    function RS() {
        for (; Je !== null && !e1(); )
            Hm(Je)
    }
    function Hm(n) {
        var s = Qm(n.alternate, n, Vt);
        n.memoizedProps = n.pendingProps,
        s === null ? qm(n) : Je = s,
        Sc.current = null
    }
    function qm(n) {
        var s = n;
        do {
            var o = s.alternate;
            if (n = s.return,
            (s.flags & 32768) === 0) {
                if (o = SS(o, s, Vt),
                o !== null) {
                    Je = o;
                    return
                }
            } else {
                if (o = bS(o, s),
                o !== null) {
                    o.flags &= 32767,
                    Je = o;
                    return
                }
                if (n !== null)
                    n.flags |= 32768,
                    n.subtreeFlags = 0,
                    n.deletions = null;
                else {
                    tt = 6,
                    Je = null;
                    return
                }
            }
            if (s = s.sibling,
            s !== null) {
                Je = s;
                return
            }
            Je = s = n
        } while (s !== null);
        tt === 0 && (tt = 5)
    }
    function Vr(n, s, o) {
        var l = Me
          , d = Wt.transition;
        try {
            Wt.transition = null,
            Me = 1,
            AS(n, s, o, l)
        } finally {
            Wt.transition = d,
            Me = l
        }
        return null
    }
    function AS(n, s, o, l) {
        do
            Os();
        while (ir !== null);
        if ((Ae & 6) !== 0)
            throw Error(r(327));
        o = n.finishedWork;
        var d = n.finishedLanes;
        if (o === null)
            return null;
        if (n.finishedWork = null,
        n.finishedLanes = 0,
        o === n.current)
            throw Error(r(177));
        n.callbackNode = null,
        n.callbackPriority = 0;
        var p = o.lanes | o.childLanes;
        if (c1(n, p),
        n === it && (Je = it = null,
        ut = 0),
        (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Da || (Da = !0,
        Gm(zo, function() {
            return Os(),
            null
        })),
        p = (o.flags & 15990) !== 0,
        (o.subtreeFlags & 15990) !== 0 || p) {
            p = Wt.transition,
            Wt.transition = null;
            var v = Me;
            Me = 1;
            var E = Ae;
            Ae |= 4,
            Sc.current = null,
            kS(n, o),
            Mm(o, n),
            Y1(Au),
            Go = !!Ru,
            Au = Ru = null,
            n.current = o,
            TS(o),
            t1(),
            Ae = E,
            Me = v,
            Wt.transition = p
        } else
            n.current = o;
        if (Da && (Da = !1,
        ir = n,
        Ma = d),
        p = n.pendingLanes,
        p === 0 && (sr = null),
        s1(o.stateNode),
        _t(n, Qe()),
        s !== null)
            for (l = n.onRecoverableError,
            o = 0; o < s.length; o++)
                d = s[o],
                l(d.value, {
                    componentStack: d.stack,
                    digest: d.digest
                });
        if (La)
            throw La = !1,
            n = kc,
            kc = null,
            n;
        return (Ma & 1) !== 0 && n.tag !== 0 && Os(),
        p = n.pendingLanes,
        (p & 1) !== 0 ? n === Tc ? Qi++ : (Qi = 0,
        Tc = n) : Qi = 0,
        er(),
        null
    }
    function Os() {
        if (ir !== null) {
            var n = Lh(Ma)
              , s = Wt.transition
              , o = Me;
            try {
                if (Wt.transition = null,
                Me = 16 > n ? 16 : n,
                ir === null)
                    var l = !1;
                else {
                    if (n = ir,
                    ir = null,
                    Ma = 0,
                    (Ae & 6) !== 0)
                        throw Error(r(331));
                    var d = Ae;
                    for (Ae |= 4,
                    ne = n.current; ne !== null; ) {
                        var p = ne
                          , v = p.child;
                        if ((ne.flags & 16) !== 0) {
                            var E = p.deletions;
                            if (E !== null) {
                                for (var C = 0; C < E.length; C++) {
                                    var I = E[C];
                                    for (ne = I; ne !== null; ) {
                                        var W = ne;
                                        switch (W.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            qi(8, W, p)
                                        }
                                        var K = W.child;
                                        if (K !== null)
                                            K.return = W,
                                            ne = K;
                                        else
                                            for (; ne !== null; ) {
                                                W = ne;
                                                var H = W.sibling
                                                  , Z = W.return;
                                                if (Am(W),
                                                W === I) {
                                                    ne = null;
                                                    break
                                                }
                                                if (H !== null) {
                                                    H.return = Z,
                                                    ne = H;
                                                    break
                                                }
                                                ne = Z
                                            }
                                    }
                                }
                                var se = p.alternate;
                                if (se !== null) {
                                    var ae = se.child;
                                    if (ae !== null) {
                                        se.child = null;
                                        do {
                                            var Ge = ae.sibling;
                                            ae.sibling = null,
                                            ae = Ge
                                        } while (ae !== null)
                                    }
                                }
                                ne = p
                            }
                        }
                        if ((p.subtreeFlags & 2064) !== 0 && v !== null)
                            v.return = p,
                            ne = v;
                        else
                            e: for (; ne !== null; ) {
                                if (p = ne,
                                (p.flags & 2048) !== 0)
                                    switch (p.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        qi(9, p, p.return)
                                    }
                                var O = p.sibling;
                                if (O !== null) {
                                    O.return = p.return,
                                    ne = O;
                                    break e
                                }
                                ne = p.return
                            }
                    }
                    var _ = n.current;
                    for (ne = _; ne !== null; ) {
                        v = ne;
                        var D = v.child;
                        if ((v.subtreeFlags & 2064) !== 0 && D !== null)
                            D.return = v,
                            ne = D;
                        else
                            e: for (v = _; ne !== null; ) {
                                if (E = ne,
                                (E.flags & 2048) !== 0)
                                    try {
                                        switch (E.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Aa(9, E)
                                        }
                                    } catch (ue) {
                                        qe(E, E.return, ue)
                                    }
                                if (E === v) {
                                    ne = null;
                                    break e
                                }
                                var G = E.sibling;
                                if (G !== null) {
                                    G.return = E.return,
                                    ne = G;
                                    break e
                                }
                                ne = E.return
                            }
                    }
                    if (Ae = d,
                    er(),
                    hn && typeof hn.onPostCommitFiberRoot == "function")
                        try {
                            hn.onPostCommitFiberRoot($o, n)
                        } catch {}
                    l = !0
                }
                return l
            } finally {
                Me = o,
                Wt.transition = s
            }
        }
        return !1
    }
    function Wm(n, s, o) {
        s = _s(o, s),
        s = cm(n, s, 1),
        n = nr(n, s, 1),
        s = St(),
        n !== null && (vi(n, 1, s),
        _t(n, s))
    }
    function qe(n, s, o) {
        if (n.tag === 3)
            Wm(n, n, o);
        else
            for (; s !== null; ) {
                if (s.tag === 3) {
                    Wm(s, n, o);
                    break
                } else if (s.tag === 1) {
                    var l = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (sr === null || !sr.has(l))) {
                        n = _s(o, n),
                        n = dm(s, n, 1),
                        s = nr(s, n, 1),
                        n = St(),
                        s !== null && (vi(s, 1, n),
                        _t(s, n));
                        break
                    }
                }
                s = s.return
            }
    }
    function NS(n, s, o) {
        var l = n.pingCache;
        l !== null && l.delete(s),
        s = St(),
        n.pingedLanes |= n.suspendedLanes & o,
        it === n && (ut & o) === o && (tt === 4 || tt === 3 && (ut & 130023424) === ut && 500 > Qe() - Ec ? Fr(n, 0) : bc |= o),
        _t(n, s)
    }
    function Km(n, s) {
        s === 0 && ((n.mode & 1) === 0 ? s = 1 : (s = qo,
        qo <<= 1,
        (qo & 130023424) === 0 && (qo = 4194304)));
        var o = St();
        n = Nn(n, s),
        n !== null && (vi(n, s, o),
        _t(n, o))
    }
    function OS(n) {
        var s = n.memoizedState
          , o = 0;
        s !== null && (o = s.retryLane),
        Km(n, o)
    }
    function LS(n, s) {
        var o = 0;
        switch (n.tag) {
        case 13:
            var l = n.stateNode
              , d = n.memoizedState;
            d !== null && (o = d.retryLane);
            break;
        case 19:
            l = n.stateNode;
            break;
        default:
            throw Error(r(314))
        }
        l !== null && l.delete(s),
        Km(n, o)
    }
    var Qm;
    Qm = function(n, s, o) {
        if (n !== null)
            if (n.memoizedProps !== s.pendingProps || kt.current)
                Ct = !0;
            else {
                if ((n.lanes & o) === 0 && (s.flags & 128) === 0)
                    return Ct = !1,
                    xS(n, s, o);
                Ct = (n.flags & 131072) !== 0
            }
        else
            Ct = !1,
            Ue && (s.flags & 1048576) !== 0 && Pp(s, ha, s.index);
        switch (s.lanes = 0,
        s.tag) {
        case 2:
            var l = s.type;
            _a(n, s),
            n = s.pendingProps;
            var d = xs(s, ht.current);
            Cs(s, o),
            d = ec(null, s, l, n, d, o);
            var p = tc();
            return s.flags |= 1,
            typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (s.tag = 1,
            s.memoizedState = null,
            s.updateQueue = null,
            Tt(l) ? (p = !0,
            ca(s)) : p = !1,
            s.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null,
            Ku(s),
            d.updater = Ca,
            s.stateNode = d,
            d._reactInternals = s,
            ac(s, l, n, o),
            s = dc(null, s, l, !0, p, o)) : (s.tag = 0,
            Ue && p && Iu(s),
            xt(null, s, d, o),
            s = s.child),
            s;
        case 16:
            l = s.elementType;
            e: {
                switch (_a(n, s),
                n = s.pendingProps,
                d = l._init,
                l = d(l._payload),
                s.type = l,
                d = s.tag = MS(l),
                n = rn(l, n),
                d) {
                case 0:
                    s = cc(null, s, l, n, o);
                    break e;
                case 1:
                    s = xm(null, s, l, n, o);
                    break e;
                case 11:
                    s = mm(null, s, l, n, o);
                    break e;
                case 14:
                    s = gm(null, s, l, rn(l.type, n), o);
                    break e
                }
                throw Error(r(306, l, ""))
            }
            return s;
        case 0:
            return l = s.type,
            d = s.pendingProps,
            d = s.elementType === l ? d : rn(l, d),
            cc(n, s, l, d, o);
        case 1:
            return l = s.type,
            d = s.pendingProps,
            d = s.elementType === l ? d : rn(l, d),
            xm(n, s, l, d, o);
        case 3:
            e: {
                if (Sm(s),
                n === null)
                    throw Error(r(387));
                l = s.pendingProps,
                p = s.memoizedState,
                d = p.element,
                jp(n, s),
                wa(s, l, null, o);
                var v = s.memoizedState;
                if (l = v.element,
                p.isDehydrated)
                    if (p = {
                        element: l,
                        isDehydrated: !1,
                        cache: v.cache,
                        pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                        transitions: v.transitions
                    },
                    s.updateQueue.baseState = p,
                    s.memoizedState = p,
                    s.flags & 256) {
                        d = _s(Error(r(423)), s),
                        s = bm(n, s, l, o, d);
                        break e
                    } else if (l !== d) {
                        d = _s(Error(r(424)), s),
                        s = bm(n, s, l, o, d);
                        break e
                    } else
                        for (Ft = Xn(s.stateNode.containerInfo.firstChild),
                        It = s,
                        Ue = !0,
                        nn = null,
                        o = Dp(s, null, l, o),
                        s.child = o; o; )
                            o.flags = o.flags & -3 | 4096,
                            o = o.sibling;
                else {
                    if (Es(),
                    l === d) {
                        s = Ln(n, s, o);
                        break e
                    }
                    xt(n, s, l, o)
                }
                s = s.child
            }
            return s;
        case 5:
            return Vp(s),
            n === null && Bu(s),
            l = s.type,
            d = s.pendingProps,
            p = n !== null ? n.memoizedProps : null,
            v = d.children,
            Nu(l, d) ? v = null : p !== null && Nu(l, p) && (s.flags |= 32),
            wm(n, s),
            xt(n, s, v, o),
            s.child;
        case 6:
            return n === null && Bu(s),
            null;
        case 13:
            return Em(n, s, o);
        case 4:
            return Qu(s, s.stateNode.containerInfo),
            l = s.pendingProps,
            n === null ? s.child = ks(s, null, l, o) : xt(n, s, l, o),
            s.child;
        case 11:
            return l = s.type,
            d = s.pendingProps,
            d = s.elementType === l ? d : rn(l, d),
            mm(n, s, l, d, o);
        case 7:
            return xt(n, s, s.pendingProps, o),
            s.child;
        case 8:
            return xt(n, s, s.pendingProps.children, o),
            s.child;
        case 12:
            return xt(n, s, s.pendingProps.children, o),
            s.child;
        case 10:
            e: {
                if (l = s.type._context,
                d = s.pendingProps,
                p = s.memoizedProps,
                v = d.value,
                Ie(ga, l._currentValue),
                l._currentValue = v,
                p !== null)
                    if (tn(p.value, v)) {
                        if (p.children === d.children && !kt.current) {
                            s = Ln(n, s, o);
                            break e
                        }
                    } else
                        for (p = s.child,
                        p !== null && (p.return = s); p !== null; ) {
                            var E = p.dependencies;
                            if (E !== null) {
                                v = p.child;
                                for (var C = E.firstContext; C !== null; ) {
                                    if (C.context === l) {
                                        if (p.tag === 1) {
                                            C = On(-1, o & -o),
                                            C.tag = 2;
                                            var I = p.updateQueue;
                                            if (I !== null) {
                                                I = I.shared;
                                                var W = I.pending;
                                                W === null ? C.next = C : (C.next = W.next,
                                                W.next = C),
                                                I.pending = C
                                            }
                                        }
                                        p.lanes |= o,
                                        C = p.alternate,
                                        C !== null && (C.lanes |= o),
                                        qu(p.return, o, s),
                                        E.lanes |= o;
                                        break
                                    }
                                    C = C.next
                                }
                            } else if (p.tag === 10)
                                v = p.type === s.type ? null : p.child;
                            else if (p.tag === 18) {
                                if (v = p.return,
                                v === null)
                                    throw Error(r(341));
                                v.lanes |= o,
                                E = v.alternate,
                                E !== null && (E.lanes |= o),
                                qu(v, o, s),
                                v = p.sibling
                            } else
                                v = p.child;
                            if (v !== null)
                                v.return = p;
                            else
                                for (v = p; v !== null; ) {
                                    if (v === s) {
                                        v = null;
                                        break
                                    }
                                    if (p = v.sibling,
                                    p !== null) {
                                        p.return = v.return,
                                        v = p;
                                        break
                                    }
                                    v = v.return
                                }
                            p = v
                        }
                xt(n, s, d.children, o),
                s = s.child
            }
            return s;
        case 9:
            return d = s.type,
            l = s.pendingProps.children,
            Cs(s, o),
            d = Ht(d),
            l = l(d),
            s.flags |= 1,
            xt(n, s, l, o),
            s.child;
        case 14:
            return l = s.type,
            d = rn(l, s.pendingProps),
            d = rn(l.type, d),
            gm(n, s, l, d, o);
        case 15:
            return ym(n, s, s.type, s.pendingProps, o);
        case 17:
            return l = s.type,
            d = s.pendingProps,
            d = s.elementType === l ? d : rn(l, d),
            _a(n, s),
            s.tag = 1,
            Tt(l) ? (n = !0,
            ca(s)) : n = !1,
            Cs(s, o),
            lm(s, l, d),
            ac(s, l, d, o),
            dc(null, s, l, !0, n, o);
        case 19:
            return Tm(n, s, o);
        case 22:
            return vm(n, s, o)
        }
        throw Error(r(156, s.tag))
    }
    ;
    function Gm(n, s) {
        return _h(n, s)
    }
    function DS(n, s, o, l) {
        this.tag = n,
        this.key = o,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = s,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Kt(n, s, o, l) {
        return new DS(n,s,o,l)
    }
    function Nc(n) {
        return n = n.prototype,
        !(!n || !n.isReactComponent)
    }
    function MS(n) {
        if (typeof n == "function")
            return Nc(n) ? 1 : 0;
        if (n != null) {
            if (n = n.$$typeof,
            n === $)
                return 11;
            if (n === pe)
                return 14
        }
        return 2
    }
    function lr(n, s) {
        var o = n.alternate;
        return o === null ? (o = Kt(n.tag, s, n.key, n.mode),
        o.elementType = n.elementType,
        o.type = n.type,
        o.stateNode = n.stateNode,
        o.alternate = n,
        n.alternate = o) : (o.pendingProps = s,
        o.type = n.type,
        o.flags = 0,
        o.subtreeFlags = 0,
        o.deletions = null),
        o.flags = n.flags & 14680064,
        o.childLanes = n.childLanes,
        o.lanes = n.lanes,
        o.child = n.child,
        o.memoizedProps = n.memoizedProps,
        o.memoizedState = n.memoizedState,
        o.updateQueue = n.updateQueue,
        s = n.dependencies,
        o.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        },
        o.sibling = n.sibling,
        o.index = n.index,
        o.ref = n.ref,
        o
    }
    function Va(n, s, o, l, d, p) {
        var v = 2;
        if (l = n,
        typeof n == "function")
            Nc(n) && (v = 1);
        else if (typeof n == "string")
            v = 5;
        else
            e: switch (n) {
            case ee:
                return Br(o.children, d, p, s);
            case N:
                v = 8,
                d |= 8;
                break;
            case q:
                return n = Kt(12, o, s, d | 2),
                n.elementType = q,
                n.lanes = p,
                n;
            case re:
                return n = Kt(13, o, s, d),
                n.elementType = re,
                n.lanes = p,
                n;
            case Te:
                return n = Kt(19, o, s, d),
                n.elementType = Te,
                n.lanes = p,
                n;
            case de:
                return Ba(o, d, p, s);
            default:
                if (typeof n == "object" && n !== null)
                    switch (n.$$typeof) {
                    case Q:
                        v = 10;
                        break e;
                    case J:
                        v = 9;
                        break e;
                    case $:
                        v = 11;
                        break e;
                    case pe:
                        v = 14;
                        break e;
                    case he:
                        v = 16,
                        l = null;
                        break e
                    }
                throw Error(r(130, n == null ? n : typeof n, ""))
            }
        return s = Kt(v, o, s, d),
        s.elementType = n,
        s.type = l,
        s.lanes = p,
        s
    }
    function Br(n, s, o, l) {
        return n = Kt(7, n, l, s),
        n.lanes = o,
        n
    }
    function Ba(n, s, o, l) {
        return n = Kt(22, n, l, s),
        n.elementType = de,
        n.lanes = o,
        n.stateNode = {
            isHidden: !1
        },
        n
    }
    function Oc(n, s, o) {
        return n = Kt(6, n, null, s),
        n.lanes = o,
        n
    }
    function Lc(n, s, o) {
        return s = Kt(4, n.children !== null ? n.children : [], n.key, s),
        s.lanes = o,
        s.stateNode = {
            containerInfo: n.containerInfo,
            pendingChildren: null,
            implementation: n.implementation
        },
        s
    }
    function jS(n, s, o, l, d) {
        this.tag = s,
        this.containerInfo = n,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = ou(0),
        this.expirationTimes = ou(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = ou(0),
        this.identifierPrefix = l,
        this.onRecoverableError = d,
        this.mutableSourceEagerHydrationData = null
    }
    function Dc(n, s, o, l, d, p, v, E, C) {
        return n = new jS(n,s,o,E,C),
        s === 1 ? (s = 1,
        p === !0 && (s |= 8)) : s = 0,
        p = Kt(3, null, null, s),
        n.current = p,
        p.stateNode = n,
        p.memoizedState = {
            element: l,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Ku(p),
        n
    }
    function IS(n, s, o) {
        var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Y,
            key: l == null ? null : "" + l,
            children: n,
            containerInfo: s,
            implementation: o
        }
    }
    function Ym(n) {
        if (!n)
            return Zn;
        n = n._reactInternals;
        e: {
            if (_r(n) !== n || n.tag !== 1)
                throw Error(r(170));
            var s = n;
            do {
                switch (s.tag) {
                case 3:
                    s = s.stateNode.context;
                    break e;
                case 1:
                    if (Tt(s.type)) {
                        s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                s = s.return
            } while (s !== null);
            throw Error(r(171))
        }
        if (n.tag === 1) {
            var o = n.type;
            if (Tt(o))
                return kp(n, o, s)
        }
        return s
    }
    function Xm(n, s, o, l, d, p, v, E, C) {
        return n = Dc(o, l, !0, n, d, p, v, E, C),
        n.context = Ym(null),
        o = n.current,
        l = St(),
        d = or(o),
        p = On(l, d),
        p.callback = s ?? null,
        nr(o, p, d),
        n.current.lanes = d,
        vi(n, d, l),
        _t(n, l),
        n
    }
    function Ua(n, s, o, l) {
        var d = s.current
          , p = St()
          , v = or(d);
        return o = Ym(o),
        s.context === null ? s.context = o : s.pendingContext = o,
        s = On(p, v),
        s.payload = {
            element: n
        },
        l = l === void 0 ? null : l,
        l !== null && (s.callback = l),
        n = nr(d, s, v),
        n !== null && (an(n, d, v, p),
        va(n, d, v)),
        v
    }
    function za(n) {
        if (n = n.current,
        !n.child)
            return null;
        switch (n.child.tag) {
        case 5:
            return n.child.stateNode;
        default:
            return n.child.stateNode
        }
    }
    function Jm(n, s) {
        if (n = n.memoizedState,
        n !== null && n.dehydrated !== null) {
            var o = n.retryLane;
            n.retryLane = o !== 0 && o < s ? o : s
        }
    }
    function Mc(n, s) {
        Jm(n, s),
        (n = n.alternate) && Jm(n, s)
    }
    function FS() {
        return null
    }
    var Zm = typeof reportError == "function" ? reportError : function(n) {
        console.error(n)
    }
    ;
    function jc(n) {
        this._internalRoot = n
    }
    $a.prototype.render = jc.prototype.render = function(n) {
        var s = this._internalRoot;
        if (s === null)
            throw Error(r(409));
        Ua(n, s, null, null)
    }
    ,
    $a.prototype.unmount = jc.prototype.unmount = function() {
        var n = this._internalRoot;
        if (n !== null) {
            this._internalRoot = null;
            var s = n.containerInfo;
            Ir(function() {
                Ua(null, n, null, null)
            }),
            s[Pn] = null
        }
    }
    ;
    function $a(n) {
        this._internalRoot = n
    }
    $a.prototype.unstable_scheduleHydration = function(n) {
        if (n) {
            var s = jh();
            n = {
                blockedOn: null,
                target: n,
                priority: s
            };
            for (var o = 0; o < Qn.length && s !== 0 && s < Qn[o].priority; o++)
                ;
            Qn.splice(o, 0, n),
            o === 0 && Vh(n)
        }
    }
    ;
    function Ic(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
    }
    function Ha(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    }
    function eg() {}
    function VS(n, s, o, l, d) {
        if (d) {
            if (typeof l == "function") {
                var p = l;
                l = function() {
                    var I = za(v);
                    p.call(I)
                }
            }
            var v = Xm(s, l, n, 0, null, !1, !1, "", eg);
            return n._reactRootContainer = v,
            n[Pn] = v.current,
            Oi(n.nodeType === 8 ? n.parentNode : n),
            Ir(),
            v
        }
        for (; d = n.lastChild; )
            n.removeChild(d);
        if (typeof l == "function") {
            var E = l;
            l = function() {
                var I = za(C);
                E.call(I)
            }
        }
        var C = Dc(n, 0, !1, null, null, !1, !1, "", eg);
        return n._reactRootContainer = C,
        n[Pn] = C.current,
        Oi(n.nodeType === 8 ? n.parentNode : n),
        Ir(function() {
            Ua(s, C, o, l)
        }),
        C
    }
    function qa(n, s, o, l, d) {
        var p = o._reactRootContainer;
        if (p) {
            var v = p;
            if (typeof d == "function") {
                var E = d;
                d = function() {
                    var C = za(v);
                    E.call(C)
                }
            }
            Ua(s, v, n, d)
        } else
            v = VS(o, s, n, d, l);
        return za(v)
    }
    Dh = function(n) {
        switch (n.tag) {
        case 3:
            var s = n.stateNode;
            if (s.current.memoizedState.isDehydrated) {
                var o = yi(s.pendingLanes);
                o !== 0 && (au(s, o | 1),
                _t(s, Qe()),
                (Ae & 6) === 0 && (Ns = Qe() + 500,
                er()))
            }
            break;
        case 13:
            Ir(function() {
                var l = Nn(n, 1);
                if (l !== null) {
                    var d = St();
                    an(l, n, 1, d)
                }
            }),
            Mc(n, 1)
        }
    }
    ,
    lu = function(n) {
        if (n.tag === 13) {
            var s = Nn(n, 134217728);
            if (s !== null) {
                var o = St();
                an(s, n, 134217728, o)
            }
            Mc(n, 134217728)
        }
    }
    ,
    Mh = function(n) {
        if (n.tag === 13) {
            var s = or(n)
              , o = Nn(n, s);
            if (o !== null) {
                var l = St();
                an(o, n, s, l)
            }
            Mc(n, s)
        }
    }
    ,
    jh = function() {
        return Me
    }
    ,
    Ih = function(n, s) {
        var o = Me;
        try {
            return Me = n,
            s()
        } finally {
            Me = o
        }
    }
    ,
    eu = function(n, s, o) {
        switch (s) {
        case "input":
            if (Wl(n, o),
            s = o.name,
            o.type === "radio" && s != null) {
                for (o = n; o.parentNode; )
                    o = o.parentNode;
                for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'),
                s = 0; s < o.length; s++) {
                    var l = o[s];
                    if (l !== n && l.form === n.form) {
                        var d = la(l);
                        if (!d)
                            throw Error(r(90));
                        Pr(l),
                        Wl(l, d)
                    }
                }
            }
            break;
        case "textarea":
            fh(n, o);
            break;
        case "select":
            s = o.value,
            s != null && ls(n, !!o.multiple, s, !1)
        }
    }
    ,
    Sh = _c,
    bh = Ir;
    var BS = {
        usingClientEntryPoint: !1,
        Events: [Mi, vs, la, wh, xh, _c]
    }
      , Gi = {
        findFiberByHostInstance: Rr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , US = {
        bundleType: Gi.bundleType,
        version: Gi.version,
        rendererPackageName: Gi.rendererPackageName,
        rendererConfig: Gi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: j.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(n) {
            return n = Ch(n),
            n === null ? null : n.stateNode
        },
        findFiberByHostInstance: Gi.findFiberByHostInstance || FS,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Wa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Wa.isDisabled && Wa.supportsFiber)
            try {
                $o = Wa.inject(US),
                hn = Wa
            } catch {}
    }
    return Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = BS,
    Rt.createPortal = function(n, s) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Ic(s))
            throw Error(r(200));
        return IS(n, s, null, o)
    }
    ,
    Rt.createRoot = function(n, s) {
        if (!Ic(n))
            throw Error(r(299));
        var o = !1
          , l = ""
          , d = Zm;
        return s != null && (s.unstable_strictMode === !0 && (o = !0),
        s.identifierPrefix !== void 0 && (l = s.identifierPrefix),
        s.onRecoverableError !== void 0 && (d = s.onRecoverableError)),
        s = Dc(n, 1, !1, null, null, o, !1, l, d),
        n[Pn] = s.current,
        Oi(n.nodeType === 8 ? n.parentNode : n),
        new jc(s)
    }
    ,
    Rt.findDOMNode = function(n) {
        if (n == null)
            return null;
        if (n.nodeType === 1)
            return n;
        var s = n._reactInternals;
        if (s === void 0)
            throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","),
            Error(r(268, n)));
        return n = Ch(s),
        n = n === null ? null : n.stateNode,
        n
    }
    ,
    Rt.flushSync = function(n) {
        return Ir(n)
    }
    ,
    Rt.hydrate = function(n, s, o) {
        if (!Ha(s))
            throw Error(r(200));
        return qa(null, n, s, !0, o)
    }
    ,
    Rt.hydrateRoot = function(n, s, o) {
        if (!Ic(n))
            throw Error(r(405));
        var l = o != null && o.hydratedSources || null
          , d = !1
          , p = ""
          , v = Zm;
        if (o != null && (o.unstable_strictMode === !0 && (d = !0),
        o.identifierPrefix !== void 0 && (p = o.identifierPrefix),
        o.onRecoverableError !== void 0 && (v = o.onRecoverableError)),
        s = Xm(s, null, n, 1, o ?? null, d, !1, p, v),
        n[Pn] = s.current,
        Oi(n),
        l)
            for (n = 0; n < l.length; n++)
                o = l[n],
                d = o._getVersion,
                d = d(o._source),
                s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [o, d] : s.mutableSourceEagerHydrationData.push(o, d);
        return new $a(s)
    }
    ,
    Rt.render = function(n, s, o) {
        if (!Ha(s))
            throw Error(r(200));
        return qa(null, n, s, !1, o)
    }
    ,
    Rt.unmountComponentAtNode = function(n) {
        if (!Ha(n))
            throw Error(r(40));
        return n._reactRootContainer ? (Ir(function() {
            qa(null, null, n, !1, function() {
                n._reactRootContainer = null,
                n[Pn] = null
            })
        }),
        !0) : !1
    }
    ,
    Rt.unstable_batchedUpdates = _c,
    Rt.unstable_renderSubtreeIntoContainer = function(n, s, o, l) {
        if (!Ha(o))
            throw Error(r(200));
        if (n == null || n._reactInternals === void 0)
            throw Error(r(38));
        return qa(n, s, o, !1, l)
    }
    ,
    Rt.version = "18.3.1-next-f1338f8080-20240426",
    Rt
}
var ug;
function $v() {
    if (ug)
        return Uc.exports;
    ug = 1;
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (e) {
                console.error(e)
            }
    }
    return t(),
    Uc.exports = YS(),
    Uc.exports
}
var cg;
function XS() {
    if (cg)
        return Qa;
    cg = 1;
    var t = $v();
    return Qa.createRoot = t.createRoot,
    Qa.hydrateRoot = t.hydrateRoot,
    Qa
}
var JS = XS();
const ZS = zv(JS)
  , eb = 20
  , tb = 1e6
  , Vn = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let Hc = 0;
function nb() {
    return Hc = (Hc + 1) % Number.MAX_VALUE,
    Hc.toString()
}
const qc = new Map
  , dg = t => {
    if (qc.has(t))
        return;
    const e = setTimeout( () => {
        qc.delete(t),
        co({
            type: Vn.REMOVE_TOAST,
            toastId: t
        })
    }
    , tb);
    qc.set(t, e)
}
  , rb = (t, e) => {
    switch (e.type) {
    case Vn.ADD_TOAST:
        return {
            ...t,
            toasts: [e.toast, ...t.toasts].slice(0, eb)
        };
    case Vn.UPDATE_TOAST:
        return {
            ...t,
            toasts: t.toasts.map(r => r.id === e.toast.id ? {
                ...r,
                ...e.toast
            } : r)
        };
    case Vn.DISMISS_TOAST:
        {
            const {toastId: r} = e;
            return r ? dg(r) : t.toasts.forEach(i => {
                dg(i.id)
            }
            ),
            {
                ...t,
                toasts: t.toasts.map(i => i.id === r || r === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case Vn.REMOVE_TOAST:
        return e.toastId === void 0 ? {
            ...t,
            toasts: []
        } : {
            ...t,
            toasts: t.toasts.filter(r => r.id !== e.toastId)
        }
    }
}
  , sl = [];
let il = {
    toasts: []
};
function co(t) {
    il = rb(il, t),
    sl.forEach(e => {
        e(il)
    }
    )
}
function sb({...t}) {
    const e = nb()
      , r = a => co({
        type: Vn.UPDATE_TOAST,
        toast: {
            ...a,
            id: e
        }
    })
      , i = () => co({
        type: Vn.DISMISS_TOAST,
        toastId: e
    });
    return co({
        type: Vn.ADD_TOAST,
        toast: {
            ...t,
            id: e,
            open: !0,
            onOpenChange: a => {
                a || i()
            }
        }
    }),
    {
        id: e,
        dismiss: i,
        update: r
    }
}
function ib() {
    const [t,e] = L.useState(il);
    return L.useEffect( () => (sl.push(e),
    () => {
        const r = sl.indexOf(e);
        r > -1 && sl.splice(r, 1)
    }
    ), [t]),
    {
        ...t,
        toast: sb,
        dismiss: r => co({
            type: Vn.DISMISS_TOAST,
            toastId: r
        })
    }
}
function Hv(t) {
    var e, r, i = "";
    if (typeof t == "string" || typeof t == "number")
        i += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var a = t.length;
            for (e = 0; e < a; e++)
                t[e] && (r = Hv(t[e])) && (i && (i += " "),
                i += r)
        } else
            for (r in t)
                t[r] && (i && (i += " "),
                i += r);
    return i
}
function qv() {
    for (var t, e, r = 0, i = "", a = arguments.length; r < a; r++)
        (t = arguments[r]) && (e = Hv(t)) && (i && (i += " "),
        i += e);
    return i
}
const fg = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t
  , hg = qv
  , Wv = (t, e) => r => {
    var i;
    if ((e == null ? void 0 : e.variants) == null)
        return hg(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const {variants: a, defaultVariants: u} = e
      , c = Object.keys(a).map(m => {
        const g = r == null ? void 0 : r[m]
          , y = u == null ? void 0 : u[m];
        if (g === null)
            return null;
        const w = fg(g) || fg(y);
        return a[m][w]
    }
    )
      , f = r && Object.entries(r).reduce( (m, g) => {
        let[y,w] = g;
        return w === void 0 || (m[y] = w),
        m
    }
    , {})
      , h = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (m, g) => {
        let {class: y, className: w, ...k} = g;
        return Object.entries(k).every(x => {
            let[b,S] = x;
            return Array.isArray(S) ? S.includes({
                ...u,
                ...f
            }[b]) : {
                ...u,
                ...f
            }[b] === S
        }
        ) ? [...m, y, w] : m
    }
    , []);
    return hg(t, c, h, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ob = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Kv = (...t) => t.filter( (e, r, i) => !!e && e.trim() !== "" && i.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ab = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lb = L.forwardRef( ({color: t="currentColor", size: e=24, strokeWidth: r=2, absoluteStrokeWidth: i, className: a="", children: u, iconNode: c, ...f}, h) => L.createElement("svg", {
    ref: h,
    ...ab,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(r) * 24 / Number(e) : r,
    className: Kv("lucide", a),
    ...f
}, [...c.map( ([m,g]) => L.createElement(m, g)), ...Array.isArray(u) ? u : [u]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = (t, e) => {
    const r = L.forwardRef( ({className: i, ...a}, u) => L.createElement(lb, {
        ref: u,
        iconNode: e,
        className: Kv(`lucide-${ob(t)}`, i),
        ...a
    }));
    return r.displayName = `${t}`,
    r
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ub = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]
  , cb = $n("Clock", ub);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const db = [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]
  , fb = $n("DollarSign", db);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hb = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , pb = $n("MapPin", hb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mb = [["polygon", {
    points: "3 11 22 2 13 21 11 13 3 11",
    key: "1ltx0t"
}]]
  , gb = $n("Navigation", mb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yb = [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]
  , Wc = $n("Phone", yb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vb = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]
  , wb = $n("Shield", vb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xb = [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]
  , Sb = $n("Star", xb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bb = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , Eb = $n("X", bb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kb = [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]]
  , Tb = $n("Zap", kb)
  , pf = "-"
  , Cb = t => {
    const e = _b(t)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: i} = t;
    return {
        getClassGroupId: c => {
            const f = c.split(pf);
            return f[0] === "" && f.length !== 1 && f.shift(),
            Qv(f, e) || Pb(c)
        }
        ,
        getConflictingClassGroupIds: (c, f) => {
            const h = r[c] || [];
            return f && i[c] ? [...h, ...i[c]] : h
        }
    }
}
  , Qv = (t, e) => {
    var c;
    if (t.length === 0)
        return e.classGroupId;
    const r = t[0]
      , i = e.nextPart.get(r)
      , a = i ? Qv(t.slice(1), i) : void 0;
    if (a)
        return a;
    if (e.validators.length === 0)
        return;
    const u = t.join(pf);
    return (c = e.validators.find( ({validator: f}) => f(u))) == null ? void 0 : c.classGroupId
}
  , pg = /^\[(.+)\]$/
  , Pb = t => {
    if (pg.test(t)) {
        const e = pg.exec(t)[1]
          , r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
        if (r)
            return "arbitrary.." + r
    }
}
  , _b = t => {
    const {theme: e, classGroups: r} = t
      , i = {
        nextPart: new Map,
        validators: []
    };
    for (const a in r)
        vd(r[a], i, a, e);
    return i
}
  , vd = (t, e, r, i) => {
    t.forEach(a => {
        if (typeof a == "string") {
            const u = a === "" ? e : mg(e, a);
            u.classGroupId = r;
            return
        }
        if (typeof a == "function") {
            if (Rb(a)) {
                vd(a(i), e, r, i);
                return
            }
            e.validators.push({
                validator: a,
                classGroupId: r
            });
            return
        }
        Object.entries(a).forEach( ([u,c]) => {
            vd(c, mg(e, u), r, i)
        }
        )
    }
    )
}
  , mg = (t, e) => {
    let r = t;
    return e.split(pf).forEach(i => {
        r.nextPart.has(i) || r.nextPart.set(i, {
            nextPart: new Map,
            validators: []
        }),
        r = r.nextPart.get(i)
    }
    ),
    r
}
  , Rb = t => t.isThemeGetter
  , Ab = t => {
    if (t < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let e = 0
      , r = new Map
      , i = new Map;
    const a = (u, c) => {
        r.set(u, c),
        e++,
        e > t && (e = 0,
        i = r,
        r = new Map)
    }
    ;
    return {
        get(u) {
            let c = r.get(u);
            if (c !== void 0)
                return c;
            if ((c = i.get(u)) !== void 0)
                return a(u, c),
                c
        },
        set(u, c) {
            r.has(u) ? r.set(u, c) : a(u, c)
        }
    }
}
  , wd = "!"
  , xd = ":"
  , Nb = xd.length
  , Ob = t => {
    const {prefix: e, experimentalParseClassName: r} = t;
    let i = a => {
        const u = [];
        let c = 0, f = 0, h = 0, m;
        for (let x = 0; x < a.length; x++) {
            let b = a[x];
            if (c === 0 && f === 0) {
                if (b === xd) {
                    u.push(a.slice(h, x)),
                    h = x + Nb;
                    continue
                }
                if (b === "/") {
                    m = x;
                    continue
                }
            }
            b === "[" ? c++ : b === "]" ? c-- : b === "(" ? f++ : b === ")" && f--
        }
        const g = u.length === 0 ? a : a.substring(h)
          , y = Lb(g)
          , w = y !== g
          , k = m && m > h ? m - h : void 0;
        return {
            modifiers: u,
            hasImportantModifier: w,
            baseClassName: y,
            maybePostfixModifierPosition: k
        }
    }
    ;
    if (e) {
        const a = e + xd
          , u = i;
        i = c => c.startsWith(a) ? u(c.substring(a.length)) : {
            isExternal: !0,
            modifiers: [],
            hasImportantModifier: !1,
            baseClassName: c,
            maybePostfixModifierPosition: void 0
        }
    }
    if (r) {
        const a = i;
        i = u => r({
            className: u,
            parseClassName: a
        })
    }
    return i
}
  , Lb = t => t.endsWith(wd) ? t.substring(0, t.length - 1) : t.startsWith(wd) ? t.substring(1) : t
  , Db = t => {
    const e = Object.fromEntries(t.orderSensitiveModifiers.map(i => [i, !0]));
    return i => {
        if (i.length <= 1)
            return i;
        const a = [];
        let u = [];
        return i.forEach(c => {
            c[0] === "[" || e[c] ? (a.push(...u.sort(), c),
            u = []) : u.push(c)
        }
        ),
        a.push(...u.sort()),
        a
    }
}
  , Mb = t => ({
    cache: Ab(t.cacheSize),
    parseClassName: Ob(t),
    sortModifiers: Db(t),
    ...Cb(t)
})
  , jb = /\s+/
  , Ib = (t, e) => {
    const {parseClassName: r, getClassGroupId: i, getConflictingClassGroupIds: a, sortModifiers: u} = e
      , c = []
      , f = t.trim().split(jb);
    let h = "";
    for (let m = f.length - 1; m >= 0; m -= 1) {
        const g = f[m]
          , {isExternal: y, modifiers: w, hasImportantModifier: k, baseClassName: x, maybePostfixModifierPosition: b} = r(g);
        if (y) {
            h = g + (h.length > 0 ? " " + h : h);
            continue
        }
        let S = !!b
          , R = i(S ? x.substring(0, b) : x);
        if (!R) {
            if (!S) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            if (R = i(x),
            !R) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            S = !1
        }
        const B = u(w).join(":")
          , M = k ? B + wd : B
          , j = M + R;
        if (c.includes(j))
            continue;
        c.push(j);
        const U = a(R, S);
        for (let Y = 0; Y < U.length; ++Y) {
            const ee = U[Y];
            c.push(M + ee)
        }
        h = g + (h.length > 0 ? " " + h : h)
    }
    return h
}
;
function Fb() {
    let t = 0, e, r, i = "";
    for (; t < arguments.length; )
        (e = arguments[t++]) && (r = Gv(e)) && (i && (i += " "),
        i += r);
    return i
}
const Gv = t => {
    if (typeof t == "string")
        return t;
    let e, r = "";
    for (let i = 0; i < t.length; i++)
        t[i] && (e = Gv(t[i])) && (r && (r += " "),
        r += e);
    return r
}
;
function Vb(t, ...e) {
    let r, i, a, u = c;
    function c(h) {
        const m = e.reduce( (g, y) => y(g), t());
        return r = Mb(m),
        i = r.cache.get,
        a = r.cache.set,
        u = f,
        f(h)
    }
    function f(h) {
        const m = i(h);
        if (m)
            return m;
        const g = Ib(h, r);
        return a(h, g),
        g
    }
    return function() {
        return u(Fb.apply(null, arguments))
    }
}
const nt = t => {
    const e = r => r[t] || [];
    return e.isThemeGetter = !0,
    e
}
  , Yv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , Xv = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , Bb = /^\d+\/\d+$/
  , Ub = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , zb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , $b = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , Hb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , qb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Ls = t => Bb.test(t)
  , Ee = t => !!t && !Number.isNaN(Number(t))
  , cr = t => !!t && Number.isInteger(Number(t))
  , Kc = t => t.endsWith("%") && Ee(t.slice(0, -1))
  , Mn = t => Ub.test(t)
  , Wb = () => !0
  , Kb = t => zb.test(t) && !$b.test(t)
  , Jv = () => !1
  , Qb = t => Hb.test(t)
  , Gb = t => qb.test(t)
  , Yb = t => !ie(t) && !oe(t)
  , Xb = t => ii(t, t0, Jv)
  , ie = t => Yv.test(t)
  , Ur = t => ii(t, n0, Kb)
  , Qc = t => ii(t, nE, Ee)
  , gg = t => ii(t, Zv, Jv)
  , Jb = t => ii(t, e0, Gb)
  , Ga = t => ii(t, r0, Qb)
  , oe = t => Xv.test(t)
  , Xi = t => oi(t, n0)
  , Zb = t => oi(t, rE)
  , yg = t => oi(t, Zv)
  , eE = t => oi(t, t0)
  , tE = t => oi(t, e0)
  , Ya = t => oi(t, r0, !0)
  , ii = (t, e, r) => {
    const i = Yv.exec(t);
    return i ? i[1] ? e(i[1]) : r(i[2]) : !1
}
  , oi = (t, e, r=!1) => {
    const i = Xv.exec(t);
    return i ? i[1] ? e(i[1]) : r : !1
}
  , Zv = t => t === "position" || t === "percentage"
  , e0 = t => t === "image" || t === "url"
  , t0 = t => t === "length" || t === "size" || t === "bg-size"
  , n0 = t => t === "length"
  , nE = t => t === "number"
  , rE = t => t === "family-name"
  , r0 = t => t === "shadow"
  , sE = () => {
    const t = nt("color")
      , e = nt("font")
      , r = nt("text")
      , i = nt("font-weight")
      , a = nt("tracking")
      , u = nt("leading")
      , c = nt("breakpoint")
      , f = nt("container")
      , h = nt("spacing")
      , m = nt("radius")
      , g = nt("shadow")
      , y = nt("inset-shadow")
      , w = nt("text-shadow")
      , k = nt("drop-shadow")
      , x = nt("blur")
      , b = nt("perspective")
      , S = nt("aspect")
      , R = nt("ease")
      , B = nt("animate")
      , M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , j = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , U = () => [...j(), oe, ie]
      , Y = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , ee = () => ["auto", "contain", "none"]
      , N = () => [oe, ie, h]
      , q = () => [Ls, "full", "auto", ...N()]
      , Q = () => [cr, "none", "subgrid", oe, ie]
      , J = () => ["auto", {
        span: ["full", cr, oe, ie]
    }, cr, oe, ie]
      , $ = () => [cr, "auto", oe, ie]
      , re = () => ["auto", "min", "max", "fr", oe, ie]
      , Te = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , pe = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , he = () => ["auto", ...N()]
      , de = () => [Ls, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()]
      , V = () => [t, oe, ie]
      , le = () => [...j(), yg, gg, {
        position: [oe, ie]
    }]
      , X = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , A = () => ["auto", "cover", "contain", eE, Xb, {
        size: [oe, ie]
    }]
      , z = () => [Kc, Xi, Ur]
      , ce = () => ["", "none", "full", m, oe, ie]
      , fe = () => ["", Ee, Xi, Ur]
      , be = () => ["solid", "dashed", "dotted", "double"]
      , Ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , xe = () => [Ee, Kc, yg, gg]
      , Ne = () => ["", "none", x, oe, ie]
      , De = () => ["none", Ee, oe, ie]
      , rt = () => ["none", Ee, oe, ie]
      , Hn = () => [Ee, oe, ie]
      , Pr = () => [Ls, "full", ...N()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [Mn],
            breakpoint: [Mn],
            color: [Wb],
            container: [Mn],
            "drop-shadow": [Mn],
            ease: ["in", "out", "in-out"],
            font: [Yb],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [Mn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [Mn],
            shadow: [Mn],
            spacing: ["px", Ee],
            text: [Mn],
            "text-shadow": [Mn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", Ls, ie, oe, S]
            }],
            container: ["container"],
            columns: [{
                columns: [Ee, ie, oe, f]
            }],
            "break-after": [{
                "break-after": M()
            }],
            "break-before": [{
                "break-before": M()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: U()
            }],
            overflow: [{
                overflow: Y()
            }],
            "overflow-x": [{
                "overflow-x": Y()
            }],
            "overflow-y": [{
                "overflow-y": Y()
            }],
            overscroll: [{
                overscroll: ee()
            }],
            "overscroll-x": [{
                "overscroll-x": ee()
            }],
            "overscroll-y": [{
                "overscroll-y": ee()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: q()
            }],
            "inset-x": [{
                "inset-x": q()
            }],
            "inset-y": [{
                "inset-y": q()
            }],
            start: [{
                start: q()
            }],
            end: [{
                end: q()
            }],
            top: [{
                top: q()
            }],
            right: [{
                right: q()
            }],
            bottom: [{
                bottom: q()
            }],
            left: [{
                left: q()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [cr, "auto", oe, ie]
            }],
            basis: [{
                basis: [Ls, "full", "auto", f, ...N()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [Ee, Ls, "auto", "initial", "none", ie]
            }],
            grow: [{
                grow: ["", Ee, oe, ie]
            }],
            shrink: [{
                shrink: ["", Ee, oe, ie]
            }],
            order: [{
                order: [cr, "first", "last", "none", oe, ie]
            }],
            "grid-cols": [{
                "grid-cols": Q()
            }],
            "col-start-end": [{
                col: J()
            }],
            "col-start": [{
                "col-start": $()
            }],
            "col-end": [{
                "col-end": $()
            }],
            "grid-rows": [{
                "grid-rows": Q()
            }],
            "row-start-end": [{
                row: J()
            }],
            "row-start": [{
                "row-start": $()
            }],
            "row-end": [{
                "row-end": $()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": re()
            }],
            "auto-rows": [{
                "auto-rows": re()
            }],
            gap: [{
                gap: N()
            }],
            "gap-x": [{
                "gap-x": N()
            }],
            "gap-y": [{
                "gap-y": N()
            }],
            "justify-content": [{
                justify: [...Te(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...pe(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...pe()]
            }],
            "align-content": [{
                content: ["normal", ...Te()]
            }],
            "align-items": [{
                items: [...pe(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...pe(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": Te()
            }],
            "place-items": [{
                "place-items": [...pe(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...pe()]
            }],
            p: [{
                p: N()
            }],
            px: [{
                px: N()
            }],
            py: [{
                py: N()
            }],
            ps: [{
                ps: N()
            }],
            pe: [{
                pe: N()
            }],
            pt: [{
                pt: N()
            }],
            pr: [{
                pr: N()
            }],
            pb: [{
                pb: N()
            }],
            pl: [{
                pl: N()
            }],
            m: [{
                m: he()
            }],
            mx: [{
                mx: he()
            }],
            my: [{
                my: he()
            }],
            ms: [{
                ms: he()
            }],
            me: [{
                me: he()
            }],
            mt: [{
                mt: he()
            }],
            mr: [{
                mr: he()
            }],
            mb: [{
                mb: he()
            }],
            ml: [{
                ml: he()
            }],
            "space-x": [{
                "space-x": N()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": N()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: de()
            }],
            w: [{
                w: [f, "screen", ...de()]
            }],
            "min-w": [{
                "min-w": [f, "screen", "none", ...de()]
            }],
            "max-w": [{
                "max-w": [f, "screen", "none", "prose", {
                    screen: [c]
                }, ...de()]
            }],
            h: [{
                h: ["screen", "lh", ...de()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...de()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...de()]
            }],
            "font-size": [{
                text: ["base", r, Xi, Ur]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [i, oe, Qc]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Kc, ie]
            }],
            "font-family": [{
                font: [Zb, ie, e]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [a, oe, ie]
            }],
            "line-clamp": [{
                "line-clamp": [Ee, "none", oe, Qc]
            }],
            leading: [{
                leading: [u, ...N()]
            }],
            "list-image": [{
                "list-image": ["none", oe, ie]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", oe, ie]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: V()
            }],
            "text-color": [{
                text: V()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...be(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [Ee, "from-font", "auto", oe, Ur]
            }],
            "text-decoration-color": [{
                decoration: V()
            }],
            "underline-offset": [{
                "underline-offset": [Ee, "auto", oe, ie]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: N()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", oe, ie]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", oe, ie]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: le()
            }],
            "bg-repeat": [{
                bg: X()
            }],
            "bg-size": [{
                bg: A()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, cr, oe, ie],
                    radial: ["", oe, ie],
                    conic: [cr, oe, ie]
                }, tE, Jb]
            }],
            "bg-color": [{
                bg: V()
            }],
            "gradient-from-pos": [{
                from: z()
            }],
            "gradient-via-pos": [{
                via: z()
            }],
            "gradient-to-pos": [{
                to: z()
            }],
            "gradient-from": [{
                from: V()
            }],
            "gradient-via": [{
                via: V()
            }],
            "gradient-to": [{
                to: V()
            }],
            rounded: [{
                rounded: ce()
            }],
            "rounded-s": [{
                "rounded-s": ce()
            }],
            "rounded-e": [{
                "rounded-e": ce()
            }],
            "rounded-t": [{
                "rounded-t": ce()
            }],
            "rounded-r": [{
                "rounded-r": ce()
            }],
            "rounded-b": [{
                "rounded-b": ce()
            }],
            "rounded-l": [{
                "rounded-l": ce()
            }],
            "rounded-ss": [{
                "rounded-ss": ce()
            }],
            "rounded-se": [{
                "rounded-se": ce()
            }],
            "rounded-ee": [{
                "rounded-ee": ce()
            }],
            "rounded-es": [{
                "rounded-es": ce()
            }],
            "rounded-tl": [{
                "rounded-tl": ce()
            }],
            "rounded-tr": [{
                "rounded-tr": ce()
            }],
            "rounded-br": [{
                "rounded-br": ce()
            }],
            "rounded-bl": [{
                "rounded-bl": ce()
            }],
            "border-w": [{
                border: fe()
            }],
            "border-w-x": [{
                "border-x": fe()
            }],
            "border-w-y": [{
                "border-y": fe()
            }],
            "border-w-s": [{
                "border-s": fe()
            }],
            "border-w-e": [{
                "border-e": fe()
            }],
            "border-w-t": [{
                "border-t": fe()
            }],
            "border-w-r": [{
                "border-r": fe()
            }],
            "border-w-b": [{
                "border-b": fe()
            }],
            "border-w-l": [{
                "border-l": fe()
            }],
            "divide-x": [{
                "divide-x": fe()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": fe()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...be(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...be(), "hidden", "none"]
            }],
            "border-color": [{
                border: V()
            }],
            "border-color-x": [{
                "border-x": V()
            }],
            "border-color-y": [{
                "border-y": V()
            }],
            "border-color-s": [{
                "border-s": V()
            }],
            "border-color-e": [{
                "border-e": V()
            }],
            "border-color-t": [{
                "border-t": V()
            }],
            "border-color-r": [{
                "border-r": V()
            }],
            "border-color-b": [{
                "border-b": V()
            }],
            "border-color-l": [{
                "border-l": V()
            }],
            "divide-color": [{
                divide: V()
            }],
            "outline-style": [{
                outline: [...be(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [Ee, oe, ie]
            }],
            "outline-w": [{
                outline: ["", Ee, Xi, Ur]
            }],
            "outline-color": [{
                outline: V()
            }],
            shadow: [{
                shadow: ["", "none", g, Ya, Ga]
            }],
            "shadow-color": [{
                shadow: V()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", y, Ya, Ga]
            }],
            "inset-shadow-color": [{
                "inset-shadow": V()
            }],
            "ring-w": [{
                ring: fe()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: V()
            }],
            "ring-offset-w": [{
                "ring-offset": [Ee, Ur]
            }],
            "ring-offset-color": [{
                "ring-offset": V()
            }],
            "inset-ring-w": [{
                "inset-ring": fe()
            }],
            "inset-ring-color": [{
                "inset-ring": V()
            }],
            "text-shadow": [{
                "text-shadow": ["none", w, Ya, Ga]
            }],
            "text-shadow-color": [{
                "text-shadow": V()
            }],
            opacity: [{
                opacity: [Ee, oe, ie]
            }],
            "mix-blend": [{
                "mix-blend": [...Ce(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": Ce()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [Ee]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": xe()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": xe()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": V()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": V()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": xe()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": xe()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": V()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": V()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": xe()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": xe()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": V()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": V()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": xe()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": xe()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": V()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": V()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": xe()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": xe()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": V()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": V()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": xe()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": xe()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": V()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": V()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": xe()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": xe()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": V()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": V()
            }],
            "mask-image-radial": [{
                "mask-radial": [oe, ie]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": xe()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": xe()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": V()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": V()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": j()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [Ee]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": xe()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": xe()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": V()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": V()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: le()
            }],
            "mask-repeat": [{
                mask: X()
            }],
            "mask-size": [{
                mask: A()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", oe, ie]
            }],
            filter: [{
                filter: ["", "none", oe, ie]
            }],
            blur: [{
                blur: Ne()
            }],
            brightness: [{
                brightness: [Ee, oe, ie]
            }],
            contrast: [{
                contrast: [Ee, oe, ie]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", k, Ya, Ga]
            }],
            "drop-shadow-color": [{
                "drop-shadow": V()
            }],
            grayscale: [{
                grayscale: ["", Ee, oe, ie]
            }],
            "hue-rotate": [{
                "hue-rotate": [Ee, oe, ie]
            }],
            invert: [{
                invert: ["", Ee, oe, ie]
            }],
            saturate: [{
                saturate: [Ee, oe, ie]
            }],
            sepia: [{
                sepia: ["", Ee, oe, ie]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", oe, ie]
            }],
            "backdrop-blur": [{
                "backdrop-blur": Ne()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [Ee, oe, ie]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [Ee, oe, ie]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", Ee, oe, ie]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [Ee, oe, ie]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", Ee, oe, ie]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [Ee, oe, ie]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [Ee, oe, ie]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", Ee, oe, ie]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": N()
            }],
            "border-spacing-x": [{
                "border-spacing-x": N()
            }],
            "border-spacing-y": [{
                "border-spacing-y": N()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", oe, ie]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [Ee, "initial", oe, ie]
            }],
            ease: [{
                ease: ["linear", "initial", R, oe, ie]
            }],
            delay: [{
                delay: [Ee, oe, ie]
            }],
            animate: [{
                animate: ["none", B, oe, ie]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [b, oe, ie]
            }],
            "perspective-origin": [{
                "perspective-origin": U()
            }],
            rotate: [{
                rotate: De()
            }],
            "rotate-x": [{
                "rotate-x": De()
            }],
            "rotate-y": [{
                "rotate-y": De()
            }],
            "rotate-z": [{
                "rotate-z": De()
            }],
            scale: [{
                scale: rt()
            }],
            "scale-x": [{
                "scale-x": rt()
            }],
            "scale-y": [{
                "scale-y": rt()
            }],
            "scale-z": [{
                "scale-z": rt()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: Hn()
            }],
            "skew-x": [{
                "skew-x": Hn()
            }],
            "skew-y": [{
                "skew-y": Hn()
            }],
            transform: [{
                transform: [oe, ie, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: U()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: Pr()
            }],
            "translate-x": [{
                "translate-x": Pr()
            }],
            "translate-y": [{
                "translate-y": Pr()
            }],
            "translate-z": [{
                "translate-z": Pr()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: V()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: V()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", oe, ie]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": N()
            }],
            "scroll-mx": [{
                "scroll-mx": N()
            }],
            "scroll-my": [{
                "scroll-my": N()
            }],
            "scroll-ms": [{
                "scroll-ms": N()
            }],
            "scroll-me": [{
                "scroll-me": N()
            }],
            "scroll-mt": [{
                "scroll-mt": N()
            }],
            "scroll-mr": [{
                "scroll-mr": N()
            }],
            "scroll-mb": [{
                "scroll-mb": N()
            }],
            "scroll-ml": [{
                "scroll-ml": N()
            }],
            "scroll-p": [{
                "scroll-p": N()
            }],
            "scroll-px": [{
                "scroll-px": N()
            }],
            "scroll-py": [{
                "scroll-py": N()
            }],
            "scroll-ps": [{
                "scroll-ps": N()
            }],
            "scroll-pe": [{
                "scroll-pe": N()
            }],
            "scroll-pt": [{
                "scroll-pt": N()
            }],
            "scroll-pr": [{
                "scroll-pr": N()
            }],
            "scroll-pb": [{
                "scroll-pb": N()
            }],
            "scroll-pl": [{
                "scroll-pl": N()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", oe, ie]
            }],
            fill: [{
                fill: ["none", ...V()]
            }],
            "stroke-w": [{
                stroke: [Ee, Xi, Ur, Qc]
            }],
            stroke: [{
                stroke: ["none", ...V()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , s0 = Vb(sE);
function Mt(...t) {
    return s0(qv(t))
}
const i0 = L.forwardRef( ({...t}, e) => T.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
i0.displayName = "ToastProvider";
const o0 = L.forwardRef( ({...t}, e) => T.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
o0.displayName = "ToastViewport";
const iE = Wv("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , a0 = L.forwardRef( ({className: t, variant: e, ...r}, i) => T.jsx("div", {
    ref: i,
    className: Mt(iE({
        variant: e
    }), t),
    ...r
}));
a0.displayName = "Toast";
const oE = L.forwardRef( ({className: t, ...e}, r) => T.jsx("div", {
    ref: r,
    className: Mt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
oE.displayName = "ToastAction";
const l0 = L.forwardRef( ({className: t, ...e}, r) => T.jsx("button", {
    ref: r,
    className: Mt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: T.jsx(Eb, {
        className: "h-4 w-4"
    })
}));
l0.displayName = "ToastClose";
const u0 = L.forwardRef( ({className: t, ...e}, r) => T.jsx("div", {
    ref: r,
    className: Mt("text-sm font-semibold", t),
    ...e
}));
u0.displayName = "ToastTitle";
const c0 = L.forwardRef( ({className: t, ...e}, r) => T.jsx("div", {
    ref: r,
    className: Mt("text-sm opacity-90", t),
    ...e
}));
c0.displayName = "ToastDescription";
function aE() {
    const {toasts: t} = ib();
    return T.jsxs(i0, {
        children: [t.map(function({id: e, title: r, description: i, action: a, ...u}) {
            return T.jsxs(a0, {
                ...u,
                children: [T.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && T.jsx(u0, {
                        children: r
                    }), i && T.jsx(c0, {
                        children: i
                    })]
                }), a, T.jsx(l0, {})]
            }, e)
        }), T.jsx(o0, {})]
    })
}
var _o = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        return this.listeners.add(t),
        this.onSubscribe(),
        () => {
            this.listeners.delete(t),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
, lE = {
    setTimeout: (t, e) => setTimeout(t, e),
    clearTimeout: t => clearTimeout(t),
    setInterval: (t, e) => setInterval(t, e),
    clearInterval: t => clearInterval(t)
}, hr, ff, Ov, uE = (Ov = class {
    constructor() {
        ye(this, hr, lE);
        ye(this, ff, !1)
    }
    setTimeoutProvider(t) {
        te(this, hr, t)
    }
    setTimeout(t, e) {
        return P(this, hr).setTimeout(t, e)
    }
    clearTimeout(t) {
        P(this, hr).clearTimeout(t)
    }
    setInterval(t, e) {
        return P(this, hr).setInterval(t, e)
    }
    clearInterval(t) {
        P(this, hr).clearInterval(t)
    }
}
,
hr = new WeakMap,
ff = new WeakMap,
Ov), qr = new uE;
function cE(t) {
    setTimeout(t, 0)
}
var is = typeof window > "u" || "Deno"in globalThis;
function Nt() {}
function dE(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Sd(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function d0(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function br(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Jt(t, e) {
    return typeof t == "function" ? t(e) : t
}
function vg(t, e) {
    const {type: r="all", exact: i, fetchStatus: a, predicate: u, queryKey: c, stale: f} = t;
    if (c) {
        if (i) {
            if (e.queryHash !== mf(c, e.options))
                return !1
        } else if (!yo(e.queryKey, c))
            return !1
    }
    if (r !== "all") {
        const h = e.isActive();
        if (r === "active" && !h || r === "inactive" && h)
            return !1
    }
    return !(typeof f == "boolean" && e.isStale() !== f || a && a !== e.state.fetchStatus || u && !u(e))
}
function wg(t, e) {
    const {exact: r, status: i, predicate: a, mutationKey: u} = t;
    if (u) {
        if (!e.options.mutationKey)
            return !1;
        if (r) {
            if (go(e.options.mutationKey) !== go(u))
                return !1
        } else if (!yo(e.options.mutationKey, u))
            return !1
    }
    return !(i && e.state.status !== i || a && !a(e))
}
function mf(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || go)(t)
}
function go(t) {
    return JSON.stringify(t, (e, r) => Ed(r) ? Object.keys(r).sort().reduce( (i, a) => (i[a] = r[a],
    i), {}) : r)
}
function yo(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(r => yo(t[r], e[r])) : !1
}
var fE = Object.prototype.hasOwnProperty;
function f0(t, e) {
    if (t === e)
        return t;
    const r = xg(t) && xg(e);
    if (!r && !(Ed(t) && Ed(e)))
        return e;
    const a = (r ? t : Object.keys(t)).length
      , u = r ? e : Object.keys(e)
      , c = u.length
      , f = r ? new Array(c) : {};
    let h = 0;
    for (let m = 0; m < c; m++) {
        const g = r ? m : u[m]
          , y = t[g]
          , w = e[g];
        if (y === w) {
            f[g] = y,
            (r ? m < a : fE.call(t, g)) && h++;
            continue
        }
        if (y === null || w === null || typeof y != "object" || typeof w != "object") {
            f[g] = w;
            continue
        }
        const k = f0(y, w);
        f[g] = k,
        k === y && h++
    }
    return a === c && h === a ? t : f
}
function bd(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length)
        return !1;
    for (const r in t)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function xg(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}
function Ed(t) {
    if (!Sg(t))
        return !1;
    const e = t.constructor;
    if (e === void 0)
        return !0;
    const r = e.prototype;
    return !(!Sg(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}
function Sg(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function hE(t) {
    return new Promise(e => {
        qr.setTimeout(e, t)
    }
    )
}
function kd(t, e, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? f0(t, e) : e
}
function pE(t, e, r=0) {
    const i = [...t, e];
    return r && i.length > r ? i.slice(1) : i
}
function mE(t, e, r=0) {
    const i = [e, ...t];
    return r && i.length > r ? i.slice(0, -1) : i
}
var gf = Symbol();
function h0(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === gf ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
function gE(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}
var Qr, pr, $s, Lv, yE = (Lv = class extends _o {
    constructor() {
        super();
        ye(this, Qr);
        ye(this, pr);
        ye(this, $s);
        te(this, $s, e => {
            if (!is && window.addEventListener) {
                const r = () => e();
                return window.addEventListener("visibilitychange", r, !1),
                () => {
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, pr) || this.setEventListener(P(this, $s))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = P(this, pr)) == null || e.call(this),
        te(this, pr, void 0))
    }
    setEventListener(e) {
        var r;
        te(this, $s, e),
        (r = P(this, pr)) == null || r.call(this),
        te(this, pr, e(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
        }
        ))
    }
    setFocused(e) {
        P(this, Qr) !== e && (te(this, Qr, e),
        this.onFocus())
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach(r => {
            r(e)
        }
        )
    }
    isFocused() {
        var e;
        return typeof P(this, Qr) == "boolean" ? P(this, Qr) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
    }
}
,
Qr = new WeakMap,
pr = new WeakMap,
$s = new WeakMap,
Lv), yf = new yE;
function Td() {
    let t, e;
    const r = new Promise( (a, u) => {
        t = a,
        e = u
    }
    );
    r.status = "pending",
    r.catch( () => {}
    );
    function i(a) {
        Object.assign(r, a),
        delete r.resolve,
        delete r.reject
    }
    return r.resolve = a => {
        i({
            status: "fulfilled",
            value: a
        }),
        t(a)
    }
    ,
    r.reject = a => {
        i({
            status: "rejected",
            reason: a
        }),
        e(a)
    }
    ,
    r
}
var vE = cE;
function wE() {
    let t = []
      , e = 0
      , r = f => {
        f()
    }
      , i = f => {
        f()
    }
      , a = vE;
    const u = f => {
        e ? t.push(f) : a( () => {
            r(f)
        }
        )
    }
      , c = () => {
        const f = t;
        t = [],
        f.length && a( () => {
            i( () => {
                f.forEach(h => {
                    r(h)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: f => {
            let h;
            e++;
            try {
                h = f()
            } finally {
                e--,
                e || c()
            }
            return h
        }
        ,
        batchCalls: f => (...h) => {
            u( () => {
                f(...h)
            }
            )
        }
        ,
        schedule: u,
        setNotifyFunction: f => {
            r = f
        }
        ,
        setBatchNotifyFunction: f => {
            i = f
        }
        ,
        setScheduler: f => {
            a = f
        }
    }
}
var ft = wE(), Hs, mr, qs, Dv, xE = (Dv = class extends _o {
    constructor() {
        super();
        ye(this, Hs, !0);
        ye(this, mr);
        ye(this, qs);
        te(this, qs, e => {
            if (!is && window.addEventListener) {
                const r = () => e(!0)
                  , i = () => e(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", i, !1),
                () => {
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", i)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, mr) || this.setEventListener(P(this, qs))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = P(this, mr)) == null || e.call(this),
        te(this, mr, void 0))
    }
    setEventListener(e) {
        var r;
        te(this, qs, e),
        (r = P(this, mr)) == null || r.call(this),
        te(this, mr, e(this.setOnline.bind(this)))
    }
    setOnline(e) {
        P(this, Hs) !== e && (te(this, Hs, e),
        this.listeners.forEach(i => {
            i(e)
        }
        ))
    }
    isOnline() {
        return P(this, Hs)
    }
}
,
Hs = new WeakMap,
mr = new WeakMap,
qs = new WeakMap,
Dv), wl = new xE;
function SE(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}
function p0(t) {
    return (t ?? "online") === "online" ? wl.isOnline() : !0
}
var Cd = class extends Error {
    constructor(t) {
        super("CancelledError"),
        this.revert = t == null ? void 0 : t.revert,
        this.silent = t == null ? void 0 : t.silent
    }
}
;
function m0(t) {
    let e = !1, r = 0, i;
    const a = Td()
      , u = () => a.status !== "pending"
      , c = b => {
        var S;
        if (!u()) {
            const R = new Cd(b);
            w(R),
            (S = t.onCancel) == null || S.call(t, R)
        }
    }
      , f = () => {
        e = !0
    }
      , h = () => {
        e = !1
    }
      , m = () => yf.isFocused() && (t.networkMode === "always" || wl.isOnline()) && t.canRun()
      , g = () => p0(t.networkMode) && t.canRun()
      , y = b => {
        u() || (i == null || i(),
        a.resolve(b))
    }
      , w = b => {
        u() || (i == null || i(),
        a.reject(b))
    }
      , k = () => new Promise(b => {
        var S;
        i = R => {
            (u() || m()) && b(R)
        }
        ,
        (S = t.onPause) == null || S.call(t)
    }
    ).then( () => {
        var b;
        i = void 0,
        u() || (b = t.onContinue) == null || b.call(t)
    }
    )
      , x = () => {
        if (u())
            return;
        let b;
        const S = r === 0 ? t.initialPromise : void 0;
        try {
            b = S ?? t.fn()
        } catch (R) {
            b = Promise.reject(R)
        }
        Promise.resolve(b).then(y).catch(R => {
            var Y;
            if (u())
                return;
            const B = t.retry ?? (is ? 0 : 3)
              , M = t.retryDelay ?? SE
              , j = typeof M == "function" ? M(r, R) : M
              , U = B === !0 || typeof B == "number" && r < B || typeof B == "function" && B(r, R);
            if (e || !U) {
                w(R);
                return
            }
            r++,
            (Y = t.onFail) == null || Y.call(t, r, R),
            hE(j).then( () => m() ? void 0 : k()).then( () => {
                e ? w(R) : x()
            }
            )
        }
        )
    }
    ;
    return {
        promise: a,
        status: () => a.status,
        cancel: c,
        continue: () => (i == null || i(),
        a),
        cancelRetry: f,
        continueRetry: h,
        canStart: g,
        start: () => (g() ? x() : k().then(x),
        a)
    }
}
var Gr, Mv, g0 = (Mv = class {
    constructor() {
        ye(this, Gr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Sd(this.gcTime) && te(this, Gr, qr.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (is ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        P(this, Gr) && (qr.clearTimeout(P(this, Gr)),
        te(this, Gr, void 0))
    }
}
,
Gr = new WeakMap,
Mv), Yr, Ws, Xt, Xr, at, Eo, Jr, un, jn, jv, bE = (jv = class extends g0 {
    constructor(e) {
        super();
        ye(this, un);
        ye(this, Yr);
        ye(this, Ws);
        ye(this, Xt);
        ye(this, Xr);
        ye(this, at);
        ye(this, Eo);
        ye(this, Jr);
        te(this, Jr, !1),
        te(this, Eo, e.defaultOptions),
        this.setOptions(e.options),
        this.observers = [],
        te(this, Xr, e.client),
        te(this, Xt, P(this, Xr).getQueryCache()),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        te(this, Yr, bg(this.options)),
        this.state = e.state ?? P(this, Yr),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var e;
        return (e = P(this, at)) == null ? void 0 : e.promise
    }
    setOptions(e) {
        if (this.options = {
            ...P(this, Eo),
            ...e
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const r = bg(this.options);
            r.data !== void 0 && (this.setData(r.data, {
                updatedAt: r.dataUpdatedAt,
                manual: !0
            }),
            te(this, Yr, r))
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && P(this, Xt).remove(this)
    }
    setData(e, r) {
        const i = kd(this.state.data, e, this.options);
        return Pe(this, un, jn).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual
        }),
        i
    }
    setState(e, r) {
        Pe(this, un, jn).call(this, {
            type: "setState",
            state: e,
            setStateOptions: r
        })
    }
    cancel(e) {
        var i, a;
        const r = (i = P(this, at)) == null ? void 0 : i.promise;
        return (a = P(this, at)) == null || a.cancel(e),
        r ? r.then(Nt).catch(Nt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(P(this, Yr))
    }
    isActive() {
        return this.observers.some(e => Jt(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === gf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => br(e.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !d0(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        var r;
        const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = P(this, at)) == null || r.continue()
    }
    onOnline() {
        var r;
        const e = this.observers.find(i => i.shouldFetchOnReconnect());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = P(this, at)) == null || r.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        P(this, Xt).notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(r => r !== e),
        this.observers.length || (P(this, at) && (P(this, Jr) ? P(this, at).cancel({
            revert: !0
        }) : P(this, at).cancelRetry()),
        this.scheduleGc()),
        P(this, Xt).notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Pe(this, un, jn).call(this, {
            type: "invalidate"
        })
    }
    async fetch(e, r) {
        var h, m, g, y, w, k, x, b, S, R, B, M;
        if (this.state.fetchStatus !== "idle" && ((h = P(this, at)) == null ? void 0 : h.status()) !== "rejected") {
            if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (P(this, at))
                return P(this, at).continueRetry(),
                P(this, at).promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const j = this.observers.find(U => U.options.queryFn);
            j && this.setOptions(j.options)
        }
        const i = new AbortController
          , a = j => {
            Object.defineProperty(j, "signal", {
                enumerable: !0,
                get: () => (te(this, Jr, !0),
                i.signal)
            })
        }
          , u = () => {
            const j = h0(this.options, r)
              , Y = ( () => {
                const ee = {
                    client: P(this, Xr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return a(ee),
                ee
            }
            )();
            return te(this, Jr, !1),
            this.options.persister ? this.options.persister(j, Y, this) : j(Y)
        }
          , f = ( () => {
            const j = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: P(this, Xr),
                state: this.state,
                fetchFn: u
            };
            return a(j),
            j
        }
        )();
        (m = this.options.behavior) == null || m.onFetch(f, this),
        te(this, Ws, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((g = f.fetchOptions) == null ? void 0 : g.meta)) && Pe(this, un, jn).call(this, {
            type: "fetch",
            meta: (y = f.fetchOptions) == null ? void 0 : y.meta
        }),
        te(this, at, m0({
            initialPromise: r == null ? void 0 : r.initialPromise,
            fn: f.fetchFn,
            onCancel: j => {
                j instanceof Cd && j.revert && this.setState({
                    ...P(this, Ws),
                    fetchStatus: "idle"
                }),
                i.abort()
            }
            ,
            onFail: (j, U) => {
                Pe(this, un, jn).call(this, {
                    type: "failed",
                    failureCount: j,
                    error: U
                })
            }
            ,
            onPause: () => {
                Pe(this, un, jn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Pe(this, un, jn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: f.options.retry,
            retryDelay: f.options.retryDelay,
            networkMode: f.options.networkMode,
            canRun: () => !0
        }));
        try {
            const j = await P(this, at).start();
            if (j === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(j),
            (k = (w = P(this, Xt).config).onSuccess) == null || k.call(w, j, this),
            (b = (x = P(this, Xt).config).onSettled) == null || b.call(x, j, this.state.error, this),
            j
        } catch (j) {
            if (j instanceof Cd) {
                if (j.silent)
                    return P(this, at).promise;
                if (j.revert) {
                    if (this.state.data === void 0)
                        throw j;
                    return this.state.data
                }
            }
            throw Pe(this, un, jn).call(this, {
                type: "error",
                error: j
            }),
            (R = (S = P(this, Xt).config).onError) == null || R.call(S, j, this),
            (M = (B = P(this, Xt).config).onSettled) == null || M.call(B, this.state.data, j, this),
            j
        } finally {
            this.scheduleGc()
        }
    }
}
,
Yr = new WeakMap,
Ws = new WeakMap,
Xt = new WeakMap,
Xr = new WeakMap,
at = new WeakMap,
Eo = new WeakMap,
Jr = new WeakMap,
un = new WeakSet,
jn = function(e) {
    const r = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error
            };
        case "pause":
            return {
                ...i,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...i,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...i,
                ...y0(i.data, this.options),
                fetchMeta: e.meta ?? null
            };
        case "success":
            const a = {
                ...i,
                data: e.data,
                dataUpdateCount: i.dataUpdateCount + 1,
                dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
            return te(this, Ws, e.manual ? a : void 0),
            a;
        case "error":
            const u = e.error;
            return {
                ...i,
                error: u,
                errorUpdateCount: i.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: i.fetchFailureCount + 1,
                fetchFailureReason: u,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...i,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...i,
                ...e.state
            }
        }
    }
    ;
    this.state = r(this.state),
    ft.batch( () => {
        this.observers.forEach(i => {
            i.onQueryUpdate()
        }
        ),
        P(this, Xt).notify({
            query: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
jv);
function y0(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: p0(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function bg(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData
      , r = e !== void 0
      , i = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var At, _e, ko, bt, Zr, Ks, In, gr, To, Qs, Gs, es, ts, yr, Ys, Le, ro, Pd, _d, Rd, Ad, Nd, Od, Ld, v0, Iv, EE = (Iv = class extends _o {
    constructor(e, r) {
        super();
        ye(this, Le);
        ye(this, At);
        ye(this, _e);
        ye(this, ko);
        ye(this, bt);
        ye(this, Zr);
        ye(this, Ks);
        ye(this, In);
        ye(this, gr);
        ye(this, To);
        ye(this, Qs);
        ye(this, Gs);
        ye(this, es);
        ye(this, ts);
        ye(this, yr);
        ye(this, Ys, new Set);
        this.options = r,
        te(this, At, e),
        te(this, gr, null),
        te(this, In, Td()),
        this.bindMethods(),
        this.setOptions(r)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (P(this, _e).addObserver(this),
        Eg(P(this, _e), this.options) ? Pe(this, Le, ro).call(this) : this.updateResult(),
        Pe(this, Le, Ad).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Dd(P(this, _e), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Dd(P(this, _e), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        Pe(this, Le, Nd).call(this),
        Pe(this, Le, Od).call(this),
        P(this, _e).removeObserver(this)
    }
    setOptions(e) {
        const r = this.options
          , i = P(this, _e);
        if (this.options = P(this, At).defaultQueryOptions(e),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Jt(this.options.enabled, P(this, _e)) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        Pe(this, Le, Ld).call(this),
        P(this, _e).setOptions(this.options),
        r._defaulted && !bd(this.options, r) && P(this, At).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: P(this, _e),
            observer: this
        });
        const a = this.hasListeners();
        a && kg(P(this, _e), i, this.options, r) && Pe(this, Le, ro).call(this),
        this.updateResult(),
        a && (P(this, _e) !== i || Jt(this.options.enabled, P(this, _e)) !== Jt(r.enabled, P(this, _e)) || br(this.options.staleTime, P(this, _e)) !== br(r.staleTime, P(this, _e))) && Pe(this, Le, Pd).call(this);
        const u = Pe(this, Le, _d).call(this);
        a && (P(this, _e) !== i || Jt(this.options.enabled, P(this, _e)) !== Jt(r.enabled, P(this, _e)) || u !== P(this, yr)) && Pe(this, Le, Rd).call(this, u)
    }
    getOptimisticResult(e) {
        const r = P(this, At).getQueryCache().build(P(this, At), e)
          , i = this.createResult(r, e);
        return TE(this, i) && (te(this, bt, i),
        te(this, Ks, this.options),
        te(this, Zr, P(this, _e).state)),
        i
    }
    getCurrentResult() {
        return P(this, bt)
    }
    trackResult(e, r) {
        return new Proxy(e,{
            get: (i, a) => (this.trackProp(a),
            r == null || r(a),
            a === "promise" && !this.options.experimental_prefetchInRender && P(this, In).status === "pending" && P(this, In).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),
            Reflect.get(i, a))
        })
    }
    trackProp(e) {
        P(this, Ys).add(e)
    }
    getCurrentQuery() {
        return P(this, _e)
    }
    refetch({...e}={}) {
        return this.fetch({
            ...e
        })
    }
    fetchOptimistic(e) {
        const r = P(this, At).defaultQueryOptions(e)
          , i = P(this, At).getQueryCache().build(P(this, At), r);
        return i.fetch().then( () => this.createResult(i, r))
    }
    fetch(e) {
        return Pe(this, Le, ro).call(this, {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        P(this, bt)))
    }
    createResult(e, r) {
        var q;
        const i = P(this, _e)
          , a = this.options
          , u = P(this, bt)
          , c = P(this, Zr)
          , f = P(this, Ks)
          , m = e !== i ? e.state : P(this, ko)
          , {state: g} = e;
        let y = {
            ...g
        }, w = !1, k;
        if (r._optimisticResults) {
            const Q = this.hasListeners()
              , J = !Q && Eg(e, r)
              , $ = Q && kg(e, i, r, a);
            (J || $) && (y = {
                ...y,
                ...y0(g.data, e.options)
            }),
            r._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {error: x, errorUpdatedAt: b, status: S} = y;
        k = y.data;
        let R = !1;
        if (r.placeholderData !== void 0 && k === void 0 && S === "pending") {
            let Q;
            u != null && u.isPlaceholderData && r.placeholderData === (f == null ? void 0 : f.placeholderData) ? (Q = u.data,
            R = !0) : Q = typeof r.placeholderData == "function" ? r.placeholderData((q = P(this, Gs)) == null ? void 0 : q.state.data, P(this, Gs)) : r.placeholderData,
            Q !== void 0 && (S = "success",
            k = kd(u == null ? void 0 : u.data, Q, r),
            w = !0)
        }
        if (r.select && k !== void 0 && !R)
            if (u && k === (c == null ? void 0 : c.data) && r.select === P(this, To))
                k = P(this, Qs);
            else
                try {
                    te(this, To, r.select),
                    k = r.select(k),
                    k = kd(u == null ? void 0 : u.data, k, r),
                    te(this, Qs, k),
                    te(this, gr, null)
                } catch (Q) {
                    te(this, gr, Q)
                }
        P(this, gr) && (x = P(this, gr),
        k = P(this, Qs),
        b = Date.now(),
        S = "error");
        const B = y.fetchStatus === "fetching"
          , M = S === "pending"
          , j = S === "error"
          , U = M && B
          , Y = k !== void 0
          , N = {
            status: S,
            fetchStatus: y.fetchStatus,
            isPending: M,
            isSuccess: S === "success",
            isError: j,
            isInitialLoading: U,
            isLoading: U,
            data: k,
            dataUpdatedAt: y.dataUpdatedAt,
            error: x,
            errorUpdatedAt: b,
            failureCount: y.fetchFailureCount,
            failureReason: y.fetchFailureReason,
            errorUpdateCount: y.errorUpdateCount,
            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
            isFetchedAfterMount: y.dataUpdateCount > m.dataUpdateCount || y.errorUpdateCount > m.errorUpdateCount,
            isFetching: B,
            isRefetching: B && !M,
            isLoadingError: j && !Y,
            isPaused: y.fetchStatus === "paused",
            isPlaceholderData: w,
            isRefetchError: j && Y,
            isStale: vf(e, r),
            refetch: this.refetch,
            promise: P(this, In),
            isEnabled: Jt(r.enabled, e) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            const Q = re => {
                N.status === "error" ? re.reject(N.error) : N.data !== void 0 && re.resolve(N.data)
            }
              , J = () => {
                const re = te(this, In, N.promise = Td());
                Q(re)
            }
              , $ = P(this, In);
            switch ($.status) {
            case "pending":
                e.queryHash === i.queryHash && Q($);
                break;
            case "fulfilled":
                (N.status === "error" || N.data !== $.value) && J();
                break;
            case "rejected":
                (N.status !== "error" || N.error !== $.reason) && J();
                break
            }
        }
        return N
    }
    updateResult() {
        const e = P(this, bt)
          , r = this.createResult(P(this, _e), this.options);
        if (te(this, Zr, P(this, _e).state),
        te(this, Ks, this.options),
        P(this, Zr).data !== void 0 && te(this, Gs, P(this, _e)),
        bd(r, e))
            return;
        te(this, bt, r);
        const i = () => {
            if (!e)
                return !0;
            const {notifyOnChangeProps: a} = this.options
              , u = typeof a == "function" ? a() : a;
            if (u === "all" || !u && !P(this, Ys).size)
                return !0;
            const c = new Set(u ?? P(this, Ys));
            return this.options.throwOnError && c.add("error"),
            Object.keys(P(this, bt)).some(f => {
                const h = f;
                return P(this, bt)[h] !== e[h] && c.has(h)
            }
            )
        }
        ;
        Pe(this, Le, v0).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && Pe(this, Le, Ad).call(this)
    }
}
,
At = new WeakMap,
_e = new WeakMap,
ko = new WeakMap,
bt = new WeakMap,
Zr = new WeakMap,
Ks = new WeakMap,
In = new WeakMap,
gr = new WeakMap,
To = new WeakMap,
Qs = new WeakMap,
Gs = new WeakMap,
es = new WeakMap,
ts = new WeakMap,
yr = new WeakMap,
Ys = new WeakMap,
Le = new WeakSet,
ro = function(e) {
    Pe(this, Le, Ld).call(this);
    let r = P(this, _e).fetch(this.options, e);
    return e != null && e.throwOnError || (r = r.catch(Nt)),
    r
}
,
Pd = function() {
    Pe(this, Le, Nd).call(this);
    const e = br(this.options.staleTime, P(this, _e));
    if (is || P(this, bt).isStale || !Sd(e))
        return;
    const i = d0(P(this, bt).dataUpdatedAt, e) + 1;
    te(this, es, qr.setTimeout( () => {
        P(this, bt).isStale || this.updateResult()
    }
    , i))
}
,
_d = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(P(this, _e)) : this.options.refetchInterval) ?? !1
}
,
Rd = function(e) {
    Pe(this, Le, Od).call(this),
    te(this, yr, e),
    !(is || Jt(this.options.enabled, P(this, _e)) === !1 || !Sd(P(this, yr)) || P(this, yr) === 0) && te(this, ts, qr.setInterval( () => {
        (this.options.refetchIntervalInBackground || yf.isFocused()) && Pe(this, Le, ro).call(this)
    }
    , P(this, yr)))
}
,
Ad = function() {
    Pe(this, Le, Pd).call(this),
    Pe(this, Le, Rd).call(this, Pe(this, Le, _d).call(this))
}
,
Nd = function() {
    P(this, es) && (qr.clearTimeout(P(this, es)),
    te(this, es, void 0))
}
,
Od = function() {
    P(this, ts) && (qr.clearInterval(P(this, ts)),
    te(this, ts, void 0))
}
,
Ld = function() {
    const e = P(this, At).getQueryCache().build(P(this, At), this.options);
    if (e === P(this, _e))
        return;
    const r = P(this, _e);
    te(this, _e, e),
    te(this, ko, e.state),
    this.hasListeners() && (r == null || r.removeObserver(this),
    e.addObserver(this))
}
,
v0 = function(e) {
    ft.batch( () => {
        e.listeners && this.listeners.forEach(r => {
            r(P(this, bt))
        }
        ),
        P(this, At).getQueryCache().notify({
            query: P(this, _e),
            type: "observerResultsUpdated"
        })
    }
    )
}
,
Iv);
function kE(t, e) {
    return Jt(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1)
}
function Eg(t, e) {
    return kE(t, e) || t.state.data !== void 0 && Dd(t, e, e.refetchOnMount)
}
function Dd(t, e, r) {
    if (Jt(e.enabled, t) !== !1 && br(e.staleTime, t) !== "static") {
        const i = typeof r == "function" ? r(t) : r;
        return i === "always" || i !== !1 && vf(t, e)
    }
    return !1
}
function kg(t, e, r, i) {
    return (t !== e || Jt(i.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && vf(t, r)
}
function vf(t, e) {
    return Jt(e.enabled, t) !== !1 && t.isStaleByTime(br(e.staleTime, t))
}
function TE(t, e) {
    return !bd(t.getCurrentResult(), e)
}
function Tg(t) {
    return {
        onFetch: (e, r) => {
            var g, y, w, k, x;
            const i = e.options
              , a = (w = (y = (g = e.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : w.direction
              , u = ((k = e.state.data) == null ? void 0 : k.pages) || []
              , c = ((x = e.state.data) == null ? void 0 : x.pageParams) || [];
            let f = {
                pages: [],
                pageParams: []
            }
              , h = 0;
            const m = async () => {
                let b = !1;
                const S = M => {
                    Object.defineProperty(M, "signal", {
                        enumerable: !0,
                        get: () => (e.signal.aborted ? b = !0 : e.signal.addEventListener("abort", () => {
                            b = !0
                        }
                        ),
                        e.signal)
                    })
                }
                  , R = h0(e.options, e.fetchOptions)
                  , B = async (M, j, U) => {
                    if (b)
                        return Promise.reject();
                    if (j == null && M.pages.length)
                        return Promise.resolve(M);
                    const ee = ( () => {
                        const J = {
                            client: e.client,
                            queryKey: e.queryKey,
                            pageParam: j,
                            direction: U ? "backward" : "forward",
                            meta: e.options.meta
                        };
                        return S(J),
                        J
                    }
                    )()
                      , N = await R(ee)
                      , {maxPages: q} = e.options
                      , Q = U ? mE : pE;
                    return {
                        pages: Q(M.pages, N, q),
                        pageParams: Q(M.pageParams, j, q)
                    }
                }
                ;
                if (a && u.length) {
                    const M = a === "backward"
                      , j = M ? CE : Cg
                      , U = {
                        pages: u,
                        pageParams: c
                    }
                      , Y = j(i, U);
                    f = await B(U, Y, M)
                } else {
                    const M = t ?? u.length;
                    do {
                        const j = h === 0 ? c[0] ?? i.initialPageParam : Cg(i, f);
                        if (h > 0 && j == null)
                            break;
                        f = await B(f, j),
                        h++
                    } while (h < M)
                }
                return f
            }
            ;
            e.options.persister ? e.fetchFn = () => {
                var b, S;
                return (S = (b = e.options).persister) == null ? void 0 : S.call(b, m, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, r)
            }
            : e.fetchFn = m
        }
    }
}
function Cg(t, {pages: e, pageParams: r}) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, r[i], r) : void 0
}
function CE(t, {pages: e, pageParams: r}) {
    var i;
    return e.length > 0 ? (i = t.getPreviousPageParam) == null ? void 0 : i.call(t, e[0], e, r[0], r) : void 0
}
var Co, xn, Et, ns, Sn, dr, Fv, PE = (Fv = class extends g0 {
    constructor(e) {
        super();
        ye(this, Sn);
        ye(this, Co);
        ye(this, xn);
        ye(this, Et);
        ye(this, ns);
        te(this, Co, e.client),
        this.mutationId = e.mutationId,
        te(this, Et, e.mutationCache),
        te(this, xn, []),
        this.state = e.state || _E(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        P(this, xn).includes(e) || (P(this, xn).push(e),
        this.clearGcTimeout(),
        P(this, Et).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        te(this, xn, P(this, xn).filter(r => r !== e)),
        this.scheduleGc(),
        P(this, Et).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        P(this, xn).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, Et).remove(this))
    }
    continue() {
        var e;
        return ((e = P(this, ns)) == null ? void 0 : e.continue()) ?? this.execute(this.state.variables)
    }
    async execute(e) {
        var c, f, h, m, g, y, w, k, x, b, S, R, B, M, j, U, Y, ee, N, q;
        const r = () => {
            Pe(this, Sn, dr).call(this, {
                type: "continue"
            })
        }
          , i = {
            client: P(this, Co),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        te(this, ns, m0({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (Q, J) => {
                Pe(this, Sn, dr).call(this, {
                    type: "failed",
                    failureCount: Q,
                    error: J
                })
            }
            ,
            onPause: () => {
                Pe(this, Sn, dr).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Et).canRun(this)
        }));
        const a = this.state.status === "pending"
          , u = !P(this, ns).canStart();
        try {
            if (a)
                r();
            else {
                Pe(this, Sn, dr).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: u
                }),
                await ((f = (c = P(this, Et).config).onMutate) == null ? void 0 : f.call(c, e, this, i));
                const J = await ((m = (h = this.options).onMutate) == null ? void 0 : m.call(h, e, i));
                J !== this.state.context && Pe(this, Sn, dr).call(this, {
                    type: "pending",
                    context: J,
                    variables: e,
                    isPaused: u
                })
            }
            const Q = await P(this, ns).start();
            return await ((y = (g = P(this, Et).config).onSuccess) == null ? void 0 : y.call(g, Q, e, this.state.context, this, i)),
            await ((k = (w = this.options).onSuccess) == null ? void 0 : k.call(w, Q, e, this.state.context, i)),
            await ((b = (x = P(this, Et).config).onSettled) == null ? void 0 : b.call(x, Q, null, this.state.variables, this.state.context, this, i)),
            await ((R = (S = this.options).onSettled) == null ? void 0 : R.call(S, Q, null, e, this.state.context, i)),
            Pe(this, Sn, dr).call(this, {
                type: "success",
                data: Q
            }),
            Q
        } catch (Q) {
            try {
                throw await ((M = (B = P(this, Et).config).onError) == null ? void 0 : M.call(B, Q, e, this.state.context, this, i)),
                await ((U = (j = this.options).onError) == null ? void 0 : U.call(j, Q, e, this.state.context, i)),
                await ((ee = (Y = P(this, Et).config).onSettled) == null ? void 0 : ee.call(Y, void 0, Q, this.state.variables, this.state.context, this, i)),
                await ((q = (N = this.options).onSettled) == null ? void 0 : q.call(N, void 0, Q, e, this.state.context, i)),
                Q
            } finally {
                Pe(this, Sn, dr).call(this, {
                    type: "error",
                    error: Q
                })
            }
        } finally {
            P(this, Et).runNext(this)
        }
    }
}
,
Co = new WeakMap,
xn = new WeakMap,
Et = new WeakMap,
ns = new WeakMap,
Sn = new WeakSet,
dr = function(e) {
    const r = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                failureCount: e.failureCount,
                failureReason: e.error
            };
        case "pause":
            return {
                ...i,
                isPaused: !0
            };
        case "continue":
            return {
                ...i,
                isPaused: !1
            };
        case "pending":
            return {
                ...i,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: e.isPaused,
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...i,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...i,
                data: void 0,
                error: e.error,
                failureCount: i.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = r(this.state),
    ft.batch( () => {
        P(this, xn).forEach(i => {
            i.onMutationUpdate(e)
        }
        ),
        P(this, Et).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
Fv);
function _E() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Fn, cn, Po, Vv, RE = (Vv = class extends _o {
    constructor(e={}) {
        super();
        ye(this, Fn);
        ye(this, cn);
        ye(this, Po);
        this.config = e,
        te(this, Fn, new Set),
        te(this, cn, new Map),
        te(this, Po, 0)
    }
    build(e, r, i) {
        const a = new PE({
            client: e,
            mutationCache: this,
            mutationId: ++Ka(this, Po)._,
            options: e.defaultMutationOptions(r),
            state: i
        });
        return this.add(a),
        a
    }
    add(e) {
        P(this, Fn).add(e);
        const r = Xa(e);
        if (typeof r == "string") {
            const i = P(this, cn).get(r);
            i ? i.push(e) : P(this, cn).set(r, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (P(this, Fn).delete(e)) {
            const r = Xa(e);
            if (typeof r == "string") {
                const i = P(this, cn).get(r);
                if (i)
                    if (i.length > 1) {
                        const a = i.indexOf(e);
                        a !== -1 && i.splice(a, 1)
                    } else
                        i[0] === e && P(this, cn).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const r = Xa(e);
        if (typeof r == "string") {
            const i = P(this, cn).get(r)
              , a = i == null ? void 0 : i.find(u => u.state.status === "pending");
            return !a || a === e
        } else
            return !0
    }
    runNext(e) {
        var i;
        const r = Xa(e);
        if (typeof r == "string") {
            const a = (i = P(this, cn).get(r)) == null ? void 0 : i.find(u => u !== e && u.state.isPaused);
            return (a == null ? void 0 : a.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        ft.batch( () => {
            P(this, Fn).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            ),
            P(this, Fn).clear(),
            P(this, cn).clear()
        }
        )
    }
    getAll() {
        return Array.from(P(this, Fn))
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => wg(r, i))
    }
    findAll(e={}) {
        return this.getAll().filter(r => wg(e, r))
    }
    notify(e) {
        ft.batch( () => {
            this.listeners.forEach(r => {
                r(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const e = this.getAll().filter(r => r.state.isPaused);
        return ft.batch( () => Promise.all(e.map(r => r.continue().catch(Nt))))
    }
}
,
Fn = new WeakMap,
cn = new WeakMap,
Po = new WeakMap,
Vv);
function Xa(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
var bn, Bv, AE = (Bv = class extends _o {
    constructor(e={}) {
        super();
        ye(this, bn);
        this.config = e,
        te(this, bn, new Map)
    }
    build(e, r, i) {
        const a = r.queryKey
          , u = r.queryHash ?? mf(a, r);
        let c = this.get(u);
        return c || (c = new bE({
            client: e,
            queryKey: a,
            queryHash: u,
            options: e.defaultQueryOptions(r),
            state: i,
            defaultOptions: e.getQueryDefaults(a)
        }),
        this.add(c)),
        c
    }
    add(e) {
        P(this, bn).has(e.queryHash) || (P(this, bn).set(e.queryHash, e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const r = P(this, bn).get(e.queryHash);
        r && (e.destroy(),
        r === e && P(this, bn).delete(e.queryHash),
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        ft.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return P(this, bn).get(e)
    }
    getAll() {
        return [...P(this, bn).values()]
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => vg(r, i))
    }
    findAll(e={}) {
        const r = this.getAll();
        return Object.keys(e).length > 0 ? r.filter(i => vg(e, i)) : r
    }
    notify(e) {
        ft.batch( () => {
            this.listeners.forEach(r => {
                r(e)
            }
            )
        }
        )
    }
    onFocus() {
        ft.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        ft.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
,
bn = new WeakMap,
Bv), We, vr, wr, Xs, Js, xr, Zs, ei, Uv, NE = (Uv = class {
    constructor(t={}) {
        ye(this, We);
        ye(this, vr);
        ye(this, wr);
        ye(this, Xs);
        ye(this, Js);
        ye(this, xr);
        ye(this, Zs);
        ye(this, ei);
        te(this, We, t.queryCache || new AE),
        te(this, vr, t.mutationCache || new RE),
        te(this, wr, t.defaultOptions || {}),
        te(this, Xs, new Map),
        te(this, Js, new Map),
        te(this, xr, 0)
    }
    mount() {
        Ka(this, xr)._++,
        P(this, xr) === 1 && (te(this, Zs, yf.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            P(this, We).onFocus())
        }
        )),
        te(this, ei, wl.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            P(this, We).onOnline())
        }
        )))
    }
    unmount() {
        var t, e;
        Ka(this, xr)._--,
        P(this, xr) === 0 && ((t = P(this, Zs)) == null || t.call(this),
        te(this, Zs, void 0),
        (e = P(this, ei)) == null || e.call(this),
        te(this, ei, void 0))
    }
    isFetching(t) {
        return P(this, We).findAll({
            ...t,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(t) {
        return P(this, vr).findAll({
            ...t,
            status: "pending"
        }).length
    }
    getQueryData(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = P(this, We).get(e.queryHash)) == null ? void 0 : r.state.data
    }
    ensureQueryData(t) {
        const e = this.defaultQueryOptions(t)
          , r = P(this, We).build(this, e)
          , i = r.state.data;
        return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(br(e.staleTime, r)) && this.prefetchQuery(e),
        Promise.resolve(i))
    }
    getQueriesData(t) {
        return P(this, We).findAll(t).map( ({queryKey: e, state: r}) => {
            const i = r.data;
            return [e, i]
        }
        )
    }
    setQueryData(t, e, r) {
        const i = this.defaultQueryOptions({
            queryKey: t
        })
          , a = P(this, We).get(i.queryHash)
          , u = a == null ? void 0 : a.state.data
          , c = dE(e, u);
        if (c !== void 0)
            return P(this, We).build(this, i).setData(c, {
                ...r,
                manual: !0
            })
    }
    setQueriesData(t, e, r) {
        return ft.batch( () => P(this, We).findAll(t).map( ({queryKey: i}) => [i, this.setQueryData(i, e, r)]))
    }
    getQueryState(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = P(this, We).get(e.queryHash)) == null ? void 0 : r.state
    }
    removeQueries(t) {
        const e = P(this, We);
        ft.batch( () => {
            e.findAll(t).forEach(r => {
                e.remove(r)
            }
            )
        }
        )
    }
    resetQueries(t, e) {
        const r = P(this, We);
        return ft.batch( () => (r.findAll(t).forEach(i => {
            i.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...t
        }, e)))
    }
    cancelQueries(t, e={}) {
        const r = {
            revert: !0,
            ...e
        }
          , i = ft.batch( () => P(this, We).findAll(t).map(a => a.cancel(r)));
        return Promise.all(i).then(Nt).catch(Nt)
    }
    invalidateQueries(t, e={}) {
        return ft.batch( () => (P(this, We).findAll(t).forEach(r => {
            r.invalidate()
        }
        ),
        (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...t,
            type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
        }, e)))
    }
    refetchQueries(t, e={}) {
        const r = {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }
          , i = ft.batch( () => P(this, We).findAll(t).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
            let u = a.fetch(void 0, r);
            return r.throwOnError || (u = u.catch(Nt)),
            a.state.fetchStatus === "paused" ? Promise.resolve() : u
        }
        ));
        return Promise.all(i).then(Nt)
    }
    fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const r = P(this, We).build(this, e);
        return r.isStaleByTime(br(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
    }
    prefetchQuery(t) {
        return this.fetchQuery(t).then(Nt).catch(Nt)
    }
    fetchInfiniteQuery(t) {
        return t.behavior = Tg(t.pages),
        this.fetchQuery(t)
    }
    prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(Nt).catch(Nt)
    }
    ensureInfiniteQueryData(t) {
        return t.behavior = Tg(t.pages),
        this.ensureQueryData(t)
    }
    resumePausedMutations() {
        return wl.isOnline() ? P(this, vr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return P(this, We)
    }
    getMutationCache() {
        return P(this, vr)
    }
    getDefaultOptions() {
        return P(this, wr)
    }
    setDefaultOptions(t) {
        te(this, wr, t)
    }
    setQueryDefaults(t, e) {
        P(this, Xs).set(go(t), {
            queryKey: t,
            defaultOptions: e
        })
    }
    getQueryDefaults(t) {
        const e = [...P(this, Xs).values()]
          , r = {};
        return e.forEach(i => {
            yo(t, i.queryKey) && Object.assign(r, i.defaultOptions)
        }
        ),
        r
    }
    setMutationDefaults(t, e) {
        P(this, Js).set(go(t), {
            mutationKey: t,
            defaultOptions: e
        })
    }
    getMutationDefaults(t) {
        const e = [...P(this, Js).values()]
          , r = {};
        return e.forEach(i => {
            yo(t, i.mutationKey) && Object.assign(r, i.defaultOptions)
        }
        ),
        r
    }
    defaultQueryOptions(t) {
        if (t._defaulted)
            return t;
        const e = {
            ...P(this, wr).queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = mf(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.queryFn === gf && (e.enabled = !1),
        e
    }
    defaultMutationOptions(t) {
        return t != null && t._defaulted ? t : {
            ...P(this, wr).mutations,
            ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        P(this, We).clear(),
        P(this, vr).clear()
    }
}
,
We = new WeakMap,
vr = new WeakMap,
wr = new WeakMap,
Xs = new WeakMap,
Js = new WeakMap,
xr = new WeakMap,
Zs = new WeakMap,
ei = new WeakMap,
Uv), w0 = L.createContext(void 0), OE = t => {
    const e = L.useContext(w0);
    if (!e)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e
}
, LE = ({client: t, children: e}) => (L.useEffect( () => (t.mount(),
() => {
    t.unmount()
}
), [t]),
T.jsx(w0.Provider, {
    value: t,
    children: e
})), x0 = L.createContext(!1), DE = () => L.useContext(x0);
x0.Provider;
function ME() {
    let t = !1;
    return {
        clearReset: () => {
            t = !1
        }
        ,
        reset: () => {
            t = !0
        }
        ,
        isReset: () => t
    }
}
var jE = L.createContext(ME())
  , IE = () => L.useContext(jE)
  , FE = (t, e) => {
    (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = !1))
}
  , VE = t => {
    L.useEffect( () => {
        t.clearReset()
    }
    , [t])
}
  , BE = ({result: t, errorResetBoundary: e, throwOnError: r, query: i, suspense: a}) => t.isError && !e.isReset() && !t.isFetching && i && (a && t.data === void 0 || gE(r, [t.error, i]))
  , UE = t => {
    if (t.suspense) {
        const r = a => a === "static" ? a : Math.max(a ?? 1e3, 1e3)
          , i = t.staleTime;
        t.staleTime = typeof i == "function" ? (...a) => r(i(...a)) : r(i),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3))
    }
}
  , zE = (t, e) => t.isLoading && t.isFetching && !e
  , $E = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending
  , Pg = (t, e, r) => e.fetchOptimistic(t).catch( () => {
    r.clearReset()
}
);
function HE(t, e, r) {
    var y, w, k, x, b;
    const i = DE()
      , a = IE()
      , u = OE()
      , c = u.defaultQueryOptions(t);
    (w = (y = u.getDefaultOptions().queries) == null ? void 0 : y._experimental_beforeQuery) == null || w.call(y, c),
    c._optimisticResults = i ? "isRestoring" : "optimistic",
    UE(c),
    FE(c, a),
    VE(a);
    const f = !u.getQueryCache().get(c.queryHash)
      , [h] = L.useState( () => new e(u,c))
      , m = h.getOptimisticResult(c)
      , g = !i && t.subscribed !== !1;
    if (L.useSyncExternalStore(L.useCallback(S => {
        const R = g ? h.subscribe(ft.batchCalls(S)) : Nt;
        return h.updateResult(),
        R
    }
    , [h, g]), () => h.getCurrentResult(), () => h.getCurrentResult()),
    L.useEffect( () => {
        h.setOptions(c)
    }
    , [c, h]),
    $E(c, m))
        throw Pg(c, h, a);
    if (BE({
        result: m,
        errorResetBoundary: a,
        throwOnError: c.throwOnError,
        query: u.getQueryCache().get(c.queryHash),
        suspense: c.suspense
    }))
        throw m.error;
    if ((x = (k = u.getDefaultOptions().queries) == null ? void 0 : k._experimental_afterQuery) == null || x.call(k, c, m),
    c.experimental_prefetchInRender && !is && zE(m, i)) {
        const S = f ? Pg(c, h, a) : (b = u.getQueryCache().get(c.queryHash)) == null ? void 0 : b.promise;
        S == null || S.catch(Nt).finally( () => {
            h.updateResult()
        }
        )
    }
    return c.notifyOnChangeProps ? m : h.trackResult(m)
}
function qE(t, e) {
    return HE(t, EE)
}
const WE = new NE({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});
function KE() {
    const [t,e] = L.useState(!1)
      , r = L.useRef(!1)
      , [i,a] = L.useState(!1)
      , u = L.useRef(!1)
      , [c,f] = L.useState(!1)
      , h = L.useRef(!1)
      , m = L.useRef([])
      , g = L.useRef([])
      , y = L.useRef([])
      , w = L.useRef(null)
      , k = (N=!1) => {
        const q = document.createElement("div");
        return q.style.position = "absolute",
        q.style.pointerEvents = "none",
        q.style.transition = "all 0.1s ease-in-out",
        q.style.zIndex = "9999",
        N ? q.style.border = "2px solid #2563EB" : (q.style.border = "2px solid #95a5fc",
        q.style.backgroundColor = "rgba(99, 102, 241, 0.05)"),
        q
    }
      , x = (N, q, Q=!1) => {
        if (!q || !r.current)
            return;
        q.offsetWidth;
        const J = q.getBoundingClientRect();
        N.style.top = `${J.top + window.scrollY}px`,
        N.style.left = `${J.left + window.scrollX}px`,
        N.style.width = `${J.width}px`,
        N.style.height = `${J.height}px`;
        let $ = N.querySelector("div");
        $ || ($ = document.createElement("div"),
        $.textContent = q.tagName.toLowerCase(),
        $.style.position = "absolute",
        $.style.top = "-27px",
        $.style.left = "-2px",
        $.style.padding = "2px 8px",
        $.style.fontSize = "11px",
        $.style.fontWeight = Q ? "500" : "400",
        $.style.color = Q ? "#ffffff" : "#526cff",
        $.style.backgroundColor = Q ? "#526cff" : "#DBEAFE",
        $.style.borderRadius = "3px",
        $.style.boxShadow = "none",
        $.style.minWidth = "24px",
        $.style.textAlign = "center",
        N.appendChild($))
    }
      , b = N => {
        if (!N)
            return [];
        const q = [...document.querySelectorAll(`[data-source-location="${N}"]`)];
        return q.length > 0 ? q : [...document.querySelectorAll(`[data-visual-selector-id="${N}"]`)]
    }
      , S = () => {
        m.current.forEach(N => {
            N && N.parentNode && N.remove()
        }
        ),
        m.current = [],
        y.current = []
    }
      , R = N => {
        if (!r.current || u.current)
            return;
        if (h.current) {
            S();
            return
        }
        if (N.target.tagName.toLowerCase() === "path") {
            S();
            return
        }
        const q = N.target.closest("[data-source-location], [data-visual-selector-id]");
        if (!q) {
            S();
            return
        }
        const Q = q.dataset.sourceLocation || q.dataset.visualSelectorId;
        if (q.dataset.sourceLocation,
        w.current === Q) {
            S();
            return
        }
        const J = b(Q);
        S(),
        J.forEach($ => {
            const re = k(!1);
            document.body.appendChild(re),
            m.current.push(re),
            x(re, $)
        }
        ),
        y.current = J
    }
      , B = () => {
        u.current || S()
    }
      , M = N => {
        var pe;
        if (!r.current)
            return;
        if (h.current) {
            N.preventDefault(),
            N.stopPropagation(),
            N.stopImmediatePropagation(),
            window.parent.postMessage({
                type: "close-dropdowns"
            }, "*");
            return
        }
        if (N.target.tagName.toLowerCase() === "path")
            return;
        N.preventDefault(),
        N.stopPropagation(),
        N.stopImmediatePropagation();
        const q = N.target.closest("[data-source-location], [data-visual-selector-id]");
        if (!q)
            return;
        const Q = q.dataset.sourceLocation || q.dataset.visualSelectorId;
        q.dataset.sourceLocation,
        g.current.forEach(he => {
            he && he.parentNode && he.remove()
        }
        ),
        g.current = [],
        b(Q).forEach(he => {
            const de = k(!0);
            document.body.appendChild(de),
            g.current.push(de),
            x(de, he, !0)
        }
        ),
        w.current = Q,
        S();
        const $ = q.getBoundingClientRect()
          , re = {
            top: $.top,
            left: $.left,
            right: $.right,
            bottom: $.bottom,
            width: $.width,
            height: $.height,
            centerX: $.left + $.width / 2,
            centerY: $.top + $.height / 2
        }
          , Te = {
            type: "element-selected",
            tagName: q.tagName,
            classes: ((pe = q.className) == null ? void 0 : pe.baseVal) || q.className || "",
            visualSelectorId: Q,
            content: q.innerText,
            dataSourceLocation: q.dataset.sourceLocation,
            isDynamicContent: q.dataset.dynamicContent === "true",
            linenumber: q.dataset.linenumber,
            filename: q.dataset.filename,
            position: re
        };
        window.parent.postMessage(Te, "*")
    }
      , j = () => {
        g.current.forEach(N => {
            N && N.parentNode && N.remove()
        }
        ),
        g.current = [],
        w.current = null
    }
      , U = (N, q, Q=!1) => {
        const J = b(N);
        J.length !== 0 && (J.forEach($ => {
            var re;
            if (Q)
                $.className = q;
            else {
                const Te = ((re = $.className) == null ? void 0 : re.baseVal) || $.className || "";
                $.className = s0(Te, q)
            }
        }
        ),
        setTimeout( () => {
            var $, re;
            w.current === N && g.current.forEach( (Te, pe) => {
                pe < J.length && x(Te, J[pe])
            }
            ),
            y.current.length > 0 && ((re = ($ = y.current[0]) == null ? void 0 : $.dataset) == null ? void 0 : re.visualSelectorId) === N && m.current.forEach( (pe, he) => {
                he < y.current.length && x(pe, y.current[he])
            }
            )
        }
        , 50))
    }
      , Y = (N, q) => {
        const Q = b(N);
        Q.length !== 0 && (Q.forEach(J => {
            J.innerText = q
        }
        ),
        setTimeout( () => {
            w.current === N && g.current.forEach( (J, $) => {
                $ < Q.length && x(J, Q[$])
            }
            )
        }
        , 50))
    }
      , ee = N => {
        e(N),
        r.current = N,
        N ? (document.body.style.cursor = "crosshair",
        document.addEventListener("mouseover", R),
        document.addEventListener("mouseout", B),
        document.addEventListener("click", M, !0)) : (S(),
        g.current.forEach(q => {
            q && q.parentNode && q.remove()
        }
        ),
        g.current = [],
        y.current = [],
        w.current = null,
        document.body.style.cursor = "default",
        document.removeEventListener("mouseover", R),
        document.removeEventListener("mouseout", B),
        document.removeEventListener("click", M, !0))
    }
    ;
    return L.useEffect( () => {
        document.querySelectorAll("[data-linenumber]:not([data-visual-selector-id])").forEach( (J, $) => {
            const re = `visual-id-${J.dataset.filename}-${J.dataset.linenumber}-${$}`;
            J.dataset.visualSelectorId = re
        }
        );
        const q = () => {
            if (w.current) {
                const J = b(w.current);
                if (J.length > 0) {
                    const re = J[0].getBoundingClientRect()
                      , Te = window.innerHeight
                      , pe = window.innerWidth
                      , he = re.top < Te && re.bottom > 0 && re.left < pe && re.right > 0
                      , de = {
                        top: re.top,
                        left: re.left,
                        right: re.right,
                        bottom: re.bottom,
                        width: re.width,
                        height: re.height,
                        centerX: re.left + re.width / 2,
                        centerY: re.top + re.height / 2
                    };
                    window.parent.postMessage({
                        type: "element-position-update",
                        position: de,
                        isInViewport: he,
                        visualSelectorId: w.current
                    }, "*")
                }
            }
        }
          , Q = J => {
            const $ = J.data;
            switch ($.type) {
            case "toggle-visual-edit-mode":
                ee($.data.enabled);
                break;
            case "update-classes":
                $.data && $.data.classes !== void 0 ? U($.data.visualSelectorId, $.data.classes, $.data.replace || !1) : console.warn("[Agent] Invalid update-classes message:", $);
                break;
            case "unselect-element":
                j();
                break;
            case "refresh-page":
                window.location.reload();
                break;
            case "update-content":
                $.data && $.data.content !== void 0 ? Y($.data.visualSelectorId, $.data.content) : console.warn("[Agent] Invalid update-content message:", $);
                break;
            case "request-element-position":
                if (w.current) {
                    const re = b(w.current);
                    if (re.length > 0) {
                        const pe = re[0].getBoundingClientRect()
                          , he = window.innerHeight
                          , de = window.innerWidth
                          , V = pe.top < he && pe.bottom > 0 && pe.left < de && pe.right > 0
                          , le = {
                            top: pe.top,
                            left: pe.left,
                            right: pe.right,
                            bottom: pe.bottom,
                            width: pe.width,
                            height: pe.height,
                            centerX: pe.left + pe.width / 2,
                            centerY: pe.top + pe.height / 2
                        };
                        window.parent.postMessage({
                            type: "element-position-update",
                            position: le,
                            isInViewport: V,
                            visualSelectorId: w.current
                        }, "*")
                    }
                }
                break;
            case "popover-drag-state":
                $.data && $.data.isDragging !== void 0 && (a($.data.isDragging),
                u.current = $.data.isDragging,
                $.data.isDragging && S());
                break;
            case "dropdown-state":
                $.data && $.data.isOpen !== void 0 && (f($.data.isOpen),
                h.current = $.data.isOpen,
                $.data.isOpen && S());
                break
            }
        }
        ;
        return window.addEventListener("message", Q),
        window.addEventListener("scroll", q, !0),
        document.addEventListener("scroll", q, !0),
        window.parent.postMessage({
            type: "visual-edit-agent-ready"
        }, "*"),
        () => {
            window.removeEventListener("message", Q),
            window.removeEventListener("scroll", q, !0),
            document.removeEventListener("scroll", q, !0),
            document.removeEventListener("mouseover", R),
            document.removeEventListener("mouseout", B),
            document.removeEventListener("click", M, !0),
            S(),
            g.current.forEach(J => {
                J && J.parentNode && J.remove()
            }
            )
        }
    }
    , []),
    L.useEffect( () => {
        r.current = t
    }
    , [t]),
    L.useEffect( () => {
        u.current = i
    }
    , [i]),
    L.useEffect( () => {
        h.current = c
    }
    , [c]),
    L.useEffect( () => {
        const N = () => {
            if (w.current) {
                const Q = b(w.current);
                g.current.forEach( (J, $) => {
                    $ < Q.length && x(J, Q[$])
                }
                )
            }
            y.current.length > 0 && m.current.forEach( (Q, J) => {
                J < y.current.length && x(Q, y.current[J])
            }
            )
        }
          , q = new MutationObserver(Q => {
            Q.some($ => {
                const re = pe => {
                    if (pe.nodeType === Node.ELEMENT_NODE) {
                        if (pe.dataset && pe.dataset.visualSelectorId)
                            return !0;
                        for (let he = 0; he < pe.children.length; he++)
                            if (re(pe.children[he]))
                                return !0
                    }
                    return !1
                }
                ;
                return $.type === "attributes" && ($.attributeName === "style" || $.attributeName === "class" || $.attributeName === "width" || $.attributeName === "height") && re($.target)
            }
            ) && setTimeout(N, 50)
        }
        );
        return q.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ["style", "class", "width", "height"]
        }),
        window.addEventListener("resize", N),
        window.addEventListener("scroll", N),
        () => {
            window.removeEventListener("resize", N),
            window.removeEventListener("scroll", N),
            q.disconnect()
        }
    }
    , []),
    null
}
$v();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xl() {
    return xl = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }
    ,
    xl.apply(this, arguments)
}
var Sr;
(function(t) {
    t.Pop = "POP",
    t.Push = "PUSH",
    t.Replace = "REPLACE"
}
)(Sr || (Sr = {}));
const _g = "popstate";
function QE(t) {
    t === void 0 && (t = {});
    function e(i, a) {
        let {pathname: u, search: c, hash: f} = i.location;
        return Md("", {
            pathname: u,
            search: c,
            hash: f
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }
    function r(i, a) {
        return typeof a == "string" ? a : b0(a)
    }
    return YE(e, r, null, t)
}
function Dt(t, e) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(e)
}
function S0(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}
function GE() {
    return Math.random().toString(36).substr(2, 8)
}
function Rg(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}
function Md(t, e, r, i) {
    return r === void 0 && (r = null),
    xl({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? Al(e) : e, {
        state: r,
        key: e && e.key || i || GE()
    })
}
function b0(t) {
    let {pathname: e="/", search: r="", hash: i=""} = t;
    return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r),
    i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i),
    e
}
function Al(t) {
    let e = {};
    if (t) {
        let r = t.indexOf("#");
        r >= 0 && (e.hash = t.substr(r),
        t = t.substr(0, r));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substr(i),
        t = t.substr(0, i)),
        t && (e.pathname = t)
    }
    return e
}
function YE(t, e, r, i) {
    i === void 0 && (i = {});
    let {window: a=document.defaultView, v5Compat: u=!1} = i
      , c = a.history
      , f = Sr.Pop
      , h = null
      , m = g();
    m == null && (m = 0,
    c.replaceState(xl({}, c.state, {
        idx: m
    }), ""));
    function g() {
        return (c.state || {
            idx: null
        }).idx
    }
    function y() {
        f = Sr.Pop;
        let S = g()
          , R = S == null ? null : S - m;
        m = S,
        h && h({
            action: f,
            location: b.location,
            delta: R
        })
    }
    function w(S, R) {
        f = Sr.Push;
        let B = Md(b.location, S, R);
        m = g() + 1;
        let M = Rg(B, m)
          , j = b.createHref(B);
        try {
            c.pushState(M, "", j)
        } catch (U) {
            if (U instanceof DOMException && U.name === "DataCloneError")
                throw U;
            a.location.assign(j)
        }
        u && h && h({
            action: f,
            location: b.location,
            delta: 1
        })
    }
    function k(S, R) {
        f = Sr.Replace;
        let B = Md(b.location, S, R);
        m = g();
        let M = Rg(B, m)
          , j = b.createHref(B);
        c.replaceState(M, "", j),
        u && h && h({
            action: f,
            location: b.location,
            delta: 0
        })
    }
    function x(S) {
        let R = a.location.origin !== "null" ? a.location.origin : a.location.href
          , B = typeof S == "string" ? S : b0(S);
        return B = B.replace(/ $/, "%20"),
        Dt(R, "No window.location.(origin|href) available to create URL for href: " + B),
        new URL(B,R)
    }
    let b = {
        get action() {
            return f
        },
        get location() {
            return t(a, c)
        },
        listen(S) {
            if (h)
                throw new Error("A history only accepts one active listener");
            return a.addEventListener(_g, y),
            h = S,
            () => {
                a.removeEventListener(_g, y),
                h = null
            }
        },
        createHref(S) {
            return e(a, S)
        },
        createURL: x,
        encodeLocation(S) {
            let R = x(S);
            return {
                pathname: R.pathname,
                search: R.search,
                hash: R.hash
            }
        },
        push: w,
        replace: k,
        go(S) {
            return c.go(S)
        }
    };
    return b
}
var Ag;
(function(t) {
    t.data = "data",
    t.deferred = "deferred",
    t.redirect = "redirect",
    t.error = "error"
}
)(Ag || (Ag = {}));
function XE(t, e, r) {
    return r === void 0 && (r = "/"),
    JE(t, e, r)
}
function JE(t, e, r, i) {
    let a = typeof e == "string" ? Al(e) : e
      , u = T0(a.pathname || "/", r);
    if (u == null)
        return null;
    let c = E0(t);
    ZE(c);
    let f = null;
    for (let h = 0; f == null && h < c.length; ++h) {
        let m = dk(u);
        f = lk(c[h], m)
    }
    return f
}
function E0(t, e, r, i) {
    e === void 0 && (e = []),
    r === void 0 && (r = []),
    i === void 0 && (i = "");
    let a = (u, c, f) => {
        let h = {
            relativePath: f === void 0 ? u.path || "" : f,
            caseSensitive: u.caseSensitive === !0,
            childrenIndex: c,
            route: u
        };
        h.relativePath.startsWith("/") && (Dt(h.relativePath.startsWith(i), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        h.relativePath = h.relativePath.slice(i.length));
        let m = zs([i, h.relativePath])
          , g = r.concat(h);
        u.children && u.children.length > 0 && (Dt(u.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + m + '".')),
        E0(u.children, e, g, m)),
        !(u.path == null && !u.index) && e.push({
            path: m,
            score: ok(m, u.index),
            routesMeta: g
        })
    }
    ;
    return t.forEach( (u, c) => {
        var f;
        if (u.path === "" || !((f = u.path) != null && f.includes("?")))
            a(u, c);
        else
            for (let h of k0(u.path))
                a(u, c, h)
    }
    ),
    e
}
function k0(t) {
    let e = t.split("/");
    if (e.length === 0)
        return [];
    let[r,...i] = e
      , a = r.endsWith("?")
      , u = r.replace(/\?$/, "");
    if (i.length === 0)
        return a ? [u, ""] : [u];
    let c = k0(i.join("/"))
      , f = [];
    return f.push(...c.map(h => h === "" ? u : [u, h].join("/"))),
    a && f.push(...c),
    f.map(h => t.startsWith("/") && h === "" ? "/" : h)
}
function ZE(t) {
    t.sort( (e, r) => e.score !== r.score ? r.score - e.score : ak(e.routesMeta.map(i => i.childrenIndex), r.routesMeta.map(i => i.childrenIndex)))
}
const ek = /^:[\w-]+$/
  , tk = 3
  , nk = 2
  , rk = 1
  , sk = 10
  , ik = -2
  , Ng = t => t === "*";
function ok(t, e) {
    let r = t.split("/")
      , i = r.length;
    return r.some(Ng) && (i += ik),
    e && (i += nk),
    r.filter(a => !Ng(a)).reduce( (a, u) => a + (ek.test(u) ? tk : u === "" ? rk : sk), i)
}
function ak(t, e) {
    return t.length === e.length && t.slice(0, -1).every( (i, a) => i === e[a]) ? t[t.length - 1] - e[e.length - 1] : 0
}
function lk(t, e, r) {
    let {routesMeta: i} = t
      , a = {}
      , u = "/"
      , c = [];
    for (let f = 0; f < i.length; ++f) {
        let h = i[f]
          , m = f === i.length - 1
          , g = u === "/" ? e : e.slice(u.length) || "/"
          , y = uk({
            path: h.relativePath,
            caseSensitive: h.caseSensitive,
            end: m
        }, g)
          , w = h.route;
        if (!y)
            return null;
        Object.assign(a, y.params),
        c.push({
            params: a,
            pathname: zs([u, y.pathname]),
            pathnameBase: fk(zs([u, y.pathnameBase])),
            route: w
        }),
        y.pathnameBase !== "/" && (u = zs([u, y.pathnameBase]))
    }
    return c
}
function uk(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[r,i] = ck(t.path, t.caseSensitive, t.end)
      , a = e.match(r);
    if (!a)
        return null;
    let u = a[0]
      , c = u.replace(/(.)\/+$/, "$1")
      , f = a.slice(1);
    return {
        params: i.reduce( (m, g, y) => {
            let {paramName: w, isOptional: k} = g;
            if (w === "*") {
                let b = f[y] || "";
                c = u.slice(0, u.length - b.length).replace(/(.)\/+$/, "$1")
            }
            const x = f[y];
            return k && !x ? m[w] = void 0 : m[w] = (x || "").replace(/%2F/g, "/"),
            m
        }
        , {}),
        pathname: u,
        pathnameBase: c,
        pattern: t
    }
}
function ck(t, e, r) {
    e === void 0 && (e = !1),
    r === void 0 && (r = !0),
    S0(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = []
      , a = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, f, h) => (i.push({
        paramName: f,
        isOptional: h != null
    }),
    h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
        paramName: "*"
    }),
    a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a,e ? void 0 : "i"), i]
}
function dk(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return S0(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")),
        t
    }
}
function T0(t, e) {
    if (e === "/")
        return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let r = e.endsWith("/") ? e.length - 1 : e.length
      , i = t.charAt(r);
    return i && i !== "/" ? null : t.slice(r) || "/"
}
const zs = t => t.join("/").replace(/\/\/+/g, "/")
  , fk = t => t.replace(/\/+$/, "").replace(/^\/*/, "/");
function hk(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data"in t
}
const C0 = ["post", "put", "patch", "delete"];
new Set(C0);
const pk = ["get", ...C0];
new Set(pk);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Sl() {
    return Sl = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }
    ,
    Sl.apply(this, arguments)
}
const mk = L.createContext(null)
  , gk = L.createContext(null)
  , P0 = L.createContext(null)
  , Nl = L.createContext(null)
  , Ol = L.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , _0 = L.createContext(null);
function wf() {
    return L.useContext(Nl) != null
}
function xf() {
    return wf() || Dt(!1),
    L.useContext(Nl).location
}
function yk(t, e) {
    return vk(t, e)
}
function vk(t, e, r, i) {
    wf() || Dt(!1);
    let {navigator: a} = L.useContext(P0)
      , {matches: u} = L.useContext(Ol)
      , c = u[u.length - 1]
      , f = c ? c.params : {};
    c && c.pathname;
    let h = c ? c.pathnameBase : "/";
    c && c.route;
    let m = xf(), g;
    if (e) {
        var y;
        let S = typeof e == "string" ? Al(e) : e;
        h === "/" || (y = S.pathname) != null && y.startsWith(h) || Dt(!1),
        g = S
    } else
        g = m;
    let w = g.pathname || "/"
      , k = w;
    if (h !== "/") {
        let S = h.replace(/^\//, "").split("/");
        k = "/" + w.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let x = XE(t, {
        pathname: k
    })
      , b = Ek(x && x.map(S => Object.assign({}, S, {
        params: Object.assign({}, f, S.params),
        pathname: zs([h, a.encodeLocation ? a.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? h : zs([h, a.encodeLocation ? a.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), u, r, i);
    return e && b ? L.createElement(Nl.Provider, {
        value: {
            location: Sl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, g),
            navigationType: Sr.Pop
        }
    }, b) : b
}
function wk() {
    let t = Pk()
      , e = hk(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t)
      , r = t instanceof Error ? t.stack : null
      , a = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return L.createElement(L.Fragment, null, L.createElement("h2", null, "Unexpected Application Error!"), L.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), r ? L.createElement("pre", {
        style: a
    }, r) : null, null)
}
const xk = L.createElement(wk, null);
class Sk extends L.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, r) {
        return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation
        }
    }
    componentDidCatch(e, r) {
        console.error("React Router caught the following error during render", e, r)
    }
    render() {
        return this.state.error !== void 0 ? L.createElement(Ol.Provider, {
            value: this.props.routeContext
        }, L.createElement(_0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function bk(t) {
    let {routeContext: e, match: r, children: i} = t
      , a = L.useContext(mk);
    return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    L.createElement(Ol.Provider, {
        value: e
    }, i)
}
function Ek(t, e, r, i) {
    var a;
    if (e === void 0 && (e = []),
    r === void 0 && (r = null),
    i === void 0 && (i = null),
    t == null) {
        var u;
        if (!r)
            return null;
        if (r.errors)
            t = r.matches;
        else if ((u = i) != null && u.v7_partialHydration && e.length === 0 && !r.initialized && r.matches.length > 0)
            t = r.matches;
        else
            return null
    }
    let c = t
      , f = (a = r) == null ? void 0 : a.errors;
    if (f != null) {
        let g = c.findIndex(y => y.route.id && (f == null ? void 0 : f[y.route.id]) !== void 0);
        g >= 0 || Dt(!1),
        c = c.slice(0, Math.min(c.length, g + 1))
    }
    let h = !1
      , m = -1;
    if (r && i && i.v7_partialHydration)
        for (let g = 0; g < c.length; g++) {
            let y = c[g];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = g),
            y.route.id) {
                let {loaderData: w, errors: k} = r
                  , x = y.route.loader && w[y.route.id] === void 0 && (!k || k[y.route.id] === void 0);
                if (y.route.lazy || x) {
                    h = !0,
                    m >= 0 ? c = c.slice(0, m + 1) : c = [c[0]];
                    break
                }
            }
        }
    return c.reduceRight( (g, y, w) => {
        let k, x = !1, b = null, S = null;
        r && (k = f && y.route.id ? f[y.route.id] : void 0,
        b = y.route.errorElement || xk,
        h && (m < 0 && w === 0 ? (_k("route-fallback"),
        x = !0,
        S = null) : m === w && (x = !0,
        S = y.route.hydrateFallbackElement || null)));
        let R = e.concat(c.slice(0, w + 1))
          , B = () => {
            let M;
            return k ? M = b : x ? M = S : y.route.Component ? M = L.createElement(y.route.Component, null) : y.route.element ? M = y.route.element : M = g,
            L.createElement(bk, {
                match: y,
                routeContext: {
                    outlet: g,
                    matches: R,
                    isDataRoute: r != null
                },
                children: M
            })
        }
        ;
        return r && (y.route.ErrorBoundary || y.route.errorElement || w === 0) ? L.createElement(Sk, {
            location: r.location,
            revalidation: r.revalidation,
            component: b,
            error: k,
            children: B(),
            routeContext: {
                outlet: null,
                matches: R,
                isDataRoute: !0
            }
        }) : B()
    }
    , null)
}
var R0 = (function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseLoaderData = "useLoaderData",
    t.UseActionData = "useActionData",
    t.UseRouteError = "useRouteError",
    t.UseNavigation = "useNavigation",
    t.UseRouteLoaderData = "useRouteLoaderData",
    t.UseMatches = "useMatches",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t.UseRouteId = "useRouteId",
    t
}
)(R0 || {});
function kk(t) {
    let e = L.useContext(gk);
    return e || Dt(!1),
    e
}
function Tk(t) {
    let e = L.useContext(Ol);
    return e || Dt(!1),
    e
}
function Ck(t) {
    let e = Tk()
      , r = e.matches[e.matches.length - 1];
    return r.route.id || Dt(!1),
    r.route.id
}
function Pk() {
    var t;
    let e = L.useContext(_0)
      , r = kk(R0.UseRouteError)
      , i = Ck();
    return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[i]
}
const Og = {};
function _k(t, e, r) {
    Og[t] || (Og[t] = !0)
}
function Rk(t, e) {
    t == null || t.v7_startTransition,
    t == null || t.v7_relativeSplatPath
}
function ol(t) {
    Dt(!1)
}
function Ak(t) {
    let {basename: e="/", children: r=null, location: i, navigationType: a=Sr.Pop, navigator: u, static: c=!1, future: f} = t;
    wf() && Dt(!1);
    let h = e.replace(/^\/*/, "/")
      , m = L.useMemo( () => ({
        basename: h,
        navigator: u,
        static: c,
        future: Sl({
            v7_relativeSplatPath: !1
        }, f)
    }), [h, f, u, c]);
    typeof i == "string" && (i = Al(i));
    let {pathname: g="/", search: y="", hash: w="", state: k=null, key: x="default"} = i
      , b = L.useMemo( () => {
        let S = T0(g, h);
        return S == null ? null : {
            location: {
                pathname: S,
                search: y,
                hash: w,
                state: k,
                key: x
            },
            navigationType: a
        }
    }
    , [h, g, y, w, k, x, a]);
    return b == null ? null : L.createElement(P0.Provider, {
        value: m
    }, L.createElement(Nl.Provider, {
        children: r,
        value: b
    }))
}
function Nk(t) {
    let {children: e, location: r} = t;
    return yk(jd(e), r)
}
new Promise( () => {}
);
function jd(t, e) {
    e === void 0 && (e = []);
    let r = [];
    return L.Children.forEach(t, (i, a) => {
        if (!L.isValidElement(i))
            return;
        let u = [...e, a];
        if (i.type === L.Fragment) {
            r.push.apply(r, jd(i.props.children, u));
            return
        }
        i.type !== ol && Dt(!1),
        !i.props.index || !i.props.children || Dt(!1);
        let c = {
            id: i.props.id || u.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (c.children = jd(i.props.children, u)),
        r.push(c)
    }
    ),
    r
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Ok = "6";
try {
    window.__reactRouterVersion = Ok
} catch {}
const Lk = "startTransition"
  , Lg = KS[Lk];
function Dk(t) {
    let {basename: e, children: r, future: i, window: a} = t
      , u = L.useRef();
    u.current == null && (u.current = QE({
        window: a,
        v5Compat: !0
    }));
    let c = u.current
      , [f,h] = L.useState({
        action: c.action,
        location: c.location
    })
      , {v7_startTransition: m} = i || {}
      , g = L.useCallback(y => {
        m && Lg ? Lg( () => h(y)) : h(y)
    }
    , [h, m]);
    return L.useLayoutEffect( () => c.listen(g), [c, g]),
    L.useEffect( () => Rk(i), [i]),
    L.createElement(Ak, {
        basename: e,
        children: r,
        location: f.location,
        navigationType: f.action,
        navigator: c,
        future: i
    })
}
var Dg;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration",
    t.UseSubmit = "useSubmit",
    t.UseSubmitFetcher = "useSubmitFetcher",
    t.UseFetcher = "useFetcher",
    t.useViewTransitionState = "useViewTransitionState"
}
)(Dg || (Dg = {}));
var Mg;
(function(t) {
    t.UseFetcher = "useFetcher",
    t.UseFetchers = "useFetchers",
    t.UseScrollRestoration = "useScrollRestoration"
}
)(Mg || (Mg = {}));
function A0(t, e) {
    return function() {
        return t.apply(e, arguments)
    }
}
const {toString: Mk} = Object.prototype
  , {getPrototypeOf: Sf} = Object
  , {iterator: Ll, toStringTag: N0} = Symbol
  , Dl = (t => e => {
    const r = Mk.call(e);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , fn = t => (t = t.toLowerCase(),
e => Dl(e) === t)
  , Ml = t => e => typeof e === t
  , {isArray: ai} = Array
  , ti = Ml("undefined");
function Ro(t) {
    return t !== null && !ti(t) && t.constructor !== null && !ti(t.constructor) && Ot(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const O0 = fn("ArrayBuffer");
function jk(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && O0(t.buffer),
    e
}
const Ik = Ml("string")
  , Ot = Ml("function")
  , L0 = Ml("number")
  , Ao = t => t !== null && typeof t == "object"
  , Fk = t => t === !0 || t === !1
  , al = t => {
    if (Dl(t) !== "object")
        return !1;
    const e = Sf(t);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(N0 in t) && !(Ll in t)
}
  , Vk = t => {
    if (!Ao(t) || Ro(t))
        return !1;
    try {
        return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype
    } catch {
        return !1
    }
}
  , Bk = fn("Date")
  , Uk = fn("File")
  , zk = fn("Blob")
  , $k = fn("FileList")
  , Hk = t => Ao(t) && Ot(t.pipe)
  , qk = t => {
    let e;
    return t && (typeof FormData == "function" && t instanceof FormData || Ot(t.append) && ((e = Dl(t)) === "formdata" || e === "object" && Ot(t.toString) && t.toString() === "[object FormData]"))
}
  , Wk = fn("URLSearchParams")
  , [Kk,Qk,Gk,Yk] = ["ReadableStream", "Request", "Response", "Headers"].map(fn)
  , Xk = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function No(t, e, {allOwnKeys: r=!1}={}) {
    if (t === null || typeof t > "u")
        return;
    let i, a;
    if (typeof t != "object" && (t = [t]),
    ai(t))
        for (i = 0,
        a = t.length; i < a; i++)
            e.call(null, t[i], i, t);
    else {
        if (Ro(t))
            return;
        const u = r ? Object.getOwnPropertyNames(t) : Object.keys(t)
          , c = u.length;
        let f;
        for (i = 0; i < c; i++)
            f = u[i],
            e.call(null, t[f], f, t)
    }
}
function D0(t, e) {
    if (Ro(t))
        return null;
    e = e.toLowerCase();
    const r = Object.keys(t);
    let i = r.length, a;
    for (; i-- > 0; )
        if (a = r[i],
        e === a.toLowerCase())
            return a;
    return null
}
const Wr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , M0 = t => !ti(t) && t !== Wr;
function Id() {
    const {caseless: t, skipUndefined: e} = M0(this) && this || {}
      , r = {}
      , i = (a, u) => {
        const c = t && D0(r, u) || u;
        al(r[c]) && al(a) ? r[c] = Id(r[c], a) : al(a) ? r[c] = Id({}, a) : ai(a) ? r[c] = a.slice() : (!e || !ti(a)) && (r[c] = a)
    }
    ;
    for (let a = 0, u = arguments.length; a < u; a++)
        arguments[a] && No(arguments[a], i);
    return r
}
const Jk = (t, e, r, {allOwnKeys: i}={}) => (No(e, (a, u) => {
    r && Ot(a) ? t[u] = A0(a, r) : t[u] = a
}
, {
    allOwnKeys: i
}),
t)
  , Zk = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)),
t)
  , eT = (t, e, r, i) => {
    t.prototype = Object.create(e.prototype, i),
    t.prototype.constructor = t,
    Object.defineProperty(t, "super", {
        value: e.prototype
    }),
    r && Object.assign(t.prototype, r)
}
  , tT = (t, e, r, i) => {
    let a, u, c;
    const f = {};
    if (e = e || {},
    t == null)
        return e;
    do {
        for (a = Object.getOwnPropertyNames(t),
        u = a.length; u-- > 0; )
            c = a[u],
            (!i || i(c, t, e)) && !f[c] && (e[c] = t[c],
            f[c] = !0);
        t = r !== !1 && Sf(t)
    } while (t && (!r || r(t, e)) && t !== Object.prototype);
    return e
}
  , nT = (t, e, r) => {
    t = String(t),
    (r === void 0 || r > t.length) && (r = t.length),
    r -= e.length;
    const i = t.indexOf(e, r);
    return i !== -1 && i === r
}
  , rT = t => {
    if (!t)
        return null;
    if (ai(t))
        return t;
    let e = t.length;
    if (!L0(e))
        return null;
    const r = new Array(e);
    for (; e-- > 0; )
        r[e] = t[e];
    return r
}
  , sT = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && Sf(Uint8Array))
  , iT = (t, e) => {
    const i = (t && t[Ll]).call(t);
    let a;
    for (; (a = i.next()) && !a.done; ) {
        const u = a.value;
        e.call(t, u[0], u[1])
    }
}
  , oT = (t, e) => {
    let r;
    const i = [];
    for (; (r = t.exec(e)) !== null; )
        i.push(r);
    return i
}
  , aT = fn("HTMLFormElement")
  , lT = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, i, a) {
    return i.toUpperCase() + a
})
  , jg = ( ({hasOwnProperty: t}) => (e, r) => t.call(e, r))(Object.prototype)
  , uT = fn("RegExp")
  , j0 = (t, e) => {
    const r = Object.getOwnPropertyDescriptors(t)
      , i = {};
    No(r, (a, u) => {
        let c;
        (c = e(a, u, t)) !== !1 && (i[u] = c || a)
    }
    ),
    Object.defineProperties(t, i)
}
  , cT = t => {
    j0(t, (e, r) => {
        if (Ot(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
            return !1;
        const i = t[r];
        if (Ot(i)) {
            if (e.enumerable = !1,
            "writable"in e) {
                e.writable = !1;
                return
            }
            e.set || (e.set = () => {
                throw Error("Can not rewrite read-only method '" + r + "'")
            }
            )
        }
    }
    )
}
  , dT = (t, e) => {
    const r = {}
      , i = a => {
        a.forEach(u => {
            r[u] = !0
        }
        )
    }
    ;
    return ai(t) ? i(t) : i(String(t).split(e)),
    r
}
  , fT = () => {}
  , hT = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function pT(t) {
    return !!(t && Ot(t.append) && t[N0] === "FormData" && t[Ll])
}
const mT = t => {
    const e = new Array(10)
      , r = (i, a) => {
        if (Ao(i)) {
            if (e.indexOf(i) >= 0)
                return;
            if (Ro(i))
                return i;
            if (!("toJSON"in i)) {
                e[a] = i;
                const u = ai(i) ? [] : {};
                return No(i, (c, f) => {
                    const h = r(c, a + 1);
                    !ti(h) && (u[f] = h)
                }
                ),
                e[a] = void 0,
                u
            }
        }
        return i
    }
    ;
    return r(t, 0)
}
  , gT = fn("AsyncFunction")
  , yT = t => t && (Ao(t) || Ot(t)) && Ot(t.then) && Ot(t.catch)
  , I0 = ( (t, e) => t ? setImmediate : e ? ( (r, i) => (Wr.addEventListener("message", ({source: a, data: u}) => {
    a === Wr && u === r && i.length && i.shift()()
}
, !1),
a => {
    i.push(a),
    Wr.postMessage(r, "*")
}
))(`axios@${Math.random()}`, []) : r => setTimeout(r))(typeof setImmediate == "function", Ot(Wr.postMessage))
  , vT = typeof queueMicrotask < "u" ? queueMicrotask.bind(Wr) : typeof process < "u" && process.nextTick || I0
  , wT = t => t != null && Ot(t[Ll])
  , F = {
    isArray: ai,
    isArrayBuffer: O0,
    isBuffer: Ro,
    isFormData: qk,
    isArrayBufferView: jk,
    isString: Ik,
    isNumber: L0,
    isBoolean: Fk,
    isObject: Ao,
    isPlainObject: al,
    isEmptyObject: Vk,
    isReadableStream: Kk,
    isRequest: Qk,
    isResponse: Gk,
    isHeaders: Yk,
    isUndefined: ti,
    isDate: Bk,
    isFile: Uk,
    isBlob: zk,
    isRegExp: uT,
    isFunction: Ot,
    isStream: Hk,
    isURLSearchParams: Wk,
    isTypedArray: sT,
    isFileList: $k,
    forEach: No,
    merge: Id,
    extend: Jk,
    trim: Xk,
    stripBOM: Zk,
    inherits: eT,
    toFlatObject: tT,
    kindOf: Dl,
    kindOfTest: fn,
    endsWith: nT,
    toArray: rT,
    forEachEntry: iT,
    matchAll: oT,
    isHTMLForm: aT,
    hasOwnProperty: jg,
    hasOwnProp: jg,
    reduceDescriptors: j0,
    freezeMethods: cT,
    toObjectSet: dT,
    toCamelCase: lT,
    noop: fT,
    toFiniteNumber: hT,
    findKey: D0,
    global: Wr,
    isContextDefined: M0,
    isSpecCompliantForm: pT,
    toJSONObject: mT,
    isAsyncFn: gT,
    isThenable: yT,
    setImmediate: I0,
    asap: vT,
    isIterable: wT
};
function Se(t, e, r, i, a) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = t,
    this.name = "AxiosError",
    e && (this.code = e),
    r && (this.config = r),
    i && (this.request = i),
    a && (this.response = a,
    this.status = a.status ? a.status : null)
}
F.inherits(Se, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: F.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const F0 = Se.prototype
  , V0 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => {
    V0[t] = {
        value: t
    }
}
);
Object.defineProperties(Se, V0);
Object.defineProperty(F0, "isAxiosError", {
    value: !0
});
Se.from = (t, e, r, i, a, u) => {
    const c = Object.create(F0);
    F.toFlatObject(t, c, function(g) {
        return g !== Error.prototype
    }, m => m !== "isAxiosError");
    const f = t && t.message ? t.message : "Error"
      , h = e == null && t ? t.code : e;
    return Se.call(c, f, h, r, i, a),
    t && c.cause == null && Object.defineProperty(c, "cause", {
        value: t,
        configurable: !0
    }),
    c.name = t && t.name || "Error",
    u && Object.assign(c, u),
    c
}
;
const xT = null;
function Fd(t) {
    return F.isPlainObject(t) || F.isArray(t)
}
function B0(t) {
    return F.endsWith(t, "[]") ? t.slice(0, -2) : t
}
function Ig(t, e, r) {
    return t ? t.concat(e).map(function(a, u) {
        return a = B0(a),
        !r && u ? "[" + a + "]" : a
    }).join(r ? "." : "") : e
}
function ST(t) {
    return F.isArray(t) && !t.some(Fd)
}
const bT = F.toFlatObject(F, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});
function jl(t, e, r) {
    if (!F.isObject(t))
        throw new TypeError("target must be an object");
    e = e || new FormData,
    r = F.toFlatObject(r, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(b, S) {
        return !F.isUndefined(S[b])
    });
    const i = r.metaTokens
      , a = r.visitor || g
      , u = r.dots
      , c = r.indexes
      , h = (r.Blob || typeof Blob < "u" && Blob) && F.isSpecCompliantForm(e);
    if (!F.isFunction(a))
        throw new TypeError("visitor must be a function");
    function m(x) {
        if (x === null)
            return "";
        if (F.isDate(x))
            return x.toISOString();
        if (F.isBoolean(x))
            return x.toString();
        if (!h && F.isBlob(x))
            throw new Se("Blob is not supported. Use a Buffer instead.");
        return F.isArrayBuffer(x) || F.isTypedArray(x) ? h && typeof Blob == "function" ? new Blob([x]) : Buffer.from(x) : x
    }
    function g(x, b, S) {
        let R = x;
        if (x && !S && typeof x == "object") {
            if (F.endsWith(b, "{}"))
                b = i ? b : b.slice(0, -2),
                x = JSON.stringify(x);
            else if (F.isArray(x) && ST(x) || (F.isFileList(x) || F.endsWith(b, "[]")) && (R = F.toArray(x)))
                return b = B0(b),
                R.forEach(function(M, j) {
                    !(F.isUndefined(M) || M === null) && e.append(c === !0 ? Ig([b], j, u) : c === null ? b : b + "[]", m(M))
                }),
                !1
        }
        return Fd(x) ? !0 : (e.append(Ig(S, b, u), m(x)),
        !1)
    }
    const y = []
      , w = Object.assign(bT, {
        defaultVisitor: g,
        convertValue: m,
        isVisitable: Fd
    });
    function k(x, b) {
        if (!F.isUndefined(x)) {
            if (y.indexOf(x) !== -1)
                throw Error("Circular reference detected in " + b.join("."));
            y.push(x),
            F.forEach(x, function(R, B) {
                (!(F.isUndefined(R) || R === null) && a.call(e, R, F.isString(B) ? B.trim() : B, b, w)) === !0 && k(R, b ? b.concat(B) : [B])
            }),
            y.pop()
        }
    }
    if (!F.isObject(t))
        throw new TypeError("data must be an object");
    return k(t),
    e
}
function Fg(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(i) {
        return e[i]
    })
}
function bf(t, e) {
    this._pairs = [],
    t && jl(t, this, e)
}
const U0 = bf.prototype;
U0.append = function(e, r) {
    this._pairs.push([e, r])
}
;
U0.toString = function(e) {
    const r = e ? function(i) {
        return e.call(this, i, Fg)
    }
    : Fg;
    return this._pairs.map(function(a) {
        return r(a[0]) + "=" + r(a[1])
    }, "").join("&")
}
;
function ET(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}
function z0(t, e, r) {
    if (!e)
        return t;
    const i = r && r.encode || ET;
    F.isFunction(r) && (r = {
        serialize: r
    });
    const a = r && r.serialize;
    let u;
    if (a ? u = a(e, r) : u = F.isURLSearchParams(e) ? e.toString() : new bf(e,r).toString(i),
    u) {
        const c = t.indexOf("#");
        c !== -1 && (t = t.slice(0, c)),
        t += (t.indexOf("?") === -1 ? "?" : "&") + u
    }
    return t
}
class Vg {
    constructor() {
        this.handlers = []
    }
    use(e, r, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: r,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        F.forEach(this.handlers, function(i) {
            i !== null && e(i)
        })
    }
}
const $0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , kT = typeof URLSearchParams < "u" ? URLSearchParams : bf
  , TT = typeof FormData < "u" ? FormData : null
  , CT = typeof Blob < "u" ? Blob : null
  , PT = {
    isBrowser: !0,
    classes: {
        URLSearchParams: kT,
        FormData: TT,
        Blob: CT
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Ef = typeof window < "u" && typeof document < "u"
  , Vd = typeof navigator == "object" && navigator || void 0
  , _T = Ef && (!Vd || ["ReactNative", "NativeScript", "NS"].indexOf(Vd.product) < 0)
  , RT = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , AT = Ef && window.location.href || "http://localhost"
  , NT = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Ef,
    hasStandardBrowserEnv: _T,
    hasStandardBrowserWebWorkerEnv: RT,
    navigator: Vd,
    origin: AT
}, Symbol.toStringTag, {
    value: "Module"
}))
  , vt = {
    ...NT,
    ...PT
};
function OT(t, e) {
    return jl(t, new vt.classes.URLSearchParams, {
        visitor: function(r, i, a, u) {
            return vt.isNode && F.isBuffer(r) ? (this.append(i, r.toString("base64")),
            !1) : u.defaultVisitor.apply(this, arguments)
        },
        ...e
    })
}
function LT(t) {
    return F.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}
function DT(t) {
    const e = {}
      , r = Object.keys(t);
    let i;
    const a = r.length;
    let u;
    for (i = 0; i < a; i++)
        u = r[i],
        e[u] = t[u];
    return e
}
function H0(t) {
    function e(r, i, a, u) {
        let c = r[u++];
        if (c === "__proto__")
            return !0;
        const f = Number.isFinite(+c)
          , h = u >= r.length;
        return c = !c && F.isArray(a) ? a.length : c,
        h ? (F.hasOwnProp(a, c) ? a[c] = [a[c], i] : a[c] = i,
        !f) : ((!a[c] || !F.isObject(a[c])) && (a[c] = []),
        e(r, i, a[c], u) && F.isArray(a[c]) && (a[c] = DT(a[c])),
        !f)
    }
    if (F.isFormData(t) && F.isFunction(t.entries)) {
        const r = {};
        return F.forEachEntry(t, (i, a) => {
            e(LT(i), a, r, 0)
        }
        ),
        r
    }
    return null
}
function MT(t, e, r) {
    if (F.isString(t))
        try {
            return (e || JSON.parse)(t),
            F.trim(t)
        } catch (i) {
            if (i.name !== "SyntaxError")
                throw i
        }
    return (r || JSON.stringify)(t)
}
const Oo = {
    transitional: $0,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, r) {
        const i = r.getContentType() || ""
          , a = i.indexOf("application/json") > -1
          , u = F.isObject(e);
        if (u && F.isHTMLForm(e) && (e = new FormData(e)),
        F.isFormData(e))
            return a ? JSON.stringify(H0(e)) : e;
        if (F.isArrayBuffer(e) || F.isBuffer(e) || F.isStream(e) || F.isFile(e) || F.isBlob(e) || F.isReadableStream(e))
            return e;
        if (F.isArrayBufferView(e))
            return e.buffer;
        if (F.isURLSearchParams(e))
            return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            e.toString();
        let f;
        if (u) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1)
                return OT(e, this.formSerializer).toString();
            if ((f = F.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const h = this.env && this.env.FormData;
                return jl(f ? {
                    "files[]": e
                } : e, h && new h, this.formSerializer)
            }
        }
        return u || a ? (r.setContentType("application/json", !1),
        MT(e)) : e
    }
    ],
    transformResponse: [function(e) {
        const r = this.transitional || Oo.transitional
          , i = r && r.forcedJSONParsing
          , a = this.responseType === "json";
        if (F.isResponse(e) || F.isReadableStream(e))
            return e;
        if (e && F.isString(e) && (i && !this.responseType || a)) {
            const c = !(r && r.silentJSONParsing) && a;
            try {
                return JSON.parse(e, this.parseReviver)
            } catch (f) {
                if (c)
                    throw f.name === "SyntaxError" ? Se.from(f, Se.ERR_BAD_RESPONSE, this, null, this.response) : f
            }
        }
        return e
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: vt.classes.FormData,
        Blob: vt.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
F.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
    Oo.headers[t] = {}
}
);
const jT = F.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , IT = t => {
    const e = {};
    let r, i, a;
    return t && t.split(`
`).forEach(function(c) {
        a = c.indexOf(":"),
        r = c.substring(0, a).trim().toLowerCase(),
        i = c.substring(a + 1).trim(),
        !(!r || e[r] && jT[r]) && (r === "set-cookie" ? e[r] ? e[r].push(i) : e[r] = [i] : e[r] = e[r] ? e[r] + ", " + i : i)
    }),
    e
}
  , Bg = Symbol("internals");
function Ji(t) {
    return t && String(t).trim().toLowerCase()
}
function ll(t) {
    return t === !1 || t == null ? t : F.isArray(t) ? t.map(ll) : String(t)
}
function FT(t) {
    const e = Object.create(null)
      , r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = r.exec(t); )
        e[i[1]] = i[2];
    return e
}
const VT = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Gc(t, e, r, i, a) {
    if (F.isFunction(i))
        return i.call(this, e, r);
    if (a && (e = r),
    !!F.isString(e)) {
        if (F.isString(i))
            return e.indexOf(i) !== -1;
        if (F.isRegExp(i))
            return i.test(e)
    }
}
function BT(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, i) => r.toUpperCase() + i)
}
function UT(t, e) {
    const r = F.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(t, i + r, {
            value: function(a, u, c) {
                return this[i].call(this, e, a, u, c)
            },
            configurable: !0
        })
    }
    )
}
let Lt = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, r, i) {
        const a = this;
        function u(f, h, m) {
            const g = Ji(h);
            if (!g)
                throw new Error("header name must be a non-empty string");
            const y = F.findKey(a, g);
            (!y || a[y] === void 0 || m === !0 || m === void 0 && a[y] !== !1) && (a[y || h] = ll(f))
        }
        const c = (f, h) => F.forEach(f, (m, g) => u(m, g, h));
        if (F.isPlainObject(e) || e instanceof this.constructor)
            c(e, r);
        else if (F.isString(e) && (e = e.trim()) && !VT(e))
            c(IT(e), r);
        else if (F.isObject(e) && F.isIterable(e)) {
            let f = {}, h, m;
            for (const g of e) {
                if (!F.isArray(g))
                    throw TypeError("Object iterator must return a key-value pair");
                f[m = g[0]] = (h = f[m]) ? F.isArray(h) ? [...h, g[1]] : [h, g[1]] : g[1]
            }
            c(f, r)
        } else
            e != null && u(r, e, i);
        return this
    }
    get(e, r) {
        if (e = Ji(e),
        e) {
            const i = F.findKey(this, e);
            if (i) {
                const a = this[i];
                if (!r)
                    return a;
                if (r === !0)
                    return FT(a);
                if (F.isFunction(r))
                    return r.call(this, a, i);
                if (F.isRegExp(r))
                    return r.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, r) {
        if (e = Ji(e),
        e) {
            const i = F.findKey(this, e);
            return !!(i && this[i] !== void 0 && (!r || Gc(this, this[i], i, r)))
        }
        return !1
    }
    delete(e, r) {
        const i = this;
        let a = !1;
        function u(c) {
            if (c = Ji(c),
            c) {
                const f = F.findKey(i, c);
                f && (!r || Gc(i, i[f], f, r)) && (delete i[f],
                a = !0)
            }
        }
        return F.isArray(e) ? e.forEach(u) : u(e),
        a
    }
    clear(e) {
        const r = Object.keys(this);
        let i = r.length
          , a = !1;
        for (; i--; ) {
            const u = r[i];
            (!e || Gc(this, this[u], u, e, !0)) && (delete this[u],
            a = !0)
        }
        return a
    }
    normalize(e) {
        const r = this
          , i = {};
        return F.forEach(this, (a, u) => {
            const c = F.findKey(i, u);
            if (c) {
                r[c] = ll(a),
                delete r[u];
                return
            }
            const f = e ? BT(u) : String(u).trim();
            f !== u && delete r[u],
            r[f] = ll(a),
            i[f] = !0
        }
        ),
        this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const r = Object.create(null);
        return F.forEach(this, (i, a) => {
            i != null && i !== !1 && (r[a] = e && F.isArray(i) ? i.join(", ") : i)
        }
        ),
        r
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([e,r]) => e + ": " + r).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...r) {
        const i = new this(e);
        return r.forEach(a => i.set(a)),
        i
    }
    static accessor(e) {
        const i = (this[Bg] = this[Bg] = {
            accessors: {}
        }).accessors
          , a = this.prototype;
        function u(c) {
            const f = Ji(c);
            i[f] || (UT(a, c),
            i[f] = !0)
        }
        return F.isArray(e) ? e.forEach(u) : u(e),
        this
    }
}
;
Lt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
F.reduceDescriptors(Lt.prototype, ({value: t}, e) => {
    let r = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(i) {
            this[r] = i
        }
    }
}
);
F.freezeMethods(Lt);
function Yc(t, e) {
    const r = this || Oo
      , i = e || r
      , a = Lt.from(i.headers);
    let u = i.data;
    return F.forEach(t, function(f) {
        u = f.call(r, u, a.normalize(), e ? e.status : void 0)
    }),
    a.normalize(),
    u
}
function q0(t) {
    return !!(t && t.__CANCEL__)
}
function li(t, e, r) {
    Se.call(this, t ?? "canceled", Se.ERR_CANCELED, e, r),
    this.name = "CanceledError"
}
F.inherits(li, Se, {
    __CANCEL__: !0
});
function W0(t, e, r) {
    const i = r.config.validateStatus;
    !r.status || !i || i(r.status) ? t(r) : e(new Se("Request failed with status code " + r.status,[Se.ERR_BAD_REQUEST, Se.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],r.config,r.request,r))
}
function zT(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || ""
}
function $T(t, e) {
    t = t || 10;
    const r = new Array(t)
      , i = new Array(t);
    let a = 0, u = 0, c;
    return e = e !== void 0 ? e : 1e3,
    function(h) {
        const m = Date.now()
          , g = i[u];
        c || (c = m),
        r[a] = h,
        i[a] = m;
        let y = u
          , w = 0;
        for (; y !== a; )
            w += r[y++],
            y = y % t;
        if (a = (a + 1) % t,
        a === u && (u = (u + 1) % t),
        m - c < e)
            return;
        const k = g && m - g;
        return k ? Math.round(w * 1e3 / k) : void 0
    }
}
function HT(t, e) {
    let r = 0, i = 1e3 / e, a, u;
    const c = (m, g=Date.now()) => {
        r = g,
        a = null,
        u && (clearTimeout(u),
        u = null),
        t(...m)
    }
    ;
    return [ (...m) => {
        const g = Date.now()
          , y = g - r;
        y >= i ? c(m, g) : (a = m,
        u || (u = setTimeout( () => {
            u = null,
            c(a)
        }
        , i - y)))
    }
    , () => a && c(a)]
}
const bl = (t, e, r=3) => {
    let i = 0;
    const a = $T(50, 250);
    return HT(u => {
        const c = u.loaded
          , f = u.lengthComputable ? u.total : void 0
          , h = c - i
          , m = a(h)
          , g = c <= f;
        i = c;
        const y = {
            loaded: c,
            total: f,
            progress: f ? c / f : void 0,
            bytes: h,
            rate: m || void 0,
            estimated: m && f && g ? (f - c) / m : void 0,
            event: u,
            lengthComputable: f != null,
            [e ? "download" : "upload"]: !0
        };
        t(y)
    }
    , r)
}
  , Ug = (t, e) => {
    const r = t != null;
    return [i => e[0]({
        lengthComputable: r,
        total: t,
        loaded: i
    }), e[1]]
}
  , zg = t => (...e) => F.asap( () => t(...e))
  , qT = vt.hasStandardBrowserEnv ? ( (t, e) => r => (r = new URL(r,vt.origin),
t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(new URL(vt.origin), vt.navigator && /(msie|trident)/i.test(vt.navigator.userAgent)) : () => !0
  , WT = vt.hasStandardBrowserEnv ? {
    write(t, e, r, i, a, u) {
        const c = [t + "=" + encodeURIComponent(e)];
        F.isNumber(r) && c.push("expires=" + new Date(r).toGMTString()),
        F.isString(i) && c.push("path=" + i),
        F.isString(a) && c.push("domain=" + a),
        u === !0 && c.push("secure"),
        document.cookie = c.join("; ")
    },
    read(t) {
        const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return e ? decodeURIComponent(e[3]) : null
    },
    remove(t) {
        this.write(t, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function KT(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}
function QT(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
}
function K0(t, e, r) {
    let i = !KT(e);
    return t && (i || r == !1) ? QT(t, e) : e
}
const $g = t => t instanceof Lt ? {
    ...t
} : t;
function os(t, e) {
    e = e || {};
    const r = {};
    function i(m, g, y, w) {
        return F.isPlainObject(m) && F.isPlainObject(g) ? F.merge.call({
            caseless: w
        }, m, g) : F.isPlainObject(g) ? F.merge({}, g) : F.isArray(g) ? g.slice() : g
    }
    function a(m, g, y, w) {
        if (F.isUndefined(g)) {
            if (!F.isUndefined(m))
                return i(void 0, m, y, w)
        } else
            return i(m, g, y, w)
    }
    function u(m, g) {
        if (!F.isUndefined(g))
            return i(void 0, g)
    }
    function c(m, g) {
        if (F.isUndefined(g)) {
            if (!F.isUndefined(m))
                return i(void 0, m)
        } else
            return i(void 0, g)
    }
    function f(m, g, y) {
        if (y in e)
            return i(m, g);
        if (y in t)
            return i(void 0, m)
    }
    const h = {
        url: u,
        method: u,
        data: u,
        baseURL: c,
        transformRequest: c,
        transformResponse: c,
        paramsSerializer: c,
        timeout: c,
        timeoutMessage: c,
        withCredentials: c,
        withXSRFToken: c,
        adapter: c,
        responseType: c,
        xsrfCookieName: c,
        xsrfHeaderName: c,
        onUploadProgress: c,
        onDownloadProgress: c,
        decompress: c,
        maxContentLength: c,
        maxBodyLength: c,
        beforeRedirect: c,
        transport: c,
        httpAgent: c,
        httpsAgent: c,
        cancelToken: c,
        socketPath: c,
        responseEncoding: c,
        validateStatus: f,
        headers: (m, g, y) => a($g(m), $g(g), y, !0)
    };
    return F.forEach(Object.keys({
        ...t,
        ...e
    }), function(g) {
        const y = h[g] || a
          , w = y(t[g], e[g], g);
        F.isUndefined(w) && y !== f || (r[g] = w)
    }),
    r
}
const Q0 = t => {
    const e = os({}, t);
    let {data: r, withXSRFToken: i, xsrfHeaderName: a, xsrfCookieName: u, headers: c, auth: f} = e;
    if (e.headers = c = Lt.from(c),
    e.url = z0(K0(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer),
    f && c.set("Authorization", "Basic " + btoa((f.username || "") + ":" + (f.password ? unescape(encodeURIComponent(f.password)) : ""))),
    F.isFormData(r)) {
        if (vt.hasStandardBrowserEnv || vt.hasStandardBrowserWebWorkerEnv)
            c.setContentType(void 0);
        else if (F.isFunction(r.getHeaders)) {
            const h = r.getHeaders()
              , m = ["content-type", "content-length"];
            Object.entries(h).forEach( ([g,y]) => {
                m.includes(g.toLowerCase()) && c.set(g, y)
            }
            )
        }
    }
    if (vt.hasStandardBrowserEnv && (i && F.isFunction(i) && (i = i(e)),
    i || i !== !1 && qT(e.url))) {
        const h = a && u && WT.read(u);
        h && c.set(a, h)
    }
    return e
}
  , GT = typeof XMLHttpRequest < "u"
  , YT = GT && function(t) {
    return new Promise(function(r, i) {
        const a = Q0(t);
        let u = a.data;
        const c = Lt.from(a.headers).normalize();
        let {responseType: f, onUploadProgress: h, onDownloadProgress: m} = a, g, y, w, k, x;
        function b() {
            k && k(),
            x && x(),
            a.cancelToken && a.cancelToken.unsubscribe(g),
            a.signal && a.signal.removeEventListener("abort", g)
        }
        let S = new XMLHttpRequest;
        S.open(a.method.toUpperCase(), a.url, !0),
        S.timeout = a.timeout;
        function R() {
            if (!S)
                return;
            const M = Lt.from("getAllResponseHeaders"in S && S.getAllResponseHeaders())
              , U = {
                data: !f || f === "text" || f === "json" ? S.responseText : S.response,
                status: S.status,
                statusText: S.statusText,
                headers: M,
                config: t,
                request: S
            };
            W0(function(ee) {
                r(ee),
                b()
            }, function(ee) {
                i(ee),
                b()
            }, U),
            S = null
        }
        "onloadend"in S ? S.onloadend = R : S.onreadystatechange = function() {
            !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(R)
        }
        ,
        S.onabort = function() {
            S && (i(new Se("Request aborted",Se.ECONNABORTED,t,S)),
            S = null)
        }
        ,
        S.onerror = function(j) {
            const U = j && j.message ? j.message : "Network Error"
              , Y = new Se(U,Se.ERR_NETWORK,t,S);
            Y.event = j || null,
            i(Y),
            S = null
        }
        ,
        S.ontimeout = function() {
            let j = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
            const U = a.transitional || $0;
            a.timeoutErrorMessage && (j = a.timeoutErrorMessage),
            i(new Se(j,U.clarifyTimeoutError ? Se.ETIMEDOUT : Se.ECONNABORTED,t,S)),
            S = null
        }
        ,
        u === void 0 && c.setContentType(null),
        "setRequestHeader"in S && F.forEach(c.toJSON(), function(j, U) {
            S.setRequestHeader(U, j)
        }),
        F.isUndefined(a.withCredentials) || (S.withCredentials = !!a.withCredentials),
        f && f !== "json" && (S.responseType = a.responseType),
        m && ([w,x] = bl(m, !0),
        S.addEventListener("progress", w)),
        h && S.upload && ([y,k] = bl(h),
        S.upload.addEventListener("progress", y),
        S.upload.addEventListener("loadend", k)),
        (a.cancelToken || a.signal) && (g = M => {
            S && (i(!M || M.type ? new li(null,t,S) : M),
            S.abort(),
            S = null)
        }
        ,
        a.cancelToken && a.cancelToken.subscribe(g),
        a.signal && (a.signal.aborted ? g() : a.signal.addEventListener("abort", g)));
        const B = zT(a.url);
        if (B && vt.protocols.indexOf(B) === -1) {
            i(new Se("Unsupported protocol " + B + ":",Se.ERR_BAD_REQUEST,t));
            return
        }
        S.send(u || null)
    }
    )
}
  , XT = (t, e) => {
    const {length: r} = t = t ? t.filter(Boolean) : [];
    if (e || r) {
        let i = new AbortController, a;
        const u = function(m) {
            if (!a) {
                a = !0,
                f();
                const g = m instanceof Error ? m : this.reason;
                i.abort(g instanceof Se ? g : new li(g instanceof Error ? g.message : g))
            }
        };
        let c = e && setTimeout( () => {
            c = null,
            u(new Se(`timeout ${e} of ms exceeded`,Se.ETIMEDOUT))
        }
        , e);
        const f = () => {
            t && (c && clearTimeout(c),
            c = null,
            t.forEach(m => {
                m.unsubscribe ? m.unsubscribe(u) : m.removeEventListener("abort", u)
            }
            ),
            t = null)
        }
        ;
        t.forEach(m => m.addEventListener("abort", u));
        const {signal: h} = i;
        return h.unsubscribe = () => F.asap(f),
        h
    }
}
  , JT = function*(t, e) {
    let r = t.byteLength;
    if (r < e) {
        yield t;
        return
    }
    let i = 0, a;
    for (; i < r; )
        a = i + e,
        yield t.slice(i, a),
        i = a
}
  , ZT = async function*(t, e) {
    for await(const r of eC(t))
        yield*JT(r, e)
}
  , eC = async function*(t) {
    if (t[Symbol.asyncIterator]) {
        yield*t;
        return
    }
    const e = t.getReader();
    try {
        for (; ; ) {
            const {done: r, value: i} = await e.read();
            if (r)
                break;
            yield i
        }
    } finally {
        await e.cancel()
    }
}
  , Hg = (t, e, r, i) => {
    const a = ZT(t, e);
    let u = 0, c, f = h => {
        c || (c = !0,
        i && i(h))
    }
    ;
    return new ReadableStream({
        async pull(h) {
            try {
                const {done: m, value: g} = await a.next();
                if (m) {
                    f(),
                    h.close();
                    return
                }
                let y = g.byteLength;
                if (r) {
                    let w = u += y;
                    r(w)
                }
                h.enqueue(new Uint8Array(g))
            } catch (m) {
                throw f(m),
                m
            }
        },
        cancel(h) {
            return f(h),
            a.return()
        }
    },{
        highWaterMark: 2
    })
}
  , qg = 64 * 1024
  , {isFunction: Ja} = F
  , tC = ( ({Request: t, Response: e}) => ({
    Request: t,
    Response: e
}))(F.global)
  , {ReadableStream: Wg, TextEncoder: Kg} = F.global
  , Qg = (t, ...e) => {
    try {
        return !!t(...e)
    } catch {
        return !1
    }
}
  , nC = t => {
    t = F.merge.call({
        skipUndefined: !0
    }, tC, t);
    const {fetch: e, Request: r, Response: i} = t
      , a = e ? Ja(e) : typeof fetch == "function"
      , u = Ja(r)
      , c = Ja(i);
    if (!a)
        return !1;
    const f = a && Ja(Wg)
      , h = a && (typeof Kg == "function" ? (x => b => x.encode(b))(new Kg) : async x => new Uint8Array(await new r(x).arrayBuffer()))
      , m = u && f && Qg( () => {
        let x = !1;
        const b = new r(vt.origin,{
            body: new Wg,
            method: "POST",
            get duplex() {
                return x = !0,
                "half"
            }
        }).headers.has("Content-Type");
        return x && !b
    }
    )
      , g = c && f && Qg( () => F.isReadableStream(new i("").body))
      , y = {
        stream: g && (x => x.body)
    };
    a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(x => {
        !y[x] && (y[x] = (b, S) => {
            let R = b && b[x];
            if (R)
                return R.call(b);
            throw new Se(`Response type '${x}' is not supported`,Se.ERR_NOT_SUPPORT,S)
        }
        )
    }
    );
    const w = async x => {
        if (x == null)
            return 0;
        if (F.isBlob(x))
            return x.size;
        if (F.isSpecCompliantForm(x))
            return (await new r(vt.origin,{
                method: "POST",
                body: x
            }).arrayBuffer()).byteLength;
        if (F.isArrayBufferView(x) || F.isArrayBuffer(x))
            return x.byteLength;
        if (F.isURLSearchParams(x) && (x = x + ""),
        F.isString(x))
            return (await h(x)).byteLength
    }
      , k = async (x, b) => {
        const S = F.toFiniteNumber(x.getContentLength());
        return S ?? w(b)
    }
    ;
    return async x => {
        let {url: b, method: S, data: R, signal: B, cancelToken: M, timeout: j, onDownloadProgress: U, onUploadProgress: Y, responseType: ee, headers: N, withCredentials: q="same-origin", fetchOptions: Q} = Q0(x)
          , J = e || fetch;
        ee = ee ? (ee + "").toLowerCase() : "text";
        let $ = XT([B, M && M.toAbortSignal()], j)
          , re = null;
        const Te = $ && $.unsubscribe && ( () => {
            $.unsubscribe()
        }
        );
        let pe;
        try {
            if (Y && m && S !== "get" && S !== "head" && (pe = await k(N, R)) !== 0) {
                let A = new r(b,{
                    method: "POST",
                    body: R,
                    duplex: "half"
                }), z;
                if (F.isFormData(R) && (z = A.headers.get("content-type")) && N.setContentType(z),
                A.body) {
                    const [ce,fe] = Ug(pe, bl(zg(Y)));
                    R = Hg(A.body, qg, ce, fe)
                }
            }
            F.isString(q) || (q = q ? "include" : "omit");
            const he = u && "credentials"in r.prototype
              , de = {
                ...Q,
                signal: $,
                method: S.toUpperCase(),
                headers: N.normalize().toJSON(),
                body: R,
                duplex: "half",
                credentials: he ? q : void 0
            };
            re = u && new r(b,de);
            let V = await (u ? J(re, Q) : J(b, de));
            const le = g && (ee === "stream" || ee === "response");
            if (g && (U || le && Te)) {
                const A = {};
                ["status", "statusText", "headers"].forEach(be => {
                    A[be] = V[be]
                }
                );
                const z = F.toFiniteNumber(V.headers.get("content-length"))
                  , [ce,fe] = U && Ug(z, bl(zg(U), !0)) || [];
                V = new i(Hg(V.body, qg, ce, () => {
                    fe && fe(),
                    Te && Te()
                }
                ),A)
            }
            ee = ee || "text";
            let X = await y[F.findKey(y, ee) || "text"](V, x);
            return !le && Te && Te(),
            await new Promise( (A, z) => {
                W0(A, z, {
                    data: X,
                    headers: Lt.from(V.headers),
                    status: V.status,
                    statusText: V.statusText,
                    config: x,
                    request: re
                })
            }
            )
        } catch (he) {
            throw Te && Te(),
            he && he.name === "TypeError" && /Load failed|fetch/i.test(he.message) ? Object.assign(new Se("Network Error",Se.ERR_NETWORK,x,re), {
                cause: he.cause || he
            }) : Se.from(he, he && he.code, x, re)
        }
    }
}
  , rC = new Map
  , G0 = t => {
    let e = t ? t.env : {};
    const {fetch: r, Request: i, Response: a} = e
      , u = [i, a, r];
    let c = u.length, f = c, h, m, g = rC;
    for (; f--; )
        h = u[f],
        m = g.get(h),
        m === void 0 && g.set(h, m = f ? new Map : nC(e)),
        g = m;
    return m
}
;
G0();
const Bd = {
    http: xT,
    xhr: YT,
    fetch: {
        get: G0
    }
};
F.forEach(Bd, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(t, "adapterName", {
            value: e
        })
    }
}
);
const Gg = t => `- ${t}`
  , sC = t => F.isFunction(t) || t === null || t === !1
  , Y0 = {
    getAdapter: (t, e) => {
        t = F.isArray(t) ? t : [t];
        const {length: r} = t;
        let i, a;
        const u = {};
        for (let c = 0; c < r; c++) {
            i = t[c];
            let f;
            if (a = i,
            !sC(i) && (a = Bd[(f = String(i)).toLowerCase()],
            a === void 0))
                throw new Se(`Unknown adapter '${f}'`);
            if (a && (F.isFunction(a) || (a = a.get(e))))
                break;
            u[f || "#" + c] = a
        }
        if (!a) {
            const c = Object.entries(u).map( ([h,m]) => `adapter ${h} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build"));
            let f = r ? c.length > 1 ? `since :
` + c.map(Gg).join(`
`) : " " + Gg(c[0]) : "as no adapter specified";
            throw new Se("There is no suitable adapter to dispatch the request " + f,"ERR_NOT_SUPPORT")
        }
        return a
    }
    ,
    adapters: Bd
};
function Xc(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
        throw new li(null,t)
}
function Yg(t) {
    return Xc(t),
    t.headers = Lt.from(t.headers),
    t.data = Yc.call(t, t.transformRequest),
    ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1),
    Y0.getAdapter(t.adapter || Oo.adapter, t)(t).then(function(i) {
        return Xc(t),
        i.data = Yc.call(t, t.transformResponse, i),
        i.headers = Lt.from(i.headers),
        i
    }, function(i) {
        return q0(i) || (Xc(t),
        i && i.response && (i.response.data = Yc.call(t, t.transformResponse, i.response),
        i.response.headers = Lt.from(i.response.headers))),
        Promise.reject(i)
    })
}
const X0 = "1.12.2"
  , Il = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (t, e) => {
    Il[t] = function(i) {
        return typeof i === t || "a" + (e < 1 ? "n " : " ") + t
    }
}
);
const Xg = {};
Il.transitional = function(e, r, i) {
    function a(u, c) {
        return "[Axios v" + X0 + "] Transitional option '" + u + "'" + c + (i ? ". " + i : "")
    }
    return (u, c, f) => {
        if (e === !1)
            throw new Se(a(c, " has been removed" + (r ? " in " + r : "")),Se.ERR_DEPRECATED);
        return r && !Xg[c] && (Xg[c] = !0,
        console.warn(a(c, " has been deprecated since v" + r + " and will be removed in the near future"))),
        e ? e(u, c, f) : !0
    }
}
;
Il.spelling = function(e) {
    return (r, i) => (console.warn(`${i} is likely a misspelling of ${e}`),
    !0)
}
;
function iC(t, e, r) {
    if (typeof t != "object")
        throw new Se("options must be an object",Se.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(t);
    let a = i.length;
    for (; a-- > 0; ) {
        const u = i[a]
          , c = e[u];
        if (c) {
            const f = t[u]
              , h = f === void 0 || c(f, u, t);
            if (h !== !0)
                throw new Se("option " + u + " must be " + h,Se.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (r !== !0)
            throw new Se("Unknown option " + u,Se.ERR_BAD_OPTION)
    }
}
const ul = {
    assertOptions: iC,
    validators: Il
}
  , vn = ul.validators;
let rs = class {
    constructor(e) {
        this.defaults = e || {},
        this.interceptors = {
            request: new Vg,
            response: new Vg
        }
    }
    async request(e, r) {
        try {
            return await this._request(e, r)
        } catch (i) {
            if (i instanceof Error) {
                let a = {};
                Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error;
                const u = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? u && !String(i.stack).endsWith(u.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + u) : i.stack = u
                } catch {}
            }
            throw i
        }
    }
    _request(e, r) {
        typeof e == "string" ? (r = r || {},
        r.url = e) : r = e || {},
        r = os(this.defaults, r);
        const {transitional: i, paramsSerializer: a, headers: u} = r;
        i !== void 0 && ul.assertOptions(i, {
            silentJSONParsing: vn.transitional(vn.boolean),
            forcedJSONParsing: vn.transitional(vn.boolean),
            clarifyTimeoutError: vn.transitional(vn.boolean)
        }, !1),
        a != null && (F.isFunction(a) ? r.paramsSerializer = {
            serialize: a
        } : ul.assertOptions(a, {
            encode: vn.function,
            serialize: vn.function
        }, !0)),
        r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0),
        ul.assertOptions(r, {
            baseUrl: vn.spelling("baseURL"),
            withXsrfToken: vn.spelling("withXSRFToken")
        }, !0),
        r.method = (r.method || this.defaults.method || "get").toLowerCase();
        let c = u && F.merge(u.common, u[r.method]);
        u && F.forEach(["delete", "get", "head", "post", "put", "patch", "common"], x => {
            delete u[x]
        }
        ),
        r.headers = Lt.concat(c, u);
        const f = [];
        let h = !0;
        this.interceptors.request.forEach(function(b) {
            typeof b.runWhen == "function" && b.runWhen(r) === !1 || (h = h && b.synchronous,
            f.unshift(b.fulfilled, b.rejected))
        });
        const m = [];
        this.interceptors.response.forEach(function(b) {
            m.push(b.fulfilled, b.rejected)
        });
        let g, y = 0, w;
        if (!h) {
            const x = [Yg.bind(this), void 0];
            for (x.unshift(...f),
            x.push(...m),
            w = x.length,
            g = Promise.resolve(r); y < w; )
                g = g.then(x[y++], x[y++]);
            return g
        }
        w = f.length;
        let k = r;
        for (; y < w; ) {
            const x = f[y++]
              , b = f[y++];
            try {
                k = x(k)
            } catch (S) {
                b.call(this, S);
                break
            }
        }
        try {
            g = Yg.call(this, k)
        } catch (x) {
            return Promise.reject(x)
        }
        for (y = 0,
        w = m.length; y < w; )
            g = g.then(m[y++], m[y++]);
        return g
    }
    getUri(e) {
        e = os(this.defaults, e);
        const r = K0(e.baseURL, e.url, e.allowAbsoluteUrls);
        return z0(r, e.params, e.paramsSerializer)
    }
}
;
F.forEach(["delete", "get", "head", "options"], function(e) {
    rs.prototype[e] = function(r, i) {
        return this.request(os(i || {}, {
            method: e,
            url: r,
            data: (i || {}).data
        }))
    }
});
F.forEach(["post", "put", "patch"], function(e) {
    function r(i) {
        return function(u, c, f) {
            return this.request(os(f || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: u,
                data: c
            }))
        }
    }
    rs.prototype[e] = r(),
    rs.prototype[e + "Form"] = r(!0)
});
let oC = class J0 {
    constructor(e) {
        if (typeof e != "function")
            throw new TypeError("executor must be a function.");
        let r;
        this.promise = new Promise(function(u) {
            r = u
        }
        );
        const i = this;
        this.promise.then(a => {
            if (!i._listeners)
                return;
            let u = i._listeners.length;
            for (; u-- > 0; )
                i._listeners[u](a);
            i._listeners = null
        }
        ),
        this.promise.then = a => {
            let u;
            const c = new Promise(f => {
                i.subscribe(f),
                u = f
            }
            ).then(a);
            return c.cancel = function() {
                i.unsubscribe(u)
            }
            ,
            c
        }
        ,
        e(function(u, c, f) {
            i.reason || (i.reason = new li(u,c,f),
            r(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners)
            return;
        const r = this._listeners.indexOf(e);
        r !== -1 && this._listeners.splice(r, 1)
    }
    toAbortSignal() {
        const e = new AbortController
          , r = i => {
            e.abort(i)
        }
        ;
        return this.subscribe(r),
        e.signal.unsubscribe = () => this.unsubscribe(r),
        e.signal
    }
    static source() {
        let e;
        return {
            token: new J0(function(a) {
                e = a
            }
            ),
            cancel: e
        }
    }
}
;
function aC(t) {
    return function(r) {
        return t.apply(null, r)
    }
}
function lC(t) {
    return F.isObject(t) && t.isAxiosError === !0
}
const Ud = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Ud).forEach( ([t,e]) => {
    Ud[e] = t
}
);
function Z0(t) {
    const e = new rs(t)
      , r = A0(rs.prototype.request, e);
    return F.extend(r, rs.prototype, e, {
        allOwnKeys: !0
    }),
    F.extend(r, e, null, {
        allOwnKeys: !0
    }),
    r.create = function(a) {
        return Z0(os(t, a))
    }
    ,
    r
}
const Xe = Z0(Oo);
Xe.Axios = rs;
Xe.CanceledError = li;
Xe.CancelToken = oC;
Xe.isCancel = q0;
Xe.VERSION = X0;
Xe.toFormData = jl;
Xe.AxiosError = Se;
Xe.Cancel = Xe.CanceledError;
Xe.all = function(e) {
    return Promise.all(e)
}
;
Xe.spread = aC;
Xe.isAxiosError = lC;
Xe.mergeConfig = os;
Xe.AxiosHeaders = Lt;
Xe.formToJSON = t => H0(F.isHTMLForm(t) ? new FormData(t) : t);
Xe.getAdapter = Y0.getAdapter;
Xe.HttpStatusCode = Ud;
Xe.default = Xe;
const {Axios: GN, AxiosError: YN, CanceledError: XN, isCancel: JN, CancelToken: ZN, VERSION: eO, all: tO, Cancel: nO, isAxiosError: rO, spread: sO, toFormData: iO, AxiosHeaders: oO, HttpStatusCode: aO, formToJSON: lO, getAdapter: uO, mergeConfig: cO} = Xe
  , uC = typeof window > "u"
  , Jg = !uC && window.self !== window.top
  , Jc = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  , ct = [];
for (let t = 0; t < 256; ++t)
    ct.push((t + 256).toString(16).slice(1));
function cC(t, e=0) {
    return (ct[t[e + 0]] + ct[t[e + 1]] + ct[t[e + 2]] + ct[t[e + 3]] + "-" + ct[t[e + 4]] + ct[t[e + 5]] + "-" + ct[t[e + 6]] + ct[t[e + 7]] + "-" + ct[t[e + 8]] + ct[t[e + 9]] + "-" + ct[t[e + 10]] + ct[t[e + 11]] + ct[t[e + 12]] + ct[t[e + 13]] + ct[t[e + 14]] + ct[t[e + 15]]).toLowerCase()
}
let Zc;
const dC = new Uint8Array(16);
function fC() {
    if (!Zc) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        Zc = crypto.getRandomValues.bind(crypto)
    }
    return Zc(dC)
}
const hC = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , Zg = {
    randomUUID: hC
};
function pC(t, e, r) {
    var a;
    t = t || {};
    const i = t.random ?? ((a = t.rng) == null ? void 0 : a.call(t)) ?? fC();
    if (i.length < 16)
        throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64,
    i[8] = i[8] & 63 | 128,
    cC(i)
}
function mC(t, e, r) {
    return Zg.randomUUID && !t ? Zg.randomUUID() : pC(t)
}
class gC extends Error {
    constructor(e, r, i, a, u) {
        super(e),
        this.name = "Base44Error",
        this.status = r,
        this.code = i,
        this.data = a,
        this.originalError = u
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}
function so({baseURL: t, headers: e={}, token: r, interceptResponses: i=!0, onError: a}) {
    const u = Xe.create({
        baseURL: t,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...e
        }
    });
    return r && (u.defaults.headers.common.Authorization = `Bearer ${r}`),
    u.interceptors.request.use(c => {
        typeof window < "u" && c.headers.set("X-Origin-URL", window.location.href);
        const f = mC();
        if (c.requestId = f,
        Jg)
            try {
                window.parent.postMessage({
                    type: "api-request-start",
                    requestId: f,
                    data: {
                        url: t + c.url,
                        method: c.method,
                        body: c.data instanceof FormData ? "[FormData object]" : c.data
                    }
                }, "*")
            } catch {}
        return c
    }
    ),
    i && u.interceptors.response.use(c => {
        var f;
        const h = (f = c.config) === null || f === void 0 ? void 0 : f.requestId;
        try {
            Jg && h && window.parent.postMessage({
                type: "api-request-end",
                requestId: h,
                data: {
                    statusCode: c.status,
                    response: c.data
                }
            }, "*")
        } catch {}
        return c.data
    }
    , c => {
        var f, h, m, g, y, w, k, x;
        const b = ((h = (f = c.response) === null || f === void 0 ? void 0 : f.data) === null || h === void 0 ? void 0 : h.message) || ((g = (m = c.response) === null || m === void 0 ? void 0 : m.data) === null || g === void 0 ? void 0 : g.detail) || c.message
          , S = new gC(b,(y = c.response) === null || y === void 0 ? void 0 : y.status,(k = (w = c.response) === null || w === void 0 ? void 0 : w.data) === null || k === void 0 ? void 0 : k.code,(x = c.response) === null || x === void 0 ? void 0 : x.data,c);
        return a == null || a(S),
        Promise.reject(S)
    }
    ),
    u
}
function ey(t) {
    const {axios: e, appId: r, getSocket: i} = t;
    return new Proxy({},{
        get(a, u) {
            if (!(typeof u != "string" || u === "then" || u.startsWith("_")))
                return vC(e, r, u, i)
        }
    })
}
function yC(t) {
    var e;
    try {
        const r = JSON.parse(t);
        return {
            type: r.type,
            data: r.data,
            id: r.id || ((e = r.data) === null || e === void 0 ? void 0 : e.id),
            timestamp: r.timestamp || new Date().toISOString()
        }
    } catch (r) {
        return console.warn("[Base44 SDK] Failed to parse realtime message:", r),
        null
    }
}
function vC(t, e, r, i) {
    const a = `/apps/${e}/entities/${r}`;
    return {
        async list(u, c, f, h) {
            const m = {};
            return u && (m.sort = u),
            c && (m.limit = c),
            f && (m.skip = f),
            h && (m.fields = Array.isArray(h) ? h.join(",") : h),
            t.get(a, {
                params: m
            })
        },
        async filter(u, c, f, h, m) {
            const g = {
                q: JSON.stringify(u)
            };
            return c && (g.sort = c),
            f && (g.limit = f),
            h && (g.skip = h),
            m && (g.fields = Array.isArray(m) ? m.join(",") : m),
            t.get(a, {
                params: g
            })
        },
        async get(u) {
            return t.get(`${a}/${u}`)
        },
        async create(u) {
            return t.post(a, u)
        },
        async update(u, c) {
            return t.put(`${a}/${u}`, c)
        },
        async delete(u) {
            return t.delete(`${a}/${u}`)
        },
        async deleteMany(u) {
            return t.delete(a, {
                data: u
            })
        },
        async bulkCreate(u) {
            return t.post(`${a}/bulk`, u)
        },
        async importEntities(u) {
            const c = new FormData;
            return c.append("file", u, u.name),
            t.post(`${a}/import`, c, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
        subscribe(u) {
            const c = `entities:${e}:${r}`;
            return i().subscribeToRoom(c, {
                update_model: m => {
                    const g = yC(m.data);
                    if (g)
                        try {
                            u(g)
                        } catch (y) {
                            console.error("[Base44 SDK] Subscription callback error:", y)
                        }
                }
            })
        }
    }
}
function wC(t, e) {
    return {
        async call(r, i, a) {
            if (!(r != null && r.trim()))
                throw new Error("Integration slug is required and cannot be empty");
            if (!(i != null && i.trim()))
                throw new Error("Operation ID is required and cannot be empty");
            const {pathParams: u, queryParams: c, ...f} = a ?? {}
              , h = {
                ...f,
                ...u && {
                    path_params: u
                },
                ...c && {
                    query_params: c
                }
            };
            return await t.post(`/apps/${e}/integrations/custom/${r}/${i}`, h)
        }
    }
}
function ty(t, e) {
    const r = wC(t, e);
    return new Proxy({},{
        get(i, a) {
            if (!(typeof a != "string" || a === "then" || a.startsWith("_")))
                return a === "custom" ? r : new Proxy({},{
                    get(u, c) {
                        if (!(typeof c != "string" || c === "then" || c.startsWith("_")))
                            return async f => {
                                if (typeof f == "string")
                                    throw new Error(`Integration ${c} must receive an object with named parameters, received: ${f}`);
                                let h, m;
                                return f instanceof FormData || f && Object.values(f).some(g => g instanceof File) ? (h = new FormData,
                                Object.keys(f).forEach(g => {
                                    f[g]instanceof File ? h.append(g, f[g], f[g].name) : typeof f[g] == "object" && f[g] !== null ? h.append(g, JSON.stringify(f[g])) : h.append(g, f[g])
                                }
                                ),
                                m = "multipart/form-data") : (h = f,
                                m = "application/json"),
                                a === "Core" ? t.post(`/apps/${e}/integration-endpoints/Core/${c}`, h || f, {
                                    headers: {
                                        "Content-Type": m
                                    }
                                }) : t.post(`/apps/${e}/integration-endpoints/installable/${a}/integration-endpoints/${c}`, h || f, {
                                    headers: {
                                        "Content-Type": m
                                    }
                                })
                            }
                    }
                })
        }
    })
}
function xC(t, e, r, i) {
    return {
        async me() {
            return t.get(`/apps/${r}/entities/User/me`)
        },
        async updateMe(a) {
            return t.put(`/apps/${r}/entities/User/me`, a)
        },
        redirectToLogin(a) {
            if (typeof window > "u")
                throw new Error("Login method can only be used in a browser environment");
            const u = a ? new URL(a,window.location.origin).toString() : window.location.href
              , c = `${i.appBaseUrl}/login?from_url=${encodeURIComponent(u)}`;
            window.location.href = c
        },
        loginWithProvider(a, u="/") {
            const c = new URL(u,window.location.origin).toString()
              , f = `app_id=${r}&from_url=${encodeURIComponent(c)}`;
            let h;
            a === "sso" ? h = `/apps/${r}/auth/sso/login` : h = `/apps/auth${a === "google" ? "" : `/${a}`}/login`;
            const m = `${i.appBaseUrl}/api${h}?${f}`;
            window.location.href = m
        },
        logout(a) {
            if (delete t.defaults.headers.common.Authorization,
            typeof window < "u") {
                if (window.localStorage)
                    try {
                        window.localStorage.removeItem("base44_access_token"),
                        window.localStorage.removeItem("token")
                    } catch (f) {
                        console.error("Failed to remove token from localStorage:", f)
                    }
                const u = a || window.location.href
                  , c = `${i.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(u)}`;
                window.location.href = c
            }
        },
        setToken(a, u=!0) {
            if (a && (t.defaults.headers.common.Authorization = `Bearer ${a}`,
            e.defaults.headers.common.Authorization = `Bearer ${a}`,
            u && typeof window < "u" && window.localStorage))
                try {
                    window.localStorage.setItem("base44_access_token", a),
                    window.localStorage.setItem("token", a)
                } catch (c) {
                    console.error("Failed to save token to localStorage:", c)
                }
        },
        async loginViaEmailPassword(a, u, c) {
            var f;
            try {
                const h = await t.post(`/apps/${r}/auth/login`, {
                    email: a,
                    password: u,
                    ...c && {
                        turnstile_token: c
                    }
                })
                  , {access_token: m, user: g} = h;
                return m && this.setToken(m),
                {
                    access_token: m,
                    user: g
                }
            } catch (h) {
                throw ((f = h.response) === null || f === void 0 ? void 0 : f.status) === 401 && await this.logout(),
                h
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(),
                !0
            } catch {
                return !1
            }
        },
        inviteUser(a, u) {
            return t.post(`/apps/${r}/users/invite-user`, {
                user_email: a,
                role: u
            })
        },
        register(a) {
            return t.post(`/apps/${r}/auth/register`, a)
        },
        verifyOtp({email: a, otpCode: u}) {
            return t.post(`/apps/${r}/auth/verify-otp`, {
                email: a,
                otp_code: u
            })
        },
        resendOtp(a) {
            return t.post(`/apps/${r}/auth/resend-otp`, {
                email: a
            })
        },
        resetPasswordRequest(a) {
            return t.post(`/apps/${r}/auth/reset-password-request`, {
                email: a
            })
        },
        resetPassword({resetToken: a, newPassword: u}) {
            return t.post(`/apps/${r}/auth/reset-password`, {
                reset_token: a,
                new_password: u
            })
        },
        changePassword({userId: a, currentPassword: u, newPassword: c}) {
            return t.post(`/apps/${r}/auth/change-password`, {
                user_id: a,
                current_password: u,
                new_password: c
            })
        }
    }
}
function SC(t, e, r) {
    return {
        async getAccessToken(i) {
            const a = `/apps/${e}/auth/sso/accesstoken/${i}`
              , u = {};
            return r && (u["on-behalf-of"] = `Bearer ${r}`),
            t.get(a, {
                headers: u
            })
        }
    }
}
function bC(t, e) {
    return {
        async getAccessToken(r) {
            if (!r || typeof r != "string")
                throw new Error("Integration type is required and must be a string");
            return (await t.get(`/apps/${e}/external-auth/tokens/${r}`)).access_token
        },
        async getConnection(r) {
            var i;
            if (!r || typeof r != "string")
                throw new Error("Integration type is required and must be a string");
            const u = await t.get(`/apps/${e}/external-auth/tokens/${r}`);
            return {
                accessToken: u.access_token,
                connectionConfig: (i = u.connection_config) !== null && i !== void 0 ? i : null
            }
        }
    }
}
function kf(t={}) {
    const {storageKey: e="base44_access_token", paramName: r="access_token", saveToStorage: i=!0, removeFromUrl: a=!0} = t;
    let u = null;
    if (typeof window < "u" && window.location)
        try {
            const c = new URLSearchParams(window.location.search);
            if (u = c.get(r),
            u) {
                if (i && EC(u, {
                    storageKey: e
                }),
                a) {
                    c.delete(r);
                    const f = `${window.location.pathname}${c.toString() ? `?${c.toString()}` : ""}${window.location.hash}`;
                    window.history.replaceState({}, document.title, f)
                }
                return u
            }
        } catch (c) {
            console.error("Error retrieving token from URL:", c)
        }
    if (typeof window < "u" && window.localStorage)
        try {
            return u = window.localStorage.getItem(e),
            u
        } catch (c) {
            console.error("Error retrieving token from local storage:", c)
        }
    return null
}
function EC(t, e) {
    const {storageKey: r="base44_access_token"} = e;
    if (typeof window > "u" || !window.localStorage || !t)
        return !1;
    try {
        return window.localStorage.setItem(r, t),
        window.localStorage.setItem("token", t),
        !0
    } catch (i) {
        return console.error("Error saving token to local storage:", i),
        !1
    }
}
function ny(t, e) {
    return {
        async invoke(r, i) {
            if (typeof i == "string")
                throw new Error(`Function ${r} must receive an object with named parameters, received: ${i}`);
            let a, u;
            return i instanceof FormData || i && Object.values(i).some(c => c instanceof File) ? (a = new FormData,
            Object.keys(i).forEach(c => {
                i[c]instanceof File ? a.append(c, i[c], i[c].name) : typeof i[c] == "object" && i[c] !== null ? a.append(c, JSON.stringify(i[c])) : a.append(c, i[c])
            }
            ),
            u = "multipart/form-data") : (a = i,
            u = "application/json"),
            t.post(`/apps/${e}/functions/${r}`, a || i, {
                headers: {
                    "Content-Type": u
                }
            })
        }
    }
}
function ry({axios: t, getSocket: e, appId: r, serverUrl: i, token: a}) {
    const u = `/apps/${r}/agents`
      , c = {}
      , f = () => t.get(`${u}/conversations`)
      , h = x => t.get(`${u}/conversations/${x}`);
    return {
        getConversations: f,
        getConversation: h,
        listConversations: x => t.get(`${u}/conversations`, {
            params: x
        }),
        createConversation: x => t.post(`${u}/conversations`, x),
        addMessage: async (x, b) => t.post(`${u}/conversations/v2/${x.id}/messages`, b),
        subscribeToConversation: (x, b) => {
            const S = `/agent-conversations/${x}`
              , R = e()
              , B = h(x).then(M => (c[x] = M,
            M));
            return R.subscribeToRoom(S, {
                connect: () => {}
                ,
                update_model: async ({data: M}) => {
                    const j = JSON.parse(M);
                    if (j._message) {
                        await B;
                        const U = j._message
                          , Y = c[x];
                        if (Y) {
                            const ee = Y.messages || []
                              , N = ee.findIndex(Q => Q.id === U.id)
                              , q = N !== -1 ? ee.map( (Q, J) => J === N ? U : Q) : [...ee, U];
                            c[x] = {
                                ...Y,
                                messages: q
                            },
                            b == null || b(c[x])
                        }
                    }
                }
            })
        }
        ,
        getWhatsAppConnectURL: x => {
            const b = `${i}/api/apps/${r}/agents/${encodeURIComponent(x)}/whatsapp`
              , S = a ?? kf();
            return S ? `${b}?token=${S}` : b
        }
    }
}
function sy(t, e) {
    const r = `/app-logs/${e}`;
    return {
        async logUserInApp(i) {
            await t.post(`${r}/log-user-in-app/${i}`)
        },
        async fetchLogs(i={}) {
            return await t.get(r, {
                params: i
            })
        },
        async getStats(i={}) {
            return await t.get(`${r}/stats`, {
                params: i
            })
        }
    }
}
function kC(t, e) {
    return {
        async inviteUser(r, i) {
            if (i !== "user" && i !== "admin")
                throw new Error(`Invalid role: "${i}". Role must be either "user" or "admin".`);
            return await t.post(`/apps/${e}/runtime/users/invite-user`, {
                user_email: r,
                role: i
            })
        }
    }
}
const Cn = Object.create(null);
Cn.open = "0";
Cn.close = "1";
Cn.ping = "2";
Cn.pong = "3";
Cn.message = "4";
Cn.upgrade = "5";
Cn.noop = "6";
const cl = Object.create(null);
Object.keys(Cn).forEach(t => {
    cl[Cn[t]] = t
}
);
const zd = {
    type: "error",
    data: "parser error"
}
  , ew = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
  , tw = typeof ArrayBuffer == "function"
  , nw = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer
  , Tf = ({type: t, data: e}, r, i) => ew && e instanceof Blob ? r ? i(e) : iy(e, i) : tw && (e instanceof ArrayBuffer || nw(e)) ? r ? i(e) : iy(new Blob([e]), i) : i(Cn[t] + (e || ""))
  , iy = (t, e) => {
    const r = new FileReader;
    return r.onload = function() {
        const i = r.result.split(",")[1];
        e("b" + (i || ""))
    }
    ,
    r.readAsDataURL(t)
}
;
function oy(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer,t.byteOffset,t.byteLength)
}
let ed;
function TC(t, e) {
    if (ew && t.data instanceof Blob)
        return t.data.arrayBuffer().then(oy).then(e);
    if (tw && (t.data instanceof ArrayBuffer || nw(t.data)))
        return e(oy(t.data));
    Tf(t, !1, r => {
        ed || (ed = new TextEncoder),
        e(ed.encode(r))
    }
    )
}
const ay = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , io = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < ay.length; t++)
    io[ay.charCodeAt(t)] = t;
const CC = t => {
    let e = t.length * .75, r = t.length, i, a = 0, u, c, f, h;
    t[t.length - 1] === "=" && (e--,
    t[t.length - 2] === "=" && e--);
    const m = new ArrayBuffer(e)
      , g = new Uint8Array(m);
    for (i = 0; i < r; i += 4)
        u = io[t.charCodeAt(i)],
        c = io[t.charCodeAt(i + 1)],
        f = io[t.charCodeAt(i + 2)],
        h = io[t.charCodeAt(i + 3)],
        g[a++] = u << 2 | c >> 4,
        g[a++] = (c & 15) << 4 | f >> 2,
        g[a++] = (f & 3) << 6 | h & 63;
    return m
}
  , PC = typeof ArrayBuffer == "function"
  , Cf = (t, e) => {
    if (typeof t != "string")
        return {
            type: "message",
            data: rw(t, e)
        };
    const r = t.charAt(0);
    return r === "b" ? {
        type: "message",
        data: _C(t.substring(1), e)
    } : cl[r] ? t.length > 1 ? {
        type: cl[r],
        data: t.substring(1)
    } : {
        type: cl[r]
    } : zd
}
  , _C = (t, e) => {
    if (PC) {
        const r = CC(t);
        return rw(r, e)
    } else
        return {
            base64: !0,
            data: t
        }
}
  , rw = (t, e) => {
    switch (e) {
    case "blob":
        return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
        return t instanceof ArrayBuffer ? t : t.buffer
    }
}
  , sw = ""
  , RC = (t, e) => {
    const r = t.length
      , i = new Array(r);
    let a = 0;
    t.forEach( (u, c) => {
        Tf(u, !1, f => {
            i[c] = f,
            ++a === r && e(i.join(sw))
        }
        )
    }
    )
}
  , AC = (t, e) => {
    const r = t.split(sw)
      , i = [];
    for (let a = 0; a < r.length; a++) {
        const u = Cf(r[a], e);
        if (i.push(u),
        u.type === "error")
            break
    }
    return i
}
;
function NC() {
    return new TransformStream({
        transform(t, e) {
            TC(t, r => {
                const i = r.length;
                let a;
                if (i < 126)
                    a = new Uint8Array(1),
                    new DataView(a.buffer).setUint8(0, i);
                else if (i < 65536) {
                    a = new Uint8Array(3);
                    const u = new DataView(a.buffer);
                    u.setUint8(0, 126),
                    u.setUint16(1, i)
                } else {
                    a = new Uint8Array(9);
                    const u = new DataView(a.buffer);
                    u.setUint8(0, 127),
                    u.setBigUint64(1, BigInt(i))
                }
                t.data && typeof t.data != "string" && (a[0] |= 128),
                e.enqueue(a),
                e.enqueue(r)
            }
            )
        }
    })
}
let td;
function Za(t) {
    return t.reduce( (e, r) => e + r.length, 0)
}
function el(t, e) {
    if (t[0].length === e)
        return t.shift();
    const r = new Uint8Array(e);
    let i = 0;
    for (let a = 0; a < e; a++)
        r[a] = t[0][i++],
        i === t[0].length && (t.shift(),
        i = 0);
    return t.length && i < t[0].length && (t[0] = t[0].slice(i)),
    r
}
function OC(t, e) {
    td || (td = new TextDecoder);
    const r = [];
    let i = 0
      , a = -1
      , u = !1;
    return new TransformStream({
        transform(c, f) {
            for (r.push(c); ; ) {
                if (i === 0) {
                    if (Za(r) < 1)
                        break;
                    const h = el(r, 1);
                    u = (h[0] & 128) === 128,
                    a = h[0] & 127,
                    a < 126 ? i = 3 : a === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (Za(r) < 2)
                        break;
                    const h = el(r, 2);
                    a = new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),
                    i = 3
                } else if (i === 2) {
                    if (Za(r) < 8)
                        break;
                    const h = el(r, 8)
                      , m = new DataView(h.buffer,h.byteOffset,h.length)
                      , g = m.getUint32(0);
                    if (g > Math.pow(2, 21) - 1) {
                        f.enqueue(zd);
                        break
                    }
                    a = g * Math.pow(2, 32) + m.getUint32(4),
                    i = 3
                } else {
                    if (Za(r) < a)
                        break;
                    const h = el(r, a);
                    f.enqueue(Cf(u ? h : td.decode(h), e)),
                    i = 0
                }
                if (a === 0 || a > t) {
                    f.enqueue(zd);
                    break
                }
            }
        }
    })
}
const iw = 4;
function Ze(t) {
    if (t)
        return LC(t)
}
function LC(t) {
    for (var e in Ze.prototype)
        t[e] = Ze.prototype[e];
    return t
}
Ze.prototype.on = Ze.prototype.addEventListener = function(t, e) {
    return this._callbacks = this._callbacks || {},
    (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
    this
}
;
Ze.prototype.once = function(t, e) {
    function r() {
        this.off(t, r),
        e.apply(this, arguments)
    }
    return r.fn = e,
    this.on(t, r),
    this
}
;
Ze.prototype.off = Ze.prototype.removeListener = Ze.prototype.removeAllListeners = Ze.prototype.removeEventListener = function(t, e) {
    if (this._callbacks = this._callbacks || {},
    arguments.length == 0)
        return this._callbacks = {},
        this;
    var r = this._callbacks["$" + t];
    if (!r)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + t],
        this;
    for (var i, a = 0; a < r.length; a++)
        if (i = r[a],
        i === e || i.fn === e) {
            r.splice(a, 1);
            break
        }
    return r.length === 0 && delete this._callbacks["$" + t],
    this
}
;
Ze.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], i = 1; i < arguments.length; i++)
        e[i - 1] = arguments[i];
    if (r) {
        r = r.slice(0);
        for (var i = 0, a = r.length; i < a; ++i)
            r[i].apply(this, e)
    }
    return this
}
;
Ze.prototype.emitReserved = Ze.prototype.emit;
Ze.prototype.listeners = function(t) {
    return this._callbacks = this._callbacks || {},
    this._callbacks["$" + t] || []
}
;
Ze.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length
}
;
const Fl = typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, r) => r(e, 0)
  , Zt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
  , DC = "arraybuffer";
function ow(t, ...e) {
    return e.reduce( (r, i) => (t.hasOwnProperty(i) && (r[i] = t[i]),
    r), {})
}
const MC = Zt.setTimeout
  , jC = Zt.clearTimeout;
function Vl(t, e) {
    e.useNativeTimers ? (t.setTimeoutFn = MC.bind(Zt),
    t.clearTimeoutFn = jC.bind(Zt)) : (t.setTimeoutFn = Zt.setTimeout.bind(Zt),
    t.clearTimeoutFn = Zt.clearTimeout.bind(Zt))
}
const IC = 1.33;
function FC(t) {
    return typeof t == "string" ? VC(t) : Math.ceil((t.byteLength || t.size) * IC)
}
function VC(t) {
    let e = 0
      , r = 0;
    for (let i = 0, a = t.length; i < a; i++)
        e = t.charCodeAt(i),
        e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (i++,
        r += 4);
    return r
}
function aw() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function BC(t) {
    let e = "";
    for (let r in t)
        t.hasOwnProperty(r) && (e.length && (e += "&"),
        e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
    return e
}
function UC(t) {
    let e = {}
      , r = t.split("&");
    for (let i = 0, a = r.length; i < a; i++) {
        let u = r[i].split("=");
        e[decodeURIComponent(u[0])] = decodeURIComponent(u[1])
    }
    return e
}
class zC extends Error {
    constructor(e, r, i) {
        super(e),
        this.description = r,
        this.context = i,
        this.type = "TransportError"
    }
}
class Pf extends Ze {
    constructor(e) {
        super(),
        this.writable = !1,
        Vl(this, e),
        this.opts = e,
        this.query = e.query,
        this.socket = e.socket,
        this.supportsBinary = !e.forceBase64
    }
    onError(e, r, i) {
        return super.emitReserved("error", new zC(e,r,i)),
        this
    }
    open() {
        return this.readyState = "opening",
        this.doOpen(),
        this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    send(e) {
        this.readyState === "open" && this.write(e)
    }
    onOpen() {
        this.readyState = "open",
        this.writable = !0,
        super.emitReserved("open")
    }
    onData(e) {
        const r = Cf(e, this.socket.binaryType);
        this.onPacket(r)
    }
    onPacket(e) {
        super.emitReserved("packet", e)
    }
    onClose(e) {
        this.readyState = "closed",
        super.emitReserved("close", e)
    }
    pause(e) {}
    createUri(e, r={}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r)
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(e) {
        const r = BC(e);
        return r.length ? "?" + r : ""
    }
}
class $C extends Pf {
    constructor() {
        super(...arguments),
        this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(e) {
        this.readyState = "pausing";
        const r = () => {
            this.readyState = "paused",
            e()
        }
        ;
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++,
            this.once("pollComplete", function() {
                --i || r()
            })),
            this.writable || (i++,
            this.once("drain", function() {
                --i || r()
            }))
        } else
            r()
    }
    _poll() {
        this._polling = !0,
        this.doPoll(),
        this.emitReserved("poll")
    }
    onData(e) {
        const r = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(),
            i.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                !1;
            this.onPacket(i)
        }
        ;
        AC(e, this.socket.binaryType).forEach(r),
        this.readyState !== "closed" && (this._polling = !1,
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll())
    }
    doClose() {
        const e = () => {
            this.write([{
                type: "close"
            }])
        }
        ;
        this.readyState === "open" ? e() : this.once("open", e)
    }
    write(e) {
        this.writable = !1,
        RC(e, r => {
            this.doWrite(r, () => {
                this.writable = !0,
                this.emitReserved("drain")
            }
            )
        }
        )
    }
    uri() {
        const e = this.opts.secure ? "https" : "http"
          , r = this.query || {};
        return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = aw()),
        !this.supportsBinary && !r.sid && (r.b64 = 1),
        this.createUri(e, r)
    }
}
let lw = !1;
try {
    lw = typeof XMLHttpRequest < "u" && "withCredentials"in new XMLHttpRequest
} catch {}
const HC = lw;
function qC() {}
class WC extends $C {
    constructor(e) {
        if (super(e),
        typeof location < "u") {
            const r = location.protocol === "https:";
            let i = location.port;
            i || (i = r ? "443" : "80"),
            this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port
        }
    }
    doWrite(e, r) {
        const i = this.request({
            method: "POST",
            data: e
        });
        i.on("success", r),
        i.on("error", (a, u) => {
            this.onError("xhr post error", a, u)
        }
        )
    }
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)),
        e.on("error", (r, i) => {
            this.onError("xhr poll error", r, i)
        }
        ),
        this.pollXhr = e
    }
}
class En extends Ze {
    constructor(e, r, i) {
        super(),
        this.createRequest = e,
        Vl(this, i),
        this._opts = i,
        this._method = i.method || "GET",
        this._uri = r,
        this._data = i.data !== void 0 ? i.data : null,
        this._create()
    }
    _create() {
        var e;
        const r = ow(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        r.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(r);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let a in this._opts.extraHeaders)
                        this._opts.extraHeaders.hasOwnProperty(a) && i.setRequestHeader(a, this._opts.extraHeaders[a])
                }
            } catch {}
            if (this._method === "POST")
                try {
                    i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}
            (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(i),
            "withCredentials"in i && (i.withCredentials = this._opts.withCredentials),
            this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
            i.onreadystatechange = () => {
                var a;
                i.readyState === 3 && ((a = this._opts.cookieJar) === null || a === void 0 || a.parseCookies(i.getResponseHeader("set-cookie"))),
                i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn( () => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }
                , 0))
            }
            ,
            i.send(this._data)
        } catch (a) {
            this.setTimeoutFn( () => {
                this._onError(a)
            }
            , 0);
            return
        }
        typeof document < "u" && (this._index = En.requestsCount++,
        En.requests[this._index] = this)
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr),
        this._cleanup(!0)
    }
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = qC,
            e)
                try {
                    this._xhr.abort()
                } catch {}
            typeof document < "u" && delete En.requests[this._index],
            this._xhr = null
        }
    }
    _onLoad() {
        const e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e),
        this.emitReserved("success"),
        this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
En.requestsCount = 0;
En.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", ly);
    else if (typeof addEventListener == "function") {
        const t = "onpagehide"in Zt ? "pagehide" : "unload";
        addEventListener(t, ly, !1)
    }
}
function ly() {
    for (let t in En.requests)
        En.requests.hasOwnProperty(t) && En.requests[t].abort()
}
const KC = (function() {
    const t = uw({
        xdomain: !1
    });
    return t && t.responseType !== null
}
)();
class QC extends WC {
    constructor(e) {
        super(e);
        const r = e && e.forceBase64;
        this.supportsBinary = KC && !r
    }
    request(e={}) {
        return Object.assign(e, {
            xd: this.xd
        }, this.opts),
        new En(uw,this.uri(),e)
    }
}
function uw(t) {
    const e = t.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || HC))
            return new XMLHttpRequest
    } catch {}
    if (!e)
        try {
            return new Zt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
const cw = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class GC extends Pf {
    get name() {
        return "websocket"
    }
    doOpen() {
        const e = this.uri()
          , r = this.opts.protocols
          , i = cw ? {} : ow(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, r, i)
        } catch (a) {
            return this.emitReserved("error", a)
        }
        this.ws.binaryType = this.socket.binaryType,
        this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
            this.onOpen()
        }
        ,
        this.ws.onclose = e => this.onClose({
            description: "websocket connection closed",
            context: e
        }),
        this.ws.onmessage = e => this.onData(e.data),
        this.ws.onerror = e => this.onError("websocket error", e)
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r]
              , a = r === e.length - 1;
            Tf(i, this.supportsBinary, u => {
                try {
                    this.doWrite(i, u)
                } catch {}
                a && Fl( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}
        ,
        this.ws.close(),
        this.ws = null)
    }
    uri() {
        const e = this.opts.secure ? "wss" : "ws"
          , r = this.query || {};
        return this.opts.timestampRequests && (r[this.opts.timestampParam] = aw()),
        this.supportsBinary || (r.b64 = 1),
        this.createUri(e, r)
    }
}
const nd = Zt.WebSocket || Zt.MozWebSocket;
class YC extends GC {
    createSocket(e, r, i) {
        return cw ? new nd(e,r,i) : r ? new nd(e,r) : new nd(e)
    }
    doWrite(e, r) {
        this.ws.send(r)
    }
}
class XC extends Pf {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
        } catch (e) {
            return this.emitReserved("error", e)
        }
        this._transport.closed.then( () => {
            this.onClose()
        }
        ).catch(e => {
            this.onError("webtransport error", e)
        }
        ),
        this._transport.ready.then( () => {
            this._transport.createBidirectionalStream().then(e => {
                const r = OC(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                  , i = e.readable.pipeThrough(r).getReader()
                  , a = NC();
                a.readable.pipeTo(e.writable),
                this._writer = a.writable.getWriter();
                const u = () => {
                    i.read().then( ({done: f, value: h}) => {
                        f || (this.onPacket(h),
                        u())
                    }
                    ).catch(f => {}
                    )
                }
                ;
                u();
                const c = {
                    type: "open"
                };
                this.query.sid && (c.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(c).then( () => this.onOpen())
            }
            )
        }
        )
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r]
              , a = r === e.length - 1;
            this._writer.write(i).then( () => {
                a && Fl( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close()
    }
}
const JC = {
    websocket: YC,
    webtransport: XC,
    polling: QC
}
  , ZC = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , eP = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function $d(t) {
    if (t.length > 8e3)
        throw "URI too long";
    const e = t
      , r = t.indexOf("[")
      , i = t.indexOf("]");
    r != -1 && i != -1 && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
    let a = ZC.exec(t || "")
      , u = {}
      , c = 14;
    for (; c--; )
        u[eP[c]] = a[c] || "";
    return r != -1 && i != -1 && (u.source = e,
    u.host = u.host.substring(1, u.host.length - 1).replace(/;/g, ":"),
    u.authority = u.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    u.ipv6uri = !0),
    u.pathNames = tP(u, u.path),
    u.queryKey = nP(u, u.query),
    u
}
function tP(t, e) {
    const r = /\/{2,9}/g
      , i = e.replace(r, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1),
    e.slice(-1) == "/" && i.splice(i.length - 1, 1),
    i
}
function nP(t, e) {
    const r = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, a, u) {
        a && (r[a] = u)
    }),
    r
}
const Hd = typeof addEventListener == "function" && typeof removeEventListener == "function"
  , dl = [];
Hd && addEventListener("offline", () => {
    dl.forEach(t => t())
}
, !1);
class Er extends Ze {
    constructor(e, r) {
        if (super(),
        this.binaryType = DC,
        this.writeBuffer = [],
        this._prevBufferLen = 0,
        this._pingInterval = -1,
        this._pingTimeout = -1,
        this._maxPayload = -1,
        this._pingTimeoutTime = 1 / 0,
        e && typeof e == "object" && (r = e,
        e = null),
        e) {
            const i = $d(e);
            r.hostname = i.host,
            r.secure = i.protocol === "https" || i.protocol === "wss",
            r.port = i.port,
            i.query && (r.query = i.query)
        } else
            r.host && (r.hostname = $d(r.host).host);
        Vl(this, r),
        this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:",
        r.hostname && !r.port && (r.port = this.secure ? "443" : "80"),
        this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"),
        this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
        this.transports = [],
        this._transportsByName = {},
        r.transports.forEach(i => {
            const a = i.prototype.name;
            this.transports.push(a),
            this._transportsByName[a] = i
        }
        ),
        this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, r),
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
        typeof this.opts.query == "string" && (this.opts.query = UC(this.opts.query)),
        Hd && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(),
            this.transport.close())
        }
        ,
        addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
        this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }
        ,
        dl.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open()
    }
    createTransport(e) {
        const r = Object.assign({}, this.opts.query);
        r.EIO = iw,
        r.transport = e,
        this.id && (r.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: r,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn( () => {
                this.emitReserved("error", "No transports available")
            }
            , 0);
            return
        }
        const e = this.opts.rememberUpgrade && Er.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const r = this.createTransport(e);
        r.open(),
        this.setTransport(r)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(),
        this.transport = e,
        e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", r => this._onClose("transport close", r))
    }
    onOpen() {
        this.readyState = "open",
        Er.priorWebsocketSuccess = this.transport.name === "websocket",
        this.emitReserved("open"),
        this.flush()
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", e),
            this.emitReserved("heartbeat"),
            e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "ping":
                this._sendPacket("pong"),
                this.emitReserved("ping"),
                this.emitReserved("pong"),
                this._resetPingTimeout();
                break;
            case "error":
                const r = new Error("server error");
                r.code = e.data,
                this._onError(r);
                break;
            case "message":
                this.emitReserved("data", e.data),
                this.emitReserved("message", e.data);
                break
            }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e),
        this.id = e.sid,
        this.transport.query.sid = e.sid,
        this._pingInterval = e.pingInterval,
        this._pingTimeout = e.pingTimeout,
        this._maxPayload = e.maxPayload,
        this.onOpen(),
        this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e,
        this._pingTimeoutTimer = this.setTimeoutFn( () => {
            this._onClose("ping timeout")
        }
        , e),
        this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen),
        this._prevBufferLen = 0,
        this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this._getWritablePackets();
            this.transport.send(e),
            this._prevBufferLen = e.length,
            this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
        let r = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const a = this.writeBuffer[i].data;
            if (a && (r += FC(a)),
            i > 0 && r > this._maxPayload)
                return this.writeBuffer.slice(0, i);
            r += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return !0;
        const e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0,
        Fl( () => {
            this._onClose("ping timeout")
        }
        , this.setTimeoutFn)),
        e
    }
    write(e, r, i) {
        return this._sendPacket("message", e, r, i),
        this
    }
    send(e, r, i) {
        return this._sendPacket("message", e, r, i),
        this
    }
    _sendPacket(e, r, i, a) {
        if (typeof r == "function" && (a = r,
        r = void 0),
        typeof i == "function" && (a = i,
        i = null),
        this.readyState === "closing" || this.readyState === "closed")
            return;
        i = i || {},
        i.compress = i.compress !== !1;
        const u = {
            type: e,
            data: r,
            options: i
        };
        this.emitReserved("packetCreate", u),
        this.writeBuffer.push(u),
        a && this.once("flush", a),
        this.flush()
    }
    close() {
        const e = () => {
            this._onClose("forced close"),
            this.transport.close()
        }
          , r = () => {
            this.off("upgrade", r),
            this.off("upgradeError", r),
            e()
        }
          , i = () => {
            this.once("upgrade", r),
            this.once("upgradeError", r)
        }
        ;
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
        this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : e()
        }
        ) : this.upgrading ? i() : e()),
        this
    }
    _onError(e) {
        if (Er.priorWebsocketSuccess = !1,
        this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
            return this.transports.shift(),
            this._open();
        this.emitReserved("error", e),
        this._onClose("transport error", e)
    }
    _onClose(e, r) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            Hd && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
            this._offlineEventListener)) {
                const i = dl.indexOf(this._offlineEventListener);
                i !== -1 && dl.splice(i, 1)
            }
            this.readyState = "closed",
            this.id = null,
            this.emitReserved("close", e, r),
            this.writeBuffer = [],
            this._prevBufferLen = 0
        }
    }
}
Er.protocol = iw;
class rP extends Er {
    constructor() {
        super(...arguments),
        this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
        this.readyState === "open" && this.opts.upgrade)
            for (let e = 0; e < this._upgrades.length; e++)
                this._probe(this._upgrades[e])
    }
    _probe(e) {
        let r = this.createTransport(e)
          , i = !1;
        Er.priorWebsocketSuccess = !1;
        const a = () => {
            i || (r.send([{
                type: "ping",
                data: "probe"
            }]),
            r.once("packet", y => {
                if (!i)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0,
                        this.emitReserved("upgrading", r),
                        !r)
                            return;
                        Er.priorWebsocketSuccess = r.name === "websocket",
                        this.transport.pause( () => {
                            i || this.readyState !== "closed" && (g(),
                            this.setTransport(r),
                            r.send([{
                                type: "upgrade"
                            }]),
                            this.emitReserved("upgrade", r),
                            r = null,
                            this.upgrading = !1,
                            this.flush())
                        }
                        )
                    } else {
                        const w = new Error("probe error");
                        w.transport = r.name,
                        this.emitReserved("upgradeError", w)
                    }
            }
            ))
        }
        ;
        function u() {
            i || (i = !0,
            g(),
            r.close(),
            r = null)
        }
        const c = y => {
            const w = new Error("probe error: " + y);
            w.transport = r.name,
            u(),
            this.emitReserved("upgradeError", w)
        }
        ;
        function f() {
            c("transport closed")
        }
        function h() {
            c("socket closed")
        }
        function m(y) {
            r && y.name !== r.name && u()
        }
        const g = () => {
            r.removeListener("open", a),
            r.removeListener("error", c),
            r.removeListener("close", f),
            this.off("close", h),
            this.off("upgrading", m)
        }
        ;
        r.once("open", a),
        r.once("error", c),
        r.once("close", f),
        this.once("close", h),
        this.once("upgrading", m),
        this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn( () => {
            i || r.open()
        }
        , 200) : r.open()
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades),
        super.onHandshake(e)
    }
    _filterUpgrades(e) {
        const r = [];
        for (let i = 0; i < e.length; i++)
            ~this.transports.indexOf(e[i]) && r.push(e[i]);
        return r
    }
}
let sP = class extends rP {
    constructor(e, r={}) {
        const i = typeof e == "object" ? e : r;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(a => JC[a]).filter(a => !!a)),
        super(e, i)
    }
}
;
function iP(t, e="", r) {
    let i = t;
    r = r || typeof location < "u" && location,
    t == null && (t = r.protocol + "//" + r.host),
    typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t),
    /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t),
    i = $d(t)),
    i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
    i.path = i.path || "/";
    const u = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + u + ":" + i.port + e,
    i.href = i.protocol + "://" + u + (r && r.port === i.port ? "" : ":" + i.port),
    i
}
const oP = typeof ArrayBuffer == "function"
  , aP = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
  , dw = Object.prototype.toString
  , lP = typeof Blob == "function" || typeof Blob < "u" && dw.call(Blob) === "[object BlobConstructor]"
  , uP = typeof File == "function" || typeof File < "u" && dw.call(File) === "[object FileConstructor]";
function _f(t) {
    return oP && (t instanceof ArrayBuffer || aP(t)) || lP && t instanceof Blob || uP && t instanceof File
}
function fl(t, e) {
    if (!t || typeof t != "object")
        return !1;
    if (Array.isArray(t)) {
        for (let r = 0, i = t.length; r < i; r++)
            if (fl(t[r]))
                return !0;
        return !1
    }
    if (_f(t))
        return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
        return fl(t.toJSON(), !0);
    for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r) && fl(t[r]))
            return !0;
    return !1
}
function cP(t) {
    const e = []
      , r = t.data
      , i = t;
    return i.data = qd(r, e),
    i.attachments = e.length,
    {
        packet: i,
        buffers: e
    }
}
function qd(t, e) {
    if (!t)
        return t;
    if (_f(t)) {
        const r = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(t),
        r
    } else if (Array.isArray(t)) {
        const r = new Array(t.length);
        for (let i = 0; i < t.length; i++)
            r[i] = qd(t[i], e);
        return r
    } else if (typeof t == "object" && !(t instanceof Date)) {
        const r = {};
        for (const i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (r[i] = qd(t[i], e));
        return r
    }
    return t
}
function dP(t, e) {
    return t.data = Wd(t.data, e),
    delete t.attachments,
    t
}
function Wd(t, e) {
    if (!t)
        return t;
    if (t && t._placeholder === !0) {
        if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
            return e[t.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(t))
        for (let r = 0; r < t.length; r++)
            t[r] = Wd(t[r], e);
    else if (typeof t == "object")
        for (const r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (t[r] = Wd(t[r], e));
    return t
}
const fP = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"]
  , hP = 5;
var Re;
(function(t) {
    t[t.CONNECT = 0] = "CONNECT",
    t[t.DISCONNECT = 1] = "DISCONNECT",
    t[t.EVENT = 2] = "EVENT",
    t[t.ACK = 3] = "ACK",
    t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR",
    t[t.BINARY_EVENT = 5] = "BINARY_EVENT",
    t[t.BINARY_ACK = 6] = "BINARY_ACK"
}
)(Re || (Re = {}));
class pP {
    constructor(e) {
        this.replacer = e
    }
    encode(e) {
        return (e.type === Re.EVENT || e.type === Re.ACK) && fl(e) ? this.encodeAsBinary({
            type: e.type === Re.EVENT ? Re.BINARY_EVENT : Re.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)]
    }
    encodeAsString(e) {
        let r = "" + e.type;
        return (e.type === Re.BINARY_EVENT || e.type === Re.BINARY_ACK) && (r += e.attachments + "-"),
        e.nsp && e.nsp !== "/" && (r += e.nsp + ","),
        e.id != null && (r += e.id),
        e.data != null && (r += JSON.stringify(e.data, this.replacer)),
        r
    }
    encodeAsBinary(e) {
        const r = cP(e)
          , i = this.encodeAsString(r.packet)
          , a = r.buffers;
        return a.unshift(i),
        a
    }
}
function uy(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
class Rf extends Ze {
    constructor(e) {
        super(),
        this.reviver = e
    }
    add(e) {
        let r;
        if (typeof e == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(e);
            const i = r.type === Re.BINARY_EVENT;
            i || r.type === Re.BINARY_ACK ? (r.type = i ? Re.EVENT : Re.ACK,
            this.reconstructor = new mP(r),
            r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r)
        } else if (_f(e) || e.base64)
            if (this.reconstructor)
                r = this.reconstructor.takeBinaryData(e),
                r && (this.reconstructor = null,
                super.emitReserved("decoded", r));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + e)
    }
    decodeString(e) {
        let r = 0;
        const i = {
            type: Number(e.charAt(0))
        };
        if (Re[i.type] === void 0)
            throw new Error("unknown packet type " + i.type);
        if (i.type === Re.BINARY_EVENT || i.type === Re.BINARY_ACK) {
            const u = r + 1;
            for (; e.charAt(++r) !== "-" && r != e.length; )
                ;
            const c = e.substring(u, r);
            if (c != Number(c) || e.charAt(r) !== "-")
                throw new Error("Illegal attachments");
            i.attachments = Number(c)
        }
        if (e.charAt(r + 1) === "/") {
            const u = r + 1;
            for (; ++r && !(e.charAt(r) === "," || r === e.length); )
                ;
            i.nsp = e.substring(u, r)
        } else
            i.nsp = "/";
        const a = e.charAt(r + 1);
        if (a !== "" && Number(a) == a) {
            const u = r + 1;
            for (; ++r; ) {
                const c = e.charAt(r);
                if (c == null || Number(c) != c) {
                    --r;
                    break
                }
                if (r === e.length)
                    break
            }
            i.id = Number(e.substring(u, r + 1))
        }
        if (e.charAt(++r)) {
            const u = this.tryParse(e.substr(r));
            if (Rf.isPayloadValid(i.type, u))
                i.data = u;
            else
                throw new Error("invalid payload")
        }
        return i
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(e, r) {
        switch (e) {
        case Re.CONNECT:
            return uy(r);
        case Re.DISCONNECT:
            return r === void 0;
        case Re.CONNECT_ERROR:
            return typeof r == "string" || uy(r);
        case Re.EVENT:
        case Re.BINARY_EVENT:
            return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && fP.indexOf(r[0]) === -1);
        case Re.ACK:
        case Re.BINARY_ACK:
            return Array.isArray(r)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
        this.reconstructor = null)
    }
}
class mP {
    constructor(e) {
        this.packet = e,
        this.buffers = [],
        this.reconPack = e
    }
    takeBinaryData(e) {
        if (this.buffers.push(e),
        this.buffers.length === this.reconPack.attachments) {
            const r = dP(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            r
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
        this.buffers = []
    }
}
const gP = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: Rf,
    Encoder: pP,
    get PacketType() {
        return Re
    },
    protocol: hP
}, Symbol.toStringTag, {
    value: "Module"
}));
function dn(t, e, r) {
    return t.on(e, r),
    function() {
        t.off(e, r)
    }
}
const yP = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class fw extends Ze {
    constructor(e, r, i) {
        super(),
        this.connected = !1,
        this.recovered = !1,
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this._queue = [],
        this._queueSeq = 0,
        this.ids = 0,
        this.acks = {},
        this.flags = {},
        this.io = e,
        this.nsp = r,
        i && i.auth && (this.auth = i.auth),
        this._opts = Object.assign({}, i),
        this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        const e = this.io;
        this.subs = [dn(e, "open", this.onopen.bind(this)), dn(e, "packet", this.onpacket.bind(this)), dn(e, "error", this.onerror.bind(this)), dn(e, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this)
    }
    open() {
        return this.connect()
    }
    send(...e) {
        return e.unshift("message"),
        this.emit.apply(this, e),
        this
    }
    emit(e, ...r) {
        var i, a, u;
        if (yP.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name');
        if (r.unshift(e),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(r),
            this;
        const c = {
            type: Re.EVENT,
            data: r
        };
        if (c.options = {},
        c.options.compress = this.flags.compress !== !1,
        typeof r[r.length - 1] == "function") {
            const g = this.ids++
              , y = r.pop();
            this._registerAckCallback(g, y),
            c.id = g
        }
        const f = (a = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || a === void 0 ? void 0 : a.writable
          , h = this.connected && !(!((u = this.io.engine) === null || u === void 0) && u._hasPingExpired());
        return this.flags.volatile && !f || (h ? (this.notifyOutgoingListeners(c),
        this.packet(c)) : this.sendBuffer.push(c)),
        this.flags = {},
        this
    }
    _registerAckCallback(e, r) {
        var i;
        const a = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (a === void 0) {
            this.acks[e] = r;
            return
        }
        const u = this.io.setTimeoutFn( () => {
            delete this.acks[e];
            for (let f = 0; f < this.sendBuffer.length; f++)
                this.sendBuffer[f].id === e && this.sendBuffer.splice(f, 1);
            r.call(this, new Error("operation has timed out"))
        }
        , a)
          , c = (...f) => {
            this.io.clearTimeoutFn(u),
            r.apply(this, f)
        }
        ;
        c.withError = !0,
        this.acks[e] = c
    }
    emitWithAck(e, ...r) {
        return new Promise( (i, a) => {
            const u = (c, f) => c ? a(c) : i(f);
            u.withError = !0,
            r.push(u),
            this.emit(e, ...r)
        }
        )
    }
    _addToQueue(e) {
        let r;
        typeof e[e.length - 1] == "function" && (r = e.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push( (a, ...u) => i !== this._queue[0] ? void 0 : (a !== null ? i.tryCount > this._opts.retries && (this._queue.shift(),
        r && r(a)) : (this._queue.shift(),
        r && r(null, ...u)),
        i.pending = !1,
        this._drainQueue())),
        this._queue.push(i),
        this._drainQueue()
    }
    _drainQueue(e=!1) {
        if (!this.connected || this._queue.length === 0)
            return;
        const r = this._queue[0];
        r.pending && !e || (r.pending = !0,
        r.tryCount++,
        this.flags = r.flags,
        this.emit.apply(this, r.args))
    }
    packet(e) {
        e.nsp = this.nsp,
        this.io._packet(e)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(e => {
            this._sendConnectPacket(e)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(e) {
        this.packet({
            type: Re.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        })
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e)
    }
    onclose(e, r) {
        this.connected = !1,
        delete this.id,
        this.emitReserved("disconnect", e, r),
        this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(e => {
            if (!this.sendBuffer.some(i => String(i.id) === e)) {
                const i = this.acks[e];
                delete this.acks[e],
                i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(e) {
        if (e.nsp === this.nsp)
            switch (e.type) {
            case Re.CONNECT:
                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case Re.EVENT:
            case Re.BINARY_EVENT:
                this.onevent(e);
                break;
            case Re.ACK:
            case Re.BINARY_ACK:
                this.onack(e);
                break;
            case Re.DISCONNECT:
                this.ondisconnect();
                break;
            case Re.CONNECT_ERROR:
                this.destroy();
                const i = new Error(e.data.message);
                i.data = e.data.data,
                this.emitReserved("connect_error", i);
                break
            }
    }
    onevent(e) {
        const r = e.data || [];
        e.id != null && r.push(this.ack(e.id)),
        this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r))
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const r = this._anyListeners.slice();
            for (const i of r)
                i.apply(this, e)
        }
        super.emit.apply(this, e),
        this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
    }
    ack(e) {
        const r = this;
        let i = !1;
        return function(...a) {
            i || (i = !0,
            r.packet({
                type: Re.ACK,
                id: e,
                data: a
            }))
        }
    }
    onack(e) {
        const r = this.acks[e.id];
        typeof r == "function" && (delete this.acks[e.id],
        r.withError && e.data.unshift(null),
        r.apply(this, e.data))
    }
    onconnect(e, r) {
        this.id = e,
        this.recovered = r && this._pid === r,
        this._pid = r,
        this.connected = !0,
        this.emitBuffered(),
        this.emitReserved("connect"),
        this._drainQueue(!0)
    }
    emitBuffered() {
        this.receiveBuffer.forEach(e => this.emitEvent(e)),
        this.receiveBuffer = [],
        this.sendBuffer.forEach(e => {
            this.notifyOutgoingListeners(e),
            this.packet(e)
        }
        ),
        this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
        this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(e => e()),
        this.subs = void 0),
        this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: Re.DISCONNECT
        }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    close() {
        return this.disconnect()
    }
    compress(e) {
        return this.flags.compress = e,
        this
    }
    get volatile() {
        return this.flags.volatile = !0,
        this
    }
    timeout(e) {
        return this.flags.timeout = e,
        this
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.push(e),
        this
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.unshift(e),
        this
    }
    offAny(e) {
        if (!this._anyListeners)
            return this;
        if (e) {
            const r = this._anyListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i])
                    return r.splice(i, 1),
                    this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.push(e),
        this
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.unshift(e),
        this
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners)
            return this;
        if (e) {
            const r = this._anyOutgoingListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i])
                    return r.splice(i, 1),
                    this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const r = this._anyOutgoingListeners.slice();
            for (const i of r)
                i.apply(this, e.data)
        }
    }
}
function ui(t) {
    t = t || {},
    this.ms = t.min || 100,
    this.max = t.max || 1e4,
    this.factor = t.factor || 2,
    this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
    this.attempts = 0
}
ui.prototype.duration = function() {
    var t = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random()
          , r = Math.floor(e * this.jitter * t);
        t = (Math.floor(e * 10) & 1) == 0 ? t - r : t + r
    }
    return Math.min(t, this.max) | 0
}
;
ui.prototype.reset = function() {
    this.attempts = 0
}
;
ui.prototype.setMin = function(t) {
    this.ms = t
}
;
ui.prototype.setMax = function(t) {
    this.max = t
}
;
ui.prototype.setJitter = function(t) {
    this.jitter = t
}
;
class Kd extends Ze {
    constructor(e, r) {
        var i;
        super(),
        this.nsps = {},
        this.subs = [],
        e && typeof e == "object" && (r = e,
        e = void 0),
        r = r || {},
        r.path = r.path || "/socket.io",
        this.opts = r,
        Vl(this, r),
        this.reconnection(r.reconnection !== !1),
        this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(r.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3),
        this.randomizationFactor((i = r.randomizationFactor) !== null && i !== void 0 ? i : .5),
        this.backoff = new ui({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }),
        this.timeout(r.timeout == null ? 2e4 : r.timeout),
        this._readyState = "closed",
        this.uri = e;
        const a = r.parser || gP;
        this.encoder = new a.Encoder,
        this.decoder = new a.Decoder,
        this._autoConnect = r.autoConnect !== !1,
        this._autoConnect && this.open()
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e,
        e || (this.skipReconnect = !0),
        this) : this._reconnection
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e,
        this)
    }
    reconnectionDelay(e) {
        var r;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e,
        (r = this.backoff) === null || r === void 0 || r.setMin(e),
        this)
    }
    randomizationFactor(e) {
        var r;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e,
        (r = this.backoff) === null || r === void 0 || r.setJitter(e),
        this)
    }
    reconnectionDelayMax(e) {
        var r;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e,
        (r = this.backoff) === null || r === void 0 || r.setMax(e),
        this)
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e,
        this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(e) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new sP(this.uri,this.opts);
        const r = this.engine
          , i = this;
        this._readyState = "opening",
        this.skipReconnect = !1;
        const a = dn(r, "open", function() {
            i.onopen(),
            e && e()
        })
          , u = f => {
            this.cleanup(),
            this._readyState = "closed",
            this.emitReserved("error", f),
            e ? e(f) : this.maybeReconnectOnOpen()
        }
          , c = dn(r, "error", u);
        if (this._timeout !== !1) {
            const f = this._timeout
              , h = this.setTimeoutFn( () => {
                a(),
                u(new Error("timeout")),
                r.close()
            }
            , f);
            this.opts.autoUnref && h.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(h)
            }
            )
        }
        return this.subs.push(a),
        this.subs.push(c),
        this
    }
    connect(e) {
        return this.open(e)
    }
    onopen() {
        this.cleanup(),
        this._readyState = "open",
        this.emitReserved("open");
        const e = this.engine;
        this.subs.push(dn(e, "ping", this.onping.bind(this)), dn(e, "data", this.ondata.bind(this)), dn(e, "error", this.onerror.bind(this)), dn(e, "close", this.onclose.bind(this)), dn(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(e) {
        try {
            this.decoder.add(e)
        } catch (r) {
            this.onclose("parse error", r)
        }
    }
    ondecoded(e) {
        Fl( () => {
            this.emitReserved("packet", e)
        }
        , this.setTimeoutFn)
    }
    onerror(e) {
        this.emitReserved("error", e)
    }
    socket(e, r) {
        let i = this.nsps[e];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new fw(this,e,r),
        this.nsps[e] = i),
        i
    }
    _destroy(e) {
        const r = Object.keys(this.nsps);
        for (const i of r)
            if (this.nsps[i].active)
                return;
        this._close()
    }
    _packet(e) {
        const r = this.encoder.encode(e);
        for (let i = 0; i < r.length; i++)
            this.engine.write(r[i], e.options)
    }
    cleanup() {
        this.subs.forEach(e => e()),
        this.subs.length = 0,
        this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
        this._reconnecting = !1,
        this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(e, r) {
        var i;
        this.cleanup(),
        (i = this.engine) === null || i === void 0 || i.close(),
        this.backoff.reset(),
        this._readyState = "closed",
        this.emitReserved("close", e, r),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            this._reconnecting = !1;
        else {
            const r = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn( () => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                !e.skipReconnect && e.open(a => {
                    a ? (e._reconnecting = !1,
                    e.reconnect(),
                    this.emitReserved("reconnect_error", a)) : e.onreconnect()
                }
                ))
            }
            , r);
            this.opts.autoUnref && i.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(i)
            }
            )
        }
    }
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1,
        this.backoff.reset(),
        this.emitReserved("reconnect", e)
    }
}
const Zi = {};
function hl(t, e) {
    typeof t == "object" && (e = t,
    t = void 0),
    e = e || {};
    const r = iP(t, e.path || "/socket.io")
      , i = r.source
      , a = r.id
      , u = r.path
      , c = Zi[a] && u in Zi[a].nsps
      , f = e.forceNew || e["force new connection"] || e.multiplex === !1 || c;
    let h;
    return f ? h = new Kd(i,e) : (Zi[a] || (Zi[a] = new Kd(i,e)),
    h = Zi[a]),
    r.query && !e.query && (e.query = r.queryKey),
    h.socket(r.path, e)
}
Object.assign(hl, {
    Manager: Kd,
    Socket: fw,
    io: hl,
    connect: hl
});
function cy(t, e) {
    var r;
    const i = hl(t.serverUrl, {
        path: t.mountPath,
        transports: t.transports,
        query: {
            app_id: t.appId,
            token: (r = t.token) !== null && r !== void 0 ? r : kf()
        }
    });
    return i.on("connect", async () => {
        var a;
        return console.log("connect", i.id),
        (a = e.connect) === null || a === void 0 ? void 0 : a.call(e)
    }
    ),
    i.on("update_model", async a => {
        var u;
        return (u = e.update_model) === null || u === void 0 ? void 0 : u.call(e, a)
    }
    ),
    i.on("error", async a => {
        var u;
        return (u = e.error) === null || u === void 0 ? void 0 : u.call(e, a)
    }
    ),
    i.on("connect_error", async a => {
        var u;
        return console.error("connect_error", a),
        (u = e.error) === null || u === void 0 ? void 0 : u.call(e, a)
    }
    ),
    i
}
function vP({config: t}) {
    let e = {
        ...t
    };
    const r = {}
      , i = {
        connect: async () => {
            const k = [];
            Object.keys(r).forEach(x => {
                h(x);
                const b = y(x);
                b == null || b.forEach( ({connect: S}) => {
                    const R = async () => S == null ? void 0 : S();
                    k.push(R())
                }
                )
            }
            ),
            await Promise.all(k)
        }
        ,
        update_model: async k => {
            const b = y(k.room).map(S => {
                var R;
                return (R = S.update_model) === null || R === void 0 ? void 0 : R.call(S, k)
            }
            );
            await Promise.all(b)
        }
        ,
        error: async k => {
            console.error("error", k);
            const x = Object.values(r).flat().map(b => {
                var S;
                return (S = b.error) === null || S === void 0 ? void 0 : S.call(b, k)
            }
            );
            await Promise.all(x)
        }
    };
    let a = cy(t, i);
    function u() {
        c()
    }
    function c() {
        a && a.disconnect()
    }
    function f(k) {
        u(),
        e = {
            ...e,
            ...k
        },
        a = cy(e, i)
    }
    function h(k) {
        a.emit("join", k)
    }
    function m(k) {
        a.emit("leave", k)
    }
    async function g(k, x) {
        var b;
        const S = JSON.stringify(x);
        return (b = i.update_model) === null || b === void 0 ? void 0 : b.call(i, {
            room: k,
            data: S
        })
    }
    function y(k) {
        return r[k]
    }
    return {
        socket: a,
        subscribeToRoom: (k, x) => (r[k] || (h(k),
        r[k] = []),
        r[k].push(x),
        () => {
            var b, S;
            r[k] = (S = (b = r[k]) === null || b === void 0 ? void 0 : b.filter(R => R !== x)) !== null && S !== void 0 ? S : [],
            r[k].length === 0 && m(k)
        }
        ),
        updateConfig: f,
        updateModel: g,
        disconnect: c
    }
}
const eo = typeof window < "u" ? window : {
    base44SharedInstances: {}
};
function wP(t, e) {
    return eo.base44SharedInstances || (eo.base44SharedInstances = {}),
    eo.base44SharedInstances[t] || (eo.base44SharedInstances[t] = {
        instance: e()
    }),
    eo.base44SharedInstances[t].instance
}
const xP = "__user_heartbeat_event__"
  , SP = "__initialization_event__"
  , bP = "__session_duration_event__"
  , dy = "analytics-enable"
  , fy = "base44_analytics_session_id"
  , EP = {
    enabled: !0,
    maxQueueSize: 1e3,
    throttleTime: 1e3,
    batchSize: 30,
    heartBeatInterval: 60 * 1e3
}
  , kP = "analytics"
  , je = wP(kP, () => ({
    requestsQueue: [],
    isProcessing: !1,
    isHeartBeatProcessing: !1,
    wasInitializationTracked: !1,
    sessionContext: null,
    sessionStartTime: null,
    config: {
        ...EP,
        ...OP()
    }
}))
  , TP = ({axiosClient: t, serverUrl: e, appId: r, userAuthModule: i}) => {
    var a;
    const {maxQueueSize: u, throttleTime: c, batchSize: f} = je.config;
    if (!(!((a = je.config) === null || a === void 0) && a.enabled))
        return {
            track: () => {}
            ,
            cleanup: () => {}
        };
    let h;
    const m = `${e}/api/apps/${r}/analytics/track/batch`
      , g = async M => {
        await t.request({
            method: "POST",
            url: `/apps/${r}/analytics/track/batch`,
            data: {
                events: M
            }
        })
    }
      , y = M => {
        try {
            const j = JSON.stringify({
                events: M
            })
              , U = new Blob([j],{
                type: "application/json"
            });
            return typeof navigator > "u" || j.length > 6e4 || !navigator.sendBeacon(m, U)
        } catch {
            return !1
        }
    }
      , w = async (M, j={}) => {
        if (M.length === 0)
            return;
        const U = await NP(i)
          , Y = M.map(AP(U));
        try {
            (!j.isBeacon || !y(Y)) && await g(Y)
        } catch {}
    }
      , k = () => {
        py(w, {
            throttleTime: c,
            batchSize: f
        })
    }
      , x = M => {
        if (je.requestsQueue.length >= u)
            return;
        const j = RP();
        je.requestsQueue.push({
            ...M,
            ...j
        }),
        k()
    }
      , b = () => {
        py(w, {
            throttleTime: c,
            batchSize: f
        }),
        h = my(x),
        PP()
    }
      , S = () => {
        hy(),
        h == null || h(),
        _P(x);
        const M = je.requestsQueue.splice(0);
        w(M, {
            isBeacon: !0
        })
    }
      , R = () => {
        typeof window > "u" || (document.visibilityState === "hidden" ? S() : document.visibilityState === "visible" && b())
    }
      , B = () => {
        hy(),
        h == null || h(),
        typeof window < "u" && window.removeEventListener("visibilitychange", R)
    }
    ;
    return k(),
    h = my(x),
    CP(x),
    typeof window < "u" && window.addEventListener("visibilitychange", R),
    {
        track: x,
        cleanup: B
    }
}
;
function hy() {
    je.isProcessing = !1
}
async function py(t, e) {
    if (je.isProcessing)
        return;
    je.isProcessing = !0;
    const {throttleTime: r=1e3, batchSize: i=30} = e ?? {};
    for (; je.isProcessing && je.requestsQueue.length > 0; ) {
        const a = je.requestsQueue.splice(0, i);
        a.length && await t(a),
        await new Promise(u => setTimeout(u, r))
    }
    je.isProcessing = !1
}
function my(t) {
    var e;
    if (je.isHeartBeatProcessing || ((e = je.config.heartBeatInterval) !== null && e !== void 0 ? e : 0) < 10)
        return () => {}
        ;
    je.isHeartBeatProcessing = !0;
    const r = setInterval( () => {
        t({
            eventName: xP
        })
    }
    , je.config.heartBeatInterval);
    return () => {
        clearInterval(r),
        je.isHeartBeatProcessing = !1
    }
}
function CP(t) {
    typeof window > "u" || je.wasInitializationTracked || (je.wasInitializationTracked = !0,
    t({
        eventName: SP,
        properties: {
            referrer: document == null ? void 0 : document.referrer
        }
    }))
}
function PP() {
    typeof window > "u" || je.sessionStartTime !== null || (je.sessionStartTime = new Date().toISOString())
}
function _P(t) {
    if (typeof window > "u" || je.sessionStartTime === null)
        return;
    const e = new Date().getTime() - new Date(je.sessionStartTime).getTime();
    je.sessionStartTime = null,
    t({
        eventName: bP,
        properties: {
            sessionDuration: e
        }
    })
}
function RP() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window < "u" ? window.location.pathname : null
    }
}
function AP(t) {
    return e => ({
        event_name: e.eventName,
        properties: e.properties,
        timestamp: e.timestamp,
        page_url: e.pageUrl,
        ...t
    })
}
let rd = null;
async function NP(t) {
    if (!je.sessionContext) {
        if (!rd) {
            const e = LP();
            rd = t.me().then(r => ({
                user_id: r.id,
                session_id: e
            })).catch( () => ({
                user_id: null,
                session_id: e
            }))
        }
        je.sessionContext = await rd
    }
    return je.sessionContext
}
function OP() {
    if (typeof window > "u")
        return;
    const e = new URLSearchParams(window.location.search).get(dy);
    if (e == null || !e.length)
        return;
    const r = new URLSearchParams(window.location.search);
    r.delete(dy);
    const i = window.location.pathname + (r.toString() ? "?" + r.toString() : "");
    return window.history.replaceState({}, "", i),
    {
        enabled: e === "true"
    }
}
function LP() {
    if (typeof window > "u")
        return Jc();
    try {
        const t = localStorage.getItem(fy);
        if (!t) {
            const e = Jc();
            return localStorage.setItem(fy, e),
            e
        }
        return t
    } catch {
        return Jc()
    }
}
function DP(t) {
    const {serverUrl: e="https://base44.app", appId: r, token: i, serviceToken: a, requiresAuth: u=!1, appBaseUrl: c, options: f, functionsVersion: h, headers: m} = t
      , g = typeof c == "string" ? c : ""
      , y = {
        serverUrl: e,
        mountPath: "/ws-user-apps/socket.io/",
        transports: ["websocket"],
        appId: r,
        token: i
    };
    let w = null;
    const k = () => (w || (w = vP({
        config: y
    })),
    w)
      , x = {
        ...m,
        "X-App-Id": String(r)
    }
      , b = h ? {
        ...x,
        "Base44-Functions-Version": h
    } : x
      , S = so({
        baseURL: `${e}/api`,
        headers: x,
        token: i,
        onError: f == null ? void 0 : f.onError
    })
      , R = so({
        baseURL: `${e}/api`,
        headers: b,
        token: i,
        interceptResponses: !1,
        onError: f == null ? void 0 : f.onError
    })
      , B = so({
        baseURL: `${e}/api`,
        headers: x,
        token: a,
        onError: f == null ? void 0 : f.onError
    })
      , M = so({
        baseURL: `${e}/api`,
        headers: b,
        token: a,
        interceptResponses: !1
    })
      , j = xC(S, R, r, {
        appBaseUrl: g
    })
      , U = {
        entities: ey({
            axios: S,
            appId: r,
            getSocket: k
        }),
        integrations: ty(S, r),
        auth: j,
        functions: ny(R, r),
        agents: ry({
            axios: S,
            getSocket: k,
            appId: r,
            serverUrl: e,
            token: i
        }),
        appLogs: sy(S, r),
        users: kC(S, r),
        analytics: TP({
            axiosClient: S,
            serverUrl: e,
            appId: r,
            userAuthModule: j
        }),
        cleanup: () => {
            U.analytics.cleanup(),
            w && w.disconnect()
        }
    }
      , Y = {
        entities: ey({
            axios: B,
            appId: r,
            getSocket: k
        }),
        integrations: ty(B, r),
        sso: SC(B, r, i),
        connectors: bC(B, r),
        functions: ny(M, r),
        agents: ry({
            axios: B,
            getSocket: k,
            appId: r,
            serverUrl: e,
            token: i
        }),
        appLogs: sy(B, r),
        cleanup: () => {
            w && w.disconnect()
        }
    };
    if (typeof window < "u") {
        const N = i || kf();
        N && U.auth.setToken(N)
    }
    return u && typeof window < "u" && setTimeout(async () => {
        try {
            await U.auth.isAuthenticated() || U.auth.redirectToLogin(window.location.href)
        } catch (N) {
            console.error("Authentication check failed:", N),
            U.auth.redirectToLogin(window.location.href)
        }
    }
    , 0),
    {
        ...U,
        setToken(N) {
            U.auth.setToken(N),
            w && w.updateConfig({
                token: N
            }),
            y.token = N
        },
        getConfig() {
            return {
                serverUrl: e,
                appId: r,
                requiresAuth: u
            }
        },
        get asServiceRole() {
            if (!a)
                throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return Y
        }
    }
}
const hw = typeof window > "u"
  , MP = hw ? {
    localStorage: new Map
} : window
  , sd = MP.localStorage
  , jP = t => t.replace(/([A-Z])/g, "_$1").toLowerCase()
  , to = (t, {defaultValue: e=void 0, removeFromUrl: r=!1}={}) => {
    if (hw)
        return e;
    const i = `base44_${jP(t)}`
      , a = new URLSearchParams(window.location.search)
      , u = a.get(t);
    if (r) {
        a.delete(t);
        const f = `${window.location.pathname}${a.toString() ? `?${a.toString()}` : ""}${window.location.hash}`;
        window.history.replaceState({}, document.title, f)
    }
    if (u)
        return sd.setItem(i, u),
        u;
    if (e)
        return sd.setItem(i, e),
        e;
    const c = sd.getItem(i);
    return c || null
}
  , IP = () => ({
    appId: to("app_id", {
        defaultValue: "6921e5ad1d9f498552529b17"
    }),
    serverUrl: to("server_url", {
        defaultValue: "https://base44.app"
    }),
    token: to("access_token", {
        removeFromUrl: !0
    }),
    fromUrl: to("from_url", {
        defaultValue: window.location.href
    }),
    functionsVersion: to("functions_version")
})
  , Ms = {
    ...IP()
}
  , {appId: FP, serverUrl: VP, token: BP, functionsVersion: UP} = Ms
  , js = DP({
    appId: FP,
    serverUrl: VP,
    token: BP,
    functionsVersion: UP,
    requiresAuth: !1
})
  , pw = L.createContext()
  , zP = ({children: t}) => {
    const [e,r] = L.useState(null)
      , [i,a] = L.useState(!1)
      , [u,c] = L.useState(!0)
      , [f,h] = L.useState(!0)
      , [m,g] = L.useState(null)
      , [y,w] = L.useState(null);
    L.useEffect( () => {
        k()
    }
    , []);
    const k = async () => {
        var R, B;
        try {
            h(!0),
            g(null);
            const M = so({
                baseURL: `${Ms.serverUrl}/api/apps/public`,
                headers: {
                    "X-App-Id": Ms.appId
                },
                token: Ms.token,
                interceptResponses: !0
            });
            try {
                const j = await M.get(`/prod/public-settings/by-id/${Ms.appId}`);
                w(j),
                Ms.token ? await x() : (c(!1),
                a(!1)),
                h(!1)
            } catch (j) {
                if (console.error("App state check failed:", j),
                j.status === 403 && ((B = (R = j.data) == null ? void 0 : R.extra_data) != null && B.reason)) {
                    const U = j.data.extra_data.reason;
                    g(U === "auth_required" ? {
                        type: "auth_required",
                        message: "Authentication required"
                    } : U === "user_not_registered" ? {
                        type: "user_not_registered",
                        message: "User not registered for this app"
                    } : {
                        type: U,
                        message: j.message
                    })
                } else
                    g({
                        type: "unknown",
                        message: j.message || "Failed to load app"
                    });
                h(!1),
                c(!1)
            }
        } catch (M) {
            console.error("Unexpected error:", M),
            g({
                type: "unknown",
                message: M.message || "An unexpected error occurred"
            }),
            h(!1),
            c(!1)
        }
    }
      , x = async () => {
        try {
            c(!0);
            const R = await js.auth.me();
            r(R),
            a(!0),
            c(!1)
        } catch (R) {
            console.error("User auth check failed:", R),
            c(!1),
            a(!1),
            (R.status === 401 || R.status === 403) && g({
                type: "auth_required",
                message: "Authentication required"
            })
        }
    }
      , b = (R=!0) => {
        r(null),
        a(!1),
        R ? js.auth.logout(window.location.href) : js.auth.logout()
    }
      , S = () => {
        js.auth.redirectToLogin(window.location.href)
    }
    ;
    return T.jsx(pw.Provider, {
        value: {
            user: e,
            isAuthenticated: i,
            isLoadingAuth: u,
            isLoadingPublicSettings: f,
            authError: m,
            appPublicSettings: y,
            logout: b,
            navigateToLogin: S,
            checkAppState: k
        },
        children: t
    })
}
  , mw = () => {
    const t = L.useContext(pw);
    if (!t)
        throw new Error("useAuth must be used within an AuthProvider");
    return t
}
;
function gy(t, e) {
    if (typeof t == "function")
        return t(e);
    t != null && (t.current = e)
}
function $P(...t) {
    return e => {
        let r = !1;
        const i = t.map(a => {
            const u = gy(a, e);
            return !r && typeof u == "function" && (r = !0),
            u
        }
        );
        if (r)
            return () => {
                for (let a = 0; a < i.length; a++) {
                    const u = i[a];
                    typeof u == "function" ? u() : gy(t[a], null)
                }
            }
    }
}
function HP(t) {
    const e = WP(t)
      , r = L.forwardRef( (i, a) => {
        const {children: u, ...c} = i
          , f = L.Children.toArray(u)
          , h = f.find(QP);
        if (h) {
            const m = h.props.children
              , g = f.map(y => y === h ? L.Children.count(m) > 1 ? L.Children.only(null) : L.isValidElement(m) ? m.props.children : null : y);
            return T.jsx(e, {
                ...c,
                ref: a,
                children: L.isValidElement(m) ? L.cloneElement(m, void 0, g) : null
            })
        }
        return T.jsx(e, {
            ...c,
            ref: a,
            children: u
        })
    }
    );
    return r.displayName = `${t}.Slot`,
    r
}
var qP = HP("Slot");
function WP(t) {
    const e = L.forwardRef( (r, i) => {
        const {children: a, ...u} = r;
        if (L.isValidElement(a)) {
            const c = YP(a)
              , f = GP(u, a.props);
            return a.type !== L.Fragment && (f.ref = i ? $P(i, c) : c),
            L.cloneElement(a, f)
        }
        return L.Children.count(a) > 1 ? L.Children.only(null) : null
    }
    );
    return e.displayName = `${t}.SlotClone`,
    e
}
var KP = Symbol("radix.slottable");
function QP(t) {
    return L.isValidElement(t) && typeof t.type == "function" && "__radixId"in t.type && t.type.__radixId === KP
}
function GP(t, e) {
    const r = {
        ...e
    };
    for (const i in e) {
        const a = t[i]
          , u = e[i];
        /^on[A-Z]/.test(i) ? a && u ? r[i] = (...f) => {
            const h = u(...f);
            return a(...f),
            h
        }
        : a && (r[i] = a) : i === "style" ? r[i] = {
            ...a,
            ...u
        } : i === "className" && (r[i] = [a, u].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...r
    }
}
function YP(t) {
    var i, a;
    let e = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get
      , r = e && "isReactWarning"in e && e.isReactWarning;
    return r ? t.ref : (e = (a = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : a.get,
    r = e && "isReactWarning"in e && e.isReactWarning,
    r ? t.props.ref : t.props.ref || t.ref)
}
const XP = Wv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , oo = L.forwardRef( ({className: t, variant: e, size: r, asChild: i=!1, ...a}, u) => {
    const c = i ? qP : "button";
    return T.jsx(c, {
        className: Mt(XP({
            variant: e,
            size: r,
            className: t
        })),
        ref: u,
        ...a
    })
}
);
oo.displayName = "Button";
const JP = L.forwardRef( ({className: t, type: e, ...r}, i) => T.jsx("input", {
    type: e,
    className: Mt("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
    ref: i,
    ...r
}));
JP.displayName = "Input";
const ZP = L.forwardRef( ({className: t, ...e}, r) => T.jsx("textarea", {
    className: Mt("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
    ref: r,
    ...e
}));
ZP.displayName = "Textarea";
const pl = L.forwardRef( ({className: t, ...e}, r) => T.jsx("div", {
    ref: r,
    className: Mt("rounded-xl border bg-card text-card-foreground shadow", t),
    ...e
}));
pl.displayName = "Card";
const e_ = L.forwardRef( ({className: t, ...e}, r) => T.jsx("div", {
    ref: r,
    className: Mt("flex flex-col space-y-1.5 p-6", t),
    ...e
}));
e_.displayName = "CardHeader";
const t_ = L.forwardRef( ({className: t, ...e}, r) => T.jsx("div", {
    ref: r,
    className: Mt("font-semibold leading-none tracking-tight", t),
    ...e
}));
t_.displayName = "CardTitle";
const n_ = L.forwardRef( ({className: t, ...e}, r) => T.jsx("div", {
    ref: r,
    className: Mt("text-sm text-muted-foreground", t),
    ...e
}));
n_.displayName = "CardDescription";
const ml = L.forwardRef( ({className: t, ...e}, r) => T.jsx("div", {
    ref: r,
    className: Mt("p-6 pt-0", t),
    ...e
}));
ml.displayName = "CardContent";
const r_ = L.forwardRef( ({className: t, ...e}, r) => T.jsx("div", {
    ref: r,
    className: Mt("flex items-center p-6 pt-0", t),
    ...e
}));
r_.displayName = "CardFooter";
const Af = L.createContext(null);
function s_(t) {
    const e = L.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
const gw = L.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
})
  , yw = L.createContext({})
  , Bt = t => t;
let vw = Bt;
function Nf(t) {
    let e;
    return () => (e === void 0 && (e = t()),
    e)
}
const ni = (t, e, r) => {
    const i = e - t;
    return i === 0 ? 1 : (r - t) / i
}
  , Bn = t => t * 1e3
  , Un = t => t / 1e3
  , Of = typeof window < "u"
  , i_ = Of ? L.useLayoutEffect : L.useEffect
  , o_ = {
    useManualTiming: !1
};
function a_(t) {
    let e = new Set
      , r = new Set
      , i = !1
      , a = !1;
    const u = new WeakSet;
    let c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function f(m) {
        u.has(m) && (h.schedule(m),
        t()),
        m(c)
    }
    const h = {
        schedule: (m, g=!1, y=!1) => {
            const k = y && i ? e : r;
            return g && u.add(m),
            k.has(m) || k.add(m),
            m
        }
        ,
        cancel: m => {
            r.delete(m),
            u.delete(m)
        }
        ,
        process: m => {
            if (c = m,
            i) {
                a = !0;
                return
            }
            i = !0,
            [e,r] = [r, e],
            e.forEach(f),
            e.clear(),
            i = !1,
            a && (a = !1,
            h.process(m))
        }
    };
    return h
}
const tl = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , l_ = 40;
function ww(t, e) {
    let r = !1
      , i = !0;
    const a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , u = () => r = !0
      , c = tl.reduce( (R, B) => (R[B] = a_(u),
    R), {})
      , {read: f, resolveKeyframes: h, update: m, preRender: g, render: y, postRender: w} = c
      , k = () => {
        const R = performance.now();
        r = !1,
        a.delta = i ? 1e3 / 60 : Math.max(Math.min(R - a.timestamp, l_), 1),
        a.timestamp = R,
        a.isProcessing = !0,
        f.process(a),
        h.process(a),
        m.process(a),
        g.process(a),
        y.process(a),
        w.process(a),
        a.isProcessing = !1,
        r && e && (i = !1,
        t(k))
    }
      , x = () => {
        r = !0,
        i = !0,
        a.isProcessing || t(k)
    }
    ;
    return {
        schedule: tl.reduce( (R, B) => {
            const M = c[B];
            return R[B] = (j, U=!1, Y=!1) => (r || x(),
            M.schedule(j, U, Y)),
            R
        }
        , {}),
        cancel: R => {
            for (let B = 0; B < tl.length; B++)
                c[tl[B]].cancel(R)
        }
        ,
        state: a,
        steps: c
    }
}
const {schedule: Be, cancel: kr, state: dt, steps: id} = ww(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Bt, !0)
  , xw = L.createContext({
    strict: !1
})
  , yy = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , ri = {};
for (const t in yy)
    ri[t] = {
        isEnabled: e => yy[t].some(r => !!e[r])
    };
function u_(t) {
    for (const e in t)
        ri[e] = {
            ...ri[e],
            ...t[e]
        }
}
const c_ = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function El(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || c_.has(t)
}
let Sw = t => !El(t);
function d_(t) {
    t && (Sw = e => e.startsWith("on") ? !El(e) : t(e))
}
try {
    d_(require("@emotion/is-prop-valid").default)
} catch {}
function f_(t, e, r) {
    const i = {};
    for (const a in t)
        a === "values" && typeof t.values == "object" || (Sw(a) || r === !0 && El(a) || !e && !El(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i
}
function h_(t) {
    if (typeof Proxy > "u")
        return t;
    const e = new Map
      , r = (...i) => t(...i);
    return new Proxy(r,{
        get: (i, a) => a === "create" ? t : (e.has(a) || e.set(a, t(a)),
        e.get(a))
    })
}
const Bl = L.createContext({});
function vo(t) {
    return typeof t == "string" || Array.isArray(t)
}
function Ul(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Lf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Df = ["initial", ...Lf];
function zl(t) {
    return Ul(t.animate) || Df.some(e => vo(t[e]))
}
function bw(t) {
    return !!(zl(t) || t.variants)
}
function p_(t, e) {
    if (zl(t)) {
        const {initial: r, animate: i} = t;
        return {
            initial: r === !1 || vo(r) ? r : void 0,
            animate: vo(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function m_(t) {
    const {initial: e, animate: r} = p_(t, L.useContext(Bl));
    return L.useMemo( () => ({
        initial: e,
        animate: r
    }), [vy(e), vy(r)])
}
function vy(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const g_ = Symbol.for("motionComponentSymbol");
function Is(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function y_(t, e, r) {
    return L.useCallback(i => {
        i && t.mount && t.mount(i),
        e && (i ? e.mount(i) : e.unmount()),
        r && (typeof r == "function" ? r(i) : Is(r) && (r.current = i))
    }
    , [e])
}
const Mf = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , v_ = "framerAppearId"
  , Ew = "data-" + Mf(v_)
  , {schedule: jf} = ww(queueMicrotask, !1)
  , kw = L.createContext({});
function w_(t, e, r, i, a) {
    var u, c;
    const {visualElement: f} = L.useContext(Bl)
      , h = L.useContext(xw)
      , m = L.useContext(Af)
      , g = L.useContext(gw).reducedMotion
      , y = L.useRef(null);
    i = i || h.renderer,
    !y.current && i && (y.current = i(t, {
        visualState: e,
        parent: f,
        props: r,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const w = y.current
      , k = L.useContext(kw);
    w && !w.projection && a && (w.type === "html" || w.type === "svg") && x_(y.current, r, a, k);
    const x = L.useRef(!1);
    L.useInsertionEffect( () => {
        w && x.current && w.update(r, m)
    }
    );
    const b = r[Ew]
      , S = L.useRef(!!b && !(!((u = window.MotionHandoffIsComplete) === null || u === void 0) && u.call(window, b)) && ((c = window.MotionHasOptimisedAnimation) === null || c === void 0 ? void 0 : c.call(window, b)));
    return i_( () => {
        w && (x.current = !0,
        window.MotionIsMounted = !0,
        w.updateFeatures(),
        jf.render(w.render),
        S.current && w.animationState && w.animationState.animateChanges())
    }
    ),
    L.useEffect( () => {
        w && (!S.current && w.animationState && w.animationState.animateChanges(),
        S.current && (queueMicrotask( () => {
            var R;
            (R = window.MotionHandoffMarkAsComplete) === null || R === void 0 || R.call(window, b)
        }
        ),
        S.current = !1))
    }
    ),
    w
}
function x_(t, e, r, i) {
    const {layoutId: a, layout: u, drag: c, dragConstraints: f, layoutScroll: h, layoutRoot: m} = e;
    t.projection = new r(t.latestValues,e["data-framer-portal-id"] ? void 0 : Tw(t.parent)),
    t.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || f && Is(f),
        visualElement: t,
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: m
    })
}
function Tw(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : Tw(t.parent)
}
function S_({preloadedFeatures: t, createVisualElement: e, useRender: r, useVisualState: i, Component: a}) {
    var u, c;
    t && u_(t);
    function f(m, g) {
        let y;
        const w = {
            ...L.useContext(gw),
            ...m,
            layoutId: b_(m)
        }
          , {isStatic: k} = w
          , x = m_(m)
          , b = i(m, k);
        if (!k && Of) {
            E_();
            const S = k_(w);
            y = S.MeasureLayout,
            x.visualElement = w_(a, b, w, e, S.ProjectionNode)
        }
        return T.jsxs(Bl.Provider, {
            value: x,
            children: [y && x.visualElement ? T.jsx(y, {
                visualElement: x.visualElement,
                ...w
            }) : null, r(a, m, y_(b, x.visualElement, g), b, k, x.visualElement)]
        })
    }
    f.displayName = `motion.${typeof a == "string" ? a : `create(${(c = (u = a.displayName) !== null && u !== void 0 ? u : a.name) !== null && c !== void 0 ? c : ""})`}`;
    const h = L.forwardRef(f);
    return h[g_] = a,
    h
}
function b_({layoutId: t}) {
    const e = L.useContext(yw).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function E_(t, e) {
    L.useContext(xw).strict
}
function k_(t) {
    const {drag: e, layout: r} = ri;
    if (!e && !r)
        return {};
    const i = {
        ...e,
        ...r
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || r != null && r.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const T_ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function If(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(T_.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function Cw(t, {style: e, vars: r}, i, a) {
    Object.assign(t.style, e, a && a.getProjectionStyles(i));
    for (const u in r)
        t.style.setProperty(u, r[u])
}
const Pw = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function _w(t, e, r, i) {
    Cw(t, e, void 0, i);
    for (const a in e.attrs)
        t.setAttribute(Pw.has(a) ? a : Mf(a), e.attrs[a])
}
const wt = t => !!(t && t.getVelocity)
  , kl = {};
function C_(t) {
    Object.assign(kl, t)
}
const Lo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , as = new Set(Lo);
function Rw(t, {layout: e, layoutId: r}) {
    return as.has(t) || t.startsWith("origin") || (e || r !== void 0) && (!!kl[t] || t === "opacity")
}
function Ff(t, e, r) {
    var i;
    const {style: a} = t
      , u = {};
    for (const c in a)
        (wt(a[c]) || e.style && wt(e.style[c]) || Rw(c, t) || ((i = r == null ? void 0 : r.getValue(c)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (u[c] = a[c]);
    return u
}
function Aw(t, e, r) {
    const i = Ff(t, e, r);
    for (const a in t)
        if (wt(t[a]) || wt(e[a])) {
            const u = Lo.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            i[u] = t[a]
        }
    return i
}
function wy(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach( (r, i) => {
        e[0][i] = r.get(),
        e[1][i] = r.getVelocity()
    }
    ),
    e
}
function Vf(t, e, r, i) {
    if (typeof e == "function") {
        const [a,u] = wy(i);
        e = e(r !== void 0 ? r : t.custom, a, u)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function") {
        const [a,u] = wy(i);
        e = e(r !== void 0 ? r : t.custom, a, u)
    }
    return e
}
const Qd = t => Array.isArray(t)
  , P_ = t => !!(t && typeof t == "object" && t.mix && t.toValue)
  , __ = t => Qd(t) ? t[t.length - 1] || 0 : t;
function gl(t) {
    const e = wt(t) ? t.get() : t;
    return P_(e) ? e.toValue() : e
}
function R_({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: r}, i, a, u) {
    const c = {
        latestValues: A_(i, a, u, t),
        renderState: e()
    };
    return r && (c.mount = f => r(i, f, c)),
    c
}
const Nw = t => (e, r) => {
    const i = L.useContext(Bl)
      , a = L.useContext(Af)
      , u = () => R_(t, e, i, a);
    return r ? u() : s_(u)
}
;
function A_(t, e, r, i) {
    const a = {}
      , u = i(t, {});
    for (const w in u)
        a[w] = gl(u[w]);
    let {initial: c, animate: f} = t;
    const h = zl(t)
      , m = bw(t);
    e && m && !h && t.inherit !== !1 && (c === void 0 && (c = e.initial),
    f === void 0 && (f = e.animate));
    let g = r ? r.initial === !1 : !1;
    g = g || c === !1;
    const y = g ? f : c;
    if (y && typeof y != "boolean" && !Ul(y)) {
        const w = Array.isArray(y) ? y : [y];
        for (let k = 0; k < w.length; k++) {
            const x = Vf(t, w[k]);
            if (x) {
                const {transitionEnd: b, transition: S, ...R} = x;
                for (const B in R) {
                    let M = R[B];
                    if (Array.isArray(M)) {
                        const j = g ? M.length - 1 : 0;
                        M = M[j]
                    }
                    M !== null && (a[B] = M)
                }
                for (const B in b)
                    a[B] = b[B]
            }
        }
    }
    return a
}
const Bf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , Ow = () => ({
    ...Bf(),
    attrs: {}
})
  , Lw = (t, e) => e && typeof t == "number" ? e.transform(t) : t
  , zn = (t, e, r) => r > e ? e : r < t ? t : r
  , ci = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , wo = {
    ...ci,
    transform: t => zn(0, 1, t)
}
  , nl = {
    ...ci,
    default: 1
}
  , Do = t => ({
    test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , fr = Do("deg")
  , kn = Do("%")
  , ve = Do("px")
  , N_ = Do("vh")
  , O_ = Do("vw")
  , xy = {
    ...kn,
    parse: t => kn.parse(t) / 100,
    transform: t => kn.transform(t * 100)
}
  , L_ = {
    borderWidth: ve,
    borderTopWidth: ve,
    borderRightWidth: ve,
    borderBottomWidth: ve,
    borderLeftWidth: ve,
    borderRadius: ve,
    radius: ve,
    borderTopLeftRadius: ve,
    borderTopRightRadius: ve,
    borderBottomRightRadius: ve,
    borderBottomLeftRadius: ve,
    width: ve,
    maxWidth: ve,
    height: ve,
    maxHeight: ve,
    top: ve,
    right: ve,
    bottom: ve,
    left: ve,
    padding: ve,
    paddingTop: ve,
    paddingRight: ve,
    paddingBottom: ve,
    paddingLeft: ve,
    margin: ve,
    marginTop: ve,
    marginRight: ve,
    marginBottom: ve,
    marginLeft: ve,
    backgroundPositionX: ve,
    backgroundPositionY: ve
}
  , D_ = {
    rotate: fr,
    rotateX: fr,
    rotateY: fr,
    rotateZ: fr,
    scale: nl,
    scaleX: nl,
    scaleY: nl,
    scaleZ: nl,
    skew: fr,
    skewX: fr,
    skewY: fr,
    distance: ve,
    translateX: ve,
    translateY: ve,
    translateZ: ve,
    x: ve,
    y: ve,
    z: ve,
    perspective: ve,
    transformPerspective: ve,
    opacity: wo,
    originX: xy,
    originY: xy,
    originZ: ve
}
  , Sy = {
    ...ci,
    transform: Math.round
}
  , Uf = {
    ...L_,
    ...D_,
    zIndex: Sy,
    size: ve,
    fillOpacity: wo,
    strokeOpacity: wo,
    numOctaves: Sy
}
  , M_ = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , j_ = Lo.length;
function I_(t, e, r) {
    let i = ""
      , a = !0;
    for (let u = 0; u < j_; u++) {
        const c = Lo[u]
          , f = t[c];
        if (f === void 0)
            continue;
        let h = !0;
        if (typeof f == "number" ? h = f === (c.startsWith("scale") ? 1 : 0) : h = parseFloat(f) === 0,
        !h || r) {
            const m = Lw(f, Uf[c]);
            if (!h) {
                a = !1;
                const g = M_[c] || c;
                i += `${g}(${m}) `
            }
            r && (e[c] = m)
        }
    }
    return i = i.trim(),
    r ? i = r(e, a ? "" : i) : a && (i = "none"),
    i
}
const Dw = t => e => typeof e == "string" && e.startsWith(t)
  , Mw = Dw("--")
  , F_ = Dw("var(--")
  , zf = t => F_(t) ? V_.test(t.split("/*")[0].trim()) : !1
  , V_ = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function $f(t, e, r) {
    const {style: i, vars: a, transformOrigin: u} = t;
    let c = !1
      , f = !1;
    for (const h in e) {
        const m = e[h];
        if (as.has(h)) {
            c = !0;
            continue
        } else if (Mw(h)) {
            a[h] = m;
            continue
        } else {
            const g = Lw(m, Uf[h]);
            h.startsWith("origin") ? (f = !0,
            u[h] = g) : i[h] = g
        }
    }
    if (e.transform || (c || r ? i.transform = I_(e, t.transform, r) : i.transform && (i.transform = "none")),
    f) {
        const {originX: h="50%", originY: m="50%", originZ: g=0} = u;
        i.transformOrigin = `${h} ${m} ${g}`
    }
}
function by(t, e, r) {
    return typeof t == "string" ? t : ve.transform(e + r * t)
}
function B_(t, e, r) {
    const i = by(e, t.x, t.width)
      , a = by(r, t.y, t.height);
    return `${i} ${a}`
}
const U_ = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , z_ = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function $_(t, e, r=1, i=0, a=!0) {
    t.pathLength = 1;
    const u = a ? U_ : z_;
    t[u.offset] = ve.transform(-i);
    const c = ve.transform(e)
      , f = ve.transform(r);
    t[u.array] = `${c} ${f}`
}
function Hf(t, {attrX: e, attrY: r, attrScale: i, originX: a, originY: u, pathLength: c, pathSpacing: f=1, pathOffset: h=0, ...m}, g, y) {
    if ($f(t, m, y),
    g) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: w, style: k, dimensions: x} = t;
    w.transform && (x && (k.transform = w.transform),
    delete w.transform),
    x && (a !== void 0 || u !== void 0 || k.transform) && (k.transformOrigin = B_(x, a !== void 0 ? a : .5, u !== void 0 ? u : .5)),
    e !== void 0 && (w.x = e),
    r !== void 0 && (w.y = r),
    i !== void 0 && (w.scale = i),
    c !== void 0 && $_(w, c, f, h, !1)
}
const qf = t => typeof t == "string" && t.toLowerCase() === "svg"
  , H_ = {
    useVisualState: Nw({
        scrapeMotionValuesFromProps: Aw,
        createRenderState: Ow,
        onMount: (t, e, {renderState: r, latestValues: i}) => {
            Be.read( () => {
                try {
                    r.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
                } catch {
                    r.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            Be.render( () => {
                Hf(r, i, qf(e.tagName), t.transformTemplate),
                _w(e, r)
            }
            )
        }
    })
}
  , q_ = {
    useVisualState: Nw({
        scrapeMotionValuesFromProps: Ff,
        createRenderState: Bf
    })
};
function jw(t, e, r) {
    for (const i in e)
        !wt(e[i]) && !Rw(i, r) && (t[i] = e[i])
}
function W_({transformTemplate: t}, e) {
    return L.useMemo( () => {
        const r = Bf();
        return $f(r, e, t),
        Object.assign({}, r.vars, r.style)
    }
    , [e])
}
function K_(t, e) {
    const r = t.style || {}
      , i = {};
    return jw(i, r, t),
    Object.assign(i, W_(t, e)),
    i
}
function Q_(t, e) {
    const r = {}
      , i = K_(t, e);
    return t.drag && t.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
function G_(t, e, r, i) {
    const a = L.useMemo( () => {
        const u = Ow();
        return Hf(u, e, qf(i), t.transformTemplate),
        {
            ...u.attrs,
            style: {
                ...u.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const u = {};
        jw(u, t.style, t),
        a.style = {
            ...u,
            ...a.style
        }
    }
    return a
}
function Y_(t=!1) {
    return (r, i, a, {latestValues: u}, c) => {
        const h = (If(r) ? G_ : Q_)(i, u, c, r)
          , m = f_(i, typeof r == "string", t)
          , g = r !== L.Fragment ? {
            ...m,
            ...h,
            ref: a
        } : {}
          , {children: y} = i
          , w = L.useMemo( () => wt(y) ? y.get() : y, [y]);
        return L.createElement(r, {
            ...g,
            children: w
        })
    }
}
function X_(t, e) {
    return function(i, {forwardMotionProps: a}={
        forwardMotionProps: !1
    }) {
        const c = {
            ...If(i) ? H_ : q_,
            preloadedFeatures: t,
            useRender: Y_(a),
            createVisualElement: e,
            Component: i
        };
        return S_(c)
    }
}
function Iw(t, e) {
    if (!Array.isArray(e))
        return !1;
    const r = e.length;
    if (r !== t.length)
        return !1;
    for (let i = 0; i < r; i++)
        if (e[i] !== t[i])
            return !1;
    return !0
}
function $l(t, e, r) {
    const i = t.getProps();
    return Vf(i, e, r !== void 0 ? r : i.custom, t)
}
const J_ = Nf( () => window.ScrollTimeline !== void 0);
class Z_ {
    constructor(e) {
        this.stop = () => this.runAll("stop"),
        this.animations = e.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(e => "finished"in e ? e.finished : e))
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, r) {
        for (let i = 0; i < this.animations.length; i++)
            this.animations[i][e] = r
    }
    attachTimeline(e, r) {
        const i = this.animations.map(a => {
            if (J_() && a.attachTimeline)
                return a.attachTimeline(e);
            if (typeof r == "function")
                return r(a)
        }
        );
        return () => {
            i.forEach( (a, u) => {
                a && a(),
                this.animations[u].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let r = 0; r < this.animations.length; r++)
            e = Math.max(e, this.animations[r].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(r => r[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class eR extends Z_ {
    then(e, r) {
        return Promise.all(this.animations).then(e).catch(r)
    }
}
function Wf(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const Gd = 2e4;
function Fw(t) {
    let e = 0;
    const r = 50;
    let i = t.next(e);
    for (; !i.done && e < Gd; )
        e += r,
        i = t.next(e);
    return e >= Gd ? 1 / 0 : e
}
function Kf(t) {
    return typeof t == "function"
}
function Ey(t, e) {
    t.timeline = e,
    t.onfinish = null
}
const Qf = t => Array.isArray(t) && typeof t[0] == "number"
  , tR = {
    linearEasing: void 0
};
function nR(t, e) {
    const r = Nf(t);
    return () => {
        var i;
        return (i = tR[e]) !== null && i !== void 0 ? i : r()
    }
}
const Tl = nR( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Vw = (t, e, r=10) => {
    let i = "";
    const a = Math.max(Math.round(e / r), 2);
    for (let u = 0; u < a; u++)
        i += t(ni(0, a - 1, u)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`
}
;
function Bw(t) {
    return !!(typeof t == "function" && Tl() || !t || typeof t == "string" && (t in Yd || Tl()) || Qf(t) || Array.isArray(t) && t.every(Bw))
}
const ao = ([t,e,r,i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`
  , Yd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ao([0, .65, .55, 1]),
    circOut: ao([.55, 0, 1, .45]),
    backIn: ao([.31, .01, .66, -.59]),
    backOut: ao([.33, 1.53, .69, .99])
};
function Uw(t, e) {
    if (t)
        return typeof t == "function" && Tl() ? Vw(t, e) : Qf(t) ? ao(t) : Array.isArray(t) ? t.map(r => Uw(r, e) || Yd.easeOut) : Yd[t]
}
const ln = {
    x: !1,
    y: !1
};
function zw() {
    return ln.x || ln.y
}
function rR(t, e, r) {
    var i;
    if (t instanceof Element)
        return [t];
    if (typeof t == "string") {
        let a = document;
        const u = (i = void 0) !== null && i !== void 0 ? i : a.querySelectorAll(t);
        return u ? Array.from(u) : []
    }
    return Array.from(t)
}
function $w(t, e) {
    const r = rR(t)
      , i = new AbortController
      , a = {
        passive: !0,
        ...e,
        signal: i.signal
    };
    return [r, a, () => i.abort()]
}
function ky(t) {
    return e => {
        e.pointerType === "touch" || zw() || t(e)
    }
}
function sR(t, e, r={}) {
    const [i,a,u] = $w(t, r)
      , c = ky(f => {
        const {target: h} = f
          , m = e(f);
        if (typeof m != "function" || !h)
            return;
        const g = ky(y => {
            m(y),
            h.removeEventListener("pointerleave", g)
        }
        );
        h.addEventListener("pointerleave", g, a)
    }
    );
    return i.forEach(f => {
        f.addEventListener("pointerenter", c, a)
    }
    ),
    u
}
const Hw = (t, e) => e ? t === e ? !0 : Hw(t, e.parentElement) : !1
  , Gf = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1
  , iR = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function oR(t) {
    return iR.has(t.tagName) || t.tabIndex !== -1
}
const lo = new WeakSet;
function Ty(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}
function od(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const aR = (t, e) => {
    const r = t.currentTarget;
    if (!r)
        return;
    const i = Ty( () => {
        if (lo.has(r))
            return;
        od(r, "down");
        const a = Ty( () => {
            od(r, "up")
        }
        )
          , u = () => od(r, "cancel");
        r.addEventListener("keyup", a, e),
        r.addEventListener("blur", u, e)
    }
    );
    r.addEventListener("keydown", i, e),
    r.addEventListener("blur", () => r.removeEventListener("keydown", i), e)
}
;
function Cy(t) {
    return Gf(t) && !zw()
}
function lR(t, e, r={}) {
    const [i,a,u] = $w(t, r)
      , c = f => {
        const h = f.currentTarget;
        if (!Cy(f) || lo.has(h))
            return;
        lo.add(h);
        const m = e(f)
          , g = (k, x) => {
            window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", w),
            !(!Cy(k) || !lo.has(h)) && (lo.delete(h),
            typeof m == "function" && m(k, {
                success: x
            }))
        }
          , y = k => {
            g(k, r.useGlobalTarget || Hw(h, k.target))
        }
          , w = k => {
            g(k, !1)
        }
        ;
        window.addEventListener("pointerup", y, a),
        window.addEventListener("pointercancel", w, a)
    }
    ;
    return i.forEach(f => {
        !oR(f) && f.getAttribute("tabindex") === null && (f.tabIndex = 0),
        (r.useGlobalTarget ? window : f).addEventListener("pointerdown", c, a),
        f.addEventListener("focus", m => aR(m, a), a)
    }
    ),
    u
}
function uR(t) {
    return t === "x" || t === "y" ? ln[t] ? null : (ln[t] = !0,
    () => {
        ln[t] = !1
    }
    ) : ln.x || ln.y ? null : (ln.x = ln.y = !0,
    () => {
        ln.x = ln.y = !1
    }
    )
}
let yl;
function cR() {
    yl = void 0
}
const Tn = {
    now: () => (yl === void 0 && Tn.set(dt.isProcessing || o_.useManualTiming ? dt.timestamp : performance.now()),
    yl),
    set: t => {
        yl = t,
        queueMicrotask(cR)
    }
};
function Yf(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function Xf(t, e) {
    const r = t.indexOf(e);
    r > -1 && t.splice(r, 1)
}
class Jf {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return Yf(this.subscriptions, e),
        () => Xf(this.subscriptions, e)
    }
    notify(e, r, i) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1)
                this.subscriptions[0](e, r, i);
            else
                for (let u = 0; u < a; u++) {
                    const c = this.subscriptions[u];
                    c && c(e, r, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function qw(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Py = 30
  , dR = t => !isNaN(parseFloat(t));
class fR {
    constructor(e, r={}) {
        this.version = "11.16.4",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (i, a=!0) => {
            const u = Tn.now();
            this.updatedAt !== u && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(i),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.owner = r.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = Tn.now(),
        this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = dR(this.current))
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, r) {
        this.events[e] || (this.events[e] = new Jf);
        const i = this.events[e].add(r);
        return e === "change" ? () => {
            i(),
            Be.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : i
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, r) {
        this.passiveEffect = e,
        this.stopPassiveEffect = r
    }
    set(e, r=!0) {
        !r || !this.passiveEffect ? this.updateAndNotify(e, r) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, r, i) {
        this.set(r),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, r=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        r && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = Tn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Py)
            return 0;
        const r = Math.min(this.updatedAt - this.prevUpdatedAt, Py);
        return qw(parseFloat(this.current) - parseFloat(this.prevFrameValue), r)
    }
    start(e) {
        return this.stop(),
        new Promise(r => {
            this.hasAnimated = !0,
            this.animation = e(r),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function xo(t, e) {
    return new fR(t,e)
}
function hR(t, e, r) {
    t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, xo(r))
}
function pR(t, e) {
    const r = $l(t, e);
    let {transitionEnd: i={}, transition: a={}, ...u} = r || {};
    u = {
        ...u,
        ...i
    };
    for (const c in u) {
        const f = __(u[c]);
        hR(t, c, f)
    }
}
function mR(t) {
    return !!(wt(t) && t.add)
}
function Xd(t, e) {
    const r = t.getValue("willChange");
    if (mR(r))
        return r.add(e)
}
function Ww(t) {
    return t.props[Ew]
}
const Kw = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t
  , gR = 1e-7
  , yR = 12;
function vR(t, e, r, i, a) {
    let u, c, f = 0;
    do
        c = e + (r - e) / 2,
        u = Kw(c, i, a) - t,
        u > 0 ? r = c : e = c;
    while (Math.abs(u) > gR && ++f < yR);
    return c
}
function Mo(t, e, r, i) {
    if (t === e && r === i)
        return Bt;
    const a = u => vR(u, 0, 1, t, r);
    return u => u === 0 || u === 1 ? u : Kw(a(u), e, i)
}
const Qw = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , Gw = t => e => 1 - t(1 - e)
  , Yw = Mo(.33, 1.53, .69, .99)
  , Zf = Gw(Yw)
  , Xw = Qw(Zf)
  , Jw = t => (t *= 2) < 1 ? .5 * Zf(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , eh = t => 1 - Math.sin(Math.acos(t))
  , Zw = Gw(eh)
  , ex = Qw(eh)
  , tx = t => /^0[^.\s]+$/u.test(t);
function wR(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || tx(t) : !0
}
const nx = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
  , xR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function SR(t) {
    const e = xR.exec(t);
    if (!e)
        return [, ];
    const [,r,i,a] = e;
    return [`--${r ?? i}`, a]
}
function rx(t, e, r=1) {
    const [i,a] = SR(t);
    if (!i)
        return;
    const u = window.getComputedStyle(e).getPropertyValue(i);
    if (u) {
        const c = u.trim();
        return nx(c) ? parseFloat(c) : c
    }
    return zf(a) ? rx(a, e, r + 1) : a
}
const bR = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , _y = t => t === ci || t === ve
  , Ry = (t, e) => parseFloat(t.split(", ")[e])
  , Ay = (t, e) => (r, {transform: i}) => {
    if (i === "none" || !i)
        return 0;
    const a = i.match(/^matrix3d\((.+)\)$/u);
    if (a)
        return Ry(a[1], e);
    {
        const u = i.match(/^matrix\((.+)\)$/u);
        return u ? Ry(u[1], t) : 0
    }
}
  , ER = new Set(["x", "y", "z"])
  , kR = Lo.filter(t => !ER.has(t));
function TR(t) {
    const e = [];
    return kR.forEach(r => {
        const i = t.getValue(r);
        i !== void 0 && (e.push([r, i.get()]),
        i.set(r.startsWith("scale") ? 1 : 0))
    }
    ),
    e
}
const si = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: r="0"}) => t.max - t.min - parseFloat(e) - parseFloat(r),
    height: ({y: t}, {paddingTop: e="0", paddingBottom: r="0"}) => t.max - t.min - parseFloat(e) - parseFloat(r),
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: Ay(4, 13),
    y: Ay(5, 14)
};
si.translateX = si.x;
si.translateY = si.y;
const sx = t => e => e.test(t)
  , CR = {
    test: t => t === "auto",
    parse: t => t
}
  , ix = [ci, ve, kn, fr, O_, N_, CR]
  , Ny = t => ix.find(sx(t))
  , ss = new Set;
let Jd = !1
  , Zd = !1;
function ox() {
    if (Zd) {
        const t = Array.from(ss).filter(i => i.needsMeasurement)
          , e = new Set(t.map(i => i.element))
          , r = new Map;
        e.forEach(i => {
            const a = TR(i);
            a.length && (r.set(i, a),
            i.render())
        }
        ),
        t.forEach(i => i.measureInitialState()),
        e.forEach(i => {
            i.render();
            const a = r.get(i);
            a && a.forEach( ([u,c]) => {
                var f;
                (f = i.getValue(u)) === null || f === void 0 || f.set(c)
            }
            )
        }
        ),
        t.forEach(i => i.measureEndState()),
        t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        }
        )
    }
    Zd = !1,
    Jd = !1,
    ss.forEach(t => t.complete()),
    ss.clear()
}
function ax() {
    ss.forEach(t => {
        t.readKeyframes(),
        t.needsMeasurement && (Zd = !0)
    }
    )
}
function PR() {
    ax(),
    ox()
}
class th {
    constructor(e, r, i, a, u, c=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = r,
        this.name = i,
        this.motionValue = a,
        this.element = u,
        this.isAsync = c
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (ss.add(this),
        Jd || (Jd = !0,
        Be.read(ax),
        Be.resolveKeyframes(ox))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, name: r, element: i, motionValue: a} = this;
        for (let u = 0; u < e.length; u++)
            if (e[u] === null)
                if (u === 0) {
                    const c = a == null ? void 0 : a.get()
                      , f = e[e.length - 1];
                    if (c !== void 0)
                        e[0] = c;
                    else if (i && r) {
                        const h = i.readValue(r, f);
                        h != null && (e[0] = h)
                    }
                    e[0] === void 0 && (e[0] = f),
                    a && c === void 0 && a.set(e[0])
                } else
                    e[u] = e[u - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        ss.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        ss.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const fo = t => Math.round(t * 1e5) / 1e5
  , nh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function _R(t) {
    return t == null
}
const RR = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , rh = (t, e) => r => !!(typeof r == "string" && RR.test(r) && r.startsWith(t) || e && !_R(r) && Object.prototype.hasOwnProperty.call(r, e))
  , lx = (t, e, r) => i => {
    if (typeof i != "string")
        return i;
    const [a,u,c,f] = i.match(nh);
    return {
        [t]: parseFloat(a),
        [e]: parseFloat(u),
        [r]: parseFloat(c),
        alpha: f !== void 0 ? parseFloat(f) : 1
    }
}
  , AR = t => zn(0, 255, t)
  , ad = {
    ...ci,
    transform: t => Math.round(AR(t))
}
  , Kr = {
    test: rh("rgb", "red"),
    parse: lx("red", "green", "blue"),
    transform: ({red: t, green: e, blue: r, alpha: i=1}) => "rgba(" + ad.transform(t) + ", " + ad.transform(e) + ", " + ad.transform(r) + ", " + fo(wo.transform(i)) + ")"
};
function NR(t) {
    let e = ""
      , r = ""
      , i = ""
      , a = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    r = t.substring(3, 5),
    i = t.substring(5, 7),
    a = t.substring(7, 9)) : (e = t.substring(1, 2),
    r = t.substring(2, 3),
    i = t.substring(3, 4),
    a = t.substring(4, 5),
    e += e,
    r += r,
    i += i,
    a += a),
    {
        red: parseInt(e, 16),
        green: parseInt(r, 16),
        blue: parseInt(i, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const ef = {
    test: rh("#"),
    parse: NR,
    transform: Kr.transform
}
  , Fs = {
    test: rh("hsl", "hue"),
    parse: lx("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: r, alpha: i=1}) => "hsla(" + Math.round(t) + ", " + kn.transform(fo(e)) + ", " + kn.transform(fo(r)) + ", " + fo(wo.transform(i)) + ")"
}
  , yt = {
    test: t => Kr.test(t) || ef.test(t) || Fs.test(t),
    parse: t => Kr.test(t) ? Kr.parse(t) : Fs.test(t) ? Fs.parse(t) : ef.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Kr.transform(t) : Fs.transform(t)
}
  , OR = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function LR(t) {
    var e, r;
    return isNaN(t) && typeof t == "string" && (((e = t.match(nh)) === null || e === void 0 ? void 0 : e.length) || 0) + (((r = t.match(OR)) === null || r === void 0 ? void 0 : r.length) || 0) > 0
}
const ux = "number"
  , cx = "color"
  , DR = "var"
  , MR = "var("
  , Oy = "${}"
  , jR = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function So(t) {
    const e = t.toString()
      , r = []
      , i = {
        color: [],
        number: [],
        var: []
    }
      , a = [];
    let u = 0;
    const f = e.replace(jR, h => (yt.test(h) ? (i.color.push(u),
    a.push(cx),
    r.push(yt.parse(h))) : h.startsWith(MR) ? (i.var.push(u),
    a.push(DR),
    r.push(h)) : (i.number.push(u),
    a.push(ux),
    r.push(parseFloat(h))),
    ++u,
    Oy)).split(Oy);
    return {
        values: r,
        split: f,
        indexes: i,
        types: a
    }
}
function dx(t) {
    return So(t).values
}
function fx(t) {
    const {split: e, types: r} = So(t)
      , i = e.length;
    return a => {
        let u = "";
        for (let c = 0; c < i; c++)
            if (u += e[c],
            a[c] !== void 0) {
                const f = r[c];
                f === ux ? u += fo(a[c]) : f === cx ? u += yt.transform(a[c]) : u += a[c]
            }
        return u
    }
}
const IR = t => typeof t == "number" ? 0 : t;
function FR(t) {
    const e = dx(t);
    return fx(t)(e.map(IR))
}
const Tr = {
    test: LR,
    parse: dx,
    createTransformer: fx,
    getAnimatableNone: FR
}
  , VR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function BR(t) {
    const [e,r] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [i] = r.match(nh) || [];
    if (!i)
        return t;
    const a = r.replace(i, "");
    let u = VR.has(e) ? 1 : 0;
    return i !== r && (u *= 100),
    e + "(" + u + a + ")"
}
const UR = /\b([a-z-]*)\(.*?\)/gu
  , tf = {
    ...Tr,
    getAnimatableNone: t => {
        const e = t.match(UR);
        return e ? e.map(BR).join(" ") : t
    }
}
  , zR = {
    ...Uf,
    color: yt,
    backgroundColor: yt,
    outlineColor: yt,
    fill: yt,
    stroke: yt,
    borderColor: yt,
    borderTopColor: yt,
    borderRightColor: yt,
    borderBottomColor: yt,
    borderLeftColor: yt,
    filter: tf,
    WebkitFilter: tf
}
  , sh = t => zR[t];
function hx(t, e) {
    let r = sh(t);
    return r !== tf && (r = Tr),
    r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
}
const $R = new Set(["auto", "none", "0"]);
function HR(t, e, r) {
    let i = 0, a;
    for (; i < t.length && !a; ) {
        const u = t[i];
        typeof u == "string" && !$R.has(u) && So(u).values.length && (a = t[i]),
        i++
    }
    if (a && r)
        for (const u of e)
            t[u] = hx(r, a)
}
class px extends th {
    constructor(e, r, i, a, u) {
        super(e, r, i, a, u, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, element: r, name: i} = this;
        if (!r || !r.current)
            return;
        super.readKeyframes();
        for (let h = 0; h < e.length; h++) {
            let m = e[h];
            if (typeof m == "string" && (m = m.trim(),
            zf(m))) {
                const g = rx(m, r.current);
                g !== void 0 && (e[h] = g),
                h === e.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(),
        !bR.has(i) || e.length !== 2)
            return;
        const [a,u] = e
          , c = Ny(a)
          , f = Ny(u);
        if (c !== f)
            if (_y(c) && _y(f))
                for (let h = 0; h < e.length; h++) {
                    const m = e[h];
                    typeof m == "string" && (e[h] = parseFloat(m))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: e, name: r} = this
          , i = [];
        for (let a = 0; a < e.length; a++)
            wR(e[a]) && i.push(a);
        i.length && HR(e, i, r)
    }
    measureInitialState() {
        const {element: e, unresolvedKeyframes: r, name: i} = this;
        if (!e || !e.current)
            return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = si[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
        r[0] = this.measuredOrigin;
        const a = r[r.length - 1];
        a !== void 0 && e.getValue(i, a).jump(a, !1)
    }
    measureEndState() {
        var e;
        const {element: r, name: i, unresolvedKeyframes: a} = this;
        if (!r || !r.current)
            return;
        const u = r.getValue(i);
        u && u.jump(this.measuredOrigin, !1);
        const c = a.length - 1
          , f = a[c];
        a[c] = si[i](r.measureViewportBox(), window.getComputedStyle(r.current)),
        f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
        !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach( ([h,m]) => {
            r.getValue(h).set(m)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Ly = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Tr.test(t) || t === "0") && !t.startsWith("url("));
function qR(t) {
    const e = t[0];
    if (t.length === 1)
        return !0;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== e)
            return !0
}
function WR(t, e, r, i) {
    const a = t[0];
    if (a === null)
        return !1;
    if (e === "display" || e === "visibility")
        return !0;
    const u = t[t.length - 1]
      , c = Ly(a, e)
      , f = Ly(u, e);
    return !c || !f ? !1 : qR(t) || (r === "spring" || Kf(r)) && i
}
const KR = t => t !== null;
function Hl(t, {repeat: e, repeatType: r="loop"}, i) {
    const a = t.filter(KR)
      , u = e && r !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
    return !u || i === void 0 ? a[u] : i
}
const QR = 40;
class mx {
    constructor({autoplay: e=!0, delay: r=0, type: i="keyframes", repeat: a=0, repeatDelay: u=0, repeatType: c="loop", ...f}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = Tn.now(),
        this.options = {
            autoplay: e,
            delay: r,
            type: i,
            repeat: a,
            repeatDelay: u,
            repeatType: c,
            ...f
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > QR ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && PR(),
        this._resolved
    }
    onKeyframesResolved(e, r) {
        this.resolvedAt = Tn.now(),
        this.hasAttemptedResolve = !0;
        const {name: i, type: a, velocity: u, delay: c, onComplete: f, onUpdate: h, isGenerator: m} = this.options;
        if (!m && !WR(e, i, a, u))
            if (c)
                this.options.duration = 0;
            else {
                h == null || h(Hl(e, this.options, r)),
                f == null || f(),
                this.resolveFinishedPromise();
                return
            }
        const g = this.initPlayback(e, r);
        g !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: r,
            ...g
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(e, r) {
        return this.currentFinishedPromise.then(e, r)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        }
        )
    }
}
const He = (t, e, r) => t + (e - t) * r;
function ld(t, e, r) {
    return r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
}
function GR({hue: t, saturation: e, lightness: r, alpha: i}) {
    t /= 360,
    e /= 100,
    r /= 100;
    let a = 0
      , u = 0
      , c = 0;
    if (!e)
        a = u = c = r;
    else {
        const f = r < .5 ? r * (1 + e) : r + e - r * e
          , h = 2 * r - f;
        a = ld(h, f, t + 1 / 3),
        u = ld(h, f, t),
        c = ld(h, f, t - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(u * 255),
        blue: Math.round(c * 255),
        alpha: i
    }
}
function Cl(t, e) {
    return r => r > 0 ? e : t
}
const ud = (t, e, r) => {
    const i = t * t
      , a = r * (e * e - i) + i;
    return a < 0 ? 0 : Math.sqrt(a)
}
  , YR = [ef, Kr, Fs]
  , XR = t => YR.find(e => e.test(t));
function Dy(t) {
    const e = XR(t);
    if (!e)
        return !1;
    let r = e.parse(t);
    return e === Fs && (r = GR(r)),
    r
}
const My = (t, e) => {
    const r = Dy(t)
      , i = Dy(e);
    if (!r || !i)
        return Cl(t, e);
    const a = {
        ...r
    };
    return u => (a.red = ud(r.red, i.red, u),
    a.green = ud(r.green, i.green, u),
    a.blue = ud(r.blue, i.blue, u),
    a.alpha = He(r.alpha, i.alpha, u),
    Kr.transform(a))
}
  , JR = (t, e) => r => e(t(r))
  , jo = (...t) => t.reduce(JR)
  , nf = new Set(["none", "hidden"]);
function ZR(t, e) {
    return nf.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t
}
function eA(t, e) {
    return r => He(t, e, r)
}
function ih(t) {
    return typeof t == "number" ? eA : typeof t == "string" ? zf(t) ? Cl : yt.test(t) ? My : rA : Array.isArray(t) ? gx : typeof t == "object" ? yt.test(t) ? My : tA : Cl
}
function gx(t, e) {
    const r = [...t]
      , i = r.length
      , a = t.map( (u, c) => ih(u)(u, e[c]));
    return u => {
        for (let c = 0; c < i; c++)
            r[c] = a[c](u);
        return r
    }
}
function tA(t, e) {
    const r = {
        ...t,
        ...e
    }
      , i = {};
    for (const a in r)
        t[a] !== void 0 && e[a] !== void 0 && (i[a] = ih(t[a])(t[a], e[a]));
    return a => {
        for (const u in i)
            r[u] = i[u](a);
        return r
    }
}
function nA(t, e) {
    var r;
    const i = []
      , a = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let u = 0; u < e.values.length; u++) {
        const c = e.types[u]
          , f = t.indexes[c][a[c]]
          , h = (r = t.values[f]) !== null && r !== void 0 ? r : 0;
        i[u] = h,
        a[c]++
    }
    return i
}
const rA = (t, e) => {
    const r = Tr.createTransformer(e)
      , i = So(t)
      , a = So(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? nf.has(t) && !a.values.length || nf.has(e) && !i.values.length ? ZR(t, e) : jo(gx(nA(i, a), a.values), r) : Cl(t, e)
}
;
function yx(t, e, r) {
    return typeof t == "number" && typeof e == "number" && typeof r == "number" ? He(t, e, r) : ih(t)(t, e)
}
const sA = 5;
function vx(t, e, r) {
    const i = Math.max(e - sA, 0);
    return qw(r - t(i), e - i)
}
const Ke = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , cd = .001;
function iA({duration: t=Ke.duration, bounce: e=Ke.bounce, velocity: r=Ke.velocity, mass: i=Ke.mass}) {
    let a, u, c = 1 - e;
    c = zn(Ke.minDamping, Ke.maxDamping, c),
    t = zn(Ke.minDuration, Ke.maxDuration, Un(t)),
    c < 1 ? (a = m => {
        const g = m * c
          , y = g * t
          , w = g - r
          , k = rf(m, c)
          , x = Math.exp(-y);
        return cd - w / k * x
    }
    ,
    u = m => {
        const y = m * c * t
          , w = y * r + r
          , k = Math.pow(c, 2) * Math.pow(m, 2) * t
          , x = Math.exp(-y)
          , b = rf(Math.pow(m, 2), c);
        return (-a(m) + cd > 0 ? -1 : 1) * ((w - k) * x) / b
    }
    ) : (a = m => {
        const g = Math.exp(-m * t)
          , y = (m - r) * t + 1;
        return -cd + g * y
    }
    ,
    u = m => {
        const g = Math.exp(-m * t)
          , y = (r - m) * (t * t);
        return g * y
    }
    );
    const f = 5 / t
      , h = aA(a, u, f);
    if (t = Bn(t),
    isNaN(h))
        return {
            stiffness: Ke.stiffness,
            damping: Ke.damping,
            duration: t
        };
    {
        const m = Math.pow(h, 2) * i;
        return {
            stiffness: m,
            damping: c * 2 * Math.sqrt(i * m),
            duration: t
        }
    }
}
const oA = 12;
function aA(t, e, r) {
    let i = r;
    for (let a = 1; a < oA; a++)
        i = i - t(i) / e(i);
    return i
}
function rf(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const lA = ["duration", "bounce"]
  , uA = ["stiffness", "damping", "mass"];
function jy(t, e) {
    return e.some(r => t[r] !== void 0)
}
function cA(t) {
    let e = {
        velocity: Ke.velocity,
        stiffness: Ke.stiffness,
        damping: Ke.damping,
        mass: Ke.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!jy(t, uA) && jy(t, lA))
        if (t.visualDuration) {
            const r = t.visualDuration
              , i = 2 * Math.PI / (r * 1.2)
              , a = i * i
              , u = 2 * zn(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
            e = {
                ...e,
                mass: Ke.mass,
                stiffness: a,
                damping: u
            }
        } else {
            const r = iA(t);
            e = {
                ...e,
                ...r,
                mass: Ke.mass
            },
            e.isResolvedFromDuration = !0
        }
    return e
}
function wx(t=Ke.visualDuration, e=Ke.bounce) {
    const r = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {restSpeed: i, restDelta: a} = r;
    const u = r.keyframes[0]
      , c = r.keyframes[r.keyframes.length - 1]
      , f = {
        done: !1,
        value: u
    }
      , {stiffness: h, damping: m, mass: g, duration: y, velocity: w, isResolvedFromDuration: k} = cA({
        ...r,
        velocity: -Un(r.velocity || 0)
    })
      , x = w || 0
      , b = m / (2 * Math.sqrt(h * g))
      , S = c - u
      , R = Un(Math.sqrt(h / g))
      , B = Math.abs(S) < 5;
    i || (i = B ? Ke.restSpeed.granular : Ke.restSpeed.default),
    a || (a = B ? Ke.restDelta.granular : Ke.restDelta.default);
    let M;
    if (b < 1) {
        const U = rf(R, b);
        M = Y => {
            const ee = Math.exp(-b * R * Y);
            return c - ee * ((x + b * R * S) / U * Math.sin(U * Y) + S * Math.cos(U * Y))
        }
    } else if (b === 1)
        M = U => c - Math.exp(-R * U) * (S + (x + R * S) * U);
    else {
        const U = R * Math.sqrt(b * b - 1);
        M = Y => {
            const ee = Math.exp(-b * R * Y)
              , N = Math.min(U * Y, 300);
            return c - ee * ((x + b * R * S) * Math.sinh(N) + U * S * Math.cosh(N)) / U
        }
    }
    const j = {
        calculatedDuration: k && y || null,
        next: U => {
            const Y = M(U);
            if (k)
                f.done = U >= y;
            else {
                let ee = 0;
                b < 1 && (ee = U === 0 ? Bn(x) : vx(M, U, Y));
                const N = Math.abs(ee) <= i
                  , q = Math.abs(c - Y) <= a;
                f.done = N && q
            }
            return f.value = f.done ? c : Y,
            f
        }
        ,
        toString: () => {
            const U = Math.min(Fw(j), Gd)
              , Y = Vw(ee => j.next(U * ee).value, U, 30);
            return U + "ms " + Y
        }
    };
    return j
}
function Iy({keyframes: t, velocity: e=0, power: r=.8, timeConstant: i=325, bounceDamping: a=10, bounceStiffness: u=500, modifyTarget: c, min: f, max: h, restDelta: m=.5, restSpeed: g}) {
    const y = t[0]
      , w = {
        done: !1,
        value: y
    }
      , k = N => f !== void 0 && N < f || h !== void 0 && N > h
      , x = N => f === void 0 ? h : h === void 0 || Math.abs(f - N) < Math.abs(h - N) ? f : h;
    let b = r * e;
    const S = y + b
      , R = c === void 0 ? S : c(S);
    R !== S && (b = R - y);
    const B = N => -b * Math.exp(-N / i)
      , M = N => R + B(N)
      , j = N => {
        const q = B(N)
          , Q = M(N);
        w.done = Math.abs(q) <= m,
        w.value = w.done ? R : Q
    }
    ;
    let U, Y;
    const ee = N => {
        k(w.value) && (U = N,
        Y = wx({
            keyframes: [w.value, x(w.value)],
            velocity: vx(M, N, w.value),
            damping: a,
            stiffness: u,
            restDelta: m,
            restSpeed: g
        }))
    }
    ;
    return ee(0),
    {
        calculatedDuration: null,
        next: N => {
            let q = !1;
            return !Y && U === void 0 && (q = !0,
            j(N),
            ee(N)),
            U !== void 0 && N >= U ? Y.next(N - U) : (!q && j(N),
            w)
        }
    }
}
const dA = Mo(.42, 0, 1, 1)
  , fA = Mo(0, 0, .58, 1)
  , xx = Mo(.42, 0, .58, 1)
  , hA = t => Array.isArray(t) && typeof t[0] != "number"
  , pA = {
    linear: Bt,
    easeIn: dA,
    easeInOut: xx,
    easeOut: fA,
    circIn: eh,
    circInOut: ex,
    circOut: Zw,
    backIn: Zf,
    backInOut: Xw,
    backOut: Yw,
    anticipate: Jw
}
  , Fy = t => {
    if (Qf(t)) {
        vw(t.length === 4);
        const [e,r,i,a] = t;
        return Mo(e, r, i, a)
    } else if (typeof t == "string")
        return pA[t];
    return t
}
;
function mA(t, e, r) {
    const i = []
      , a = r || yx
      , u = t.length - 1;
    for (let c = 0; c < u; c++) {
        let f = a(t[c], t[c + 1]);
        if (e) {
            const h = Array.isArray(e) ? e[c] || Bt : e;
            f = jo(h, f)
        }
        i.push(f)
    }
    return i
}
function gA(t, e, {clamp: r=!0, ease: i, mixer: a}={}) {
    const u = t.length;
    if (vw(u === e.length),
    u === 1)
        return () => e[0];
    if (u === 2 && t[0] === t[1])
        return () => e[1];
    t[0] > t[u - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const c = mA(e, i, a)
      , f = c.length
      , h = m => {
        let g = 0;
        if (f > 1)
            for (; g < t.length - 2 && !(m < t[g + 1]); g++)
                ;
        const y = ni(t[g], t[g + 1], m);
        return c[g](y)
    }
    ;
    return r ? m => h(zn(t[0], t[u - 1], m)) : h
}
function yA(t, e) {
    const r = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const a = ni(0, e, i);
        t.push(He(r, 1, a))
    }
}
function vA(t) {
    const e = [0];
    return yA(e, t.length - 1),
    e
}
function wA(t, e) {
    return t.map(r => r * e)
}
function xA(t, e) {
    return t.map( () => e || xx).splice(0, t.length - 1)
}
function Pl({duration: t=300, keyframes: e, times: r, ease: i="easeInOut"}) {
    const a = hA(i) ? i.map(Fy) : Fy(i)
      , u = {
        done: !1,
        value: e[0]
    }
      , c = wA(r && r.length === e.length ? r : vA(e), t)
      , f = gA(c, e, {
        ease: Array.isArray(a) ? a : xA(e, a)
    });
    return {
        calculatedDuration: t,
        next: h => (u.value = f(h),
        u.done = h >= t,
        u)
    }
}
const SA = t => {
    const e = ({timestamp: r}) => t(r);
    return {
        start: () => Be.update(e, !0),
        stop: () => kr(e),
        now: () => dt.isProcessing ? dt.timestamp : Tn.now()
    }
}
  , bA = {
    decay: Iy,
    inertia: Iy,
    tween: Pl,
    keyframes: Pl,
    spring: wx
}
  , EA = t => t / 100;
class oh extends mx {
    constructor(e) {
        super(e),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: h} = this.options;
            h && h()
        }
        ;
        const {name: r, motionValue: i, element: a, keyframes: u} = this.options
          , c = (a == null ? void 0 : a.KeyframeResolver) || th
          , f = (h, m) => this.onKeyframesResolved(h, m);
        this.resolver = new c(u,f,r,i,a),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {type: r="keyframes", repeat: i=0, repeatDelay: a=0, repeatType: u, velocity: c=0} = this.options
          , f = Kf(r) ? r : bA[r] || Pl;
        let h, m;
        f !== Pl && typeof e[0] != "number" && (h = jo(EA, yx(e[0], e[1])),
        e = [0, 100]);
        const g = f({
            ...this.options,
            keyframes: e
        });
        u === "mirror" && (m = f({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -c
        })),
        g.calculatedDuration === null && (g.calculatedDuration = Fw(g));
        const {calculatedDuration: y} = g
          , w = y + a
          , k = w * (i + 1) - a;
        return {
            generator: g,
            mirroredGenerator: m,
            mapPercentToKeyframes: h,
            calculatedDuration: y,
            resolvedDuration: w,
            totalDuration: k
        }
    }
    onPostResolved() {
        const {autoplay: e=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, r=!1) {
        const {resolved: i} = this;
        if (!i) {
            const {keyframes: N} = this.options;
            return {
                done: !0,
                value: N[N.length - 1]
            }
        }
        const {finalKeyframe: a, generator: u, mirroredGenerator: c, mapPercentToKeyframes: f, keyframes: h, calculatedDuration: m, totalDuration: g, resolvedDuration: y} = i;
        if (this.startTime === null)
            return u.next(0);
        const {delay: w, repeat: k, repeatType: x, repeatDelay: b, onUpdate: S} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - g / this.speed, this.startTime)),
        r ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const R = this.currentTime - w * (this.speed >= 0 ? 1 : -1)
          , B = this.speed >= 0 ? R < 0 : R > g;
        this.currentTime = Math.max(R, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let M = this.currentTime
          , j = u;
        if (k) {
            const N = Math.min(this.currentTime, g) / y;
            let q = Math.floor(N)
              , Q = N % 1;
            !Q && N >= 1 && (Q = 1),
            Q === 1 && q--,
            q = Math.min(q, k + 1),
            !!(q % 2) && (x === "reverse" ? (Q = 1 - Q,
            b && (Q -= b / y)) : x === "mirror" && (j = c)),
            M = zn(0, 1, Q) * y
        }
        const U = B ? {
            done: !1,
            value: h[0]
        } : j.next(M);
        f && (U.value = f(U.value));
        let {done: Y} = U;
        !B && m !== null && (Y = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const ee = this.holdTime === null && (this.state === "finished" || this.state === "running" && Y);
        return ee && a !== void 0 && (U.value = Hl(h, this.options, a)),
        S && S(U.value),
        ee && this.finish(),
        U
    }
    get duration() {
        const {resolved: e} = this;
        return e ? Un(e.calculatedDuration) : 0
    }
    get time() {
        return Un(this.currentTime)
    }
    set time(e) {
        e = Bn(e),
        this.currentTime = e,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const r = this.playbackSpeed !== e;
        this.playbackSpeed = e,
        r && (this.time = Un(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: e=SA, onPlay: r, startTime: i} = this.options;
        this.driver || (this.driver = e(u => this.tick(u))),
        r && r();
        const a = this.driver.now();
        this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = i ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: e} = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
}
const kA = new Set(["opacity", "clipPath", "filter", "transform"]);
function TA(t, e, r, {delay: i=0, duration: a=300, repeat: u=0, repeatType: c="loop", ease: f="easeInOut", times: h}={}) {
    const m = {
        [e]: r
    };
    h && (m.offset = h);
    const g = Uw(f, a);
    return Array.isArray(g) && (m.easing = g),
    t.animate(m, {
        delay: i,
        duration: a,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: u + 1,
        direction: c === "reverse" ? "alternate" : "normal"
    })
}
const CA = Nf( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , _l = 10
  , PA = 2e4;
function _A(t) {
    return Kf(t.type) || t.type === "spring" || !Bw(t.ease)
}
function RA(t, e) {
    const r = new oh({
        ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const a = [];
    let u = 0;
    for (; !i.done && u < PA; )
        i = r.sample(u),
        a.push(i.value),
        u += _l;
    return {
        times: void 0,
        keyframes: a,
        duration: u - _l,
        ease: "linear"
    }
}
const Sx = {
    anticipate: Jw,
    backInOut: Xw,
    circInOut: ex
};
function AA(t) {
    return t in Sx
}
class Vy extends mx {
    constructor(e) {
        super(e);
        const {name: r, motionValue: i, element: a, keyframes: u} = this.options;
        this.resolver = new px(u, (c, f) => this.onKeyframesResolved(c, f),r,i,a),
        this.resolver.scheduleResolve()
    }
    initPlayback(e, r) {
        var i;
        let {duration: a=300, times: u, ease: c, type: f, motionValue: h, name: m, startTime: g} = this.options;
        if (!(!((i = h.owner) === null || i === void 0) && i.current))
            return !1;
        if (typeof c == "string" && Tl() && AA(c) && (c = Sx[c]),
        _A(this.options)) {
            const {onComplete: w, onUpdate: k, motionValue: x, element: b, ...S} = this.options
              , R = RA(e, S);
            e = R.keyframes,
            e.length === 1 && (e[1] = e[0]),
            a = R.duration,
            u = R.times,
            c = R.ease,
            f = "keyframes"
        }
        const y = TA(h.owner.current, m, e, {
            ...this.options,
            duration: a,
            times: u,
            ease: c
        });
        return y.startTime = g ?? this.calcStartTime(),
        this.pendingTimeline ? (Ey(y, this.pendingTimeline),
        this.pendingTimeline = void 0) : y.onfinish = () => {
            const {onComplete: w} = this.options;
            h.set(Hl(e, this.options, r)),
            w && w(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: y,
            duration: a,
            times: u,
            type: f,
            ease: c,
            keyframes: e
        }
    }
    get duration() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {duration: r} = e;
        return Un(r)
    }
    get time() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {animation: r} = e;
        return Un(r.currentTime || 0)
    }
    set time(e) {
        const {resolved: r} = this;
        if (!r)
            return;
        const {animation: i} = r;
        i.currentTime = Bn(e)
    }
    get speed() {
        const {resolved: e} = this;
        if (!e)
            return 1;
        const {animation: r} = e;
        return r.playbackRate
    }
    set speed(e) {
        const {resolved: r} = this;
        if (!r)
            return;
        const {animation: i} = r;
        i.playbackRate = e
    }
    get state() {
        const {resolved: e} = this;
        if (!e)
            return "idle";
        const {animation: r} = e;
        return r.playState
    }
    get startTime() {
        const {resolved: e} = this;
        if (!e)
            return null;
        const {animation: r} = e;
        return r.startTime
    }
    attachTimeline(e) {
        if (!this._resolved)
            this.pendingTimeline = e;
        else {
            const {resolved: r} = this;
            if (!r)
                return Bt;
            const {animation: i} = r;
            Ey(i, e)
        }
        return Bt
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r} = e;
        r.playState === "finished" && this.updateFinishedPromise(),
        r.play()
    }
    pause() {
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r} = e;
        r.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r, keyframes: i, duration: a, type: u, ease: c, times: f} = e;
        if (r.playState === "idle" || r.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: m, onUpdate: g, onComplete: y, element: w, ...k} = this.options
              , x = new oh({
                ...k,
                keyframes: i,
                duration: a,
                type: u,
                ease: c,
                times: f,
                isGenerator: !0
            })
              , b = Bn(this.time);
            m.setWithVelocity(x.sample(b - _l).value, x.sample(b).value, _l)
        }
        const {onStop: h} = this.options;
        h && h(),
        this.cancel()
    }
    complete() {
        const {resolved: e} = this;
        e && e.animation.finish()
    }
    cancel() {
        const {resolved: e} = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {motionValue: r, name: i, repeatDelay: a, repeatType: u, damping: c, type: f} = e;
        return CA() && i && kA.has(i) && r && r.owner && r.owner.current instanceof HTMLElement && !r.owner.getProps().onUpdate && !a && u !== "mirror" && c !== 0 && f !== "inertia"
    }
}
const NA = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , OA = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , LA = {
    type: "keyframes",
    duration: .8
}
  , DA = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , MA = (t, {keyframes: e}) => e.length > 2 ? LA : as.has(t) ? t.startsWith("scale") ? OA(e[1]) : NA : DA;
function jA({when: t, delay: e, delayChildren: r, staggerChildren: i, staggerDirection: a, repeat: u, repeatType: c, repeatDelay: f, from: h, elapsed: m, ...g}) {
    return !!Object.keys(g).length
}
const ah = (t, e, r, i={}, a, u) => c => {
    const f = Wf(i, t) || {}
      , h = f.delay || i.delay || 0;
    let {elapsed: m=0} = i;
    m = m - Bn(h);
    let g = {
        keyframes: Array.isArray(r) ? r : [null, r],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...f,
        delay: -m,
        onUpdate: w => {
            e.set(w),
            f.onUpdate && f.onUpdate(w)
        }
        ,
        onComplete: () => {
            c(),
            f.onComplete && f.onComplete()
        }
        ,
        name: t,
        motionValue: e,
        element: u ? void 0 : a
    };
    jA(f) || (g = {
        ...g,
        ...MA(t, g)
    }),
    g.duration && (g.duration = Bn(g.duration)),
    g.repeatDelay && (g.repeatDelay = Bn(g.repeatDelay)),
    g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0,
    g.delay === 0 && (y = !0)),
    y && !u && e.get() !== void 0) {
        const w = Hl(g.keyframes, f);
        if (w !== void 0)
            return Be.update( () => {
                g.onUpdate(w),
                g.onComplete()
            }
            ),
            new eR([])
    }
    return !u && Vy.supports(g) ? new Vy(g) : new oh(g)
}
;
function IA({protectedKeys: t, needsAnimating: e}, r) {
    const i = t.hasOwnProperty(r) && e[r] !== !0;
    return e[r] = !1,
    i
}
function bx(t, e, {delay: r=0, transitionOverride: i, type: a}={}) {
    var u;
    let {transition: c=t.getDefaultTransition(), transitionEnd: f, ...h} = e;
    i && (c = i);
    const m = []
      , g = a && t.animationState && t.animationState.getState()[a];
    for (const y in h) {
        const w = t.getValue(y, (u = t.latestValues[y]) !== null && u !== void 0 ? u : null)
          , k = h[y];
        if (k === void 0 || g && IA(g, y))
            continue;
        const x = {
            delay: r,
            ...Wf(c || {}, y)
        };
        let b = !1;
        if (window.MotionHandoffAnimation) {
            const R = Ww(t);
            if (R) {
                const B = window.MotionHandoffAnimation(R, y, Be);
                B !== null && (x.startTime = B,
                b = !0)
            }
        }
        Xd(t, y),
        w.start(ah(y, w, k, t.shouldReduceMotion && as.has(y) ? {
            type: !1
        } : x, t, b));
        const S = w.animation;
        S && m.push(S)
    }
    return f && Promise.all(m).then( () => {
        Be.update( () => {
            f && pR(t, f)
        }
        )
    }
    ),
    m
}
function sf(t, e, r={}) {
    var i;
    const a = $l(t, e, r.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {transition: u=t.getDefaultTransition() || {}} = a || {};
    r.transitionOverride && (u = r.transitionOverride);
    const c = a ? () => Promise.all(bx(t, a, r)) : () => Promise.resolve()
      , f = t.variantChildren && t.variantChildren.size ? (m=0) => {
        const {delayChildren: g=0, staggerChildren: y, staggerDirection: w} = u;
        return FA(t, e, g + m, y, w, r)
    }
    : () => Promise.resolve()
      , {when: h} = u;
    if (h) {
        const [m,g] = h === "beforeChildren" ? [c, f] : [f, c];
        return m().then( () => g())
    } else
        return Promise.all([c(), f(r.delay)])
}
function FA(t, e, r=0, i=0, a=1, u) {
    const c = []
      , f = (t.variantChildren.size - 1) * i
      , h = a === 1 ? (m=0) => m * i : (m=0) => f - m * i;
    return Array.from(t.variantChildren).sort(VA).forEach( (m, g) => {
        m.notify("AnimationStart", e),
        c.push(sf(m, e, {
            ...u,
            delay: r + h(g)
        }).then( () => m.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(c)
}
function VA(t, e) {
    return t.sortNodePosition(e)
}
function BA(t, e, r={}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const a = e.map(u => sf(t, u, r));
        i = Promise.all(a)
    } else if (typeof e == "string")
        i = sf(t, e, r);
    else {
        const a = typeof e == "function" ? $l(t, e, r.custom) : e;
        i = Promise.all(bx(t, a, r))
    }
    return i.then( () => {
        t.notify("AnimationComplete", e)
    }
    )
}
const UA = Df.length;
function Ex(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const r = t.parent ? Ex(t.parent) || {} : {};
        return t.props.initial !== void 0 && (r.initial = t.props.initial),
        r
    }
    const e = {};
    for (let r = 0; r < UA; r++) {
        const i = Df[r]
          , a = t.props[i];
        (vo(a) || a === !1) && (e[i] = a)
    }
    return e
}
const zA = [...Lf].reverse()
  , $A = Lf.length;
function HA(t) {
    return e => Promise.all(e.map( ({animation: r, options: i}) => BA(t, r, i)))
}
function qA(t) {
    let e = HA(t)
      , r = By()
      , i = !0;
    const a = h => (m, g) => {
        var y;
        const w = $l(t, g, h === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (w) {
            const {transition: k, transitionEnd: x, ...b} = w;
            m = {
                ...m,
                ...b,
                ...x
            }
        }
        return m
    }
    ;
    function u(h) {
        e = h(t)
    }
    function c(h) {
        const {props: m} = t
          , g = Ex(t.parent) || {}
          , y = []
          , w = new Set;
        let k = {}
          , x = 1 / 0;
        for (let S = 0; S < $A; S++) {
            const R = zA[S]
              , B = r[R]
              , M = m[R] !== void 0 ? m[R] : g[R]
              , j = vo(M)
              , U = R === h ? B.isActive : null;
            U === !1 && (x = S);
            let Y = M === g[R] && M !== m[R] && j;
            if (Y && i && t.manuallyAnimateOnMount && (Y = !1),
            B.protectedKeys = {
                ...k
            },
            !B.isActive && U === null || !M && !B.prevProp || Ul(M) || typeof M == "boolean")
                continue;
            const ee = WA(B.prevProp, M);
            let N = ee || R === h && B.isActive && !Y && j || S > x && j
              , q = !1;
            const Q = Array.isArray(M) ? M : [M];
            let J = Q.reduce(a(R), {});
            U === !1 && (J = {});
            const {prevResolvedValues: $={}} = B
              , re = {
                ...$,
                ...J
            }
              , Te = de => {
                N = !0,
                w.has(de) && (q = !0,
                w.delete(de)),
                B.needsAnimating[de] = !0;
                const V = t.getValue(de);
                V && (V.liveStyle = !1)
            }
            ;
            for (const de in re) {
                const V = J[de]
                  , le = $[de];
                if (k.hasOwnProperty(de))
                    continue;
                let X = !1;
                Qd(V) && Qd(le) ? X = !Iw(V, le) : X = V !== le,
                X ? V != null ? Te(de) : w.add(de) : V !== void 0 && w.has(de) ? Te(de) : B.protectedKeys[de] = !0
            }
            B.prevProp = M,
            B.prevResolvedValues = J,
            B.isActive && (k = {
                ...k,
                ...J
            }),
            i && t.blockInitialAnimation && (N = !1),
            N && (!(Y && ee) || q) && y.push(...Q.map(de => ({
                animation: de,
                options: {
                    type: R
                }
            })))
        }
        if (w.size) {
            const S = {};
            w.forEach(R => {
                const B = t.getBaseTarget(R)
                  , M = t.getValue(R);
                M && (M.liveStyle = !0),
                S[R] = B ?? null
            }
            ),
            y.push({
                animation: S
            })
        }
        let b = !!y.length;
        return i && (m.initial === !1 || m.initial === m.animate) && !t.manuallyAnimateOnMount && (b = !1),
        i = !1,
        b ? e(y) : Promise.resolve()
    }
    function f(h, m) {
        var g;
        if (r[h].isActive === m)
            return Promise.resolve();
        (g = t.variantChildren) === null || g === void 0 || g.forEach(w => {
            var k;
            return (k = w.animationState) === null || k === void 0 ? void 0 : k.setActive(h, m)
        }
        ),
        r[h].isActive = m;
        const y = c(h);
        for (const w in r)
            r[w].protectedKeys = {};
        return y
    }
    return {
        animateChanges: c,
        setActive: f,
        setAnimateFunction: u,
        getState: () => r,
        reset: () => {
            r = By(),
            i = !0
        }
    }
}
function WA(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !Iw(e, t) : !1
}
function zr(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function By() {
    return {
        animate: zr(!0),
        whileInView: zr(),
        whileHover: zr(),
        whileTap: zr(),
        whileDrag: zr(),
        whileFocus: zr(),
        exit: zr()
    }
}
class Cr {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
class KA extends Cr {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = qA(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        Ul(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: r} = this.node.prevProps || {};
        e !== r && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let QA = 0;
class GA extends Cr {
    constructor() {
        super(...arguments),
        this.id = QA++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: r} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i)
            return;
        const a = this.node.animationState.setActive("exit", !e);
        r && !e && a.then( () => r(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const YA = {
    animation: {
        Feature: KA
    },
    exit: {
        Feature: GA
    }
};
function bo(t, e, r, i={
    passive: !0
}) {
    return t.addEventListener(e, r, i),
    () => t.removeEventListener(e, r)
}
function Io(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const XA = t => e => Gf(e) && t(e, Io(e));
function ho(t, e, r, i) {
    return bo(t, e, XA(r), i)
}
const Uy = (t, e) => Math.abs(t - e);
function JA(t, e) {
    const r = Uy(t.x, e.x)
      , i = Uy(t.y, e.y);
    return Math.sqrt(r ** 2 + i ** 2)
}
class kx {
    constructor(e, r, {transformPagePoint: i, contextWindow: a, dragSnapToOrigin: u=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = fd(this.lastMoveEventInfo, this.history)
              , w = this.startEvent !== null
              , k = JA(y.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!w && !k)
                return;
            const {point: x} = y
              , {timestamp: b} = dt;
            this.history.push({
                ...x,
                timestamp: b
            });
            const {onStart: S, onMove: R} = this.handlers;
            w || (S && S(this.lastMoveEvent, y),
            this.startEvent = this.lastMoveEvent),
            R && R(this.lastMoveEvent, y)
        }
        ,
        this.handlePointerMove = (y, w) => {
            this.lastMoveEvent = y,
            this.lastMoveEventInfo = dd(w, this.transformPagePoint),
            Be.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (y, w) => {
            this.end();
            const {onEnd: k, onSessionEnd: x, resumeAnimation: b} = this.handlers;
            if (this.dragSnapToOrigin && b && b(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const S = fd(y.type === "pointercancel" ? this.lastMoveEventInfo : dd(w, this.transformPagePoint), this.history);
            this.startEvent && k && k(y, S),
            x && x(y, S)
        }
        ,
        !Gf(e))
            return;
        this.dragSnapToOrigin = u,
        this.handlers = r,
        this.transformPagePoint = i,
        this.contextWindow = a || window;
        const c = Io(e)
          , f = dd(c, this.transformPagePoint)
          , {point: h} = f
          , {timestamp: m} = dt;
        this.history = [{
            ...h,
            timestamp: m
        }];
        const {onSessionStart: g} = r;
        g && g(e, fd(f, this.history)),
        this.removeListeners = jo(ho(this.contextWindow, "pointermove", this.handlePointerMove), ho(this.contextWindow, "pointerup", this.handlePointerUp), ho(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        kr(this.updatePoint)
    }
}
function dd(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function zy(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function fd({point: t}, e) {
    return {
        point: t,
        delta: zy(t, Tx(e)),
        offset: zy(t, ZA(e)),
        velocity: e2(e, .1)
    }
}
function ZA(t) {
    return t[0]
}
function Tx(t) {
    return t[t.length - 1]
}
function e2(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let r = t.length - 1
      , i = null;
    const a = Tx(t);
    for (; r >= 0 && (i = t[r],
    !(a.timestamp - i.timestamp > Bn(e))); )
        r--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    const u = Un(a.timestamp - i.timestamp);
    if (u === 0)
        return {
            x: 0,
            y: 0
        };
    const c = {
        x: (a.x - i.x) / u,
        y: (a.y - i.y) / u
    };
    return c.x === 1 / 0 && (c.x = 0),
    c.y === 1 / 0 && (c.y = 0),
    c
}
const Cx = 1e-4
  , t2 = 1 - Cx
  , n2 = 1 + Cx
  , Px = .01
  , r2 = 0 - Px
  , s2 = 0 + Px;
function Ut(t) {
    return t.max - t.min
}
function i2(t, e, r) {
    return Math.abs(t - e) <= r
}
function $y(t, e, r, i=.5) {
    t.origin = i,
    t.originPoint = He(e.min, e.max, t.origin),
    t.scale = Ut(r) / Ut(e),
    t.translate = He(r.min, r.max, t.origin) - t.originPoint,
    (t.scale >= t2 && t.scale <= n2 || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= r2 && t.translate <= s2 || isNaN(t.translate)) && (t.translate = 0)
}
function po(t, e, r, i) {
    $y(t.x, e.x, r.x, i ? i.originX : void 0),
    $y(t.y, e.y, r.y, i ? i.originY : void 0)
}
function Hy(t, e, r) {
    t.min = r.min + e.min,
    t.max = t.min + Ut(e)
}
function o2(t, e, r) {
    Hy(t.x, e.x, r.x),
    Hy(t.y, e.y, r.y)
}
function qy(t, e, r) {
    t.min = e.min - r.min,
    t.max = t.min + Ut(e)
}
function mo(t, e, r) {
    qy(t.x, e.x, r.x),
    qy(t.y, e.y, r.y)
}
function a2(t, {min: e, max: r}, i) {
    return e !== void 0 && t < e ? t = i ? He(e, t, i.min) : Math.max(t, e) : r !== void 0 && t > r && (t = i ? He(r, t, i.max) : Math.min(t, r)),
    t
}
function Wy(t, e, r) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
    }
}
function l2(t, {top: e, left: r, bottom: i, right: a}) {
    return {
        x: Wy(t.x, r, a),
        y: Wy(t.y, e, i)
    }
}
function Ky(t, e) {
    let r = e.min - t.min
      , i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([r,i] = [i, r]),
    {
        min: r,
        max: i
    }
}
function u2(t, e) {
    return {
        x: Ky(t.x, e.x),
        y: Ky(t.y, e.y)
    }
}
function c2(t, e) {
    let r = .5;
    const i = Ut(t)
      , a = Ut(e);
    return a > i ? r = ni(e.min, e.max - i, t.min) : i > a && (r = ni(t.min, t.max - a, e.min)),
    zn(0, 1, r)
}
function d2(t, e) {
    const r = {};
    return e.min !== void 0 && (r.min = e.min - t.min),
    e.max !== void 0 && (r.max = e.max - t.min),
    r
}
const of = .35;
function f2(t=of) {
    return t === !1 ? t = 0 : t === !0 && (t = of),
    {
        x: Qy(t, "left", "right"),
        y: Qy(t, "top", "bottom")
    }
}
function Qy(t, e, r) {
    return {
        min: Gy(t, e),
        max: Gy(t, r)
    }
}
function Gy(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const Yy = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Vs = () => ({
    x: Yy(),
    y: Yy()
})
  , Xy = () => ({
    min: 0,
    max: 0
})
  , Ye = () => ({
    x: Xy(),
    y: Xy()
});
function Gt(t) {
    return [t("x"), t("y")]
}
function _x({top: t, left: e, right: r, bottom: i}) {
    return {
        x: {
            min: e,
            max: r
        },
        y: {
            min: t,
            max: i
        }
    }
}
function h2({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function p2(t, e) {
    if (!e)
        return t;
    const r = e({
        x: t.left,
        y: t.top
    })
      , i = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: r.y,
        left: r.x,
        bottom: i.y,
        right: i.x
    }
}
function hd(t) {
    return t === void 0 || t === 1
}
function af({scale: t, scaleX: e, scaleY: r}) {
    return !hd(t) || !hd(e) || !hd(r)
}
function $r(t) {
    return af(t) || Rx(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function Rx(t) {
    return Jy(t.x) || Jy(t.y)
}
function Jy(t) {
    return t && t !== "0%"
}
function Rl(t, e, r) {
    const i = t - r
      , a = e * i;
    return r + a
}
function Zy(t, e, r, i, a) {
    return a !== void 0 && (t = Rl(t, a, i)),
    Rl(t, r, i) + e
}
function lf(t, e=0, r=1, i, a) {
    t.min = Zy(t.min, e, r, i, a),
    t.max = Zy(t.max, e, r, i, a)
}
function Ax(t, {x: e, y: r}) {
    lf(t.x, e.translate, e.scale, e.originPoint),
    lf(t.y, r.translate, r.scale, r.originPoint)
}
const ev = .999999999999
  , tv = 1.0000000000001;
function m2(t, e, r, i=!1) {
    const a = r.length;
    if (!a)
        return;
    e.x = e.y = 1;
    let u, c;
    for (let f = 0; f < a; f++) {
        u = r[f],
        c = u.projectionDelta;
        const {visualElement: h} = u.options;
        h && h.props.style && h.props.style.display === "contents" || (i && u.options.layoutScroll && u.scroll && u !== u.root && Us(t, {
            x: -u.scroll.offset.x,
            y: -u.scroll.offset.y
        }),
        c && (e.x *= c.x.scale,
        e.y *= c.y.scale,
        Ax(t, c)),
        i && $r(u.latestValues) && Us(t, u.latestValues))
    }
    e.x < tv && e.x > ev && (e.x = 1),
    e.y < tv && e.y > ev && (e.y = 1)
}
function Bs(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function nv(t, e, r, i, a=.5) {
    const u = He(t.min, t.max, a);
    lf(t, e, r, u, i)
}
function Us(t, e) {
    nv(t.x, e.x, e.scaleX, e.scale, e.originX),
    nv(t.y, e.y, e.scaleY, e.scale, e.originY)
}
function Nx(t, e) {
    return _x(p2(t.getBoundingClientRect(), e))
}
function g2(t, e, r) {
    const i = Nx(t, r)
      , {scroll: a} = e;
    return a && (Bs(i.x, a.offset.x),
    Bs(i.y, a.offset.y)),
    i
}
const Ox = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , y2 = new WeakMap;
class v2 {
    constructor(e) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Ye(),
        this.visualElement = e
    }
    start(e, {snapToCursor: r=!1}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const a = g => {
            const {dragSnapToOrigin: y} = this.getProps();
            y ? this.pauseAnimation() : this.stopAnimation(),
            r && this.snapToCursor(Io(g).point)
        }
          , u = (g, y) => {
            const {drag: w, dragPropagation: k, onDragStart: x} = this.getProps();
            if (w && !k && (this.openDragLock && this.openDragLock(),
            this.openDragLock = uR(w),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Gt(S => {
                let R = this.getAxisMotionValue(S).get() || 0;
                if (kn.test(R)) {
                    const {projection: B} = this.visualElement;
                    if (B && B.layout) {
                        const M = B.layout.layoutBox[S];
                        M && (R = Ut(M) * (parseFloat(R) / 100))
                    }
                }
                this.originPoint[S] = R
            }
            ),
            x && Be.postRender( () => x(g, y)),
            Xd(this.visualElement, "transform");
            const {animationState: b} = this.visualElement;
            b && b.setActive("whileDrag", !0)
        }
          , c = (g, y) => {
            const {dragPropagation: w, dragDirectionLock: k, onDirectionLock: x, onDrag: b} = this.getProps();
            if (!w && !this.openDragLock)
                return;
            const {offset: S} = y;
            if (k && this.currentDirection === null) {
                this.currentDirection = w2(S),
                this.currentDirection !== null && x && x(this.currentDirection);
                return
            }
            this.updateAxis("x", y.point, S),
            this.updateAxis("y", y.point, S),
            this.visualElement.render(),
            b && b(g, y)
        }
          , f = (g, y) => this.stop(g, y)
          , h = () => Gt(g => {
            var y;
            return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
        }
        )
          , {dragSnapToOrigin: m} = this.getProps();
        this.panSession = new kx(e,{
            onSessionStart: a,
            onStart: u,
            onMove: c,
            onSessionEnd: f,
            resumeAnimation: h
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: m,
            contextWindow: Ox(this.visualElement)
        })
    }
    stop(e, r) {
        const i = this.isDragging;
        if (this.cancel(),
        !i)
            return;
        const {velocity: a} = r;
        this.startAnimation(a);
        const {onDragEnd: u} = this.getProps();
        u && Be.postRender( () => u(e, r))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: r} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: i} = this.getProps();
        !i && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        r && r.setActive("whileDrag", !1)
    }
    updateAxis(e, r, i) {
        const {drag: a} = this.getProps();
        if (!i || !rl(e, a, this.currentDirection))
            return;
        const u = this.getAxisMotionValue(e);
        let c = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (c = a2(c, this.constraints[e], this.elastic[e])),
        u.set(c)
    }
    resolveConstraints() {
        var e;
        const {dragConstraints: r, dragElastic: i} = this.getProps()
          , a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , u = this.constraints;
        r && Is(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && a ? this.constraints = l2(a.layoutBox, r) : this.constraints = !1,
        this.elastic = f2(i),
        u !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && Gt(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = d2(a.layoutBox[c], this.constraints[c]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: r} = this.getProps();
        if (!e || !Is(e))
            return !1;
        const i = e.current
          , {projection: a} = this.visualElement;
        if (!a || !a.layout)
            return !1;
        const u = g2(i, a.root, this.visualElement.getTransformPagePoint());
        let c = u2(a.layout.layoutBox, u);
        if (r) {
            const f = r(h2(c));
            this.hasMutatedConstraints = !!f,
            f && (c = _x(f))
        }
        return c
    }
    startAnimation(e) {
        const {drag: r, dragMomentum: i, dragElastic: a, dragTransition: u, dragSnapToOrigin: c, onDragTransitionEnd: f} = this.getProps()
          , h = this.constraints || {}
          , m = Gt(g => {
            if (!rl(g, r, this.currentDirection))
                return;
            let y = h && h[g] || {};
            c && (y = {
                min: 0,
                max: 0
            });
            const w = a ? 200 : 1e6
              , k = a ? 40 : 1e7
              , x = {
                type: "inertia",
                velocity: i ? e[g] : 0,
                bounceStiffness: w,
                bounceDamping: k,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...u,
                ...y
            };
            return this.startAxisValueAnimation(g, x)
        }
        );
        return Promise.all(m).then(f)
    }
    startAxisValueAnimation(e, r) {
        const i = this.getAxisMotionValue(e);
        return Xd(this.visualElement, e),
        i.start(ah(e, i, 0, r, this.visualElement, !1))
    }
    stopAnimation() {
        Gt(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        Gt(e => {
            var r;
            return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.pause()
        }
        )
    }
    getAnimationState(e) {
        var r;
        return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.state
    }
    getAxisMotionValue(e) {
        const r = `_drag${e.toUpperCase()}`
          , i = this.visualElement.getProps()
          , a = i[r];
        return a || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        Gt(r => {
            const {drag: i} = this.getProps();
            if (!rl(r, i, this.currentDirection))
                return;
            const {projection: a} = this.visualElement
              , u = this.getAxisMotionValue(r);
            if (a && a.layout) {
                const {min: c, max: f} = a.layout.layoutBox[r];
                u.set(e[r] - He(c, f, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: r} = this.getProps()
          , {projection: i} = this.visualElement;
        if (!Is(r) || !i || !this.constraints)
            return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        Gt(c => {
            const f = this.getAxisMotionValue(c);
            if (f && this.constraints !== !1) {
                const h = f.get();
                a[c] = c2({
                    min: h,
                    max: h
                }, this.constraints[c])
            }
        }
        );
        const {transformTemplate: u} = this.visualElement.getProps();
        this.visualElement.current.style.transform = u ? u({}, "") : "none",
        i.root && i.root.updateScroll(),
        i.updateLayout(),
        this.resolveConstraints(),
        Gt(c => {
            if (!rl(c, e, null))
                return;
            const f = this.getAxisMotionValue(c)
              , {min: h, max: m} = this.constraints[c];
            f.set(He(h, m, a[c]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        y2.set(this.visualElement, this);
        const e = this.visualElement.current
          , r = ho(e, "pointerdown", h => {
            const {drag: m, dragListener: g=!0} = this.getProps();
            m && g && this.start(h)
        }
        )
          , i = () => {
            const {dragConstraints: h} = this.getProps();
            Is(h) && h.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: a} = this.visualElement
          , u = a.addEventListener("measure", i);
        a && !a.layout && (a.root && a.root.updateScroll(),
        a.updateLayout()),
        Be.read(i);
        const c = bo(window, "resize", () => this.scalePositionWithinConstraints())
          , f = a.addEventListener("didUpdate", ( ({delta: h, hasLayoutChanged: m}) => {
            this.isDragging && m && (Gt(g => {
                const y = this.getAxisMotionValue(g);
                y && (this.originPoint[g] += h[g].translate,
                y.set(y.get() + h[g].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            c(),
            r(),
            u(),
            f && f()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: r=!1, dragDirectionLock: i=!1, dragPropagation: a=!1, dragConstraints: u=!1, dragElastic: c=of, dragMomentum: f=!0} = e;
        return {
            ...e,
            drag: r,
            dragDirectionLock: i,
            dragPropagation: a,
            dragConstraints: u,
            dragElastic: c,
            dragMomentum: f
        }
    }
}
function rl(t, e, r) {
    return (e === !0 || e === t) && (r === null || r === t)
}
function w2(t, e=10) {
    let r = null;
    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"),
    r
}
class x2 extends Cr {
    constructor(e) {
        super(e),
        this.removeGroupControls = Bt,
        this.removeListeners = Bt,
        this.controls = new v2(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Bt
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const rv = t => (e, r) => {
    t && Be.postRender( () => t(e, r))
}
;
class S2 extends Cr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Bt
    }
    onPointerDown(e) {
        this.session = new kx(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Ox(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: r, onPan: i, onPanEnd: a} = this.node.getProps();
        return {
            onSessionStart: rv(e),
            onStart: rv(r),
            onMove: i,
            onEnd: (u, c) => {
                delete this.session,
                a && Be.postRender( () => a(u, c))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ho(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function b2() {
    const t = L.useContext(Af);
    if (t === null)
        return [!0, null];
    const {isPresent: e, onExitComplete: r, register: i} = t
      , a = L.useId();
    L.useEffect( () => i(a), []);
    const u = L.useCallback( () => r && r(a), [a, r]);
    return !e && r ? [!1, u] : [!0]
}
const vl = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function sv(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const no = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (ve.test(t))
                t = parseFloat(t);
            else
                return t;
        const r = sv(t, e.target.x)
          , i = sv(t, e.target.y);
        return `${r}% ${i}%`
    }
}
  , E2 = {
    correct: (t, {treeScale: e, projectionDelta: r}) => {
        const i = t
          , a = Tr.parse(t);
        if (a.length > 5)
            return i;
        const u = Tr.createTransformer(t)
          , c = typeof a[0] != "number" ? 1 : 0
          , f = r.x.scale * e.x
          , h = r.y.scale * e.y;
        a[0 + c] /= f,
        a[1 + c] /= h;
        const m = He(f, h, .5);
        return typeof a[2 + c] == "number" && (a[2 + c] /= m),
        typeof a[3 + c] == "number" && (a[3 + c] /= m),
        u(a)
    }
};
class k2 extends L.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: r, switchLayoutGroup: i, layoutId: a} = this.props
          , {projection: u} = e;
        C_(T2),
        u && (r.group && r.group.add(u),
        i && i.register && a && i.register(u),
        u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        u.setOptions({
            ...u.options,
            onExitComplete: () => this.safeToRemove()
        })),
        vl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: r, visualElement: i, drag: a, isPresent: u} = this.props
          , c = i.projection;
        return c && (c.isPresent = u,
        a || e.layoutDependency !== r || r === void 0 ? c.willUpdate() : this.safeToRemove(),
        e.isPresent !== u && (u ? c.promote() : c.relegate() || Be.postRender( () => {
            const f = c.getStack();
            (!f || !f.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        jf.postRender( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: r, switchLayoutGroup: i} = this.props
          , {projection: a} = e;
        a && (a.scheduleCheckAfterUnmount(),
        r && r.group && r.group.remove(a),
        i && i.deregister && i.deregister(a))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function Lx(t) {
    const [e,r] = b2()
      , i = L.useContext(yw);
    return T.jsx(k2, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: L.useContext(kw),
        isPresent: e,
        safeToRemove: r
    })
}
const T2 = {
    borderRadius: {
        ...no,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: no,
    borderTopRightRadius: no,
    borderBottomLeftRadius: no,
    borderBottomRightRadius: no,
    boxShadow: E2
};
function C2(t, e, r) {
    const i = wt(t) ? t : xo(t);
    return i.start(ah("", i, e, r)),
    i.animation
}
function P2(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
const _2 = (t, e) => t.depth - e.depth;
class R2 {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        Yf(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        Xf(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(_2),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function A2(t, e) {
    const r = Tn.now()
      , i = ({timestamp: a}) => {
        const u = a - r;
        u >= e && (kr(i),
        t(u - e))
    }
    ;
    return Be.read(i, !0),
    () => kr(i)
}
const Dx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , N2 = Dx.length
  , iv = t => typeof t == "string" ? parseFloat(t) : t
  , ov = t => typeof t == "number" || ve.test(t);
function O2(t, e, r, i, a, u) {
    a ? (t.opacity = He(0, r.opacity !== void 0 ? r.opacity : 1, L2(i)),
    t.opacityExit = He(e.opacity !== void 0 ? e.opacity : 1, 0, D2(i))) : u && (t.opacity = He(e.opacity !== void 0 ? e.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, i));
    for (let c = 0; c < N2; c++) {
        const f = `border${Dx[c]}Radius`;
        let h = av(e, f)
          , m = av(r, f);
        if (h === void 0 && m === void 0)
            continue;
        h || (h = 0),
        m || (m = 0),
        h === 0 || m === 0 || ov(h) === ov(m) ? (t[f] = Math.max(He(iv(h), iv(m), i), 0),
        (kn.test(m) || kn.test(h)) && (t[f] += "%")) : t[f] = m
    }
    (e.rotate || r.rotate) && (t.rotate = He(e.rotate || 0, r.rotate || 0, i))
}
function av(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const L2 = Mx(0, .5, Zw)
  , D2 = Mx(.5, .95, Bt);
function Mx(t, e, r) {
    return i => i < t ? 0 : i > e ? 1 : r(ni(t, e, i))
}
function lv(t, e) {
    t.min = e.min,
    t.max = e.max
}
function Qt(t, e) {
    lv(t.x, e.x),
    lv(t.y, e.y)
}
function uv(t, e) {
    t.translate = e.translate,
    t.scale = e.scale,
    t.originPoint = e.originPoint,
    t.origin = e.origin
}
function cv(t, e, r, i, a) {
    return t -= e,
    t = Rl(t, 1 / r, i),
    a !== void 0 && (t = Rl(t, 1 / a, i)),
    t
}
function M2(t, e=0, r=1, i=.5, a, u=t, c=t) {
    if (kn.test(e) && (e = parseFloat(e),
    e = He(c.min, c.max, e / 100) - c.min),
    typeof e != "number")
        return;
    let f = He(u.min, u.max, i);
    t === u && (f -= e),
    t.min = cv(t.min, e, r, f, a),
    t.max = cv(t.max, e, r, f, a)
}
function dv(t, e, [r,i,a], u, c) {
    M2(t, e[r], e[i], e[a], e.scale, u, c)
}
const j2 = ["x", "scaleX", "originX"]
  , I2 = ["y", "scaleY", "originY"];
function fv(t, e, r, i) {
    dv(t.x, e, j2, r ? r.x : void 0, i ? i.x : void 0),
    dv(t.y, e, I2, r ? r.y : void 0, i ? i.y : void 0)
}
function hv(t) {
    return t.translate === 0 && t.scale === 1
}
function jx(t) {
    return hv(t.x) && hv(t.y)
}
function pv(t, e) {
    return t.min === e.min && t.max === e.max
}
function F2(t, e) {
    return pv(t.x, e.x) && pv(t.y, e.y)
}
function mv(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function Ix(t, e) {
    return mv(t.x, e.x) && mv(t.y, e.y)
}
function gv(t) {
    return Ut(t.x) / Ut(t.y)
}
function yv(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class V2 {
    constructor() {
        this.members = []
    }
    add(e) {
        Yf(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (Xf(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const r = this.members[this.members.length - 1];
            r && this.promote(r)
        }
    }
    relegate(e) {
        const r = this.members.findIndex(a => e === a);
        if (r === 0)
            return !1;
        let i;
        for (let a = r; a >= 0; a--) {
            const u = this.members[a];
            if (u.isPresent !== !1) {
                i = u;
                break
            }
        }
        return i ? (this.promote(i),
        !0) : !1
    }
    promote(e, r) {
        const i = this.lead;
        if (e !== i && (this.prevLead = i,
        this.lead = e,
        e.show(),
        i)) {
            i.instance && i.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = i,
            r && (e.resumeFrom.preserveOpacity = !0),
            i.snapshot && (e.snapshot = i.snapshot,
            e.snapshot.latestValues = i.animationValues || i.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: a} = e.options;
            a === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {options: r, resumingFrom: i} = e;
            r.onExitComplete && r.onExitComplete(),
            i && i.options.onExitComplete && i.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function B2(t, e, r) {
    let i = "";
    const a = t.x.translate / e.x
      , u = t.y.translate / e.y
      , c = (r == null ? void 0 : r.z) || 0;
    if ((a || u || c) && (i = `translate3d(${a}px, ${u}px, ${c}px) `),
    (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
    r) {
        const {transformPerspective: m, rotate: g, rotateX: y, rotateY: w, skewX: k, skewY: x} = r;
        m && (i = `perspective(${m}px) ${i}`),
        g && (i += `rotate(${g}deg) `),
        y && (i += `rotateX(${y}deg) `),
        w && (i += `rotateY(${w}deg) `),
        k && (i += `skewX(${k}deg) `),
        x && (i += `skewY(${x}deg) `)
    }
    const f = t.x.scale * e.x
      , h = t.y.scale * e.y;
    return (f !== 1 || h !== 1) && (i += `scale(${f}, ${h})`),
    i || "none"
}
const Hr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , uo = typeof window < "u" && window.MotionDebug !== void 0
  , pd = ["", "X", "Y", "Z"]
  , U2 = {
    visibility: "hidden"
}
  , vv = 1e3;
let z2 = 0;
function md(t, e, r, i) {
    const {latestValues: a} = e;
    a[t] && (r[t] = a[t],
    e.setStaticValue(t, 0),
    i && (i[t] = 0))
}
function Fx(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: e} = t.options;
    if (!e)
        return;
    const r = Ww(e);
    if (window.MotionHasOptimisedAnimation(r, "transform")) {
        const {layout: a, layoutId: u} = t.options;
        window.MotionCancelOptimisedAnimation(r, "transform", Be, !(a || u))
    }
    const {parent: i} = t;
    i && !i.hasCheckedOptimisedAppear && Fx(i)
}
function Vx({attachResizeListener: t, defaultParent: e, measureScroll: r, checkIsScrollRoot: i, resetTransform: a}) {
    return class {
        constructor(c={}, f=e == null ? void 0 : e()) {
            this.id = z2++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                uo && (Hr.totalNodes = Hr.resolvedTargetDeltas = Hr.recalculatedProjection = 0),
                this.nodes.forEach(q2),
                this.nodes.forEach(Y2),
                this.nodes.forEach(X2),
                this.nodes.forEach(W2),
                uo && window.MotionDebug.record(Hr)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = c,
            this.root = f ? f.root || f : this,
            this.path = f ? [...f.path, f] : [],
            this.parent = f,
            this.depth = f ? f.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++)
                this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new R2)
        }
        addEventListener(c, f) {
            return this.eventHandlers.has(c) || this.eventHandlers.set(c, new Jf),
            this.eventHandlers.get(c).add(f)
        }
        notifyListeners(c, ...f) {
            const h = this.eventHandlers.get(c);
            h && h.notify(...f)
        }
        hasListeners(c) {
            return this.eventHandlers.has(c)
        }
        mount(c, f=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = P2(c),
            this.instance = c;
            const {layoutId: h, layout: m, visualElement: g} = this.options;
            if (g && !g.current && g.mount(c),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            f && (m || h) && (this.isLayoutDirty = !0),
            t) {
                let y;
                const w = () => this.root.updateBlockedByResize = !1;
                t(c, () => {
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = A2(w, 250),
                    vl.hasAnimatedSinceResize && (vl.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(xv))
                }
                )
            }
            h && this.root.registerSharedNode(h, this),
            this.options.animate !== !1 && g && (h || m) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: w, hasRelativeTargetChanged: k, layout: x}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const b = this.options.transition || g.getDefaultTransition() || nN
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: R} = g.getProps()
                  , B = !this.targetLayout || !Ix(this.targetLayout, x) || k
                  , M = !w && k;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || M || w && (B || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(y, M);
                    const j = {
                        ...Wf(b, "layout"),
                        onPlay: S,
                        onComplete: R
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (j.delay = 0,
                    j.type = !1),
                    this.startAnimation(j)
                } else
                    w || xv(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = x
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const c = this.getStack();
            c && c.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            kr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(J2),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: c} = this.options;
            return c && c.getProps().transformTemplate
        }
        willUpdate(c=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Fx(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0,
                y.updateScroll("snapshot"),
                y.options.layoutRoot && y.willUpdate(!1)
            }
            const {layoutId: f, layout: h} = this.options;
            if (f === void 0 && !h)
                return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            c && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(wv);
                return
            }
            this.isUpdating || this.nodes.forEach(Q2),
            this.isUpdating = !1,
            this.nodes.forEach(G2),
            this.nodes.forEach($2),
            this.nodes.forEach(H2),
            this.clearAllSnapshots();
            const f = Tn.now();
            dt.delta = zn(0, 1e3 / 60, f - dt.timestamp),
            dt.timestamp = f,
            dt.isProcessing = !0,
            id.update.process(dt),
            id.preRender.process(dt),
            id.render.process(dt),
            dt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            jf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(K2),
            this.sharedNodes.forEach(Z2)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Be.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Be.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++)
                    this.path[h].updateScroll();
            const c = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Ye(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: f} = this.options;
            f && f.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
        }
        updateScroll(c="measure") {
            let f = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (f = !1),
            f) {
                const h = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: h,
                    offset: r(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!a)
                return;
            const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , f = this.projectionDelta && !jx(this.projectionDelta)
              , h = this.getTransformTemplate()
              , m = h ? h(this.latestValues, "") : void 0
              , g = m !== this.prevTransformTemplateValue;
            c && (f || $r(this.latestValues) || g) && (a(this.instance, m),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(c=!0) {
            const f = this.measurePageBox();
            let h = this.removeElementScroll(f);
            return c && (h = this.removeTransform(h)),
            rN(h),
            {
                animationId: this.root.animationId,
                measuredBox: f,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var c;
            const {visualElement: f} = this.options;
            if (!f)
                return Ye();
            const h = f.measureViewportBox();
            if (!(((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) || this.path.some(sN))) {
                const {scroll: g} = this.root;
                g && (Bs(h.x, g.offset.x),
                Bs(h.y, g.offset.y))
            }
            return h
        }
        removeElementScroll(c) {
            var f;
            const h = Ye();
            if (Qt(h, c),
            !((f = this.scroll) === null || f === void 0) && f.wasRoot)
                return h;
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m]
                  , {scroll: y, options: w} = g;
                g !== this.root && y && w.layoutScroll && (y.wasRoot && Qt(h, c),
                Bs(h.x, y.offset.x),
                Bs(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(c, f=!1) {
            const h = Ye();
            Qt(h, c);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                !f && g.options.layoutScroll && g.scroll && g !== g.root && Us(h, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }),
                $r(g.latestValues) && Us(h, g.latestValues)
            }
            return $r(this.latestValues) && Us(h, this.latestValues),
            h
        }
        removeTransform(c) {
            const f = Ye();
            Qt(f, c);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                if (!m.instance || !$r(m.latestValues))
                    continue;
                af(m.latestValues) && m.updateSnapshot();
                const g = Ye()
                  , y = m.measurePageBox();
                Qt(g, y),
                fv(f, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g)
            }
            return $r(this.latestValues) && fv(f, this.latestValues),
            f
        }
        setTargetDelta(c) {
            this.targetDelta = c,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(c) {
            this.options = {
                ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== dt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(c=!1) {
            var f;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== h;
            if (!(c || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((f = this.parent) === null || f === void 0) && f.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: w} = this.options;
            if (!(!this.layout || !(y || w))) {
                if (this.resolvedRelativeTargetAt = dt.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const k = this.getClosestProjectingParent();
                    k && k.layout && this.animationProgress !== 1 ? (this.relativeParent = k,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Ye(),
                    this.relativeTargetOrigin = Ye(),
                    mo(this.relativeTargetOrigin, this.layout.layoutBox, k.layout.layoutBox),
                    Qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Ye(),
                    this.targetWithTransforms = Ye()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    o2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Qt(this.target, this.layout.layoutBox),
                    Ax(this.target, this.targetDelta)) : Qt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const k = this.getClosestProjectingParent();
                        k && !!k.resumingFrom == !!this.resumingFrom && !k.options.layoutScroll && k.target && this.animationProgress !== 1 ? (this.relativeParent = k,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Ye(),
                        this.relativeTargetOrigin = Ye(),
                        mo(this.relativeTargetOrigin, this.target, k.target),
                        Qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    uo && Hr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || af(this.parent.latestValues) || Rx(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var c;
            const f = this.getLead()
              , h = !!this.resumingFrom || this !== f;
            let m = !0;
            if ((this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty) && (m = !1),
            h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
            this.resolvedRelativeTargetAt === dt.timestamp && (m = !1),
            m)
                return;
            const {layout: g, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || y))
                return;
            Qt(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x
              , k = this.treeScale.y;
            m2(this.layoutCorrected, this.treeScale, this.path, h),
            f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox,
            f.targetWithTransforms = Ye());
            const {target: x} = f;
            if (!x) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (uv(this.prevProjectionDelta.x, this.projectionDelta.x),
            uv(this.prevProjectionDelta.y, this.projectionDelta.y)),
            po(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
            (this.treeScale.x !== w || this.treeScale.y !== k || !yv(this.projectionDelta.x, this.prevProjectionDelta.x) || !yv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", x)),
            uo && Hr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(c=!0) {
            var f;
            if ((f = this.options.visualElement) === null || f === void 0 || f.scheduleRender(),
            c) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Vs(),
            this.projectionDelta = Vs(),
            this.projectionDeltaWithTransform = Vs()
        }
        setAnimationOrigin(c, f=!1) {
            const h = this.snapshot
              , m = h ? h.latestValues : {}
              , g = {
                ...this.latestValues
            }
              , y = Vs();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !f;
            const w = Ye()
              , k = h ? h.source : void 0
              , x = this.layout ? this.layout.source : void 0
              , b = k !== x
              , S = this.getStack()
              , R = !S || S.members.length <= 1
              , B = !!(b && !R && this.options.crossfade === !0 && !this.path.some(tN));
            this.animationProgress = 0;
            let M;
            this.mixTargetDelta = j => {
                const U = j / 1e3;
                Sv(y.x, c.x, U),
                Sv(y.y, c.y, U),
                this.setTargetDelta(y),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (mo(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                eN(this.relativeTarget, this.relativeTargetOrigin, w, U),
                M && F2(this.relativeTarget, M) && (this.isProjectionDirty = !1),
                M || (M = Ye()),
                Qt(M, this.relativeTarget)),
                b && (this.animationValues = g,
                O2(g, m, this.latestValues, U, B, R)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = U
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(c) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (kr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Be.update( () => {
                vl.hasAnimatedSinceResize = !0,
                this.currentAnimation = C2(0, vv, {
                    ...c,
                    onUpdate: f => {
                        this.mixTargetDelta(f),
                        c.onUpdate && c.onUpdate(f)
                    }
                    ,
                    onComplete: () => {
                        c.onComplete && c.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const c = this.getStack();
            c && c.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(vv),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {targetWithTransforms: f, target: h, layout: m, latestValues: g} = c;
            if (!(!f || !h || !m)) {
                if (this !== c && this.layout && m && Bx(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    h = this.target || Ye();
                    const y = Ut(this.layout.layoutBox.x);
                    h.x.min = c.target.x.min,
                    h.x.max = h.x.min + y;
                    const w = Ut(this.layout.layoutBox.y);
                    h.y.min = c.target.y.min,
                    h.y.max = h.y.min + w
                }
                Qt(f, h),
                Us(f, g),
                po(this.projectionDeltaWithTransform, this.layoutCorrected, f, g)
            }
        }
        registerSharedNode(c, f) {
            this.sharedNodes.has(c) || this.sharedNodes.set(c, new V2),
            this.sharedNodes.get(c).add(f);
            const m = f.options.initialPromotionConfig;
            f.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(f) : void 0
            })
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0
        }
        getLead() {
            var c;
            const {layoutId: f} = this.options;
            return f ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) || this : this
        }
        getPrevLead() {
            var c;
            const {layoutId: f} = this.options;
            return f ? (c = this.getStack()) === null || c === void 0 ? void 0 : c.prevLead : void 0
        }
        getStack() {
            const {layoutId: c} = this.options;
            if (c)
                return this.root.sharedNodes.get(c)
        }
        promote({needsReset: c, transition: f, preserveFollowOpacity: h}={}) {
            const m = this.getStack();
            m && m.promote(this, h),
            c && (this.projectionDelta = void 0,
            this.needsReset = !0),
            f && this.setOptions({
                transition: f
            })
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: c} = this.options;
            if (!c)
                return;
            let f = !1;
            const {latestValues: h} = c;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (f = !0),
            !f)
                return;
            const m = {};
            h.z && md("z", c, m, this.animationValues);
            for (let g = 0; g < pd.length; g++)
                md(`rotate${pd[g]}`, c, m, this.animationValues),
                md(`skew${pd[g]}`, c, m, this.animationValues);
            c.render();
            for (const g in m)
                c.setStaticValue(g, m[g]),
                this.animationValues && (this.animationValues[g] = m[g]);
            c.scheduleRender()
        }
        getProjectionStyles(c) {
            var f, h;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return U2;
            const m = {
                visibility: ""
            }
              , g = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                m.opacity = "",
                m.pointerEvents = gl(c == null ? void 0 : c.pointerEvents) || "",
                m.transform = g ? g(this.latestValues, "") : "none",
                m;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const b = {};
                return this.options.layoutId && (b.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                b.pointerEvents = gl(c == null ? void 0 : c.pointerEvents) || ""),
                this.hasProjected && !$r(this.latestValues) && (b.transform = g ? g({}, "") : "none",
                this.hasProjected = !1),
                b
            }
            const w = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(),
            m.transform = B2(this.projectionDeltaWithTransform, this.treeScale, w),
            g && (m.transform = g(w, m.transform));
            const {x: k, y: x} = this.projectionDelta;
            m.transformOrigin = `${k.origin * 100}% ${x.origin * 100}% 0`,
            y.animationValues ? m.opacity = y === this ? (h = (f = w.opacity) !== null && f !== void 0 ? f : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : m.opacity = y === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
            for (const b in kl) {
                if (w[b] === void 0)
                    continue;
                const {correct: S, applyTo: R} = kl[b]
                  , B = m.transform === "none" ? w[b] : S(w[b], y);
                if (R) {
                    const M = R.length;
                    for (let j = 0; j < M; j++)
                        m[R[j]] = B
                } else
                    m[b] = B
            }
            return this.options.layoutId && (m.pointerEvents = y === this ? gl(c == null ? void 0 : c.pointerEvents) || "" : "none"),
            m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(c => {
                var f;
                return (f = c.currentAnimation) === null || f === void 0 ? void 0 : f.stop()
            }
            ),
            this.root.nodes.forEach(wv),
            this.root.sharedNodes.clear()
        }
    }
}
function $2(t) {
    t.updateLayout()
}
function H2(t) {
    var e;
    const r = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
        const {layoutBox: i, measuredBox: a} = t.layout
          , {animationType: u} = t.options
          , c = r.source !== t.layout.source;
        u === "size" ? Gt(y => {
            const w = c ? r.measuredBox[y] : r.layoutBox[y]
              , k = Ut(w);
            w.min = i[y].min,
            w.max = w.min + k
        }
        ) : Bx(u, r.layoutBox, i) && Gt(y => {
            const w = c ? r.measuredBox[y] : r.layoutBox[y]
              , k = Ut(i[y]);
            w.max = w.min + k,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[y].max = t.relativeTarget[y].min + k)
        }
        );
        const f = Vs();
        po(f, i, r.layoutBox);
        const h = Vs();
        c ? po(h, t.applyTransform(a, !0), r.measuredBox) : po(h, i, r.layoutBox);
        const m = !jx(f);
        let g = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: w, layout: k} = y;
                if (w && k) {
                    const x = Ye();
                    mo(x, r.layoutBox, w.layoutBox);
                    const b = Ye();
                    mo(b, i, k.layoutBox),
                    Ix(x, b) || (g = !0),
                    y.options.layoutRoot && (t.relativeTarget = b,
                    t.relativeTargetOrigin = x,
                    t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: r,
            delta: h,
            layoutDelta: f,
            hasLayoutChanged: m,
            hasRelativeTargetChanged: g
        })
    } else if (t.isLead()) {
        const {onExitComplete: i} = t.options;
        i && i()
    }
    t.options.transition = void 0
}
function q2(t) {
    uo && Hr.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function W2(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function K2(t) {
    t.clearSnapshot()
}
function wv(t) {
    t.clearMeasurements()
}
function Q2(t) {
    t.isLayoutDirty = !1
}
function G2(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function xv(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function Y2(t) {
    t.resolveTargetDelta()
}
function X2(t) {
    t.calcProjection()
}
function J2(t) {
    t.resetSkewAndRotation()
}
function Z2(t) {
    t.removeLeadSnapshot()
}
function Sv(t, e, r) {
    t.translate = He(e.translate, 0, r),
    t.scale = He(e.scale, 1, r),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function bv(t, e, r, i) {
    t.min = He(e.min, r.min, i),
    t.max = He(e.max, r.max, i)
}
function eN(t, e, r, i) {
    bv(t.x, e.x, r.x, i),
    bv(t.y, e.y, r.y, i)
}
function tN(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const nN = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Ev = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , kv = Ev("applewebkit/") && !Ev("chrome/") ? Math.round : Bt;
function Tv(t) {
    t.min = kv(t.min),
    t.max = kv(t.max)
}
function rN(t) {
    Tv(t.x),
    Tv(t.y)
}
function Bx(t, e, r) {
    return t === "position" || t === "preserve-aspect" && !i2(gv(e), gv(r), .2)
}
function sN(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const iN = Vx({
    attachResizeListener: (t, e) => bo(t, "resize", e),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , gd = {
    current: void 0
}
  , Ux = Vx({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!gd.current) {
            const t = new iN({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            gd.current = t
        }
        return gd.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , oN = {
    pan: {
        Feature: S2
    },
    drag: {
        Feature: x2,
        ProjectionNode: Ux,
        MeasureLayout: Lx
    }
};
function Cv(t, e, r) {
    const {props: i} = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", r === "Start");
    const a = "onHover" + r
      , u = i[a];
    u && Be.postRender( () => u(e, Io(e)))
}
class aN extends Cr {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = sR(e, r => (Cv(this.node, r, "Start"),
        i => Cv(this.node, i, "End"))))
    }
    unmount() {}
}
class lN extends Cr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = jo(bo(this.node.current, "focus", () => this.onFocus()), bo(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Pv(t, e, r) {
    const {props: i} = t;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", r === "Start");
    const a = "onTap" + (r === "End" ? "" : r)
      , u = i[a];
    u && Be.postRender( () => u(e, Io(e)))
}
class uN extends Cr {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = lR(e, r => (Pv(this.node, r, "Start"),
        (i, {success: a}) => Pv(this.node, i, a ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const uf = new WeakMap
  , yd = new WeakMap
  , cN = t => {
    const e = uf.get(t.target);
    e && e(t)
}
  , dN = t => {
    t.forEach(cN)
}
;
function fN({root: t, ...e}) {
    const r = t || document;
    yd.has(r) || yd.set(r, {});
    const i = yd.get(r)
      , a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(dN,{
        root: t,
        ...e
    })),
    i[a]
}
function hN(t, e, r) {
    const i = fN(e);
    return uf.set(t, r),
    i.observe(t),
    () => {
        uf.delete(t),
        i.unobserve(t)
    }
}
const pN = {
    some: 0,
    all: 1
};
class mN extends Cr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: r, margin: i, amount: a="some", once: u} = e
          , c = {
            root: r ? r.current : void 0,
            rootMargin: i,
            threshold: typeof a == "number" ? a : pN[a]
        }
          , f = h => {
            const {isIntersecting: m} = h;
            if (this.isInView === m || (this.isInView = m,
            u && !m && this.hasEnteredView))
                return;
            m && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {onViewportEnter: g, onViewportLeave: y} = this.node.getProps()
              , w = m ? g : y;
            w && w(h)
        }
        ;
        return hN(this.node.current, c, f)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: r} = this.node;
        ["amount", "margin", "root"].some(gN(e, r)) && this.startObserver()
    }
    unmount() {}
}
function gN({viewport: t={}}, {viewport: e={}}={}) {
    return r => t[r] !== e[r]
}
const yN = {
    inView: {
        Feature: mN
    },
    tap: {
        Feature: uN
    },
    focus: {
        Feature: lN
    },
    hover: {
        Feature: aN
    }
}
  , vN = {
    layout: {
        ProjectionNode: Ux,
        MeasureLayout: Lx
    }
}
  , cf = {
    current: null
}
  , zx = {
    current: !1
};
function wN() {
    if (zx.current = !0,
    !!Of)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = () => cf.current = t.matches;
            t.addListener(e),
            e()
        } else
            cf.current = !1
}
function xN(t, e, r) {
    for (const i in e) {
        const a = e[i]
          , u = r[i];
        if (wt(a))
            t.addValue(i, a);
        else if (wt(u))
            t.addValue(i, xo(a, {
                owner: t
            }));
        else if (u !== a)
            if (t.hasValue(i)) {
                const c = t.getValue(i);
                c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a)
            } else {
                const c = t.getStaticValue(i);
                t.addValue(i, xo(c !== void 0 ? c : a, {
                    owner: t
                }))
            }
    }
    for (const i in r)
        e[i] === void 0 && t.removeValue(i);
    return e
}
const _v = new WeakMap
  , SN = [...ix, yt, Tr]
  , bN = t => SN.find(sx(t))
  , Rv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class EN {
    scrapeMotionValuesFromProps(e, r, i) {
        return {}
    }
    constructor({parent: e, props: r, presenceContext: i, reducedMotionConfig: a, blockInitialAnimation: u, visualState: c}, f={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = th,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const w = Tn.now();
            this.renderScheduledAt < w && (this.renderScheduledAt = w,
            Be.render(this.render, !1, !0))
        }
        ;
        const {latestValues: h, renderState: m} = c;
        this.latestValues = h,
        this.baseTarget = {
            ...h
        },
        this.initialValues = r.initial ? {
            ...h
        } : {},
        this.renderState = m,
        this.parent = e,
        this.props = r,
        this.presenceContext = i,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = a,
        this.options = f,
        this.blockInitialAnimation = !!u,
        this.isControllingVariants = zl(r),
        this.isVariantNode = bw(r),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: g, ...y} = this.scrapeMotionValuesFromProps(r, {}, this);
        for (const w in y) {
            const k = y[w];
            h[w] !== void 0 && wt(k) && k.set(h[w], !1)
        }
    }
    mount(e) {
        this.current = e,
        _v.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (r, i) => this.bindToMotionValue(i, r)),
        zx.current || wN(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : cf.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        _v.delete(this.current),
        this.projection && this.projection.unmount(),
        kr(this.notifyUpdate),
        kr(this.render),
        this.valueSubscriptions.forEach(e => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features) {
            const r = this.features[e];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, r) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const i = as.has(e)
          , a = r.on("change", f => {
            this.latestValues[e] = f,
            this.props.onUpdate && Be.preRender(this.notifyUpdate),
            i && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , u = r.on("renderRequest", this.scheduleRender);
        let c;
        window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, e, r)),
        this.valueSubscriptions.set(e, () => {
            a(),
            u(),
            c && c(),
            r.owner && r.stop()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in ri) {
            const r = ri[e];
            if (!r)
                continue;
            const {isEnabled: i, Feature: a} = r;
            if (!this.features[e] && a && i(this.props) && (this.features[e] = new a(this)),
            this.features[e]) {
                const u = this.features[e];
                u.isMounted ? u.update() : (u.mount(),
                u.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ye()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, r) {
        this.latestValues[e] = r
    }
    update(e, r) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = r;
        for (let i = 0; i < Rv.length; i++) {
            const a = Rv[i];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](),
            delete this.propEventSubscriptions[a]);
            const u = "on" + a
              , c = e[u];
            c && (this.propEventSubscriptions[a] = this.on(a, c))
        }
        this.prevMotionValues = xN(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const r = this.getClosestVariantNode();
        if (r)
            return r.variantChildren && r.variantChildren.add(e),
            () => r.variantChildren.delete(e)
    }
    addValue(e, r) {
        const i = this.values.get(e);
        r !== i && (i && this.removeValue(e),
        this.bindToMotionValue(e, r),
        this.values.set(e, r),
        this.latestValues[e] = r.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const r = this.valueSubscriptions.get(e);
        r && (r(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, r) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && r !== void 0 && (i = xo(r === null ? void 0 : r, {
            owner: this
        }),
        this.addValue(e, i)),
        i
    }
    readValue(e, r) {
        var i;
        let a = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
        return a != null && (typeof a == "string" && (nx(a) || tx(a)) ? a = parseFloat(a) : !bN(a) && Tr.test(r) && (a = hx(e, r)),
        this.setBaseTarget(e, wt(a) ? a.get() : a)),
        wt(a) ? a.get() : a
    }
    setBaseTarget(e, r) {
        this.baseTarget[e] = r
    }
    getBaseTarget(e) {
        var r;
        const {initial: i} = this.props;
        let a;
        if (typeof i == "string" || typeof i == "object") {
            const c = Vf(this.props, i, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
            c && (a = c[e])
        }
        if (i && a !== void 0)
            return a;
        const u = this.getBaseTargetFromProps(this.props, e);
        return u !== void 0 && !wt(u) ? u : this.initialValues[e] !== void 0 && a === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, r) {
        return this.events[e] || (this.events[e] = new Jf),
        this.events[e].add(r)
    }
    notify(e, ...r) {
        this.events[e] && this.events[e].notify(...r)
    }
}
class $x extends EN {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = px
    }
    sortInstanceNodePosition(e, r) {
        return e.compareDocumentPosition(r) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, r) {
        return e.style ? e.style[r] : void 0
    }
    removeValueFromRenderState(e, {vars: r, style: i}) {
        delete r[e],
        delete i[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        wt(e) && (this.childSubscription = e.on("change", r => {
            this.current && (this.current.textContent = `${r}`)
        }
        ))
    }
}
function kN(t) {
    return window.getComputedStyle(t)
}
class TN extends $x {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Cw
    }
    readValueFromInstance(e, r) {
        if (as.has(r)) {
            const i = sh(r);
            return i && i.default || 0
        } else {
            const i = kN(e)
              , a = (Mw(r) ? i.getPropertyValue(r) : i[r]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: r}) {
        return Nx(e, r)
    }
    build(e, r, i) {
        $f(e, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return Ff(e, r, i)
    }
}
class CN extends $x {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Ye
    }
    getBaseTargetFromProps(e, r) {
        return e[r]
    }
    readValueFromInstance(e, r) {
        if (as.has(r)) {
            const i = sh(r);
            return i && i.default || 0
        }
        return r = Pw.has(r) ? r : Mf(r),
        e.getAttribute(r)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return Aw(e, r, i)
    }
    build(e, r, i) {
        Hf(e, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, r, i, a) {
        _w(e, r, i, a)
    }
    mount(e) {
        this.isSVGTag = qf(e.tagName),
        super.mount(e)
    }
}
const PN = (t, e) => If(t) ? new CN(e) : new TN(e,{
    allowProjection: t !== L.Fragment
})
  , _N = X_({
    ...YA,
    ...yN,
    ...oN,
    ...vN
}, PN)
  , wn = h_(_N);
function RN(t) {
    if (typeof document > "u")
        return;
    let e = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    e.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
}
Array(12).fill(0);
let df = 1;
class AN {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            const r = this.subscribers.indexOf(e);
            this.subscribers.splice(r, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(r => r(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var r;
            const {message: i, ...a} = e
              , u = typeof (e == null ? void 0 : e.id) == "number" || ((r = e.id) == null ? void 0 : r.length) > 0 ? e.id : df++
              , c = this.toasts.find(h => h.id === u)
              , f = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u),
            c ? this.toasts = this.toasts.map(h => h.id === u ? (this.publish({
                ...h,
                ...e,
                id: u,
                title: i
            }),
            {
                ...h,
                ...e,
                id: u,
                dismissible: f,
                title: i
            }) : h) : this.addToast({
                title: i,
                ...a,
                dismissible: f,
                id: u
            }),
            u
        }
        ,
        this.dismiss = e => (e ? (this.dismissedToasts.add(e),
        requestAnimationFrame( () => this.subscribers.forEach(r => r({
            id: e,
            dismiss: !0
        })))) : this.toasts.forEach(r => {
            this.subscribers.forEach(i => i({
                id: r.id,
                dismiss: !0
            }))
        }
        ),
        e),
        this.message = (e, r) => this.create({
            ...r,
            message: e
        }),
        this.error = (e, r) => this.create({
            ...r,
            message: e,
            type: "error"
        }),
        this.success = (e, r) => this.create({
            ...r,
            type: "success",
            message: e
        }),
        this.info = (e, r) => this.create({
            ...r,
            type: "info",
            message: e
        }),
        this.warning = (e, r) => this.create({
            ...r,
            type: "warning",
            message: e
        }),
        this.loading = (e, r) => this.create({
            ...r,
            type: "loading",
            message: e
        }),
        this.promise = (e, r) => {
            if (!r)
                return;
            let i;
            r.loading !== void 0 && (i = this.create({
                ...r,
                promise: e,
                type: "loading",
                message: r.loading,
                description: typeof r.description != "function" ? r.description : void 0
            }));
            const a = Promise.resolve(e instanceof Function ? e() : e);
            let u = i !== void 0, c;
            const f = a.then(async m => {
                if (c = ["resolve", m],
                Ds.isValidElement(m))
                    u = !1,
                    this.create({
                        id: i,
                        type: "default",
                        message: m
                    });
                else if (ON(m) && !m.ok) {
                    u = !1;
                    const y = typeof r.error == "function" ? await r.error(`HTTP error! status: ${m.status}`) : r.error
                      , w = typeof r.description == "function" ? await r.description(`HTTP error! status: ${m.status}`) : r.description
                      , x = typeof y == "object" && !Ds.isValidElement(y) ? y : {
                        message: y
                    };
                    this.create({
                        id: i,
                        type: "error",
                        description: w,
                        ...x
                    })
                } else if (m instanceof Error) {
                    u = !1;
                    const y = typeof r.error == "function" ? await r.error(m) : r.error
                      , w = typeof r.description == "function" ? await r.description(m) : r.description
                      , x = typeof y == "object" && !Ds.isValidElement(y) ? y : {
                        message: y
                    };
                    this.create({
                        id: i,
                        type: "error",
                        description: w,
                        ...x
                    })
                } else if (r.success !== void 0) {
                    u = !1;
                    const y = typeof r.success == "function" ? await r.success(m) : r.success
                      , w = typeof r.description == "function" ? await r.description(m) : r.description
                      , x = typeof y == "object" && !Ds.isValidElement(y) ? y : {
                        message: y
                    };
                    this.create({
                        id: i,
                        type: "success",
                        description: w,
                        ...x
                    })
                }
            }
            ).catch(async m => {
                if (c = ["reject", m],
                r.error !== void 0) {
                    u = !1;
                    const g = typeof r.error == "function" ? await r.error(m) : r.error
                      , y = typeof r.description == "function" ? await r.description(m) : r.description
                      , k = typeof g == "object" && !Ds.isValidElement(g) ? g : {
                        message: g
                    };
                    this.create({
                        id: i,
                        type: "error",
                        description: y,
                        ...k
                    })
                }
            }
            ).finally( () => {
                u && (this.dismiss(i),
                i = void 0),
                r.finally == null || r.finally.call(r)
            }
            )
              , h = () => new Promise( (m, g) => f.then( () => c[0] === "reject" ? g(c[1]) : m(c[1])).catch(g));
            return typeof i != "string" && typeof i != "number" ? {
                unwrap: h
            } : Object.assign(i, {
                unwrap: h
            })
        }
        ,
        this.custom = (e, r) => {
            const i = (r == null ? void 0 : r.id) || df++;
            return this.create({
                jsx: e(i),
                id: i,
                ...r
            }),
            i
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
const Yt = new AN
  , NN = (t, e) => {
    const r = (e == null ? void 0 : e.id) || df++;
    return Yt.addToast({
        title: t,
        ...e,
        id: r
    }),
    r
}
  , ON = t => t && typeof t == "object" && "ok"in t && typeof t.ok == "boolean" && "status"in t && typeof t.status == "number"
  , LN = NN
  , DN = () => Yt.toasts
  , MN = () => Yt.getActiveToasts();
Object.assign(LN, {
    success: Yt.success,
    info: Yt.info,
    warning: Yt.warning,
    error: Yt.error,
    custom: Yt.custom,
    message: Yt.message,
    promise: Yt.promise,
    dismiss: Yt.dismiss,
    loading: Yt.loading
}, {
    getHistory: DN,
    getToasts: MN
});
RN("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function jN() {
    const [t,e] = L.useState({
        name: "",
        phone: "",
        from: "",
        to: "",
        message: ""
    })
      , r = [{
        icon: cb,
        title: "זמינות 24/6",
        description: "שירות מסביב לשעון, בכל יום בשנה"
    }, {
        icon: wb,
        title: "נהגים מקצועיים",
        description: "נהגים מנוסים ובעלי רישיון תקף"
    }, {
        icon: fb,
        title: "מחירים הוגנים",
        description: "תעריפים תחרותיים ללא הפתעות"
    }, {
        icon: Tb,
        title: "הגעה מהירה",
        description: "זמני הגעה קצרים בכל רחבי הארץ"
    }]
      , i = ["תל אביב והמרכז", "ירושלים והסביבה", "באר שבע והדרום", 'נתב"ג', "אשדוד ואשקלון", "אילת והערבה", "דימונה וערד", "קריית גת והשפלה", "אופקים ונתיבות"]
      , a = [{
        name: "דוד כהן",
        rating: 5,
        text: "שירות מעולה! הנהג הגיע בזמן והנסיעה הייתה נעימה ובטוחה."
    }, {
        name: "שרה לוי",
        rating: 5,
        text: "מחירים הוגנים ושירות אדיב. ממליצה בחום!"
    }, {
        name: "יוסי אברהם",
        rating: 5,
        text: "משתמש בשירות באופן קבוע. תמיד אמינים ומקצועיים."
    }];
    return T.jsxs("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
        dir: "rtl",
        children: [T.jsx("div", {
            className: "bg-amber-500 text-gray-900 text-center py-2 px-4",
            children: T.jsx("p", {
                className: "font-bold text-lg tracking-wide",
                children: "מוניות הנגב והדרום"
            })
        }), T.jsxs("section", {
            className: "relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden",
            children: [T.jsx("div", {
                className: "absolute inset-0 opacity-10",
                children: T.jsx("div", {
                    className: "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200')] bg-cover bg-center"
                })
            }), T.jsx("div", {
                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32",
                children: T.jsxs(wn.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    className: "text-center max-w-4xl mx-auto",
                    children: [T.jsxs("div", {
                        className: "inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-8",
                        children: [T.jsx(gb, {
                            className: "w-4 h-4 text-amber-400"
                        }), T.jsx("span", {
                            className: "text-amber-400 text-sm font-medium",
                            children: "שירות מוניות בכל הארץ"
                        })]
                    }), T.jsxs("h1", {
                        className: "text-5xl lg:text-7xl font-bold mb-6 leading-tight",
                        children: ["נסיעה בטוחה ", T.jsx("br", {}), T.jsx("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300",
                            children: "ומהירה לכל יעד"
                        })]
                    }), T.jsx("p", {
                        className: "text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed",
                        children: "שירות מוניות מקצועי זמין 24/6 • מחירים הוגנים • נהגים מנוסים"
                    }), T.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                        children: [T.jsx(oo, {
                            size: "lg",
                            className: "bg-amber-500 hover:bg-amber-600 text-gray-900 text-lg px-8 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105",
                            onClick: () => document.getElementById("order-form").scrollIntoView({
                                behavior: "smooth"
                            }),
                            children: "הזמן מונית עכשיו"
                        }), T.jsx("a", {
                            href: "tel:0504407758",
                            children: T.jsxs(oo, {
                                size: "lg",
                                variant: "outline",
                                className: "bg-background text-slate-900 px-8 py-6 text-lg font-bold rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm h-10 border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300",
                                children: [T.jsx(Wc, {
                                    className: "ml-2 h-5 w-5"
                                }), "050-440-7758"]
                            })
                        })]
                    })]
                })
            }), T.jsx("div", {
                className: "absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"
            })]
        }), T.jsx("section", {
            className: "py-20 px-4",
            children: T.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [T.jsxs(wn.div, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [T.jsx("h2", {
                        className: "text-4xl lg:text-5xl font-bold mb-4 text-gray-900",
                        children: "למה לבחור בנו?"
                    }), T.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "השירות המוביל בישראל"
                    })]
                }), T.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: r.map( (u, c) => T.jsx(wn.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: c * .1
                        },
                        viewport: {
                            once: !0
                        },
                        children: T.jsx(pl, {
                            className: "border-2 border-gray-100 hover:border-amber-500 transition-all duration-300 hover:shadow-xl h-full",
                            children: T.jsxs(ml, {
                                className: "p-8 text-center",
                                children: [T.jsx("div", {
                                    className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl mb-6 shadow-lg",
                                    children: T.jsx(u.icon, {
                                        className: "w-8 h-8 text-gray-900"
                                    })
                                }), T.jsx("h3", {
                                    className: "text-xl font-bold mb-3 text-gray-900",
                                    children: u.title
                                }), T.jsx("p", {
                                    className: "text-gray-600 leading-relaxed",
                                    children: u.description
                                })]
                            })
                        })
                    }, c))
                })]
            })
        }), T.jsx("section", {
            className: "py-20 px-4",
            children: T.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [T.jsxs(wn.div, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [T.jsx("h2", {
                        className: "text-4xl lg:text-5xl font-bold mb-4 text-gray-900",
                        children: "אזורי פעילות"
                    }), T.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "פעילים בכל רחבי הארץ"
                    })]
                }), T.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: i.map( (u, c) => T.jsx(wn.div, {
                        initial: {
                            opacity: 0,
                            scale: .9
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: .4,
                            delay: c * .1
                        },
                        viewport: {
                            once: !0
                        },
                        children: T.jsx(pl, {
                            className: "border-2 border-gray-100 hover:border-amber-500 transition-all duration-300 hover:shadow-lg",
                            children: T.jsxs(ml, {
                                className: "p-6 opacity-100 flex items-center gap-4",
                                children: [T.jsx("div", {
                                    className: "flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center",
                                    children: T.jsx(pb, {
                                        className: "w-6 h-6 text-amber-600"
                                    })
                                }), T.jsx("span", {
                                    className: "text-lg font-semibold text-gray-900",
                                    children: u
                                })]
                            })
                        })
                    }, c))
                })]
            })
        }), T.jsx("section", {
            className: "py-20 px-4 bg-white",
            children: T.jsx("div", {
                className: "max-w-7xl mx-auto",
                children: T.jsxs(wn.div, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    children: [T.jsxs("div", {
                        children: [T.jsx("h2", {
                            className: "text-4xl lg:text-5xl font-bold mb-6 text-gray-900",
                            children: "מוניות בדרום הארץ"
                        }), T.jsxs("div", {
                            className: "space-y-4 text-lg text-gray-700 leading-relaxed",
                            children: [T.jsxs("p", {
                                children: [T.jsx("strong", {
                                    className: "text-amber-600",
                                    children: "שירות מוניות מוביל בדרום"
                                }), " - אנחנו מספקים שירותי הסעות מקצועיים בכל רחבי דרום הארץ. מוניות באר שבע, מוניות אשדוד, מוניות אשקלון, מוניות אילת ועוד."]
                            }), T.jsxs("p", {
                                children: [T.jsx("strong", {
                                    children: "מוניות בבאר שבע והסביבה"
                                }), " - זמינים 24/6 לנסיעות בתוך העיר, לשדה התעופה, לתחנת הרכבת ולכל יעד ארצי."]
                            }), T.jsxs("p", {
                                children: [T.jsx("strong", {
                                    children: "מוניות אשדוד ואשקלון"
                                }), " - שירות מהיר ואמין מהנמל, התחנה המרכזית ולכל שכונות הערים."]
                            }), T.jsxs("p", {
                                children: [T.jsx("strong", {
                                    children: "מוניות לאילת"
                                }), " - נסיעות בטוחות ונוחות לאילת דרך הערבה, עם נהגים מנוסים בדרכים הדרומיות."]
                            }), T.jsx("p", {
                                children: "מוניות דימונה, מוניות ערד, מוניות קריית גת, מוניות אופקים, מוניות נתיבות, מוניות שדרות - אנחנו כאן בשבילכם בכל עיר ועיירה בדרום."
                            })]
                        }), T.jsxs("div", {
                            className: "mt-8 flex flex-wrap gap-3",
                            children: [T.jsx("div", {
                                className: "bg-amber-50 border border-amber-200 rounded-lg px-4 py-2",
                                children: T.jsx("span", {
                                    className: "text-amber-800 font-medium",
                                    children: "מוניות באר שבע"
                                })
                            }), T.jsx("div", {
                                className: "bg-amber-50 border border-amber-200 rounded-lg px-4 py-2",
                                children: T.jsx("span", {
                                    className: "text-amber-800 font-medium",
                                    children: "מוניות אשדוד"
                                })
                            }), T.jsx("div", {
                                className: "bg-amber-50 border border-amber-200 rounded-lg px-4 py-2",
                                children: T.jsx("span", {
                                    className: "text-amber-800 font-medium",
                                    children: "מוניות אשקלון"
                                })
                            }), T.jsx("div", {
                                className: "bg-amber-50 border border-amber-200 rounded-lg px-4 py-2",
                                children: T.jsx("span", {
                                    className: "text-amber-800 font-medium",
                                    children: "מוניות אילת"
                                })
                            }), T.jsx("div", {
                                className: "bg-amber-50 border border-amber-200 rounded-lg px-4 py-2",
                                children: T.jsx("span", {
                                    className: "text-amber-800 font-medium",
                                    children: "מוניות בדרום"
                                })
                            })]
                        })]
                    }), T.jsxs("div", {
                        className: "relative",
                        children: [T.jsx("img", {
                            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e5ad1d9f498552529b17/0688e9aa6_Gemini_Generated_Image_wl6aowwl6aowwl6a.png",
                            alt: "מוניות בדרום הארץ",
                            className: "rounded-2xl shadow-2xl"
                        }), T.jsxs("div", {
                            className: "absolute -bottom-6 -right-6 bg-amber-500 text-gray-900 p-6 rounded-xl shadow-xl",
                            children: [T.jsx("p", {
                                className: "text-3xl font-bold",
                                children: "24/6"
                            }), T.jsx("p", {
                                className: "font-medium",
                                children: "זמינים תמיד"
                            })]
                        })]
                    })]
                })
            })
        }), T.jsx("section", {
            className: "py-20 px-4 bg-gradient-to-b from-gray-50 to-white",
            children: T.jsx("div", {
                className: "max-w-7xl mx-auto",
                children: T.jsxs(wn.div, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    children: [T.jsxs("div", {
                        children: [T.jsx("h2", {
                            className: "text-4xl lg:text-5xl font-bold mb-6 text-gray-900",
                            children: "נסיעות מנתב״ג"
                        }), T.jsxs("div", {
                            className: "space-y-4 text-lg text-gray-700 leading-relaxed",
                            children: [T.jsxs("p", {
                                children: [T.jsx("strong", {
                                    className: "text-amber-600",
                                    children: "שירות מוניות מנתב״ג לכל רחבי הארץ"
                                }), " - אנחנו מספקים שירות איסוף והסעות מנמל התעופה בן גוריון לכל יעד בארץ."]
                            }), T.jsxs("p", {
                                children: [T.jsx("strong", {
                                    children: "נתב״ג לירושלים"
                                }), " - נסיעה נוחה ומהירה מהנמל לירושלים והסביבה, זמינים 24/6."]
                            }), T.jsxs("p", {
                                children: [T.jsx("strong", {
                                    children: "נתב״ג לתל אביב והמרכז"
                                }), " - שירות מהיר למרכז הארץ, למלונות, לבתים פרטיים ולמשרדים."]
                            }), T.jsxs("p", {
                                children: [T.jsx("strong", {
                                    children: "נתב״ג לדרום הארץ"
                                }), " - נסיעות בטוחות לבאר שבע, אשדוד, אשקלון וכל ערי הדרום."]
                            }), T.jsx("p", {
                                children: "איסוף מהיר מהטרמינל, נהגים מקצועיים ומנוסים, רכבים נוחים ומרווחים למזוודות. הזמן מראש ותהנה משירות ללא המתנה!"
                            })]
                        }), T.jsxs("div", {
                            className: "mt-8 flex flex-wrap gap-3",
                            children: [T.jsx("div", {
                                className: "bg-amber-50 border border-amber-200 rounded-lg px-4 py-2",
                                children: T.jsx("span", {
                                    className: "text-amber-800 font-medium",
                                    children: "נתב״ג לירושלים"
                                })
                            }), T.jsx("div", {
                                className: "bg-amber-50 border border-amber-200 rounded-lg px-4 py-2",
                                children: T.jsx("span", {
                                    className: "text-amber-800 font-medium",
                                    children: "נתב״ג לתל אביב"
                                })
                            }), T.jsx("div", {
                                className: "bg-amber-50 border border-amber-200 rounded-lg px-4 py-2",
                                children: T.jsx("span", {
                                    className: "text-amber-800 font-medium",
                                    children: "נתב״ג לדרום"
                                })
                            }), T.jsx("div", {
                                className: "bg-amber-50 border border-amber-200 rounded-lg px-4 py-2",
                                children: T.jsx("span", {
                                    className: "text-amber-800 font-medium",
                                    children: "איסוף מהטרמינל"
                                })
                            })]
                        })]
                    }), T.jsxs("div", {
                        className: "relative",
                        children: [T.jsx("img", {
                            src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600",
                            alt: "נסיעות מנתב״ג",
                            className: "rounded-2xl shadow-2xl object-cover w-full h-80 lg:h-auto"
                        }), T.jsxs("div", {
                            className: "absolute -bottom-6 -left-6 bg-amber-500 text-gray-900 p-6 rounded-xl shadow-xl",
                            children: [T.jsx("p", {
                                className: "text-3xl font-bold",
                                children: "24/6"
                            }), T.jsx("p", {
                                className: "font-medium",
                                children: "זמינים תמיד"
                            })]
                        })]
                    })]
                })
            })
        }), T.jsx("section", {
            className: "py-20 px-4 bg-gradient-to-b from-gray-50 to-white",
            children: T.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [T.jsxs(wn.div, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [T.jsx("h2", {
                        className: "text-4xl lg:text-5xl font-bold mb-4 text-gray-900",
                        children: "מה הלקוחות אומרים"
                    }), T.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "אלפי לקוחות מרוצים"
                    })]
                }), T.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: a.map( (u, c) => T.jsx(wn.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: c * .1
                        },
                        viewport: {
                            once: !0
                        },
                        children: T.jsx(pl, {
                            className: "border-2 border-gray-100 h-full",
                            children: T.jsxs(ml, {
                                className: "p-8",
                                children: [T.jsx("div", {
                                    className: "flex gap-1 mb-4",
                                    children: [...Array(u.rating)].map( (f, h) => T.jsx(Sb, {
                                        className: "w-5 h-5 fill-amber-400 text-amber-400"
                                    }, h))
                                }), T.jsxs("p", {
                                    className: "text-gray-700 mb-6 leading-relaxed",
                                    children: ['"', u.text, '"']
                                }), T.jsx("p", {
                                    className: "font-semibold text-gray-900",
                                    children: u.name
                                })]
                            })
                        })
                    }, c))
                })]
            })
        }), T.jsx("section", {
            className: "py-20 px-4 bg-gradient-to-br from-gray-900 to-black text-white",
            children: T.jsx("div", {
                className: "max-w-4xl mx-auto text-center",
                children: T.jsxs(wn.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    viewport: {
                        once: !0
                    },
                    children: [T.jsx("h2", {
                        className: "text-4xl lg:text-5xl font-bold mb-6",
                        children: "מוכנים לנסיעה?"
                    }), T.jsx("p", {
                        className: "text-xl text-gray-300 mb-10",
                        children: "צור קשר עכשיו וקבל מונית תוך דקות"
                    }), T.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [T.jsx("a", {
                            href: "tel:0504407758",
                            children: T.jsxs(oo, {
                                size: "lg",
                                className: "bg-amber-500 hover:bg-amber-600 text-gray-900 text-lg px-8 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300",
                                children: [T.jsx(Wc, {
                                    className: "ml-2 h-5 w-5"
                                }), "התקשר עכשיו"]
                            })
                        }), T.jsx("a", {
                            href: "https://wa.me/972501234567",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: T.jsx(oo, {
                                size: "lg",
                                variant: "outline",
                                className: "bg-background text-slate-950 px-8 py-6 text-lg font-bold rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm h-10 border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300",
                                children: "WhatsApp"
                            })
                        })]
                    })]
                })
            })
        }), T.jsx("footer", {
            className: "bg-gray-900 text-gray-400 py-12 px-4",
            children: T.jsxs("div", {
                className: "max-w-7xl mx-auto text-center",
                children: [T.jsxs("div", {
                    className: "mb-6",
                    children: [T.jsx("h3", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: "מוניות בכל הארץ"
                    }), T.jsx("p", {
                        className: "text-lg",
                        children: "שירות מקצועי ואמין 24/6"
                    })]
                }), T.jsx("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-8",
                    children: T.jsxs("a", {
                        href: "tel:0504407758",
                        className: "flex items-center gap-2 hover:text-amber-400 transition-colors",
                        children: [T.jsx(Wc, {
                            className: "w-4 h-4"
                        }), T.jsx("span", {
                            children: "050-440-7758"
                        })]
                    })
                }), T.jsx("p", {
                    className: "text-sm",
                    children: "© 2023 מוניות בכל הארץ. כל הזכויות שמורות."
                })]
            })
        })]
    })
}
function IN({children: t}) {
    return L.useEffect( () => {
        const e = document.createElement("script");
        e.async = !0,
        e.src = "https://www.googletagmanager.com/gtag/js?id=AW-17958198091",
        document.head.appendChild(e);
        const r = document.createElement("script");
        r.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17958198091');
    `,
        document.head.appendChild(r)
    }
    , []),
    T.jsx(T.Fragment, {
        children: t
    })
}
const FN = {
    Home: jN
}
  , Hx = {
    mainPage: "Home",
    Pages: FN,
    Layout: IN
};
function VN() {
    const t = xf()
      , {isAuthenticated: e} = mw()
      , {Pages: r, mainPage: i} = Hx
      , a = i;
    return L.useEffect( () => {
        var u;
        (u = window.parent) == null || u.postMessage({
            type: "app_changed_url",
            url: window.location.href
        }, "*")
    }
    , [t]),
    L.useEffect( () => {
        const u = t.pathname;
        let c;
        if (u === "/" || u === "")
            c = a;
        else {
            const f = u.replace(/^\//, "").split("/")[0];
            c = Object.keys(r).find(g => g.toLowerCase() === f.toLowerCase()) || null
        }
        e && c && js.appLogs.logUserInApp(c).catch( () => {}
        )
    }
    , [t, e, r, a]),
    null
}
function BN({}) {
    var a;
    const e = xf().pathname.substring(1)
      , {data: r, isFetched: i} = qE({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                return {
                    user: await js.auth.me(),
                    isAuthenticated: !0
                }
            } catch {
                return {
                    user: null,
                    isAuthenticated: !1
                }
            }
        }
    });
    return T.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: T.jsx("div", {
            className: "max-w-md w-full",
            children: T.jsxs("div", {
                className: "text-center space-y-6",
                children: [T.jsxs("div", {
                    className: "space-y-2",
                    children: [T.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), T.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), T.jsxs("div", {
                    className: "space-y-3",
                    children: [T.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), T.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", T.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', e, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && r.isAuthenticated && ((a = r.user) == null ? void 0 : a.role) === "admin" && T.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: T.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [T.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: T.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), T.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [T.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), T.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), T.jsx("div", {
                    className: "pt-6",
                    children: T.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [T.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: T.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const UN = () => T.jsx("div", {
    className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
    children: T.jsx("div", {
        className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
        children: T.jsxs("div", {
            className: "text-center",
            children: [T.jsx("div", {
                className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                children: T.jsx("svg", {
                    className: "w-8 h-8 text-orange-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: T.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                })
            }), T.jsx("h1", {
                className: "text-3xl font-bold text-slate-900 mb-4",
                children: "Access Restricted"
            }), T.jsx("p", {
                className: "text-slate-600 mb-8",
                children: "You are not registered to use this application. Please contact the app administrator to request access."
            }), T.jsxs("div", {
                className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                children: [T.jsx("p", {
                    children: "If you believe this is an error, you can:"
                }), T.jsxs("ul", {
                    className: "list-disc list-inside mt-2 space-y-1",
                    children: [T.jsx("li", {
                        children: "Verify you are logged in with the correct account"
                    }), T.jsx("li", {
                        children: "Contact the app administrator for access"
                    }), T.jsx("li", {
                        children: "Try logging out and back in again"
                    })]
                })]
            })]
        })
    })
})
  , {Pages: qx, Layout: Av, mainPage: zN} = Hx
  , Wx = zN
  , $N = qx[Wx]
  , Nv = ({children: t, currentPageName: e}) => Av ? T.jsx(Av, {
    currentPageName: e,
    children: t
}) : T.jsx(T.Fragment, {
    children: t
})
  , HN = () => {
    const {isLoadingAuth: t, isLoadingPublicSettings: e, authError: r, isAuthenticated: i, navigateToLogin: a} = mw();
    if (e || t)
        return T.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center",
            children: T.jsx("div", {
                className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
            })
        });
    if (r) {
        if (r.type === "user_not_registered")
            return T.jsx(UN, {});
        if (r.type === "auth_required")
            return a(),
            null
    }
    return T.jsxs(Nk, {
        children: [T.jsx(ol, {
            path: "/",
            element: T.jsx(Nv, {
                currentPageName: Wx,
                children: T.jsx($N, {})
            })
        }), Object.entries(qx).map( ([u,c]) => T.jsx(ol, {
            path: `/${u}`,
            element: T.jsx(Nv, {
                currentPageName: u,
                children: T.jsx(c, {})
            })
        }, u)), T.jsx(ol, {
            path: "*",
            element: T.jsx(BN, {})
        })]
    })
}
;
function qN() {
    return T.jsx(zP, {
        children: T.jsxs(LE, {
            client: WE,
            children: [T.jsxs(Dk, {
                children: [T.jsx(VN, {}), T.jsx(HN, {})]
            }), T.jsx(aE, {}), T.jsx(KE, {})]
        })
    })
}
ZS.createRoot(document.getElementById("root")).render(T.jsx(qN, {}));
