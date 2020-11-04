import React, {Suspense} from 'react';
import LoaderAuthPage from '../../components/LoaderAuthPage/LoaderAuthPage';
import {useHistory} from 'react-router-dom';
import {MainOrganisationRow, MainContainer} from './OrganizationsStyle';
import OrganisationTable from '../../components/OrganisationTable/OrganisationTable';



const Organizations = () => {

    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem("token");
        history.push("/login");
    };

    return (
        <Suspense fallback={<LoaderAuthPage />}>
            <MainContainer>
                <MainOrganisationRow>
                    <OrganisationTable />
                </MainOrganisationRow>
            </MainContainer>
        </Suspense>
    )
}

export default Organizations
