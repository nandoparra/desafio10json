const fs = require("fs");

function bicis() {
    let bicicletas = fs.readFileSync(__dirname + "/bicicletas.json", "utf-8");
  return bicicletas = JSON.parse(bicicletas);
}
module.exports = bicis();
