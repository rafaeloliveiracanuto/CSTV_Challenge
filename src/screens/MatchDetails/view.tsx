import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Match from '../../components/Match';
import PlayerCard from '../../components/PlayerCard';
import {MatchDetailsViewProps, PlayerCardRow} from './Models';
import {styles} from './styles';

const data: PlayerCardRow[] = [
  {
    id: '1',
    playerImage: 'https://www.escudosfc.com.br/images/celtic.png',
    playerName: 'Player 1',
    playerNickname: 'Nickname 1',
    isLeft: true,
    playerImage2: 'https://www.escudosfc.com.br/images/celtic.png',
    playerName2: 'Player 2',
    playerNickname2: 'Nickname 2',
    isLeft2: false,
  },
  {
    id: '2',
    playerImage: 'https://www.escudosfc.com.br/images/celtic.png',
    playerName: 'Player 3',
    playerNickname: 'Nickname 3',
    isLeft: true,
    playerImage2: 'https://www.escudosfc.com.br/images/celtic.png',
    playerName2: 'Player 4',
    playerNickname2: 'Nickname 4',
    isLeft2: false,
  },
  {
    id: '3',
    playerImage: 'https://www.escudosfc.com.br/images/celtic.png',
    playerName: 'Player 5',
    playerNickname: 'Nickname 5',
    isLeft: true,
    playerImage2: 'https://www.escudosfc.com.br/images/celtic.png',
    playerName2: 'Player 6',
    playerNickname2: 'Nickname 6',
    isLeft2: false,
  },
];

const MatchDetailsView: FC<MatchDetailsViewProps> = ({handleNavigate}) => {

  const renderPlayerCards = ({item}: {item: PlayerCardRow}) => {
    return (
      <View style={styles.playersContainer}>
        <PlayerCard
          playerImage={item.playerImage}
          playerName={item.playerName}
          playerNickname={item.playerNickname}
          isLeft={item.isLeft}
        />
        <PlayerCard
          playerImage={item.playerImage2}
          playerName={item.playerName2}
          playerNickname={item.playerNickname2}
          isLeft={item.isLeft2}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: 20}}>
        <Match
          firstTeamName={'Time 1'}
          firstTeamImage={'https://www.escudosfc.com.br/images/celtic.png'}
          secondTeamName={'Time 2'}
          secondTeamImage={'https://www.escudosfc.com.br/images/psg.png'}
        />
      </View>
      <Text style={styles.dateText}>Hoje, 21:00</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderPlayerCards}
      />
    </View>
  );
};

export default MatchDetailsView;
