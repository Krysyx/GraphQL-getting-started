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
    const query = `mutation CreateAndUpdateBook($id: ID, $update: String, $title: String, $author: String, $pages: BookInterface ) {
      updateBook(id: $id, title: $update) {
        _id
        title
        author
        pages {
          marked
          non_marked
        }
      }

      createBook(title: $title, author: $author, pages: $pages) {
        _id
        title
        author
      }
    }`;

    axios
      .post(
        `${api}/graphql/mongo/books`,
        {
          query,
          variables: {
            id: "605545eec5c82d476cdda94e",
            update: "UPDATED TITLE 2",
            title: "Last created Book",
            author: "Anthony Motto",
            pages: {
              marked: 107,
              non_marked: 3,
            },
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
