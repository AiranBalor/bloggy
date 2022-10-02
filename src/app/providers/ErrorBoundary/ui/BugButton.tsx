import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

interface BugButtonProps {
  className?: string
}

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);

  const makeError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const { t } = useTranslation();
  return (
    <Button onClick={makeError} className={classNames('', {}, [className])}>
      Throw error
    </Button>
  );
};
