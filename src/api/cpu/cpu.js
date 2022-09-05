export const cpuApi = (sendRequest, setLapSelect) => {
  const fetchCpus = async () => {
    try {
      const responseData = await sendRequest(
        `https://pcfy.redberryinternship.ge/api/cpus`
      ).then((res) => res.data);

      setLapSelect((prev) => {
        return {
          ...prev,
          cpus: responseData.map((cpus) => {
            return { id: cpus.id, label: cpus.name, value: cpus.name };
          }),
        };
      });
    } catch (err) {}
  };

  fetchCpus();
};
