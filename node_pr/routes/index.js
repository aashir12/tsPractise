var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  res.send('welome to aashirs api')
});
router.get('/get',(req,res)=>{
  const {itemName,itemPrice,itemQuantity}=req.body;
   
})

router.post(
  '/send',(req,res)=>{

  }
)

router.patch(
  '/update',(req,res)=>{
    
  }
)

router.delete('/delete',(req,res)=>{
  '/delete',(req,res)=>{

  }
})

module.exports = router;
