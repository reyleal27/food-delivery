import React from 'react'
import AddressCard from './AddressCard';
import { Button, Card } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const DeliveryAddress = ({handleOpenAddressModal}) => {
    const createOrderUsingSelectedAddress = () => {

    };

  

  return (
      <div>
          <h2 className='text-center font-semibold py-10 text-2xl'>Choose Delivery Address</h2>
          <div className='flex gap-5 flex-wrap justify-center'>
              {[1, 1, 1, 1].map(item => <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item } showButton={true} />)}
           <Card className='flex gap-5 w-64 p-5'>
                  <AddLocationAltIcon />
                  <div className='space-y-3 text-gray-500'>
                    <h2 className='font-semibold text-lg text-white'>Add New Address</h2>
                  <Button variant='outlined' fullWidth onClick={handleOpenAddressModal}>Add</Button>
                  </div>
                  
              </Card>
          </div>
        
      </div>
  )
}

export default DeliveryAddress