import {useCustomContext} from './context';

const Search = () => {
    const {query, setQuery, error} = useCustomContext();

    return (
        <>
        <div>
             <h1 className="text-gray-700 text-center mb-4 text-4xl mt-7">Search Movie Here</h1>
        </div>
       
        <form  className="search-form" onSubmit={(e)=>{ e.preventDefault() }}>
            <input type="text"
            className="form-input"
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
            placeholder="search for a movie..."
            />
        </form>
        {error.show && <div className="error">{error.msg}</div>}
        </>
    )
}

export default Search;
