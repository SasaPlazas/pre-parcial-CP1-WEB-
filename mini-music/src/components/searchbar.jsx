import React from 'react'
import { useState } from 'react'

const SearchBar = () => {

    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(search)
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Buscar canción..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />
        
    <button type="submit">Buscar</button>
    </form>
    </div>
  )
}

export default SearchBar
