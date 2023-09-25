import React from "react";

export interface LayoutProps {
   children: any[];
}

export const Layout = (props: LayoutProps) => {
   return (
      <>
         <header>
            Header
         </header>
         <main>
            {...props.children}
         </main>
         <footer>
            Footer
         </footer>
      </>
   );
};