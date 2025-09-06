import { useParams } from "react-router";

function Image() {
  const params = useParams();

  return (
    <>
      <h1 className="text-3xl font-bold">Image</h1>
      <p>Image Page: {params["*"]}</p>
    </>
  );
}

export default Image;
