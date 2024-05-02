import Button from "@/components/ui/Button.component";
import Modal from "@/components/ui/Modal.component";
import Table from "@/components/ui/table";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "@/store/reducers/main.reducer";
import { useAppDispatch, useAppSelector } from "@/store/utils";
import { IProduct, IProductBody } from "@/types";
import { Column } from "@/types/common.types";
import dateFormat from "@/utils/dateFormat";
import moneyFormat from "@/utils/moneyFormat";
import { useMemo, useState } from "react";
import ProductForm from "./components/form";

const Product = () => {
  const d = useAppDispatch();
  const products = useAppSelector((state) => state.productService.products);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState<IProduct>();
  const columns = useColumns();
  const onCreate = (form: IProductBody) => {
    d(selected ? updateProduct(form) : createProduct(form));
    setModal(false);
  };
  return (
    <>
      <div className="">
        <div className="">
          <Button
            className="block ml-auto my-8 !w-40 justify-end"
            onClick={() => setModal(true)}
          >
            Add product
          </Button>

          <Table
            onRowClick={(row) => {
              setSelected(row);
              setModal(true);
            }}
            data={products}
            columns={columns}
            total={products.length}
          />
        </div>
      </div>
      <Modal
        isOpen={modal}
        onClose={() => {
          setModal(false);
          setSelected(undefined);
        }}
      >
        <ProductForm onSubmit={onCreate} selected={selected} />
      </Modal>
    </>
  );
};

Product.getInitialProps = async () => {};

export default Product;

const useColumns = (): Column<IProduct>[] => {
  const d = useAppDispatch();
  const columns = useMemo<Column<IProduct>[]>(
    () => [
      {
        title: "#",
        render(_, order) {
          return order;
        },
        className: "w-8",
      },
      {
        title: "Title",
        render(row) {
          return row.title;
        },
      },
      {
        title: "Description",
        render(row) {
          return row.description;
        },
      },
      {
        title: "Price",
        render(row) {
          return moneyFormat(row.price);
        },
      },
      {
        title: "Date",
        render(row) {
          return dateFormat(row.createdAt);
        },
      },
      {
        title: "Category",
        render(row) {
          return row.category;
        },
      },
      {
        title: "Actions",
        render(row) {
          return (
            <Button
              className="bg-red-600 font-semibold"
              onClick={() => d(deleteProduct({ _id: row._id }))}
            >
              Delete
            </Button>
          );
        },
        isActionsColumn: true,
      },
    ],
    [d]
  );
  return columns;
};
