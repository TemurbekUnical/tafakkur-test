import { z } from "zod";
import { TableData } from "./common.types";

export interface IProduct extends TableData {
  title: string;
  price: number;
  description: string;
  category: string;
}
export type IProductBody = Omit<IProduct, "_id" | "createdAt">;
export const ProductSchema = z.object({
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.object({
    value: z.string(),
    label: z.string().optional(),
  }),
});
export type IProductForm = z.infer<typeof ProductSchema>;
