import {Beleska} from "./beleska.js"
import {Dogadjaj} from "./dogadjaj.js"
export class Notes
{
    constructor(ime, brRedova, brKolona)
    {
        this.imeNotesa = ime;
        this.brRedova = brRedova;
        this.brKolona = brKolona;
        this.beleske = [];
        this.kontejner = null;
        this.maxBr = this.brRedova * this.brKolona;
        this.trenutno = 0;
    }

    crtajNotes(host)
    {
        if(!host)
        {
            throw new Error("Roditeljski elemenet ne postoji");
        }
        this.kontejner = document.createElement("div");
        this.kontejner.className = "kontNotes";
        host.appendChild(this.kontejner);

        this.crtajHeader(this.kontejner);
        this.crtajFormu(this.kontejner);
    }

    dodajBelesku(beleska)
    {
        this.beleske.push(beleska);
    }

    crtajHeader(host)
    {
        const h = document.createElement("h1");
        h.innerHTML = "NOTES";
        host.appendChild(h);

        const kontInfo = document.createElement("div");
        kontInfo.className = "kontInfo";
        host.appendChild(kontInfo);

        let divInfo = document.createElement("div");
        divInfo.className = "divInfo";

        //notes
        let l=document.createElement("label");
        l.className = "lab";
        l.innerHTML = "Notes: ";
        divInfo.appendChild(l);

        //ime notesa
        l = document.createElement("label");
        l.className = "infoLabela";
        l.innerHTML = this.imeNotesa;
        divInfo.appendChild(l);

        kontInfo.appendChild(divInfo);

        divInfo = document.createElement("div");
        divInfo.className = "divInfo";

        //dimenzije
        let labela = document.createElement("label");
        labela.className = "lab";
        labela.innerHTML = "Maksimalno: ";
        divInfo.appendChild(labela);


        labela = document.createElement("label");
        labela.className = "infoLabela";
        labela.innerHTML = this.maxBr;
        divInfo.appendChild(labela);
        
        labela = document.createElement("label");
        labela.className = "lab";
        labela.innerHTML = "Trenutno: ";
        divInfo.append(labela);

        labela = document.createElement("label");
        labela.classList.add("infoLabela", "trenutno");
        labela.innerHTML = this.trenutno;
        divInfo.appendChild(labela);

        kontInfo.appendChild(divInfo);
       
    }
    crtajFormu(host)
    {
        const rodKontFormaDiv = document.createElement("div");
        rodKontFormaDiv.className = "parent";
        host.appendChild(rodKontFormaDiv);

        const kontForma = document.createElement("div");
        kontForma.className = "kontForma";
        rodKontFormaDiv.appendChild(kontForma);

        const presek = document.createElement("div");
        presek.className = "presek";
        rodKontFormaDiv.append(presek);

        var l1 = document.createElement("h3");
        l1.className = "unosPodataka";
        l1.innerHTML = "UNESITE DOGAĐAJ";
        kontForma.appendChild(l1);

        l1 = document.createElement("label");
        l1.className = "labelaForma"
        l1.innerHTML = "Naslov beleške: ";
        kontForma.appendChild(l1);

        let inp = document.createElement("input");
        inp.className = "ime";
        kontForma.appendChild(inp);

        l1 = document.createElement("label");
        l1.className = "labelaForma";
        l1.innerHTML = "Opis: ";
        kontForma.appendChild(l1);

        inp = document.createElement("input");
        inp.className = "opis";
        kontForma.appendChild(inp);

        l1 = document.createElement("label");
        l1.className = "labelaForma";
        l1.innerHTML = "Mesec: ";
        kontForma.appendChild(l1);

        inp = document.createElement("input");
        inp.className = "inputMesec";
        inp.type = "number";
        inp.min = 1;
        inp.max = 12;
        kontForma.appendChild(inp);

        l1 = document.createElement("label");
        l1.className = "labelaForma";
        l1.innerHTML = "Dan: ";
        kontForma.appendChild(l1);

        inp = document.createElement("input");
        inp.className = "inputDan";
        inp.type = "number";
        inp.min = 1;
        inp.max = 31;
        kontForma.appendChild(inp);

        l1 = document.createElement("label");
        l1.className = "labelaForma";
        l1.innerHTML = "Prioritet: ";
        kontForma.appendChild(l1);

        
        let prioriteti = ["1","2","3","4","5"];
        let boje = ["LightSkyBlue ","SpringGreen","Orange","Magenta","Crimson"];//ovo treba da izbrises

        let opcija = null;
        let labela = null;
        let divRb = null;

        prioriteti.forEach((prioritet, index)=>{
            divRb = document.createElement("div");
            opcija = document.createElement("input");
            opcija.type = "radio";
            opcija.className = "radioDugme";
            opcija.name = "name";
            opcija.boja = boje[index];
            opcija.value = prioritet;

            labela = document.createElement("label");
            labela.className = "radioLabela";
            labela.innerHTML = prioritet;

            divRb.appendChild(opcija);
            divRb.appendChild(labela);
            kontForma.appendChild(divRb);
        })

        //sad pravimo 4 dugmica

        let dugmeNapravi = document.createElement("button");
        dugmeNapravi.classList.add("dugmenapravi","labelaForma");
        dugmeNapravi.innerHTML = "DODAJ BELEŠKU";
        kontForma.appendChild(dugmeNapravi);

        let dugmeAzuriraj = document.createElement("button");
        dugmeAzuriraj.classList.add("dugmeAzuriraj","labelaForma");
        dugmeAzuriraj.innerHTML = "AŽURIRAJ BELEŠKU";
        kontForma.appendChild(dugmeAzuriraj);

        let dugmeObrisi = document.createElement("button");
        dugmeObrisi.classList.add("dugmeObrisi","labelaForma");
        dugmeObrisi.innerHTML = "OBRIŠI BELEŠKU";
        kontForma.appendChild(dugmeObrisi);

        let dugmePronadji = document.createElement("button");
        dugmePronadji.classList.add("dugmePronadji","labelaForma");
        dugmePronadji.innerHTML = "PRONAĐI BELEŠKU";
        kontForma.appendChild(dugmePronadji);

        //ovde napravi event-e za dugmice

        // dugmeNapravi.addEventListener("click", this.napravi);
        dugmeNapravi.onclick=()=>
        {
            if(this.proveriPolja())
            {
                this.napravi();
            }
        }

        dugmeAzuriraj.onclick=()=>
        {
            this.azuriraj();
        }

        dugmeObrisi.onclick=()=>
        {
            this.obrisi();
        }

        dugmePronadji.onclick=()=>
        {
            this.pronadji();
        }

        this.crtajBeleske(rodKontFormaDiv);
    }
    
    
    crtajBeleske(host)
    {
        const kontBeleske = document.createElement("div");
        kontBeleske.className = "kontBeleske";
        host.appendChild(kontBeleske);

        let labela = document.createElement("label");
        labela.className = "headBeleske";
        labela.innerHTML = "BELEŠKE";
        kontBeleske.appendChild(labela);

        let red;
        let pozicija;

        for(let i = 1; i<= this.brRedova; i++)
        {
            labela = document.createElement("label");
            labela.className = "red";
            labela.innerHTML = i + ".";
            kontBeleske.appendChild(labela);

            red = document.createElement("div");
            red.className = "red";
            kontBeleske.appendChild(red);

            const dogadjaj = new Dogadjaj();
            for(let j = 1; j<= this.brKolona; j++)
            {
                pozicija = new Beleska(dogadjaj,"",""); 
                this.dodajBelesku(pozicija); //stavlja jednu belesku u niz beleske[];
                pozicija.crtajBelesku(red);
            }
        }
    }

    napravi()
    {
        let naslov = this.kontejner.querySelector(".ime"); 
        let  opis = this.kontejner.querySelector(".opis");
        let  mesec = this.kontejner.querySelector(".inputMesec");
        let dan = this.kontejner.querySelector(".inputDan");
        let prioritet = this.kontejner.querySelector(`input[name='${"name"}']:checked`);

        const dogadjaj = new Dogadjaj(naslov.value, opis.value, mesec.value, dan.value, prioritet.value);

        //poc - da li postoji ista
        if(this.trenutno<this.maxBr)
        {
            for(let i = 0; i<this.maxBr; i++)
            {
                if(this.beleske[i].vratiNaslov() == naslov.value)
                {
                    let prikaz = naslov.value;
                    naslov.style.backgroundColor = "Crimson";
                    setTimeout(function(){alert("Beleska sa istim naslovom vec postoji!");}, 200);
                    setTimeout(function(){naslov.style.backgroundColor = "whitesmoke"}, 200);
                    this.ocistiPoljaObrisi();
                    return;
                }
            }
        }
        
        //kraj - da li postoji ista




        for(let i = 0; i<this.maxBr;i++)
        {
            if(this.trenutno<this.maxBr)
            {
                if(this.beleske[i].vratiNaslov() == undefined )
                {
                    this.beleske[i].smestiBelesku(dogadjaj,dogadjaj.prioritet, dogadjaj.ime);
                    this.trenutno++;
                    this.ocistiPolja();
                    this.kontejner.querySelector(".trenutno").innerHTML=this.trenutno;
                    break;
                } 
            }
            else{

                alert("POPUNILI STE KAPACITET");
                this.ocistiPolja();
                return;
            }
        } 
        //sad bi trebalo da proverim da li postoji ISTA beleska u notesu
    }
    azuriraj()
    {
        console.log("AZURIRAJ dugme radi!");
        if(this.proveriPolja()) //ako su polja popunjena, nastavljamo dalje
        {
            let naslov = this.kontejner.querySelector(".ime"); 
            let  opis = this.kontejner.querySelector(".opis");
            let  mesec = this.kontejner.querySelector(".inputMesec");
            let dan = this.kontejner.querySelector(".inputDan");
            let prioritet = this.kontejner.querySelector(`input[name='${"name"}']:checked`);
            
            let i;
            let nadjen = false;
            for(i = 0; i<this.maxBr; i++)
            {
                if(this.beleske[i].vratiNaslov() == naslov.value)
                {
                    nadjen = true;
                    this.beleske[i].azurirajDogadjaj(opis.value, mesec.value, dan.value, prioritet.value);
                    this.ocistiPolja();
                    break;
                }
                
            }
            if(this.trenutno==0)
            {
                 alert("Beleska je prazna!");
                 this.ocistiPolja();
                 return;
            }
            if(!nadjen)
            {
                alert("Beleska sa zadatim IMENOM ne postoji!");
                this.ocistiPolja();
                 return;
            }
            
        }
    }
    obrisi()
    {

        if(this.trenutno>0)
        {
        let naziv = this.kontejner.querySelector(".ime").value;
            for(let i = 0; i < this.maxBr; i++)
            {   
                if(this.beleske[i].vratiNaslov() === naziv)
                {
                    this.beleske[i].ukloniBelesku();
                    this.trenutno--;
                    this.kontejner.querySelector(".trenutno").innerHTML = this.trenutno;
                    //this.ocistiPoljaObrisi();
                    break;
                } 
                // else
                //     {
                //     alert("Beleska sa zadatim IMENOM ne postoji na spisku!");
                //     }
                //     break; OVAMO SE NESTO BUNIO, VIDI AKO MOZES DA SKAPIRAS STO.
                // SA OVOM ELSE GRANOM NE RADI. ne znamo iz kog razloga

            }
            this.ocistiPoljaObrisi();
        }
        else{
            alert("Beleske su PRAZNE!");
            //this.ocistiPoljaObrisi();
            return;
        }

    }
    pronadji()
    {
        let naslov = this.kontejner.querySelector(".ime");
        let nadjen = false;
        if(this.trenutno<=this.maxBr)
        {
            for(let i = 0; i<this.maxBr; i++)
            {
                if(this.beleske[i].vratiNaslov() == naslov.value)
                {
                    nadjen = true;
                    this.beleske[i].pronadjiBelesku();
                    this.ocistiPoljaObrisi();
                    break;
                }
            }
            if(this.trenutno==0)
            {
                alert("Beleska je prazna!");
                this.ocistiPolja();
                return;
            }
                if(!nadjen)
                {
                    alert("Trazena beleska ne postoji!");
                    this.ocistiPolja();
                }
        }
        
    }

    proveriPolja()
    {
        let naslov;
        let opis;
        let mesec;
        let dan;
        let prioritet;

        naslov = this.kontejner.querySelector(".ime");
        opis = this.kontejner.querySelector(".opis");
        mesec = this.kontejner.querySelector(".inputMesec");
        dan = this.kontejner.querySelector(".inputDan");
        prioritet = this.kontejner.querySelector(`input[name='${"name"}']:checked`);
        
        if(naslov.value === "" || opis.value === "" || mesec.value === "" || dan.value === "" || prioritet === null )
        {
            alert("Morate popuniti SVA POLJA i cekirati PRIORITET");
            return false;
        }
        else if(parseInt(mesec.value)<1 || parseInt(mesec.value)>12 )
        {
            mesec.style.backgroundColor = "Crimson";
            setTimeout(function(){alert("Unesite validan MESEC!");}, 200);
            setTimeout(function(){mesec.style.backgroundColor = "whitesmoke"}, 200);
            return false;
        }
        else if(parseInt(dan.value)<1 || parseInt(dan.value)>31 )
        {
            dan.style.backgroundColor = "Crimson";
            setTimeout(function(){alert("Unesite validan DAN!");}, 200);
            setTimeout(function(){dan.style.backgroundColor = "whitesmoke"}, 200);
            
            return false;
        }
        else return true;
        
    }
    ocistiPolja()
    {
       this.kontejner.querySelector(".ime").value="";
       this.kontejner.querySelector(".opis").value="";;
       this.kontejner.querySelector(".inputMesec").value="";;
       this.kontejner.querySelector(".inputDan").value="";;
       this.kontejner.querySelector(`input[name='${"name"}']:checked`).checked=false;
    }
    ocistiPoljaObrisi()
    {
       this.kontejner.querySelector(".ime").value="";
       this.kontejner.querySelector(".opis").value="";;
       this.kontejner.querySelector(".inputMesec").value="";;
       this.kontejner.querySelector(".inputDan").value="";;
    }

    logujNiz()
    {
        console.log(this.beleske);
    }


    
}