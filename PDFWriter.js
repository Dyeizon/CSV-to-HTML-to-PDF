const pdf = require("html-pdf");

class PDFWriter {
    static writePDF(file, html) {
        pdf.create(html, {}).toFile(file, err=>{});
    } 
}

module.exports = PDFWriter;