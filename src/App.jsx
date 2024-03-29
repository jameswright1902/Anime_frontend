import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_URL); // Replace with your backend endpoint URL
    console.log(response.data); // Do something with the response data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
