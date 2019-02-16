/**
	Generated by sails-inverse-model
	Date:Wed Feb 13 2019 23:28:27 GMT+0100 (Paris, Madrid)
*/

module.exports = {
    attributes: {
        id: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        tag: {
            type: "string",
            columnType: "varchar",
            maxLength: 100,
            unique: true,
            required: true
        },
        users: {
            collection: 'user',
            via: 'tags'
          }
    }
};