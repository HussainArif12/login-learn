import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
export default function Home() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
      <Head></Head>
      {loading && <p>Loading.. please wait</p>}
      {!session && (
        <>
          Not signed in <br />
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/dashboard",
              })
            }
          >
            Sign in
          </button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
      <Link href="/dashboard">Go to dashboard</Link>
    </div>
  );
}
