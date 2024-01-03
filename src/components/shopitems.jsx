import Prod from "./prod";

import { PRODUCTS, PRODUCTS1 } from "./products";

const Shopitems = () => {
  return (
    <>
      <div className="row">
        {[...PRODUCTS, ...PRODUCTS1].map((product) => (
          <Prod key={PRODUCTS.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default Shopitems;
