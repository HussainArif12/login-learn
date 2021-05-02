import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";

export default function Test({ data }) {
  const [session, loading] = useSession();
  console.log(data);
  return (
    <div>
      <iframe src="/api/hello" />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/hello`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
