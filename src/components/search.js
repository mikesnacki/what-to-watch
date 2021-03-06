import React, { useState } from 'react'

export default function Search({ addToShows, setShow, show }) {

    const [query, setQuery] = useState('')
    const [clicked, setClicked] = useState(false)

    const fetchData = query => {

        query.length > 0 &&
            fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
                .then(res => res.json())
                .then((data) => (
                    setShow({
                        name: data.name,
                        imdb: data.externals.imdb,
                        thetvdb: data.externals.thetvdb,
                        image: data.image.medium,
                        network: data.network.name,
                        rating: data.rating.average,
                        runtime: data.runtime,
                        summary: data.summary.replace(/<[^>]*>?/g, '')
                    })
                ))
                .then(setClicked(true))
                .catch((err) => {
                    setShow({
                        name: "Show not found!"
                    })
                    console.log(err)
                })
    }


    return (

        <div
            className="search"
            id="search"
        >
            <div
            >
                <h2>Enter Show Title to Search</h2>
                <input type="text"
                    value={query}
                    placeholder="Show Title"
                    onChange={event => setQuery(event.target.value)}
                />
                <button
                    type="button"
                    className="button-search"
                    onClick={() => fetchData(query.replace(/\s+/g, '-').toLowerCase())}
                >
                    Search Shows
            </button>
            </div>
            {show.name !== "" && <div className="show-details">
                <h2>{show.name}</h2>
                {show.name !== "Show not found!" &&
                    <div>
                        <img src={show.image} alt="" />
                        <h3>Network: {show.network}</h3>
                        <h4>Rating: {show.rating}</h4>
                        <h4>Run time: {show.runtime} minutes</h4>
                        <p>{show.summary}</p>
                        {clicked === true ?
                            <button
                                className='button-search'
                                onClick={addToShows}>
                                Add to my shows
                        </button>
                            :
                            <div
                                className="button-search"
                            >Show added!</div>

                        }
                    </div>
                }
            </div>}
        </div >
    )

}