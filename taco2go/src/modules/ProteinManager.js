const remoteURL = "http://localhost:8000"

export const getProteinById = (proteinId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/[proteins]/${proteinId}`)
  .then(res => res.json())
}

export const getAllProteins = () => {
  return fetch(`${remoteURL}/proteins`)
  .then(res => res.json())
}

export const deleteProtein = (id) => {
    return fetch(`${remoteURL}/proteins/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }