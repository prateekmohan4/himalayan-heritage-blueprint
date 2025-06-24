
import React from 'react';
import { useParams } from 'react-router-dom';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  const { orderId } = useParams();

  const orderItems = [
    { name: 'Malana Cream Genetics', price: 85, quantity: 1 },
    { name: 'Parvati Valley Landrace', price: 120, quantity: 1 }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15;
  const total = subtotal + shipping;

  const shippingAddress = {
    name: 'John Doe',
    address: '123 Mountain View Road',
    city: 'Denver',
    postalCode: '80203',
    country: 'United States'
  };

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />
      
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16" style={{ color: '#16A34A' }} />
            </div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
              Thank you for your order!
            </h1>
            <p className="text-lg" style={{ color: '#737373' }}>
              Order #{orderId || '12345'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card className="border" style={{ borderColor: '#EAEAEA' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold" style={{ color: '#1A1A1A' }}>
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium" style={{ color: '#1A1A1A' }}>
                        {item.name}
                      </p>
                      <p className="text-sm" style={{ color: '#737373' }}>
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium" style={{ color: '#1A1A1A' }}>
                      ${item.price * item.quantity}
                    </p>
                  </div>
                ))}
                
                <Separator style={{ backgroundColor: '#EAEAEA' }} />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span style={{ color: '#737373' }}>Subtotal</span>
                    <span style={{ color: '#1A1A1A' }}>${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#737373' }}>Shipping</span>
                    <span style={{ color: '#1A1A1A' }}>${shipping}</span>
                  </div>
                  <Separator style={{ backgroundColor: '#EAEAEA' }} />
                  <div className="flex justify-between font-semibold text-lg">
                    <span style={{ color: '#1A1A1A' }}>Total</span>
                    <span style={{ color: '#1A1A1A' }}>${total}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Information */}
            <Card className="border" style={{ borderColor: '#EAEAEA' }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold" style={{ color: '#1A1A1A' }}>
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium" style={{ color: '#1A1A1A' }}>
                    {shippingAddress.name}
                  </p>
                  <p style={{ color: '#737373' }}>{shippingAddress.address}</p>
                  <p style={{ color: '#737373' }}>
                    {shippingAddress.city}, {shippingAddress.postalCode}
                  </p>
                  <p style={{ color: '#737373' }}>{shippingAddress.country}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Confirmation Message */}
          <div className="mt-12 text-center p-6 rounded-lg" style={{ backgroundColor: '#F2F2F2' }}>
            <p className="text-lg font-medium mb-2" style={{ color: '#1A1A1A' }}>
              Confirmation Email Sent
            </p>
            <p style={{ color: '#737373' }}>
              A confirmation email has been sent to your email address with your order details and tracking information.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
