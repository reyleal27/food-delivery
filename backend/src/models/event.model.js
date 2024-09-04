const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
    image: String,
    startedAt: String,
    endsAt: String,
    name: String,
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
    },
    location: String,
});

const Event = model("Event", eventSchema);

module.exports = Event;