import Navbar from "../../components/Navbar/Navbar";

import Table from "../../components/Table/Table";
import Button from "../../components/Button/Button";
import Breathe from "../../components/Breathe/Breathe";

const Home = () => {
  const tableHeadings = ["Id", "Name", "Surname", "Email"];
  // const tableData = [
  //   [1, "Rokas", "Andreikenas", "rokas@gmail.com"],
  //   [2, "Tomas", "Tomacius", "tomas@gmail.com"],
  // ];

  const tableData = [
    { id: 1, name: "Rokas", surname: "Andreikenas", email: "rokas@gmail.com" },
    { id: 2, name: "Tomas", surname: "Tomukas", email: "tomas@gmail.com" },
  ];

  const handleRowClick = (row) => {};
  return (
    <div>
      <Navbar />
      <h1>Welcome home</h1>

      <Table
        headings={tableHeadings}
        data={tableData}
        onRowClick={handleRowClick}
      />
      <br />
      <Button>Home button</Button>
      <br />
      <Breathe />
    </div>
  );
};

export default Home;
