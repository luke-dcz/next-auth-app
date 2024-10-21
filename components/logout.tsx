import { logout } from "@/app/actions";

export const Logout = () => {
  return (
    <form action={logout}>
      <button className="bg-blue-400 my-2 text-white p-1 rounded" type="submit">
        Logout
      </button>
    </form>
  );
};
