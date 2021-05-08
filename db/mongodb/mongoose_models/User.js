const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Username: String,
    email: String,
    password: String,
	userType: {type: String, enum: ["user", "admin"], default: "user"},
	isActive: {type: Boolean, default:false}
}, {
	timestamps: true,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
