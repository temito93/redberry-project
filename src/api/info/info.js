import { formatPhoneNumber } from "../../helper/phone format/phoneConverter";
import { formatDate } from "../../helper/date format/dateFormat";

export const fetchItemInfo = (sendRequest, setPersonInfo, itemId, token) => {
  const fetchItem = async () => {
    try {
      const responseData = await sendRequest(
        `https://pcfy.redberryinternship.ge/api/laptop/${itemId}?token=${token}`
      ).then((res) => res.data);

      const teamData = await sendRequest(
        `https://pcfy.redberryinternship.ge/api/teams`
      ).then((res) => res.data);
      const posData = await sendRequest(
        `https://pcfy.redberryinternship.ge/api/positions`
      ).then((res) => res.data);
      const brandsData = await sendRequest(
        `https://pcfy.redberryinternship.ge/api/brands`
      ).then((res) => res.data);

      const teamName = teamData.find(
        (team) => team.id === responseData.user.team_id
      );
      const positionName = posData.find(
        (p) => p.id === responseData.user.position_id
      );
      const brandsName = brandsData.find(
        (p) => p.id === responseData.laptop.brand_id
      );

      setPersonInfo(() => {
        return [
          {
            team_name: teamName.name,
            position_name: positionName.name,
            brand_name: brandsName.name,
            team_id: responseData.user.team_id,
            brand_id: responseData.laptop.brand_id,
            position_id: responseData.user.position_id,
            cpu_name: responseData.laptop.cpu.name,
            cpu_cores: responseData.laptop.cpu.cores,
            cpu_threads: responseData.laptop.cpu.threads,
            hard_drive_type: responseData.laptop.hard_drive_type,
            image: `https://pcfy.redberryinternship.ge/${responseData.laptop.image}`,
            laptop_name: responseData.laptop.name,
            price: responseData.laptop.price,
            purchase_date: !responseData.laptop.purchase_date
              ? ""
              : formatDate(responseData.laptop.purchase_date),
            ram: responseData.laptop.ram,
            state: responseData.laptop.state === "new" ? "ახალი" : "მეორადი",
            email: responseData.user.email,
            firstname: responseData.user.name,
            phone: formatPhoneNumber(responseData.user.phone_number),
            surname: responseData.user.surname,
          },
        ];
      });
    } catch (err) {}
  };
  fetchItem();
};
