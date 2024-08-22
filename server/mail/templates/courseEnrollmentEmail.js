exports.courseEnrollmentEmail = (courseName, name) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Welcome to Your New Course!</title>
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
    
            .header {
                background-color: #FFD60A;
                padding: 15px;
                border-radius: 8px 8px 0 0;
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
                <h1>Welcome to LearnSphere!</h1>
            </div>
            <div class="content">
                <p>Hi <span class="highlight">${name}</span>,</p>
                <p>Congratulations on enrolling in <span class="highlight">"${courseName}"</span>! We’re thrilled to have you on board and can’t wait for you to start your learning journey with us.</p>
                <p>To get started, simply log in to your dashboard and access all your course materials.</p>
                <a class="cta" href="https://learnsphere.com/dashboard">Go to Dashboard</a>
            </div>
            <div class="support">
                If you have any questions or need help, don’t hesitate to reach out at <a href="mailto:info@learnsphere.com">info@learnsphere.com</a>. We’re here to support you!
            </div>
        </div>
    </body>
    
    </html>`;
  };
  