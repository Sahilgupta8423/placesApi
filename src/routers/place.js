const express = require("express");
// 1. create a new router
const router = new express.Router();
const Place = require("../models/places");
const checkAuth  = require('../middleware/check-auth')
// 2. we need to define the router
router.get("/placeapi", (req, res) => {
  res.send("This is API for places all arround the world");
});



// Using Async Await
router.post("/add", checkAuth, async (req, res) => {
  try {
    const place = new Place(req.body);
    const createPlace = await place.save();
    res.status(201).send(createPlace);
  } catch (err) {
    res.status(400).send(err);
  }
});


router.get("/places/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const placeData = await Place.findById(_id);
    if (!placeData) {
      return res.status(404).send();
    } else {
      res.status(200).send(placeData);
    }
  } catch (error) {
    console.log(error);
  }
});


router.get("/places", async (req, res) => {
  try {
    const placesData = await Place.find();
    res.send(placesData);
  } catch (error) {
    console.log(error);
  }
});


router.delete("/places/:id", checkAuth, async (req, res) => {
  try {
    const deletePlace = await Place.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      res.status(400).send();
    } else {
      res.status(200).send(deletePlace);
    }
  } catch (error) {
    console.log(error)
  }
});
router.delete("/places", checkAuth, async (req, res) => {
  try {
    const deletePlace = await Place.deleteMany();
      res.status(200).send(deletePlace);
  } catch (error) {
    console.log(error)
  }
});



router.patch("/places/:id", checkAuth, async (req, res) => {
  try {
    const updatedPlace = await Place.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!req.params.id) {
      res.status(404).send();
    } else {
      res.status(200).send(updatedPlace);
    }
  } catch (error) {}
});

module.exports = router;
