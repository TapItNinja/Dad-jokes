

    // const textDisplay= document.getElementById('jokeElement')
    // const phrases=['Loading...']
    // let i=0
    // let j=0
    // let current=[]
    // // textDisplay.innerHTML=current
    //  function loop(){
    //     if(i<phrases.length){
            
    
    //          if(j<=phrases[i].length+1){
    //             console.log(phrases[i][j])
                
    //             current.push(phrases[i][j])
    //             textDisplay.innerHTML=current.join('')
    //              j++
    //          }
    //          if(j==phrases[i].length){
    //             i++
    //          }
    //     }
    //     setTimeout(loop, 50)
    //  }
    // loop()
    fetch('https://v2.jokeapi.dev/joke/Dark?type=single')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.joke;
        const textDisplay= document.getElementById('jokeElement')
    const phrases=[jokeText]
    let i=0
    let j=0
    let current=[]
    // textDisplay.innerHTML=current
     function loop(){
        if(i<phrases.length){
            
    
             if(j<=phrases[i].length+1){
                
                current.push(phrases[i][j])
                textDisplay.innerHTML=current.join('')
                 j++
             }
             if(j==phrases[i].length){
                i++
             }
        }
        setTimeout(loop, 25)
     }
    loop()

        jokeElement.innerHTML = jokeText;
    })