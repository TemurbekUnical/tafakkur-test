import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "@/store/reducers/main.reducer";
import { useAppDispatch, useAppSelector } from "@/store/utils";
import { IProduct } from "@/types";
import { TError } from "@/types/common.types";
import { Method } from "axios";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

interface UseRequestOptions {
  method: Method;
}

export const useProductService = ({ method }: UseRequestOptions) => {
  const d = useAppDispatch();
  const productService = useAppSelector((state) => state.productService);
  const [error, setError] = useState<TError>();
  const [isPending, setIsPending] = useState(false);

  const request = useCallback(
    async (config?: { body: IProduct }) => {
      setIsPending(true);
      const METHOD = mainConfig?.method as Method;
      const BODY = config?.body as Partial<IProduct>;

      try {
        switch (METHOD) {
          case "GET":
          case "get":
            break;
          case "POST":
          case "post":
            d(
              createProduct({
                body: BODY as IProduct,
              })
            );
            break;
          case "PUT":
          case "put":
            d(updateProduct({ body: BODY!, id: BODY._id! }));
            break;
          case "DELETE":
          case "delete":
            d(deleteProduct({ _id: BODY._id! }));
            break;
        }
      } catch (error) {
        const errorMessage = (error as TError).response.data.detail;
        setError(error as TError);
        toast.error(errorMessage);
      }
      setIsPending(false);
    },
    [d]
  );

  return {
    request,
    products: productService[mainConfig?.url as string],
    isPending,
    error,
  };
};
