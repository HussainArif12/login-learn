import { getSession } from "next-auth/client";
import Note from "../../../models/Note";
import dbConnect from "../../../helpers/dbConnect";
export default async (req, res) => {
  const user = await getSession({ req });

  await dbConnect();
  if (user) {
    console.log("user id: " + user.id);
  }
  if (req.method === "POST") {
    const note = new Note({
      user: user.id,
      title: req.body.title,
      body: req.body.body,
    });
    note.save(async function (err, doc) {
      console.log(doc);
      if (err) console.log(err);
    });
  }
  res.end();
};
