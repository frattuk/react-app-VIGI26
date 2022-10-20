//import { useEffect, useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import NavigationBar from "../../components/NavigationBar";
import DefaultLayout from "../../layouts/DefaultLayout";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import Topbar from "../../components/Topbar";
import { useContext } from "react";
import { PetsContext } from "../../contexts/PetsProvider";

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const CardContainer = styled.div`
  width: 32%;
  margin-bottom: 16px;
`;

const Pets = () => {
  const { pets } = useContext(PetsContext);

  return (
    <Fragment>
      <NavigationBar />
      <DefaultLayout>
        <Topbar>
          <Heading>Pet List</Heading>
          <Button>Add Pet</Button>
        </Topbar>
        <Cards>
          {pets.map((pet) => (
            <CardContainer key={pet.id}>
              <Card
                title={pet.name}
                subtitle={pet.dob}
                description={pet.client_email}
              >
                <Link to={`/health/${pet.id}`}>
                  <Button>View Log</Button>
                </Link>
              </Card>
            </CardContainer>
          ))}
        </Cards>
      </DefaultLayout>
    </Fragment>
  );
};

export default Pets;
