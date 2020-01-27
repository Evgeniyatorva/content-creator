import React, { useEffect, useState, useRef } from 'react';
import konva from 'konva';
import { Stage, Layer } from 'react-konva';
import { connect } from 'react-redux';
import { editorAddText, selectShapeInEditor, editorDeleteText } from '../../redux/actionCreators';

import TextInEditor from './TextInEditor';


const Editor = ({ texts, selectId, selectShapeInEditor, editorAddText, editorDeleteText }) => {
  const [ innerWidth, setInnerWidth ] = useState(0);
  const [ innerHeight, setInnerHeight ] = useState(0);

  const refTextInput = useRef(null);

  useEffect(() => {
    setInnerHeight(window.innerHeight)
    setInnerWidth(window.innerWidth)
  }, [])

  let addTextToCanvas = () => {
    if (refTextInput.current !== null && refTextInput.current.checked && selectId === null) {
      let createIdText = new Date().getTime() + 'text'
      editorAddText({text: 'Введите текст', y: 20, x: 30, id: createIdText, draggable: true})
      selectShapeInEditor(createIdText)
      refTextInput.current.checked = false; //removal checked ?????????
    } 
  }

  let selectShape = (e) => {
    if ( e.target.attrs.hasOwnProperty('id') && e.evt.detail === 1 ) { 
      selectShapeInEditor(e.target.attrs.id)          
    } else if ( !e.target.attrs.hasOwnProperty('id') && e.evt.detail !== 1 ) { // dbClick on the canvas cancels the selection
      selectShapeInEditor(null)     
    }      
  }
  let deleteSelectShape = (e) => {
    console.log(e.keyCode)

    if (selectId && e.keyCode === 46) {
      editorDeleteText(selectId)
      selectShapeInEditor(null)
    }
  }


  return(
    // tabIndex to handle keyboard events
    <div onKeyDown={deleteSelectShape} tabIndex='0'>
      <Stage 
        width={innerWidth} 
        height={innerHeight} 
        onDblClick={selectShape} // one click canceled!!!
        onMouseDown={addTextToCanvas}
      >
        <Layer>
          {Array.isArray(texts) && texts.length !== 0 ?
            texts.map((text) => {
              return <TextInEditor 
                      shapeProps={text}
                      key={text.id}
                      selectText={selectShape}
                      isSelect={selectId === text.id}
                      deleteSelectShape={deleteSelectShape}
                      />
            }) : null
          }
        </Layer>
      </Stage>
      <form>
        <label htmlFor="checkText">выбрать текст</label>
        <input type="checkbox" name="text" id="checkText" ref={refTextInput} />
      </form>
    </div>
  )  
}

const mapStateToProps = (state) => {
  return {
    texts: state.editorText.texts,
    selectId: state.selectShape.id
  }
}

const mapDispatchToProps = {
  editorAddText,
  selectShapeInEditor,
  editorDeleteText
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)