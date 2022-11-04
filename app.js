const Reader = require("./Reader");
const Writer = require("./Writer");
const Table = require("./Table");
const Processor = require("./Processor");
const HTMLParser = require("./HTMLParser");
const PDFWriter = require("./PDFWriter");

async function main() {
    var file = "./dados.csv";

    var data = await Reader.read(file);

    var arr = Processor.process(data);

    var table = new Table(arr);

    var html = await HTMLParser.parse(table);

    // Writer.write(`./output/${Date.now()}.html`, html);
    // PDFWriter.writePDF(`./output/${Date.now()}.pdf`, html);
    Writer.write(`./output/htmlgerado.html`, html);
    PDFWriter.writePDF(`./output/pdfgerado.pdf`, html);
    console.log("Arquivo HTML e PDF gerados na pasta 'output'.");
}

main();