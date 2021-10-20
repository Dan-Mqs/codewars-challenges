function openOrSenior(data){
    let list = data
    let output = []
    list.forEach((item)=>{
        let age = item[0]
        let handicap = item[1]
        
        if (age >= 55 && handicap > 7){
            output.push('Senior')
        }
        else {
            output.push('Open')
        }
    })
    return output
}
