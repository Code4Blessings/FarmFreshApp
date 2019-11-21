This project was supplied to us by Lambda School during build week. Our team included: two React I people, one React II person, and two backend people. 
The point of this app is to supply shoppers with the option to se local farms inventory and for local farmers to post their inventory onto a site for locals to see what's available. These products being Non-gmo, pesticide/herbicide free, and organic. 
TO START:
-After using Create-react-app we installed all necessary dependencies including but not limited to NPM Install, axios, formik, gsap, react-router-dom, materialUI and reactstrap. 
-This app used Context API which was used in the FarmerEditInventory page, the CreateContext setup was passed through the App.js and the Contexts folder. Context API was used but not necessarily mandatory, this app can be made with Redux or without either.
-Our components are split but users and the user pages which was done efficiently by our React I people. 
APP FUNCTIONALITY:
-This app has the ability for a shopper and farmer to create an account and login with these endpoints: 
- Each takes a JSON object with username and password keys:
- POST /api/farmers/register

- POST /api/farmers/login
- POST /api/customers/register
- POST /api/customers/login

A farmer can add, edit, and delete inventory and set up their profile account with these endpoints: 
- PUT /api/farms/
- POST /api/inventory
- GET /api/inventory
- PUT /api/inventory/:inventoryID
- DELETE /api/inventory/:inventoryID

A shopper can view the farms and their inventory 
- GET /api/farms 
- GET /api/inventory/:farmID
