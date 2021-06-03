import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Editor from '../Editor';
import Preview from '../Preview';
import styles from './Maker.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userSlice';
import { useHistory } from 'react-router';
import { RootState } from '../../redux/rootReducer';
import { Camping, Campings } from '../../types/Camping';

const Maker = ({ FileInput, authService }: any) => {
  const [cards, setCards] = useState<Campings>({
    1: {
      id: '1',
      theme: 'Dark',
      name: 'Jessie M. Honeyman Memorial State Park',
      location: 'Florence, OR',
      websiteURL:
        'https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95',
      site: '290 F',
      checkIn: 'Fri May 07 2021',
      checkOut: 'Sun May 09 2021',
      activities: 'biking, kayaking, swimming',
      placeVisited: 'Sand Dune Day-use Area',
      fileName: 'camp_stamp',
      fileURL: null,
    },
    2: {
      id: '2',
      theme: 'Light',
      name: 'Tumalo State Park',
      location: 'Bend, OR',
      websiteURL:
        'https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=34',
      site: '080 A',
      checkIn: 'Fri May 21 2021',
      checkOut: 'Sun May 23 2021',
      activities: 'biking, tubing',
      placeVisited: 'Deschutes River Trail',
      fileName: 'camp_stamp',
      fileURL: null,
    },
    3: {
      id: '3',
      theme: 'Colorful',
      name: 'Cape Lookout State Park',
      location: 'Tillamook, OR',
      websiteURL:
        'https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=134',
      site: 'B14 B',
      checkIn: 'Fri Sep 10 2021',
      checkOut: 'Sun Sep 12 2021',
      activities: 'hiking, swimming',
      placeVisited: 'Beach, historic lighthouse',
      fileName: 'camp_stamp',
      fileURL: 'or_state_parks.png',
    },
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
    dispatch(logout());
    history.push('/');
  };

  const user = useSelector((state: RootState) => state.user.uid);

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  });

  const createOrUpdateCard = (card: Camping) => {
    setCards((cards) => {
      const updatedCards = { ...cards };
      console.log('update', updatedCards);
      updatedCards[card.id] = card;
      return updatedCards;
    });
  };

  const deleteCard = (card: Camping) => {
    setCards((cards) => {
      const updatedCards = { ...cards };
      console.log('delete', updatedCards);
      delete updatedCards[card.id];
      return updatedCards;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
