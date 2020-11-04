import React, { Suspense } from "react";
import LoaderAuthPage from '../../components/LoaderAuthPage/LoaderAuthPage';

const OrdersPage = () => {
  return (
    <Suspense fallback={<LoaderAuthPage />}>
      <div>OrdersPage</div>  
    </Suspense>
     
  );
};

export default React.memo(OrdersPage);
