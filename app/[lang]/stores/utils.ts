import { translate } from '@/lib/utils/serverHelpers';

export const getDeliveryTime = (deliveryTime: string, dict: any): string => {
  if (!deliveryTime) return '';

  const dt = parseInt(deliveryTime);

  if (dt > 120) {
    const dtInHours = dt / 60;
    return `${dtInHours} ${translate(dict, 'hours')}`;
  }

  return `${deliveryTime} ${translate(dict, 'minutes')}`;
};
