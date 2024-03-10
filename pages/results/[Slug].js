import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

const Results = () => {
  const router = useRouter();
  const [data, setData] = useState(false);
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
      {data && data.can ? (
        <div className="w-[60%] m-auto mt-10  rounded-md p-5 shadow-xl shadow-grey-500">
          <div className="text-4xl font-bold text-center my-2 ">Results</div>

          {data.can.map((candidate, index) => (
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
      ) : (
        <div className="w-[60%] m-auto mt-10  rounded-md p-5 shadow-xl shadow-grey-500 text-4xl font-bold text-center my-2 ">
          No Results
        </div>
      )}
    </>
  );
};

export default Results;
