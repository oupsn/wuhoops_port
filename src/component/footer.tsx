import { SocialIcon } from "react-social-icons";

const footer = () => {
  return (
    <div id="contact" className="bg-zinc-900">
      <div className="flex justify-center gap-6 py-10">
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
    </div>
  );
};

export default footer;
