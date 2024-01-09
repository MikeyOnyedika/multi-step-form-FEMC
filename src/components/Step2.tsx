import { useEffect, useState } from 'react';
import IconArcade from '../assets/images/icon-arcade.svg';
import IconAdvanced from '../assets/images/icon-advanced.svg';
import IconPro from '../assets/images/icon-pro.svg';
import { useGlobalDataContext } from '../contexts/GlobalDataProvider';
import { planTypes } from '../data';
import { PlanType } from '../types';

const options = [
  {
    id: 1,
    title: 'Arcade',
    image: IconArcade,
    pricing: {
      perMonth: 9,
      perYear: 90,
    },
  },
  {
    id: 2,
    title: 'Advanced',
    image: IconAdvanced,
    pricing: {
      perMonth: 12,
      perYear: 120,
    },
  },
  {
    id: 3,
    title: 'Pro',
    image: IconPro,
    pricing: {
      perMonth: 15,
      perYear: 150,
    },
  },
];

export default function Step2() {
  const [isChecked, setIsChecked] = useState(false);
  const {
    globalData: { planType },
    setPlanType,
  } = useGlobalDataContext();
  const [selectedOption, setSelectedOption] = useState<{
    id: number;
    title: string;
    pricingType: PlanType;
  }>({ id: options[0].id, title: options[0].title, pricingType: planType });

  function updatePlanType() {
    setPlanType(isChecked ? planTypes.YEARLY : planTypes.MONTHLY);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updatePlanType(), [isChecked]);

  return (
    <div className="w-full flex flex-col gap-4 px-4 py-1">
      <h3 className="font-bold text-2xl text-blue-marine">Select your plan</h3>
      <p className="text-gray-cool">
        You have the option of monthly or yearly billing.
      </p>
      <ul className="w-full flex flex-col gap-3">
        {options.map((item) => (
          <li
            key={item.id}
            className={`w-full transition-all duration-150 p-3 flex gap-3 items-start rounded-lg border-[1px] hover:bg-alabaster hover:border-blue-purplish ${
              item.id === selectedOption.id
                ? 'bg-magnolia border-blue-purplish'
                : 'border-gray-light'
            }`}
            role="button"
            onClick={() => {
              setSelectedOption({
                id: item.id,
                title: item.title,
                pricingType: planType,
              });
            }}
          >
            <img src={item.image} />
            <div className="flex flex-col gap-0 w-full">
              <h4 className="text-base font-medium text-blue-marine capitalize">
                {item.title}
              </h4>
              {planType === 'monthly' ? (
                <>
                  <p className="text-sm text-gray-cool">
                    ${item.pricing.perMonth}/mo
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm text-gray-cool">
                    ${item.pricing.perYear}/yr
                  </p>
                  <p className="text-[12px] text-blue-marine">2 months free</p>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* ---START--- Switch Button */}
      <div className="flex items-center gap-4 bg-magnolia rounded-md p-3.5 w-full justify-center">
        <button
          type="button"
          onClick={() => setIsChecked((prev) => !prev)}
          className={`text-sm outline-none font-medium ${
            isChecked ? 'text-gray-cool' : 'text-blue-marine'
          }`}
        >
          Monthly
        </button>
        <label>
          <input
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
          <div
            className={`w-10 h-5 rounded-full relative flex p-1 bg-blue-marine before:w-3 before:h-3 before:bg-white before:transition-all before:rounded-full items-center ${
              isChecked ? 'before:translate-x-[1.3rem]' : 'before:translate-x-0'
            }`}
            role="button"
          ></div>
        </label>
        <button
          type="button"
          onClick={() => setIsChecked((prev) => !prev)}
          className={`text-sm outline-none font-medium ${
            !isChecked ? 'text-gray-cool' : 'text-blue-marine'
          }`}
        >
          Yearly
        </button>
      </div>
      {/* ---END--- Switch Button */}
    </div>
  );
}
