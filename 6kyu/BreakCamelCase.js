function solution(string) {
    let letters = string.slice(1).split('')
    let result = []
    let temp = string.charAt(0)

    letters.forEach((letter) => {
        
        if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').includes(letter)){
            result.push(temp)
            temp = ''
        }
        temp += letter
    })
    
    result.push(temp)
    return result.join(' ')
}
