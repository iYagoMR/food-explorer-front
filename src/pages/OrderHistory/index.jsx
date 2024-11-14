import { Container } from './styles';
import { Header } from '../../components/Header';
import { Bottom } from '../../components/Bottom';
import { Cart } from '../../components/Cart';
import { TbPointFilled } from "react-icons/tb";

import { USER_ROLE } from '../../utils/roles';

import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { PageSection } from '../../components/PageSection';
import { api } from '../../services/api';

export function OrderHistory() {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [orders, setOrders] = useState([]);
    const [orderStatus, setOrderStatus] = useState({}); // To handle individual order status

    const { user } = useAuth();

    // Define the available status options as a constant array
    const statusOptions = ['Pending', 'Preparing', 'Delivered'];

    useEffect(() => {
        async function fetchOrders() {
            try {
                const response = await api.get(`orders`);

                // Initialize the order status state for each order
                const initialStatus = response.data.reduce((acc, order) => {
                    acc[order.id] = order.status;
                    return acc;
                }, {});

                setOrders(response.data);
                setOrderStatus(initialStatus);
            } catch (error) {
                alert("Failed to retrieve orders, try again.");
            }
        }
        fetchOrders();
    }, []);

    // Function to handle status change for an order
    async function handleStatusChange(orderId, newStatus) {
        setOrderStatus(prevState => ({
            ...prevState,
            [orderId]: newStatus
        }));

        handleOrderUpdate(orderId, newStatus)
    }

    async function handleOrderUpdate(orderId, newStatus){
        const data = {
            status: newStatus
        }

        try{
            await api.put(`orders/${orderId}`, data);

            alert("Status updated succesfully.");
        }
        catch(error){
            alert("Something went wrong while trying to update the status of the order, try again.");
        }


    }

    return (
        <Container>
            <Cart 
                cartIsOpen={cartIsOpen} 
                onCloseCart={() => setCartIsOpen(false)}
            />
            <Header onOpenCart={() => setCartIsOpen(true)}/>
            <main>
                <PageSection title="Order history" />

                <div className='table-wrapper'>
                    <table>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Code</th>
                                <th>Details</th>
                                <th>Date & hour</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => {
                                const formattedId = order.id.toString().padStart(8, '0');

                                // Convert UTC date to the user's local time
                                const formattedDate = new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                    timeZone: 'America/New_York' // Replace with your desired time zone
                                }).format(new Date(order.created_at));

                                return (
                                    <tr key={order.id}>
                                        <td>
                                            <TbPointFilled style={{
                                                color: orderStatus[order.id] === 'Preparing' ? 'orange' :
                                                    orderStatus[order.id] === 'Delivered' ? 'green' : 'red'
                                            }} />
                                            {
                                                [USER_ROLE.CUSTOMER].includes(user.role) &&

                                                order.status
                                            }
                                            
                                            {
                                                [USER_ROLE.ADMIN].includes(user.role) &&

                                                <select
                                                    value={orderStatus[order.id] || order.status}
                                                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                                >
                                                    {statusOptions.map(status => (
                                                        <option key={status} value={status}>
                                                            {status}
                                                        </option>
                                                    ))}
                                                </select>
                                            }

                                        </td>
                                        <td>{formattedId}</td>
                                        <td>
                                            {order.orders && order.orders.map(item => (
                                                <span key={item.id}>{item.quantity}x {item.name}, </span>
                                            ))}
                                        </td>
                                        <td>{formattedDate} UTC-4</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </main>
            <Bottom />
        </Container>
    );
}
