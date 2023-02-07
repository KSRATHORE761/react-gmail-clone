import React from 'react';
import './EmailRow.css';
import { IconButton } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectedMail } from './features/mailSlice';


function EmailRow({id,title,subject,description,time}) {
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const openMail =() =>{
      dispatch(selectedMail({
        id,
        title,
        subject,
        description,
        time,
      }))
      navigate("/mail")
    };
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
      <IconButton><CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon></IconButton>
      <IconButton><StarBorderOutlinedIcon></StarBorderOutlinedIcon></IconButton>
      <IconButton><LabelImportantOutlinedIcon></LabelImportantOutlinedIcon></IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
        {subject}{" "}
        <span className="emailRow_description">-{description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  )
}

export default EmailRow
