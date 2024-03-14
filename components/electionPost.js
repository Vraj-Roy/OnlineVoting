import { Button } from "@mui/material";
import { Router, useRouter } from "next/router";

const ElectionPost = ({ e_name, logo, totalCandidates }) => {
  const Router = useRouter();
  return (
    <>
      {/* <div
        className="grid grid-cols-2 w-5/12 mt-10 p-5 shadow-lg shadow-blue-600  rounded-xl cursor-pointer w-[20vw]"
        onClick={() => Router.push(`./ongoing/${e_name}`)}
      >
        <div className="w-20 h-20  border rounded-full overflow-hidden ">
          <img className="w-[100%} h-[100%]" src={logo} />
        </div>
        <div>
          <div className="text-xl ">{e_name}</div>
          <div className="text-xl ">12-2-11</div>
        </div>
      </div>
       */}

      <div className="lg:w-[45%]">
        <div
          className="grid grid-cols-2 w-full mt-10 p-5 shadow-lg shadow-gray-500  rounded-xl cursor-pointer "
          onClick={() => Router.push(`./ongoing/${e_name}`)}
        >
          <div className="w-20 h-20  border rounded-full overflow-hidden ">
            <img className="w-[100%} h-[100%]" src={logo} />
          </div>
          <div className="flex items-center">
            <div>
              <div className="text-md text-left md:text-xl ">{e_name}</div>
              <div>
                <div className="text-md text-left md:text-xl ">
                  {" "}
                  Candidates: {totalCandidates}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ElectionPost;
