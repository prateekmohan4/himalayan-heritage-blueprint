
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

interface AuthModalsProps {
  isLoginOpen: boolean;
  isSignUpOpen: boolean;
  onLoginClose: () => void;
  onSignUpClose: () => void;
  onSwitchToSignUp: () => void;
  onSwitchToLogin: () => void;
}

const AuthModals: React.FC<AuthModalsProps> = ({
  isLoginOpen,
  isSignUpOpen,
  onLoginClose,
  onSignUpClose,
  onSwitchToSignUp,
  onSwitchToLogin
}) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    password: '' 
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    // Handle login logic here
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up attempt:', signUpData);
    // Handle sign up logic here
  };

  return (
    <>
      {/* Login Modal */}
      <Dialog open={isLoginOpen} onOpenChange={onLoginClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold" style={{ color: '#1A1A1A' }}>
              Welcome Back
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleLogin} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="login-email" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                Email
              </Label>
              <Input
                id="login-email"
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                className="mt-1"
                style={{ borderColor: '#EAEAEA' }}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="login-password" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                Password
              </Label>
              <Input
                id="login-password"
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                className="mt-1"
                style={{ borderColor: '#EAEAEA' }}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              style={{ backgroundColor: '#16A34A', color: '#FFFFFF' }}
            >
              Sign In
            </Button>
          </form>
          
          <Separator className="my-4" style={{ backgroundColor: '#EAEAEA' }} />
          
          <div className="text-center">
            <p className="text-sm" style={{ color: '#737373' }}>
              Don't have an account?{' '}
              <button
                onClick={() => {
                  onLoginClose();
                  onSwitchToSignUp();
                }}
                className="font-medium hover:underline"
                style={{ color: '#16A34A' }}
              >
                Sign up
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Sign Up Modal */}
      <Dialog open={isSignUpOpen} onOpenChange={onSignUpClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold" style={{ color: '#1A1A1A' }}>
              Create Account
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSignUp} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="signup-firstname" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                  First Name
                </Label>
                <Input
                  id="signup-firstname"
                  value={signUpData.firstName}
                  onChange={(e) => setSignUpData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="mt-1"
                  style={{ borderColor: '#EAEAEA' }}
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-lastname" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                  Last Name
                </Label>
                <Input
                  id="signup-lastname"
                  value={signUpData.lastName}
                  onChange={(e) => setSignUpData(prev => ({ ...prev, lastName: e.target.value }))}
                  className="mt-1"
                  style={{ borderColor: '#EAEAEA' }}
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="signup-email" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                Email
              </Label>
              <Input
                id="signup-email"
                type="email"
                value={signUpData.email}
                onChange={(e) => setSignUpData(prev => ({ ...prev, email: e.target.value }))}
                className="mt-1"
                style={{ borderColor: '#EAEAEA' }}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="signup-password" className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                Password
              </Label>
              <Input
                id="signup-password"
                type="password"
                value={signUpData.password}
                onChange={(e) => setSignUpData(prev => ({ ...prev, password: e.target.value }))}
                className="mt-1"
                style={{ borderColor: '#EAEAEA' }}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              style={{ backgroundColor: '#16A34A', color: '#FFFFFF' }}
            >
              Create Account
            </Button>
          </form>
          
          <Separator className="my-4" style={{ backgroundColor: '#EAEAEA' }} />
          
          <div className="text-center">
            <p className="text-sm" style={{ color: '#737373' }}>
              Already have an account?{' '}
              <button
                onClick={() => {
                  onSignUpClose();
                  onSwitchToLogin();
                }}
                className="font-medium hover:underline"
                style={{ color: '#16A34A' }}
              >
                Sign in
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthModals;
