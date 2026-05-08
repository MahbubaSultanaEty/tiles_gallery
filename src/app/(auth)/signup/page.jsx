"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Chip,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { email } from "better-auth";
import { error } from "better-auth/api";
import { Check, CircleDot } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
   const name = e.target.name.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
   const image = e.target.image.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image
    })
    if (error) {
      toast.error(error.message)
    }
    if (data) {
      toast.success("Account created successfully! Please log in.")
      router.push("/login");
    }
  };
    return (
        <>
            <Card className="mt-32 bg-white/70 max-w-7xl  mx-auto">
          
           <h3 className="text-center text-2xl font-bold">Sign Up for Your Account</h3>
              <Chip></Chip>     
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="name"
          type="text"        
        >
          <Label>Name</Label>
          <Input placeholder="Enter Your Name" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="image"
          type="text"       >
          <Label>Image</Label>
          <Input placeholder="Enter Image URL" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter Your Email" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
              <div className="flex gap-2">                
          <Button className="w-full bg-indigo-700" type="submit">
            <Check />
            Sign Up
          </Button>
        </div>
          </Form>
          
          <div className="flex items-center gap-3">
    <div className="flex-1 h-px bg-gray-300"></div>
    <p className="text-sm text-gray-500 font-medium">OR</p>
    <div className="flex-1 h-px bg-gray-300"></div>
  </div>

  {/* Google Login */}
  <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition">
              <Image
                  width={10}
                  height={10}
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
      alt="google"
      className="w-5 h-5"
    />
    <span className="font-medium text-gray-700">
      Continue with Google
    </span>
  </button>
    </Card>
      </>
      
  );
};

export default SignUpPage;
