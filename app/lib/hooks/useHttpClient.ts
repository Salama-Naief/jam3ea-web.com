import { useState, useEffect, useCallback, useContext } from "react";
import { IResponse } from "../types";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { showErrorAlert, showSuccesAlert } from "../utils/helpers";
import { AuthContext } from "../providers/AuthProvider";
import { STATUS_MESSAGES } from "../enums";

const useHttpClient = <T, R = unknown>() =>
  /* showNotification? = false,
  notificationType?: 'SIMPLE' | 'ALERT' | 'TOAST' = 'ALERT' */
  {
    const [results, setResults] = useState<T | null>(null);
    const [errors, setErrors] = useState<R | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { translate } = useContext(AuthContext);

    const sendRequest = useCallback(
      async (request: Promise<IResponse<T, R>>): Promise<boolean> => {
        setIsLoading(true);

        let status = false;

        try {
          const response = await request;
          console.log("response=====>", response.errors);
          setResults(response.results);
          setErrors(response.errors);
          status = response.success;
          if (response.success) {
            if (
              response.results &&
              response.status_message !== STATUS_MESSAGES.DATA_LOADED &&
              (response.results as any).message
            ) {
              // showSuccesAlert(
              //   (response.results as any).message,
              //   translate("ok")
              // );
            }
          } else {
            console.log("response.errors", (response.errors as any).message);
            // if (response.errors && (response.errors as any).message) {
            //   showErrorAlert((response.errors as any).message, translate("ok"));
            // }
            if (response.errors) {
              const errorRes = Object.values(response.errors)
                .map((v) =>
                  v && typeof v === "object" ? Object.values(v).join(",") : v
                )
                .join(",");
              showErrorAlert(errorRes, translate("ok"));
            }
          }
        } catch (error) {
          setResults(null);
        } finally {
          setIsLoading(false);
        }

        return status;
      },
      []
    );

    return { results, errors, isLoading, sendRequest };
  };

export default useHttpClient;
