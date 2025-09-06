import { useParams } from "react-router";

function Image() {
  const params = useParams<{ "*": string | undefined }>();

  return (
    <>
      <h1 className="text-3xl font-bold">Image</h1>
      <p>Image Page: {params["*"]}</p>
    </>
  );
}

export default Image;
