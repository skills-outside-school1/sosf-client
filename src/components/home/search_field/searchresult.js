
const SearchResults = ({ results }) => {
    return (
      <div className="mt-4">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="border-b py-2">
              <h3 className="text-lg font-semibold">{result.title}</h3>
              <p>{result.content}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    );
  };
  
  export default SearchResults;
  