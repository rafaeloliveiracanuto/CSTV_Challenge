import React from 'react';
import {render} from '@testing-library/react-native';
import TeamItem from '../index';

describe('TeamItem', () => {
  const teamItemProps = {
    image: 'https://example.com/team-image.jpg',
    text: 'Team Name',
  };

  test('renders with image and text', () => {
    const {queryByTestId, getByText} = render(<TeamItem {...teamItemProps} />);

    const imageElement = queryByTestId('team-image');
    expect(imageElement.props.source.uri).toBe(teamItemProps.image || null);

    const textElement = getByText(teamItemProps.text);
    expect(textElement).toBeTruthy();
  });

  test('renders with default text when text prop is not provided', () => {
    const {getByText} = render(<TeamItem image={teamItemProps.image} />);

    const defaultTextElement = getByText('Time');
    expect(defaultTextElement).toBeTruthy();
  });

  test('should render the circle component when image is not provided', () => {
    const {queryByTestId} = render(<TeamItem text={teamItemProps.text} />);

    const imageElement = queryByTestId('team-image');
    expect(imageElement).toBeNull();
    const circleComponent = queryByTestId('team-circle');
    expect(circleComponent).toBeTruthy();
  });
});
