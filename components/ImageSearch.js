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
    let { isLoading, result, defaultResult } = this.props;
    return (
      <React.Fragment>
        <div>search</div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <div>
          {isLoading ? 
            <div>Loading...</div> : 
              Array.isArray(result) && result.length !== 0 ? 
                result.map(item => {
                  return <img id={item.id} key={item.id} style={{ width: '100px', height: '50px' }} src={item.urls.small} onClick={this.selectImage} />}) : 
                Array.isArray(defaultResult) && defaultResult.length !== 0 ? 
                  defaultResult.map(item => {
                    return <img id={item.id} key={item.id} style={{ width: '100px', height: '50px' }} src={item.urls.small} onClick={this.selectImage} />
                  }) : 
                    <div>Ошибка запроса</div> }
        </div>
      </React.Fragment>
    )
  } 
}

const mapStateToProps = (state) => {
  return {
    result: state.result,
    isLoading: state.isLoading,
    defaultResult: state.defaultResult
  }
}

const mapDispatchToProps = {
  searchImage,
  selectImage
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageSearch)