const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')();
const app = express();
const port = process.env.PORT || 80;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors);

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

const multer = require('multer');
// 사용자의 파일이 업로드 되는 폴더
const upload = multer({ dest: './upload' })

app.get('/api/gifticons', (req, res) => {
  connection.query(
    "SELECT * FROM GIFTICON ORDER BY (CASE WHEN used IN ('미사용') THEN 0 ELSE 1 END) , exp_date;",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});


app.use('/barcode_img', express.static('./upload'));
app.post('/api/gifticons', upload.single('barcode_img'), (req, res) => {
  let sql = 'INSERT INTO GIFTICON VALUES (null, ?, ?, ?, \'미사용\', now())';
  let barcode_img = '/barcode_img/' + req.file.filename;
  let name = req.body.name;
  let exp_date = req.body.exp_date;
  let used = req.body.used;
  let deletedDate = req.body.deletedDate;
  let params = [barcode_img, name, exp_date];
  connection.query(sql, params,
    (err, rows, fields) => {
      // console.log(err);
      res.send(rows);
    }
  );
});

app.delete('/api/gifticons:id', (req, res) => {
  let sql = 'UPDATE GIFTICON SET used = now() WHERE id = ?';
  let params = [req.params.id];

  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);

    }
  )
});


app.listen(port, () => console.log(`Listening on port ${port}`));
