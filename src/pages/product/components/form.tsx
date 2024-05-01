import InputForm from "@/components/form/InputForm.component";
import MoneyInput from "@/components/form/MoneyInput.component";
import SelectForm from "@/components/form/SelectForm.component";
import Button from "@/components/ui/Button.component";
import { productCategories } from "@/constants/common.constants";
import { IProduct, IProductBody, IProductForm, ProductSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (form: IProductBody) => void;
  selected: IProduct | undefined;
}
const ProductForm = ({ onSubmit, selected }: Props) => {
  const { control, handleSubmit, reset } = useForm<IProductForm>({
    resolver: zodResolver(ProductSchema),
  });

  const submit = handleSubmit((form) => {
    onSubmit({
      ...form,
      category: form.category.value,
    });
    reset({});
  });

  useEffect(() => {
    selected &&
      reset({
        ...selected,
        category: { value: selected.category },
      });
    return () => {
      reset({});
    };
  }, [reset, selected]);

  return (
    <form className="w-10/12 py-14 space-y-10 m-auto" onSubmit={submit}>
      <h1 className="text-3xl font-bold text-center">
        {selected ? "Edit" : "Add"} product
      </h1>
      <InputForm control={control} name="description" label="description" />
      <SelectForm
        options={productCategories}
        control={control}
        name="category"
        label="category"
      />
      <MoneyInput control={control} name="price" label="price" />
      <InputForm control={control} name="title" label="title" />
      <Button>{selected ? "Edit" : "Add"} product</Button>
    </form>
  );
};

export default ProductForm;
