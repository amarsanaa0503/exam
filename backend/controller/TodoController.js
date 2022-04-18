const express = require("express");
const Todo = require("../models/Todo");

const get_todo = (req, res, next) => {
  Todo.find({}, function (err, data) {
    if (err) {
      req.json({
        success: false,
        data: err,
      });
    } else {
      res.json({
        success: true,
        data: data,
      });
    }
  });
};

const create_todo = (req, res, next) => {
  const data = req.body;
  Todo.create(data, function (err, data) {
    if (err) {
      res.json({
        success: false,
        data: err,
      });
    } else {
      res.json({
        success: true,
        data: data,
      });
    }
  });
};

const update_todo = (req, res, next) => {
  const data = req.body;
  Todo.updateOne({ _id: id }, data, function (err, data) {
    if (err) {
      res.json({
        success: false,
        data: err,
      });
    } else {
      res.json({
        success: true,
        data: data,
      });
    }
  });
};

const delete_todo = (req, res, next) => {
  const id = req.params.id;
  Todo.deleteMany({ _id: id })
    .then((data) => {
      res.status(200).json({ success: true, message: data });
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err });
    });
};

module.exports = { get_todo, create_todo, update_todo, delete_todo };
