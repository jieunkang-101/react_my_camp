import React, { useCallback, useEffect, useState } from 'react';
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

const Maker = ({ FileInput, authService, cardRepository }: any) => {
  const [cards, setCards] = useState<Campings>({});
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = useCallback(() => {
    authService.logout();
    dispatch(logout());
    history.push('/');
  }, [authService, dispatch, history]);

  const userId = useSelector((state: RootState) => state.user.uid);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards: Campings) =>
      setCards(cards)
    );
    return () => stopSync(); // when component did upmount
  }, [userId, cardRepository]);

  useEffect(() => {
    if (!userId) {
      history.push('/');
    }
  }, [userId, history]);

  const createOrUpdateCard = (card: Camping) => {
    setCards((cards) => {
      const updatedCards = { ...cards };
      updatedCards[card.id] = card;
      return updatedCards;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card: Camping) => {
    setCards((cards) => {
      const updatedCards = { ...cards };
      delete updatedCards[card.id];
      return updatedCards;
    });
    cardRepository.removeCard(userId, card);
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
