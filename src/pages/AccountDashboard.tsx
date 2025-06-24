
import React from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ShoppingBag, MapPin, User, Package } from 'lucide-react';

const AccountDashboard = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    totalOrders: 12,
    totalSpent: 1240
  };

  const recentOrders = [
    { id: '12345', date: '2024-01-15', total: 205, status: 'Delivered' },
    { id: '12344', date: '2024-01-10', total: 165, status: 'Shipped' },
    { id: '12343', date: '2024-01-05', total: 295, status: 'Processing' }
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
                    style={{ backgroundColor: '#F2F2F2' }}
                  >
                    <User className="h-4 w-4" style={{ color: '#16A34A' }} />
                    <span className="font-medium" style={{ color: '#1A1A1A' }}>Dashboard</span>
                  </Link>
                  <Link 
                    to="/account/orders" 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Package className="h-4 w-4" style={{ color: '#737373' }} />
                    <span style={{ color: '#1A1A1A' }}>My Orders</span>
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
            <div className="lg:col-span-3 space-y-8">
              {/* Welcome Message */}
              <div>
                <h1 className="text-3xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
                  Welcome back, {user.name}!
                </h1>
                <p style={{ color: '#737373' }}>
                  Here's what's happening with your account today.
                </p>
              </div>

              {/* Dashboard Stats */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border" style={{ borderColor: '#EAEAEA' }}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full" style={{ backgroundColor: '#16A34A' }}>
                        <ShoppingBag className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold" style={{ color: '#1A1A1A' }}>
                          {user.totalOrders}
                        </p>
                        <p className="text-sm" style={{ color: '#737373' }}>
                          Total Orders
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border" style={{ borderColor: '#EAEAEA' }}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full" style={{ backgroundColor: '#16A34A' }}>
                        <span className="text-white font-bold">$</span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold" style={{ color: '#1A1A1A' }}>
                          ${user.totalSpent}
                        </p>
                        <p className="text-sm" style={{ color: '#737373' }}>
                          Total Spent
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border" style={{ borderColor: '#EAEAEA' }}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full" style={{ backgroundColor: '#16A34A' }}>
                        <Package className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold" style={{ color: '#1A1A1A' }}>
                          3
                        </p>
                        <p className="text-sm" style={{ color: '#737373' }}>
                          Active Orders
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Orders */}
              <Card className="border" style={{ borderColor: '#EAEAEA' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold" style={{ color: '#1A1A1A' }}>
                    Recent Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex justify-between items-center p-4 rounded-lg" style={{ backgroundColor: '#F9F9F9' }}>
                        <div>
                          <p className="font-medium" style={{ color: '#1A1A1A' }}>
                            Order #{order.id}
                          </p>
                          <p className="text-sm" style={{ color: '#737373' }}>
                            {order.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium" style={{ color: '#1A1A1A' }}>
                            ${order.total}
                          </p>
                          <p className="text-sm" style={{ color: order.status === 'Delivered' ? '#16A34A' : '#737373' }}>
                            {order.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link 
                      to="/account/orders"
                      className="text-sm font-medium hover:underline"
                      style={{ color: '#16A34A' }}
                    >
                      View all orders →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccountDashboard;
