'use client';

import { useEffect } from 'react';

export default function KitForm() {
  useEffect(() => {
    // Load the Kit.com script
    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <form 
      action="https://app.kit.com/forms/8051177/subscriptions" 
      className="seva-form formkit-form" 
      method="post" 
      data-sv-form="8051177" 
      data-uid="81755b57c1" 
      data-format="modal" 
      data-version="5" 
      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! You are now on the waitlist.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
      min-width="400 500 600 700 800"
    >
      <div data-style="clean">
        <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
        <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
          <div className="formkit-field">
            <input 
              className="formkit-input" 
              name="email_address" 
              aria-label="Email Address" 
              placeholder="Email Address" 
              required="" 
              type="email" 
              style={{ color: 'rgb(0, 0, 0)', borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', fontWeight: '400' }}
            />
          </div>
          <div className="formkit-field">
            <input 
              className="formkit-input" 
              aria-label="First Name" 
              name="fields[first_name]" 
              placeholder="First Name" 
              type="text" 
              spellCheck="false" 
              style={{ color: 'rgb(0, 0, 0)', borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', fontWeight: '400' }}
            />
          </div>
          <button 
            data-element="submit" 
            className="formkit-submit formkit-submit" 
            style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(135, 16, 255)', borderRadius: '4px', fontWeight: '400' }}
          >
            <div className="formkit-spinner">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span>Subscribe</span>
          </button>
        </div>
        <div className="formkit-powered-by-convertkit-container">
          <a 
            href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic" 
            data-element="powered-by" 
            className="formkit-powered-by-convertkit" 
            data-variant="dark" 
            target="_blank" 
            rel="nofollow"
          >
            Built with Kit
          </a>
        </div>
      </div>
    </form>
  );
} 