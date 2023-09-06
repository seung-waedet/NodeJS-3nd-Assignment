const fs = require('fs/promises');
const path = require('path');

const userFilePath = path.join(__dirname, '../data/users.json');

const readDataFile = async () => {
    try {
        const data = await fs.readFile(userFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
        return [];
    }
};

const writeDataFile = async (data) => {
    try {
        await fs.writeFile(userFilePath, JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    readDataFile,
    writeDataFile
}