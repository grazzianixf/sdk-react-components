import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export interface LayoutProps {
   header?: any;
   headerName?: string;
   content: any;
   footer?: any;
   user?: any;
   logoutComponent?: any;
   menuComponent?: any;
}

export const Layout = (props: LayoutProps) => {
   return (
      <>
         <header style={{padding: "3pt"}}>
            {
               props.header
                  ? props.header
                  : <Header
                     name={props.headerName}
                     user={props.user}
                     logoutComponent={props.logoutComponent}
                     menuComponent={props.menuComponent}
                  />
            }
         </header>
         <main style={{padding: "3pt"}}>
            {props.content}
         </main>
         <footer>
            {props.footer ? props.footer : <Footer />}
         </footer>
      </>
   );
};