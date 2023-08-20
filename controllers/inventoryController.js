const fs = require('fs/promises');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/inventory.json');

const readDataFile = async () => {
    try {
        const data = await fs.readFile(dataFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
        return [];
    }
};

const writeDataFile = async (data) => {
    try {
        await fs.writeFile(dataFilePath, JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    readDataFile,
    writeDataFile,
};
