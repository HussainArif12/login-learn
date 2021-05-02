import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  title: String,
  body: String,
});
mongoose.models = {};

//const Note = mongoose.model("Note", noteSchema);

//export default Note;
export default mongoose.models.Pet || mongoose.model("note", noteSchema);
