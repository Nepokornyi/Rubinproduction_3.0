"use client";

import { useState } from "react";

export function OptionalBooking({ bookingUrl }: { bookingUrl: string }) {
  const [emailChosen, setEmailChosen] = useState(false);
  return <div className="optional-booking">
    <p>We’ll reply by email. Want to get things moving sooner? You can also book an optional 30-minute creative call. Please book with the same email you used in your enquiry.</p>
    <div className="optional-booking__actions">
      <a className="button button--primary" href={bookingUrl} target="_blank" rel="noreferrer">Book a 30-minute call <span aria-hidden="true">↗</span></a>
      <button type="button" className="button button--secondary" onClick={() => setEmailChosen(true)}>Email is fine for now</button>
    </div>
    {emailChosen && <p role="status">All set — no call is required. We’ll continue by email.</p>}
  </div>;
}
