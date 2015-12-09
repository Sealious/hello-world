var Sealious = require("sealious"); 

Sealious.init();

require("./field-type.animal.js");

new Sealious.ChipTypes.ResourceType({
   	name: "owner",
   	fields: [
       	{name: "first-name", type: "text", required: true},
       	{name: "last-name", type: "text", required: true},
      	{name: "address", type: "text", required: true},
      	{name: "phone-number", type: "text", required: true},
      	{name: "email", type: "email"}
  	]
});

new Sealious.ChipTypes.ResourceType({
  	name: "pet",
  	fields: [
      	{name: "species", type: "text", required: true},
      	{name: "name", type: "text", required: true},
      	{name: "age", type: "int", required: true},
      	{name: "owner", type: "reference", required: true}
 	] 
});

Sealious.start();

