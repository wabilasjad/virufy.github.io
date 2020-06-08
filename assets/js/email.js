function generateEmail(username) {
    /**
     * generateEmail - simple function to return a virufy.org email with specified username
     * INPUTS
     * - `username` (str): The first part of the email e.g. 'abc' in 'abc@xyz.com'
     * 
     * OUTPUTS
     * - Virufy email with specified username
     */
    const domain = 'virufy.org';
    return username + '@' + domain;
}

function injectEmails() {
    /** 
     * injectEmails - identifies all DOM elements with class of `hidden-mail` and dynamically
     * adds `mailto` attribute to them using their `data-username` attribute. Will also add the
     * generated email as innerHTML if `data-inline` attribute of DOM element is `true`. 
    */
    let mails = document.getElementsByClassName('hidden-mail');
    for (let i = 0; i < mails.length; i++) {
        let injected_email = generateEmail(mails[i].getAttribute("data-username"));
        mails[i].setAttribute('href', 'mailto:' + injected_email);
        if (mails[i].getAttribute("data-inline").toLowerCase() === "true")
            mails[i].innerHTML = injected_email;
    }
}

// This function will be run on all pages
injectEmails();