const fs = require('fs')
const util = require('util')


class Writer {
    constructor() {
        this.writer = util.promisify(fs.writeFile)
    };

    async Write(name, data) {
        try {

            await this.writer(name, data)
            return true;

        } catch {
            return false;
        };

    };
}

module.exports = Writer