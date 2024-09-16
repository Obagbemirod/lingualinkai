import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaYoutube, FaLinkedin } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiEdx } from 'react-icons/si';
import { motion } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';

const SignupLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);

  const handleSignIn = (provider) => {
    // In a real app, we would implement OAuth authentication here
    console.log(`Authenticating with ${provider}`);
    // After successful authentication, redirect to the dashboard or LMS
    const redirectTo = location.state?.redirectTo || '/dashboard';
    navigate(redirectTo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would validate the email and password here
    const redirectTo = location.state?.redirectTo || '/dashboard';
    navigate(redirectTo);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const platforms = [
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/account_advanced' },
    { name: 'Udemy', icon: <SiUdemy />, url: 'https://www.udemy.com/join/login-popup/' },
    { name: 'Coursera', icon: <SiCoursera />, url: 'https://www.coursera.org/login' },
    { name: 'edX', icon: <SiEdx />, url: 'https://courses.edx.org/login' },
    { name: 'LinkedIn Learning', icon: <FaLinkedin />, url: 'https://www.linkedin.com/learning/login' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-[#003366] to-[#001833] flex items-center justify-center p-4"
    >
      <Card className="w-full max-w-md bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">{isLogin ? 'Log In' : 'Sign Up'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {platforms.map((platform) => (
              <Button
                key={platform.name}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center"
                onClick={() => window.open(platform.url, '_blank')}
              >
                {React.cloneElement(platform.icon, { className: "mr-2" })}
                Continue with {platform.name}
              </Button>
            ))}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with email</span>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              )}
              <Button type="submit" className="w-full mt-4 bg-[#FF6B00] hover:bg-[#FF8C00] text-white">
                {isLogin ? 'Log In' : 'Sign Up'}
              </Button>
            </form>
            <p className="text-center">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <Button variant="link" onClick={toggleMode} className="text-[#FF6B00]">
                {isLogin ? 'Sign Up' : 'Log In'}
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    
    </motion.div>
  );
};

export default SignupLogin;
