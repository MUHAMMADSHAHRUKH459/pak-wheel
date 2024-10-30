import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto text-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">
            Thank You For Shopping
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            Your order will be delivered in 2 business days
          </p>
          <p className="text-sm text-gray-500">
            Created by{' '}
            <a
              href="https://www.linkedin.com/in/shahrukh-javed459/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shahrukh Javed
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;