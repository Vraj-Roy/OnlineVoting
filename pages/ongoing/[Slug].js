import Navbar from "@/components/navbar";
import VotePost from "@/components/votePost";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Candidates = () => {
  const [data, setData] = useState();
  // const [token, setToken] = useState("");
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  let [i, setI] = useState(-1);

  const { Slug } = router.query;
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("./login");
    } else {
    }
  }, []);

  const loadCandidates = async () => {
    const token = localStorage.getItem("token");
    let res = await fetch(`/api/getCandidates`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug: Slug, token }),
    });
    let response = await res.json();
    if (response.unique == false) {
      router.push(`../results/${Slug}`);
    }
    setData(response);
    console.log(response);
    setLoader(true);
  };

  const onVote = async (i) => {
    const token = localStorage.getItem("token");
    let res = await fetch(`/api/vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug: Slug, token, i }),
    });
    let response = await res.json();
    if (response.success) {
      router.push(`../results/${Slug}`);
    }
    setLoader(true);
  };

  useEffect(() => {
    loadCandidates();
  }, [Slug]);

  return (
    <>
      <>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-5 overflow-hidden  justify-center ">
            <div className=" text-2xl font-medium w-fit m-auto mb-4">
              Candidates
            </div>

            {data &&
              data.unique &&
              data.can.map((c, index) => {
                return (
                  <>
                    <div
                      className={
                        " px-4 py-2  border-2 border-gray-200 rounded-xl my-2 cursor-pointer " +
                        (index == i
                          ? "border-green-500 border-2 shadow-md shadow-green-600"
                          : "")
                      }
                      onClick={() => {
                        setI(index);
                      }}
                    >
                      <div className="flex items-center">
                        <img
                          className="h-12 w-12 rounded-full object-cover"
                          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Profile Picture"
                        />
                        <div className="ml-4">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {c}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            {i !== -1 ? (
              <button
                onClick={() => {
                  onVote(i);
                }}
                type="button"
                className=" m-auto h-[40px]  w-[100%] mt-4 focus:outline-none text-white bg-blue-600  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-blue-900    m-auto"
              >
                Vote
              </button>
            ) : (
              <button
                type="button"
                className=" m-auto h-[40px]  w-[100%] mt-4 focus:outline-none text-white bg-gray-400   cursor-not-allowed  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-gray-900    m-auto"
              >
                Vote
              </button>
            )}
          </div>
        </div>
      </>
    </>
  );
};
export default Candidates;
