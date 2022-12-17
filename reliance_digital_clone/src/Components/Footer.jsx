import React from "react";
// import './App.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="foot">
                  <div className="footers">
                    <div className="col-9 col-lg-3">
                      <h2>PRODUCT CATEGORIES</h2>
                      <ul>
                        <p>SmartPhones</p>
                        <p>Laptops</p>
                        <p>DSLR Cameras</p>
                        <p>Television</p>
                        <p>Air Conditioners</p>
                        <p>personal care & Grooming</p>
                        <p>Refrigerators</p>
                        <p>Accessories</p>
                      </ul>
                    </div>

                    <div className="col-9 col-lg-3">
                      <h2> SITE INFO</h2>
                      <ul>
                        <p>About reliance Digital</p>
                        <p>resQ Services</p>
                        <p> Site Map</p>
                        <p>Gift Cards</p>
                        <p>Corporate Enquires </p>
                        <p>Contact Us</p>
                      </ul>
                    </div>

                    <div className="col-9 col-lg-3">
                      <h2> Resource Center</h2>
                      <ul>
                        <p>Product Reviews</p>
                        <p>Buying Guides</p>
                        <p>How Tos</p>
                        <p>Featured Stories</p>
                        <p>Events & happenings </p>
                      </ul>
                    </div>

                    <div className="col-9 col-lg-3">
                      <h2> POLICIES</h2>
                      <ul>
                        <p>Terms of use</p>

                        <p> FAQs</p>

                        <p>privacy policy </p>

                        <p>Caution Notice</p>

                        <p>E-waste policy </p>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row-3 mx-auto">
                      <h2>Follow us</h2>
                      <img
                        style={{
                          width: "70px",
                          height: "30px",
                          margin: "20px",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIKtpPQND6s7iW8wFy8-C77PWYJ7m49FrUw&usqp=CAU"
                        alt=""
                      />
                      <img
                        style={{
                          width: "70px",
                          height: "30px",
                          margin: "20px",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFzDoUTxXStvqtcsyi3S9e1oSVliP53ZS6w&usqp=CAU"
                        alt=""
                      />
                      <img
                        style={{
                          width: "70px",
                          height: "30px",
                          margin: "20px",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNshlzox4zGs2_nBKtlT5Qnce2PMBG8n_Xtw&usqp=CAU"
                        alt=""
                      />
                    </div>

                    <h2>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="dis">
              <h1>Disclaimer</h1>
              <p>
                Product prices, offers and availability are subject to change
                from time to time. All prices are inclusive of taxes. Product
                colours & images are only for illustration and they may not
                exactly match with the actual product. Product specs are subject
                to change & may vary from actual product. While every care is
                taken to avoid inaccuracies in content, these are provided as
                is, without warranty of any kind.
              </p>
              <hr />
              <h4>@ 2022 Reliance Digital .All Rights Reserved.</h4>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
