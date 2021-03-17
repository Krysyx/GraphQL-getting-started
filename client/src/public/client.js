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
      .post(`http://localhost:7200/graphql/messages`, {
        query: `query CreateMessage($input: MessageInput) {
            createMessage(input: $input) {
              id
              content
              author
            }

            createMessage(input: $input2) {
              content
            }
          }`,
        variables: {
          input: { author: "Wilfried", content: "My message 1" },
          input2: { author: "Antho", content: "My message OMEGALUL" },
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
