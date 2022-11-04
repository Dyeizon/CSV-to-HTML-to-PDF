const fs = require("fs");
const util = require("util");

class Reader {
    static async read(file) {
        try {
            this.readFilePromise = util.promisify(fs.readFile);
            return await this.readFilePromise(file, "utf8")
        } catch (error) {
            return undefined;
        }
    }
            
}


module.exports = Reader;