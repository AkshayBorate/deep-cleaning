const express = require("express");
const { register, login } = require("../controllers/AuthController");
const {
  seedAllServices,
  getServicesByCategory,
  getServiceByType,
} = require("../controllers/cleaningServiceController");
const { createContact,getAllContacts } = require("../controllers/contactController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/seed-cleaning-services", seedAllServices);
// router.get('/getServeice/house/:type',getServiceType)
// router.get('/service/house/:type', getServiceByType);
router.get("/services/:category", getServicesByCategory); //
router.post("/add/contact", createContact);
router.get("/get/contact", getAllContacts);

module.exports = router;
