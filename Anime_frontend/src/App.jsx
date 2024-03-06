import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000'); // Replace with your backend endpoint URL
    console.log(response.data); // Do something with the response data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
