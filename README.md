<h1>YelpCamp2022</h1>

It is an Express-based Web Application for a fictional startup that allows a user to add a campground(with location, description, and multiple photos), and add reviews and ratings to each saved campground.Further locations of campgrounds are shown in clustermap.


<h2>Installation Guide</h2>

Install all the source code files.After that open terminal in the root directory.Type <b>npm install</b> (make sure you have Node.js installed in your system before running this).After that install nodemon if you previously don't have installed by typing <b>npm i nodemon -g</b>.

Make a newfile named '.env' and make sure you have CLOUDINARY_CLOUD_NAME,CLOUDINARY_KEY,CLOUDINARY_SECRET,MAPBOX_TOKEN declared (you will get these data after registering in Clodinary and Mapbox(both are free)).

Now start your MongoDB (MongoDB shell will also work), if you don't have MongoDB installed in your system, you can reffer their documentation and install it.

Now go to terminal and type <b>nodemon app.js</b> ,the server will run at <b>http://localhost:3000/</b>

<h2>Application Description</h2>

The home page will be like this :

![Screenshot (1056)](https://user-images.githubusercontent.com/83572390/177760617-65489820-3c8f-43c9-87a8-196a7e268ad5.png)

Here you are not Logged In, hence Login and Register both the buttons are there in the top-right corner.But you can view all campgrounds without logging in too.

The all campground page will be like this :

![Screenshot (1057)](https://user-images.githubusercontent.com/83572390/177761467-9fe2baba-9494-41d8-a5f0-0c434cf7a173.png)

You can not add a new campground without logging in, even if you try, you will be redirected to the login page, even if anybody tries to send post request for new campground from Postman  etc. they will be redirected to Login page :


![Screenshot (1058)](https://user-images.githubusercontent.com/83572390/177762013-b98e31de-bc3b-46b3-883c-96e0ca526bf4.png)

