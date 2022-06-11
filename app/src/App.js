import React, { useState } from 'react'
import { Table, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faThumbsUp,
  faThumbsDown,
  faImage,
  faMoneyCheckAlt,
  faSearchDollar,
} from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const initialState = [
    {
      id: '100',
      Vendor: 'Firestone',
      Amount: '$12,000',
      Invoice: '1135',
      Date: '03/30/2019',
    },
    {
      id: '200',
      Vendor: 'Goodyear',
      Amount: '$21,000',
      Invoice: '1136',
      Date: '06/12/2019',
    },
    {
      id: '300',
      Vendor: 'Firestone',
      Amount: '$16,000',
      Invoice: '1137',
      Date: '05/15/2020',
    },
    {
      id: '400',
      Vendor: 'Hankook',
      Amount: '$11,000',
      Invoice: '1236',
      Date: '02/25/2020',
    },
    {
      id: '500',
      Vendor: 'Hankook',
      Amount: '$8,000',
      Invoice: '2139',
      Date: '08/21/2021',
    },
  ]

  const [state, setState] = useState({
    isLoading: false,
    invoices: initialState,
  })

  const { isLoading, invoices } = state

  const remove = (id) => {
    console.log(id)
    let updatedInvoices = [...invoices].filter((i) => i.id !== id)
    setState({
      invoices: updatedInvoices,
    })
  }

  let allInvoices = invoices.map((inv) => {
    return (
      <tr key={inv.id}>
        <td>{inv.Vendor}</td>
        <td>{inv.Amount}</td>
        <td>{inv.Invoice}</td>
        <td>{inv.Date}</td>
        <td>
          <Button
            className='btn btn-lg btn-success'
            onClick={() => remove(inv.id)}
          >
            <FontAwesomeIcon icon={faThumbsUp} /> OK
          </Button>
        </td>
        <td>
          <Button
            className='btn btn-lg btn-danger'
            onClick={() => remove(inv.id)}
          >
            <FontAwesomeIcon icon={faThumbsDown} /> Not OK
          </Button>
        </td>
        <td>
          <Button
            className='btn btn-lg btn-info'
            onClick={() => remove(inv.id)}
          >
            <FontAwesomeIcon icon={faMoneyCheckAlt} /> 50%
          </Button>
        </td>
        <td>
          <Button
            className='btn btn-lg btn-warning'
            onClick={() => remove(inv.id)}
          >
            <FontAwesomeIcon icon={faSearchDollar} /> ??
          </Button>
        </td>
        <td>
          <Button
            className='btn btn-lg btn-info'
            onClick={() => remove(inv.id)}
          >
            <FontAwesomeIcon icon={faImage} /> image
          </Button>
        </td>
      </tr>
    )
  })

  const Load = isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className='container border border-secondary rounded center mt-5'>
      <div className='row'>
        <div className='col-12'>
          <h4>Pending Invoices - The Company</h4>
        </div>
      </div>
      <div className='row'>
        <div className='.col-xs-12 center text-center'>
          <Table dark responsive striped bordered hover>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Amount</th>
                <th>Invoice #</th>
                <th>Date</th>
                <th colSpan='4'>Actions</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {invoices.length === 0 ? (
                <tr>
                  <td colSpan='9'>All caught up!</td>
                </tr>
              ) : (
                allInvoices
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )

  return <>{Load}</>
}

export default App
