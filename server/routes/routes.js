const express = require("express");

const router = express.Router();




router.get("/", ()=>(console.log("get")));

router.post("/", ()=>(console.log("post")));

router.patch("/", ()=>(console.log("patch")));

router.delete("/", ()=>(console.log("delete")));