const nodemailer =  require("nodemailer");

const sendemail = async(email,otp)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        to:email,
        subject:"otp verification nsec",
        text:`your otp ${otp}`,
    });
};
module.exports = sendemail;