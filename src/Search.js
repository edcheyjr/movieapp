import {useCustomContext} from './context';

const Search = () => {
    const {query, setQuery, error} = useCustomContext();

    return (
        <>
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
