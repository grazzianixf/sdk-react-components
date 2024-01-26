import React from "react";
import { User } from "..";

export interface HeaderProps {
   name?: string;
   user?: any;
   logoutComponent?: any;
   menuComponent?: any;
}

export const Header = (props: HeaderProps) => {
   return <div>
      Header: {props.name}
      <br />
      <User uid={props.user?.uid} email={props.user?.email} name={props.user?.name} />
      {props.logoutComponent}
      {props.menuComponent}
   </div>
}