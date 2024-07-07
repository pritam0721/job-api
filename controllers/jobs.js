const getAllJobs = async (req, res) => {
  res.send("geting all the jobs ");
};
const getJob = async (req, res) => {
  res.send("geting a the job ");
};
const createJob = async (req, res) => {
  res.send("creating a job ");
};
const updateJob = async (req, res) => {
  res.send("Update a job ");
};

const deletJob = async (req, res) => {
  res.send("deleting a  job ");
};

module.exports = {
  getAllJobs,
  getJob,
  updateJob,
  createJob,
  deletJob,
};
