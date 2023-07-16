import React from 'react';
import {render} from '@testing-library/react-native';
import Match from '..';
import TeamItem from '../../TeamItem';

describe('Match', () => {
  const renderMatchComponent = props => {
    return render(
      <Match
        firstTeamImage={props.firstTeamImage}
        firstTeamName={props.firstTeamName}
        secondTeamImage={props.secondTeamImage}
        secondTeamName={props.secondTeamName}
      />,
    );
  };

  it('should render the first team name and image correctly', () => {
    const firstTeamImage = 'https://example.com/first-team-image.jpg';
    const firstTeamName = 'First Team';
    const {getByTestId, getByText} = renderMatchComponent({
      firstTeamImage,
      firstTeamName,
    });

    const firstTeamImageComponent = getByTestId('team-image');
    expect(firstTeamImageComponent.props.source.uri).toBe(firstTeamImage);
    const firstTeamNameComponent = getByText(firstTeamName);
    expect(firstTeamNameComponent).toBeTruthy();
  });

  it('should render the second team name and image correctly', () => {
    const secondTeamImage = 'https://example.com/second-team-image.jpg';
    const secondTeamName = 'Second Team';
    const {getByTestId, getByText} = renderMatchComponent({
      secondTeamImage,
      secondTeamName,
    });

    const secondTeamImageComponent = getByTestId('team-image');
    expect(secondTeamImageComponent.props.source.uri).toBe(secondTeamImage);
    const secondTeamNameComponent = getByText(secondTeamName);
    expect(secondTeamNameComponent).toBeTruthy();
  });

  it('should render "vs" text correctly', () => {
    const {getByText} = renderMatchComponent({});

    const vsTextComponent = getByText('vs');
    expect(vsTextComponent).toBeTruthy();
  });

  it('should render default team names when not provided', () => {
    const {queryAllByText} = renderMatchComponent({});

    const firstTeamNameComponents = queryAllByText('Time');
    expect(firstTeamNameComponents.length).toBeGreaterThan(0);
    const secondTeamNameComponents = queryAllByText('Time');
    expect(secondTeamNameComponents.length).toBeGreaterThan(0);
  });

  it('should render the circle component when image is not provided', () => {
    const {queryByTestId} = render(<TeamItem image="" text="Team" />);

    const imageComponent = queryByTestId('team-image');
    expect(imageComponent).toBeNull();
    const circleComponent = queryByTestId('team-circle');
    expect(circleComponent).toBeTruthy();
  });
});
