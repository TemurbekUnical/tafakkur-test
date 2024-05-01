import Table from "@/components/ui/table";
import { Column } from "@/types/common.types";
import dateFormat from "@/utils/dateFormat";
import moneyFormat from "@/utils/moneyFormat";

const Category = () => {
  return (
    <div className="flex justify-center pt-10">
      <div className="container w-main">
        <Table data={[]} columns={columns} />
      </div>
    </div>
  );
};

Category.getInitialProps = async () => {};

export default Category;

const columns: Column<any>[] = [
  {
    title: "#",
    render(_, order) {
      return order;
    },
    className: "w-8",
  },
  {
    title: "F.I.SH.",
    render(row) {
      return row.full_name;
    },
  },
  {
    title: "Tel.Raqami",
    render(row) {
      return row.phone;
    },
  },
  {
    title: "Homiylik summasi",
    render(row) {
      return moneyFormat(row.sum);
    },
  },
  {
    title: "Sarflangan summa",
    render(row) {
      return moneyFormat(row.spent);
    },
  },
  {
    title: "Sana",
    render(row) {
      return <>{dateFormat(row.created_at)}</>;
    },
  },
  {
    title: "Status",
    render(row) {
      return row.get_status_display;
    },
  },
  {
    title: "Holat",
    render() {
      return "view";
    },
  },
];
