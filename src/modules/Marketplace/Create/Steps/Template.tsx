import React, { useState } from "react";
import Card from "modules/Marketplace/Create/Steps/components/Card";

import {
  TemplateNFT,
  TempalateExclusiveContent,
  TemplateOS,
  TemplateCommunity,
} from "components/Icons";

const MarketPlaceCreate = () => {
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState<
    number | null
  >(null);

  return (
    <div className="flex flex-col pb-12 ml-10 -mt-4">
      <span className="text-[19px] font-bold">Choose Your Templete</span>
      <div className="grid grid-cols-4 gap-4 mt-6">
        <Card
          icon={<TemplateNFT />}
          title="NFT Project"
          selected={selectedTemplateIndex === 0}
          onClick={() => setSelectedTemplateIndex(0)}
          list={[
            "Minime Token",
            "Trusted by 2000+ DAOs",
            "Traditional voted governance",
            "DAO templates",
          ]}
        />
        <Card
          icon={<TemplateOS />}
          title="Open Source Project"
          selected={selectedTemplateIndex === 1}
          onClick={() => setSelectedTemplateIndex(1)}
          list={[
            "Minime Token",
            "Trusted by 2000+ DAOs",
            "Traditional voted governance",
            "DAO templates",
          ]}
        />
        <Card
          icon={<TempalateExclusiveContent />}
          title="Exclusive Content"
          selected={selectedTemplateIndex === 2}
          onClick={() => setSelectedTemplateIndex(2)}
          list={[
            "Minime Token",
            "Trusted by 2000+ DAOs",
            "Traditional voted governance",
            "DAO templates",
          ]}
        />
        <Card
          icon={<TemplateCommunity />}
          selected={selectedTemplateIndex === 3}
          onClick={() => setSelectedTemplateIndex(3)}
          title="Community"
          list={[
            "Minime Token",
            "Trusted by 2000+ DAOs",
            "Traditional voted governance",
            "DAO templates",
          ]}
        />
      </div>
    </div>
  );
};

export default MarketPlaceCreate;
