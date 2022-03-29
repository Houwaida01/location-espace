//importation
const express = require("express");
const { signup, signin, deleteUser } = require("../controllers/user");
const isAuth = require("../middleware/isAuthUser");
const {
  registerValidation,
  validation,
  loginValidation,
  modifyUserValidation,
} = require("../middleware/validator");

//importation router
const router = express.Router();

//importation annonce Schema
const annonce = require("../model/Annonce");

//importation user Schema
const user = require("../model/User");

//CRUD
/**
 * methode:post
 * path:http://localhost:5000/api/user/add
 * req.body
 */
router.post("/add", async (req, res) => {
  try {
    const {
      annoncementOwner,
      annoncementDescription,
      annoncementLocation,
      annoncementPicture,
      annoncementExpo,
    } = req.body;
    const newAnnonce = new annonce({
      annoncementOwner,
      annoncementDescription,
      annoncementLocation,
      annoncementPicture,
      annoncementExpo,
    });
    await newAnnonce.save();
    return res.status(200).send({ msg: "the annonce added", newAnnonce });
  } catch (error) {
    return res.status(400).send({ msg: "can not add the annonce", error });
  }
});
/**
 * methode:get ALL
 * path:http://localhost:5000/api/user/
 */
router.get("/", async (req, res) => {
  try {
    const annonceList = await annonce.find();
    return res
      .status(200)
      .send({ msg: "this is the list of annonce", annonceList });
  } catch (error) {
    return res.status(400).send({ msg: "can not show the list", error });
  }
});
/**
 * methode:update annonce
 * path:http://localhost:5000/api/user/editAnnonce/:_id
 * req.params && req.body
 */
router.put("/editAnnonce/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const {
      annoncementOwner,
      annoncementDescription,
      annoncementLocation,
      annoncementPicture,
      annoncementExpo,
    } = req.body;
    const editAnnonce = await annonce.updateOne(
      { _id },
      { $set: { ...req.body } }
    );
    return res.status(200).send({ msg: "the annonce updated", editAnnonce });
  } catch (error) {
    return res.status(400).send({ msg: "can not update the annonce", error });
  }
});
/**
 * methode:delete annonce
 * path:http://localhost:5000/api/user/deleteAnnonce/:_id
 * req.params
 */
router.delete("/deleteAnnonce/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const deleteAnnonce = await annonce.deleteOne({ _id });
    return res.status(200).send({ msg: "the annonce deleted", deleteAnnonce });
  } catch (error) {
    return res.status(400).send({ msg: "can not deleted annonce", error });
  }
});
/**
 * methode:get one user
 * path:http://localhost:5000/api/user/one/:_id
 * req.params
 */
 router.get("/one/:_id", async (req, res) => {
  try {
    const { idUser } = req.params;
    const FoundUser = await user.findOne({ _id });
    return res.status(200).send({ msg: "the user found", FoundUser });
  } catch (error) {
    return res.status(400).send({ msg: "can not found the user", error });
  }
});
/**
 * methode:get ALL
 * path:http://localhost:5000/api/user/all
 */
 router.get("/all",async(req,res)=>{
  try {
      const listUser = await user.find();
      return res.status(200).send({ msg: "this is the list of user", listUser });
    } catch (error) {
      return res.status(400).send({ msg: "can not show the list", error });
    }
})
/**
 * methode:update self
 * path:http://localhost:5000/api/user/editSelf/:_id
 * req.params && req.body
 */
router.put("/editSelf/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, email, password, adresse, tel } = req.body;
    const editUser = await user.updateOne({ _id }, { $set: { ...req.body } });
    return res.status(200).send({ msg: "I ve updated", editUser });
  } catch (error) {
    return res.status(400).send({ msg: "I m not able to update", error });
  }
});

/**
 * methode:delete self
 * path:http://localhost:5000/api/user/deleteSelf/:_id
 * req.params
 */
router.delete("/deleteSelf/:_id", deleteUser);

//sign up sign in
router.post("/signup", registerValidation(), validation, signup);
router.post("/signin", loginValidation(), validation, signin);
router.get("/current", isAuth, (req, res) => {
  res.send({ ...req.user, isAdmin: false });
});

module.exports = router;
