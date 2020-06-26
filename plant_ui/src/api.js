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
