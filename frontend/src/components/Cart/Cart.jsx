import { Divider } from '@mui/material';
import React from 'react';
import CartItem from './CartItem';
import BillDetails from './BillDetails';
import DeliveryAddress from './DeliveryAddress';

const items = [1, 1, 1, , 1];

const Cart = () => {
  return (
      <div>
          <main className='lg:flex justify-between'>
              
              <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                  {items.map((item,index) => <CartItem key={index}/>)}
                  <Divider />
                  <BillDetails/>
              </section>

              <Divider orientation='vertical' flexItem />
              <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                  <DeliveryAddress/>
              </section>
          </main>
    </div>
  )
}

export default Cart