/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  /*---------FRONT ZONE------------*/
  '/': { view: 'pages/front/homepage' },
  '/comment-ca-marche': { view: 'pages/front/ccm' },

  /*---------FIN FRONT ZONE------------*/


  /*-------------LOGIN ZONE-------------*/

  'get /signup': { view: 'pages/front/signup' },
  'post /signup': 'AuthController.signup',

  'get /signin': { view: 'pages/front/signin' },
  'post /signin': 'AuthController.signin',

  /*---------FIN LOGIN ZONE-------------*/
/*---------- ADHERANT ZONE -------------*/
'/adherant/creation': 'AdherantController.create',
'/adherant/:prenom': 'AdherantController.show',
'/adherant/update/:prenom': 'AdherantController.update',
'/adherant/delete/:prenom': 'AdherantController.delete',

/*-------FIN ADHERANT ZONE ------------*/
/*---------- ASSOCIATION ZONE ---------*/

'/association/creation': 'AdherantController.create',
'/association/:prenom': 'AdherantController.show',
'/association/update/:prenom': 'AdherantController.update',
'/association/delete/:prenom': 'AdherantController.delete',

/*--------- FIN ASSOCIATION ZONE -----------*/


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
