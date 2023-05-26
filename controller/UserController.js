const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const user = require("../models/UserModel");






// Register user
exports.createUser = catchAsyncErrors(async(req, res, next) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);
        const user = await user.create({
            name,
            email,
            password,
          
        });
    } catch (error) {
        console.log(error);
    }

    res.status(201).json({
        success: true,
    });

});

// user login
exports.loginUser = catchAsyncErrors(async(req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please enter the email & password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(
            new ErrorHandler("User is not found with this email & password", 401)
        );
    }
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(
            new ErrorHandler("User is not found with this email & password", 401)
        );
    }

    sendToken(user, 201, res);
});

// logout user

exports.logoutUser = catchAsyncErrors(async(req, res, next) => {
    res.clearCookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "You are logged out successfully",
    });
});



