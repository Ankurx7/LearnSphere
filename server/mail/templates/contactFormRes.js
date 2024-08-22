exports.contactUsEmail = (
    email,
    firstname,
    lastname,
    message,
    phoneNo,
    countrycode
  ) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>We’ve Received Your Message!</title>
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
            }
    
            .header {
                background-color: #FFD60A;
                padding: 15px;
                border-radius: 8px 8px 0 0;
                text-align: center;
            }
    
            .header h1 {
                margin: 0;
                font-size: 24px;
                color: #000;
                font-weight: bold;
            }
    
            .content {
                padding: 20px;
                text-align: left;
            }
    
            .content p {
                margin-bottom: 16px;
                font-size: 16px;
                color: #555;
            }
    
            .content .highlight {
                font-weight: bold;
                color: #333;
            }
    
            .cta {
                display: inline-block;
                padding: 12px 24px;
                background-color: #000;
                color: #FFD60A;
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
                text-align: center;
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
            <div class="header">
                <h1>LearnSphere</h1>
            </div>
            <div class="content">
                <p>Hi <span class="highlight">${firstname} ${lastname}</span>,</p>
                <p>Thank you for getting in touch with us! We’ve received your message and one of our team members will reach out to you shortly.</p>
                <p><strong>Here are the details you provided:</strong></p>
                <p><span class="highlight">Name:</span> ${firstname} ${lastname}</p>
                <p><span class="highlight">Email:</span> ${email}</p>
                <p><span class="highlight">Phone Number:</span> ${countrycode} ${phoneNo}</p>
                <p><span class="highlight">Message:</span> ${message}</p>
                <p>We’re here to help and look forward to assisting you soon. In the meantime, feel free to explore more about what LearnSphere offers.</p>
            </div>
            <div class="support">
                If you have additional questions or need immediate help, don’t hesitate to reach out at <a href="mailto:info@learnsphere.com">info@learnsphere.com</a>. We’re always happy to assist!
            </div>
        </div>
    </body>
    
    </html>`;
  };
  