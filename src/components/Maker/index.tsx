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
import { Camping } from '../../types/Camping';

const Maker = ({ authService }: any) => {
  const [cards, setCards] = useState<Camping[]>([
    {
      id: '1',
      theme: 'dark',
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
    {
      id: '2',
      theme: 'light',
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
    {
      id: '3',
      theme: 'colorful',
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
  ]);

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

  const addCard = (card: Camping) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
