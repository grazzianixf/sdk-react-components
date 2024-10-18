import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./Layout.css";

export interface LayoutProps {
   header?: any;
   headerName?: string;
   content: any;
   card?: any;
   footer?: any;
   user?: any;
   logoutComponent?: any;
   menuComponent?: any;
}

export const Layout = (props: LayoutProps) => {
   return (
      <>
         <header>
            {
               props.header
               ||
               <Header
                  name={props.headerName}
                  user={props.user}
                  logoutComponent={props.logoutComponent}
               />
            }
            {
               props.menuComponent
            }
         </header>
         <main>
            <div className="leftcolumn">
               <div className="content">
                  {props.content}
               </div>
            </div>
            <div className="rightcolumn">
               <div className="card">
                  {props.card}
               </div>
            </div>
         </main>
         <footer>
            {
               props.footer
               ||
               <Footer />
            }
         </footer>
      </>
   );
};