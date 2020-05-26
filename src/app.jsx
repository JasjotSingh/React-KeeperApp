import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";

function app(){
    return(
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
        
    );
}

export default app;