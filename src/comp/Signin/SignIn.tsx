"use client";
import "../../app/globals.css";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SignIn() {

  function hello() {
    // Implement sign-in logic here using Firebase Auth
    console.log("Sign In button clicked");    
  }

  return (
    <div className="flex items-center justify-center h-screen m-5 ">
      <Card 
        className="
          w-full h-60 max-w-sm sm:max-w-md md:max-w-lg
          bg-transparent text-white shadow-lg rounded-2xl
        "
      >
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl ">
            Login to your account!
          </CardTitle>
          <CardDescription className="text-base sm:text-lg md:text-xl ">
            Use your email below to login to your account.
          </CardDescription>
          <CardAction className="flex justify-center mt-4">
            <Button 
              variant="outline" 
              className="text-sm sm:text-base md:text-xl bg-transparent cursor-pointer "
            >
              Sign In
            </Button>
          </CardAction>
        </CardHeader>

        <CardFooter className=" flex justify-center">
          <Button onClick={hello}
            className="
               bg-white text-black hover:text-white hover: boreder-white
              w-full text-lg sm:text-xl md:text-2xl 
              p-3 sm:p-5 md:p-7 sm:mt-6
            "
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
