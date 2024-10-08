import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="mt-5 font-semibold text-center">
        Authentication With Next.js
      </h1>
      <p className="text-center px-48 mt-5">
        Authentication verifies a user`&apos;`s identity. This happens when a
        user logs in, either with a username and password or through a service
        like Google. It`&apos;`s all about confirming that users are really who
        they claim to be, protecting both the user`&apos;`s data and the
        application from unauthorized access or fraudulent activities.
      </p>
      <div className="w-full mt-8 px-5 flex flex-col items-center gap-8">
        <h2>Main Authentication Strategies:</h2>
        <div className="flex w-full justify-between px-10 text-lg gap-8">
          <div className="flex flex-col gap-2 w-1/4 items-center">
            <Link
              className="font-medium h-16 text-center hover:text-blue-500 transition-all duration-300"
              href="/oauth"
            >
              OAuth/OpenID Connect (OIDC)
            </Link>
            <p className="text-base">
              Enable third-party access without sharing user credentials. Ideal
              for social media logins and Single Sign-On (SSO) solutions. They
              add an identity layer with OpenID Connect.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-1/4 items-center">
            <Link
              className="font-medium h-16 text-center hover:text-blue-500 transition-all duration-300"
              href="/credentials"
            >
              Credentials-based login (Email + Password)
            </Link>
            <p className="text-base">
              A standard choice for web applications, where users log in with an
              email and password. Familiar and easy to implement, it requires
              robust security measures against threats like phishing.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-1/4 items-center">
            <Link
              className="font-medium h-16 text-center hover:text-blue-500 transition-all duration-300"
              href="/token-based"
            >
              Passwordless/Token-based authentication
            </Link>
            <p className="text-base">
              Use email magic links or SMS one-time codes for secure,
              password-free access. Popular for its convenience and enhanced
              security, this method helps reduce password fatigue. Its
              limitation is the dependency on the user`&apos;`s email or phone
              availability.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-1/4 items-center">
            <Link
              className="font-medium h-16 text-center hover:text-blue-500 transition-all duration-300"
              href="/passkeys"
            >
              Passkeys/WebAuth
            </Link>
            <p className="text-base">
              Use cryptographic credentials unique to each site, offering high
              security against phishing. Secure but new, this strategy can be
              difficult to implement.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
