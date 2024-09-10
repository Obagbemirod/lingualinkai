import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const SignupLogin = () => {
  const navigate = useNavigate();

  const handleSignIn = (provider) => {
    // In a real app, we would implement actual authentication here
    console.log(`Signing in with ${provider}`);
    navigate('/translate');
  };

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    // In a real app, we would validate the email and password here
    navigate('/translate');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-[#003366] to-[#001833] flex items-center justify-center p-4"
    >
      <Card className="w-full max-w-md bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sign Up / Log In</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white" onClick={() => handleSignIn('Google')}>
              <FaGoogle className="mr-2" /> Continue with Google
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => handleSignIn('Facebook')}>
              <FaFacebook className="mr-2" /> Continue with Facebook
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            <form onSubmit={handleEmailSignIn}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full mt-4 bg-[#FF6B00] hover:bg-[#FF8C00] text-white">
                Sign Up / Log In
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SignupLogin;