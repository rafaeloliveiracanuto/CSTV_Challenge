import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MatchCard from '..';
import { styles } from '../styles';

describe('MatchCard component', () => {
  const renderMatchCardComponent = (props) => {
    return render(
      <MatchCard
        leagueImage={props.leagueImage}
        leagueName={props.leagueName}
        serieName={props.serieName}
        firstTeamImage={props.firstTeamImage}
        firstTeamName={props.firstTeamName}
        secondTeamImage={props.secondTeamImage}
        secondTeamName={props.secondTeamName}
        date={props.date}
        onPress={props.onPress}
      />,
    );
  };

  it('should render league image and text correctly', () => {
    const leagueImage = 'https://example.com/league-image.jpg';
    const leagueName = 'Premier League';
    const serieName = 'Season 2023';
    const {getByTestId, getByText} = renderMatchCardComponent({
      leagueImage,
      leagueName,
      serieName,
    });

    const leagueImageComponent = getByTestId('league-image');
    expect(leagueImageComponent.props.source.uri).toBe(leagueImage);
    const leagueAndSerieTextComponent = getByTestId('league-and-serie-text');
    expect(leagueAndSerieTextComponent.props.children).toBe(
      `${leagueName} ${serieName}`,
    );
  });

  it('should render circle placeholder when league image is not provided', () => {
    const {getByTestId} = renderMatchCardComponent({});

    const circlePlaceholderComponent = getByTestId('circle-placeholder');
    expect(circlePlaceholderComponent).toBeTruthy();
  });

  it('should render date correctly', () => {
    const date = 'July 15, 2023';
    const {getByText, getByTestId} = renderMatchCardComponent({date});

    const dateContainerComponent = getByTestId('date-container');
    const dateTextComponent = getByText(date);
    expect(dateContainerComponent).toBeTruthy();
    expect(dateTextComponent).toBeTruthy();
  });

  it('should apply liveContainer style when date is "AGORA"', () => {
    const date = 'AGORA';
    const {getByTestId} = renderMatchCardComponent({date});

    const dateContainerComponent = getByTestId('date-container');
    expect(dateContainerComponent.props.style).toContainEqual(
      expect.objectContaining({...styles.liveContainer}),
    );
  });

  it('should call onPress when the component is pressed', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = renderMatchCardComponent({onPress: onPressMock});

    const matchCardContainerComponent = getByTestId('match-card-container');
    fireEvent.press(matchCardContainerComponent);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
