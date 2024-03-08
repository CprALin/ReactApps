import React from 'react';

class App extends React.Component {
     render() {
        return <div className='app'>
            <h1>Classy Weather</h1>
            <input type='text' placeholder='Search from to location...' />
        </div>
     }
}

export default App;