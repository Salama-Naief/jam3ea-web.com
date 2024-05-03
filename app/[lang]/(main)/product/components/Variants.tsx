'use client';

import { useContext, useState } from 'react';
import { IVAriantOption, IVariant } from '../types';
import { AuthContext } from '@/lib/providers/AuthProvider';

interface VariantsProps {
  variants: IVariant[];
  onSelect: (sku: string) => void;
}

const getFilteredObjects = (
  list: Array<IVAriantOption | undefined>,
  selectedVariant?: IVariant
): Array<IVAriantOption> => {
  const uniqueValues = new Set<string>();
  const filteredList: any = [];
  for (const obj of list) {
    const value = obj?.value;
    if (
      !value ||
      (selectedVariant &&
        !selectedVariant.options.find((o) => o.value === value))
    )
      continue;
    if (!(/* uniqueValues.has(value) */ false)) {
      uniqueValues.add(value);
      filteredList.push(obj);
    }
  }

  return filteredList;
};

const getColorsOptions = (variants: IVariant[]) =>
  getFilteredObjects(
    Array.from(
      new Set(
        variants.map((variant) => {
          const o = variant.options.find(
            (option) => option.label === 'اللون' || option.label === 'Color'
          );
          if (o) {
            return { ...o, sku: variant.sku };
          }
        })
      )
    )
  );

const getSizesOptions = (variants: IVariant[]) =>
  getFilteredObjects(
    Array.from(
      new Set(
        variants.map((variant) => {
          const o = variant.options.find(
            (option) => option.label === 'الحجم' || option.label === 'Size'
          );
          if (o) {
            return { ...o, sku: variant.sku };
          }
        })
      )
    )
  );

export default function Variants({ variants, onSelect }: VariantsProps) {
  const { translate } = useContext(AuthContext);
  const [selectedVariant, setSelectedVariant] = useState<string>();
  const [filteredColors, setFilteredColors] = useState<any>(
    getColorsOptions(variants)
  );
  const [filteredSizes, setFilteredSizes] = useState<any>(
    getSizesOptions(variants)
  );

  const newChoiceHandler = () => {
    setFilteredColors(getColorsOptions(variants));

    setFilteredSizes(getSizesOptions(variants));

    setSelectedVariant(undefined);
  };

  const selectHandler = (sku: string) => {
    setSelectedVariant(sku);
    const variant = variants.find((v) => v.sku === sku);
    if (variant) {
      onSelect(sku);
      setFilteredColors(
        getFilteredObjects(getColorsOptions(variants), variant)
      );
      setFilteredSizes(getFilteredObjects(getSizesOptions(variants), variant));
    }
  };

  return (
    <>
      <div>
        <button
          onClick={() => newChoiceHandler()}
          className="border border-black py-1 px-4 rounded-full flex items-center justify-center"
        >
          {translate('new_choice')}
        </button>
      </div>
      {filteredSizes && filteredSizes.length > 0 && (
        <div className="mb-3">
          <>
            <div className="font-bold mb-2">{filteredSizes[0].label}</div>
            <div className="flex gap-2">
              {filteredSizes.map((o: any) => (
                <button
                  key={o?.sku_code}
                  className={`border-secondary border p-2 rounded-2xl ${
                    selectedVariant === o.sku ? 'bg-primary' : ''
                  }`}
                  onClick={() => selectHandler(o.sku)}
                >
                  {o?.name}
                </button>
              ))}
            </div>
          </>
        </div>
      )}

      {filteredColors && filteredColors.length > 0 && (
        <div className="mb-3">
          <>
            <div className="font-bold mb-2">{filteredColors[0].label}</div>
            <div className="flex gap-2">
              {filteredColors.map((o: any) => (
                <button
                  key={o?.sku_code}
                  className={`border-secondary border p-2 rounded-2xl ${
                    selectedVariant === o.sku ? 'bg-primary' : ''
                  }`}
                  onClick={() => selectHandler(o.sku)}
                >
                  {o?.name}
                </button>
              ))}
            </div>
          </>
        </div>
      )}
      {/* {variants &&
        variants.map((variant, i) => (
          <>
            {variant.options.map((option) => (
              <div key={variant.sku} className="mb-3">
                {i === 0 && (
                  <>
                    <div className="font-bold mb-2">{option.label}</div>
                    <div className="flex gap-2">
                      {(getOptions(option.label) || []).map((o) => (
                        <button
                          key={o?.sku_code}
                          className="border-secondary border p-2 rounded-2xl"
                        >
                          {o?.name}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </>
        ))} */}
    </>
  );
}
