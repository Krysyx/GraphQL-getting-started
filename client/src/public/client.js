const init = () => {
  console.log("DOM loaded");
  app.buttonContainer.className = "button-container";
  app.rootDiv.appendChild(app.buttonContainer);
  app.loadQueryButton();
};

const buttonSetup = (nodeElement) => {
  nodeElement.textContent = "Try a graphql Query";
  nodeElement.className = "query-button";
  nodeElement.addEventListener("click", () => {
    const query = `query CreateAndUpdate($id: String, $firstnameUpdate: String, $age: Int, $firstname: String, $lastname: String) {
      updateAuthor(id: $id, firstname: $firstnameUpdate) {
        _id
        firstname
        lastname
        age
      }

      createAuthor(firstname: $firstname, lastname: $lastname, age: $age) {
        _id
        firstname
        lastname
        age
      }
    }`;

    axios
      .post(
        `http://localhost:7200/graphql/mongo/authors/mutation`,
        {
          query,
          variables: {
            id: "6053f7834511ba3824d99cbd",
            firstnameUpdate: "Vincent",
            firstname: "Xqc",
            lastname: "Felix",
            age: 25,
          },
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(({ data }) => console.log("Response from graphQL query : ", data))
      .catch(({ response: { data } }) => console.error(data));
  });

  app.buttonContainer.appendChild(nodeElement);
};

const app = {
  rootDiv: document.getElementById("root"),
  buttonContainer: document.createElement("div"),
  loadQueryButton: () => {
    buttonSetup(document.createElement("button"));
  },
};

document.addEventListener("DOMContentLoaded", init);
