import React from 'react';
import "./team";
import "./Team.css";
import {FaFacebookF, FaInstagram,FaTwitter} from "react-icons/fa";
export default function TeamMember(props){
    return <section>
    
        <div className='TeamMember'>
            <div className='MemberImage'>
                <img  src={props.image} alt="memberImage"/>
            </div>
            <div className='TeamContent'>
            <div className='MemberTitle'>
                <h3>{props.name}</h3>
                <p>{props.title}</p>
            </div>
            <div className='MemberLink'>
                <div href='' className='Icon facebook'><FaFacebookF /></div>
                <div href='' className='Icon instagram'><FaInstagram /></div>
                <div href='' className='Icon twitter'><FaTwitter /></div>
            </div>
            </div>
        </div>
    </section>
}