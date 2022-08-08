const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,


    },
    email: {
      type: String,
      required: true,
      unique: true,
      //need validation
    },
    // thoughts - Array of _id values referencing the Thought model
    // thoughts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Thought',
    //   },
    // ],
    // friends - Array of _id values referencing the User model (self-reference)
    // friends: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //   },
    // ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets the amount of friends per user
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
