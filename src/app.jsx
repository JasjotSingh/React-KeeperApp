import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import notes from "./data/notes";

function createNote( note){
    return(
        <Note 
            key = {note.key}
            title = {note.title}
            description = {note.content}
        />
    );
}

function app(){
    return(
        <div>
            <Header />
            {notes.map(createNote)}
            <Footer />
        </div>
        
    );
}

export default app;