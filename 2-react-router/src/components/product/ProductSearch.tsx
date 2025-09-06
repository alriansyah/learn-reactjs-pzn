import { useNavigate, useSearchParams } from "react-router";
import { useState, type ChangeEvent } from "react";

function ProductSearch() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>(
    searchParams.get("search") || ""
  );

  function handleSearch(): void {
    if (search) {
      navigate({
        pathname: "/data/products/search",
        search: `?search=${search}`,
      });
    }
  }

  return (
    <div>
      <h1>Search Product</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          className="border border-slate-400 rounded-md px-2"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <p>Kamu mencari : {searchParams.get("search")}</p>
    </div>
  );
}

export default ProductSearch;
