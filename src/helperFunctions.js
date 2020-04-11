const fetchData = async function (path, payload){
  const response = await fetch(path, payload)
  const json = await response.json()
  console.log(json)
  // return that cookie?
}

export { fetchData }