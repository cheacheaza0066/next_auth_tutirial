"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import Swal from "sweetalert2";

type Props = {};

function RegisterPage({}: Props) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSumbit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (password != confirmPassword) {
      Swal.fire({
        title: "Error!",
        text: "password do not match",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }

    if (!name || !email || !password || !confirmPassword) {
      Swal.fire("Please fill in all fields. !");
    }

    try {
      const res =  await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to register");
      }
      const form = e.target as HTMLFormElement;
      form.reset();

      Swal.fire({
        title: "Success!",
        text: "User registered successfully.",
        icon: "success",
        confirmButtonText: "Cool",
      });


    } catch (error) {
      console.log("error diring register");
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <h3 className="text-xl my-6">Register page</h3>
      <form
        action=""
        onSubmit={handleSumbit}
        className="flex flex-col w-2/4 space-y-6"
      >
        <TextField
          onChange={(e) => setName(e.target.value)}
          id="name"
          label="Name"
          variant="outlined"
          className=""
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          label="Email"
          variant="outlined"
          className=""
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          label="Password"
          variant="outlined"
          className=""
        />
        <TextField
          onChange={(e) => setConfirmPassword(e.target.value)}
          id="confirm-password"
          label="Confirm-password"
          variant="outlined"
          className=""
        />
        <Button type="submit" color="success" variant="contained">
          Sign up
        </Button>
      </form>
      <div className="my-3">
        <p>
          do you have an account{" "}
          <Link className="text-blue-600 hover:underline" href="/login">
            login page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
