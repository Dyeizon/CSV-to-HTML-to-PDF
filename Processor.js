class Processor {
    static process(data) {
        var dataSplitted = data.split("\r\n");
        var rows = []
        
        dataSplitted.forEach(row => {
            var arr = row.split(";");
            rows.push(arr); 
        });

        return rows;
    }
}

module.exports = Processor;