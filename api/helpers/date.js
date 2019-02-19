module.exports = {


  friendlyName: 'Date',


  description: 'Date something.',


  inputs: {
    date: {
      type: 'string',
      example: '01/01/01',
      description: 'La date à transformer sous format DD/MM/YYYY.',
      required: true
    }

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    var dateString = inputs.date; // Oct 23

    var dateParts = dateString.split("/");
    
    // month is 0-based, that's why we need dataParts[1] - 1
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
    return dateObject;
  }


};

