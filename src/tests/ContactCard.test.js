import { cleanup, render, screen } from "@testing-library/react";
import ContactCard from "../ContactCard";

import contactData from "../data/contactData";

const contactInfo = contactData[0];

afterEach(() => {
  cleanup();
});

test("should render contact card component", () => {
  render(
    <ContactCard
      contactMethod={contactInfo.contactMethod}
      link={contactInfo.link}
    />
  );

  const contactCardElement = screen.getByTestId(
    `contactCard-${contactInfo.contactMethod}`
  );

  expect(contactCardElement).toBeInTheDocument();
});

test("should render all contact icons", () => {
  const iconElements = [];

  contactData.forEach((contact) => {
    render(
      <ContactCard contactMethod={contact.contactMethod} link={contact.link} />
    );
    const element = screen.getByTestId(`${contact.contactMethod}-icon`);
    iconElements.push(element);
  });

  expect(iconElements.length).toBe(contactData.length);
});

test("should render applicable contact icon", () => {
  render(
    <ContactCard
      contactMethod={contactInfo.contactMethod}
      link={contactInfo.link}
    />
  );

  const iconElement = screen.getByTestId(`${contactInfo.contactMethod}-icon`);

  expect(iconElement).toBeInTheDocument();
});
