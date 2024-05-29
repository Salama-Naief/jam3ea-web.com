"use client";

import React, { useContext } from "react";
import { IFeature } from "../types";
import Feature from "./Feature";
import { AuthContext } from "@/lib/providers/AuthProvider";
// import { translate } from "@/lib/utils/serverHelpers";

interface Props {
  data: IFeature[];
  titlePos: "start" | "center";
  productType: "normal" | "bestSeller";
  dict: any;
}
function FeatureClient({ data, productType, titlePos, dict }: Props) {
  const { translate } = useContext(AuthContext);
  return (
    <div>
      {Array.isArray(data) &&
        data.map((feature: IFeature, i) => (
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
  );
}

export default FeatureClient;
