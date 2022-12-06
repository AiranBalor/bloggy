import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HDropdown } from 'shared/ui/HDropdown/HDropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(classes.Navbar, {}, [className])}>
        <Text
          title="Bloggy"
          size={TextSize.L}
          theme={TextTheme.SECONDARY}
          className={classes.logoText}
        />
        <AppLink to={RoutePath.article_create} className={classes.createLink} theme={AppLinkTheme.SECONDARY}>
          {t('Create article')}
        </AppLink>
        <HDropdown
          className={classes.dropdown}
          direction="bottom_left"
          trigger={(
            <Avatar
              size={30}
              src={authData.avatar}
              alt="Аватар пользователя"
            />
          )}
          items={
            [
              {
                content: t('Профиль'),
                href: RoutePath.profile + authData.id,
              },
              {
                content: t('Выйти'),
                onClick: onLogout,
              },
            ]
          }
        />
      </header>
    );
  }

  return (
    <header className={classNames(classes.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={classes.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  );
});
