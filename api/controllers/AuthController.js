/**
 * UserControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const moment = require('moment');
const uuid = require('uuid/v1');
module.exports = {
    signup: async function (req, res) {

        console.log("----------------------------------------------------")
        let formatDate = await sails.helpers.date.with({ date: req.body.myDate });
        console.log(formatDate);

        console.log("----------------------------------------------------")
        User.findOrCreate({ email: req.body.email }, {
            email: req.body.email,
            name: req.body.nom,
            surname: req.body.prenom,
            password: req.body.password,
            role: req.body.role,
            myDate: formatDate,
            confirmation_token: uuid()
        })

            .exec(async (err, user, wasCreated) => {
                if (err) { return res.serverError(err); }

                if (wasCreated) {
                    sails.log('Created a new user: ' + user.name);
                }
                else {
                    sails.log('Found existing user: ' + user.name);
                }
            });

        console.error(moment().format(req.body.myDate));
        console.warn(new Date(req.body.myDate));
        res.end("ok");
    },



};

