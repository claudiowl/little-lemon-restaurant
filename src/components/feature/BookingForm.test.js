// src/components/feature/BookingForm.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const availableTimes = ['17:00', '17:30', '18:00'];
  let updateTimesMock, submitFormMock;

  beforeEach(() => {
    updateTimesMock = jest.fn().mockResolvedValue();
    submitFormMock = jest.fn().mockResolvedValue();
  });

  it('sets initial time to first available time', async () => {
    await act(async () => {
      render(
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimesMock}
          submitForm={submitFormMock}
        />
      );
    });

    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect.value).toBe('17:00');
  });

  it('calls updateTimes when date changes and updates date and time', async () => {
    await act(async () => {
      render(
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimesMock}
          submitForm={submitFormMock}
        />
      );
    });

    const dateInput = screen.getByLabelText(/choose date/i);

    await act(async () => {
      fireEvent.change(dateInput, {
        target: { id: 'date', value: '2025-05-15' }
      });
    });

    await waitFor(() => {
      expect(updateTimesMock).toHaveBeenCalledWith('2025-05-15');
      expect(dateInput.value).toBe('2025-05-15');
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect.value).toBe('17:00');
    });
  });

  it('updates guests and occasion correctly', async () => {
    await act(async () => {
      render(
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimesMock}
          submitForm={submitFormMock}
        />
      );
    });

    const guestsInput = screen.getByLabelText(/number of guests/i);
    await act(async () => {
      fireEvent.change(guestsInput, { target: { id: 'guests', value: '3' } });
    });
    expect(guestsInput.value).toBe('3');

    const occasionSelect = screen.getByLabelText(/occasion/i);
    await act(async () => {
      fireEvent.change(occasionSelect, {
        target: { id: 'occasion', value: 'Anniversary' }
      });
    });
    expect(occasionSelect.value).toBe('Anniversary');
  });

  it('calls submitForm with correct data on submit', async () => {
    await act(async () => {
      render(
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimesMock}
          submitForm={submitFormMock}
        />
      );
    });

    const dateInput = screen.getByLabelText(/choose date/i);

    await act(async () => {
      fireEvent.change(dateInput, {
        target: { id: 'date', value: '2025-05-15' }
      });
    });

    await waitFor(() => expect(updateTimesMock).toHaveBeenCalled());

    const button = screen.getByRole('button', { name: /make your reservation/i });
    await act(async () => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(submitFormMock).toHaveBeenCalledWith({
        date: '2025-05-15',
        time: '17:00',
        guests: 1,
        occasion: 'Birthday'
      });
    });
  });
});
