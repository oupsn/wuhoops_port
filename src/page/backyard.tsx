import React, { useEffect, useState } from "react";
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from "@heroicons/react/24/outline";
type Props = {};
const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Projects", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];
const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
]
const backyard = (props: Props) => {
  const [selected, setSelected] = useState(plans[0])
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  useEffect(() => {
    
  
    return () => {
      console.log(selected);
      
    }
  }, [selected])
  
  return (
    <>
     <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      <div className="bg-blue-500">
        <button onClick={() => setOpen(!open)}>backyard</button>
        <div
          className={`${
            open ? "translate-y-0" : "translate-y-96"
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
      </div>
      <div className={`${
            open ? "h-96" : "h-0"
          } bg-green-800 transition-all duration-1000 overflow-hidden`}>
              <p>dsadadsadsa</p><p>dsadadsadsa</p><p>dsadadsadsa</p>
      </div>
    </>
  );
};

export default backyard;
