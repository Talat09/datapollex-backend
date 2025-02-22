const Module = require("../models/Module");

exports.createModule = async (req, res) => {
  try {
    const { title, description, course } = req.body;
    const module = new Module({ title, description, course });

    await module.save();
    res.status(201).json(module);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllModules = async (req, res) => {
  try {
    const modules = await Module.find().populate("course");
    res.status(200).json(modules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getModuleById = async (req, res) => {
  try {
    const module = await Module.findById(req.params.id).populate("course");
    if (!module) return res.status(404).json({ message: "Module not found" });

    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteModule = async (req, res) => {
  try {
    const module = await Module.findById(req.params.id);
    if (!module) return res.status(404).json({ message: "Module not found" });

    await Module.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Module deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
