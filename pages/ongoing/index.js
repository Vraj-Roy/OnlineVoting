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
    setData(response);
    setLoader(true);
  };

  return (
    <>
      <div className="md:flex block  relative gap-10 md:flex-wrap  mx-auto w-fit  justify-center md:justify-start m-auto">
        {loader &&
          data.E.map((ee) => {
            return (
              <ElectionPost
                e_name={ee.election_name}
                key={Math.random()}
                logo={ee.logo}
              />
            );
          })}
        {/* <ElectionPost e_name={data.E[0].election_name}/>  */}
      </div>
    </>
  );
};
export default Ongoing;
