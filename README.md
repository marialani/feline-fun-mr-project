This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has been hosted on netlify. [![Netlify Status](https://api.netlify.com/api/v1/badges/d5eb7847-384b-4fb6-9d7f-5805e6f70511/deploy-status)](https://app.netlify.com/sites/feline-fun-project/deploys)

## Available Scripts


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Feline Fun Game
![](https://media.giphy.com/media/l2JJDdD7cv4xdGGis/giphy.gif)
by Maria and Reggie

---

## User Journey
User would be able to:
* choose from a drop-down of cats and select one
* see the description and picture of the cat chosen while the cat is alive
* feed the cat every few seconds
* play with the cat

---


![](https://i.imgur.com/UVDrNnX.jpg)

---

## Accessibility
![](https://i.imgur.com/UWxvxNx.png)

---

## Testing
Should have been TDD but stumbled a bit on...

---

## Props and State
![](https://media.giphy.com/media/8UGoPsk9dSkkcQrzT0/giphy.gif)

---

## Code 
![](https://i.imgur.com/ecZH4of.png)

---

### App
```javascript=
const App = () => {
  const [catData, setCatData] = React.useState(null); 
  React.useEffect(() => {
      getAllCatBreeds().then(data => setCatData(data));
  }, []);

  const [catInfo, setCatInfo] = React.useState(null);
  const [selectedCat, setSelectedCat] = React.useState("abys")
  const [catEnergy, setCatEnergy] = React.useState(null);

  React.useEffect(() => {
      getCatInfo(selectedCat).then(data => {setCatInfo(data); setCatEnergy(data[0].breeds[0].energy_level)})
  }, [selectedCat])
  
 if(!catData) return <Loading />

  return (
    <div className="App">
      <header className="App-header">
        
        <CatDropdown catData={catData}  selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
        <CatInfo catInfo={catInfo} catEnergy={catEnergy} setCatEnergy = {setCatEnergy} selectedCat ={selectedCat}/>
        
      </header>
    </div>
  );
}
```

---

### Api Calls
* getAllCatBreeds
* getCatInfo

---

### EnergyMetre

```javascript=
import React from 'react'

const EnergyMetre = ({catEnergy,setCatEnergy,selectedCat}) => {
    
    // const [catEnergy, setCatEnergy] = React.useState(5)
// console.log(props);
    React.useEffect(() => {
        
        const energyCount = setInterval(() => {
            setCatEnergy(prevCatEnergy => {
                if(prevCatEnergy === 0) {clearInterval(energyCount)
                return prevCatEnergy = 0}
                return prevCatEnergy-1
            })
        }, 1500)
        // return (() => clearInterval(energyCount))
    
    },[selectedCat])


    const [disableFeed, setDisableFeed] = React.useState(false)
    const [disablePlay, setDisablePlay] = React.useState(false)

    return (
        <div>
          <progress max="5" value={`{catEnergy}`}></progress>
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
    
          <button className="playBtn" disabled ={disablePlay} onClick={() => {
                setCatEnergy(prevCatEnergy => {
                if (catEnergy === 5) {
                    setDisablePlay(!disablePlay)
                    setTimeout(() => {setDisablePlay(disablePlay)},3000)
                    }
                else if(prevCatEnergy>0 && prevCatEnergy < 5) 
                setDisablePlay(!disablePlay)
                setTimeout(() => {setDisablePlay(disablePlay)},1000)
                return prevCatEnergy +1
          })
          }}>PLAY</button>
          </div>
        </div>
    )
}

export default EnergyMetre

```

---

# Demo

---

## Moving Forward
* add more interaction - e.g. greyed out button on click, user ability to change the background
* about/how to play section
* add pictures/icons interacting with the cat on the frame
* add tests
* base button effect on api properties
* have the progress bar start full for every cat

---

# Thanks!

![](https://media.giphy.com/media/bTvCkBTQDIPyE/giphy.gif)
