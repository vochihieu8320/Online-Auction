function reject_template(form: any){
    const data = `
        Hello "${form.name}"!
        You cant bide ${form.product_name} anymore. Because the seller has already rejected your offer
        Hope you have a nice day
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

export default {reject_template}