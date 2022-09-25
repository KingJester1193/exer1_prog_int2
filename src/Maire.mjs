export default class Maire {
    /**
     * @typedef UnMaire
     * @type {object}
     * @property {string} nom - Le nom
     * @property {string} prenom - Le prénom
     * @property {number} debut - Année du début du mandat
     * @property {?number} fin - Année de fin du mandat ou null
     */

    /**
     * @type {UnMaire[]} Tableau des maires
     */
    #aMaires;
    
    /**
     * Création de la liste des maires
     * @param {UnMaire[]} lesMaires - Tableau des maires pour la ville
     */
    constructor (lesMaires){
        this.#aMaires = lesMaires;
        //console.log(this.#aMaires)
    }
    
     /**
      * Retourne les résultats de la recherche
      * @param {Object} params - Objet de paramètre
      * @param {string} params.type - Le type de recherche : ["date", "nom"]
      * @param {string | Number} params.valeur - La valeur recherchée
      * @returns {UnMaire[]} - Tableau des résultats;
     */
    rechercheMaires(params){
     
   
        let aRecherche = [];
        if(params.type == "date"){
            aRecherche = this.#aMaires.filter(function(UnMaire){
                let res = false;
                if(UnMaire.debut <= params.valeur && params.valeur <= UnMaire.fin){ // Quoi faire pour fin == "null"?
                    
                    res = true;
                    
                    //console.log(res)
                }
                return res;
            });                  console.log(aRecherche)

        }
        else if(params.type == "nom"){
            aRecherche = this.#aMaires.filter(function(unMaire){
                let res = false;
                if(unMaire.prenom == params.valeur || params.valeur == unMaire.nom){ 
                    res = true;
                }
                return res;
         
        })
    }
        console.log(aRecherche)
        return aRecherche;
        
    }

    /**
     * Retourne la liste des maires trié selon les paramètres
     * @param {Object} params - Objet de paramètre
     * @param {string} params.type - Le type de tri : ["date", "nom"]
     * @param {string} params.ordre - L'ordre du tri : ["ASC", "DESC"]
     * @returns {UnMaire[]} - Tableau des résultats
     */
    listeMaires(params) {

         let aTrie;


        if(params.type == "date"){
            aTrie = unMaire.sort();
            return aTrie;
            }else if(params.type == "nom"){
            aTrie = unMaire.sort();
            return aTrie;
            
        }
        }
        

    /**
     * @returns {Number} - Le nombre d'enregistrement dans le tableau des maires
     */
    getNombreMaires(){
        return this.#aMaires.length;
    }
    
  }