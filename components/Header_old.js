import React, { useState } from "react";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine,RiSecurePaymentLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { GrTrophy } from "react-icons/gr";
import {MdQuiz,MdOutlineLeaderboard} from "react-icons/md"
import {CgProfile} from "react-icons/cg";
import Link from 'next/link'

import "react-pro-sidebar/dist/css/styles.css";

const Header = (props) => {
  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    setMenuCollapse((prevValue) => !prevValue);
  };

  return (
    <>
      
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              <p>{menuCollapse ? <MdQuiz size={30}/> : "Quizzly Menu"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
         
          <Menu iconShape="square">
              <MenuItem style={{marginTop:"50px"}} active={props.active === 1 ? true : false} icon={<FiHome size={25}/>}>
                <Link href="/dashboard">Dashboard</Link>
              </MenuItem>
              <MenuItem style={{marginTop:"50px"}} active={props.active === 2 ? true : false}icon={<MdOutlineLeaderboard size={25} />}>
                <Link href="/leaderboard">Leaderboard</Link></MenuItem>
              <MenuItem style={{marginTop:"50px"}}  active={props.active === 3 ? true : false} icon={<CgProfile size={25} />}>
                <Link href="/profile">Profile</Link></MenuItem>
              <MenuItem style={{marginTop:"50px"}} active={props.active === 4 ? true : false} icon={<GrTrophy size={25} />}><Link href="/quizzly">Quizzly</Link></MenuItem>
              <MenuItem style={{marginTop:"50px"}} icon={<BiCog size={25} />}><Link href="/settings">Settings</Link></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
          <Menu iconShape="square">
              <MenuItem icon={<FiLogOut size={25} />}><Link href="/logout">Logout</Link></MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
