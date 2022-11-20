function PallChecker(props){

    const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str)

    const inputTrimmer = (input) => {
        let inputArr = input.split("")
        let outputArr = inputArr.filter(char => isAlphaNumeric(char))

        return outputArr.join('');
    }
    
    const isPallindrome = (tInput) => {
        tInput=tInput.toLowerCase()
        let start = 0
        let end = tInput.length-1
        console.log(end, typeof(end))
        
        while(start <= end){
            console.log(start,end)
            if (tInput[start] === tInput[end]){
                start++;
                end--;
            }
            else{
                return false
            }

        }
        return true
    }


    let trimmedInput = inputTrimmer(props.IP)
    let isPall = isPallindrome(trimmedInput)
    props.setIsPall(isPall)
}

export default PallChecker;