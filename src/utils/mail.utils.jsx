import { useContext } from 'react';
import { MailFormContext } from '../context/mail-form.context';
import axios from 'axios';

export const SendEmail = async () => {
  const {inputFiledsValues} = useContext(MailFormContext);
  console.log(inputFiledsValues);

  const html = `Full Name: ${inputFiledsValues.firstName} ${inputFiledsValues.lastName}
  Email: ${inputFiledsValues.email}
  Phone: ${inputFiledsValues.phone}
  Message: ${inputFiledsValues.message}`
  try {
    const response = await axios.post('/send-email', { html });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};