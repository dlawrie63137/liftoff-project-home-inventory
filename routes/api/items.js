const express = require("express");
const router = express.Router();

//Item model
const Item = require("../../models/Item");

// @route POST api/item/add
// @desc add item
// @access Public
router.post('/add', (req, res) => {
        
    const newItem = new Item({
        location: req.body.location,
        room: req.body.room,
        item: req.body.item,
        manufacturer: req.body.manufacturer,
        model: req.body.model,
        serial_number: req.body.serial_number,
        year_acquired: req.body.year_acquired,
        purchase_price: req.body.purchase_price,
        user_id: req.body.user_id
    });
     
    newItem
        .save()
        .then(item => res.json(item))
        .catch(err => console.log(err));
    });

   
        
module.exports = router;        