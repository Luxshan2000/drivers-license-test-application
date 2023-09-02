import '../assets/CSS/premiumStyle.css'
import React, { useState } from 'react';

const PremiumView = () => {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  }
  const btnHandler = () => {
    alert('The button is clickable!');
  };

  return (
    <section>
      <div className="container premium__container">
        <div className='premium__title'>
          <h1 className="text-center">Unlock Your Premium Features</h1>
        </div>
        <div className='premium__content'>
          <div className='premium__paragraph'>
            <h2>UPGRADE TO PREMIUM</h2>
            <h4>Boost your learning today - go premium with a one-time payment of 400.00 LKR. 
              Get access to exclusive study materials, videos, and interactive quizzes!</h4>
            <h4>අදම ඔබේ ඉගෙනීම ඉහළ නංවන්න - වාරිකය 400/= කට පමණයි. සුවිශේෂී අධ්‍යයන ද්‍රව්‍ය, 
              වීඩියෝ සහ අන්තර්ක්‍රියාකාරී ප්‍රශ්නාවලිය වෙත ප්‍රවේශය ලබා ගන්න!</h4>
            <h4>இன்றே உங்கள் கற்றலை அதிகரிக்கவும் 400.00 LKR ஒரு முறை செலுத்துவதன் மூலம் பிரீமியத்திற்கு செல்லுங்கள். 
              பிரத்தியேக வீடியோக்கள் மற்றும் வினாடி வினாக்களுக்கான அணுகலைப் பெறுங்கள்!</h4>
          </div>
          <div>
            <input type="checkbox" id="agree" onChange={checkboxHandler} />
            <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
          </div>
          <div className='premium__btn'>
            <button disabled={!agree} className="btn btn-primary" onClick={btnHandler}>
              Unlock Sinhala
            </button>
            <button disabled={!agree} className="btn btn-primary" onClick={btnHandler}>
              Unlock Tamil
            </button>
            <button disabled={!agree} className="btn btn-primary" onClick={btnHandler}>
              Unlock English
            </button>
            {/* <a href='##' className='btn btn-primary' disabled={!agree}>Unlock Tamil</a>
            <a href='###' className='btn btn-primary' disabled={!agree}>Unlock English</a> */}
          </div> 
        </div>
      </div>
    </section>
  )
}

export default PremiumView;
