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
        commentary: {
            type: "string",
            columnType: "longtext",
            required: true
        },
        isImportant: {
            type: "number",
            columnType: "tinyint",
            isInteger: true,
            required: true
        },
        IsAutor: {
            type: "number",
            columnType: "tinyint",
            isInteger: true,
            required: true
        },
        date_publication: {
            type: "string",
            columnType: "datetime",
            required: true,
        },
        publication: {
            model: 'publication'
          },
        users: {
            collection: 'user',
            via: 'commentaires'
          }
    }
};