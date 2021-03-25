'use strict'

const llistaMalalties = ['Cardio','Trauma','Psico'];

function omplirSelects(){
    var etCapMalaltia = "capMalaltia";
    var objSelect;
    

    objSelect = `<option value=\"${etCapMalaltia}\">------ Escull un malaltia ------</option>`;
    for (var indexMalaltia = 0; indexMalaltia < llistaMalalties.length; indexMalaltia++) {
        objSelect += `<option value=\"${llistaMalalties[indexMalaltia]}\">${llistaMalalties[indexMalaltia]}</option>`;
    }
    objSelect += '</select>';
    return objSelect;
}