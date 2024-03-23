const {User} = require('../models/');
const bcrypt = require('bcrypt');


const registerUser = async (UserDetails) => {
    try {
        const {email,password,name}=UserDetails

        let hashedPassword= await bcrypt.hash(password,10)
        

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            throw new Error('User already exists');
            
        }
        const newUser = await User.create({
            email: email,
            Password: hashedPassword,
            Name: name,
        });
        return newUser;
    
    } catch (error) {
        
        throw new Error(error);
    }
};

const loginUser = async (UserDetails) => {
    try {
        const {email,password}=UserDetails
     
        const existingUser = await User.findOne({ where: { email } });
        if (!existingUser) {
            throw new Error('User doesnt exists');
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.Password);
        console.log("isPasswordValid - ",isPasswordValid)
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }
        return existingUser;
    } catch (error) {
        // Handle errors
        console.log("error - ",error.message)
        throw new Error(error.message)
    }
};

module.exports = {
    registerUser,
    loginUser
};
