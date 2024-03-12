import connectDb from "@/middleware/db";
import Election from "@/models/Election";

const getCandidates = async (req, res) => {
  await connectDb();
  if (!req.body.slug) {
    res.json({ message: "undefined" });
    return;
  }
  if (req.body.slug) {
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
      res.json({ message: "Election not found" });
    }
  }
};

export default getCandidates;
