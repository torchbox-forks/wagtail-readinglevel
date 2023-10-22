(() => {
  "use strict";
  window.draftail.registerPlugin(
    {
      type: "readinglevel",
      meta: function (e) {
        var t = (function (e) {
            var t,
              n,
              a = 0,
              r = e.replace(/[^a-zA-Z ]/g, "");
            (t = r.replace(/\s/g, "").replace(/\./g, "").length),
              (a = r.split(" ").filter(function (e) {
                return "" != e;
              }).length),
              (n = e.replace(/\S[.?!](\s|$)/g, "$1|").split("|").length - 1),
              "" == e.split(" ")[0] && (a -= 1);
            var i = (t / a) * 4.71 + (a / n) * 0.5 - 21.43,
              c = (i + 4).toFixed(1);
            return isFinite(c)
              ? (c > 18 ? (c = "18+") : c < 4 && (c = 4),
                { age: c, score: i, words: a, sentences: n })
              : null;
          })((0, e.getEditorState)().getCurrentContent().getPlainText()),
          n = "Reading Age: N/A",
          a = "tb-indicator";
        return t
          ? ((n = "Reading age: "
              .concat(t.age, ", Readability Score: ")
              .concat(t.score)),
            window.React.createElement("div", { className: a }, n))
          : window.React.createElement("div", { className: a }, "".concat(n));
      },
      CSS: "w-inline-block w-tabular-nums w-mr-2",
    },
    "controls"
  );
})();
