import {useRef} from 'react'

function PhraseInput(props) {
    const inputField = useRef(null)
    
    const onBtnClick = () => {
        props.setIP(inputField.current.value);
      };

      const onEnter = (event) => {
        if (event.key === 'Enter') {
            props.setIP(inputField.current.value);
        }
        }

    return (
        <div>
            <input type="text" ref={inputField} onKeyDown={onEnter} />
            <button type="submit" onClick={onBtnClick}>
            Submit
            </button>
        </div>
        
    )
}

export default PhraseInput;