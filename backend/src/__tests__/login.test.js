const userController = require("../controllers/authController");
const User = require('../models/user'); // Import your User model
const bcrypt = require('bcrypt');

// Mock the User model
jest.mock('../models/user', () => {
  return {
    findOne: jest.fn(),
  };
});

// Mock bcrypt's compare function
jest.mock('bcrypt', () => {
  return {
    compare: jest.fn(),
  };
});



describe("Login (Web)", () => {
  it('Success: true and user data when login is successful', async () => {
    const req = {
      body: {
        email: "test@example.com",
        password: "password",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock the User.findOne to return a user
    User.findOne.mockResolvedValue({ email: "test@example.com", password: "hashPassword" });

    // Mock bcrypt.compare to return true, indicating a correct password
    bcrypt.compare.mockResolvedValue(true);

    // Call the loginWeb function
    await userController.loginWeb(req, res);

    // await loginWeb(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Login failed" });
  });


  it('should respond with a 404 status code when the user is not found', async () => {
    const req = {
      body: {
        username: 'nonexistentUsername',
        password: 'somePassword',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock the User.findOne to return null, indicating no user found
    User.findOne.mockResolvedValue(null);

    await userController.loginWeb(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ success: false, error: 'User not found' });
  });


  it('should respond with a 401 status code when the password is incorrect', async () => {
    const req = {
      body: {
        username: 'test@example.com',
        password: 'incorrectPassword',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock the User.findOne to return a user
    User.findOne.mockResolvedValue({ username: 'test@example.com', password: 'hashedPassword' });

    // Mock bcrypt.compare to return false, indicating an incorrect password
    bcrypt.compare.mockResolvedValue(false);

    await userController.loginWeb(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: "Incorrect password", success: false });
  });


});