const { request, response } = require('express');
const express = require('express');

const router = express.Router();

router.get('/',(request,response)=>{
    response.render('index')
})

router.get('/certificates',(request,response)=>{
    response.render('certificates')
})

router.get('/projects',(request,response)=>{
    response.render('projects')
})

router.get('/contact',(request,response)=>{
    response.render('contact')
})



module.exports = router