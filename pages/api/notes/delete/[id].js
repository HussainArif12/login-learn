import { getSession } from "next-auth/client";
import Note from "../../../../models/Note";
import dbConnect from "../../../../helpers/dbConnect";

export default async (req, res) => {
  await dbConnect();
  const session = await getSession({ req });
  if (!session) return res.json({ error: "not logged in" });

  if (session) {
    await Note.findOneAndDelete(
      {
        _id: req.query.id,
        user: session.id,
      },
      function (err, docs) {
        if (!docs) return res.json({ error: "security not granted" });
      }
    );
    res.end();
  }
};
