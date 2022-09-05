export const teamApi = (sendRequest, setEmpSelect) => {
  const fetchTeams = async () => {
    try {
      const responseData = await sendRequest(
        `https://pcfy.redberryinternship.ge/api/teams`
      ).then((res) => res.data);

      setEmpSelect((prev) => {
        return {
          ...prev,
          teams: responseData.map((p) => {
            return { id: p.id, label: p.name, value: p.id };
          }),
        };
      });
    } catch (err) {}
  };

  fetchTeams();
};
