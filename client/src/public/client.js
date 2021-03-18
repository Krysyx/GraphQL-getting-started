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
    axios
      .post(`http://localhost:7200/graphql/mutation`, {
        query: `mutation CreateMessage($input: MessageInput, $input2: MessageInput, $id: ID!) {
          createMessage(input: $input) {
            id
            author
            content
          }

          updateMessage(id: $id, input: $input2) {
            id
            author
            content
          }
        }`,
        variables: {
          input2: { author: "Antho", content: "My antho message" },
          input: { author: "Estelle", content: "Lol c quoi ce bordel" },
          id: "021a9618e4",
        },
      })
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
