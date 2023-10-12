import "../assets/CSS/premiumStyle.css";
import React, { useState } from "react";
import FrameComponent from "../components/FrameComponent";
import PaymentModal from "../PaymentModal/PaymentModal";

const PremiumView = () => {
  const [agree, setAgree] = useState(false);
  const [payment, setPayment] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };
  const btnHandler = () => {
    setPayment(true);
  };

  return (
    <FrameComponent>
      <section>
        <div className="container premium__container">
          <div className="premium__title">
            <h1 className="text-center">Unlock Your Premium Features</h1>
          </div>
          <div className="premium__content">
            <div className="premium__paragraph">
              <h4>UPGRADE TO PREMIUM</h4>
              <h6>
                Boost your learning today - go premium with a one-time payment
                of 400.00 LKR. Get access to exclusive study materials, videos,
                and interactive quizzes!
              </h6>
              <h6>
                අදම ඔබේ ඉගෙනීම ඉහළ නංවන්න - වාරිකය 400/= කට පමණයි. සුවිශේෂී
                අධ්‍යයන ද්‍රව්‍ය, වීඩියෝ සහ අන්තර්ක්‍රියාකාරී ප්‍රශ්නාවලිය වෙත
                ප්‍රවේශය ලබා ගන්න!
              </h6>
              <h6>
                இன்றே உங்கள் கற்றலை அதிகரிக்கவும் 400.00 LKR ஒரு முறை
                செலுத்துவதன் மூலம் பிரீமியத்திற்கு செல்லுங்கள். பிரத்தியேக
                வீடியோக்கள் மற்றும் வினாடி வினாக்களுக்கான அணுகலைப் பெறுங்கள்!
              </h6>
            </div>
            <div>
              <input type="checkbox" id="agree" onChange={checkboxHandler} />
              <label htmlFor="agree">
                {" "}
                I agree to <b>terms and conditions</b>
              </label>
            </div>
            <div className="premium__btn">
              <button
                disabled={!agree}
                className="btn btn-primary"
                onClick={btnHandler}
              >
                Unlock Sinhala
              </button>
              <button
                disabled={!agree}
                className="btn btn-primary"
                onClick={btnHandler}
              >
                Unlock Tamil
              </button>
              <button
                disabled={!agree}
                className="btn btn-primary"
                onClick={btnHandler}
              >
                Unlock English
              </button>
              {/* <a href='##' className='btn btn-primary' disabled={!agree}>Unlock Tamil</a>
            <a href='###' className='btn btn-primary' disabled={!agree}>Unlock English</a> */}
            </div>
            {payment ? (
              <div className="App">
                <PaymentModal
                  // Use a unique value for the orderId
                  orderId={45896588}
                  name="Subscription for Premium"
                  amount="1500"
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </FrameComponent>
  );
};

export default PremiumView;
