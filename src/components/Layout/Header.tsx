import React from "react";
import { User } from "..";

export interface HeaderProps {
   name?: string | null;
   user?: any;
   logoutComponent?: any;
   menuComponent?: any;
}

export const Header = (props: HeaderProps) => {
   return (
      <div style={{ display: "flex", flexDirection: "column" }} >
         <span>
            {props.name}
         </span>
         <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <User uid={props.user?.uid} email={props.user?.email} name={props.user?.name} />
            {props.logoutComponent}
         </div>
         {props.menuComponent}
      </div>
   )
}