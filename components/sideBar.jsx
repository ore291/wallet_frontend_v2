import Link from "next/link";
import { userService } from "../services/user.service";
const sideBar = () => {
  return (
    <div className=" flex flex-row bg-gray-100">
      <div className="flex flex-col w-56 bg-white  overflow-hidden">
        {/* <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
        </div> */}
        <ul className="flex flex-col py-4">
          <li>
            <div href="/login" className="sidebar-btn">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-home"></i>
              </span>
              <Link href="/">
                <span className="text-sm font-medium">Home</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="sidebar-btn">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-music"></i>
              </span>
              <Link href="/deposit">
                <span className="text-sm font-medium">Deposit</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="sidebar-btn">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-music"></i>
              </span>
              <Link href="/withdraw">
                <span className="text-sm font-medium">Withdraw</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="sidebar-btn">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-drink"></i>
              </span>
              <Link href="/transfer" className="text-sm font-medium">
                Transfer
              </Link>
            </div>
          </li>
          <li>
            <a className="sidebar-btn">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-drink"></i>
              </span>
              <span className="text-sm font-medium">Transactions</span>
            </a>
          </li>
          <li>
            <a className="sidebar-btn">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-drink"></i>
              </span>
              <span className="text-sm font-medium">Pay Bills</span>
            </a>
          </li>
          <li>
            <div className="sidebar-btn">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-music"></i>
              </span>
              <Link href="/verify">
                <span className="text-sm font-medium">Verify Kyc</span>
              </Link>
            </div>
          </li>
          <li>
            <a
              onClick={userService.logout}
              className="cursor-pointer flex flex-row text-red-500 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200  hover:text-red-700"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-shopping-bag"></i>
              </span>
              <span className="text-sm font-medium">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sideBar;
