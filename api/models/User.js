/**
	Generated by sails-inverse-model
	Date:Wed Feb 13 2019 23:28:27 GMT+0100 (Paris, Madrid)
*/

module.exports = {
    attributes: {
        id: {
            type: 'number',
            autoIncrement: true
         },
        email: {
            type: "string",
            columnType: "varchar",
            maxLength: 180,
            required: true
        },
        enabled: {
            type: "boolean",
            defaultsTo: false, 
        },
        password: {
            type: "string",
            columnType: "varchar",
            maxLength: 255,
            required: true
        },
        confirmation_token: {
            type: "string",
            columnType: "varchar",
            maxLength: 180,
            unique: true
        },
        password_requested_at: {
            type: "ref",
            columnType: "datetime"
        },
        role: {
            type: "string",
            columnType: "longtext",
            required: true
        },
        name: {
            type: "string",
            columnType: "varchar",
            maxLength: 255,
            required: true
        },
        surname: {
            type: "string",
            columnType: "varchar",
            maxLength: 255
        },
        picture: {
            type: "string",
            columnType: "varchar",
            maxLength: 255
        },
        myDate: {
            type: "ref",
            columnType: "datetime",
        },
        association: {
            collection:'association',
            via: 'user'
          },
        adherant: {
            collection:'adherant',
            via: 'user'
          },
          tags: {
            collection: 'tag',
            via: 'users'
          },
          commentaires: {
            collection: 'commentaire',
            via: 'users'
          }
    }
};