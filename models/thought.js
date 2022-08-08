const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    reactions: reactionSchema,
},
{
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const reactionSchema = new mongoose.Schema({
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
       },
    reactionBody: { type: String, required: true, maxlength: 280}
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
  );

  // Initialize the Thought model
const Thought = model('thought', thoughtSchema);

module.exports = thoughtSchema;