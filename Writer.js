const fs = require("fs");
const util = require("util");

class Writer {
    static async write(file, content) {
        try {
            this.writer = util.promisify(fs.writeFile);
            await this.writer(file, content)    
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = Writer;