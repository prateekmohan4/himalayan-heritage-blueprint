
import React from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountOrders = () => {
  const orders = [
    { 
      id: '#12345', 
      date: '2024-01-15', 
      total: 205, 
      status: 'Shipped',
      items: ['Malana Cream Genetics', 'Parvati Valley Landrace'],
      trackingNumber: 'TN123456789'
    },
    { 
      id: '#12344', 
      date: '2024-01-10', 
      total: 85, 
      status: 'Delivered',
      items: ['Charas Valley Seeds'],
      trackingNumber: 'TN123456788'
    },
    { 
      id: '#12343', 
      date: '2024-01-05', 
      total: 150, 
      status: 'Processing',
      items: ['Highland Kush', 'Sacred Valley'],
      trackingNumber: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div style={{ backgroundColor: '#F8F7F4', minHeight: '100vh' }}>
      <SharedHeader />
      
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">My Orders</h1>
            <Link to="/account/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
          
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{order.id}</CardTitle>
                      <p className="text-sm text-gray-600">Placed on {order.date}</p>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="font-medium mb-2">Items Ordered</h4>
                      <ul className="space-y-1">
                        {order.items.map((item, index) => (
                          <li key={index} className="text-sm text-gray-600">• {item}</li>
                        ))}
                      </ul>
                      
                      {order.trackingNumber && (
                        <div className="mt-4">
                          <h4 className="font-medium mb-1">Tracking Number</h4>
                          <p className="text-sm text-gray-600">{order.trackingNumber}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Order Total</h4>
                        <p className="text-xl font-semibold">${order.total}</p>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-1" />
                          Invoice
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccountOrders;
