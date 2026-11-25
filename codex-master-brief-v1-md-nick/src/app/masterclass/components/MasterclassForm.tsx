import Script from "next/script";

const FORM_ID = "6b049cacf2bf2efd7c1729b5";
const ff = `ff-${FORM_ID}`;
const FLODESK_CONFIG = "eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IiIsInJlZGlyZWN0VXJsIjoiIn0sImNvaSI6dHJ1ZSwic2hvd0ZvclJldHVyblZpc2l0b3JzIjp0cnVlLCJub3RpZmljYXRpb24iOnRydWUsImdkcHIiOnsiYWNjZXB0c01hcmtldGluZyI6ZmFsc2UsInByaXZhY3lQb2xpY3kiOnsiZW5hYmxlZCI6ZmFsc2UsIm1hbmRhdG9yeSI6ZmFsc2V9fSwidHJhY2tpbmdDb25maWciOnsibWV0YVBpeGVsSWQiOiIiLCJjb29raWVCYW5uZXJFbmFibGVkIjpmYWxzZSwiZ29vZ2xlQW5hbHl0aWNzSWQiOiIifX0=";

const flodeskEmbed = `
(function(w, d, t, h, s, n) {
  w.FlodeskObject = n;
  var fn = function() { (w[n].q = w[n].q || []).push(arguments); };
  w[n] = w[n] || fn;
  var f = d.getElementsByTagName(t)[0];
  var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
  var sm = d.createElement(t);
  sm.async = true;
  sm.type = 'module';
  sm.src = h + s + '.mjs' + v;
  f.parentNode.insertBefore(sm, f);
  var sn = d.createElement(t);
  sn.async = true;
  sn.noModule = true;
  sn.src = h + s + '.js' + v;
  f.parentNode.insertBefore(sn, f);
})(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
window.fd('form:handle', { formId: '${FORM_ID}', rootEl: '.${ff}' });
`;

export function MasterclassForm() {
  return (
    <>
      <div className={`${ff} masterclass-form`} data-ff-el="root" data-ff-version="3" data-ff-type="inline" data-ff-name="ribbonBanner" data-ff-stage="default">
        <div data-ff-el="config" data-ff-config={FLODESK_CONFIG} hidden />
        <div className={`${ff}__container`}>
          <form className={`${ff}__form`} action={`https://form.flodesk.com/forms/${FORM_ID}/submit`} method="post" data-ff-el="form">
            <div className={`${ff}__content fd-form-content`} data-ff-el="content">
              <div className={`${ff}__fields`} data-ff-el="fields">
                <div className={`${ff}__field fd-form-group`}>
                  <label htmlFor={`${ff}-email`} className={`${ff}__label fd-form-label field-label`}>Email address</label>
                  <input id={`${ff}-email`} className={`${ff}__control fd-form-control`} type="email" autoComplete="email" maxLength={255} name="email" placeholder="you@example.com" data-ff-tab="email::option1" required />
                </div>
                <input type="text" maxLength={255} name="confirm_email_address" style={{ display: "none" }} />
              </div>
              <div className={`${ff}__preference`}>
                <div className={`${ff}__preference-control`}>
                  <div className={`${ff}__preference-list`}>
                    <div className={`${ff}__preference-item`}>
                      <label className={`${ff}__form-check fd-form-check consent`}>
                        <input type="checkbox" name="preferences" className="fd-form-check__input" value="option1" data-ff-tab="option1:email:submit" />
                        <span className="fd-form-check__checkmark" aria-hidden="true" hidden />
                        <span className="fd-form-check__label">Also email me tutorials and offers from Nick Rubin and Kaiber. (Optional)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${ff}__footer`} data-ff-el="footer">
                <button type="submit" className={`${ff}__button fd-btn btn btn-form`} data-ff-el="submit" data-ff-tab="submit">
                  <span data-draw-element="editable">Send me the masterclass</span><span className="arrow" aria-hidden="true">↗</span>
                </button>
              </div>
            </div>
            <div className={`${ff}__success fd-form-success status`} data-ff-el="success" role="status">
              <div className={`${ff}__success-message`}>
                <div><div><div data-paragraph="true">Check your inbox and confirm your email. I’ll then send you the masterclass link.</div></div></div>
              </div>
            </div>
            <div className={`${ff}__error fd-form-error status`} data-ff-el="error" role="alert" />
          </form>
        </div>
      </div>
      <Script id="flodesk-masterclass-form">{flodeskEmbed}</Script>
    </>
  );
}
