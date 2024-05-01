 
import { navButtons } from "@/constants/navbar.constants";
import className from "@/utils/className";
import { Link, useLocation } from "react-router-dom";

const DashboardNavbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-white">
      <div className="w-main container m-auto py-4 flex justify-between items-center">
        <div className="flex gap-7 items-center">
          <span className="p-2 inline-flex items-center bg-gray-200 rounded-md font-semibold">
            Temurbek
          </span>
        </div>
      </div>
      <div className="!bg-gray-50 py-6">
        <div className="w-main container m-auto flex justify-between">
          <div className="inline-flex rounded-md" role="group">
            {navButtons.map((btn, index, array) => (
              <Link to={btn.value} key={btn.value}>
                <button
                  type="button"
                  key={btn.value}
                  className={className({
                    "px-14 py-3 uppercase text-sm font-medium text-blue-400 border border-blue-400":
                      true,
                    "!text-white bg-blue-600": pathname.includes(btn.value),
                    "rounded-s-md": index === 0,
                    "rounded-e-md": array.length - 1 === index,
                  })}
                >
                  {btn.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
