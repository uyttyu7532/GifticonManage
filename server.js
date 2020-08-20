const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/gifticons', (req, res) => {
    res.send(
        [{
            'id' : 1,
            'name' : '스타벅스',
            'exp_date' : '20200820',
            'used' : 'false',
            'barcode_img' : 'https://placeimg.com/64/64/animals/1'
          },
          {
            'id' : 2,
            'name' : '할리스',
            'exp_date' : '20200819',
            'used' : 'true',
            'barcode_img' : 'https://placeimg.com/64/64/animals/2'
          },
          {
            'id' : 3,
            'name' : '커피빈',
            'exp_date' : '20200818',
            'used' : 'true',
            'barcode_img' : 'https://placeimg.com/64/64/animals/3'
          }]
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));