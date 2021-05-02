import { getSession } from "next-auth/client";
export default function Specific({ data }) {
  return (
    <>
      {data.error && <p>{data.error} </p>}
      {data.note && (
        <div>
          <h1>{data.note.title}</h1>
          <p>{data.note.body}</p>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const hostname = "http://localhost:3000";
  const options = { headers: { cookie: context.req.headers.cookie } };

  const res = await fetch(
    `${hostname}/api/notes/${context.params.id}`,
    options
  );
  const json = await res.json();

  return {
    props: {
      data: json,
    },
  };
}
