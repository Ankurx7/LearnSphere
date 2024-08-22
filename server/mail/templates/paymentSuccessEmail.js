exports.paymentSuccessEmail = (name, amount, orderId, paymentId) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="UTF-8">
      <title>Payment Confirmation</title>
      <style>
        body {
          background-color: #f9f9f9;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
    
        .container {
          max-width: 600px;
          margin: 40px auto;
          padding: 20px;
          background-color: #ffffff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          text-align: center;
        }
    
        .logo {
          max-width: 150px;
          margin-bottom: 20px;
        }
    
        .message {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #000;
        }
    
        .body {
          font-size: 16px;
          margin-bottom: 20px;
          text-align: left;
        }
    
        .highlight {
          font-weight: bold;
          color: #333;
        }
    
        .cta {
          display: inline-block;
          padding: 12px 24px;
          background-color: #FFD60A;
          color: #000;
          text-decoration: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          margin-top: 20px;
        }
    
        .support {
          font-size: 14px;
          color: #777;
          margin-top: 20px;
        }
    
        .support a {
          color: #FFD60A;
          text-decoration: none;
        }
    
        .support a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    
    <body>
      <div class="container">
        <div class="message">Course Payment Confirmation</div>
        <div class="body">
          <p>Dear ${name},</p>
          <p>We have successfully received your payment of <span class='highlight'>₹${amount}</span>.</p>
          <p>Your Payment ID is <b>${paymentId}</b>.</p>
          <p>Your Order ID is <b>${orderId}</b>.</p>
        </div>
        <a class="cta" href="https://learnsphere.com/dashboard">Go to Dashboard</a>
        <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:info@learnsphere.com">info@learnsphere.com</a>. We’re here to help!</div>
      </div>
    </body>
    
    </html>`;
  }
  