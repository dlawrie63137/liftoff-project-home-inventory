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

 // GET route for Item
 router.get('/view', function(req, res, next) {
    Item.find({})
    .then(function(items) {
        res.send(items);
        //console.log(items, this.props.auth.user_id);
    });
 });   

 // Delete item route
 router.get('/delete/:id', function(req, res, next) {
     Item.findByIdAndRemove({_id: req.params.id})
     .then(function(items) {
         res.send(items);
    });
 });
        
module.exports = router;        