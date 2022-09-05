export const positionApi = (sendRequest, setEmpSelect, teamId) => {
  const fetchPositions = async () => {
    try {
      const responseData = await sendRequest(
        `https://pcfy.redberryinternship.ge/api/positions`
      ).then((res) => res.data);

      const filteredItem = responseData.filter((p) => p.team_id === teamId);
      if (teamId && filteredItem) {
        setEmpSelect((prev) => {
          return {
            ...prev,
            positions: filteredItem.map((p) => {
              return {
                id: p.id,
                team_id: p.team_id,
                label: p.name,
                value: p.id,
              };
            }),
          };
        });
      }
    } catch (err) {}
  };

  fetchPositions();
};
