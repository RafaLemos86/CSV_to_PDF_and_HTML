class Processor {
    static Process(data) {
        var separate = data.split('\r\n')
        var rows = []

        separate.forEach(row => {
            rows.push(row.split(','))
        });

        return rows
    };
};


module.exports = Processor