import React, { useState } from 'react'
import ExchangeRates from './pages/ExchangeRates/ExchangeRates'
import Header from './components/Header/Header'

import { Chart } from 'react-chartjs-2'
Chart.defaults.font.family = 'Open Sans, sans-serif'
Chart.defaults.scale.ticks.color = '#fff'
Chart.defaults.scale.grid.borderColor = '#fff'
Chart.defaults.scale.grid.borderWidth = 3
Chart.defaults.scale.grid.display = false

function App() {

    return (
        <div className="App">
            <Header />
            <div className="container">
                <ExchangeRates />
            </div>
        </div>
    )
}

export default App
