
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AuthModalsProps {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  onCloseLogin: () => void;
  onCloseRegister: () => void;
  onSwitchToRegister: () => void;
  onSwitchToLogin: () => void;
}

const AuthModals: React.FC<AuthModalsProps> = ({
  isLoginOpen,
  isRegisterOpen,
  onCloseLogin,
  onCloseRegister,
  onSwitchToRegister,
  onSwitchToLogin
}) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });

  if (!isLoginOpen && !isRegisterOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-50" />
      
      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Login</h2>
              <Button variant="ghost" size="icon" onClick={onCloseLogin}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <form className="space-y-4">
              <div>
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="login-password">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>
              
              <Button className="w-full">Login</Button>
            </form>
            
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={onSwitchToRegister}
                  className="text-emerald-600 hover:underline"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Sign Up</h2>
              <Button variant="ghost" size="icon" onClick={onCloseRegister}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="register-firstName">First Name</Label>
                  <Input
                    id="register-firstName"
                    value={registerData.firstName}
                    onChange={(e) => setRegisterData(prev => ({ ...prev, firstName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="register-lastName">Last Name</Label>
                  <Input
                    id="register-lastName"
                    value={registerData.lastName}
                    onChange={(e) => setRegisterData(prev => ({ ...prev, lastName: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="register-email">Email</Label>
                <Input
                  id="register-email"
                  type="email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="register-password">Password</Label>
                <Input
                  id="register-password"
                  type="password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="register-confirmPassword">Confirm Password</Label>
                <Input
                  id="register-confirmPassword"
                  type="password"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                />
              </div>
              
              <Button className="w-full">Sign Up</Button>
            </form>
            
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={onSwitchToLogin}
                  className="text-emerald-600 hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModals;
