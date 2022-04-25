const withTM = require("next-transpile-modules")(["@sergio-sanz/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
