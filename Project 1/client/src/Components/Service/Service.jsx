import React from "react";
import { useAuth } from "../../store/auth";

const Service = () => {
  const { services } = useAuth();

  return (
    <div>
      <section className="section-services">
        <div className="container">
          <h1 className="container">Services</h1>
        </div>
        <div className="container grid grid-three-cols">
          {services ? (
            services.map((ele) => {
              const { provider, price, service, description } = ele;
              return (
                <div className="card" key={ele._id}>
                  <div className="card-img">
                    <img
                      src="/images/design.png"
                      alt="our services info"
                      width="200"
                    />
                  </div>
                  <div className="card-details">
                    <div className="grid grid-two-cols">
                      <p>{provider}</p>
                      <p>{price}</p>
                    </div>
                    <h2>{service}</h2>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading..</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Service;
