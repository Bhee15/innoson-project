import React from "react";
import "../styles/Main.css";
import Button from 'react-bootstrap/Button';
import carImg from "../assets/Car-img.png";
import plasticImg from "../assets/Plastic-img.png";
import cycleImg from "../assets/Cycle-img.png";
import tiresImg from "../assets/Tyres-img.png";

const Main = () => {
  return (
    <>
      {/* <section className="d-flex justify-content-center sec-3"> */}
          <div className="container services">
            <p className="container intro">What We Do</p>
          </div>
        <section className="container main-sec">
          <div className="d-sm-flex gap-5 div-1 container border">
             <div>
              <img src={carImg} alt="car-img" className="d-none d-lg-block img-fluid"/>
             </div>
             <div className="text container">
              <h4>Automobile Manufacturing</h4>
              <p className="pTag">
                Innoson Vehicle Manufacturing [IVM] introduces automotive
                products from China, Japan and Germany. Our product line
                includes heavy duty vehicles, middle and high level buses,
                special environment friendly vehicles. The company carries out
                optimization design and assembly according to African road
                condition so as produce suitable products at affordable products
                at affordable prices.
              </p><br />
              <button className="btn">Learn more</button>
            </div>
          </div>
          <div className="d-sm-flex gap-5 mt-4 border div-2">
            <div className="text container">
              <h4>Plastic Manufacturing</h4>
              <p>
                Innoson Technical & Industrial Co. Ltd manufactures high quality
                husehold and industrial plastics, health & safety accessories,
                storage containers, fixtures & fittings, electrical components &
                accessories. Plastic products manufactured include: plastic
                chairs, tables, trays, plates, spoons, cups, jerry cans of
                different sizes and many other allied products.
              </p><br/>
              <button className="btn">Learn more </button>
            </div>
            <div>
              <img src={plasticImg} alt="plastic-img" className="d-none d-lg-block img-fluid"/>
            </div>
          </div>
          <div className="d-sm-flex gap-5 mt-4 border div-3">
            <div>
              <img src={cycleImg} alt="cycle-img" className="d-none d-lg-block img-fluid"/>
            </div>
            <div className="text container">
              <h4>Motorcycle Manufacturing</h4>
              <p>
                Innoson Nigeria Limited Nnewi Manufactures motorcycles,
                tricycles, spare parts and accessories. We pioneered the first
                Made-in-Nigeria Motorcycle brand that sold for as low as
                N60,000. By year 2002, we successfully drove out tokunbo
                (foreign used) motorcycles out of Nigeria forever.
              </p><br/>
              <button className="btn">Learn more </button>
            </div>
          </div>
          <div className="d-sm-flex gap-5 mt-4 border div-4">
            <div className="text container">
              <h4>Tires & Tubes Manufacturing</h4>
              <p>
                General Tyres & Tubes Co. Ltd Enugu, manufacturerers of high
                quailty tyres & Tubes. The plant has a production capacity of
                about 8,000 pieces of motorcycle tyres daily and 13,000 tubes
                daily.
              </p><br/>
              <button className="btn">Learn more</button>
            </div>
            <div>
              <img src={tiresImg} alt="tires-img" className="d-none d-lg-block fourth-img img-fluid"/>
            </div>
          </div>
        </section>
      {/* </section> */}
    </>
  );
};

export default Main;
