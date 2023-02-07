import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage, openSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from 'firebase/compat/app';

function SendMail() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = (formData) =>{
    console.log(formData);
    db.collection('emails').add({
      to:formData?.to,
      subject:formData?.subject,
      message:formData?.message,
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close"
        onClick={()=>dispatch(closeSendMessage())}></CloseIcon>
      </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="to" type="email" placeholder="To" {...register("to", {
            required: "Required",
          })}></input>
            {errors.to && <p className="sendMail__error">To is Required!</p>}
            <input name="subject" type="text" placeholder="Subject"  {...register("subject", {
            required: "Required",
          })}></input>
            {errors.subject && <p className="sendMail__error">Subject is Required!</p>}
            <textarea name="message" type="textarea" placeholder="Message..." className="sendMail__message"  {...register("message", {
            required: "Required",
          })}></textarea>
            {errors.message && <p className="sendMail__error">Message is Required!</p>}
            <div className="sendMail__options">
                <Button className="sendMail__send"
                variant="contained"
                type="submit"
                color="primary"
                >Send</Button>
            </div>
        </form>


    </div>
  )
}

export default SendMail
