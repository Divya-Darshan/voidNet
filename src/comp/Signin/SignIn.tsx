"use client";

import "../../app/globals.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth, GoogleProvider } from "@/comp/firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup } from "firebase/auth";


export default function SignIn() {
  const [user] = useAuthState(auth);

  async function handleGoogleSignIn() {
    try {
      await signInWithPopup(auth, GoogleProvider);
      console.log("User signed in:", auth.currentUser);
      // no redirect for now
    } catch (err) {
      console.error("Google sign-in error:", err);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen m-5">
      <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-transparent text-white shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl">
            Login to your account!
          </CardTitle>
          <CardDescription className="text-base sm:text-lg md:text-xl">
            Choose a login method below.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 mt-4">
                    <Button
                      className="text-sm sm:text-base p-6 text-black bg-white hover:bg-red-300 md:text-lg font-bold cursor-pointer"
                      onClick={handleGoogleSignIn}
                    >
                      Log In with
                      <svg
                        className="scale-150 ml-1"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.61l6.85-6.85C35.42 2.96 30.14.5 24 .5 14.86.5 7.05 6.29 3.7 14.27l7.98 6.19C13.55 14.27 18.34 9.5 24 9.5z"
                        />
                        <path
                          fill="#4285F4"
                          d="M46.5 24.5c0-1.62-.15-3.18-.43-4.68H24v9.05h12.65c-.55 2.96-2.2 5.46-4.7 7.13l7.63 5.93C43.73 37.37 46.5 31.38 46.5 24.5z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M11.68 28.55A13.45 13.45 0 0 1 10.5 24c0-1.57.28-3.09.78-4.55l-7.98-6.19A23.46 23.46 0 0 0 .5 24c0 3.84.94 7.46 2.6 10.64l8.58-6.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M24 47.5c6.14 0 11.32-2.03 15.1-5.52l-7.63-5.93c-2.1 1.41-4.79 2.25-7.47 2.25-5.66 0-10.45-4.77-11.57-11.02l-8.58 6.09C7.05 41.71 14.86 47.5 24 47.5z"
                        />
                      </svg>
                    </Button>


        </CardContent>

        <CardFooter className="flex justify-center text-sm mt-2">
          Don’t have an account?
          <span
            className="ml-1 text-blue-400 cursor-pointer"
            onClick={handleGoogleSignIn}
          >
            Sign Up
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
