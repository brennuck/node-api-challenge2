const express = require("express");

const router = express.Router();

const Projects = require("./projectModel.js");

router.get("/", (req, res) => {
  Projects.get(req.query)
    .then((project) => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({
          message: "no posts to display",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: "something went wrong",
      });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;
  Projects.insert(projectData)
    .then((project) => {
      res.status(201).json({ project });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: "something went wrong",
      });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const projectData = req.body;
  Projects.update(id, projectData)
    .then((project) => {
      if (!project) {
        res.status(404).json({
          message: "the project with that id doesn't exist",
        });
      } else if (!changes.name || !changes.description || !changes.completed) {
        res.status(400).json({
          message: "Please provide the name and description and completed",
        });
      } else {
        res.status(200).json(project);
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: "THERES AN ERROR",
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Projects.remove(id)
    .then((project) => {
      if (!project) {
        res.status(404).json({
          message: "the post with this id doesn't exist",
        });
      } else {
        res.status(200).json(project);
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: "THERES AN ERROR",
      });
    });
});

module.exports = router;
