const URL = "https://spapi.dev/api/characters/"

export async function getCharactersApi(){
    try {
        const request = await fetch(`${URL}`);
        const response = await request.json();
        return response.data;
    } catch (err) {
        throw Error(err);
    }
}

export async function getCharacterByIdApi(id){
    try {
        const request = await fetch(`${URL}${id}`);
        const response = await request.json();
        return response.data;
    } catch (err) {
        throw Error(err);
    }
}
