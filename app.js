const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
app.use(express.static(path.join(__dirname, 'public')));

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});
router.get('/add-to-cart',function(req,res){
    res.sendFile(path.join(__dirname+'/addToCart.html'));
});
app.use('/', router);
app.use('/add-to-cart', router);
app.listen(process.env.port || 3001);
