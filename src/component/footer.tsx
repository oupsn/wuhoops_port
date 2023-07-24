import { SocialIcon } from "react-social-icons";

const footer = () => {
  return (
    <div id="contact" className="bg-zinc-900  py-8">
      <div className="flex justify-center gap-6 mb-4">
        <SocialIcon
          url="https://github.com/wuhoops"
          bgColor="white"
          fgColor="black"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/wuhoops/"
          bgColor="white"
          fgColor="black"
        />
        <SocialIcon
          url="mailto:pasinun.w@gmail.com"
          bgColor="white"
          fgColor="black"
        />
      </div>
      <p className="text-zinc-100 text-center"> Copyright &copy; 2023 Wuhoops. All Rights Reserved</p>
    </div>
  );
};

export default footer;
