/**
 * AssociationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        if (req.method == "POST") {

            var assoc = await Association.create({
                name: req.body.name,
                place: req.body.adresse,
                schedule: req.body.adresse,
                description: req.body.description,
                user: req.session.user.id

            }).fetch();
            let updatedUser = await User.update({ email: req.session.user.email })
                .set({
                    role: "ROLE_ASSOC_OK"
                }).fetch();

            
             return res.redirect("/association")
        }
        else{


            res.view("pages/association/create");

        }

    },

    show: async function (req, res) {
        
        let assoc = await User.findOne({email: req.session.user.email}).populate("association"); 

        res.view("pages/association/show", {association: assoc});

    },


    update: async function (req, res) {

    },


    delete: async function (req, res) {

    },


};

