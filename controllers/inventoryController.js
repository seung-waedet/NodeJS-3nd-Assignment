const { readDataFile } = require("../services/file.service");


const CheckSizes = (req, res, next) => {
    const validSizes = ['s', 'l', 'm', 'xl'];

    if (!validSizes.includes(req.body.size)) {
        return res.status(422).json({
            data: null,
            error: 'Invalid size, use m, l, s or xl'
        })
    }

    next()
}

const queryInventory = async (req, res) => {
    const inventoryList = await readDataFile();
    const validSizes = ['s', 'l', 'm', 'xl'];

    if (!Object.keys(req.query).length) {
        return res.status(200).json({
            data: inventoryList
        })
    }

    if (!validSizes.includes(req.query.size)) {
        return res.status(404).json({ error: 'Invalid size' });
    }

    const filteredInventory = inventoryList.filter((item) => item.size === req.query.size);

    if (!filteredInventory.length) {
        return res.status(404).json({ error: 'Size not available' })
    }

    return res.status(200).json({
        data: filteredInventory
    })



}

module.exports = {
    CheckSizes,
    queryInventory
};
