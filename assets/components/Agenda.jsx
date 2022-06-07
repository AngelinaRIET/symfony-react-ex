// Chargement des dépendances (librairie React ici)

import React, { useEffect, useState } from 'react';
import Card from './Card';



//API OpenData de la région Ile-de-France : 
//https://data.iledefrance.fr/explore/dataset/evenements-publics-cibul/api
//URL finale à appeler en HTTP GET, récupère 36 résultats (paramètre rows)


// Employee collection via fetch

// Once the data is collected, we update our state with the new data


function Agenda() {

    //le but  de cette fonction est d'aller chercher les infos dans l'API.
    const [contentApi, setContentApi] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");

    function changeText(event) {
        setSearchTxt(event.currentTarget.value);
    }

    const url = "https://data.iledefrance.fr/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district&q=" + searchTxt;


    useEffect(() => {
        window.fetch(url)
            .then(function (httpResponse) { // elle reçoit l'HHTP response elle le renvoit au 2e then.

                return httpResponse.json();
            })
            .then(body => { // là je récupère le corps de la réponse.
                // on a déclaré la variable content API dans un tableau vide grâce à useState et grâce à 
                //setContentApi on modifie le contenu et on ajoute le records au body.)*/
                setContentApi(body.records)
                console.log(body)
            })
    }, [searchTxt]);

    return (
        <>
            <input type="text" onChange={changeText} value={searchTxt} />
            <section className="card-list row">
                {contentApi.map((element, i) => {
                    return <Card key={i} data={element} />
                })}
            </section>
        </>
    );
}

// Once the data is collected, we update our state with the new data




export default Agenda;
