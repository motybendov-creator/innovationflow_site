

## Contact Form → mailto Link

Replace the current no-op form with a `mailto:` link that opens the user's email client with pre-filled subject and body from the form fields, plus a toast confirming the action.

### Changes

**`src/components/ContactSection.tsx`**:
- Add `useState` for name, email, company, message fields
- On submit, construct a `mailto:INFO@innovationflow.ro` link with subject and body containing the form data
- Open it via `window.location.href`
- Show a toast: "Your email client has been opened. We will contact you shortly."
- Clear the form

**`src/lib/i18n.tsx`**:
- Add translations for `contact.success` (en/ro)

