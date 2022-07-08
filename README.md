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


  <img src="https://user-images.githubusercontent.com/83572390/177762013-b98e31de-bc3b-46b3-883c-96e0ca526bf4.png" width="50%"><img src="https://user-images.githubusercontent.com/83572390/177818147-2a024c03-19e2-47f8-8266-4d98b7dadb94.png" width="50%">
  
  
Adding a new campground will look like this :

<img src="https://user-images.githubusercontent.com/83572390/177927000-500fcfd2-23e7-445c-b3cd-6d0bc00d6462.png" width="50%"><img src="https://user-images.githubusercontent.com/83572390/177927257-c58c3fc5-679c-49cd-b46c-a1ff7241f959.png" width="50%">


Adding a review in any existing campground will look like this :

<img src="https://user-images.githubusercontent.com/83572390/177927783-ca495df3-308b-4d91-92f3-c93cfce9a700.png" width="50%"><img src="https://user-images.githubusercontent.com/83572390/177928237-3c3ef35f-4b13-4a42-880d-3e8e91431597.png" width="50%">

You will not be able to see edit and delete button in the campground if you are not the owner of the campground. Same is for delete button in reviews too.


Thank you for visiting my project.If there is any issue, feel free to contact me @ <b>sohamroy976@gmail.com</b>

