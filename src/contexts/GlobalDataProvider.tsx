import { createContext, useContext, useState } from 'react';
import { formSteps, planTypes } from '../data';
import { PlanType } from '../types';

interface GlobalContextData {
  globalData: {
    currentStep: (typeof formSteps)[0];
    planType: PlanType;
  };
  setCurrentStep: (step: (typeof formSteps)[0]) => void;
  setPlanType: (plantype: PlanType) => void;
}

const initialValue = {
  globalData: {
    currentStep: formSteps[0],
    planType: planTypes.MONTHLY as PlanType,
  },
  setCurrentStep: () => {},
  setPlanType: () => {},
} as GlobalContextData;

const GlobalDataContext = createContext<GlobalContextData>(initialValue);

export function useGlobalDataContext() {
  return useContext(GlobalDataContext);
}

const GlobalDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<
    typeof initialValue.globalData.currentStep
  >(initialValue.globalData.currentStep);
  const [planType, setPlanType] =
    useState<typeof initialValue.globalData.planType>(initialValue.globalData.planType);

  return (
    <GlobalDataContext.Provider
      value={{
        globalData: { currentStep, planType },
        setCurrentStep,
        setPlanType,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
