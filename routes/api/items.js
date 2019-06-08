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
 router.get('/view/:id', function(req, res, next) {
    let id = req.params.id;
    Item.find({user_id: id})
    .then(function(items) {
        items.sort((a, b) => (a.location > b.location) ? 1 : -1);
        res.send(items);
    });
 });   

 // Defined edit route
router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    Item.findById(id) 
    .then(function(item) {
        res.json(item);
      }) 
 });

 router.post('/update/:id', (req, res) => {
    Item.findById(req.params.id, (err, item) => {
       if (!item)
           res.status(404).send("data is not found");
       else {
        item.location = req.body.location,
        item.room = req.body.room,
        item.item = req.body.item,
        item.manufacturer = req.body.manufacturer,
        item.model = req.body.model,
        item.serial_number = req.body.serial_number,
        item.year_acquired = req.body.year_acquired,
        item.purchase_price = req.body.purchase_price,
        item.user_id = req.body.user_id

        item.save().then(item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
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