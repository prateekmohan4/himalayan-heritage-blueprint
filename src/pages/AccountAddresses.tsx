import React, { useState } from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Edit, Trash2, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountAddresses = () => {
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newAddress, setNewAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const [addresses] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Mountain View Drive',
      city: 'Boulder',
      postalCode: '80301',
      country: 'United States',
      isDefault: true
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      address: '456 Valley Road',
      city: 'Aspen',
      postalCode: '81611',
      country: 'United States',
      isDefault: false
    }
  ]);

  const handleInputChange = (field: string, value: string) => {
    setNewAddress(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveAddress = () => {
    // Save logic would go here
    setIsAddingNew(false);
    setNewAddress({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      postalCode: '',
      country: ''
    });
  };

  return (
    <div style={{ backgroundColor: '#F8F7F4', minHeight: '100vh' }}>
      <SharedHeader />
      
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">My Addresses</h1>
            <Link to="/account/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
          
          <div className="space-y-6">
            {/* Existing Addresses */}
            {addresses.map((address) => (
              <Card key={address.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      {address.firstName} {address.lastName}
                      {address.isDefault && (
                        <span className="ml-2 text-sm bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                          Default
                        </span>
                      )}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-600">
                    <p>{address.address}</p>
                    <p>{address.city}, {address.postalCode}</p>
                    <p>{address.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Add New Address */}
            {isAddingNew ? (
              <Card>
                <CardHeader>
                  <CardTitle>Add New Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={newAddress.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={newAddress.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={newAddress.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={newAddress.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        value={newAddress.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      value={newAddress.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <Button onClick={handleSaveAddress}>Save Address</Button>
                    <Button variant="outline" onClick={() => setIsAddingNew(false)}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-dashed">
                <CardContent className="flex items-center justify-center py-12">
                  <Button onClick={() => setIsAddingNew(true)} className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add New Address
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccountAddresses;
