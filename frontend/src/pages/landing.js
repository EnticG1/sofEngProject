import { useEffect, useState } from 'react'

const Landing = () => {

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch('/')
        }

        fetchMenu()
    }, [])

    return (
        <div className="home">
            <h2>Home</h2>
        </div>
    )
}

export default Landing