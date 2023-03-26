export const FetchGetRequest = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const resJson = await response.json();
    return resJson;
}

// export const FetchPostRequest = async() => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'HEHE',
//             body: 'Singh',
//             userID: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     }) 
//     const resJson = await response.json();
//     return resJson;
// }

// passing data from user side??
// send data from app.js 

export const FetchPostRequest = async data => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }) 
    const resJson = await response.json();
    return resJson;
}

// PUT for complete data change
// put whole object while using PUT request anotherwise whole data will be lost

export const FetchPutRequest = async (id, data) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const resJson = await response.json();
    return resJson;
}

// PATCH request - send only that data that you wanna change or update

export const FetchPatchRequest = async (id, data) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const resJson = await response.json();
    return resJson;
}