import React ,{useEffect} from 'react';
import "./styles.css"
import logo from "../../images/crox/croxvest-nobg.png"

const Clone2 = () => {
    const d = new Date();
    const year = d.getFullYear();
    
    useEffect(() => {

      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/61f69497b9e4e21181bc9e59/1fqlj8sgt';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
 
    }, [])

  return <div>
  <div id="slider">
    <div id="sub_slider">
      <div className="header_up">
        <div className="logo zoomIn animated wow" data-wow-duration="2s" style={{marginTop:"-30px"}}>
          <a href="/home"><img src={logo} style={{width:"60%"}}/></a>
        </div>
        <div className="header_right">
          <div className="header_rightup">
            <div className="phone">
              <p><i className="far fa-envelope" /> contact@croxvest.com</p>
            </div>
            <div className="btc">
              <p><i className="fab fa-bitcoin" /> 1 BTC = <span id="priceupdate">Loading...</span></p>
            </div>
            <div className="btn d-flex" style={{marginTop:'-10px'}}>
              <div className="signin">
                <a href="/login"><img src="https://coinbitinvestment.com/images/signin.png" /> Sign In</a>
              </div>
              <div className="signup">
                <a href="/signup"><img src="https://coinbitinvestment.com/images/signup.png" /> SIGN UP</a>
              </div>
            </div>
          </div>
          <div className="clr" />
          <div className="menu bounceInRight animated wow" data-wow-duration="2s">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/">News Center</a></li>
              <li><a href="/faq">F.A.Q</a></li>
              <li><a href="/">Terms &amp; Condition</a></li>
              <li><a href="/">Rating Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="slidtext zoomIn animated wow" data-wow-duration="2s">
        <div className="getstarted slideInLeft  wow animated">
          <p>WELCOME TO <span> Croxvest</span></p>
        </div>
        <div className="slog">
          <p>Croxvest is a legally registered <br /> private limited company which was founded in 2015 in <br /> Singapore.</p>
        </div>
        <div className="start">
          <a href="/signup" className="a-link">Start Earning</a>
        </div>
      </div>
    </div>
  </div>
  <div id="content">
    <div id="sub_content">
      <div className="headline">
        <p>Simple Steps to Get Started</p>
      </div>
      <div className="get_border">
        <img src="https://coinbitinvestment.com/images/headborder.png" />
      </div>
      <div className="workst zoomIn animated wow" data-wow-duration="2s">
        <div className="works_one zoomIn  wow animated">
          <div className="worksi">
            <img src="https://coinbitinvestment.com/images/create.png" />
          </div>
          <div className="workhed">
            <p>Create An Account</p>
          </div>
          <div className="work_textr">
            <p>Register on our website as an investor</p>
          </div>
          <div className="workborder">
            <p>1</p>
          </div>
        </div>
        <div className="works_one zoomIn animated wow" data-wow-duration="2.5s">
          <div className="worksi">
            <img src="https://coinbitinvestment.com/images/login.png" />
          </div>
          <div className="workhed">
            <p>Log in Account</p>
          </div>
          <div className="work_textr">
            <p>Log In &amp; Open in your personal account</p>
          </div>
          <div className="workborder">
            <p>2</p>
          </div>
        </div>
        <div className="works_one zoomIn animated wow" data-wow-duration="3s">
          <div className="worksi">
            <img src="https://coinbitinvestment.com/images/deposit.png" />
          </div>
          <div className="workhed">
            <p>Deposit Amount</p>
          </div>
          <div className="work_textr">
            <p>We provide best Investment plans Deposit your amount</p>
          </div>
          <div className="workborder">
            <p>3</p>
          </div>
        </div>
        <div className="works_one zoomIn animated wow" data-wow-duration="3.5s">
          <div className="worksi">
            <img src="https://coinbitinvestment.com/images/withdraw.png" />
          </div>
          <div className="workhed">
            <p>Withdraw Profit</p>
          </div>
          <div className="work_textr">
            <p>Withdraw your Profit in your personal account</p>
          </div>
          <div className="workborder">
            <p>4</p>
          </div>
        </div>
      </div>
      <div className="clr" />
      <div className="plan_all">
        <div className="headline">
          <p>Our Investment Plan</p>
        </div>
        <div className="get_border">
          <img src="https://coinbitinvestment.com/images/headborder.png" />
        </div>
      </div>
      <div className="all_plana">
        <div className="plana bounceInUp animated wow" data-wow-duration="2s">
          <div className="plan_amount">
            <div className="plan_percent">
              <p>10% Daily</p>
            </div>
            <div className="daily_for">
              <p>PROFIT</p>
            </div>
          </div>
          <div className="days">
            <p>Daily for 1 Day</p>
          </div>
          <div className="plan_border">
            <img src="https://coinbitinvestment.com/images/planborder.png" />
          </div>
          <div className="mintext">
            <div className="min_one">
              <p>Min Deposit :   <span>$100</span></p>
            </div>
            <div className="min_one">
              <p>Max Deposit : <span>$5,000</span></p>
            </div>
            <div className="min_one">
              <p>Principal : <span>Including </span></p>
            </div>
            <div className="min_one">
              <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '19px', textTransform: 'uppercase'}}>Referral Commission</p>
              <p style={{textAlign: 'center', fontSize: '18px', marginTop: '14px', fontWeight: 'bold'}}>3% - 1% - 0.8% - 0.5% - 0.3%</p>
            </div>
            <div className="makedeposit">
              <a href="/login" className="a-link">Make Deposit</a>
            </div>
          </div>
        </div>
        <div className="plana bounceInDown animated wow" data-wow-duration="2s">
          <div className="plan_amount">
            <div className="plan_percent">
              <p>15% Daily</p>
            </div>
            <div className="daily_for">
              <p>PROFIT</p>
            </div>
          </div>
          <div className="days">
            <p>Daily for 3 Days</p>
          </div>
          <div className="plan_border">
            <img src="https://coinbitinvestment.com/images/planborder.png" />
          </div>
          <div className="mintext">
            <div className="min_one">
              <p>Min Deposit :   <span>$5,001</span></p>
            </div>
            <div className="min_one">
              <p>Max Deposit : <span>$50,000</span></p>
            </div>
            <div className="min_one">
              <p>Principal : <span>Including </span></p>
            </div>
            <div className="min_one">
              <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '19px', textTransform: 'uppercase'}}>Referral Commission</p>
              <p style={{textAlign: 'center', fontSize: '18px', marginTop: '14px', fontWeight: 'bold'}}>3% - 1% - 0.8% - 0.5% - 0.3%</p>
            </div>
            <div className="makedeposit">
              <a href="/login" className="a-link">Make Deposit</a>
            </div>
          </div>
        </div>
        <div className="plana bounceInUp animated wow" data-wow-duration="2s">
          <div className="plan_amount">
            <div className="plan_percent">
              <p>25% Daily</p>
            </div>
            <div className="daily_for">
              <p>PROFIT</p>
            </div>
          </div>
          <div className="days">
            <p>Daily for 4 Days</p>
          </div>
          <div className="plan_border">
            <img src="https://coinbitinvestment.com/images/planborder.png" />
          </div>
          <div className="mintext">
            <div className="min_one">
              <p>Min Deposit :   <span>$10,000</span></p>
            </div>
            <div className="min_one">
              <p>Max Deposit : <span>$500,000</span></p>
            </div>
            <div className="min_one">
              <p>Principal : <span>Including </span></p>
            </div>
            <div className="min_one">
              <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '19px', textTransform: 'uppercase'}}>Referral Commission</p>
              <p style={{textAlign: 'center', fontSize: '18px', marginTop: '14px', fontWeight: 'bold'}}>3% - 1% - 0.8% - 0.5% - 0.3%</p>
            </div>
            <div className="makedeposit">
              <a href="/login" className="a-link">Make Deposit</a>
            </div>
          </div>
        </div>
      </div>
      <div className="chooseg">
        <div className="features_left">
          <div className="choose_head">
            <p>Why Choose Us?</p>
          </div>
          <div className="choose_all">
            <div className="fetures-one bounceInLeft animated wow" data-wow-duration="2s">
              <div className="feture-box">
                <img src="https://coinbitinvestment.com/images/instant.png" />
              </div>
              <div className="fetures-text">
                <div className="text-head">
                  <p>Instant <span>Withdrawal</span></p>
                </div>
                <div className="text-sed">
                  <p>Withdrawals are prepared promptly after their request.</p>
                </div>
              </div>
            </div>
            <div className="fetures-one bounceInLeft animated wow" data-wow-duration="2.5s">
              <div className="feture-box">
                <img src="https://coinbitinvestment.com/images/comodo.png" />
              </div>
              <div className="fetures-text">
                <div className="text-head">
                  <p>COMODO  <span>EV-SSL Certificate</span></p>
                </div>
                <div className="text-sed">
                  <p>Our Comodo EV-SSL declaration ensures the security of your transactions.</p>
                </div>
              </div>
            </div>
            <div className="fetures-one bounceInLeft animated wow" data-wow-duration="3s">
              <div className="feture-box">
                <img src="https://coinbitinvestment.com/images/dds.png" />
              </div>
              <div className="fetures-text">
                <div className="text-head">
                  <p>DDoS   <span>Guard Protection</span></p>
                </div>
                <div className="text-sed">
                  <p>We utilize the most elevated amount of security. Our site can withstand assaults of any size.</p>
                </div>
              </div>
            </div>
            <div className="fetures-one bounceInLeft animated wow" data-wow-duration="3.5s">
              <div className="feture-box">
                <img src="https://coinbitinvestment.com/images/hs.png" />
              </div>
              <div className="fetures-text">
                <div className="text-head">
                  <p>24/7    <span>Customer Support</span></p>
                </div>
                <div className="text-sed">
                  <p>We give round the clock client bolster by means of email and online help. Our help agents are constantly prepared to answer any inquiries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chooseright">
          <div className="videobox zoomIn animated wow" data-wow-duration="2s">
            <iframe width={490} height={310} src="https://www.youtube.com/embed/Um63OQz3bjo" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      </div>
      <div className="all_statisttics">
        <div className="statis_one slideInLeft  wow animated">
          <div className="statis_tittle">
            <p>1876</p>
          </div>
          <div className="statebg">
            <p><i className="far fa-calendar-check" /></p>
          </div>
          <div className="statis_tittlea">
            <p>Running Days</p>
          </div>
        </div>
        <div className="statis_one slideInLeft  wow animated">
          <div className="statis_tittle">
            <p>41,852</p>
          </div>
          <div className="statebg">
            <p><i className="fas fa-users" /></p>
          </div>
          <div className="statis_tittlea">
            <p>Total Accounts</p>
          </div>
        </div>
        <div className="statis_one zoomIn  wow animated">
          <div className="statis_tittle">
            <p>$5,987,656</p>
          </div>
          <div className="statebg">
            <p><i className="fas fa-download" /></p>
          </div>
          <div className="statis_tittlea">
            <p>Total Deposit</p>
          </div>
        </div>
        <div className="statis_one slideInRight wow animated">
          <div className="statis_tittle">
            <p>$19,987,656</p>
          </div>
          <div className="statebg">
            <p><i className="fas fa-upload" /></p>
          </div>
          <div className="statis_tittlea">
            <p>Total Withdraw</p>
          </div>
        </div>
        <div className="statis_one slideInRight wow animated">
          <div className="statis_tittle">
            <p>841</p>
          </div>
          <div className="statebg">
            <p><i className="fas fa-plane" /></p>
          </div>
          <div className="statis_tittlea">
            <p>Online Visitors</p>
          </div>
        </div>
      </div>
      <div className="headline" style={{marginTop: '30px'}}>
        <p>About Our Company</p>
      </div>
      <div className="get_border">
        <img src="https://coinbitinvestment.com/images/headborder.png" />
      </div>
      <div className="about_down">
        <div className="about_left slideInLeft animated wow" data-wow-duration="2s">
          <img src="https://coinbitinvestment.com/images/aboutbg.png" />
        </div>
        <div className="about_right">
          <div className="about_textr">
            <p>Croxvest is a legitimately enrolled private constrained organization, which was established in 2015 in Singapore. what's more, it transformed into an open organization to give everybody access to the monetary items offered by Croxvest. Venture administration limit made by experts working with the Company was the principal purpose behind the change. <br /> <br />
              As Croxvest showed exceptional execution and fundamentally extended its advantages in the past period, it was chosen to begin offering its venture items through particular online administrations.
              <br /><span><a href="/about">Read More</a></span></p>
          </div>
        </div>
      </div>
      <div className="clr" />
      <div className="payment">
        <ul>
          <li className="flipInY  wow   animated" data-wow-duration="2s" data-wow-delay="0.4s" style={{visibility: 'visible', animationDuration: '2s', animationDelay: '0.4s', animationName: 'flipInY'}}><a href="#"><img src="https://coinbitinvestment.com/images/perfect.png" /></a></li>
          <li className="flipInY  wow   animated" data-wow-duration="2s" data-wow-delay="0.6s" style={{visibility: 'visible', animationDuration: '2s', animationDelay: '0.6s', animationName: 'flipInY'}}><a href="#"><img src="https://coinbitinvestment.com/images/payeer.png" /></a></li>
          <li className="flipInY  wow   animated" data-wow-duration="2s" data-wow-delay="0.5s" style={{visibility: 'visible', animationDuration: '2s', animationDelay: '0.5s', animationName: 'flipInY'}}><a href="#"><img src="https://coinbitinvestment.com/images/bitcoin.png" /></a></li>
          <li className="flipInY  wow   animated" data-wow-duration="2s" data-wow-delay="0.7s" style={{visibility: 'visible', animationDuration: '2s', animationDelay: '0.7s', animationName: 'flipInY'}}><a href="#"><img src="https://coinbitinvestment.com/images/lite.png" /></a></li>
          <li className="flipInY  wow   animated" data-wow-duration="2s" data-wow-delay="0.7s" style={{visibility: 'visible', animationDuration: '2s', animationDelay: '0.7s', animationName: 'flipInY'}}><a href="#"><img src="https://coinbitinvestment.com/images/eth.png" /></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div>
  <div id="footer">
    <div id="sub_footer">
      <div className="footer_one">
        <div className="fologo">
          
        </div>
        <div className="fologo_text">
          <p>Croxvest<br />
            14 Macpherson Road #07-02 Pines Industrial Building, 348574, Singapore<br />
            Company number : #9912289
          </p>
        </div>
      </div>
      {/*--visualhyip.com--*/}
      <div className="footer_two">
        <div className="site-head">
          <p><i className="fas fa-angle-double-right" /> Contact Us</p>
        </div>
        <div className="phonea">
          <p><i className="fas fa-phone-square" /> Phone : </p>
        </div>
        <div className="phonea">
          <p><i className="fas fa-envelope" /> support@Croxvest.com</p>
        </div>
      </div>
      <div className="footer_three">
        <div className="site-head">
          <p><i className="fas fa-angle-double-right" /> Quick Link</p>
        </div>
        <div className="menu-down">
          <div className="link-one">
            <ul>
              <li><a href="/home"><i className="fas fa-circle" /> Home</a></li>
              <li><a href="/about"><i className="fas fa-circle" /> About Us</a></li>
              <li><a href="/"><i className="fas fa-circle" /> Rules</a></li>
              <li><a href="/faq"><i className="fas fa-circle" /> FAQ</a></li>
            </ul>
          </div>
          <div className="link-one">
            <ul>
              <li><a href="/login"><i className="fas fa-circle" /> Log In</a></li>
              <li><a href="/signup"><i className="fas fa-circle" /> Sign Up</a></li>
              <li><a href="/"><i className="fas fa-circle" /> Rate Us</a></li>
              <li><a href="/contact"><i className="fas fa-circle" /> Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="down_footer">
    <div id="sub_footera">
      <div className="reserved">
        <p>©{year} All Rights Reserved By Croxvest</p>
      </div>
      <div className="mediaal">
        <div className="media_one">
          <a target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f" /> Facebook</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

};

export default Clone2;
