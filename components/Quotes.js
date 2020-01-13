import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuotes } from '../redux/actionCreators';

class Quotes extends Component {
  
  componentDidMount() {
    this.props.getQuotes()
  }

  render() {
    let { quotes, isLoading, error } = this.props;
    return (
      <React.Fragment>
        {isLoading ? <div>Loading...</div> :
          error !== null ? <div>Error!</div> : 
            Array.isArray(quotes) && quotes.length !== 0 ?
              quotes.map(item => {
                return <ul>
                      <li>{item.quote}</li>
                      <li>{item.author}</li>
                    </ul>
              }) : <div>Неизвестная ошибка</div> }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.getQuotes.quotes,
    isLoading: state.getQuotes.isLoading,
    error: state.getQuotes.error
  }
}

const mapDispatchToProps = {
  getQuotes
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes)