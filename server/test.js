const express = require('express');
const morgan = require('morgan');
const Clarifai = require('clarifai');
const app = express();
const clar = new Clarifai.App({
    apiKey: '19a1fa752b594ff2be87951b64c1237e'
});
app.use(morgan('dev'));
app.use(express.static('build'));
var array1 = [];
var array2 = [];
app.get('/api', (req,res) => {
    console.log('link sent from front end', req.query.link1);
    clar.models.predict(Clarifai.GENERAL_MODEL, req.query.link1)
    .then(response => {
        response.outputs[0].data.concepts.map(item =>(array1.push(item.name)))

        clar.models.predict(Clarifai.GENERAL_MODEL, req.query.link2)
        .then(response => {
            response.outputs[0].data.concepts.map(item =>(array2.push(item.name)))
                  
            console.log(array1[0]);
            console.log(array2[0]);

            axios({
                methos: 'get',
                url: 'https://love-calculator.p.mashape.com/getPercentage?fname='+ array1[0] +'&sname=' + array2[0],
                headers: {
                'X-Mashape-Key' : 'mIbsXng77DmshHN6Z8LMqJcb8ReTp1EG8p5jsnHuHe5f8toUEe',
                'Accepet' : 'application/json',
            }
            .then((response)=>{
                console.log(response.data.percentage);
                console.log(response.data.result)
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
})
