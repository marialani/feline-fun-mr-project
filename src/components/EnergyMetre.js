import React from 'react'

const EnergyMetre = ({catEnergy,setCatEnergy,selectedCat}) => {
    
    React.useEffect(() => {
        
        const energyCount = setInterval(() => {
            setCatEnergy(prevCatEnergy => {
                if(prevCatEnergy === 0) {clearInterval(energyCount)
                return prevCatEnergy = 0}
                return prevCatEnergy-1
            })
        }, 2000)
    
    },[selectedCat])


    const [disableFeed, setDisableFeed] = React.useState(false)
    const [disablePlay, setDisablePlay] = React.useState(false)
    const [disableVet, setDisableVet] = React.useState(false)

    return (
        <div>
          <progress max="5" value={`${catEnergy}`}></progress>
          <div className="btnFlex">
            <button className="feedBtn" disabled={disableFeed} onClick={() => {
                
              setCatEnergy(prevCatEnergy => {
                if (catEnergy === 5) {
                    setDisableFeed(!disableFeed)
                    setTimeout(() => {setDisableFeed(disableFeed)},3000)
                    }
                else if(prevCatEnergy>0 && prevCatEnergy < 5) 
                    setDisableFeed(!disableFeed)
                    setTimeout(() => {setDisableFeed(disableFeed)},1500)
                return prevCatEnergy +1
            })
            }}>FEED</button>
          <button className="vetBtn" disabled={disableVet} onClick={() => {
                setCatEnergy(prevCatEnergy => {
                if (catEnergy === 5) {
                    setDisableVet(!disableVet)
                    setTimeout(() => {
                        setDisableVet(disableVet)},3000)
                    }
                else if(prevCatEnergy>0 && prevCatEnergy < 5) 
                setDisableVet(!disableVet)
                setTimeout(() => {setDisableVet(disableVet)},2500)
                return prevCatEnergy +1
          })
          }}>VET</button>
          <button className="playBtn" disabled ={disablePlay} onClick={() => {
                setCatEnergy(prevCatEnergy => {
                if (catEnergy === 5) {
                    setDisablePlay(!disablePlay)
                    setTimeout(() => {
                        setDisablePlay(disablePlay)},3000)
                    }
                else if(prevCatEnergy>0 && prevCatEnergy < 5) 
                setDisablePlay(!disablePlay)
                setTimeout(() => {setDisablePlay(disablePlay)},2000)
                return prevCatEnergy +1
          })
          }}>PLAY</button>
          </div>
        </div>
    )
}

export default EnergyMetre
