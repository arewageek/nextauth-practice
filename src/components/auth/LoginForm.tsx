'use client'
import React from "react";
import CardWrapper from "../containers/CardWrapper";

import { zodResolver } from "@hookform/resolver/zod";
import { useForm } from "react-hook-form";
import z from 'zod'
import { LoginSchema } from "@/schemas";
import { Form, FormField } from "../ui/form";

export const LoginForm = () => {

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  
  return (
    <CardWrapper
      headerLabel="Welcome back!"
      backButtonLabel="Don't have an account yet?"
      backButtonHref="/auth/register"
      showSocials
      desc="Let's get you back into your account!"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})} className="space-y-6">
          <div className="space-y-4">
            <FormField control={form.control} render={({field  => (

            )})} />

               
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
