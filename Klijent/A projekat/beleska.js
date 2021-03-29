import {Dogadjaj} from "./dogadjaj.js"

export class Beleska
{
    constructor(dogadjaj, prioritet, naslov)
    {
        //mozda ne mora da ima naslov, videces kasnije :)

        this.dogadjaj = dogadjaj;
        this.prioritet = prioritet;
        this.naslov = naslov;
        this.miniKontejner = null;
    }

    azurirajDogadjaj(opis, mesec, dan, prioritet)
    {
        this.dogadjaj.opis = opis;
        this.dogadjaj.mesec = mesec;
        this.dogadjaj.dan = dan;
        this.dogadjaj.prioritet = prioritet;
        
        //graficka izmena:

        this.miniKontejner.innerHTML = "✔️";
        this.miniKontejner.style.backgroundColor = "#c9f529";
        this.miniKontejner.style.border = "8px solid #c9f529";
        let div = this.miniKontejner;
        let bojica = this.boja();
        setTimeout(function(){div.innerHTML = ".📝";},1000);   //tackica za indikaciju da je azurirana :)
        setTimeout(function(){div.style.backgroundColor = bojica ;},1000);
        setTimeout(function(){div.style.border = "5px solid rgb(42, 49, 58)";},1000);




    }
    prikaziInfo()
    {
        let meseci = [
            "januar",
            "februar",
            "mart",
            "april",
            "maj",
            "jun",
            "jul",
            "avgust",
            "septembar",
            "oktobar",
            "novembar",
            "decembar"
        ]
        let mojMesec = meseci[this.dogadjaj.mesec-1];

        let vaznost = 
        [
            "Kad stignes 😊",
            "Moze da saceka 😁",
            "Polako kreni s ovim 🙄",
            "Pozuri 🤢",
            "HITNO❗❗❗"
        ]
        let hitnost = vaznost[this.dogadjaj.prioritet-1];

        let string = `❗INFORMACIJA O DOGADJAJU❗\n
        👉IME DOGAĐAJA: ${this.dogadjaj.ime}\n
        👉OPIS DOGAĐAJA: ${this.dogadjaj.opis}\n
        👉DATUM: ${this.dogadjaj.dan}. ${mojMesec}\n
        👉PRIORITET: ${hitnost}\n`;
        //napravi switch-case za mesece
        return string;
    }
    boja()
    {
        let boje = ["LightSkyBlue ","SpringGreen","Orange","Magenta","Crimson"];
        let roditelj = this.miniKontejner.parentElement.parentElement.parentElement;
       // let rBr = roditelj.querySelector(`input[name='${"name"}']:checked`).value;
        let  rBr = parseInt(this.dogadjaj.prioritet); 
        rBr--;
        let boja;

        boja = boje[rBr];

        return boja;
    }

    crtajBelesku(host)
    {
        this.miniKontejner = document.createElement("div");
        this.miniKontejner.onclick=()=>{
            if(this.dogadjaj.ime!=undefined)
            {
                alert(this.prikaziInfo());
            }
            else 
            {
                alert ("OVA BELEŠKA JE PRAZNA!");
            }
        }
        

        this.miniKontejner.className = "beleska";
        this.miniKontejner.innerHTML = "❌";
        this.miniKontejner.style.backgroundColor = "white"; //pazi na ovaj parentElement, moras da uhvatis samo iz ovog notesa!
        this.miniKontejner.style.opacity = 0.7;
        host.appendChild(this.miniKontejner);
    }

    smestiBelesku(dogadjaj, prioritet, naslov)
    {   
        this.dogadjaj=dogadjaj;
        this.prioritet=prioritet;
        this.naslov=naslov;

        this.miniKontejner.innerHTML = "📝";
        this.miniKontejner.style.opacity = 1;
        this.miniKontejner.style.backgroundColor = this.boja();
    }

    ukloniBelesku()
    {
        this.dogadjaj.ime = undefined;
        this.dogadjaj.opis = undefined;
        this.dogadjaj.mesec = undefined;
        this.dogadjaj.dan = undefined;
        this.dogadjaj.prioritet = null;

        this.miniKontejner.innerHTML = "❌";
        this.miniKontejner.style.backgroundColor = "white";
        this.miniKontejner.style.opacity = 0.7;

    }

    pronadjiBelesku()
    {
      // alert("Trazena beleska ce biti STIKLIRANA ✔️");
        this.miniKontejner.innerHTML = "🤚";
        this.miniKontejner.style.backgroundColor = "#2aeb3a";
        this.miniKontejner.style.border = "10px solid Springgreen";
        let div = this.miniKontejner;
        let bojica = this.boja();
        setTimeout(function(){div.innerHTML = "📝";},1000);   
        setTimeout(function(){div.style.backgroundColor = bojica ;},1000);
        setTimeout(function(){div.style.border = "5px solid rgb(42, 49, 58)";},1000);   

    }

    vratiDogadjaj()
    {
        return this.dogadjaj;
    }
    vratiPrioritet()
    {
        return this.dogadjaj.prioritet;
    }
    vratiNaslov()
    {
        return this.dogadjaj.ime;// ovo si izmenio!!!, probaj, pa vidi, bilo je this.dogadjaj.ime
    }
    vratiMesec()
    {
        return this.dogadjaj.mesec;
    }
    vratiDan()
    {
        return this.dogadjaj.dan;
    }
    vratiOpis()
    {
        return this.dogadjaj.opis;
    }

}