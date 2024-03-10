import connectDb from "@/middleware/db";
import Election from "@/models/Election";

const Elections = async (req, res) => {
  await connectDb();
  let E = await Election.find();
  res.json({ success: true, E });
};
export default Elections;
