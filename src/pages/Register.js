import LayoutSign from "../layout/LayoutSign";
import RegisterStep1 from "../module/register/RegisterStep1";
import RegisterStep2 from "../module/register/RegisterStep2";
import RegisterStep3 from "../module/register/RegisterStep3";
import { useStep } from "../context/stepContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../icon/ArrowLeft";
import ArrowRight from "../icon/ArrowRight";
const RegisterStep = [
  { id: 1, title: "Your Profile", step: <RegisterStep1 /> },
  { id: 2, title: "Consent To Trest", step: <RegisterStep2 /> },
  { id: 3, title: "Registration", step: <RegisterStep3 /> },
];
const Register = () => {
  const { step } = useStep();
  return (
    <LayoutSign
      header="Create New Account"
      childrenStyle="max-w-[1200px]"
      nextStep={<NextStep />}
    >
      <div className="flex justify-between">
        {RegisterStep.length > 0 &&
          RegisterStep.map((item, index) => {
            return (
              <div
                className={`flex flex-1 first:rounded-[0px_48px_48px_0px] last:rounded-[48px_0px_0px_48px]  items-center  justify-center gap-4 rounded-full p-[21px] ${
                  index === step
                    ? "bg-bgRegister text-textColor"
                    : "text-white opacity-20"
                }`}
                key={item.id}
              >
                <span
                  className={`text-[20px]  w-[42px] rounded-full flex items-center justify-center h-[42px] ${
                    index === step ? "bg-white" : "bg-textColor text-white"
                  }`}
                >
                  {item.id}
                </span>
                <span
                  className={`text-2xl ${
                    index === step ? null : "text-textColor"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
      </div>
      <div>{RegisterStep.length > 0 && RegisterStep[step].step}</div>
    </LayoutSign>
  );
};

function NextStep() {
  const navigate = useNavigate();
  const { step, setStep } = useStep();
  let contentBack = "";
  switch (step) {
    case 0:
      contentBack = "Back To Login";
      break;
    case 1:
      contentBack = "Your Profile";
      break;
    case 2:
      contentBack = "Consent to treat";
      break;
    default:
      break;
  }
  return (
    <div className="flex max-w-[1200px] justify-between mt-[38px] w-full">
      <div
        onClick={() => {
          if (step === 0) {
            // Handle content account
            navigate("/login");
          } else {
            setStep(step - 1);
          }
        }}
        className="flex items-center text-white cursor-pointer"
      >
        <div className="flex items-center justify-center w-[42px] h-[42px]">
          <ArrowLeft />
        </div>
        <span className="text-2xl font-semibold">{contentBack}</span>
      </div>
      <div
        onClick={() => {
          if (step === 2) {
            toast.warning("Chưa làm chức năng đăng ký");
            // Handle content account
          } else {
            setStep(step + 1);
          }
        }}
        className="flex items-center cursor-pointer text-2xl bg-white p-[5px_52px] rounded-3xl text-[#6F3AFA]"
      >
        <span className="text-2xl font-semibold">
          {step === 2 ? "Register" : "Next"}
        </span>
        <div className="flex items-center justify-center w-[42px] h-[42px]">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
export default Register;
