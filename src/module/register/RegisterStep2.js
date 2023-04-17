import React from "react";

const RegisterStep2 = () => {
  return (
    <div className="p-[40px_48px] text-textColor2">
      <p>
        In a clinical setting, patients can receive a wide range of healthcare
        services. Routine check-ups are important to monitor overall health and
        catch any potential problems early on. Chronic conditions such as
        diabetes, asthma, or heart disease require ongoing management to keep
        symptoms under control.
      </p>
      <br />
      <p>
        Mental health concerns can be treated with therapy, counseling, or
        medication. Acute illnesses such as the flu or a respiratory infection
        can be managed with treatment to speed up recovery. Preventive care such
        as screenings for cancer and vaccinations can help prevent illnesses
        from developing. Patients with injuries may receive treatment such as
        physical therapy to help them recover. Women's health services include
        reproductive health care such as Pap smears and prenatal care. Children
        may receive care for growth and development, while older adults may
        receive care for age-related conditions such as dementia or arthritis.
      </p>
      <br />
      <p>
        Finally, urgent care is available for patients with immediate medical
        needs. In a clinical setting, healthcare professionals work to provide
        patients with the care they need to maintain and improve their health.
      </p>
      <br />
      <div className="flex items-center gap-6">
        <input type="checkbox" className="h-[29px] w-[29px]" />
        <label>
          I agree to the{" "}
          <span className="text-textColor">Terms & Conditions(T&C)</span>{" "}
        </label>
      </div>{" "}
      <div className="flex items-center gap-6 mt-2">
        <input type="checkbox" className="h-[29px] w-[29px]" />
        <label>
          I agree to the use of my personal data for marketing and survey
          purposes
        </label>
      </div>
    </div>
  );
};

export default RegisterStep2;
