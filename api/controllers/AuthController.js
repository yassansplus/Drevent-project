/**
 * UserControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const moment = require('moment');
const uuid = require('uuid/v1');
const md5 = require("md5");
module.exports = {
  signup: async function (req, res) {
    // Ici on fait appel au fichier dans le dossier helper et on transforme la date en date comprise par le langage
    let formatDate = await sails.helpers.date.with({ date: req.body.myDate });



    // On utilise les fonctions que propose l'ORM si l'user n'existent pas on le crée.
    User.findOrCreate({ email: req.body.email }, {
      email: req.body.email,
      name: req.body.nom,
      surname: req.body.prenom,
      password: md5(req.body.password),
      role: req.body.role,
      myDate: formatDate,
      confirmation_token: uuid()
    })

      .exec(async (err, user, wasCreated) => {
        if (err) { return res.serverError(err); }
        if (wasCreated) {
          // s'il existe

          sails.log('Created a new user: ' + user.name);
        }
        else {
          //sinon
          sails.log('Found existing user: ' + user.name);
        }
      });


    res.end("ok");
  },

  signin: async function (req, res) {
    let user = await User.findOne({
      email: req.body.email,
      password: md5(req.body.password)
    });
    if (!user) {
      res.view('pages/front/signin', { erreur: "oops" });
    } else {
      //sinon

      req.session.authenticated = true;
      req.session.user = user;

      
      switch (user.role) {

        case 'ROLE_ASSOC':
          res.redirect("/association/creation");
          break;
        case 'ROLE_ADH':
          res.redirect("/adherant/creation");
          break;
        case 'ROLE_ASSOC_OK':
          res.redirect("/association/");
          break;
        case 'ROLE_ADH_OK':
          res.redirect("/adherant");
          break;
        default:
          res.redirect("/")
      }

    }

  }



};

