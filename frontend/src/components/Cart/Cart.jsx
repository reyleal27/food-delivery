import { Divider, Modal } from '@mui/material';
import React, { useState } from 'react';
import CartItem from './CartItem';
import BillDetails from './BillDetails';
import DeliveryAddress from '../Address/DeliveryAddress';
import AddressModal from '../Address/AddressModal';

const items = [1, 1, 1, , 1];

const Cart = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);

    const openAddressModal = () => {
        setIsModalOpen(true);
    };

    const closeAddressModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (value) => {
        console.log("form value", value)
    }

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
                   <DeliveryAddress handleOpenAddressModal={openAddressModal} />
              </section>
              {isModalOpen && <AddressModal handleClose={closeAddressModal}/>}
          </main>
    </div>
  )
}

export default Cart;