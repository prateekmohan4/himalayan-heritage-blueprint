
import React from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, MapPin, User, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountDashboard = () => {
  const recentOrders = [
    { id: '#12345', date: '2024-01-15', total: 205, status: 'Shipped' },
    { id: '#12344', date: '2024-01-10', total: 85, status: 'Delivered' },
    { id: '#12343', date: '2024-01-05', total: 150, status: 'Processing' }
  ];

  return (
    <div style={{ backgroundColor: '#F8F7F4', minHeight: '100vh' }}>
      <SharedHeader />
      
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12">My Account</h1>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/account/orders">
                    <Button variant="outline" className="w-full justify-start">
                      <Package className="h-4 w-4 mr-2" />
                      My Orders
                    </Button>
                  </Link>
                  <Link to="/account/addresses">
                    <Button variant="outline" className="w-full justify-start">
                      <MapPin className="h-4 w-4 mr-2" />
                      Addresses
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Profile Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payment Methods
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Welcome Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Welcome back, John!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Thank you for being part of the Himalayan Heritage community. 
                    Here's a quick overview of your account activity.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">8</div>
                      <div className="text-sm text-gray-600">Total Orders</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">$640</div>
                      <div className="text-sm text-gray-600">Total Spent</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">2</div>
                      <div className="text-sm text-gray-600">Saved Addresses</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Orders */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Orders</CardTitle>
                  <Link to="/account/orders">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <div className="font-medium">{order.id}</div>
                          <div className="text-sm text-gray-600">{order.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">${order.total}</div>
                          <Badge 
                            variant={order.status === 'Delivered' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
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
