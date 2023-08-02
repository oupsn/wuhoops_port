import { SocialIcon } from "react-social-icons";

const footer = () => {
  return (
    <div
      id="contact"
      className="transition-all bg-zinc-900 dark:bg-zinc-100 py-8 flex flex-col gap-4"
    >
      <div className="dark:invert flex justify-center gap-6">
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
      {/* <p className="text-white dark:text-black text-center">
        - No hugs or kisses, only bugs and fixes -
      </p> */}
      <p className="text-white dark:text-black text-center">
        Copyright &copy; 2023 Wuhoops. All Rights Reserved
      </p>
    </div>
  );
};

export default footer;
