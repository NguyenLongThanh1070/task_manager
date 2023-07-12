const express = require("express");
const tasks = require("../controller/tasks");

let router = express.Router();

const initAPIRoute = (app) => {
    router.get("/", tasks.getAllTasks);
    router.post("/createTask", tasks.createTask);
    router.get("/:id", tasks.getTask);
    router.patch("/updateTask/:id", tasks.updateTask);
    router.delete("/deleteTask/:id", tasks.deleteTask);
    return app.use("/api/v1/tasks/", router);
};

module.exports = initAPIRoute;
