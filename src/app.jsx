import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import notes from "./data/notes";

function app(){
    return(
        <div>
            <Header />
            {notes.map(
                (note)=>{
                    return(
                        <Note 
                            title = {note.title}
                            description = {note.content}
                        />
                    );
                }
            )}
            <Footer />
        </div>
        
    );
}

export default app;