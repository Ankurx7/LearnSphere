const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
	  <meta charset="UTF-8">
	  <title>Your OTP Code</title>
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
		  font-size: 24px;
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
		<div class="message">Your OTP Code</div>
		<div class="body">
		  <p>Hello,</p>
		  <p>We’re excited to have you join LearnSphere! Please use the following OTP to complete your account setup:</p>
		  <h2 class="highlight">${otp}</h2>
		  <p>This OTP is valid for 5 minutes. If you did not request this, please ignore this email.</p>
		  <p>Once your account is verified, you’ll gain full access to all the learning resources on our platform.</p>
		</div>
		<div class="support">
		  Need help? Feel free to reach out to us at <a href="mailto:info@learnsphere.com">info@learnsphere.com</a>. We're here to assist!
		</div>
	  </div>
	</body>
	
	</html>`;
  };
  
  module.exports = otpTemplate;
  