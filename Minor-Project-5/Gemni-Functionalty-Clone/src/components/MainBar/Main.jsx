import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets';
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main_container">
        <div className="greet">
          <p>
            <span>Hello, Agents.LLm's</span>
          </p>
          <p>How Can I assist you today..?</p>
        </div>

        <div className="Cards">
          <div className="card">
            <p>suggest beautifull place to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Sumarize a Content with'n a few Second's.</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Hey there wlc'm to our Upcoming Event on Gemini..</p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Improving the Readbility of the following content</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search_box">
            <input type="text" placeholder='Enter any type of Prompt Here....👍' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
              </div>
          </div>
          <p className="bottom-info">
            <span>👋</span> Gemini may display inaccurate info,including about people ,so double-check its responses. your privacy Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
