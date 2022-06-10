import React, { useState } from 'react'
import { Table, Button } from 'reactstrap'

const App = () => {
  const [state, setState] = useState({
    isLoading: false,
    invoices: [],
  })

  const { isLoading, invoices } = state

  const body = [
    {
      id: '100',
      Vendor: 'Hankook',
      Amount: '$18,000',
      Date: '08/21/2019',
    },
    {
      id: '100',
      Vendor: 'Hankook',
      Amount: '$18,000',
      Date: '08/21/2019',
    },
    {
      id: '100',
      Vendor: 'Hankook',
      Amount: '$18,000',
      Date: '08/21/2019',
    },
    {
      id: '100',
      Vendor: 'Hankook',
      Amount: '$18,000',
      Date: '08/21/2019',
    },
    {
      id: '100',
      Vendor: 'Hankook',
      Amount: '$18,000',
      Date: '08/21/2019',
    },
  ]

  const Load = isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className='container border border-secondary rounded center'>
      <div className='row'>
        <div className='col-12'>
          <h4>Pending Invoices - The Company</h4>
        </div>
      </div>
      <div className='row'>
        <div className='.col-xs-12 center text-center'>
          <Table dark responsive striped bordered hover>
            <thead>
              <th>Vendor</th>
              <th>Vendor</th>
              <th>Vendor</th>
            </thead>
          </Table>
        </div>
      </div>
    </div>
  )

  return <>{Load}</>
}

export default App
