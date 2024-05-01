import { IProduct } from "@/types";
import getUID from "@/utils/getUID";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState: { products: IProduct[] } = {
  products: [
    {
      title: "I phone 19",
      price: 36000,
      description: "Very nice phone",
      category: "electronics",
      _id: "6a4fd71d-7e10-409e-992d-55d2872f297d",
      createdAt: "2024-05-01T22:19:10+05:00",
    },
    {
      title: "Street hat",
      price: 200,
      description: "Awesome hat",
      category: "clothing",
      _id: "bb7571ee-cfcf-45d1-a3a7-20c4bcda43b6",
      createdAt: "2024-05-01T22:20:18+05:00",
    },
  ],
};

const productService = createSlice({
  name: "productService",
  initialState: initialState,
  reducers: {
    createProduct: (
      state,
      { payload }: PayloadAction<Omit<IProduct, "_id" | "createdAt">>
    ) => {
      if (state?.products) {
        state?.products?.push({
          ...payload,
          _id: getUID(),
          createdAt: dayjs().format(),
        });
      } else {
        state.products = [
          { ...payload, _id: getUID(), createdAt: dayjs().format() },
        ];
      }
    },
    updateProduct: (state, { payload }: PayloadAction<Partial<IProduct>>) => {
      state.products = state.products.map((prod) =>
        prod._id === payload._id ? { ...prod, ...payload } : prod
      );
    },
    deleteProduct: (state, { payload }: PayloadAction<{ _id: string }>) => {
      state.products = state.products.filter(
        (prod) => prod._id !== payload._id
      );
    },
  },
});

export const { createProduct, deleteProduct, updateProduct } =
  productService.actions;
export default productService.reducer;
