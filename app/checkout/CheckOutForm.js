'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import style from './CheckOutForm.module.scss';

export default function CheckOutForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const validate = () => {
    return (
      firstName.length &&
      lastName.length &&
      email.length &&
      address.length &&
      city.length &&
      postalCode.length &&
      country.length &&
      creditCard.length &&
      expirationDate.length &&
      securityCode.length
    );
  };

  return (
    <form className={style.formContainer}>
      <h2>Billing details</h2>
      <label>
        First name
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.currentTarget.value)}
          required
        />
      </label>
      <label>
        Last name
        <input
          value={lastName}
          onChange={(event) => setLastName(event.currentTarget.value)}
          required
        />
      </label>
      <label>
        E-mail address
        <input
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          required
        />
      </label>
      <label>
        Address
        <input
          value={address}
          onChange={(event) => setAddress(event.currentTarget.value)}
          required
        />
      </label>
      <label>
        City
        <input
          value={city}
          onChange={(event) => setCity(event.currentTarget.value)}
          required
        />
      </label>
      <label>
        Postal Code
        <input
          value={postalCode}
          onChange={(event) => setPostalCode(event.currentTarget.value)}
          required
        />
      </label>
      <label>
        Country
        <input
          value={country}
          onChange={(event) => setCountry(event.currentTarget.value)}
          required
        />
      </label>
      <h2>Payment method</h2>
      <label>
        Card Number
        <input
          value={creditCard}
          onChange={(event) => setCreditCard(event.currentTarget.value)}
          required
        />
      </label>
      <label>
        Expiration date
        <input
          value={expirationDate}
          onChange={(event) => setExpirationDate(event.currentTarget.value)}
          required
        />
      </label>
      <label>
        Security code
        <input
          value={securityCode}
          onChange={(event) => setSecurityCode(event.currentTarget.value)}
          required
        />
      </label>

      <button
        type="button"
        disabled={!validate()}
        onClick={() => router.push('/thank-you')}
      >
        Place order
      </button>
    </form>
  );
}
