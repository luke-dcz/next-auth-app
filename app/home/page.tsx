import { auth } from "@/auth";
import { Logout } from "@/components/logout";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <main className="flex flex-col items-center m-4">
      {session?.user.name && session?.user.image ? (
        <>
          <h1 className="text-3xl my-2">Welcome {session.user.name}</h1>
          <Image
            src={session.user.image}
            alt={session.user.name}
            width={72}
            height={72}
            className="rounded-full"
          />
        </>
      ) : (
        <h1 className="text-3xl my-2">Welcome {session.user.email}</h1>
      )}
      <Logout />
    </main>
  );
}
