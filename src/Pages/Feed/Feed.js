import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardRestaurant } from "../../Components/CardRestaurant/CardRestaurant";
import { BASE_URL } from "../../Constants/url";
import { Header } from "../../Components/Header/Header";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  CardRestaurants,
  ContainerFeed,
  InputMaterialSearch,
  Menu,
  MenuItem,
} from "./styled";
import { Menu as MenuMain } from "../../Components/Menu/Menu";
import { Order } from "../../Components/Order/Order";
import { useGlobal } from "../../Global/GlobalStateContext";

export const Feed = () => {
  useProtectedPage();

  const { setters, states } = useGlobal();
  const { setOrder } = setters;
  const { order } = states;

  const [restaurants, setRestaurants] = useState([]);
  const [inputSearch, setInputSearch] = useState([]);
  const [categoryRestaurant, setCategoryRestaurant] = useState([]);
  const [valueCategory, setValueCategory] = useState([]);

  const getRestaurants = async () => {
    await axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
        filterCategory(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getOrder = async () => {
    await axios
      .get(`${BASE_URL}/active-order`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setOrder(res.data.order);
        const expiresAt = res.data.order.expiresAt;
        setTimeout(() => {
          getOrder();
        }, expiresAt - new Date().getTime());
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  let filterCategory = (restaurants) => {
    const arrayAux = [];
    restaurants.map((restaurant) => {
      arrayAux.push(restaurant.category);
    });
    const newArray = [...new Set(arrayAux)];

    const changeObjectArray = [];

    newArray.map((category) => {
      const insertObj = { category, select: false };
      changeObjectArray.push(insertObj);
    });
    setCategoryRestaurant(changeObjectArray);
  };

  console.log("order", order);

  useEffect(() => {
    getRestaurants();
    getOrder();
  }, []);

  const filterRestaurant = restaurants
    .filter((restaurant) =>
      inputSearch
        ? restaurant.name
            .toLowerCase()
            .includes(inputSearch.toString().toLowerCase())
        : true
    )
    .filter((restaurant) =>
      valueCategory
        ? restaurant.category
            .toLowerCase()
            .includes(valueCategory.toString().toLowerCase())
        : true
    )
    .map((restaurants) => {
      return <CardRestaurant restaurants={restaurants} />;
    });

  const changeCategory = (category) => {
    setValueCategory(category);

    const result = categoryRestaurant.map((cat) => {
      if (cat.category === category) {
        return {
          ...cat,
          select: true,
        };
      } else {
        return {
          ...cat,
          select: false,
        };
      }
    });
    setCategoryRestaurant(result);
  };

  return (
    <ContainerFeed>
      <Header title={"iFuture"} logOut={true} />
      <CardRestaurants>
        <InputMaterialSearch
          id="outlined-basic"
          type={"text"}
          label="Buscar"
          variant="outlined"
          placeholder={"Buscar"}
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />

        <Menu>
          <MenuItem onClick={() => changeCategory("")}>Todos</MenuItem>
          {categoryRestaurant.map((category) => {
            return (
              <MenuItem
                select={category.select}
                onClick={() => changeCategory(category.category)}
              >
                {category.category}
              </MenuItem>
            );
          })}
        </Menu>
        {filterRestaurant}
      </CardRestaurants>
      {order && (
        <Order
          totalPrice={order.totalPrice}
          restaurantName={order.restaurantName}
        />
      )}
      <MenuMain page={"home"} />
    </ContainerFeed>
  );
};
