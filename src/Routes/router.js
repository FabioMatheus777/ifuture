import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddressEdit } from "../Pages/AddressEdit/AddressEdit";
import { Cart } from "../Pages/Cart/cart";
import { Feed } from "../Pages/Feed/Feed";
import { Login } from "../Pages/Login/login";
import { Profile } from "../Pages/Profile/Profile";
import { ProfileEdit } from "../Pages/ProfileEdit/ProfileEdit";
import { Restaurante } from "../Pages/Restaurant/restaurant";
import { Singup } from "../Pages/Singup/singup";
import { SingupAddress } from "../Pages/SingupAddress/singupAddress";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Feed />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/singup/address" element={<SingupAddress />} />
        <Route path="/address/:profileId" element={<AddressEdit />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/feed/:restaurantId" element={<Restaurante />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/perfil/:profileId" element={<ProfileEdit />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
