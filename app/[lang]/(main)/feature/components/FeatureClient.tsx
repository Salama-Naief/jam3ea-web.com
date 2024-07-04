"use client";
import React, { useContext, useState } from "react";
import { IFeature } from "../types";
import Feature from "./Feature";
import { AuthContext } from "@/lib/providers/AuthProvider";
import Button from "../../../../components/Button";

interface Props {
  home?: boolean;
  data: IFeature[];
  titlePos?: "center" | "start";

  dict: any;
  productType?: "normal" | "bestSeller";
}
function FeatureClient({
  data,
  home = false,
  dict,
  productType = "bestSeller",
  titlePos,
}: Props) {
  const [feature, setFeature] = useState<IFeature[]>(
    home ? data.slice(0, 7) : data
  );
  const { translate } = useContext(AuthContext);
  const handleMore = () => {
    if (feature.length < data.length) {
      setFeature(data.slice(0, feature.length + 3));
    }
  };

  return (
    <div>
      <div>
        {Array.isArray(feature) &&
          feature.map((feature: IFeature, i) => (
            <Feature
              key={feature._id}
              feature={feature}
              dictionary={{
                view_all: translate("view_all"),
                currency: translate("currency"),
              }}
              title={titlePos}
              productType={productType}
            />
          ))}
      </div>
      <div className="my-6 text-center">
        <button
          onClick={() => handleMore()}
          className="px-6 py-2 lg:py-3 text-primary font-semibold lg:font-bold border border-primary rounded-md"
        >
          More
        </button>
      </div>
    </div>
  );
}

export default FeatureClient;
