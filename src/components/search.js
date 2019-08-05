import React, { useState, useEffect } from 'react'

export default function Search() {

    const [hasError, setErrors] = useState(false)
    const [loading, setLoading] = useState(true)
    const [show, setShowData] = useState([])

    useEffect(() => {
        getData(show)
    })

    async function getData(show) {
        const res = await fetch(`http://api.tvmaze.com/singlesearch/shows?q=${show}`)
        res
            .json()
            .then(res => setShowData(res))
            .catch(err => setErrors)
    }

    return (
        <form action="GET">
            <h2>Enter Show Title to Search</h2>
            <input type="text"
                placeholder="Show Title"
            />
        </form>
    )

}