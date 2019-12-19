import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import api from './api'

const statues = { 'watched': 'Assistido', 'watching':'Assistindo','toWatch':'Assistir'}


class EditSeries extends Component{
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      isLoading: false,
      redirect: false,
      serie: {}
    }

    this.updateSerie = this.updateSerie.bind(this)
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    api.loadGenres().then((res) => this.setState({ isLoading: false, genres: res.data }))
    api.loadSerieById(this.props.match.params.id).then(res=>{
      this.setState({serie:res.data})
      this.refs.name.value = this.state.serie.name
      this.refs.genre.value = this.state.serie.genre
      this.refs.comments.value = this.state.serie.comments
      this.refs.status.value = this.state.serie.status
    })
  }

  updateSerie(){
    let updatedSerie = {
      id: this.props.match.params.id,
      name: this.refs.name.value,
      status: this.refs.status.value,
      genre: this.refs.genre.value,
      comments: this.refs.comments.value
    }
    console.log(updatedSerie)
    api.updateSeries(updatedSerie).then(res => this.setState({ redirect: `/series/${this.refs.genre.value}`}))
   
  }

  render(){
    return (
      <section className="intro-section">
        {this.state.redirect && <Redirect to={this.state.redirect}/>}
        <h1>Editar Série</h1>
        <form>
          Nome: <input type="text" ref="name" className="form-control"/><br/>
          Status:<select ref="status">{Object.keys(statues).map(key=><option key={key} value={key}>{statues[key]}</option>)}</select>
          Gêneros:<select ref="genre">{this.state.genres.map(key => <option key={key} value={key}>{key}</option>)}</select><br/>
          Comentários: <textarea ref="comments" className="form-control"></textarea><br/>
          <button type="button" onClick={this.updateSerie}>Aualizar</button>
        </form>
      </section>)
  }
}

export default EditSeries