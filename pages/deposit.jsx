import { useRef } from "react";
import {userService} from '../services/user.service';
import { useRouter } from "next/router";


const deposit = () => {
  const amountRef = useRef("");
  const passwordRef = useRef("");
  const router = useRouter()
 
  
  async function handleSubmit(e) {
    var amount = amountRef.current.value;
    var password = passwordRef.current.value;
    var id = userService.userValue.data.user.id;
   
   
    e.preventDefault();

      try {
          const res = await userService.fundBalance(amount, password, id );
          router.push({
            pathname: "/",
          });
      } catch (error) {
          console.log(error);
      }
  }

  return (
    <div className="flex justify-center p-24 bg-white mx-20 my-5 shadow-2xl rounded-lg">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex flex-col border-b border-teal-500 py-2">
            <div className="text-sm font-bold text-gray-700 tracking-wide">Enter amount to deposit</div>
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="number"
            placeholder="0.00"
            ref={amountRef}
          />
          
        </div>
        <div className="flex flex-col border-b border-teal-500 py-2">
        <div className="text-sm font-bold text-gray-700 tracking-wide">Enter password</div>
          <input
          ref={passwordRef}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="password"
            placeholder="***"
          />
        </div>
        <div className="flex items-center justify-center rounded-lg bg-orange-500 mt-2">
            <button className=" w-full py-2 border  shadow-sm cursor-pointer hover:bg-orange-600" type="submit">
                Continue
            </button>
        </div>
      </form>
    </div>
  );
};

export default deposit;
