var Sealious = require("sealious");

Sealious.init();

new Sealious.ChipTypes.ResourceType({
name: "person",
fields: [
{name: "name", type: "text", required: true},
{name: "age", type: "int", required: true}
]});

Sealious.ChipManager.get_chip("channel", "rest").set_url_base("/api/v1");

Sealious.start();

