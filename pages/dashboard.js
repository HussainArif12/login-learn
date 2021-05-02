import { signIn, signOut, useSession, getSession } from "next-auth/client";
import Link from "next/link";
import Note from "../components/NoteComponent";
export default function Dashboard({ data }) {
  const [session, loading] = useSession();

  return (
    <div>
      {!session && <h1>You're not logged in yet</h1>}
      {session &&
        data.notes.map((item) => (
          <Note id={`${item._id}`} title={`${item.title}`} />
        ))}
      <button>
        <Link href={`/notes/add`}>Add</Link>{" "}
      </button>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const hostname = "http://localhost:3000";
  const options = { headers: { cookie: context.req.headers.cookie } };
  const res = await fetch(`${hostname}/api/notes/list`, options);
  const json = await res.json();
  if (json.error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: json,
    },
  };
}
