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
   loginComponent?: any;
   menuComponent?: any;
}

export const Layout = (props: LayoutProps) => {

   const { header, headerName, user, loginComponent, logoutComponent, menuComponent, content, card, footer} = props;

   return (
      <>
         <header>
            {
               header
               ||
               <Header
                  name={headerName}
                  user={user}
                  loginComponent={loginComponent}
                  logoutComponent={logoutComponent}
               />
            }
            {
               menuComponent
            }
         </header>
         <main>
            <div className="leftcolumn">
               <div className="content">
                  {content}
               </div>
            </div>
            <div className="rightcolumn">
               <div className="card">
                  {card}
               </div>
            </div>
         </main>
         <footer>
            {
               footer
               ||
               <Footer />
            }
         </footer>
      </>
   );
};