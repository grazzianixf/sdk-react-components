import React from "react";
import { Button, User } from "..";
import "./Header.css";

export interface HeaderProps {
   name?: string | null;
   user?: any;
   logoutComponent?: any;
   loginComponent?: any;
}

export const Header = (props: HeaderProps) => {

   const { user, name, logoutComponent, loginComponent } = props;

   return (
      // <div style={{ display: "flex", flexDirection: "column" }} >
      <div className="header" >
         <h1>
            {name}
         </h1>
         <div>
            <User uid={user?.uid} email={user?.email} name={user?.name} />
            {
               !!user ? logoutComponent : loginComponent
            }
         </div>
      </div>
   )
}