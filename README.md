# Final Project 

This will be an e-commerce plataform where designers will sell their best designs in the form of high quality smartphone cases.

## Components:

### Backend
A Rails API with a PostgresSQL DB.

### FrontEnd
A SPA with routes managed with Backbone.
The UI will have its foundation on Bootstrap and jQuery.

###Other APIs
Probably:
Uploadcare
Aviary
Googlemaps


## Planning

### Users/Designers

Designers will be the users. They will be able to create accounts with their personal data. They will have avatars, products, accounts. 

~~~
User-model:

{
firstname: string
lastname: string
email: string
password: string
password_digest: string
auth_token: string
bank_account: integer
**avatar: image**
**sales: number
}

has_many :designs
~~~

### Designs/Products
Design is a product that a Designer will sell. 
It will have a certain model depending on the phone. A price. 

~~~
Designer-model:
{
phone_model: strings 
price: integer
**design: image **
discount: integer
}
belongs_to :designer
~~~


### Purchases
Is like a shopping cart. It will have a certain number of products, a total price and a buyer who will accomplish the purchase.

~~~
Purchase model:
{
buyerfirstname: string
buyerlastname: string
buyeremail: string
buyerphone: string
buyeraddreess: string
buyercity: string
Products: string
Totalprice: string
}


~~~

## Project working breakdown

### Day 1 

Fri Dec 12th

* Planning
* Set up of the API: models, controllers and routes.
* Image uploading to API
* User creation testing:
	* Sign-up / Login 
	* Use mailer for confirmation email at signup and for forgotten password
* Heroku and Git commits

## Day 2	- 3

Sat Dec 13th - Sun Dec 14th

* Basic usage of jQuery, fabricjs and Canvas
* Show pictures uploaded from the users and drag pictures to canvas
* Make canvas have iPhone 6 shape
* Save converted design to db.
* Heroku and Git commits

## Day 4

Mon Dec 15th

* Set up the complete front-end
	* Avatars
	* Login / Sign up pages
	
* Shopping cart - payment gateway sandbox
* Heroku and Git commits

## Day 5

Tue Dec 16th

* Set up Backbone routes
* Fixes to API
* Fixes to Front end 
* Heroku and Git commits

## Day 6
Wed Dec 17th

* Minor improvements 
* Cleaning - testing
* Last Heroku upload 



# Steps done
~~~

rails new spc-c

gem 'hirb'
gem 'carrierwave'
gem 'carrierwave-postgresql'


rails generate uploader Avatar

rails g scaffold User firstname:string lastname:string email:string password:string password_digest:string auth_token:string bank_account:integer



~~~