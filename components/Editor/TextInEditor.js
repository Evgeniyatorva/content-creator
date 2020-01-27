import React, { useEffect, useRef } from 'react';
import konva from 'konva';
import { Text, Transformer } from 'react-konva';


const TextInEditor = ({ shapeProps, selectText, isSelect, deleteSelectShape }) => {

  const refText = useRef(null);
  const refTransformer = useRef(null);

  useEffect(() => {
    if (isSelect) {
      // to attach transformer
      refTransformer.current.setNode(refText.current);
      refTransformer.current.getLayer().batchDraw();
    }
  }, [isSelect]);


  return (
    <React.Fragment>
      <Text 
        {...shapeProps}
        onClick={selectText}
        ref={refText}
        onContextMenu={deleteSelectShape}
      />
      {isSelect &&
        <Transformer
          ref={refTransformer}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 30 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      }
    </React.Fragment>
  )
}

export default TextInEditor