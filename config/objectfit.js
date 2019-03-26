!(function() {
  "use strict";
  if ("undefined" != typeof window) {
    var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
      e = !!t && parseInt(t[1], 10) >= 16;
    if ("objectFit" in document.documentElement.style != !1 && !e)
      return void (window.objectFitPolyfill = function() {
        return !1;
      });
    var i = function(t) {
        var e = window.getComputedStyle(t, null),
          i = e.getPropertyValue("position"),
          n = e.getPropertyValue("overflow"),
          o = e.getPropertyValue("display");
        (i && "static" !== i) || (t.style.position = "relative"),
          "hidden" !== n && (t.style.overflow = "hidden"),
          (o && "inline" !== o) || (t.style.display = "block"),
          0 === t.clientHeight && (t.style.height = "100%"),
          -1 === t.className.indexOf("object-fit-polyfill") &&
            (t.className = t.className + " object-fit-polyfill");
      },
      n = function(t) {
        var e = window.getComputedStyle(t, null),
          i = {
            "max-width": "none",
            "max-height": "none",
            "min-width": "0px",
            "min-height": "0px",
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto",
            "margin-top": "0px",
            "margin-right": "0px",
            "margin-bottom": "0px",
            "margin-left": "0px"
          };
        for (var n in i) {
          e.getPropertyValue(n) !== i[n] && (t.style[n] = i[n]);
        }
      },
      o = function(t, e, i) {
        var n, o, l, a, d;
        if (((i = i.split(" ")), i.length < 2 && (i[1] = i[0]), "x" === t))
          (n = i[0]),
            (o = i[1]),
            (l = "left"),
            (a = "right"),
            (d = e.clientWidth);
        else {
          if ("y" !== t) return;
          (n = i[1]),
            (o = i[0]),
            (l = "top"),
            (a = "bottom"),
            (d = e.clientHeight);
        }
        return n === l || o === l
          ? void (e.style[l] = "0")
          : n === a || o === a
          ? void (e.style[a] = "0")
          : "center" === n || "50%" === n
          ? ((e.style[l] = "50%"),
            void (e.style["margin-" + l] = d / -2 + "px"))
          : n.indexOf("%") >= 0
          ? ((n = parseInt(n)),
            void (n < 50
              ? ((e.style[l] = n + "%"),
                (e.style["margin-" + l] = d * (n / -100) + "px"))
              : ((n = 100 - n),
                (e.style[a] = n + "%"),
                (e.style["margin-" + a] = d * (n / -100) + "px"))))
          : void (e.style[l] = n);
      },
      l = function(t) {
        var e = t.dataset
            ? t.dataset.objectFit
            : t.getAttribute("data-object-fit"),
          l = t.dataset
            ? t.dataset.objectPosition
            : t.getAttribute("data-object-position");
        (e = e || "cover"), (l = l || "50% 50%");
        var a = t.parentNode;
        i(a),
          n(t),
          (t.style.position = "absolute"),
          (t.style.height = "100%"),
          (t.style.width = "auto"),
          "scale-down" === e &&
            ((t.style.height = "auto"),
            t.clientWidth < a.clientWidth && t.clientHeight < a.clientHeight
              ? (o("x", t, l), o("y", t, l))
              : ((e = "contain"), (t.style.height = "100%"))),
          "none" === e
            ? ((t.style.width = "auto"),
              (t.style.height = "auto"),
              o("x", t, l),
              o("y", t, l))
            : ("cover" === e && t.clientWidth > a.clientWidth) ||
              ("contain" === e && t.clientWidth < a.clientWidth)
            ? ((t.style.top = "0"), (t.style.marginTop = "0"), o("x", t, l))
            : "scale-down" !== e &&
              ((t.style.width = "100%"),
              (t.style.height = "auto"),
              (t.style.left = "0"),
              (t.style.marginLeft = "0"),
              o("y", t, l));
      },
      a = function(t) {
        if (void 0 === t) t = document.querySelectorAll("[data-object-fit]");
        else if (t && t.nodeName) t = [t];
        else {
          if ("object" != typeof t || !t.length || !t[0].nodeName) return !1;
          t = t;
        }
        for (var i = 0; i < t.length; i++)
          if (t[i].nodeName) {
            var n = t[i].nodeName.toLowerCase();
            "img" !== n || e
              ? "video" === n &&
                (t[i].readyState > 0
                  ? l(t[i])
                  : t[i].addEventListener("loadedmetadata", function() {
                      l(this);
                    }))
              : t[i].complete
              ? l(t[i])
              : t[i].addEventListener("load", function() {
                  l(this);
                });
          }
        return !0;
      };
    document.addEventListener("DOMContentLoaded", function() {
      a();
    }),
      window.addEventListener("resize", function() {
        a();
      }),
      (window.objectFitPolyfill = a);
  }
})();
