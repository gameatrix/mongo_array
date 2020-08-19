const {connect, connection} = require('mongoose');
const Product = require('./productmodel');

const initDB = () => {
  connect('mongodb://localhost:27017/mongotest', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.once('open', () => {
    console.log('connected to database');
  });
};

initDB();


const addToDb = () => {


  const newProduct = {
    productName: 'name',

    /***
     *  comment in and out the store array to see the difference in the then()
     *  If you restart the program with the stores array it will log { n: 1, nModified: 1, ok: 1 } each and every time you run it.
     *  if you restart without the stores it will log  { n: 1, nModified: 0, ok: 1 } each and everytime you run it.
     *  it seems as if you have an array it will set nModified : 1 regardless if the data is changed or not
     */

    stores: [{
      name: "name"
    }],
  };

  Product.updateOne(
    {productName: "name"},
    {$set: newProduct},
    {upsert: true}
  ).then((item) => {

    console.log("update", item);
  }).catch((e) => {
    console.log('Insert trackingUrl error', e);
  });
}

addToDb();


