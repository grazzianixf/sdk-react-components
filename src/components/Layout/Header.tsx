import React from "react";
import { User } from "..";
import "./Header.css";

export interface HeaderProps {
   name?: string | null;
   user?: any;
   logoutComponent?: any;
}

export const Header = (props: HeaderProps) => {
   return (
      // <div style={{ display: "flex", flexDirection: "column" }} >
      <div className="header" >
         <h1>
            {props.name}
         </h1>
         <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <User uid={props.user?.uid} email={props.user?.email} name={props.user?.name} />
            {props.logoutComponent}
         </div>
      </div>
   )
}