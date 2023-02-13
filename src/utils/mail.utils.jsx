import { useContext } from 'react';
import { MailFormContext } from '../context/mail-form.context';
import { MailServer } from '../../netlify/functions/send-mail';


export const SendMail = async() => {
  const {inputFiledsValues} = useContext(MailFormContext);
  console.log(inputFiledsValues);
  MailServer(inputFiledsValues);
};