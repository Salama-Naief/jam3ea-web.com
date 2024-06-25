import { IDataLoadedResponse } from "@/lib/types";
import apiHandler from "@/lib/utils/apiHandler";

export const getNotifications = async (): Promise<any> =>
  await apiHandler(`/notification`, "GET", undefined, true, false);
