import React from "react";
import "./styles/styles.css";

const Footer = () => {
  return (
    <footer id="footerDiv" class="text-center">
      <div>
        <div class="row">
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div class="col-md-5 col-12">
            <div class="form-outline">
              <input type="email" id="form5Example25" class="form-control" />
              <label class="form-label" for="form5Example25">
                Email address
              </label>
            </div>
          </div>

          <div class="col-auto">
            <button type="submit" class="btn btn-primary">
              Subscribe
            </button>
          </div>

          <div class="text-center text-dark p-3">
            © 2020 Copyright:
            <a class="text-dark" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
