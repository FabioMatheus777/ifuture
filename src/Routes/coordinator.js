export const goToLogin = (navigate) => {
  navigate("/login");
};

export const goBack = (navigate) => {
  navigate(-1);
};

export const goToFeed = (navigate) => {
  navigate("/");
};

export const goToCart = (navigate) => {
  navigate("/cart");
};

export const goToSingup = (navigate) => {
  navigate("/singup");
};

export const goToSingupAddress = (navigate) => {
  navigate("/singup/address");
};

export const goToRestaurant = (navigate, id) => {
  navigate(`/feed/${id}`);
};

export const goToAddressEdit = (navigate, id) => {
  navigate(`/address/${id}`);
};

export const goToProfile = (navigate) => {
  navigate(`/perfil`);
};

export const goToProfileEdit = (navigate, id) => {
  navigate(`/perfil/${id}`);
};
