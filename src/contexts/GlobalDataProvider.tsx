import { createContext, useContext, useState } from 'react';
import { formSteps } from '../data';

interface GlobalContextData {
    globalData: {
        currentStep: typeof formSteps[0]
    },
    setCurrentStep: (step: typeof formSteps[0]) => void
}

const initialValue = {
  globalData: {
    currentStep: formSteps[0],
  },
  setCurrentStep: () => {}
} as GlobalContextData

const GlobalDataContext = createContext<GlobalContextData>(initialValue);

export function useGlobalDataContext() {
  return useContext(GlobalDataContext);
}

const GlobalDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] =
    useState<typeof initialValue.globalData.currentStep>(initialValue.globalData.currentStep);

  return (
    <GlobalDataContext.Provider value={{ globalData: {currentStep}, setCurrentStep }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
