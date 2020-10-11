import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../routes/History'
import arrowBack from '../../assets/images/back_arrow.svg'

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isChecked: false,
      required: false
    }
  }

  handleNextButton = () => {
    this.checkingRequiredSubgenres()
  }

  checkingRequiredSubgenres = () => {
    (this.props.subgenres || []).filter(itm => {
      if (itm.isDescriptionRequired === true) {
        this.setState({ required: true });
      }
    })
  }

  render() {
    const { isChecked, required } = this.state
    const { ReducerExample } = this.props
    const { subgenres } = ReducerExample
    console.log('9999', isChecked)
    // const mapedSubgenres = subgenres.length && subgenres.forEach(itm => {
    //   if (itm.isDescriptionRequired) {
    //     checkbox = (
    //       <div className="wizard-checkbox-wrap">
    //         <input type="checkbox" value={isChecked} onChange={ () => this.setState({ isChecked: !isChecked }) } />
    //         <p>Description is required for this subgenre</p>
    //       </div>
    //     )
    //   }

    //   return checkbox
    // })

    console.log('infooo', required)
    return ( 
      <div className="wizard">
        <header className="wizard-header">
          <h4>Add book - New Book</h4>
        </header>
    
        <section className="wizard-steper">
    
        </section>
  
        <main className="wizard-main wizard-main--add">
          { subgenres.length ? <input className="input-app" type="text" placeholder="Subgenre name" /> : <p>No items</p> }
          { 
            subgenres.length ? <div className="wizard-checkbox-wrap">
              <input type="checkbox" value={isChecked} onChange={ () => this.setState({ isChecked: !isChecked }) } />
              <p>Description is required for this subgenre</p>
            </div> 
            : null 
          }
          { subgenres.length && required === false ? <p className="wizard-error">This field is required!</p> : null }
        </main>
    
        <footer className="wizard-footer">
          <div className="cta-button" onClick={ () => history.push('/') }>
            <img src={arrowBack} alt="arrowBack"/>
            <span>Back</span>
          </div>
          <div className={`cta-button`} onClick={ () => this.handleNextButton() }>Next</div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ ReducerExample }) => ({
  ReducerExample
})
 
export default connect(mapStateToProps, null)(AddNew);