import React, { useState } from "react";
import { connect } from "react-redux";
import { makeLogin } from "../../redux/Auth/AuthActions";
import {
  FlexboxGrid,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Icon,
  InputGroup,
  Schema,
  Message,
  Row,
  Col,
} from "rsuite";
import {
  PInputGroup,
  MainLoginDiv,
  AuthButton,
  AuthHeader,
} from "./AuthPageStyle";
import LoginBack from "../../images/loginBack.jpg";
import HideEye from "../../components/Icons/HideEye";
import MainLogo from "../../components/Icons/MainLogo";
import { Redirect } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18n from "../../i18next/i18next";
const { StringType } = Schema.Types;

const model = Schema.Model({
  UserName: StringType().isRequired("Логинни киитинг!"),
  Password: StringType().isRequired("Паролни киитинг!"),
});

const AuthPage = ({
  makeLogin,
  beginLogin,
  succesLogin,
  failureLogin,
  userData,
  err,
}) => {
  const [formValue, setFormValue] = useState({
    UserName: "",
    Password: "",
  });
  const [myClose, setMyClose] = useState(true);

  // useEffect(() => {
  //   useTime
  // }, [input])

  const [hide, setHide] = useState(true);
  const [formError, setFormError] = useState({});
  const { t } = useTranslation();

  // const history = useHistory();

 
  const handleLogin = (e) => {
    e.preventDefault();
    makeLogin(formValue.UserName, formValue.Password);
    setFormValue({ UserName: "", Password: "" });
  };

  // const handleClick = (lang) => {
  //   i18n.changeLanguage(lang);
  // };

  const hidePassword = () => {
    setHide(!hide);
  };

  // console.log(err, "err", userData, "userData");

  if (succesLogin) {
    // history.push("/main");
    return <Redirect to="/main" />;
  }

  return (
    <MainLoginDiv back={LoginBack}>
      <FlexboxGrid justify="center">
        <Row>
          <Col style={{width: '500px'}} sm={24} md={24}>
            <Panel
              style={{ background: "rgb(38,39,63, 0.8)", color: "white" }}
              header={
                <AuthHeader>
                  <MainLogo width={52} height={62} />
                  <div>
                    <h3>OrientWS</h3>
                    <span>GROUP OF COMPANIES</span>
                  </div>
                </AuthHeader>
              }
            >
              <Form
                onSubmit={handleLogin}
                onChange={(formValue) => {
                  setFormValue(formValue);
                }}
                onCheck={(formError) => {
                  setFormError(formError);
                }}
                formValue={formValue}
                model={model}
                fluid
              >
                {failureLogin && (
                  <Message
                    closable={myClose}
                    showIcon
                    type="error"
                    description="Error"
                  />
                )}
                <FormGroup>
                  <ControlLabel>Логин: </ControlLabel>
                  <FormControl name="UserName" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Парол: </ControlLabel>
                  <PInputGroup inside>
                    <FormControl
                      name="Password"
                      type={hide ? "text" : "password"}
                    />
                    <InputGroup.Addon>
                      {hide ? (
                        <div onClick={hidePassword}>
                          <HideEye width={14} height={14} />
                        </div>
                      ) : (
                        <Icon onClick={hidePassword} icon="eye" />
                      )}
                    </InputGroup.Addon>
                  </PInputGroup>
                </FormGroup>
                <FormGroup>
                  <AuthButton
                    style={{ width: "100% !important" }}
                    onClick={handleLogin}
                    type="submit"
                    appearance="primary"
                    loading={beginLogin}
                    disabled={beginLogin}
                  >
                    {t("Login.1")}
                  </AuthButton>
                </FormGroup>
              </Form>
            </Panel>
          </Col>
        </Row>
      </FlexboxGrid>
      {/* {failureLogin &&
        Notification["error"]({
          title: (
            <p style={{ fontSize: "13px", color: "white" }}>
              Xatolik Bor
            </p>
          ),
          description: (
            <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
          ),
        })} */}
    </MainLoginDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    beginLogin: state.auth.beginLogin,
    succesLogin: state.auth.succesLogin,
    failureLogin: state.auth.failureLogin,
    userData: state.auth.userData,
    err: state.auth.err,
  };
};

export default connect(mapStateToProps, { makeLogin })(AuthPage);
