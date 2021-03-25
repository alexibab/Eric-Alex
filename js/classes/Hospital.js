"use strict"

class Hospital{
  constructor(nom, maximPacients, maximMetges) {
    this.nomHospital = nom;
    this.maximPacients = maximPacients;
    this.pacientsIngressats = [];
  }
  
    ingressarPacient(pacient) {
      if (pacient != null && (this.pacientsIngressats.length < this.maximPacients))
        this.pacientsIngressats.push(pacient);
    }

    donarDaltaPacient(llitPacient) {
      alert("S'ha donat d'alta el/la pacient " + this.pacientsIngressats[llitPacient].nom + " " + this.pacientsIngressats[llitPacient].cognom + " amb NIF: " + this.pacientsIngressats[llitPacient].nif +" de la malaltia " + this.pacientsIngressats[llitPacient].malaltia);
      this.pacientsIngressats[llitPacient] = {};
    }

    morirPacient(llitPacient) {
      alert("Encara que s'ha fet tot el que s'ha pogut, el/la pacient " + this.pacientsIngressats[llitPacient].nom + " " + this.pacientsIngressats[llitPacient].cognom + " amb NIF: " + this.pacientsIngressats[llitPacient].nif +" ha mort de la malaltia " + this.pacientsIngressats[llitPacient].malaltia);
      this.pacientsIngressats[llitPacient] = {};
    }

}
