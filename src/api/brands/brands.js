export const brandApi = (sendRequest, setLapSelect, setFormData) => {
  const fetchBrands = async () => {
    try {
      const responseData = await sendRequest(
        `https://pcfy.redberryinternship.ge/api/brands`
      ).then((res) => res.data);

      setLapSelect((prev) => {
        return {
          ...prev,
          brands: responseData.map((brand) => {
            return { id: brand.id, label: brand.name, value: brand.id };
          }),
        };
      });
    } catch (err) {}
  };

  fetchBrands();
};
