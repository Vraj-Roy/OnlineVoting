import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { ResultLoader } from "@/content-loaders/Loader";

const Results = () => {
  const router = useRouter();
  const [data, setData] = useState(false);
  const [m, setM] = useState(false);
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState(0);
  const { Slug } = router.query;

  const loadResults = async () => {
    try {
      let res = await fetch(`/api/getResults`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug: Slug }),
      });
      let response = await res.json();
      const newData = {
        can: response.can,
        votes: response.votes,
      };
      console.log(response);
      setData(newData);
      setLoader(true);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };
  useEffect(() => {
    if (Slug) {
      loadResults();
    }
  }, [Slug]);
  return (
    <>
      {/* {!data && <></>} */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
        <div className="max-w-4xl w-full m-auto mt-10  rounded-md p-5 shadow-xl shadow-grey-500   bg-white s  overflow-hidden  justify-center ">
          <div className="text-4xl font-bold text-center my-2 ">Results</div>
          {!data &&
            [1, 2, 3, 4].map((p) => (
              <ResultLoader
                key={p}
                className="rounded-md  my-3 border-2 p-2  "
              />
            ))}

          {data &&
            data.can &&
            data.can.map((candidate, index) => (
              <div className="rounded-md  my-3 border-2 p-2" key={index}>
                <p className="text-lg font-bold">{candidate}</p>
                <p className="text-lg font-bold">{}</p>
                <div
                  className={`bg-blue-500 h-4 rounded-full `}
                  style={{ width: Math.floor(data.votes[index]) + "%" }}
                ></div>
                <div>{Math.floor(data.votes[index]) + " %"} </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Results;
