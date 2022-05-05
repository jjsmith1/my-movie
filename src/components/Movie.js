import React, {Component} from 'react';
import '../css/Movie.css';
import PropTypes from 'prop-types'; 

const GENERIC_MOVIE_TITLE = "New Movie Title", GENERIC_MOVIE_DESCRIPTION= "New Movie description",  year="0000", GENERIC_MOVIE_GENRE= "New Movie"; 



class Movie extends Component {
    constructor(props){
        super(props);
        this.titleContent = React.createRef();
        this.descriptionContent = React.createRef();
        this.yearContent = React.createRef();
        this.genreContent = React.createRef();  
        this.state = {
            title: GENERIC_MOVIE_TITLE, 
            description: GENERIC_MOVIE_DESCRIPTION,
            year:  "0000",
            genre: GENERIC_MOVIE_GENRE,
            editMode: false
        }    
    } 


handleEdit(){
        this.setState({
            editMode: true
        });
    }

handleSave() {
        this.setState({
        title: this.titleContent.current.value,
        description: this.descriptionContent.current.value,
        year: this.yearContent.current.value,
        genre: this.genreContent.current.value,
        editMode: false
        });
      }



handleDelete(){
        this.props.deleteHandler(this.props.id);
    }

    render(){
        let titleElement, descriptionElement, yearElement, genreElement, buttonArea; 
        if (this.state.editMode){
           titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
           descriptionElement = <textarea ref={this.descriptionContent} className="description-textarea" defaultValue={this.state.description}></textarea>;
            yearElement = <textarea ref={this.yearContent} className="year-textarea" defaultValue={this.state.year}></textarea>;
           genreElement = <textarea ref={this.genreContent} className="genre-textarea" defaultValue={this.state.genre}></textarea>;
           buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
        }else{
            titleElement = <h5 className="card-title">{this.state.title}</h5>;
            descriptionElement = <p>{this.state.description}</p>; 
            yearElement = <p>{this.state.year}</p>; 
            genreElement = <p>{this.state.genre}</p>; 
            buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button><button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button></div>;
        }
        return (
          <div className="col-sm-6">
            <div className="card card-view">
              <div className="card-body">
                {titleElement}
                {descriptionElement}
                {yearElement}
                {genreElement}
                {buttonArea}
              </div>
            </div>
          </div>
        );
        
    }
}

Movie.defaultProps = {
    title: "Generic Movie",
    description: "Body",
    year:  "2007",
    genre: "Horror",
};

Movie.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string
};

export default Movie; 