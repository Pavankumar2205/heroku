const nodemailer= require('nodemailer')
const a = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"pavansairigapu12345@gmail.com",
        pass:"tlvabdbwhgrzrdiv"
    }
})

const b ={
    from:"pavansairigapu12345@gmail.com",
    to:"s180525@rguktsklm.ac.in",
    subject:"HOW ARE YOU MAN",
    text:"mail from nodemailer"
}

a.sendMail(b,(err,info)=>{
    if(err)
    console.log(err);
    return
    console.log(info.response);
})