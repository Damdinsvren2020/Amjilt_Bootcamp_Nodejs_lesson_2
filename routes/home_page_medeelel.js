const express = require("express");

const router = express.Router();

const {
  getHome_Page_Medeelels,
  getHome_Page_Medeelel,
  createHome_Page_Medeelel,
  updateHome_Page_Medeelel,
  deleteHome_Page_Medeelel,
} = require("../controller/home_page_medeelel");

router.route("/").get(getHome_Page_Medeelels);
router.route("/:id").get(getHome_Page_Medeelel);
router.route("/:id").post(createHome_Page_Medeelel);
router.route("/:id").put(updateHome_Page_Medeelel);
router.route("/:id").delete(deleteHome_Page_Medeelel);

module.exports = router;
