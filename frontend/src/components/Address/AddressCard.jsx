import { Button, Card } from '@mui/material';
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';

const AddressCard = ({item,showButton, handleSelectAddress}) => {
    const [selectedAddress, setSelectedAddress] = useState(null);

  return (
      <Card className='flex gap-5 w-64 p-5'>
          <HomeIcon/>
          <div className='space-y-3 text-gray-500'>
              <h2 className='font-semibold text-lg text-white'>Home</h2>
              <p>44 Latañafrancia St. Poblacion Ilawod, Lambunao, Iloilo</p>
              {showButton && <Button variant="outlined" fullWidth onClick={() => handleSelectAddress(item)}>Select</Button>}
          </div>
      </Card>
  )
}

export default AddressCard