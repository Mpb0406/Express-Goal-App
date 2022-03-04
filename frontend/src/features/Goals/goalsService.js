import axios from "axios";

const API_URL = "/api/goals/";

// Create New Goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, goalData, config);

  return response.data;
};

const goalService = {
  ceateGoal,
};

export default goalsService;