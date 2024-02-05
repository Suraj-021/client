import React from "react";
import Layout from "../components/Layout/Layout";
import Product from "../components/Layout/Product";
import css from "../CSS/style.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout title={"Agrico - Home"}>
      <>
        <div class="header">
          <img src="/IMG/background.jpg" alt=""></img>
        </div>

        <Product></Product>
        <div class="product-caroulsel">
          <h2 class="hedding primary service_h2">Services</h2>
          <div class="caroulsel">
            <div class="products">
              <div class="product_img">
                <a href="/HTML/offer.html">
                  <img src="./IMG/Offer.png" alt=""></img>
                </a>
              </div>
              <div class="product_headding">
                <h3>Offer</h3>
              </div>
            </div>
            <div class="products">
              <div class="product_img">
                <a href="/HTML/seeds.html">
                  <img src="./IMG/Seeds.png" alt=""></img>
                </a>
              </div>
              <div class="product_headding">
                <h3>Seeds</h3>
              </div>
            </div>
            <div class="products">
              <div class="product_img">
                <a href="/HTML/fertilizer.html">
                  <img src="./IMG/Fertilizers.png" alt=""></img>
                </a>
              </div>
              <div class="product_headding">
                <h3>Fertilizers</h3>
              </div>
            </div>
            <div class="products">
              <div class="product_img">
                <a href="/HTML/pestisides.html">
                  <img src="./IMG/Pesticides.png" alt=""></img>
                </a>
              </div>
              <div class="product_headding">
                <h4>Pesticides</h4>
              </div>
            </div>
            <div class="products">
              <div class="product_img">
                <a href="/HTML/vegetables.html">
                  <img src="./IMG/Vegetables.png" alt=""></img>
                </a>
              </div>
              <div class="product_headding">
                <h4>Vegetables</h4>
              </div>
            </div>
            <div class="products">
              <div class="product_img">
                <a href="/HTML/friuts.html">
                  <img src="./IMG/Fruits.png" alt=""></img>
                </a>
              </div>
              <div class="product_headding">
                <h4>Fruits</h4>
              </div>
            </div>
            <div class="products">
              <div class="product_img">
                <Link src="sapling.js">
                  <img src="./IMG/Saplings.png" alt=""></img>
                </Link>
              </div>
              <div class="product_headding">
                <h4>Saplings</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 fw-normal">Punny headline</h1>
            <p class="lead fw-normal">
              And an even wittier subheading to boot. Jumpstart your marketing
              efforts with this example based on Apple’s marketing pages.
            </p>
            <a class="btn btn-outline-secondary" href="#">
              Coming soon
            </a>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div class="Why">
          <h2 class="hedding primary why_h2">Why Fitness Agrico</h2>
          <div class="why_Cointener">
            <div class="why_box">
              <h3 class="hedding secondary why_h3">Support</h3>
              <img src="/IMG/p1.jpg" alt=""></img>
              <p>
                Every member gets a free, personalized Get Started Plan when
                they join. Our friendly, professional staff is trained to help
                you along your fitness journey, no matter how much support you
                need.
              </p>
            </div>
            <div class="why_box">
              <h3 class="hedding secondary why_h3">Tools and Training</h3>
              <img src="/IMG/4.jpg" alt=""></img>
              <p>
                Getting to a healthier place is about more than going to the
                agrico. That's why we offer personal training and classes when
                you're here, and the right tools to keep you on track when
                you're not.
              </p>
            </div>
            <div class="why_box">
              <h3 class="hedding secondary why_h3">Convenience</h3>
              <img src="/IMG/p2.jpg" alt=""></img>
              <p>
                With 24/7 access to more than 3,000 locations worldwide, you're
                joining the most convenient agrico on the planet.
              </p>
            </div>
            <div class="why_box">
              <h3 class="hedding secondary why_h3">Community</h3>
              <img src="/IMG/p3.jpg" alt=""></img>
              <p>
                You're not just joining a agrico. You're joining a supportive
                community of like-minded people who are here to give you the
                encouragement you need.
              </p>
            </div>
          </div>
        </div>

        <div class="feature_container container-fluid">
          <div class="row">
            <div class="feature_box col-md-3  col-sm-6">
              <img
                class="feature_box-img"
                src="/IMG/Fruits/fresh_fruits.png"
                alt=""
              ></img>
              <h3>Fresh Fruits</h3>
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="feature_box col-md-4 ">
              <img class="feature_box-img" src="/IMG/quality.png" alt=""></img>
              <h3>Quality Assurance</h3>
              <p> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="feature_box col-md-4 ">
              <img
                class="feature_box-img"
                src="/IMG/Affordability.png"
                alt=""
              ></img>
              <h3>Affordable Prize</h3>
              <p> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="feature_box col-md-4  ">
              <img class="feature_box-img" src="/IMG/healthy.png" alt=""></img>
              <h3>Healthy</h3>
              <p> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default HomePage;
