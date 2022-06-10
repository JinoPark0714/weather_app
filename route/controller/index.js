const express = require("express");
const router = express.Router();

/**
 * index.html 연결
 */
 router.get('/', (req,res)=>{
  res.render('index');
});


/**
 * errorpage.ejs 연결
 */
router.get('/errorpage', (req, res)=>{
  res.render('errorpage');
});

module.exports = router;