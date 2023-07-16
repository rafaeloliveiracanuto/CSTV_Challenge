import React from 'react';
import {render} from '@testing-library/react-native';
import PlayerCard from '..';
import {styles} from '../styles';

describe('PlayerCard component', () => {
  const renderPlayerCardComponent = (props) => {
    return render(
      <PlayerCard
        playerImage={props.playerImage}
        playerName={props.playerName}
        playerNickname={props.playerNickname}
        isLeft={props.isLeft}
      />,
    );
  };

  it('should render player image and text correctly', () => {
    const playerImage = 'https://example.com/player-image.jpg';
    const playerName = 'John Doe';
    const playerNickname = 'JD';
    const isLeft = true;
    const {getByTestId, getByText} = renderPlayerCardComponent({
      playerImage,
      playerName,
      playerNickname,
      isLeft,
    });

    const playerImageComponent = getByTestId('player-image');
    expect(playerImageComponent.props.source.uri).toBe(playerImage);
    const playerNicknameComponent = getByTestId('player-card-nickname');
    expect(playerNicknameComponent.props.children).toBe(playerNickname);
    const playerNameComponent = getByTestId('player-card-name');
    expect(playerNameComponent.props.children).toBe(playerName);
  });

  it('should apply correct styles based on isLeft prop being true', () => {
    const playerImage = 'https://example.com/player-image.jpg';
    const playerName = 'John Doe';
    const playerNickname = 'JD';
    const isLeft = true;
    const {getByTestId} = renderPlayerCardComponent({
      playerImage,
      playerName,
      playerNickname,
      isLeft,
    });

    const containerComponent = getByTestId('player-card-container');
    expect(containerComponent.props.style).toMatchObject({
      ...styles.container,
      ...styles.left,
    });
    const imageContainerComponent = getByTestId('player-card-image-container');
    expect(imageContainerComponent.props.style).toMatchObject({
      ...styles.imageContainer,
      ...styles.imageLeft,
    });
    const nicknameComponent = getByTestId('player-card-nickname');
    expect(nicknameComponent.props.style).toMatchObject({
      ...styles.nickname,
      ...styles.textLeft,
    });
    const nameComponent = getByTestId('player-card-name');
    expect(nameComponent.props.style).toMatchObject({
      ...styles.name,
      ...styles.textLeft,
    });
  });

  it('should apply correct styles based on isLeft prop being false', () => {
    const playerImage = 'https://example.com/player-image.jpg';
    const playerName = 'John Doe';
    const playerNickname = 'JD';
    const isLeft = false;
    const {getByTestId} = renderPlayerCardComponent({
      playerImage,
      playerName,
      playerNickname,
      isLeft,
    });

    const containerComponent = getByTestId('player-card-container');
    expect(containerComponent.props.style).toMatchObject({
      ...styles.container,
      ...styles.right,
    });
    const imageContainerComponent = getByTestId('player-card-image-container');
    expect(imageContainerComponent.props.style).toMatchObject({
      ...styles.imageContainer,
      ...styles.imageRight,
    });
    const nicknameComponent = getByTestId('player-card-nickname');
    expect(nicknameComponent.props.style).toMatchObject({
      ...styles.nickname,
      ...styles.textRight,
    });
    const nameComponent = getByTestId('player-card-name');
    expect(nameComponent.props.style).toMatchObject({
      ...styles.name,
      ...styles.textRight,
    });
  });
});
