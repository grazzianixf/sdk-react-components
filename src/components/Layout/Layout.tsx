import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export interface LayoutProps {
   header: any;
   content: any;
   footer: any;
   user: any;
   logoutComponent: any;
   menuComponent: any;
}

export const Layout = (props: LayoutProps) => {
   return (
      <>
         <header>
            {props.header ? props.header : <Header user={props.user} logoutComponent={props.logoutComponent} menuComponent={props.menuComponent} />}
         </header>
         <main>
            {props.content}
         </main>
         <footer>
            {props.footer ? props.footer : <Footer />}
         </footer>
      </>
   );
};