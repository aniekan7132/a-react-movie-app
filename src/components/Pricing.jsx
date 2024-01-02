import React, { Fragment, useState, useContext } from "react";
import {Container} from "./Navbar";
import { FcCheckmark } from "react-icons/fc";
import "./Pricing.css";

const Pricing = () => {
  const { toggle } = useContext(Container);
  const [toggleBasic, setToggleBasic] = useState(true);
  const [toggleStandard, setToggleStandard] = useState(true);
  const [togglePremium, setTogglePremium] = useState(true);

  const [basicCost, setBasicCost] = useState("7.99");
  const [standardCost, setStandardCost] = useState("12.99");
  const [premiumCost, setPremiumCost] = useState("18.99");

  return (
    <>
      <div className="background-color-main">
        <div className="pricing-container">
          <div className="pricing-options">
            <div className={toggle ? "pricing-option1" : "light-theme1"}>
              <h2>Basic</h2>
              <div className="price">
                <h3>${basicCost}</h3>
                <h4 id="monthlyYearly">
                  {toggleBasic ? "/Monthly" : "/Yearly"}
                </h4>
              </div>
              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                Unlimited films and tv programmes
              </span>
              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                Watch on mobile phones and tablets
              </span>
              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                Cancel at anytime
              </span>
              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                First month completely free
              </span>
              <button id="button1">Buy Now</button>
              <div id="darktheme">
                <div
                  className="pricing-yearly-darktheme"
                  onClick={() => {
                    setToggleBasic(!toggleBasic);
                    if (toggleBasic) {
                      setBasicCost("60");
                    } else {
                      setBasicCost("7.99");
                    }
                  }}
                >
                  <div
                    className={
                      toggleBasic
                        ? "pricing-monthly-darktheme"
                        : "pricing-monthly-light"
                    }
                  ></div>
                </div>
              </div>
            </div>

            <div className={toggle ? "pricing-option2" : "light-theme2"}>
              <h2>Standard</h2>
              <div className="price">
                <h3>${standardCost}</h3>
                <h4 id="monthlyYearly">
                  {toggleStandard ? "/Monthly" : "/Yearly"}
                </h4>
              </div>

              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                Unlimited films and tv programmes
              </span>
              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                Watch on mobile phones and tablets
              </span>
              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                Cancel at anytime
              </span>
              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                First month completely free
              </span>
              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                HD available
              </span>
              <button id="button2">Buy Now</button>

              <div id="darktheme">
                <div
                  className="pricing-yearly-darktheme"
                  onClick={() => {
                    setToggleStandard(!toggleStandard);
                    if (toggleStandard) {
                      setStandardCost("120");
                    } else {
                      setStandardCost("12.99");
                    }
                  }}
                >
                  <div
                    className={
                      toggleStandard
                        ? "pricing-monthly-darktheme"
                        : "pricing-monthly-light"
                    }
                  ></div>
                </div>
              </div>
            </div>

            <div className={toggle ? "pricing-option3" : "light-theme3"}>
              <h2>Premium</h2>
              <div className="price">
                <h3>${premiumCost}</h3>
                <h4 id="monthlyYearly">
                  {togglePremium ? "/Monthly" : "/Yearly"}
                </h4>
              </div>

              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                Unlimited films and tv programmes
              </span>
              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                Watch on mobile phones and tablets
              </span>
              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                Cancel at anytime
              </span>
              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                First month completely free
              </span>
              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                HD available
              </span>
              <span>
                <FcCheckmark fontSize={25} id="checkmark" />
                Ultra HD
              </span>
              <button id="button3">Buy Now</button>

              <div id="darktheme">
                <div
                  className="pricing-yearly-darktheme"
                  onClick={() => {
                    setTogglePremium(!togglePremium);
                    if (togglePremium) {
                      setPremiumCost("120");
                    } else {
                      setPremiumCost("18.99");
                    }
                  }}
                >
                  <div
                    className={
                      togglePremium
                        ? "pricing-monthly-darktheme"
                        : "pricing-monthly-light"
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
