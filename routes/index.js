const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  res.send('<h2>서버에 연결되었습니다.</h2>');
});


module.exports = router;