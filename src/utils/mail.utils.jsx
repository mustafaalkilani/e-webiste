import axios from 'axios';

export const SendEmail = async ({html}) => {
  try {
    const response = await axios.post('/send-email', { html });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};