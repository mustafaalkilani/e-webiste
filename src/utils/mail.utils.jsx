import axios from 'axios';

export const SendEmail = async (html) => {
  try {
    const response = await axios.post('/.netlify/functions/send-mail', { html });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};