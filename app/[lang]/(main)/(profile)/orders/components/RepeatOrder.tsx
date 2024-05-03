'use client';

import Button from '@/components/Button';
import useHttpClient from '@/lib/hooks/useHttpClient';
import { repeatOrder } from '../../services';

interface RepeatOrderProps {
  dictionary: {
    repeat_order: string;
  };
  id: string;
}

export default function RepeatOrder({ dictionary, id }: RepeatOrderProps) {
  const { sendRequest, isLoading } = useHttpClient();

  const repeatOrderHandler = async () => {
    const status = await sendRequest(repeatOrder(id));
  };

  return (
    <Button
      loading={isLoading}
      className="bg-success text-white py-2 px-4 text-sm rounded-2xl w-full"
      onClick={repeatOrderHandler}
    >
      {dictionary.repeat_order}
    </Button>
  );
}
