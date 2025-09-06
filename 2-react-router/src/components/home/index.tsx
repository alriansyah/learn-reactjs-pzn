import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  function handleClick(): void {
    navigate({
      pathname: "/data",
    });
  }
  return (
    <div>
      <h1 className="text-3xl font-bold">Home</h1>
      <p>Welcome to the Home page!</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded"
        onClick={handleClick}
      >
        Go to data page
      </button>
    </div>
  );
}

export default Home;
