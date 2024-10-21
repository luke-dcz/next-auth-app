import { BackButton } from "@/components/back-button";
import { SignIn } from "@/components/sign-in";

export default function CredentialsPage() {
  return (
    <main className="flex flex-col gap-4 p-4 w-full">
      <div>
        <BackButton />
      </div>
      <h1 className="text-center">Email and Password based Authentication</h1>
      <div className="flex flex-col px-4 gap-4 mt-8 w-2/3">
        <p>
          This is the most basic form of authentication, and used to be the
          norm. With Auth.js, we can use the Credentials provider, but mostly
          relies on your own Database. It is no longer a viable option
          security-wise, but can be improved by using third party providers with
          integrated security, email validation etc...
        </p>
        <p>
          However, it can still be a viable option using an external validation
          library. In this example we will store the user data locally.
        </p>
      </div>
      <div className="w-full flex justify-center mt-16">
        <SignIn />
      </div>
    </main>
  );
}
