import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const createNew = async (content) => {  
  const object = { content, votes: 0 };
  const res = await axios.post(baseUrl, object);
  return res.data;
};

const addVote = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`);
  const res = await axios.put(`${baseUrl}/${id}`, { 
    ...data, 
    votes: data.votes + 1 
  });
  return res.data;
}
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { 
  getAll, 
  createNew,
  addVote
};