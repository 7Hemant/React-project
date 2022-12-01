import React, { useEffect, useState } from "react";
import { AllpostApi } from "../api/APi";
import Card from "react-bootstrap/Card";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  useEffect(() => {
    AllpostApi().then((res) => {
      console.log(res);
      setdata(res);
      setLoading(false);
    });
  }, []);

  if (loading === true) {
    return <>loading..</>;
  }

  return (
    <div>
      {data &&
        data?.map((item) => (
          <Card
            style={{
              margin: "1rem",
              padding: "1rem",
              textAlign: "left",
            }}
            key={item.id}
          >
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Home;
