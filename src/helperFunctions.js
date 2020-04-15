export const fetchData = async (action, path, payload) => {
  const response = await fetch(path, payload);
  const json = response.json();

  switch (action) {
    case "LOG_IN":
      console.log(json);
      let data = [json][0].results;
      let id = json.note_id;
      this.setState({ notes: data, note_id: id });
      break
    default:
      return action;
  }
};
