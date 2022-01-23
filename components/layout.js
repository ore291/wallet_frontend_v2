import Header from "./header";
import Sidebar from "./sideBar"

const layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className=" md:grid md:grid-cols-6 flex-1 overflow-y-auto">
        <section className="sidebar md:col-span-1  "><Sidebar/></section>
        <main className="bg-neutral-100 md:col-span-5 ">{children}</main>
      </div>
      
    </div>
  );
};

export default layout;
