
import React, { useState } from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { Package, MapPin, User, Plus, Edit, Trash2 } from 'lucide-react';

const AccountAddresses = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Home',
      fullName: 'John Doe',
      address: '123 Mountain View Road',
      city: 'Denver',
      postalCode: '80203',
      country: 'United States',
      isDefault: true
    },
    {
      id: 2,
      name: 'Work',
      fullName: 'John Doe',
      address: '456 Business Center',
      city: 'Boulder',
      postalCode: '80301',
      country: 'United States',
      isDefault: false
    }
  ]);

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleAddAddress = () => {
    setFormData({
      name: '',
      fullName: '',
      address: '',
      city: '',
      postalCode: '',
      country: ''
    });
    setEditingAddress(null);
    setShowAddressForm(true);
  };

  const handleEditAddress = (address: any) => {
    setFormData({
      name: address.name,
      fullName: address.fullName,
      address: address.address,
      city: address.city,
      postalCode: address.postalCode,
      country: address.country
    });
    setEditingAddress(address.id);
    setShowAddressForm(true);
  };

  const handleSaveAddress = () => {
    if (editingAddress) {
      setAddresses(prev => prev.map(addr => 
        addr.id === editingAddress 
          ? { ...addr, ...formData }
          : addr
      ));
    } else {
      const newAddress = {
        id: Math.max(...addresses.map(a => a.id)) + 1,
        ...formData,
        isDefault: addresses.length === 0
      };
      setAddresses(prev => [...prev, newAddress]);
    }
    setShowAddressForm(false);
    setEditingAddress(null);
  };

  const handleDeleteAddress = (id: number) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
  };

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
                  >
                    <Package className="h-4 w-4" style={{ color: '#737373' }} />
                    <span style={{ color: '#1A1A1A' }}>My Orders</span>
                  </Link>
                  <Link 
                    to="/account/addresses" 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    style={{ backgroundColor: '#F2F2F2' }}
                  >
                    <MapPin className="h-4 w-4" style={{ color: '#16A34A' }} />
                    <span className="font-medium" style={{ color: '#1A1A1A' }}>Addresses</span>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-3xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
                    My Addresses
                  </h1>
                  <p style={{ color: '#737373' }}>
                    Manage your shipping addresses
                  </p>
                </div>
                <Button 
                  onClick={handleAddAddress}
                  className="flex items-center space-x-2"
                  style={{ backgroundColor: '#16A34A', color: '#FFFFFF' }}
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Address</span>
                </Button>
              </div>

              {/* Address Form */}
              {showAddressForm && (
                <Card className="border mb-8" style={{ borderColor: '#EAEAEA' }}>
                  <CardHeader>
                    <CardTitle style={{ color: '#1A1A1A' }}>
                      {editingAddress ? 'Edit Address' : 'Add New Address'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" style={{ color: '#1A1A1A' }}>Address Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="e.g., Home, Work"
                          style={{ borderColor: '#EAEAEA' }}
                        />
                      </div>
                      <div>
                        <Label htmlFor="fullName" style={{ color: '#1A1A1A' }}>Full Name</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                          style={{ borderColor: '#EAEAEA' }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="address" style={{ color: '#1A1A1A' }}>Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                        style={{ borderColor: '#EAEAEA' }}
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city" style={{ color: '#1A1A1A' }}>City</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                          style={{ borderColor: '#EAEAEA' }}
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode" style={{ color: '#1A1A1A' }}>Postal Code</Label>
                        <Input
                          id="postalCode"
                          value={formData.postalCode}
                          onChange={(e) => setFormData(prev => ({ ...prev, postalCode: e.target.value }))}
                          style={{ borderColor: '#EAEAEA' }}
                        />
                      </div>
                      <div>
                        <Label htmlFor="country" style={{ color: '#1A1A1A' }}>Country</Label>
                        <Input
                          id="country"
                          value={formData.country}
                          onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                          style={{ borderColor: '#EAEAEA' }}
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        onClick={handleSaveAddress}
                        style={{ backgroundColor: '#16A34A', color: '#FFFFFF' }}
                      >
                        Save Address
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => setShowAddressForm(false)}
                        style={{ borderColor: '#EAEAEA', color: '#1A1A1A' }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Address List */}
              <div className="space-y-4">
                {addresses.map((address) => (
                  <Card key={address.id} className="border" style={{ borderColor: '#EAEAEA' }}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold" style={{ color: '#1A1A1A' }}>
                              {address.name}
                            </h3>
                            {address.isDefault && (
                              <span 
                                className="px-2 py-1 text-xs rounded-full"
                                style={{ backgroundColor: '#16A34A', color: '#FFFFFF' }}
                              >
                                Default
                              </span>
                            )}
                          </div>
                          <p className="font-medium" style={{ color: '#1A1A1A' }}>
                            {address.fullName}
                          </p>
                          <p style={{ color: '#737373' }}>{address.address}</p>
                          <p style={{ color: '#737373' }}>
                            {address.city}, {address.postalCode}
                          </p>
                          <p style={{ color: '#737373' }}>{address.country}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditAddress(address)}
                            className="p-2"
                          >
                            <Edit className="h-4 w-4" style={{ color: '#737373' }} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteAddress(address.id)}
                            className="p-2"
                          >
                            <Trash2 className="h-4 w-4" style={{ color: '#737373' }} />
                          </Button>
                        </div>
                      </div>
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

export default AccountAddresses;
