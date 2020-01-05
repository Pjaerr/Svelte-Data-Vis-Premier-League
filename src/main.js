import App from "./App.svelte";

//Here we use intro:true so that transitions run on initial load.
const app = new App({
  target: document.body,
  intro: true
});

export default app;
