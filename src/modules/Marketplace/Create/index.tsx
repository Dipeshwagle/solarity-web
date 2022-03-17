import React from "react";
import { Wizard, useWizard } from "react-use-wizard";

import SquadStep from "modules/Marketplace/Create/Steps/Sqad";
import Voting from "modules/Marketplace/Create/Steps/Voting";
import TemplateStep from "modules/Marketplace/Create/Steps/Template";
import SizeStep from "modules/Marketplace/Create/Steps/Size";
import AssignStep from "modules/Marketplace/Create/Steps/Assign";
import EconomicsStep from "modules/Marketplace/Create/Steps/Economics";
import Review from "modules/Marketplace/Create/Steps/Review";

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

  console.log({activeStep})

  const moveUp = [1,3]
  return (
    <div className={`absolute mb-10 flex justify-end w-full ${moveUp.includes(activeStep) ?'bottom-[200px] right-10':"bottom-[-100px]"}`}>
      {!isLastStep ? (
        <button className="rounded-full btn btn-secondary" onClick={nextStep}>
          Continue
        </button>
      ) : (
        <div />
      )}

      {isLastStep && (
        <button className="rounded-full btn btn-secondary">Finish</button>
      )}
    </div>
  );
};

const Create = () => {
  return (
    <div className="relative mb-10 ">
      <Wizard header={<Footer />}>
        <SquadStep />
        <TemplateStep />
        <SizeStep />
        <AssignStep />
        <EconomicsStep />
        <Voting />
        <Review />
      </Wizard>
    </div>
  );
};

export default Create;
