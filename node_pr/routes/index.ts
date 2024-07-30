import express, { Request, Response, NextFunction } from "express";
var router = express.Router();

router.get("/", function (req:Request, res, next:NextFunction) {
  res.send("welome to aashirs api");
});
router.get("/get", (req:Request, res:Response) => {
  const { itemName, itemPrice, itemQuantity } = req.body;
});

router.post("/send", (req:Request, res:Response) => {});

router.patch("/update", (req:Request, res:Response) => {});

router.delete("/delete", (req:Request, res:Response) => {
 
});

module.exports = router;
