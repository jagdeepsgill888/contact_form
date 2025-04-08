import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Icon, Button } from 'react-bulma-components';

export function SubscriberForm() {
    const [message, setMessage] = useState("");

    return <form onSubmit={event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
    }}>
      <Form.Field>
        <Form.Label>Full name</Form.Label>
        <Form.Control>
          <Form.Input
            color="success"
            name="username"
          />
          <Icon align="left" size="small">
            <i className="fas fa-user" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-check" />
          </Icon>
        </Form.Control>
      </Form.Field>

      <Form.Field>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control>
          <Form.Input
            type="tel"
            name="phone"
            placeholder="e.g 555-421-6423"
            color="primary"
          />
          <Icon align="left" size="small">
            <i className="fas fa-phone" />
          </Icon>
        </Form.Control>
      </Form.Field>

      <Form.Field>
        <Form.Label>Email</Form.Label>
        <Form.Control>
          <Form.Input
            color="success"
            name="email"
            placeholder="e.g amy@gmail.com"
          />
          <Icon align="left" size="small">
            <i className="fas fa-envelope" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-exclamation-triangle" />
          </Icon>
        </Form.Control>
      </Form.Field>

      <Form.Field>
        <Form.Label>Subject</Form.Label>
        <Form.Field kind="group">
          <Form.Control>
            <Form.Select
              name="subject"
            >
              <option value="">Select a subject</option>
              <option value="Catering Booking">Catering Booking</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Marketing">Marketing</option>
            </Form.Select>
          </Form.Control>
          <Form.Control fullwidth loading>
            <Form.Input placeholder="Topic of Conversation" />
          </Form.Control>
        </Form.Field>
      </Form.Field>

      <Form.Field>
        <Form.Label>If Catering, enter date Date</Form.Label>
        <Form.Control>
          <Form.Input
            type="date"
            name="cateringDate"
            color="primary"
          />
          <Icon align="left" size="small">
            <i className="fas fa-calendar-alt" />
          </Icon>
        </Form.Control>
        <Form.Help color="success">Date is available</Form.Help>
      </Form.Field>

      <Form.Field>
        <Form.Label>Number of guest</Form.Label>
        <Form.Control>
          <Form.Input
            type="number"
            name="numberOfGuest"
            min="1"
            placeholder="e.g for '50' guest"
            color="primary"
          />
          <Icon align="left" size="small">
            <i className="fas fa-users" />
          </Icon>
        </Form.Control>
      </Form.Field>

      <Form.Field>
        <Form.Label>Message</Form.Label>
        <Form.Control>
          <Form.Textarea
            name="message"
            value={message}
            onChange={(e) => {
              return setMessage(e.target.value);
            }}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field kind="group">
        <Form.Control>
          <Button color="link">Submit</Button>
        </Form.Control>
        <Form.Control>
          <Button color="link" colorVariant="light">
            Cancel
          </Button>
        </Form.Control>
      </Form.Field>


    </form>

    
}