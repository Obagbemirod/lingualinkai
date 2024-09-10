import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { motion } from "framer-motion";

const SignupLogin = () => {
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
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              <FaGoogle className="mr-2" /> Continue with Google
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
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
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full bg-[#FF6B00] hover:bg-[#FF8C00] text-white">
              Sign Up / Log In
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SignupLogin;