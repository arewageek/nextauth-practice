import React from "react";
import CardWrapper from "../containers/CardWrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back!"
      backButtonLabel="Don't have an account yet?"
      backButtonHref="/auth/register"
      showSocials
      desc="Let's get you back into your account!"
    >
      <form className="w-full max-w-md"></form>
    </CardWrapper>
  );
};
