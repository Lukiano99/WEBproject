import { Beleska } from "./beleska.js";
import {Notes} from "./notes.js"

// let n = new Notes("MOJ NOTES", 2,2);
// n.crtajNotes(document.body);
// let m = new Notes("Drugi notes", 3,4);
// m.crtajNotes(document.body);
// let beleska = new Beleska("ime","","");

fetch("https://localhost:5001/Notes/PreuzmiNotese").then(n => {
    n.json().then(data => {
        data.forEach(notes => {
            let Notes1 = new Notes(notes.ime_notesa, notes.broj_redova, notes.broj_kolona);
            Notes1.crtajNotes(document.body);
            
            
        });
    });
});




