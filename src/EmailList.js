import { CheckBox, LocalOffer } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useEffect,useState } from 'react';
import './EmailList.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RedoIcon from '@mui/icons-material/Redo';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from './Section';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {
  const [emails,setEmails] = useState([]);
  useEffect(()=>{
    db.collection('emails')
    .orderBy('timestamp','desc')
    .onSnapshot((snapshot) => 
      setEmails(
        snapshot.docs.map((doc) =>({
          id:doc.id,
          data:doc.data(),
    }))))
  },[])
  return (
    <div className="emailList">
      <div className="emailList__settings">
      <div className="emailList_setingsLeft">
      <IconButton><CheckBoxOutlineBlankIcon/></IconButton>
          <IconButton><ArrowDropDownIcon></ArrowDropDownIcon></IconButton>
          <IconButton><RedoIcon></RedoIcon></IconButton>
          <IconButton><MoreVertIcon></MoreVertIcon></IconButton>
        
      </div>
      <div className="emailList_setingsRight">
      <IconButton><ChevronLeftIcon></ChevronLeftIcon></IconButton>
      <IconButton><ChevronRightIcon></ChevronRightIcon></IconButton>
      <IconButton><KeyboardIcon></KeyboardIcon></IconButton>
      <IconButton><SettingsIcon></SettingsIcon></IconButton>
      </div>
      </div>
      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected></Section>
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8"></Section>
        <Section Icon={LocalOfferIcon} title="Promotions" color="green"></Section>
      </div>
      <div className="emailList__list">
      {emails.map(({id,data : {to,subject,message,timestamp}}) =>(
        <EmailRow
          id={id}
          key={id}
          title={to}
          subject={subject}
          description={message}
          time={new Date(timestamp?.seconds * 1000).toUTCString()}
        />
      ))}
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is a test" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is Dope" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is a test" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is Dope" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is a test" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is Dope" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is a test" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is Dope" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is a test" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is Dope" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is a test" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is Dope" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is a test" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is Dope" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is a test" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is Dope" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is a test" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is Dope" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is a test" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is Dope" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is a test" time="10min"></EmailRow>
        <EmailRow title="Twitch" subject="Hey fellow developer!!!"
        description="This is Dope" time="10min"></EmailRow>
      </div>
    </div>
  )
}

export default EmailList
