"use client";
import { Skeleton } from "@/components/ui/skeleton";
import "./globals.css";
import SignIn from "../comp/Signin/SignIn";
import Chat from "../comp/chat/chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../comp/firebase/auth";

export default function Page() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="flex flex-col space-y-3 items-center justify-center h-screen p-4">
        {/* Main Skeleton (chat window) */}
        <Skeleton className="h-[300px] w-full max-w-[600px] rounded-xl bg-gray-300 sm:h-[350px]" />

        {/* Text skeletons */}
        <div className="space-y-2 w-full max-w-[600px]">
          <Skeleton className="h-4 w-3/4 sm:w-[250px]" />
          <Skeleton className="h-4 w-2/3 sm:w-[200px]" />
        </div>
      </div>
    );
  }

  return <div>{user ? <Chat /> : <SignIn />}</div>;
}
