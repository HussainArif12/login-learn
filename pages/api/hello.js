import { getSession } from "next-auth/client";

export default async (req, res) => {
  const user = await getSession({ req });

  if (user) return res.send(JSON.stringify(user, null, 2));
  else {
    return res.json({ message: "not found" });
  }
};
