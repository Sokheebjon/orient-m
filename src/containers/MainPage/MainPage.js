import React, { Suspense } from "react";
import { Row, Col, Container } from "rsuite";
import CardItemInfo from "../../components/CardItemInfo/CardItemInfo";
import LoaderAuthPage from '../../components/LoaderAuthPage/LoaderAuthPage';

const info = [
  {
    id: 1,
    count: "150",
    name: "Строительство",
  },
  {
    id: 2,
    count: "53",
    name: "Агрокомплекс",
  },
  {
    id: 3,
    count: "44",
    name: "Производства",
  },
  {
    id: 4,
    count: "65",
    name: "Ритейл",
  },
];

const MainPage = () => {
  return (
    <Suspense fallback={<LoaderAuthPage />}>
      <Container>
        <Row style={{ margin: "20px 30px" }}>
          {info.map((info) => {
            return (
              <Col md={6} sm={12} key={info.id}>
                <CardItemInfo name={info.name} header={info.count} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Suspense>
  );
};

export default React.memo(MainPage);
