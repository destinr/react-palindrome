function ResultPrinter(props){
    if (props.IP === ""){
        return(
            <p>Please enter a word/phrase.</p>
        )
        
    }
    else if (props.isPall){
        return(
            <p>{props.IP} is a palindrome.</p>
        )

    }
    else {
        console.log("in else")
        return(
            <p>{props.IP} is not a palindrome.</p>
        )
    }
}

export default ResultPrinter;