const mongoose = require('mongoose');
const { places, descriptors } = require('./seedHelpers');
const cities = require('./cities');
const Campground = require('../models/campground');
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken ='pk.eyJ1Ijoic29oYW05NzZyb3kiLCJhIjoiY2w0bWNjOGFjMHhrNTNsbzEyODl5djU5dyJ9.mAc7i1LgfDLQCPXVIaLVlQ';
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/yelpcamp');
}

const db=mongoose.connection;
db.on("error",console.error.bind(console,"Connection Error:"));
db.once("open",()=>{
    console.log("Database Connected!!");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random40 = Math.floor(Math.random() * 40);
        const price = Math.floor(Math.random() * 20) + 10;
        const geoData=await geocoder.forwardGeocode({
            query: `${cities[random40]}`,
            limit: 1
        }).send()
        const camp = new Campground({
            author: '62acc1b7d40451c531320d02',
            location: `${cities[random40]}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/dmrjm7za3/image/upload/v1655725590/YelpCamp/cxqdp91mklaku3r53yw3.jpg',
                    filename: 'YelpCamp/cxqdp91mklaku3r53yw3',
                },
                {
                    url: 'https://res.cloudinary.com/dmrjm7za3/image/upload/v1655636384/YelpCamp/wljylxasbfezqwu6w27h.jpg',
                    filename: 'YelpCamp/wljylxasbfezqwu6w27h',
                }
            ],
            geometry: geoData.body.features[0].geometry
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
