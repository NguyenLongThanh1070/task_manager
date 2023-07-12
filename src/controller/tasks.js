const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res, next) => {
    const tasks = await Task.find({});
    if (!tasks) {
        return next(createCustomError("Không tìm thấy tasks", 404));
    }
    return res.status(200).json({ message: "ok", tasks });
});

const createTask = asyncWrapper(async (req, res, next) => {
    if (!req.body.hasOwnProperty("name") || !req.body.hasOwnProperty("completed")) {
        return next(createCustomError("Thiếu dữ liệu", 404));
    }
    await Task.create(req.body);
    const tasks = await Task.find({});
    if (!tasks) {
        return next(createCustomError("Không tìm thấy tasks", 404));
    }
    return res.status(201).json({ message: "ok", tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
    if (!req.params.hasOwnProperty("id") || req.params.id == ":id") {
        return next(createCustomError("Thiếu dữ liệu", 404));
    }
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
        return next(createCustomError(`No task with id : ${req.params.id}`, 404));
    }
    return res.status(200).json({ message: "ok", task });
});
const deleteTask = asyncWrapper(async (req, res, next) => {
    if (!req.params.hasOwnProperty("id") || req.params.id == ":id") {
        return next(createCustomError("Thiếu dữ liệu", 404));
    }
    await Task.findOneAndDelete({ _id: req.params.id });
    const task = await Task.find({});
    if (!task) {
        return next(createCustomError(`No task with id : ${req.params.id}`, 404));
    }
    return res.status(200).json({ message: "ok", task });
});
const updateTask = asyncWrapper(async (req, res, next) => {
    if (!req.params.hasOwnProperty("id") || req.params.id == ":id") {
        return next(createCustomError("Thiếu dữ liệu", 404));
    }
    await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
        return next(createCustomError(`No task with id : ${req.params.id}`, 404));
    }
    return res.status(200).json({ message: "ok", task });
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};
