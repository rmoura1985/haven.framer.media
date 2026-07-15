import{t as e}from"./rolldown-runtime.myuD9Iuq.mjs";function t(e,t){return{customHTMLBodyEnd:`<script>
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
  const refKey = 'ref';

  // Store UTM and ref values from URL
  (function () {
    const urlParams = new URLSearchParams(window.location.search);
    let hasNewUTM = false;

    utmKeys.forEach(key => {
      if (urlParams.has(key)) {
        hasNewUTM = true;
      }
    });

    if (hasNewUTM) {
      utmKeys.forEach(key => {
        const value = urlParams.get(key);
        if (value) {
          localStorage.setItem(key, value);
        }
      });
    }

    if (urlParams.has(refKey)) {
      const ref = urlParams.get(refKey);
      if (ref) {
        localStorage.setItem(refKey, ref);
      }
    }
  })();

  function applyParamsToButtons() {
    const storedParams = new URLSearchParams();

    // Add UTM params from localStorage
    utmKeys.forEach(key => {
      const value = localStorage.getItem(key);
      if (value) {
        storedParams.set(key, value);
      }
    });

    // Add ref param from localStorage
    const ref = localStorage.getItem(refKey);
    if (ref) {
      storedParams.set(refKey, ref);
    }

    const buttons = document.querySelectorAll('a.buy-now');
    buttons.forEach(button => {
      try {
        const url = new URL(button.href);
        const params = new URLSearchParams(url.search);

        storedParams.forEach((value, key) => {
          params.set(key, value);
        });

        url.search = params.toString();
        button.href = url.toString();
      } catch (err) {
        console.warn('Param append error:', err);
      }
    });
  }

  window.addEventListener('DOMContentLoaded', applyParamsToButtons);

  const observer = new MutationObserver(() => {
    applyParamsToButtons();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
<\/script>`,description:`The Haven Framer template is perfect for luxury real estate agents and developers who need an elegant, high-converting website to showcase properties and captivate discerning clients.`,favicon:`https://framerusercontent.com/assets/qTGMtIi1C6cZyjcxCsI7hHxInI.png`,robots:`max-image-preview:large`,title:`Haven - Real Estate Website Template for Framer`}}var n=e((()=>{}));function r(e,n){return{breakpoints:[{hash:`72rtr7`,mediaQuery:`(min-width: 1200px)`},{hash:`1q94wgs`,mediaQuery:`(min-width: 810px) and (max-width: 1199.98px)`},{hash:`7etcj0`,mediaQuery:`(max-width: 809.98px)`}],description:t(e,n).description,elements:{cHC1ENJdR:`introduction`,dsoivwFoB:`footer`,i8UzHDmiI:`vision`,Omdy7xpoY:`faqs`,qHuCxRDrk:`features`,QSbbXKrqR:`hero`,tf0C9tHnt:`properties`,TfZf52o5C:`properties-1`},robots:`max-image-preview:large`,serializationId:`framer-aXrN7`,title:t(e,n).title||`Home`,viewport:`width=device-width`}}var i,a,o=e((()=>{n(),i=1,a={exports:{metadataVersion:{type:`variable`,annotations:{framerContractVersion:`1`}},default:{type:`function`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}));export{i,o as n,r,a as t};
//# sourceMappingURL=augiA20Il.xRTXE2M1.mjs.map