const express = require("express")
const { gettransectionCtrl,
        addtransectionCtrl, 
        deletetransectionController,
        edittransectionController } = require("../controller/transectionCtrl")


// Routes
const router  = express.Router()

//Add transection Route method post 
router.post("/add-transection" , addtransectionCtrl)

// Get transection Route method get
router.post("/get-transection" , gettransectionCtrl)


// Delete transection Route method || post
router.post("/delete-transection" , deletetransectionController)

// Edit transection Route method || post
router.post("/edit-transection" , edittransectionController)

module.exports = router