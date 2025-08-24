
import { auth } from "@/comp/firebase/auth";
import { signOut } from "firebase/auth";

export default function Chat() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen m-5">
      <h1 className="text-3xl font-bold text-white ">Welcome to the Chat Page!</h1>
      <button
        className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}