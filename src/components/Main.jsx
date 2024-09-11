import React from "react";
import "../styles/Main.css";
import carImg from "../assets/Car-img.png";
import plasticImg from "../assets/Plastic-img.png";
import cycleImg from "../assets/Cycle-img.png";
import tiresImg from "../assets/Tyres-img.png";

const Main = () => {
  return (
    <>
      <section className="container section-3">
        <section className="container row ">
          <div>
            <p className="intro container">What We Do</p>
          </div>
          <div className="d-flex gap-5">
            <div className="img-1">
              <img src={carImg} alt="" />
            </div>
            <div className="text pt-5">
              <h4>Automobile Manufacturing</h4>
              <p className="container">
                Innoson Vehicle Manufacturing [IVM] introduces automotive
                products from China, Japan and Germany. Our product line
                includes heavy duty vehicles, middle and high level buses,
                special environment friendly vehicles. The company carries out
                optimization design and assembly according to African road
                condition so as produce suitable products at affordable products
                at affordable prices.
              </p><br />
              <button>Learn more</button>
            </div>
          </div>
          <div className="d-flex gap-5 mt-5">
            <div className="text pt-5">
              <h4>Plastic Manufacturing</h4>
              <p>
                Innoson Technical & Industrial Co. Ltd manufactures high quality
                husehold and industrial plastics, health & safety accessories,
                storage containers, fixtures & fittings, electrical components &
                accessories. Plastic products manufactured include: plastic
                chairs, tables, trays, plates, spoons, cups, jerry cans of
                different sizes and many other allied products.
              </p>
              <button>Learn more</button>
            </div>
            <div className="img-2">
              <img src={plasticImg} alt=""/>
            </div>
          </div>
          <div className="d-flex gap-5 mt-5">
            <div className="img-3">
              <img src={cycleImg} alt="" />
            </div>
            <div className="text pt-5">
              <h4>Motorcycle Manufacturing</h4>
              <p>
                Innoson Nigeria Limited Nnewi Manufactures motorcycles,
                tricycles, spare parts and accessories. We pioneered the first
                Made-in-Nigeria Motorcycle brand that sold for as low as
                N60,000. By year 2002, we successfully drove out tokunbo
                (foreign used) motorcycles out of Nigeria forever.
              </p>
              <button>Learn more </button>
            </div>
          </div>
          <div className="d-flex gap-5 mt-5">
            <div className="text pt-5">
              <h4>Tires & Tubes Manufacturing</h4>
              <p>
                General Tyres & Tubes Co. Ltd Enugu, manufacturerers of high
                quailty tyres & Tubes. The plant has a production capacity of
                about 8,000 pieces of motorcycle tyres daily and 13,000 tubes
                daily.
              </p>
              <button>Learn more</button>
            </div>
            <div className="img-4">
              <img src={tiresImg} alt="" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Main;
