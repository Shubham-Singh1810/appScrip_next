import React from "react";
import Slider from "../components/Slider";

function HomePage() {
  return (
    <>
      {/* auth section start */}
      <div className="homeContainer">
        <div className="bg mainHome d-flex align-items-center justify-content-between globalXPadding">
          <div className="content">
            <h1>A Creator’s Paradise</h1>
            <p className="mb-0">Were Creativity Meets Success</p>
          </div>
          <div className="auth text-center">
            <div>
              <button className="googleLoginBtn d-flex justify-content-around">
                <img src="/assets/images/googleIcon.png" />
                <span className="my-auto">Continue With Google</span>
              </button>
              <div className="formContainer pt-3 mt-3">
                <form>
                  <div className="row p-0">
                    <div className="col-6">
                      <input className="w-100" placeholder="First Name*" />
                    </div>
                    <div className="col-6">
                      <input className="w-100" placeholder="Last Name*" />
                    </div>
                    <div className="col-12">
                      <input className="w-100" placeholder="Email*" />
                    </div>
                    <div className="col-12">
                      <input className="w-100" placeholder="Password*" />
                    </div>
                    <p>(GMT+05:30) india standard Time - Calcutta </p>
                    <div className="col-12">
                      <button className="w-100">Signup as user</button>
                    </div>
                    <p>
                      By signing up you agree to our Terms & Conditions and Privacy Policy. and confirm that you are at
                      least 18 years old.
                    </p>
                    <p className="divideLine d-flex">
                      <span className="me-1"></span> <p>or</p> <span className="ms-1"></span>
                    </p>
                    <div>
                      <button className="w-100">Signup as creator</button>
                    </div>
                    <p className="mb-0">Already have an account? Login</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* auth section end */}

      {/* craft section start */}
      <div className="globalXPadding pb-5 eleveteSection">
        <h2>Elevate Your Craft</h2>
        <div className="row  p-0">
          <div className="col-12 col-md-6">
            <div className="wideCard  mx-2 my-4 text-center">
              <h3>Unlock Your ABC Earning Potential</h3>
              <p>
                Are you ready to take your earning potential to the next level? With ABC, you have multiple avenues to
                monetize your content seamlessly. From subscriptions and tips to merchandise sales and NFTS, ABC helps
                you diversify your revenue streams and <br /> maximize your income.
              </p>
              <div className="col-6 mx-auto">
                <img src="/assets/images/mobileScreen.png" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 my-auto">
            <div className="wideCard my-4 smallCard  mx-2 text-center">
              <h3>Boost Your Sales with Built-in E-commerce</h3>
              <p>
                Take control of your brand and boost your sales with ABC's built-in e-commerce functionality. Showcase
                and sell your exclusive products, whether it's merchandise, digital downloads, or personalized
                experiences. Integrate your store effortlessly and turn your creative ideas into profitable ventures.
              </p>
              <div className="row mt-4 ">
                <div className="col-6 col-md-3 ">
                  <div className="cardBox">
                    <img src="/assets/images/bikiny1.png" className="img-fluid" />
                    <div className="py-2 px-1 cardBoxContent">
                      <p className="mb-1">Green modern bikini</p>
                      <div className="d-flex justify-content-between">
                        <span>$100</span>
                        <span>4</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 ">
                  <div className="cardBox">
                    <img src="/assets/images/bikiny2.png" className="img-fluid" />
                    <div className="py-2 px-1 cardBoxContent">
                      <p className="mb-1">Green modern bikini</p>
                      <div className="d-flex justify-content-between">
                        <span>$100</span>
                        <span>4</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 ">
                  <div className="cardBox">
                    <img src="/assets/images/bikiny3.png" className="img-fluid" />
                    <div className="py-2 px-1 cardBoxContent">
                      <p className="mb-1">Green modern bikini</p>
                      <div className="d-flex justify-content-between">
                        <span>$100</span>
                        <span>4</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 ">
                  <div className="cardBox">
                    <img src="/assets/images/bikiny1.png" className="img-fluid" />
                    <div className="py-2 px-1 cardBoxContent">
                      <p className="mb-1">Green modern bikini</p>
                      <div className="d-flex justify-content-between">
                        <span>$100</span>
                        <span>4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="wideCard smallCard  m-2 text-center">
              <img src="/assets/images/autoMateIcon.svg" className="img-fluid" />
              <h3>
                Save Time with <br />
                Automation and Efficiency
              </h3>
              <p>
                Supercharge your content creation with ABC's automation tools. Streamline scheduling, multi-platform
                management, and more. Save time on repetitive tasks, focus on exceptional content.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="wideCard smallCard  m-2 text-center">
              <img src="/assets/images/supportIcon.png" className="img-fluid" />
              <h3>
                Join a Supportive <br />
                Community
              </h3>
              <p>
                Join ABC's vibrant creator community. Connect with like-minded individuals, collaborate, and share
                experiences. Access mental health services and resources for personal and professional growth.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="wideCard smallCard  m-2 text-center">
              <img src="/assets/images/prizeIcon.png" className="img-fluid" />
              <h3>
                Unlock Exclusive <br /> Opportunities and Prizes
              </h3>
              <p>
                Enjoy ABC contests and challenges for valuable prizes. Showcase your exceptional talent and win business
                grants, scholarships, and more. Thrive on our platform with recognition and rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* craft section end */}

      {/* join now start */}
      <div className="joinNowSection">
        <div className="vh-100 joinContent w-100 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <p>Don't miss out on ABC’s Incredible features and Opportunities.</p>
            <h3>
              Join us today and unlock your <br /> full potential as a creator
            </h3>
            <button>Join Now</button>
          </div>
        </div>

        <div className="row p-0">
          <div className="col-6 leftBobble vh-100"></div>
          <div className="col-6  rightBobble vh-100"></div>
        </div>
      </div>
      {/* join now end */}

      {/* slider start */}
      <Slider />
      {/* slider end */}

      {/* affliate start */}
      <div className="afliateSection d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h3>
            Ready to Cash in Your Connections? <br />
            Join Our Affiliate Program
          </h3>
          <p>
            Join now and get <span>7.5%</span> commission on all creator referrals for the entire year.
          </p>
          <button>Earn Now</button>
        </div>
      </div>
      {/* affliate end */}

      {/* community start */}
      <div className="bg-dark">
        <div className="joinSection d-flex justify-content-center align-items-center">
          <div className="text-center joinContent">
            <h3>Join the ABC Community</h3>
            <p>
              Become part of a vibrant and supportive community of like-minded creators by joining ABC's exclusive
              platform. Collaborate, learn, and connect with fellow creators who share your passion for adult content
              creation.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      {/* community 5 end */}
    </>
  );
}

export default HomePage;
