exports.passwordUpdated = (email, name) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="UTF-8">
      <title>Password Update Confirmation</title>
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
        <div class="message">Password Update Confirmation</div>
        <div class="body">
          <p>Hi ${name},</p>
          <p>Your password has been successfully updated for the email <span class="highlight">${email}</span>.</p>
          <p>If you did not request this password change, please contact us immediately to secure your account.</p>
        </div>
        <div class="support">
          If you have any questions or need further assistance, feel free to reach out at <a href="mailto:info@learnsphere.com">info@learnsphere.com</a>. We're here to help!
        </div>
      </div>
    </body>
    
    </html>`;
  };
  