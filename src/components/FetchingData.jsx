import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const FetchingData = () => {

  const [loading, setLoading] = React.useState(true)
  const [response, setResponse] = React.useState([])

  useEffect(() => {
    const response = axios.get('https://randomuser.me/api/')

    response.then((res) => {
      console.log(res.data.results)

      setResponse(res.data.results)
      setLoading(false)
    })
  }, [])

  return (
    <div>
      {
        loading  ? <h1>Loading...</h1> : (
          <>
            <h1>Data Fetched</h1>

            {response.map((value, index) => {
              return (
                <div key={index}>
                  <h1>{value.name.first}</h1>
                </div>
              )
            })}
          </>
        )
      }
    </div>
  )
}

export default FetchingData