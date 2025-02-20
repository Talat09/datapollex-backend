const Module = require("../models/Module");

exports.createModule = async (req, res) => {
  try {
    const module = new Module(req.body);
    await module.save();
    res.status(201).json(module);
  } catch (error) {
    res.status(400).json({ message: "Error creating module", error });
  }
};

exports.getModules = async (req, res) => {
  try {
    const modules = await Module.find({ courseId: req.params.courseId });
    res.status(200).json(modules);
  } catch (error) {
    res.status(400).json({ message: "Error fetching modules", error });
  }
};
