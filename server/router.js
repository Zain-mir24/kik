const express =require('express')
const router = express.router

router.get('/',(req, res) =>{
    res.render('server side work')
})
module.exports = router