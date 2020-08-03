import React from 'react';

export const getSpeciesList = async () => {
    try {
        let response = await fetch('https://umplantify.serverless.social/api/list',
        {
          method: 'GET'
        });
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const getSpecies = async (speciesId) => {
    try {
        let url = 'https://umplantify.serverless.social/api/species/' + speciesId +'/';
        let response = await fetch(url,
        {
            method: 'GET'
        });
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const identifySpecies = async (uri) => {
    try {
        //console.log("******** API DEBUG ********");
        //console.log(uri);
        let formData = new FormData();
        formData.append('image', {
            name: 'image.jpg', 
            type: 'image/jpg',
            uri: Platform.OS === "android" ? uri : uri.replace("file://", "")
        });
        //formData.append('Content-Type', 'image/jpg');
        let response = await fetch('https://umplantify.serverless.social/api/identify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        })
        //.then(response => response.text())
        //.then(response => console.log(response));
        let json = await response.json();
        //let json = undefined;
        return json;
    } catch (error) {
        console.log("*** WE GOT AN ERROR ***")
        console.error(error);
    }
}
