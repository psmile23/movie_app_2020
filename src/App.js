import React from 'react';

function Food({name, linkUrl, target}){
return <h1><a href={linkUrl} target={target}>I love {name}</a></h1>
}

const FoodList = [
    { id:'1'
      , name: 'kimchi'
      , linkUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RLV_AfbZ1rzqlYJe-VjzhAHaE_%26pid%3DApi&f=1'
      , target: '_blank'
    }
    ,{
      id:'2'
      , name: 'mandoo'
      , linkUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Rfy3lvvL7MYMn1IA73Ek4QHaEK%26pid%3DApi&f=1'
      , target: '_blank'
    }
    ,{
      id:'3'
      , name: 'salad'
      , linkUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Pslc4lqs2hf0NWIR2A6WpgHaEK%26pid%3DApi&f=1'
      , target: '_self'
    }
    ,{
      id:'4'
      , name: 'pizza'
      , linkUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.j3Awq9aUKyMu2-OQ-WU1OQHaE3%26pid%3DApi&f=1'
      , target: '_self'
    }
];

function renderFunc(obj){
    return <Food key={obj.id} name={obj.name} linkUrl={obj.linkUrl} target={obj.target}/>
}

function App() {
  return (
    <div className="App">
      {FoodList.map(renderFunc)}
    </div>
  );
}

export default App;
