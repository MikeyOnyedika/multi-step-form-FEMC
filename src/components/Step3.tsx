import { useState } from 'react';
import { useGlobalDataContext } from '../contexts/GlobalDataProvider';
import { planTypes } from '../data';

const addOns = [
  {
    id: 1,
    title: 'Online service',
    description: 'Access to multiplayer games',
    pricing: {
      perMonth: 1,
      perYear: 90,
    },
  },
  {
    id: 2,
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    pricing: {
      perMonth: 2,
      perYear: 90,
    },
  },
  {
    id: 3,
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    pricing: {
      perMonth: 2,
      perYear: 90,
    },
  },
];

export default function Step2() {
  const {
    globalData: { planType },
  } = useGlobalDataContext();
  const [selectedAddOns, setSelectedAddOns] = useState<Set<(typeof addOns)[0]>>(
    new Set(),
  );

  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="font-bold text-2xl text-blue-marine">Pick add-ons</h3>
      <p className="text-gray-cool">
        Add-ons help enhance your gaming experience.
      </p>
      <ul className="w-full flex flex-col gap-3">
        {addOns.map((item) => (
          <li key={item.id} className="w-full flex flex-col">
            <label
              className={`w-full transition-all duration-150 p-3 flex gap-3 items-center rounded-lg border-[1px] hover:bg-alabaster hover:border-blue-purplish ${
                selectedAddOns.has(item)
                  ? 'bg-magnolia border-blue-purplish'
                  : 'border-gray-light'
              }`}
              role="button"
            >
              <div>
                <input
                  type="checkbox"
                  className="accent-blue-purplish scale-110 hidden peer"
                  onChange={(e) => {
                    // add this item to the list of selectedAddOns if "checked" is true, else, remove it if it's in the list
                    const isChecked = e.target.checked;

                    if (isChecked) {
                      setSelectedAddOns((prev) => {
                        const newSet = new Set(prev);
                        newSet.add(item);
                        return newSet;
                      });
                    } else {
                      setSelectedAddOns((prev) => {
                        const newSet = new Set(prev);
                        newSet.delete(item);
                        return newSet;
                      });
                    }
                  }}
                />
                <p className="rounded w-5 h-5 border-gray-light border-[1px] bg-checked peer-checked:bg-blue-purplish bg-no-repeat bg-center"></p>
              </div>
              <div className="flex flex-col gap-0 w-full">
                <h4 className="text-sm font-medium text-blue-marine capitalize">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-cool">{item.description}</p>
              </div>

              <p className="text-xs text-blue-purplish font-medium">
                +$
                {planType === planTypes.MONTHLY
                  ? `${item.pricing.perMonth}/mo`
                  : `${item.pricing.perYear}/yr`}
              </p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
