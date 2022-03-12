import React from "react";
import { Wizard, useWizard } from "react-use-wizard";

import TemplateStep from "modules/Marketplace/Create/Steps/Template";
import SizeStep from "modules/Marketplace/Create/Steps/Size";
import AssignStep from "modules/Marketplace/Create/Steps/Assign";
import EconomicsStep from "modules/Marketplace/Create/Steps/Economics";

const Footer = () => {
  const {
    nextStep,
    previousStep,
    isLoading,
    activeStep,
    stepCount,
    isLastStep,
    isFirstStep,
  } = useWizard();

  console.log("Rendering footer");

  return (
    <div className="flex justify-between w-full mt-10">
      {!isFirstStep ? (
        <button
          className="rounded-full btn btn-secondary"
          onClick={previousStep}
        >
          Back
        </button>
      ) : (
        <div />
      )}
      {!isLastStep ? (
        <button className="rounded-full btn btn-secondary" onClick={nextStep}>
          Continue
        </button>
      ) : (
        <div />
      )}

      {isLastStep && (
        <button className="rounded-full btn btn-secondary" >
          Finish
        </button>
      )}
    </div>
  );
};

const Create = () => {
  return (
    <Wizard footer={<Footer />}>
      <TemplateStep />
      <SizeStep />
      <AssignStep />
      <EconomicsStep />
    </Wizard>
  );
};

export default Create;
