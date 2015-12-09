var Sealious = require("sealious");
var Promise = require("bluebird");

new Sealious.ChipTypes.FieldType({
	name: "animal",
	get_description: function(context, params){
		return "Only accepts dogs, cats and parrots.";
	},
	is_proper_value: function(accept, reject, context, params, new_value){
		var acceptable_animals = ['dog', 'cat', 'parrot'];
		var result = acceptable_animals.find( x => x === new_value);

		result ? accept() : reject("This species of animal is not accepted");
	}
});