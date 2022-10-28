import { Container, FirstInfo, SecondInfo } from "./styles"
import { useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectLanguage } from "../../../redux/langSlice"
import Loading from '../../../components/Loading/Loading' // import the loading component from the components folder


const MapInfo = () => {

  const { id } = useParams()
  const [map, setMap] = useState({})
  const location = useLocation()
  const language = useSelector(selectLanguage) // get the language from the redux store

  useEffect(() => {
    if (map) {
      fetch(`https://valorant-api.com/v1/maps/${id}?language=${language}`)
        .then((res) => res.json())
        .then((data) => {
          data = data.data
          console.log(data) // log the data to see if it's working  correctly
          setMap(data)
        })
        .catch((err) => console.log(err))
    }
  }, [id])

  return (
    <>
    {map ? (
        <Container>
        <FirstInfo>
          <h1>{map.displayName && map.displayName.toUpperCase()}</h1>
          <span>
            <img src={map.displayIcon} alt="icon" />
            <h3>{map.coordinates}</h3>
          </span>
        </FirstInfo>
        <SecondInfo>
          <img src={map.splash} alt="splash" />
        </SecondInfo>
        </Container>
      ) : <Loading />}
      </>
  )
}

export default MapInfo