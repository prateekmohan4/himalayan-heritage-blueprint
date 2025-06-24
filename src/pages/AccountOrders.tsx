
import React from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Package, MapPin, User } from 'lucide-react';

const AccountOrders = () => {
  const orders = [
    { 
      id: '12345', 
      date: '2024-01-15', 
      total: 205, 
      status: 'Delivered',
      items: ['Malana Cream Genetics', 'Parvati Valley Landrace']
    },
    { 
      id: '12344', 
      date: '2024-01-10', 
      total: 165, 
      status: 'Shipped',
      items: ['Himachal Gold', 'Kashmir Special']
    },
    { 
      id: '12343', 
      date: '2024-01-05', 
      total: 295, 
      status: 'Processing',
      items: ['Kullu Valley Mix', 'Spiti Selection', 'Manali Hash Plant']
    },
    { 
      id: '12342', 
      date: '2023-12-28', 
      total: 180, 
      status: 'Delivered',
      items: ['Tribal Genetics', 'Mountain Haze']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />
      
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="border" style={{ borderColor: '#EAEAEA' }}>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold" style={{ color: '#1A1A1A' }}>
                    My Account
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link 
                    to="/account" 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <User className="h-4 w-4" style={{ color: '#737373' }} />
                    <span style={{ color: '#1A1A1A' }}>Dashboard</span>
                  </Link>
                  <Link 
                    to="/account/orders" 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    style={{ backgroundColor: '#F2F2F2' }}
                  >
                    <Package className="h-4 w-4" style={{ color: '#16A34A' }} />
                    <span className="font-medium" style={{ color: '#1A1A1A' }}>My Orders</span>
                  </Link>
                  <Link 
                    to="/account/addresses" 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MapPin className="h-4 w-4" style={{ color: '#737373' }} />
                    <span style={{ color: '#1A1A1A' }}>Addresses</span>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
                  My Orders
                </h1>
                <p style={{ color: '#737373' }}>
                  View and track your order history
                </p>
              </div>

              <div className="space-y-6">
                {orders.map((order) => (
                  <Card key={order.id} className="border" style={{ borderColor: '#EAEAEA' }}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg font-semibold" style={{ color: '#1A1A1A' }}>
                            Order #{order.id}
                          </CardTitle>
                          <p className="text-sm mt-1" style={{ color: '#737373' }}>
                            Placed on {order.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-lg" style={{ color: '#1A1A1A' }}>
                            ${order.total}
                          </p>
                          <span 
                            className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                            style={{
                              backgroundColor: order.status === 'Delivered' ? '#16A34A' : order.status === 'Shipped' ? '#16A34A' : '#737373',
                              color: '#FFFFFF'
                            }}
                          >
                            {order.status}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-medium mb-2" style={{ color: '#1A1A1A' }}>Items:</h4>
                        <ul className="text-sm space-y-1" style={{ color: '#737373' }}>
                          {order.items.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <Link 
                        to={`/account/orders/${order.id}`}
                        className="text-sm font-medium hover:underline"
                        style={{ color: '#16A34A' }}
                      >
                        View Order Details →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccountOrders;
