import axios from "./utils/axiosInstance";

const init = () => {
  console.log("DOM loaded");
  app.loadQueryButton();
};

const buttonSetup = (nodeElement) => {
  nodeElement.className = "query-button";
  nodeElement.addEventListener("click", (event) => {
    console.log("Clicked Target : ", event.target);

    axios.post("/graphql", {});
  });
};

const app = {
  loadQueryButton: () => {
    buttonSetup(document.createElement("button"));
  },
};

document.addEventListener("DOMContentLoaded", init);
