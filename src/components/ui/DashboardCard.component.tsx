import moneyFormat from "@/utils/moneyFormat";
import React from "react";

const DashboardCard = ({ price, title }: { title: string; price: number }) => {
  return (
    <>
      <div className="rounded-xl bg-white p-5 flex gap-3 justify-between">
        <span className="size-12 flex justify-center items-center bg-opacity-15 bg-main-blue rounded-2xl">
          ico
        </span>
        <div className="flex-1">
          <p>{title}</p>
          <h3 className="font-bold text-xl">{moneyFormat(price)}</h3>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
