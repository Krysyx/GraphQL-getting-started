import api from "/env/api.js";

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
    const query = `query GetBooks {
      getBookPages {
        title
        author
        pages {
          marked
          non_marked
        }
      }
    }`;

    axios
      .post(
        `${api}/graphql/mongo/books/query`,
        {
          query,
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
