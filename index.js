var Sealious = require("sealious");

Sealious.init();

new Sealious.ChipTypes.ResourceType({
	name: "person",
	fields: [
		{name: "name", type: "text", required: false},
		{name: "age", type: "int", required: true},
		{name: "color", type: "color"}
	],
	access_strategy: {
		"delete": "just_owner"
	}
});

Sealious.start();

