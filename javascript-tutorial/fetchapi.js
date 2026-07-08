// // fetch(url, options) {
// //     //code to run
// // }
// const url = "https://jsonplaceholder.typicode.com/users" 
// fetch(url,)
// .then((response) => response.json())
// .then ((users) => {
//     // console.log(user)
//     users.forEach(x => {
//         console.log(`UserId: ${x.id} Name: ${x.name}`)
//     })
// })
// .catch(error => console.error("Error fetching data:", error));

// let myArray = [23, 45, 67, 86]

// myArray.forEach(num => console.log(num));


// const baseUrl = "https://rickandmortyapi.com/api/character"
// fetch (baseUrl)
// .then ((response) =>response.json())
// .then ((character) => {
//     console.log(character)
//     character.results.forEach(y=> {
//         console.log(`CharacterId: ${y.id} Character: ${y.character}`)
//     })
// })
// .catch(error => console.error("Error fetching data:", error));


// let Url =('calorie.json')
// // fetch ('calorie.json')
// // .then (response => response.json())
// // .then (data=>  {
// //     console.log(`Food: ${data.name}`)
// // })

// async function loadLocalData() {
//     try {
//         const response = await fetch('Url')
//         if(!response.ok) {
//             throw new Error(`Could not find resource ${response.status}`)
//         }
//         const data = await response.json
//         console.log(data.name)
//     }catch (error) {
//         console.log(`Error loading page ${error}`)
//     }
// }

const baseUrl = "https://jsonplaceholder.typicode.com"


const AUTH_TOKEN = 'jwt_token_demo_xyz_9821'
//  helper function to prepare standard request headers

function getRequestHeaders() {
    return {
        "Content-type": "application/json; charset = UTF-8",
        "Authorization": `Bearer ${AUTH_TOKEN}`
    }
}

async function updateManifest(manifestId, updatedPayLoad) {
    try{
        const res = await fetch(`${baseUrl}/posts/${manifestId}`, {
        method: "POST",
        headers: getRequestHeaders(), //demonstrate passing of the token via headers
        body: JSON.stringify(updatedPayLoad)
    });
    if (!res.ok){
        throw new Error(`put failed with status code: ${res.status}`)
    }
    const result = await res.json();
    console.log(result)
    return result;
    
    }catch (error) {
        console.error(`[PUT Error]: Could not update the data ${error.message}`)
    }
    

const savedData = await updateManifest({
    "title": "Package Dispatched",
    "body": "Status: In transit",
    "userId": 1
})  

fetchAllManifests()


}

async function createNewManifest(newPackageData) {
    
}
const updatedData  = await updateManifest(1, {
    id: 1,
    title: "Package Dispatched",
    body: "Status: In transit",
    userId: 1
})


console.log(updatedData);






// fetch(baseUrl, {})