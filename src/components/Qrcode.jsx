import React from "react";
import "./Qrcode.css";
import qrcodeimage from "../images/image-qr-code.png";

function Qrcode(){
  return(
    <div className="Outer">

        <div className="box">

            <div className="card">

                <div className="content-div">

                    <div className="image-div">
                        <img src={qrcodeimage} alt="QRcode"/>
                    </div>

                    <div className="title">
                        <div className="title-div-1">
                            <p className="title-p">Improve your front-end</p>
                        </div>
                        <div className="title-div-2">
                            <p className="title-p">skills by building projects</p>
                        </div>
                    </div>

                    <div className="desc">
                        <div className="disc-div-1">
                            <p className="disc-p">Scan the QR code to visit frontend</p>
                        </div>
                        <div className="disc-div-2">
                            <p className="disc-p">Mentor and take your coding skills to</p>
                        </div>
                        <div className="disc-div-3">
                            <p className="disc-p">the next level</p>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>

    </div>
  );
}

export default Qrcode;
