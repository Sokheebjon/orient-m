import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import {
  OrganisationTableDiv,
  SelectPickerInput,
  CustomIcon,
  CustomTable,
  CustomHeaderCell,
  CustomColumn,
} from "./OrganisationTableStyle";
import { Col, Row, Grid, Icon, Table } from "rsuite";
import { getAllOrganisationData } from "../../redux/Organizations/OrganizationAction";
import { useHistory } from 'react-router-dom';

const data = [
  {
    label: "Eugenia",
    value: "Eugenia",
    role: "Master",
  },
  {
    label: "Kariane",
    value: "Kariane",
    role: "Master",
  },
  {
    label: "Louisa",
    value: "Louisa",
    role: "Master",
  },
  {
    label: "Marty",
    value: "Marty",
    role: "Master",
  },
  {
    label: "Kenya",
    value: "Kenya",
    role: "Master",
  },
  {
    label: "Hal",
    value: "Hal",
    role: "Developer",
  },
  {
    label: "Julius",
    value: "Julius",
    role: "Developer",
  },
  {
    label: "Travon",
    value: "Travon",
    role: "Developer",
  },
  {
    label: "Vincenza",
    value: "Vincenza",
    role: "Developer",
  },
  {
    label: "Dominic",
    value: "Dominic",
    role: "Developer",
  },
  {
    label: "Pearlie",
    value: "Pearlie",
    role: "Guest",
  },
  {
    label: "Tyrel",
    value: "Tyrel",
    role: "Guest",
  },
  {
    label: "Jaylen",
    value: "Jaylen",
    role: "Guest",
  },
  {
    label: "Rogelio",
    value: "Rogelio",
    role: "Guest",
  },
];

const fakeData = [
  {
    id: 1,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/justinrob/128.jpg",
    city: "New Amieshire",
    email: "Leora13@yahoo.com",
    firstName:
      "Ernest Schuppe SchuppeSchuppeSchuppeSchuppeSchuppeSchuppe Schuppe",
    lastName: "Schuppe",
    street: "Ratke Port",
    zipCode: "17026-3154",
    date: "2016-09-23T07:57:40.195Z",
    bs: "global drive functionalities",
    catchPhrase: "Intuitive impactful software",
    companyName: "Lebsack - Nicolas",
    words: "saepe et omnis",
    sentence: "Quos aut sunt id nihil qui.",
    stars: 820,
    followers: 70,
  },
  {
    id: 2,
    avartar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/thaisselenator_/128.jpg",
    city: "New Gust",
    email: "Mose_Gerhold51@yahoo.com",
    firstName: "Janis",
    lastName: "Vandervort",
    street: "Dickinson Keys",
    zipCode: "43767",
    date: "2017-03-06T09:59:12.551Z",
    bs: "e-business maximize bandwidth",
    catchPhrase: "De-engineered discrete secured line",
    companyName: "Glover - Hermiston",
    words: "deleniti dolor nihil",
    sentence: "Illo quidem libero corporis laborum.",
    stars: 1200,
    followers: 170,
  },
  {
    id: 3,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/arpitnj/128.jpg",
    city: "Lefflerstad",
    email: "Frieda.Sauer61@gmail.com",
    firstName: "Makenzie",
    lastName: "Bode",
    street: "Legros Divide",
    zipCode: "54812",
    date: "2016-12-08T13:44:26.557Z",
    bs: "plug-and-play e-enable content",
    catchPhrase: "Ergonomic 6th generation challenge",
    companyName: "Williamson - Kassulke",
    words: "quidem earum magnam",
    sentence: "Nam qui perferendis ut rem vitae saepe.",
    stars: 610,
    followers: 170,
  },
  {
    id: 4,
    avartar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/brajeshwar/128.jpg",
    city: "East Catalina",
    email: "Eloisa.OHara@hotmail.com",
    firstName: "Ciara",
    lastName: "Towne",
    street: "Schimmel Ramp",
    zipCode: "76315-2246",
    date: "2016-07-19T12:54:30.994Z",
    bs: "extensible innovate e-business",
    catchPhrase: "Upgradable local model",
    companyName: "Hilpert, Eichmann and Brown",
    words: "exercitationem rerum sit",
    sentence: "Qui rerum ipsa atque qui.",
    stars: 5322,
    followers: 170,
  },
  {
    id: 5,
    avartar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/dev_essentials/128.jpg",
    city: "Ritchieborough",
    email: "Brisa46@hotmail.com",
    firstName: "Suzanne",
    lastName: "Wolff",
    street: "Lemuel Radial",
    zipCode: "88870-3897",
    date: "2017-02-23T17:11:53.875Z",
    bs: "back-end orchestrate networks",
    catchPhrase: "Exclusive human-resource knowledge base",
    companyName: "Mayer - Considine",
    words: "voluptatum tempore at",
    sentence: "Enim quia deleniti molestiae aut.",
    stars: 852,
    followers: 770,
  },
  {
    id: 6,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/petrangr/128.jpg",
    city: "Lake Emery",
    email: "Cody.Schultz56@gmail.com",
    firstName: "Alessandra",
    lastName: "Feeney",
    street: "Mosciski Estate",
    zipCode: "81514",
    date: "2016-06-30T05:23:18.734Z",
    bs: "sexy evolve technologies",
    catchPhrase: "Virtual hybrid throughput",
    companyName: "Nikolaus and Sons",
    words: "alias minus repudiandae",
    sentence: "Sed qui eius excepturi sunt voluptates.",
    stars: 3209,
    followers: 2780,
  },
  {
    id: 7,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/knilob/128.jpg",
    city: "East Dejuan",
    email: "Enrico_Beer@yahoo.com",
    firstName: "Margret",
    lastName: "Heller",
    street: "Gunner Drive",
    zipCode: "17423-9317",
    date: "2017-03-13T21:09:47.253Z",
    bs: "wireless morph synergies",
    catchPhrase: "Profit-focused radical help-desk",
    companyName: "Corwin, Maggio and Wintheiser",
    words: "temporibus possimus neque",
    sentence: "Eum amet ea non natus qui assumenda illo officia qui.",
    stars: 9920,
    followers: 570,
  },
  {
    id: 8,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/tom_even/128.jpg",
    city: "Schummtown",
    email: "Mitchel.Herman@yahoo.com",
    firstName: "Emiliano",
    lastName: "Moore",
    street: "Maria Junctions",
    zipCode: "33930-7081",
    date: "2016-03-27T07:26:57.345Z",
    bs: "customized integrate e-tailers",
    catchPhrase: "Total system-worthy contingency",
    companyName: "Gulgowski - Botsford",
    words: "deleniti ipsa hic",
    sentence: "Ducimus id quaerat neque.",
    stars: 3820,
    followers: 880,
  },
  {
    id: 9,
    avartar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/chandlervdw/128.jpg",
    city: "Gilberthaven",
    email: "Gaylord_Reichel16@yahoo.com",
    firstName: "Alessandra",
    lastName: "Smith",
    street: "Kali Spurs",
    zipCode: "01370",
    date: "2017-01-24T22:11:53.835Z",
    bs: "extensible repurpose action-items",
    catchPhrase: "Virtual dedicated definition",
    companyName: "Maggio LLC",
    words: "libero unde est",
    sentence: "Non adipisci hic laboriosam et qui laudantium aspernatur.",
    stars: 330,
    followers: 590,
  },
  {
    id: 10,
    avartar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/mwarkentin/128.jpg",
    city: "Felicitychester",
    email: "Eileen48@gmail.com",
    firstName: "Eldridge",
    lastName: "Bins",
    street: "Casper Squares",
    zipCode: "80025-1552",
    date: "2016-07-20T05:59:45.630Z",
    bs: "cutting-edge expedite partnerships",
    catchPhrase: "Organic user-facing functionalities",
    companyName: "Leffler, Cummerata and Price",
    words: "sed exercitationem quas",
    sentence: "Voluptas dolorem quasi aspernatur.",
    stars: 923,
    followers: 704,
  },
  {
    id: 11,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg",
    city: "Caleighhaven",
    email: "Rico_Nolan@hotmail.com",
    firstName: "Claude",
    lastName: "Hermiston",
    street: "Bode Pine",
    zipCode: "76773",
    date: "2017-03-13T08:02:41.211Z",
    bs: "back-end innovate infomediaries",
    catchPhrase: "Stand-alone global customer loyalty",
    companyName: "Heller, Rosenbaum and Lockman",
    words: "ut quia ut",
    sentence: "Eos consequatur magni incidunt.",
    stars: 421,
    followers: 403,
  },
  {
    id: 12,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/knilob/128.jpg",
    city: "Herzogmouth",
    email: "Dawn_Metz@yahoo.com",
    firstName: "Clarabelle",
    lastName: "Ankunding",
    street: "Nolan Summit",
    zipCode: "04355",
    date: "2016-07-09T09:07:34.744Z",
    bs: "granular deliver relationships",
    catchPhrase: "Multi-lateral zero defect analyzer",
    companyName: "Mante, Oberbrunner and Collins",
    words: "eos fuga repellat",
    sentence: "Cum corporis molestias quia.",
    stars: 8203,
    followers: 704,
  },
  {
    id: 13,
    avartar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/kirangopal/128.jpg",
    city: "Eulaliabury",
    email: "Ron.Franecki@gmail.com",
    firstName: "Hubert",
    lastName: "Boehm",
    street: "Anastacio Springs",
    zipCode: "91444",
    date: "2016-04-22T16:37:24.331Z",
    bs: "one-to-one transition methodologies",
    catchPhrase: "Switchable asymmetric function",
    companyName: "Greenholt, Homenick and Considine",
    words: "sed incidunt quo",
    sentence: "Sed adipisci aliquam ut eius ut ipsa consequatur.",
    stars: 8209,
    followers: 909,
  },
  {
    id: 14,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/kerem/128.jpg",
    city: "East Alice",
    email: "Hayley52@yahoo.com",
    firstName: "Vladimir",
    lastName: "Breitenberg",
    street: "Lula Port",
    zipCode: "04635",
    date: "2016-09-26T01:25:23.057Z",
    bs: "virtual monetize communities",
    catchPhrase: "Mandatory user-facing methodology",
    companyName: "Kshlerin - Pfeffer",
    words: "eaque enim unde",
    sentence:
      "Sed voluptas fugiat nihil delectus architecto et voluptatibus quis voluptas.",
    stars: 8251,
    followers: 178,
  },
  {
    id: 15,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/layerssss/128.jpg",
    city: "East Frankie",
    email: "Duane.Rempel@hotmail.com",
    firstName: "Haylee",
    lastName: "Purdy",
    street: "Dena Walk",
    zipCode: "94111-0802",
    date: "2016-11-26T16:36:38.472Z",
    bs: "enterprise drive users",
    catchPhrase: "Customizable non-volatile paradigm",
    companyName: "Lemke, Mitchell and Harber",
    words: "dolores ipsum earum",
    sentence: "Nemo molestiae ad sit cupiditate neque.",
    stars: 3099,
    followers: 707,
  },
  {
    id: 16,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/dreizle/128.jpg",
    city: "New Kendall",
    email: "Eddie_Bartell@hotmail.com",
    firstName: "Herminia",
    lastName: "Altenwerth",
    street: "Kshlerin Cape",
    zipCode: "86614-9727",
    date: "2016-09-28T19:50:18.308Z",
    bs: "cutting-edge target models",
    catchPhrase: "Triple-buffered fault-tolerant concept",
    companyName: "Gislason - Nicolas",
    words: "perferendis magnam minima",
    sentence: "Fuga in dolorem vel eligendi deserunt voluptatem.",
    stars: 8491,
    followers: 463,
  },
  {
    id: 17,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/nessoila/128.jpg",
    city: "Port Whitney",
    email: "Josephine_Legros@yahoo.com",
    firstName: "Erick",
    lastName: "Klein",
    street: "Megane Cliffs",
    zipCode: "42168",
    date: "2016-04-02T05:03:42.377Z",
    bs: "user-centric leverage experiences",
    catchPhrase: "Centralized systematic parallelism",
    companyName: "Olson and Sons",
    words: "facere est in",
    sentence: "Ducimus aliquid ut.",
    stars: 9820,
    followers: 670,
  },
  {
    id: 18,
    avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrebay007/128.jpg",
    city: "West Meda",
    email: "Jared.Hudson@hotmail.com",
    firstName: "Lisandro",
    lastName: "Barton",
    street: "Torrance Union",
    zipCode: "19477",
    date: "2016-08-01T14:24:45.209Z",
    bs: "open-source exploit markets",
    catchPhrase: "Open-source impactful framework",
    companyName: "Volkman and Sons",
    words: "a tempore hic",
    sentence: "Quod veniam nemo impedit mollitia.",
    stars: 1220,
    followers: 708,
  },
  {
    id: 19,
    avartar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/brenton_clarke/128.jpg",
    city: "Darrenport",
    email: "Delpha.Tromp9@yahoo.com",
    firstName: "Ashton",
    lastName: "Daugherty",
    street: "Hermann Port",
    zipCode: "25133-9181",
    date: "2016-07-29T09:49:39.424Z",
    bs: "wireless optimize deliverables",
    catchPhrase: "Ergonomic human-resource algorithm",
    companyName: "Grady LLC",
    words: "libero ut repellat",
    sentence: "Vel quod ullam.",
    stars: 420,
    followers: 30,
  },
  {
    id: 20,
    avartar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/josep_martins/128.jpg",
    city: "Janiyahaven",
    email: "Ariel.Maggio9@yahoo.com",
    firstName: "Cassandra",
    lastName: "Schmitt",
    street: "Windler Lodge",
    zipCode: "87582-2944",
    date: "2017-01-21T12:35:27.741Z",
    bs: "holistic cultivate relationships",
    catchPhrase: "Enterprise-wide system-worthy data-warehouse",
    companyName: "Ankunding Group",
    words: "blanditiis voluptates repellat",
    sentence: "Non quis non dignissimos sit rerum voluptatem culpa quibusdam.",
    stars: 20,
    followers: 188,
  },
];

const { Cell } = Table;

const OrganisationTable = ({ getAllOrganisationData, orgData, totalCount }) => {
  const [items, setItems] = useState([]);
  const [displayLength, setDisplayLength] = useState(10);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
    // displayLength: 10,
    // loading: false,
    // page: 1
  const history = useHistory();

  const fetchData = useCallback(() => {
    return getAllOrganisationData(history);
  }, [getAllOrganisationData, history]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(orgData, "organization Data", totalCount, "totalCount");

  const handleChangePage = (dataKey) => {
    setPage(dataKey);
  };

  const handleChangeLength = (dataKey) => {
    setPage(1);
    setDisplayLength(dataKey);
  };

  const getData = () => {
    return fakeData.filter((v, i) => {
      const start = displayLength * (page - 1);
      const end = start + displayLength;
      return i >= start && i < end;
    });
  };

  const handleUpdate = () => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems(data);
      }, 1000);
    }
  };

  return (
    <OrganisationTableDiv>
      <Grid fluid>
        <Row>
          <Col md={6} sm={12}>
            <h4
              style={{ color: "white", fontSize: "25px", userSelect: "none" }}
            >
              Организации
            </h4>
          </Col>
          <Col
            md={16}
            sm={12}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <SelectPickerInput
              data={items}
              style={{ width: 224 }}
              onOpen={handleUpdate}
              placeholder="Пользователи"
              onSearch={handleUpdate}
              renderMenu={(menu) => {
                if (items.length === 0) {
                  return (
                    <p
                      style={{ padding: 4, color: "#999", textAlign: "center" }}
                    >
                      <Icon icon="spinner" spin /> Loading...
                    </p>
                  );
                }
                return menu;
              }}
            />

            <SelectPickerInput
              data={items}
              style={{ width: 224, marginLeft: "30px", background: "none" }}
              onOpen={handleUpdate}
              placeholder="Направление бизнеса"
              onSearch={handleUpdate}
              renderMenu={(menu) => {
                if (items.length === 0) {
                  return (
                    <p
                      style={{ padding: 4, color: "#999", textAlign: "center" }}
                    >
                      <Icon icon="spinner" spin /> Loading...
                    </p>
                  );
                }
                return menu;
              }}
            />
          </Col>
          <Col
            md={2}
            sm={12}
            style={{ paddingLeft: "65px", paddingTop: "5px" }}
          >
            <CustomIcon
              style={{
                color: "white",
                width: "20px",
                marginTop: "20px",
                justifyContent: "flex-end",
              }}
              icon="plus"
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "50px" }}>
          <Col>
            <CustomTable wordWrap height={620} data={orgData && orgData} loading={loading}>
              <CustomColumn align="center" width={40}>
                <CustomHeaderCell>#</CustomHeaderCell>
                <Cell dataKey="id" />
              </CustomColumn>

              <CustomColumn align="center" width={248}>
                <CustomHeaderCell style={{display: 'flex', flexDirection: 'column'}}>
                  <span>Название организации</span>
                  <span></span>
                </CustomHeaderCell>
                <Cell dataKey="name" />
              </CustomColumn>

               <CustomColumn align="center" width={200}>
                <CustomHeaderCell>Пользователи</CustomHeaderCell>
                <Cell dataKey="nick" />
              </CustomColumn>

               <CustomColumn align="center" width={200}>
                <CustomHeaderCell>Номер телефона</CustomHeaderCell>
                <Cell dataKey="inn" />
              </CustomColumn>
              {/* <CustomColumn align="center" width={200}>
                <CustomHeaderCell>Эл. адрес</CustomHeaderCell>
                <Cell dataKey="companyName" />
              </CustomColumn> */}
              {/* <CustomColumn align="center" width={200}>
                <CustomHeaderCell>Адрес</CustomHeaderCell>
                <Cell dataKey="addresses" />
              </CustomColumn> */}
              {/* <CustomColumn align="center" width={200}>
                <CustomHeaderCell>Действия</CustomHeaderCell>
                <Cell dataKey="addresses" />
              </CustomColumn> */}
              
              
            </CustomTable>

            <Table.Pagination
              lengthMenu={[
                {
                  value: 5,
                  label: 5,
                },
                {
                  value: 10,
                  label: 10,
                },
              ]}
              activePage={page}
              displayLength={displayLength}
              total={totalCount}
              onChangePage={handleChangePage}
              onChangeLength={handleChangeLength}
            />
          </Col>
        </Row>
      </Grid>
    </OrganisationTableDiv>
  );
};

const mapState = (state) => {
  return {
    loadingOrg: state.organization.loadingOrg,
    orgData: state.organization.orgData,
    totalCount: state.organization.totalCount,
  };
};

export default connect(mapState, { getAllOrganisationData })(OrganisationTable);
