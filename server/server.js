require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const Clarifai = require('clarifai');
const app = express();
const clar = new Clarifai.App({
    apiKey: process.env.CLARIFAI_KEY_
});
const axios = require('axios');

app.use(morgan('dev'));
app.use(express.static('build'));
var array1 = [];
var array2 = [];
app.get('/api', (req,res) => {
    console.log('link sent from front end', req.query.link1);
    clar.models.predict(Clarifai.GENERAL_MODEL, req.query.link1)
    .then(response => {
        //res.send(response.outputs[0].data.concepts[0].name)
        response.outputs[0].data.concepts.map(item =>(array1.push(item.name)))
       
        clar.models.predict(Clarifai.GENERAL_MODEL, req.query.link2)
        .then(response2 => {
            response2.outputs[0].data.concepts.map(item =>(array2.push(item.name)))
            //res.send(array1[0])
            console.log(array1[0]);
            console.log(array2[0]);
              
            axios({
                method: 'get',
                url: 'https://love-calculator.p.mashape.com/getPercentage?fname=' + array1[0] + '&sname=' + array2[0],
                headers: {
                'X-Mashape-Key' : process.env.MASHAPE_KEY_,
                'Accept' : 'application/json',
                }
            })
            .then((response3)=>{
                console.log(response3.data.percentage);
                console.log(response3.data.result)
                res.send(response3.data)
            })
            .catch(err => console.log(err));
                    
        })
        .catch((e) => alert("One or more URL's are invalid"))
        
    })
    .catch((e) => alert("One or more URL's are invalid"))
      
})

module.exports = app;
