import axios from 'axios'

const base = axios.create({
  baseURL: 'http://localhost:3001/'
})

const api ={
  loadGenres: ()=> base.get('genres'),
  saveSeries: (newSerie)=> base.post('series',newSerie),
  loadSeries: (genre) => base.get(`series?genre=${genre}`),
  loadSerieById: (id) => base.get(`series/${id}`),
  updateSeries: (updatedSerie)=> base.put(`series/${updatedSerie.id}`, updatedSerie),
  deleteSeries: (id)=> base.delete(`series/${id}`)
}

export default api