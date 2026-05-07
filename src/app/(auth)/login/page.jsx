"use client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  const onSubmit = () => {};
    return (
        <>
                <Card className="mt-32 bg-white/70 max-w-7xl  mx-auto">
          <h3 className="text-center text-3xl font-bold">Login to Your Account</h3>
          <div className="divider"></div>
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
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
            Login
          </Button>
        </div>
          </Form>
          <p className="text-sm font-semibold text-center">Don&apos;t Have an Account? <a href="/signup" className="text-indigo-600 hover:underline">Sign Up</a></p>
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

export default LoginPage;
