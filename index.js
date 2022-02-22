const { listPhones, getPhoneById } = require("./phones");

const { Command } = require('commander');
const program = new Command();
program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'phone id')


program.parse(process.argv);

const argv = program.opts();


const invokeAction = async ({ action, id }) => {
    switch (action) {
        case 'list':
            const phones = await listPhones();
            console.table(phones)
            break;

        case 'get':
            const phonesById = await getPhoneById(id);
            if (!phonesById) {
                throw new Error(`Product with id=${id} not found`);
            }
            console.table(phonesById)
            break;


        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

invokeAction(argv);