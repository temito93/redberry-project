export const fetchLists = (sendRequest, setList, token) => {
  const fetchLaptops = async () => {
    try {
      const responseData = await sendRequest(
        `https://pcfy.redberryinternship.ge/api/laptops?token=${token}`
      ).then((res) => res.data);

      setList(() => {
        return responseData.map((e) => {
          return {
            id: e.laptop.id,
            image: `https://pcfy.redberryinternship.ge/${e.laptop.image}`,
            pcname: e.laptop.name,
            name: e.user.name,
            surname: e.user.surname,
          };
        });
      });
    } catch (err) {}
  };
  fetchLaptops();
};
