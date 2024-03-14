import ElectionPost from "@/components/electionPost";

export async function getStaticProps() {
  const res = await fetch(process.env.URL + "/api/election");
  const data = await res.json();
  return { props: { data } };
}

const Ongoing = ({ data }) => {
  return (
    <>
      <div className="md:w-[60%] w-[90%] m-auto mt-10  rounded-md p-10 shadow-xl shadow-grey-500  font-bold text-center my-2 ">
        <div className="text-xl md:text-4xl">Ongoing Elections</div>
        <div className=" block md:flex   relative  flex-nowrap md:flex-wrap  mx-auto w-full  justify-between  m-auto">
          {data &&
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
