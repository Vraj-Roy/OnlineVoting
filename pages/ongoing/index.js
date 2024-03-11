import Navbar from "@/components/navbar";
import ElectionPost from "@/components/electionPost";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Ongoing = () => {
  const router = useRouter();
  const [data, setData] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("./login");
    } else {
    }
    loadElections();
  }, []);
  const loadElections = async () => {
    let res = await fetch(`/api/election`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let response = await res.json();
    console.log(response);
    setData(response);
    setLoader(true);
  };

  return (
    <>
      <div className="md:w-[60%] w-[90%] m-auto mt-10  rounded-md p-10 shadow-xl shadow-grey-500  font-bold text-center my-2 ">
        <div className="text-xl md:text-4xl">Ongoing Elections</div>
        <div className=" block md:flex   relative  flex-nowrap md:flex-wrap  mx-auto w-full  justify-between  m-auto">
          {loader &&
            data.E.map((ee) => {
              return (
                <ElectionPost
                  e_name={ee.election_name}
                  key={Math.random()}
                  logo={ee.logo}
                  totalCandidates={ee.votes.length}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Ongoing;
