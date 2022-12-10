import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { $api } from 'shared/api/api';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { profileReducer } from '../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profileTest: Profile = {
  id: '1',
  age: 30,
  first: 'BaseName',
  lastname: 'BaseLastName',
  username: 'Jykko',
  city: 'London',
  country: Country.Armenia,
  currency: Currency.EUR,
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profileTest,
      form: profileTest,
    },
    // помним про условную отрисовку: если для появления какого-либо тестируемого
    // элемента требуется соблюсти некое условие (данные должны ему удовлетворять)
    // то необходимо их подготовить для теста. Здесь кнопка не появиться, если id пользователя
    // не совпадает с id профиля.
    user: {
      authData: {
        id: '1',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('EditableProfileCard', () => {
  beforeEach(() => {
    componentRender(<EditableProfileCard id="1" />, options);
  });
  test('check cancel btn appears after click on edit btn', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument();
  });

  test('reset profile data then cancel editing', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstNameInput'));
    await userEvent.clear(screen.getByTestId('ProfileCard.LastNameInput'));
    await userEvent.type(screen.getByTestId('ProfileCard.FirstNameInput'), 'NewName');
    await userEvent.type(screen.getByTestId('ProfileCard.LastNameInput'), 'NewLastName');
    expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('NewName');
    expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('NewLastName');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));
    expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('BaseName');
    expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('BaseLastName');
  });
  test('validation check', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstNameInput'));
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));
    expect(screen.getByTestId('EditableProfileCard.Error.Paragrath')).toBeInTheDocument();
  });
  test('successful changes', async () => {
    const mockedRequest = jest.spyOn($api, 'put');
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstNameInput'));
    await userEvent.type(screen.getByTestId('ProfileCard.FirstNameInput'), 'NewName');
    expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('NewName');
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));
    expect(mockedRequest).toHaveBeenCalled();
  });
});
