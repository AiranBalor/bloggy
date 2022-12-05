import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HListBox } from 'shared/ui/HListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <Page>
      {t('Главная страница')}
      <HStack>
        <HListBox
          defaultValue="Выберите значение"
          value={undefined}
          onChange={(value: string) => {}}
          items={[
            { value: 'qweqew', content: 'qeqwewqewq' },
            { value: '1212312', content: '123123123', disabled: true },
            { value: 'qweqew1231231', content: 'qeqwewqewq12312121' },
          ]}
        />
      </HStack>
    </Page>
  );
};

export default MainPage;
