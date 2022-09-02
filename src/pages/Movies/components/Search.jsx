import {useState, React} from 'react'

export const Search = (searchMovies) => {
    const [search, setSearch] = useState('')

    const handleKey = (e) => {
        if(e.key === 'Enter') {
            searchMovies(search)
        }
    }
    
    return (
        <div className="row">
            <div className="col s12">
                <input
                    className="validate"
                    type="search"
                    placeholder="search"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
            </div>
        </div>
    )
}
