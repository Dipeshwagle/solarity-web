import React from "react";
import Card from "modules/Marketplace/Create/Card";

import {
  TemplateNFT,
  TempalateExclusiveContent,
  TemplateOS,
  TemplateCommunity,
} from "components/Icons";

const MarketPlaceCreate = () => {
  return (
    <div className="flex flex-col pb-40 ml-10 -mt-4">
      <span className="text-[19px] font-bold">Choose Your Templete</span>
      <div className="flex flex-row gap-10 mt-10">
        <Card
          icon={<TemplateNFT />}
          title="NFT Project"
          list={[
            "Minime Token",
            "Trusted by 2000+ DAOs",
            "Traditional voted governance",
            "DAO templates",
          ]}
        />
        <Card
          icon={<TemplateOS/>}
          title="Open Source Project"
          list={[
            "Minime Token",
            "Trusted by 2000+ DAOs",
            "Traditional voted governance",
            "DAO templates",
          ]}
        />
      </div>
      <div className="flex flex-row gap-10 mt-10">
        <Card
          icon={<TempalateExclusiveContent />}
          title="Exclusive Content"
          list={[
            "Minime Token",
            "Trusted by 2000+ DAOs",
            "Traditional voted governance",
            "DAO templates",
          ]}
        />
        <Card
          icon={<TemplateCommunity/>}
          title="Community"
          list={[
            "Minime Token",
            "Trusted by 2000+ DAOs",
            "Traditional voted governance",
            "DAO templates",
          ]}
        />
      </div>

      <div className="flex justify-end w-full mt-10">
          <button className="rounded-full btn btn-secondary">Continue</button>
      </div>
    </div>
  );
};

export default MarketPlaceCreate;
