import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets.js";

const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  return (
    <div className="sidebar">
      <div className="Top">
        <img onClick={()=>setExtend(prev=>!prev)} src={assets.menu_icon} alt="" className="Menu" />
        <div className="New-Chat">
          <img src={assets.plus_icon} alt="" />
          {extend ? <p>New Chat</p> : null}
        </div>
        {extend ? (
          <div className="Recent-Chat">
            <p className="Recent-title">Recent</p>
            <div className="Recent-Entry">
              <img src={assets.message_icon} alt="" />
              <p>
                <span>ka babu saheb ka haal ba......</span>
              </p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="Bottom">
        <div className="bottom-item Recent-Entry">
          <img src={assets.question_icon} alt="" />
          {extend?<p>Help..?</p>:null}
        </div>

        <div className="bottom-item Recent-Entry">
          <img src={assets.history_icon} alt="" />
          {extend?<p>Your Activity..</p>:null}
        </div>

        <div className="bottom-item Recent-Entry">
          <img src={assets.setting_icon} alt="" />
          {extend?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
