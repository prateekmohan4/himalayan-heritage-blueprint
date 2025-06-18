
import React, { useState } from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Checkout = () => {
  const [customerInfo, setCustomerInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const [promoCode, setPromoCode] = useState('');

  const cartItems = [
    { name: 'Malana Cream Genetics', price: 85, quantity: 1 },
    { name: 'Parvati Valley Landrace', price: 120, quantity: 2 }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15;
  const total = subtotal + shipping;

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />
      
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-center" style={{ color: '#1A1A1A' }}>
              Checkout
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Customer & Delivery Details */}
            <div>
              <Card className="border" style={{ borderColor: '#EAEAEA' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold" style={{ color: '#1A1A1A' }}>
                    Customer & Delivery Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-medium mb-4" style={{ color: '#1A1A1A' }}>
                      Contact Information
                    </h3>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-1"
                        style={{ 
                          borderColor: '#EAEAEA',
                          backgroundColor: '#FFFFFF'
                        }}
                      />
                    </div>
                  </div>

                  <Separator style={{ backgroundColor: '#EAEAEA' }} />

                  {/* Delivery Address */}
                  <div>
                    <h3 className="text-lg font-medium mb-4" style={{ color: '#1A1A1A' }}>
                      Delivery Address
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            value={customerInfo.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="mt-1"
                            style={{ 
                              borderColor: '#EAEAEA',
                              backgroundColor: '#FFFFFF'
                            }}
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            value={customerInfo.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="mt-1"
                            style={{ 
                              borderColor: '#EAEAEA',
                              backgroundColor: '#FFFFFF'
                            }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="address" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                          Address
                        </Label>
                        <Input
                          id="address"
                          value={customerInfo.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="mt-1"
                          style={{ 
                            borderColor: '#EAEAEA',
                            backgroundColor: '#FFFFFF'
                          }}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                            City
                          </Label>
                          <Input
                            id="city"
                            value={customerInfo.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            className="mt-1"
                            style={{ 
                              borderColor: '#EAEAEA',
                              backgroundColor: '#FFFFFF'
                            }}
                          />
                        </div>
                        <div>
                          <Label htmlFor="postalCode" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                            Postal Code
                          </Label>
                          <Input
                            id="postalCode"
                            value={customerInfo.postalCode}
                            onChange={(e) => handleInputChange('postalCode', e.target.value)}
                            className="mt-1"
                            style={{ 
                              borderColor: '#EAEAEA',
                              backgroundColor: '#FFFFFF'
                            }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="country" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                          Country
                        </Label>
                        <Input
                          id="country"
                          value={customerInfo.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          className="mt-1"
                          style={{ 
                            borderColor: '#EAEAEA',
                            backgroundColor: '#FFFFFF'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <Card className="border sticky top-24" style={{ borderColor: '#EAEAEA' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold" style={{ color: '#1A1A1A' }}>
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Cart Items */}
                  <div className="space-y-4">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-sm" style={{ color: '#1A1A1A' }}>
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
                  </div>

                  <Separator style={{ backgroundColor: '#EAEAEA' }} />

                  {/* Promo Code */}
                  <div>
                    <Label htmlFor="promoCode" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                      Promo Code
                    </Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="promoCode"
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        style={{ 
                          borderColor: '#EAEAEA',
                          backgroundColor: '#FFFFFF'
                        }}
                      />
                      <Button 
                        variant="outline" 
                        className="px-4"
                        style={{
                          borderColor: '#EAEAEA',
                          backgroundColor: '#F2F2F2',
                          color: '#1A1A1A'
                        }}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <Separator style={{ backgroundColor: '#EAEAEA' }} />

                  {/* Order Totals */}
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

                  {/* Place Order Button */}
                  <Button 
                    className="w-full py-3 font-semibold"
                    style={{ 
                      backgroundColor: '#16A34A',
                      color: '#FFFFFF'
                    }}
                  >
                    Place Order
                  </Button>

                  <p className="text-xs text-center" style={{ color: '#737373' }}>
                    By placing your order, you agree to our Terms of Service and Privacy Policy.
                  </p>
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

export default Checkout;
