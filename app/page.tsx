import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="mt-5 font-semibold text-center">
        Authentication With Next.js
      </h1>
      <div className="w-1/2 mt-8 px-5 flex flex-col gap-4">
        <p>
          Authentication verifies a user's identity. This happens when a user
          logs in, either with a username and password or through a service like
          Google. It's all about confirming that users are really who they claim
          to be, protecting both the user's data and the application from
          unauthorized access or fraudulent activities.
        </p>
        <h3>Main Authentication Strategies:</h3>
        <ol className="list-decimal list-inside">
          <li>
            <Link className="font-medium" href="/oauth">
              OAuth/OpenID Connect (OIDC)
            </Link>
          </li>
          <li>
            <Link className="font-medium" href="/credentials">
              Credentials-based login (Email + Password)
            </Link>
          </li>
          <li>
            <Link className="font-medium" href="/token-based">
              Passwordless/Token-based authentication
            </Link>
          </li>
          <li>
            <Link className="font-medium" href="/passkeys">
              Passkeys/WebAuth
            </Link>
          </li>
        </ol>
      </div>
    </main>
  );
}
