const { signUpWeb, loginWeb } = require("../controllers/authController");

// Mock required modules or dependencies if needed
jest.mock("../models/user");
jest.mock("bcrypt");
jest.mock("jsonwebtoken");
jest.mock("../utils/string");
jest.mock("../utils/email");
jest.mock("../utils/otpgenerator");

describe("Authentication API Tests", () => {
  test("Signup (Web)", async () => {
    // Mock req and res objects, and test the signUpWeb function
    const req = {
      body: {
        email: "test@example.com",
        password: "password",
        name: "Test User",
      },
    };
    const res = {
      cookie: jest.fn(),
      json: jest.fn(),
    };

    await signUpWeb(req, res);

    expect(res.json).toHaveBeenCalledWith({ message: "Signup successful" });
  })
});
