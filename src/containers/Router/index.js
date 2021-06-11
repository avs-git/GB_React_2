import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '@containers/Layout';
import WelcomeScreen from '@components/WelcomeScreen';
import MessagePage from '@containers/MessagePage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConversations } from '@store/conversations';

// как бы получили залогиненного пользователя с сервера. Потом переедет в редукс
const user = {
  id: 1,
  name: 'LoggedUserName',
};

const getConversations = (state) => state.conversations;

const Router = () => {
  const conversationsList = useSelector(getConversations);
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  console.log('!!!! state', state);
  console.log('!!!! conversationsList', conversationsList);

  useEffect(() => {
    dispatch(fetchConversations());
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/">
          <Layout navItems={conversationsList}>
            <WelcomeScreen />
          </Layout>
        </Route>
        <Route path="/conversations/:conversationId">
          {(params) => (
            <Layout navItems={conversationsList}>
              <MessagePage {...params} user={user} />
            </Layout>
          )}
        </Route>
        <Route>
          <Layout navItems={conversationsList} isEmpty={true} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
