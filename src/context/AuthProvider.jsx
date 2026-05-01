import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./authContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedSession = localStorage.getItem("authUser");
    return savedSession ? JSON.parse(savedSession) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("authUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [user]);

  const register = (formData) => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = savedUsers.find(
      (item) => item.email === formData.email
    );

    if (existingUser) {
      toast.error("An account with this email already exists");
      return false;
    }

    const newUser = {
      id: Date.now(),
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      phone: "",
      address: "",
      city: "",
    };

    const updatedUsers = [...savedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("authUser", JSON.stringify(newUser));

    setUser(newUser);
    toast.success("Account created successfully");
    return true;
  };

  const login = (formData) => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = savedUsers.find(
      (item) =>
        item.email === formData.email &&
        item.password === formData.password
    );

    if (!existingUser) {
      toast.error("Invalid email or password");
      return false;
    }

    localStorage.setItem("authUser", JSON.stringify(existingUser));
    setUser(existingUser);
    toast.success("Login successful");
    return true;
  };

  const updateProfile = (formData) => {
    if (!user) return false;

    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUser = {
      ...user,
      fullName: formData.fullName,
      email: user.email,
      password: user.password,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
    };

    const updatedUsers = savedUsers.map((item) =>
      item.id === user.id ? updatedUser : item
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("authUser", JSON.stringify(updatedUser));
    setUser(updatedUser);

    toast.success("Profile updated successfully");
    return true;
  };

  const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}