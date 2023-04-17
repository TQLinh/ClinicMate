import LayoutSign from "../layout/LayoutSign";
import RegisterStep1 from "../module/register/RegisterStep1";
import RegisterStep2 from "../module/register/RegisterStep2";
import { useStep } from "../context/stepContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../icon/ArrowLeft";
import ArrowRight from "../icon/ArrowRight";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const RegisterStep = [
  { id: 1, title: "Your Profile", step: <RegisterStep1 /> },
  { id: 2, title: "Consent To Trest", step: <RegisterStep2 /> },
];
const schame = yup.object({
  first: yup.string().required("Vui lòng nhập first name"),
  last: yup.string().required("Vui lòng nhập last name"),
  ocialsecurity: yup.string().required("Vui lòng nhập ocial security number"),
  email: yup.string().required("Vui lòng nhập email của bạn "),
  // .min(10, "không được nhập dưới 10 ký tự")
  // .max(32, "Không nhập quá 32 ký tự")
  // .matches(/^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/, {
  //   message: "không đúng định dạng",
  // })
  password: yup.string().required("vui lòng nhập password của bạn"),
  // .min(6, "nhập tối thiểu 6 ký tự")
  // .max(20, "Nhập tối đa 20 ký tự")
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //   {
  //     message:
  //       "Vui long Tối thiểu ít nhất một ký tự viết hoa, một ký tự viết thường, một số và một ký tự đặc biệt",
  //   }
  // ),
});
const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      first: "",
      last: "",
      password: "",
      ocialsecurity: "",
      email: "",
    },
    resolver: yupResolver(schame),
  });
  console.log("errors: ", errors);
  const { step, setStep } = useStep();

  const handleRegister = (values) => {
    if (step === 0) {
      setStep(step + 1);
    }
    if (step === 1) {
      //handle register
    }
  };
  return (
    <LayoutSign
      header="Create New Account"
      childrenStyle="max-w-[1200px]"
      // nextStep={<NextStep />}
    >
      <form autoComplete="off" onSubmit={handleSubmit(handleRegister)}>
        <div className="overflow-hidden bg-white rounded-3xl">
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
          <div>
            {step === 0 && <RegisterStep1 control={control} />}
            {step === 1 && <RegisterStep2 />}
          </div>
        </div>
        <NextStep></NextStep>
      </form>
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
      <button
        type="submit"
        className="flex items-center cursor-pointer text-2xl bg-white p-[5px_52px] rounded-3xl text-[#6F3AFA]"
      >
        <span className="text-2xl font-semibold">
          {step === 1 ? "Register" : "Next"}
        </span>
        <div className="flex items-center justify-center w-[42px] h-[42px]">
          <ArrowRight />
        </div>
      </button>
    </div>
  );
}
export default Register;
