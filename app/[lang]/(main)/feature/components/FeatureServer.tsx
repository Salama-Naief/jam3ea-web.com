import React, { useContext, useEffect, useState } from "react";
import { getFeaturedProducts } from "../services";
import Feature from "./Feature";
import { IFeature } from "../types";
import { translate } from "@/lib/utils/serverHelpers";
import { getDictionary } from "@/lib/utils/dictionary";
import { Loader } from "@mantine/core";
import { AuthContext } from "@/lib/providers/AuthProvider";
import FeatureClient from "./FeatureClient";

interface Props {
  lang: "en" | "ar";
  productType?: "normal" | "bestSeller";
  titlePos?: "start" | "center";
  dict: any;
}
async function FeatureServer({
  lang,
  productType = "bestSeller",
  titlePos = "start",
}: Props) {
  const features = await getFeaturedProducts();
  const dict = await getDictionary(lang);

  return (
    <div>
      {features &&
        // <FeatureClient
        //   titlePos={titlePos}
        //   data={features}
        //   dict={dict}
        //   productType={productType}
        // />
        //)
        Array.isArray(features) &&
        features.map((feature: IFeature, i) => (
          <Feature
            key={feature._id}
            feature={feature}
            dictionary={{
              view_all: translate(dict, "view_all"),
              currency: translate(dict, "currency"),
            }}
            title={titlePos}
            productType={productType}
          />
        ))}
    </div>
  );
}

export default FeatureServer;
