import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../routes/History'
import arrowBack from '../../assets/images/back_arrow.svg'


class Subgenres extends Component {
  state = {
    selectedAddNew: false
  }

  handleAddNewButton = () => {
    const { selectedAddNew } = this.state
    this.setState({ selectedAddNew: !selectedAddNew });
  }

  handleNextButton = () => {
    history.push('/add-new')
  }

  render() {
    console.log('object', this.props.ReducerExample)
    const { selectedAddNew } = this.state
    const { ReducerExample } = this.props
    const { subgenres } = ReducerExample
    const drawSubgenreButtons = (subgenres !== null ? subgenres : []).map(itm => {
      return (
        <div key={itm.id} style={{ cursor: 'default' }} className={`genre-button`}>{itm.name}</div>
      )
    })

    const selectedBtn = selectedAddNew ? 'active' : ''

    return ( 
      <div className="wizard">
        <header className="wizard-header">
          <h4>Add book - New Book</h4>
        </header>
    
        <section className="wizard-steper">
    
        </section>
  
        <main className="wizard-main">
          { subgenres.length ? drawSubgenreButtons : 'No items' }
          { subgenres.length ? 
            <div className={`genre-button ${selectedBtn}`} onClick={ () => this.handleAddNewButton() }>Add new</div> 
            : null 
          }
        </main>
    
        <footer className="wizard-footer">
          <div className="cta-button" onClick={ () => history.push('/') }>
            <img src={arrowBack} alt="arrowBack"/>
            <span>Back</span>
          </div>
          <div className={`cta-button ${selectedAddNew ? 'active' : 'disabled'}`} onClick={ () => this.handleNextButton() }>Next</div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ ReducerExample }) => ({
  ReducerExample
});

// const mapDispatchToProps = (dispatch) => ({
  
// })
 
export default connect(mapStateToProps, null)(Subgenres);