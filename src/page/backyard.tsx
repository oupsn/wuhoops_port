import React, { useState } from "react";

type Props = {};
const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Projects", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];
const backyard = (props: Props) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button onClick={() => setOpen(!open)}>backyard</button>
      <div
        className={`${
          open ? "h-0" : "h-100"
        }  transition-height duration-1000 flex overflow-hidden basis-full bg-red-700`}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <div key={item.name} className="text-black">
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default backyard;
