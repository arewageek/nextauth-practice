import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Lock } from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";

type cardWrapperInterface = {
  children: React.ReactNode;
  headerLabel: string;
  desc: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocials: boolean;
};

const CardWrapper = ({
  children,
  headerLabel,
  desc,
  backButtonHref,
  backButtonLabel,
  showSocials,
}: cardWrapperInterface) => {
  return (
    <Card className="px-5 py-3 w-full lg:w-1/3 shadow">
      <CardTitle className="">
        <div className="flex justify-center items-center space-x-3">
          <Lock className="" />
          <h3 className="text-black text-4xl font-bold">{headerLabel}</h3>
        </div>
        <p className="text-gray-500 text-center font-light text-[14pt]">
          {desc}
        </p>
      </CardTitle>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <SocialCard />
      </CardFooter>
    </Card>
  );
};

const SocialCard = () => {
  const socials = [
    { label: "Google", icon: <FaGoogle /> },
    { label: "Github", icon: <FaGithub /> },
  ];

  return (
    <div className="w-full px-4 py-4 flex flex-col lg:flex-row justify-around items-centers lg:space-x-5 space-y-5 lg:space-y-0">
      {socials.map((social, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-full py-4  bg-white shadow rounded-lg dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-100 transition duration-300 cursor-pointer"
        >
          {social.icon}
        </div>
      ))}
    </div>
  );
};

export default CardWrapper;
