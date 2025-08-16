import "../../app/globals.css";
import { auth } from "../firebase/auth";
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
  return (
    <div className="flex items-center justify-center h-screen">
        
            <Card className="w-96 h-90 bg-transparent text-white">
            <CardHeader>
              <CardTitle className=" text-4xl ">Login to your account!</CardTitle>
              <CardDescription className=" text-2xl ">Use your email below to login to your account.</CardDescription>
              <CardAction>            <Button variant="outline" className="text-2xl  bg-transparent" >SignIn</Button>
</CardAction>
            </CardHeader>

            <CardFooter>
              <Button className=" w-85 text-3xl p-7 mt-10 cursor-pointer ">Login</Button>
            </CardFooter>
          </Card>
    </div>
  );
}