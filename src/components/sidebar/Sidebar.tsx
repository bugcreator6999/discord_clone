import React from "react";
import "./Sidebar.scss";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";

import SidebarChannel from "./SidebarChannel";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>DiscodeClone</h3>
          <ExpandMoreIcon />
        </div>

        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className="sidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src="./photo.jpg" alt="" />
              <div className="accountName">
                <h4>HideCode</h4>
                <span>#6999</span>
              </div>
            </div>

            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
