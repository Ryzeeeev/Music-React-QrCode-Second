import React from 'react';
import {QRCodeSVG} from 'qrcode.react';

    const Song = (props) => {
    const myStyle={
        backgroundImage:"url(" + props.image +")",
    }; 

    return (

        <div className="ryze">
            <div className='ryze-song-all-button-with-play-style-rt'>

            <div className="d-flex flex-row bd-highlight mb-3">
                
                <div className="p-5 bd-highlight">

                <div className="ryze-song" key={props.id}  style = {myStyle} >


                            <div className="ryze-infos">
                                <h1>{props.nom}</h1>    
                                <h2>{props.description}</h2>
                            </div>                               

                            <QRCodeSVG className="ryzetest" value={props.link} />,

                                                
                        </div>

                    </div>

                </div> 

            </div>


        </div>
         




            
    );
};

export default Song;