import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "../components/modal";

import { userService } from "../services/user.service";

export default function Home() {
  const [user, setUser] = useState();
  const [showModal, setShowModal] = useState(false);

  async function fetchData(id, token) {
    // You can await here
    const user = await userService.getUser(id, token);
    setUser(user.data);
    setShowModal(!user.data.is_verified);
  };

  useEffect(() => {
    let item = JSON.parse(localStorage.getItem("user"));
    if (item) {
      let id = item.data.user.id;
      let token = item.data.tokens.access.token;
      fetchData(id, token);
    }
  }, []);

  if (!user)
    return (
      <div>
        <div
          wireLoading
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
        >
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          <h2 className="text-center text-white text-xl font-semibold">
            Loading...
          </h2>
          <p className="w-1/3 text-center text-white">
            This may take a few seconds, please don't close this page.
          </p>
        </div>
      </div>
    );

  return (
    <div>
      <Head>
        <title>Knight Wallet</title>
        <meta name="description" content="Knight Wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          title="VERIFY YOUR ACCOUNT"
        />
        <div classNameName="container p-10">
          <div classNameName="flex items-center justify-between">
            <div classNameName="flex flex-col justify-center  space-x-1">
              <h1 classNameName="text-4xl font-extrabold">HOME</h1>
              <p classNameName="text-xl font-semibold">
                welcome back {user && user.name}{" "}
              </p>
            </div>
            <div>
              <Link href="/deposit">
                <div classNameName="rounded-lg py-2 px-6 bg-orange-400 hover:bg-orange-700 border mr-10 cursor-pointer">
                  <span classNameName="font-bold ">Fund Balance</span>
                </div>
              </Link>
            </div>
            {/* end of balance */}
          </div>
          <div classNameName="grid grid-cols-3 gap-x-10 mt-5">
            <div classNameName="flex flex-col">
              <div classNameName="flex flex-col p-3 bg-white rounded-lg shadow-xl">
                <h1>Your Balance</h1>
                <span classNameName="my-5 text-4xl font-semibold flex">
                  <del classNameName="mr-1">&#8358;</del>
                  <p>
                    {user
                      ? new Intl.NumberFormat("en-IN", {
                          maximumSignificantDigits: 3,
                        }).format(user && user.balance)
                      : 0.0}
                  </p>
                </span>
                <Link href="/deposit">
                  <p classNameName="text-orange-500">Fund Balance</p>
                </Link>
              </div>

              <div classNameName="flex flex-col mt-5 p-5 bg-white rounded-lg shadow-xl">
                <div classNameName="flex justify-between">
                  <h1>Spendings</h1>
                  <p>This month</p>
                </div>
                <div classNameName="flex mt-2 justify-between">
                  <h1>Total Money Received</h1>
                  <span classNameName="flex text-green-500">
                    <del classNameName="mr-1">&#8358;</del>
                    <p>0.00</p>
                  </span>
                </div>
                <div classNameName="flex mt-2 justify-between">
                  <h1>Total Money Spent</h1>
                  <span classNameName="flex text-red-500">
                    <del classNameName="mr-1">&#8358;</del>
                    <p>0.00</p>
                  </span>
                </div>
              </div>
            </div>
            <div classNameName="col-span-2">
              <h1>Transactions</h1>
              <div classNameName="emptyTransaction"></div>
            </div>
          </div>
        </div>
      </main>
      <div id="modal-root"></div>
    </div>
  );
}
// export async function getStaticProps() {
//     // Fetch data from external API
//     let item = await localStorage.getItem('user')
//     let id = item.data.user.id;
//     let token = item.data.tokens.access.token;
//     let user = await userService.getUser(id, token);

//     // Pass data to the page via props
//     return { props: { user } };
//   }
