const descriptions: { [key: string]: { description: string; tags: string[] } } = {
    "mangaguesser": {
        "description": "Guessing game that uses random manga panels to serve the user",
        "tags": ["#Japanese Manga", "#Guessing", "#NextJS"]
    },
    "skinfolio" : {
        "description": "Create a collection of your LoL skins",
        "tags": ["#LoL", "#Image Creation", "#Custom Tool", "#NextJS"]
    }
};


export function getDescription(projectName : string) {
    return descriptions[projectName.toLowerCase()];
}