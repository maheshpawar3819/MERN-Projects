const express = require("express");
const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({ msg: "no service found" });
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`services : ${error}`);
  }
};

module.exports = services;
