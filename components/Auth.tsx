"use client";
import React, { useEffect, useState } from "react";
import LogoImg from "../public/image.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { supabase } from "@/supabase/supabase";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import random from "random-name";

const Auth = () => {
  const [signIn, setsignIn] = useState(true);
  const [userData, setuserData] = useState<{
    email: string;
    password: string;
  }>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleAuth = async () => {
    setError(null);
    setLoading(true);

    try {
      if (signIn) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: String(userData?.email),
          password: String(userData?.password),
        });

        if (error) {
          throw new Error("Enter correct email id and password");
        }

        console.log(data);
        toast.success("Logged in successfully");
        router.push("/user");
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: String(userData?.email),
          password: String(userData?.password),
        });

        if (error) {
          throw new Error("Enter correct email id and password");
        }

        console.log(data);
        if (data.user?.email) {
          const addUser = await supabase
            .from("users")
            .insert([
              {
                created_at: new Date().toUTCString(),
                email: String(userData?.email),
                coins: 20,
                name: String(random.first() + " " + random.last()),
                plan_type: String("free"),
              },
            ])
            .select();

          console.log(addUser);
        }
        toast.custom(
          <div>Confirm the email to complete the sign up process</div>
        );
      }
    } catch (error: any) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  const AuthWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    console.log(data);
  };

  useEffect(() => {
    const checkAuth = async () => {
      const res = await supabase.auth.getUser();
      if (res.data.user) {
        router.push("/user");
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        {/* logo */}
        <div className="flex  justify-center items-center">
          <Image className=" h-10 w-10" src={LogoImg} alt="test" />
          <p className="flex gap-x-1">
            <span className=" font-bold">Video</span>
            <span className=" italic">fast</span>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-14 min-w-[330px] max-w-[430px]">
          {/* auth type */}
          <div className=" flex flex-col justify-center items-center">
            <div className=" font-semibold text-[18px]">
              {signIn ? "Log In" : "Sign Up"}
            </div>
            <div className=" text-[12px] text-gray-600">
              {!signIn ? "Let’s get started by creating your account" : null}
            </div>
          </div>

          {/* google auth btn */}
          <Button
            variant={"outline"}
            className="flex justify-center items-center gap-x-2 w-full mt-2"
            onClick={() => AuthWithGoogle()}
          >
            <div>
              <FcGoogle />
            </div>
            <div>Login with Google</div>
          </Button>

          {/* separator */}
          <div className=" flex justify-center items-center w-full gap-x-2 my-3 ">
            <hr className="flex border-gray-200 border-[0.1px] w-full" />
            <p className=" text-[10px] text-gray-500">OR</p>
            <hr className="flex border-gray-200 border-[0.1px]  w-full" />
          </div>

          {/* login / signup */}
          <div className="flex flex-col w-full gap-y-6">
            <div className="flex flex-col justify-start gap-y-1">
              <Label className=" text-[13px]">Enter Name *</Label>
              <Input
                onChange={(e) => {
                  setuserData((prev: any) => {
                    return {
                      ...prev,
                      email: e.target.value,
                    };
                  });
                }}
                value={userData?.email}
                type="email"
                placeholder="lets.join@audionotes.com"
              />
            </div>
            <div className="flex flex-col justify-start gap-y-1">
              <Label className=" text-[13px]">Enter Password *</Label>
              <Input
                onChange={(e) => {
                  setuserData((prev: any) => {
                    return {
                      ...prev,
                      password: e.target.value,
                    };
                  });
                }}
                value={userData?.password}
                type="password"
                placeholder="password"
              />
            </div>

            {/* checkbox and forget password */}
            {/* for login only */}
            {signIn ? (
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    className=" border-secondary-foreground"
                    id="terms"
                  />
                  <Label htmlFor="terms" className=" text-[#3E52E1]">
                    Remember Me
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="terms" className=" text-[#3E52E1]">
                    Forget password?
                  </Label>
                </div>
              </div>
            ) : null}

            {/* button */}
            <div className="flex w-full">
              <Button
                variant={"default"}
                className="flex w-full bg-[#3E52E1] text-white"
                onClick={() => handleAuth()}
                disabled={loading}
              >
                {loading ? (
                  <div>
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                ) : signIn ? (
                  "Log In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>

            {/* error message */}
            {error && (
              <div className="flex justify-center text-red-500">{error}</div>
            )}

            {/* switch between login and sign up */}
            <div className=" flex justify-center">
              {signIn ? (
                <p className=" text-[12px]">
                  Don’t have an account?{" "}
                  <span
                    onClick={() => setsignIn(false)}
                    className="text-[#3E52E1] font-semibold cursor-pointer"
                  >
                    Sign up
                  </span>
                </p>
              ) : (
                <p className=" text-[12px]">
                  Already have an account,{" "}
                  <span
                    onClick={() => setsignIn(true)}
                    className="text-[#3E52E1] font-semibold cursor-pointer"
                  >
                    Sign In
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
