const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()


//! import routes
const foodRoute = require("./routes/foodRoute");
const drinkRoute = require('./routes/drinkRoute');
const chefRoute = require("./routes/chefRoute");
const cocktailRoute = require("./routes/cocktailRoute");
const dinnerRoute = require("./routes/dinnerRoute");
const breakfastRoute = require("./routes/breakfastRoute");
const eventRoute = require("./routes/eventsRoute");
const shopRoute = require('./routes/shopRoute');
const bakeryRoute = require('./routes/bakeryRoute');
const churraRoute = require("./routes/churraRoute");
const boothRoute = require('./routes/boothRoute');
const cartRoute = require("./routes/cartRoute");
const restaurantRoute = require('./routes/restaurantRoute');
const blogRoute = require('./routes/blogRoute');
const resRoute = require("./routes/galleryResRouter");
const tableRoute = require("./routes/galleryTableRoute");
const guestRoute = require("./routes/galleryGuestRoute");
const instagramRoute = require("./routes/instagramRoute");
const messageRoute = require("./routes/messageRoute");


dotenv.config()
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))



//! use routes
app.use('/food', foodRoute);
app.use('/drink', drinkRoute);
app.use('/chef', chefRoute);
app.use('/cocktail', cocktailRoute);
app.use('/dinner', dinnerRoute);
app.use('/breakfast', breakfastRoute);
app.use('/event', eventRoute);
app.use('/shop', shopRoute);
app.use('/bakery', bakeryRoute);
app.use('/churra', churraRoute);
app.use('/booth', boothRoute);
app.use('/cart', cartRoute);
app.use('/restaurant', restaurantRoute);
app.use('/blog', blogRoute);
app.use('/res', resRoute);
app.use('/table', tableRoute);
app.use('/guest', guestRoute);
app.use('/instagram', instagramRoute);
app.use('/message', messageRoute);



const PORT = process.env.PORT
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD)
mongoose.set("strictQuery", false)


mongoose.connect(DB, {})
    .then(() => {
        console.log("Connected database");
    })
    .catch(() => {
        console.log("Not connected database");
    })


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
