// Ajouter l'événement click au bouton


/**
 * Ajoute une ligne à la fin du tbody de la table
 */
function ajouterLigne(){

    var objet=document.getElementById("objet").value;
    var message=document.getElementById("message").value;
    var etat;

        if(document.getElementsByName("entree")[0].checked)
            etat = document.getElementsByName("entree")[0].value;
        if(document.getElementsByName("entree")[1].checked)
            etat = document.getElementsByName("entree")[1].value;

    creerLigne(objet,message,etat);
}

/**
 * Crée un élément tr (ligne du tableau)
 * @param  object string : L'objet du message à extraire de la zone de texte
 * @param  message string : le message à extraire de la zone de texte
 * @param etat string : Normal ou Urgent
 * @return HTMLTableRowElement : Elément de type tr prêt à être inséré dans le tableau.
 */
function creerLigne(object, message, etat){


    //Ajouter un nouveau ligne
    var btn =document.createElement("button");
    btn.className="btn btn-danger";
    var check=document.createElement("input");
    check.type="checkbox";
    check.name="check1";
    var t=document.createTextNode("delete");
    btn.appendChild(t);
    var table=document.getElementsByClassName("table")[0];
    var row =table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    cell1.appendChild(check);
    cell2.innerHTML=object;
    cell3.innerHTML=message;

    //btn.addEventListener("click",supprimerLigne);
    if(etat == 0){
        row.style.background="#EE4"
    }

    btn.onclick=function() {supprimerLigne(row);};
    cell4.appendChild(btn);

}

document.getElementsByClassName("btn")[0].addEventListener("click",ajouterLigne);

var btnDeleteAll=document.createElement("button");
btnDeleteAll.className="btn btn-danger"
var text=document.createTextNode("Delete All");
btnDeleteAll.appendChild(text);
btnDeleteAll.addEventListener('click',supprimerLesLignesSelectionnees);
document.getElementsByClassName("table")[0].appendChild(btnDeleteAll);
/**
 // supprimmer un ligne
 tr.parentNode.removeChild(tr);
 * Supprime une ligne
 * @param tr HTMLTableRowElement : La ligne qu'on veut supprimer
 */
function supprimerLigne(tr){

    tr.parentNode.removeChild(tr);
}



document.getElementsByClassName("btn")[0].addEventListener("click",ajouterLigne);

/**
 * Supprime toutes les lignes sélectionnées
 */
function supprimerLesLignesSelectionnees(){

    //1ere etape : configuration de selectioin des checkbox

    var selectRow=document.querySelectorAll(".table input[name='check1']");
    console.log(selectRow.length);
    for(var i=0;i<selectRow.length;i++){
        if(selectRow[i].checked)
            selectRow[i].parentNode.parentNode.parentNode.removeChild(selectRow[i].parentNode.parentNode);
    }

}

/** *
 * function checkAll
 *
 * */

function checkAll(){

    var check = document.getElementsByName("check1");

    var checkAll = document.getElementById("selectAll");
    if(checkAll.checked)
    for(var i =0; i<check.length;i++)
    {
        if(check[i].checked)
            check[i].checked=false;
        else if(! check[i].chacked)
            check[i].checked=true;
    }
    else
        for(var i =0; i<check.length;i++)
        {
            if(check[i].checked)
                check[i].checked=false;
            else if(! check[i].chacked)
                check[i].checked=true;
        }
}
document.getElementById("selectAll").addEventListener("click",checkAll);

