import React from 'react';
import "./Mail.css";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className="mail">
    <div className="mail__tools">
    <div className="mail__toolsLeft">
    <IconButton onClick={() =>navigate("/")}><ArrowBackIcon></ArrowBackIcon></IconButton>
    <IconButton><MoveToInboxIcon></MoveToInboxIcon></IconButton>
    <IconButton><ErrorIcon></ErrorIcon></IconButton>
    <IconButton><DeleteIcon></DeleteIcon></IconButton>
    <IconButton><EmailIcon></EmailIcon></IconButton>
    <IconButton><WatchLaterIcon></WatchLaterIcon></IconButton>
    <IconButton><CheckCircleIcon></CheckCircleIcon></IconButton>
    <IconButton><LabelImportantIcon></LabelImportantIcon></IconButton>
    <IconButton><MoreVertIcon></MoreVertIcon></IconButton>
    </div>
    <div className="mail__toolsRight">
    <IconButton><UnfoldMoreIcon></UnfoldMoreIcon></IconButton>
    <IconButton><PrintIcon></PrintIcon></IconButton>
    <IconButton><ExitToAppIcon></ExitToAppIcon></IconButton>
    </div>
    </div>
    <div className="mail__body">
      <div className="main__bodyHeader">
        <h2>{selectedMail?.subject}</h2>
        <LabelImportantIcon className="mail__important"></LabelImportantIcon>
        <p>selectedMail?.to</p>
        <p className="mail__time">{selectedMail?.time}</p>
      </div>
      <div className="mail__message"><p>{selectedMail?.description}</p></div>
    </div>
    </div>
  );
}

export default Mail
