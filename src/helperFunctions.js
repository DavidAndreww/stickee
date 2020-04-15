export const fetchData = async function(action, path, payload) {
  const response = await fetch(path, payload)
  const json = response.json()

  switch (action){
    case "LOG_IN":
      console.log(json)
      return 'hi'
    default: 
    return action
  }
}
