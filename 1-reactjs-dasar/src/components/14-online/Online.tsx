import useOnline from "./OnlineHook";

function Online() {
  const isOnline = useOnline();

  console.log("Render Online/Offline");

  return <h1>{isOnline ? "Online" : "Offline"}</h1>;
}

export default Online;
