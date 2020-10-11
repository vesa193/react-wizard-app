import React, { Component } from 'react';
import { connect } from "react-redux";
import { setDummyData, setSelectedGenre, setSubgenres } from '../../store/actions/Feature1'
import { dummyData } from '../../network/apis/dummyData.js'
import history from '../../routes/History'
import arrowBack from '../../assets/images/back_arrow.svg'

class Genres extends Component {
  state = {
    selectedGenre: null,
  }

  componentDidMount() {
    this.props.onSetDummyData(dummyData)
  }

  handleSelectGenre = (genreId) => {
    this.setState({ selectedGenre: genreId }, () => {
      this.props.onSetSelectedGenre(genreId)
    });
  }

  handleNextButton = () => {
    const { selectedGenre } = this.state
    const { ReducerExample, onSetSubgenres } = this.props
    const { dummyData } = ReducerExample
    const filterDummyData = dummyData.filter(item => selectedGenre === item.id ? item : null)
    const subgenres = filterDummyData[0]?.subgenres
    if (subgenres) {
      console.log('SUBG', subgenres)
      onSetSubgenres(subgenres)
      history.push('/subgenres')
    }
    // return subgenres
  }

  render() {
    const { selectedGenre } = this.state
    const { lang , loading, ReducerExample } = this.props;
    const mapDummyData = ReducerExample.dummyData
    const drawGenreButtons = (mapDummyData !== null ? mapDummyData : []).map(itm => {
      return (
        <div key={itm.id} className={`genre-button ${ selectedGenre === itm.id ? 'active' : '' }`} onClick={ () => this.handleSelectGenre(itm.id) }>{itm.name}</div>
      )
    })
    return (
      <div className="wizard">
        <header className="wizard-header">
          <h4>Add book - New Book</h4>
        </header>
  
        <section className="wizard-steper">
  
        </section>
  
        <main className="wizard-main">
          { drawGenreButtons }
        </main>
  
        <footer className="wizard-footer">
          <div className="cta-button" onClick={ () => history.push('/') }>
            <img src={arrowBack} alt="arrowBack"/>
            <span>Back</span>
          </div>
          <div className={`cta-button ${selectedGenre ? 'active' : 'disabled'}`} onClick={ () => this.handleNextButton() }>Next</div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ lang, loading, ReducerExample, rest }) => ({
  lang,
  loading,
  ReducerExample
});

const mapDispatchToProps = (dispatch) => ({
  onSetDummyData: (data) => dispatch(setDummyData(data)),
  onSetSelectedGenre: (val) => dispatch(setSelectedGenre(val)),
  onSetSubgenres: (val) => dispatch(setSubgenres(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
