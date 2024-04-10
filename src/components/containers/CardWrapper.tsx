import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Lock } from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

interface cardWrapperInterface {
  children: React.ReactNode;
  headerLabel: string;
  desc: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocials: boolean;
}

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
      {showSocials && (
        <CardFooter>
          <SocialCard />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
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
          className="flex items-center justify-center w-full py-4  bg-gray-800 shadow rounded-lg text-gray-100 hover:text-gray-50 hover:bg-gray-900 transition duration-300 cursor-pointer"
        >
          {social.icon}
        </div>
      ))}
    </div>
  );
};

interface BackButtonInterface {
  label: string;
  href: string;
}

const BackButton = ({ href, label }: BackButtonInterface) => {
  return (
    <div className="text-center mx-auto">
      <Button variant="link" className="font-normal w-full" size="sm">
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
};

export default CardWrapper;
