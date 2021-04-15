/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('venues', 'VenuesController').apiOnly().middleware({'*': ['auth', 'verify', 'role:admin,venue_owner']});
  Route.resource('venues.fields', 'FieldsController').apiOnly().middleware({'*': ['auth', 'verify', 'role:admin,venue_owner']});

  Route.post('/register', 'AuthController.register');
  Route.post('/login', 'AuthController.login');
  Route.post('/verification', 'AuthController.verification');
  Route.post('/regenerate-otp', 'AuthController.regenerateOtp');

  Route.resource('venues.bookings', 'BookingsController').only(['store', 'index']).middleware({'*': ['auth', 'verify'], 'store': 'role:admin,user', 'index': 'role:admin'})
  Route.post('/venues/:venue_id/bookings/:booking_id', 'BookingsController.joinBooking').middleware(['auth', 'verify', 'role:admin,user']);
  Route.get('/venues/:venue_id/bookings/:booking_id', 'BookingsController.detailBooking').middleware(['auth', 'verify', 'role:admin']);
}).prefix('/api');
