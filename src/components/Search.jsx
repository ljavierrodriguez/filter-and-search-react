const Search = ({ setSearch }) => {
    return (
        <div className="form-group mb-3">
            <label>Search</label>
            <input type="text" className="form-control" placeholder="Search..." onChange={e => setSearch(e.target.value)} />
        </div>
    )
}

export default Search;