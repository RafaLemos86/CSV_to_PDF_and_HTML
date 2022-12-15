const Reader = require('./Classes/Reader')
const HtmlParser = require('./Classes/HtmlParser')
const Processor = require('./Classes/Processor')
const Table = require('./Classes/Table')
const Writer = require('./Classes/Writer')
const PDFWriter = require('./Classes/PDFWriter')

var leitor = new Reader
var escritor = new Writer


async function main() {
    var data = await leitor.Read('./Csv/users.csv')

    var dataProcess = Processor.Process(data)

    var table = new Table(dataProcess)

    var html = await HtmlParser.Parse(table)

    escritor.writer('./Files/' + Date.now() + '.html', html)
    PDFWriter.WritePDF('./Files/' + Date.now() + '.pdf', html)
}


main()