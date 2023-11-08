const Costume = require('../models/costume');
var express = require('express');
const costume_controlers= require('../controllers/costumes');
var router = express.Router();

/* GET costumes */
router.get('/', costume_controlers.costume_view_all_Page );
module.exports = router;


async function recreateDB() {
    await Costume.deleteMany();
  
    let instance1 = new Costume({
      costume_type: "Puffer Jacket",
      size: 'Small',
      cost: 59
    });
  
    instance1.save()
      .then(doc => {
        console.log("First object saved");
      })
      .catch(err => {
        console.error(err);
      });

      let instance2 = new Costume({
        costume_type: "Denim Jacket",
        size: 'medium',
        cost: 75
      });
    
      instance2.save()
        .then(doc => {
          console.log("Second object saved");
        })
        .catch(err => {
          console.error(err);
        });

        let instance3 = new Costume({
            costume_type: "Leather Jacket",
            size: 'small',
            cost: 159
          });
        
          instance3.save()
            .then(doc => {
            console.log("Third object saved");
            })
            .catch(err => {
              console.error(err);
            });
  }
  
  let reseed = true;
  if (reseed) {
    recreateDB();
  }



