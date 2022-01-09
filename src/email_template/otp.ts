function otp_template(form: any){
    const data = `
        Hello "${form.name}"!
        Your OTP
        "${form.otp}"
        Regards,
        #WNC
        
        ----
        WNC - Support Team
        Hotline: (+84)000 111 000
        
        Follow Us at:
        - Facebook: https://facebook.com/groups/wnc
        - Youtube: https://www.youtube.com/channel/wnc
        - Instagram: https://instagram.com/wnc'
        `
        return data;
    }

export default {otp_template}