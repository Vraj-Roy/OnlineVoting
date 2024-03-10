import connectDb from "@/middleware/db";
import Election from "@/models/Election";

const getCandidates = async (req, res) => {
  await connectDb();
  let E = await Election.findOne({ election_name: req.body.slug });

  if (E) {
    // Check if E is not null
    const calculatePercentageArray = async (values) => {
      const sum = values.reduce((acc, curr) => acc + curr, 0);
      const percentages = values.map((value) => (value / sum) * 100);
      return percentages;
    };

    const percentages = await calculatePercentageArray(E.votes); // Await the result of calculatePercentageArray
    res.json({ can: E.candidates, votes: percentages });
  } else {
    res.status(404).json({ message: "Election not found" });
  }
};

export default getCandidates;
