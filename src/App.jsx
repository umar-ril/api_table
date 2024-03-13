import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { apiFetch } from './redux/apiSlice'

function App() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.entries)

  useEffect(() => {
    dispatch(apiFetch())
  }, [])

  console.log(state)

  if (state.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <table border="1">
       <tbody>
        <tr>
          <th>API</th>
          <th>Description</th>
          <th>Auth</th>
          <th>HTTPS</th>
          <th>Cors</th>
          <th>Link</th>
          <th>Category</th>
        </tr>
    {state.entries && 
    state.entries.map((value,id) => (
    <tr key={id}>
         <td>{value.API}</td>
         <td>{value.Description}</td>
         <td>{value.Auth}</td>
         <td>{value.HTTPS}</td>
         <td>{value.Cors}</td>
         <td>{value.Link}</td>
         <td>{value.Category}</td>
       </tr>
        ))}
      </tbody>
    </table>
  )
}

export default App
