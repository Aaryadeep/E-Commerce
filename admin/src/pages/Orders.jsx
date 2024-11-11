import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify'
import { assets } from '../assets/assets';

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {

    if (!token) return null;

    try {

      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
      if (response.data.success) {
        console.log(response.data.orders)
        setOrders(response.data.orders);
      }
      else {
        toast.error(error.message);
      }

    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }

  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])

  return (
    <div>
      <h3>ORDER PAGE</h3>
      <div>
        {
          orders.map((order, index) => (
            <div key={index}>
              <img src={order.items[0].images[0]} alt="" />

              <div>

                <div key={index}>
                  {
                    order.items.map((item, index2) => {
                      if (index2 === order.items.length - 1) {
                        return <p key={index2}>{item.name} x {item.quantity} <span>{item.size}</span></p>
                      }
                      else {
                        return <p key={index2}>{item.name} x {item.quantity} <span>{item.size}</span> ,</p>
                      }
                    })
                  }
                </div>

                <p>{order.address.firstName + " " + order.address.lastName}</p>

                <div>
                  <p>{order.address.street}</p>
                  <p>{order.address.city + ", " + order.address.state + ", " + order.address.country}</p>
                </div>

                <div>

                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
