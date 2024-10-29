import { BackButton } from "@/components/back-button";
import { GithubSignIn } from "@/components/github-signin";

export default function OAuthPage() {
  return (
    <main className="flex flex-col gap-4 p-4 w-full px-8">
      <div>
        <BackButton />
      </div>
      <h1 className="text-center">OAuth Authentication</h1>
      <div className="flex flex-col gap-4 mt-8 ">
        <p>
          OAuth is a highly reliable authentication option as it relies on third
          party services. It allows users to sign in/up with their preffered
          Provider (i.e. Google, Github, etc...).
        </p>
        <p>
          OAuth services spend significant amounts of money, time, and
          engineering effort to build abuse detection (bot-protection,
          rate-limiting), password management (password reset, credential
          stuffing, rotation), data security (encryption/salting, strength
          validation), and much more. It is likely that your application would
          benefit from leveraging these battle-tested solutions rather than try
          to rebuild them from scratch.
        </p>
      </div>
      <h3>Below are various OAuth providers to log in with:</h3>
      <div className="w-full flex justify-between mt-4 mx-16">
        <GithubSignIn />
      </div>
    </main>
  );
}
