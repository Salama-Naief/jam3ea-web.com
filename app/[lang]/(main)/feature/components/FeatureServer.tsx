import React from "react";
import { getFeaturedProducts } from "../services";
import Feature from "./Feature";
import { IFeature } from "../types";
import { translate } from "@/lib/utils/serverHelpers";
import { getDictionary } from "@/lib/utils/dictionary";

async function FeatureServer({ lang }: { lang: "en" | "ar" }) {
  const features = await getFeaturedProducts();
  const dict = await getDictionary(lang);
  return (
    <div>
      {features &&
        Array.isArray(features) &&
        features.map((feature: IFeature) => (
          <Feature
            key={feature._id}
            feature={feature}
            dictionary={{
              view_all: translate(dict, "view_all"),
              currency: translate(dict, "currency"),
            }}
          />
        ))}
    </div>
  );
}

export default FeatureServer;
