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


const CheckProgram = (req, res, next) => {
    const validPrograms = ['nodejs', 'python', 'product'];

    if (!validPrograms.includes(req.body.program)) {
        return res.status(422).json({
            data: null,
            error: 'Invalid program, use nodejs, python or product'
        })
    }

    next()
}

module.exports = {
    readDataFile,
    writeDataFile,
    CheckProgram,
};
