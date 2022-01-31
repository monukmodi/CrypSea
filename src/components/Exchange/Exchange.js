import React from 'react'
import './Exchange.css'
import { CgArrowsExchange } from 'react-icons/cg'
import ExchangeButton from '../ExchangeButton/ExchangeButton'
import { cryptoOptions, fiatOptions } from './definitions'

export default function Exchange({ setCrypto, setFiat }) {
    return (
        <div className="Exchange">
            <ExchangeButton options={cryptoOptions} setValue={setCrypto} />
            <CgArrowsExchange size="4rem" color="darkslateblue" />
            <ExchangeButton options={fiatOptions} setValue={setFiat} />
        </div>
    )
}
