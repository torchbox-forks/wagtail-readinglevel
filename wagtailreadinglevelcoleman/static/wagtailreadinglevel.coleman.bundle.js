(() => {
  "use strict";
  window.draftail.registerPlugin(
    {
      type: "readinglevelcoleman",
      meta: function (e) {
        var t,
          n,
          a,
          i,
          r =
            ((t = (0, e.getEditorState)().getCurrentContent().getPlainText()),
            (a = t.replace(/[^a-zA-Z ]/g, "")),
            (i =
              (a.replace(/\s/g, "").replace(/\./g, "").length /
                (n = a.split(" ").filter(function (e) {
                  return "" != e;
                }).length)) *
                100 *
                0.0588 -
              ((t.replace(/\S[.?!](\s|$)/g, "$1|").split("|").length - 1) / n) *
                100 *
                0.296 -
              15.8),
            (i = Math.floor(100 * i) / 100),
            { index: isFinite(i) ? i : 0 }),
          l = "CL Index: N/A",
          c = "tb-indicator";
        return r
          ? ((l = "CL Index: ".concat(r.index)),
            window.React.createElement("div", { className: c }, l))
          : window.React.createElement("div", { className: c }, "".concat(l));
      },
    },
    "controls"
  );
})();
