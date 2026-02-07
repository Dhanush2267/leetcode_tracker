const express = require("express");
const router = express.Router();

const Problem = require("../models/problems");

router.get("/", async (req, res) => {
  const problems = await Problem.find();
  res.json(problems);
});

router.post("/", async (req, res) => {
  const problem = new Problem(req.body);
  await problem.save();
  res.json(problem);
});
router.put("/:id", async (req, res) => {
  const problem = await Problem.findByIdAndUpdate(
    req.params.id,
    { completed: true },
    { new: true }
  );
  res.json(problem);
});


module.exports = router;
