import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {useRouter} from 'next/router'

const Modal = ({ show, onClose, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const router = useRouter()

  useEffect(() => {
    setIsBrowser(true);
  }, []);
   
  const verifyKyc = (e) =>{
      e.preventDefault();
      router.push('/verify');
      onClose();
  }
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="absolute top-0 left-0 w-full h-full overflow-auto flex justify-center items-top bg-slate-100">
      <div className="bg-white w-[450px] h-[285px] rounded-lg p-1 mt-20">
        <div className="flex justify-end text-2xl mr-2">
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        {title && <h1 className="text-center font-semibold text-xl ">{title}</h1>}
        <div className="text-center text-sm px-2 font-medium text-gray-600 ">
             <p className="pt-2  ">
          Hello! Thank you again for choosing Knight-wallet.{" "}
        </p>
        <p className="my-2 ">
          In order to get started with sending and receiving money, You will
          need to verify your account.
        </p>

        <p className="">
          Verifying your account helps us ensure that your identity and money
          are kept safe and secure.
        </p>
</div>
        <div onClick={verifyKyc} className="w-full bg-purple-500 rounded-lg hover:bg-purple-700 flex justify-center mt-12 cursor-pointer">
          <span className="py-2 font-medium">Continue</span>
        </div>
        
       
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
