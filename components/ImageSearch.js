import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchImage, selectImage } from '../redux/actionCreators';

class ImageSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.props.searchImage(event.target.value);
  }

  selectImage = (event) => {
    console.log(event.target.id)
    this.props.selectImage(event.target.id)
  }
   
  render() {
    let { isLoading, result, error, defaultResult } = this.props;
    return (
      <React.Fragment>
        <div>search</div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <div>
          {isLoading ? <div>Loading...</div> : 
            error !== null ? <div>Ошибка запроса</div> :
              Array.isArray(result) && result.length !== 0 ? 
                result.map(item => {
                  return <img id={item.id} key={item.id} style={{ width: '100px', height: '50px' }} src={item.urls.small} onClick={this.selectImage} />}) : 
                Array.isArray(defaultResult) && defaultResult.length !== 0 ? 
                  defaultResult.map(item => {
                    return <img id={item.id} key={item.id} style={{ width: '100px', height: '50px' }} src={item.urls.small} onClick={this.selectImage} />}) :
                   <div>Неизвестная ошибка</div> }
            
        </div>
      </React.Fragment>
    )
  } 
}

const mapStateToProps = (state) => {
  return {
    result: state.searchImage.result,
    isLoading: state.searchImage.isLoading,
    error: state.searchImage.error,
    defaultResult: state.searchImage.defaultResult
  }
}

const mapDispatchToProps = {
  searchImage,
  selectImage
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageSearch)