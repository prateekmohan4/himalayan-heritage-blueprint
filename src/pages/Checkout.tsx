
import React, { useState } from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Lock } from 'lucide-react';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Checkout' }
  ];

  const cartItems = [
    { name: 'Malana Cream Genetics', price: 85, quantity: 1 },
    { name: 'Parvati Valley Landrace', price: 120, quantity: 2 }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15;
  const total = subtotal + shipping;

  const handleInputChange = (field: string, value: string) => {
    setShippingInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{ backgroundColor: '#F8F7F4', minHeight: '100vh' }}>
      <SharedHeader />
      
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbItems} />
          
          <h1 className="text-4xl font-bold mb-12 text-center">Checkout</h1>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-0.5 mx-2 ${
                      currentStep > step ? 'bg-emerald-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={shippingInfo.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={shippingInfo.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={shippingInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={shippingInfo.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={shippingInfo.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                          id="postalCode"
                          value={shippingInfo.postalCode}
                          onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        />
                      </div>
                    </div>
                    <Button onClick={() => setCurrentStep(2)} className="w-full">
                      Continue to Payment
                    </Button>
                  </CardContent>
                </Card>
              )}

              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lock className="h-5 w-5" />
                      Payment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative">
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        <CreditCard className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" />
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        Back
                      </Button>
                      <Button onClick={() => setCurrentStep(3)} className="flex-1">
                        Review Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Order Review</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Shipping Address</h3>
                      <p className="text-sm text-gray-600">
                        {shippingInfo.firstName} {shippingInfo.lastName}<br />
                        {shippingInfo.address}<br />
                        {shippingInfo.city}, {shippingInfo.postalCode}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Payment Method</h3>
                      <p className="text-sm text-gray-600">**** **** **** 3456</p>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(2)}>
                        Back
                      </Button>
                      <Button className="flex-1">
                        Place Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-sm">{item.name} (x{item.quantity})</span>
                      <span className="text-sm">${item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
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

export default Checkout;
