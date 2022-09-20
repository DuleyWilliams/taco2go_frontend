const remoteURL = "http://localhost:8000"

export const getProteinById = (proteinId) => {
  return fetch(`${remoteURL}/[proteins]/${proteinId}`, {
    headers:{
        "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
}

export const getAllProteins = () => {
  return fetch(`${remoteURL}/proteins`, {
    headers:{
        "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
}

export const deleteProtein = (id) => {
    return fetch(`${remoteURL}/proteins/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
        } 
    })
}

  export const addProtein= (newProtein) => {
    return fetch(`${remoteURL}/proteins`, {
        method: 'POST',
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON. stringify(newProtein)
    })
    .then(res => res.json())
}
  
//   export const updateProtein= (editedProtein) => {
//     return fetch(`${remoteURL}/proteins/${editedProtein.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(editedProtein),
//     }).then((data) => data.json());
//   };