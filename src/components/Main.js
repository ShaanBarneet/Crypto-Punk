import React from "react";
import { useState, useEffect } from "react";
import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = ({punkListData, selectedPunk}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0]);
    

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk]);
    }, [selectedPunk]);

  return (
    <div className="Main">
        <div className="MainContent">
            <div className="punkHighlight">
                <div className="punkContainer">
                <img
                    className="selectedPunk"
                    src={activePunk.image_original_url}
                    alt=""
                />
                </div>
            </div>
            <div className="punkDetails">
                <div className="title">
                {activePunk.name}
                <span className="itemNumber">•#{activePunk.token_id}</span>
                </div>
                <div className="owner">
                <div className="ownerImageContainer">
                    <img src={activePunk.owner.profile_img_url} alt="" />
                </div>
                <div className="ownerDetails">
                    <div className="ownerNameAndHandle">
                    <div>{activePunk.owner.address}</div>
                    <div>@shaanbarneet06</div>
                    </div>
                    <div className="ownerLink">
                    <img src={instagramLogo} alt="" />
                    </div>
                    <div className="ownerLink">
                    <img src={twitterLogo} alt="" />
                    </div>
                    <div className="ownerLink">
                    <img src={moreIcon} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Main;
