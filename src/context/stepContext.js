import { createContext, useContext, useState } from "react";

const StepContext = createContext(null);
function StepProvider(props) {
  const [step, setStep] = useState(0);
  const value = {
    step,
    setStep,
  };
  return <StepContext.Provider value={value} {...props}></StepContext.Provider>;
}
function useStep() {
  const context = useContext(StepContext);
  if (typeof context === "undefined") throw new Error("Lỗi");
  return context;
}

export { StepProvider, useStep };
