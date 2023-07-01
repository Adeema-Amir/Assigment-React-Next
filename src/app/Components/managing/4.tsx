"use client"
import { useState } from 'react';
import Chat from './4Chat';
import ContactList from './4ContactList';

export default function Four() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat contact={to} />
    </div>
  )
}

const contacts = [
  { name: 'AdeemaAmir', email: 'adeemaamir1722@gmail.com' },
  { name: 'AdeemaAmir240', email: 'adeemaamir240@gmail.com' },
  { name: 'LalaLala', email: 'lala708489@gmail.com' }
];
