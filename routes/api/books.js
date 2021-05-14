const router = require("express").Router();
const bookcontroller = require("../../controllers/bookcontroller");

// Match to "/api/books"
router.route("/")
  .get(bookcontroller.findAll)
  .post(bookcontroller.create);

// Match to "/api/books/:id"
router
  .route("/:id")
  .get(bookcontroller.findById)
  .put(bookcontroller.update)
  .delete(bookcontroller.remove);

module.exports = router;