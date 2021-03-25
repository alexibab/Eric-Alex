'use strict'
const eleID_divEspaiModal = document.getElementById("divEspaiModal");

const eleID_barra_missatges = document.getElementById("divBarraMissatges");
const eleID_text_missatge = document.getElementById("h3BarraMissatges");

const eleID_divPresentacio = document.getElementById("divPresentacio");
const eleID_divHospital = document.getElementById("divHospital");
const eleID_divPacient = document.getElementById("divPacient");
const eleID_divTractament = document.getElementById("divTractament");

const eleID_divControls = document.getElementById("divControls");

const eleID_divcanvis = document.getElementById("divCanvisVisuals");

const eleID_btnGestHospitals = document.getElementById("btnGestHospitals");
const eleID_btnGestPacients = document.getElementById("btnGestPacients");
const eleID_btnGestMalalties = document.getElementById("btnGestMalalties");
const eleID_btnGestMetges = document.getElementById("btnGestMetges");


const eleID_btnGestAplicacio = document.getElementById("btnGestAplicacio");

const eleID_h2ResutltatFormControls = document.getElementById("h2ResutltatFormControls");

function mostraBotons() {
      eleID_btnGestHospitals.disabled = false;
      eleID_btnGestPacients.disabled = false;
      eleID_btnGestMalalties.disabled = false;
      eleID_btnGestMetges.disabled = false;
      eleID_btnGestAplicacio.disabled = false;


      $(eleID_btnGestHospitals).removeClass('btn-dark');
      $(eleID_btnGestHospitals).addClass('btn-primary');

      $(eleID_btnGestPacients).removeClass('btn-dark');
      $(eleID_btnGestPacients).addClass('btn-primary');

      $(eleID_btnGestMalalties).removeClass('btn-dark');
      $(eleID_btnGestMalalties).addClass('btn-primary');

      $(eleID_btnGestMetges).removeClass('btn-dark');
      $(eleID_btnGestMetges).addClass('btn-primary');

      $(eleID_btnGestAplicacio).removeClass('btn-dark');
      $(eleID_btnGestAplicacio).addClass('btn-primary');
}
function amagaBotons() {
      eleID_btnGestHospitals.disabled = true;
      eleID_btnGestPacients.disabled = true;
      eleID_btnGestMalalties.disabled = true;
      eleID_btnGestMetges.disabled = true;
      eleID_btnGestAplicacio.disabled = true;


      $(eleID_btnGestHospitals).removeClass('btn-primary');
      $(eleID_btnGestHospitals).addClass('btn-dark');

      $(eleID_btnGestPacients).removeClass('btn-primary');
      $(eleID_btnGestPacients).addClass('btn-dark');

      $(eleID_btnGestMalalties).removeClass('btn-primary');
      $(eleID_btnGestMalalties).addClass('btn-dark');

      $(eleID_btnGestMetges).removeClass('btn-primary');
      $(eleID_btnGestMetges).addClass('btn-dark');

      $(eleID_btnGestAplicacio).removeClass('btn-primary');
      $(eleID_btnGestAplicacio).addClass('btn-dark');
}
function conteClass(element, nomClass) {
      return (' ' + element.classList + ' ').indexOf(' ' + nomClass + ' ') > -1;
}
function mostraGestioHospital(objecte) {
      document.getElementById('tancaDivHospital').onclick = function tanca() {
            eleID_divPresentacio.classList.toggle("d-none");
            eleID_divHospital.classList.toggle("d-none");
            mostraBotons();
      }
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divHospital.classList.toggle("d-none");
      amagaBotons();
}

function ocultaGestioHospital(objecteRebut) {
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divHospital.classList.toggle("d-none");
      mostraBotons();
}

function mostraGestioPacients(objecteRebut) {
      if (!conteClass(eleID_divPacient, "d-none")) {
            afegirClass(eleID_divPacient, "d-none");
      }
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divPacient.classList.toggle("d-none");
      amagaBotons();
}

function ocultaGestioPacients(objecteRebut) {
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divPacient.classList.toggle("d-none");
      mostraBotons();
}

var hospital;
function crearHospital() {
      var nom = document.getElementById("inputNomHospital").value.toString();
      var maximPacients = parseInt(document.getElementById("maximPacientsHospital").value);
      if (nom !== "" && maximPacients > 0) {
            hospital = new Hospital(nom, maximPacients);
            ocultaGestioHospital(this);
            mostraGestioPacients(this);
            var cadenaFilaPacient_1, cadenaFilaPacient_2, cadenaFilaPacient_3, cadenaFilaPacient_4, cadenaFilaPacient_5, cadenaFilaPacient_6, cadenaFilaPacient_7;
            cadenaFilaPacient_1 = '<div class="row">' +
                  '<div class="col mb-3">' +
                  '<label for="nomPacient" class="font-weight-bold"> Nom del pacient: </label>' +
                  '<input type="text" id="nomPacient';
            cadenaFilaPacient_2 = '" class="form-control" required minlength="1" maxlength="100" />' +
                  '  </div>';
            cadenaFilaPacient_3 = '<div class="col mb-3">' +
                  '<label for="cognomPacient" class="font-weight-bold"> Cognom del pacient: </label>' +
                  '<input type="text" id="cognomPacient';
            cadenaFilaPacient_4 = '" class="form-control" required minlength="1" maxlength="100" />' +
                  '  </div>';
            cadenaFilaPacient_5 = '<div class="col mb-3">' +
                  '<label for="nifPacient" class="font-weight-bold"> NIF del pacient: </label>' +
                  '<input type="text" id="nifPacient';
            cadenaFilaPacient_6 = '" class="form-control" required minlength="1" maxlength="100" />' +
                  '  </div>' +
                  '  <div class="col mb-3">' +
                  '    <label for="malaltia" class="font-weight-bold">Malaltia a tractar: </label>' +
                  '    <select id="malaltia';
            cadenaFilaPacient_7 = '"/>' +
                  '  </div> <!-- <div class="col mb-3"> -->' +
                  '</div> <!-- <div class="row"> -->';

            for (var pacient = 0; pacient < maximPacients; pacient++) {
                  document.getElementById("dadesPacient").innerHTML += ('' +
                        "<b><center>Pacient " + pacient.toString() + ":</center></b>" +
                        cadenaFilaPacient_1 +    //nompacient
                        pacient.toString() +     //nompacient
                        cadenaFilaPacient_2 +    //nompacient
                        cadenaFilaPacient_3 +    //cognompacient
                        pacient.toString() +     //cognompacient
                        cadenaFilaPacient_4 +    //cognompacient
                        cadenaFilaPacient_5 +    //nifpacient
                        pacient.toString() +     //nifpacient
                        cadenaFilaPacient_6 +    //malaltiapacient
                        pacient.toString() +     //nifpacient
                        cadenaFilaPacient_7);    //tancamentpacient

                  document.getElementById("malaltia" + pacient.toString()).innerHTML = omplirSelects();
            }

      }
}

function ingressarPacients() {
      if (hospital === undefined) {
            alert("Error. Has de crear primer l'hospital");
            ocultaGestioPacients(this);
            mostraGestioHospital(this);
      }
      var nom = "";
      var cognom = "";
      var nif = "";
      var malaltia = "";



}



