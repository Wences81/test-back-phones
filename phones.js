const fs = require("fs").promises;
const path = require("path");


const phonesPath = path.resolve("./db/phones.json");

fs.readFile(phonesPath, "utf8", (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    const json = JSON.parse(data)
    console.log(json)
})


async function listPhones() {
    try {
        const phones = await fs.readFile(phonesPath, "utf8")
        return JSON.parse(phones);
    } catch (error) {
        console.log(error.message);
    }
}

async function getPhoneById(phoneId) {
    try {
        const phones = await listPhones();
        const phoneById = phones.find(phone => phone.id === Number(phoneId));
        return phoneById;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    listPhones,
    getPhoneById,

}