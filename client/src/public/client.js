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
    const query = `query UpdateAuthor($id: String, $age: Int) {
      updateAuthor(id: $id, age: $age) {
        _id
        firstname
        lastname
        age
      }
    }`;

    axios
      .post(
        `http://localhost:7200/graphql/mongo/authors/update`,
        {
          query,
          variables: {
            id: "60541343c14f1908b04b178a",
            age: 26,
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
