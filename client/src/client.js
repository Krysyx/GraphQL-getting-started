const init = () => {
  console.log("DOM loaded");
  app.buttonContainer.className = "button-container";
  app.rootDiv.appendChild(app.buttonContainer);
  app.loadQueryButton();
};

const buttonSetup = (nodeElement) => {
  nodeElement.textContent = "Try a graphql Query";
  nodeElement.className = "query-button";
  nodeElement.addEventListener("click", (event) => {
    console.log("Clicked Target : ", event.target);
    axios
      .post("/graphql", {
        query:
          "query roll($dice: Int!, $sides: Int) {rollDice(numDice: $dice, numSides: $sides)}",
        variables: { dice: 3, sides: 6 },
      })
      .then(({ data }) => console.log("Response from graphQL query : ", data));
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
